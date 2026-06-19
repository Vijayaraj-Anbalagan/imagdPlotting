export const LIBRARIES = [
  "Recharts",
  "Recharts (Native)",
  "AG Charts",
  "D3",
  "PixiJS",
  "Konva",
  "DeckGL",
  "ECharts",
];

export const DISABLED_LIBRARIES = [
  "D3",
  "PixiJS",
  "Konva",
  "DeckGL",
  "ECharts",
];

export const MIN_IMAGES_PER_POINT = 1;
export const MAX_IMAGES_PER_POINT = 8;

// Allowed images-per-point values shown in the selector.
export const IMAGE_COUNT_OPTIONS = [1, 2, 4];

export const DATA_POINT_LIMITS = {
  min: 1,
  max: 1000,
  defaultCount: 100,
};

export const CELL_SIZE = 50;
export const IMAGE_PADDING = 0.9;

export const ADAPTIVE_CELL_SIZE = {
  max: 50,
  min: 4,
  gapRatio: 0.55,
  collapseThreshold: 0,
};

export const PLOT_DIMENSIONS = {
  width: 900,
  height: 600,
};

export const PLOT_MARGIN = {
  top: 20,
  right: 20,
  bottom: 40,
  left: 50,
};

export const DATA_URL = "/data/data.json";

export const BRUSH_ZOOM = {
  fill: "rgba(68, 147, 255, 0.15)",
  stroke: "#4493ff",
  strokeWidth: 1.5,
  minimumSelectionPixels: 5,
};

export const ZOOM_SCALE_FACTOR = 1.5;
export const WHEEL_ZOOM_SENSITIVITY = 0.002;
export const MAX_RENDER_IMAGES = 50000;
