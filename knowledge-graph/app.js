import {
  attachDetailShards,
  buildRuntimeGraph,
  countConcepts,
  getRelationDetailKey,
  hasMeaningfulDetail,
  normalizeDetailStatus,
} from "./graph-core.js";

const G6 = globalThis.G6;
const DEBUG_BRIDGE_ENABLED =
  typeof window !== "undefined" &&
  (window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost");

const EDGE_LABELS = {
  structure: "结构边",
  prerequisite: "前置边",
  next: "延展边",
  relation: "关系挂接边",
};

const RELATION_COLORS = ["#c6b27b", "#8bc9b0", "#b5a6ea", "#8eb7e4", "#d7a27e"];
const ZOOM_LIMITS = {
  minAbsolute: 0.18,
  minFitFactor: 0.92,
  max: 2.8,
};

const LAYOUT = {
  paddingX: 42,
  paddingY: 40,
  stageWidth: 470,
  stageGap: 20,
  domainX: 12,
  moduleX: 148,
  conceptX: 306,
  conceptDepthIndent: 18,
  domainWidth: 136,
  domainMinWidth: 108,
  domainHeight: 54,
  moduleWidth: 190,
  moduleMinWidth: 148,
  moduleHeight: 68,
  conceptWidth: 146,
  conceptMinWidth: 102,
  conceptHeight: 48,
  relationWidth: 188,
  relationMinWidth: 148,
  relationHeight: 58,
  relationColumns: 2,
  relationColGap: 16,
  relationRowGap: 16,
  relationStartGap: 96,
  domainGap: 40,
  moduleGap: 14,
  conceptGap: 8,
  relationGroupGap: 28,
};

const elements = {
  graphShell: document.querySelector(".graph-shell"),
  stats: document.getElementById("hero-stats"),
  graphLegend: document.getElementById("graph-legend"),
  graphSurface: document.getElementById("graph-surface"),
  graphCanvas: document.getElementById("graph-canvas"),
  fullscreenAction: document.querySelector('[data-graph-action="fullscreen"]'),
  detailDrawer: document.getElementById("detail-drawer"),
  detailBackdrop: document.getElementById("detail-backdrop"),
  detailClose: document.getElementById("detail-close"),
  detailPanelCard: document.getElementById("detail-panel-card"),
};

const state = {
  graph: null,
  g6: null,
  scene: null,
  edgeLookup: new Map(),
  expandedModules: new Set(),
  active: null,
  isDrawerOpen: false,
  lastTrigger: null,
  resizeObserver: null,
  interactionsBound: false,
};

bootstrap().catch((error) => {
  console.error(error);
  renderError(
    "知识图谱加载失败。请确认 data/graph.json、data/detail-index.json、data/details/*.json，以及 vendor/g6.min.js 都可访问。"
  );
});

async function bootstrap() {
  if (!G6?.Graph) {
    throw new Error("G6 runtime is missing");
  }

  syncDebugBridge();
  renderLoading();
  const graphSource = await fetchJson("./data/graph.json", null);
  if (!graphSource) {
    throw new Error("Failed to fetch ./data/graph.json");
  }

  const detailShards = await loadDetailShards(graphSource);
  const hydratedSource = detailShards.length ? attachDetailShards(graphSource, detailShards) : graphSource;
  const graph = buildRuntimeGraph(hydratedSource);

  state.graph = graph;
  if (graph.referenceIssues.length) {
    console.warn("knowledge-graph: unresolved or ambiguous detail references", graph.referenceIssues);
  }

  renderStats(graph.stats);
  bindInteractions();
  syncFullscreenActionState();
  observeGraphResize();
  await renderGraph(true);
}

function syncDebugBridge() {
  if (!DEBUG_BRIDGE_ENABLED) {
    return;
  }
  globalThis.__KG_DEBUG__ = {
    getGraph: () => state.g6,
    getScene: () => state.scene,
    getActive: () => state.active,
    fitGraphView,
    renderGraph,
    selectNode,
    selectEdge,
    toggleModule,
  };
}

function renderLoading() {
  elements.graphCanvas.innerHTML = `
    <div class="graph-empty">
      正在加载 <code>data/graph.json</code>、<code>data/details/*.json</code> 与本地 G6 运行时…
    </div>
  `;
}

function renderError(message) {
  elements.graphCanvas.innerHTML = `
    <div class="graph-empty is-error">
      ${escapeHtml(message)}
    </div>
  `;
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

  const shards = await Promise.all(
    detailIndex.shards.map((shard) => fetchJson(`./data/${shard.file}`, null))
  );
  return shards.filter(Boolean);
}

function bindInteractions() {
  if (state.interactionsBound) {
    return;
  }
  state.interactionsBound = true;

  elements.graphShell.addEventListener("click", handleGraphShellClick);
  elements.detailPanelCard.addEventListener("click", handlePanelClick);
  elements.detailPanelCard.addEventListener("keydown", handlePanelKeydown);
  elements.detailBackdrop.addEventListener("click", closeDetailDrawer);
  elements.detailClose.addEventListener("click", closeDetailDrawer);
  document.addEventListener("keydown", handleGlobalKeydown);
  document.addEventListener("fullscreenchange", syncFullscreenActionState);
}

function observeGraphResize() {
  if (!("ResizeObserver" in window) || state.resizeObserver) {
    return;
  }

  state.resizeObserver = new ResizeObserver(() => {
    if (!state.g6) {
      return;
    }
    const { width, height } = getCanvasSize();
    state.g6.setSize(width, height);
    fitGraphView();
  });
  state.resizeObserver.observe(elements.graphSurface);
}

function handleGraphShellClick(event) {
  const action = event.target.closest("[data-graph-action]");
  if (!action) {
    return;
  }

  state.lastTrigger = action;
  const value = action.dataset.graphAction;

  if (value === "fit") {
    fitGraphView();
    return;
  }

  if (value === "center") {
    centerGraphView();
    return;
  }

  if (value === "fullscreen") {
    void toggleFullscreen();
    return;
  }

  if (value === "collapse-all") {
    void collapseAllConcepts();
    return;
  }

  if (value === "clear-selection") {
    closeDetailDrawer();
  }
}

function handlePanelClick(event) {
  const target = event.target.closest("[data-node-key]");
  if (!target) {
    return;
  }
  state.lastTrigger = target;
  void selectNode(target.dataset.nodeKey, target);
}

function handlePanelKeydown(event) {
  if (event.key !== "Enter" && event.key !== " ") {
    return;
  }

  const target = event.target.closest("[data-node-key]");
  if (!target) {
    return;
  }

  event.preventDefault();
  state.lastTrigger = target;
  void selectNode(target.dataset.nodeKey, target);
}

function handleGlobalKeydown(event) {
  if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.altKey || isTypingTarget(event.target)) {
    return;
  }

  const key = event.key.toLowerCase();

  if (event.key === "Escape" && state.isDrawerOpen) {
    event.preventDefault();
    closeDetailDrawer();
    return;
  }

  if (event.key === "0") {
    event.preventDefault();
    fitGraphView();
    return;
  }

  if (key === "c") {
    event.preventDefault();
    centerGraphView();
    return;
  }

  if (key === "f") {
    event.preventDefault();
    void toggleFullscreen();
    return;
  }

  if (key === "x") {
    event.preventDefault();
    void collapseAllConcepts();
    return;
  }

  if (event.key === "Escape") {
    event.preventDefault();
    closeDetailDrawer();
  }
}

