export const GRAPH_DEFAULT_CONFIG = {
  stages: [
    {
      id: "foundation",
      title: "01 基础底座",
      description: "从数学、经典 AI、机器学习与深度学习建立共同基础。",
      color: "#96b6df",
      codes: ["A", "B", "C", "D"],
    },
    {
      id: "modalities",
      title: "02 任务域与数据",
      description: "围绕语言、视觉、语音、视频与多模态任务，理解任务形态及其数据基础。",
      color: "#88aad4",
      codes: ["E", "F"],
    },
    {
      id: "llm-system",
      title: "03 大模型系统",
      description: "说明大模型的内部机制、对齐方式，以及与检索和外部知识的结合。",
      color: "#799dc8",
      codes: ["G", "H", "I"],
    },
    {
      id: "application",
      title: "04 应用与 Agent",
      description: "聚焦模型在应用系统、工具调用与多步任务中的组织方式。",
      color: "#6d90ba",
      codes: ["J", "K"],
    },
    {
      id: "production",
      title: "05 运行、治理与产品",
      description: "覆盖部署、评测、安全、合规与产品落地，形成完整运行闭环。",
      color: "#5f82ac",
      codes: ["L", "M", "N"],
    },
  ],
  crosscutCodes: ["F", "L", "M", "N"],
  domainGroups: {
    E: [
      {
        title: "模态与多模态",
        codes: ["E1", "E2", "E3", "E4", "E5"],
      },
      {
        title: "决策、具身与扩展",
        codes: ["E6", "E7", "E8"],
      },
    ],
  },
  domainDisplay: {
    E: {
      title: "模态、任务域与智能形态",
      note: "这一层覆盖范围较广，可先按语言、视觉、语音与多模态分别理解，再查阅决策、具身与扩展方向。",
    },
  },
  crosscutNotes: {
    F: "训练、RAG、评测与线上优化都依赖这一层的数据基础。",
    L: "系统稳定性、响应效率与成本控制最终都会落实到这一层。",
    M: "评测、安全与合规不宜后置，建议与系统建设同步推进。",
    N: "当问题转向场景边界、自动化范围与团队协作时，这一层负责把前述能力转化为产品方案。",
  },
  statusLabels: {
    none: "待完善",
    seed: "概览",
    draft: "详述",
    deep: "深入",
  },
};

export const DETAIL_TEXT_FIELDS = ["definition", "importance", "minimumDemo", "hardwareBudget"];
export const DETAIL_LIST_FIELDS = [
  "examples",
  "pitfalls",
  "prerequisites",
  "coreMetrics",
  "toolchain",
  "failureSigns",
  "next",
];
export const DETAIL_ALLOWED_FIELDS = ["status", ...DETAIL_TEXT_FIELDS, ...DETAIL_LIST_FIELDS];

export function createGraphConfig(overrides = {}) {
  return {
    stages: Array.isArray(overrides.stages) ? overrides.stages : GRAPH_DEFAULT_CONFIG.stages,
    crosscutCodes: Array.isArray(overrides.crosscutCodes)
      ? overrides.crosscutCodes
      : GRAPH_DEFAULT_CONFIG.crosscutCodes,
    domainGroups:
      overrides.domainGroups && typeof overrides.domainGroups === "object"
        ? overrides.domainGroups
        : GRAPH_DEFAULT_CONFIG.domainGroups,
    domainDisplay:
      overrides.domainDisplay && typeof overrides.domainDisplay === "object"
        ? overrides.domainDisplay
        : GRAPH_DEFAULT_CONFIG.domainDisplay,
    crosscutNotes:
      overrides.crosscutNotes && typeof overrides.crosscutNotes === "object"
        ? overrides.crosscutNotes
        : GRAPH_DEFAULT_CONFIG.crosscutNotes,
    statusLabels:
      overrides.statusLabels && typeof overrides.statusLabels === "object"
        ? overrides.statusLabels
        : GRAPH_DEFAULT_CONFIG.statusLabels,
  };
}

