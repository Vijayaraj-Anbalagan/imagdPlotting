import { ADAPTIVE_CELL_SIZE } from "./constants";

export function computeAdaptiveCellSize(plotterPoints, xScaleFn, yScaleFn) {
  if (plotterPoints.length <= 1) {
    return ADAPTIVE_CELL_SIZE.max;
  }

  const pixelPositions = projectPointsToPixels(
    plotterPoints,
    xScaleFn,
    yScaleFn,
  );
  const medianDistance = estimateMedianNeighborDistance(pixelPositions);

  if (medianDistance <= 0) {
    return ADAPTIVE_CELL_SIZE.min;
  }

  const desiredSize = medianDistance * ADAPTIVE_CELL_SIZE.gapRatio;
  const clampedSize = clampCellSize(desiredSize);

  return Math.min(clampedSize, medianDistance * ADAPTIVE_CELL_SIZE.gapRatio);
}

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

export function computeEffectiveImageCount(adaptiveCellSize, imageCount) {
  const parsed = Number(imageCount);

  if (Number.isNaN(parsed)) {
    return 1;
  }

  return Math.max(1, Math.min(8, Math.floor(parsed)));
}

function projectPointsToPixels(plotterPoints, xScaleFn, yScaleFn) {
  return plotterPoints.map((point) => ({
    x: xScaleFn(point.scaledX ?? point.x),
    y: yScaleFn(point.scaledY ?? point.y),
  }));
}

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
    const col = Math.floor(
      (pixelPositions[index].x - bounds.minX) / bucketSize,
    );
    const row = Math.floor(
      (pixelPositions[index].y - bounds.minY) / bucketSize,
    );
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

function clampCellSize(rawSize) {
  return Math.max(
    ADAPTIVE_CELL_SIZE.min,
    Math.min(rawSize, ADAPTIVE_CELL_SIZE.max),
  );
}