function isTypingTarget(target) {
  if (!(target instanceof HTMLElement)) {
    return false;
  }
  if (target.isContentEditable) {
    return true;
  }
  return Boolean(target.closest('input, textarea, select, [contenteditable="true"]'));
}

async function renderGraph(fitView = false) {
  if (!state.graph) {
    return;
  }

  const scene = buildSceneModel(state.graph, state.expandedModules);
  state.scene = scene;
  state.edgeLookup = scene.edgeLookup;

  const activeStillVisible =
    !state.active ||
    (state.active.kind === "node" && scene.visibleNodeIds.has(state.active.key)) ||
    (state.active.kind === "edge" && scene.visibleEdgeIds.has(state.active.key));

  if (!activeStillVisible) {
    state.active = null;
    setDrawerOpen(false);
  }

  renderLegend(scene);
  await upsertGraph(scene, fitView);
  await syncSelectionStates();
  renderDetailPanel();
}

async function upsertGraph(scene, fitView) {
  const data = { nodes: scene.nodes, edges: scene.edges };

  if (!state.g6) {
    elements.graphCanvas.innerHTML = "";
    const size = getCanvasSize();

    state.g6 = new G6.Graph({
      container: elements.graphCanvas,
      width: size.width,
      height: size.height,
      animation: false,
      data,
      node: {
        state: {
          selected: {
            lineWidth: 3,
            stroke: "#ffd36b",
            shadowBlur: 18,
            shadowColor: "rgba(255, 211, 107, 0.24)",
          },
          highlight: {
            lineWidth: 2.4,
            stroke: "#8db3df",
            shadowBlur: 12,
            shadowColor: "rgba(141, 179, 223, 0.18)",
          },
          inactive: {
            opacity: 0.2,
          },
        },
      },
      edge: {
        state: {
          selected: {
            lineWidth: 3.4,
            stroke: "#ffd36b",
            opacity: 1,
          },
          highlight: {
            lineWidth: 2.6,
            opacity: 0.96,
          },
          inactive: {
            opacity: 0.1,
          },
        },
      },
      behaviors: ["drag-canvas", "zoom-canvas"],
      plugins: ["minimap"],
    });

    state.g6.on("node:click", (graphEvent) => {
      const nodeId = getGraphTargetId(graphEvent);
      if (nodeId) {
        void selectNode(nodeId);
      }
    });

    state.g6.on("node:dblclick", (graphEvent) => {
      const nodeId = getGraphTargetId(graphEvent);
      if (!nodeId) {
        return;
      }
      const node = state.scene?.nodeLookup.get(nodeId);
      if (node?.data.kind === "module" && node.data.expandable) {
        void toggleModule(nodeId);
      }
    });

    state.g6.on("edge:click", (graphEvent) => {
      const edgeId = getGraphTargetId(graphEvent);
      if (edgeId) {
        selectEdge(edgeId);
      }
    });

    state.g6.on("canvas:click", () => {
      closeDetailDrawer();
    });

    await state.g6.render();
    if (fitView) {
      fitGraphView();
    }
    return;
  }

  state.g6.setData(data);
  await state.g6.render();
  if (fitView) {
    fitGraphView();
  }
}

function getGraphTargetId(graphEvent) {
  return (
    graphEvent?.target?.id ||
    graphEvent?.target?.config?.id ||
    graphEvent?.element?.id ||
    null
  );
}

function getCanvasSize() {
  const width = Math.max(360, Math.floor(elements.graphSurface.clientWidth || 960));
  const height = Math.max(720, Math.floor(elements.graphSurface.clientHeight || 900));
  return { width, height };
}

function fitGraphView() {
  if (!state.g6?.fitView) {
    return;
  }
  window.requestAnimationFrame(() => {
    state.g6?.fitView?.();
    window.requestAnimationFrame(() => {
      syncZoomRange();
    });
  });
}

