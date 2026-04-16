const STAGES = [
  {
    id: "foundation",
    title: "01 基础底座",
    description: "先把经典 AI、机器学习、深度学习和底层能力串成一条主线。",
    color: "#96b6df",
    codes: ["A", "B", "C", "D"],
  },
  {
    id: "modalities",
    title: "02 任务域与数据",
    description: "然后再把语言、视觉、语音、视频、多模态以及数据横切层挂上去。",
    color: "#88aad4",
    codes: ["E", "F"],
  },
  {
    id: "llm-system",
    title: "03 大模型系统",
    description: "这一段把 LLM 本体、后训练、对齐、检索和外部知识连接起来。",
    color: "#799dc8",
    codes: ["G", "H", "I"],
  },
  {
    id: "application",
    title: "04 应用与 Agent",
    description: "应用工程负责稳定性，Agent 系统负责多步自治、状态和工具编排。",
    color: "#6d90ba",
    codes: ["J", "K"],
  },
  {
    id: "production",
    title: "05 运行、治理与产品",
    description: "最后把运行时、基础设施、评测、安全和产品组织闭环补完整。",
    color: "#5f82ac",
    codes: ["L", "M", "N"],
  },
];

const elements = {
  stats: document.getElementById("hero-stats"),
  jumpbar: document.getElementById("jumpbar"),
  roadmap: document.getElementById("roadmap"),
  relationGrid: document.getElementById("relation-grid"),
  detailPanel: document.getElementById("detail-panel"),
  detailPanelCard: document.getElementById("detail-panel-card"),
};

const state = {
  graph: null,
  activeKey: null,
};

bootstrap().catch((error) => {
  console.error(error);
  elements.roadmap.innerHTML = `
    <div class="error-state">
      <strong>知识图谱加载失败。</strong>
      <p>请确认 <code>design.md</code> 与 <code>data/node-details.json</code> 可访问，然后刷新页面重试。</p>
    </div>
  `;
});

async function bootstrap() {
  renderLoading();
  const [designText, overlay] = await Promise.all([
    fetchText("./design.md"),
    fetchJson("./data/node-details.json", { version: 1, nodes: {} }),
  ]);
  const graph = buildGraph(designText, overlay);
  state.graph = graph;
  render(graph);
  bindInteractions();
  renderDetailPanel();
}

function renderLoading() {
  elements.roadmap.innerHTML = `
    <div class="empty-state">
      正在解析 <code>design.md</code>，整理 AI 知识路线图…
    </div>
  `;
  elements.relationGrid.innerHTML = "";
}

