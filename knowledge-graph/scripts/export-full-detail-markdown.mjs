import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { countConcepts } from "../graph-core.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const graphPath = path.join(projectRoot, "data", "graph.json");
const detailIndexPath = path.join(projectRoot, "data", "detail-index.json");
const outputPath = path.join(projectRoot, "graph.full.generated.md");

const FIELD_LABELS = {
  pathKey: "pathKey",
  nodeType: "node type",
  detailSource: "detail source",
  stage: "stage",
  status: "status",
  definition: "definition",
  importance: "importance",
  minimumDemo: "minimum demo",
  hardwareBudget: "hardware budget",
  examples: "examples",
  pitfalls: "pitfalls",
  prerequisites: "prerequisites",
  coreMetrics: "core metrics",
  toolchain: "toolchain",
  failureSigns: "failure signs",
  next: "next",
  graphSummary: "graph summary",
  relationNotes: "relation notes",
  displayNote: "display note",
};

async function main() {
  const [graph, detailIndex] = await Promise.all([
    readJson(graphPath),
    readJson(detailIndexPath),
  ]);
  const detailLookup = await buildDetailLookup(detailIndex);
  const markdown = renderMarkdown(graph, detailIndex, detailLookup);

  await fs.writeFile(outputPath, markdown, "utf8");

  console.log(
    JSON.stringify(
      {
        graph: path.relative(projectRoot, graphPath),
        detailIndex: path.relative(projectRoot, detailIndexPath),
        output: path.relative(projectRoot, outputPath),
        detailNodes: detailLookup.size,
      },
      null,
      2
    )
  );
}

async function buildDetailLookup(detailIndex) {
  const shardRecords = await Promise.all(
    (detailIndex.shards || []).map(async (shardMeta) => {
      const shardPath = path.join(projectRoot, "data", shardMeta.file);
      const shard = await readJson(shardPath);
      return {
        shardMeta,
        shardPath,
        shard,
      };
    })
  );

  const lookup = new Map();

  for (const { shardMeta, shardPath, shard } of shardRecords) {
    for (const [pathKey, detail] of Object.entries(shard.nodes || {})) {
      if (lookup.has(pathKey)) {
        throw new Error(`Duplicate detail entry for pathKey: ${pathKey}`);
      }
      lookup.set(pathKey, {
        detail,
        sourceFile: path.relative(projectRoot, shardPath),
        shardId: shard.meta?.shardId || shardMeta.id || "unknown",
      });
    }
  }

  return lookup;
}

function renderMarkdown(graph, detailIndex, detailLookup) {
  const stageMap = buildStageMap(graph);
  const lines = [
    "# AI 知识图谱（full detail Markdown 导出）",
    "",
    "> 该文件由 `data/graph.json`、`data/detail-index.json` 和 `data/details/*.json` 自动导出，请不要手动编辑。",
    `> graph source: \`${path.relative(projectRoot, graphPath)}\``,
    `> detail index: \`${path.relative(projectRoot, detailIndexPath)}\``,
    `> generatedAt: ${currentIsoDate()}`,
    "",
    "## 元信息",
    `- graph version: ${graph.meta?.version ?? "unknown"}`,
    `- graph updatedAt: ${graph.meta?.updatedAt ?? "unknown"}`,
    `- detail index updatedAt: ${detailIndex.meta?.updatedAt ?? "unknown"}`,
    `- domains: ${(graph.domains || []).length}`,
    `- modules: ${countModules(graph.domains || [])}`,
    `- concepts: ${countAllConcepts(graph.domains || [])}`,
    `- detail nodes: ${detailLookup.size}`,
    `- shard count: ${(detailIndex.shards || []).length}`,
    "",
    "## 阶段总览",
    ...renderStages(graph, stageMap),
    "",
    "## 全量节点详情",
    "",
    ...renderDomains(graph, stageMap, detailIndex, detailLookup),
    "## 结构关系总表",
    "",
    ...renderRelationGroups(graph.relationGroups || []),
  ].filter((line) => line !== null);

  return `${trimTrailingBlankLines(lines).join("\n")}\n`;
}

function renderStages(graph, stageMap) {
  const lines = [];

  for (const stage of graph.config?.stages || []) {
    const domainTitles = stage.codes
      .map((code) => {
        const domain = stageMap.get(code)?.domain;
        return domain?.displayFullTitle || domain?.fullTitle || code;
      })
      .filter(Boolean);

    lines.push(`### ${stage.title}`);
    lines.push(stage.description || "");
    lines.push(`- stageId: \`${stage.id}\``);
    lines.push(`- color: \`${stage.color}\``);
    lines.push(`- domains: ${domainTitles.join(" / ")}`);
    lines.push("");
  }

  return lines;
}

