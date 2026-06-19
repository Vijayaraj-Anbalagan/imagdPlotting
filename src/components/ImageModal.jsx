import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { createPortal } from "react-dom";
import OpenSeaDragon from "openseadragon";
import "./ImageModal.css";

export default function ImageModal({
  point,
  imageCount,
  initialImageIndex,
  onClose,
}) {
  const images = useMemo(
    () => Array.from({ length: imageCount }, () => point.image),
    [imageCount, point.image],
  );

  const [currentIndex, setCurrentIndex] = useState(
    Math.min(Math.max(0, initialImageIndex ?? 0), images.length - 1),
  );

  const viewerDivRef = useRef(null);
  const viewerRef = useRef(null);

  useEffect(() => {
    if (!viewerDivRef.current) return;

    let viewer = null;
    let destroyed = false;

    // OSD 5+ requires the host element to be fully committed to the DOM before
    // initialisation so its canvas drawer can obtain a valid 2D context.
    // A zero-delay timeout lets the portal flush its DOM writes first.
    const timerId = setTimeout(() => {
      if (destroyed || !viewerDivRef.current) return;

      viewer = OpenSeaDragon({
        element: viewerDivRef.current,
        prefixUrl: "/osd/",
        // Explicitly select the canvas drawer — required in OSD 5+/6+.
        drawer: "canvas",
        tileSources: {
          type: "image",
          url: images[currentIndex],
        },
        showNavigationControl: true,
        showZoomControl: true,
        showHomeControl: true,
        showFullPageControl: true,
        navigationControlAnchor: OpenSeaDragon.ControlAnchor.TOP_LEFT,
        gestureSettingsMouse: { clickToZoom: true },
        defaultZoomLevel: 0,
        minZoomLevel: 0.001,
        maxZoomLevel: 20,
        visibilityRatio: 1,
        constrainDuringPan: true,
        background: "#000",
        animationTime: 0.3,
        blendTime: 0.1,
      });

      // After OSD resizes (full-page toggle or window resize) re-fit the image
      // to fill the new container. rAF waits for the browser to apply the layout.
      const refit = () => {
        requestAnimationFrame(() => {
          if (viewerRef.current) viewer.viewport.goHome(true);
        });
      };

      viewer.addHandler("full-page", refit);
      viewer.addHandler("resize", refit);
      viewer._refitHandler = refit;
      viewerRef.current = viewer;
    }, 0);

    return () => {
      destroyed = true;
      clearTimeout(timerId);
      if (viewer) {
        viewer.removeHandler("full-page", viewer._refitHandler);
        viewer.removeHandler("resize", viewer._refitHandler);
        viewer.destroy();
      }
      viewerRef.current = null;
    };
  }, [currentIndex, images]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  const goPrev = useCallback(
    () => setCurrentIndex((i) => (i - 1 + images.length) % images.length),
    [images.length],
  );

  const goNext = useCallback(
    () => setCurrentIndex((i) => (i + 1) % images.length),
    [images.length],
  );

  const hasMultiple = images.length > 1;

  const metaEntries = point.meta
    ? Object.entries(point.meta).map(([k, v]) => ({ key: k, value: v }))
    : [];

  return createPortal(
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} title="Close (Esc)">
          ×
        </button>

        <div className="modal-viewer" ref={viewerDivRef} />

        {hasMultiple && (
          <div className="modal-carousel">
            <button
              className="carousel-arrow"
              onClick={goPrev}
              title="Previous image"
            >
              ‹
            </button>

            <div className="carousel-dots">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  className={`carousel-dot${idx === currentIndex ? " active" : ""}`}
                  onClick={() => setCurrentIndex(idx)}
                  title={`Image ${idx + 1}`}
                />
              ))}
            </div>

            <button
              className="carousel-arrow"
              onClick={goNext}
              title="Next image"
            >
              ›
            </button>

            <span className="carousel-label">
              {currentIndex + 1} / {images.length}
            </span>
          </div>
        )}

        <div className="modal-info">
          <div className="modal-info-label">{point.label}</div>
          <div className="modal-info-field">
            <span className="modal-info-key">X:</span>
            <span className="modal-info-value">{point.x}</span>
          </div>
          <div className="modal-info-field">
            <span className="modal-info-key">Y:</span>
            <span className="modal-info-value">{point.y}</span>
          </div>
          {metaEntries.map(({ key, value }) => (
            <div key={key} className="modal-info-field">
              <span className="modal-info-key">{key}:</span>
              <span className="modal-info-value">{String(value)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>,
    document.body,
  );
}
