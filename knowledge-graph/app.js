import { GRAPH_DEFAULT_CONFIG, attachDetailShards, buildRuntimeGraph } from "./graph-core.js";

let STAGES = GRAPH_DEFAULT_CONFIG.stages;
let CROSSCUT_CODES = GRAPH_DEFAULT_CONFIG.crosscutCodes;
let DOMAIN_GROUPS = GRAPH_DEFAULT_CONFIG.domainGroups;
let DOMAIN_DISPLAY = GRAPH_DEFAULT_CONFIG.domainDisplay;
let CROSSCUT_NOTES = GRAPH_DEFAULT_CONFIG.crosscutNotes;
let STATUS_LABELS = GRAPH_DEFAULT_CONFIG.statusLabels;

const DETAIL_TEXT_FIELDS = ["definition", "importance", "minimumDemo", "hardwareBudget"];
const DETAIL_LIST_FIELDS = [
  "examples",
  "pitfalls",
  "prerequisites",
  "coreMetrics",
  "toolchain",
  "failureSigns",
  "next",
];

const elements = {
  stats: document.getElementById("hero-stats"),
  jumpbar: document.getElementById("jumpbar"),
  roadmap: document.getElementById("roadmap"),
  relationGrid: document.getElementById("relation-grid"),
  detailDrawer: document.getElementById("detail-drawer"),
  detailBackdrop: document.getElementById("detail-backdrop"),
  detailClose: document.getElementById("detail-close"),
  detailPanel: document.getElementById("detail-panel"),
  detailPanelCard: document.getElementById("detail-panel-card"),
};

const state = {
  graph: null,
  activeKey: null,
  isDrawerOpen: false,
  lastTrigger: null,
};

bootstrap().catch((error) => {
  console.error(error);
  elements.roadmap.innerHTML = `
    <div class="error-state">
      <strong>页面暂时没有加载出来。</strong>
      <p>请刷新后再试。如果你是在本地查看，也请确认数据文件已经准备好。</p>
    </div>
  `;
});

async function bootstrap() {
  renderLoading();
  const graphSource = await fetchJson("./data/graph.json", null);
  if (!graphSource) {
    throw new Error("Failed to fetch ./data/graph.json");
  }
  const detailShards = await loadDetailShards(graphSource);
  const hydratedGraphSource = detailShards.length ? attachDetailShards(graphSource, detailShards) : graphSource;
  const graph = buildRuntimeGraph(hydratedGraphSource);
  applyGraphConfig(graph.config);
  state.graph = graph;
  if (graph.referenceIssues.length) {
    console.warn("knowledge-graph: unresolved or ambiguous detail references", graph.referenceIssues);
  }
  render(graph);
  bindInteractions();
  renderDetailPanel();
}

function renderLoading() {
  elements.roadmap.innerHTML = `
    <div class="empty-state">
      正在载入这张 AI 路线图…
    </div>
  `;
  elements.relationGrid.innerHTML = "";
}

function applyGraphConfig(config) {
  STAGES = config.stages;
  CROSSCUT_CODES = config.crosscutCodes;
  DOMAIN_GROUPS = config.domainGroups;
  DOMAIN_DISPLAY = config.domainDisplay;
  CROSSCUT_NOTES = config.crosscutNotes;
  STATUS_LABELS = config.statusLabels;
}

async function fetchJson(url, fallback) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return fallback;
    }
    return response.json();
  } catch (error) {
    return fallback;
  }
}

async function loadDetailShards(graphSource) {
  if (graphSource?.details?.storage !== "sharded" || !graphSource.details.indexFile) {
    return [];
  }

  const detailIndex = await fetchJson(`./data/${graphSource.details.indexFile}`, null);
  if (!detailIndex?.shards?.length) {
    return [];
  }

  const shardResults = await Promise.all(
    detailIndex.shards.map((shard) => fetchJson(`./data/${shard.file}`, null))
  );

  return shardResults.filter(Boolean);
}

function buildGraph(markdown, overlay) {
  const topSections = splitByHeading(markdown, "## ");
  const domains = [];
  let relationGroups = [];

  for (const section of topSections) {
    if (/^[A-Z]\.\s/.test(section.title)) {
      domains.push(parseDomainSection(section, overlay.nodes || {}));
      continue;
    }

    if (section.title === "结构之间的关系总表") {
      relationGroups = parseRelationSection(section);
    }
  }

  const structureReferenceMap = buildStructureReferenceMap(domains);
  expandStructureReferences(domains, relationGroups, structureReferenceMap);
  enrichRelationReferences(relationGroups, structureReferenceMap);

  const stages = buildStages(domains, relationGroups);
  const lookup = buildSelectionIndex(domains, relationGroups);
  const referenceIssues = attachDetailReferences(domains, lookup);

  return {
    domains,
    stages,
    relationGroups,
    lookup,
    referenceIssues,
    overlay,
    stats: {
      domains: domains.length,
      modules: domains.reduce((sum, domain) => sum + domain.modules.length, 0),
      concepts: domains.reduce(
        (sum, domain) =>
          sum +
          domain.modules.reduce((moduleSum, module) => moduleSum + countConcepts(module.concepts), 0),
        0
      ),
      detailNodes: domains.reduce((sum, domain) => sum + countDetailNodes(domain), 0),
    },
  };
}

