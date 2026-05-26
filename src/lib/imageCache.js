const imageCache = new Map();

/**
 * Preloads image sources.
 */
export async function preloadImageSources(imageSourceList) {
  const uniqueSources = [...new Set(imageSourceList)];

  const loadPromises = uniqueSources.map((source) => {
    if (imageCache.has(source)) {
      return Promise.resolve(imageCache.get(source));
    }

    return new Promise((resolve) => {
      const image = new window.Image();

      image.crossOrigin = "anonymous";

      image.src = source;

      image.onload = () => {
        imageCache.set(source, image);

        resolve(image);
      };

      image.onerror = () => {
        resolve(null);
      };
    });
  });

  return Promise.all(loadPromises);
}

/**
 * Returns cached image.
 */
export function getCachedImageObject(source) {
  return imageCache.get(source);
}
