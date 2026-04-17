import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import {
  DETAIL_ALLOWED_FIELDS,
  DETAIL_LIST_FIELDS,
  DETAIL_TEXT_FIELDS,
  hasMeaningfulDetail,
} from "../graph-core.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const dataDir = path.join(projectRoot, "data");
const detailsDir = path.join(dataDir, "details");
const detailIndexPath = path.join(dataDir, "detail-index.json");
const promptManifestPath = path.join(projectRoot, "prompts", "detail", "manifest.json");

async function main() {
  const detailIndex = JSON.parse(await fs.readFile(detailIndexPath, "utf8"));
  const manifest = JSON.parse(await fs.readFile(promptManifestPath, "utf8"));
  const shardMetaById = new Map((detailIndex.shards || []).map((item) => [item.id, item]));
  const promptMetaById = new Map((manifest.prompts || []).map((item) => [item.id, item]));

  const imported = [];
  const warnings = [];

  for (const [shardId, shardMeta] of shardMetaById) {
    const promptMeta = promptMetaById.get(shardId);
    const answerFile = promptMeta?.answerFile;
    if (!answerFile) {
      warnings.push(`missing answerFile in manifest for ${shardId}`);
      continue;
    }

    const answerPath = path.join(projectRoot, answerFile);
    let answer;
    try {
      answer = await readAnswerPayload(answerPath);
    } catch (error) {
      warnings.push(`failed to parse answer file for ${shardId}: ${answerFile} (${error.message})`);
      continue;
    }
    if (!answer) {
      continue;
    }

    const detailShardPath = path.join(dataDir, shardMeta.file);
    const detailShard = JSON.parse(await fs.readFile(detailShardPath, "utf8"));
    const mergeResult = mergeAnswerIntoShard(detailShard, answer, shardMeta, warnings);

    if (!mergeResult.changed) {
      continue;
    }

    await writeJson(detailShardPath, mergeResult.shard);
    imported.push({
      shardId,
      answerFile,
      updatedNodes: mergeResult.updatedNodes,
    });
  }

  for (const warning of warnings) {
    console.warn(`WARN: ${warning}`);
  }

  console.log(
    JSON.stringify(
      {
        importedCount: imported.length,
        imported,
      },
      null,
      2
    )
  );
}

function mergeAnswerIntoShard(detailShard, answer, shardMeta, warnings) {
  const expectedPathKeys = new Set(shardMeta.targetPathKeys || []);
  const answerShardId = typeof answer?.shardId === "string" ? answer.shardId : null;

  if (answerShardId && answerShardId !== shardMeta.id) {
    warnings.push(`answer shardId mismatch: expected ${shardMeta.id}, got ${answerShardId}`);
  }

  if (!answer || typeof answer !== "object" || !answer.nodes || typeof answer.nodes !== "object") {
    warnings.push(`invalid answer payload for ${shardMeta.id}`);
    return { changed: false, shard: detailShard, updatedNodes: [] };
  }

  const shard = clone(detailShard);
  shard.nodes ||= {};
  const updatedNodes = [];

  for (const [pathKey, rawDetail] of Object.entries(answer.nodes)) {
    if (!expectedPathKeys.has(pathKey)) {
      warnings.push(`answer ${shardMeta.id} contains out-of-shard pathKey: ${pathKey}`);
      continue;
    }

    const sanitizedIncoming = sanitizeDetail(rawDetail);
    if (!hasMeaningfulDetail(sanitizedIncoming) && !sanitizedIncoming.status) {
      continue;
    }

    const currentDetail = sanitizeDetail(shard.nodes[pathKey] || {});
    const mergedDetail = { ...currentDetail, ...sanitizedIncoming };
    shard.nodes[pathKey] = mergedDetail;
    updatedNodes.push(pathKey);
  }

  shard.meta = {
    ...(shard.meta || {}),
    updatedAt: currentIsoDate(),
    filledNodeCount: Object.values(shard.nodes).filter((detail) => hasMeaningfulDetail(detail)).length,
  };

  return {
    changed: updatedNodes.length > 0,
    shard,
    updatedNodes,
  };
}

function sanitizeDetail(detail) {
  if (!detail || typeof detail !== "object" || Array.isArray(detail)) {
    return {};
  }

  const sanitized = {};

  for (const field of DETAIL_ALLOWED_FIELDS) {
    const value = detail[field];
    if (DETAIL_TEXT_FIELDS.includes(field)) {
      if (typeof value === "string" && value.trim()) {
        sanitized[field] = value.trim();
      }
      continue;
    }

    if (field === "status") {
      if (typeof value === "string" && value.trim()) {
        sanitized[field] = value.trim();
      }
      continue;
    }

    if (DETAIL_LIST_FIELDS.includes(field) && Array.isArray(value)) {
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

async function readAnswerPayload(filePath) {
  let content;
  try {
    content = await fs.readFile(filePath, "utf8");
  } catch (error) {
    if (error && error.code === "ENOENT") {
      return null;
    }
    throw error;
  }

  const trimmed = content.trim();
  if (!trimmed) {
    return null;
  }

  return parseAnswerPayload(trimmed);
}

function parseAnswerPayload(content) {
  const direct = tryParseJson(content);
  if (direct) {
    return direct;
  }

  const fencedBlocks = Array.from(
    content.matchAll(/```(?:json)?\s*([\s\S]*?)```/gi),
    (match) => match[1]?.trim()
  ).filter(Boolean);
  for (const block of fencedBlocks) {
    const parsed = tryParseJson(block);
    if (parsed) {
      return parsed;
    }
  }

  const extracted = extractBalancedJsonObject(content);
  if (extracted) {
    const parsed = tryParseJson(extracted);
    if (parsed) {
      return parsed;
    }
  }

  throw new Error("no valid JSON object found");
}

function tryParseJson(content) {
  try {
    return JSON.parse(content);
  } catch {
    return null;
  }
}

function extractBalancedJsonObject(content) {
  let depth = 0;
  let start = -1;
  let inString = false;
  let escaped = false;

  for (let index = 0; index < content.length; index += 1) {
    const char = content[index];

    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === "\"") {
        inString = false;
      }
      continue;
    }

    if (char === "\"") {
      inString = true;
      continue;
    }

    if (char === "{") {
      if (depth === 0) {
        start = index;
      }
      depth += 1;
      continue;
    }

    if (char === "}") {
      if (depth === 0) {
        continue;
      }
      depth -= 1;
      if (depth === 0 && start >= 0) {
        return content.slice(start, index + 1);
      }
    }
  }

  return null;
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
