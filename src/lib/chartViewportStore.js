const viewportStore = new Map();

/**
 * DEFAULT VIEWPORT
 */
const DEFAULT_VIEWPORT = {
  scale: 1,

  translateX: 0,
  translateY: 0,

  xDomain: null,
  yDomain: null,

  baseCellSize: null,

  originalDomainSpanX: null,
  originalDomainSpanY: null,

  stageX: 0,
  stageY: 0,

  cameraX: 0,
  cameraY: 0,
};

/**
 * GET VIEWPORT
 */
export function getChartViewport(chartId) {
  if (!viewportStore.has(chartId)) {
    viewportStore.set(chartId, {
      ...DEFAULT_VIEWPORT,
    });
  }

  return viewportStore.get(chartId);
}

/**
 * UPDATE VIEWPORT
 */
export function updateChartViewport(chartId, updates) {
  const current = getChartViewport(chartId);

  viewportStore.set(chartId, {
    ...current,
    ...updates,
  });
}

export function removeChartViewport(chartId) {
  if (!chartId) return;
  viewportStore.delete(chartId);
}

export function retainOnlyChartViewports(activeChartIds) {
  const activeSet = new Set(activeChartIds);

  for (const chartId of viewportStore.keys()) {
    if (!activeSet.has(chartId)) {
      viewportStore.delete(chartId);
    }
  }
}

export function getViewportStoreSize() {
  return viewportStore.size;
}

/**
 * CLEAR ALL
 */
export function clearViewportStore() {
  viewportStore.clear();
}
