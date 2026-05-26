const loadedImageObjects = {};

/**
 * Preloads a list of unique image source URLs and caches their HTML Image objects.
 * @param {Array} imageSourceList - List of image URL strings
 * @returns {Promise} Resolves when all images have finished loading
 */
export function preloadImageSources(imageSourceList) {
  const uniqueSources = [...new Set(imageSourceList)];
  const loadPromises = uniqueSources.map((source) => {
    if (loadedImageObjects[source]) {
      return Promise.resolve(loadedImageObjects[source]);
    }
    return new Promise((resolve) => {
      const htmlImage = new window.Image();
      htmlImage.crossOrigin = "anonymous";
      htmlImage.src = source;
      htmlImage.onload = () => {
        loadedImageObjects[source] = htmlImage;
        resolve(htmlImage);
      };
      htmlImage.onerror = () => {
        resolve(null);
      };
    });
  });
  return Promise.all(loadPromises);
}

/**
 * Retrieves a cached HTML Image object for a given source.
 * @param {string} source - The image source URL
 * @returns {HTMLImageElement|undefined} The cached image object
 */
export function getCachedImageObject(source) {
  return loadedImageObjects[source];
}