function parseDomainSection(section, overlayNodes) {
  const headingMatch = section.title.match(/^([A-Z])\.\s+(.+)$/);
  const code = headingMatch[1];
  const title = headingMatch[2];
  const display = DOMAIN_DISPLAY[code];
  const subsections = splitByHeading(section.content, "### ");
  const intro = section.content.split(/^### /m)[0]?.trim() || "";
  const summary = toSummaryText(intro);
  const modules = [];
  const relationNotes = [];
  const pathKey = code;

  for (const subsection of subsections) {
    if (/层关系$/.test(subsection.title)) {
      relationNotes.push(...flattenBulletTree(parseBulletTree(subsection.content)));
      continue;
    }
    modules.push(parseModule(code, subsection, overlayNodes));
  }

  return withOverlay(
    {
      id: code,
      code,
      title,
      displayTitle: display?.title || title,
      fullTitle: `${code}. ${title}`,
      displayFullTitle: `${code}. ${display?.title || title}`,
      displayNote: display?.note || null,
      summary,
      pathKey,
      relationNotes,
      modules,
      conceptCount: modules.reduce((sum, module) => sum + countConcepts(module.concepts), 0),
    },
    overlayNodes[pathKey]
  );
}

function parseModule(domainCode, subsection, overlayNodes) {
  const headingMatch = subsection.title.match(/^([A-Z]\d+)\.\s+(.+)$/);
  const code = headingMatch ? headingMatch[1] : subsection.title;
  const title = headingMatch ? headingMatch[2] : subsection.title;
  const pathKey = `${domainCode}/${code}. ${title}`;
  const concepts = enrichConcepts(
    parseBulletTree(subsection.content),
    { domainCode, moduleCode: code, moduleTitle: title },
    overlayNodes
  );

  return withOverlay(
    {
      id: code,
      code,
      title,
      fullTitle: `${code}. ${title}`,
      pathKey,
      concepts,
    },
    overlayNodes[pathKey]
  );
}

function enrichConcepts(tree, context, overlayNodes, trail = []) {
  return tree.map((item) => {
    const pathParts = [...trail, item.text];
    const pathKey = `${context.domainCode}/${context.moduleCode}. ${context.moduleTitle}/${pathParts.join("/")}`;
    const concept = withOverlay(
      {
        title: item.text,
        pathKey,
        children: [],
      },
      overlayNodes[pathKey]
    );

    concept.children = enrichConcepts(item.children, context, overlayNodes, pathParts);
    return concept;
  });
}

function parseRelationSection(section) {
  return splitByHeading(section.content, "### ").map((group) => ({
    title: group.title,
    entries: parseBulletTree(group.content).map((item) => ({
      rawText: item.text,
      rawNotes: flattenBulletTree(item.children),
      text: item.text,
      notes: flattenBulletTree(item.children),
      references: [],
    })),
  }));
}

function buildStructureReferenceMap(domains) {
  const referenceMap = new Map();

  for (const domain of domains) {
    referenceMap.set(domain.code, {
      code: domain.code,
      title: domain.displayTitle,
      pathKey: domain.pathKey,
      type: "domain",
    });
    for (const module of domain.modules) {
      referenceMap.set(module.code, {
        code: module.code,
        title: module.title,
        pathKey: module.pathKey,
        type: "module",
      });
    }
  }

  return referenceMap;
}

function expandStructureReferences(domains, relationGroups, referenceMap) {
  for (const domain of domains) {
    domain.relationNotes = domain.relationNotes.map((note) =>
      expandStructureReferenceText(note, referenceMap)
    );
  }

  for (const group of relationGroups) {
    group.entries = group.entries.map((entry) => ({
      ...entry,
      text: expandStructureReferenceText(entry.text, referenceMap),
      notes: entry.notes.map((note) => expandStructureReferenceText(note, referenceMap)),
    }));
  }
}

function expandStructureReferenceText(text, referenceMap) {
  if (!text) {
    return text;
  }

  const matcher = createReferenceMatcher(referenceMap);
  const keys = matcher.keys;
  if (!keys.length) {
    return text;
  }

  return text.replace(matcher.pattern, (match) => referenceMap.get(match)?.title || match);
}

function enrichRelationReferences(relationGroups, referenceMap) {
  for (const group of relationGroups) {
    group.entries = group.entries.map((entry) => ({
      ...entry,
      references: collectStructureReferences([entry.rawText, ...(entry.rawNotes || [])], referenceMap),
    }));
  }
}

function collectStructureReferences(texts, referenceMap) {
  const matcher = createReferenceMatcher(referenceMap);
  if (!matcher.keys.length) {
    return [];
  }

  const seen = new Set();
  const items = [];

  for (const text of texts) {
    if (!text) {
      continue;
    }

    for (const match of text.matchAll(matcher.pattern)) {
      const code = match[0];
      const reference = referenceMap.get(code);
      if (!reference || seen.has(reference.pathKey)) {
        continue;
      }
      seen.add(reference.pathKey);
      items.push(reference);
    }
  }

  return items;
}

function createReferenceMatcher(referenceMap) {
  const keys = Array.from(referenceMap.keys()).sort((left, right) => right.length - left.length);
  return {
    keys,
    pattern: new RegExp(
      `(?<![A-Za-z0-9])(${keys.map(escapeRegExp).join("|")})(?![A-Za-z0-9])`,
      "g"
    ),
  };
}

function buildStages(domains, relationGroups) {
  const domainMap = new Map(domains.map((domain) => [domain.code, domain]));

  return STAGES.map((stage) => {
    const stageDomains = stage.codes.map((code) => domainMap.get(code)).filter(Boolean);
    const stageReferenceCodes = new Set(
      stageDomains.flatMap((domain) => [domain.code, ...domain.modules.map((module) => module.code)])
    );
    const relationPreview = [];
    const relationSeen = new Set();

    for (const group of relationGroups) {
      for (const entry of group.entries) {
        const touchesStage = entry.references.some((reference) =>
          stageReferenceCodes.has(reference.code)
        );
        if (!touchesStage) {
          continue;
        }

        const key = getRelationDetailKey(group.title, entry.text);
        if (relationSeen.has(key)) {
          continue;
        }

        relationSeen.add(key);
        relationPreview.push({
          key,
          groupTitle: group.title,
          text: entry.text,
          notes: entry.notes,
          references: entry.references,
        });
      }
    }

    return {
      ...stage,
      domains: stageDomains,
      moduleCount: stageDomains.reduce((sum, domain) => sum + domain.modules.length, 0),
      conceptCount: stageDomains.reduce((sum, domain) => sum + domain.conceptCount, 0),
      relationPreview,
    };
  }).filter((stage) => stage.domains.length);
}

function splitByHeading(markdown, marker) {
  const lines = markdown.replace(/\r/g, "").split("\n");
  const sections = [];
  let current = null;

  for (const line of lines) {
    if (line.startsWith(marker)) {
      if (current) {
        current.content = current.buffer.join("\n").trim();
        delete current.buffer;
        sections.push(current);
      }
      current = { title: line.slice(marker.length).trim(), buffer: [] };
      continue;
    }
    if (current) {
      current.buffer.push(line);
    }
  }

  if (current) {
    current.content = current.buffer.join("\n").trim();
    delete current.buffer;
    sections.push(current);
  }

  return sections;
}

function parseBulletTree(content) {
  const root = [];
  const stack = [{ indent: -1, children: root }];

  for (const rawLine of content.split("\n")) {
    const match = rawLine.match(/^(\s*)\* (.+)$/);
    if (!match) {
      continue;
    }

    const indent = match[1].replace(/\t/g, "  ").length;
    const text = cleanMarkdown(match[2]);
    const node = { text, children: [] };

    while (stack.length && indent <= stack[stack.length - 1].indent) {
      stack.pop();
    }

    stack[stack.length - 1].children.push(node);
    stack.push({ indent, children: node.children });
  }

  return root;
}

function cleanMarkdown(text) {
  return text
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\[([^\]]+)\]\[[^\]]+\]/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/^\s+|\s+$/g, "")
    .trim();
}

