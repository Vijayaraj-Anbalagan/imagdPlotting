export const LIBRARIES = [
  "Recharts",
  "D3",
  "PixiJS",
  "Konva",
  "DeckGL",
  "ECharts",
];

export const DISABLED_LIBRARIES = ["DeckGL", "ECharts"];

export const IMAGE_COUNTS = [1, 2, 4, 8];

export const DATA_POINT_LIMITS = {
  min: 1,
  max: 10000,
  defaultCount: 16,
};

export const CELL_SIZE = 50;

export const ADAPTIVE_CELL_SIZE = {
  max: 50,
  min: 4,
  gapRatio: 0.78,
  collapseThreshold: 18,
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
