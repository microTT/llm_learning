import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import {
  attachDetailShards,
  DETAIL_ALLOWED_FIELDS,
  DETAIL_LIST_FIELDS,
  DETAIL_TEXT_FIELDS,
  hasMeaningfulDetail,
  listGraphNodes,
} from "../graph-core.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const dataDir = path.join(projectRoot, "data");
const graphPath = path.join(dataDir, "graph.json");
const detailIndexPath = path.join(dataDir, "detail-index.json");
const detailsDir = path.join(dataDir, "details");

const DETAIL_SPLIT_CONFIG = {
  leafBatchMinSize: 5,
  leafBatchMaxSize: 10,
};

async function main() {
  const existing = await loadExistingWorkspace();
  const combinedGraph = existing.detailShards.length
    ? attachDetailShards(existing.graphSource, existing.detailShards)
    : existing.graphSource;

  const planningGraph = clone(combinedGraph);
  delete planningGraph.details;

  const shardPlan = buildShardPlan(planningGraph);
  const detailIndex = buildDetailIndex(shardPlan);
  const detailShards = buildDetailShards(combinedGraph, shardPlan, existing.detailShards);
  const strippedGraph = buildStrippedGraph(planningGraph);

  await fs.mkdir(detailsDir, { recursive: true });

  await cleanupRemovedGeneratedFiles(existing.detailIndex, detailIndex);
  await cleanupLegacyPromptWorkspace();

  await writeJson(graphPath, strippedGraph);
  await writeJson(detailIndexPath, detailIndex);

  for (const shard of detailShards) {
    await writeJson(path.join(dataDir, shard.file), shard.content);
  }

  console.log(
    JSON.stringify(
      {
        graph: path.relative(projectRoot, graphPath),
        detailIndex: path.relative(projectRoot, detailIndexPath),
        shardCount: detailIndex.shards.length,
        detailsDir: path.relative(projectRoot, detailsDir),
        workflow: "edit data/details/*.json directly",
      },
      null,
      2
    )
  );
}

async function loadExistingWorkspace() {
  const graphSource = JSON.parse(await fs.readFile(graphPath, "utf8"));
  const detailIndex = await readJsonOptional(detailIndexPath);
  const detailShards = [];

  if (graphSource.details?.storage === "sharded" && detailIndex?.shards) {
    for (const shardMeta of detailIndex.shards) {
      const shard = await readJsonOptional(path.join(dataDir, shardMeta.file));
      if (shard) {
        detailShards.push(shard);
      }
    }
  }

  return { graphSource, detailIndex, detailShards };
}

function buildStrippedGraph(graphSource) {
  const stripped = clone(graphSource);

  for (const { node } of listGraphNodes(stripped)) {
    delete node.detail;
  }

  stripped.meta = {
    ...(stripped.meta || {}),
    version: 4,
    updatedAt: currentIsoDate(),
    description:
      "知识图谱结构写在 graph.json；节点 detail 存在 detail-index.json + details/*.json；知识补充直接维护 JSON 分片，不再生成外部 prompt 工作区。",
  };
  stripped.details = {
    storage: "sharded",
    indexFile: "detail-index.json",
    shardDir: "details",
    generator: "scripts/build-detail-workspace.mjs",
  };

  return stripped;
}

function buildShardPlan(graphSource) {
  const plan = [];

  for (const domain of graphSource.domains || []) {
    plan.push(
      createShardDescriptor({
        id: `domain-${domain.code}`,
        type: "domain-overview",
        fileName: `domain-${domain.code}`,
        label: `${domain.code}. ${domain.displayTitle || domain.title} / 概览`,
        domainCode: domain.code,
        domainTitle: domain.displayTitle || domain.title,
        moduleCode: null,
        moduleTitle: null,
        modulePathKey: null,
        targetPathKeys: collectDomainOverviewPathKeys(domain),
      })
    );

    for (const module of domain.modules || []) {
      plan.push(...collectLeafBatchShards({ domain, module }));
    }
  }

  return plan;
}

function collectDomainOverviewPathKeys(domain) {
  const pathKeys = [domain.pathKey];

  for (const module of domain.modules || []) {
    pathKeys.push(module.pathKey);
    for (const concept of module.concepts || []) {
      pathKeys.push(...collectParentConceptPathKeys(concept));
    }
  }

  return Array.from(new Set(pathKeys));
}

function collectParentConceptPathKeys(concept) {
  if (isLeafNode(concept)) {
    return [];
  }

  const pathKeys = [concept.pathKey];
  for (const child of concept.children || []) {
    pathKeys.push(...collectParentConceptPathKeys(child));
  }
  return pathKeys;
}

