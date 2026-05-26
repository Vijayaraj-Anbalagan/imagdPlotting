import { MAX_RENDER_IMAGES, IMAGE_PADDING } from "./constants";

/**
 * Computes deterministic grid offsets for ANY image count.
 */
export function computeGridOffsets(cellWidth, cellHeight, imageCount) {
  const safeImageCount = sanitizeImageCount(imageCount);

  const columns = Math.ceil(Math.sqrt(safeImageCount));
  const rows = Math.ceil(safeImageCount / columns);

  const subWidth = Math.max(2, cellWidth - columns * IMAGE_PADDING);

  const subHeight = Math.max(2, cellHeight - rows * IMAGE_PADDING);

  const offsets = [];

  const centeredOffsetX = ((columns - 1) * subWidth) / 2;

  const centeredOffsetY = ((rows - 1) * subHeight) / 2;

  for (let index = 0; index < safeImageCount; index++) {
    const column = index % columns;
    const row = Math.floor(index / columns);

    const offsetX = column * subWidth - centeredOffsetX;

    const offsetY = row * subHeight - centeredOffsetY;

    offsets.push({
      offsetX,
      offsetY,
      width: subWidth,
      height: subHeight,
    });
  }

  return offsets;
}

/**
 * Computes deterministic image positions.
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

/**
 * Normalizes image counts.
 */
function sanitizeImageCount(imageCount) {
  const parsed = Number(imageCount);

  if (Number.isNaN(parsed)) {
    return 1;
  }

  return Math.max(1, Math.min(1000, Math.floor(parsed)));
}