async function fetchText(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }
  return response.text();
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

  return {
    domains,
    relationGroups,
    lookup: buildSelectionIndex(domains, relationGroups),
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
      fullTitle: `${code}. ${title}`,
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
      text: item.text,
      notes: flattenBulletTree(item.children),
    })),
  }));
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

  return Boolean(
    detail.definition ||
      detail.importance ||
      (Array.isArray(detail.examples) && detail.examples.length) ||
      (Array.isArray(detail.pitfalls) && detail.pitfalls.length) ||
      (Array.isArray(detail.next) && detail.next.length)
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

function buildSelectionIndex(domains, relationGroups) {
  const lookup = new Map();

  for (const domain of domains) {
    lookup.set(domain.pathKey, {
      key: domain.pathKey,
      type: "domain",
      eyebrow: `Domain / ${domain.code}`,
      title: domain.fullTitle,
      pathKey: domain.pathKey,
      summary:
        domain.detail.definition ||
        domain.summary ||
        `${domain.modules.length} 个模块，${domain.conceptCount} 个术语节点。`,
      detail: domain.detail,
      stats: [`${domain.modules.length} 个模块`, `${domain.conceptCount} 个术语节点`],
      parentTitle: null,
      relatedNotes: domain.relationNotes,
      childTitles: domain.modules.map((module) => module.fullTitle),
    });

    if (domain.relationNotes.length) {
      lookup.set(getDomainRelationKey(domain.pathKey), {
        key: getDomainRelationKey(domain.pathKey),
        type: "domain-relations",
        eyebrow: `Links / ${domain.code}`,
        title: `${domain.fullTitle} / 本层关系`,
        pathKey: domain.pathKey,
        summary: `${domain.relationNotes.length} 条与当前领域直接相关的结构关系。`,
        detail: {},
        stats: [`${domain.relationNotes.length} 条关系`],
        parentTitle: domain.fullTitle,
        relatedNotes: domain.relationNotes,
        childTitles: [],
      });
    }

    for (const module of domain.modules) {
      const conceptCount = countConcepts(module.concepts);
      const detailNodes = collectDetailNodes(module);
      lookup.set(module.pathKey, {
        key: module.pathKey,
        type: "module",
        eyebrow: `Module / ${module.code}`,
        title: module.fullTitle,
        pathKey: module.pathKey,
        summary:
          module.detail.definition ||
          `${module.title} 当前包含 ${conceptCount} 个术语节点，可继续向下展开。`,
        detail: module.detail,
        stats: [
          `${conceptCount} 个术语节点`,
          detailNodes.length ? `${detailNodes.length} 个补充节点` : null,
        ].filter(Boolean),
        parentTitle: domain.fullTitle,
        relatedNotes: [],
        childTitles: module.concepts.map((concept) => concept.title),
      });

      walkConcepts(module.concepts, (concept) => {
        lookup.set(concept.pathKey, {
          key: concept.pathKey,
          type: "concept",
          eyebrow: `Concept / ${module.code}`,
          title: concept.title,
          pathKey: concept.pathKey,
          summary: concept.detail.definition || getConceptFallbackSummary(concept),
          detail: concept.detail,
          stats: [concept.children.length ? `${concept.children.length} 个下级概念` : "叶子节点"],
          parentTitle: module.fullTitle,
          relatedNotes: [],
          childTitles: concept.children.map((child) => child.title),
        });
      });
    }
  }

  for (const group of relationGroups) {
    for (const entry of group.entries) {
      lookup.set(getRelationDetailKey(group.title, entry.text), {
        key: getRelationDetailKey(group.title, entry.text),
        type: "relation",
        eyebrow: `Relation / ${group.title}`,
        title: entry.text,
        pathKey: null,
        summary: entry.notes[0] || `${group.title} 中的一条关键结构关系。`,
        detail: {},
        stats: [entry.notes.length ? `${entry.notes.length} 条补充说明` : "结构关系"],
        parentTitle: group.title,
        relatedNotes: entry.notes,
        childTitles: [],
      });
    }
  }

  return lookup;
}

function getConceptFallbackSummary(concept) {
  if (concept.children.length) {
    return `当前节点下还有 ${concept.children.length} 个下级概念，可以继续沿结构往下展开。`;
  }

  return "当前节点还没有补充独立说明，后续可以在 node-details.json 中继续细化定义和示例。";
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
  renderRoadmap(graph.domains);
  renderRelationGrid(graph.relationGroups);
}

function bindInteractions() {
  const roots = [elements.roadmap, elements.relationGrid, elements.detailPanelCard];
  for (const root of roots) {
    root.addEventListener("click", handleInteractiveSelection);
    root.addEventListener("keydown", handleInteractiveKeydown);
  }
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

  setActiveDetail(key);
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
    setActiveDetail(key);
  }
}

function setActiveDetail(key) {
  state.activeKey = key;
  renderDetailPanel();
  syncActiveElements();

  if (window.innerWidth <= 1180) {
    elements.detailPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function syncActiveElements() {
  document.querySelectorAll(".module-card").forEach((node) => node.classList.remove("is-selected"));

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
  });
}