function collectLeafBatchShards({ domain, module }) {
  const shards = [];

  appendLeafBatchShards({
    domain,
    module,
    parentPathKey: module.pathKey,
    parentTitle: module.fullTitle,
    children: module.concepts || [],
    shards,
  });

  return shards;
}

function appendLeafBatchShards({ domain, module, parentPathKey, parentTitle, children, shards }) {
  const leaves = (children || []).filter(isLeafNode);
  if (leaves.length) {
    shards.push(
      ...createLeafBatchShards({
        domain,
        module,
        parentPathKey,
        parentTitle,
        leaves,
      })
    );
  }

  for (const child of children || []) {
    if (!isLeafNode(child)) {
      appendLeafBatchShards({
        domain,
        module,
        parentPathKey: child.pathKey,
        parentTitle: child.title,
        children: child.children || [],
        shards,
      });
    }
  }
}

function createLeafBatchShards({ domain, module, parentPathKey, parentTitle, leaves }) {
  if (!leaves.length) {
    return [];
  }

  const batchSizes = splitLeafBatchSizes(
    leaves.length,
    DETAIL_SPLIT_CONFIG.leafBatchMinSize,
    DETAIL_SPLIT_CONFIG.leafBatchMaxSize
  );
  const shards = [];
  let cursor = 0;
  const parentToken = toStableToken(parentPathKey);

  batchSizes.forEach((batchSize, batchIndex) => {
    const batchLeaves = leaves.slice(cursor, cursor + batchSize);
    cursor += batchSize;
    const batchNumber = batchIndex + 1;
    const idBase = `leaves-${domain.code}-${module.code}-${parentToken}-${batchNumber}`;

    shards.push(
      createShardDescriptor({
        id: idBase,
        type: "leaf-batch",
        fileName: idBase,
        label:
          batchSizes.length > 1
            ? `${parentTitle} / Leaves ${batchNumber}`
            : `${parentTitle} / Leaves`,
        domainCode: domain.code,
        domainTitle: domain.displayTitle || domain.title,
        moduleCode: module.code,
        moduleTitle: module.title,
        modulePathKey: module.pathKey,
        parentPathKey,
        parentTitle,
        leafTitles: batchLeaves.map((leaf) => leaf.title),
        targetPathKeys: batchLeaves.map((leaf) => leaf.pathKey),
      })
    );
  });

  return shards;
}

function splitLeafBatchSizes(totalLeaves, minSize, maxSize) {
  if (totalLeaves <= maxSize) {
    return [totalLeaves];
  }

  const bucketCount = Math.ceil(totalLeaves / maxSize);
  const baseSize = Math.floor(totalLeaves / bucketCount);
  const remainder = totalLeaves % bucketCount;
  const sizes = [];

  for (let index = 0; index < bucketCount; index += 1) {
    sizes.push(baseSize + (index < remainder ? 1 : 0));
  }

  if (sizes.some((size) => size < minSize || size > maxSize)) {
    throw new Error(`Unable to split ${totalLeaves} leaves into batches of ${minSize}-${maxSize}.`);
  }

  return sizes;
}

function createShardDescriptor({
  id,
  type,
  fileName,
  label,
  domainCode,
  domainTitle,
  moduleCode,
  moduleTitle,
  modulePathKey,
  parentPathKey = null,
  parentTitle = null,
  leafTitles = [],
  targetPathKeys,
}) {
  return {
    id,
    type,
    file: `details/${fileName}.json`,
    label,
    domainCode,
    domainTitle,
    moduleCode,
    moduleTitle,
    modulePathKey,
    parentPathKey,
    parentTitle,
    leafTitles,
    targetPathKeys,
  };
}

function toStableToken(input) {
  const normalized = String(input || "").toLowerCase();
  let hash = 2166136261;

  for (const char of normalized) {
    hash ^= char.codePointAt(0);
    hash = Math.imul(hash, 16777619);
  }

  return Math.abs(hash >>> 0).toString(36);
}

function isLeafNode(concept) {
  return !Array.isArray(concept?.children) || concept.children.length === 0;
}