function centerGraphView() {
  if (!state.g6?.fitCenter) {
    return;
  }
  window.requestAnimationFrame(() => {
    state.g6?.fitCenter?.();
  });
}

function syncZoomRange() {
  if (!state.g6?.setZoomRange || !state.g6?.getZoom) {
    return;
  }

  const zoom = state.g6.getZoom();
  if (!Number.isFinite(zoom) || zoom <= 0) {
    return;
  }

  const minZoom = Math.max(ZOOM_LIMITS.minAbsolute, zoom * ZOOM_LIMITS.minFitFactor);
  state.g6.setZoomRange([minZoom, ZOOM_LIMITS.max]);
}

async function toggleFullscreen() {
  if (!document.fullscreenEnabled) {
    return;
  }

  if (document.fullscreenElement) {
    await document.exitFullscreen();
    return;
  }

  await document.documentElement.requestFullscreen();
}

function syncFullscreenActionState() {
  const button = elements.fullscreenAction;
  if (!button) {
    return;
  }
  const active = Boolean(document.fullscreenElement);
  button.classList.toggle("is-active", active);
  button.setAttribute("aria-pressed", active ? "true" : "false");
}

async function collapseAllConcepts() {
  if (!state.expandedModules.size) {
    return;
  }
  state.expandedModules.clear();
  await renderGraph(false);
}

async function selectNode(key, trigger = null) {
  if (!state.graph?.lookup.has(key)) {
    return;
  }

  await ensureNodeVisible(key);
  state.active = { kind: "node", key };
  if (trigger instanceof HTMLElement) {
    state.lastTrigger = trigger;
  }
  await syncSelectionStates();
  renderDetailPanel();
  setDrawerOpen(true);
}

function selectEdge(key) {
  if (!state.edgeLookup.has(key)) {
    return;
  }

  state.active = { kind: "edge", key };
  syncSelectionStates();
  renderDetailPanel();
  setDrawerOpen(true);
}

async function ensureNodeVisible(key) {
  if (state.scene?.visibleNodeIds.has(key)) {
    return;
  }

  const moduleKey = getModuleKeyFromPath(key);
  if (!moduleKey) {
    return;
  }

  state.expandedModules.add(moduleKey);
  await renderGraph(false);
}

function getModuleKeyFromPath(pathKey) {
  if (!pathKey || pathKey.startsWith("relation/")) {
    return null;
  }

  const parts = pathKey.split("/");
  if (parts.length < 3) {
    return null;
  }

  return `${parts[0]}/${parts[1]}`;
}

async function toggleModule(moduleKey) {
  if (state.expandedModules.has(moduleKey)) {
    state.expandedModules.delete(moduleKey);
  } else {
    state.expandedModules.add(moduleKey);
  }
  await renderGraph(false);
}

async function syncSelectionStates() {
  if (!state.g6 || !state.scene) {
    return;
  }

  const states = {};
  for (const node of state.scene.nodes) {
    states[node.id] = [];
  }
  for (const edge of state.scene.edges) {
    states[edge.id] = [];
  }

  if (!state.active) {
    await state.g6.setElementState(states, false);
    return;
  }

  for (const key of Object.keys(states)) {
    states[key] = ["inactive"];
  }

  if (state.active.kind === "node") {
    const activeKey = state.active.key;
    states[activeKey] = ["selected"];

    for (const edge of state.scene.edges) {
      if (edge.source === activeKey || edge.target === activeKey) {
        states[edge.id] = ["highlight"];
        if (edge.source !== activeKey) {
          states[edge.source] = ["highlight"];
        }
        if (edge.target !== activeKey) {
          states[edge.target] = ["highlight"];
        }
      }
    }
  }

  if (state.active.kind === "edge") {
    const edge = state.scene.edgeById.get(state.active.key);
    if (!edge) {
      await state.g6.setElementState(states, false);
      return;
    }

    states[edge.id] = ["selected"];
    states[edge.source] = ["highlight"];
    states[edge.target] = ["highlight"];
  }

  await state.g6.setElementState(states, false);
}

