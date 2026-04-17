import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { attachDetailShards, listGraphNodes, validateGraphSource } from "../graph-core.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const dataDir = path.join(projectRoot, "data");
const graphPath = path.join(dataDir, "graph.json");
const detailIndexPath = path.join(dataDir, "detail-index.json");

async function main() {
  const graph = JSON.parse(await fs.readFile(graphPath, "utf8"));
  const detailWorkspace = await loadDetailWorkspace(graph);
  const workspaceValidation = validateDetailWorkspace(graph, detailWorkspace.detailIndex, detailWorkspace.detailShards);
  const combinedGraph = detailWorkspace.detailShards.length
    ? attachDetailShards(graph, detailWorkspace.detailShards)
    : graph;
  const validation = validateGraphSource(combinedGraph);

  for (const warning of [...workspaceValidation.warnings, ...validation.warnings]) {
    console.warn(`WARN: ${warning}`);
  }

  const errors = [...workspaceValidation.errors, ...validation.errors];
  if (errors.length) {
    for (const error of errors) {
      console.error(`ERROR: ${error}`);
    }
    process.exitCode = 1;
    return;
  }

  console.log(
    JSON.stringify(
      {
        file: path.relative(projectRoot, graphPath),
        detailIndex: detailWorkspace.detailIndex
          ? path.relative(projectRoot, detailIndexPath)
          : null,
        shardCount: detailWorkspace.detailIndex?.shards?.length ?? 0,
        domains: validation.stats?.domains ?? 0,
        modules: validation.stats?.modules ?? 0,
        concepts: validation.stats?.concepts ?? 0,
        detailNodes: validation.stats?.detailNodes ?? 0,
        referenceIssues: validation.referenceIssues.length,
      },
      null,
      2
    )
  );
}

async function loadDetailWorkspace(graph) {
  if (graph.details?.storage !== "sharded") {
    return { detailIndex: null, detailShards: [] };
  }

  const detailIndex = await readJsonOptional(detailIndexPath);
  if (!detailIndex) {
    return { detailIndex: null, detailShards: [] };
  }

  const detailShards = [];
  for (const shardMeta of detailIndex.shards || []) {
    const shard = await readJsonOptional(path.join(dataDir, shardMeta.file));
    if (shard) {
      detailShards.push(shard);
    }
  }

  return { detailIndex, detailShards };
}

function validateDetailWorkspace(graph, detailIndex, detailShards) {
  const errors = [];
  const warnings = [];

  if (graph.details?.storage !== "sharded") {
    return { errors, warnings };
  }

  if (!detailIndex || typeof detailIndex !== "object") {
    errors.push("graph.json 声明了 sharded detail，但缺少 data/detail-index.json。");
    return { errors, warnings };
  }

  const graphPathKeys = new Set(listGraphNodes(graph).map((entry) => entry.node.pathKey));
  const shardById = new Map(
    detailShards.map((shard) => [shard.meta?.shardId || shard.shardId || shard.id, shard])
  );
  const assignedPathKeys = new Map();

  for (const shardMeta of detailIndex.shards || []) {
    if (!shardMeta.id) {
      errors.push("detail-index.json 中存在缺少 id 的 shard。");
      continue;
    }

    if (!Array.isArray(shardMeta.targetPathKeys) || !shardMeta.targetPathKeys.length) {
      errors.push(`detail-index shard ${shardMeta.id} 缺少 targetPathKeys。`);
      continue;
    }

    const shard = shardById.get(shardMeta.id);
    if (!shard) {
      errors.push(`detail shard 文件缺失：${shardMeta.id} -> ${shardMeta.file}`);
      continue;
    }

    if ((shard.meta?.shardId || shard.shardId || shard.id) !== shardMeta.id) {
      errors.push(`detail shard ${shardMeta.file} 的 shardId 与 detail-index 不一致。`);
    }

    for (const pathKey of shardMeta.targetPathKeys) {
      if (!graphPathKeys.has(pathKey)) {
        errors.push(`detail-index shard ${shardMeta.id} 引用了不存在的 pathKey：${pathKey}`);
        continue;
      }

      if (assignedPathKeys.has(pathKey)) {
        errors.push(
          `pathKey 被多个 shard 重复声明：${pathKey} -> ${assignedPathKeys.get(pathKey)} / ${shardMeta.id}`
        );
        continue;
      }

      assignedPathKeys.set(pathKey, shardMeta.id);
    }

    for (const pathKey of Object.keys(shard.nodes || {})) {
      if (!shardMeta.targetPathKeys.includes(pathKey)) {
        errors.push(`detail shard ${shardMeta.id} 包含未在 targetPathKeys 声明的节点：${pathKey}`);
      }
    }
  }

  for (const pathKey of graphPathKeys) {
    if (!assignedPathKeys.has(pathKey)) {
      errors.push(`存在未分配到任何 detail shard 的节点：${pathKey}`);
    }
  }

  for (const [pathKey, shardId] of Object.entries(detailIndex.nodeToShard || {})) {
    if (!graphPathKeys.has(pathKey)) {
      errors.push(`detail-index nodeToShard 引用了不存在的 pathKey：${pathKey}`);
      continue;
    }

    if (assignedPathKeys.get(pathKey) !== shardId) {
      errors.push(
        `detail-index nodeToShard 与 shard targetPathKeys 不一致：${pathKey} -> ${shardId}`
      );
    }
  }

  return { errors, warnings };
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

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