function buildDetailIndex(shardPlan) {
  const nodeToShard = {};
  const shards = [];

  for (const shard of shardPlan) {
    const targetPathKeys = Array.from(new Set(shard.targetPathKeys));
    for (const pathKey of targetPathKeys) {
      nodeToShard[pathKey] = shard.id;
    }

    shards.push({
      id: shard.id,
      type: shard.type,
      file: shard.file,
      label: shard.label,
      domainCode: shard.domainCode,
      domainTitle: shard.domainTitle,
      moduleCode: shard.moduleCode,
      moduleTitle: shard.moduleTitle,
      modulePathKey: shard.modulePathKey,
      parentPathKey: shard.parentPathKey || null,
      parentTitle: shard.parentTitle || null,
      leafTitles: shard.leafTitles || [],
      nodeCount: targetPathKeys.length,
      targetPathKeys,
    });
  }

  return {
    meta: {
      version: 2,
      updatedAt: currentIsoDate(),
      description: "知识图谱 detail 分片索引。直接维护 data/details/*.json，对应 pathKey 的分片关系在这里声明。",
      shardCount: shards.length,
    },
    schema: {
      textFields: DETAIL_TEXT_FIELDS,
      listFields: DETAIL_LIST_FIELDS,
      allowedFields: DETAIL_ALLOWED_FIELDS,
    },
    strategy: {
      type: "domain-overview-and-leaf-batches",
      leafBatchMinSize: DETAIL_SPLIT_CONFIG.leafBatchMinSize,
      leafBatchMaxSize: DETAIL_SPLIT_CONFIG.leafBatchMaxSize,
      domainShardPolicy: "每个 domain 一个 overview shard，覆盖 domain 内所有非叶子节点。",
      leafBatchPolicy:
        "叶子节点只按同一个父节点分批；每批 5～10 个叶子，叶子少于 5 个时保留为一个小批次。",
    },
    shards,
    nodeToShard,
  };
}

function buildDetailShards(graphSource, shardPlan, existingDetailShards = []) {
  const nodeLookup = buildNodeLookup(graphSource);
  const existingShardById = new Map(
    existingDetailShards.map((shard) => [shard.meta?.shardId || shard.shardId || shard.id, shard])
  );

  return shardPlan.map((shard) => {
    const nodes = {};
    let filledNodeCount = 0;

    for (const pathKey of shard.targetPathKeys) {
      const entry = nodeLookup.get(pathKey);
      const detail = sanitizeDetail(entry?.node?.detail);
      nodes[pathKey] = detail;
      if (hasMeaningfulDetail(detail)) {
        filledNodeCount += 1;
      }
    }

    const existingShard = existingShardById.get(shard.id);
    const content = {
      meta: {
        version: 1,
        updatedAt: existingShard?.meta?.updatedAt || currentIsoDate(),
        shardId: shard.id,
        type: shard.type,
        label: shard.label,
        domainCode: shard.domainCode,
        domainTitle: shard.domainTitle,
        moduleCode: shard.moduleCode,
        moduleTitle: shard.moduleTitle,
        modulePathKey: shard.modulePathKey,
        parentPathKey: shard.parentPathKey || null,
        parentTitle: shard.parentTitle || null,
        leafTitles: shard.leafTitles || [],
        nodeCount: shard.targetPathKeys.length,
        filledNodeCount,
      },
      nodes,
    };

    return { ...shard, content };
  });
}

function buildNodeLookup(graphSource) {
  const lookup = new Map();
  for (const entry of listGraphNodes(graphSource)) {
    lookup.set(entry.node.pathKey, entry);
  }
  return lookup;
}

async function cleanupRemovedGeneratedFiles(previousDetailIndex, nextDetailIndex) {
  const previousDetailFiles = new Set(
    (previousDetailIndex?.shards || []).map((shard) => path.join(dataDir, shard.file))
  );
  const nextDetailFiles = new Set(nextDetailIndex.shards.map((shard) => path.join(dataDir, shard.file)));

  for (const filePath of previousDetailFiles) {
    if (!nextDetailFiles.has(filePath)) {
      await fs.rm(filePath, { force: true });
    }
  }
}

async function cleanupLegacyPromptWorkspace() {
  await fs.rm(path.join(projectRoot, "prompts"), { recursive: true, force: true });
}

function sanitizeDetail(detail) {
  if (!detail || typeof detail !== "object" || Array.isArray(detail)) {
    return {};
  }

  const sanitized = {};

  for (const field of DETAIL_ALLOWED_FIELDS) {
    const value = detail[field];
    if (typeof value === "string" && value.trim()) {
      sanitized[field] = value.trim();
      continue;
    }

    if (Array.isArray(value)) {
      const items = value
        .map((item) => (typeof item === "string" ? item.trim() : ""))
        .filter(Boolean);
      if (items.length) {
        sanitized[field] = items;
      }
    }
  }

  return sanitized;
}

async function readJsonOptional(filePath) {
  try {
    return JSON.parse(await fs.readFile(filePath, "utf8"));
  } catch (error) {
    if (error && error.code === "ENOENT") {
      return null;
    }
    throw error;
  }
}

async function writeJson(filePath, value) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function currentIsoDate() {
  return new Date().toISOString().slice(0, 10);
}

function clone(value) {
  if (typeof structuredClone === "function") {
    return structuredClone(value);
  }
  return JSON.parse(JSON.stringify(value));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
