import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { countConcepts } from "../graph-core.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const graphPath = path.join(projectRoot, "data", "graph.json");
const outputPath = path.join(projectRoot, "graph.generated.md");

async function main() {
  const graph = JSON.parse(await fs.readFile(graphPath, "utf8"));
  const markdown = renderMarkdown(graph);
  await fs.writeFile(outputPath, markdown, "utf8");

  console.log(
    JSON.stringify(
      {
        source: path.relative(projectRoot, graphPath),
        output: path.relative(projectRoot, outputPath),
      },
      null,
      2
    )
  );
}

function renderMarkdown(graph) {
  const stageMap = buildStageMap(graph);
  const lines = [
    "# AI 知识图谱（graph.json Markdown 导出）",
    "",
    "> 该文件由 `data/graph.json` 自动导出，请不要手动编辑。",
    `> source: \`${path.relative(projectRoot, graphPath)}\``,
    `> generatedAt: ${currentIsoDate()}`,
    "",
    "## 元信息",
    `- version: ${graph.meta?.version ?? "unknown"}`,
    `- updatedAt: ${graph.meta?.updatedAt ?? "unknown"}`,
    graph.meta?.description ? `- description: ${graph.meta.description}` : null,
    `- domains: ${(graph.domains || []).length}`,
    `- modules: ${countModules(graph.domains || [])}`,
    `- concepts: ${countAllConcepts(graph.domains || [])}`,
    "",
    "## 阶段总览",
    ...renderStages(graph, stageMap),
    "",
    "## Domain 结构",
    "",
    ...renderDomains(graph, stageMap),
    "## 结构之间的关系总表",
    "",
    ...renderRelationGroups(graph.relationGroups || []),
    "## Detail 存储",
    ...renderDetailStorage(graph.details || {}),
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
    lines.push(`- domain codes: ${stage.codes.map((code) => `\`${code}\``).join(", ")}`);
    if (domainTitles.length) {
      lines.push(`- domains: ${domainTitles.join(" / ")}`);
    }
    lines.push("");
  }

  return lines;
}

function renderDomains(graph, stageMap) {
  const lines = [];

  for (const domain of graph.domains || []) {
    const stage = stageMap.get(domain.code)?.stage || null;
    const crosscutNote = graph.config?.crosscutNotes?.[domain.code] || "";
    const domainGroups = graph.config?.domainGroups?.[domain.code] || [];

    lines.push(`## ${domain.displayFullTitle || domain.fullTitle || `${domain.code}. ${domain.title}`}`);
    lines.push("");
    if (domain.summary) {
      lines.push(domain.summary);
      lines.push("");
    }
    lines.push(`- pathKey: \`${domain.pathKey}\``);
    if (stage) {
      lines.push(`- stage: ${stage.title}`);
    }
    lines.push(`- modules: ${(domain.modules || []).length}`);
    lines.push(`- concepts: ${countAllConcepts([domain])}`);
    if (domain.displayNote) {
      lines.push(`- display note: ${domain.displayNote}`);
    }
    if (crosscutNote) {
      lines.push(`- crosscut note: ${crosscutNote}`);
    }
    lines.push("");

    if (domain.relationNotes?.length) {
      lines.push("### Domain 关系");
      for (const note of domain.relationNotes) {
        lines.push(`- ${note}`);
      }
      lines.push("");
    }

    if (domainGroups.length) {
      lines.push("### Module 分组");
      for (const group of domainGroups) {
        const titles = group.codes
          .map((code) => domain.modules?.find((module) => module.code === code))
          .filter(Boolean)
          .map((module) => module.fullTitle);
        lines.push(`- ${group.title}: ${titles.join(" / ")}`);
      }
      lines.push("");
    }

    lines.push("### Modules");
    lines.push("");
    for (const module of domain.modules || []) {
      lines.push(...renderModule(module));
    }
  }

  return lines;
}

function renderModule(module) {
  const lines = [
    `#### ${module.fullTitle || `${module.code}. ${module.title}`}`,
    `- pathKey: \`${module.pathKey}\``,
    `- concept count: ${countConcepts(module.concepts || [])}`,
  ];

  if (!(module.concepts || []).length) {
    lines.push("- concepts: (empty)");
    lines.push("");
    return lines;
  }

  lines.push("- concepts:");
  lines.push(...renderConceptTree(module.concepts || [], 1));
  lines.push("");
  return lines;
}

function renderConceptTree(concepts, depth) {
  const lines = [];
  const indent = "  ".repeat(depth);

  for (const concept of concepts || []) {
    lines.push(`${indent}- ${concept.title} · \`${concept.pathKey}\``);
    if (concept.children?.length) {
      lines.push(...renderConceptTree(concept.children, depth + 1));
    }
  }

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

function renderDetailStorage(details) {
  return [
    `- storage: ${details.storage || "unknown"}`,
    details.indexFile ? `- indexFile: \`data/${details.indexFile}\`` : null,
    details.shardDir ? `- shardDir: \`data/${details.shardDir}\`` : null,
    details.promptDir ? `- promptDir: \`${details.promptDir}\`` : null,
    details.answerFileName ? `- answerFileName: \`${details.answerFileName}\`` : null,
    details.generator ? `- generator: \`${details.generator}\`` : null,
  ].filter((line) => line !== null);
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
    (sum, domain) => sum + (domain.modules || []).reduce((moduleSum, module) => moduleSum + countConcepts(module.concepts || []), 0),
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

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
