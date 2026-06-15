import { useEffect, useRef } from "react";
import { getImageBitmapLoD } from "../lib/imageBitmapCache";
import { PLOT_MARGIN } from "../lib/constants";
import { computeImagePositions } from "../lib/gridLayout";

export default function ImageCanvasLayer({
  points,
  baseXScale,
  baseYScale,
  cellSize,
  transform,
  imageCount,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current || !points.length) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const dpr = window.devicePixelRatio || 1;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    ctx.clearRect(0, 0, width, height);

    let cancelled = false;

    const render = async () => {
      const renderedPx = cellSize * transform.scale;
      const uniqueUrls = [...new Set(points.map((p) => p.image))];

      const bitmapMap = new Map();

      await Promise.all(
        uniqueUrls.map(async (url) => {
          try {
            const bmp = await getImageBitmapLoD(url, renderedPx);
            bitmapMap.set(url, bmp);
          } catch {
            // ignore
          }
        }),
      );

      if (cancelled) return;

      for (const point of points) {
        const x = transform.x + baseXScale(point.scaledX) * transform.scale;
        const y = transform.y + baseYScale(point.scaledY) * transform.scale;

        if (renderedPx < 6) {
          ctx.fillStyle = "#2a3a5a";
          ctx.fillRect(
            x - renderedPx / 2,
            y - renderedPx / 2,
            renderedPx,
            renderedPx,
          );
          continue;
        }

        const bitmap = bitmapMap.get(point.image);

        if (!bitmap) {
          ctx.fillStyle = "#444";
          ctx.fillRect(
            x - renderedPx / 2,
            y - renderedPx / 2,
            renderedPx,
            renderedPx,
          );
          continue;
        }

        const positions = computeImagePositions(
          x,
          y,
          renderedPx,
          renderedPx,
          imageCount,
        );

        for (const pos of positions) {
          ctx.drawImage(bitmap, pos.x, pos.y, pos.width, pos.height);
        }
      }
    };

    render();

    return () => {
      cancelled = true;
    };
  }, [
    points,
    baseXScale,
    baseYScale,
    cellSize,
    transform.scale,
    transform.x,
    transform.y,
    imageCount,
  ]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        left: `${PLOT_MARGIN.left}px`,
        top: `${PLOT_MARGIN.top}px`,
        width: `calc(100% - ${PLOT_MARGIN.left + PLOT_MARGIN.right}px)`,
        height: `calc(100% - ${PLOT_MARGIN.top + PLOT_MARGIN.bottom}px)`,
        pointerEvents: "none",
      }}
    />
  );
}
