const viewportStore = new Map();

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

  // AG Charts zoom state: ratioX/ratioY are the visible fraction [0,1] of the
  // data domain (e.g. { start: 0.2, end: 0.6 } means 40% of the axis is shown).
  // zoomFactor mirrors the derived scalar used to scale marker size.
  agZoomRatioX: null,
  agZoomRatioY: null,
  agZoomFactor: 1,

  userModified: false,
};
// console.log("Overall view ports available", viewportStore)

export function getChartViewport(chartId) {
  if (!viewportStore.has(chartId)) {
    viewportStore.set(chartId, {
      ...DEFAULT_VIEWPORT,
    });
  }


  return viewportStore.get(chartId);
}

export function updateChartViewport(chartId, updates) {
  const current = getChartViewport(chartId);

  viewportStore.set(chartId, {
    ...current,
    ...updates,
  });
}

export function markViewportUserModified(chartId) {
  const current = getChartViewport(chartId);
  viewportStore.set(chartId, { ...current, userModified: true });
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

export function clearViewportStore() {
  viewportStore.clear();
}