function renderDetailPanel() {
  const entry = state.activeKey ? state.graph.lookup.get(state.activeKey) : null;

  if (!entry) {
    elements.detailPanelCard.innerHTML = `
      <p class="detail-panel-eyebrow">Detail / Ready</p>
      <h2>右侧详情</h2>
      <p class="detail-panel-summary">
        点击左侧任意知识项，在这里查看它的定义、上下文、关系和后续延展。后面每个节点继续补内容时，这里会直接承接。
      </p>
      <div class="detail-panel-empty">
        当前还没有选中具体节点。
      </div>
    `;
    return;
  }

  const sections = [];
  const detail = entry.detail || {};
  const links = Array.isArray(detail.next)
    ? detail.next
        .map((pathKey) => state.graph.lookup.get(pathKey))
        .filter(Boolean)
        .map((item) => ({
          key: item.key,
          label: item.title,
        }))
    : [];

  if (entry.parentTitle) {
    sections.push(renderPanelListSection("结构位置", [entry.parentTitle]));
  }

  if (detail.importance) {
    sections.push(renderPanelTextSection("为什么重要", detail.importance));
  }

  if (Array.isArray(detail.examples) && detail.examples.length) {
    sections.push(renderPanelListSection("例子", detail.examples));
  }

  if (Array.isArray(detail.pitfalls) && detail.pitfalls.length) {
    sections.push(renderPanelListSection("常见误区", detail.pitfalls));
  }

  if (entry.relatedNotes.length) {
    sections.push(renderPanelListSection("相关关系", entry.relatedNotes));
  }

  if (entry.childTitles.length) {
    const previewChildren = entry.childTitles.slice(0, 10);
    if (entry.childTitles.length > previewChildren.length) {
      previewChildren.push(`还有 ${entry.childTitles.length - previewChildren.length} 项未展开`);
    }
    sections.push(renderPanelListSection("下一级结构", previewChildren));
  }

  if (links.length) {
    sections.push(renderPanelLinkSection("下一步", links));
  }

  if (!sections.length) {
    sections.push(`
      <div class="detail-panel-empty">
        当前节点还没有更深入的补充内容。后续可以直接在 <code>data/node-details.json</code> 里继续补定义、例子和延伸路径。
      </div>
    `);
  }

  elements.detailPanelCard.innerHTML = `
    <p class="detail-panel-eyebrow">${escapeHtml(entry.eyebrow)}</p>
    <h2>${escapeHtml(entry.title)}</h2>
    ${entry.pathKey ? `<p class="detail-panel-path">${escapeHtml(entry.pathKey)}</p>` : ""}
    <p class="detail-panel-summary">${escapeHtml(entry.summary)}</p>
    <div class="detail-panel-meta">
      ${Array.from(
        new Set([
          ...entry.stats,
          getTypeLabel(entry.type),
          detail.status ? `状态：${detail.status}` : null,
        ].filter(Boolean))
      )
        .map((item) => `<span>${escapeHtml(item)}</span>`)
        .join("")}
    </div>
    ${sections.join("")}
  `;
}

function renderPanelTextSection(title, text) {
  return `
    <section class="detail-panel-section">
      <h3>${escapeHtml(title)}</h3>
      <p>${escapeHtml(text)}</p>
    </section>
  `;
}

function renderPanelListSection(title, items) {
  return `
    <section class="detail-panel-section">
      <h3>${escapeHtml(title)}</h3>
      <ul>
        ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
    </section>
  `;
}

