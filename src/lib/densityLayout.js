import { ADAPTIVE_CELL_SIZE } from "./constants";

/**
 * Computes an image cell size that prevents overlap by adapting to
 * the density of points in the current viewport's pixel-space.
 *
 * Uses a grid-bucket spatial index for O(n) nearest-neighbor estimation.
 *
 * @param {Array}    plotterPoints - Array of { x, y, ... } data objects
 * @param {Function} xScaleFn     - Converts data-x → pixel-x
 * @param {Function} yScaleFn     - Converts data-y → pixel-y
 * @returns {number} Optimal cell size in pixels
 */
export function computeAdaptiveCellSize(plotterPoints, xScaleFn, yScaleFn) {
  if (plotterPoints.length <= 1) {
    return ADAPTIVE_CELL_SIZE.max;
  }

  const pixelPositions = projectPointsToPixels(plotterPoints, xScaleFn, yScaleFn);
  const medianDistance = estimateMedianNeighborDistance(pixelPositions);

  if (medianDistance <= 0) {
    return ADAPTIVE_CELL_SIZE.min;
  }

  const desiredSize = medianDistance * ADAPTIVE_CELL_SIZE.gapRatio;
  const clampedSize = clampCellSize(desiredSize);

  /* Hard ceiling: cell size must NEVER exceed the actual neighbor distance.
     This guarantees zero overlap even if the min floor is too high. */
  return Math.min(clampedSize, medianDistance * ADAPTIVE_CELL_SIZE.gapRatio);
}

/**
 * Filters points to only those visible within the viewport bounds,
 * plus a margin equal to one cell size on each side.
 *
 * @param {Array}    plotterPoints   - Full array of data points
 * @param {Function} xScaleFn       - Converts data-x → pixel-x
 * @param {Function} yScaleFn       - Converts data-y → pixel-y
 * @param {number}   viewportWidth  - Viewport width in pixels
 * @param {number}   viewportHeight - Viewport height in pixels
 * @param {number}   cellMargin     - Extra margin (half cell size) for edge points
 * @returns {Array} Subset of plotterPoints within the visible area
 */
export function filterVisiblePoints(
  plotterPoints,
  xScaleFn,
  yScaleFn,
  viewportWidth,
  viewportHeight,
  cellMargin,
) {
  const boundsLeft = -cellMargin;
  const boundsTop = -cellMargin;
  const boundsRight = viewportWidth + cellMargin;
  const boundsBottom = viewportHeight + cellMargin;

  return plotterPoints.filter((point) => {
    const pixelX = xScaleFn(point.scaledX ?? point.x);
    const pixelY = yScaleFn(point.scaledY ?? point.y);

    return (
      pixelX >= boundsLeft &&
      pixelX <= boundsRight &&
      pixelY >= boundsTop &&
      pixelY <= boundsBottom
    );
  });
}

/**
 * Determines whether multi-image grids should collapse to a single
 * representative thumbnail based on adaptive cell size.
 *
 * @param {number} adaptiveCellSize - Current adaptive cell size in px
 * @param {number} imageCount       - Requested sub-images per point
 * @returns {number} Effective image count (1 if collapsed)
 */
export function computeEffectiveImageCount(adaptiveCellSize, imageCount) {
  if (imageCount <= 1) {
    return 1;
  }

  if (adaptiveCellSize < ADAPTIVE_CELL_SIZE.collapseThreshold) {
    return 1;
  }

  return imageCount;
}

/* ─── Internal: Pixel Projection ────────────────────────────────── */

function projectPointsToPixels(plotterPoints, xScaleFn, yScaleFn) {
  return plotterPoints.map((point) => ({
    x: xScaleFn(point.scaledX ?? point.x),
    y: yScaleFn(point.scaledY ?? point.y),
  }));
}

/* ─── Internal: Median Nearest-Neighbor Distance ────────────────── */