function renderDomains(graph, stageMap, detailIndex, detailLookup) {
  const lines = [];

  for (const domain of graph.domains || []) {
    const stage = stageMap.get(domain.code)?.stage || null;
    lines.push(`## ${domain.displayFullTitle || domain.fullTitle || `${domain.code}. ${domain.title}`}`);
    lines.push("");
    lines.push(
      ...renderNodeDetails({
        pathKey: domain.pathKey,
        nodeType: "domain",
        stageTitle: stage?.title || null,
        graphSummary: domain.summary || null,
        relationNotes: domain.relationNotes || [],
        displayNote: domain.displayNote || null,
        detailIndex,
        detailLookup,
      })
    );

    for (const module of domain.modules || []) {
      lines.push(`### ${module.fullTitle || `${module.code}. ${module.title}`}`);
      lines.push("");
      lines.push(
        ...renderNodeDetails({
          pathKey: module.pathKey,
          nodeType: "module",
          stageTitle: stage?.title || null,
          graphSummary: null,
          relationNotes: [],
          displayNote: null,
          detailIndex,
          detailLookup,
        })
      );

      for (const concept of module.concepts || []) {
        lines.push(...renderConcept(concept, 0, detailIndex, detailLookup));
      }
    }
  }

  return lines;
}

function renderConcept(concept, depth, detailIndex, detailLookup) {
  const headingLevel = Math.min(4 + depth, 6);
  const lines = [`${"#".repeat(headingLevel)} ${concept.title}`, ""];

  lines.push(
    ...renderNodeDetails({
      pathKey: concept.pathKey,
      nodeType: depth === 0 ? "concept-group" : "concept",
      stageTitle: null,
      graphSummary: null,
      relationNotes: [],
      displayNote: null,
      detailIndex,
      detailLookup,
    })
  );

  for (const child of concept.children || []) {
    lines.push(...renderConcept(child, depth + 1, detailIndex, detailLookup));
  }

  return lines;
}

function renderNodeDetails({
  pathKey,
  nodeType,
  stageTitle,
  graphSummary,
  relationNotes,
  displayNote,
  detailIndex,
  detailLookup,
}) {
  const lines = [`- ${FIELD_LABELS.pathKey}: \`${pathKey}\``, `- ${FIELD_LABELS.nodeType}: \`${nodeType}\``];
  if (stageTitle) {
    lines.push(`- ${FIELD_LABELS.stage}: ${stageTitle}`);
  }
  if (graphSummary) {
    lines.push(`- ${FIELD_LABELS.graphSummary}: ${graphSummary}`);
  }
  if (displayNote) {
    lines.push(`- ${FIELD_LABELS.displayNote}: ${displayNote}`);
  }
  if (relationNotes?.length) {
    lines.push(`- ${FIELD_LABELS.relationNotes}:`);
    for (const note of relationNotes) {
      lines.push(`  - ${note}`);
    }
  }

  const record = detailLookup.get(pathKey);
  if (!record) {
    lines.push("- detail: (missing)");
    lines.push("");
    return lines;
  }

  lines.push(`- ${FIELD_LABELS.detailSource}: \`${record.sourceFile}\``);

  const detail = record.detail || {};
  lines.push(`- ${FIELD_LABELS.status}: ${detail.status || "unknown"}`);

  for (const field of detailIndex.schema?.textFields || []) {
    if (detail[field]) {
      lines.push(`- ${FIELD_LABELS[field] || field}: ${detail[field]}`);
    }
  }

  for (const field of detailIndex.schema?.listFields || []) {
    const values = Array.isArray(detail[field]) ? detail[field].filter(Boolean) : [];
    if (!values.length) {
      continue;
    }
    lines.push(`- ${FIELD_LABELS[field] || field}:`);
    for (const value of values) {
      lines.push(`  - ${value}`);
    }
  }

  lines.push("");
  return lines;
}

function renderRelationGroups(relationGroups) {
  const lines = [];

  for (const group of relationGroups || []) {
    lines.push(`### ${group.title}`);
    for (const entry of group.entries || []) {
      lines.push(`- ${entry.text}`);
      if (entry.notes?.length) {
        for (const note of entry.notes) {
          lines.push(`  - note: ${note}`);
        }
      }
      if (entry.references?.length) {
        const refs = entry.references
          .map((reference) => `${reference.title} (\`${reference.pathKey}\`)`)
          .join(" / ");
        lines.push(`  - references: ${refs}`);
      }
    }
    lines.push("");
  }

  return lines;
}

function buildStageMap(graph) {
  const map = new Map();
  const domainLookup = new Map((graph.domains || []).map((domain) => [domain.code, domain]));

  for (const stage of graph.config?.stages || []) {
    for (const code of stage.codes || []) {
      map.set(code, {
        stage,
        domain: domainLookup.get(code) || null,
      });
    }
  }

  return map;
}

function countModules(domains) {
  return domains.reduce((sum, domain) => sum + (domain.modules || []).length, 0);
}

function countAllConcepts(domains) {
  return domains.reduce(
    (sum, domain) =>
      sum + (domain.modules || []).reduce((moduleSum, module) => moduleSum + countConcepts(module.concepts || []), 0),
    0
  );
}

function currentIsoDate() {
  return new Date().toISOString().slice(0, 10);
}

function trimTrailingBlankLines(lines) {
  const cloned = [...lines];
  while (cloned.length > 0 && cloned[cloned.length - 1] === "") {
    cloned.pop();
  }
  return cloned;
}

async function readJson(filePath) {
  return JSON.parse(await fs.readFile(filePath, "utf8"));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