export function createGraphSourceFromMarkdown(markdown, overlay = {}) {
  const config = createGraphConfig(overlay.config || {});
  const topSections = splitByHeading(markdown, "## ");
  const domains = [];
  let relationGroups = [];

  for (const section of topSections) {
    if (/^[A-Z]\.\s/.test(section.title)) {
      domains.push(parseDomainSection(section, overlay.nodes || {}, config));
      continue;
    }

    if (section.title === "结构之间的关系总表") {
      relationGroups = parseRelationSection(section);
    }
  }

  const structureReferenceMap = buildStructureReferenceMap(domains);
  expandStructureReferences(domains, relationGroups, structureReferenceMap);
  enrichRelationReferences(relationGroups, structureReferenceMap);

  const runtime = buildRuntimeGraph({
    meta: {
      version: 2,
      updatedAt: overlay.meta?.updatedAt || currentIsoDate(),
      description:
        overlay.meta?.description ||
        "知识图谱的结构与详情统一序列化到 graph.json，取代运行时 markdown 解析。",
      migratedFrom: ["design.md", "data/node-details.json"],
    },
    config,
    domains,
    relationGroups,
  });

  return canonicalizeGraphSource(runtime);
}

export function buildRuntimeGraph(graphData) {
  const cloned = cloneGraphData(graphData);
  ensureNodeDetails(cloned);
  const config = createGraphConfig(cloned.config || {});
  const domains = Array.isArray(cloned.domains) ? cloned.domains : [];
  const relationGroups = Array.isArray(cloned.relationGroups) ? cloned.relationGroups : [];
  const stages = buildStages(domains, relationGroups, config);
  const lookup = buildSelectionIndex(domains, relationGroups, config);
  const referenceIssues = attachDetailReferences(domains, lookup);

  return {
    meta: cloned.meta || {},
    config,
    domains,
    relationGroups,
    stages,
    lookup,
    referenceIssues,
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

export function attachDetailShards(graphData, detailShards = []) {
  const cloned = cloneGraphData(graphData);
  ensureNodeDetails(cloned);
  const detailMap = new Map();

  for (const shard of detailShards) {
    if (!shard || typeof shard !== "object" || !shard.nodes || typeof shard.nodes !== "object") {
      continue;
    }

    for (const [pathKey, detail] of Object.entries(shard.nodes)) {
      detailMap.set(pathKey, sanitizeDetail(detail));
    }
  }

  walkGraphNodes(cloned, ({ node }) => {
    if (detailMap.has(node.pathKey)) {
      node.detail = detailMap.get(node.pathKey);
    }
  });

  return cloned;
}

export function walkGraphNodes(graphData, visitor) {
  const domains = Array.isArray(graphData?.domains) ? graphData.domains : [];

  for (const domain of domains) {
    visitor({ node: domain, type: "domain", domain, module: null, parent: null, depth: 0 });
    for (const module of domain.modules || []) {
      visitor({ node: module, type: "module", domain, module, parent: domain, depth: 1 });
      walkGraphConceptNodes(module.concepts || [], visitor, { domain, module }, 2);
    }
  }
}

export function listGraphNodes(graphData) {
  const items = [];
  walkGraphNodes(graphData, (entry) => {
    items.push(entry);
  });
  return items;
}

export function canonicalizeGraphSource(graphData) {
  const runtime =
    graphData.lookup instanceof Map && Array.isArray(graphData.domains)
      ? graphData
      : buildRuntimeGraph(graphData);

  walkDetailEntries(runtime.domains, ({ detail }) => {
    if (!detail || typeof detail !== "object") {
      return;
    }

    detail.prerequisites = normalizeCanonicalReferences(
      detail.resolvedPrerequisites,
      detail.prerequisites
    );
    detail.next = normalizeCanonicalReferences(detail.resolvedNext, detail.next);
    delete detail.resolvedPrerequisites;
    delete detail.resolvedNext;
  });

  return {
    meta: runtime.meta,
    config: runtime.config,
    domains: runtime.domains,
    relationGroups: runtime.relationGroups.map((group) => ({
      title: group.title,
      entries: group.entries.map((entry) => ({
        text: entry.text,
        notes: entry.notes,
        references: entry.references,
      })),
    })),
  };
}

export function validateGraphSource(graphData) {
  const errors = [];
  const warnings = [];

  if (!graphData || typeof graphData !== "object") {
    return {
      errors: ["graph.json 顶层必须是对象。"],
      warnings,
      referenceIssues: [],
      stats: null,
    };
  }

  if (!Array.isArray(graphData.domains) || !graphData.domains.length) {
    errors.push("graph.json 缺少非空 domains 数组。");
  }

  if (!Array.isArray(graphData.relationGroups)) {
    errors.push("graph.json 缺少 relationGroups 数组。");
  }

  const runtime = buildRuntimeGraph(graphData);
  const domainCodes = new Set();
  const moduleCodes = new Set();
  const pathKeys = new Set();

  for (const domain of runtime.domains) {
    if (!hasNonEmptyText(domain.code)) {
      errors.push("存在缺少 code 的 domain。");
    } else if (domainCodes.has(domain.code)) {
      errors.push(`domain code 重复：${domain.code}`);
    } else {
      domainCodes.add(domain.code);
    }

    if (!hasNonEmptyText(domain.pathKey)) {
      errors.push(`domain ${domain.code} 缺少 pathKey。`);
    } else if (pathKeys.has(domain.pathKey)) {
      errors.push(`pathKey 重复：${domain.pathKey}`);
    } else {
      pathKeys.add(domain.pathKey);
    }

    for (const module of domain.modules) {
      if (!hasNonEmptyText(module.code)) {
        errors.push(`domain ${domain.code} 下存在缺少 code 的 module。`);
      } else if (moduleCodes.has(module.code)) {
        errors.push(`module code 重复：${module.code}`);
      } else {
        moduleCodes.add(module.code);
      }

      if (!hasNonEmptyText(module.pathKey)) {
        errors.push(`module ${module.code} 缺少 pathKey。`);
      } else if (pathKeys.has(module.pathKey)) {
        errors.push(`pathKey 重复：${module.pathKey}`);
      } else {
        pathKeys.add(module.pathKey);
      }

      walkConcepts(module.concepts, (concept) => {
        if (!hasNonEmptyText(concept.pathKey)) {
          errors.push(`concept ${concept.title} 缺少 pathKey。`);
          return;
        }

        if (pathKeys.has(concept.pathKey)) {
          errors.push(`pathKey 重复：${concept.pathKey}`);
          return;
        }

        pathKeys.add(concept.pathKey);
      });
    }
  }

  for (const stage of runtime.config.stages) {
    for (const code of stage.codes || []) {
      if (!domainCodes.has(code)) {
        warnings.push(`stage ${stage.id} 引用了不存在的 domain code：${code}`);
      }
    }
  }

  if (runtime.referenceIssues.length) {
    for (const issue of runtime.referenceIssues) {
      const suffix = issue.matches?.length ? ` (${issue.matches.join(", ")})` : "";
      errors.push(
        `${issue.ownerPathKey} 的 ${issue.fieldName} 存在 ${issue.reason} 引用：${issue.value}${suffix}`
      );
    }
  }

  return {
    errors,
    warnings,
    referenceIssues: runtime.referenceIssues,
    stats: runtime.stats,
  };
}

export function normalizeDetailStatus(detail, statusLabels = GRAPH_DEFAULT_CONFIG.statusLabels) {
  if (!detail || typeof detail !== "object") {
    return "none";
  }

  if (detail.status === "placeholder") {
    return "none";
  }

  if (detail.status && statusLabels[detail.status]) {
    return detail.status;
  }

  return hasMeaningfulDetail(detail) ? "seed" : "none";
}

export function countConcepts(concepts) {
  let total = 0;
  walkConcepts(concepts, () => {
    total += 1;
  });
  return total;
}

export function hasMeaningfulDetail(detail) {
  if (!detail || typeof detail !== "object") {
    return false;
  }

  return (
    DETAIL_TEXT_FIELDS.some((field) => hasNonEmptyText(detail[field])) ||
    DETAIL_LIST_FIELDS.some((field) => hasNonEmptyList(detail[field]))
  );
}

export function cleanReferenceText(value) {
  if (!hasNonEmptyText(value)) {
    return "";
  }

  return cleanMarkdown(String(value)).replace(/\s+/g, " ").trim();
}

export function getDomainRelationKey(pathKey) {
  return `domain-relations/${pathKey}`;
}

export function getRelationDetailKey(groupTitle, entryText) {
  return `relation/${groupTitle}/${entryText}`;
}

function parseDomainSection(section, overlayNodes, config) {
  const headingMatch = section.title.match(/^([A-Z])\.\s+(.+)$/);
  const code = headingMatch[1];
  const title = headingMatch[2];
  const display = config.domainDisplay[code];
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
  if (!matcher.keys.length) {
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

function buildStages(domains, relationGroups, config) {
  const domainMap = new Map(domains.map((domain) => [domain.code, domain]));

  return config.stages
    .map((stage) => {
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
    })
    .filter((stage) => stage.domains.length);
}

function buildSelectionIndex(domains, relationGroups, config) {
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
      status: normalizeDetailStatus(domain.detail, config.statusLabels),
      stats: [`包含 ${domain.modules.length} 个专题`, `覆盖 ${domain.conceptCount} 个知识点`],
      parentTitle: null,
      relatedNotes: domain.relationNotes,
      relatedLinks: [],
      childTitles: domain.modules.map((module) => module.fullTitle),
      impactScope: config.crosscutCodes.includes(domain.code)
        ? config.crosscutNotes[domain.code]
        : domain.displayNote,
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
        impactScope: config.crosscutCodes.includes(domain.code)
          ? config.crosscutNotes[domain.code]
          : null,
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
        status: normalizeDetailStatus(module.detail, config.statusLabels),
        stats: [
          `包含 ${conceptCount} 个知识点`,
          detailNodes.length ? `补充内容 ${detailNodes.length} 项` : null,
        ].filter(Boolean),
        parentTitle: domain.displayFullTitle,
        relatedNotes: [],
        relatedLinks: [],
        childTitles: module.concepts.map((concept) => concept.title),
        impactScope: config.crosscutCodes.includes(domain.code)
          ? config.crosscutNotes[domain.code]
          : null,
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
          status: normalizeDetailStatus(concept.detail, config.statusLabels),
          stats: [concept.children.length ? `下一级内容 ${concept.children.length} 项` : "最细一级"],
          parentTitle: module.fullTitle,
          relatedNotes: [],
          relatedLinks: [],
          childTitles: concept.children.map((child) => child.title),
          impactScope: config.crosscutCodes.includes(domain.code)
            ? config.crosscutNotes[domain.code]
            : null,
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
        summary: entry.notes[0] || `这是 ${group.title} 中的一条关键结构关系。`,
        detail: {},
        status: "none",
        stats: [entry.notes.length ? `${entry.notes.length} 条补充说明` : "结构关系"],
        parentTitle: group.title,
        relatedNotes: entry.notes,
        relatedLinks: entry.references.map((reference) => ({
          key: reference.pathKey,
          label: `${reference.code}. ${reference.title}`,
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

function getConceptFallbackSummary(concept) {
  if (concept.children.length) {
    return `该节点下设 ${concept.children.length} 个更细的知识点，可继续展开查阅。`;
  }

  return "该节点当前未单独补充说明，建议结合上下文一并理解。";
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
  const pathWithoutDomain = entry.pathKey.includes("/")
    ? entry.pathKey.slice(entry.pathKey.indexOf("/") + 1)
    : "";

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

function normalizeCanonicalReferences(resolvedItems, fallbackValues) {
  if (Array.isArray(resolvedItems) && resolvedItems.length) {
    return resolvedItems.map((item) => item.key || item.label).filter(Boolean);
  }

  if (!Array.isArray(fallbackValues)) {
    return [];
  }

  return fallbackValues.map(cleanReferenceText).filter(Boolean);
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

function ensureNodeDetails(graphData) {
  walkGraphNodes(graphData, ({ node }) => {
    if (!node.detail || typeof node.detail !== "object" || Array.isArray(node.detail)) {
      node.detail = {};
    }
  });
}

function sanitizeDetail(detail) {
  if (!detail || typeof detail !== "object" || Array.isArray(detail)) {
    return {};
  }

  const result = {};

  if (hasNonEmptyText(detail.status)) {
    result.status = detail.status.trim();
  }

  for (const field of DETAIL_TEXT_FIELDS) {
    if (hasNonEmptyText(detail[field])) {
      result[field] = detail[field].trim();
    }
  }

  for (const field of DETAIL_LIST_FIELDS) {
    if (!Array.isArray(detail[field])) {
      continue;
    }

    const values = detail[field]
      .map((item) => (typeof item === "string" ? item.trim() : ""))
      .filter(Boolean);

    if (values.length) {
      result[field] = values;
    }
  }

  return result;
}

function walkGraphConceptNodes(concepts, visitor, context, depth) {
  for (const concept of concepts) {
    visitor({
      node: concept,
      type: "concept",
      domain: context.domain,
      module: context.module,
      parent: context.parent || context.module,
      depth,
    });
    walkGraphConceptNodes(concept.children || [], visitor, { ...context, parent: concept }, depth + 1);
  }
}

function walkConcepts(concepts, visitor) {
  for (const concept of concepts) {
    visitor(concept);
    walkConcepts(concept.children, visitor);
  }
}

function hasNonEmptyText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function hasNonEmptyList(value) {
  return Array.isArray(value) && value.some((item) => hasNonEmptyText(item));
}

function cloneGraphData(graphData) {
  if (typeof structuredClone === "function") {
    return structuredClone(graphData);
  }

  return JSON.parse(JSON.stringify(graphData));
}

function currentIsoDate() {
  return new Date().toISOString().slice(0, 10);
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