function estimateMedianNeighborDistance(pixelPositions) {
  if (pixelPositions.length <= 1) {
    return ADAPTIVE_CELL_SIZE.max;
  }

  const neighborDistances = collectNearestNeighborDistances(pixelPositions);

  if (neighborDistances.length === 0) {
    return ADAPTIVE_CELL_SIZE.max;
  }

  neighborDistances.sort((a, b) => a - b);

  const medianIndex = Math.floor(neighborDistances.length / 2);
  return neighborDistances[medianIndex];
}

/* ─── Internal: Grid-Bucket Spatial Index ───────────────────────── */

/**
 * Computes nearest-neighbor distance for each point using a spatial
 * grid bucket approach. Average complexity is O(n).
 */
function collectNearestNeighborDistances(pixelPositions) {
  const bounds = computePixelBounds(pixelPositions);
  const bucketSize = estimateBucketSize(bounds, pixelPositions.length);

  if (bucketSize <= 0) {
    return [];
  }

  const grid = buildSpatialGrid(pixelPositions, bounds, bucketSize);
  const distances = [];

  for (let pointIndex = 0; pointIndex < pixelPositions.length; pointIndex++) {
    const nearestDistance = findNearestNeighborDistance(
      pixelPositions,
      pointIndex,
      grid,
      bounds,
      bucketSize,
    );

    if (nearestDistance < Infinity) {
      distances.push(nearestDistance);
    }
  }

  return distances;
}

function computePixelBounds(pixelPositions) {
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;

  for (const position of pixelPositions) {
    if (position.x < minX) minX = position.x;
    if (position.x > maxX) maxX = position.x;
    if (position.y < minY) minY = position.y;
    if (position.y > maxY) maxY = position.y;
  }

  return { minX, minY, maxX, maxY };
}

function estimateBucketSize(bounds, pointCount) {
  const spanX = Math.max(bounds.maxX - bounds.minX, 1);
  const spanY = Math.max(bounds.maxY - bounds.minY, 1);
  return Math.sqrt((spanX * spanY) / pointCount) * 2;
}

function buildSpatialGrid(pixelPositions, bounds, bucketSize) {
  const grid = new Map();

  for (let index = 0; index < pixelPositions.length; index++) {
    const col = Math.floor((pixelPositions[index].x - bounds.minX) / bucketSize);
    const row = Math.floor((pixelPositions[index].y - bounds.minY) / bucketSize);
    const cellKey = `${col},${row}`;

    if (!grid.has(cellKey)) {
      grid.set(cellKey, []);
    }

    grid.get(cellKey).push(index);
  }

  return grid;
}

function findNearestNeighborDistance(
  pixelPositions,
  targetIndex,
  grid,
  bounds,
  bucketSize,
) {
  const targetPoint = pixelPositions[targetIndex];
  const centerCol = Math.floor((targetPoint.x - bounds.minX) / bucketSize);
  const centerRow = Math.floor((targetPoint.y - bounds.minY) / bucketSize);

  let nearestDistanceSquared = Infinity;

  for (let deltaCol = -1; deltaCol <= 1; deltaCol++) {
    for (let deltaRow = -1; deltaRow <= 1; deltaRow++) {
      const cellKey = `${centerCol + deltaCol},${centerRow + deltaRow}`;
      const cellIndices = grid.get(cellKey);

      if (!cellIndices) continue;

      for (const neighborIndex of cellIndices) {
        if (neighborIndex === targetIndex) continue;

        const neighborPoint = pixelPositions[neighborIndex];
        const deltaX = targetPoint.x - neighborPoint.x;
        const deltaY = targetPoint.y - neighborPoint.y;
        const distSquared = deltaX * deltaX + deltaY * deltaY;

        if (distSquared < nearestDistanceSquared) {
          nearestDistanceSquared = distSquared;
        }
      }
    }
  }

  return Math.sqrt(nearestDistanceSquared);
}

/* ─── Internal: Clamping ────────────────────────────────────────── */

function clampCellSize(rawSize) {
  return Math.max(
    ADAPTIVE_CELL_SIZE.min,
    Math.min(rawSize, ADAPTIVE_CELL_SIZE.max),
  );
}
