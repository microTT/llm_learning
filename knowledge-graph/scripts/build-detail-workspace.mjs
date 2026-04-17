import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import {
  attachDetailShards,
  DETAIL_ALLOWED_FIELDS,
  DETAIL_LIST_FIELDS,
  DETAIL_TEXT_FIELDS,
  countConcepts,
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
const promptsRootDir = path.join(projectRoot, "prompts", "detail");
const promptManifestPath = path.join(promptsRootDir, "manifest.json");
const globalBackgroundPath = path.join(promptsRootDir, "global-background.txt");

const DETAIL_SPLIT_CONFIG = {
  leafBatchMinSize: 5,
  leafBatchMaxSize: 10,
  promptOutputShape:
    '{ "shardId": "<shard-id>", "nodes": { "<pathKey>": { ...detailFields } } }',
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
  const detailShards = buildDetailShards(combinedGraph, shardPlan);
  const strippedGraph = buildStrippedGraph(planningGraph);
  const promptBundle = buildPromptBundle(combinedGraph, shardPlan, detailShards);
  const globalBackgroundPrompt = buildGlobalBackgroundPrompt(planningGraph, detailIndex);

  await fs.mkdir(detailsDir, { recursive: true });
  await fs.mkdir(promptsRootDir, { recursive: true });

  await cleanupRemovedGeneratedFiles(existing.detailIndex, detailIndex, existing.promptManifest, promptBundle);
  await cleanupLegacyPromptWorkspace();

  await writeJson(graphPath, strippedGraph);
  await writeJson(detailIndexPath, detailIndex);

  for (const shard of detailShards) {
    await writeJson(path.join(dataDir, shard.file), shard.content);
  }

  for (const prompt of promptBundle.prompts) {
    const questionPath = path.join(projectRoot, prompt.questionFile);
    const answerPath = path.join(projectRoot, prompt.answerFile);
    await fs.mkdir(path.dirname(questionPath), { recursive: true });
    await fs.writeFile(questionPath, prompt.content, "utf8");
    await ensureAnswerPlaceholder(answerPath, prompt.id);
  }

  await writeJson(promptManifestPath, promptBundle.manifest);
  await fs.writeFile(globalBackgroundPath, globalBackgroundPrompt, "utf8");
  await writeAnswerReadme();

  console.log(
    JSON.stringify(
      {
        graph: path.relative(projectRoot, graphPath),
        detailIndex: path.relative(projectRoot, detailIndexPath),
        shardCount: detailIndex.shards.length,
        promptCount: promptBundle.prompts.length,
        globalBackground: path.relative(projectRoot, globalBackgroundPath),
        detailsDir: path.relative(projectRoot, detailsDir),
        promptsDir: path.relative(projectRoot, promptsRootDir),
      },
      null,
      2
    )
  );
}

async function loadExistingWorkspace() {
  const graphSource = JSON.parse(await fs.readFile(graphPath, "utf8"));
  const detailIndex = await readJsonOptional(detailIndexPath);
  const promptManifest = await readJsonOptional(promptManifestPath);
  const detailShards = [];

  if (graphSource.details?.storage === "sharded" && detailIndex?.shards) {
    for (const shardMeta of detailIndex.shards) {
      const shard = await readJsonOptional(path.join(dataDir, shardMeta.file));
      if (shard) {
        detailShards.push(shard);
      }
    }
  }

  return { graphSource, detailIndex, detailShards, promptManifest };
}

function buildStrippedGraph(graphSource) {
  const stripped = clone(graphSource);

  for (const { node } of listGraphNodes(stripped)) {
    delete node.detail;
  }

  stripped.meta = {
    ...(stripped.meta || {}),
    version: 3,
    updatedAt: currentIsoDate(),
    description:
      "知识图谱结构写在 graph.json；节点 detail 存在 detail-index.json + details/*.json；批量补充 prompt 由 scripts/build-detail-workspace.mjs 导出。",
  };
  stripped.details = {
    storage: "sharded",
    indexFile: "detail-index.json",
    shardDir: "details",
    promptDir: "../prompts/detail",
    answerFileName: "answer.md",
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

function collectAllConceptPathKeys(concept) {
  const pathKeys = [concept.pathKey];
  for (const child of concept.children || []) {
    pathKeys.push(...collectAllConceptPathKeys(child));
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

function createLeafBatchShards({
  domain,
  module,
  parentPathKey,
  parentTitle,
  leaves,
}) {
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
    promptDir: `prompts/detail/${id}`,
    questionFile: `prompts/detail/${id}/question.txt`,
    answerFile: `prompts/detail/${id}/answer.md`,
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
      questionFile: path.relative(projectRoot, path.join(projectRoot, shard.questionFile)),
      answerFile: path.relative(projectRoot, path.join(projectRoot, shard.answerFile)),
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
      version: 1,
      updatedAt: currentIsoDate(),
      description: "知识图谱 detail 分片索引。每个 shard 都可以独立导出 prompt、独立补充、独立回写。",
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

function buildDetailShards(graphSource, shardPlan) {
  const nodeLookup = buildNodeLookup(graphSource);

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

    const content = {
      meta: {
        version: 1,
        updatedAt: currentIsoDate(),
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

function buildPromptBundle(graphSource, shardPlan, detailShards) {
  const nodeLookup = buildNodeLookup(graphSource);
  const shardLookup = new Map(detailShards.map((shard) => [shard.id, shard]));
  const prompts = [];
  const manifestItems = [];

  for (const shard of shardPlan) {
    const shardContent = shardLookup.get(shard.id);
    const promptText = renderPromptText(graphSource, shard, shardContent, nodeLookup);
    const filledNodeCount = shard.targetPathKeys.filter((pathKey) =>
      hasMeaningfulDetail(shardContent.content.nodes[pathKey])
    ).length;
    const missingNodeCount = shard.targetPathKeys.length - filledNodeCount;

    prompts.push({
      id: shard.id,
      questionFile: shard.questionFile,
      answerFile: shard.answerFile,
      content: promptText,
    });

    manifestItems.push({
      id: shard.id,
      questionFile: path.relative(projectRoot, path.join(projectRoot, shard.questionFile)),
      answerFile: path.relative(projectRoot, path.join(projectRoot, shard.answerFile)),
      type: shard.type,
      label: shard.label,
      domainCode: shard.domainCode,
      moduleCode: shard.moduleCode,
      parentPathKey: shard.parentPathKey || null,
      leafTitles: shard.leafTitles || [],
      nodeCount: shard.targetPathKeys.length,
      filledNodeCount,
      missingNodeCount,
    });
  }

  return {
    prompts,
    manifest: {
      meta: {
        version: 1,
        updatedAt: currentIsoDate(),
        description: "可分批交给外部知识 AI 的 detail 填充 prompt 清单。",
        promptCount: prompts.length,
      },
      prompts: manifestItems,
    },
  };
}

function buildGlobalBackgroundPrompt(graphSource, detailIndex) {
  const domainSummaries = (graphSource.domains || []).map((domain) => {
    const moduleCount = (domain.modules || []).length;
    const conceptCount = (domain.modules || []).reduce(
      (sum, module) => sum + countConcepts(module.concepts || []),
      0
    );

    return `- ${domain.code}. ${domain.displayTitle || domain.title}: ${moduleCount} 个模块，${conceptCount} 个术语节点`;
  });

  const lines = [
    "你正在为一个长期维护的 AI 知识图谱补充内容。以下背景在每个调研任务中都成立：",
    "",
    "项目背景",
    "- 这不是临时问答，而是在维护一张可持续扩展的 AI 学习图谱。",
    "- 结构主源是 `data/graph.json`，节点 detail 是分片存放的。",
    `- 当前图谱规模：${(graphSource.domains || []).length} 个 domain，${detailIndex.meta?.shardCount || 0} 个 detail shard。`,
    "- 每次任务都必须尊重现有 pathKey，不新增节点，不改节点路径，不重命名已有结构。",
    "",
    "结构主线",
    "- 主干顺序固定为：基础 → 模型 → 应用 → Agent → 生产。",
    "- 横切层包括：数据、评测、安全、基础设施、产品。",
    "- 当前 domain 列表：",
    ...domainSummaries,
    "",
    "内容补充原则",
    "- 你的目标是补 detail，不是重写图谱结构。",
    "- 优先补：定义、重要性、前置节点、最小实验、核心指标、工具链、失败信号、下一步。",
    "- `prerequisites` 和 `next` 优先引用现有精确 pathKey；如果没有把握，不要编造不存在的节点。",
    "- 保持工程化和可学习性，避免空泛教材式表述。",
    "- 如果当前任务是 domain-overview，只写 domain 根节点的全局介绍，不要展开成模块逐项说明。",
    "- 如果当前任务是 leaf-batch，只处理当前批次列出的叶子节点，不跨父节点扩写。",
    "",
    "detail 字段约定",
    "- 允许字段：status, definition, importance, minimumDemo, hardwareBudget, examples, pitfalls, prerequisites, coreMetrics, toolchain, failureSigns, next",
    "- text 字段：definition, importance, minimumDemo, hardwareBudget",
    "- list 字段必须是字符串数组：examples, pitfalls, prerequisites, coreMetrics, toolchain, failureSigns, next",
    "",
    "风格要求",
    "- 默认面向工程学习者，不写宣传文案。",
    "- 优先给出能落地验证的描述，而不是只给概念定义。",
    "- 尽量让术语之间形成学习路径，而不是孤立词条。",
  ];

  return `${lines.join("\n")}\n`;
}

function renderPromptText(graphSource, shard, shardContent, nodeLookup) {
  const domain = (graphSource.domains || []).find((item) => item.code === shard.domainCode);
  const module = domain?.modules?.find((item) => item.code === shard.moduleCode) || null;
  const modulePathKeys = module
    ? [module.pathKey, ...(module.concepts || []).flatMap((concept) => collectAllConceptPathKeys(concept))]
    : [];
  const domainModuleSummaries = (domain?.modules || []).map((item) => ({
    pathKey: item.pathKey,
    title: item.fullTitle,
    conceptCount: countConcepts(item.concepts || []),
    childTitles: (item.concepts || []).slice(0, 6).map((concept) => concept.title),
  }));
  const domainPathKeys = domain
    ? [
        domain.pathKey,
        ...((domain.modules || []).flatMap((item) => [
          item.pathKey,
          ...(item.concepts || []).flatMap((concept) => collectAllConceptPathKeys(concept)),
        ])),
      ]
    : [];
  const siblingModules = domain?.modules?.map((item) => item.pathKey).filter((value) => value !== module?.pathKey) || [];
  const targetNodes = shard.targetPathKeys.map((pathKey) => {
    const entry = nodeLookup.get(pathKey);
    return {
      pathKey,
      type: entry?.type || "unknown",
      title: entry?.node?.title || entry?.node?.fullTitle || pathKey,
      depth: entry?.depth ?? 0,
      parentPathKey:
        entry?.type === "module"
          ? entry.domain?.pathKey
          : entry?.type === "concept"
            ? entry.module?.pathKey
            : null,
      childTitles:
        entry?.type === "domain"
          ? (entry.node.modules || []).map((item) => item.fullTitle)
          : entry?.type === "module"
            ? (entry.node.concepts || []).map((item) => item.title)
            : (entry?.node?.children || []).map((item) => item.title),
      currentDetail: shardContent.content.nodes[pathKey] || {},
    };
  });

  const primaryPathKeys =
    shard.type === "domain-overview" && domain?.pathKey ? [domain.pathKey] : shard.targetPathKeys;
  const promptNodes =
    shard.type === "domain-overview"
      ? targetNodes.filter((item) => item.pathKey === domain?.pathKey)
      : targetNodes;
  const contextNodes =
    shard.type === "domain-overview" ? [] : [];
  const responseTemplate = {
    shardId: shard.id,
    nodes: Object.fromEntries(primaryPathKeys.map((pathKey) => [pathKey, shardContent.content.nodes[pathKey] || {}])),
  };

  const lines = [
    `你正在补充 AI 知识图谱的一个 detail shard。只处理当前 shard，不要新增节点、不要改 pathKey。`,
    ``,
    `Shard 信息`,
    `- shardId: ${shard.id}`,
    `- expected answer file: ${path.relative(projectRoot, path.join(projectRoot, shard.answerFile))}`,
    `- label: ${shard.label}`,
    `- type: ${shard.type}`,
    `- domain: ${shard.domainCode}. ${shard.domainTitle}`,
    shard.moduleCode ? `- module: ${shard.moduleCode}. ${shard.moduleTitle}` : null,
    shard.parentPathKey ? `- parent pathKey: ${shard.parentPathKey}` : null,
    shard.parentTitle ? `- parent title: ${shard.parentTitle}` : null,
    shard.leafTitles?.length ? `- leaf titles: ${shard.leafTitles.join(" / ")}` : null,
    `- shard owned node count: ${shard.targetPathKeys.length}`,
    shard.type === "domain-overview"
      ? `- prompt focus: 只补这个 domain 自身的全局介绍；下面列出的模块和父概念仅作为上下文参考，不需要在回答里逐个展开。`
      : null,
    ``,
    `输出要求`,
    `- 只输出一个 JSON 对象，不要 Markdown 代码块，不要解释文字。`,
    `- 固定输出形状：${DETAIL_SPLIT_CONFIG.promptOutputShape}`,
    `- 只允许这些字段：${DETAIL_ALLOWED_FIELDS.join(", ")}`,
    `- text 字段：${DETAIL_TEXT_FIELDS.join(", ")}`,
    `- list 字段：${DETAIL_LIST_FIELDS.join(", ")}，必须是字符串数组。`,
    `- \`prerequisites\` / \`next\` 优先使用精确 pathKey；如果没有把握，不要编造图谱里不存在的节点。`,
    `- 对当前已经有内容的节点，以补全、校正、统一口径为主；不要为了改写而改写。`,
    shard.type === "domain-overview"
      ? `- domain-overview 只需要返回 domain 根节点本身；不要在回答里重复输出模块或父概念节点。`
      : `- 所有 target pathKey 都要保留在返回 JSON 里；如果某个节点暂时没有把握，可以保持为空对象。`,
    ``,
    shard.type === "domain-overview" ? `当前需要补充的全局节点` : `当前 shard 的目标节点`,
    ...promptNodes.flatMap((item, index) => [
      `${index + 1}. [${item.type}] ${item.pathKey}`,
      `   - title: ${item.title}`,
      item.parentPathKey ? `   - parent: ${item.parentPathKey}` : null,
      item.childTitles.length ? `   - children: ${item.childTitles.join(" / ")}` : null,
      `   - currentDetail: ${JSON.stringify(item.currentDetail, null, 2).replace(/\n/g, "\n     ")}`,
    ]).filter(Boolean),
    shard.type === "domain-overview" ? `` : null,
    shard.type === "domain-overview"
      ? `本 domain 的模块上下文（仅供理解全局范围，不要在回答里展开成模块逐项说明）`
      : null,
    ...(
      shard.type === "domain-overview" ? domainModuleSummaries : contextNodes
    ).flatMap((item, index) => [
      shard.type === "domain-overview"
        ? `${index + 1}. ${item.title}`
        : `${index + 1}. [${item.type}] ${item.pathKey}`,
      shard.type === "domain-overview"
        ? `   - pathKey: ${item.pathKey}`
        : `   - title: ${item.title}`,
      shard.type === "domain-overview"
        ? `   - concept count: ${item.conceptCount}`
        : item.parentPathKey
          ? `   - parent: ${item.parentPathKey}`
          : null,
      shard.type === "domain-overview" && item.childTitles.length
        ? `   - sample children: ${item.childTitles.join(" / ")}`
        : null,
      shard.type !== "domain-overview" && item.childTitles.length
        ? `   - children: ${item.childTitles.join(" / ")}`
        : null,
    ]).filter(Boolean),
    ``,
    `可参考的 pathKey`,
    `- current domain root: ${domain?.pathKey || shard.domainCode}`,
    domainPathKeys.length ? `- current domain all pathKeys: ${domainPathKeys.join(" | ")}` : null,
    shard.modulePathKey ? `- current module root: ${shard.modulePathKey}` : null,
    shard.modulePathKey && modulePathKeys.length ? `- current module all pathKeys: ${modulePathKeys.join(" | ")}` : null,
    siblingModules.length ? `- sibling modules in domain: ${siblingModules.join(" | ")}` : null,
    ``,
    `返回模板`,
    JSON.stringify(responseTemplate, null, 2),
  ].filter(Boolean);

  return lines.join("\n");
}

function buildNodeLookup(graphSource) {
  const lookup = new Map();
  for (const entry of listGraphNodes(graphSource)) {
    lookup.set(entry.node.pathKey, entry);
  }
  return lookup;
}

async function cleanupRemovedGeneratedFiles(previousDetailIndex, nextDetailIndex, previousPromptManifest, nextPromptBundle) {
  const previousDetailFiles = new Set(
    (previousDetailIndex?.shards || []).map((shard) => path.join(dataDir, shard.file))
  );
  const nextDetailFiles = new Set(nextDetailIndex.shards.map((shard) => path.join(dataDir, shard.file)));
  const previousPromptFiles = new Set(
    (previousPromptManifest?.prompts || [])
      .map((item) => item.questionFile || item.file)
      .filter(Boolean)
      .map((file) => path.join(projectRoot, file))
  );
  const nextPromptFiles = new Set(
    nextPromptBundle.prompts.map((item) => path.join(projectRoot, item.questionFile))
  );

  for (const filePath of previousDetailFiles) {
    if (!nextDetailFiles.has(filePath)) {
      await fs.rm(filePath, { force: true });
    }
  }

  for (const filePath of previousPromptFiles) {
    if (!nextPromptFiles.has(filePath)) {
      await fs.rm(filePath, { force: true });
    }
  }
}

async function cleanupLegacyPromptWorkspace() {
  await fs.rm(path.join(projectRoot, "prompts", "details"), { recursive: true, force: true });
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

async function writeAnswerReadme() {
  const filePath = path.join(promptsRootDir, "README.md");
  const content = [
    "# Detail Prompt Workspace",
    "",
    "每个 detail shard 对应一个独立目录。",
    "",
    "- 目录形态：`prompts/detail/<shardId>/question.txt` + `prompts/detail/<shardId>/answer.md`。",
    "- 你可以直接把外部知识 AI 的回答粘贴到对应的 `answer.md`。",
    "- `prompts/detail/global-background.txt` 是可复用的全局背景说明，适合贴到所有外部调研任务的默认上下文里。",
    "- `answer.md` 建议只包含一个 JSON 对象；如果包在 ```json code fence 里，导入脚本也能解析。",
    "- 返回内容形状固定为：",
    "",
    "```json",
    '{ "shardId": "<shard-id>", "nodes": { "<pathKey>": { ...detailFields } } }',
    "```",
    "",
    "- 以 `prompts/detail/manifest.json` 里的 `answerFile` 字段为准。",
    "",
  ].join("\n");
  await fs.writeFile(filePath, content, "utf8");
}

async function ensureAnswerPlaceholder(filePath, shardId) {
  try {
    await fs.access(filePath);
  } catch (error) {
    if (error && error.code !== "ENOENT") {
      throw error;
    }
    void shardId;
    await fs.writeFile(filePath, "", "utf8");
  }
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