function renderPanelLinkSection(title, items) {
  return `
    <section class="detail-panel-section">
      <h3>${escapeHtml(title)}</h3>
      <div class="detail-panel-links">
        ${items
          .map(
            (item) => `
              <button
                type="button"
                class="detail-panel-link"
                data-path-key="${escapeAttribute(item.key)}"
              >
                ${escapeHtml(item.label)}
              </button>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function getTypeLabel(type) {
  const labels = {
    domain: "领域",
    "domain-relations": "领域关系",
    module: "模块",
    concept: "术语节点",
    relation: "结构关系",
  };

  return labels[type] || "知识项";
}

function renderStats(stats) {
  const cards = [
    { label: "领域层", value: stats.domains },
    { label: "模块层", value: stats.modules },
    { label: "术语节点", value: stats.concepts },
    { label: "已补充节点", value: stats.detailNodes },
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
        <a href="#domain-${escapeHtml(domain.code)}">${escapeHtml(domain.code)}. ${escapeHtml(domain.title)}</a>
      `
    )
    .join("");
}

function renderRoadmap(domains) {
  const domainMap = new Map(domains.map((domain) => [domain.code, domain]));
  const stageMarkup = STAGES.map((stage) => {
    const stageDomains = stage.codes.map((code) => domainMap.get(code)).filter(Boolean);
    if (stageDomains.length === 0) {
      return "";
    }

    const moduleCount = stageDomains.reduce((sum, domain) => sum + domain.modules.length, 0);
    const conceptCount = stageDomains.reduce((sum, domain) => sum + domain.conceptCount, 0);

    return `
      <section class="stage-card" style="--stage-color: ${stage.color}">
        <header class="stage-header">
          <p class="stage-eyebrow">Stage / ${escapeHtml(stage.id)}</p>
          <h2>${escapeHtml(stage.title)}</h2>
          <p>${escapeHtml(stage.description)}</p>
          <div class="stage-meta">
            <span>${stageDomains.length} 个领域</span>
            <span>${moduleCount} 个模块</span>
            <span>${conceptCount} 个术语节点</span>
          </div>
        </header>
        <div class="domain-grid">
          ${stageDomains.map(renderDomainCard).join("")}
        </div>
      </section>
    `;
  }).join("");

  elements.roadmap.innerHTML = stageMarkup;
}

function renderDomainCard(domain) {
  return `
    <article class="domain-card" id="domain-${escapeHtml(domain.code)}">
      <header class="domain-header">
        <p class="domain-eyebrow">${escapeHtml(domain.code)} / Domain</p>
        <h3>${escapeHtml(domain.fullTitle)}</h3>
        ${domain.summary ? `<p class="domain-summary">${escapeHtml(domain.summary)}</p>` : ""}
        <div class="domain-stats">
          <span>${domain.modules.length} 个模块</span>
          <span>${domain.conceptCount} 个术语节点</span>
        </div>
      </header>
      <div class="module-grid">
        ${domain.modules.map(renderModuleCard).join("")}
      </div>
      ${renderDomainRelations(domain)}
    </article>
  `;
}

function renderModuleCard(module) {
  const detailNodes = collectDetailNodes(module);
  const conceptCount = countConcepts(module.concepts);
  const layoutStyle = getModuleLayoutStyle(module, conceptCount, detailNodes.length);

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
        <span class="module-code">${escapeHtml(module.code)}</span>
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
    return `<div class="empty-state">当前模块还没有解析出术语节点。</div>`;
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
        <strong>补充知识 ${items.length} 项</strong>
      </summary>
      <div class="detail-list">
        ${items.map(renderDetailCard).join("")}
      </div>
    </details>
  `;
}

function renderDetailCard(item) {
  const { detail } = item;
  const segments = [];

  if (detail.definition) {
    segments.push(`<p>${escapeHtml(detail.definition)}</p>`);
  }
  if (detail.importance) {
    segments.push(`<p><strong>为什么重要：</strong>${escapeHtml(detail.importance)}</p>`);
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
  if (Array.isArray(detail.next) && detail.next.length) {
    segments.push(`
      <p><strong>下一步：</strong>${escapeHtml(detail.next.join(" / "))}</p>
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
      <h5>${escapeHtml(item.title)}</h5>
      ${segments.join("")}
    </article>
  `;
}

function renderDomainRelations(domain) {
  if (!domain.relationNotes.length) {
    return "";
  }

  return `
    <details class="detail-group">
      <summary>
        <strong>本层关系 ${domain.relationNotes.length} 条</strong>
      </summary>
      <div class="detail-list">
        <article
          class="detail-card"
          data-detail-key="${escapeAttribute(getDomainRelationKey(domain.pathKey))}"
          tabindex="0"
          role="button"
          aria-label="查看 ${escapeAttribute(domain.fullTitle)} 本层关系的详情"
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
