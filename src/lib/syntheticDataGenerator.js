const BASE_IMAGE_PATH = "/images/base.jpg";

/**
 * Generates an array of synthetic plotter data points arranged in a grid.
 * Each point has { id, x, y, image, label, meta } matching the data.json schema.
 *
 * @param {number} totalPoints - Number of data points to generate (1–2000)
 * @returns {Array} Array of plotter point objects
 */
export function generateSyntheticPoints(totalPoints) {
  const clampedCount = Math.max(1, Math.min(totalPoints, 2000));
  const columns = computeGridColumns(clampedCount);
  const spacing = 15;

  const syntheticPoints = [];

  for (let index = 0; index < clampedCount; index++) {
    const column = index % columns;
    const row = Math.floor(index / columns);

    syntheticPoints.push(
      Object.freeze({
        id: `synth-${index}`,
        x: column * spacing,
        y: row * spacing,
        image: BASE_IMAGE_PATH,
        label: `Point ${index + 1}`,
        meta: Object.freeze({
          interval: column * spacing,
          angle: row * spacing,
          quality: parseFloat((0.7 + Math.random() * 0.25).toFixed(2)),
        }),
      }),
    );
  }

  return syntheticPoints;
}

/**
 * Computes the number of columns for a near-square grid layout.
 */
function computeGridColumns(totalPoints) {
  return Math.ceil(Math.sqrt(totalPoints));
}
