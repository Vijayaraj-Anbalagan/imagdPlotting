// src/lib/imageBitmapCache.js

// Shared across ALL chart instances
const cache = new Map(); // url -> ImageBitmap
const pending = new Map(); // url -> Promise<ImageBitmap>

// Thumbnail cache (LoD)
const thumbCache = new Map();

// Config
const LOD_THUMB_SIZE = 32;
const LOD_THRESHOLD = 24;

// ---- Full bitmap loader ----
export async function getImageBitmap(url) {
  if (cache.has(url)) return cache.get(url);
  if (pending.has(url)) return pending.get(url);

  const promise = fetch(url)
    .then((r) => r.blob())
    .then((blob) => createImageBitmap(blob))
    .then((bitmap) => {
      cache.set(url, bitmap);
      pending.delete(url);
      return bitmap;
    })
    .catch((err) => {
      pending.delete(url);
      throw err;
    });

  pending.set(url, promise);
  return promise;
}

// ---- LoD loader ----
export async function getImageBitmapLoD(url, cellSizePx) {
  const useThumb = cellSizePx < LOD_THRESHOLD;

  if (useThumb) {
    if (thumbCache.has(url)) return thumbCache.get(url);

    const full = await getImageBitmap(url);

    const oc = new OffscreenCanvas(LOD_THUMB_SIZE, LOD_THUMB_SIZE);
    const ctx = oc.getContext("2d");
    ctx.drawImage(full, 0, 0, LOD_THUMB_SIZE, LOD_THUMB_SIZE);

    const thumb = await createImageBitmap(oc);
    thumbCache.set(url, thumb);
    return thumb;
  }

  return getImageBitmap(url);
}

// ---- Cleanup ----
export function clearImageBitmapCache() {
  for (const bmp of cache.values()) bmp.close();
  cache.clear();
  pending.clear();
}

export function clearThumbCache() {
  for (const bmp of thumbCache.values()) bmp.close();
  thumbCache.clear();
}