function toSummaryText(text) {
  return cleanMarkdown(text)
    .replace(/\([^)]+\)\s*$/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function flattenBulletTree(tree) {
  return tree.map((item) => item.text);
}

function withOverlay(node, overlay = {}) {
  return { ...node, detail: overlay };
}

function countConcepts(concepts) {
  let total = 0;
  walkConcepts(concepts, () => {
    total += 1;
  });
  return total;
}

function walkConcepts(concepts, visitor) {
  for (const concept of concepts) {
    visitor(concept);
    walkConcepts(concept.children, visitor);
  }
}

function countDetailNodes(domain) {
  let total = hasMeaningfulDetail(domain.detail) ? 1 : 0;
  for (const module of domain.modules) {
    if (hasMeaningfulDetail(module.detail)) {
      total += 1;
    }
    walkConcepts(module.concepts, (concept) => {
      if (hasMeaningfulDetail(concept.detail)) {
        total += 1;
      }
    });
  }
  return total;
}

function hasMeaningfulDetail(detail) {
  if (!detail || typeof detail !== "object") {
    return false;
  }

  return (
    DETAIL_TEXT_FIELDS.some((field) => hasNonEmptyText(detail[field])) ||
    DETAIL_LIST_FIELDS.some((field) => hasNonEmptyList(detail[field]))
  );
}

function collectDetailNodes(module) {
  const items = [];

  if (hasMeaningfulDetail(module.detail)) {
    items.push({
      title: module.fullTitle,
      pathKey: module.pathKey,
      detail: module.detail,
    });
  }

  walkConcepts(module.concepts, (concept) => {
    if (!hasMeaningfulDetail(concept.detail)) {
      return;
    }

    items.push({
      title: concept.title,
      pathKey: concept.pathKey,
      detail: concept.detail,
    });
  });

  return items;
}

function hasNonEmptyText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function hasNonEmptyList(value) {
  return Array.isArray(value) && value.some((item) => hasNonEmptyText(item));
}

function attachDetailReferences(domains, lookup) {
  const resolver = createDetailReferenceResolver(lookup);
  const issues = [];

  walkDetailEntries(domains, ({ pathKey, detail }) => {
    detail.resolvedPrerequisites = resolveDetailReferences(detail.prerequisites, resolver, {
      ownerPathKey: pathKey,
      fieldName: "prerequisites",
      issues,
    });
    detail.resolvedNext = resolveDetailReferences(detail.next, resolver, {
      ownerPathKey: pathKey,
      fieldName: "next",
      issues,
    });
  });

  return issues;
}

function walkDetailEntries(domains, visitor) {
  for (const domain of domains) {
    visitor({ pathKey: domain.pathKey, detail: domain.detail, type: "domain" });
    for (const module of domain.modules) {
      visitor({ pathKey: module.pathKey, detail: module.detail, type: "module" });
      walkConcepts(module.concepts, (concept) => {
        visitor({ pathKey: concept.pathKey, detail: concept.detail, type: "concept" });
      });
    }
  }
}

function createDetailReferenceResolver(lookup) {
  const byPathKey = new Map();
  const byAlias = new Map();

  for (const entry of lookup.values()) {
    if (!entry.pathKey) {
      continue;
    }

    byPathKey.set(normalizeReferenceKey(entry.pathKey), entry);

    for (const alias of collectReferenceAliases(entry)) {
      const aliasKey = normalizeReferenceKey(alias);
      if (!aliasKey) {
        continue;
      }

      const bucket = byAlias.get(aliasKey) || [];
      bucket.push(entry);
      byAlias.set(aliasKey, bucket);
    }
  }

  return { byPathKey, byAlias };
}

function collectReferenceAliases(entry) {
  const aliases = new Set();
  const lastSegment = getLastPathSegment(entry.pathKey);
  const pathWithoutDomain = entry.pathKey.includes("/") ? entry.pathKey.slice(entry.pathKey.indexOf("/") + 1) : "";

  addReferenceAlias(aliases, entry.pathKey);
  addReferenceAlias(aliases, pathWithoutDomain);
  addReferenceAlias(aliases, entry.title);
  addReferenceAlias(aliases, lastSegment);

  return aliases;
}

function addReferenceAlias(aliases, value) {
  const cleaned = cleanReferenceText(value);
  if (!cleaned) {
    return;
  }

  aliases.add(cleaned);

  const withoutCode = cleaned.replace(/^[A-Z]\d+\.\s+/, "").trim();
  if (withoutCode && withoutCode !== cleaned) {
    aliases.add(withoutCode);
  }

  const parenMatch = cleaned.match(/^(.+?)[（(]([^()（）]+)[)）]$/);
  if (!parenMatch) {
    return;
  }

  aliases.add(parenMatch[1].trim());
  aliases.add(parenMatch[2].trim());
}

function cleanReferenceText(value) {
  if (!hasNonEmptyText(value)) {
    return "";
  }

  return cleanMarkdown(String(value)).replace(/\s+/g, " ").trim();
}

function normalizeReferenceKey(value) {
  return cleanReferenceText(value).toLowerCase();
}

function getLastPathSegment(pathKey) {
  if (!hasNonEmptyText(pathKey)) {
    return "";
  }

  const parts = String(pathKey).split("/");
  return parts[parts.length - 1] || "";
}

function resolveDetailReferences(values, resolver, context) {
  if (!Array.isArray(values)) {
    return [];
  }

  const items = [];
  const seen = new Set();

  for (const rawValue of values) {
    const label = cleanReferenceText(rawValue);
    if (!label) {
      continue;
    }

    const exactPathMatch = resolver.byPathKey.get(normalizeReferenceKey(label));
    if (exactPathMatch) {
      if (!seen.has(exactPathMatch.key)) {
        seen.add(exactPathMatch.key);
        items.push({ key: exactPathMatch.key, label: exactPathMatch.title });
      }
      continue;
    }

    const aliasMatches = resolver.byAlias.get(normalizeReferenceKey(label)) || [];
    if (aliasMatches.length === 1) {
      const [match] = aliasMatches;
      if (!seen.has(match.key)) {
        seen.add(match.key);
        items.push({ key: match.key, label: match.title });
      }
      continue;
    }

    items.push({ label });
    context.issues.push({
      ownerPathKey: context.ownerPathKey,
      fieldName: context.fieldName,
      value: label,
      reason: aliasMatches.length > 1 ? "ambiguous" : "unresolved",
      matches:
        aliasMatches.length > 1 ? aliasMatches.map((candidate) => candidate.pathKey) : undefined,
    });
  }

  return items;
}

function buildSelectionIndex(domains, relationGroups) {
  const lookup = new Map();

  for (const domain of domains) {
    lookup.set(domain.pathKey, {
      key: domain.pathKey,
      type: "domain",
      eyebrow: `${domain.code} 领域`,
      title: domain.displayFullTitle,
      pathKey: domain.pathKey,
      summary:
        domain.detail.definition ||
        domain.summary ||
        `包含 ${domain.modules.length} 个专题，共覆盖 ${domain.conceptCount} 个知识点。`,
      detail: domain.detail,
      status: normalizeDetailStatus(domain.detail),
      stats: [`包含 ${domain.modules.length} 个专题`, `覆盖 ${domain.conceptCount} 个知识点`],
      parentTitle: null,
      relatedNotes: domain.relationNotes,
      relatedLinks: [],
      childTitles: domain.modules.map((module) => module.fullTitle),
      impactScope: CROSSCUT_CODES.includes(domain.code) ? CROSSCUT_NOTES[domain.code] : domain.displayNote,
    });

    if (domain.relationNotes.length) {
      lookup.set(getDomainRelationKey(domain.pathKey), {
        key: getDomainRelationKey(domain.pathKey),
        type: "domain-relations",
        eyebrow: `${domain.code} 领域关系`,
        title: `${domain.displayFullTitle} / 结构关系`,
        pathKey: domain.pathKey,
        summary: `汇总 ${domain.relationNotes.length} 条与当前领域直接相关的结构关系。`,
        detail: {},
        status: "none",
        stats: [`${domain.relationNotes.length} 条结构关系`],
        parentTitle: domain.displayFullTitle,
        relatedNotes: domain.relationNotes,
        relatedLinks: [],
        childTitles: [],
        impactScope: CROSSCUT_CODES.includes(domain.code) ? CROSSCUT_NOTES[domain.code] : null,
      });
    }

    for (const module of domain.modules) {
      const conceptCount = countConcepts(module.concepts);
      const detailNodes = collectDetailNodes(module);
      lookup.set(module.pathKey, {
        key: module.pathKey,
        type: "module",
        eyebrow: `${module.code} 专题`,
        title: module.fullTitle,
        pathKey: module.pathKey,
        summary:
          module.detail.definition ||
          `${module.title} 下设 ${conceptCount} 个知识点，可继续展开查阅。`,
        detail: module.detail,
        status: normalizeDetailStatus(module.detail),
        stats: [
          `包含 ${conceptCount} 个知识点`,
          detailNodes.length ? `补充内容 ${detailNodes.length} 项` : null,
        ].filter(Boolean),
        parentTitle: domain.displayFullTitle,
        relatedNotes: [],
        relatedLinks: [],
        childTitles: module.concepts.map((concept) => concept.title),
        impactScope: CROSSCUT_CODES.includes(domain.code) ? CROSSCUT_NOTES[domain.code] : null,
      });

      walkConcepts(module.concepts, (concept) => {
        lookup.set(concept.pathKey, {
          key: concept.pathKey,
          type: "concept",
          eyebrow: `${module.code} 知识点`,
          title: concept.title,
          pathKey: concept.pathKey,
          summary: concept.detail.definition || getConceptFallbackSummary(concept),
          detail: concept.detail,
          status: normalizeDetailStatus(concept.detail),
          stats: [concept.children.length ? `下一级内容 ${concept.children.length} 项` : "最细一级"],
          parentTitle: module.fullTitle,
          relatedNotes: [],
          relatedLinks: [],
          childTitles: concept.children.map((child) => child.title),
          impactScope: CROSSCUT_CODES.includes(domain.code) ? CROSSCUT_NOTES[domain.code] : null,
        });
      });
    }
  }

  for (const group of relationGroups) {
    for (const entry of group.entries) {
      lookup.set(getRelationDetailKey(group.title, entry.text), {
        key: getRelationDetailKey(group.title, entry.text),
        type: "relation",
        eyebrow: `${group.title} / 关键关系`,
        title: entry.text,
        pathKey: null,
        summary: entry.notes[0] || `理解这条连接后，再阅读两侧内容会更清晰。`,
        detail: {},
        status: "none",
        stats: [entry.notes.length ? `${entry.notes.length} 条补充说明` : "结构关系"],
        parentTitle: group.title,
        relatedNotes: entry.notes,
        relatedLinks: entry.references.map((reference) => ({
          key: reference.pathKey,
          label:
            reference.type === "domain"
              ? `${reference.code}. ${reference.title}`
              : `${reference.code}. ${reference.title}`,
        })),
        childTitles: [],
        impactScope: entry.references.length
          ? `涉及范围：${entry.references.map((reference) => reference.code).join(" / ")}`
          : null,
      });
    }
  }

  return lookup;
}

function normalizeDetailStatus(detail) {
  if (!detail || typeof detail !== "object") {
    return "none";
  }

  if (detail.status === "placeholder") {
    return "none";
  }

  if (detail.status && STATUS_LABELS[detail.status]) {
    return detail.status;
  }

  return hasMeaningfulDetail(detail) ? "seed" : "none";
}

function getConceptFallbackSummary(concept) {
  if (concept.children.length) {
    return `该节点下设 ${concept.children.length} 个更细的知识点，可继续展开查阅。`;
  }

  return "该节点当前未单独补充说明，建议结合上下文一并理解。";
}

function getDomainRelationKey(pathKey) {
  return `domain-relations/${pathKey}`;
}

function getRelationDetailKey(groupTitle, entryText) {
  return `relation/${groupTitle}/${entryText}`;
}

function render(graph) {
  renderStats(graph.stats);
  renderJumpbar(graph.domains);
  renderRoadmap(graph.stages);
  renderRelationGrid(graph.relationGroups);
}

function bindInteractions() {
  const roots = [elements.roadmap, elements.relationGrid, elements.detailPanelCard];
  for (const root of roots) {
    root.addEventListener("click", handleInteractiveSelection);
    root.addEventListener("keydown", handleInteractiveKeydown);
  }

  elements.detailBackdrop.addEventListener("click", closeDetailDrawer);
  elements.detailClose.addEventListener("click", closeDetailDrawer);
  document.addEventListener("keydown", handleGlobalKeydown);
}

function handleInteractiveSelection(event) {
  if (event.target.closest("summary")) {
    return;
  }

  const target = event.target.closest("[data-path-key], [data-detail-key]");
  if (!target) {
    return;
  }

  const key = target.dataset.pathKey || target.dataset.detailKey;
  if (!key) {
    return;
  }

  setActiveDetail(key, target);
}

function handleInteractiveKeydown(event) {
  if (event.key !== "Enter" && event.key !== " ") {
    return;
  }

  const target = event.target.closest("[data-path-key], [data-detail-key]");
  if (!target) {
    return;
  }

  event.preventDefault();
  const key = target.dataset.pathKey || target.dataset.detailKey;
  if (key) {
    setActiveDetail(key, target);
  }
}

function handleGlobalKeydown(event) {
  if (event.key === "Escape" && state.isDrawerOpen) {
    closeDetailDrawer();
  }
}

function setActiveDetail(key, trigger = null) {
  state.activeKey = key;
  if (trigger instanceof HTMLElement) {
    state.lastTrigger = trigger;
  }
  renderDetailPanel();
  syncActiveElements();
  setDrawerOpen(true);
}

function closeDetailDrawer() {
  state.activeKey = null;
  renderDetailPanel();
  syncActiveElements();
  setDrawerOpen(false);
}

function setDrawerOpen(open) {
  state.isDrawerOpen = open;
  elements.detailDrawer.classList.toggle("is-open", open);
  elements.detailDrawer.setAttribute("aria-hidden", open ? "false" : "true");
  document.body.classList.toggle("drawer-open", open);

  if (open) {
    elements.detailClose.focus({ preventScroll: true });
    return;
  }

  const trigger = state.lastTrigger;
  if (trigger && document.contains(trigger)) {
    trigger.focus({ preventScroll: true });
  }
}

function syncActiveElements() {
  document.querySelectorAll(".module-card, .domain-card").forEach((node) =>
    node.classList.remove("is-selected")
  );

  document.querySelectorAll("[data-path-key], [data-detail-key]").forEach((node) => {
    const key = node.dataset.pathKey || node.dataset.detailKey;
    const isActive = key === state.activeKey;
    node.classList.toggle("is-selected", isActive);
    if (node.getAttribute("role") === "button") {
      node.setAttribute("aria-pressed", isActive ? "true" : "false");
    }

    if (isActive && node.classList.contains("module-header")) {
      node.closest(".module-card")?.classList.add("is-selected");
    }

    if (isActive && node.classList.contains("domain-header")) {
      node.closest(".domain-card")?.classList.add("is-selected");
    }
  });
}

function renderDetailPanel() {
  const entry = state.activeKey ? state.graph.lookup.get(state.activeKey) : null;

  if (!entry) {
    elements.detailPanelCard.innerHTML = `
      <p class="detail-panel-eyebrow">阅读提示</p>
      <h2 id="detail-panel-title">内容详情</h2>
      <p class="detail-panel-summary">
        选择左侧任一知识项，此处会补充背景、价值与延伸阅读线索。
      </p>
      <div class="detail-panel-empty">
        当前尚未选择具体内容。
      </div>
    `;
    return;
  }

  const statusLabel = STATUS_LABELS[entry.status] || STATUS_LABELS.none;
  const sections = buildDetailTriad(entry);

  elements.detailPanelCard.innerHTML = `
    <p class="detail-panel-eyebrow">${escapeHtml(entry.eyebrow)}</p>
    <h2 id="detail-panel-title">${escapeHtml(entry.title)}</h2>
    ${entry.pathKey ? `<p class="detail-panel-path">${escapeHtml(entry.pathKey)}</p>` : ""}
    <p class="detail-panel-summary">${escapeHtml(entry.summary)}</p>
    <div class="detail-panel-meta">
      ${[
        ...entry.stats.map((item) => ({ label: item, className: "" })),
        { label: getTypeLabel(entry.type), className: "" },
        { label: `内容状态：${statusLabel}`, className: `is-${entry.status}` },
      ]
        .filter((item) => item.label)
        .map(
          (item) =>
            `<span class="${escapeAttribute(item.className)}">${escapeHtml(item.label)}</span>`
        )
        .join("")}
    </div>
    ${sections
      .map((section) => renderPanelCompositeSection(section.title, section.blocks, section.emptyText))
      .join("")}
  `;
}

function buildDetailTriad(entry) {
  const detail = entry.detail || {};
  const prerequisiteItems = detail.resolvedPrerequisites || [];
  const nextItems = detail.resolvedNext || [];
  const previewChildren = getPreviewChildren(entry.childTitles, 10);

  const whatBlocks = [];
  const problemBlocks = [];
  const exampleBlocks = [];

  const definitionText = detail.definition || entry.summary;
  if (definitionText) {
    whatBlocks.push({ type: "text", content: definitionText });
  }

  if (entry.parentTitle) {
    whatBlocks.push({ type: "list", label: "所属层级", items: [entry.parentTitle] });
  }

  if (previewChildren.length) {
    whatBlocks.push({ type: "list", label: "下一级内容", items: previewChildren });
  }

  if (entry.impactScope) {
    problemBlocks.push({ type: "text", label: "适用范围", content: entry.impactScope });
  }

  if (detail.importance) {
    problemBlocks.push({ type: "text", label: "阅读价值", content: detail.importance });
  }

  if (prerequisiteItems.length) {
    problemBlocks.push({ type: "refs", label: "建议先了解", items: prerequisiteItems });
  }

  if (entry.relatedNotes.length) {
    problemBlocks.push({ type: "list", label: "关联内容", items: entry.relatedNotes });
  }

  if (entry.relatedLinks?.length) {
    problemBlocks.push({ type: "refs", label: "相关内容", items: entry.relatedLinks });
  }

  if (nextItems.length) {
    problemBlocks.push({ type: "refs", label: "延伸阅读", items: nextItems });
  }

  if (detail.minimumDemo) {
    exampleBlocks.push({ type: "text", label: "理解路径", content: detail.minimumDemo });
  }

  if (Array.isArray(detail.examples) && detail.examples.length) {
    exampleBlocks.push({ type: "list", label: "示例", items: detail.examples });
  }

  if (Array.isArray(detail.toolchain) && detail.toolchain.length) {
    exampleBlocks.push({ type: "list", label: "常用工具", items: detail.toolchain });
  }

  if (Array.isArray(detail.coreMetrics) && detail.coreMetrics.length) {
    exampleBlocks.push({ type: "list", label: "观察重点", items: detail.coreMetrics });
  }

  if (detail.hardwareBudget) {
    exampleBlocks.push({ type: "text", label: "资源要求", content: detail.hardwareBudget });
  }

  if (Array.isArray(detail.failureSigns) && detail.failureSigns.length) {
    exampleBlocks.push({ type: "list", label: "常见问题", items: detail.failureSigns });
  }

  if (Array.isArray(detail.pitfalls) && detail.pitfalls.length) {
    exampleBlocks.push({ type: "list", label: "常见误区", items: detail.pitfalls });
  }

  return [
    {
      title: "核心说明",
      blocks: whatBlocks,
      emptyText: "该项暂未补充更多背景说明。",
    },
    {
      title: "关联与价值",
      blocks: problemBlocks,
      emptyText: "该项暂未补充关联说明。",
    },
    {
      title: "实践与延伸",
      blocks: exampleBlocks,
      emptyText: "该项暂未补充示例或实践说明。",
    },
  ];
}

function getPreviewChildren(childTitles, limit) {
  if (!Array.isArray(childTitles) || !childTitles.length) {
    return [];
  }

  const previewChildren = childTitles.slice(0, limit);
  if (childTitles.length > previewChildren.length) {
    previewChildren.push(`还有 ${childTitles.length - previewChildren.length} 项`);
  }

  return previewChildren;
}

function renderPanelCompositeSection(title, blocks, emptyText) {
  return `
    <section class="detail-panel-section">
      <h3>${escapeHtml(title)}</h3>
      ${
        blocks.length
          ? `<div class="detail-panel-blocks">${blocks.map(renderPanelBlock).join("")}</div>`
          : `<p class="detail-panel-placeholder">${escapeHtml(emptyText)}</p>`
      }
    </section>
  `;
}

function renderPanelBlock(block) {
  const label = block.label
    ? `<p class="detail-panel-block-label">${escapeHtml(block.label)}</p>`
    : "";

  if (block.type === "text") {
    return `
      <div class="detail-panel-block">
        ${label}
        <p>${escapeHtml(block.content)}</p>
      </div>
    `;
  }

  if (block.type === "list") {
    return `
      <div class="detail-panel-block">
        ${label}
        <ul>
          ${block.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </div>
    `;
  }

  if (block.type === "refs") {
    return `
      <div class="detail-panel-block">
        ${label}
        <div class="detail-panel-links">
          ${renderPanelReferenceLinks(block.items)}
        </div>
      </div>
    `;
  }

  return "";
}

function renderPanelReferenceLinks(items) {
  return items
    .map(
      (item) => `
        ${
          item.key
            ? `
              <button
                type="button"
                class="detail-panel-link"
                data-path-key="${escapeAttribute(item.key)}"
              >
                ${escapeHtml(item.label)}
              </button>
            `
            : `
              <button type="button" class="detail-panel-link" disabled>
                ${escapeHtml(item.label)}
              </button>
            `
        }
      `
    )
    .join("");
}

function getTypeLabel(type) {
  const labels = {
    domain: "领域",
    "domain-relations": "领域关系",
    module: "专题",
    concept: "知识点",
    relation: "关键关系",
  };

  return labels[type] || "知识项";
}

function renderStats(stats) {
  const cards = [
    { label: "领域", value: stats.domains },
    { label: "专题", value: stats.modules },
    { label: "知识点", value: stats.concepts },
    { label: "已展开条目", value: stats.detailNodes },
  ];

  elements.stats.innerHTML = cards
    .map(
      (card) => `
        <article class="stat-card">
          <span class="stat-label">${escapeHtml(card.label)}</span>
          <strong class="stat-value">${card.value}</strong>
        </article>
      `
    )
    .join("");
}

function renderJumpbar(domains) {
  elements.jumpbar.innerHTML = domains
    .map(
      (domain) => `
        <a href="#domain-${escapeHtml(domain.code)}">${escapeHtml(domain.code)}. ${escapeHtml(domain.displayTitle)}</a>
      `
    )
    .join("");
}

function renderRoadmap(stages) {
  const stageMarkup = stages
    .map(
      (stage) => `
      <section class="stage-card" style="--stage-color: ${stage.color}" id="stage-${escapeAttribute(stage.id)}">
        <header class="stage-header">
          <p class="stage-eyebrow">推荐阅读顺序</p>
          <h2>${escapeHtml(stage.title)}</h2>
          <p>${escapeHtml(stage.description)}</p>
          <div class="stage-meta">
            <span>包含 ${stage.domains.length} 个领域</span>
            <span>展开为 ${stage.moduleCount} 个专题</span>
            <span>覆盖 ${stage.conceptCount} 个知识点</span>
          </div>
        </header>
        ${renderStageRelations(stage)}
        <div class="domain-grid">
          ${stage.domains.map(renderDomainCard).join("")}
        </div>
      </section>
    `
    )
    .join("");

  elements.roadmap.innerHTML = stageMarkup;
}

function renderStageRelations(stage) {
  if (!stage.relationPreview.length) {
    return "";
  }

  const preview = stage.relationPreview.slice(0, 6);
  return `
    <section class="stage-relations" aria-label="${escapeAttribute(stage.title)} 的关键关系">
      <div class="stage-relations-header">
        <strong>本阶段重点关联</strong>
        <span>${stage.relationPreview.length} 条</span>
      </div>
      <div class="stage-relations-list">
        ${preview
          .map(
            (entry) => `
              <button
                type="button"
                class="stage-relation-chip"
                data-detail-key="${escapeAttribute(entry.key)}"
                aria-label="查看 ${escapeAttribute(entry.text)} 的详情"
              >
                <span class="stage-relation-group">${escapeHtml(entry.groupTitle)}</span>
                <span class="stage-relation-text">${escapeHtml(entry.text)}</span>
              </button>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderDomainCard(domain) {
  const status = normalizeDetailStatus(domain.detail);
  return `
    <article class="domain-card" id="domain-${escapeHtml(domain.code)}">
      <header
        class="domain-header"
        data-path-key="${escapeAttribute(domain.pathKey)}"
        tabindex="0"
        role="button"
        aria-label="查看 ${escapeAttribute(domain.displayFullTitle)} 的详情"
      >
        <p class="domain-eyebrow">${escapeHtml(domain.code)} 领域</p>
        <h3>${escapeHtml(domain.displayFullTitle)}</h3>
        ${
          domain.detail.definition
            ? `<p class="domain-summary">${escapeHtml(domain.detail.definition)}</p>`
            : ""
        }
        ${domain.summary ? `<p class="domain-summary">${escapeHtml(domain.summary)}</p>` : ""}
        <div class="domain-stats">
          ${CROSSCUT_CODES.includes(domain.code) ? `<span class="domain-badge">横向主题</span>` : ""}
          <span class="domain-badge is-${escapeAttribute(status)}">${escapeHtml(
            STATUS_LABELS[status]
          )}</span>
          <span>包含 ${domain.modules.length} 个专题</span>
          <span>覆盖 ${domain.conceptCount} 个知识点</span>
        </div>
      </header>
      ${renderDomainModules(domain)}
      ${renderDomainRelations(domain)}
    </article>
  `;
}

function renderDomainModules(domain) {
  const groups = DOMAIN_GROUPS[domain.code];
  if (!groups?.length) {
    return `<div class="module-grid">${domain.modules.map(renderModuleCard).join("")}</div>`;
  }

  const renderedCodes = new Set();
  const blocks = groups
    .map((group) => {
      const modules = group.codes
        .map((code) => domain.modules.find((module) => module.code === code))
        .filter(Boolean);

      if (!modules.length) {
        return "";
      }

      modules.forEach((module) => renderedCodes.add(module.code));

      return `
        <section class="module-group">
          <div class="module-group-header">
            <strong>${escapeHtml(group.title)}</strong>
            <span>${modules.length} 个专题</span>
          </div>
          <div class="module-grid">
            ${modules.map(renderModuleCard).join("")}
          </div>
        </section>
      `;
    })
    .filter(Boolean);

  const leftovers = domain.modules.filter((module) => !renderedCodes.has(module.code));
  if (leftovers.length) {
    blocks.push(`
      <section class="module-group">
        <div class="module-group-header">
          <strong>其他专题</strong>
          <span>${leftovers.length} 个专题</span>
        </div>
        <div class="module-grid">
          ${leftovers.map(renderModuleCard).join("")}
        </div>
      </section>
    `);
  }

  return blocks.join("");
}

function renderModuleCard(module) {
  const detailNodes = collectDetailNodes(module);
  const conceptCount = countConcepts(module.concepts);
  const layoutStyle = getModuleLayoutStyle(module, conceptCount, detailNodes.length);
  const status = normalizeDetailStatus(module.detail);

  return `
    <article
      class="module-card"
      data-path-key="${escapeAttribute(module.pathKey)}"
      style="${escapeAttribute(layoutStyle)}"
    >
      <header
        class="module-header"
        data-path-key="${escapeAttribute(module.pathKey)}"
        tabindex="0"
        role="button"
        aria-label="查看 ${escapeAttribute(module.fullTitle)} 的详情"
      >
        <div class="module-headline">
          <span class="module-code">${escapeHtml(module.code)}</span>
          <span class="module-status is-${escapeAttribute(status)}">${escapeHtml(
            STATUS_LABELS[status]
          )}</span>
        </div>
        <h4>${escapeHtml(module.title)}</h4>
        ${module.detail.definition ? `<p class="module-summary">${escapeHtml(module.detail.definition)}</p>` : ""}
      </header>
      <div class="module-body">
        ${renderConceptTree(module.concepts)}
        ${detailNodes.length ? renderDetailGroup(detailNodes) : ""}
      </div>
    </article>
  `;
}

function renderConceptTree(concepts) {
  if (!concepts.length) {
    return `<div class="empty-state">当前专题尚未继续拆分至更细层级。</div>`;
  }

  return `<div class="concept-tree">${concepts.map(renderConceptCluster).join("")}</div>`;
}

function renderConceptCluster(concept) {
  const hasDetail = hasMeaningfulDetail(concept.detail);
  const descendants = flattenConceptFlow(concept.children);
  const rootClasses = getConceptLabelClasses(hasDetail, !descendants.length, "is-root");

  return `
    <section class="concept-cluster">
      <div
        class="${rootClasses}"
        data-path-key="${escapeAttribute(concept.pathKey)}"
        tabindex="0"
        role="button"
        title="${escapeAttribute(concept.pathKey)}"
        aria-label="查看 ${escapeAttribute(concept.title)} 的详情"
      >${escapeHtml(concept.title)}</div>
      ${
        descendants.length
          ? `<div class="concept-flow">${descendants.map(renderConceptFlowItem).join("")}</div>`
          : ""
      }
    </section>
  `;
}

function renderConceptFlowItem(concept) {
  const classes = getConceptLabelClasses(hasMeaningfulDetail(concept.detail), false);
  return `
    <div
      class="${classes}"
      data-path-key="${escapeAttribute(concept.pathKey)}"
      tabindex="0"
      role="button"
      title="${escapeAttribute(concept.pathKey)}"
      aria-label="查看 ${escapeAttribute(concept.title)} 的详情"
    >${escapeHtml(concept.title)}</div>
  `;
}

function flattenConceptFlow(children, prefix = []) {
  const items = [];

  for (const child of children) {
    const title = prefix.length ? `${prefix.join(" / ")} / ${child.title}` : child.title;
    items.push({
      title,
      pathKey: child.pathKey,
      detail: child.detail,
    });
    items.push(...flattenConceptFlow(child.children, [...prefix, child.title]));
  }

  return items;
}

function getConceptLabelClasses(hasDetail, isLeaf, extraClass = "") {
  return ["concept-label", hasDetail ? "has-detail" : "", isLeaf ? "is-leaf" : "", extraClass]
    .filter(Boolean)
    .join(" ");
}

function getModuleLayoutStyle(module, conceptCount, detailCount) {
  const titleWeight = Math.min(module.title.length * 5, 70);
  const summaryWeight = module.detail.definition ? 56 : 0;
  const basis = Math.max(
    132,
    Math.min(420, 116 + conceptCount * 11 + detailCount * 28 + titleWeight + summaryWeight)
  );
  const max = Math.max(220, Math.min(520, basis + (detailCount ? 84 : 44)));
  return `--module-basis:${basis}px;--module-max:${max}px;`;
}

function renderDetailGroup(items) {
  return `
    <details class="detail-group">
      <summary>
        <strong>本专题相关内容 ${items.length} 项</strong>
      </summary>
      <div class="detail-list">
        ${items.map(renderDetailCard).join("")}
      </div>
    </details>
  `;
}

function renderDetailCard(item) {
  const { detail } = item;
  const status = normalizeDetailStatus(detail);
  const segments = [];
  const prerequisiteLabels = getReferenceLabels(detail.resolvedPrerequisites, detail.prerequisites);
  const nextLabels = getReferenceLabels(detail.resolvedNext, detail.next);

  if (detail.definition) {
    segments.push(`<p>${escapeHtml(detail.definition)}</p>`);
  }
  if (detail.importance) {
    segments.push(`<p><strong>重要性：</strong>${escapeHtml(detail.importance)}</p>`);
  }
  if (prerequisiteLabels.length) {
    segments.push(`<p><strong>建议先了解：</strong>${escapeHtml(prerequisiteLabels.join(" / "))}</p>`);
  }
  if (detail.minimumDemo) {
    segments.push(`<p><strong>理解路径：</strong>${escapeHtml(detail.minimumDemo)}</p>`);
  }
  if (Array.isArray(detail.coreMetrics) && detail.coreMetrics.length) {
    segments.push(`
      <p><strong>观察重点：</strong>${escapeHtml(detail.coreMetrics.slice(0, 4).join(" / "))}</p>
    `);
  }
  if (Array.isArray(detail.examples) && detail.examples.length) {
    segments.push(`
      <ul>
        ${detail.examples.map((entry) => `<li>${escapeHtml(entry)}</li>`).join("")}
      </ul>
    `);
  }
  if (Array.isArray(detail.pitfalls) && detail.pitfalls.length) {
    segments.push(`
      <p><strong>常见误区：</strong></p>
      <ul>
        ${detail.pitfalls.map((entry) => `<li>${escapeHtml(entry)}</li>`).join("")}
      </ul>
    `);
  }
  if (nextLabels.length) {
    segments.push(`
      <p><strong>延伸阅读：</strong>${escapeHtml(nextLabels.join(" / "))}</p>
    `);
  }

  return `
    <article
      class="detail-card"
      data-path-key="${escapeAttribute(item.pathKey)}"
      tabindex="0"
      role="button"
      aria-label="查看 ${escapeAttribute(item.title)} 的详情"
    >
      <div class="detail-card-head">
        <h5>${escapeHtml(item.title)}</h5>
        <span class="module-status is-${escapeAttribute(status)}">${escapeHtml(
          STATUS_LABELS[status]
        )}</span>
      </div>
      ${segments.join("")}
    </article>
  `;
}

function getReferenceLabels(resolvedItems, fallbackValues) {
  if (Array.isArray(resolvedItems) && resolvedItems.length) {
    return resolvedItems.map((item) => item.label);
  }

  if (!Array.isArray(fallbackValues)) {
    return [];
  }

  return fallbackValues.map(cleanReferenceText).filter(Boolean);
}

function renderDomainRelations(domain) {
  if (!domain.relationNotes.length) {
    return "";
  }

  return `
    <details class="detail-group">
      <summary>
        <strong>本领域关键关系 ${domain.relationNotes.length} 条</strong>
      </summary>
      <div class="detail-list">
        <article
          class="detail-card"
          data-detail-key="${escapeAttribute(getDomainRelationKey(domain.pathKey))}"
          tabindex="0"
          role="button"
          aria-label="查看 ${escapeAttribute(domain.displayFullTitle)} 结构关系的详情"
        >
          <ul>
            ${domain.relationNotes.map((note) => `<li>${escapeHtml(note)}</li>`).join("")}
          </ul>
        </article>
      </div>
    </details>
  `;
}

function renderRelationGrid(groups) {
  elements.relationGrid.innerHTML = groups
    .map(
      (group) => `
        <article class="relation-card" style="${escapeAttribute(getRelationLayoutStyle(group))}">
          <h3>${escapeHtml(group.title)}</h3>
          <div class="relation-list">
            ${group.entries.map((entry) => renderRelationEntry(group.title, entry)).join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function getRelationLayoutStyle(group) {
  const basis = Math.max(180, Math.min(340, 150 + group.entries.length * 16 + group.title.length * 3));
  const max = Math.max(240, Math.min(420, basis + 70));
  const accent = getRelationAccent(group.title);
  return [
    `--relation-basis:${basis}px`,
    `--relation-max:${max}px`,
    `--relation-accent:${accent.accent}`,
    `--relation-accent-ink:${accent.ink}`,
    `--relation-note-bg:${accent.noteBg}`,
    `--relation-entry-bg:${accent.entryBg}`,
    `--relation-wash:${accent.wash}`,
  ].join(";");
}

function getRelationAccent(title) {
  const palette = [
    {
      match: "前置关系",
      accent: "#9bbbe4",
      ink: "#dceafb",
      noteBg: "#22334a",
      entryBg: "#101b2a",
      wash: "#142131",
    },
    {
      match: "构成关系",
      accent: "#8db0dd",
      ink: "#d9e7fb",
      noteBg: "#203047",
      entryBg: "#0f1a28",
      wash: "#152233",
    },
    {
      match: "互补关系",
      accent: "#82a7d6",
      ink: "#d6e5fa",
      noteBg: "#1e2d44",
      entryBg: "#0f1927",
      wash: "#162436",
    },
    {
      match: "替代 / 取舍关系",
      accent: "#789fcc",
      ink: "#d3e2f9",
      noteBg: "#1d2b41",
      entryBg: "#0e1825",
      wash: "#162333",
    },
    {
      match: "反馈闭环关系",
      accent: "#6e95c4",
      ink: "#d1e0f7",
      noteBg: "#1b293e",
      entryBg: "#0d1724",
      wash: "#152130",
    },
    {
      match: "数据流关系",
      accent: "#87abd2",
      ink: "#d8e6fa",
      noteBg: "#213148",
      entryBg: "#101a28",
      wash: "#152334",
    },
    {
      match: "记忆关系",
      accent: "#7b9fc6",
      ink: "#d4e3f9",
      noteBg: "#1f2e44",
      entryBg: "#0f1926",
      wash: "#162334",
    },
    {
      match: "协议与接口关系",
      accent: "#7194bc",
      ink: "#d0dff7",
      noteBg: "#1c293d",
      entryBg: "#0d1723",
      wash: "#15202f",
    },
    {
      match: "安全边界关系",
      accent: "#678ab3",
      ink: "#ccdcf5",
      noteBg: "#1a273a",
      entryBg: "#0c1622",
      wash: "#141f2d",
    },
    {
      match: "最核心",
      accent: "#a5c2e8",
      ink: "#e3effd",
      noteBg: "#24364e",
      entryBg: "#122032",
      wash: "#162536",
    },
  ];

  return (
    palette.find((item) => title.includes(item.match)) || {
      accent: "#86a8d1",
      ink: "#d8e6fa",
      noteBg: "#203148",
      entryBg: "#101a28",
      wash: "#152233",
    }
  );
}

function renderRelationEntry(groupTitle, entry) {
  return `
    <div
      class="relation-entry"
      data-detail-key="${escapeAttribute(getRelationDetailKey(groupTitle, entry.text))}"
      tabindex="0"
      role="button"
      aria-label="查看关系 ${escapeAttribute(entry.text)} 的详情"
    >
      ${escapeHtml(entry.text)}
      ${
        entry.notes.length
          ? `<div class="relation-notes">${entry.notes.map((note) => `<span>${escapeHtml(note)}</span>`).join("")}</div>`
          : ""
      }
    </div>
  `;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll("\n", " ");
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