function closeDetailDrawer() {
  state.active = null;
  syncSelectionStates();
  renderDetailPanel();
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

function renderLegend(scene) {
  const expandedConcepts = scene.nodes.filter((node) => node.data.kind === "concept").length;
  const relationNodes = scene.nodes.filter((node) => node.data.kind === "relation").length;

  elements.graphLegend.innerHTML = `
    <div class="graph-legend-meta">
      <span>${scene.nodes.length} 个可见节点</span>
      <span>${scene.edges.length} 条可见边</span>
      <span>${expandedConcepts} 个已展开概念</span>
      <span>${relationNodes} 个关系节点</span>
    </div>
    <div class="graph-stage-chips">
      ${scene.stageSummaries
        .map(
          (stage) => `
            <span class="graph-stage-chip" style="--stage-chip:${escapeAttribute(stage.color)}">
              <strong>${escapeHtml(stage.title)}</strong>
              <small>${stage.moduleCount} 模块 / ${stage.expandedConcepts} 已展开概念</small>
            </span>
          `
        )
        .join("")}
    </div>
    <div class="graph-legend-items">
      <span class="graph-legend-item"><i></i>结构从属边</span>
      <span class="graph-legend-item is-prerequisite"><i></i>前置依赖边</span>
      <span class="graph-legend-item is-next"><i></i>继续延展边</span>
      <span class="graph-legend-item is-relation"><i></i>关系挂接边</span>
    </div>
    <p class="graph-legend-note">
      单击节点或边查看详情；双击模块展开概念；滚轮缩放、拖拽平移；快捷键：<kbd>0</kbd> 适配视图，<kbd>C</kbd>
      定位中心，<kbd>F</kbd> 切换全屏，<kbd>X</kbd> 折叠概念，<kbd>Esc</kbd> 清空选择 / 关闭详情。
    </p>
  `;
}

function buildSceneModel(graph, expandedModules) {
  const nodes = [];
  const edges = [];
  const edgeLookup = new Map();
  const edgeById = new Map();
  const nodeLookup = new Map();
  const visibleNodeIds = new Set();
  const visibleEdgeIds = new Set();
  const stageSummaries = [];

  let structureBottom = LAYOUT.paddingY;

  graph.stages.forEach((stage, stageIndex) => {
    const stageX = LAYOUT.paddingX + stageIndex * (LAYOUT.stageWidth + LAYOUT.stageGap);
    let cursorY = LAYOUT.paddingY;
    let expandedConcepts = 0;

    for (const domain of stage.domains) {
      const clusterTop = cursorY;
      const moduleKeys = [];
      let moduleCursorY = clusterTop;

      for (const module of domain.modules) {
        const moduleScene = createModuleSceneNode(graph, stage, module, stageX, moduleCursorY, expandedModules);
        registerNode(nodes, nodeLookup, visibleNodeIds, moduleScene.node);
        moduleKeys.push(moduleScene.node.id);

        for (const conceptNode of moduleScene.conceptNodes) {
          registerNode(nodes, nodeLookup, visibleNodeIds, conceptNode);
        }

        for (const edge of moduleScene.conceptEdges) {
          registerEdge(edges, edgeLookup, edgeById, visibleEdgeIds, edge);
        }

        expandedConcepts += moduleScene.conceptNodes.length;
        moduleCursorY = moduleScene.bottom + LAYOUT.moduleGap;
      }

      const clusterBottom = moduleKeys.length
        ? moduleCursorY - LAYOUT.moduleGap
        : clusterTop + LAYOUT.domainHeight;

      const domainY = clusterTop + Math.max(0, (clusterBottom - clusterTop - LAYOUT.domainHeight) / 2);
      const domainNode = createDomainSceneNode(graph, stage, domain, stageX, domainY);
      registerNode(nodes, nodeLookup, visibleNodeIds, domainNode);

      for (const moduleKey of moduleKeys) {
        registerEdge(
          edges,
          edgeLookup,
          edgeById,
          visibleEdgeIds,
          createSceneEdge({
            kind: "structure",
            source: domainNode.id,
            target: moduleKey,
            title: `${graph.lookup.get(moduleKey)?.title || moduleKey} 属于 ${domainNode.data.title}`,
            summary: `${graph.lookup.get(moduleKey)?.title || moduleKey} 是 ${domainNode.data.title} 的下级模块。`,
            relatedLinks: [toNodeLink(domainNode.id, graph.lookup), toNodeLink(moduleKey, graph.lookup)],
          })
        );
      }

      cursorY = clusterBottom + LAYOUT.domainGap;
      structureBottom = Math.max(structureBottom, clusterBottom);
    }

    stageSummaries.push({
      id: stage.id,
      title: stage.title,
      color: stage.color,
      moduleCount: stage.moduleCount,
      expandedConcepts,
    });
  });

  registerSemanticEdges(graph, visibleNodeIds, edges, edgeLookup, edgeById, visibleEdgeIds);

  const relationStartX =
    LAYOUT.paddingX +
    graph.stages.length * (LAYOUT.stageWidth + LAYOUT.stageGap) +
    LAYOUT.relationStartGap;
  let relationCursorY = LAYOUT.paddingY;

  graph.relationGroups.forEach((group, groupIndex) => {
    const color = RELATION_COLORS[groupIndex % RELATION_COLORS.length];
    const rowCount = Math.max(1, Math.ceil(group.entries.length / LAYOUT.relationColumns));

    group.entries.forEach((entry, index) => {
      const key = getRelationDetailKey(group.title, entry.text);
      const row = Math.floor(index / LAYOUT.relationColumns);
      const col = index % LAYOUT.relationColumns;
      const x = relationStartX + col * (LAYOUT.relationWidth + LAYOUT.relationColGap);
      const y = relationCursorY + row * (LAYOUT.relationHeight + LAYOUT.relationRowGap);

      const relationNode = createRelationSceneNode(graph, key, group.title, entry, x, y, color);
      registerNode(nodes, nodeLookup, visibleNodeIds, relationNode);

      for (const reference of entry.references || []) {
        if (!visibleNodeIds.has(reference.pathKey)) {
          continue;
        }

        registerEdge(
          edges,
          edgeLookup,
          edgeById,
          visibleEdgeIds,
          createSceneEdge({
            kind: "relation",
            source: relationNode.id,
            target: reference.pathKey,
            title: `${group.title} 命中 ${graph.lookup.get(reference.pathKey)?.title || reference.title}`,
            summary: `${entry.text} 把 ${graph.lookup.get(reference.pathKey)?.title || reference.title} 拉进同一条结构关系。`,
            relatedNotes: entry.notes || [],
            relatedLinks: [toNodeLink(relationNode.id, graph.lookup), toNodeLink(reference.pathKey, graph.lookup)],
          })
        );
      }
    });

    relationCursorY +=
      rowCount * (LAYOUT.relationHeight + LAYOUT.relationRowGap) + LAYOUT.relationGroupGap;
  });

  const width =
    relationStartX +
    LAYOUT.relationColumns * LAYOUT.relationWidth +
    (LAYOUT.relationColumns - 1) * LAYOUT.relationColGap +
    LAYOUT.paddingX;
  const height = Math.max(structureBottom + LAYOUT.paddingY, relationCursorY);

  return {
    nodes,
    edges,
    edgeLookup,
    edgeById,
    nodeLookup,
    visibleNodeIds,
    visibleEdgeIds,
    stageSummaries,
    width,
    height,
  };
}

function createDomainSceneNode(graph, stage, domain, stageX, y) {
  const entry = graph.lookup.get(domain.pathKey);
  const status = entry?.status || normalizeDetailStatus(domain.detail, graph.config.statusLabels);
  const fill = tint(stage.color, 0.28);
  const domainLabel = buildAdaptiveLabel({
    code: domain.code,
    title: entry?.title || domain.displayTitle,
    maxUnits: 8.4,
    maxLines: 2,
    fontSize: 13,
    minWidth: LAYOUT.domainMinWidth,
    maxWidth: LAYOUT.domainWidth,
    horizontalPadding: 16,
  });

  return {
    id: domain.pathKey,
    type: "ellipse",
    data: {
      kind: "domain",
      title: entry?.title || domain.displayFullTitle,
      summary: entry?.summary || `${domain.modules.length} 个模块，${domain.conceptCount} 个术语节点。`,
      pathKey: domain.pathKey,
      stageId: stage.id,
      status,
    },
    style: {
      x: stageX + LAYOUT.domainX,
      y,
      size: [domainLabel.width, LAYOUT.domainHeight],
      fill,
      stroke: stage.color,
      lineWidth: 1.4,
      shadowBlur: 12,
      shadowColor: "rgba(6, 14, 24, 0.24)",
      labelText: domainLabel.text,
      labelFill: "#e6eef9",
      labelFontSize: 12,
      labelFontWeight: 800,
      labelLineHeight: 15,
      cursor: "pointer",
    },
  };
}

function createModuleSceneNode(graph, stage, module, stageX, y, expandedModules) {
  const entry = graph.lookup.get(module.pathKey);
  const conceptCount = countConcepts(module.concepts);
  const detailCount = countDetailEntriesInModule(module);
  const status = entry?.status || normalizeDetailStatus(module.detail, graph.config.statusLabels);
  const fill = tint(stage.color, 0.18);
  const moduleLabel = buildAdaptiveLabel({
    code: module.code,
    title: module.title,
    maxUnits: 11.8,
    maxLines: 2,
    fontSize: 13,
    minWidth: LAYOUT.moduleMinWidth,
    maxWidth: LAYOUT.moduleWidth,
    horizontalPadding: 18,
  });

  const node = {
    id: module.pathKey,
    type: "rect",
    data: {
      kind: "module",
      title: entry?.title || module.fullTitle,
      summary: entry?.summary || `${conceptCount} 个术语节点，双击展开。`,
      pathKey: module.pathKey,
      stageId: stage.id,
      status,
      expandable: conceptCount > 0,
      conceptCount,
      detailCount,
    },
    style: {
      x: stageX + LAYOUT.moduleX,
      y,
      size: [moduleLabel.width, LAYOUT.moduleHeight],
      radius: 16,
      fill,
      stroke: tint(stage.color, 0.8),
      lineWidth: 1.3,
      shadowBlur: 14,
      shadowColor: "rgba(6, 14, 24, 0.22)",
      labelText: moduleLabel.text,
      labelFill: "#e6eef9",
      labelFontSize: 13,
      labelFontWeight: 800,
      labelLineHeight: 16,
      cursor: "pointer",
    },
  };

  const conceptNodes = [];
  const conceptEdges = [];
  let bottom = y + LAYOUT.moduleHeight;

  if (expandedModules.has(module.pathKey)) {
    let conceptCursorY = y;
    const flattened = flattenConceptNodes(module.concepts);

    for (const item of flattened) {
      const conceptEntry = graph.lookup.get(item.concept.pathKey);
      const conceptStatus =
        conceptEntry?.status || normalizeDetailStatus(item.concept.detail, graph.config.statusLabels);
      const conceptLabel = buildAdaptiveLabel({
        title: item.concept.title,
        maxUnits: Math.max(8.4, 12.8 - item.depth * 0.8),
        maxLines: 2,
        fontSize: 12,
        minWidth: Math.max(88, LAYOUT.conceptMinWidth - item.depth * 6),
        maxWidth: Math.max(112, LAYOUT.conceptWidth - item.depth * 10),
        horizontalPadding: 14,
      });
      const conceptNode = {
        id: item.concept.pathKey,
        type: "rect",
        data: {
          kind: "concept",
          title: conceptEntry?.title || item.concept.title,
          summary: conceptEntry?.summary || getConceptFallbackSummary(item.concept),
          pathKey: item.concept.pathKey,
          stageId: stage.id,
          status: conceptStatus,
          depth: item.depth,
        },
        style: {
          x: stageX + LAYOUT.conceptX + item.depth * LAYOUT.conceptDepthIndent,
          y: conceptCursorY,
          size: [conceptLabel.width, LAYOUT.conceptHeight],
          radius: 14,
          fill: tint(stage.color, 0.08),
          stroke: tint(stage.color, 0.48),
          lineWidth: 1.1,
          shadowBlur: 8,
          shadowColor: "rgba(4, 10, 18, 0.18)",
          labelText: conceptLabel.text,
          labelFill: "#d7e6fb",
          labelFontSize: 11,
          labelFontWeight: 700,
          labelLineHeight: 14,
          cursor: "pointer",
        },
      };
      conceptNodes.push(conceptNode);

      const parentKey = item.parentKey || module.pathKey;
      conceptEdges.push(
        createSceneEdge({
          kind: "structure",
          source: parentKey,
          target: conceptNode.id,
          title: item.parentKey
            ? `${conceptNode.data.title} 是 ${graph.lookup.get(item.parentKey)?.title || item.parentTitle} 的下级概念`
            : `${conceptNode.data.title} 是 ${node.data.title} 的根概念`,
          summary: item.parentKey
            ? `${conceptNode.data.title} 挂在 ${graph.lookup.get(item.parentKey)?.title || item.parentTitle} 下。`
            : `${conceptNode.data.title} 是 ${node.data.title} 的直接概念节点。`,
          relatedLinks: [toNodeLink(parentKey, graph.lookup), toNodeLink(conceptNode.id, graph.lookup)],
        })
      );

      conceptCursorY += LAYOUT.conceptHeight + LAYOUT.conceptGap;
      bottom = conceptCursorY - LAYOUT.conceptGap;
    }
  }

  return {
    node,
    conceptNodes,
    conceptEdges,
    bottom: Math.max(bottom, y + LAYOUT.moduleHeight),
  };
}

function createRelationSceneNode(graph, key, groupTitle, entry, x, y, color) {
  const lookupEntry = graph.lookup.get(key);
  const relationLabel = buildAdaptiveLabel({
    title: entry.text,
    maxUnits: 14.8,
    maxLines: 2,
    fontSize: 12,
    minWidth: LAYOUT.relationMinWidth,
    maxWidth: LAYOUT.relationWidth,
    horizontalPadding: 18,
  });
  return {
    id: key,
    type: "diamond",
    data: {
      kind: "relation",
      title: lookupEntry?.title || entry.text,
      summary: lookupEntry?.summary || entry.notes?.[0] || `${groupTitle} 的一条结构关系。`,
      pathKey: key,
      status: "none",
      groupTitle,
    },
    style: {
      x,
      y,
      size: [relationLabel.width, LAYOUT.relationHeight],
      fill: tint(color, 0.14),
      stroke: color,
      lineWidth: 1.4,
      shadowBlur: 10,
      shadowColor: "rgba(6, 14, 24, 0.2)",
      labelText: relationLabel.text,
      labelFill: "#f2f6fb",
      labelFontSize: 11,
      labelFontWeight: 800,
      labelLineHeight: 14,
      cursor: "pointer",
    },
  };
}

function registerSemanticEdges(graph, visibleNodeIds, edges, edgeLookup, edgeById, visibleEdgeIds) {
  const visibleKeys = Array.from(visibleNodeIds).filter((key) => graph.lookup.has(key));

  for (const key of visibleKeys) {
    const entry = graph.lookup.get(key);
    if (!entry?.detail) {
      continue;
    }

    for (const prerequisite of entry.detail.resolvedPrerequisites || []) {
      if (!prerequisite.key || !visibleNodeIds.has(prerequisite.key)) {
        continue;
      }
      registerEdge(
        edges,
        edgeLookup,
        edgeById,
        visibleEdgeIds,
        createSceneEdge({
          kind: "prerequisite",
          source: prerequisite.key,
          target: key,
          title: `${prerequisite.label} → ${entry.title}`,
          summary: `${prerequisite.label} 是理解 ${entry.title} 前的前置知识。`,
          relatedNotes: ["方向：从前置知识流向当前节点"],
          relatedLinks: [toNodeLink(prerequisite.key, graph.lookup), toNodeLink(key, graph.lookup)],
        })
      );
    }

    for (const next of entry.detail.resolvedNext || []) {
      if (!next.key || !visibleNodeIds.has(next.key)) {
        continue;
      }
      registerEdge(
        edges,
        edgeLookup,
        edgeById,
        visibleEdgeIds,
        createSceneEdge({
          kind: "next",
          source: key,
          target: next.key,
          title: `${entry.title} → ${next.label}`,
          summary: `${next.label} 是从 ${entry.title} 继续往下延展的下一步。`,
          relatedNotes: ["方向：从当前主题延展到下一步"],
          relatedLinks: [toNodeLink(key, graph.lookup), toNodeLink(next.key, graph.lookup)],
        })
      );
    }
  }
}

function registerNode(nodes, nodeLookup, visibleNodeIds, node) {
  nodes.push(node);
  nodeLookup.set(node.id, node);
  visibleNodeIds.add(node.id);
}

function registerEdge(edges, edgeLookup, edgeById, visibleEdgeIds, edge) {
  if (!edge || edgeLookup.has(edge.id)) {
    return;
  }

  edges.push(edge);
  edgeById.set(edge.id, edge);
  edgeLookup.set(edge.id, createEdgeLookupEntry(edge));
  visibleEdgeIds.add(edge.id);
}

function createSceneEdge({ kind, source, target, title, summary, relatedNotes = [], relatedLinks = [] }) {
  const styles = {
    structure: {
      stroke: "#6c88a8",
      lineWidth: 1.8,
      opacity: 0.6,
      endArrow: true,
    },
    prerequisite: {
      stroke: "#7ec7de",
      lineWidth: 1.9,
      opacity: 0.72,
      lineDash: [7, 5],
      endArrow: true,
    },
    next: {
      stroke: "#97a7ea",
      lineWidth: 1.9,
      opacity: 0.72,
      endArrow: true,
    },
    relation: {
      stroke: "#c6b27b",
      lineWidth: 1.6,
      opacity: 0.4,
      lineDash: [2, 6],
      endArrow: true,
    },
  };

  return {
    id: `edge/${kind}/${source}/${target}`,
    source,
    target,
    type: kind === "relation" ? "cubic" : "cubic-horizontal",
    data: {
      kind,
      title,
      summary,
      relatedNotes,
      relatedLinks: relatedLinks.filter(Boolean),
    },
    style: styles[kind] || styles.structure,
  };
}

function createEdgeLookupEntry(edge) {
  return {
    key: edge.id,
    type: `edge-${edge.data.kind}`,
    eyebrow: `Edge / ${EDGE_LABELS[edge.data.kind] || "连接"}`,
    title: edge.data.title,
    pathKey: null,
    summary: edge.data.summary,
    detail: {
      definition: edge.data.summary,
      importance:
        edge.data.kind === "structure"
          ? "这条边定义结构从属。"
          : edge.data.kind === "prerequisite"
            ? "这条边定义学习顺序里的前置约束。"
            : edge.data.kind === "next"
              ? "这条边定义从当前主题继续延展的方向。"
              : "这条边把关系节点挂接到具体知识项上。",
    },
    status: "none",
    stats: [EDGE_LABELS[edge.data.kind] || "连接"],
    parentTitle: null,
    relatedNotes: edge.data.relatedNotes || [],
    relatedLinks: edge.data.relatedLinks || [],
    childTitles: [],
    impactScope: null,
  };
}

function renderDetailPanel() {
  const entry = getActiveEntry();

  if (!entry) {
    elements.detailPanelCard.innerHTML = `
      <p class="detail-panel-eyebrow">Detail / Ready</p>
      <h2 id="detail-panel-title">侧边详情</h2>
      <p class="detail-panel-summary">
        单击图里的节点或边，在这里按“是什么 / 解决了什么问题 / 示例”读取内容。
        如果概念节点还没展开，双击它的所属模块即可把它放进同一张图里。
      </p>
      <div class="detail-panel-empty">
        当前还没有选中具体节点或边。
      </div>
    `;
    return;
  }

  const statusLabel = getStatusLabel(entry.status);
  const sections = buildDetailTriad(entry);

  elements.detailPanelCard.innerHTML = `
    <p class="detail-panel-eyebrow">${escapeHtml(entry.eyebrow)}</p>
    <h2 id="detail-panel-title">${escapeHtml(entry.title)}</h2>
    ${entry.pathKey ? `<p class="detail-panel-path">${escapeHtml(entry.pathKey)}</p>` : ""}
    <p class="detail-panel-summary">${escapeHtml(entry.summary)}</p>
    <div class="detail-panel-meta">
      ${[
        ...((entry.stats || []).map((item) => ({ label: item, className: "" }))),
        { label: getTypeLabel(entry.type), className: "" },
        { label: `状态：${statusLabel}`, className: `is-${entry.status}` },
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

function getActiveEntry() {
  if (!state.active) {
    return null;
  }

  if (state.active.kind === "node") {
    return state.graph?.lookup.get(state.active.key) || null;
  }

  if (state.active.kind === "edge") {
    return state.edgeLookup.get(state.active.key) || null;
  }

  return null;
}

function buildDetailTriad(entry) {
  const detail = entry.detail || {};
  const prerequisites = detail.resolvedPrerequisites || [];
  const nextItems = detail.resolvedNext || [];
  const previewChildren = getPreviewChildren(entry.childTitles, 10);

  const whatBlocks = [];
  const problemBlocks = [];
  const exampleBlocks = [];

  if (detail.definition || entry.summary) {
    whatBlocks.push({ type: "text", content: detail.definition || entry.summary });
  }

  if (entry.parentTitle) {
    whatBlocks.push({ type: "list", label: "结构位置", items: [entry.parentTitle] });
  }

  if (previewChildren.length) {
    whatBlocks.push({ type: "list", label: "下一级结构", items: previewChildren });
  }

  if (entry.impactScope) {
    problemBlocks.push({ type: "text", label: "影响范围", content: entry.impactScope });
  }

  if (detail.importance) {
    problemBlocks.push({ type: "text", label: "核心价值", content: detail.importance });
  }

  if (prerequisites.length) {
    problemBlocks.push({ type: "refs", label: "理解前置", items: prerequisites });
  }

  if (entry.relatedNotes?.length) {
    problemBlocks.push({ type: "list", label: "相关关系", items: entry.relatedNotes });
  }

  if (entry.relatedLinks?.length) {
    problemBlocks.push({ type: "refs", label: "关联节点", items: entry.relatedLinks });
  }

  if (nextItems.length) {
    problemBlocks.push({ type: "refs", label: "继续延展", items: nextItems });
  }

  if (detail.minimumDemo) {
    exampleBlocks.push({ type: "text", label: "最小实验", content: detail.minimumDemo });
  }

  if (Array.isArray(detail.examples) && detail.examples.length) {
    exampleBlocks.push({ type: "list", label: "例子", items: detail.examples });
  }

  if (Array.isArray(detail.toolchain) && detail.toolchain.length) {
    exampleBlocks.push({ type: "list", label: "常用工具", items: detail.toolchain });
  }

  if (Array.isArray(detail.coreMetrics) && detail.coreMetrics.length) {
    exampleBlocks.push({ type: "list", label: "观察指标", items: detail.coreMetrics });
  }

  if (detail.hardwareBudget) {
    exampleBlocks.push({ type: "text", label: "资源需求", content: detail.hardwareBudget });
  }

  if (Array.isArray(detail.failureSigns) && detail.failureSigns.length) {
    exampleBlocks.push({ type: "list", label: "失败信号", items: detail.failureSigns });
  }

  if (Array.isArray(detail.pitfalls) && detail.pitfalls.length) {
    exampleBlocks.push({ type: "list", label: "常见误区", items: detail.pitfalls });
  }

  return [
    {
      title: "是什么",
      blocks: whatBlocks,
      emptyText: "当前对象还没有补充更具体的定义。",
    },
    {
      title: "解决了什么问题",
      blocks: problemBlocks,
      emptyText: "当前对象还没有补充它的价值、边界或关联问题。",
    },
    {
      title: "示例",
      blocks: exampleBlocks,
      emptyText: "当前对象还没有补充例子或最小实验。",
    },
  ];
}

function getPreviewChildren(childTitles, limit) {
  if (!Array.isArray(childTitles) || !childTitles.length) {
    return [];
  }

  const preview = childTitles.slice(0, limit);
  if (childTitles.length > preview.length) {
    preview.push(`还有 ${childTitles.length - preview.length} 项未展开`);
  }
  return preview;
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
    .map((item) =>
      item.key
        ? `
            <button type="button" class="detail-panel-link" data-node-key="${escapeAttribute(item.key)}">
              ${escapeHtml(item.label)}
            </button>
          `
        : `
            <button type="button" class="detail-panel-link" disabled>
              ${escapeHtml(item.label)}
            </button>
          `
    )
    .join("");
}

function getTypeLabel(type) {
  const labels = {
    domain: "领域",
    module: "模块",
    concept: "术语节点",
    relation: "关系节点",
    "edge-structure": "结构边",
    "edge-prerequisite": "前置边",
    "edge-next": "延展边",
    "edge-relation": "关系挂接边",
  };
  return labels[type] || "知识项";
}

function getStatusLabel(status) {
  const labels = state.graph?.config?.statusLabels || {
    none: "未补充",
    seed: "seed",
    draft: "draft",
    deep: "deep",
  };

  return labels[status] || labels.none || "未补充";
}

function countDetailEntriesInModule(module) {
  let total = hasMeaningfulDetail(module.detail) ? 1 : 0;
  walkConceptList(module.concepts || [], (concept) => {
    if (hasMeaningfulDetail(concept.detail)) {
      total += 1;
    }
  });
  return total;
}

function walkConceptList(concepts, visitor) {
  for (const concept of concepts || []) {
    visitor(concept);
    walkConceptList(concept.children || [], visitor);
  }
}

function flattenConceptNodes(concepts, depth = 0, trail = [], parent = null) {
  const items = [];
  for (const concept of concepts || []) {
    items.push({
      concept,
      depth,
      parentKey: parent?.pathKey || null,
      parentTitle: parent?.title || null,
      trail,
    });
    items.push(...flattenConceptNodes(concept.children || [], depth + 1, [...trail, concept.title], concept));
  }
  return items;
}

function getConceptFallbackSummary(concept) {
  const childCount = Array.isArray(concept.children) ? concept.children.length : 0;
  if (!childCount) {
    return "叶子概念，建议在 detail shard 里补充定义、误区和实验。";
  }
  return `${childCount} 个下级概念，双击所属模块后会和主线一起显示。`;
}

function toNodeLink(key, lookup) {
  const entry = lookup.get(key);
  if (!entry) {
    return null;
  }
  return { key, label: entry.title };
}

function buildAdaptiveLabel({
  title,
  code = "",
  maxUnits = 10,
  maxLines = 2,
  fontSize = 12,
  minWidth = 108,
  maxWidth = 180,
  horizontalPadding = 16,
}) {
  const titleLines = compactLines(title, maxUnits, maxLines);
  const lines = code ? [code, ...titleLines] : titleLines;
  const longestUnits = Math.max(1, ...lines.map((line) => measureVisualUnits(line)));
  const width = clamp(Math.round(longestUnits * fontSize * 0.92 + horizontalPadding * 2), minWidth, maxWidth);
  return {
    text: lines.join("\n"),
    width,
  };
}

function compactLabel(text, chunk = 10, lines = 2) {
  return compactLines(text, chunk, lines).join("\n");
}

function compactLines(text, chunk = 10, lines = 2) {
  const normalized = String(text || "").replace(/\s+/g, " ").trim();
  if (!normalized) {
    return [];
  }

  const rows = [];
  let cursor = normalized;
  while (cursor && rows.length < lines) {
    const [segment, rest] = splitByVisualUnits(cursor, chunk);
    rows.push(segment);
    cursor = rest;
  }

  if (cursor) {
    const tail = rows[rows.length - 1] || "";
    const [trimmed] = splitByVisualUnits(tail, Math.max(1, chunk - 1));
    rows[rows.length - 1] = `${trimmed}…`;
  }

  return rows;
}

function splitByVisualUnits(text, maxUnits) {
  let units = 0;
  let index = 0;
  const chars = Array.from(text);

  while (index < chars.length) {
    const nextUnits = units + measureCharUnits(chars[index]);
    if (index > 0 && nextUnits > maxUnits) {
      break;
    }
    units = nextUnits;
    index += 1;
  }

  return [chars.slice(0, index).join(""), chars.slice(index).join("")];
}

function measureVisualUnits(text) {
  return Array.from(String(text || "")).reduce((sum, char) => sum + measureCharUnits(char), 0);
}

function measureCharUnits(char) {
  if (!char) {
    return 0;
  }
  if (/\s/.test(char)) {
    return 0.34;
  }
  if (/[\u4e00-\u9fff\u3400-\u4dbf\u3040-\u30ff\uac00-\ud7af]/u.test(char)) {
    return 1;
  }
  if (/[A-Z0-9]/.test(char)) {
    return 0.72;
  }
  if (/[a-z]/.test(char)) {
    return 0.62;
  }
  return 0.52;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function tint(hex, opacity) {
  const value = hex.replace("#", "");
  if (value.length !== 6) {
    return hex;
  }
  const red = parseInt(value.slice(0, 2), 16);
  const green = parseInt(value.slice(2, 4), 16);
  const blue = parseInt(value.slice(4, 6), 16);
  return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll("\n", "&#10;");
}
