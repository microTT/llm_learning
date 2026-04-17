import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { validateGraphSource } from "../graph-core.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const graphPath = path.join(projectRoot, "data", "graph.json");

async function main() {
  const raw = await fs.readFile(graphPath, "utf8");
  const graph = JSON.parse(raw);
  const validation = validateGraphSource(graph);

  for (const warning of validation.warnings) {
    console.warn(`WARN: ${warning}`);
  }

  if (validation.errors.length) {
    for (const error of validation.errors) {
      console.error(`ERROR: ${error}`);
    }
    process.exitCode = 1;
    return;
  }

  console.log(
    JSON.stringify(
      {
        file: path.relative(projectRoot, graphPath),
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

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
