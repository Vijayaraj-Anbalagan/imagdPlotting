/**
 * Computes sub-image positions within a cell for multi-image rendering.
 *
 * Given an imageCount (1, 2, 4, or 8), returns an array of
 * { offsetX, offsetY, width, height } objects describing
 * each sub-image's position relative to the cell center.
 */
export function computeGridOffsets(cellWidth, cellHeight, imageCount) {
  const gridConfig = getGridConfig(imageCount);
  const subWidth = cellWidth;
  const subHeight = cellHeight;
  const offsets = [];

  for (let row = 0; row < gridConfig.rows; row++) {
    for (let col = 0; col < gridConfig.columns; col++) {
      if (offsets.length >= imageCount) break;

      const xPos = col * subWidth - ((gridConfig.columns - 1) * subWidth) / 2;
      const yPos = row * subHeight - ((gridConfig.rows - 1) * subHeight) / 2;

      offsets.push({
        offsetX: xPos,
        offsetY: yPos,
        width: subWidth,
        height: subHeight,
      });
    }
  }

  return offsets;
}

/**
 * Returns grid rows/columns for a given image count.
 */
function getGridConfig(imageCount) {
  const configs = {
    1: { rows: 1, columns: 1 },
    2: { rows: 1, columns: 2 },
    4: { rows: 2, columns: 2 },
    8: { rows: 2, columns: 4 },
  };

  return configs[imageCount] || configs[1];
}

/**
 * Computes absolute positions for sub-images at a given coordinate.
 * Returns array of { x, y, width, height } for each sub-image.
 */
export function computeImagePositions(centerX, centerY, cellWidth, cellHeight, imageCount) {
  const offsets = computeGridOffsets(cellWidth, cellHeight, imageCount);

  return offsets.map((offset) => ({
    x: centerX + offset.offsetX - offset.width / 2,
    y: centerY + offset.offsetY - offset.height / 2,
    width: offset.width,
    height: offset.height,
  }));
}
