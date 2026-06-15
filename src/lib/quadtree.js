/**
 * Quadtree spatial index for efficient point culling and nearest-neighbor queries
 * Provides O(log n) lookup time instead of O(n) linear filtering
 */

export class Quadtree {
  constructor(bounds, maxPoints = 8, maxDepth = 8, depth = 0) {
    this.bounds = bounds; // { x, y, width, height }
    this.maxPoints = maxPoints; // Max points before subdivision
    this.maxDepth = maxDepth;
    this.depth = depth;
    this.points = [];
    this.divided = false;
    this.children = null;
  }

  /**
   * Insert a point into the quadtree
   */
  insert(point) {
    if (!this.contains(point)) {
      return false;
    }

    if (this.points.length < this.maxPoints && !this.divided) {
      this.points.push(point);
      return true;
    } else {
      if (!this.divided) {
        this.subdivide();
      }

      for (let child of this.children) {
        if (child.insert(point)) {
          return true;
        }
      }
    }
    return false;
  }

  /**
   * Subdivide quadtree into 4 children
   */
  subdivide() {
    const { x, y, width, height } = this.bounds;
    const halfW = width / 2;
    const halfH = height / 2;

    this.children = [
      // NE
      new Quadtree(
        { x: x + halfW, y, width: halfW, height: halfH },
        this.maxPoints,
        this.maxDepth,
        this.depth + 1,
      ),
      // NW
      new Quadtree(
        { x, y, width: halfW, height: halfH },
        this.maxPoints,
        this.maxDepth,
        this.depth + 1,
      ),
      // SE
      new Quadtree(
        { x: x + halfW, y: y + halfH, width: halfW, height: halfH },
        this.maxPoints,
        this.maxDepth,
        this.depth + 1,
      ),
      // SW
      new Quadtree(
        { x, y: y + halfH, width: halfW, height: halfH },
        this.maxPoints,
        this.maxDepth,
        this.depth + 1,
      ),
    ];

    this.divided = true;

    // Redistribute existing points to children
    for (let p of this.points) {
      for (let child of this.children) {
        if (child.insert(p)) break;
      }
    }

    this.points = [];
  }

  /**
   * Check if point is within bounds
   */
  contains(point) {
    const { x, y, width, height } = this.bounds;
    return (
      point.scaledX >= x &&
      point.scaledX < x + width &&
      point.scaledY >= y &&
      point.scaledY < y + height
    );
  }

  /**
   * Query points within a rectangular region (viewport)
   * Returns array of points intersecting the query bounds
   */
  query(queryBounds, found = []) {
    if (!this.intersects(queryBounds)) {
      return found;
    }

    for (let p of this.points) {
      if (this.pointInBounds(p, queryBounds)) {
        found.push(p);
      }
    }

    if (this.divided) {
      for (let child of this.children) {
        child.query(queryBounds, found);
      }
    }

    return found;
  }

  /**
   * Check if query bounds intersects with this node's bounds
   */
  intersects(queryBounds) {
    const { x, y, width, height } = this.bounds;
    const { minX, minY, maxX, maxY } = queryBounds;

    return !(maxX < x || minX > x + width || maxY < y || minY > y + height);
  }

  /**
   * Check if point is within query bounds
   */
  pointInBounds(point, bounds) {
    const { minX, minY, maxX, maxY } = bounds;
    return (
      point.scaledX >= minX &&
      point.scaledX <= maxX &&
      point.scaledY >= minY &&
      point.scaledY <= maxY
    );
  }

  /**
   * Clear all points from tree (for rebuilding)
   */
  clear() {
    this.points = [];
    this.divided = false;
    this.children = null;
  }

  /**
   * Get statistics about tree structure
   */
  stats() {
    let nodeCount = 1;
    let pointCount = this.points.length;

    if (this.divided) {
      for (let child of this.children) {
        const childStats = child.stats();
        nodeCount += childStats.nodeCount;
        pointCount += childStats.pointCount;
      }
    }

    return { nodeCount, pointCount, depth: this.depth };
  }
}

/**
 * Build a quadtree from a list of normalized points
 */
export function buildQuadtree(normalizedPoints) {
  if (!normalizedPoints || normalizedPoints.length === 0) {
    return new Quadtree({ x: 0, y: 0, width: 1000, height: 1000 });
  }

  // Find bounds of all points
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;

  for (const point of normalizedPoints) {
    if (point.scaledX < minX) minX = point.scaledX;
    if (point.scaledX > maxX) maxX = point.scaledX;
    if (point.scaledY < minY) minY = point.scaledY;
    if (point.scaledY > maxY) maxY = point.scaledY;
  }

  // Add padding to bounds
  const padding = 50;
  const bounds = {
    x: minX - padding,
    y: minY - padding,
    width: maxX - minX + padding * 2,
    height: maxY - minY + padding * 2,
  };

  const quadtree = new Quadtree(bounds, 8, 8);

  for (const point of normalizedPoints) {
    quadtree.insert(point);
  }

  return quadtree;
}

/**
 * Query visible points using quadtree
 * Much faster than linear filtering for large datasets
 */
export function queryVisiblePointsQuadtree(tree, bounds, buffer = 0) {
  if (!tree) return [];

  const result = [];

  const queryBounds = {
    minX: bounds.xMin - buffer,
    maxX: bounds.xMax + buffer,
    minY: bounds.yMin - buffer,
    maxY: bounds.yMax + buffer,
  };

  return tree.query(queryBounds, result);
}
