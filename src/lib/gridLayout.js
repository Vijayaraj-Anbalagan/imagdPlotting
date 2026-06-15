import { MAX_RENDER_IMAGES } from "./constants";

/**
 * Chooses a column/row split for a given image count.
 * 1 -> 1x1, 2 -> 2x1, and everything larger packs into exactly 2 rows
 * (4 -> 2x2, 6 -> 3x2, 8 -> 4x2). Keeps clusters compact and centered.
 */
function chooseGrid(count) {
  if (count <= 1) return { columns: 1, rows: 1 };
  if (count <= 2) return { columns: count, rows: 1 };
  const rows = 2;
  const columns = Math.ceil(count / rows);
  return { columns, rows };
}

/**
 * Computes deterministic grid offsets for a per-point image cluster.
 *
 * The whole cluster is sized to fit inside cellWidth x cellHeight and is
 * centered on (0,0). Sub-images are square and tile edge-to-edge with no gaps
 * between rows or columns. Because the cluster never exceeds the cell, and the
 * cell is kept smaller than the nearest-neighbour distance, clusters from
 * different data points never overlap.
 */
export function computeGridOffsets(cellWidth, cellHeight, imageCount) {
  const safeImageCount = sanitizeImageCount(imageCount);

  const { columns, rows } = chooseGrid(safeImageCount);

  // Square sub-image: limited by whichever dimension is tighter.
  const sub = Math.max(2, Math.min(cellWidth / columns, cellHeight / rows));

  const clusterWidth = columns * sub;
  const clusterHeight = rows * sub;

  const offsets = [];

  for (let index = 0; index < safeImageCount; index++) {
    const column = index % columns;
    const row = Math.floor(index / columns);

    const offsetX = (column + 0.5) * sub - clusterWidth / 2;
    const offsetY = (row + 0.5) * sub - clusterHeight / 2;

    offsets.push({
      offsetX,
      offsetY,
      width: sub,
      height: sub,
    });
  }

  return offsets;
}

/**
 * Computes deterministic image positions (top-left x/y) for one data point.
 */
export function computeImagePositions(
  centerX,
  centerY,
  cellWidth,
  cellHeight,
  imageCount,
) {
  const safeImageCount = sanitizeImageCount(imageCount);

  const offsets = computeGridOffsets(cellWidth, cellHeight, safeImageCount);

  const positions = [];

  for (let index = 0; index < offsets.length; index++) {
    if (positions.length >= MAX_RENDER_IMAGES) {
      break;
    }

    const offset = offsets[index];

    positions.push({
      imageIndex: index,
      x: centerX + offset.offsetX - offset.width / 2,
      y: centerY + offset.offsetY - offset.height / 2,
      width: offset.width,
      height: offset.height,
    });
  }

  return positions;
}

function sanitizeImageCount(imageCount) {
  const parsed = Number(imageCount);
  if (Number.isNaN(parsed)) return 1;
  return Math.max(1, Math.min(1000, Math.floor(parsed)));
}
