# Repository Dump

## Folder Structure

```txt
imagdPlotting
├── generate-repo-md.cjs
├── package.json
├── public
│   ├── data
│   │   └── data.json
│   └── images
│       └── base-old.jpeg
├── repository_dump.md
└── src
    ├── App.jsx
    ├── components
    │   ├── D3Plotter.jsx
    │   ├── DataPointCountControl.jsx
    │   ├── DeckGLPlotter.jsx
    │   ├── EChartsPlotter.jsx
    │   ├── ImageCountSelector.jsx
    │   ├── KonvaPlotter.jsx
    │   ├── Navbar.jsx
    │   ├── PixiPlotter.jsx
    │   ├── PlotterControls.jsx
    │   └── RechartsPlotter.jsx
    ├── lib
    │   ├── chartInteractionLogger.js
    │   ├── constants.js
    │   ├── densityLayout.js
    │   ├── gridLayout.js
    │   ├── imageCache.js
    │   ├── interactionMode.js
    │   ├── plotterData.js
    │   └── syntheticDataGenerator.js
    └── main.jsx
```

## Files

---

# package.json

```json
{
  "name": "poc",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@deck.gl/core": "^9.3.2",
    "@deck.gl/layers": "^9.3.2",
    "@deck.gl/react": "^9.3.2",
    "@luma.gl/engine": "^9.3.3",
    "@luma.gl/webgl": "^9.3.3",
    "@pixi/react": "^8.0.5",
    "d3": "^7.9.0",
    "echarts": "^6.0.0",
    "echarts-for-react": "^3.0.6",
    "konva": "^10.3.0",
    "pixi.js": "^8.18.1",
    "react": "^19.2.6",
    "react-dom": "^19.2.6",
    "react-konva": "^19.2.4",
    "recharts": "^3.8.1",
    "use-image": "^1.1.4"
  },
  "devDependencies": {
    "@eslint/js": "^10.0.1",
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.1",
    "eslint": "^10.3.0",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-react-refresh": "^0.5.2",
    "globals": "^17.6.0",
    "vite": "^8.0.12"
  }
}

```

---

# public\data\data.json

```json
[
  {
    "id": "1-0",
    "x": 0,
    "y": 0,
    "image": "/images/base.jpg",
    "label": "Interval 0s, 0°",
    "meta": { "interval": 0, "angle": 0, "quality": 0.95 }
  },
  {
    "id": "1-15",
    "x": 0,
    "y": 15,
    "image": "/images/base.jpg",
    "label": "Interval 0s, 15°",
    "meta": { "interval": 0, "angle": 15, "quality": 0.93 }
  },
  {
    "id": "1-30",
    "x": 0,
    "y": 30,
    "image": "/images/base.jpg",
    "label": "Interval 0s, 30°",
    "meta": { "interval": 0, "angle": 30, "quality": 0.91 }
  },
  {
    "id": "1-45",
    "x": 0,
    "y": 45,
    "image": "/images/base.jpg",
    "label": "Interval 0s, 45°",
    "meta": { "interval": 0, "angle": 45, "quality": 0.88 }
  },
  {
    "id": "2-0",
    "x": 10,
    "y": 0,
    "image": "/images/base.jpg",
    "label": "Interval 10s, 0°",
    "meta": { "interval": 10, "angle": 0, "quality": 0.92 }
  },
  {
    "id": "2-15",
    "x": 10,
    "y": 15,
    "image": "/images/base.jpg",
    "label": "Interval 10s, 15°",
    "meta": { "interval": 10, "angle": 15, "quality": 0.9 }
  },
  {
    "id": "2-30",
    "x": 10,
    "y": 30,
    "image": "/images/base.jpg",
    "label": "Interval 10s, 30°",
    "meta": { "interval": 10, "angle": 30, "quality": 0.87 }
  },
  {
    "id": "2-45",
    "x": 10,
    "y": 45,
    "image": "/images/base.jpg",
    "label": "Interval 10s, 45°",
    "meta": { "interval": 10, "angle": 45, "quality": 0.84 }
  },
  {
    "id": "3-0",
    "x": 20,
    "y": 0,
    "image": "/images/base.jpg",
    "label": "Interval 20s, 0°",
    "meta": { "interval": 20, "angle": 0, "quality": 0.89 }
  },
  {
    "id": "3-15",
    "x": 20,
    "y": 15,
    "image": "/images/base.jpg",
    "label": "Interval 20s, 15°",
    "meta": { "interval": 20, "angle": 15, "quality": 0.86 }
  },
  {
    "id": "3-30",
    "x": 20,
    "y": 30,
    "image": "/images/base.jpg",
    "label": "Interval 20s, 30°",
    "meta": { "interval": 20, "angle": 30, "quality": 0.83 }
  },
  {
    "id": "3-45",
    "x": 20,
    "y": 45,
    "image": "/images/base.jpg",
    "label": "Interval 20s, 45°",
    "meta": { "interval": 20, "angle": 45, "quality": 0.8 }
  },
  {
    "id": "4-0",
    "x": 30,
    "y": 0,
    "image": "/images/base.jpg",
    "label": "Interval 30s, 0°",
    "meta": { "interval": 30, "angle": 0, "quality": 0.85 }
  },
  {
    "id": "4-15",
    "x": 30,
    "y": 15,
    "image": "/images/base.jpg",
    "label": "Interval 30s, 15°",
    "meta": { "interval": 30, "angle": 15, "quality": 0.82 }
  },
  {
    "id": "4-30",
    "x": 30,
    "y": 30,
    "image": "/images/base.jpg",
    "label": "Interval 30s, 30°",
    "meta": { "interval": 30, "angle": 30, "quality": 0.79 }
  },
  {
    "id": "4-45",
    "x": 30,
    "y": 45,
    "image": "/images/base.jpg",
    "label": "Interval 30s, 45°",
    "meta": { "interval": 30, "angle": 45, "quality": 0.76 }
  }
]

```

---

# repository_dump.md

```markdown
# Repository Dump

## Folder Structure

```txt
imagdPlotting
├── generate-repo-md.cjs
├── package.json
├── public
│   ├── data
│   │   └── data.json
│   └── images
│       └── base-old.jpeg
├── repository_dump.md
└── src
    ├── App.jsx
    ├── components
    │   ├── D3Plotter.jsx
    │   ├── DataPointCountControl.jsx
    │   ├── DeckGLPlotter.jsx
    │   ├── EChartsPlotter.jsx
    │   ├── ImageCountSelector.jsx
    │   ├── KonvaPlotter.jsx
    │   ├── Navbar.jsx
    │   ├── PixiPlotter.jsx
    │   ├── PlotterControls.jsx
    │   └── RechartsPlotter.jsx
    ├── lib
    │   ├── chartInteractionLogger.js
    │   ├── constants.js
    │   ├── densityLayout.js
    │   ├── gridLayout.js
    │   ├── imageCache.js
    │   ├── interactionMode.js
    │   ├── plotterData.js
    │   └── syntheticDataGenerator.js
    └── main.jsx
```

## Files

---

# package.json

```json
{
  "name": "poc",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@deck.gl/core": "^9.3.2",
    "@deck.gl/layers": "^9.3.2",
    "@deck.gl/react": "^9.3.2",
    "@luma.gl/engine": "^9.3.3",
    "@luma.gl/webgl": "^9.3.3",
    "@pixi/react": "^8.0.5",
    "d3": "^7.9.0",
    "echarts": "^6.0.0",
    "echarts-for-react": "^3.0.6",
    "konva": "^10.3.0",
    "pixi.js": "^8.18.1",
    "react": "^19.2.6",
    "react-dom": "^19.2.6",
    "react-konva": "^19.2.4",
    "recharts": "^3.8.1",
    "use-image": "^1.1.4"
  },
  "devDependencies": {
    "@eslint/js": "^10.0.1",
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.1",
    "eslint": "^10.3.0",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-react-refresh": "^0.5.2",
    "globals": "^17.6.0",
    "vite": "^8.0.12"
  }
}

```

---

# public\data\data.json

```json
[
  {
    "id": "1-0",
    "x": 0,
    "y": 0,
    "image": "/images/base.jpg",
    "label": "Interval 0s, 0°",
    "meta": { "interval": 0, "angle": 0, "quality": 0.95 }
  },
  {
    "id": "1-15",
    "x": 0,
    "y": 15,
    "image": "/images/base.jpg",
    "label": "Interval 0s, 15°",
    "meta": { "interval": 0, "angle": 15, "quality": 0.93 }
  },
  {
    "id": "1-30",
    "x": 0,
    "y": 30,
    "image": "/images/base.jpg",
    "label": "Interval 0s, 30°",
    "meta": { "interval": 0, "angle": 30, "quality": 0.91 }
  },
  {
    "id": "1-45",
    "x": 0,
    "y": 45,
    "image": "/images/base.jpg",
    "label": "Interval 0s, 45°",
    "meta": { "interval": 0, "angle": 45, "quality": 0.88 }
  },
  {
    "id": "2-0",
    "x": 10,
    "y": 0,
    "image": "/images/base.jpg",
    "label": "Interval 10s, 0°",
    "meta": { "interval": 10, "angle": 0, "quality": 0.92 }
  },
  {
    "id": "2-15",
    "x": 10,
    "y": 15,
    "image": "/images/base.jpg",
    "label": "Interval 10s, 15°",
    "meta": { "interval": 10, "angle": 15, "quality": 0.9 }
  },
  {
    "id": "2-30",
    "x": 10,
    "y": 30,
    "image": "/images/base.jpg",
    "label": "Interval 10s, 30°",
    "meta": { "interval": 10, "angle": 30, "quality": 0.87 }
  },
  {
    "id": "2-45",
    "x": 10,
    "y": 45,
    "image": "/images/base.jpg",
    "label": "Interval 10s, 45°",
    "meta": { "interval": 10, "angle": 45, "quality": 0.84 }
  },
  {
    "id": "3-0",
    "x": 20,
    "y": 0,
    "image": "/images/base.jpg",
    "label": "Interval 20s, 0°",
    "meta": { "interval": 20, "angle": 0, "quality": 0.89 }
  },
  {
    "id": "3-15",
    "x": 20,
    "y": 15,
    "image": "/images/base.jpg",
    "label": "Interval 20s, 15°",
    "meta": { "interval": 20, "angle": 15, "quality": 0.86 }
  },
  {
    "id": "3-30",
    "x": 20,
    "y": 30,
    "image": "/images/base.jpg",
    "label": "Interval 20s, 30°",
    "meta": { "interval": 20, "angle": 30, "quality": 0.83 }
  },
  {
    "id": "3-45",
    "x": 20,
    "y": 45,
    "image": "/images/base.jpg",
    "label": "Interval 20s, 45°",
    "meta": { "interval": 20, "angle": 45, "quality": 0.8 }
  },
  {
    "id": "4-0",
    "x": 30,
    "y": 0,
    "image": "/images/base.jpg",
    "label": "Interval 30s, 0°",
    "meta": { "interval": 30, "angle": 0, "quality": 0.85 }
  },
  {
    "id": "4-15",
    "x": 30,
    "y": 15,
    "image": "/images/base.jpg",
    "label": "Interval 30s, 15°",
    "meta": { "interval": 30, "angle": 15, "quality": 0.82 }
  },
  {
    "id": "4-30",
    "x": 30,
    "y": 30,
    "image": "/images/base.jpg",
    "label": "Interval 30s, 30°",
    "meta": { "interval": 30, "angle": 30, "quality": 0.79 }
  },
  {
    "id": "4-45",
    "x": 30,
    "y": 45,
    "image": "/images/base.jpg",
    "label": "Interval 30s, 45°",
    "meta": { "interval": 30, "angle": 45, "quality": 0.76 }
  }
]

```

---

# repository_dump.md

```markdown
# Repository Dump

## Folder Structure

```txt
imagdPlotting
├── generate-repo-md.cjs
├── package.json
├── public
│   ├── data
│   │   └── data.json
│   └── images
│       └── base-old.jpeg
├── repository_dump.md
└── src
    ├── App.jsx
    ├── components
    │   ├── D3Plotter.jsx
    │   ├── DataPointCountControl.jsx
    │   ├── DeckGLPlotter.jsx
    │   ├── EChartsPlotter.jsx
    │   ├── ImageCountSelector.jsx
    │   ├── KonvaPlotter.jsx
    │   ├── Navbar.jsx
    │   ├── PixiPlotter.jsx
    │   ├── PlotterControls.jsx
    │   └── RechartsPlotter.jsx
    ├── lib
    │   ├── chartInteractionLogger.js
    │   ├── constants.js
    │   ├── densityLayout.js
    │   ├── gridLayout.js
    │   ├── imageCache.js
    │   ├── interactionMode.js
    │   ├── plotterData.js
    │   └── syntheticDataGenerator.js
    └── main.jsx
```

## Files

---

# package.json

```json
{
  "name": "poc",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@deck.gl/core": "^9.3.2",
    "@deck.gl/layers": "^9.3.2",
    "@deck.gl/react": "^9.3.2",
    "@luma.gl/engine": "^9.3.3",
    "@luma.gl/webgl": "^9.3.3",
    "@pixi/react": "^8.0.5",
    "d3": "^7.9.0",
    "echarts": "^6.0.0",
    "echarts-for-react": "^3.0.6",
    "konva": "^10.3.0",
    "pixi.js": "^8.18.1",
    "react": "^19.2.6",
    "react-dom": "^19.2.6",
    "react-konva": "^19.2.4",
    "recharts": "^3.8.1",
    "use-image": "^1.1.4"
  },
  "devDependencies": {
    "@eslint/js": "^10.0.1",
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.1",
    "eslint": "^10.3.0",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-react-refresh": "^0.5.2",
    "globals": "^17.6.0",
    "vite": "^8.0.12"
  }
}

```

---

# public\data\data.json

```json
[
  {
    "id": "1-0",
    "x": 0,
    "y": 0,
    "image": "/images/base.jpg",
    "label": "Interval 0s, 0°",
    "meta": { "interval": 0, "angle": 0, "quality": 0.95 }
  },
  {
    "id": "1-15",
    "x": 0,
    "y": 15,
    "image": "/images/base.jpg",
    "label": "Interval 0s, 15°",
    "meta": { "interval": 0, "angle": 15, "quality": 0.93 }
  },
  {
    "id": "1-30",
    "x": 0,
    "y": 30,
    "image": "/images/base.jpg",
    "label": "Interval 0s, 30°",
    "meta": { "interval": 0, "angle": 30, "quality": 0.91 }
  },
  {
    "id": "1-45",
    "x": 0,
    "y": 45,
    "image": "/images/base.jpg",
    "label": "Interval 0s, 45°",
    "meta": { "interval": 0, "angle": 45, "quality": 0.88 }
  },
  {
    "id": "2-0",
    "x": 10,
    "y": 0,
    "image": "/images/base.jpg",
    "label": "Interval 10s, 0°",
    "meta": { "interval": 10, "angle": 0, "quality": 0.92 }
  },
  {
    "id": "2-15",
    "x": 10,
    "y": 15,
    "image": "/images/base.jpg",
    "label": "Interval 10s, 15°",
    "meta": { "interval": 10, "angle": 15, "quality": 0.9 }
  },
  {
    "id": "2-30",
    "x": 10,
    "y": 30,
    "image": "/images/base.jpg",
    "label": "Interval 10s, 30°",
    "meta": { "interval": 10, "angle": 30, "quality": 0.87 }
  },
  {
    "id": "2-45",
    "x": 10,
    "y": 45,
    "image": "/images/base.jpg",
    "label": "Interval 10s, 45°",
    "meta": { "interval": 10, "angle": 45, "quality": 0.84 }
  },
  {
    "id": "3-0",
    "x": 20,
    "y": 0,
    "image": "/images/base.jpg",
    "label": "Interval 20s, 0°",
    "meta": { "interval": 20, "angle": 0, "quality": 0.89 }
  },
  {
    "id": "3-15",
    "x": 20,
    "y": 15,
    "image": "/images/base.jpg",
    "label": "Interval 20s, 15°",
    "meta": { "interval": 20, "angle": 15, "quality": 0.86 }
  },
  {
    "id": "3-30",
    "x": 20,
    "y": 30,
    "image": "/images/base.jpg",
    "label": "Interval 20s, 30°",
    "meta": { "interval": 20, "angle": 30, "quality": 0.83 }
  },
  {
    "id": "3-45",
    "x": 20,
    "y": 45,
    "image": "/images/base.jpg",
    "label": "Interval 20s, 45°",
    "meta": { "interval": 20, "angle": 45, "quality": 0.8 }
  },
  {
    "id": "4-0",
    "x": 30,
    "y": 0,
    "image": "/images/base.jpg",
    "label": "Interval 30s, 0°",
    "meta": { "interval": 30, "angle": 0, "quality": 0.85 }
  },
  {
    "id": "4-15",
    "x": 30,
    "y": 15,
    "image": "/images/base.jpg",
    "label": "Interval 30s, 15°",
    "meta": { "interval": 30, "angle": 15, "quality": 0.82 }
  },
  {
    "id": "4-30",
    "x": 30,
    "y": 30,
    "image": "/images/base.jpg",
    "label": "Interval 30s, 30°",
    "meta": { "interval": 30, "angle": 30, "quality": 0.79 }
  },
  {
    "id": "4-45",
    "x": 30,
    "y": 45,
    "image": "/images/base.jpg",
    "label": "Interval 30s, 45°",
    "meta": { "interval": 30, "angle": 45, "quality": 0.76 }
  }
]

```

---

# repository_dump.md

```markdown
import { useRef, useEffect, useState } from "react";
import \* as d3 from "d3";
import { usePlotterData } from "../lib/plotterData";
import { logChartInteractionEvent } from "../lib/chartInteractionLogger";
import { useInteractionMode, INTERACTION_MODES } from "../lib/interactionMode";

import { computeImagePositions } from "../lib/gridLayout";
import {
CELL_SIZE,
PLOT_DIMENSIONS,
PLOT_MARGIN,
BRUSH_ZOOM,
ZOOM_SCALE_FACTOR,
WHEEL_ZOOM_SENSITIVITY,
} from "../lib/constants";
import {
computeAdaptiveCellSize,
filterVisiblePoints,
computeEffectiveImageCount,
} from "../lib/densityLayout";
import PlotterControls from "./PlotterControls";

/_ ─── Entry Component ───────────────────────────────────────────── _/

function D3Plotter({ imageCount, xGap, yGap, syntheticPoints }) {
const {
plotterPoints: fetchedPoints,
isLoading,
loadError,
} = usePlotterData();

const plotterPoints = syntheticPoints || fetchedPoints;

if (!syntheticPoints && isLoading)
return <div className="plotter-loading">Loading data…</div>;
if (!syntheticPoints && loadError)
return <div className="plotter-error">Error: {loadError}</div>;

return (
<D3PlotCanvas
      plotterPoints={plotterPoints}
      imageCount={imageCount}
      xGap={xGap}
      yGap={yGap}
    />
);
}

/_ ─── Canvas Wrapper ────────────────────────────────────────────── _/

function D3PlotCanvas({ plotterPoints, imageCount, xGap, yGap }) {
const svgRef = useRef(null);
const tooltipRef = useRef(null);
const containerRef = useRef(null);
const plotControlsRef = useRef(null);
const interactionCleanupRef = useRef(null);

const originalXDomainRef = useRef(null);
const originalYDomainRef = useRef(null);

const [containerWidth, setContainerWidth] = useState(PLOT_DIMENSIONS.width);
const { interactionMode, setInteractionMode, isZoomMode } =
useInteractionMode();

useEffect(() => {
if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) setContainerWidth(entry.contentRect.width);
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();

}, []);

useEffect(() => {
if (!svgRef.current || plotterPoints.length === 0) return;

    const initResult = initializePlot(
      svgRef.current,
      tooltipRef.current,
      plotterPoints,
      imageCount,
      containerWidth,
      xGap,
      yGap,
      originalXDomainRef,
      originalYDomainRef,
    );

    plotControlsRef.current = initResult.controls;
    interactionCleanupRef.current = initResult.setActiveInteractionMode;

    initResult.setActiveInteractionMode(interactionMode);

}, [plotterPoints, imageCount, containerWidth, xGap, yGap, interactionMode]);

useEffect(() => {
if (interactionCleanupRef.current) {
interactionCleanupRef.current(interactionMode);
}
}, [interactionMode]);

const handleZoomIn = () => plotControlsRef.current?.zoomIn();
const handleZoomOut = () => plotControlsRef.current?.zoomOut();
const handleReset = () => plotControlsRef.current?.resetZoom();

const cursorStyle = isZoomMode ? "crosshair" : "grab";

return (
<div ref={containerRef} style={{ position: "relative" }}>
<PlotterControls
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
        interactionMode={interactionMode}
        onModeChange={setInteractionMode}
      />
<svg ref={svgRef} style={{ cursor: cursorStyle }} />
<div
ref={tooltipRef}
className="plotter-tooltip"
style={{ display: "none" }}
/>
</div>
);
}

/_ ─── Plot Initialization ───────────────────────────────────────── _/

function initializePlot(
svgElement,
tooltipElement,
plotterPoints,
imageCount,
containerWidth,
xGap,
yGap,
originalXDomainRef,
originalYDomainRef,
) {
const width = containerWidth;
const height = PLOT_DIMENSIONS.height;
const margin = PLOT_MARGIN;
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;

const svg = d3.select(svgElement);
svg.selectAll("\*").remove();
svg
.attr("width", width)
.attr("height", height)
.style("background", "transparent");

const xScale = buildXScale(plotterPoints, innerWidth, xGap);
const yScale = buildYScale(plotterPoints, innerHeight, yGap);

originalXDomainRef.current = xScale.domain().slice();
originalYDomainRef.current = yScale.domain().slice();

const clipId = "plot-clip-" + Math.random().toString(36).slice(2);
svg
.append("defs")
.append("clipPath")
.attr("id", clipId)
.append("rect")
.attr("width", innerWidth)
.attr("height", innerHeight);

const rootGroup = svg
.append("g")
.attr("transform", `translate(${margin.left},${margin.top})`);

const plotGroup = rootGroup.append("g").attr("clip-path", `url(#${clipId})`);
const contentGroup = plotGroup.append("g");

renderAxes(rootGroup, xScale, yScale, innerWidth, innerHeight);
renderGrid(contentGroup, xScale, yScale, innerWidth, innerHeight);

const initialVisiblePoints = filterVisiblePoints(
plotterPoints,
(val) => xScale(val),
(val) => yScale(val),
innerWidth,
innerHeight,
CELL_SIZE,
);

const baseCellSize = computeAdaptiveCellSize(
initialVisiblePoints,
(val) => xScale(val),
(val) => yScale(val),
);

const originalDomainSpanX = xScale.domain()[1] - xScale.domain()[0];
const originalDomainSpanY = yScale.domain()[1] - yScale.domain()[0];

const initialEffectiveImageCount = computeEffectiveImageCount(
baseCellSize,
imageCount,
);

renderImagePoints(
contentGroup,
initialVisiblePoints,
xScale,
yScale,
initialEffectiveImageCount,
tooltipElement,
baseCellSize,
);

const redrawContext = {
contentGroup,
rootGroup,
xScale,
yScale,
innerWidth,
innerHeight,
plotterPoints,
imageCount,
tooltipElement,
baseCellSize,
originalDomainSpanX,
originalDomainSpanY,
};

const triggerRedraw = () => redrawPlotContent(redrawContext);

const brushGroup = plotGroup.append("g").attr("class", "d3-brush");
const panOverlay = plotGroup
.append("rect")
.attr("class", "d3-pan-overlay")
.attr("width", innerWidth)
.attr("height", innerHeight)
.attr("fill", "transparent")
.style("display", "none");

const brush = buildBrush(
xScale,
yScale,
innerWidth,
innerHeight,
brushGroup,
triggerRedraw,
);
const panDrag = buildPanDrag(
xScale,
yScale,
innerWidth,
innerHeight,
triggerRedraw,
);

attachWheelZoom(
svg,
margin,
xScale,
yScale,
innerWidth,
innerHeight,
triggerRedraw,
);
attachDoubleClickReset(
svg,
xScale,
yScale,
originalXDomainRef,
originalYDomainRef,
triggerRedraw,
);

const setActiveInteractionMode = (mode) => {
if (mode === INTERACTION_MODES.ZOOM) {
panOverlay.style("display", "none");
panOverlay.on(".drag", null);
brushGroup.style("display", null);
brushGroup.call(brush);
} else {
brushGroup.style("display", "none");
brushGroup.on(".brush", null);
panOverlay.style("display", null);
panOverlay.call(panDrag);
}
};

const controls = buildPlotControls(
xScale,
yScale,
originalXDomainRef,
originalYDomainRef,
triggerRedraw,
);

return { controls, setActiveInteractionMode };
}

/_ ─── Scale Builders ────────────────────────────────────────────── _/

function buildXScale(plotterPoints, innerWidth, xGap) {
const xExtent = d3.extent(plotterPoints, (point) => point.x);
const padding = (xExtent[1] - xExtent[0]) \* 0.15 || 5;
const xSpacingScale = xGap / 10;

return d3
.scaleLinear()
.domain([xExtent[0] - padding, xExtent[1] + padding])
.range([0, innerWidth * xSpacingScale]);
}

function buildYScale(plotterPoints, innerHeight, yGap) {
const yExtent = d3.extent(plotterPoints, (point) => point.y);
const padding = (yExtent[1] - yExtent[0]) \* 0.15 || 5;
const ySpacingScale = yGap / 10;

return d3
.scaleLinear()
.domain([yExtent[0] - padding, yExtent[1] + padding])
.range([innerHeight * ySpacingScale, 0]);
}

/_ ─── Brush Zoom ────────────────────────────────────────────────── _/

function buildBrush(
xScale,
yScale,
innerWidth,
innerHeight,
brushGroup,
redrawCallback,
) {
const brush = d3
.brush()
.extent([
[0, 0],
[innerWidth, innerHeight],
])
.on("end", (event) => {
handleBrushEnd(event, brush, brushGroup, xScale, yScale, redrawCallback);
});

return brush;
}

function handleBrushEnd(
event,
brush,
brushGroup,
xScale,
yScale,
redrawCallback,
) {
const selection = event.selection;
if (!selection) return;

const [[pixelX0, pixelY0], [pixelX1, pixelY1]] = selection;
const selectionWidth = pixelX1 - pixelX0;
const selectionHeight = pixelY1 - pixelY0;

if (
selectionWidth < BRUSH_ZOOM.minimumSelectionPixels ||
selectionHeight < BRUSH_ZOOM.minimumSelectionPixels
) {
brushGroup.call(brush.move, null);
return;
}

logChartInteractionEvent({
interactionType: "ZOOM_IN",
visualizationLibrary: "D3",
interactionSource: "brush",
});

const newXDomain = [xScale.invert(pixelX0), xScale.invert(pixelX1)];
const newYDomain = [yScale.invert(pixelY1), yScale.invert(pixelY0)];

xScale.domain(newXDomain);
yScale.domain(newYDomain);

brushGroup.call(brush.move, null);
redrawCallback();
}

/_ ─── Pan Drag ──────────────────────────────────────────────────── _/

function buildPanDrag(xScale, yScale, innerWidth, innerHeight, redrawCallback) {
let startXDomain = null;
let startYDomain = null;

return d3
.drag()
.on("start", () => {
logChartInteractionEvent({
interactionType: "PAN",
visualizationLibrary: "D3",
interactionSource: "drag",
});
startXDomain = xScale.domain().slice();
startYDomain = yScale.domain().slice();
})
.on("drag", (event) => {
if (!startXDomain || !startYDomain) return;

      const xSpanPerPixel = (startXDomain[1] - startXDomain[0]) / innerWidth;
      const ySpanPerPixel = (startYDomain[1] - startYDomain[0]) / innerHeight;

      const domainDeltaX = -event.dx * xSpanPerPixel;
      const domainDeltaY = event.dy * ySpanPerPixel;

      const currentXDomain = xScale.domain();
      const currentYDomain = yScale.domain();

      xScale.domain([
        currentXDomain[0] + domainDeltaX,
        currentXDomain[1] + domainDeltaX,
      ]);
      yScale.domain([
        currentYDomain[0] + domainDeltaY,
        currentYDomain[1] + domainDeltaY,
      ]);

      redrawCallback();
    })
    .on("end", () => {
      startXDomain = null;
      startYDomain = null;
    });

}

/_ ─── Wheel Zoom ────────────────────────────────────────────────── _/

function attachWheelZoom(
svg,
margin,
xScale,
yScale,
innerWidth,
innerHeight,
redrawCallback,
) {
svg.on(
"wheel.zoom",
(event) => {
event.preventDefault();
handleWheelZoom(
event,
margin,
xScale,
yScale,
innerWidth,
innerHeight,
redrawCallback,
);
},
{ passive: false },
);
}

function handleWheelZoom(
event,
margin,
xScale,
yScale,
innerWidth,
innerHeight,
redrawCallback,
) {
const zoomFactor = Math.exp(-event.deltaY \* WHEEL_ZOOM_SENSITIVITY);

const svgRect = event.currentTarget.getBoundingClientRect();
const cursorX = event.clientX - svgRect.left - margin.left;
const cursorY = event.clientY - svgRect.top - margin.top;

const isCursorInsidePlot =
cursorX >= 0 &&
cursorX <= innerWidth &&
cursorY >= 0 &&
cursorY <= innerHeight;

if (!isCursorInsidePlot) return;

const isZoomIn = event.deltaY < 0;
logChartInteractionEvent({
interactionType: isZoomIn ? "ZOOM_IN" : "ZOOM_OUT",
visualizationLibrary: "D3",
interactionSource: "wheel",
});

const anchorDataX = xScale.invert(cursorX);
const anchorDataY = yScale.invert(cursorY);

zoomDomainAroundAnchor(xScale, anchorDataX, zoomFactor);
zoomDomainAroundAnchor(yScale, anchorDataY, zoomFactor);

redrawCallback();
}

/_ ─── Double-Click Reset ───────────────────────────────────────── _/

function attachDoubleClickReset(
svg,
xScale,
yScale,
originalXDomainRef,
originalYDomainRef,
redrawCallback,
) {
svg.on("dblclick.zoom", () => {
logChartInteractionEvent({
interactionType: "RESET",
visualizationLibrary: "D3",
interactionSource: "double_click",
});
resetDomains(xScale, yScale, originalXDomainRef, originalYDomainRef);
redrawCallback();
});
}

/_ ─── Domain Manipulation Helpers ───────────────────────────────── _/

function zoomDomainAroundAnchor(scale, anchorValue, zoomFactor) {
const [domainMin, domainMax] = scale.domain();
const newMin = anchorValue - (anchorValue - domainMin) / zoomFactor;
const newMax = anchorValue + (domainMax - anchorValue) / zoomFactor;
scale.domain([newMin, newMax]);
}

function zoomDomainAroundCenter(scale, zoomFactor) {
const [domainMin, domainMax] = scale.domain();
const center = (domainMin + domainMax) / 2;
zoomDomainAroundAnchor(scale, center, zoomFactor);
}

function resetDomains(xScale, yScale, originalXDomainRef, originalYDomainRef) {
xScale.domain(originalXDomainRef.current.slice());
yScale.domain(originalYDomainRef.current.slice());
}

/_ ─── Plot Controls (Button Handlers) ──────────────────────────── _/

function buildPlotControls(
xScale,
yScale,
originalXDomainRef,
originalYDomainRef,
redrawCallback,
) {
return {
zoomIn: () => {
logChartInteractionEvent({
interactionType: "ZOOM_IN",
visualizationLibrary: "D3",
interactionSource: "button",
});
zoomDomainAroundCenter(xScale, ZOOM_SCALE_FACTOR);
zoomDomainAroundCenter(yScale, ZOOM_SCALE_FACTOR);
redrawCallback();
},
zoomOut: () => {
logChartInteractionEvent({
interactionType: "ZOOM_OUT",
visualizationLibrary: "D3",
interactionSource: "button",
});
zoomDomainAroundCenter(xScale, 1 / ZOOM_SCALE_FACTOR);
zoomDomainAroundCenter(yScale, 1 / ZOOM_SCALE_FACTOR);
redrawCallback();
},
resetZoom: () => {
logChartInteractionEvent({
interactionType: "RESET",
visualizationLibrary: "D3",
interactionSource: "button",
});
resetDomains(xScale, yScale, originalXDomainRef, originalYDomainRef);
redrawCallback();
},
};
}

/_ ─── Content Redraw Pipeline ───────────────────────────────────── _/

function redrawPlotContent(context) {
const {
contentGroup,
rootGroup,
xScale,
yScale,
innerWidth,
innerHeight,
plotterPoints,
imageCount,
tooltipElement,
baseCellSize,
originalDomainSpanX,
originalDomainSpanY,
} = context;

/_ Compute zoom factor from domain ratio so images grow when zoomed in,
matching the transform-based magnification of Recharts/Konva/PixiJS. _/
const currentSpanX = xScale.domain()[1] - xScale.domain()[0];
const currentSpanY = yScale.domain()[1] - yScale.domain()[0];
const zoomFactorX = originalDomainSpanX / currentSpanX;
const zoomFactorY = originalDomainSpanY / currentSpanY;
const zoomFactor = Math.min(zoomFactorX, zoomFactorY);

const zoomedCellSize = baseCellSize \* zoomFactor;

const visiblePoints = filterVisiblePoints(
plotterPoints,
(val) => xScale(val),
(val) => yScale(val),
innerWidth,
innerHeight,
zoomedCellSize,
);

const effectiveImageCount = computeEffectiveImageCount(
zoomedCellSize,
imageCount,
);

contentGroup.selectAll(".grid-lines, .image-point").remove();

renderGrid(contentGroup, xScale, yScale, innerWidth, innerHeight);
renderImagePoints(
contentGroup,
visiblePoints,
xScale,
yScale,
effectiveImageCount,
tooltipElement,
zoomedCellSize,
);

updateAxes(rootGroup, xScale, yScale);
}

/_ ─── Axes ──────────────────────────────────────────────────────── _/

function renderAxes(container, xScale, yScale, innerWidth, innerHeight) {
container
.append("g")
.attr("class", "x-axis")
.attr("transform", `translate(0,${innerHeight})`)
.call(d3.axisBottom(xScale).ticks(8))
.selectAll("text")
.attr("fill", "#888");

container
.append("g")
.attr("class", "y-axis")
.call(d3.axisLeft(yScale).ticks(6))
.selectAll("text")
.attr("fill", "#888");

styleAxisElements(container);
}

function updateAxes(container, xScale, yScale) {
container.select(".x-axis").call(d3.axisBottom(xScale).ticks(8));
container.select(".y-axis").call(d3.axisLeft(yScale).ticks(6));

container.selectAll(".x-axis text, .y-axis text").attr("fill", "#888");
styleAxisElements(container);
}

function styleAxisElements(container) {
container.selectAll(".x-axis line, .y-axis line").attr("stroke", "#555");
container.selectAll(".x-axis path, .y-axis path").attr("stroke", "#555");
}

/_ ─── Grid ──────────────────────────────────────────────────────── _/

function renderGrid(container, xScale, yScale, innerWidth, innerHeight) {
const gridGroup = container.append("g").attr("class", "grid-lines");

gridGroup
.selectAll("line.horizontal")
.data(yScale.ticks(6))
.enter()
.append("line")
.attr("class", "horizontal")
.attr("x1", 0)
.attr("x2", innerWidth)
.attr("y1", (tick) => yScale(tick))
.attr("y2", (tick) => yScale(tick))
.attr("stroke", "#2a2a3e")
.attr("stroke-dasharray", "3 3");

gridGroup
.selectAll("line.vertical")
.data(xScale.ticks(8))
.enter()
.append("line")
.attr("class", "vertical")
.attr("x1", (tick) => xScale(tick))
.attr("x2", (tick) => xScale(tick))
.attr("y1", 0)
.attr("y2", innerHeight)
.attr("stroke", "#2a2a3e")
.attr("stroke-dasharray", "3 3");
}

/_ ─── Image Points ──────────────────────────────────────────────── _/

function renderImagePoints(
container,
plotterPoints,
xScale,
yScale,
imageCount,
tooltipElement,
cellSize = CELL_SIZE,
) {
const tooltip = d3.select(tooltipElement);

plotterPoints.forEach((point) => {
const centerX = xScale(point.x);
const centerY = yScale(point.y);
const positions = computeImagePositions(
centerX,
centerY,
cellSize,
cellSize,
imageCount,
);

    const pointGroup = container.append("g").attr("class", "image-point");

    positions.forEach((position) => {
      pointGroup
        .append("image")
        .attr("href", point.image)
        .attr("x", position.x)
        .attr("y", position.y)
        .attr("width", position.width)
        .attr("height", position.height)
        .attr("preserveAspectRatio", "xMidYMid meet")
        .style("cursor", "pointer");
    });

    pointGroup
      .on("mouseenter", (event) => showTooltip(tooltip, event, point))
      .on("mousemove", (event) => moveTooltip(tooltip, event))
      .on("mouseleave", () => hideTooltip(tooltip));

});
}

/_ ─── Tooltip ───────────────────────────────────────────────────── _/

function showTooltip(tooltip, event, point) {
tooltip
.style("display", "block")
.html(
`<div class="tooltip-label">${point.label}</div>` +
`<div class="tooltip-meta">` +
`<span>Interval: ${point.meta.interval}s</span>` +
`<span>Angle: ${point.meta.angle}°</span>` +
`<span>Quality: ${point.meta.quality}</span>` +
`</div>`,
);

moveTooltip(tooltip, event);
}

function moveTooltip(tooltip, event) {
const containerRect = event.currentTarget
.closest(".viewer-container")
?.getBoundingClientRect();
if (!containerRect) return;

tooltip
.style("left", `${event.clientX - containerRect.left + 12}px`)
.style("top", `${event.clientY - containerRect.top - 10}px`);
}

function hideTooltip(tooltip) {
tooltip.style("display", "none");
}

export default D3Plotter;
/_ eslint-disable react-hooks/purity _/
import { useState, useMemo, useRef, useEffect, useCallback } from "react";
import \* as d3 from "d3";
import { usePlotterData } from "../lib/plotterData";
import { computeImagePositions } from "../lib/gridLayout";
import { CELL_SIZE, PLOT_DIMENSIONS, PLOT_MARGIN } from "../lib/constants";
import {
computeAdaptiveCellSize,
filterVisiblePoints,
computeEffectiveImageCount,
} from "../lib/densityLayout";
import PlotterControls from "./PlotterControls";
import { logChartInteractionEvent } from "../lib/chartInteractionLogger";
import { useInteractionMode } from "../lib/interactionMode";

const ZOOM_STEP = 1.5;
const ZOOM_MIN = 0.35;
const ZOOM_MAX = 250;
const BRUSH_MIN_PIXELS = 5;
const BRUSH_FILL = "rgba(68, 147, 255, 0.15)";
const BRUSH_STROKE = "#4493ff";
const BRUSH_STROKE_WIDTH = 1.5;

const BASE_IMAGE_GAP_X = 10;
const BASE_IMAGE_GAP_Y = 10;

function RechartsPlotter({ imageCount, xGap, yGap, syntheticPoints }) {
const {
plotterPoints: fetchedPoints,
isLoading,
loadError,
} = usePlotterData();

const plotterPoints = syntheticPoints || fetchedPoints;

if (!syntheticPoints && isLoading)
return <div className="plotter-loading">Loading data…</div>;
if (!syntheticPoints && loadError)
return <div className="plotter-error">Error: {loadError}</div>;

return (
<RechartsCanvas
      plotterPoints={plotterPoints}
      imageCount={imageCount}
      xGap={xGap}
      yGap={yGap}
    />
);
}

function RechartsCanvas({ plotterPoints, imageCount, xGap, yGap }) {
const containerRef = useRef(null);
const svgRef = useRef(null);
const dragRef = useRef({
dragging: false,
pointerId: null,
startClientX: 0,
startClientY: 0,
startTransform: { scale: 1, x: 0, y: 0 },
});

const [containerWidth, setContainerWidth] = useState(PLOT_DIMENSIONS.width);
const [transform, setTransform] = useState({ scale: 1, x: 0, y: 0 });
const [hoveredPoint, setHoveredPoint] = useState(null);
const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
const [brushRect, setBrushRect] = useState(null);
const [isDragging, setIsDragging] = useState(false);
const brushStartRef = useRef(null);

const { interactionMode, setInteractionMode, isPanMode } =
useInteractionMode();

useEffect(() => {
if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) setContainerWidth(entry.contentRect.width);
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();

}, []);

/_ Cancel in-progress brush when switching to pan mode _/
useEffect(() => {
if (isPanMode) {
brushStartRef.current = null;
// eslint-disable-next-line react-hooks/set-state-in-effect
setBrushRect(null);
}
}, [isPanMode]);

const height = PLOT_DIMENSIONS.height;
const innerWidth = Math.max(
containerWidth - PLOT_MARGIN.left - PLOT_MARGIN.right,
320,
);
const innerHeight = Math.max(
height - PLOT_MARGIN.top - PLOT_MARGIN.bottom,
240,
);

const normalizedPoints = useMemo(() => {
const xScale = xGap / BASE_IMAGE_GAP_X;
const yScale = yGap / BASE_IMAGE_GAP_Y;

    return plotterPoints.map((point) => ({
      ...point,
      scaledX: point.x * xScale,
      scaledY: point.y * yScale,
    }));

}, [plotterPoints, xGap, yGap]);

const xExtent = useMemo(
() => extentWithPadding(normalizedPoints.map((p) => p.scaledX)),
[normalizedPoints],
);
const yExtent = useMemo(
() => extentWithPadding(normalizedPoints.map((p) => p.scaledY)),
[normalizedPoints],
);

const baseXScale = useMemo(
() => d3.scaleLinear().domain(xExtent).range([0, innerWidth]),
[xExtent, innerWidth],
);

const baseYScale = useMemo(
() => d3.scaleLinear().domain(yExtent).range([innerHeight, 0]),
[yExtent, innerHeight],
);

const visibleDomain = useMemo(
() =>
computeVisibleDomain(
xExtent,
yExtent,
transform,
innerWidth,
innerHeight,
),
[xExtent, yExtent, transform, innerWidth, innerHeight],
);

const xTicks = useMemo(
() => d3.ticks(visibleDomain.xMin, visibleDomain.xMax, 8),
[visibleDomain],
);
const yTicks = useMemo(
() => d3.ticks(visibleDomain.yMin, visibleDomain.yMax, 6),
[visibleDomain],
);

const xTickScale = useMemo(
() =>
d3
.scaleLinear()
.domain([visibleDomain.xMin, visibleDomain.xMax])
.range([0, innerWidth]),
[visibleDomain, innerWidth],
);

const yTickScale = useMemo(
() =>
d3
.scaleLinear()
.domain([visibleDomain.yMin, visibleDomain.yMax])
.range([innerHeight, 0]),
[visibleDomain, innerHeight],
);

const clipId = "recharts-clip-static";

const adaptiveCellSizeForRender = useMemo(() => {
/_ Compute from base scales (content-space) so the cell size is set at
the default zoom level. The SVG transform then naturally magnifies
images when zoomed in, revealing more detail. _/
return computeAdaptiveCellSize(
normalizedPoints,
(val) => baseXScale(val),
(val) => baseYScale(val),
);
}, [normalizedPoints, baseXScale, baseYScale]);

const visiblePointsForRender = useMemo(() => {
/_ Viewport culling still needs screen-space coordinates. _/
const xScreenFn = (val) => baseXScale(val) _ transform.scale + transform.x;
const yScreenFn = (val) => baseYScale(val) _ transform.scale + transform.y;
return filterVisiblePoints(
normalizedPoints,
xScreenFn,
yScreenFn,
innerWidth,
innerHeight,
adaptiveCellSizeForRender \* transform.scale,
);
}, [
normalizedPoints,
baseXScale,
baseYScale,
transform,
innerWidth,
innerHeight,
adaptiveCellSizeForRender,
]);

const effectiveImageCountForRender = useMemo(
() =>
computeEffectiveImageCount(
adaptiveCellSizeForRender \* transform.scale,
imageCount,
),
[adaptiveCellSizeForRender, transform.scale, imageCount],
);

const zoomTo = useCallback(
(nextScale, anchorX, anchorY) => {
setTransform((prev) => {
const clampedScale = clamp(nextScale, ZOOM_MIN, ZOOM_MAX);
const pivotX = Number.isFinite(anchorX) ? anchorX : innerWidth / 2;
const pivotY = Number.isFinite(anchorY) ? anchorY : innerHeight / 2;

        const nextX =
          prev.x - (pivotX - prev.x) * (clampedScale / prev.scale - 1);
        const nextY =
          prev.y - (pivotY - prev.y) * (clampedScale / prev.scale - 1);

        return clampTransform(
          { scale: clampedScale, x: nextX, y: nextY },
          innerWidth,
          innerHeight,
        );
      });
    },
    [innerWidth, innerHeight],

);

const handleZoomIn = useCallback(() => {
logChartInteractionEvent({
interactionType: "ZOOM_IN",
visualizationLibrary: "Recharts",
interactionSource: "button",
});
zoomTo(transform.scale \* ZOOM_STEP, innerWidth / 2, innerHeight / 2);
}, [transform.scale, zoomTo, innerWidth, innerHeight]);

const handleZoomOut = useCallback(() => {
logChartInteractionEvent({
interactionType: "ZOOM_OUT",
visualizationLibrary: "Recharts",
interactionSource: "button",
});
zoomTo(transform.scale / ZOOM_STEP, innerWidth / 2, innerHeight / 2);
}, [transform.scale, zoomTo, innerWidth, innerHeight]);

const handleReset = useCallback(() => {
logChartInteractionEvent({
interactionType: "RESET",
visualizationLibrary: "Recharts",
interactionSource: "button",
});
setTransform({ scale: 1, x: 0, y: 0 });
setHoveredPoint(null);
}, []);

const handleWheel = useCallback(
(event) => {
event.preventDefault();

      const rect = svgRef.current?.getBoundingClientRect();
      if (!rect) return;

      const clientX = event.clientX - rect.left;
      const clientY = event.clientY - rect.top;

      const localX = clientX - PLOT_MARGIN.left;
      const localY = clientY - PLOT_MARGIN.top;

      if (
        localX < 0 ||
        localY < 0 ||
        localX > innerWidth ||
        localY > innerHeight
      ) {
        return;
      }

      const isZoomIn = event.deltaY < 0;
      logChartInteractionEvent({
        interactionType: isZoomIn ? "ZOOM_IN" : "ZOOM_OUT",
        visualizationLibrary: "Recharts",
        interactionSource: "wheel",
      });

      const factor = event.deltaY > 0 ? 1 / 1.15 : 1.15;

      setTransform((prev) => {
        const clampedScale = clamp(prev.scale * factor, ZOOM_MIN, ZOOM_MAX);

        const nextX =
          prev.x - (localX - prev.x) * (clampedScale / prev.scale - 1);
        const nextY =
          prev.y - (localY - prev.y) * (clampedScale / prev.scale - 1);
        return clampTransform(
          { scale: clampedScale, x: nextX, y: nextY },
          innerWidth,
          innerHeight,
        );
      });
    },
    [innerWidth, innerHeight],

);

const handlePointerDown = useCallback(
(event) => {
const rect = svgRef.current?.getBoundingClientRect();
if (!rect) return;

      const localX = event.clientX - rect.left - PLOT_MARGIN.left;
      const localY = event.clientY - rect.top - PLOT_MARGIN.top;

      if (
        localX < 0 ||
        localY < 0 ||
        localX > innerWidth ||
        localY > innerHeight
      ) {
        return;
      }

      if (isPanMode) {
        logChartInteractionEvent({
          interactionType: "PAN",
          visualizationLibrary: "Recharts",
          interactionSource: "drag",
        });
        setIsDragging(true);
        dragRef.current = {
          dragging: true,
          pointerId: event.pointerId,
          startClientX: event.clientX,
          startClientY: event.clientY,
          startTransform: transform,
        };
        event.currentTarget.setPointerCapture?.(event.pointerId);
        return;
      }

      const clampedX = clamp(localX, 0, innerWidth);
      const clampedY = clamp(localY, 0, innerHeight);
      brushStartRef.current = { x: clampedX, y: clampedY };
      setBrushRect({ x: clampedX, y: clampedY, width: 0, height: 0 });
      event.currentTarget.setPointerCapture?.(event.pointerId);
    },
    [innerWidth, innerHeight, transform, isPanMode],

);

const handlePointerMove = useCallback(
(event) => {
if (brushStartRef.current) {
const rect = svgRef.current?.getBoundingClientRect();
if (!rect) return;

        const localX = clamp(
          event.clientX - rect.left - PLOT_MARGIN.left,
          0,
          innerWidth,
        );
        const localY = clamp(
          event.clientY - rect.top - PLOT_MARGIN.top,
          0,
          innerHeight,
        );
        const startPoint = brushStartRef.current;

        setBrushRect({
          x: Math.min(startPoint.x, localX),
          y: Math.min(startPoint.y, localY),
          width: Math.abs(localX - startPoint.x),
          height: Math.abs(localY - startPoint.y),
        });
        return;
      }

      if (dragRef.current.dragging) {
        const dx = event.clientX - dragRef.current.startClientX;
        const dy = event.clientY - dragRef.current.startClientY;

        const next = clampTransform(
          {
            scale: dragRef.current.startTransform.scale,
            x: dragRef.current.startTransform.x + dx,
            y: dragRef.current.startTransform.y + dy,
          },
          innerWidth,
          innerHeight,
        );

        setTransform(next);
        return;
      }

      const target = event.target?.closest?.("[data-point-id]");
      if (!target) {
        setHoveredPoint(null);
        return;
      }

      const id = target.getAttribute("data-point-id");
      const point = plotterPoints.find((p) => p.id === id);
      if (!point) return;

      setHoveredPoint(point);
      setTooltipPos({ x: event.clientX, y: event.clientY });
    },
    [innerWidth, innerHeight, plotterPoints],

);

const handlePointerUp = useCallback(
(event) => {
if (brushStartRef.current && brushRect) {
const isTooSmall =
brushRect.width < BRUSH_MIN_PIXELS ||
brushRect.height < BRUSH_MIN_PIXELS;

        if (!isTooSmall) {
          logChartInteractionEvent({
            interactionType: "ZOOM_IN",
            visualizationLibrary: "Recharts",
            interactionSource: "brush",
          });
          const newTransform = convertBrushToTransform(
            brushRect,
            transform,
            innerWidth,
            innerHeight,
          );
          setTransform(newTransform);
        }

        brushStartRef.current = null;
        setBrushRect(null);
        event.currentTarget.releasePointerCapture?.(event.pointerId);
        return;
      }

      setIsDragging(false);
      dragRef.current.dragging = false;
      dragRef.current.pointerId = null;
      event.currentTarget.releasePointerCapture?.(event.pointerId);
    },
    [brushRect, transform, innerWidth, innerHeight],

);

useEffect(() => {
const svgElement = svgRef.current;

    if (!svgElement) return;

    const wheelHandler = (event) => {
      event.preventDefault();
      handleWheel(event);
    };

    svgElement.addEventListener("wheel", wheelHandler, {
      passive: false,
    });

    return () => {
      svgElement.removeEventListener("wheel", wheelHandler);
    };

}, [handleWheel]);

const handleDoubleClick = useCallback(() => {
logChartInteractionEvent({
interactionType: "RESET",
visualizationLibrary: "Recharts",
interactionSource: "double_click",
});
setTransform({ scale: 1, x: 0, y: 0 });
setHoveredPoint(null);
}, []);

const stageCursor = isPanMode
? isDragging
? "grabbing"
: "grab"
: "crosshair";

const contentTransform = `translate(${transform.x}, ${transform.y}) scale(${transform.scale})`;

return (
<div ref={containerRef} style={{ position: "relative", width: "100%" }}>
<PlotterControls
        zoomLevel={transform.scale}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
        interactionMode={interactionMode}
        onModeChange={setInteractionMode}
      />

      <svg
        ref={svgRef}
        width={containerWidth}
        height={height}
        style={{
          display: "block",
          touchAction: "none",
          userSelect: "none",
          cursor: stageCursor,
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onDoubleClick={handleDoubleClick}
      >
        <defs>
          <clipPath id={clipId}>
            <rect
              x={PLOT_MARGIN.left}
              y={PLOT_MARGIN.top}
              width={innerWidth}
              height={innerHeight}
            />
          </clipPath>
        </defs>

        <rect
          x={0}
          y={0}
          width={containerWidth}
          height={height}
          fill="#16213e"
        />

        <g transform={`translate(${PLOT_MARGIN.left},${PLOT_MARGIN.top})`}>
          <rect
            x={0}
            y={0}
            width={innerWidth}
            height={innerHeight}
            fill="#16213e"
          />

          <AxisGrid
            xTicks={xTicks}
            yTicks={yTicks}
            xTickScale={xTickScale}
            yTickScale={yTickScale}
            innerWidth={innerWidth}
            innerHeight={innerHeight}
          />

          <AxisLabels
            xTicks={xTicks}
            yTicks={yTicks}
            xTickScale={xTickScale}
            yTickScale={yTickScale}
            innerWidth={innerWidth}
            innerHeight={innerHeight}
          />

          <g clipPath={`url(#${clipId})`}>
            <g transform={contentTransform}>
              {visiblePointsForRender.map((point) => (
                <ImagePoint
                  key={point.id}
                  point={point}
                  baseXScale={baseXScale}
                  baseYScale={baseYScale}
                  imageCount={effectiveImageCountForRender}
                  adaptiveCellSize={adaptiveCellSizeForRender}
                />
              ))}
            </g>
          </g>

          <rect
            x={0}
            y={0}
            width={innerWidth}
            height={innerHeight}
            fill="transparent"
            stroke="#555"
            pointerEvents="none"
          />

          {brushRect && brushRect.width > 0 && brushRect.height > 0 && (
            <rect
              x={brushRect.x}
              y={brushRect.y}
              width={brushRect.width}
              height={brushRect.height}
              fill={BRUSH_FILL}
              stroke={BRUSH_STROKE}
              strokeWidth={BRUSH_STROKE_WIDTH}
              rx={2}
              ry={2}
              pointerEvents="none"
            />
          )}
        </g>
      </svg>

      {hoveredPoint && (
        <div
          className="plotter-tooltip"
          style={{
            display: "block",
            position: "fixed",
            left: tooltipPos.x + 12,
            top: tooltipPos.y - 10,
            pointerEvents: "none",
            zIndex: 20,
          }}
        >
          <div className="tooltip-label">{hoveredPoint.label}</div>
          <div className="tooltip-meta">
            <span>Interval: {hoveredPoint.meta.interval}s</span>
            <span>Angle: {hoveredPoint.meta.angle}°</span>
            <span>Quality: {hoveredPoint.meta.quality}</span>
          </div>
        </div>
      )}
    </div>

);
}

function ImagePoint({
point,
baseXScale,
baseYScale,
imageCount,
adaptiveCellSize,
}) {
const centerX = baseXScale(point.scaledX);
const centerY = baseYScale(point.scaledY);
const cellSize = adaptiveCellSize ?? CELL_SIZE;

const positions = computeImagePositions(
centerX,
centerY,
cellSize,
cellSize,
imageCount,
);

return (
<>
{positions.map((position, index) => (
<image
key={`${point.id}-${imageCount}-${index}`}
data-point-id={point.id}
href={point.image}
x={position.x}
y={position.y}
width={position.width}
height={position.height}
preserveAspectRatio="xMidYMid meet"
style={{ cursor: "pointer" }}
/>
))}
</>
);
}

function AxisGrid({
xTicks,
yTicks,
xTickScale,
yTickScale,
innerWidth,
innerHeight,
}) {
return (
<>
{xTicks.map((tick, index) => {
const x = xTickScale(tick);
return (
<line
key={`xgrid-${index}`}
x1={x}
y1={0}
x2={x}
y2={innerHeight}
stroke="#2a2a3e"
strokeDasharray="3 3"
/>
);
})}

      {yTicks.map((tick, index) => {
        const y = yTickScale(tick);
        return (
          <line
            key={`ygrid-${index}`}
            x1={0}
            y1={y}
            x2={innerWidth}
            y2={y}
            stroke="#2a2a3e"
            strokeDasharray="3 3"
          />
        );
      })}
    </>

);
}

function AxisLabels({ xTicks, yTicks, xTickScale, yTickScale, innerHeight }) {
return (
<>
{xTicks.map((tick, index) => {
const x = xTickScale(tick);
return (
<text
key={`xlabel-${index}`}
x={x}
y={innerHeight + 18}
fill="#888"
fontSize="11"
textAnchor="middle" >
{formatTick(tick)}
</text>
);
})}

      {yTicks.map((tick, index) => {
        const y = yTickScale(tick);
        return (
          <text
            key={`ylabel-${index}`}
            x={-8}
            y={y + 4}
            fill="#888"
            fontSize="11"
            textAnchor="end"
          >
            {formatTick(tick)}
          </text>
        );
      })}
    </>

);
}

function extentWithPadding(values) {
if (!values.length) return [0, 1];

const min = Math.min(...values);
const max = Math.max(...values);
const span = max - min;
const pad = span === 0 ? 5 : Math.max(span \* 0.18, 1);

return [min - pad, max + pad];
}

function computeVisibleDomain(
xExtent,
yExtent,
transform,
innerWidth,
innerHeight,
) {
const domainWidth = xExtent[1] - xExtent[0];
const domainHeight = yExtent[1] - yExtent[0];

const xMin =
xExtent[0] - (transform.x / transform.scale / innerWidth) \* domainWidth;
const xMax = xMin + domainWidth / transform.scale;

const yMax =
yExtent[1] + (transform.y / transform.scale / innerHeight) \* domainHeight;
const yMin = yMax - domainHeight / transform.scale;

return { xMin, xMax, yMin, yMax };
}

function clampTransform(transform, innerWidth, innerHeight) {
const scale = transform.scale;
const scaledWidth = innerWidth _ scale;
const scaledHeight = innerHeight _ scale;

let x = transform.x;
let y = transform.y;

if (scaledWidth <= innerWidth) {
x = (innerWidth - scaledWidth) / 2;
} else {
x = Math.min(0, Math.max(innerWidth - scaledWidth, x));
}

if (scaledHeight <= innerHeight) {
y = (innerHeight - scaledHeight) / 2;
} else {
y = Math.min(0, Math.max(innerHeight - scaledHeight, y));
}

return { scale, x, y };
}

function clamp(value, min, max) {
return Math.max(min, Math.min(max, value));
}

function convertBrushToTransform(
brushPixelRect,
currentTransform,
plotInnerWidth,
plotInnerHeight,
) {
const contentX0 =
(brushPixelRect.x - currentTransform.x) / currentTransform.scale;
const contentY0 =
(brushPixelRect.y - currentTransform.y) / currentTransform.scale;
const contentBrushWidth = brushPixelRect.width / currentTransform.scale;
const contentBrushHeight = brushPixelRect.height / currentTransform.scale;

const fitScaleX = plotInnerWidth / contentBrushWidth;
const fitScaleY = plotInnerHeight / contentBrushHeight;
const newScale = clamp(Math.min(fitScaleX, fitScaleY), ZOOM_MIN, ZOOM_MAX);

const rawX = -contentX0 _ newScale;
const rawY = -contentY0 _ newScale;

return clampTransform(
{ scale: newScale, x: rawX, y: rawY },
plotInnerWidth,
plotInnerHeight,
);
}

function formatTick(value) {
if (Number.isInteger(value)) return String(value);
return parseFloat(Number(value).toPrecision(4)).toString();
}

export default RechartsPlotter;
import { useRef, useEffect, useState, useCallback } from "react";

import {
Application as PixiApp,
Container,
Sprite,
Graphics,
Assets,
Text as PixiText,
} from "pixi.js";

import \* as d3 from "d3";

import { usePlotterData } from "../lib/plotterData";
import { computeImagePositions } from "../lib/gridLayout";
import { CELL_SIZE, PLOT_DIMENSIONS, PLOT_MARGIN } from "../lib/constants";
import {
computeAdaptiveCellSize,
filterVisiblePoints,
computeEffectiveImageCount,
} from "../lib/densityLayout";

import PlotterControls from "./PlotterControls";
import { logChartInteractionEvent } from "../lib/chartInteractionLogger";
import { useInteractionMode } from "../lib/interactionMode";

const GRID_COLOR = 0x333333;
const GRID_ALPHA = 0.45;
const AXIS_BORDER_COLOR = 0x555555;
const TICK_COLOR = "#999999";

const ZOOM_MIN = 0.3;
const ZOOM_MAX = 100000;
const ZOOM_STEP = 1.5;

/\*

- CLAMP PAN
  _/
  function clampPan(xOffset, yOffset, scaleFactor, width, height) {
  const scaledWidth = width _ scaleFactor;
  const scaledHeight = height \* scaleFactor;

let minOffsetLimitX = width - scaledWidth;
let minOffsetLimitY = height - scaledHeight;

if (scaledWidth < width) {
minOffsetLimitX = (width - scaledWidth) / 2;
}

if (scaledHeight < height) {
minOffsetLimitY = (height - scaledHeight) / 2;
}

return {
x: Math.min(0, Math.max(minOffsetLimitX, xOffset)),
y: Math.min(0, Math.max(minOffsetLimitY, yOffset)),
};
}

/\*

- COMPUTE VIEWPORT SCALES
  \*/
  function computeViewportScales(baseScaleX, baseScaleY, scaleFactor, xOffset, yOffset, width, height) {
  const leftPixel = -xOffset / scaleFactor;
  const rightPixel = (width - xOffset) / scaleFactor;

const topPixel = -yOffset / scaleFactor;
const bottomPixel = (height - yOffset) / scaleFactor;

const visibleXMin = baseScaleX.invert(leftPixel);
const visibleXMax = baseScaleX.invert(rightPixel);

const visibleYMax = baseScaleY.invert(topPixel);
const visibleYMin = baseScaleY.invert(bottomPixel);

const dynamicXScale = d3
.scaleLinear()
.domain([visibleXMin, visibleXMax])
.range([0, width]);

const dynamicYScale = d3
.scaleLinear()
.domain([visibleYMin, visibleYMax])
.range([height, 0]);

return {
dynamicXScale,
dynamicYScale,
};
}

/\*

- INITIALIZE PIXI APP
  \*/
  async function initializePixiApp(containerElement, innerWidth, innerHeight) {
  const app = new PixiApp();

await app.init({
width: PLOT_DIMENSIONS.width,
height: PLOT_DIMENSIONS.height,
background: 0x16213e,
antialias: true,
});

containerElement.appendChild(app.canvas);

const axesLayer = new Container();
axesLayer.x = PLOT_MARGIN.left;
axesLayer.y = PLOT_MARGIN.top;
app.stage.addChild(axesLayer);

const contentLayer = new Container();
contentLayer.x = PLOT_MARGIN.left;
contentLayer.y = PLOT_MARGIN.top;
app.stage.addChild(contentLayer);

const mask = new Graphics();
mask.rect(PLOT_MARGIN.left, PLOT_MARGIN.top, innerWidth, innerHeight);
mask.fill(0xffffff);
app.stage.addChild(mask);
contentLayer.mask = mask;

const brushGraphics = new Graphics();
app.stage.addChild(brushGraphics);

return {
app,
axesLayer,
contentLayer,
mask,
brushGraphics,
};
}

/\*

- APPLY BRUSH ZOOM TO TRANSFORM
  \*/
  function applyBrushZoom({ startX, startY, width, height }, transformRef, innerWidth, innerHeight) {
  const currentScale = transformRef.current.scale;
  const currentX = transformRef.current.x;
  const currentY = transformRef.current.y;

const contentX0 = (startX - currentX) / currentScale;
const contentY0 = (startY - currentY) / currentScale;
const contentWidth = width / currentScale;
const contentHeight = height / currentScale;

const scaleFactorX = innerWidth / contentWidth;
const scaleFactorY = innerHeight / contentHeight;
const nextScale = Math.max(ZOOM_MIN, Math.min(Math.min(scaleFactorX, scaleFactorY), ZOOM_MAX));

const offsetCoordinateX = -contentX0 _ nextScale;
const offsetCoordinateY = -contentY0 _ nextScale;

const clamped = clampPan(offsetCoordinateX, offsetCoordinateY, nextScale, innerWidth, innerHeight);
return {
scale: nextScale,
x: clamped.x,
y: clamped.y,
};
}

/\*

- DRAW BRUSH OVERLAY
  \*/
  function drawBrushOverlay(graphics, startX, startY, width, height) {
  if (!graphics) return;
  graphics.clear();
  if (width > 0 && height > 0) {
  graphics.rect(
  PLOT_MARGIN.left + startX,
  PLOT_MARGIN.top + startY,
  width,
  height
  );
  graphics.fill({ color: 0x4493ff, alpha: 0.15 });
  graphics.stroke({ width: 1.5, color: 0x4493ff });
  }
  }

function PixiPlotter({ imageCount, xGap, yGap, syntheticPoints }) {
const { plotterPoints: fetchedPoints, isLoading, loadError } = usePlotterData();
const plotterPoints = syntheticPoints || fetchedPoints;

if (!syntheticPoints && isLoading) {
return <div>Loading...</div>;
}

if (!syntheticPoints && loadError) {
return <div>Error: {loadError}</div>;
}

return (
<PixiCanvas
      plotterPoints={plotterPoints}
      imageCount={imageCount}
      xGap={xGap}
      yGap={yGap}
    />
);
}

function PixiCanvas({ plotterPoints, imageCount, xGap, yGap }) {
const containerRef = useRef(null);
const pixiAppRef = useRef(null);
const axesLayerRef = useRef(null);
const contentLayerRef = useRef(null);
const maskRef = useRef(null);
const tooltipRef = useRef(null);
const brushGraphicsRef = useRef(null);
const brushStartRef = useRef(null);

const baseScalesRef = useRef({
xScale: null,
yScale: null,
});

const transformRef = useRef({
scale: 1,
x: 0,
y: 0,
});

const dragRef = useRef({
dragging: false,
startX: 0,
startY: 0,
});

const [zoomLevel, setZoomLevel] = useState(1);
const [isDragging, setIsDragging] = useState(false);

const {
interactionMode,
setInteractionMode,
isPanMode,
} = useInteractionMode();

const innerWidth = PLOT_DIMENSIONS.width - PLOT_MARGIN.left - PLOT_MARGIN.right;
const innerHeight = PLOT_DIMENSIONS.height - PLOT_MARGIN.top - PLOT_MARGIN.bottom;

/\*

- GET VIEWPORT SCALES
  \*/
  const getViewportScales = useCallback(() => {
  const baseScaleX = baseScalesRef.current.xScale;
  const baseScaleY = baseScalesRef.current.yScale;


    if (!baseScaleX || !baseScaleY) {
      return null;
    }

    const { scale, x, y } = transformRef.current;

    return computeViewportScales(
      baseScaleX,
      baseScaleY,
      scale,
      x,
      y,
      innerWidth,
      innerHeight
    );

}, [innerWidth, innerHeight]);

/\*

- RENDER AXES
  \*/
  const renderAxes = useCallback(() => {
  if (!axesLayerRef.current) return;


    const viewportScales = getViewportScales();
    if (!viewportScales) return;

    const axesLayer = axesLayerRef.current;
    axesLayer.removeChildren();

    drawGrid(
      axesLayer,
      viewportScales.dynamicXScale,
      viewportScales.dynamicYScale,
      innerWidth,
      innerHeight
    );

    drawAxesLabels(
      axesLayer,
      viewportScales.dynamicXScale,
      viewportScales.dynamicYScale,
      innerWidth,
      innerHeight
    );

}, [getViewportScales, innerWidth, innerHeight]);

/\*

- APPLY TRANSFORM — redraws points from current viewport scales (deep zoom).
- Content layer is always identity; no matrix upscaling of sprites.
  \*/
  const applyTransform = useCallback(() => {
  if (!contentLayerRef.current) return;


    const viewportScales = getViewportScales();
    if (!viewportScales) return;

    const { dynamicXScale, dynamicYScale } = viewportScales;
    const { scale } = transformRef.current;

    const contentLayer = contentLayerRef.current;
    contentLayer.removeChildren();
    contentLayer.scale.set(1);
    contentLayer.x = PLOT_MARGIN.left;
    contentLayer.y = PLOT_MARGIN.top;

    const baseScaleX = baseScalesRef.current.xScale;
    const baseScaleY = baseScalesRef.current.yScale;
    if (!baseScaleX || !baseScaleY) return;

    const scaledPoints = plotterPoints.map((point) => ({
      ...point,
      scaledX: point.x * (xGap / 10),
      scaledY: point.y * (yGap / 10),
    }));

    /* Same pattern as Recharts: base cell size × current zoom scale. */
    const adaptiveCellSizeBase = computeAdaptiveCellSize(
      scaledPoints,
      (val) => baseScaleX(val),
      (val) => baseScaleY(val),
    );
    const currentCellSize = adaptiveCellSizeBase * scale;

    /* Screen-space culling. */
    const xScreenFn = (val) => baseScaleX(val) * scale + transformRef.current.x;
    const yScreenFn = (val) => baseScaleY(val) * scale + transformRef.current.y;
    const visiblePoints = filterVisiblePoints(
      scaledPoints,
      xScreenFn,
      yScreenFn,
      innerWidth,
      innerHeight,
      currentCellSize,
    );

    const effectiveImageCount = computeEffectiveImageCount(currentCellSize, imageCount);

    drawPoints(
      contentLayer,
      visiblePoints,
      dynamicXScale,
      dynamicYScale,
      effectiveImageCount,
      tooltipRef,
      currentCellSize,
    );

    renderAxes();

}, [getViewportScales, renderAxes, plotterPoints, xGap, yGap, innerWidth, innerHeight, imageCount]);

/\*

- MAIN RENDER — loads assets then delegates to applyTransform for drawing.
  \*/
  const renderScene = useCallback(async () => {
  if (!axesLayerRef.current || !contentLayerRef.current) return;


    const scaledPoints = plotterPoints.map((point) => ({
      ...point,
      scaledX: point.x * (xGap / 10),
      scaledY: point.y * (yGap / 10),
    }));

    const xDomainExtent = d3.extent(scaledPoints, (point) => point.scaledX);
    const yDomainExtent = d3.extent(scaledPoints, (point) => point.scaledY);

    const baseScaleX = d3.scaleLinear()
      .domain([xDomainExtent[0] - 5, xDomainExtent[1] + 5])
      .range([0, innerWidth]);

    const baseScaleY = d3.scaleLinear()
      .domain([yDomainExtent[0] - 5, yDomainExtent[1] + 5])
      .range([innerHeight, 0]);

    baseScalesRef.current = { xScale: baseScaleX, yScale: baseScaleY };
    renderAxes();

    const uniqueImageUrls = [...new Set(plotterPoints.map((point) => point.image))];
    await Assets.load(uniqueImageUrls);

    applyTransform();

}, [plotterPoints, xGap, yGap, innerWidth, innerHeight, renderAxes, applyTransform]);

/\*

- ZOOM
  \*/
  const zoom = useCallback((direction, interactionSource = "button") => {
  logChartInteractionEvent({
  interactionType: direction === "in" ? "ZOOM_IN" : "ZOOM_OUT",
  visualizationLibrary: "Pixi",
  interactionSource: interactionSource,
  });
  const currentScale = transformRef.current.scale;


    const nextScale =
      direction === "in"
        ? Math.min(currentScale * ZOOM_STEP, ZOOM_MAX)
        : Math.max(currentScale / ZOOM_STEP, ZOOM_MIN);

    const plotCenterX = innerWidth / 2;
    const plotCenterY = innerHeight / 2;

    const nextTransformOffsetX =
      transformRef.current.x - plotCenterX * (nextScale / currentScale - 1);

    const nextTransformOffsetY =
      transformRef.current.y - plotCenterY * (nextScale / currentScale - 1);

    const clampedTransformOffset = clampPan(
      nextTransformOffsetX,
      nextTransformOffsetY,
      nextScale,
      innerWidth,
      innerHeight
    );

    transformRef.current = {
      scale: nextScale,
      x: clampedTransformOffset.x,
      y: clampedTransformOffset.y,
    };

    setZoomLevel(nextScale);
    applyTransform();

}, [innerWidth, innerHeight, applyTransform]);

/\*

- RESET
  \*/
  const reset = useCallback((interactionSource) => {
  const computedSource =
  interactionSource && typeof interactionSource === "string"
  ? interactionSource
  : "button";


    logChartInteractionEvent({
      interactionType: "RESET",
      visualizationLibrary: "Pixi",
      interactionSource: computedSource,
    });

    transformRef.current = {
      scale: 1,
      x: 0,
      y: 0,
    };

    setZoomLevel(1);
    applyTransform();

}, [applyTransform]);

/\*

- CANVAS INTERACTIONS
  \*/
  const onCanvasMouseDown = useCallback((event) => {
  if (isPanMode) {
  logChartInteractionEvent({
  interactionType: "PAN",
  visualizationLibrary: "Pixi",
  interactionSource: "drag",
  });
  setIsDragging(true);
  dragRef.current.dragging = true;
  dragRef.current.startX = event.clientX - transformRef.current.x;
  dragRef.current.startY = event.clientY - transformRef.current.y;
  } else {
  if (!containerRef.current) return;
  const rect = containerRef.current.getBoundingClientRect();
  const localX = event.clientX - rect.left - PLOT_MARGIN.left;
  const localY = event.clientY - rect.top - PLOT_MARGIN.top;

      if (localX >= 0 && localX <= innerWidth && localY >= 0 && localY <= innerHeight) {
        brushStartRef.current = { x: localX, y: localY };
      }

  }
  }, [isPanMode, innerWidth, innerHeight]);

const onCanvasMouseMove = useCallback((event) => {
if (dragRef.current.dragging) {
const nextX = event.clientX - dragRef.current.startX;
const nextY = event.clientY - dragRef.current.startY;
const clamped = clampPan(nextX, nextY, transformRef.current.scale, innerWidth, innerHeight);

      transformRef.current.x = clamped.x;
      transformRef.current.y = clamped.y;

      applyTransform();
      return;
    }

    if (brushStartRef.current) {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const localX = Math.max(0, Math.min(innerWidth, event.clientX - rect.left - PLOT_MARGIN.left));
      const localY = Math.max(0, Math.min(innerHeight, event.clientY - rect.top - PLOT_MARGIN.top));

      const brushStartX = Math.min(brushStartRef.current.x, localX);
      const brushStartY = Math.min(brushStartRef.current.y, localY);
      const brushWidth = Math.abs(localX - brushStartRef.current.x);
      const brushHeight = Math.abs(localY - brushStartRef.current.y);

      drawBrushOverlay(brushGraphicsRef.current, brushStartX, brushStartY, brushWidth, brushHeight);
    }

}, [innerWidth, innerHeight, applyTransform]);

const onCanvasMouseUp = useCallback((event) => {
setIsDragging(false);
if (dragRef.current.dragging) {
dragRef.current.dragging = false;
return;
}

    if (brushStartRef.current) {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const localX = Math.max(0, Math.min(innerWidth, event.clientX - rect.left - PLOT_MARGIN.left));
      const localY = Math.max(0, Math.min(innerHeight, event.clientY - rect.top - PLOT_MARGIN.top));

      const brushStartX = Math.min(brushStartRef.current.x, localX);
      const brushStartY = Math.min(brushStartRef.current.y, localY);
      const brushWidth = Math.abs(localX - brushStartRef.current.x);
      const brushHeight = Math.abs(localY - brushStartRef.current.y);

      if (brushWidth >= 5 && brushHeight >= 5) {
        logChartInteractionEvent({
          interactionType: "ZOOM_IN",
          visualizationLibrary: "Pixi",
          interactionSource: "brush",
        });

        const nextTransform = applyBrushZoom(
          { startX: brushStartX, startY: brushStartY, width: brushWidth, height: brushHeight },
          transformRef,
          innerWidth,
          innerHeight
        );

        transformRef.current = {
          scale: nextTransform.scale,
          x: nextTransform.x,
          y: nextTransform.y,
        };

        setZoomLevel(nextTransform.scale);
        applyTransform();
      }

      if (brushGraphicsRef.current) {
        brushGraphicsRef.current.clear();
      }
      brushStartRef.current = null;
    }

}, [innerWidth, innerHeight, applyTransform]);

/_ Cancel in-progress brush when switching to pan mode _/
useEffect(() => {
if (isPanMode) {
brushStartRef.current = null;
if (brushGraphicsRef.current) {
brushGraphicsRef.current.clear();
}
}
}, [isPanMode]);

/\*

- INITIALIZE PIXI
  \*/
  useEffect(() => {
  let isComponentUnmounted = false;
  let pixiApplicationInstance = null;


    if (!containerRef.current) return;

    initializePixiApp(containerRef.current, innerWidth, innerHeight)
      .then(({ app, axesLayer, contentLayer, mask, brushGraphics }) => {
        if (isComponentUnmounted) {
          try {
            app.destroy({ removeView: true });
          } catch (err) {
            console.error("Error destroying Pixi App during init cancellation:", err);
          }
          return;
        }

        pixiAppRef.current = app;
        axesLayerRef.current = axesLayer;
        contentLayerRef.current = contentLayer;
        maskRef.current = mask;
        brushGraphicsRef.current = brushGraphics;
        pixiApplicationInstance = app;

        renderScene();
      })
      .catch((err) => {
        console.error("Failed to initialize Pixi:", err);
      });

    return () => {
      isComponentUnmounted = true;
      if (pixiApplicationInstance) {
        try {
          pixiApplicationInstance.destroy({ removeView: true });
        } catch (err) {
          console.error("Error destroying Pixi App:", err);
        }
      }
    };

}, [innerWidth, innerHeight, renderScene]);

/\*

- RERENDER DATA CHANGES
  \*/
  useEffect(() => {
  if (!plotterPoints.length) return;
  renderScene();
  }, [plotterPoints, imageCount, xGap, yGap, renderScene]);

/\*

- ATTACH NON-PASSIVE WHEEL LISTENER
  \*/
  useEffect(() => {
  const container = containerRef.current;
  if (!container) return;


    const onCanvasWheelScroll = (event) => {
      event.preventDefault();
      if (event.deltaY > 0) {
        zoom("out", "wheel");
      } else {
        zoom("in", "wheel");
      }
    };

    container.addEventListener("wheel", onCanvasWheelScroll, { passive: false });

    return () => {
      container.removeEventListener("wheel", onCanvasWheelScroll);
    };

}, [zoom]);

return (
<div style={{ position: "relative" }}>
<PlotterControls
zoomLevel={zoomLevel}
onZoomIn={() => zoom("in")}
onZoomOut={() => zoom("out")}
onReset={() => reset("button")}
interactionMode={interactionMode}
onModeChange={setInteractionMode}
/>

      <div
        ref={containerRef}
        onMouseDown={onCanvasMouseDown}
        onMouseMove={onCanvasMouseMove}
        onMouseUp={onCanvasMouseUp}
        onMouseLeave={onCanvasMouseUp}
        onDoubleClick={() => reset("double_click")}
        style={{
          cursor: isPanMode
            ? (isDragging ? "grabbing" : "grab")
            : "crosshair",
        }}
      />

      <div
        ref={tooltipRef}
        className="plotter-tooltip"
        style={{
          display: "none",
          position: "absolute",
          pointerEvents: "none",
        }}
      />
    </div>

);
}

/\*

- GRID
  \*/
  function drawGrid(layer, scaleX, scaleY, width, height) {
  const grid = new Graphics();

const xTicks = buildIntegerTicks(scaleX.domain());
const yTicks = buildIntegerTicks(scaleY.domain());

xTicks.forEach((tick) => {
const x = scaleX(tick);
grid.moveTo(x, 0);
grid.lineTo(x, height);
});

yTicks.forEach((tick) => {
const y = scaleY(tick);
grid.moveTo(0, y);
grid.lineTo(width, y);
});

grid.stroke({
width: 1,
color: GRID_COLOR,
alpha: GRID_ALPHA,
});

const border = new Graphics();
border.rect(0, 0, width, height);
border.stroke({
width: 1,
color: AXIS_BORDER_COLOR,
});

layer.addChild(grid);
layer.addChild(border);
}

/\*

- LABELS
  \*/
  function drawAxesLabels(layer, scaleX, scaleY, innerWidth, innerHeight) {
  const xTicks = buildIntegerTicks(scaleX.domain());
  const yTicks = buildIntegerTicks(scaleY.domain());

xTicks.forEach((tick) => {
const label = new PixiText({
text: tick.toString(),
style: {
fill: TICK_COLOR,
fontSize: 11,
},
});

    label.x = scaleX(tick) - label.width / 2;
    label.y = innerHeight + 6;
    layer.addChild(label);

});

yTicks.forEach((tick) => {
const label = new PixiText({
text: tick.toString(),
style: {
fill: TICK_COLOR,
fontSize: 11,
},
});

    label.x = -label.width - 6;
    label.y = scaleY(tick) - label.height / 2;
    layer.addChild(label);

});
}

/\*

- POINTS
  \*/
  function drawPoints(layer, points, scaleX, scaleY, imageCount, tooltipRef, cellSize = CELL_SIZE) {
  points.forEach((point) => {
  const x = scaleX(point.scaledX);
  const y = scaleY(point.scaledY);

      const positions = computeImagePositions(
        x,
        y,
        cellSize,
        cellSize,
        imageCount
      );

      positions.forEach((position) => {
        const sprite = Sprite.from(point.image);
        sprite.x = position.x;
        sprite.y = position.y;
        sprite.width = position.width;
        sprite.height = position.height;
        sprite.eventMode = "static";
        sprite.cursor = "pointer";

        sprite.on("pointerenter", (event) => {
          showTooltip(tooltipRef.current, event, point);
        });

        sprite.on("pointerleave", () => {
          hideTooltip(tooltipRef.current);
        });

        layer.addChild(sprite);
      });

  });
  }

/\*

- SMART TICKS
  \*/
  function buildIntegerTicks([min, max]) {
  const range = max - min;
  let step;

if (range <= 10) step = 1;
else if (range <= 20) step = 2;
else if (range <= 50) step = 5;
else if (range <= 100) step = 10;
else if (range <= 200) step = 20;
else step = 50;

const ticks = [];
const start = Math.floor(min / step) \* step;

for (let value = start; value <= max; value += step) {
ticks.push(Number(value.toFixed(2)));
}

return ticks;
}

/\*

- TOOLTIP
  \*/
  function showTooltip(element, event, point) {
  if (!element) return;

const global = event.global;
element.style.display = "block";
element.style.left = `${global.x + 15}px`;
element.style.top = `${global.y - 10}px`;

element.innerHTML = `
<div class="tooltip-label">
${point.label}
</div>

    <div class="tooltip-meta">
      <span>Interval: ${point.meta.interval}s</span>
      <span>Angle: ${point.meta.angle}°</span>
      <span>Quality: ${point.meta.quality}</span>
    </div>

`;
}

function hideTooltip(element) {
if (!element) return;
element.style.display = "none";
}

export default PixiPlotter;/_ eslint-disable react-hooks/purity _/
import { useState, useMemo, useRef, useEffect, useCallback } from "react";
import \* as d3 from "d3";
import { usePlotterData } from "../lib/plotterData";
import { computeImagePositions } from "../lib/gridLayout";
import { CELL_SIZE, PLOT_DIMENSIONS, PLOT_MARGIN } from "../lib/constants";
import {
computeAdaptiveCellSize,
filterVisiblePoints,
computeEffectiveImageCount,
} from "../lib/densityLayout";
import PlotterControls from "./PlotterControls";
import { logChartInteractionEvent } from "../lib/chartInteractionLogger";
import { useInteractionMode } from "../lib/interactionMode";

const ZOOM_STEP = 1.5;
const ZOOM_MIN = 0.35;
const ZOOM_MAX = 250;
const BRUSH_MIN_PIXELS = 5;
const BRUSH_FILL = "rgba(68, 147, 255, 0.15)";
const BRUSH_STROKE = "#4493ff";
const BRUSH_STROKE_WIDTH = 1.5;

const BASE_IMAGE_GAP_X = 10;
const BASE_IMAGE_GAP_Y = 10;

function RechartsPlotter({ imageCount, xGap, yGap, syntheticPoints }) {
const {
plotterPoints: fetchedPoints,
isLoading,
loadError,
} = usePlotterData();

const plotterPoints = syntheticPoints || fetchedPoints;

if (!syntheticPoints && isLoading)
return <div className="plotter-loading">Loading data…</div>;
if (!syntheticPoints && loadError)
return <div className="plotter-error">Error: {loadError}</div>;

return (
<RechartsCanvas
      plotterPoints={plotterPoints}
      imageCount={imageCount}
      xGap={xGap}
      yGap={yGap}
    />
);
}

function RechartsCanvas({ plotterPoints, imageCount, xGap, yGap }) {
const containerRef = useRef(null);
const svgRef = useRef(null);
const dragRef = useRef({
dragging: false,
pointerId: null,
startClientX: 0,
startClientY: 0,
startTransform: { scale: 1, x: 0, y: 0 },
});

const [containerWidth, setContainerWidth] = useState(PLOT_DIMENSIONS.width);
const [transform, setTransform] = useState({ scale: 1, x: 0, y: 0 });
const [hoveredPoint, setHoveredPoint] = useState(null);
const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
const [brushRect, setBrushRect] = useState(null);
const [isDragging, setIsDragging] = useState(false);
const brushStartRef = useRef(null);

const { interactionMode, setInteractionMode, isPanMode } =
useInteractionMode();

useEffect(() => {
if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) setContainerWidth(entry.contentRect.width);
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();

}, []);

/_ Cancel in-progress brush when switching to pan mode _/
useEffect(() => {
if (isPanMode) {
brushStartRef.current = null;
// eslint-disable-next-line react-hooks/set-state-in-effect
setBrushRect(null);
}
}, [isPanMode]);

const height = PLOT_DIMENSIONS.height;
const innerWidth = Math.max(
containerWidth - PLOT_MARGIN.left - PLOT_MARGIN.right,
320,
);
const innerHeight = Math.max(
height - PLOT_MARGIN.top - PLOT_MARGIN.bottom,
240,
);

const normalizedPoints = useMemo(() => {
const xScale = xGap / BASE_IMAGE_GAP_X;
const yScale = yGap / BASE_IMAGE_GAP_Y;

    return plotterPoints.map((point) => ({
      ...point,
      scaledX: point.x * xScale,
      scaledY: point.y * yScale,
    }));

}, [plotterPoints, xGap, yGap]);

const xExtent = useMemo(
() => extentWithPadding(normalizedPoints.map((p) => p.scaledX)),
[normalizedPoints],
);
const yExtent = useMemo(
() => extentWithPadding(normalizedPoints.map((p) => p.scaledY)),
[normalizedPoints],
);

const baseXScale = useMemo(
() => d3.scaleLinear().domain(xExtent).range([0, innerWidth]),
[xExtent, innerWidth],
);

const baseYScale = useMemo(
() => d3.scaleLinear().domain(yExtent).range([innerHeight, 0]),
[yExtent, innerHeight],
);

const visibleDomain = useMemo(
() =>
computeVisibleDomain(
xExtent,
yExtent,
transform,
innerWidth,
innerHeight,
),
[xExtent, yExtent, transform, innerWidth, innerHeight],
);

const xTicks = useMemo(
() => d3.ticks(visibleDomain.xMin, visibleDomain.xMax, 8),
[visibleDomain],
);
const yTicks = useMemo(
() => d3.ticks(visibleDomain.yMin, visibleDomain.yMax, 6),
[visibleDomain],
);

const xTickScale = useMemo(
() =>
d3
.scaleLinear()
.domain([visibleDomain.xMin, visibleDomain.xMax])
.range([0, innerWidth]),
[visibleDomain, innerWidth],
);

const yTickScale = useMemo(
() =>
d3
.scaleLinear()
.domain([visibleDomain.yMin, visibleDomain.yMax])
.range([innerHeight, 0]),
[visibleDomain, innerHeight],
);

const clipId = "recharts-clip-static";

const adaptiveCellSizeForRender = useMemo(() => {
/_ Compute from base scales (content-space) so the cell size is set at
the default zoom level. The SVG transform then naturally magnifies
images when zoomed in, revealing more detail. _/
return computeAdaptiveCellSize(
normalizedPoints,
(val) => baseXScale(val),
(val) => baseYScale(val),
);
}, [normalizedPoints, baseXScale, baseYScale]);

const visiblePointsForRender = useMemo(() => {
/_ Viewport culling still needs screen-space coordinates. _/
const xScreenFn = (val) => baseXScale(val) _ transform.scale + transform.x;
const yScreenFn = (val) => baseYScale(val) _ transform.scale + transform.y;
return filterVisiblePoints(
normalizedPoints,
xScreenFn,
yScreenFn,
innerWidth,
innerHeight,
adaptiveCellSizeForRender \* transform.scale,
);
}, [
normalizedPoints,
baseXScale,
baseYScale,
transform,
innerWidth,
innerHeight,
adaptiveCellSizeForRender,
]);

const effectiveImageCountForRender = useMemo(
() =>
computeEffectiveImageCount(
adaptiveCellSizeForRender \* transform.scale,
imageCount,
),
[adaptiveCellSizeForRender, transform.scale, imageCount],
);

const zoomTo = useCallback(
(nextScale, anchorX, anchorY) => {
setTransform((prev) => {
const clampedScale = clamp(nextScale, ZOOM_MIN, ZOOM_MAX);
const pivotX = Number.isFinite(anchorX) ? anchorX : innerWidth / 2;
const pivotY = Number.isFinite(anchorY) ? anchorY : innerHeight / 2;

        const nextX =
          prev.x - (pivotX - prev.x) * (clampedScale / prev.scale - 1);
        const nextY =
          prev.y - (pivotY - prev.y) * (clampedScale / prev.scale - 1);

        return clampTransform(
          { scale: clampedScale, x: nextX, y: nextY },
          innerWidth,
          innerHeight,
        );
      });
    },
    [innerWidth, innerHeight],

);

const handleZoomIn = useCallback(() => {
logChartInteractionEvent({
interactionType: "ZOOM_IN",
visualizationLibrary: "Recharts",
interactionSource: "button",
});
zoomTo(transform.scale \* ZOOM_STEP, innerWidth / 2, innerHeight / 2);
}, [transform.scale, zoomTo, innerWidth, innerHeight]);

const handleZoomOut = useCallback(() => {
logChartInteractionEvent({
interactionType: "ZOOM_OUT",
visualizationLibrary: "Recharts",
interactionSource: "button",
});
zoomTo(transform.scale / ZOOM_STEP, innerWidth / 2, innerHeight / 2);
}, [transform.scale, zoomTo, innerWidth, innerHeight]);

const handleReset = useCallback(() => {
logChartInteractionEvent({
interactionType: "RESET",
visualizationLibrary: "Recharts",
interactionSource: "button",
});
setTransform({ scale: 1, x: 0, y: 0 });
setHoveredPoint(null);
}, []);

const handleWheel = useCallback(
(event) => {
event.preventDefault();

      const rect = svgRef.current?.getBoundingClientRect();
      if (!rect) return;

      const clientX = event.clientX - rect.left;
      const clientY = event.clientY - rect.top;

      const localX = clientX - PLOT_MARGIN.left;
      const localY = clientY - PLOT_MARGIN.top;

      if (
        localX < 0 ||
        localY < 0 ||
        localX > innerWidth ||
        localY > innerHeight
      ) {
        return;
      }

      const isZoomIn = event.deltaY < 0;
      logChartInteractionEvent({
        interactionType: isZoomIn ? "ZOOM_IN" : "ZOOM_OUT",
        visualizationLibrary: "Recharts",
        interactionSource: "wheel",
      });

      const factor = event.deltaY > 0 ? 1 / 1.15 : 1.15;

      setTransform((prev) => {
        const clampedScale = clamp(prev.scale * factor, ZOOM_MIN, ZOOM_MAX);

        const nextX =
          prev.x - (localX - prev.x) * (clampedScale / prev.scale - 1);
        const nextY =
          prev.y - (localY - prev.y) * (clampedScale / prev.scale - 1);
        return clampTransform(
          { scale: clampedScale, x: nextX, y: nextY },
          innerWidth,
          innerHeight,
        );
      });
    },
    [innerWidth, innerHeight],

);

const handlePointerDown = useCallback(
(event) => {
const rect = svgRef.current?.getBoundingClientRect();
if (!rect) return;

      const localX = event.clientX - rect.left - PLOT_MARGIN.left;
      const localY = event.clientY - rect.top - PLOT_MARGIN.top;

      if (
        localX < 0 ||
        localY < 0 ||
        localX > innerWidth ||
        localY > innerHeight
      ) {
        return;
      }

      if (isPanMode) {
        logChartInteractionEvent({
          interactionType: "PAN",
          visualizationLibrary: "Recharts",
          interactionSource: "drag",
        });
        setIsDragging(true);
        dragRef.current = {
          dragging: true,
          pointerId: event.pointerId,
          startClientX: event.clientX,
          startClientY: event.clientY,
          startTransform: transform,
        };
        event.currentTarget.setPointerCapture?.(event.pointerId);
        return;
      }

      const clampedX = clamp(localX, 0, innerWidth);
      const clampedY = clamp(localY, 0, innerHeight);
      brushStartRef.current = { x: clampedX, y: clampedY };
      setBrushRect({ x: clampedX, y: clampedY, width: 0, height: 0 });
      event.currentTarget.setPointerCapture?.(event.pointerId);
    },
    [innerWidth, innerHeight, transform, isPanMode],

);

const handlePointerMove = useCallback(
(event) => {
if (brushStartRef.current) {
const rect = svgRef.current?.getBoundingClientRect();
if (!rect) return;

        const localX = clamp(
          event.clientX - rect.left - PLOT_MARGIN.left,
          0,
          innerWidth,
        );
        const localY = clamp(
          event.clientY - rect.top - PLOT_MARGIN.top,
          0,
          innerHeight,
        );
        const startPoint = brushStartRef.current;

        setBrushRect({
          x: Math.min(startPoint.x, localX),
          y: Math.min(startPoint.y, localY),
          width: Math.abs(localX - startPoint.x),
          height: Math.abs(localY - startPoint.y),
        });
        return;
      }

      if (dragRef.current.dragging) {
        const dx = event.clientX - dragRef.current.startClientX;
        const dy = event.clientY - dragRef.current.startClientY;

        const next = clampTransform(
          {
            scale: dragRef.current.startTransform.scale,
            x: dragRef.current.startTransform.x + dx,
            y: dragRef.current.startTransform.y + dy,
          },
          innerWidth,
          innerHeight,
        );

        setTransform(next);
        return;
      }

      const target = event.target?.closest?.("[data-point-id]");
      if (!target) {
        setHoveredPoint(null);
        return;
      }

      const id = target.getAttribute("data-point-id");
      const point = plotterPoints.find((p) => p.id === id);
      if (!point) return;

      setHoveredPoint(point);
      setTooltipPos({ x: event.clientX, y: event.clientY });
    },
    [innerWidth, innerHeight, plotterPoints],

);

const handlePointerUp = useCallback(
(event) => {
if (brushStartRef.current && brushRect) {
const isTooSmall =
brushRect.width < BRUSH_MIN_PIXELS ||
brushRect.height < BRUSH_MIN_PIXELS;

        if (!isTooSmall) {
          logChartInteractionEvent({
            interactionType: "ZOOM_IN",
            visualizationLibrary: "Recharts",
            interactionSource: "brush",
          });
          const newTransform = convertBrushToTransform(
            brushRect,
            transform,
            innerWidth,
            innerHeight,
          );
          setTransform(newTransform);
        }

        brushStartRef.current = null;
        setBrushRect(null);
        event.currentTarget.releasePointerCapture?.(event.pointerId);
        return;
      }

      setIsDragging(false);
      dragRef.current.dragging = false;
      dragRef.current.pointerId = null;
      event.currentTarget.releasePointerCapture?.(event.pointerId);
    },
    [brushRect, transform, innerWidth, innerHeight],

);

useEffect(() => {
const svgElement = svgRef.current;

    if (!svgElement) return;

    const wheelHandler = (event) => {
      event.preventDefault();
      handleWheel(event);
    };

    svgElement.addEventListener("wheel", wheelHandler, {
      passive: false,
    });

    return () => {
      svgElement.removeEventListener("wheel", wheelHandler);
    };

}, [handleWheel]);

const handleDoubleClick = useCallback(() => {
logChartInteractionEvent({
interactionType: "RESET",
visualizationLibrary: "Recharts",
interactionSource: "double_click",
});
setTransform({ scale: 1, x: 0, y: 0 });
setHoveredPoint(null);
}, []);

const stageCursor = isPanMode
? isDragging
? "grabbing"
: "grab"
: "crosshair";

const contentTransform = `translate(${transform.x}, ${transform.y}) scale(${transform.scale})`;

return (
<div ref={containerRef} style={{ position: "relative", width: "100%" }}>
<PlotterControls
        zoomLevel={transform.scale}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
        interactionMode={interactionMode}
        onModeChange={setInteractionMode}
      />

      <svg
        ref={svgRef}
        width={containerWidth}
        height={height}
        style={{
          display: "block",
          touchAction: "none",
          userSelect: "none",
          cursor: stageCursor,
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onDoubleClick={handleDoubleClick}
      >
        <defs>
          <clipPath id={clipId}>
            <rect
              x={PLOT_MARGIN.left}
              y={PLOT_MARGIN.top}
              width={innerWidth}
              height={innerHeight}
            />
          </clipPath>
        </defs>

        <rect
          x={0}
          y={0}
          width={containerWidth}
          height={height}
          fill="#16213e"
        />

        <g transform={`translate(${PLOT_MARGIN.left},${PLOT_MARGIN.top})`}>
          <rect
            x={0}
            y={0}
            width={innerWidth}
            height={innerHeight}
            fill="#16213e"
          />

          <AxisGrid
            xTicks={xTicks}
            yTicks={yTicks}
            xTickScale={xTickScale}
            yTickScale={yTickScale}
            innerWidth={innerWidth}
            innerHeight={innerHeight}
          />

          <AxisLabels
            xTicks={xTicks}
            yTicks={yTicks}
            xTickScale={xTickScale}
            yTickScale={yTickScale}
            innerWidth={innerWidth}
            innerHeight={innerHeight}
          />

          <g clipPath={`url(#${clipId})`}>
            <g transform={contentTransform}>
              {visiblePointsForRender.map((point) => (
                <ImagePoint
                  key={point.id}
                  point={point}
                  baseXScale={baseXScale}
                  baseYScale={baseYScale}
                  imageCount={effectiveImageCountForRender}
                  adaptiveCellSize={adaptiveCellSizeForRender}
                />
              ))}
            </g>
          </g>

          <rect
            x={0}
            y={0}
            width={innerWidth}
            height={innerHeight}
            fill="transparent"
            stroke="#555"
            pointerEvents="none"
          />

          {brushRect && brushRect.width > 0 && brushRect.height > 0 && (
            <rect
              x={brushRect.x}
              y={brushRect.y}
              width={brushRect.width}
              height={brushRect.height}
              fill={BRUSH_FILL}
              stroke={BRUSH_STROKE}
              strokeWidth={BRUSH_STROKE_WIDTH}
              rx={2}
              ry={2}
              pointerEvents="none"
            />
          )}
        </g>
      </svg>

      {hoveredPoint && (
        <div
          className="plotter-tooltip"
          style={{
            display: "block",
            position: "fixed",
            left: tooltipPos.x + 12,
            top: tooltipPos.y - 10,
            pointerEvents: "none",
            zIndex: 20,
          }}
        >
          <div className="tooltip-label">{hoveredPoint.label}</div>
          <div className="tooltip-meta">
            <span>Interval: {hoveredPoint.meta.interval}s</span>
            <span>Angle: {hoveredPoint.meta.angle}°</span>
            <span>Quality: {hoveredPoint.meta.quality}</span>
          </div>
        </div>
      )}
    </div>

);
}

function ImagePoint({
point,
baseXScale,
baseYScale,
imageCount,
adaptiveCellSize,
}) {
const centerX = baseXScale(point.scaledX);
const centerY = baseYScale(point.scaledY);
const cellSize = adaptiveCellSize ?? CELL_SIZE;

const positions = computeImagePositions(
centerX,
centerY,
cellSize,
cellSize,
imageCount,
);

return (
<>
{positions.map((position, index) => (
<image
key={`${point.id}-${imageCount}-${index}`}
data-point-id={point.id}
href={point.image}
x={position.x}
y={position.y}
width={position.width}
height={position.height}
preserveAspectRatio="xMidYMid meet"
style={{ cursor: "pointer" }}
/>
))}
</>
);
}

function AxisGrid({
xTicks,
yTicks,
xTickScale,
yTickScale,
innerWidth,
innerHeight,
}) {
return (
<>
{xTicks.map((tick, index) => {
const x = xTickScale(tick);
return (
<line
key={`xgrid-${index}`}
x1={x}
y1={0}
x2={x}
y2={innerHeight}
stroke="#2a2a3e"
strokeDasharray="3 3"
/>
);
})}

      {yTicks.map((tick, index) => {
        const y = yTickScale(tick);
        return (
          <line
            key={`ygrid-${index}`}
            x1={0}
            y1={y}
            x2={innerWidth}
            y2={y}
            stroke="#2a2a3e"
            strokeDasharray="3 3"
          />
        );
      })}
    </>

);
}

function AxisLabels({ xTicks, yTicks, xTickScale, yTickScale, innerHeight }) {
return (
<>
{xTicks.map((tick, index) => {
const x = xTickScale(tick);
return (
<text
key={`xlabel-${index}`}
x={x}
y={innerHeight + 18}
fill="#888"
fontSize="11"
textAnchor="middle" >
{formatTick(tick)}
</text>
);
})}

      {yTicks.map((tick, index) => {
        const y = yTickScale(tick);
        return (
          <text
            key={`ylabel-${index}`}
            x={-8}
            y={y + 4}
            fill="#888"
            fontSize="11"
            textAnchor="end"
          >
            {formatTick(tick)}
          </text>
        );
      })}
    </>

);
}

function extentWithPadding(values) {
if (!values.length) return [0, 1];

const min = Math.min(...values);
const max = Math.max(...values);
const span = max - min;
const pad = span === 0 ? 5 : Math.max(span \* 0.18, 1);

return [min - pad, max + pad];
}

function computeVisibleDomain(
xExtent,
yExtent,
transform,
innerWidth,
innerHeight,
) {
const domainWidth = xExtent[1] - xExtent[0];
const domainHeight = yExtent[1] - yExtent[0];

const xMin =
xExtent[0] - (transform.x / transform.scale / innerWidth) \* domainWidth;
const xMax = xMin + domainWidth / transform.scale;

const yMax =
yExtent[1] + (transform.y / transform.scale / innerHeight) \* domainHeight;
const yMin = yMax - domainHeight / transform.scale;

return { xMin, xMax, yMin, yMax };
}

function clampTransform(transform, innerWidth, innerHeight) {
const scale = transform.scale;
const scaledWidth = innerWidth _ scale;
const scaledHeight = innerHeight _ scale;

let x = transform.x;
let y = transform.y;

if (scaledWidth <= innerWidth) {
x = (innerWidth - scaledWidth) / 2;
} else {
x = Math.min(0, Math.max(innerWidth - scaledWidth, x));
}

if (scaledHeight <= innerHeight) {
y = (innerHeight - scaledHeight) / 2;
} else {
y = Math.min(0, Math.max(innerHeight - scaledHeight, y));
}

return { scale, x, y };
}

function clamp(value, min, max) {
return Math.max(min, Math.min(max, value));
}

function convertBrushToTransform(
brushPixelRect,
currentTransform,
plotInnerWidth,
plotInnerHeight,
) {
const contentX0 =
(brushPixelRect.x - currentTransform.x) / currentTransform.scale;
const contentY0 =
(brushPixelRect.y - currentTransform.y) / currentTransform.scale;
const contentBrushWidth = brushPixelRect.width / currentTransform.scale;
const contentBrushHeight = brushPixelRect.height / currentTransform.scale;

const fitScaleX = plotInnerWidth / contentBrushWidth;
const fitScaleY = plotInnerHeight / contentBrushHeight;
const newScale = clamp(Math.min(fitScaleX, fitScaleY), ZOOM_MIN, ZOOM_MAX);

const rawX = -contentX0 _ newScale;
const rawY = -contentY0 _ newScale;

return clampTransform(
{ scale: newScale, x: rawX, y: rawY },
plotInnerWidth,
plotInnerHeight,
);
}

function formatTick(value) {
if (Number.isInteger(value)) return String(value);
return parseFloat(Number(value).toPrecision(4)).toString();
}

export default RechartsPlotter;

```

---

# src\App.jsx

```jsx
import { useState, useMemo } from "react";

import Navbar from "./components/Navbar";
import ImageCountSelector from "./components/ImageCountSelector";
import DataPointCountControl from "./components/DataPointCountControl";

import RechartsPlotter from "./components/RechartsPlotter";
import D3Plotter from "./components/D3Plotter";
import PixiPlotter from "./components/PixiPlotter";
import KonvaPlotter from "./components/KonvaPlotter";

import { generateSyntheticPoints } from "./lib/syntheticDataGenerator";

import {
  DATA_POINT_LIMITS,
  MAX_IMAGES_PER_POINT,
  MIN_IMAGES_PER_POINT,
} from "./lib/constants";

import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("Recharts");

  const [imageCount, setImageCount] = useState(1);

  const [dataPointCount, setDataPointCount] = useState(
    DATA_POINT_LIMITS.defaultCount,
  );

  const [appliedXGap, setAppliedXGap] = useState(10);

  const [appliedYGap, setAppliedYGap] = useState(10);

  const [draftXGap, setDraftXGap] = useState(10);

  const [draftYGap, setDraftYGap] = useState(10);

  const hasChanges = draftXGap !== appliedXGap || draftYGap !== appliedYGap;

  /**
   * Stable deterministic synthetic data.
   */
  const syntheticPoints = useMemo(() => {
    return generateSyntheticPoints(
      Math.max(
        DATA_POINT_LIMITS.min,
        Math.min(dataPointCount, DATA_POINT_LIMITS.max),
      ),
    );
  }, [dataPointCount]);

  const handleGapUpdate = () => {
    setAppliedXGap(draftXGap);
    setAppliedYGap(draftYGap);
  };

  /**
   * Critical normalization.
   */
  const handleImageCountChange = (value) => {
    const parsed = Number(value);

    if (Number.isNaN(parsed)) {
      setImageCount(1);
      return;
    }

    const clamped = Math.max(
      MIN_IMAGES_PER_POINT,
      Math.min(MAX_IMAGES_PER_POINT, Math.floor(parsed)),
    );

    setImageCount(clamped);
  };

  const plotterProps = {
    imageCount,
    xGap: appliedXGap,
    yGap: appliedYGap,
    syntheticPoints,
  };

  const renderActivePlotter = () => {
    switch (activeTab) {
      case "Recharts":
        return <RechartsPlotter {...plotterProps} />;

      case "D3":
        return <D3Plotter {...plotterProps} />;

      case "PixiJS":
        return <PixiPlotter {...plotterProps} />;

      case "Konva":
        return <KonvaPlotter {...plotterProps} />;

      default:
        return <RechartsPlotter {...plotterProps} />;
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Image Plotting System PoC</h1>

      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <DataPointCountControl
        dataPointCount={dataPointCount}
        onDataPointCountChange={setDataPointCount}
      />

      <ImageCountSelector
        imageCount={imageCount}
        setImageCount={handleImageCountChange}
      />

      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <label style={{ color: "#fff" }}>X Gap:</label>

          <input
            type="range"
            min="1"
            max="50"
            value={draftXGap}
            onChange={(e) => setDraftXGap(Number(e.target.value))}
          />

          <span
            style={{
              color: "#888",
              width: "20px",
            }}
          >
            {draftXGap}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <label style={{ color: "#fff" }}>Y Gap:</label>

          <input
            type="range"
            min="1"
            max="50"
            value={draftYGap}
            onChange={(e) => setDraftYGap(Number(e.target.value))}
          />

          <span
            style={{
              color: "#888",
              width: "20px",
            }}
          >
            {draftYGap}
          </span>
        </div>

        <button
          onClick={handleGapUpdate}
          disabled={!hasChanges}
          style={{
            padding: "5px 15px",
            backgroundColor: hasChanges ? "#2e8b57" : "#444",

            color: hasChanges ? "#fff" : "#888",

            border: "none",
            borderRadius: "4px",

            cursor: hasChanges ? "pointer" : "not-allowed",

            fontWeight: "bold",
          }}
        >
          Update
        </button>
      </div>

      <div className="viewer-container">{renderActivePlotter()}</div>
    </div>
  );
}

export default App;

```

---

# src\components\D3Plotter.jsx

```jsx
import { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import { usePlotterData } from "../lib/plotterData";
import { logChartInteractionEvent } from "../lib/chartInteractionLogger";
import { useInteractionMode, INTERACTION_MODES } from "../lib/interactionMode";

import { computeImagePositions } from "../lib/gridLayout";
import {
  CELL_SIZE,
  PLOT_DIMENSIONS,
  PLOT_MARGIN,
  BRUSH_ZOOM,
  ZOOM_SCALE_FACTOR,
  WHEEL_ZOOM_SENSITIVITY,
} from "../lib/constants";
import {
  computeAdaptiveCellSize,
  filterVisiblePoints,
  computeEffectiveImageCount,
} from "../lib/densityLayout";
import PlotterControls from "./PlotterControls";

/* ─── Entry Component ───────────────────────────────────────────── */

function D3Plotter({ imageCount, xGap, yGap, syntheticPoints }) {
  const {
    plotterPoints: fetchedPoints,
    isLoading,
    loadError,
  } = usePlotterData();

  const plotterPoints = syntheticPoints || fetchedPoints;

  if (!syntheticPoints && isLoading)
    return <div className="plotter-loading">Loading data…</div>;
  if (!syntheticPoints && loadError)
    return <div className="plotter-error">Error: {loadError}</div>;

  return (
    <D3PlotCanvas
      plotterPoints={plotterPoints}
      imageCount={imageCount}
      xGap={xGap}
      yGap={yGap}
    />
  );
}

/* ─── Canvas Wrapper ────────────────────────────────────────────── */

function D3PlotCanvas({ plotterPoints, imageCount, xGap, yGap }) {
  const svgRef = useRef(null);
  const tooltipRef = useRef(null);
  const containerRef = useRef(null);
  const plotControlsRef = useRef(null);
  const interactionCleanupRef = useRef(null);

  const originalXDomainRef = useRef(null);
  const originalYDomainRef = useRef(null);

  const [containerWidth, setContainerWidth] = useState(PLOT_DIMENSIONS.width);
  const { interactionMode, setInteractionMode, isZoomMode } =
    useInteractionMode();

  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) setContainerWidth(entry.contentRect.width);
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    if (!svgRef.current || plotterPoints.length === 0) return;

    const initResult = initializePlot(
      svgRef.current,
      tooltipRef.current,
      plotterPoints,
      imageCount,
      containerWidth,
      xGap,
      yGap,
      originalXDomainRef,
      originalYDomainRef,
    );

    plotControlsRef.current = initResult.controls;
    interactionCleanupRef.current = initResult.setActiveInteractionMode;

    initResult.setActiveInteractionMode(interactionMode);
  }, [plotterPoints, imageCount, containerWidth, xGap, yGap, interactionMode]);

  useEffect(() => {
    if (interactionCleanupRef.current) {
      interactionCleanupRef.current(interactionMode);
    }
  }, [interactionMode]);

  const handleZoomIn = () => plotControlsRef.current?.zoomIn();
  const handleZoomOut = () => plotControlsRef.current?.zoomOut();
  const handleReset = () => plotControlsRef.current?.resetZoom();

  const cursorStyle = isZoomMode ? "crosshair" : "grab";

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      <PlotterControls
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
        interactionMode={interactionMode}
        onModeChange={setInteractionMode}
      />
      <svg ref={svgRef} style={{ cursor: cursorStyle }} />
      <div
        ref={tooltipRef}
        className="plotter-tooltip"
        style={{ display: "none" }}
      />
    </div>
  );
}

/* ─── Plot Initialization ───────────────────────────────────────── */

function initializePlot(
  svgElement,
  tooltipElement,
  plotterPoints,
  imageCount,
  containerWidth,
  xGap,
  yGap,
  originalXDomainRef,
  originalYDomainRef,
) {
  const width = containerWidth;
  const height = PLOT_DIMENSIONS.height;
  const margin = PLOT_MARGIN;
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const svg = d3.select(svgElement);
  svg.selectAll("*").remove();
  svg
    .attr("width", width)
    .attr("height", height)
    .style("background", "transparent");

  const xScale = buildXScale(plotterPoints, innerWidth, xGap);
  const yScale = buildYScale(plotterPoints, innerHeight, yGap);

  originalXDomainRef.current = xScale.domain().slice();
  originalYDomainRef.current = yScale.domain().slice();

  const clipId = "plot-clip-" + Math.random().toString(36).slice(2);
  svg
    .append("defs")
    .append("clipPath")
    .attr("id", clipId)
    .append("rect")
    .attr("width", innerWidth)
    .attr("height", innerHeight);

  const rootGroup = svg
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  const plotGroup = rootGroup.append("g").attr("clip-path", `url(#${clipId})`);
  const contentGroup = plotGroup.append("g");

  renderAxes(rootGroup, xScale, yScale, innerWidth, innerHeight);
  renderGrid(contentGroup, xScale, yScale, innerWidth, innerHeight);

  const initialVisiblePoints = filterVisiblePoints(
    plotterPoints,
    (val) => xScale(val),
    (val) => yScale(val),
    innerWidth,
    innerHeight,
    CELL_SIZE,
  );

  const baseCellSize = computeAdaptiveCellSize(
    initialVisiblePoints,
    (val) => xScale(val),
    (val) => yScale(val),
  );

  const originalDomainSpanX = xScale.domain()[1] - xScale.domain()[0];
  const originalDomainSpanY = yScale.domain()[1] - yScale.domain()[0];

  const initialEffectiveImageCount = computeEffectiveImageCount(
    baseCellSize,
    imageCount,
  );

  renderImagePoints(
    contentGroup,
    initialVisiblePoints,
    xScale,
    yScale,
    initialEffectiveImageCount,
    tooltipElement,
    baseCellSize,
  );

  const redrawContext = {
    contentGroup,
    rootGroup,
    xScale,
    yScale,
    innerWidth,
    innerHeight,
    plotterPoints,
    imageCount,
    tooltipElement,
    baseCellSize,
    originalDomainSpanX,
    originalDomainSpanY,
  };

  const triggerRedraw = () => redrawPlotContent(redrawContext);

  const brushGroup = plotGroup.append("g").attr("class", "d3-brush");
  const panOverlay = plotGroup
    .append("rect")
    .attr("class", "d3-pan-overlay")
    .attr("width", innerWidth)
    .attr("height", innerHeight)
    .attr("fill", "transparent")
    .style("display", "none");

  const brush = buildBrush(
    xScale,
    yScale,
    innerWidth,
    innerHeight,
    brushGroup,
    triggerRedraw,
  );
  const panDrag = buildPanDrag(
    xScale,
    yScale,
    innerWidth,
    innerHeight,
    triggerRedraw,
  );

  attachWheelZoom(
    svg,
    margin,
    xScale,
    yScale,
    innerWidth,
    innerHeight,
    triggerRedraw,
  );
  attachDoubleClickReset(
    svg,
    xScale,
    yScale,
    originalXDomainRef,
    originalYDomainRef,
    triggerRedraw,
  );

  const setActiveInteractionMode = (mode) => {
    if (mode === INTERACTION_MODES.ZOOM) {
      panOverlay.style("display", "none");
      panOverlay.on(".drag", null);
      brushGroup.style("display", null);
      brushGroup.call(brush);
    } else {
      brushGroup.style("display", "none");
      brushGroup.on(".brush", null);
      panOverlay.style("display", null);
      panOverlay.call(panDrag);
    }
  };

  const controls = buildPlotControls(
    xScale,
    yScale,
    originalXDomainRef,
    originalYDomainRef,
    triggerRedraw,
  );

  return { controls, setActiveInteractionMode };
}

/* ─── Scale Builders ────────────────────────────────────────────── */

function buildXScale(plotterPoints, innerWidth, xGap) {
  const xExtent = d3.extent(plotterPoints, (point) => point.x);
  const padding = (xExtent[1] - xExtent[0]) * 0.15 || 5;
  const xSpacingScale = xGap / 10;

  return d3
    .scaleLinear()
    .domain([xExtent[0] - padding, xExtent[1] + padding])
    .range([0, innerWidth * xSpacingScale]);
}

function buildYScale(plotterPoints, innerHeight, yGap) {
  const yExtent = d3.extent(plotterPoints, (point) => point.y);
  const padding = (yExtent[1] - yExtent[0]) * 0.15 || 5;
  const ySpacingScale = yGap / 10;

  return d3
    .scaleLinear()
    .domain([yExtent[0] - padding, yExtent[1] + padding])
    .range([innerHeight * ySpacingScale, 0]);
}

/* ─── Brush Zoom ────────────────────────────────────────────────── */

function buildBrush(
  xScale,
  yScale,
  innerWidth,
  innerHeight,
  brushGroup,
  redrawCallback,
) {
  const brush = d3
    .brush()
    .extent([
      [0, 0],
      [innerWidth, innerHeight],
    ])
    .on("end", (event) => {
      handleBrushEnd(event, brush, brushGroup, xScale, yScale, redrawCallback);
    });

  return brush;
}

function handleBrushEnd(
  event,
  brush,
  brushGroup,
  xScale,
  yScale,
  redrawCallback,
) {
  const selection = event.selection;
  if (!selection) return;

  const [[pixelX0, pixelY0], [pixelX1, pixelY1]] = selection;
  const selectionWidth = pixelX1 - pixelX0;
  const selectionHeight = pixelY1 - pixelY0;

  if (
    selectionWidth < BRUSH_ZOOM.minimumSelectionPixels ||
    selectionHeight < BRUSH_ZOOM.minimumSelectionPixels
  ) {
    brushGroup.call(brush.move, null);
    return;
  }

  logChartInteractionEvent({
    interactionType: "ZOOM_IN",
    visualizationLibrary: "D3",
    interactionSource: "brush",
  });

  const newXDomain = [xScale.invert(pixelX0), xScale.invert(pixelX1)];
  const newYDomain = [yScale.invert(pixelY1), yScale.invert(pixelY0)];

  xScale.domain(newXDomain);
  yScale.domain(newYDomain);

  brushGroup.call(brush.move, null);
  redrawCallback();
}

/* ─── Pan Drag ──────────────────────────────────────────────────── */

function buildPanDrag(xScale, yScale, innerWidth, innerHeight, redrawCallback) {
  let startXDomain = null;
  let startYDomain = null;

  return d3
    .drag()
    .on("start", () => {
      logChartInteractionEvent({
        interactionType: "PAN",
        visualizationLibrary: "D3",
        interactionSource: "drag",
      });
      startXDomain = xScale.domain().slice();
      startYDomain = yScale.domain().slice();
    })
    .on("drag", (event) => {
      if (!startXDomain || !startYDomain) return;

      const xSpanPerPixel = (startXDomain[1] - startXDomain[0]) / innerWidth;
      const ySpanPerPixel = (startYDomain[1] - startYDomain[0]) / innerHeight;

      const domainDeltaX = -event.dx * xSpanPerPixel;
      const domainDeltaY = event.dy * ySpanPerPixel;

      const currentXDomain = xScale.domain();
      const currentYDomain = yScale.domain();

      xScale.domain([
        currentXDomain[0] + domainDeltaX,
        currentXDomain[1] + domainDeltaX,
      ]);
      yScale.domain([
        currentYDomain[0] + domainDeltaY,
        currentYDomain[1] + domainDeltaY,
      ]);

      redrawCallback();
    })
    .on("end", () => {
      startXDomain = null;
      startYDomain = null;
    });
}

/* ─── Wheel Zoom ────────────────────────────────────────────────── */

function attachWheelZoom(
  svg,
  margin,
  xScale,
  yScale,
  innerWidth,
  innerHeight,
  redrawCallback,
) {
  svg.on(
    "wheel.zoom",
    (event) => {
      event.preventDefault();
      handleWheelZoom(
        event,
        margin,
        xScale,
        yScale,
        innerWidth,
        innerHeight,
        redrawCallback,
      );
    },
    { passive: false },
  );
}

function handleWheelZoom(
  event,
  margin,
  xScale,
  yScale,
  innerWidth,
  innerHeight,
  redrawCallback,
) {
  const zoomFactor = Math.exp(-event.deltaY * WHEEL_ZOOM_SENSITIVITY);

  const svgRect = event.currentTarget.getBoundingClientRect();
  const cursorX = event.clientX - svgRect.left - margin.left;
  const cursorY = event.clientY - svgRect.top - margin.top;

  const isCursorInsidePlot =
    cursorX >= 0 &&
    cursorX <= innerWidth &&
    cursorY >= 0 &&
    cursorY <= innerHeight;

  if (!isCursorInsidePlot) return;

  const isZoomIn = event.deltaY < 0;
  logChartInteractionEvent({
    interactionType: isZoomIn ? "ZOOM_IN" : "ZOOM_OUT",
    visualizationLibrary: "D3",
    interactionSource: "wheel",
  });

  const anchorDataX = xScale.invert(cursorX);
  const anchorDataY = yScale.invert(cursorY);

  zoomDomainAroundAnchor(xScale, anchorDataX, zoomFactor);
  zoomDomainAroundAnchor(yScale, anchorDataY, zoomFactor);

  redrawCallback();
}

/* ─── Double-Click Reset ───────────────────────────────────────── */

function attachDoubleClickReset(
  svg,
  xScale,
  yScale,
  originalXDomainRef,
  originalYDomainRef,
  redrawCallback,
) {
  svg.on("dblclick.zoom", () => {
    logChartInteractionEvent({
      interactionType: "RESET",
      visualizationLibrary: "D3",
      interactionSource: "double_click",
    });
    resetDomains(xScale, yScale, originalXDomainRef, originalYDomainRef);
    redrawCallback();
  });
}

/* ─── Domain Manipulation Helpers ───────────────────────────────── */

function zoomDomainAroundAnchor(scale, anchorValue, zoomFactor) {
  const [domainMin, domainMax] = scale.domain();
  const newMin = anchorValue - (anchorValue - domainMin) / zoomFactor;
  const newMax = anchorValue + (domainMax - anchorValue) / zoomFactor;
  scale.domain([newMin, newMax]);
}

function zoomDomainAroundCenter(scale, zoomFactor) {
  const [domainMin, domainMax] = scale.domain();
  const center = (domainMin + domainMax) / 2;
  zoomDomainAroundAnchor(scale, center, zoomFactor);
}

function resetDomains(xScale, yScale, originalXDomainRef, originalYDomainRef) {
  xScale.domain(originalXDomainRef.current.slice());
  yScale.domain(originalYDomainRef.current.slice());
}

/* ─── Plot Controls (Button Handlers) ──────────────────────────── */

function buildPlotControls(
  xScale,
  yScale,
  originalXDomainRef,
  originalYDomainRef,
  redrawCallback,
) {
  return {
    zoomIn: () => {
      logChartInteractionEvent({
        interactionType: "ZOOM_IN",
        visualizationLibrary: "D3",
        interactionSource: "button",
      });
      zoomDomainAroundCenter(xScale, ZOOM_SCALE_FACTOR);
      zoomDomainAroundCenter(yScale, ZOOM_SCALE_FACTOR);
      redrawCallback();
    },
    zoomOut: () => {
      logChartInteractionEvent({
        interactionType: "ZOOM_OUT",
        visualizationLibrary: "D3",
        interactionSource: "button",
      });
      zoomDomainAroundCenter(xScale, 1 / ZOOM_SCALE_FACTOR);
      zoomDomainAroundCenter(yScale, 1 / ZOOM_SCALE_FACTOR);
      redrawCallback();
    },
    resetZoom: () => {
      logChartInteractionEvent({
        interactionType: "RESET",
        visualizationLibrary: "D3",
        interactionSource: "button",
      });
      resetDomains(xScale, yScale, originalXDomainRef, originalYDomainRef);
      redrawCallback();
    },
  };
}

/* ─── Content Redraw Pipeline ───────────────────────────────────── */

function redrawPlotContent(context) {
  const {
    contentGroup,
    rootGroup,
    xScale,
    yScale,
    innerWidth,
    innerHeight,
    plotterPoints,
    imageCount,
    tooltipElement,
    baseCellSize,
    originalDomainSpanX,
    originalDomainSpanY,
  } = context;

  /* Compute zoom factor from domain ratio so images grow when zoomed in,
     matching the transform-based magnification of Recharts/Konva/PixiJS. */
  const currentSpanX = xScale.domain()[1] - xScale.domain()[0];
  const currentSpanY = yScale.domain()[1] - yScale.domain()[0];
  const zoomFactorX = originalDomainSpanX / currentSpanX;
  const zoomFactorY = originalDomainSpanY / currentSpanY;
  const zoomFactor = Math.min(zoomFactorX, zoomFactorY);

  const zoomedCellSize = baseCellSize * zoomFactor;

  const visiblePoints = filterVisiblePoints(
    plotterPoints,
    (val) => xScale(val),
    (val) => yScale(val),
    innerWidth,
    innerHeight,
    zoomedCellSize,
  );

  const effectiveImageCount = computeEffectiveImageCount(
    zoomedCellSize,
    imageCount,
  );

  contentGroup.selectAll(".grid-lines, .image-point").remove();

  renderGrid(contentGroup, xScale, yScale, innerWidth, innerHeight);
  renderImagePoints(
    contentGroup,
    visiblePoints,
    xScale,
    yScale,
    effectiveImageCount,
    tooltipElement,
    zoomedCellSize,
  );

  updateAxes(rootGroup, xScale, yScale);
}

/* ─── Axes ──────────────────────────────────────────────────────── */

function renderAxes(container, xScale, yScale, innerWidth, innerHeight) {
  container
    .append("g")
    .attr("class", "x-axis")
    .attr("transform", `translate(0,${innerHeight})`)
    .call(d3.axisBottom(xScale).ticks(8))
    .selectAll("text")
    .attr("fill", "#888");

  container
    .append("g")
    .attr("class", "y-axis")
    .call(d3.axisLeft(yScale).ticks(6))
    .selectAll("text")
    .attr("fill", "#888");

  styleAxisElements(container);
}

function updateAxes(container, xScale, yScale) {
  container.select(".x-axis").call(d3.axisBottom(xScale).ticks(8));
  container.select(".y-axis").call(d3.axisLeft(yScale).ticks(6));

  container.selectAll(".x-axis text, .y-axis text").attr("fill", "#888");
  styleAxisElements(container);
}

function styleAxisElements(container) {
  container.selectAll(".x-axis line, .y-axis line").attr("stroke", "#555");
  container.selectAll(".x-axis path, .y-axis path").attr("stroke", "#555");
}

/* ─── Grid ──────────────────────────────────────────────────────── */

function renderGrid(container, xScale, yScale, innerWidth, innerHeight) {
  const gridGroup = container.append("g").attr("class", "grid-lines");

  gridGroup
    .selectAll("line.horizontal")
    .data(yScale.ticks(6))
    .enter()
    .append("line")
    .attr("class", "horizontal")
    .attr("x1", 0)
    .attr("x2", innerWidth)
    .attr("y1", (tick) => yScale(tick))
    .attr("y2", (tick) => yScale(tick))
    .attr("stroke", "#2a2a3e")
    .attr("stroke-dasharray", "3 3");

  gridGroup
    .selectAll("line.vertical")
    .data(xScale.ticks(8))
    .enter()
    .append("line")
    .attr("class", "vertical")
    .attr("x1", (tick) => xScale(tick))
    .attr("x2", (tick) => xScale(tick))
    .attr("y1", 0)
    .attr("y2", innerHeight)
    .attr("stroke", "#2a2a3e")
    .attr("stroke-dasharray", "3 3");
}

/* ─── Image Points ──────────────────────────────────────────────── */

function renderImagePoints(
  container,
  plotterPoints,
  xScale,
  yScale,
  imageCount,
  tooltipElement,
  cellSize = CELL_SIZE,
) {
  const tooltip = d3.select(tooltipElement);

  plotterPoints.forEach((point) => {
    const centerX = xScale(point.x);
    const centerY = yScale(point.y);
    const positions = computeImagePositions(
      centerX,
      centerY,
      cellSize,
      cellSize,
      imageCount,
    );

    const pointGroup = container.append("g").attr("class", "image-point");

    positions.forEach((position) => {
      pointGroup
        .append("image")
        .attr("href", point.image)
        .attr("x", position.x)
        .attr("y", position.y)
        .attr("width", position.width)
        .attr("height", position.height)
        .attr("preserveAspectRatio", "xMidYMid meet")
        .style("cursor", "pointer");
    });

    pointGroup
      .on("mouseenter", (event) => showTooltip(tooltip, event, point))
      .on("mousemove", (event) => moveTooltip(tooltip, event))
      .on("mouseleave", () => hideTooltip(tooltip));
  });
}

/* ─── Tooltip ───────────────────────────────────────────────────── */

function showTooltip(tooltip, event, point) {
  tooltip
    .style("display", "block")
    .html(
      `<div class="tooltip-label">${point.label}</div>` +
        `<div class="tooltip-meta">` +
        `<span>Interval: ${point.meta.interval}s</span>` +
        `<span>Angle: ${point.meta.angle}°</span>` +
        `<span>Quality: ${point.meta.quality}</span>` +
        `</div>`,
    );

  moveTooltip(tooltip, event);
}

function moveTooltip(tooltip, event) {
  const containerRect = event.currentTarget
    .closest(".viewer-container")
    ?.getBoundingClientRect();
  if (!containerRect) return;

  tooltip
    .style("left", `${event.clientX - containerRect.left + 12}px`)
    .style("top", `${event.clientY - containerRect.top - 10}px`);
}

function hideTooltip(tooltip) {
  tooltip.style("display", "none");
}

export default D3Plotter;

```

---

# src\components\DataPointCountControl.jsx

```jsx
import { useState, useCallback } from "react";

const MIN_DATA_POINTS = 1;
const MAX_DATA_POINTS = 1000;
const SLIDER_STEP = 1;

function DataPointCountControl({ dataPointCount, onDataPointCountChange }) {
  const [inputValue, setInputValue] = useState(String(dataPointCount));

  const handleSliderChange = useCallback(
    (event) => {
      const newCount = Number(event.target.value);
      setInputValue(String(newCount));
      onDataPointCountChange(newCount);
    },
    [onDataPointCountChange],
  );

  const handleInputChange = useCallback((event) => {
    setInputValue(event.target.value);
  }, []);

  const handleInputBlur = useCallback(() => {
    const parsedValue = parseInt(inputValue, 10);

    if (Number.isNaN(parsedValue)) {
      setInputValue(String(dataPointCount));
      return;
    }

    const clampedValue = Math.max(
      MIN_DATA_POINTS,
      Math.min(parsedValue, MAX_DATA_POINTS),
    );

    setInputValue(String(clampedValue));
    onDataPointCountChange(clampedValue);
  }, [inputValue, dataPointCount, onDataPointCountChange]);

  const handleInputKeyDown = useCallback(
    (event) => {
      if (event.key === "Enter") {
        handleInputBlur();
      }
    },
    [handleInputBlur],
  );

  return (
    <div className="data-point-control">
      <label className="data-point-label" htmlFor="dataPointSlider">
        Data Points:
      </label>

      <input
        id="dataPointSlider"
        type="range"
        min={MIN_DATA_POINTS}
        max={MAX_DATA_POINTS}
        step={SLIDER_STEP}
        value={dataPointCount}
        onChange={handleSliderChange}
        className="data-point-slider"
      />

      <input
        type="number"
        min={MIN_DATA_POINTS}
        max={MAX_DATA_POINTS}
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        onKeyDown={handleInputKeyDown}
        className="data-point-input"
      />

      <span className="data-point-count-badge">{dataPointCount}</span>
    </div>
  );
}

export default DataPointCountControl;

```

---

# src\components\DeckGLPlotter.jsx

```jsx
import { useState, useMemo, useRef, useEffect } from "react";
import DeckGL from "@deck.gl/react";
import { OrthographicView } from "@deck.gl/core";
import { IconLayer, TextLayer } from "@deck.gl/layers";
import * as d3 from "d3";

import { usePlotterData } from "../lib/plotterData";
import { computeImagePositions } from "../lib/gridLayout";

import { CELL_SIZE, PLOT_DIMENSIONS, PLOT_MARGIN } from "../lib/constants";

import PlotterControls from "./PlotterControls";

const ORTHOGRAPHIC_VIEW = new OrthographicView({
  id: "orthographic-view",
  flipY: true,
});

const ZOOM_MIN = -4;
const ZOOM_MAX = 8;

const BASE_X_GAP = 10;
const BASE_Y_GAP = 10;

function DeckGLPlotter({ imageCount, xGap, yGap }) {
  const { plotterPoints, isLoading, loadError } = usePlotterData();

  if (isLoading) {
    return <div className="plotter-loading">Loading data…</div>;
  }

  if (loadError) {
    return <div className="plotter-error">Error: {loadError}</div>;
  }

  return (
    <DeckGLCanvas
      plotterPoints={plotterPoints}
      imageCount={imageCount}
      xGap={xGap}
      yGap={yGap}
    />
  );
}

function DeckGLCanvas({ plotterPoints, imageCount, xGap, yGap }) {
  const containerRef = useRef(null);

  const [containerWidth, setContainerWidth] = useState(PLOT_DIMENSIONS.width);

  const [hoveredPoint, setHoveredPoint] = useState(null);

  const [tooltipPos, setTooltipPos] = useState({
    x: 0,
    y: 0,
  });

  const [viewState, setViewState] = useState({
    target: [0, 0, 0],
    zoom: 0,
  });

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];

      if (entry) {
        setContainerWidth(entry.contentRect.width);
      }
    });

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  const width = containerWidth;
  const height = PLOT_DIMENSIONS.height;

  const innerWidth = Math.max(
    width - PLOT_MARGIN.left - PLOT_MARGIN.right,
    320,
  );

  const innerHeight = Math.max(
    height - PLOT_MARGIN.top - PLOT_MARGIN.bottom,
    240,
  );

  /**
   * NORMALIZE DATA
   */
  const normalizedPoints = useMemo(() => {
    const xScale = xGap / BASE_X_GAP;
    const yScale = yGap / BASE_Y_GAP;

    return plotterPoints.map((point) => ({
      ...point,
      scaledX: point.x * xScale,
      scaledY: point.y * yScale,
    }));
  }, [plotterPoints, xGap, yGap]);

  /**
   * WORLD EXTENTS
   */
  const xExtent = useMemo(() => {
    return extentWithPadding(normalizedPoints.map((d) => d.scaledX));
  }, [normalizedPoints]);

  const yExtent = useMemo(() => {
    return extentWithPadding(normalizedPoints.map((d) => d.scaledY));
  }, [normalizedPoints]);

  /**
   * FIT DATA INITIALLY
   */
  useEffect(() => {
    const domainWidth = xExtent[1] - xExtent[0];
    const domainHeight = yExtent[1] - yExtent[0];

    const scaleX = innerWidth / domainWidth;
    const scaleY = innerHeight / domainHeight;

    const scale = Math.min(scaleX, scaleY);

    const zoom = Math.log2(scale);

    const centerX = (xExtent[0] + xExtent[1]) / 2;
    const centerY = (yExtent[0] + yExtent[1]) / 2;

    Promise.resolve().then(() => {
      setViewState({
        target: [centerX, centerY, 0],
        zoom,
      });
    });
  }, [xExtent, yExtent, innerWidth, innerHeight]);

  /**
   * IMAGE DATA
   */
  const imageData = useMemo(() => {
    const items = [];

    for (const point of normalizedPoints) {
      const positions = computeImagePositions(
        point.scaledX,
        point.scaledY,
        CELL_SIZE,
        CELL_SIZE,
        imageCount,
      );

      positions.forEach((position, index) => {
        if (!point.image) return;

        items.push({
          id: `${point.id}-${index}`,

          x: position.x,
          y: position.y,

          width: position.width,
          height: position.height,

          image: point.image,

          point,
        });
      });
    }

    return items;
  }, [normalizedPoints, imageCount]);

  /**
   * GRID LINES
   */


  /**
   * LAYERS
   */
  const layers = useMemo(() => {
    return [
      new IconLayer({
        id: "image-layer",

        data: imageData,

        pickable: true,

        billboard: false,

        sizeUnits: "common",

        getPosition: (d) => [d.x, d.y],

        getIcon: (d) => ({
          url: d.image,
          width: d.width,
          height: d.height,
        }),

        getSize: (d) => d.width,

        onHover: (info) => {
          if (info.object) {
            setHoveredPoint(info.object.point);

            setTooltipPos({
              x: info.x,
              y: info.y,
            });
          } else {
            setHoveredPoint(null);
          }
        },

        updateTriggers: {
          getIcon: imageData,
        },
      }),

      new TextLayer({
        id: "axis-labels",

        data: [
          ...d3.ticks(xExtent[0], xExtent[1], 10).map((x) => ({
            position: [x, yExtent[0] - 10],
            text: formatTick(x),
          })),

          ...d3.ticks(yExtent[0], yExtent[1], 8).map((y) => ({
            position: [xExtent[0] - 10, y],
            text: formatTick(y),
          })),
        ],

        getPosition: (d) => d.position,

        getText: (d) => d.text,

        getSize: 12,

        getColor: [140, 140, 140],

        getTextAnchor: "middle",

        getAlignmentBaseline: "center",
      }),
    ];
  }, [imageData, xExtent, yExtent]);

  /**
   * CONTROLS
   */
  const handleZoomIn = () => {
    setViewState((prev) => ({
      ...prev,
      zoom: Math.min(prev.zoom + 0.5, ZOOM_MAX),
    }));
  };

  const handleZoomOut = () => {
    setViewState((prev) => ({
      ...prev,
      zoom: Math.max(prev.zoom - 0.5, ZOOM_MIN),
    }));
  };

  const handleReset = () => {
    const domainWidth = xExtent[1] - xExtent[0];
    const domainHeight = yExtent[1] - yExtent[0];

    const scaleX = innerWidth / domainWidth;
    const scaleY = innerHeight / domainHeight;

    const scale = Math.min(scaleX, scaleY);

    const zoom = Math.log2(scale);

    setViewState({
      target: [(xExtent[0] + xExtent[1]) / 2, (yExtent[0] + yExtent[1]) / 2, 0],
      zoom,
    });
  };

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
      }}
    >
      <PlotterControls
        zoomLevel={Number(Math.pow(2, viewState.zoom).toFixed(2))}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
      />

      <div
        style={{
          position: "relative",
          width: "100%",
          height,
          background: "#16213e",
          overflow: "hidden",
        }}
      >
        <DeckGL
          views={ORTHOGRAPHIC_VIEW}
          controller={{
            dragPan: true,
            scrollZoom: true,
            doubleClickZoom: true,
            touchZoom: true,
            touchRotate: false,
            keyboard: false,
          }}
          layers={layers}
          width={width}
          height={height}
          viewState={viewState}
          onViewStateChange={({ viewState }) => {
            setViewState({
              ...viewState,
              zoom: clamp(viewState.zoom, ZOOM_MIN, ZOOM_MAX),
            });
          }}
          parameters={{
            depthTest: false,
            blend: true,
          }}
          style={{
            position: "absolute",
            inset: 0,
          }}
        />

        {hoveredPoint && (
          <div
            className="plotter-tooltip"
            style={{
              display: "block",
              position: "fixed",
              left: tooltipPos.x + 12,
              top: tooltipPos.y - 10,
              pointerEvents: "none",
              zIndex: 1000,
            }}
          >
            <div className="tooltip-label">{hoveredPoint.label}</div>

            <div className="tooltip-meta">
              <span>Interval: {hoveredPoint.meta.interval}s</span>

              <span>Angle: {hoveredPoint.meta.angle}°</span>

              <span>Quality: {hoveredPoint.meta.quality}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function extentWithPadding(values) {
  if (!values.length) return [0, 1];

  const min = Math.min(...values);
  const max = Math.max(...values);

  const span = max - min;

  const pad = span === 0 ? 5 : Math.max(span * 0.18, 1);

  return [min - pad, max + pad];
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function formatTick(value) {
  if (Number.isInteger(value)) {
    return String(value);
  }

  return parseFloat(Number(value).toPrecision(4)).toString();
}

export default DeckGLPlotter;

```

---

# src\components\EChartsPlotter.jsx

```jsx
import { useMemo, useCallback, useRef } from "react";
import ReactECharts from "echarts-for-react";
import { usePlotterData } from "../lib/plotterData";
import { CELL_SIZE } from "../lib/constants";
import PlotterControls from "./PlotterControls";

function EChartsPlotter({ imageCount, xGap, yGap }) {
  const { plotterPoints, isLoading, loadError } = usePlotterData();

  if (isLoading) return <div className="plotter-loading">Loading data…</div>;
  if (loadError) return <div className="plotter-error">Error: {loadError}</div>;

  return (
    <EChartsCanvas
      plotterPoints={plotterPoints}
      imageCount={imageCount}
      xGap={xGap}
      yGap={yGap}
    />
  );
}

function EChartsCanvas({ plotterPoints, imageCount, xGap, yGap }) {
  const echartsRef = useRef(null);

  const chartOption = useMemo(
    () => buildChartOption(plotterPoints, imageCount, xGap, yGap),
    [plotterPoints, imageCount, xGap, yGap],
  );

  const handleChartEvents = useCallback(() => ({}), []);

  const handleZoom = (scale) => {
    if (!echartsRef.current) return;
    const instance = echartsRef.current.getEchartsInstance();
    const option = instance.getOption();
    const dataZoom = option.dataZoom[0];
    const range = dataZoom.end - dataZoom.start;
    const newRange = range * scale;
    const center = (dataZoom.end + dataZoom.start) / 2;
    instance.dispatchAction({
      type: "dataZoom",
      start: Math.max(0, center - newRange / 2),
      end: Math.min(100, center + newRange / 2),
    });
  };

  const handleReset = () => {
    if (!echartsRef.current) return;
    const instance = echartsRef.current.getEchartsInstance();
    instance.dispatchAction({ type: "dataZoom", start: 0, end: 100 });
  };

  return (
    <div style={{ position: "relative" }}>
      <PlotterControls
        onZoomIn={() => handleZoom(1 / 1.5)}
        onZoomOut={() => handleZoom(1.5)}
        onReset={handleReset}
      />
      <ReactECharts
        ref={echartsRef}
        option={chartOption}
        style={{ height: 550, width: "100%" }}
        notMerge
        opts={{ renderer: "canvas" }}
        onEvents={handleChartEvents()}
      />
    </div>
  );
}

function buildChartOption(plotterPoints, imageCount, xGap, yGap) {
  const gridConfig = getGridConfig(imageCount);
  const subCellWidth = CELL_SIZE;
  const subCellHeight = CELL_SIZE;

  const xValues = plotterPoints.map((p) => p.x);
  const yValues = plotterPoints.map((p) => p.y);

  const xMin = Math.min(...xValues);
  const xMax = Math.max(...xValues);
  const yMin = Math.min(...yValues);
  const yMax = Math.max(...yValues);

  const xPadding = (xMax - xMin) * 0.15 || 5;
  const yPadding = (yMax - yMin) * 0.15 || 5;

  const xCenter = (xMax + xMin) / 2;
  const yCenter = (yMax + yMin) / 2;

  const xSpacingScale = xGap / 10;
  const ySpacingScale = yGap / 10;

  const xRange = (xMax - xMin + 2 * xPadding) / xSpacingScale;
  const yRange = (yMax - yMin + 2 * yPadding) / ySpacingScale;

  return {
    backgroundColor: "transparent",
    tooltip: {
      trigger: "item",
      formatter: formatTooltip,
    },
    xAxis: {
      type: "value",
      min: xCenter - xRange / 2,
      max: xCenter + xRange / 2,
      axisLine: { lineStyle: { color: "#555" } },
      axisLabel: { color: "#888" },
      splitLine: { lineStyle: { color: "#2a2a3e", type: "dashed" } },
    },
    yAxis: {
      type: "value",
      min: yCenter - yRange / 2,
      max: yCenter + yRange / 2,
      axisLine: { lineStyle: { color: "#555" } },
      axisLabel: { color: "#888" },
      splitLine: { lineStyle: { color: "#2a2a3e", type: "dashed" } },
    },
    dataZoom: [
      { type: "inside", xAxisIndex: 0 },
      { type: "inside", yAxisIndex: 0 },
    ],
    series: [
      {
        type: "custom",
        renderItem: function (params, api) {
          const x = api.value(0);
          const y = api.value(1);
          const coord = api.coord([x, y]);

          const children = [];
          let subIndex = 0;
          for (let row = 0; row < gridConfig.rows; row++) {
            for (let col = 0; col < gridConfig.columns; col++) {
              if (subIndex >= imageCount) break;

              const xPos =
                col * (subCellWidth + xGap) -
                ((gridConfig.columns - 1) * (subCellWidth + xGap)) / 2;
              const yPos =
                row * (subCellHeight + yGap) -
                ((gridConfig.rows - 1) * (subCellHeight + yGap)) / 2;

              children.push({
                type: "image",
                style: {
                  image: api.value(2),
                  x: coord[0] + xPos - subCellWidth / 2,
                  y: coord[1] + yPos - subCellHeight / 2,
                  width: subCellWidth,
                  height: subCellHeight,
                },
              });

              subIndex++;
            }
          }
          return { type: "group", children: children };
        },
        data: plotterPoints.map((point) => ({
          value: [point.x, point.y, point.image],
          name: point.label,
          meta: point.meta,
        })),
      },
    ],
  };
}

// Removed graphic element builders since we are using custom series

function getGridConfig(imageCount) {
  const configs = {
    1: { rows: 1, columns: 1 },
    2: { rows: 1, columns: 2 },
    4: { rows: 2, columns: 2 },
    8: { rows: 2, columns: 4 },
  };

  return configs[imageCount] || configs[1];
}

function formatTooltip(params) {
  if (!params || !params.data) return "";

  const { name, data } = params;
  const meta = data.meta;

  return (
    `<strong>${name}</strong><br/>` +
    `Interval: ${meta.interval}s<br/>` +
    `Angle: ${meta.angle}°<br/>` +
    `Quality: ${meta.quality}`
  );
}

export default EChartsPlotter;

```

---

# src\components\ImageCountSelector.jsx

```jsx
import { MAX_IMAGES_PER_POINT, MIN_IMAGES_PER_POINT } from "../lib/constants";

function ImageCountSelector({ imageCount, setImageCount }) {
  return (
    <div className="image-count-selector">
      <span className="selector-label">Images per point:</span>

      <input
        type="number"
        min={MIN_IMAGES_PER_POINT}
        max={MAX_IMAGES_PER_POINT}
        value={imageCount}
        onChange={(e) => setImageCount(e.target.value)}
        className="data-point-input"
      />

      <span
        style={{
          color: "#888",
          marginLeft: "10px",
        }}
      >
        Max: {MAX_IMAGES_PER_POINT}
      </span>
    </div>
  );
}

export default ImageCountSelector;

```

---

# src\components\KonvaPlotter.jsx

```jsx
import { useState, useRef, useCallback, useEffect, useMemo } from "react";
import {
  Stage,
  Layer,
  Image as KonvaImage,
  Text,
  Line,
  Rect,
  Group,
} from "react-konva";
import { usePlotterData } from "../lib/plotterData";
import { computeImagePositions } from "../lib/gridLayout";
import { CELL_SIZE, PLOT_DIMENSIONS, PLOT_MARGIN } from "../lib/constants";
import {
  computeAdaptiveCellSize,
  filterVisiblePoints,
  computeEffectiveImageCount,
} from "../lib/densityLayout";
import PlotterControls from "./PlotterControls";
import { logChartInteractionEvent } from "../lib/chartInteractionLogger";
import { useInteractionMode } from "../lib/interactionMode";
import { getCachedImageObject, preloadImageSources } from "../lib/imageCache";


const AXIS_TICK_COUNT = 8;
const EXTENT_PADDING_RATIO = 0.2;
const EXTENT_FALLBACK_PADDING = 5;
const ZOOM_STEP = 1.5;
const PINCH_ZOOM_SENSITIVITY = 0.01;
const ZOOM_MIN = 0.3;
const ZOOM_MAX = 100000;
const GRID_COLOR = "#2a2a3e";
const AXIS_LINE_COLOR = "#555555";
const TICK_LABEL_COLOR = "#aaaaaa";
const TICK_LABEL_FONT_SIZE = 11;
const BRUSH_FILL = "rgba(68, 147, 255, 0.15)";
const BRUSH_STROKE = "#4493ff";
const BRUSH_STROKE_WIDTH = 1.5;
const BRUSH_MIN_PIXELS = 5;

function KonvaPlotter({ imageCount, syntheticPoints }) {
  const { plotterPoints: fetchedPoints, isLoading, loadError } = usePlotterData();
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const plotterPoints = syntheticPoints || fetchedPoints;

  useEffect(() => {
    if (!plotterPoints || plotterPoints.length === 0) {
      setImagesLoaded(true);
      return;
    }
    const uniqueSources = [...new Set(plotterPoints.map((point) => point.image))];
    preloadImageSources(uniqueSources).then(() => {
      setImagesLoaded(true);
    });
  }, [plotterPoints]);

  if (!syntheticPoints && isLoading) return <div className="plotter-loading">Loading data…</div>;
  if (!syntheticPoints && loadError) return <div className="plotter-error">Error: {loadError}</div>;
  if (!imagesLoaded) return <div className="plotter-loading">Preloading images…</div>;

  return (
    <KonvaCanvas
      plotterPoints={plotterPoints}
      imageCount={imageCount}
    />
  );
}

function KonvaCanvas({ plotterPoints, imageCount }) {
  /* Hot-path viewport state stored in refs — mutations never trigger React
     reconciliation. A RAF-throttled forceUpdate flushes the view at ≤60 fps. */
  const scaleRef = useRef(1);
  const offsetRef = useRef({ x: 0, y: 0 });
  const rafPendingRef = useRef(false);
  const [, forceUpdate] = useState(0);

  /* React state only for things that need declarative rendering. */
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [brushRect, setBrushRect] = useState(null);

  const stageRef = useRef(null);
  const brushStartRef = useRef(null);
  const dragRef = useRef({ dragging: false, startX: 0, startY: 0, startOffset: { x: 0, y: 0 } });
  const draggableGroupRef = useRef(null);

  /* Schedule a single React flush per animation frame. */
  const scheduleUpdate = useCallback(() => {
    if (rafPendingRef.current) return;
    rafPendingRef.current = true;
    requestAnimationFrame(() => {
      rafPendingRef.current = false;
      forceUpdate((n) => n + 1);
    });
  }, []);

  const {
    interactionMode,
    setInteractionMode,
    isZoomMode,
    isPanMode,
  } = useInteractionMode();

  const innerWidth =
    PLOT_DIMENSIONS.width - PLOT_MARGIN.left - PLOT_MARGIN.right;
  const innerHeight =
    PLOT_DIMENSIONS.height - PLOT_MARGIN.top - PLOT_MARGIN.bottom;

  /* Read hot-path state from refs — always current, never stale. */
  const contentScale = scaleRef.current;
  const contentOffset = offsetRef.current;

  const { xScale, yScale, xExtent, yExtent } = buildScales(
    plotterPoints,
    innerWidth,
    innerHeight,
  );

  /* Domain-based visible region — shrinks as zoom increases, matching D3. */
  const visibleDomain = computeVisibleDomain(
    xExtent,
    yExtent,
    contentOffset,
    contentScale,
    innerWidth,
    innerHeight,
  );

  /* Dynamic scales recomputed from the visible domain — no matrix transform. */
  const dynamicXScale = buildLinearScale(
    visibleDomain.xMin,
    visibleDomain.xMax,
    0,
    innerWidth,
  );
  const dynamicYScale = buildLinearScale(
    visibleDomain.yMin,
    visibleDomain.yMax,
    innerHeight,
    0,
  );

  /* Cancel in-progress brush when switching to pan mode. */
  useEffect(() => {
    if (isPanMode) {
      brushStartRef.current = null;
      setBrushRect(null);
    }
  }, [isPanMode]);

  /* Base cell size computed once from the full dataset. */
  const adaptiveCellSizeBase = useMemo(
    () => computeAdaptiveCellSize(plotterPoints, xScale, yScale),
    [plotterPoints, xScale, yScale],
  );

  /* Zoom-scaled cell size — grows as domain shrinks. */
  const adaptiveCellSizeForRender = adaptiveCellSizeBase * contentScale;

  /* Viewport culling in screen-space. */
  const visiblePointsForRender = useMemo(() => {
    const xScreenFn = (val) => xScale(val) * contentScale + contentOffset.x;
    const yScreenFn = (val) => yScale(val) * contentScale + contentOffset.y;
    return filterVisiblePoints(
      plotterPoints,
      xScreenFn,
      yScreenFn,
      innerWidth,
      innerHeight,
      adaptiveCellSizeBase * contentScale,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [plotterPoints, xScale, yScale, contentScale, contentOffset.x, contentOffset.y, innerWidth, innerHeight, adaptiveCellSizeBase]);

  const effectiveImageCountForRender = computeEffectiveImageCount(
    adaptiveCellSizeForRender,
    imageCount,
  );

  /* ── Wheel zoom — mutates refs, schedules RAF flush ── */
  const handleWheel = useCallback(
    (event) => {
      event.evt.preventDefault();
      const stage = event.target.getStage();
      const pointerPosition = stage.getPointerPosition();

      if (!isPointerInsidePlotArea(pointerPosition, innerWidth, innerHeight))
        return;

      const nativeEvent = event.evt;
      const isPinchGesture = nativeEvent.ctrlKey;
      const scaleDelta = computeWheelScaleDelta(nativeEvent.deltaY, isPinchGesture);
      const currentScale = scaleRef.current;
      const currentOffset = offsetRef.current;
      const newScale = clampScale(currentScale * scaleDelta);

      logChartInteractionEvent({
        interactionType: scaleDelta > 1 ? "ZOOM_IN" : "ZOOM_OUT",
        visualizationLibrary: "Konva",
        interactionSource: "wheel",
      });

      const mouseRelX = pointerPosition.x - PLOT_MARGIN.left - currentOffset.x;
      const mouseRelY = pointerPosition.y - PLOT_MARGIN.top - currentOffset.y;

      const rawOffsetX = currentOffset.x - mouseRelX * (newScale / currentScale - 1);
      const rawOffsetY = currentOffset.y - mouseRelY * (newScale / currentScale - 1);
      const clampedOffset = clampContentOffset(rawOffsetX, rawOffsetY, newScale, innerWidth, innerHeight);

      scaleRef.current = newScale;
      offsetRef.current = clampedOffset;
      scheduleUpdate();
    },
    [innerWidth, innerHeight, scheduleUpdate],
  );

  /* ── Pan drag — mutates refs, schedules RAF flush ── */
  const handleStageMouseDown = useCallback(
    (event) => {
      const stage = event.target.getStage();
      const pointer = stage.getPointerPosition();
      if (!isPointerInsidePlotArea(pointer, innerWidth, innerHeight)) return;

      if (isPanMode) {
        logChartInteractionEvent({
          interactionType: "PAN",
          visualizationLibrary: "Konva",
          interactionSource: "drag",
        });
        setIsDragging(true);
        dragRef.current = {
          dragging: true,
          startX: pointer.x,
          startY: pointer.y,
          startOffset: { ...offsetRef.current },
        };
      } else if (isZoomMode) {
        const plotX = clampValue(pointer.x - PLOT_MARGIN.left, 0, innerWidth);
        const plotY = clampValue(pointer.y - PLOT_MARGIN.top, 0, innerHeight);
        brushStartRef.current = { x: plotX, y: plotY };
        setBrushRect({ x: plotX, y: plotY, width: 0, height: 0 });
      }
    },
    [isPanMode, isZoomMode, innerWidth, innerHeight],
  );

  const handleStageMouseMove = useCallback(
    (event) => {
      const stage = event.target.getStage();
      const pointer = stage.getPointerPosition();
      if (!pointer) return;

      if (dragRef.current.dragging) {
        const dx = pointer.x - dragRef.current.startX;
        const dy = pointer.y - dragRef.current.startY;
        const clamped = clampContentOffset(
          dragRef.current.startOffset.x + dx,
          dragRef.current.startOffset.y + dy,
          scaleRef.current,
          innerWidth,
          innerHeight,
        );
        offsetRef.current = clamped;
        scheduleUpdate();
        return;
      }

      if (brushStartRef.current) {
        const plotX = clampValue(pointer.x - PLOT_MARGIN.left, 0, innerWidth);
        const plotY = clampValue(pointer.y - PLOT_MARGIN.top, 0, innerHeight);
        const startPoint = brushStartRef.current;
        setBrushRect({
          x: Math.min(startPoint.x, plotX),
          y: Math.min(startPoint.y, plotY),
          width: Math.abs(plotX - startPoint.x),
          height: Math.abs(plotY - startPoint.y),
        });
      }
    },
    [innerWidth, innerHeight, scheduleUpdate],
  );

  const handleStageMouseUp = useCallback(
    (localBrushRect) => {
      if (dragRef.current.dragging) {
        setIsDragging(false);
        dragRef.current.dragging = false;
        return;
      }

      if (brushStartRef.current && localBrushRect) {
        const isTooSmall =
          localBrushRect.width < BRUSH_MIN_PIXELS ||
          localBrushRect.height < BRUSH_MIN_PIXELS;

        if (!isTooSmall) {
          logChartInteractionEvent({
            interactionType: "ZOOM_IN",
            visualizationLibrary: "Konva",
            interactionSource: "brush",
          });
          const zoomResult = convertBrushToZoom(
            localBrushRect,
            offsetRef.current,
            scaleRef.current,
            innerWidth,
            innerHeight,
          );
          scaleRef.current = zoomResult.scale;
          offsetRef.current = zoomResult.offset;
          scheduleUpdate();
        }
      }

      brushStartRef.current = null;
      setBrushRect(null);
    },
    [innerWidth, innerHeight, scheduleUpdate],
  );

  /* ── Button controls — mutate refs + scheduleUpdate ── */
  const handleZoomIn = useCallback(() => {
    logChartInteractionEvent({
      interactionType: "ZOOM_IN",
      visualizationLibrary: "Konva",
      interactionSource: "button",
    });
    const currentScale = scaleRef.current;
    const currentOffset = offsetRef.current;
    const centerX = innerWidth / 2;
    const centerY = innerHeight / 2;
    const newScale = clampScale(currentScale * ZOOM_STEP);
    const rawOffsetX = currentOffset.x - centerX * (newScale / currentScale - 1);
    const rawOffsetY = currentOffset.y - centerY * (newScale / currentScale - 1);
    scaleRef.current = newScale;
    offsetRef.current = clampContentOffset(rawOffsetX, rawOffsetY, newScale, innerWidth, innerHeight);
    scheduleUpdate();
  }, [innerWidth, innerHeight, scheduleUpdate]);

  const handleZoomOut = useCallback(() => {
    logChartInteractionEvent({
      interactionType: "ZOOM_OUT",
      visualizationLibrary: "Konva",
      interactionSource: "button",
    });
    const currentScale = scaleRef.current;
    const currentOffset = offsetRef.current;
    const centerX = innerWidth / 2;
    const centerY = innerHeight / 2;
    const newScale = clampScale(currentScale / ZOOM_STEP);
    const rawOffsetX = currentOffset.x - centerX * (newScale / currentScale - 1);
    const rawOffsetY = currentOffset.y - centerY * (newScale / currentScale - 1);
    scaleRef.current = newScale;
    offsetRef.current = clampContentOffset(rawOffsetX, rawOffsetY, newScale, innerWidth, innerHeight);
    scheduleUpdate();
  }, [innerWidth, innerHeight, scheduleUpdate]);

  const handleReset = useCallback(() => {
    logChartInteractionEvent({
      interactionType: "RESET",
      visualizationLibrary: "Konva",
      interactionSource: "button",
    });
    scaleRef.current = 1;
    offsetRef.current = { x: 0, y: 0 };
    scheduleUpdate();
  }, [scheduleUpdate]);

  const handleDoubleClick = useCallback(() => {
    logChartInteractionEvent({
      interactionType: "RESET",
      visualizationLibrary: "Konva",
      interactionSource: "double_click",
    });
    scaleRef.current = 1;
    offsetRef.current = { x: 0, y: 0 };
    scheduleUpdate();
  }, [scheduleUpdate]);

  const stageCursor = isPanMode
    ? (isDragging ? "grabbing" : "grab")
    : "crosshair";

  return (
    <div style={{ position: "relative" }}>
      <PlotterControls
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
        zoomLevel={contentScale}
        interactionMode={interactionMode}
        onModeChange={setInteractionMode}
      />
      <Stage
        ref={stageRef}
        width={PLOT_DIMENSIONS.width}
        height={PLOT_DIMENSIONS.height}
        onWheel={handleWheel}
        onDblClick={handleDoubleClick}
        onDblTap={handleDoubleClick}
        onMouseDown={handleStageMouseDown}
        onMouseMove={handleStageMouseMove}
        onMouseUp={() => handleStageMouseUp(brushRect)}
        onMouseLeave={() => handleStageMouseUp(brushRect)}
        style={{ cursor: stageCursor }}
      >
        {/* Static axis layer — grid and labels derived from current visible domain */}
        <Layer listening={false}>
          <PlotBackground innerWidth={innerWidth} innerHeight={innerHeight} />
          <AxisGrid
            visibleDomain={visibleDomain}
            innerWidth={innerWidth}
            innerHeight={innerHeight}
          />
          <AxisLabels
            visibleDomain={visibleDomain}
            innerWidth={innerWidth}
            innerHeight={innerHeight}
          />
          <AxisBorder innerWidth={innerWidth} innerHeight={innerHeight} />
        </Layer>

        {/* Clipped content layer — images positioned from domain-derived scales */}
        <Layer>
          <ClippedContentGroup innerWidth={innerWidth} innerHeight={innerHeight}>
            {visiblePointsForRender.map((point) => (
              <ImagePointGroup
                key={point.id}
                point={point}
                xScale={dynamicXScale}
                yScale={dynamicYScale}
                imageCount={effectiveImageCountForRender}
                cellSize={adaptiveCellSizeForRender}
                onHover={setHoveredPoint}
                onCursorMove={setCursorPosition}
              />
            ))}
          </ClippedContentGroup>
        </Layer>

        {/* Brush overlay layer — only rendered in zoom mode */}
        {isZoomMode && (
          <Layer listening={false}>
            <BrushSelectionOverlay brushRect={brushRect} />
          </Layer>
        )}
      </Stage>

      {hoveredPoint && (
        <PointTooltip
          hoveredPoint={hoveredPoint}
          cursorPosition={cursorPosition}
        />
      )}
    </div>
  );
}

function BrushSelectionOverlay({
  brushRect,
}) {
  return (
    <Group listening={false}>
      {/* Semi-transparent selection rectangle */}
      {brushRect && brushRect.width > 0 && brushRect.height > 0 && (
        <Rect
          x={PLOT_MARGIN.left + brushRect.x}
          y={PLOT_MARGIN.top + brushRect.y}
          width={brushRect.width}
          height={brushRect.height}
          fill={BRUSH_FILL}
          stroke={BRUSH_STROKE}
          strokeWidth={BRUSH_STROKE_WIDTH}
          listening={false}
        />
      )}
    </Group>
  );
}

function ClippedContentGroup({
  innerWidth,
  innerHeight,
  children,
}) {
  const plotLeft = PLOT_MARGIN.left;
  const plotTop = PLOT_MARGIN.top;

  const clipFunction = (ctx) => {
    ctx.rect(plotLeft, plotTop, innerWidth, innerHeight);
  };

  return (
    <Group clipFunc={clipFunction}>
      <Group
        x={plotLeft}
        y={plotTop}
        scaleX={1}
        scaleY={1}
      >
        {children}
      </Group>
    </Group>
  );
}

function PointTooltip({ hoveredPoint, cursorPosition }) {
  return (
    <div
      className="plotter-tooltip"
      style={{
        display: "block",
        position: "absolute",
        left: cursorPosition.x + 15,
        top: cursorPosition.y - 10,
        pointerEvents: "none",
      }}
    >
      <div className="tooltip-label">{hoveredPoint.label}</div>
      <div className="tooltip-meta">
        <span>Interval: {hoveredPoint.meta.interval}s</span>
        <span>Angle: {hoveredPoint.meta.angle}°</span>
        <span>Quality: {hoveredPoint.meta.quality}</span>
      </div>
    </div>
  );
}

function PlotBackground({ innerWidth, innerHeight }) {
  return (
    <Rect
      x={PLOT_MARGIN.left}
      y={PLOT_MARGIN.top}
      width={innerWidth}
      height={innerHeight}
      fill="#16213e"
    />
  );
}

function AxisBorder({ innerWidth, innerHeight }) {
  return (
    <Rect
      x={PLOT_MARGIN.left}
      y={PLOT_MARGIN.top}
      width={innerWidth}
      height={innerHeight}
      stroke={AXIS_LINE_COLOR}
      strokeWidth={1}
      listening={false}
    />
  );
}

function AxisGrid({ visibleDomain, innerWidth, innerHeight }) {
  const xTicks = buildTicks(
    visibleDomain.xMin,
    visibleDomain.xMax,
    AXIS_TICK_COUNT,
  );
  const yTicks = buildTicks(
    visibleDomain.yMin,
    visibleDomain.yMax,
    AXIS_TICK_COUNT,
  );

  const xScreenScale = buildLinearScale(
    visibleDomain.xMin,
    visibleDomain.xMax,
    0,
    innerWidth,
  );
  const yScreenScale = buildLinearScale(
    visibleDomain.yMin,
    visibleDomain.yMax,
    innerHeight,
    0,
  );

  const gridLines = [];

  xTicks.forEach((value, index) => {
    const xPos = PLOT_MARGIN.left + xScreenScale(value);
    if (xPos < PLOT_MARGIN.left || xPos > PLOT_MARGIN.left + innerWidth) return;
    gridLines.push(
      <Line
        key={`xgrid-${index}`}
        points={[xPos, PLOT_MARGIN.top, xPos, PLOT_MARGIN.top + innerHeight]}
        stroke={GRID_COLOR}
        strokeWidth={1}
        dash={[4, 4]}
        listening={false}
      />,
    );
  });

  yTicks.forEach((value, index) => {
    const yPos = PLOT_MARGIN.top + yScreenScale(value);
    if (yPos < PLOT_MARGIN.top || yPos > PLOT_MARGIN.top + innerHeight) return;
    gridLines.push(
      <Line
        key={`ygrid-${index}`}
        points={[PLOT_MARGIN.left, yPos, PLOT_MARGIN.left + innerWidth, yPos]}
        stroke={GRID_COLOR}
        strokeWidth={1}
        dash={[4, 4]}
        listening={false}
      />,
    );
  });

  return <>{gridLines}</>;
}

function AxisLabels({ visibleDomain, innerWidth, innerHeight }) {
  const xTicks = buildTicks(
    visibleDomain.xMin,
    visibleDomain.xMax,
    AXIS_TICK_COUNT,
  );
  const yTicks = buildTicks(
    visibleDomain.yMin,
    visibleDomain.yMax,
    AXIS_TICK_COUNT,
  );

  const xScreenScale = buildLinearScale(
    visibleDomain.xMin,
    visibleDomain.xMax,
    0,
    innerWidth,
  );
  const yScreenScale = buildLinearScale(
    visibleDomain.yMin,
    visibleDomain.yMax,
    innerHeight,
    0,
  );

  const tickLabels = [];

  xTicks.forEach((value, index) => {
    const xPos = PLOT_MARGIN.left + xScreenScale(value);
    if (xPos < PLOT_MARGIN.left - 5 || xPos > PLOT_MARGIN.left + innerWidth + 5)
      return;
    tickLabels.push(
      <Text
        key={`xlabel-${index}`}
        text={formatTickLabel(value)}
        x={xPos - 14}
        y={PLOT_MARGIN.top + innerHeight + 6}
        fill={TICK_LABEL_COLOR}
        fontSize={TICK_LABEL_FONT_SIZE}
        listening={false}
      />,
    );
  });

  yTicks.forEach((value, index) => {
    const yPos = PLOT_MARGIN.top + yScreenScale(value);
    if (yPos < PLOT_MARGIN.top - 5 || yPos > PLOT_MARGIN.top + innerHeight + 5)
      return;
    tickLabels.push(
      <Text
        key={`ylabel-${index}`}
        text={formatTickLabel(value)}
        x={PLOT_MARGIN.left - 36}
        y={yPos - 6}
        fill={TICK_LABEL_COLOR}
        fontSize={TICK_LABEL_FONT_SIZE}
        width={32}
        align="right"
        listening={false}
      />,
    );
  });

  return <>{tickLabels}</>;
}

function ImagePointGroup({
  point,
  xScale,
  yScale,
  imageCount,
  cellSize,
  onHover,
  onCursorMove,
}) {
  const centerX = xScale(point.x);
  const centerY = yScale(point.y);
  const resolvedCellSize = cellSize ?? CELL_SIZE;
  const positions = computeImagePositions(
    centerX,
    centerY,
    resolvedCellSize,
    resolvedCellSize,
    imageCount,
  );

  return (
    <>
      {positions.map((position, index) => (
        <KonvaCachedImage
          key={`${point.id}-${index}`}
          imageUrl={point.image}
          x={position.x}
          y={position.y}
          width={position.width}
          height={position.height}
          point={point}
          onHover={onHover}
          onCursorMove={onCursorMove}
        />
      ))}
    </>
  );
}

function KonvaCachedImage({
  imageUrl,
  x,
  y,
  width,
  height,
  point,
  onHover,
  onCursorMove,
}) {
  const loadedImage = getCachedImageObject(imageUrl);

  const handleMouseEnter = useCallback(
    (event) => {
      const stage = event.target.getStage();
      const pointer = stage.getPointerPosition();
      onCursorMove({ x: pointer.x, y: pointer.y });
      onHover(point);
    },
    [point, onHover, onCursorMove],
  );

  const handleMouseLeave = useCallback(() => onHover(null), [onHover]);

  if (!loadedImage) return null;

  return (
    <KonvaImage
      image={loadedImage}
      x={x}
      y={y}
      width={width}
      height={height}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
}

/* ─── Brush → Zoom conversion ─────────────────────────────────────────── */

function convertBrushToZoom(
  brushPixelRect,
  currentOffset,
  currentScale,
  plotInnerWidth,
  plotInnerHeight,
) {
  const contentX0 =
    (brushPixelRect.x - currentOffset.x) / currentScale;
  const contentY0 =
    (brushPixelRect.y - currentOffset.y) / currentScale;
  const contentBrushWidth = brushPixelRect.width / currentScale;
  const contentBrushHeight = brushPixelRect.height / currentScale;

  const fitScaleX = plotInnerWidth / contentBrushWidth;
  const fitScaleY = plotInnerHeight / contentBrushHeight;
  const newScale = clampScale(Math.min(fitScaleX, fitScaleY));

  const rawOffsetX = -contentX0 * newScale;
  const rawOffsetY = -contentY0 * newScale;

  const clampedOffset = clampContentOffset(
    rawOffsetX,
    rawOffsetY,
    newScale,
    plotInnerWidth,
    plotInnerHeight,
  );

  return { scale: newScale, offset: clampedOffset };
}

function clampValue(value, min, max) {
  return Math.max(min, Math.min(value, max));
}

/* ─── Pure utility functions ──────────────────────────────────────────── */

function isPointerInsidePlotArea(
  pointerPosition,
  plotInnerWidth,
  plotInnerHeight,
) {
  return (
    pointerPosition.x > PLOT_MARGIN.left &&
    pointerPosition.x < PLOT_MARGIN.left + plotInnerWidth &&
    pointerPosition.y > PLOT_MARGIN.top &&
    pointerPosition.y < PLOT_MARGIN.top + plotInnerHeight
  );
}

function clampScale(rawScale) {
  return Math.max(ZOOM_MIN, Math.min(rawScale, ZOOM_MAX));
}

function computeWheelScaleDelta(deltaY, isPinchGesture) {
  if (isPinchGesture) {
    return Math.exp(-deltaY * PINCH_ZOOM_SENSITIVITY);
  }
  return deltaY > 0 ? 1 / ZOOM_STEP : ZOOM_STEP;
}

function clampContentOffset(
  rawX,
  rawY,
  scale,
  plotInnerWidth,
  plotInnerHeight,
) {
  const scaledWidth = plotInnerWidth * scale;
  const scaledHeight = plotInnerHeight * scale;

  let clampedX;
  let clampedY;

  if (scaledWidth <= plotInnerWidth) {
    clampedX = (plotInnerWidth - scaledWidth) / 2;
  } else {
    const minX = plotInnerWidth - scaledWidth;
    const maxX = 0;
    clampedX = Math.max(minX, Math.min(rawX, maxX));
  }

  if (scaledHeight <= plotInnerHeight) {
    clampedY = (plotInnerHeight - scaledHeight) / 2;
  } else {
    const minY = plotInnerHeight - scaledHeight;
    const maxY = 0;
    clampedY = Math.max(minY, Math.min(rawY, maxY));
  }

  return { x: clampedX, y: clampedY };
}

function buildScales(plotterPoints, plotInnerWidth, plotInnerHeight) {
  const xValues = plotterPoints.map((p) => p.x);
  const yValues = plotterPoints.map((p) => p.y);

  const xMin = Math.min(...xValues);
  const xMax = Math.max(...xValues);
  const yMin = Math.min(...yValues);
  const yMax = Math.max(...yValues);

  const xPadding =
    (xMax - xMin) * EXTENT_PADDING_RATIO || EXTENT_FALLBACK_PADDING;
  const yPadding =
    (yMax - yMin) * EXTENT_PADDING_RATIO || EXTENT_FALLBACK_PADDING;

  const xExtent = [xMin - xPadding, xMax + xPadding];
  const yExtent = [yMin - yPadding, yMax + yPadding];

  const xScale = buildLinearScale(xExtent[0], xExtent[1], 0, plotInnerWidth);
  const yScale = buildLinearScale(yExtent[0], yExtent[1], plotInnerHeight, 0);

  return { xScale, yScale, xExtent, yExtent };
}

function computeVisibleDomain(
  xExtent,
  yExtent,
  contentOffset,
  scale,
  plotInnerWidth,
  plotInnerHeight,
) {
  const domainWidth = xExtent[1] - xExtent[0];
  const domainHeight = yExtent[1] - yExtent[0];

  const xMin =
    xExtent[0] - (contentOffset.x / scale / plotInnerWidth) * domainWidth;
  const xMax = xMin + domainWidth / scale;

  const yMax =
    yExtent[1] + (contentOffset.y / scale / plotInnerHeight) * domainHeight;
  const yMin = yMax - domainHeight / scale;

  return { xMin, xMax, yMin, yMax };
}

function buildLinearScale(domainMin, domainMax, rangeMin, rangeMax) {
  return (value) => {
    const ratio = (value - domainMin) / (domainMax - domainMin);
    return rangeMin + ratio * (rangeMax - rangeMin);
  };
}

function buildTicks(min, max, count) {
  const rawStep = (max - min) / count;
  const magnitude = Math.pow(10, Math.floor(Math.log10(rawStep)));
  const niceSteps = [1, 2, 2.5, 5, 10];
  const step =
    niceSteps.map((s) => s * magnitude).find((s) => s >= rawStep) ?? rawStep;

  const start = Math.ceil(min / step) * step;
  const ticks = [];

  for (let tick = start; tick <= max + step * 0.001; tick += step) {
    ticks.push(parseFloat(tick.toPrecision(10)));
  }

  return ticks;
}

function formatTickLabel(value) {
  if (Math.abs(value) >= 1000) return value.toExponential(1);
  const formattedString = value.toPrecision(4);
  return parseFloat(formattedString).toString();
}

export default KonvaPlotter;

```

---

# src\components\Navbar.jsx

```jsx
import { LIBRARIES, DISABLED_LIBRARIES } from "../lib/constants";

function Navbar({ activeTab, setActiveTab }) {
  return (
    <div className="tab-container">
      {LIBRARIES.map((libraryName) => {
        const isDisabled = DISABLED_LIBRARIES.includes(libraryName);

        return (
          <button
            key={libraryName}
            className={`tab-button ${activeTab === libraryName ? "active" : ""} ${isDisabled ? "disabled" : ""}`}
            onClick={() => !isDisabled && setActiveTab(libraryName)}
            disabled={isDisabled}
            title={isDisabled ? `${libraryName} is disabled for this test` : ""}
          >
            {libraryName}
          </button>
        );
      })}
    </div>
  );
}

export default Navbar;

```

---

# src\components\PixiPlotter.jsx

```jsx
import { useRef, useEffect, useState, useCallback } from "react";

import {
  Application as PixiApp,
  Container,
  Sprite,
  Graphics,
  Assets,
  Text as PixiText,
} from "pixi.js";

import * as d3 from "d3";

import { usePlotterData } from "../lib/plotterData";
import { computeImagePositions } from "../lib/gridLayout";
import { CELL_SIZE, PLOT_DIMENSIONS, PLOT_MARGIN } from "../lib/constants";
import {
  computeAdaptiveCellSize,
  filterVisiblePoints,
  computeEffectiveImageCount,
} from "../lib/densityLayout";

import PlotterControls from "./PlotterControls";
import { logChartInteractionEvent } from "../lib/chartInteractionLogger";
import { useInteractionMode } from "../lib/interactionMode";

const GRID_COLOR = 0x333333;
const GRID_ALPHA = 0.45;
const AXIS_BORDER_COLOR = 0x555555;
const TICK_COLOR = "#999999";

const ZOOM_MIN = 0.3;
const ZOOM_MAX = 100000;
const ZOOM_STEP = 1.5;

/*
 * CLAMP PAN
 */
function clampPan(xOffset, yOffset, scaleFactor, width, height) {
  const scaledWidth = width * scaleFactor;
  const scaledHeight = height * scaleFactor;

  let minOffsetLimitX = width - scaledWidth;
  let minOffsetLimitY = height - scaledHeight;

  if (scaledWidth < width) {
    minOffsetLimitX = (width - scaledWidth) / 2;
  }

  if (scaledHeight < height) {
    minOffsetLimitY = (height - scaledHeight) / 2;
  }

  return {
    x: Math.min(0, Math.max(minOffsetLimitX, xOffset)),
    y: Math.min(0, Math.max(minOffsetLimitY, yOffset)),
  };
}

/*
 * COMPUTE VIEWPORT SCALES
 */
function computeViewportScales(baseScaleX, baseScaleY, scaleFactor, xOffset, yOffset, width, height) {
  const leftPixel = -xOffset / scaleFactor;
  const rightPixel = (width - xOffset) / scaleFactor;

  const topPixel = -yOffset / scaleFactor;
  const bottomPixel = (height - yOffset) / scaleFactor;

  const visibleXMin = baseScaleX.invert(leftPixel);
  const visibleXMax = baseScaleX.invert(rightPixel);

  const visibleYMax = baseScaleY.invert(topPixel);
  const visibleYMin = baseScaleY.invert(bottomPixel);

  const dynamicXScale = d3
    .scaleLinear()
    .domain([visibleXMin, visibleXMax])
    .range([0, width]);

  const dynamicYScale = d3
    .scaleLinear()
    .domain([visibleYMin, visibleYMax])
    .range([height, 0]);

  return {
    dynamicXScale,
    dynamicYScale,
  };
}

/*
 * INITIALIZE PIXI APP
 */
async function initializePixiApp(containerElement, innerWidth, innerHeight) {
  const app = new PixiApp();

  await app.init({
    width: PLOT_DIMENSIONS.width,
    height: PLOT_DIMENSIONS.height,
    background: 0x16213e,
    antialias: true,
  });

  containerElement.appendChild(app.canvas);

  const axesLayer = new Container();
  axesLayer.x = PLOT_MARGIN.left;
  axesLayer.y = PLOT_MARGIN.top;
  app.stage.addChild(axesLayer);

  const contentLayer = new Container();
  contentLayer.x = PLOT_MARGIN.left;
  contentLayer.y = PLOT_MARGIN.top;
  app.stage.addChild(contentLayer);

  const mask = new Graphics();
  mask.rect(PLOT_MARGIN.left, PLOT_MARGIN.top, innerWidth, innerHeight);
  mask.fill(0xffffff);
  app.stage.addChild(mask);
  contentLayer.mask = mask;

  const brushGraphics = new Graphics();
  app.stage.addChild(brushGraphics);

  return {
    app,
    axesLayer,
    contentLayer,
    mask,
    brushGraphics,
  };
}

/*
 * APPLY BRUSH ZOOM TO TRANSFORM
 */
function applyBrushZoom({ startX, startY, width, height }, transformRef, innerWidth, innerHeight) {
  const currentScale = transformRef.current.scale;
  const currentX = transformRef.current.x;
  const currentY = transformRef.current.y;

  const contentX0 = (startX - currentX) / currentScale;
  const contentY0 = (startY - currentY) / currentScale;
  const contentWidth = width / currentScale;
  const contentHeight = height / currentScale;

  const scaleFactorX = innerWidth / contentWidth;
  const scaleFactorY = innerHeight / contentHeight;
  const nextScale = Math.max(ZOOM_MIN, Math.min(Math.min(scaleFactorX, scaleFactorY), ZOOM_MAX));

  const offsetCoordinateX = -contentX0 * nextScale;
  const offsetCoordinateY = -contentY0 * nextScale;

  const clamped = clampPan(offsetCoordinateX, offsetCoordinateY, nextScale, innerWidth, innerHeight);
  return {
    scale: nextScale,
    x: clamped.x,
    y: clamped.y,
  };
}

/*
 * DRAW BRUSH OVERLAY
 */
function drawBrushOverlay(graphics, startX, startY, width, height) {
  if (!graphics) return;
  graphics.clear();
  if (width > 0 && height > 0) {
    graphics.rect(
      PLOT_MARGIN.left + startX,
      PLOT_MARGIN.top + startY,
      width,
      height
    );
    graphics.fill({ color: 0x4493ff, alpha: 0.15 });
    graphics.stroke({ width: 1.5, color: 0x4493ff });
  }
}

function PixiPlotter({ imageCount, xGap, yGap, syntheticPoints }) {
  const { plotterPoints: fetchedPoints, isLoading, loadError } = usePlotterData();
  const plotterPoints = syntheticPoints || fetchedPoints;

  if (!syntheticPoints && isLoading) {
    return <div>Loading...</div>;
  }

  if (!syntheticPoints && loadError) {
    return <div>Error: {loadError}</div>;
  }

  return (
    <PixiCanvas
      plotterPoints={plotterPoints}
      imageCount={imageCount}
      xGap={xGap}
      yGap={yGap}
    />
  );
}

function PixiCanvas({ plotterPoints, imageCount, xGap, yGap }) {
  const containerRef = useRef(null);
  const pixiAppRef = useRef(null);
  const axesLayerRef = useRef(null);
  const contentLayerRef = useRef(null);
  const maskRef = useRef(null);
  const tooltipRef = useRef(null);
  const brushGraphicsRef = useRef(null);
  const brushStartRef = useRef(null);

  const baseScalesRef = useRef({
    xScale: null,
    yScale: null,
  });

  const transformRef = useRef({
    scale: 1,
    x: 0,
    y: 0,
  });

  const dragRef = useRef({
    dragging: false,
    startX: 0,
    startY: 0,
  });

  const [zoomLevel, setZoomLevel] = useState(1);
  const [isDragging, setIsDragging] = useState(false);

  const {
    interactionMode,
    setInteractionMode,
    isPanMode,
  } = useInteractionMode();

  const innerWidth = PLOT_DIMENSIONS.width - PLOT_MARGIN.left - PLOT_MARGIN.right;
  const innerHeight = PLOT_DIMENSIONS.height - PLOT_MARGIN.top - PLOT_MARGIN.bottom;

  /*
   * GET VIEWPORT SCALES
   */
  const getViewportScales = useCallback(() => {
    const baseScaleX = baseScalesRef.current.xScale;
    const baseScaleY = baseScalesRef.current.yScale;

    if (!baseScaleX || !baseScaleY) {
      return null;
    }

    const { scale, x, y } = transformRef.current;

    return computeViewportScales(
      baseScaleX,
      baseScaleY,
      scale,
      x,
      y,
      innerWidth,
      innerHeight
    );
  }, [innerWidth, innerHeight]);

  /*
   * RENDER AXES
   */
  const renderAxes = useCallback(() => {
    if (!axesLayerRef.current) return;

    const viewportScales = getViewportScales();
    if (!viewportScales) return;

    const axesLayer = axesLayerRef.current;
    axesLayer.removeChildren();

    drawGrid(
      axesLayer,
      viewportScales.dynamicXScale,
      viewportScales.dynamicYScale,
      innerWidth,
      innerHeight
    );

    drawAxesLabels(
      axesLayer,
      viewportScales.dynamicXScale,
      viewportScales.dynamicYScale,
      innerWidth,
      innerHeight
    );
  }, [getViewportScales, innerWidth, innerHeight]);

  /*
   * APPLY TRANSFORM — redraws points from current viewport scales (deep zoom).
   * Content layer is always identity; no matrix upscaling of sprites.
   */
  const applyTransform = useCallback(() => {
    if (!contentLayerRef.current) return;

    const viewportScales = getViewportScales();
    if (!viewportScales) return;

    const { dynamicXScale, dynamicYScale } = viewportScales;
    const { scale } = transformRef.current;

    const contentLayer = contentLayerRef.current;
    contentLayer.removeChildren();
    contentLayer.scale.set(1);
    contentLayer.x = PLOT_MARGIN.left;
    contentLayer.y = PLOT_MARGIN.top;

    const baseScaleX = baseScalesRef.current.xScale;
    const baseScaleY = baseScalesRef.current.yScale;
    if (!baseScaleX || !baseScaleY) return;

    const scaledPoints = plotterPoints.map((point) => ({
      ...point,
      scaledX: point.x * (xGap / 10),
      scaledY: point.y * (yGap / 10),
    }));

    /* Same pattern as Recharts: base cell size × current zoom scale. */
    const adaptiveCellSizeBase = computeAdaptiveCellSize(
      scaledPoints,
      (val) => baseScaleX(val),
      (val) => baseScaleY(val),
    );
    const currentCellSize = adaptiveCellSizeBase * scale;

    /* Screen-space culling. */
    const xScreenFn = (val) => baseScaleX(val) * scale + transformRef.current.x;
    const yScreenFn = (val) => baseScaleY(val) * scale + transformRef.current.y;
    const visiblePoints = filterVisiblePoints(
      scaledPoints,
      xScreenFn,
      yScreenFn,
      innerWidth,
      innerHeight,
      currentCellSize,
    );

    const effectiveImageCount = computeEffectiveImageCount(currentCellSize, imageCount);

    drawPoints(
      contentLayer,
      visiblePoints,
      dynamicXScale,
      dynamicYScale,
      effectiveImageCount,
      tooltipRef,
      currentCellSize,
    );

    renderAxes();
  }, [getViewportScales, renderAxes, plotterPoints, xGap, yGap, innerWidth, innerHeight, imageCount]);

  /*
   * MAIN RENDER — loads assets then delegates to applyTransform for drawing.
   */
  const renderScene = useCallback(async () => {
    if (!axesLayerRef.current || !contentLayerRef.current) return;

    const scaledPoints = plotterPoints.map((point) => ({
      ...point,
      scaledX: point.x * (xGap / 10),
      scaledY: point.y * (yGap / 10),
    }));

    const xDomainExtent = d3.extent(scaledPoints, (point) => point.scaledX);
    const yDomainExtent = d3.extent(scaledPoints, (point) => point.scaledY);

    const baseScaleX = d3.scaleLinear()
      .domain([xDomainExtent[0] - 5, xDomainExtent[1] + 5])
      .range([0, innerWidth]);

    const baseScaleY = d3.scaleLinear()
      .domain([yDomainExtent[0] - 5, yDomainExtent[1] + 5])
      .range([innerHeight, 0]);

    baseScalesRef.current = { xScale: baseScaleX, yScale: baseScaleY };
    renderAxes();

    const uniqueImageUrls = [...new Set(plotterPoints.map((point) => point.image))];
    await Assets.load(uniqueImageUrls);

    applyTransform();
  }, [plotterPoints, xGap, yGap, innerWidth, innerHeight, renderAxes, applyTransform]);



  /*
   * ZOOM
   */
  const zoom = useCallback((direction, interactionSource = "button") => {
    logChartInteractionEvent({
      interactionType: direction === "in" ? "ZOOM_IN" : "ZOOM_OUT",
      visualizationLibrary: "Pixi",
      interactionSource: interactionSource,
    });
    const currentScale = transformRef.current.scale;

    const nextScale =
      direction === "in"
        ? Math.min(currentScale * ZOOM_STEP, ZOOM_MAX)
        : Math.max(currentScale / ZOOM_STEP, ZOOM_MIN);

    const plotCenterX = innerWidth / 2;
    const plotCenterY = innerHeight / 2;

    const nextTransformOffsetX =
      transformRef.current.x - plotCenterX * (nextScale / currentScale - 1);

    const nextTransformOffsetY =
      transformRef.current.y - plotCenterY * (nextScale / currentScale - 1);

    const clampedTransformOffset = clampPan(
      nextTransformOffsetX,
      nextTransformOffsetY,
      nextScale,
      innerWidth,
      innerHeight
    );

    transformRef.current = {
      scale: nextScale,
      x: clampedTransformOffset.x,
      y: clampedTransformOffset.y,
    };

    setZoomLevel(nextScale);
    applyTransform();
  }, [innerWidth, innerHeight, applyTransform]);

  /*
   * RESET
   */
  const reset = useCallback((interactionSource) => {
    const computedSource =
      interactionSource && typeof interactionSource === "string"
        ? interactionSource
        : "button";

    logChartInteractionEvent({
      interactionType: "RESET",
      visualizationLibrary: "Pixi",
      interactionSource: computedSource,
    });

    transformRef.current = {
      scale: 1,
      x: 0,
      y: 0,
    };

    setZoomLevel(1);
    applyTransform();
  }, [applyTransform]);

  /*
   * CANVAS INTERACTIONS
   */
  const onCanvasMouseDown = useCallback((event) => {
    if (isPanMode) {
      logChartInteractionEvent({
        interactionType: "PAN",
        visualizationLibrary: "Pixi",
        interactionSource: "drag",
      });
      setIsDragging(true);
      dragRef.current.dragging = true;
      dragRef.current.startX = event.clientX - transformRef.current.x;
      dragRef.current.startY = event.clientY - transformRef.current.y;
    } else {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const localX = event.clientX - rect.left - PLOT_MARGIN.left;
      const localY = event.clientY - rect.top - PLOT_MARGIN.top;

      if (localX >= 0 && localX <= innerWidth && localY >= 0 && localY <= innerHeight) {
        brushStartRef.current = { x: localX, y: localY };
      }
    }
  }, [isPanMode, innerWidth, innerHeight]);

  const onCanvasMouseMove = useCallback((event) => {
    if (dragRef.current.dragging) {
      const nextX = event.clientX - dragRef.current.startX;
      const nextY = event.clientY - dragRef.current.startY;
      const clamped = clampPan(nextX, nextY, transformRef.current.scale, innerWidth, innerHeight);

      transformRef.current.x = clamped.x;
      transformRef.current.y = clamped.y;

      applyTransform();
      return;
    }

    if (brushStartRef.current) {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const localX = Math.max(0, Math.min(innerWidth, event.clientX - rect.left - PLOT_MARGIN.left));
      const localY = Math.max(0, Math.min(innerHeight, event.clientY - rect.top - PLOT_MARGIN.top));

      const brushStartX = Math.min(brushStartRef.current.x, localX);
      const brushStartY = Math.min(brushStartRef.current.y, localY);
      const brushWidth = Math.abs(localX - brushStartRef.current.x);
      const brushHeight = Math.abs(localY - brushStartRef.current.y);

      drawBrushOverlay(brushGraphicsRef.current, brushStartX, brushStartY, brushWidth, brushHeight);
    }
  }, [innerWidth, innerHeight, applyTransform]);

  const onCanvasMouseUp = useCallback((event) => {
    setIsDragging(false);
    if (dragRef.current.dragging) {
      dragRef.current.dragging = false;
      return;
    }

    if (brushStartRef.current) {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const localX = Math.max(0, Math.min(innerWidth, event.clientX - rect.left - PLOT_MARGIN.left));
      const localY = Math.max(0, Math.min(innerHeight, event.clientY - rect.top - PLOT_MARGIN.top));

      const brushStartX = Math.min(brushStartRef.current.x, localX);
      const brushStartY = Math.min(brushStartRef.current.y, localY);
      const brushWidth = Math.abs(localX - brushStartRef.current.x);
      const brushHeight = Math.abs(localY - brushStartRef.current.y);

      if (brushWidth >= 5 && brushHeight >= 5) {
        logChartInteractionEvent({
          interactionType: "ZOOM_IN",
          visualizationLibrary: "Pixi",
          interactionSource: "brush",
        });

        const nextTransform = applyBrushZoom(
          { startX: brushStartX, startY: brushStartY, width: brushWidth, height: brushHeight },
          transformRef,
          innerWidth,
          innerHeight
        );

        transformRef.current = {
          scale: nextTransform.scale,
          x: nextTransform.x,
          y: nextTransform.y,
        };

        setZoomLevel(nextTransform.scale);
        applyTransform();
      }

      if (brushGraphicsRef.current) {
        brushGraphicsRef.current.clear();
      }
      brushStartRef.current = null;
    }
  }, [innerWidth, innerHeight, applyTransform]);

  /* Cancel in-progress brush when switching to pan mode */
  useEffect(() => {
    if (isPanMode) {
      brushStartRef.current = null;
      if (brushGraphicsRef.current) {
        brushGraphicsRef.current.clear();
      }
    }
  }, [isPanMode]);

  /*
   * INITIALIZE PIXI
   */
  useEffect(() => {
    let isComponentUnmounted = false;
    let pixiApplicationInstance = null;

    if (!containerRef.current) return;

    initializePixiApp(containerRef.current, innerWidth, innerHeight)
      .then(({ app, axesLayer, contentLayer, mask, brushGraphics }) => {
        if (isComponentUnmounted) {
          try {
            app.destroy({ removeView: true });
          } catch (err) {
            console.error("Error destroying Pixi App during init cancellation:", err);
          }
          return;
        }

        pixiAppRef.current = app;
        axesLayerRef.current = axesLayer;
        contentLayerRef.current = contentLayer;
        maskRef.current = mask;
        brushGraphicsRef.current = brushGraphics;
        pixiApplicationInstance = app;

        renderScene();
      })
      .catch((err) => {
        console.error("Failed to initialize Pixi:", err);
      });

    return () => {
      isComponentUnmounted = true;
      if (pixiApplicationInstance) {
        try {
          pixiApplicationInstance.destroy({ removeView: true });
        } catch (err) {
          console.error("Error destroying Pixi App:", err);
        }
      }
    };
  }, [innerWidth, innerHeight, renderScene]);

  /*
   * RERENDER DATA CHANGES
   */
  useEffect(() => {
    if (!plotterPoints.length) return;
    renderScene();
  }, [plotterPoints, imageCount, xGap, yGap, renderScene]);

  /*
   * ATTACH NON-PASSIVE WHEEL LISTENER
   */
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onCanvasWheelScroll = (event) => {
      event.preventDefault();
      if (event.deltaY > 0) {
        zoom("out", "wheel");
      } else {
        zoom("in", "wheel");
      }
    };

    container.addEventListener("wheel", onCanvasWheelScroll, { passive: false });

    return () => {
      container.removeEventListener("wheel", onCanvasWheelScroll);
    };
  }, [zoom]);

  return (
    <div style={{ position: "relative" }}>
      <PlotterControls
        zoomLevel={zoomLevel}
        onZoomIn={() => zoom("in")}
        onZoomOut={() => zoom("out")}
        onReset={() => reset("button")}
        interactionMode={interactionMode}
        onModeChange={setInteractionMode}
      />

      <div
        ref={containerRef}
        onMouseDown={onCanvasMouseDown}
        onMouseMove={onCanvasMouseMove}
        onMouseUp={onCanvasMouseUp}
        onMouseLeave={onCanvasMouseUp}
        onDoubleClick={() => reset("double_click")}
        style={{
          cursor: isPanMode
            ? (isDragging ? "grabbing" : "grab")
            : "crosshair",
        }}
      />

      <div
        ref={tooltipRef}
        className="plotter-tooltip"
        style={{
          display: "none",
          position: "absolute",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

/*
 * GRID
 */
function drawGrid(layer, scaleX, scaleY, width, height) {
  const grid = new Graphics();

  const xTicks = buildIntegerTicks(scaleX.domain());
  const yTicks = buildIntegerTicks(scaleY.domain());

  xTicks.forEach((tick) => {
    const x = scaleX(tick);
    grid.moveTo(x, 0);
    grid.lineTo(x, height);
  });

  yTicks.forEach((tick) => {
    const y = scaleY(tick);
    grid.moveTo(0, y);
    grid.lineTo(width, y);
  });

  grid.stroke({
    width: 1,
    color: GRID_COLOR,
    alpha: GRID_ALPHA,
  });

  const border = new Graphics();
  border.rect(0, 0, width, height);
  border.stroke({
    width: 1,
    color: AXIS_BORDER_COLOR,
  });

  layer.addChild(grid);
  layer.addChild(border);
}

/*
 * LABELS
 */
function drawAxesLabels(layer, scaleX, scaleY, innerWidth, innerHeight) {
  const xTicks = buildIntegerTicks(scaleX.domain());
  const yTicks = buildIntegerTicks(scaleY.domain());

  xTicks.forEach((tick) => {
    const label = new PixiText({
      text: tick.toString(),
      style: {
        fill: TICK_COLOR,
        fontSize: 11,
      },
    });

    label.x = scaleX(tick) - label.width / 2;
    label.y = innerHeight + 6;
    layer.addChild(label);
  });

  yTicks.forEach((tick) => {
    const label = new PixiText({
      text: tick.toString(),
      style: {
        fill: TICK_COLOR,
        fontSize: 11,
      },
    });

    label.x = -label.width - 6;
    label.y = scaleY(tick) - label.height / 2;
    layer.addChild(label);
  });
}

/*
 * POINTS
 */
function drawPoints(layer, points, scaleX, scaleY, imageCount, tooltipRef, cellSize = CELL_SIZE) {
  points.forEach((point) => {
    const x = scaleX(point.scaledX);
    const y = scaleY(point.scaledY);

    const positions = computeImagePositions(
      x,
      y,
      cellSize,
      cellSize,
      imageCount
    );

    positions.forEach((position) => {
      const sprite = Sprite.from(point.image);
      sprite.x = position.x;
      sprite.y = position.y;
      sprite.width = position.width;
      sprite.height = position.height;
      sprite.eventMode = "static";
      sprite.cursor = "pointer";

      sprite.on("pointerenter", (event) => {
        showTooltip(tooltipRef.current, event, point);
      });

      sprite.on("pointerleave", () => {
        hideTooltip(tooltipRef.current);
      });

      layer.addChild(sprite);
    });
  });
}

/*
 * SMART TICKS
 */
function buildIntegerTicks([min, max]) {
  const range = max - min;
  let step;

  if (range <= 10) step = 1;
  else if (range <= 20) step = 2;
  else if (range <= 50) step = 5;
  else if (range <= 100) step = 10;
  else if (range <= 200) step = 20;
  else step = 50;

  const ticks = [];
  const start = Math.floor(min / step) * step;

  for (let value = start; value <= max; value += step) {
    ticks.push(Number(value.toFixed(2)));
  }

  return ticks;
}

/*
 * TOOLTIP
 */
function showTooltip(element, event, point) {
  if (!element) return;

  const global = event.global;
  element.style.display = "block";
  element.style.left = `${global.x + 15}px`;
  element.style.top = `${global.y - 10}px`;

  element.innerHTML = `
    <div class="tooltip-label">
      ${point.label}
    </div>
 
    <div class="tooltip-meta">
      <span>Interval: ${point.meta.interval}s</span>
      <span>Angle: ${point.meta.angle}°</span>
      <span>Quality: ${point.meta.quality}</span>
    </div>
  `;
}

function hideTooltip(element) {
  if (!element) return;
  element.style.display = "none";
}

export default PixiPlotter;
```

---

# src\components\PlotterControls.jsx

```jsx
import { INTERACTION_MODES } from "../lib/interactionMode";

function ZoomIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
      <line x1="11" y1="8" x2="11" y2="14" />
      <line x1="8" y1="11" x2="14" y2="11" />
    </svg>
  );
}

function PanIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 11V6a2 2 0 0 0-4 0v5" />
      <path d="M14 10V4a2 2 0 0 0-4 0v6" />
      <path d="M10 10.5V6a2 2 0 0 0-4 0v8" />
      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
    </svg>
  );
}

export default function PlotterControls({
  onZoomIn,
  onZoomOut,
  onReset,
  zoomLevel,
  interactionMode,
  onModeChange,
}) {
  const isZoomActive = interactionMode === INTERACTION_MODES.ZOOM;
  const isPanActive = interactionMode === INTERACTION_MODES.PAN;

  return (
    <div className="zoom-controls">
      {onModeChange && (
        <>
          <button
            className={`mode-button ${isZoomActive ? "active" : ""}`}
            onClick={() => onModeChange(INTERACTION_MODES.ZOOM)}
            title="Zoom Mode — drag to select zoom area"
          >
            <ZoomIcon />
            <span>Zoom</span>
          </button>
          <button
            className={`mode-button ${isPanActive ? "active" : ""}`}
            onClick={() => onModeChange(INTERACTION_MODES.PAN)}
            title="Pan Mode — drag to move the chart"
          >
            <PanIcon />
            <span>Pan</span>
          </button>
          <span className="mode-separator" />
        </>
      )}

      <button className="zoom-button" onClick={onZoomIn}>
        +
      </button>
      <button className="zoom-button" onClick={onZoomOut}>
        −
      </button>
      <button className="zoom-button" onClick={onReset}>
        Reset
      </button>
      {zoomLevel !== undefined && (
        <span style={{ color: "#888", fontSize: "0.75rem", marginLeft: 8 }}>
          {Math.round(zoomLevel * 100)}%
        </span>
      )}
    </div>
  );
}

```

---

# src\components\RechartsPlotter.jsx

```jsx
/* eslint-disable react-hooks/purity */
import { useState, useMemo, useRef, useEffect, useCallback } from "react";
import * as d3 from "d3";
import { usePlotterData } from "../lib/plotterData";
import { computeImagePositions } from "../lib/gridLayout";
import { CELL_SIZE, PLOT_DIMENSIONS, PLOT_MARGIN } from "../lib/constants";
import {
  computeAdaptiveCellSize,
  filterVisiblePoints,
  computeEffectiveImageCount,
} from "../lib/densityLayout";
import PlotterControls from "./PlotterControls";
import { logChartInteractionEvent } from "../lib/chartInteractionLogger";
import { useInteractionMode } from "../lib/interactionMode";

const ZOOM_STEP = 1.5;
const ZOOM_MIN = 0.35;
const ZOOM_MAX = 250;
const BRUSH_MIN_PIXELS = 5;
const BRUSH_FILL = "rgba(68, 147, 255, 0.15)";
const BRUSH_STROKE = "#4493ff";
const BRUSH_STROKE_WIDTH = 1.5;

const BASE_IMAGE_GAP_X = 10;
const BASE_IMAGE_GAP_Y = 10;

function RechartsPlotter({ imageCount, xGap, yGap, syntheticPoints }) {
  const {
    plotterPoints: fetchedPoints,
    isLoading,
    loadError,
  } = usePlotterData();

  const plotterPoints = syntheticPoints || fetchedPoints;

  if (!syntheticPoints && isLoading)
    return <div className="plotter-loading">Loading data…</div>;
  if (!syntheticPoints && loadError)
    return <div className="plotter-error">Error: {loadError}</div>;

  return (
    <RechartsCanvas
      plotterPoints={plotterPoints}
      imageCount={imageCount}
      xGap={xGap}
      yGap={yGap}
    />
  );
}

function RechartsCanvas({ plotterPoints, imageCount, xGap, yGap }) {
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const dragRef = useRef({
    dragging: false,
    pointerId: null,
    startClientX: 0,
    startClientY: 0,
    startTransform: { scale: 1, x: 0, y: 0 },
  });

  const [containerWidth, setContainerWidth] = useState(PLOT_DIMENSIONS.width);
  const [transform, setTransform] = useState({ scale: 1, x: 0, y: 0 });
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const [brushRect, setBrushRect] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const brushStartRef = useRef(null);

  const { interactionMode, setInteractionMode, isPanMode } =
    useInteractionMode();

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) setContainerWidth(entry.contentRect.width);
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  /* Cancel in-progress brush when switching to pan mode */
  useEffect(() => {
    if (isPanMode) {
      brushStartRef.current = null;
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setBrushRect(null);
    }
  }, [isPanMode]);

  const height = PLOT_DIMENSIONS.height;
  const innerWidth = Math.max(
    containerWidth - PLOT_MARGIN.left - PLOT_MARGIN.right,
    320,
  );
  const innerHeight = Math.max(
    height - PLOT_MARGIN.top - PLOT_MARGIN.bottom,
    240,
  );

  const normalizedPoints = useMemo(() => {
    const xScale = xGap / BASE_IMAGE_GAP_X;
    const yScale = yGap / BASE_IMAGE_GAP_Y;

    return plotterPoints.map((point) => ({
      ...point,
      scaledX: point.x * xScale,
      scaledY: point.y * yScale,
    }));
  }, [plotterPoints, xGap, yGap]);

  const xExtent = useMemo(
    () => extentWithPadding(normalizedPoints.map((p) => p.scaledX)),
    [normalizedPoints],
  );
  const yExtent = useMemo(
    () => extentWithPadding(normalizedPoints.map((p) => p.scaledY)),
    [normalizedPoints],
  );

  const baseXScale = useMemo(
    () => d3.scaleLinear().domain(xExtent).range([0, innerWidth]),
    [xExtent, innerWidth],
  );

  const baseYScale = useMemo(
    () => d3.scaleLinear().domain(yExtent).range([innerHeight, 0]),
    [yExtent, innerHeight],
  );

  const visibleDomain = useMemo(
    () =>
      computeVisibleDomain(
        xExtent,
        yExtent,
        transform,
        innerWidth,
        innerHeight,
      ),
    [xExtent, yExtent, transform, innerWidth, innerHeight],
  );

  const xTicks = useMemo(
    () => d3.ticks(visibleDomain.xMin, visibleDomain.xMax, 8),
    [visibleDomain],
  );
  const yTicks = useMemo(
    () => d3.ticks(visibleDomain.yMin, visibleDomain.yMax, 6),
    [visibleDomain],
  );

  const xTickScale = useMemo(
    () =>
      d3
        .scaleLinear()
        .domain([visibleDomain.xMin, visibleDomain.xMax])
        .range([0, innerWidth]),
    [visibleDomain, innerWidth],
  );

  const yTickScale = useMemo(
    () =>
      d3
        .scaleLinear()
        .domain([visibleDomain.yMin, visibleDomain.yMax])
        .range([innerHeight, 0]),
    [visibleDomain, innerHeight],
  );

  const clipId = "recharts-clip-static";

  const adaptiveCellSizeForRender = useMemo(() => {
    /* Compute from base scales (content-space) so the cell size is set at
       the default zoom level. The SVG transform then naturally magnifies
       images when zoomed in, revealing more detail. */
    return computeAdaptiveCellSize(
      normalizedPoints,
      (val) => baseXScale(val),
      (val) => baseYScale(val),
    );
  }, [normalizedPoints, baseXScale, baseYScale]);

  const visiblePointsForRender = useMemo(() => {
    /* Viewport culling still needs screen-space coordinates. */
    const xScreenFn = (val) => baseXScale(val) * transform.scale + transform.x;
    const yScreenFn = (val) => baseYScale(val) * transform.scale + transform.y;
    return filterVisiblePoints(
      normalizedPoints,
      xScreenFn,
      yScreenFn,
      innerWidth,
      innerHeight,
      adaptiveCellSizeForRender * transform.scale,
    );
  }, [
    normalizedPoints,
    baseXScale,
    baseYScale,
    transform,
    innerWidth,
    innerHeight,
    adaptiveCellSizeForRender,
  ]);

  const effectiveImageCountForRender = useMemo(
    () =>
      computeEffectiveImageCount(
        adaptiveCellSizeForRender * transform.scale,
        imageCount,
      ),
    [adaptiveCellSizeForRender, transform.scale, imageCount],
  );

  const zoomTo = useCallback(
    (nextScale, anchorX, anchorY) => {
      setTransform((prev) => {
        const clampedScale = clamp(nextScale, ZOOM_MIN, ZOOM_MAX);
        const pivotX = Number.isFinite(anchorX) ? anchorX : innerWidth / 2;
        const pivotY = Number.isFinite(anchorY) ? anchorY : innerHeight / 2;

        const nextX =
          prev.x - (pivotX - prev.x) * (clampedScale / prev.scale - 1);
        const nextY =
          prev.y - (pivotY - prev.y) * (clampedScale / prev.scale - 1);

        return clampTransform(
          { scale: clampedScale, x: nextX, y: nextY },
          innerWidth,
          innerHeight,
        );
      });
    },
    [innerWidth, innerHeight],
  );

  const handleZoomIn = useCallback(() => {
    logChartInteractionEvent({
      interactionType: "ZOOM_IN",
      visualizationLibrary: "Recharts",
      interactionSource: "button",
    });
    zoomTo(transform.scale * ZOOM_STEP, innerWidth / 2, innerHeight / 2);
  }, [transform.scale, zoomTo, innerWidth, innerHeight]);

  const handleZoomOut = useCallback(() => {
    logChartInteractionEvent({
      interactionType: "ZOOM_OUT",
      visualizationLibrary: "Recharts",
      interactionSource: "button",
    });
    zoomTo(transform.scale / ZOOM_STEP, innerWidth / 2, innerHeight / 2);
  }, [transform.scale, zoomTo, innerWidth, innerHeight]);

  const handleReset = useCallback(() => {
    logChartInteractionEvent({
      interactionType: "RESET",
      visualizationLibrary: "Recharts",
      interactionSource: "button",
    });
    setTransform({ scale: 1, x: 0, y: 0 });
    setHoveredPoint(null);
  }, []);

  const handleWheel = useCallback(
    (event) => {
      event.preventDefault();

      const rect = svgRef.current?.getBoundingClientRect();
      if (!rect) return;

      const clientX = event.clientX - rect.left;
      const clientY = event.clientY - rect.top;

      const localX = clientX - PLOT_MARGIN.left;
      const localY = clientY - PLOT_MARGIN.top;

      if (
        localX < 0 ||
        localY < 0 ||
        localX > innerWidth ||
        localY > innerHeight
      ) {
        return;
      }

      const isZoomIn = event.deltaY < 0;
      logChartInteractionEvent({
        interactionType: isZoomIn ? "ZOOM_IN" : "ZOOM_OUT",
        visualizationLibrary: "Recharts",
        interactionSource: "wheel",
      });

      const factor = event.deltaY > 0 ? 1 / 1.15 : 1.15;

      setTransform((prev) => {
        const clampedScale = clamp(prev.scale * factor, ZOOM_MIN, ZOOM_MAX);

        const nextX =
          prev.x - (localX - prev.x) * (clampedScale / prev.scale - 1);
        const nextY =
          prev.y - (localY - prev.y) * (clampedScale / prev.scale - 1);
        return clampTransform(
          { scale: clampedScale, x: nextX, y: nextY },
          innerWidth,
          innerHeight,
        );
      });
    },
    [innerWidth, innerHeight],
  );

  const handlePointerDown = useCallback(
    (event) => {
      const rect = svgRef.current?.getBoundingClientRect();
      if (!rect) return;

      const localX = event.clientX - rect.left - PLOT_MARGIN.left;
      const localY = event.clientY - rect.top - PLOT_MARGIN.top;

      if (
        localX < 0 ||
        localY < 0 ||
        localX > innerWidth ||
        localY > innerHeight
      ) {
        return;
      }

      if (isPanMode) {
        logChartInteractionEvent({
          interactionType: "PAN",
          visualizationLibrary: "Recharts",
          interactionSource: "drag",
        });
        setIsDragging(true);
        dragRef.current = {
          dragging: true,
          pointerId: event.pointerId,
          startClientX: event.clientX,
          startClientY: event.clientY,
          startTransform: transform,
        };
        event.currentTarget.setPointerCapture?.(event.pointerId);
        return;
      }

      const clampedX = clamp(localX, 0, innerWidth);
      const clampedY = clamp(localY, 0, innerHeight);
      brushStartRef.current = { x: clampedX, y: clampedY };
      setBrushRect({ x: clampedX, y: clampedY, width: 0, height: 0 });
      event.currentTarget.setPointerCapture?.(event.pointerId);
    },
    [innerWidth, innerHeight, transform, isPanMode],
  );

  const handlePointerMove = useCallback(
    (event) => {
      if (brushStartRef.current) {
        const rect = svgRef.current?.getBoundingClientRect();
        if (!rect) return;

        const localX = clamp(
          event.clientX - rect.left - PLOT_MARGIN.left,
          0,
          innerWidth,
        );
        const localY = clamp(
          event.clientY - rect.top - PLOT_MARGIN.top,
          0,
          innerHeight,
        );
        const startPoint = brushStartRef.current;

        setBrushRect({
          x: Math.min(startPoint.x, localX),
          y: Math.min(startPoint.y, localY),
          width: Math.abs(localX - startPoint.x),
          height: Math.abs(localY - startPoint.y),
        });
        return;
      }

      if (dragRef.current.dragging) {
        const dx = event.clientX - dragRef.current.startClientX;
        const dy = event.clientY - dragRef.current.startClientY;

        const next = clampTransform(
          {
            scale: dragRef.current.startTransform.scale,
            x: dragRef.current.startTransform.x + dx,
            y: dragRef.current.startTransform.y + dy,
          },
          innerWidth,
          innerHeight,
        );

        setTransform(next);
        return;
      }

      const target = event.target?.closest?.("[data-point-id]");
      if (!target) {
        setHoveredPoint(null);
        return;
      }

      const id = target.getAttribute("data-point-id");
      const point = plotterPoints.find((p) => p.id === id);
      if (!point) return;

      setHoveredPoint(point);
      setTooltipPos({ x: event.clientX, y: event.clientY });
    },
    [innerWidth, innerHeight, plotterPoints],
  );

  const handlePointerUp = useCallback(
    (event) => {
      if (brushStartRef.current && brushRect) {
        const isTooSmall =
          brushRect.width < BRUSH_MIN_PIXELS ||
          brushRect.height < BRUSH_MIN_PIXELS;

        if (!isTooSmall) {
          logChartInteractionEvent({
            interactionType: "ZOOM_IN",
            visualizationLibrary: "Recharts",
            interactionSource: "brush",
          });
          const newTransform = convertBrushToTransform(
            brushRect,
            transform,
            innerWidth,
            innerHeight,
          );
          setTransform(newTransform);
        }

        brushStartRef.current = null;
        setBrushRect(null);
        event.currentTarget.releasePointerCapture?.(event.pointerId);
        return;
      }

      setIsDragging(false);
      dragRef.current.dragging = false;
      dragRef.current.pointerId = null;
      event.currentTarget.releasePointerCapture?.(event.pointerId);
    },
    [brushRect, transform, innerWidth, innerHeight],
  );

  useEffect(() => {
    const svgElement = svgRef.current;

    if (!svgElement) return;

    const wheelHandler = (event) => {
      event.preventDefault();
      handleWheel(event);
    };

    svgElement.addEventListener("wheel", wheelHandler, {
      passive: false,
    });

    return () => {
      svgElement.removeEventListener("wheel", wheelHandler);
    };
  }, [handleWheel]);

  const handleDoubleClick = useCallback(() => {
    logChartInteractionEvent({
      interactionType: "RESET",
      visualizationLibrary: "Recharts",
      interactionSource: "double_click",
    });
    setTransform({ scale: 1, x: 0, y: 0 });
    setHoveredPoint(null);
  }, []);

  const stageCursor = isPanMode
    ? isDragging
      ? "grabbing"
      : "grab"
    : "crosshair";

  const contentTransform = `translate(${transform.x}, ${transform.y}) scale(${transform.scale})`;

  return (
    <div ref={containerRef} style={{ position: "relative", width: "100%" }}>
      <PlotterControls
        zoomLevel={transform.scale}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
        interactionMode={interactionMode}
        onModeChange={setInteractionMode}
      />

      <svg
        ref={svgRef}
        width={containerWidth}
        height={height}
        style={{
          display: "block",
          touchAction: "none",
          userSelect: "none",
          cursor: stageCursor,
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onDoubleClick={handleDoubleClick}
      >
        <defs>
          <clipPath id={clipId}>
            <rect
              x={PLOT_MARGIN.left}
              y={PLOT_MARGIN.top}
              width={innerWidth}
              height={innerHeight}
            />
          </clipPath>
        </defs>

        <rect
          x={0}
          y={0}
          width={containerWidth}
          height={height}
          fill="#16213e"
        />

        <g transform={`translate(${PLOT_MARGIN.left},${PLOT_MARGIN.top})`}>
          <rect
            x={0}
            y={0}
            width={innerWidth}
            height={innerHeight}
            fill="#16213e"
          />

          <AxisGrid
            xTicks={xTicks}
            yTicks={yTicks}
            xTickScale={xTickScale}
            yTickScale={yTickScale}
            innerWidth={innerWidth}
            innerHeight={innerHeight}
          />

          <AxisLabels
            xTicks={xTicks}
            yTicks={yTicks}
            xTickScale={xTickScale}
            yTickScale={yTickScale}
            innerWidth={innerWidth}
            innerHeight={innerHeight}
          />

          <g clipPath={`url(#${clipId})`}>
            <g transform={contentTransform}>
              {visiblePointsForRender.map((point) => (
                <ImagePoint
                  key={point.id}
                  point={point}
                  baseXScale={baseXScale}
                  baseYScale={baseYScale}
                  imageCount={effectiveImageCountForRender}
                  adaptiveCellSize={adaptiveCellSizeForRender}
                />
              ))}
            </g>
          </g>

          <rect
            x={0}
            y={0}
            width={innerWidth}
            height={innerHeight}
            fill="transparent"
            stroke="#555"
            pointerEvents="none"
          />

          {brushRect && brushRect.width > 0 && brushRect.height > 0 && (
            <rect
              x={brushRect.x}
              y={brushRect.y}
              width={brushRect.width}
              height={brushRect.height}
              fill={BRUSH_FILL}
              stroke={BRUSH_STROKE}
              strokeWidth={BRUSH_STROKE_WIDTH}
              rx={2}
              ry={2}
              pointerEvents="none"
            />
          )}
        </g>
      </svg>

      {hoveredPoint && (
        <div
          className="plotter-tooltip"
          style={{
            display: "block",
            position: "fixed",
            left: tooltipPos.x + 12,
            top: tooltipPos.y - 10,
            pointerEvents: "none",
            zIndex: 20,
          }}
        >
          <div className="tooltip-label">{hoveredPoint.label}</div>
          <div className="tooltip-meta">
            <span>Interval: {hoveredPoint.meta.interval}s</span>
            <span>Angle: {hoveredPoint.meta.angle}°</span>
            <span>Quality: {hoveredPoint.meta.quality}</span>
          </div>
        </div>
      )}
    </div>
  );
}

function ImagePoint({
  point,
  baseXScale,
  baseYScale,
  imageCount,
  adaptiveCellSize,
}) {
  const centerX = baseXScale(point.scaledX);
  const centerY = baseYScale(point.scaledY);
  const cellSize = adaptiveCellSize ?? CELL_SIZE;

  const positions = computeImagePositions(
    centerX,
    centerY,
    cellSize,
    cellSize,
    imageCount,
  );

  return (
    <>
      {positions.map((position, index) => (
        <image
          key={`${point.id}-${imageCount}-${index}`}
          data-point-id={point.id}
          href={point.image}
          x={position.x}
          y={position.y}
          width={position.width}
          height={position.height}
          preserveAspectRatio="xMidYMid meet"
          style={{ cursor: "pointer" }}
        />
      ))}
    </>
  );
}

function AxisGrid({
  xTicks,
  yTicks,
  xTickScale,
  yTickScale,
  innerWidth,
  innerHeight,
}) {
  return (
    <>
      {xTicks.map((tick, index) => {
        const x = xTickScale(tick);
        return (
          <line
            key={`xgrid-${index}`}
            x1={x}
            y1={0}
            x2={x}
            y2={innerHeight}
            stroke="#2a2a3e"
            strokeDasharray="3 3"
          />
        );
      })}

      {yTicks.map((tick, index) => {
        const y = yTickScale(tick);
        return (
          <line
            key={`ygrid-${index}`}
            x1={0}
            y1={y}
            x2={innerWidth}
            y2={y}
            stroke="#2a2a3e"
            strokeDasharray="3 3"
          />
        );
      })}
    </>
  );
}

function AxisLabels({ xTicks, yTicks, xTickScale, yTickScale, innerHeight }) {
  return (
    <>
      {xTicks.map((tick, index) => {
        const x = xTickScale(tick);
        return (
          <text
            key={`xlabel-${index}`}
            x={x}
            y={innerHeight + 18}
            fill="#888"
            fontSize="11"
            textAnchor="middle"
          >
            {formatTick(tick)}
          </text>
        );
      })}

      {yTicks.map((tick, index) => {
        const y = yTickScale(tick);
        return (
          <text
            key={`ylabel-${index}`}
            x={-8}
            y={y + 4}
            fill="#888"
            fontSize="11"
            textAnchor="end"
          >
            {formatTick(tick)}
          </text>
        );
      })}
    </>
  );
}

function extentWithPadding(values) {
  if (!values.length) return [0, 1];

  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = max - min;
  const pad = span === 0 ? 5 : Math.max(span * 0.18, 1);

  return [min - pad, max + pad];
}

function computeVisibleDomain(
  xExtent,
  yExtent,
  transform,
  innerWidth,
  innerHeight,
) {
  const domainWidth = xExtent[1] - xExtent[0];
  const domainHeight = yExtent[1] - yExtent[0];

  const xMin =
    xExtent[0] - (transform.x / transform.scale / innerWidth) * domainWidth;
  const xMax = xMin + domainWidth / transform.scale;

  const yMax =
    yExtent[1] + (transform.y / transform.scale / innerHeight) * domainHeight;
  const yMin = yMax - domainHeight / transform.scale;

  return { xMin, xMax, yMin, yMax };
}

function clampTransform(transform, innerWidth, innerHeight) {
  const scale = transform.scale;
  const scaledWidth = innerWidth * scale;
  const scaledHeight = innerHeight * scale;

  let x = transform.x;
  let y = transform.y;

  if (scaledWidth <= innerWidth) {
    x = (innerWidth - scaledWidth) / 2;
  } else {
    x = Math.min(0, Math.max(innerWidth - scaledWidth, x));
  }

  if (scaledHeight <= innerHeight) {
    y = (innerHeight - scaledHeight) / 2;
  } else {
    y = Math.min(0, Math.max(innerHeight - scaledHeight, y));
  }

  return { scale, x, y };
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function convertBrushToTransform(
  brushPixelRect,
  currentTransform,
  plotInnerWidth,
  plotInnerHeight,
) {
  const contentX0 =
    (brushPixelRect.x - currentTransform.x) / currentTransform.scale;
  const contentY0 =
    (brushPixelRect.y - currentTransform.y) / currentTransform.scale;
  const contentBrushWidth = brushPixelRect.width / currentTransform.scale;
  const contentBrushHeight = brushPixelRect.height / currentTransform.scale;

  const fitScaleX = plotInnerWidth / contentBrushWidth;
  const fitScaleY = plotInnerHeight / contentBrushHeight;
  const newScale = clamp(Math.min(fitScaleX, fitScaleY), ZOOM_MIN, ZOOM_MAX);

  const rawX = -contentX0 * newScale;
  const rawY = -contentY0 * newScale;

  return clampTransform(
    { scale: newScale, x: rawX, y: rawY },
    plotInnerWidth,
    plotInnerHeight,
  );
}

function formatTick(value) {
  if (Number.isInteger(value)) return String(value);
  return parseFloat(Number(value).toPrecision(4)).toString();
}

export default RechartsPlotter;

```

---

# src\lib\chartInteractionLogger.js

```javascript
export function logChartInteractionEvent({
  interactionType,
  visualizationLibrary,
  interactionSource,
}) {
  console.log({
    type: interactionType,
    library: visualizationLibrary,
    source: interactionSource,
  });
}

```

---

# src\lib\constants.js

```javascript
export const LIBRARIES = [
  "Recharts",
  "D3",
  "PixiJS",
  "Konva",
  "DeckGL",
  "ECharts",
];

export const DISABLED_LIBRARIES = ["DeckGL", "ECharts"];

/**
 * Dynamic image count support.
 * We no longer restrict to [1,2,4,8].
 */
export const MIN_IMAGES_PER_POINT = 1;
export const MAX_IMAGES_PER_POINT = 8;

export const DATA_POINT_LIMITS = {
  min: 1,
  max: 1000,
  defaultCount: 16,
};

export const CELL_SIZE = 50;
export const IMAGE_PADDING = 0.9;

export const ADAPTIVE_CELL_SIZE = {
  max: 50,
  min: 4,
  gapRatio: 0.55,
  collapseThreshold: 0,
};

export const PLOT_DIMENSIONS = {
  width: 900,
  height: 600,
};

export const PLOT_MARGIN = {
  top: 20,
  right: 20,
  bottom: 40,
  left: 50,
};

export const DATA_URL = "/data/data.json";

export const BRUSH_ZOOM = {
  fill: "rgba(68, 147, 255, 0.15)",
  stroke: "#4493ff",
  strokeWidth: 1.5,
  minimumSelectionPixels: 5,
};

export const ZOOM_SCALE_FACTOR = 1.5;

export const WHEEL_ZOOM_SENSITIVITY = 0.002;

/**
 * Prevent browser crashes.
 * 1000 x 1000 = 1,000,000 rendered images.
 */
export const MAX_RENDER_IMAGES = 50000;

```

---

# src\lib\densityLayout.js

```javascript
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
 * Always preserve requested image count.
 * We scale image sizes instead of collapsing image count.
 */
export function computeEffectiveImageCount(adaptiveCellSize, imageCount) {
  const parsed = Number(imageCount);

  if (Number.isNaN(parsed)) {
    return 1;
  }

  return Math.max(1, Math.min(8, Math.floor(parsed)));
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

/* ─── Internal: Clamping ────────────────────────────────────────── */

function clampCellSize(rawSize) {
  return Math.max(
    ADAPTIVE_CELL_SIZE.min,
    Math.min(rawSize, ADAPTIVE_CELL_SIZE.max),
  );
}

```

---

# src\lib\gridLayout.js

```javascript
import { MAX_RENDER_IMAGES, IMAGE_PADDING } from "./constants";

/**
 * Computes deterministic grid offsets for ANY image count.
 */
export function computeGridOffsets(cellWidth, cellHeight, imageCount) {
  const safeImageCount = sanitizeImageCount(imageCount);

  const columns = Math.ceil(Math.sqrt(safeImageCount));
  const rows = Math.ceil(safeImageCount / columns);

  const subWidth = Math.max(2, cellWidth - columns * IMAGE_PADDING);

  const subHeight = Math.max(2, cellHeight - rows * IMAGE_PADDING);

  const offsets = [];

  const centeredOffsetX = ((columns - 1) * subWidth) / 2;

  const centeredOffsetY = ((rows - 1) * subHeight) / 2;

  for (let index = 0; index < safeImageCount; index++) {
    const column = index % columns;
    const row = Math.floor(index / columns);

    const offsetX = column * subWidth - centeredOffsetX;

    const offsetY = row * subHeight - centeredOffsetY;

    offsets.push({
      offsetX,
      offsetY,
      width: subWidth,
      height: subHeight,
    });
  }

  return offsets;
}

/**
 * Computes deterministic image positions.
 */
export function computeImagePositions(
  centerX,
  centerY,
  cellWidth,
  cellHeight,
  imageCount,
) {
  const safeImageCount = sanitizeImageCount(imageCount);

  const offsets = computeGridOffsets(cellWidth, cellHeight, safeImageCount);

  const positions = [];

  for (let index = 0; index < offsets.length; index++) {
    if (positions.length >= MAX_RENDER_IMAGES) {
      break;
    }

    const offset = offsets[index];

    positions.push({
      imageIndex: index,

      x: centerX + offset.offsetX - offset.width / 2,

      y: centerY + offset.offsetY - offset.height / 2,

      width: offset.width,
      height: offset.height,
    });
  }

  return positions;
}

/**
 * Normalizes image counts.
 */
function sanitizeImageCount(imageCount) {
  const parsed = Number(imageCount);

  if (Number.isNaN(parsed)) {
    return 1;
  }

  return Math.max(1, Math.min(1000, Math.floor(parsed)));
}

```

---

# src\lib\imageCache.js

```javascript
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

```

---

# src\lib\interactionMode.js

```javascript
import { useState, useCallback } from "react";

export const INTERACTION_MODES = {
  ZOOM: "zoom",
  PAN: "pan",
};

export function useInteractionMode(initialMode = INTERACTION_MODES.ZOOM) {
  const [interactionMode, setInteractionMode] = useState(initialMode);

  const isZoomMode = interactionMode === INTERACTION_MODES.ZOOM;
  const isPanMode = interactionMode === INTERACTION_MODES.PAN;

  const activateZoomMode = useCallback(() => {
    setInteractionMode(INTERACTION_MODES.ZOOM);
  }, []);

  const activatePanMode = useCallback(() => {
    setInteractionMode(INTERACTION_MODES.PAN);
  }, []);

  return {
    interactionMode,
    setInteractionMode,
    isZoomMode,
    isPanMode,
    activateZoomMode,
    activatePanMode,
  };
}

```

---

# src\lib\plotterData.js

```javascript
import { useState, useEffect } from "react";
import { DATA_URL } from "./constants";

export function usePlotterData() {
  const [plotterPoints, setPlotterPoints] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);

  useEffect(() => {
    fetch(DATA_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status}`);
        }
        return response.json();
      })
      .then((jsonData) => {
        setPlotterPoints(jsonData);
        setIsLoading(false);
      })
      .catch((fetchError) => {
        setLoadError(fetchError.message);
        setIsLoading(false);
      });
  }, []);

  return { plotterPoints, isLoading, loadError };
}

```

---

# src\lib\syntheticDataGenerator.js

```javascript
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

    syntheticPoints.push({
      id: `synth-${index}`,
      x: column * spacing,
      y: row * spacing,
      image: BASE_IMAGE_PATH,
      label: `Point ${index + 1} (${column * spacing}, ${row * spacing})`,
      meta: {
        interval: column * spacing,
        angle: row * spacing,
        quality: parseFloat((0.7 + Math.random() * 0.25).toFixed(2)),
      },
    });
  }

  return syntheticPoints;
}

/**
 * Computes the number of columns for a near-square grid layout.
 */
function computeGridColumns(totalPoints) {
  return Math.ceil(Math.sqrt(totalPoints));
}

```

---

# src\main.jsx

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

```


```

---

# src\App.jsx

```jsx
import { useState, useMemo } from "react";

import Navbar from "./components/Navbar";
import ImageCountSelector from "./components/ImageCountSelector";
import DataPointCountControl from "./components/DataPointCountControl";

import RechartsPlotter from "./components/RechartsPlotter";
import D3Plotter from "./components/D3Plotter";
import PixiPlotter from "./components/PixiPlotter";
import KonvaPlotter from "./components/KonvaPlotter";

import { generateSyntheticPoints } from "./lib/syntheticDataGenerator";

import {
  DATA_POINT_LIMITS,
  MAX_IMAGES_PER_POINT,
  MIN_IMAGES_PER_POINT,
} from "./lib/constants";

import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState(null);

  const [imageCount, setImageCount] = useState(1);

  const [dataPointCount, setDataPointCount] = useState(
    DATA_POINT_LIMITS.defaultCount,
  );

  const [appliedXGap, setAppliedXGap] = useState(10);

  const [appliedYGap, setAppliedYGap] = useState(10);

  const [draftXGap, setDraftXGap] = useState(10);

  const [draftYGap, setDraftYGap] = useState(10);

  const hasChanges = draftXGap !== appliedXGap || draftYGap !== appliedYGap;

  /**
   * Stable deterministic synthetic data.
   */
  const syntheticPoints = useMemo(() => {
    return generateSyntheticPoints(
      Math.max(
        DATA_POINT_LIMITS.min,
        Math.min(dataPointCount, DATA_POINT_LIMITS.max),
      ),
    );
  }, [dataPointCount]);

  const handleGapUpdate = () => {
    setAppliedXGap(draftXGap);
    setAppliedYGap(draftYGap);
  };

  /**
   * Critical normalization.
   */
  const handleImageCountChange = (value) => {
    const parsed = Number(value);

    if (Number.isNaN(parsed)) {
      setImageCount(1);
      return;
    }

    const clamped = Math.max(
      MIN_IMAGES_PER_POINT,
      Math.min(MAX_IMAGES_PER_POINT, Math.floor(parsed)),
    );

    setImageCount(clamped);
  };

  const plotterProps = {
    imageCount,
    xGap: appliedXGap,
    yGap: appliedYGap,
    syntheticPoints,
  };

  const renderActivePlotter = () => {
    switch (activeTab) {
      case "Recharts":
        return <RechartsPlotter {...plotterProps} />;

      case "D3":
        return <D3Plotter {...plotterProps} />;

      case "PixiJS":
        return <PixiPlotter {...plotterProps} />;

      case "Konva":
        return <KonvaPlotter {...plotterProps} />;

      default:
        return (
          <div
            style={{
              height: "600px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#888",
              fontSize: "20px",
              fontWeight: "500",
            }}
          >
            Click a tab to render the chart
          </div>
        );
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Image Plotting System PoC</h1>

      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <DataPointCountControl
        dataPointCount={dataPointCount}
        onDataPointCountChange={setDataPointCount}
      />

      <ImageCountSelector
        imageCount={imageCount}
        setImageCount={handleImageCountChange}
      />

      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <label style={{ color: "#fff" }}>X Gap:</label>

          <input
            type="range"
            min="1"
            max="50"
            value={draftXGap}
            onChange={(e) => setDraftXGap(Number(e.target.value))}
          />

          <span
            style={{
              color: "#888",
              width: "20px",
            }}
          >
            {draftXGap}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <label style={{ color: "#fff" }}>Y Gap:</label>

          <input
            type="range"
            min="1"
            max="50"
            value={draftYGap}
            onChange={(e) => setDraftYGap(Number(e.target.value))}
          />

          <span
            style={{
              color: "#888",
              width: "20px",
            }}
          >
            {draftYGap}
          </span>
        </div>

        <button
          onClick={handleGapUpdate}
          disabled={!hasChanges}
          style={{
            padding: "5px 15px",
            backgroundColor: hasChanges ? "#2e8b57" : "#444",

            color: hasChanges ? "#fff" : "#888",

            border: "none",
            borderRadius: "4px",

            cursor: hasChanges ? "pointer" : "not-allowed",

            fontWeight: "bold",
          }}
        >
          Update
        </button>
      </div>

      <div className="viewer-container">{renderActivePlotter()}</div>
    </div>
  );
}

export default App;

```

---

# src\components\D3Plotter.jsx

```jsx
import { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import { usePlotterData } from "../lib/plotterData";
import { logChartInteractionEvent } from "../lib/chartInteractionLogger";
import { useInteractionMode, INTERACTION_MODES } from "../lib/interactionMode";

import { computeImagePositions } from "../lib/gridLayout";
import {
  CELL_SIZE,
  PLOT_DIMENSIONS,
  PLOT_MARGIN,
  BRUSH_ZOOM,
  ZOOM_SCALE_FACTOR,
  WHEEL_ZOOM_SENSITIVITY,
} from "../lib/constants";
import {
  computeAdaptiveCellSize,
  filterVisiblePoints,
  computeEffectiveImageCount,
} from "../lib/densityLayout";
import PlotterControls from "./PlotterControls";

/* ─── Entry Component ───────────────────────────────────────────── */

function D3Plotter({ imageCount, xGap, yGap, syntheticPoints }) {
  const {
    plotterPoints: fetchedPoints,
    isLoading,
    loadError,
  } = usePlotterData();

  const plotterPoints = syntheticPoints || fetchedPoints;

  if (!syntheticPoints && isLoading)
    return <div className="plotter-loading">Loading data…</div>;
  if (!syntheticPoints && loadError)
    return <div className="plotter-error">Error: {loadError}</div>;

  return (
    <D3PlotCanvas
      plotterPoints={plotterPoints}
      imageCount={imageCount}
      xGap={xGap}
      yGap={yGap}
    />
  );
}

/* ─── Canvas Wrapper ────────────────────────────────────────────── */

function D3PlotCanvas({ plotterPoints, imageCount, xGap, yGap }) {
  const svgRef = useRef(null);
  const tooltipRef = useRef(null);
  const containerRef = useRef(null);
  const plotControlsRef = useRef(null);
  const interactionCleanupRef = useRef(null);

  const originalXDomainRef = useRef(null);
  const originalYDomainRef = useRef(null);

  const [containerWidth, setContainerWidth] = useState(PLOT_DIMENSIONS.width);
  const { interactionMode, setInteractionMode, isZoomMode } =
    useInteractionMode();

  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) setContainerWidth(entry.contentRect.width);
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    if (!svgRef.current || plotterPoints.length === 0) return;

    const initResult = initializePlot(
      svgRef.current,
      tooltipRef.current,
      plotterPoints,
      imageCount,
      containerWidth,
      xGap,
      yGap,
      originalXDomainRef,
      originalYDomainRef,
    );

    plotControlsRef.current = initResult.controls;
    interactionCleanupRef.current = initResult.setActiveInteractionMode;

    initResult.setActiveInteractionMode(interactionMode);
  }, [plotterPoints, imageCount, containerWidth, xGap, yGap, interactionMode]);

  useEffect(() => {
    if (interactionCleanupRef.current) {
      interactionCleanupRef.current(interactionMode);
    }
  }, [interactionMode]);

  const handleZoomIn = () => plotControlsRef.current?.zoomIn();
  const handleZoomOut = () => plotControlsRef.current?.zoomOut();
  const handleReset = () => plotControlsRef.current?.resetZoom();

  const cursorStyle = isZoomMode ? "crosshair" : "grab";

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      <PlotterControls
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
        interactionMode={interactionMode}
        onModeChange={setInteractionMode}
      />
      <svg ref={svgRef} style={{ cursor: cursorStyle }} />
      <div
        ref={tooltipRef}
        className="plotter-tooltip"
        style={{ display: "none" }}
      />
    </div>
  );
}

/* ─── Plot Initialization ───────────────────────────────────────── */

function initializePlot(
  svgElement,
  tooltipElement,
  plotterPoints,
  imageCount,
  containerWidth,
  xGap,
  yGap,
  originalXDomainRef,
  originalYDomainRef,
) {
  const width = containerWidth;
  const height = PLOT_DIMENSIONS.height;
  const margin = PLOT_MARGIN;
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const svg = d3.select(svgElement);
  svg.selectAll("*").remove();
  svg
    .attr("width", width)
    .attr("height", height)
    .style("background", "transparent");

  const xScale = buildXScale(plotterPoints, innerWidth, xGap);
  const yScale = buildYScale(plotterPoints, innerHeight, yGap);

  originalXDomainRef.current = xScale.domain().slice();
  originalYDomainRef.current = yScale.domain().slice();

  const clipId = "plot-clip-" + Math.random().toString(36).slice(2);
  svg
    .append("defs")
    .append("clipPath")
    .attr("id", clipId)
    .append("rect")
    .attr("width", innerWidth)
    .attr("height", innerHeight);

  const rootGroup = svg
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  const plotGroup = rootGroup.append("g").attr("clip-path", `url(#${clipId})`);
  const contentGroup = plotGroup.append("g");

  renderAxes(rootGroup, xScale, yScale, innerWidth, innerHeight);
  renderGrid(contentGroup, xScale, yScale, innerWidth, innerHeight);

  const initialVisiblePoints = filterVisiblePoints(
    plotterPoints,
    (val) => xScale(val),
    (val) => yScale(val),
    innerWidth,
    innerHeight,
    CELL_SIZE,
  );

  const baseCellSize = computeAdaptiveCellSize(
    initialVisiblePoints,
    (val) => xScale(val),
    (val) => yScale(val),
  );

  const originalDomainSpanX = xScale.domain()[1] - xScale.domain()[0];
  const originalDomainSpanY = yScale.domain()[1] - yScale.domain()[0];

  const initialEffectiveImageCount = computeEffectiveImageCount(
    baseCellSize,
    imageCount,
  );

  renderImagePoints(
    contentGroup,
    initialVisiblePoints,
    xScale,
    yScale,
    initialEffectiveImageCount,
    tooltipElement,
    baseCellSize,
  );

  const redrawContext = {
    contentGroup,
    rootGroup,
    xScale,
    yScale,
    innerWidth,
    innerHeight,
    plotterPoints,
    imageCount,
    tooltipElement,
    baseCellSize,
    originalDomainSpanX,
    originalDomainSpanY,
  };

  const triggerRedraw = () => redrawPlotContent(redrawContext);

  const brushGroup = plotGroup.append("g").attr("class", "d3-brush");
  const panOverlay = plotGroup
    .append("rect")
    .attr("class", "d3-pan-overlay")
    .attr("width", innerWidth)
    .attr("height", innerHeight)
    .attr("fill", "transparent")
    .style("display", "none");

  const brush = buildBrush(
    xScale,
    yScale,
    innerWidth,
    innerHeight,
    brushGroup,
    triggerRedraw,
  );
  const panDrag = buildPanDrag(
    xScale,
    yScale,
    innerWidth,
    innerHeight,
    triggerRedraw,
  );

  attachWheelZoom(
    svg,
    margin,
    xScale,
    yScale,
    innerWidth,
    innerHeight,
    triggerRedraw,
  );
  attachDoubleClickReset(
    svg,
    xScale,
    yScale,
    originalXDomainRef,
    originalYDomainRef,
    triggerRedraw,
  );

  const setActiveInteractionMode = (mode) => {
    if (mode === INTERACTION_MODES.ZOOM) {
      panOverlay.style("display", "none");
      panOverlay.on(".drag", null);
      brushGroup.style("display", null);
      brushGroup.call(brush);
    } else {
      brushGroup.style("display", "none");
      brushGroup.on(".brush", null);
      panOverlay.style("display", null);
      panOverlay.call(panDrag);
    }
  };

  const controls = buildPlotControls(
    xScale,
    yScale,
    originalXDomainRef,
    originalYDomainRef,
    triggerRedraw,
  );

  return { controls, setActiveInteractionMode };
}

/* ─── Scale Builders ────────────────────────────────────────────── */

function buildXScale(plotterPoints, innerWidth, xGap) {
  const xExtent = d3.extent(plotterPoints, (point) => point.x);
  const padding = (xExtent[1] - xExtent[0]) * 0.15 || 5;
  const xSpacingScale = xGap / 10;

  return d3
    .scaleLinear()
    .domain([xExtent[0] - padding, xExtent[1] + padding])
    .range([0, innerWidth * xSpacingScale]);
}

function buildYScale(plotterPoints, innerHeight, yGap) {
  const yExtent = d3.extent(plotterPoints, (point) => point.y);
  const padding = (yExtent[1] - yExtent[0]) * 0.15 || 5;
  const ySpacingScale = yGap / 10;

  return d3
    .scaleLinear()
    .domain([yExtent[0] - padding, yExtent[1] + padding])
    .range([innerHeight * ySpacingScale, 0]);
}

/* ─── Brush Zoom ────────────────────────────────────────────────── */

function buildBrush(
  xScale,
  yScale,
  innerWidth,
  innerHeight,
  brushGroup,
  redrawCallback,
) {
  const brush = d3
    .brush()
    .extent([
      [0, 0],
      [innerWidth, innerHeight],
    ])
    .on("end", (event) => {
      handleBrushEnd(event, brush, brushGroup, xScale, yScale, redrawCallback);
    });

  return brush;
}

function handleBrushEnd(
  event,
  brush,
  brushGroup,
  xScale,
  yScale,
  redrawCallback,
) {
  const selection = event.selection;
  if (!selection) return;

  const [[pixelX0, pixelY0], [pixelX1, pixelY1]] = selection;
  const selectionWidth = pixelX1 - pixelX0;
  const selectionHeight = pixelY1 - pixelY0;

  if (
    selectionWidth < BRUSH_ZOOM.minimumSelectionPixels ||
    selectionHeight < BRUSH_ZOOM.minimumSelectionPixels
  ) {
    brushGroup.call(brush.move, null);
    return;
  }

  logChartInteractionEvent({
    interactionType: "ZOOM_IN",
    visualizationLibrary: "D3",
    interactionSource: "brush",
  });

  const newXDomain = [xScale.invert(pixelX0), xScale.invert(pixelX1)];
  const newYDomain = [yScale.invert(pixelY1), yScale.invert(pixelY0)];

  xScale.domain(newXDomain);
  yScale.domain(newYDomain);

  brushGroup.call(brush.move, null);
  redrawCallback();
}

/* ─── Pan Drag ──────────────────────────────────────────────────── */

function buildPanDrag(xScale, yScale, innerWidth, innerHeight, redrawCallback) {
  let startXDomain = null;
  let startYDomain = null;

  return d3
    .drag()
    .on("start", () => {
      logChartInteractionEvent({
        interactionType: "PAN",
        visualizationLibrary: "D3",
        interactionSource: "drag",
      });
      startXDomain = xScale.domain().slice();
      startYDomain = yScale.domain().slice();
    })
    .on("drag", (event) => {
      if (!startXDomain || !startYDomain) return;

      const xSpanPerPixel = (startXDomain[1] - startXDomain[0]) / innerWidth;
      const ySpanPerPixel = (startYDomain[1] - startYDomain[0]) / innerHeight;

      const domainDeltaX = -event.dx * xSpanPerPixel;
      const domainDeltaY = event.dy * ySpanPerPixel;

      const currentXDomain = xScale.domain();
      const currentYDomain = yScale.domain();

      xScale.domain([
        currentXDomain[0] + domainDeltaX,
        currentXDomain[1] + domainDeltaX,
      ]);
      yScale.domain([
        currentYDomain[0] + domainDeltaY,
        currentYDomain[1] + domainDeltaY,
      ]);

      redrawCallback();
    })
    .on("end", () => {
      startXDomain = null;
      startYDomain = null;
    });
}

/* ─── Wheel Zoom ────────────────────────────────────────────────── */

function attachWheelZoom(
  svg,
  margin,
  xScale,
  yScale,
  innerWidth,
  innerHeight,
  redrawCallback,
) {
  svg.on(
    "wheel.zoom",
    (event) => {
      event.preventDefault();
      handleWheelZoom(
        event,
        margin,
        xScale,
        yScale,
        innerWidth,
        innerHeight,
        redrawCallback,
      );
    },
    { passive: false },
  );
}

function handleWheelZoom(
  event,
  margin,
  xScale,
  yScale,
  innerWidth,
  innerHeight,
  redrawCallback,
) {
  const zoomFactor = Math.exp(-event.deltaY * WHEEL_ZOOM_SENSITIVITY);

  const svgRect = event.currentTarget.getBoundingClientRect();
  const cursorX = event.clientX - svgRect.left - margin.left;
  const cursorY = event.clientY - svgRect.top - margin.top;

  const isCursorInsidePlot =
    cursorX >= 0 &&
    cursorX <= innerWidth &&
    cursorY >= 0 &&
    cursorY <= innerHeight;

  if (!isCursorInsidePlot) return;

  const isZoomIn = event.deltaY < 0;
  logChartInteractionEvent({
    interactionType: isZoomIn ? "ZOOM_IN" : "ZOOM_OUT",
    visualizationLibrary: "D3",
    interactionSource: "wheel",
  });

  const anchorDataX = xScale.invert(cursorX);
  const anchorDataY = yScale.invert(cursorY);

  zoomDomainAroundAnchor(xScale, anchorDataX, zoomFactor);
  zoomDomainAroundAnchor(yScale, anchorDataY, zoomFactor);

  redrawCallback();
}

/* ─── Double-Click Reset ───────────────────────────────────────── */

function attachDoubleClickReset(
  svg,
  xScale,
  yScale,
  originalXDomainRef,
  originalYDomainRef,
  redrawCallback,
) {
  svg.on("dblclick.zoom", () => {
    logChartInteractionEvent({
      interactionType: "RESET",
      visualizationLibrary: "D3",
      interactionSource: "double_click",
    });
    resetDomains(xScale, yScale, originalXDomainRef, originalYDomainRef);
    redrawCallback();
  });
}

/* ─── Domain Manipulation Helpers ───────────────────────────────── */

function zoomDomainAroundAnchor(scale, anchorValue, zoomFactor) {
  const [domainMin, domainMax] = scale.domain();
  const newMin = anchorValue - (anchorValue - domainMin) / zoomFactor;
  const newMax = anchorValue + (domainMax - anchorValue) / zoomFactor;
  scale.domain([newMin, newMax]);
}

function zoomDomainAroundCenter(scale, zoomFactor) {
  const [domainMin, domainMax] = scale.domain();
  const center = (domainMin + domainMax) / 2;
  zoomDomainAroundAnchor(scale, center, zoomFactor);
}

function resetDomains(xScale, yScale, originalXDomainRef, originalYDomainRef) {
  xScale.domain(originalXDomainRef.current.slice());
  yScale.domain(originalYDomainRef.current.slice());
}

/* ─── Plot Controls (Button Handlers) ──────────────────────────── */

function buildPlotControls(
  xScale,
  yScale,
  originalXDomainRef,
  originalYDomainRef,
  redrawCallback,
) {
  return {
    zoomIn: () => {
      logChartInteractionEvent({
        interactionType: "ZOOM_IN",
        visualizationLibrary: "D3",
        interactionSource: "button",
      });
      zoomDomainAroundCenter(xScale, ZOOM_SCALE_FACTOR);
      zoomDomainAroundCenter(yScale, ZOOM_SCALE_FACTOR);
      redrawCallback();
    },
    zoomOut: () => {
      logChartInteractionEvent({
        interactionType: "ZOOM_OUT",
        visualizationLibrary: "D3",
        interactionSource: "button",
      });
      zoomDomainAroundCenter(xScale, 1 / ZOOM_SCALE_FACTOR);
      zoomDomainAroundCenter(yScale, 1 / ZOOM_SCALE_FACTOR);
      redrawCallback();
    },
    resetZoom: () => {
      logChartInteractionEvent({
        interactionType: "RESET",
        visualizationLibrary: "D3",
        interactionSource: "button",
      });
      resetDomains(xScale, yScale, originalXDomainRef, originalYDomainRef);
      redrawCallback();
    },
  };
}

/* ─── Content Redraw Pipeline ───────────────────────────────────── */

function redrawPlotContent(context) {
  const {
    contentGroup,
    rootGroup,
    xScale,
    yScale,
    innerWidth,
    innerHeight,
    plotterPoints,
    imageCount,
    tooltipElement,
    baseCellSize,
    originalDomainSpanX,
    originalDomainSpanY,
  } = context;

  /* Compute zoom factor from domain ratio so images grow when zoomed in,
     matching the transform-based magnification of Recharts/Konva/PixiJS. */
  const currentSpanX = xScale.domain()[1] - xScale.domain()[0];
  const currentSpanY = yScale.domain()[1] - yScale.domain()[0];
  const zoomFactorX = originalDomainSpanX / currentSpanX;
  const zoomFactorY = originalDomainSpanY / currentSpanY;
  const zoomFactor = Math.min(zoomFactorX, zoomFactorY);

  const zoomedCellSize = baseCellSize * zoomFactor;

  const visiblePoints = filterVisiblePoints(
    plotterPoints,
    (val) => xScale(val),
    (val) => yScale(val),
    innerWidth,
    innerHeight,
    zoomedCellSize,
  );

  const effectiveImageCount = computeEffectiveImageCount(
    zoomedCellSize,
    imageCount,
  );

  contentGroup.selectAll(".grid-lines, .image-point").remove();

  renderGrid(contentGroup, xScale, yScale, innerWidth, innerHeight);
  renderImagePoints(
    contentGroup,
    visiblePoints,
    xScale,
    yScale,
    effectiveImageCount,
    tooltipElement,
    zoomedCellSize,
  );

  updateAxes(rootGroup, xScale, yScale);
}

/* ─── Axes ──────────────────────────────────────────────────────── */

function renderAxes(container, xScale, yScale, innerWidth, innerHeight) {
  container
    .append("g")
    .attr("class", "x-axis")
    .attr("transform", `translate(0,${innerHeight})`)
    .call(d3.axisBottom(xScale).ticks(8))
    .selectAll("text")
    .attr("fill", "#888");

  container
    .append("g")
    .attr("class", "y-axis")
    .call(d3.axisLeft(yScale).ticks(6))
    .selectAll("text")
    .attr("fill", "#888");

  styleAxisElements(container);
}

function updateAxes(container, xScale, yScale) {
  container.select(".x-axis").call(d3.axisBottom(xScale).ticks(8));
  container.select(".y-axis").call(d3.axisLeft(yScale).ticks(6));

  container.selectAll(".x-axis text, .y-axis text").attr("fill", "#888");
  styleAxisElements(container);
}

function styleAxisElements(container) {
  container.selectAll(".x-axis line, .y-axis line").attr("stroke", "#555");
  container.selectAll(".x-axis path, .y-axis path").attr("stroke", "#555");
}

/* ─── Grid ──────────────────────────────────────────────────────── */

function renderGrid(container, xScale, yScale, innerWidth, innerHeight) {
  const gridGroup = container.append("g").attr("class", "grid-lines");

  gridGroup
    .selectAll("line.horizontal")
    .data(yScale.ticks(6))
    .enter()
    .append("line")
    .attr("class", "horizontal")
    .attr("x1", 0)
    .attr("x2", innerWidth)
    .attr("y1", (tick) => yScale(tick))
    .attr("y2", (tick) => yScale(tick))
    .attr("stroke", "#2a2a3e")
    .attr("stroke-dasharray", "3 3");

  gridGroup
    .selectAll("line.vertical")
    .data(xScale.ticks(8))
    .enter()
    .append("line")
    .attr("class", "vertical")
    .attr("x1", (tick) => xScale(tick))
    .attr("x2", (tick) => xScale(tick))
    .attr("y1", 0)
    .attr("y2", innerHeight)
    .attr("stroke", "#2a2a3e")
    .attr("stroke-dasharray", "3 3");
}

/* ─── Image Points ──────────────────────────────────────────────── */

function renderImagePoints(
  container,
  plotterPoints,
  xScale,
  yScale,
  imageCount,
  tooltipElement,
  cellSize = CELL_SIZE,
) {
  const tooltip = d3.select(tooltipElement);

  plotterPoints.forEach((point) => {
    const centerX = xScale(point.x);
    const centerY = yScale(point.y);
    const positions = computeImagePositions(
      centerX,
      centerY,
      cellSize,
      cellSize,
      imageCount,
    );

    const pointGroup = container.append("g").attr("class", "image-point");

    positions.forEach((position) => {
      pointGroup
        .append("image")
        .attr("href", point.image)
        .attr("x", position.x)
        .attr("y", position.y)
        .attr("width", position.width)
        .attr("height", position.height)
        .attr("preserveAspectRatio", "xMidYMid meet")
        .style("cursor", "pointer");
    });

    pointGroup
      .on("mouseenter", (event) => showTooltip(tooltip, event, point))
      .on("mousemove", (event) => moveTooltip(tooltip, event))
      .on("mouseleave", () => hideTooltip(tooltip));
  });
}

/* ─── Tooltip ───────────────────────────────────────────────────── */

function showTooltip(tooltip, event, point) {
  tooltip
    .style("display", "block")
    .html(
      `<div class="tooltip-label">${point.label}</div>` +
        `<div class="tooltip-meta">` +
        `<span>Interval: ${point.meta.interval}s</span>` +
        `<span>Angle: ${point.meta.angle}°</span>` +
        `<span>Quality: ${point.meta.quality}</span>` +
        `</div>`,
    );

  moveTooltip(tooltip, event);
}

function moveTooltip(tooltip, event) {
  const containerRect = event.currentTarget
    .closest(".viewer-container")
    ?.getBoundingClientRect();
  if (!containerRect) return;

  tooltip
    .style("left", `${event.clientX - containerRect.left + 12}px`)
    .style("top", `${event.clientY - containerRect.top - 10}px`);
}

function hideTooltip(tooltip) {
  tooltip.style("display", "none");
}

export default D3Plotter;

```

---

# src\components\DataPointCountControl.jsx

```jsx
import { useState, useCallback } from "react";

const MIN_DATA_POINTS = 1;
const MAX_DATA_POINTS = 1000;
const SLIDER_STEP = 1;

function DataPointCountControl({ dataPointCount, onDataPointCountChange }) {
  const [inputValue, setInputValue] = useState(String(dataPointCount));

  const handleSliderChange = useCallback(
    (event) => {
      const newCount = Number(event.target.value);
      setInputValue(String(newCount));
      onDataPointCountChange(newCount);
    },
    [onDataPointCountChange],
  );

  const handleInputChange = useCallback((event) => {
    setInputValue(event.target.value);
  }, []);

  const handleInputBlur = useCallback(() => {
    const parsedValue = parseInt(inputValue, 10);

    if (Number.isNaN(parsedValue)) {
      setInputValue(String(dataPointCount));
      return;
    }

    const clampedValue = Math.max(
      MIN_DATA_POINTS,
      Math.min(parsedValue, MAX_DATA_POINTS),
    );

    setInputValue(String(clampedValue));
    onDataPointCountChange(clampedValue);
  }, [inputValue, dataPointCount, onDataPointCountChange]);

  const handleInputKeyDown = useCallback(
    (event) => {
      if (event.key === "Enter") {
        handleInputBlur();
      }
    },
    [handleInputBlur],
  );

  return (
    <div className="data-point-control">
      <label className="data-point-label" htmlFor="dataPointSlider">
        Data Points:
      </label>

      <input
        id="dataPointSlider"
        type="range"
        min={MIN_DATA_POINTS}
        max={MAX_DATA_POINTS}
        step={SLIDER_STEP}
        value={dataPointCount}
        onChange={handleSliderChange}
        className="data-point-slider"
      />

      <input
        type="number"
        min={MIN_DATA_POINTS}
        max={MAX_DATA_POINTS}
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        onKeyDown={handleInputKeyDown}
        className="data-point-input"
      />

      <span className="data-point-count-badge">{dataPointCount}</span>
    </div>
  );
}

export default DataPointCountControl;

```

---

# src\components\DeckGLPlotter.jsx

```jsx
import { useState, useMemo, useRef, useEffect } from "react";
import DeckGL from "@deck.gl/react";
import { OrthographicView } from "@deck.gl/core";
import { IconLayer, TextLayer } from "@deck.gl/layers";
import * as d3 from "d3";

import { usePlotterData } from "../lib/plotterData";
import { computeImagePositions } from "../lib/gridLayout";

import { CELL_SIZE, PLOT_DIMENSIONS, PLOT_MARGIN } from "../lib/constants";

import PlotterControls from "./PlotterControls";

const ORTHOGRAPHIC_VIEW = new OrthographicView({
  id: "orthographic-view",
  flipY: true,
});

const ZOOM_MIN = -4;
const ZOOM_MAX = 8;

const BASE_X_GAP = 10;
const BASE_Y_GAP = 10;

function DeckGLPlotter({ imageCount, xGap, yGap }) {
  const { plotterPoints, isLoading, loadError } = usePlotterData();

  if (isLoading) {
    return <div className="plotter-loading">Loading data…</div>;
  }

  if (loadError) {
    return <div className="plotter-error">Error: {loadError}</div>;
  }

  return (
    <DeckGLCanvas
      plotterPoints={plotterPoints}
      imageCount={imageCount}
      xGap={xGap}
      yGap={yGap}
    />
  );
}

function DeckGLCanvas({ plotterPoints, imageCount, xGap, yGap }) {
  const containerRef = useRef(null);

  const [containerWidth, setContainerWidth] = useState(PLOT_DIMENSIONS.width);

  const [hoveredPoint, setHoveredPoint] = useState(null);

  const [tooltipPos, setTooltipPos] = useState({
    x: 0,
    y: 0,
  });

  const [viewState, setViewState] = useState({
    target: [0, 0, 0],
    zoom: 0,
  });

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];

      if (entry) {
        setContainerWidth(entry.contentRect.width);
      }
    });

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  const width = containerWidth;
  const height = PLOT_DIMENSIONS.height;

  const innerWidth = Math.max(
    width - PLOT_MARGIN.left - PLOT_MARGIN.right,
    320,
  );

  const innerHeight = Math.max(
    height - PLOT_MARGIN.top - PLOT_MARGIN.bottom,
    240,
  );

  /**
   * NORMALIZE DATA
   */
  const normalizedPoints = useMemo(() => {
    const xScale = xGap / BASE_X_GAP;
    const yScale = yGap / BASE_Y_GAP;

    return plotterPoints.map((point) => ({
      ...point,
      scaledX: point.x * xScale,
      scaledY: point.y * yScale,
    }));
  }, [plotterPoints, xGap, yGap]);

  /**
   * WORLD EXTENTS
   */
  const xExtent = useMemo(() => {
    return extentWithPadding(normalizedPoints.map((d) => d.scaledX));
  }, [normalizedPoints]);

  const yExtent = useMemo(() => {
    return extentWithPadding(normalizedPoints.map((d) => d.scaledY));
  }, [normalizedPoints]);

  /**
   * FIT DATA INITIALLY
   */
  useEffect(() => {
    const domainWidth = xExtent[1] - xExtent[0];
    const domainHeight = yExtent[1] - yExtent[0];

    const scaleX = innerWidth / domainWidth;
    const scaleY = innerHeight / domainHeight;

    const scale = Math.min(scaleX, scaleY);

    const zoom = Math.log2(scale);

    const centerX = (xExtent[0] + xExtent[1]) / 2;
    const centerY = (yExtent[0] + yExtent[1]) / 2;

    Promise.resolve().then(() => {
      setViewState({
        target: [centerX, centerY, 0],
        zoom,
      });
    });
  }, [xExtent, yExtent, innerWidth, innerHeight]);

  /**
   * IMAGE DATA
   */
  const imageData = useMemo(() => {
    const items = [];

    for (const point of normalizedPoints) {
      const positions = computeImagePositions(
        point.scaledX,
        point.scaledY,
        CELL_SIZE,
        CELL_SIZE,
        imageCount,
      );

      positions.forEach((position, index) => {
        if (!point.image) return;

        items.push({
          id: `${point.id}-${index}`,

          x: position.x,
          y: position.y,

          width: position.width,
          height: position.height,

          image: point.image,

          point,
        });
      });
    }

    return items;
  }, [normalizedPoints, imageCount]);

  /**
   * GRID LINES
   */


  /**
   * LAYERS
   */
  const layers = useMemo(() => {
    return [
      new IconLayer({
        id: "image-layer",

        data: imageData,

        pickable: true,

        billboard: false,

        sizeUnits: "common",

        getPosition: (d) => [d.x, d.y],

        getIcon: (d) => ({
          url: d.image,
          width: d.width,
          height: d.height,
        }),

        getSize: (d) => d.width,

        onHover: (info) => {
          if (info.object) {
            setHoveredPoint(info.object.point);

            setTooltipPos({
              x: info.x,
              y: info.y,
            });
          } else {
            setHoveredPoint(null);
          }
        },

        updateTriggers: {
          getIcon: imageData,
        },
      }),

      new TextLayer({
        id: "axis-labels",

        data: [
          ...d3.ticks(xExtent[0], xExtent[1], 10).map((x) => ({
            position: [x, yExtent[0] - 10],
            text: formatTick(x),
          })),

          ...d3.ticks(yExtent[0], yExtent[1], 8).map((y) => ({
            position: [xExtent[0] - 10, y],
            text: formatTick(y),
          })),
        ],

        getPosition: (d) => d.position,

        getText: (d) => d.text,

        getSize: 12,

        getColor: [140, 140, 140],

        getTextAnchor: "middle",

        getAlignmentBaseline: "center",
      }),
    ];
  }, [imageData, xExtent, yExtent]);

  /**
   * CONTROLS
   */
  const handleZoomIn = () => {
    setViewState((prev) => ({
      ...prev,
      zoom: Math.min(prev.zoom + 0.5, ZOOM_MAX),
    }));
  };

  const handleZoomOut = () => {
    setViewState((prev) => ({
      ...prev,
      zoom: Math.max(prev.zoom - 0.5, ZOOM_MIN),
    }));
  };

  const handleReset = () => {
    const domainWidth = xExtent[1] - xExtent[0];
    const domainHeight = yExtent[1] - yExtent[0];

    const scaleX = innerWidth / domainWidth;
    const scaleY = innerHeight / domainHeight;

    const scale = Math.min(scaleX, scaleY);

    const zoom = Math.log2(scale);

    setViewState({
      target: [(xExtent[0] + xExtent[1]) / 2, (yExtent[0] + yExtent[1]) / 2, 0],
      zoom,
    });
  };

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
      }}
    >
      <PlotterControls
        zoomLevel={Number(Math.pow(2, viewState.zoom).toFixed(2))}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
      />

      <div
        style={{
          position: "relative",
          width: "100%",
          height,
          background: "#16213e",
          overflow: "hidden",
        }}
      >
        <DeckGL
          views={ORTHOGRAPHIC_VIEW}
          controller={{
            dragPan: true,
            scrollZoom: true,
            doubleClickZoom: true,
            touchZoom: true,
            touchRotate: false,
            keyboard: false,
          }}
          layers={layers}
          width={width}
          height={height}
          viewState={viewState}
          onViewStateChange={({ viewState }) => {
            setViewState({
              ...viewState,
              zoom: clamp(viewState.zoom, ZOOM_MIN, ZOOM_MAX),
            });
          }}
          parameters={{
            depthTest: false,
            blend: true,
          }}
          style={{
            position: "absolute",
            inset: 0,
          }}
        />

        {hoveredPoint && (
          <div
            className="plotter-tooltip"
            style={{
              display: "block",
              position: "fixed",
              left: tooltipPos.x + 12,
              top: tooltipPos.y - 10,
              pointerEvents: "none",
              zIndex: 1000,
            }}
          >
            <div className="tooltip-label">{hoveredPoint.label}</div>

            <div className="tooltip-meta">
              <span>Interval: {hoveredPoint.meta.interval}s</span>

              <span>Angle: {hoveredPoint.meta.angle}°</span>

              <span>Quality: {hoveredPoint.meta.quality}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function extentWithPadding(values) {
  if (!values.length) return [0, 1];

  const min = Math.min(...values);
  const max = Math.max(...values);

  const span = max - min;

  const pad = span === 0 ? 5 : Math.max(span * 0.18, 1);

  return [min - pad, max + pad];
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function formatTick(value) {
  if (Number.isInteger(value)) {
    return String(value);
  }

  return parseFloat(Number(value).toPrecision(4)).toString();
}

export default DeckGLPlotter;

```

---

# src\components\EChartsPlotter.jsx

```jsx
import { useMemo, useCallback, useRef } from "react";
import ReactECharts from "echarts-for-react";
import { usePlotterData } from "../lib/plotterData";
import { CELL_SIZE } from "../lib/constants";
import PlotterControls from "./PlotterControls";

function EChartsPlotter({ imageCount, xGap, yGap }) {
  const { plotterPoints, isLoading, loadError } = usePlotterData();

  if (isLoading) return <div className="plotter-loading">Loading data…</div>;
  if (loadError) return <div className="plotter-error">Error: {loadError}</div>;

  return (
    <EChartsCanvas
      plotterPoints={plotterPoints}
      imageCount={imageCount}
      xGap={xGap}
      yGap={yGap}
    />
  );
}

function EChartsCanvas({ plotterPoints, imageCount, xGap, yGap }) {
  const echartsRef = useRef(null);

  const chartOption = useMemo(
    () => buildChartOption(plotterPoints, imageCount, xGap, yGap),
    [plotterPoints, imageCount, xGap, yGap],
  );

  const handleChartEvents = useCallback(() => ({}), []);

  const handleZoom = (scale) => {
    if (!echartsRef.current) return;
    const instance = echartsRef.current.getEchartsInstance();
    const option = instance.getOption();
    const dataZoom = option.dataZoom[0];
    const range = dataZoom.end - dataZoom.start;
    const newRange = range * scale;
    const center = (dataZoom.end + dataZoom.start) / 2;
    instance.dispatchAction({
      type: "dataZoom",
      start: Math.max(0, center - newRange / 2),
      end: Math.min(100, center + newRange / 2),
    });
  };

  const handleReset = () => {
    if (!echartsRef.current) return;
    const instance = echartsRef.current.getEchartsInstance();
    instance.dispatchAction({ type: "dataZoom", start: 0, end: 100 });
  };

  return (
    <div style={{ position: "relative" }}>
      <PlotterControls
        onZoomIn={() => handleZoom(1 / 1.5)}
        onZoomOut={() => handleZoom(1.5)}
        onReset={handleReset}
      />
      <ReactECharts
        ref={echartsRef}
        option={chartOption}
        style={{ height: 550, width: "100%" }}
        notMerge
        opts={{ renderer: "canvas" }}
        onEvents={handleChartEvents()}
      />
    </div>
  );
}

function buildChartOption(plotterPoints, imageCount, xGap, yGap) {
  const gridConfig = getGridConfig(imageCount);
  const subCellWidth = CELL_SIZE;
  const subCellHeight = CELL_SIZE;

  const xValues = plotterPoints.map((p) => p.x);
  const yValues = plotterPoints.map((p) => p.y);

  const xMin = Math.min(...xValues);
  const xMax = Math.max(...xValues);
  const yMin = Math.min(...yValues);
  const yMax = Math.max(...yValues);

  const xPadding = (xMax - xMin) * 0.15 || 5;
  const yPadding = (yMax - yMin) * 0.15 || 5;

  const xCenter = (xMax + xMin) / 2;
  const yCenter = (yMax + yMin) / 2;

  const xSpacingScale = xGap / 10;
  const ySpacingScale = yGap / 10;

  const xRange = (xMax - xMin + 2 * xPadding) / xSpacingScale;
  const yRange = (yMax - yMin + 2 * yPadding) / ySpacingScale;

  return {
    backgroundColor: "transparent",
    tooltip: {
      trigger: "item",
      formatter: formatTooltip,
    },
    xAxis: {
      type: "value",
      min: xCenter - xRange / 2,
      max: xCenter + xRange / 2,
      axisLine: { lineStyle: { color: "#555" } },
      axisLabel: { color: "#888" },
      splitLine: { lineStyle: { color: "#2a2a3e", type: "dashed" } },
    },
    yAxis: {
      type: "value",
      min: yCenter - yRange / 2,
      max: yCenter + yRange / 2,
      axisLine: { lineStyle: { color: "#555" } },
      axisLabel: { color: "#888" },
      splitLine: { lineStyle: { color: "#2a2a3e", type: "dashed" } },
    },
    dataZoom: [
      { type: "inside", xAxisIndex: 0 },
      { type: "inside", yAxisIndex: 0 },
    ],
    series: [
      {
        type: "custom",
        renderItem: function (params, api) {
          const x = api.value(0);
          const y = api.value(1);
          const coord = api.coord([x, y]);

          const children = [];
          let subIndex = 0;
          for (let row = 0; row < gridConfig.rows; row++) {
            for (let col = 0; col < gridConfig.columns; col++) {
              if (subIndex >= imageCount) break;

              const xPos =
                col * (subCellWidth + xGap) -
                ((gridConfig.columns - 1) * (subCellWidth + xGap)) / 2;
              const yPos =
                row * (subCellHeight + yGap) -
                ((gridConfig.rows - 1) * (subCellHeight + yGap)) / 2;

              children.push({
                type: "image",
                style: {
                  image: api.value(2),
                  x: coord[0] + xPos - subCellWidth / 2,
                  y: coord[1] + yPos - subCellHeight / 2,
                  width: subCellWidth,
                  height: subCellHeight,
                },
              });

              subIndex++;
            }
          }
          return { type: "group", children: children };
        },
        data: plotterPoints.map((point) => ({
          value: [point.x, point.y, point.image],
          name: point.label,
          meta: point.meta,
        })),
      },
    ],
  };
}

// Removed graphic element builders since we are using custom series

function getGridConfig(imageCount) {
  const configs = {
    1: { rows: 1, columns: 1 },
    2: { rows: 1, columns: 2 },
    4: { rows: 2, columns: 2 },
    8: { rows: 2, columns: 4 },
  };

  return configs[imageCount] || configs[1];
}

function formatTooltip(params) {
  if (!params || !params.data) return "";

  const { name, data } = params;
  const meta = data.meta;

  return (
    `<strong>${name}</strong><br/>` +
    `Interval: ${meta.interval}s<br/>` +
    `Angle: ${meta.angle}°<br/>` +
    `Quality: ${meta.quality}`
  );
}

export default EChartsPlotter;

```

---

# src\components\ImageCountSelector.jsx

```jsx
import { MAX_IMAGES_PER_POINT, MIN_IMAGES_PER_POINT } from "../lib/constants";

function ImageCountSelector({ imageCount, setImageCount }) {
  return (
    <div className="image-count-selector">
      <span className="selector-label">Images per point:</span>

      <input
        type="number"
        min={MIN_IMAGES_PER_POINT}
        max={MAX_IMAGES_PER_POINT}
        value={imageCount}
        onChange={(e) => setImageCount(e.target.value)}
        className="data-point-input"
      />

      <span
        style={{
          color: "#888",
          marginLeft: "10px",
        }}
      >
        Max: {MAX_IMAGES_PER_POINT}
      </span>
    </div>
  );
}

export default ImageCountSelector;

```

---

# src\components\KonvaPlotter.jsx

```jsx
import { useState, useRef, useCallback, useEffect, useMemo } from "react";
import {
  Stage,
  Layer,
  Image as KonvaImage,
  Text,
  Line,
  Rect,
  Group,
} from "react-konva";
import { usePlotterData } from "../lib/plotterData";
import { computeImagePositions } from "../lib/gridLayout";
import { CELL_SIZE, PLOT_DIMENSIONS, PLOT_MARGIN } from "../lib/constants";
import {
  computeAdaptiveCellSize,
  filterVisiblePoints,
  computeEffectiveImageCount,
} from "../lib/densityLayout";
import PlotterControls from "./PlotterControls";
import { logChartInteractionEvent } from "../lib/chartInteractionLogger";
import { useInteractionMode } from "../lib/interactionMode";
import { getCachedImageObject, preloadImageSources } from "../lib/imageCache";


const AXIS_TICK_COUNT = 8;
const EXTENT_PADDING_RATIO = 0.2;
const EXTENT_FALLBACK_PADDING = 5;
const ZOOM_STEP = 1.5;
const PINCH_ZOOM_SENSITIVITY = 0.01;
const ZOOM_MIN = 0.3;
const ZOOM_MAX = 100000;
const GRID_COLOR = "#2a2a3e";
const AXIS_LINE_COLOR = "#555555";
const TICK_LABEL_COLOR = "#aaaaaa";
const TICK_LABEL_FONT_SIZE = 11;
const BRUSH_FILL = "rgba(68, 147, 255, 0.15)";
const BRUSH_STROKE = "#4493ff";
const BRUSH_STROKE_WIDTH = 1.5;
const BRUSH_MIN_PIXELS = 5;

function KonvaPlotter({ imageCount, syntheticPoints }) {
  const { plotterPoints: fetchedPoints, isLoading, loadError } = usePlotterData();
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const plotterPoints = syntheticPoints || fetchedPoints;

  useEffect(() => {
    if (!plotterPoints || plotterPoints.length === 0) {
      setImagesLoaded(true);
      return;
    }
    const uniqueSources = [...new Set(plotterPoints.map((point) => point.image))];
    preloadImageSources(uniqueSources).then(() => {
      setImagesLoaded(true);
    });
  }, [plotterPoints]);

  if (!syntheticPoints && isLoading) return <div className="plotter-loading">Loading data…</div>;
  if (!syntheticPoints && loadError) return <div className="plotter-error">Error: {loadError}</div>;
  if (!imagesLoaded) return <div className="plotter-loading">Preloading images…</div>;

  return (
    <KonvaCanvas
      plotterPoints={plotterPoints}
      imageCount={imageCount}
    />
  );
}

function KonvaCanvas({ plotterPoints, imageCount }) {
  /* Hot-path viewport state stored in refs — mutations never trigger React
     reconciliation. A RAF-throttled forceUpdate flushes the view at ≤60 fps. */
  const scaleRef = useRef(1);
  const offsetRef = useRef({ x: 0, y: 0 });
  const rafPendingRef = useRef(false);
  const [, forceUpdate] = useState(0);

  /* React state only for things that need declarative rendering. */
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [brushRect, setBrushRect] = useState(null);

  const stageRef = useRef(null);
  const brushStartRef = useRef(null);
  const dragRef = useRef({ dragging: false, startX: 0, startY: 0, startOffset: { x: 0, y: 0 } });
  const draggableGroupRef = useRef(null);

  /* Schedule a single React flush per animation frame. */
  const scheduleUpdate = useCallback(() => {
    if (rafPendingRef.current) return;
    rafPendingRef.current = true;
    requestAnimationFrame(() => {
      rafPendingRef.current = false;
      forceUpdate((n) => n + 1);
    });
  }, []);

  const {
    interactionMode,
    setInteractionMode,
    isZoomMode,
    isPanMode,
  } = useInteractionMode();

  const innerWidth =
    PLOT_DIMENSIONS.width - PLOT_MARGIN.left - PLOT_MARGIN.right;
  const innerHeight =
    PLOT_DIMENSIONS.height - PLOT_MARGIN.top - PLOT_MARGIN.bottom;

  /* Read hot-path state from refs — always current, never stale. */
  const contentScale = scaleRef.current;
  const contentOffset = offsetRef.current;

  const { xScale, yScale, xExtent, yExtent } = buildScales(
    plotterPoints,
    innerWidth,
    innerHeight,
  );

  /* Domain-based visible region — shrinks as zoom increases, matching D3. */
  const visibleDomain = computeVisibleDomain(
    xExtent,
    yExtent,
    contentOffset,
    contentScale,
    innerWidth,
    innerHeight,
  );

  /* Dynamic scales recomputed from the visible domain — no matrix transform. */
  const dynamicXScale = buildLinearScale(
    visibleDomain.xMin,
    visibleDomain.xMax,
    0,
    innerWidth,
  );
  const dynamicYScale = buildLinearScale(
    visibleDomain.yMin,
    visibleDomain.yMax,
    innerHeight,
    0,
  );

  /* Cancel in-progress brush when switching to pan mode. */
  useEffect(() => {
    if (isPanMode) {
      brushStartRef.current = null;
      setBrushRect(null);
    }
  }, [isPanMode]);

  /* Base cell size computed once from the full dataset. */
  const adaptiveCellSizeBase = useMemo(
    () => computeAdaptiveCellSize(plotterPoints, xScale, yScale),
    [plotterPoints, xScale, yScale],
  );

  /* Zoom-scaled cell size — grows as domain shrinks. */
  const adaptiveCellSizeForRender = adaptiveCellSizeBase * contentScale;

  /* Viewport culling in screen-space. */
  const visiblePointsForRender = useMemo(() => {
    const xScreenFn = (val) => xScale(val) * contentScale + contentOffset.x;
    const yScreenFn = (val) => yScale(val) * contentScale + contentOffset.y;
    return filterVisiblePoints(
      plotterPoints,
      xScreenFn,
      yScreenFn,
      innerWidth,
      innerHeight,
      adaptiveCellSizeBase * contentScale,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [plotterPoints, xScale, yScale, contentScale, contentOffset.x, contentOffset.y, innerWidth, innerHeight, adaptiveCellSizeBase]);

  const effectiveImageCountForRender = computeEffectiveImageCount(
    adaptiveCellSizeForRender,
    imageCount,
  );

  /* ── Wheel zoom — mutates refs, schedules RAF flush ── */
  const handleWheel = useCallback(
    (event) => {
      event.evt.preventDefault();
      const stage = event.target.getStage();
      const pointerPosition = stage.getPointerPosition();

      if (!isPointerInsidePlotArea(pointerPosition, innerWidth, innerHeight))
        return;

      const nativeEvent = event.evt;
      const isPinchGesture = nativeEvent.ctrlKey;
      const scaleDelta = computeWheelScaleDelta(nativeEvent.deltaY, isPinchGesture);
      const currentScale = scaleRef.current;
      const currentOffset = offsetRef.current;
      const newScale = clampScale(currentScale * scaleDelta);

      logChartInteractionEvent({
        interactionType: scaleDelta > 1 ? "ZOOM_IN" : "ZOOM_OUT",
        visualizationLibrary: "Konva",
        interactionSource: "wheel",
      });

      const mouseRelX = pointerPosition.x - PLOT_MARGIN.left - currentOffset.x;
      const mouseRelY = pointerPosition.y - PLOT_MARGIN.top - currentOffset.y;

      const rawOffsetX = currentOffset.x - mouseRelX * (newScale / currentScale - 1);
      const rawOffsetY = currentOffset.y - mouseRelY * (newScale / currentScale - 1);
      const clampedOffset = clampContentOffset(rawOffsetX, rawOffsetY, newScale, innerWidth, innerHeight);

      scaleRef.current = newScale;
      offsetRef.current = clampedOffset;
      scheduleUpdate();
    },
    [innerWidth, innerHeight, scheduleUpdate],
  );

  /* ── Pan drag — mutates refs, schedules RAF flush ── */
  const handleStageMouseDown = useCallback(
    (event) => {
      const stage = event.target.getStage();
      const pointer = stage.getPointerPosition();
      if (!isPointerInsidePlotArea(pointer, innerWidth, innerHeight)) return;

      if (isPanMode) {
        logChartInteractionEvent({
          interactionType: "PAN",
          visualizationLibrary: "Konva",
          interactionSource: "drag",
        });
        setIsDragging(true);
        dragRef.current = {
          dragging: true,
          startX: pointer.x,
          startY: pointer.y,
          startOffset: { ...offsetRef.current },
        };
      } else if (isZoomMode) {
        const plotX = clampValue(pointer.x - PLOT_MARGIN.left, 0, innerWidth);
        const plotY = clampValue(pointer.y - PLOT_MARGIN.top, 0, innerHeight);
        brushStartRef.current = { x: plotX, y: plotY };
        setBrushRect({ x: plotX, y: plotY, width: 0, height: 0 });
      }
    },
    [isPanMode, isZoomMode, innerWidth, innerHeight],
  );

  const handleStageMouseMove = useCallback(
    (event) => {
      const stage = event.target.getStage();
      const pointer = stage.getPointerPosition();
      if (!pointer) return;

      if (dragRef.current.dragging) {
        const dx = pointer.x - dragRef.current.startX;
        const dy = pointer.y - dragRef.current.startY;
        const clamped = clampContentOffset(
          dragRef.current.startOffset.x + dx,
          dragRef.current.startOffset.y + dy,
          scaleRef.current,
          innerWidth,
          innerHeight,
        );
        offsetRef.current = clamped;
        scheduleUpdate();
        return;
      }

      if (brushStartRef.current) {
        const plotX = clampValue(pointer.x - PLOT_MARGIN.left, 0, innerWidth);
        const plotY = clampValue(pointer.y - PLOT_MARGIN.top, 0, innerHeight);
        const startPoint = brushStartRef.current;
        setBrushRect({
          x: Math.min(startPoint.x, plotX),
          y: Math.min(startPoint.y, plotY),
          width: Math.abs(plotX - startPoint.x),
          height: Math.abs(plotY - startPoint.y),
        });
      }
    },
    [innerWidth, innerHeight, scheduleUpdate],
  );

  const handleStageMouseUp = useCallback(
    (localBrushRect) => {
      if (dragRef.current.dragging) {
        setIsDragging(false);
        dragRef.current.dragging = false;
        return;
      }

      if (brushStartRef.current && localBrushRect) {
        const isTooSmall =
          localBrushRect.width < BRUSH_MIN_PIXELS ||
          localBrushRect.height < BRUSH_MIN_PIXELS;

        if (!isTooSmall) {
          logChartInteractionEvent({
            interactionType: "ZOOM_IN",
            visualizationLibrary: "Konva",
            interactionSource: "brush",
          });
          const zoomResult = convertBrushToZoom(
            localBrushRect,
            offsetRef.current,
            scaleRef.current,
            innerWidth,
            innerHeight,
          );
          scaleRef.current = zoomResult.scale;
          offsetRef.current = zoomResult.offset;
          scheduleUpdate();
        }
      }

      brushStartRef.current = null;
      setBrushRect(null);
    },
    [innerWidth, innerHeight, scheduleUpdate],
  );

  /* ── Button controls — mutate refs + scheduleUpdate ── */
  const handleZoomIn = useCallback(() => {
    logChartInteractionEvent({
      interactionType: "ZOOM_IN",
      visualizationLibrary: "Konva",
      interactionSource: "button",
    });
    const currentScale = scaleRef.current;
    const currentOffset = offsetRef.current;
    const centerX = innerWidth / 2;
    const centerY = innerHeight / 2;
    const newScale = clampScale(currentScale * ZOOM_STEP);
    const rawOffsetX = currentOffset.x - centerX * (newScale / currentScale - 1);
    const rawOffsetY = currentOffset.y - centerY * (newScale / currentScale - 1);
    scaleRef.current = newScale;
    offsetRef.current = clampContentOffset(rawOffsetX, rawOffsetY, newScale, innerWidth, innerHeight);
    scheduleUpdate();
  }, [innerWidth, innerHeight, scheduleUpdate]);

  const handleZoomOut = useCallback(() => {
    logChartInteractionEvent({
      interactionType: "ZOOM_OUT",
      visualizationLibrary: "Konva",
      interactionSource: "button",
    });
    const currentScale = scaleRef.current;
    const currentOffset = offsetRef.current;
    const centerX = innerWidth / 2;
    const centerY = innerHeight / 2;
    const newScale = clampScale(currentScale / ZOOM_STEP);
    const rawOffsetX = currentOffset.x - centerX * (newScale / currentScale - 1);
    const rawOffsetY = currentOffset.y - centerY * (newScale / currentScale - 1);
    scaleRef.current = newScale;
    offsetRef.current = clampContentOffset(rawOffsetX, rawOffsetY, newScale, innerWidth, innerHeight);
    scheduleUpdate();
  }, [innerWidth, innerHeight, scheduleUpdate]);

  const handleReset = useCallback(() => {
    logChartInteractionEvent({
      interactionType: "RESET",
      visualizationLibrary: "Konva",
      interactionSource: "button",
    });
    scaleRef.current = 1;
    offsetRef.current = { x: 0, y: 0 };
    scheduleUpdate();
  }, [scheduleUpdate]);

  const handleDoubleClick = useCallback(() => {
    logChartInteractionEvent({
      interactionType: "RESET",
      visualizationLibrary: "Konva",
      interactionSource: "double_click",
    });
    scaleRef.current = 1;
    offsetRef.current = { x: 0, y: 0 };
    scheduleUpdate();
  }, [scheduleUpdate]);

  const stageCursor = isPanMode
    ? (isDragging ? "grabbing" : "grab")
    : "crosshair";

  return (
    <div style={{ position: "relative" }}>
      <PlotterControls
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
        zoomLevel={contentScale}
        interactionMode={interactionMode}
        onModeChange={setInteractionMode}
      />
      <Stage
        ref={stageRef}
        width={PLOT_DIMENSIONS.width}
        height={PLOT_DIMENSIONS.height}
        onWheel={handleWheel}
        onDblClick={handleDoubleClick}
        onDblTap={handleDoubleClick}
        onMouseDown={handleStageMouseDown}
        onMouseMove={handleStageMouseMove}
        onMouseUp={() => handleStageMouseUp(brushRect)}
        onMouseLeave={() => handleStageMouseUp(brushRect)}
        style={{ cursor: stageCursor }}
      >
        {/* Static axis layer — grid and labels derived from current visible domain */}
        <Layer listening={false}>
          <PlotBackground innerWidth={innerWidth} innerHeight={innerHeight} />
          <AxisGrid
            visibleDomain={visibleDomain}
            innerWidth={innerWidth}
            innerHeight={innerHeight}
          />
          <AxisLabels
            visibleDomain={visibleDomain}
            innerWidth={innerWidth}
            innerHeight={innerHeight}
          />
          <AxisBorder innerWidth={innerWidth} innerHeight={innerHeight} />
        </Layer>

        {/* Clipped content layer — images positioned from domain-derived scales */}
        <Layer>
          <ClippedContentGroup innerWidth={innerWidth} innerHeight={innerHeight}>
            {visiblePointsForRender.map((point) => (
              <ImagePointGroup
                key={point.id}
                point={point}
                xScale={dynamicXScale}
                yScale={dynamicYScale}
                imageCount={effectiveImageCountForRender}
                cellSize={adaptiveCellSizeForRender}
                onHover={setHoveredPoint}
                onCursorMove={setCursorPosition}
              />
            ))}
          </ClippedContentGroup>
        </Layer>

        {/* Brush overlay layer — only rendered in zoom mode */}
        {isZoomMode && (
          <Layer listening={false}>
            <BrushSelectionOverlay brushRect={brushRect} />
          </Layer>
        )}
      </Stage>

      {hoveredPoint && (
        <PointTooltip
          hoveredPoint={hoveredPoint}
          cursorPosition={cursorPosition}
        />
      )}
    </div>
  );
}

function BrushSelectionOverlay({
  brushRect,
}) {
  return (
    <Group listening={false}>
      {/* Semi-transparent selection rectangle */}
      {brushRect && brushRect.width > 0 && brushRect.height > 0 && (
        <Rect
          x={PLOT_MARGIN.left + brushRect.x}
          y={PLOT_MARGIN.top + brushRect.y}
          width={brushRect.width}
          height={brushRect.height}
          fill={BRUSH_FILL}
          stroke={BRUSH_STROKE}
          strokeWidth={BRUSH_STROKE_WIDTH}
          listening={false}
        />
      )}
    </Group>
  );
}

function ClippedContentGroup({
  innerWidth,
  innerHeight,
  children,
}) {
  const plotLeft = PLOT_MARGIN.left;
  const plotTop = PLOT_MARGIN.top;

  const clipFunction = (ctx) => {
    ctx.rect(plotLeft, plotTop, innerWidth, innerHeight);
  };

  return (
    <Group clipFunc={clipFunction}>
      <Group
        x={plotLeft}
        y={plotTop}
        scaleX={1}
        scaleY={1}
      >
        {children}
      </Group>
    </Group>
  );
}

function PointTooltip({ hoveredPoint, cursorPosition }) {
  return (
    <div
      className="plotter-tooltip"
      style={{
        display: "block",
        position: "absolute",
        left: cursorPosition.x + 15,
        top: cursorPosition.y - 10,
        pointerEvents: "none",
      }}
    >
      <div className="tooltip-label">{hoveredPoint.label}</div>
      <div className="tooltip-meta">
        <span>Interval: {hoveredPoint.meta.interval}s</span>
        <span>Angle: {hoveredPoint.meta.angle}°</span>
        <span>Quality: {hoveredPoint.meta.quality}</span>
      </div>
    </div>
  );
}

function PlotBackground({ innerWidth, innerHeight }) {
  return (
    <Rect
      x={PLOT_MARGIN.left}
      y={PLOT_MARGIN.top}
      width={innerWidth}
      height={innerHeight}
      fill="#16213e"
    />
  );
}

function AxisBorder({ innerWidth, innerHeight }) {
  return (
    <Rect
      x={PLOT_MARGIN.left}
      y={PLOT_MARGIN.top}
      width={innerWidth}
      height={innerHeight}
      stroke={AXIS_LINE_COLOR}
      strokeWidth={1}
      listening={false}
    />
  );
}

function AxisGrid({ visibleDomain, innerWidth, innerHeight }) {
  const xTicks = buildTicks(
    visibleDomain.xMin,
    visibleDomain.xMax,
    AXIS_TICK_COUNT,
  );
  const yTicks = buildTicks(
    visibleDomain.yMin,
    visibleDomain.yMax,
    AXIS_TICK_COUNT,
  );

  const xScreenScale = buildLinearScale(
    visibleDomain.xMin,
    visibleDomain.xMax,
    0,
    innerWidth,
  );
  const yScreenScale = buildLinearScale(
    visibleDomain.yMin,
    visibleDomain.yMax,
    innerHeight,
    0,
  );

  const gridLines = [];

  xTicks.forEach((value, index) => {
    const xPos = PLOT_MARGIN.left + xScreenScale(value);
    if (xPos < PLOT_MARGIN.left || xPos > PLOT_MARGIN.left + innerWidth) return;
    gridLines.push(
      <Line
        key={`xgrid-${index}`}
        points={[xPos, PLOT_MARGIN.top, xPos, PLOT_MARGIN.top + innerHeight]}
        stroke={GRID_COLOR}
        strokeWidth={1}
        dash={[4, 4]}
        listening={false}
      />,
    );
  });

  yTicks.forEach((value, index) => {
    const yPos = PLOT_MARGIN.top + yScreenScale(value);
    if (yPos < PLOT_MARGIN.top || yPos > PLOT_MARGIN.top + innerHeight) return;
    gridLines.push(
      <Line
        key={`ygrid-${index}`}
        points={[PLOT_MARGIN.left, yPos, PLOT_MARGIN.left + innerWidth, yPos]}
        stroke={GRID_COLOR}
        strokeWidth={1}
        dash={[4, 4]}
        listening={false}
      />,
    );
  });

  return <>{gridLines}</>;
}

function AxisLabels({ visibleDomain, innerWidth, innerHeight }) {
  const xTicks = buildTicks(
    visibleDomain.xMin,
    visibleDomain.xMax,
    AXIS_TICK_COUNT,
  );
  const yTicks = buildTicks(
    visibleDomain.yMin,
    visibleDomain.yMax,
    AXIS_TICK_COUNT,
  );

  const xScreenScale = buildLinearScale(
    visibleDomain.xMin,
    visibleDomain.xMax,
    0,
    innerWidth,
  );
  const yScreenScale = buildLinearScale(
    visibleDomain.yMin,
    visibleDomain.yMax,
    innerHeight,
    0,
  );

  const tickLabels = [];

  xTicks.forEach((value, index) => {
    const xPos = PLOT_MARGIN.left + xScreenScale(value);
    if (xPos < PLOT_MARGIN.left - 5 || xPos > PLOT_MARGIN.left + innerWidth + 5)
      return;
    tickLabels.push(
      <Text
        key={`xlabel-${index}`}
        text={formatTickLabel(value)}
        x={xPos - 14}
        y={PLOT_MARGIN.top + innerHeight + 6}
        fill={TICK_LABEL_COLOR}
        fontSize={TICK_LABEL_FONT_SIZE}
        listening={false}
      />,
    );
  });

  yTicks.forEach((value, index) => {
    const yPos = PLOT_MARGIN.top + yScreenScale(value);
    if (yPos < PLOT_MARGIN.top - 5 || yPos > PLOT_MARGIN.top + innerHeight + 5)
      return;
    tickLabels.push(
      <Text
        key={`ylabel-${index}`}
        text={formatTickLabel(value)}
        x={PLOT_MARGIN.left - 36}
        y={yPos - 6}
        fill={TICK_LABEL_COLOR}
        fontSize={TICK_LABEL_FONT_SIZE}
        width={32}
        align="right"
        listening={false}
      />,
    );
  });

  return <>{tickLabels}</>;
}

function ImagePointGroup({
  point,
  xScale,
  yScale,
  imageCount,
  cellSize,
  onHover,
  onCursorMove,
}) {
  const centerX = xScale(point.x);
  const centerY = yScale(point.y);
  const resolvedCellSize = cellSize ?? CELL_SIZE;
  const positions = computeImagePositions(
    centerX,
    centerY,
    resolvedCellSize,
    resolvedCellSize,
    imageCount,
  );

  return (
    <>
      {positions.map((position, index) => (
        <KonvaCachedImage
          key={`${point.id}-${index}`}
          imageUrl={point.image}
          x={position.x}
          y={position.y}
          width={position.width}
          height={position.height}
          point={point}
          onHover={onHover}
          onCursorMove={onCursorMove}
        />
      ))}
    </>
  );
}

function KonvaCachedImage({
  imageUrl,
  x,
  y,
  width,
  height,
  point,
  onHover,
  onCursorMove,
}) {
  const loadedImage = getCachedImageObject(imageUrl);

  const handleMouseEnter = useCallback(
    (event) => {
      const stage = event.target.getStage();
      const pointer = stage.getPointerPosition();
      onCursorMove({ x: pointer.x, y: pointer.y });
      onHover(point);
    },
    [point, onHover, onCursorMove],
  );

  const handleMouseLeave = useCallback(() => onHover(null), [onHover]);

  if (!loadedImage) return null;

  return (
    <KonvaImage
      image={loadedImage}
      x={x}
      y={y}
      width={width}
      height={height}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
}

/* ─── Brush → Zoom conversion ─────────────────────────────────────────── */

function convertBrushToZoom(
  brushPixelRect,
  currentOffset,
  currentScale,
  plotInnerWidth,
  plotInnerHeight,
) {
  const contentX0 =
    (brushPixelRect.x - currentOffset.x) / currentScale;
  const contentY0 =
    (brushPixelRect.y - currentOffset.y) / currentScale;
  const contentBrushWidth = brushPixelRect.width / currentScale;
  const contentBrushHeight = brushPixelRect.height / currentScale;

  const fitScaleX = plotInnerWidth / contentBrushWidth;
  const fitScaleY = plotInnerHeight / contentBrushHeight;
  const newScale = clampScale(Math.min(fitScaleX, fitScaleY));

  const rawOffsetX = -contentX0 * newScale;
  const rawOffsetY = -contentY0 * newScale;

  const clampedOffset = clampContentOffset(
    rawOffsetX,
    rawOffsetY,
    newScale,
    plotInnerWidth,
    plotInnerHeight,
  );

  return { scale: newScale, offset: clampedOffset };
}

function clampValue(value, min, max) {
  return Math.max(min, Math.min(value, max));
}

/* ─── Pure utility functions ──────────────────────────────────────────── */

function isPointerInsidePlotArea(
  pointerPosition,
  plotInnerWidth,
  plotInnerHeight,
) {
  return (
    pointerPosition.x > PLOT_MARGIN.left &&
    pointerPosition.x < PLOT_MARGIN.left + plotInnerWidth &&
    pointerPosition.y > PLOT_MARGIN.top &&
    pointerPosition.y < PLOT_MARGIN.top + plotInnerHeight
  );
}

function clampScale(rawScale) {
  return Math.max(ZOOM_MIN, Math.min(rawScale, ZOOM_MAX));
}

function computeWheelScaleDelta(deltaY, isPinchGesture) {
  if (isPinchGesture) {
    return Math.exp(-deltaY * PINCH_ZOOM_SENSITIVITY);
  }
  return deltaY > 0 ? 1 / ZOOM_STEP : ZOOM_STEP;
}

function clampContentOffset(
  rawX,
  rawY,
  scale,
  plotInnerWidth,
  plotInnerHeight,
) {
  const scaledWidth = plotInnerWidth * scale;
  const scaledHeight = plotInnerHeight * scale;

  let clampedX;
  let clampedY;

  if (scaledWidth <= plotInnerWidth) {
    clampedX = (plotInnerWidth - scaledWidth) / 2;
  } else {
    const minX = plotInnerWidth - scaledWidth;
    const maxX = 0;
    clampedX = Math.max(minX, Math.min(rawX, maxX));
  }

  if (scaledHeight <= plotInnerHeight) {
    clampedY = (plotInnerHeight - scaledHeight) / 2;
  } else {
    const minY = plotInnerHeight - scaledHeight;
    const maxY = 0;
    clampedY = Math.max(minY, Math.min(rawY, maxY));
  }

  return { x: clampedX, y: clampedY };
}

function buildScales(plotterPoints, plotInnerWidth, plotInnerHeight) {
  const xValues = plotterPoints.map((p) => p.x);
  const yValues = plotterPoints.map((p) => p.y);

  const xMin = Math.min(...xValues);
  const xMax = Math.max(...xValues);
  const yMin = Math.min(...yValues);
  const yMax = Math.max(...yValues);

  const xPadding =
    (xMax - xMin) * EXTENT_PADDING_RATIO || EXTENT_FALLBACK_PADDING;
  const yPadding =
    (yMax - yMin) * EXTENT_PADDING_RATIO || EXTENT_FALLBACK_PADDING;

  const xExtent = [xMin - xPadding, xMax + xPadding];
  const yExtent = [yMin - yPadding, yMax + yPadding];

  const xScale = buildLinearScale(xExtent[0], xExtent[1], 0, plotInnerWidth);
  const yScale = buildLinearScale(yExtent[0], yExtent[1], plotInnerHeight, 0);

  return { xScale, yScale, xExtent, yExtent };
}

function computeVisibleDomain(
  xExtent,
  yExtent,
  contentOffset,
  scale,
  plotInnerWidth,
  plotInnerHeight,
) {
  const domainWidth = xExtent[1] - xExtent[0];
  const domainHeight = yExtent[1] - yExtent[0];

  const xMin =
    xExtent[0] - (contentOffset.x / scale / plotInnerWidth) * domainWidth;
  const xMax = xMin + domainWidth / scale;

  const yMax =
    yExtent[1] + (contentOffset.y / scale / plotInnerHeight) * domainHeight;
  const yMin = yMax - domainHeight / scale;

  return { xMin, xMax, yMin, yMax };
}

function buildLinearScale(domainMin, domainMax, rangeMin, rangeMax) {
  return (value) => {
    const ratio = (value - domainMin) / (domainMax - domainMin);
    return rangeMin + ratio * (rangeMax - rangeMin);
  };
}

function buildTicks(min, max, count) {
  const rawStep = (max - min) / count;
  const magnitude = Math.pow(10, Math.floor(Math.log10(rawStep)));
  const niceSteps = [1, 2, 2.5, 5, 10];
  const step =
    niceSteps.map((s) => s * magnitude).find((s) => s >= rawStep) ?? rawStep;

  const start = Math.ceil(min / step) * step;
  const ticks = [];

  for (let tick = start; tick <= max + step * 0.001; tick += step) {
    ticks.push(parseFloat(tick.toPrecision(10)));
  }

  return ticks;
}

function formatTickLabel(value) {
  if (Math.abs(value) >= 1000) return value.toExponential(1);
  const formattedString = value.toPrecision(4);
  return parseFloat(formattedString).toString();
}

export default KonvaPlotter;

```

---

# src\components\Navbar.jsx

```jsx
import { LIBRARIES, DISABLED_LIBRARIES } from "../lib/constants";

function Navbar({ activeTab, setActiveTab }) {
  return (
    <div className="tab-container">
      {LIBRARIES.map((libraryName) => {
        const isDisabled = DISABLED_LIBRARIES.includes(libraryName);

        return (
          <button
            key={libraryName}
            className={`tab-button ${activeTab === libraryName ? "active" : ""} ${isDisabled ? "disabled" : ""}`}
            onClick={() => !isDisabled && setActiveTab(libraryName)}
            disabled={isDisabled}
            title={isDisabled ? `${libraryName} is disabled for this test` : ""}
          >
            {libraryName}
          </button>
        );
      })}
    </div>
  );
}

export default Navbar;

```

---

# src\components\PixiPlotter.jsx

```jsx
import { useRef, useEffect, useState, useCallback } from "react";

import {
  Application as PixiApp,
  Container,
  Sprite,
  Graphics,
  Assets,
  Text as PixiText,
} from "pixi.js";

import * as d3 from "d3";

import { usePlotterData } from "../lib/plotterData";
import { computeImagePositions } from "../lib/gridLayout";
import { CELL_SIZE, PLOT_DIMENSIONS, PLOT_MARGIN } from "../lib/constants";
import {
  computeAdaptiveCellSize,
  filterVisiblePoints,
  computeEffectiveImageCount,
} from "../lib/densityLayout";

import PlotterControls from "./PlotterControls";
import { logChartInteractionEvent } from "../lib/chartInteractionLogger";
import { useInteractionMode } from "../lib/interactionMode";

const GRID_COLOR = 0x333333;
const GRID_ALPHA = 0.45;
const AXIS_BORDER_COLOR = 0x555555;
const TICK_COLOR = "#999999";

const ZOOM_MIN = 0.3;
const ZOOM_MAX = 100000;
const ZOOM_STEP = 1.5;

/*
 * CLAMP PAN
 */
function clampPan(xOffset, yOffset, scaleFactor, width, height) {
  const scaledWidth = width * scaleFactor;
  const scaledHeight = height * scaleFactor;

  let minOffsetLimitX = width - scaledWidth;
  let minOffsetLimitY = height - scaledHeight;

  if (scaledWidth < width) {
    minOffsetLimitX = (width - scaledWidth) / 2;
  }

  if (scaledHeight < height) {
    minOffsetLimitY = (height - scaledHeight) / 2;
  }

  return {
    x: Math.min(0, Math.max(minOffsetLimitX, xOffset)),
    y: Math.min(0, Math.max(minOffsetLimitY, yOffset)),
  };
}

/*
 * COMPUTE VIEWPORT SCALES
 */
function computeViewportScales(baseScaleX, baseScaleY, scaleFactor, xOffset, yOffset, width, height) {
  const leftPixel = -xOffset / scaleFactor;
  const rightPixel = (width - xOffset) / scaleFactor;

  const topPixel = -yOffset / scaleFactor;
  const bottomPixel = (height - yOffset) / scaleFactor;

  const visibleXMin = baseScaleX.invert(leftPixel);
  const visibleXMax = baseScaleX.invert(rightPixel);

  const visibleYMax = baseScaleY.invert(topPixel);
  const visibleYMin = baseScaleY.invert(bottomPixel);

  const dynamicXScale = d3
    .scaleLinear()
    .domain([visibleXMin, visibleXMax])
    .range([0, width]);

  const dynamicYScale = d3
    .scaleLinear()
    .domain([visibleYMin, visibleYMax])
    .range([height, 0]);

  return {
    dynamicXScale,
    dynamicYScale,
  };
}

/*
 * INITIALIZE PIXI APP
 */
async function initializePixiApp(containerElement, innerWidth, innerHeight) {
  const app = new PixiApp();

  await app.init({
    width: PLOT_DIMENSIONS.width,
    height: PLOT_DIMENSIONS.height,
    background: 0x16213e,
    antialias: true,
  });

  containerElement.appendChild(app.canvas);

  const axesLayer = new Container();
  axesLayer.x = PLOT_MARGIN.left;
  axesLayer.y = PLOT_MARGIN.top;
  app.stage.addChild(axesLayer);

  const contentLayer = new Container();
  contentLayer.x = PLOT_MARGIN.left;
  contentLayer.y = PLOT_MARGIN.top;
  app.stage.addChild(contentLayer);

  const mask = new Graphics();
  mask.rect(PLOT_MARGIN.left, PLOT_MARGIN.top, innerWidth, innerHeight);
  mask.fill(0xffffff);
  app.stage.addChild(mask);
  contentLayer.mask = mask;

  const brushGraphics = new Graphics();
  app.stage.addChild(brushGraphics);

  return {
    app,
    axesLayer,
    contentLayer,
    mask,
    brushGraphics,
  };
}

/*
 * APPLY BRUSH ZOOM TO TRANSFORM
 */
function applyBrushZoom({ startX, startY, width, height }, transformRef, innerWidth, innerHeight) {
  const currentScale = transformRef.current.scale;
  const currentX = transformRef.current.x;
  const currentY = transformRef.current.y;

  const contentX0 = (startX - currentX) / currentScale;
  const contentY0 = (startY - currentY) / currentScale;
  const contentWidth = width / currentScale;
  const contentHeight = height / currentScale;

  const scaleFactorX = innerWidth / contentWidth;
  const scaleFactorY = innerHeight / contentHeight;
  const nextScale = Math.max(ZOOM_MIN, Math.min(Math.min(scaleFactorX, scaleFactorY), ZOOM_MAX));

  const offsetCoordinateX = -contentX0 * nextScale;
  const offsetCoordinateY = -contentY0 * nextScale;

  const clamped = clampPan(offsetCoordinateX, offsetCoordinateY, nextScale, innerWidth, innerHeight);
  return {
    scale: nextScale,
    x: clamped.x,
    y: clamped.y,
  };
}

/*
 * DRAW BRUSH OVERLAY
 */
function drawBrushOverlay(graphics, startX, startY, width, height) {
  if (!graphics) return;
  graphics.clear();
  if (width > 0 && height > 0) {
    graphics.rect(
      PLOT_MARGIN.left + startX,
      PLOT_MARGIN.top + startY,
      width,
      height
    );
    graphics.fill({ color: 0x4493ff, alpha: 0.15 });
    graphics.stroke({ width: 1.5, color: 0x4493ff });
  }
}

function PixiPlotter({ imageCount, xGap, yGap, syntheticPoints }) {
  const { plotterPoints: fetchedPoints, isLoading, loadError } = usePlotterData();
  const plotterPoints = syntheticPoints || fetchedPoints;

  if (!syntheticPoints && isLoading) {
    return <div>Loading...</div>;
  }

  if (!syntheticPoints && loadError) {
    return <div>Error: {loadError}</div>;
  }

  return (
    <PixiCanvas
      plotterPoints={plotterPoints}
      imageCount={imageCount}
      xGap={xGap}
      yGap={yGap}
    />
  );
}

function PixiCanvas({ plotterPoints, imageCount, xGap, yGap }) {
  const containerRef = useRef(null);
  const pixiAppRef = useRef(null);
  const axesLayerRef = useRef(null);
  const contentLayerRef = useRef(null);
  const maskRef = useRef(null);
  const tooltipRef = useRef(null);
  const brushGraphicsRef = useRef(null);
  const brushStartRef = useRef(null);

  const baseScalesRef = useRef({
    xScale: null,
    yScale: null,
  });

  const transformRef = useRef({
    scale: 1,
    x: 0,
    y: 0,
  });

  const dragRef = useRef({
    dragging: false,
    startX: 0,
    startY: 0,
  });

  const [zoomLevel, setZoomLevel] = useState(1);
  const [isDragging, setIsDragging] = useState(false);

  const {
    interactionMode,
    setInteractionMode,
    isPanMode,
  } = useInteractionMode();

  const innerWidth = PLOT_DIMENSIONS.width - PLOT_MARGIN.left - PLOT_MARGIN.right;
  const innerHeight = PLOT_DIMENSIONS.height - PLOT_MARGIN.top - PLOT_MARGIN.bottom;

  /*
   * GET VIEWPORT SCALES
   */
  const getViewportScales = useCallback(() => {
    const baseScaleX = baseScalesRef.current.xScale;
    const baseScaleY = baseScalesRef.current.yScale;

    if (!baseScaleX || !baseScaleY) {
      return null;
    }

    const { scale, x, y } = transformRef.current;

    return computeViewportScales(
      baseScaleX,
      baseScaleY,
      scale,
      x,
      y,
      innerWidth,
      innerHeight
    );
  }, [innerWidth, innerHeight]);

  /*
   * RENDER AXES
   */
  const renderAxes = useCallback(() => {
    if (!axesLayerRef.current) return;

    const viewportScales = getViewportScales();
    if (!viewportScales) return;

    const axesLayer = axesLayerRef.current;
    axesLayer.removeChildren();

    drawGrid(
      axesLayer,
      viewportScales.dynamicXScale,
      viewportScales.dynamicYScale,
      innerWidth,
      innerHeight
    );

    drawAxesLabels(
      axesLayer,
      viewportScales.dynamicXScale,
      viewportScales.dynamicYScale,
      innerWidth,
      innerHeight
    );
  }, [getViewportScales, innerWidth, innerHeight]);

  /*
   * APPLY TRANSFORM — redraws points from current viewport scales (deep zoom).
   * Content layer is always identity; no matrix upscaling of sprites.
   */
  const applyTransform = useCallback(() => {
    if (!contentLayerRef.current) return;

    const viewportScales = getViewportScales();
    if (!viewportScales) return;

    const { dynamicXScale, dynamicYScale } = viewportScales;
    const { scale } = transformRef.current;

    const contentLayer = contentLayerRef.current;
    contentLayer.removeChildren();
    contentLayer.scale.set(1);
    contentLayer.x = PLOT_MARGIN.left;
    contentLayer.y = PLOT_MARGIN.top;

    const baseScaleX = baseScalesRef.current.xScale;
    const baseScaleY = baseScalesRef.current.yScale;
    if (!baseScaleX || !baseScaleY) return;

    const scaledPoints = plotterPoints.map((point) => ({
      ...point,
      scaledX: point.x * (xGap / 10),
      scaledY: point.y * (yGap / 10),
    }));

    /* Same pattern as Recharts: base cell size × current zoom scale. */
    const adaptiveCellSizeBase = computeAdaptiveCellSize(
      scaledPoints,
      (val) => baseScaleX(val),
      (val) => baseScaleY(val),
    );
    const currentCellSize = adaptiveCellSizeBase * scale;

    /* Screen-space culling. */
    const xScreenFn = (val) => baseScaleX(val) * scale + transformRef.current.x;
    const yScreenFn = (val) => baseScaleY(val) * scale + transformRef.current.y;
    const visiblePoints = filterVisiblePoints(
      scaledPoints,
      xScreenFn,
      yScreenFn,
      innerWidth,
      innerHeight,
      currentCellSize,
    );

    const effectiveImageCount = computeEffectiveImageCount(currentCellSize, imageCount);

    drawPoints(
      contentLayer,
      visiblePoints,
      dynamicXScale,
      dynamicYScale,
      effectiveImageCount,
      tooltipRef,
      currentCellSize,
    );

    renderAxes();
  }, [getViewportScales, renderAxes, plotterPoints, xGap, yGap, innerWidth, innerHeight, imageCount]);

  /*
   * MAIN RENDER — loads assets then delegates to applyTransform for drawing.
   */
  const renderScene = useCallback(async () => {
    if (!axesLayerRef.current || !contentLayerRef.current) return;

    const scaledPoints = plotterPoints.map((point) => ({
      ...point,
      scaledX: point.x * (xGap / 10),
      scaledY: point.y * (yGap / 10),
    }));

    const xDomainExtent = d3.extent(scaledPoints, (point) => point.scaledX);
    const yDomainExtent = d3.extent(scaledPoints, (point) => point.scaledY);

    const baseScaleX = d3.scaleLinear()
      .domain([xDomainExtent[0] - 5, xDomainExtent[1] + 5])
      .range([0, innerWidth]);

    const baseScaleY = d3.scaleLinear()
      .domain([yDomainExtent[0] - 5, yDomainExtent[1] + 5])
      .range([innerHeight, 0]);

    baseScalesRef.current = { xScale: baseScaleX, yScale: baseScaleY };
    renderAxes();

    const uniqueImageUrls = [...new Set(plotterPoints.map((point) => point.image))];
    await Assets.load(uniqueImageUrls);

    applyTransform();
  }, [plotterPoints, xGap, yGap, innerWidth, innerHeight, renderAxes, applyTransform]);



  /*
   * ZOOM
   */
  const zoom = useCallback((direction, interactionSource = "button") => {
    logChartInteractionEvent({
      interactionType: direction === "in" ? "ZOOM_IN" : "ZOOM_OUT",
      visualizationLibrary: "Pixi",
      interactionSource: interactionSource,
    });
    const currentScale = transformRef.current.scale;

    const nextScale =
      direction === "in"
        ? Math.min(currentScale * ZOOM_STEP, ZOOM_MAX)
        : Math.max(currentScale / ZOOM_STEP, ZOOM_MIN);

    const plotCenterX = innerWidth / 2;
    const plotCenterY = innerHeight / 2;

    const nextTransformOffsetX =
      transformRef.current.x - plotCenterX * (nextScale / currentScale - 1);

    const nextTransformOffsetY =
      transformRef.current.y - plotCenterY * (nextScale / currentScale - 1);

    const clampedTransformOffset = clampPan(
      nextTransformOffsetX,
      nextTransformOffsetY,
      nextScale,
      innerWidth,
      innerHeight
    );

    transformRef.current = {
      scale: nextScale,
      x: clampedTransformOffset.x,
      y: clampedTransformOffset.y,
    };

    setZoomLevel(nextScale);
    applyTransform();
  }, [innerWidth, innerHeight, applyTransform]);

  /*
   * RESET
   */
  const reset = useCallback((interactionSource) => {
    const computedSource =
      interactionSource && typeof interactionSource === "string"
        ? interactionSource
        : "button";

    logChartInteractionEvent({
      interactionType: "RESET",
      visualizationLibrary: "Pixi",
      interactionSource: computedSource,
    });

    transformRef.current = {
      scale: 1,
      x: 0,
      y: 0,
    };

    setZoomLevel(1);
    applyTransform();
  }, [applyTransform]);

  /*
   * CANVAS INTERACTIONS
   */
  const onCanvasMouseDown = useCallback((event) => {
    if (isPanMode) {
      logChartInteractionEvent({
        interactionType: "PAN",
        visualizationLibrary: "Pixi",
        interactionSource: "drag",
      });
      setIsDragging(true);
      dragRef.current.dragging = true;
      dragRef.current.startX = event.clientX - transformRef.current.x;
      dragRef.current.startY = event.clientY - transformRef.current.y;
    } else {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const localX = event.clientX - rect.left - PLOT_MARGIN.left;
      const localY = event.clientY - rect.top - PLOT_MARGIN.top;

      if (localX >= 0 && localX <= innerWidth && localY >= 0 && localY <= innerHeight) {
        brushStartRef.current = { x: localX, y: localY };
      }
    }
  }, [isPanMode, innerWidth, innerHeight]);

  const onCanvasMouseMove = useCallback((event) => {
    if (dragRef.current.dragging) {
      const nextX = event.clientX - dragRef.current.startX;
      const nextY = event.clientY - dragRef.current.startY;
      const clamped = clampPan(nextX, nextY, transformRef.current.scale, innerWidth, innerHeight);

      transformRef.current.x = clamped.x;
      transformRef.current.y = clamped.y;

      applyTransform();
      return;
    }

    if (brushStartRef.current) {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const localX = Math.max(0, Math.min(innerWidth, event.clientX - rect.left - PLOT_MARGIN.left));
      const localY = Math.max(0, Math.min(innerHeight, event.clientY - rect.top - PLOT_MARGIN.top));

      const brushStartX = Math.min(brushStartRef.current.x, localX);
      const brushStartY = Math.min(brushStartRef.current.y, localY);
      const brushWidth = Math.abs(localX - brushStartRef.current.x);
      const brushHeight = Math.abs(localY - brushStartRef.current.y);

      drawBrushOverlay(brushGraphicsRef.current, brushStartX, brushStartY, brushWidth, brushHeight);
    }
  }, [innerWidth, innerHeight, applyTransform]);

  const onCanvasMouseUp = useCallback((event) => {
    setIsDragging(false);
    if (dragRef.current.dragging) {
      dragRef.current.dragging = false;
      return;
    }

    if (brushStartRef.current) {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const localX = Math.max(0, Math.min(innerWidth, event.clientX - rect.left - PLOT_MARGIN.left));
      const localY = Math.max(0, Math.min(innerHeight, event.clientY - rect.top - PLOT_MARGIN.top));

      const brushStartX = Math.min(brushStartRef.current.x, localX);
      const brushStartY = Math.min(brushStartRef.current.y, localY);
      const brushWidth = Math.abs(localX - brushStartRef.current.x);
      const brushHeight = Math.abs(localY - brushStartRef.current.y);

      if (brushWidth >= 5 && brushHeight >= 5) {
        logChartInteractionEvent({
          interactionType: "ZOOM_IN",
          visualizationLibrary: "Pixi",
          interactionSource: "brush",
        });

        const nextTransform = applyBrushZoom(
          { startX: brushStartX, startY: brushStartY, width: brushWidth, height: brushHeight },
          transformRef,
          innerWidth,
          innerHeight
        );

        transformRef.current = {
          scale: nextTransform.scale,
          x: nextTransform.x,
          y: nextTransform.y,
        };

        setZoomLevel(nextTransform.scale);
        applyTransform();
      }

      if (brushGraphicsRef.current) {
        brushGraphicsRef.current.clear();
      }
      brushStartRef.current = null;
    }
  }, [innerWidth, innerHeight, applyTransform]);

  /* Cancel in-progress brush when switching to pan mode */
  useEffect(() => {
    if (isPanMode) {
      brushStartRef.current = null;
      if (brushGraphicsRef.current) {
        brushGraphicsRef.current.clear();
      }
    }
  }, [isPanMode]);

  /*
   * INITIALIZE PIXI
   */
  useEffect(() => {
    let isComponentUnmounted = false;
    let pixiApplicationInstance = null;

    if (!containerRef.current) return;

    initializePixiApp(containerRef.current, innerWidth, innerHeight)
      .then(({ app, axesLayer, contentLayer, mask, brushGraphics }) => {
        if (isComponentUnmounted) {
          try {
            app.destroy({ removeView: true });
          } catch (err) {
            console.error("Error destroying Pixi App during init cancellation:", err);
          }
          return;
        }

        pixiAppRef.current = app;
        axesLayerRef.current = axesLayer;
        contentLayerRef.current = contentLayer;
        maskRef.current = mask;
        brushGraphicsRef.current = brushGraphics;
        pixiApplicationInstance = app;

        renderScene();
      })
      .catch((err) => {
        console.error("Failed to initialize Pixi:", err);
      });

    return () => {
      isComponentUnmounted = true;
      if (pixiApplicationInstance) {
        try {
          pixiApplicationInstance.destroy({ removeView: true });
        } catch (err) {
          console.error("Error destroying Pixi App:", err);
        }
      }
    };
  }, [innerWidth, innerHeight, renderScene]);

  /*
   * RERENDER DATA CHANGES
   */
  useEffect(() => {
    if (!plotterPoints.length) return;
    renderScene();
  }, [plotterPoints, imageCount, xGap, yGap, renderScene]);

  /*
   * ATTACH NON-PASSIVE WHEEL LISTENER
   */
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onCanvasWheelScroll = (event) => {
      event.preventDefault();
      if (event.deltaY > 0) {
        zoom("out", "wheel");
      } else {
        zoom("in", "wheel");
      }
    };

    container.addEventListener("wheel", onCanvasWheelScroll, { passive: false });

    return () => {
      container.removeEventListener("wheel", onCanvasWheelScroll);
    };
  }, [zoom]);

  return (
    <div style={{ position: "relative" }}>
      <PlotterControls
        zoomLevel={zoomLevel}
        onZoomIn={() => zoom("in")}
        onZoomOut={() => zoom("out")}
        onReset={() => reset("button")}
        interactionMode={interactionMode}
        onModeChange={setInteractionMode}
      />

      <div
        ref={containerRef}
        onMouseDown={onCanvasMouseDown}
        onMouseMove={onCanvasMouseMove}
        onMouseUp={onCanvasMouseUp}
        onMouseLeave={onCanvasMouseUp}
        onDoubleClick={() => reset("double_click")}
        style={{
          cursor: isPanMode
            ? (isDragging ? "grabbing" : "grab")
            : "crosshair",
        }}
      />

      <div
        ref={tooltipRef}
        className="plotter-tooltip"
        style={{
          display: "none",
          position: "absolute",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

/*
 * GRID
 */
function drawGrid(layer, scaleX, scaleY, width, height) {
  const grid = new Graphics();

  const xTicks = buildIntegerTicks(scaleX.domain());
  const yTicks = buildIntegerTicks(scaleY.domain());

  xTicks.forEach((tick) => {
    const x = scaleX(tick);
    grid.moveTo(x, 0);
    grid.lineTo(x, height);
  });

  yTicks.forEach((tick) => {
    const y = scaleY(tick);
    grid.moveTo(0, y);
    grid.lineTo(width, y);
  });

  grid.stroke({
    width: 1,
    color: GRID_COLOR,
    alpha: GRID_ALPHA,
  });

  const border = new Graphics();
  border.rect(0, 0, width, height);
  border.stroke({
    width: 1,
    color: AXIS_BORDER_COLOR,
  });

  layer.addChild(grid);
  layer.addChild(border);
}

/*
 * LABELS
 */
function drawAxesLabels(layer, scaleX, scaleY, innerWidth, innerHeight) {
  const xTicks = buildIntegerTicks(scaleX.domain());
  const yTicks = buildIntegerTicks(scaleY.domain());

  xTicks.forEach((tick) => {
    const label = new PixiText({
      text: tick.toString(),
      style: {
        fill: TICK_COLOR,
        fontSize: 11,
      },
    });

    label.x = scaleX(tick) - label.width / 2;
    label.y = innerHeight + 6;
    layer.addChild(label);
  });

  yTicks.forEach((tick) => {
    const label = new PixiText({
      text: tick.toString(),
      style: {
        fill: TICK_COLOR,
        fontSize: 11,
      },
    });

    label.x = -label.width - 6;
    label.y = scaleY(tick) - label.height / 2;
    layer.addChild(label);
  });
}

/*
 * POINTS
 */
function drawPoints(layer, points, scaleX, scaleY, imageCount, tooltipRef, cellSize = CELL_SIZE) {
  points.forEach((point) => {
    const x = scaleX(point.scaledX);
    const y = scaleY(point.scaledY);

    const positions = computeImagePositions(
      x,
      y,
      cellSize,
      cellSize,
      imageCount
    );

    positions.forEach((position) => {
      const sprite = Sprite.from(point.image);
      sprite.x = position.x;
      sprite.y = position.y;
      sprite.width = position.width;
      sprite.height = position.height;
      sprite.eventMode = "static";
      sprite.cursor = "pointer";

      sprite.on("pointerenter", (event) => {
        showTooltip(tooltipRef.current, event, point);
      });

      sprite.on("pointerleave", () => {
        hideTooltip(tooltipRef.current);
      });

      layer.addChild(sprite);
    });
  });
}

/*
 * SMART TICKS
 */
function buildIntegerTicks([min, max]) {
  const range = max - min;
  let step;

  if (range <= 10) step = 1;
  else if (range <= 20) step = 2;
  else if (range <= 50) step = 5;
  else if (range <= 100) step = 10;
  else if (range <= 200) step = 20;
  else step = 50;

  const ticks = [];
  const start = Math.floor(min / step) * step;

  for (let value = start; value <= max; value += step) {
    ticks.push(Number(value.toFixed(2)));
  }

  return ticks;
}

/*
 * TOOLTIP
 */
function showTooltip(element, event, point) {
  if (!element) return;

  const global = event.global;
  element.style.display = "block";
  element.style.left = `${global.x + 15}px`;
  element.style.top = `${global.y - 10}px`;

  element.innerHTML = `
    <div class="tooltip-label">
      ${point.label}
    </div>
 
    <div class="tooltip-meta">
      <span>Interval: ${point.meta.interval}s</span>
      <span>Angle: ${point.meta.angle}°</span>
      <span>Quality: ${point.meta.quality}</span>
    </div>
  `;
}

function hideTooltip(element) {
  if (!element) return;
  element.style.display = "none";
}

export default PixiPlotter;
```

---

# src\components\PlotterControls.jsx

```jsx
import { INTERACTION_MODES } from "../lib/interactionMode";

function ZoomIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
      <line x1="11" y1="8" x2="11" y2="14" />
      <line x1="8" y1="11" x2="14" y2="11" />
    </svg>
  );
}

function PanIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 11V6a2 2 0 0 0-4 0v5" />
      <path d="M14 10V4a2 2 0 0 0-4 0v6" />
      <path d="M10 10.5V6a2 2 0 0 0-4 0v8" />
      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
    </svg>
  );
}

export default function PlotterControls({
  onZoomIn,
  onZoomOut,
  onReset,
  zoomLevel,
  interactionMode,
  onModeChange,
}) {
  const isZoomActive = interactionMode === INTERACTION_MODES.ZOOM;
  const isPanActive = interactionMode === INTERACTION_MODES.PAN;

  return (
    <div className="zoom-controls">
      {onModeChange && (
        <>
          <button
            className={`mode-button ${isZoomActive ? "active" : ""}`}
            onClick={() => onModeChange(INTERACTION_MODES.ZOOM)}
            title="Zoom Mode — drag to select zoom area"
          >
            <ZoomIcon />
            <span>Zoom</span>
          </button>
          <button
            className={`mode-button ${isPanActive ? "active" : ""}`}
            onClick={() => onModeChange(INTERACTION_MODES.PAN)}
            title="Pan Mode — drag to move the chart"
          >
            <PanIcon />
            <span>Pan</span>
          </button>
          <span className="mode-separator" />
        </>
      )}

      <button className="zoom-button" onClick={onZoomIn}>
        +
      </button>
      <button className="zoom-button" onClick={onZoomOut}>
        −
      </button>
      <button className="zoom-button" onClick={onReset}>
        Reset
      </button>
      {zoomLevel !== undefined && (
        <span style={{ color: "#888", fontSize: "0.75rem", marginLeft: 8 }}>
          {Math.round(zoomLevel * 100)}%
        </span>
      )}
    </div>
  );
}

```

---

# src\components\RechartsPlotter.jsx

```jsx
/* eslint-disable react-hooks/purity */
import { useState, useMemo, useRef, useEffect, useCallback } from "react";
import * as d3 from "d3";
import { usePlotterData } from "../lib/plotterData";
import { computeImagePositions } from "../lib/gridLayout";
import { CELL_SIZE, PLOT_DIMENSIONS, PLOT_MARGIN } from "../lib/constants";
import {
  computeAdaptiveCellSize,
  filterVisiblePoints,
  computeEffectiveImageCount,
} from "../lib/densityLayout";
import PlotterControls from "./PlotterControls";
import { logChartInteractionEvent } from "../lib/chartInteractionLogger";
import { useInteractionMode } from "../lib/interactionMode";

const ZOOM_STEP = 1.5;
const ZOOM_MIN = 0.35;
const ZOOM_MAX = 250;
const BRUSH_MIN_PIXELS = 5;
const BRUSH_FILL = "rgba(68, 147, 255, 0.15)";
const BRUSH_STROKE = "#4493ff";
const BRUSH_STROKE_WIDTH = 1.5;

const BASE_IMAGE_GAP_X = 10;
const BASE_IMAGE_GAP_Y = 10;

function RechartsPlotter({ imageCount, xGap, yGap, syntheticPoints }) {
  const {
    plotterPoints: fetchedPoints,
    isLoading,
    loadError,
  } = usePlotterData();

  const plotterPoints = syntheticPoints || fetchedPoints;

  if (!syntheticPoints && isLoading)
    return <div className="plotter-loading">Loading data…</div>;
  if (!syntheticPoints && loadError)
    return <div className="plotter-error">Error: {loadError}</div>;

  return (
    <RechartsCanvas
      plotterPoints={plotterPoints}
      imageCount={imageCount}
      xGap={xGap}
      yGap={yGap}
    />
  );
}

function RechartsCanvas({ plotterPoints, imageCount, xGap, yGap }) {
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const dragRef = useRef({
    dragging: false,
    pointerId: null,
    startClientX: 0,
    startClientY: 0,
    startTransform: { scale: 1, x: 0, y: 0 },
  });

  const [containerWidth, setContainerWidth] = useState(PLOT_DIMENSIONS.width);
  const [transform, setTransform] = useState({ scale: 1, x: 0, y: 0 });
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const [brushRect, setBrushRect] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const brushStartRef = useRef(null);

  const { interactionMode, setInteractionMode, isPanMode } =
    useInteractionMode();

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) setContainerWidth(entry.contentRect.width);
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  /* Cancel in-progress brush when switching to pan mode */
  useEffect(() => {
    if (isPanMode) {
      brushStartRef.current = null;
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setBrushRect(null);
    }
  }, [isPanMode]);

  const height = PLOT_DIMENSIONS.height;
  const innerWidth = Math.max(
    containerWidth - PLOT_MARGIN.left - PLOT_MARGIN.right,
    320,
  );
  const innerHeight = Math.max(
    height - PLOT_MARGIN.top - PLOT_MARGIN.bottom,
    240,
  );

  const normalizedPoints = useMemo(() => {
    const xScale = xGap / BASE_IMAGE_GAP_X;
    const yScale = yGap / BASE_IMAGE_GAP_Y;

    return plotterPoints.map((point) => ({
      ...point,
      scaledX: point.x * xScale,
      scaledY: point.y * yScale,
    }));
  }, [plotterPoints, xGap, yGap]);

  const xExtent = useMemo(
    () => extentWithPadding(normalizedPoints.map((p) => p.scaledX)),
    [normalizedPoints],
  );
  const yExtent = useMemo(
    () => extentWithPadding(normalizedPoints.map((p) => p.scaledY)),
    [normalizedPoints],
  );

  const baseXScale = useMemo(
    () => d3.scaleLinear().domain(xExtent).range([0, innerWidth]),
    [xExtent, innerWidth],
  );

  const baseYScale = useMemo(
    () => d3.scaleLinear().domain(yExtent).range([innerHeight, 0]),
    [yExtent, innerHeight],
  );

  const visibleDomain = useMemo(
    () =>
      computeVisibleDomain(
        xExtent,
        yExtent,
        transform,
        innerWidth,
        innerHeight,
      ),
    [xExtent, yExtent, transform, innerWidth, innerHeight],
  );

  const xTicks = useMemo(
    () => d3.ticks(visibleDomain.xMin, visibleDomain.xMax, 8),
    [visibleDomain],
  );
  const yTicks = useMemo(
    () => d3.ticks(visibleDomain.yMin, visibleDomain.yMax, 6),
    [visibleDomain],
  );

  const xTickScale = useMemo(
    () =>
      d3
        .scaleLinear()
        .domain([visibleDomain.xMin, visibleDomain.xMax])
        .range([0, innerWidth]),
    [visibleDomain, innerWidth],
  );

  const yTickScale = useMemo(
    () =>
      d3
        .scaleLinear()
        .domain([visibleDomain.yMin, visibleDomain.yMax])
        .range([innerHeight, 0]),
    [visibleDomain, innerHeight],
  );

  const clipId = "recharts-clip-static";

  const adaptiveCellSizeForRender = useMemo(() => {
    /* Compute from base scales (content-space) so the cell size is set at
       the default zoom level. The SVG transform then naturally magnifies
       images when zoomed in, revealing more detail. */
    return computeAdaptiveCellSize(
      normalizedPoints,
      (val) => baseXScale(val),
      (val) => baseYScale(val),
    );
  }, [normalizedPoints, baseXScale, baseYScale]);

  const visiblePointsForRender = useMemo(() => {
    /* Viewport culling still needs screen-space coordinates. */
    const xScreenFn = (val) => baseXScale(val) * transform.scale + transform.x;
    const yScreenFn = (val) => baseYScale(val) * transform.scale + transform.y;
    return filterVisiblePoints(
      normalizedPoints,
      xScreenFn,
      yScreenFn,
      innerWidth,
      innerHeight,
      adaptiveCellSizeForRender * transform.scale,
    );
  }, [
    normalizedPoints,
    baseXScale,
    baseYScale,
    transform,
    innerWidth,
    innerHeight,
    adaptiveCellSizeForRender,
  ]);

  const effectiveImageCountForRender = useMemo(
    () =>
      computeEffectiveImageCount(
        adaptiveCellSizeForRender * transform.scale,
        imageCount,
      ),
    [adaptiveCellSizeForRender, transform.scale, imageCount],
  );

  const zoomTo = useCallback(
    (nextScale, anchorX, anchorY) => {
      setTransform((prev) => {
        const clampedScale = clamp(nextScale, ZOOM_MIN, ZOOM_MAX);
        const pivotX = Number.isFinite(anchorX) ? anchorX : innerWidth / 2;
        const pivotY = Number.isFinite(anchorY) ? anchorY : innerHeight / 2;

        const nextX =
          prev.x - (pivotX - prev.x) * (clampedScale / prev.scale - 1);
        const nextY =
          prev.y - (pivotY - prev.y) * (clampedScale / prev.scale - 1);

        return clampTransform(
          { scale: clampedScale, x: nextX, y: nextY },
          innerWidth,
          innerHeight,
        );
      });
    },
    [innerWidth, innerHeight],
  );

  const handleZoomIn = useCallback(() => {
    logChartInteractionEvent({
      interactionType: "ZOOM_IN",
      visualizationLibrary: "Recharts",
      interactionSource: "button",
    });
    zoomTo(transform.scale * ZOOM_STEP, innerWidth / 2, innerHeight / 2);
  }, [transform.scale, zoomTo, innerWidth, innerHeight]);

  const handleZoomOut = useCallback(() => {
    logChartInteractionEvent({
      interactionType: "ZOOM_OUT",
      visualizationLibrary: "Recharts",
      interactionSource: "button",
    });
    zoomTo(transform.scale / ZOOM_STEP, innerWidth / 2, innerHeight / 2);
  }, [transform.scale, zoomTo, innerWidth, innerHeight]);

  const handleReset = useCallback(() => {
    logChartInteractionEvent({
      interactionType: "RESET",
      visualizationLibrary: "Recharts",
      interactionSource: "button",
    });
    setTransform({ scale: 1, x: 0, y: 0 });
    setHoveredPoint(null);
  }, []);

  const handleWheel = useCallback(
    (event) => {
      event.preventDefault();

      const rect = svgRef.current?.getBoundingClientRect();
      if (!rect) return;

      const clientX = event.clientX - rect.left;
      const clientY = event.clientY - rect.top;

      const localX = clientX - PLOT_MARGIN.left;
      const localY = clientY - PLOT_MARGIN.top;

      if (
        localX < 0 ||
        localY < 0 ||
        localX > innerWidth ||
        localY > innerHeight
      ) {
        return;
      }

      const isZoomIn = event.deltaY < 0;
      logChartInteractionEvent({
        interactionType: isZoomIn ? "ZOOM_IN" : "ZOOM_OUT",
        visualizationLibrary: "Recharts",
        interactionSource: "wheel",
      });

      const factor = event.deltaY > 0 ? 1 / 1.15 : 1.15;

      setTransform((prev) => {
        const clampedScale = clamp(prev.scale * factor, ZOOM_MIN, ZOOM_MAX);

        const nextX =
          prev.x - (localX - prev.x) * (clampedScale / prev.scale - 1);
        const nextY =
          prev.y - (localY - prev.y) * (clampedScale / prev.scale - 1);
        return clampTransform(
          { scale: clampedScale, x: nextX, y: nextY },
          innerWidth,
          innerHeight,
        );
      });
    },
    [innerWidth, innerHeight],
  );

  const handlePointerDown = useCallback(
    (event) => {
      const rect = svgRef.current?.getBoundingClientRect();
      if (!rect) return;

      const localX = event.clientX - rect.left - PLOT_MARGIN.left;
      const localY = event.clientY - rect.top - PLOT_MARGIN.top;

      if (
        localX < 0 ||
        localY < 0 ||
        localX > innerWidth ||
        localY > innerHeight
      ) {
        return;
      }

      if (isPanMode) {
        logChartInteractionEvent({
          interactionType: "PAN",
          visualizationLibrary: "Recharts",
          interactionSource: "drag",
        });
        setIsDragging(true);
        dragRef.current = {
          dragging: true,
          pointerId: event.pointerId,
          startClientX: event.clientX,
          startClientY: event.clientY,
          startTransform: transform,
        };
        event.currentTarget.setPointerCapture?.(event.pointerId);
        return;
      }

      const clampedX = clamp(localX, 0, innerWidth);
      const clampedY = clamp(localY, 0, innerHeight);
      brushStartRef.current = { x: clampedX, y: clampedY };
      setBrushRect({ x: clampedX, y: clampedY, width: 0, height: 0 });
      event.currentTarget.setPointerCapture?.(event.pointerId);
    },
    [innerWidth, innerHeight, transform, isPanMode],
  );

  const handlePointerMove = useCallback(
    (event) => {
      if (brushStartRef.current) {
        const rect = svgRef.current?.getBoundingClientRect();
        if (!rect) return;

        const localX = clamp(
          event.clientX - rect.left - PLOT_MARGIN.left,
          0,
          innerWidth,
        );
        const localY = clamp(
          event.clientY - rect.top - PLOT_MARGIN.top,
          0,
          innerHeight,
        );
        const startPoint = brushStartRef.current;

        setBrushRect({
          x: Math.min(startPoint.x, localX),
          y: Math.min(startPoint.y, localY),
          width: Math.abs(localX - startPoint.x),
          height: Math.abs(localY - startPoint.y),
        });
        return;
      }

      if (dragRef.current.dragging) {
        const dx = event.clientX - dragRef.current.startClientX;
        const dy = event.clientY - dragRef.current.startClientY;

        const next = clampTransform(
          {
            scale: dragRef.current.startTransform.scale,
            x: dragRef.current.startTransform.x + dx,
            y: dragRef.current.startTransform.y + dy,
          },
          innerWidth,
          innerHeight,
        );

        setTransform(next);
        return;
      }

      const target = event.target?.closest?.("[data-point-id]");
      if (!target) {
        setHoveredPoint(null);
        return;
      }

      const id = target.getAttribute("data-point-id");
      const point = plotterPoints.find((p) => p.id === id);
      if (!point) return;

      setHoveredPoint(point);
      setTooltipPos({ x: event.clientX, y: event.clientY });
    },
    [innerWidth, innerHeight, plotterPoints],
  );

  const handlePointerUp = useCallback(
    (event) => {
      if (brushStartRef.current && brushRect) {
        const isTooSmall =
          brushRect.width < BRUSH_MIN_PIXELS ||
          brushRect.height < BRUSH_MIN_PIXELS;

        if (!isTooSmall) {
          logChartInteractionEvent({
            interactionType: "ZOOM_IN",
            visualizationLibrary: "Recharts",
            interactionSource: "brush",
          });
          const newTransform = convertBrushToTransform(
            brushRect,
            transform,
            innerWidth,
            innerHeight,
          );
          setTransform(newTransform);
        }

        brushStartRef.current = null;
        setBrushRect(null);
        event.currentTarget.releasePointerCapture?.(event.pointerId);
        return;
      }

      setIsDragging(false);
      dragRef.current.dragging = false;
      dragRef.current.pointerId = null;
      event.currentTarget.releasePointerCapture?.(event.pointerId);
    },
    [brushRect, transform, innerWidth, innerHeight],
  );

  useEffect(() => {
    const svgElement = svgRef.current;

    if (!svgElement) return;

    const wheelHandler = (event) => {
      event.preventDefault();
      handleWheel(event);
    };

    svgElement.addEventListener("wheel", wheelHandler, {
      passive: false,
    });

    return () => {
      svgElement.removeEventListener("wheel", wheelHandler);
    };
  }, [handleWheel]);

  const handleDoubleClick = useCallback(() => {
    logChartInteractionEvent({
      interactionType: "RESET",
      visualizationLibrary: "Recharts",
      interactionSource: "double_click",
    });
    setTransform({ scale: 1, x: 0, y: 0 });
    setHoveredPoint(null);
  }, []);

  const stageCursor = isPanMode
    ? isDragging
      ? "grabbing"
      : "grab"
    : "crosshair";

  const contentTransform = `translate(${transform.x}, ${transform.y}) scale(${transform.scale})`;

  return (
    <div ref={containerRef} style={{ position: "relative", width: "100%" }}>
      <PlotterControls
        zoomLevel={transform.scale}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
        interactionMode={interactionMode}
        onModeChange={setInteractionMode}
      />

      <svg
        ref={svgRef}
        width={containerWidth}
        height={height}
        style={{
          display: "block",
          touchAction: "none",
          userSelect: "none",
          cursor: stageCursor,
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onDoubleClick={handleDoubleClick}
      >
        <defs>
          <clipPath id={clipId}>
            <rect
              x={PLOT_MARGIN.left}
              y={PLOT_MARGIN.top}
              width={innerWidth}
              height={innerHeight}
            />
          </clipPath>
        </defs>

        <rect
          x={0}
          y={0}
          width={containerWidth}
          height={height}
          fill="#16213e"
        />

        <g transform={`translate(${PLOT_MARGIN.left},${PLOT_MARGIN.top})`}>
          <rect
            x={0}
            y={0}
            width={innerWidth}
            height={innerHeight}
            fill="#16213e"
          />

          <AxisGrid
            xTicks={xTicks}
            yTicks={yTicks}
            xTickScale={xTickScale}
            yTickScale={yTickScale}
            innerWidth={innerWidth}
            innerHeight={innerHeight}
          />

          <AxisLabels
            xTicks={xTicks}
            yTicks={yTicks}
            xTickScale={xTickScale}
            yTickScale={yTickScale}
            innerWidth={innerWidth}
            innerHeight={innerHeight}
          />

          <g clipPath={`url(#${clipId})`}>
            <g transform={contentTransform}>
              {visiblePointsForRender.map((point) => (
                <ImagePoint
                  key={point.id}
                  point={point}
                  baseXScale={baseXScale}
                  baseYScale={baseYScale}
                  imageCount={effectiveImageCountForRender}
                  adaptiveCellSize={adaptiveCellSizeForRender}
                />
              ))}
            </g>
          </g>

          <rect
            x={0}
            y={0}
            width={innerWidth}
            height={innerHeight}
            fill="transparent"
            stroke="#555"
            pointerEvents="none"
          />

          {brushRect && brushRect.width > 0 && brushRect.height > 0 && (
            <rect
              x={brushRect.x}
              y={brushRect.y}
              width={brushRect.width}
              height={brushRect.height}
              fill={BRUSH_FILL}
              stroke={BRUSH_STROKE}
              strokeWidth={BRUSH_STROKE_WIDTH}
              rx={2}
              ry={2}
              pointerEvents="none"
            />
          )}
        </g>
      </svg>

      {hoveredPoint && (
        <div
          className="plotter-tooltip"
          style={{
            display: "block",
            position: "fixed",
            left: tooltipPos.x + 12,
            top: tooltipPos.y - 10,
            pointerEvents: "none",
            zIndex: 20,
          }}
        >
          <div className="tooltip-label">{hoveredPoint.label}</div>
          <div className="tooltip-meta">
            <span>Interval: {hoveredPoint.meta.interval}s</span>
            <span>Angle: {hoveredPoint.meta.angle}°</span>
            <span>Quality: {hoveredPoint.meta.quality}</span>
          </div>
        </div>
      )}
    </div>
  );
}

function ImagePoint({
  point,
  baseXScale,
  baseYScale,
  imageCount,
  adaptiveCellSize,
}) {
  const centerX = baseXScale(point.scaledX);
  const centerY = baseYScale(point.scaledY);
  const cellSize = adaptiveCellSize ?? CELL_SIZE;

  const positions = computeImagePositions(
    centerX,
    centerY,
    cellSize,
    cellSize,
    imageCount,
  );

  return (
    <>
      {positions.map((position, index) => (
        <image
          key={`${point.id}-${imageCount}-${index}`}
          data-point-id={point.id}
          href={point.image}
          x={position.x}
          y={position.y}
          width={position.width}
          height={position.height}
          preserveAspectRatio="xMidYMid meet"
          style={{ cursor: "pointer" }}
        />
      ))}
    </>
  );
}

function AxisGrid({
  xTicks,
  yTicks,
  xTickScale,
  yTickScale,
  innerWidth,
  innerHeight,
}) {
  return (
    <>
      {xTicks.map((tick, index) => {
        const x = xTickScale(tick);
        return (
          <line
            key={`xgrid-${index}`}
            x1={x}
            y1={0}
            x2={x}
            y2={innerHeight}
            stroke="#2a2a3e"
            strokeDasharray="3 3"
          />
        );
      })}

      {yTicks.map((tick, index) => {
        const y = yTickScale(tick);
        return (
          <line
            key={`ygrid-${index}`}
            x1={0}
            y1={y}
            x2={innerWidth}
            y2={y}
            stroke="#2a2a3e"
            strokeDasharray="3 3"
          />
        );
      })}
    </>
  );
}

function AxisLabels({ xTicks, yTicks, xTickScale, yTickScale, innerHeight }) {
  return (
    <>
      {xTicks.map((tick, index) => {
        const x = xTickScale(tick);
        return (
          <text
            key={`xlabel-${index}`}
            x={x}
            y={innerHeight + 18}
            fill="#888"
            fontSize="11"
            textAnchor="middle"
          >
            {formatTick(tick)}
          </text>
        );
      })}

      {yTicks.map((tick, index) => {
        const y = yTickScale(tick);
        return (
          <text
            key={`ylabel-${index}`}
            x={-8}
            y={y + 4}
            fill="#888"
            fontSize="11"
            textAnchor="end"
          >
            {formatTick(tick)}
          </text>
        );
      })}
    </>
  );
}

function extentWithPadding(values) {
  if (!values.length) return [0, 1];

  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = max - min;
  const pad = span === 0 ? 5 : Math.max(span * 0.18, 1);

  return [min - pad, max + pad];
}

function computeVisibleDomain(
  xExtent,
  yExtent,
  transform,
  innerWidth,
  innerHeight,
) {
  const domainWidth = xExtent[1] - xExtent[0];
  const domainHeight = yExtent[1] - yExtent[0];

  const xMin =
    xExtent[0] - (transform.x / transform.scale / innerWidth) * domainWidth;
  const xMax = xMin + domainWidth / transform.scale;

  const yMax =
    yExtent[1] + (transform.y / transform.scale / innerHeight) * domainHeight;
  const yMin = yMax - domainHeight / transform.scale;

  return { xMin, xMax, yMin, yMax };
}

function clampTransform(transform, innerWidth, innerHeight) {
  const scale = transform.scale;
  const scaledWidth = innerWidth * scale;
  const scaledHeight = innerHeight * scale;

  let x = transform.x;
  let y = transform.y;

  if (scaledWidth <= innerWidth) {
    x = (innerWidth - scaledWidth) / 2;
  } else {
    x = Math.min(0, Math.max(innerWidth - scaledWidth, x));
  }

  if (scaledHeight <= innerHeight) {
    y = (innerHeight - scaledHeight) / 2;
  } else {
    y = Math.min(0, Math.max(innerHeight - scaledHeight, y));
  }

  return { scale, x, y };
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function convertBrushToTransform(
  brushPixelRect,
  currentTransform,
  plotInnerWidth,
  plotInnerHeight,
) {
  const contentX0 =
    (brushPixelRect.x - currentTransform.x) / currentTransform.scale;
  const contentY0 =
    (brushPixelRect.y - currentTransform.y) / currentTransform.scale;
  const contentBrushWidth = brushPixelRect.width / currentTransform.scale;
  const contentBrushHeight = brushPixelRect.height / currentTransform.scale;

  const fitScaleX = plotInnerWidth / contentBrushWidth;
  const fitScaleY = plotInnerHeight / contentBrushHeight;
  const newScale = clamp(Math.min(fitScaleX, fitScaleY), ZOOM_MIN, ZOOM_MAX);

  const rawX = -contentX0 * newScale;
  const rawY = -contentY0 * newScale;

  return clampTransform(
    { scale: newScale, x: rawX, y: rawY },
    plotInnerWidth,
    plotInnerHeight,
  );
}

function formatTick(value) {
  if (Number.isInteger(value)) return String(value);
  return parseFloat(Number(value).toPrecision(4)).toString();
}

export default RechartsPlotter;

```

---

# src\lib\chartInteractionLogger.js

```javascript
export function logChartInteractionEvent({
  interactionType,
  visualizationLibrary,
  interactionSource,
}) {
  console.log({
    type: interactionType,
    library: visualizationLibrary,
    source: interactionSource,
  });
}

```

---

# src\lib\constants.js

```javascript
export const LIBRARIES = [
  "Recharts",
  "D3",
  "PixiJS",
  "Konva",
  "DeckGL",
  "ECharts",
];

export const DISABLED_LIBRARIES = ["DeckGL", "ECharts"];

/**
 * Dynamic image count support.
 * We no longer restrict to [1,2,4,8].
 */
export const MIN_IMAGES_PER_POINT = 1;
export const MAX_IMAGES_PER_POINT = 8;

export const DATA_POINT_LIMITS = {
  min: 1,
  max: 1000,
  defaultCount: 16,
};

export const CELL_SIZE = 50;
export const IMAGE_PADDING = 0.9;

export const ADAPTIVE_CELL_SIZE = {
  max: 50,
  min: 4,
  gapRatio: 0.55,
  collapseThreshold: 0,
};

export const PLOT_DIMENSIONS = {
  width: 900,
  height: 600,
};

export const PLOT_MARGIN = {
  top: 20,
  right: 20,
  bottom: 40,
  left: 50,
};

export const DATA_URL = "/data/data.json";

export const BRUSH_ZOOM = {
  fill: "rgba(68, 147, 255, 0.15)",
  stroke: "#4493ff",
  strokeWidth: 1.5,
  minimumSelectionPixels: 5,
};

export const ZOOM_SCALE_FACTOR = 1.5;

export const WHEEL_ZOOM_SENSITIVITY = 0.002;

/**
 * Prevent browser crashes.
 * 1000 x 1000 = 1,000,000 rendered images.
 */
export const MAX_RENDER_IMAGES = 50000;

```

---

# src\lib\densityLayout.js

```javascript
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
 * Always preserve requested image count.
 * We scale image sizes instead of collapsing image count.
 */
export function computeEffectiveImageCount(adaptiveCellSize, imageCount) {
  const parsed = Number(imageCount);

  if (Number.isNaN(parsed)) {
    return 1;
  }

  return Math.max(1, Math.min(8, Math.floor(parsed)));
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

/* ─── Internal: Clamping ────────────────────────────────────────── */

function clampCellSize(rawSize) {
  return Math.max(
    ADAPTIVE_CELL_SIZE.min,
    Math.min(rawSize, ADAPTIVE_CELL_SIZE.max),
  );
}

```

---

# src\lib\gridLayout.js

```javascript
import { MAX_RENDER_IMAGES, IMAGE_PADDING } from "./constants";

/**
 * Computes deterministic grid offsets for ANY image count.
 */
export function computeGridOffsets(cellWidth, cellHeight, imageCount) {
  const safeImageCount = sanitizeImageCount(imageCount);

  const columns = Math.ceil(Math.sqrt(safeImageCount));
  const rows = Math.ceil(safeImageCount / columns);

  const subWidth = Math.max(2, cellWidth - columns * IMAGE_PADDING);

  const subHeight = Math.max(2, cellHeight - rows * IMAGE_PADDING);

  const offsets = [];

  const centeredOffsetX = ((columns - 1) * subWidth) / 2;

  const centeredOffsetY = ((rows - 1) * subHeight) / 2;

  for (let index = 0; index < safeImageCount; index++) {
    const column = index % columns;
    const row = Math.floor(index / columns);

    const offsetX = column * subWidth - centeredOffsetX;

    const offsetY = row * subHeight - centeredOffsetY;

    offsets.push({
      offsetX,
      offsetY,
      width: subWidth,
      height: subHeight,
    });
  }

  return offsets;
}

/**
 * Computes deterministic image positions.
 */
export function computeImagePositions(
  centerX,
  centerY,
  cellWidth,
  cellHeight,
  imageCount,
) {
  const safeImageCount = sanitizeImageCount(imageCount);

  const offsets = computeGridOffsets(cellWidth, cellHeight, safeImageCount);

  const positions = [];

  for (let index = 0; index < offsets.length; index++) {
    if (positions.length >= MAX_RENDER_IMAGES) {
      break;
    }

    const offset = offsets[index];

    positions.push({
      imageIndex: index,

      x: centerX + offset.offsetX - offset.width / 2,

      y: centerY + offset.offsetY - offset.height / 2,

      width: offset.width,
      height: offset.height,
    });
  }

  return positions;
}

/**
 * Normalizes image counts.
 */
function sanitizeImageCount(imageCount) {
  const parsed = Number(imageCount);

  if (Number.isNaN(parsed)) {
    return 1;
  }

  return Math.max(1, Math.min(1000, Math.floor(parsed)));
}

```

---

# src\lib\imageCache.js

```javascript
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

```

---

# src\lib\interactionMode.js

```javascript
import { useState, useCallback } from "react";

export const INTERACTION_MODES = {
  ZOOM: "zoom",
  PAN: "pan",
};

export function useInteractionMode(initialMode = INTERACTION_MODES.ZOOM) {
  const [interactionMode, setInteractionMode] = useState(initialMode);

  const isZoomMode = interactionMode === INTERACTION_MODES.ZOOM;
  const isPanMode = interactionMode === INTERACTION_MODES.PAN;

  const activateZoomMode = useCallback(() => {
    setInteractionMode(INTERACTION_MODES.ZOOM);
  }, []);

  const activatePanMode = useCallback(() => {
    setInteractionMode(INTERACTION_MODES.PAN);
  }, []);

  return {
    interactionMode,
    setInteractionMode,
    isZoomMode,
    isPanMode,
    activateZoomMode,
    activatePanMode,
  };
}

```

---

# src\lib\plotterData.js

```javascript
import { useState, useEffect } from "react";
import { DATA_URL } from "./constants";

export function usePlotterData() {
  const [plotterPoints, setPlotterPoints] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);

  useEffect(() => {
    fetch(DATA_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status}`);
        }
        return response.json();
      })
      .then((jsonData) => {
        setPlotterPoints(jsonData);
        setIsLoading(false);
      })
      .catch((fetchError) => {
        setLoadError(fetchError.message);
        setIsLoading(false);
      });
  }, []);

  return { plotterPoints, isLoading, loadError };
}

```

---

# src\lib\syntheticDataGenerator.js

```javascript
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

    syntheticPoints.push({
      id: `synth-${index}`,
      x: column * spacing,
      y: row * spacing,
      image: BASE_IMAGE_PATH,
      label: `Point ${index + 1} (${column * spacing}, ${row * spacing})`,
      meta: {
        interval: column * spacing,
        angle: row * spacing,
        quality: parseFloat((0.7 + Math.random() * 0.25).toFixed(2)),
      },
    });
  }

  return syntheticPoints;
}

/**
 * Computes the number of columns for a near-square grid layout.
 */
function computeGridColumns(totalPoints) {
  return Math.ceil(Math.sqrt(totalPoints));
}

```

---

# src\main.jsx

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

```


```

---

# src\App.jsx

```jsx
import { useState, useMemo } from "react";

import Navbar from "./components/Navbar";
import ImageCountSelector from "./components/ImageCountSelector";
import DataPointCountControl from "./components/DataPointCountControl";

import RechartsPlotter from "./components/RechartsPlotter";
import D3Plotter from "./components/D3Plotter";
import PixiPlotter from "./components/PixiPlotter";
import KonvaPlotter from "./components/KonvaPlotter";

import { generateSyntheticPoints } from "./lib/syntheticDataGenerator";

import {
  DATA_POINT_LIMITS,
  MAX_IMAGES_PER_POINT,
  MIN_IMAGES_PER_POINT,
} from "./lib/constants";

import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState(null);

  const [imageCount, setImageCount] = useState(1);

  const [dataPointCount, setDataPointCount] = useState(
    DATA_POINT_LIMITS.defaultCount,
  );

  const [appliedXGap, setAppliedXGap] = useState(10);

  const [appliedYGap, setAppliedYGap] = useState(10);

  const [draftXGap, setDraftXGap] = useState(10);

  const [draftYGap, setDraftYGap] = useState(10);

  const hasChanges = draftXGap !== appliedXGap || draftYGap !== appliedYGap;

  /**
   * Stable deterministic synthetic data.
   */
  const syntheticPoints = useMemo(() => {
    return generateSyntheticPoints(
      Math.max(
        DATA_POINT_LIMITS.min,
        Math.min(dataPointCount, DATA_POINT_LIMITS.max),
      ),
    );
  }, [dataPointCount]);

  const handleGapUpdate = () => {
    setAppliedXGap(draftXGap);
    setAppliedYGap(draftYGap);
  };

  /**
   * Critical normalization.
   */
  const handleImageCountChange = (value) => {
    const parsed = Number(value);

    if (Number.isNaN(parsed)) {
      setImageCount(1);
      return;
    }

    const clamped = Math.max(
      MIN_IMAGES_PER_POINT,
      Math.min(MAX_IMAGES_PER_POINT, Math.floor(parsed)),
    );

    setImageCount(clamped);
  };

  const plotterProps = {
    imageCount,
    xGap: appliedXGap,
    yGap: appliedYGap,
    syntheticPoints,
  };

  const renderActivePlotter = () => {
    switch (activeTab) {
      case "Recharts":
        return <RechartsPlotter {...plotterProps} />;

      case "D3":
        return <D3Plotter {...plotterProps} />;

      case "PixiJS":
        return <PixiPlotter {...plotterProps} />;

      case "Konva":
        return <KonvaPlotter {...plotterProps} />;

      default:
        return (
          <div
            style={{
              height: "600px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#888",
              fontSize: "20px",
              fontWeight: "500",
            }}
          >
            Click a tab to render the chart
          </div>
        );
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Image Plotting System PoC</h1>

      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <DataPointCountControl
        dataPointCount={dataPointCount}
        onDataPointCountChange={setDataPointCount}
      />

      <ImageCountSelector
        imageCount={imageCount}
        setImageCount={handleImageCountChange}
      />

      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <label style={{ color: "#fff" }}>X Gap:</label>

          <input
            type="range"
            min="1"
            max="50"
            value={draftXGap}
            onChange={(e) => setDraftXGap(Number(e.target.value))}
          />

          <span
            style={{
              color: "#888",
              width: "20px",
            }}
          >
            {draftXGap}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <label style={{ color: "#fff" }}>Y Gap:</label>

          <input
            type="range"
            min="1"
            max="50"
            value={draftYGap}
            onChange={(e) => setDraftYGap(Number(e.target.value))}
          />

          <span
            style={{
              color: "#888",
              width: "20px",
            }}
          >
            {draftYGap}
          </span>
        </div>

        <button
          onClick={handleGapUpdate}
          disabled={!hasChanges}
          style={{
            padding: "5px 15px",
            backgroundColor: hasChanges ? "#2e8b57" : "#444",

            color: hasChanges ? "#fff" : "#888",

            border: "none",
            borderRadius: "4px",

            cursor: hasChanges ? "pointer" : "not-allowed",

            fontWeight: "bold",
          }}
        >
          Update
        </button>
      </div>

      <div className="viewer-container">{renderActivePlotter()}</div>
    </div>
  );
}

export default App;

```

---

# src\components\D3Plotter.jsx

```jsx
import { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import { usePlotterData } from "../lib/plotterData";
import { logChartInteractionEvent } from "../lib/chartInteractionLogger";
import { useInteractionMode, INTERACTION_MODES } from "../lib/interactionMode";

import { computeImagePositions } from "../lib/gridLayout";
import {
  CELL_SIZE,
  PLOT_DIMENSIONS,
  PLOT_MARGIN,
  BRUSH_ZOOM,
  ZOOM_SCALE_FACTOR,
  WHEEL_ZOOM_SENSITIVITY,
} from "../lib/constants";
import {
  computeAdaptiveCellSize,
  filterVisiblePoints,
  computeEffectiveImageCount,
} from "../lib/densityLayout";
import PlotterControls from "./PlotterControls";

/* ─── Entry Component ───────────────────────────────────────────── */

function D3Plotter({ imageCount, xGap, yGap, syntheticPoints }) {
  const {
    plotterPoints: fetchedPoints,
    isLoading,
    loadError,
  } = usePlotterData();

  const plotterPoints = syntheticPoints || fetchedPoints;

  if (!syntheticPoints && isLoading)
    return <div className="plotter-loading">Loading data…</div>;
  if (!syntheticPoints && loadError)
    return <div className="plotter-error">Error: {loadError}</div>;

  return (
    <D3PlotCanvas
      plotterPoints={plotterPoints}
      imageCount={imageCount}
      xGap={xGap}
      yGap={yGap}
    />
  );
}

/* ─── Canvas Wrapper ────────────────────────────────────────────── */

function D3PlotCanvas({ plotterPoints, imageCount, xGap, yGap }) {
  const svgRef = useRef(null);
  const tooltipRef = useRef(null);
  const containerRef = useRef(null);
  const plotControlsRef = useRef(null);
  const interactionCleanupRef = useRef(null);

  const originalXDomainRef = useRef(null);
  const originalYDomainRef = useRef(null);

  const [containerWidth, setContainerWidth] = useState(PLOT_DIMENSIONS.width);
  const { interactionMode, setInteractionMode, isZoomMode } =
    useInteractionMode();

  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) setContainerWidth(entry.contentRect.width);
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    if (!svgRef.current || plotterPoints.length === 0) return;

    const initResult = initializePlot(
      svgRef.current,
      tooltipRef.current,
      plotterPoints,
      imageCount,
      containerWidth,
      xGap,
      yGap,
      originalXDomainRef,
      originalYDomainRef,
    );

    plotControlsRef.current = initResult.controls;
    interactionCleanupRef.current = initResult.setActiveInteractionMode;

    // Apply initial mode once after chart creation
    initResult.setActiveInteractionMode(interactionMode);
  }, [plotterPoints, imageCount, containerWidth, xGap, yGap]); // interactionMode removed

  useEffect(() => {
    if (interactionCleanupRef.current) {
      interactionCleanupRef.current(interactionMode);
    }
  }, [interactionMode]);

  const handleZoomIn = () => plotControlsRef.current?.zoomIn();
  const handleZoomOut = () => plotControlsRef.current?.zoomOut();
  const handleReset = () => plotControlsRef.current?.resetZoom();

  const cursorStyle = isZoomMode ? "crosshair" : "grab";

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      <PlotterControls
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
        interactionMode={interactionMode}
        onModeChange={setInteractionMode}
      />
      <svg ref={svgRef} style={{ cursor: cursorStyle }} />
      <div
        ref={tooltipRef}
        className="plotter-tooltip"
        style={{ display: "none" }}
      />
    </div>
  );
}

/* ─── Plot Initialization ───────────────────────────────────────── */

function initializePlot(
  svgElement,
  tooltipElement,
  plotterPoints,
  imageCount,
  containerWidth,
  xGap,
  yGap,
  originalXDomainRef,
  originalYDomainRef,
) {
  const width = containerWidth;
  const height = PLOT_DIMENSIONS.height;
  const margin = PLOT_MARGIN;
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const svg = d3.select(svgElement);
  svg.selectAll("*").remove();
  svg
    .attr("width", width)
    .attr("height", height)
    .style("background", "transparent");

  const xScale = buildXScale(plotterPoints, innerWidth, xGap);
  const yScale = buildYScale(plotterPoints, innerHeight, yGap);

  originalXDomainRef.current = xScale.domain().slice();
  originalYDomainRef.current = yScale.domain().slice();

  const clipId = "plot-clip-" + Math.random().toString(36).slice(2);
  svg
    .append("defs")
    .append("clipPath")
    .attr("id", clipId)
    .append("rect")
    .attr("width", innerWidth)
    .attr("height", innerHeight);

  const rootGroup = svg
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  const plotGroup = rootGroup.append("g").attr("clip-path", `url(#${clipId})`);
  const contentGroup = plotGroup.append("g");

  renderAxes(rootGroup, xScale, yScale, innerWidth, innerHeight);
  renderGrid(contentGroup, xScale, yScale, innerWidth, innerHeight);

  const initialVisiblePoints = filterVisiblePoints(
    plotterPoints,
    (val) => xScale(val),
    (val) => yScale(val),
    innerWidth,
    innerHeight,
    CELL_SIZE,
  );

  const baseCellSize = computeAdaptiveCellSize(
    initialVisiblePoints,
    (val) => xScale(val),
    (val) => yScale(val),
  );

  const originalDomainSpanX = xScale.domain()[1] - xScale.domain()[0];
  const originalDomainSpanY = yScale.domain()[1] - yScale.domain()[0];

  const initialEffectiveImageCount = computeEffectiveImageCount(
    baseCellSize,
    imageCount,
  );

  renderImagePoints(
    contentGroup,
    initialVisiblePoints,
    xScale,
    yScale,
    initialEffectiveImageCount,
    tooltipElement,
    baseCellSize,
  );

  const redrawContext = {
    contentGroup,
    rootGroup,
    xScale,
    yScale,
    innerWidth,
    innerHeight,
    plotterPoints,
    imageCount,
    tooltipElement,
    baseCellSize,
    originalDomainSpanX,
    originalDomainSpanY,
  };

  const triggerRedraw = () => redrawPlotContent(redrawContext);

  const brushGroup = plotGroup.append("g").attr("class", "d3-brush");
  const panOverlay = plotGroup
    .append("rect")
    .attr("class", "d3-pan-overlay")
    .attr("width", innerWidth)
    .attr("height", innerHeight)
    .attr("fill", "transparent")
    .style("display", "none");

  const brush = buildBrush(
    xScale,
    yScale,
    innerWidth,
    innerHeight,
    brushGroup,
    triggerRedraw,
  );
  const panDrag = buildPanDrag(
    xScale,
    yScale,
    innerWidth,
    innerHeight,
    triggerRedraw,
  );

  attachWheelZoom(
    svg,
    margin,
    xScale,
    yScale,
    innerWidth,
    innerHeight,
    triggerRedraw,
  );
  attachDoubleClickReset(
    svg,
    xScale,
    yScale,
    originalXDomainRef,
    originalYDomainRef,
    triggerRedraw,
  );

  const setActiveInteractionMode = (mode) => {
    // Clear previous interactions
    brushGroup.on(".brush", null);
    panOverlay.on(".drag", null);

    if (mode === INTERACTION_MODES.ZOOM) {
      panOverlay.style("display", "none");

      brushGroup.style("display", null);
      brushGroup.call(brush);
    } else {
      brushGroup.style("display", "none");

      panOverlay.style("display", null);
      panOverlay.call(panDrag);
    }
  };

  const controls = buildPlotControls(
    xScale,
    yScale,
    originalXDomainRef,
    originalYDomainRef,
    triggerRedraw,
  );

  return { controls, setActiveInteractionMode };
}

/* ─── Scale Builders ────────────────────────────────────────────── */

function buildXScale(plotterPoints, innerWidth, xGap) {
  const xExtent = d3.extent(plotterPoints, (point) => point.x);
  const padding = (xExtent[1] - xExtent[0]) * 0.15 || 5;
  const xSpacingScale = xGap / 10;

  return d3
    .scaleLinear()
    .domain([xExtent[0] - padding, xExtent[1] + padding])
    .range([0, innerWidth * xSpacingScale]);
}

function buildYScale(plotterPoints, innerHeight, yGap) {
  const yExtent = d3.extent(plotterPoints, (point) => point.y);
  const padding = (yExtent[1] - yExtent[0]) * 0.15 || 5;
  const ySpacingScale = yGap / 10;

  return d3
    .scaleLinear()
    .domain([yExtent[0] - padding, yExtent[1] + padding])
    .range([innerHeight * ySpacingScale, 0]);
}

/* ─── Brush Zoom ────────────────────────────────────────────────── */

function buildBrush(
  xScale,
  yScale,
  innerWidth,
  innerHeight,
  brushGroup,
  redrawCallback,
) {
  const brush = d3
    .brush()
    .extent([
      [0, 0],
      [innerWidth, innerHeight],
    ])
    .on("end", (event) => {
      handleBrushEnd(event, brush, brushGroup, xScale, yScale, redrawCallback);
    });

  return brush;
}

function handleBrushEnd(
  event,
  brush,
  brushGroup,
  xScale,
  yScale,
  redrawCallback,
) {
  const selection = event.selection;
  if (!selection) return;

  const [[pixelX0, pixelY0], [pixelX1, pixelY1]] = selection;
  const selectionWidth = pixelX1 - pixelX0;
  const selectionHeight = pixelY1 - pixelY0;

  if (
    selectionWidth < BRUSH_ZOOM.minimumSelectionPixels ||
    selectionHeight < BRUSH_ZOOM.minimumSelectionPixels
  ) {
    brushGroup.call(brush.move, null);
    return;
  }

  logChartInteractionEvent({
    interactionType: "ZOOM_IN",
    visualizationLibrary: "D3",
    interactionSource: "brush",
  });

  const newXDomain = [xScale.invert(pixelX0), xScale.invert(pixelX1)];
  const newYDomain = [yScale.invert(pixelY1), yScale.invert(pixelY0)];

  xScale.domain(newXDomain);
  yScale.domain(newYDomain);

  brushGroup.call(brush.move, null);
  redrawCallback();
}

/* ─── Pan Drag ──────────────────────────────────────────────────── */

function buildPanDrag(xScale, yScale, innerWidth, innerHeight, redrawCallback) {
  let startXDomain = null;
  let startYDomain = null;

  return d3
    .drag()
    .on("start", () => {
      logChartInteractionEvent({
        interactionType: "PAN",
        visualizationLibrary: "D3",
        interactionSource: "drag",
      });
      startXDomain = xScale.domain().slice();
      startYDomain = yScale.domain().slice();
    })
    .on("drag", (event) => {
      if (!startXDomain || !startYDomain) return;

      const xSpanPerPixel = (startXDomain[1] - startXDomain[0]) / innerWidth;
      const ySpanPerPixel = (startYDomain[1] - startYDomain[0]) / innerHeight;

      const domainDeltaX = -event.dx * xSpanPerPixel;
      const domainDeltaY = event.dy * ySpanPerPixel;

      const currentXDomain = xScale.domain();
      const currentYDomain = yScale.domain();

      xScale.domain([
        currentXDomain[0] + domainDeltaX,
        currentXDomain[1] + domainDeltaX,
      ]);
      yScale.domain([
        currentYDomain[0] + domainDeltaY,
        currentYDomain[1] + domainDeltaY,
      ]);

      redrawCallback();
    })
    .on("end", () => {
      startXDomain = null;
      startYDomain = null;
    });
}

/* ─── Wheel Zoom ────────────────────────────────────────────────── */

function attachWheelZoom(
  svg,
  margin,
  xScale,
  yScale,
  innerWidth,
  innerHeight,
  redrawCallback,
) {
  svg.on(
    "wheel.zoom",
    (event) => {
      event.preventDefault();
      handleWheelZoom(
        event,
        margin,
        xScale,
        yScale,
        innerWidth,
        innerHeight,
        redrawCallback,
      );
    },
    { passive: false },
  );
}

function handleWheelZoom(
  event,
  margin,
  xScale,
  yScale,
  innerWidth,
  innerHeight,
  redrawCallback,
) {
  const zoomFactor = Math.exp(-event.deltaY * WHEEL_ZOOM_SENSITIVITY);

  const svgRect = event.currentTarget.getBoundingClientRect();
  const cursorX = event.clientX - svgRect.left - margin.left;
  const cursorY = event.clientY - svgRect.top - margin.top;

  const isCursorInsidePlot =
    cursorX >= 0 &&
    cursorX <= innerWidth &&
    cursorY >= 0 &&
    cursorY <= innerHeight;

  if (!isCursorInsidePlot) return;

  const isZoomIn = event.deltaY < 0;
  logChartInteractionEvent({
    interactionType: isZoomIn ? "ZOOM_IN" : "ZOOM_OUT",
    visualizationLibrary: "D3",
    interactionSource: "wheel",
  });

  const anchorDataX = xScale.invert(cursorX);
  const anchorDataY = yScale.invert(cursorY);

  zoomDomainAroundAnchor(xScale, anchorDataX, zoomFactor);
  zoomDomainAroundAnchor(yScale, anchorDataY, zoomFactor);

  redrawCallback();
}

/* ─── Double-Click Reset ───────────────────────────────────────── */

function attachDoubleClickReset(
  svg,
  xScale,
  yScale,
  originalXDomainRef,
  originalYDomainRef,
  redrawCallback,
) {
  svg.on("dblclick.zoom", () => {
    logChartInteractionEvent({
      interactionType: "RESET",
      visualizationLibrary: "D3",
      interactionSource: "double_click",
    });
    resetDomains(xScale, yScale, originalXDomainRef, originalYDomainRef);
    redrawCallback();
  });
}

/* ─── Domain Manipulation Helpers ───────────────────────────────── */

function zoomDomainAroundAnchor(scale, anchorValue, zoomFactor) {
  const [domainMin, domainMax] = scale.domain();
  const newMin = anchorValue - (anchorValue - domainMin) / zoomFactor;
  const newMax = anchorValue + (domainMax - anchorValue) / zoomFactor;
  scale.domain([newMin, newMax]);
}

function zoomDomainAroundCenter(scale, zoomFactor) {
  const [domainMin, domainMax] = scale.domain();
  const center = (domainMin + domainMax) / 2;
  zoomDomainAroundAnchor(scale, center, zoomFactor);
}

function resetDomains(xScale, yScale, originalXDomainRef, originalYDomainRef) {
  xScale.domain(originalXDomainRef.current.slice());
  yScale.domain(originalYDomainRef.current.slice());
}

/* ─── Plot Controls (Button Handlers) ──────────────────────────── */

function buildPlotControls(
  xScale,
  yScale,
  originalXDomainRef,
  originalYDomainRef,
  redrawCallback,
) {
  return {
    zoomIn: () => {
      logChartInteractionEvent({
        interactionType: "ZOOM_IN",
        visualizationLibrary: "D3",
        interactionSource: "button",
      });
      zoomDomainAroundCenter(xScale, ZOOM_SCALE_FACTOR);
      zoomDomainAroundCenter(yScale, ZOOM_SCALE_FACTOR);
      redrawCallback();
    },
    zoomOut: () => {
      logChartInteractionEvent({
        interactionType: "ZOOM_OUT",
        visualizationLibrary: "D3",
        interactionSource: "button",
      });
      zoomDomainAroundCenter(xScale, 1 / ZOOM_SCALE_FACTOR);
      zoomDomainAroundCenter(yScale, 1 / ZOOM_SCALE_FACTOR);
      redrawCallback();
    },
    resetZoom: () => {
      logChartInteractionEvent({
        interactionType: "RESET",
        visualizationLibrary: "D3",
        interactionSource: "button",
      });
      resetDomains(xScale, yScale, originalXDomainRef, originalYDomainRef);
      redrawCallback();
    },
  };
}

/* ─── Content Redraw Pipeline ───────────────────────────────────── */

function redrawPlotContent(context) {
  const {
    contentGroup,
    rootGroup,
    xScale,
    yScale,
    innerWidth,
    innerHeight,
    plotterPoints,
    imageCount,
    tooltipElement,
    baseCellSize,
    originalDomainSpanX,
    originalDomainSpanY,
  } = context;

  /* Compute zoom factor from domain ratio so images grow when zoomed in,
     matching the transform-based magnification of Recharts/Konva/PixiJS. */
  const currentSpanX = xScale.domain()[1] - xScale.domain()[0];
  const currentSpanY = yScale.domain()[1] - yScale.domain()[0];
  const zoomFactorX = originalDomainSpanX / currentSpanX;
  const zoomFactorY = originalDomainSpanY / currentSpanY;
  const zoomFactor = Math.min(zoomFactorX, zoomFactorY);

  const zoomedCellSize = baseCellSize * zoomFactor;

  const visiblePoints = filterVisiblePoints(
    plotterPoints,
    (val) => xScale(val),
    (val) => yScale(val),
    innerWidth,
    innerHeight,
    zoomedCellSize,
  );

  const effectiveImageCount = computeEffectiveImageCount(
    zoomedCellSize,
    imageCount,
  );

  contentGroup.selectAll(".grid-lines, .image-point").remove();

  renderGrid(contentGroup, xScale, yScale, innerWidth, innerHeight);
  renderImagePoints(
    contentGroup,
    visiblePoints,
    xScale,
    yScale,
    effectiveImageCount,
    tooltipElement,
    zoomedCellSize,
  );

  updateAxes(rootGroup, xScale, yScale);
}

/* ─── Axes ──────────────────────────────────────────────────────── */

function renderAxes(container, xScale, yScale, innerWidth, innerHeight) {
  container
    .append("g")
    .attr("class", "x-axis")
    .attr("transform", `translate(0,${innerHeight})`)
    .call(d3.axisBottom(xScale).ticks(8))
    .selectAll("text")
    .attr("fill", "#888");

  container
    .append("g")
    .attr("class", "y-axis")
    .call(d3.axisLeft(yScale).ticks(6))
    .selectAll("text")
    .attr("fill", "#888");

  styleAxisElements(container);
}

function updateAxes(container, xScale, yScale) {
  container.select(".x-axis").call(d3.axisBottom(xScale).ticks(8));
  container.select(".y-axis").call(d3.axisLeft(yScale).ticks(6));

  container.selectAll(".x-axis text, .y-axis text").attr("fill", "#888");
  styleAxisElements(container);
}

function styleAxisElements(container) {
  container.selectAll(".x-axis line, .y-axis line").attr("stroke", "#555");
  container.selectAll(".x-axis path, .y-axis path").attr("stroke", "#555");
}

/* ─── Grid ──────────────────────────────────────────────────────── */

function renderGrid(container, xScale, yScale, innerWidth, innerHeight) {
  const gridGroup = container.append("g").attr("class", "grid-lines");

  gridGroup
    .selectAll("line.horizontal")
    .data(yScale.ticks(6))
    .enter()
    .append("line")
    .attr("class", "horizontal")
    .attr("x1", 0)
    .attr("x2", innerWidth)
    .attr("y1", (tick) => yScale(tick))
    .attr("y2", (tick) => yScale(tick))
    .attr("stroke", "#2a2a3e")
    .attr("stroke-dasharray", "3 3");

  gridGroup
    .selectAll("line.vertical")
    .data(xScale.ticks(8))
    .enter()
    .append("line")
    .attr("class", "vertical")
    .attr("x1", (tick) => xScale(tick))
    .attr("x2", (tick) => xScale(tick))
    .attr("y1", 0)
    .attr("y2", innerHeight)
    .attr("stroke", "#2a2a3e")
    .attr("stroke-dasharray", "3 3");
}

/* ─── Image Points ──────────────────────────────────────────────── */

function renderImagePoints(
  container,
  plotterPoints,
  xScale,
  yScale,
  imageCount,
  tooltipElement,
  cellSize = CELL_SIZE,
) {
  const tooltip = d3.select(tooltipElement);

  plotterPoints.forEach((point) => {
    const centerX = xScale(point.x);
    const centerY = yScale(point.y);
    const positions = computeImagePositions(
      centerX,
      centerY,
      cellSize,
      cellSize,
      imageCount,
    );

    const pointGroup = container.append("g").attr("class", "image-point");

    positions.forEach((position) => {
      pointGroup
        .append("image")
        .attr("href", point.image)
        .attr("x", position.x)
        .attr("y", position.y)
        .attr("width", position.width)
        .attr("height", position.height)
        .attr("preserveAspectRatio", "xMidYMid meet")
        .style("cursor", "pointer");
    });

    pointGroup
      .on("mouseenter", (event) => showTooltip(tooltip, event, point))
      .on("mousemove", (event) => moveTooltip(tooltip, event))
      .on("mouseleave", () => hideTooltip(tooltip));
  });
}

/* ─── Tooltip ───────────────────────────────────────────────────── */

function showTooltip(tooltip, event, point) {
  tooltip
    .style("display", "block")
    .html(
      `<div class="tooltip-label">${point.label}</div>` +
        `<div class="tooltip-meta">` +
        `<span>Interval: ${point.meta.interval}s</span>` +
        `<span>Angle: ${point.meta.angle}°</span>` +
        `<span>Quality: ${point.meta.quality}</span>` +
        `</div>`,
    );

  moveTooltip(tooltip, event);
}

function moveTooltip(tooltip, event) {
  const containerRect = event.currentTarget
    .closest(".viewer-container")
    ?.getBoundingClientRect();
  if (!containerRect) return;

  tooltip
    .style("left", `${event.clientX - containerRect.left + 12}px`)
    .style("top", `${event.clientY - containerRect.top - 10}px`);
}

function hideTooltip(tooltip) {
  tooltip.style("display", "none");
}

export default D3Plotter;

```

---

# src\components\DataPointCountControl.jsx

```jsx
"use client";

const DATA_POINT_OPTIONS = [100, 500, 1000];

export default function DataPointCountControl({
  dataPointCount,
  onDataPointCountChange,
}) {
  return (
    <div className="dp-control">
      {/* Header */}
      <div className="dp-header">
        <h3 className="dp-title">Data Points</h3>

        <span className="dp-selected">{dataPointCount} selected</span>
      </div>

      {/* Buttons */}
      <div className="dp-buttons">
        {DATA_POINT_OPTIONS.map((count) => {
          const isActive = dataPointCount === count;

          return (
            <button
              key={count}
              onClick={() => onDataPointCountChange(count)}
              className={`dp-button ${isActive ? "active" : ""}`}
            >
              {count}
            </button>
          );
        })}
      </div>
    </div>
  );
}

```

---

# src\components\DeckGLPlotter.jsx

```jsx
import { useState, useMemo, useRef, useEffect } from "react";
import DeckGL from "@deck.gl/react";
import { OrthographicView } from "@deck.gl/core";
import { IconLayer, TextLayer } from "@deck.gl/layers";
import * as d3 from "d3";

import { usePlotterData } from "../lib/plotterData";
import { computeImagePositions } from "../lib/gridLayout";

import { CELL_SIZE, PLOT_DIMENSIONS, PLOT_MARGIN } from "../lib/constants";

import PlotterControls from "./PlotterControls";

const ORTHOGRAPHIC_VIEW = new OrthographicView({
  id: "orthographic-view",
  flipY: true,
});

const ZOOM_MIN = -4;
const ZOOM_MAX = 8;

const BASE_X_GAP = 10;
const BASE_Y_GAP = 10;

function DeckGLPlotter({ imageCount, xGap, yGap }) {
  const { plotterPoints, isLoading, loadError } = usePlotterData();

  if (isLoading) {
    return <div className="plotter-loading">Loading data…</div>;
  }

  if (loadError) {
    return <div className="plotter-error">Error: {loadError}</div>;
  }

  return (
    <DeckGLCanvas
      plotterPoints={plotterPoints}
      imageCount={imageCount}
      xGap={xGap}
      yGap={yGap}
    />
  );
}

function DeckGLCanvas({ plotterPoints, imageCount, xGap, yGap }) {
  const containerRef = useRef(null);

  const [containerWidth, setContainerWidth] = useState(PLOT_DIMENSIONS.width);

  const [hoveredPoint, setHoveredPoint] = useState(null);

  const [tooltipPos, setTooltipPos] = useState({
    x: 0,
    y: 0,
  });

  const [viewState, setViewState] = useState({
    target: [0, 0, 0],
    zoom: 0,
  });

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];

      if (entry) {
        setContainerWidth(entry.contentRect.width);
      }
    });

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  const width = containerWidth;
  const height = PLOT_DIMENSIONS.height;

  const innerWidth = Math.max(
    width - PLOT_MARGIN.left - PLOT_MARGIN.right,
    320,
  );

  const innerHeight = Math.max(
    height - PLOT_MARGIN.top - PLOT_MARGIN.bottom,
    240,
  );

  /**
   * NORMALIZE DATA
   */
  const normalizedPoints = useMemo(() => {
    const xScale = xGap / BASE_X_GAP;
    const yScale = yGap / BASE_Y_GAP;

    return plotterPoints.map((point) => ({
      ...point,
      scaledX: point.x * xScale,
      scaledY: point.y * yScale,
    }));
  }, [plotterPoints, xGap, yGap]);

  /**
   * WORLD EXTENTS
   */
  const xExtent = useMemo(() => {
    return extentWithPadding(normalizedPoints.map((d) => d.scaledX));
  }, [normalizedPoints]);

  const yExtent = useMemo(() => {
    return extentWithPadding(normalizedPoints.map((d) => d.scaledY));
  }, [normalizedPoints]);

  /**
   * FIT DATA INITIALLY
   */
  useEffect(() => {
    const domainWidth = xExtent[1] - xExtent[0];
    const domainHeight = yExtent[1] - yExtent[0];

    const scaleX = innerWidth / domainWidth;
    const scaleY = innerHeight / domainHeight;

    const scale = Math.min(scaleX, scaleY);

    const zoom = Math.log2(scale);

    const centerX = (xExtent[0] + xExtent[1]) / 2;
    const centerY = (yExtent[0] + yExtent[1]) / 2;

    Promise.resolve().then(() => {
      setViewState({
        target: [centerX, centerY, 0],
        zoom,
      });
    });
  }, [xExtent, yExtent, innerWidth, innerHeight]);

  /**
   * IMAGE DATA
   */
  const imageData = useMemo(() => {
    const items = [];

    for (const point of normalizedPoints) {
      const positions = computeImagePositions(
        point.scaledX,
        point.scaledY,
        CELL_SIZE,
        CELL_SIZE,
        imageCount,
      );

      positions.forEach((position, index) => {
        if (!point.image) return;

        items.push({
          id: `${point.id}-${index}`,

          x: position.x,
          y: position.y,

          width: position.width,
          height: position.height,

          image: point.image,

          point,
        });
      });
    }

    return items;
  }, [normalizedPoints, imageCount]);

  /**
   * GRID LINES
   */


  /**
   * LAYERS
   */
  const layers = useMemo(() => {
    return [
      new IconLayer({
        id: "image-layer",

        data: imageData,

        pickable: true,

        billboard: false,

        sizeUnits: "common",

        getPosition: (d) => [d.x, d.y],

        getIcon: (d) => ({
          url: d.image,
          width: d.width,
          height: d.height,
        }),

        getSize: (d) => d.width,

        onHover: (info) => {
          if (info.object) {
            setHoveredPoint(info.object.point);

            setTooltipPos({
              x: info.x,
              y: info.y,
            });
          } else {
            setHoveredPoint(null);
          }
        },

        updateTriggers: {
          getIcon: imageData,
        },
      }),

      new TextLayer({
        id: "axis-labels",

        data: [
          ...d3.ticks(xExtent[0], xExtent[1], 10).map((x) => ({
            position: [x, yExtent[0] - 10],
            text: formatTick(x),
          })),

          ...d3.ticks(yExtent[0], yExtent[1], 8).map((y) => ({
            position: [xExtent[0] - 10, y],
            text: formatTick(y),
          })),
        ],

        getPosition: (d) => d.position,

        getText: (d) => d.text,

        getSize: 12,

        getColor: [140, 140, 140],

        getTextAnchor: "middle",

        getAlignmentBaseline: "center",
      }),
    ];
  }, [imageData, xExtent, yExtent]);

  /**
   * CONTROLS
   */
  const handleZoomIn = () => {
    setViewState((prev) => ({
      ...prev,
      zoom: Math.min(prev.zoom + 0.5, ZOOM_MAX),
    }));
  };

  const handleZoomOut = () => {
    setViewState((prev) => ({
      ...prev,
      zoom: Math.max(prev.zoom - 0.5, ZOOM_MIN),
    }));
  };

  const handleReset = () => {
    const domainWidth = xExtent[1] - xExtent[0];
    const domainHeight = yExtent[1] - yExtent[0];

    const scaleX = innerWidth / domainWidth;
    const scaleY = innerHeight / domainHeight;

    const scale = Math.min(scaleX, scaleY);

    const zoom = Math.log2(scale);

    setViewState({
      target: [(xExtent[0] + xExtent[1]) / 2, (yExtent[0] + yExtent[1]) / 2, 0],
      zoom,
    });
  };

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
      }}
    >
      <PlotterControls
        zoomLevel={Number(Math.pow(2, viewState.zoom).toFixed(2))}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
      />

      <div
        style={{
          position: "relative",
          width: "100%",
          height,
          background: "#16213e",
          overflow: "hidden",
        }}
      >
        <DeckGL
          views={ORTHOGRAPHIC_VIEW}
          controller={{
            dragPan: true,
            scrollZoom: true,
            doubleClickZoom: true,
            touchZoom: true,
            touchRotate: false,
            keyboard: false,
          }}
          layers={layers}
          width={width}
          height={height}
          viewState={viewState}
          onViewStateChange={({ viewState }) => {
            setViewState({
              ...viewState,
              zoom: clamp(viewState.zoom, ZOOM_MIN, ZOOM_MAX),
            });
          }}
          parameters={{
            depthTest: false,
            blend: true,
          }}
          style={{
            position: "absolute",
            inset: 0,
          }}
        />

        {hoveredPoint && (
          <div
            className="plotter-tooltip"
            style={{
              display: "block",
              position: "fixed",
              left: tooltipPos.x + 12,
              top: tooltipPos.y - 10,
              pointerEvents: "none",
              zIndex: 1000,
            }}
          >
            <div className="tooltip-label">{hoveredPoint.label}</div>

            <div className="tooltip-meta">
              <span>Interval: {hoveredPoint.meta.interval}s</span>

              <span>Angle: {hoveredPoint.meta.angle}°</span>

              <span>Quality: {hoveredPoint.meta.quality}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function extentWithPadding(values) {
  if (!values.length) return [0, 1];

  const min = Math.min(...values);
  const max = Math.max(...values);

  const span = max - min;

  const pad = span === 0 ? 5 : Math.max(span * 0.18, 1);

  return [min - pad, max + pad];
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function formatTick(value) {
  if (Number.isInteger(value)) {
    return String(value);
  }

  return parseFloat(Number(value).toPrecision(4)).toString();
}

export default DeckGLPlotter;

```

---

# src\components\EChartsPlotter.jsx

```jsx
import { useMemo, useCallback, useRef } from "react";
import ReactECharts from "echarts-for-react";
import { usePlotterData } from "../lib/plotterData";
import { CELL_SIZE } from "../lib/constants";
import PlotterControls from "./PlotterControls";

function EChartsPlotter({ imageCount, xGap, yGap }) {
  const { plotterPoints, isLoading, loadError } = usePlotterData();

  if (isLoading) return <div className="plotter-loading">Loading data…</div>;
  if (loadError) return <div className="plotter-error">Error: {loadError}</div>;

  return (
    <EChartsCanvas
      plotterPoints={plotterPoints}
      imageCount={imageCount}
      xGap={xGap}
      yGap={yGap}
    />
  );
}

function EChartsCanvas({ plotterPoints, imageCount, xGap, yGap }) {
  const echartsRef = useRef(null);

  const chartOption = useMemo(
    () => buildChartOption(plotterPoints, imageCount, xGap, yGap),
    [plotterPoints, imageCount, xGap, yGap],
  );

  const handleChartEvents = useCallback(() => ({}), []);

  const handleZoom = (scale) => {
    if (!echartsRef.current) return;
    const instance = echartsRef.current.getEchartsInstance();
    const option = instance.getOption();
    const dataZoom = option.dataZoom[0];
    const range = dataZoom.end - dataZoom.start;
    const newRange = range * scale;
    const center = (dataZoom.end + dataZoom.start) / 2;
    instance.dispatchAction({
      type: "dataZoom",
      start: Math.max(0, center - newRange / 2),
      end: Math.min(100, center + newRange / 2),
    });
  };

  const handleReset = () => {
    if (!echartsRef.current) return;
    const instance = echartsRef.current.getEchartsInstance();
    instance.dispatchAction({ type: "dataZoom", start: 0, end: 100 });
  };

  return (
    <div style={{ position: "relative" }}>
      <PlotterControls
        onZoomIn={() => handleZoom(1 / 1.5)}
        onZoomOut={() => handleZoom(1.5)}
        onReset={handleReset}
      />
      <ReactECharts
        ref={echartsRef}
        option={chartOption}
        style={{ height: 550, width: "100%" }}
        notMerge
        opts={{ renderer: "canvas" }}
        onEvents={handleChartEvents()}
      />
    </div>
  );
}

function buildChartOption(plotterPoints, imageCount, xGap, yGap) {
  const gridConfig = getGridConfig(imageCount);
  const subCellWidth = CELL_SIZE;
  const subCellHeight = CELL_SIZE;

  const xValues = plotterPoints.map((p) => p.x);
  const yValues = plotterPoints.map((p) => p.y);

  const xMin = Math.min(...xValues);
  const xMax = Math.max(...xValues);
  const yMin = Math.min(...yValues);
  const yMax = Math.max(...yValues);

  const xPadding = (xMax - xMin) * 0.15 || 5;
  const yPadding = (yMax - yMin) * 0.15 || 5;

  const xCenter = (xMax + xMin) / 2;
  const yCenter = (yMax + yMin) / 2;

  const xSpacingScale = xGap / 10;
  const ySpacingScale = yGap / 10;

  const xRange = (xMax - xMin + 2 * xPadding) / xSpacingScale;
  const yRange = (yMax - yMin + 2 * yPadding) / ySpacingScale;

  return {
    backgroundColor: "transparent",
    tooltip: {
      trigger: "item",
      formatter: formatTooltip,
    },
    xAxis: {
      type: "value",
      min: xCenter - xRange / 2,
      max: xCenter + xRange / 2,
      axisLine: { lineStyle: { color: "#555" } },
      axisLabel: { color: "#888" },
      splitLine: { lineStyle: { color: "#2a2a3e", type: "dashed" } },
    },
    yAxis: {
      type: "value",
      min: yCenter - yRange / 2,
      max: yCenter + yRange / 2,
      axisLine: { lineStyle: { color: "#555" } },
      axisLabel: { color: "#888" },
      splitLine: { lineStyle: { color: "#2a2a3e", type: "dashed" } },
    },
    dataZoom: [
      { type: "inside", xAxisIndex: 0 },
      { type: "inside", yAxisIndex: 0 },
    ],
    series: [
      {
        type: "custom",
        renderItem: function (params, api) {
          const x = api.value(0);
          const y = api.value(1);
          const coord = api.coord([x, y]);

          const children = [];
          let subIndex = 0;
          for (let row = 0; row < gridConfig.rows; row++) {
            for (let col = 0; col < gridConfig.columns; col++) {
              if (subIndex >= imageCount) break;

              const xPos =
                col * (subCellWidth + xGap) -
                ((gridConfig.columns - 1) * (subCellWidth + xGap)) / 2;
              const yPos =
                row * (subCellHeight + yGap) -
                ((gridConfig.rows - 1) * (subCellHeight + yGap)) / 2;

              children.push({
                type: "image",
                style: {
                  image: api.value(2),
                  x: coord[0] + xPos - subCellWidth / 2,
                  y: coord[1] + yPos - subCellHeight / 2,
                  width: subCellWidth,
                  height: subCellHeight,
                },
              });

              subIndex++;
            }
          }
          return { type: "group", children: children };
        },
        data: plotterPoints.map((point) => ({
          value: [point.x, point.y, point.image],
          name: point.label,
          meta: point.meta,
        })),
      },
    ],
  };
}

// Removed graphic element builders since we are using custom series

function getGridConfig(imageCount) {
  const configs = {
    1: { rows: 1, columns: 1 },
    2: { rows: 1, columns: 2 },
    4: { rows: 2, columns: 2 },
    8: { rows: 2, columns: 4 },
  };

  return configs[imageCount] || configs[1];
}

function formatTooltip(params) {
  if (!params || !params.data) return "";

  const { name, data } = params;
  const meta = data.meta;

  return (
    `<strong>${name}</strong><br/>` +
    `Interval: ${meta.interval}s<br/>` +
    `Angle: ${meta.angle}°<br/>` +
    `Quality: ${meta.quality}`
  );
}

export default EChartsPlotter;

```

---

# src\components\ImageCountSelector.jsx

```jsx
import { MAX_IMAGES_PER_POINT, MIN_IMAGES_PER_POINT } from "../lib/constants";

function ImageCountSelector({ imageCount, setImageCount }) {
  return (
    <div className="image-count-selector">
      <span className="selector-label">Images per point:</span>

      <input
        type="number"
        min={MIN_IMAGES_PER_POINT}
        max={MAX_IMAGES_PER_POINT}
        value={imageCount}
        onChange={(e) => setImageCount(e.target.value)}
        className="data-point-input"
      />

      <span
        style={{
          color: "#888",
          marginLeft: "10px",
        }}
      >
        Max: {MAX_IMAGES_PER_POINT}
      </span>
    </div>
  );
}

export default ImageCountSelector;

```

---

# src\components\KonvaPlotter.jsx

```jsx
import { useState, useRef, useCallback, useEffect, useMemo } from "react";
import {
  Stage,
  Layer,
  Image as KonvaImage,
  Text,
  Line,
  Rect,
  Group,
} from "react-konva";
import { usePlotterData } from "../lib/plotterData";
import { computeImagePositions } from "../lib/gridLayout";
import { CELL_SIZE, PLOT_DIMENSIONS, PLOT_MARGIN } from "../lib/constants";
import {
  computeAdaptiveCellSize,
  filterVisiblePoints,
  computeEffectiveImageCount,
} from "../lib/densityLayout";
import PlotterControls from "./PlotterControls";
import { logChartInteractionEvent } from "../lib/chartInteractionLogger";
import { useInteractionMode } from "../lib/interactionMode";
import { getCachedImageObject, preloadImageSources } from "../lib/imageCache";


const AXIS_TICK_COUNT = 8;
const EXTENT_PADDING_RATIO = 0.2;
const EXTENT_FALLBACK_PADDING = 5;
const ZOOM_STEP = 1.5;
const PINCH_ZOOM_SENSITIVITY = 0.01;
const ZOOM_MIN = 0.3;
const ZOOM_MAX = 100000;
const GRID_COLOR = "#2a2a3e";
const AXIS_LINE_COLOR = "#555555";
const TICK_LABEL_COLOR = "#aaaaaa";
const TICK_LABEL_FONT_SIZE = 11;
const BRUSH_FILL = "rgba(68, 147, 255, 0.15)";
const BRUSH_STROKE = "#4493ff";
const BRUSH_STROKE_WIDTH = 1.5;
const BRUSH_MIN_PIXELS = 5;

function KonvaPlotter({ imageCount, syntheticPoints }) {
  const { plotterPoints: fetchedPoints, isLoading, loadError } = usePlotterData();
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const plotterPoints = syntheticPoints || fetchedPoints;

  useEffect(() => {
    if (!plotterPoints || plotterPoints.length === 0) {
      setImagesLoaded(true);
      return;
    }
    const uniqueSources = [...new Set(plotterPoints.map((point) => point.image))];
    preloadImageSources(uniqueSources).then(() => {
      setImagesLoaded(true);
    });
  }, [plotterPoints]);

  if (!syntheticPoints && isLoading) return <div className="plotter-loading">Loading data…</div>;
  if (!syntheticPoints && loadError) return <div className="plotter-error">Error: {loadError}</div>;
  if (!imagesLoaded) return <div className="plotter-loading">Preloading images…</div>;

  return (
    <KonvaCanvas
      plotterPoints={plotterPoints}
      imageCount={imageCount}
    />
  );
}

function KonvaCanvas({ plotterPoints, imageCount }) {
  /* Hot-path viewport state stored in refs — mutations never trigger React
     reconciliation. A RAF-throttled forceUpdate flushes the view at ≤60 fps. */
  const scaleRef = useRef(1);
  const offsetRef = useRef({ x: 0, y: 0 });
  const rafPendingRef = useRef(false);
  const [, forceUpdate] = useState(0);

  /* React state only for things that need declarative rendering. */
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [brushRect, setBrushRect] = useState(null);

  const stageRef = useRef(null);
  const brushStartRef = useRef(null);
  const dragRef = useRef({ dragging: false, startX: 0, startY: 0, startOffset: { x: 0, y: 0 } });
  const draggableGroupRef = useRef(null);

  /* Schedule a single React flush per animation frame. */
  const scheduleUpdate = useCallback(() => {
    if (rafPendingRef.current) return;
    rafPendingRef.current = true;
    requestAnimationFrame(() => {
      rafPendingRef.current = false;
      forceUpdate((n) => n + 1);
    });
  }, []);

  const {
    interactionMode,
    setInteractionMode,
    isZoomMode,
    isPanMode,
  } = useInteractionMode();

  const innerWidth =
    PLOT_DIMENSIONS.width - PLOT_MARGIN.left - PLOT_MARGIN.right;
  const innerHeight =
    PLOT_DIMENSIONS.height - PLOT_MARGIN.top - PLOT_MARGIN.bottom;

  /* Read hot-path state from refs — always current, never stale. */
  const contentScale = scaleRef.current;
  const contentOffset = offsetRef.current;

  const { xScale, yScale, xExtent, yExtent } = buildScales(
    plotterPoints,
    innerWidth,
    innerHeight,
  );

  /* Domain-based visible region — shrinks as zoom increases, matching D3. */
  const visibleDomain = computeVisibleDomain(
    xExtent,
    yExtent,
    contentOffset,
    contentScale,
    innerWidth,
    innerHeight,
  );

  /* Dynamic scales recomputed from the visible domain — no matrix transform. */
  const dynamicXScale = buildLinearScale(
    visibleDomain.xMin,
    visibleDomain.xMax,
    0,
    innerWidth,
  );
  const dynamicYScale = buildLinearScale(
    visibleDomain.yMin,
    visibleDomain.yMax,
    innerHeight,
    0,
  );

  /* Cancel in-progress brush when switching to pan mode. */
  useEffect(() => {
    if (isPanMode) {
      brushStartRef.current = null;
      setBrushRect(null);
    }
  }, [isPanMode]);

  /* Base cell size computed once from the full dataset. */
  const adaptiveCellSizeBase = useMemo(
    () => computeAdaptiveCellSize(plotterPoints, xScale, yScale),
    [plotterPoints, xScale, yScale],
  );

  /* Zoom-scaled cell size — grows as domain shrinks. */
  const adaptiveCellSizeForRender = adaptiveCellSizeBase * contentScale;

  /* Viewport culling in screen-space. */
  const visiblePointsForRender = useMemo(() => {
    const xScreenFn = (val) => xScale(val) * contentScale + contentOffset.x;
    const yScreenFn = (val) => yScale(val) * contentScale + contentOffset.y;
    return filterVisiblePoints(
      plotterPoints,
      xScreenFn,
      yScreenFn,
      innerWidth,
      innerHeight,
      adaptiveCellSizeBase * contentScale,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [plotterPoints, xScale, yScale, contentScale, contentOffset.x, contentOffset.y, innerWidth, innerHeight, adaptiveCellSizeBase]);

  const effectiveImageCountForRender = computeEffectiveImageCount(
    adaptiveCellSizeForRender,
    imageCount,
  );

  /* ── Wheel zoom — mutates refs, schedules RAF flush ── */
  const handleWheel = useCallback(
    (event) => {
      event.evt.preventDefault();
      const stage = event.target.getStage();
      const pointerPosition = stage.getPointerPosition();

      if (!isPointerInsidePlotArea(pointerPosition, innerWidth, innerHeight))
        return;

      const nativeEvent = event.evt;
      const isPinchGesture = nativeEvent.ctrlKey;
      const scaleDelta = computeWheelScaleDelta(nativeEvent.deltaY, isPinchGesture);
      const currentScale = scaleRef.current;
      const currentOffset = offsetRef.current;
      const newScale = clampScale(currentScale * scaleDelta);

      logChartInteractionEvent({
        interactionType: scaleDelta > 1 ? "ZOOM_IN" : "ZOOM_OUT",
        visualizationLibrary: "Konva",
        interactionSource: "wheel",
      });

      const mouseRelX = pointerPosition.x - PLOT_MARGIN.left - currentOffset.x;
      const mouseRelY = pointerPosition.y - PLOT_MARGIN.top - currentOffset.y;

      const rawOffsetX = currentOffset.x - mouseRelX * (newScale / currentScale - 1);
      const rawOffsetY = currentOffset.y - mouseRelY * (newScale / currentScale - 1);
      const clampedOffset = clampContentOffset(rawOffsetX, rawOffsetY, newScale, innerWidth, innerHeight);

      scaleRef.current = newScale;
      offsetRef.current = clampedOffset;
      scheduleUpdate();
    },
    [innerWidth, innerHeight, scheduleUpdate],
  );

  /* ── Pan drag — mutates refs, schedules RAF flush ── */
  const handleStageMouseDown = useCallback(
    (event) => {
      const stage = event.target.getStage();
      const pointer = stage.getPointerPosition();
      if (!isPointerInsidePlotArea(pointer, innerWidth, innerHeight)) return;

      if (isPanMode) {
        logChartInteractionEvent({
          interactionType: "PAN",
          visualizationLibrary: "Konva",
          interactionSource: "drag",
        });
        setIsDragging(true);
        dragRef.current = {
          dragging: true,
          startX: pointer.x,
          startY: pointer.y,
          startOffset: { ...offsetRef.current },
        };
      } else if (isZoomMode) {
        const plotX = clampValue(pointer.x - PLOT_MARGIN.left, 0, innerWidth);
        const plotY = clampValue(pointer.y - PLOT_MARGIN.top, 0, innerHeight);
        brushStartRef.current = { x: plotX, y: plotY };
        setBrushRect({ x: plotX, y: plotY, width: 0, height: 0 });
      }
    },
    [isPanMode, isZoomMode, innerWidth, innerHeight],
  );

  const handleStageMouseMove = useCallback(
    (event) => {
      const stage = event.target.getStage();
      const pointer = stage.getPointerPosition();
      if (!pointer) return;

      if (dragRef.current.dragging) {
        const dx = pointer.x - dragRef.current.startX;
        const dy = pointer.y - dragRef.current.startY;
        const clamped = clampContentOffset(
          dragRef.current.startOffset.x + dx,
          dragRef.current.startOffset.y + dy,
          scaleRef.current,
          innerWidth,
          innerHeight,
        );
        offsetRef.current = clamped;
        scheduleUpdate();
        return;
      }

      if (brushStartRef.current) {
        const plotX = clampValue(pointer.x - PLOT_MARGIN.left, 0, innerWidth);
        const plotY = clampValue(pointer.y - PLOT_MARGIN.top, 0, innerHeight);
        const startPoint = brushStartRef.current;
        setBrushRect({
          x: Math.min(startPoint.x, plotX),
          y: Math.min(startPoint.y, plotY),
          width: Math.abs(plotX - startPoint.x),
          height: Math.abs(plotY - startPoint.y),
        });
      }
    },
    [innerWidth, innerHeight, scheduleUpdate],
  );

  const handleStageMouseUp = useCallback(
    (localBrushRect) => {
      if (dragRef.current.dragging) {
        setIsDragging(false);
        dragRef.current.dragging = false;
        return;
      }

      if (brushStartRef.current && localBrushRect) {
        const isTooSmall =
          localBrushRect.width < BRUSH_MIN_PIXELS ||
          localBrushRect.height < BRUSH_MIN_PIXELS;

        if (!isTooSmall) {
          logChartInteractionEvent({
            interactionType: "ZOOM_IN",
            visualizationLibrary: "Konva",
            interactionSource: "brush",
          });
          const zoomResult = convertBrushToZoom(
            localBrushRect,
            offsetRef.current,
            scaleRef.current,
            innerWidth,
            innerHeight,
          );
          scaleRef.current = zoomResult.scale;
          offsetRef.current = zoomResult.offset;
          scheduleUpdate();
        }
      }

      brushStartRef.current = null;
      setBrushRect(null);
    },
    [innerWidth, innerHeight, scheduleUpdate],
  );

  /* ── Button controls — mutate refs + scheduleUpdate ── */
  const handleZoomIn = useCallback(() => {
    logChartInteractionEvent({
      interactionType: "ZOOM_IN",
      visualizationLibrary: "Konva",
      interactionSource: "button",
    });
    const currentScale = scaleRef.current;
    const currentOffset = offsetRef.current;
    const centerX = innerWidth / 2;
    const centerY = innerHeight / 2;
    const newScale = clampScale(currentScale * ZOOM_STEP);
    const rawOffsetX = currentOffset.x - centerX * (newScale / currentScale - 1);
    const rawOffsetY = currentOffset.y - centerY * (newScale / currentScale - 1);
    scaleRef.current = newScale;
    offsetRef.current = clampContentOffset(rawOffsetX, rawOffsetY, newScale, innerWidth, innerHeight);
    scheduleUpdate();
  }, [innerWidth, innerHeight, scheduleUpdate]);

  const handleZoomOut = useCallback(() => {
    logChartInteractionEvent({
      interactionType: "ZOOM_OUT",
      visualizationLibrary: "Konva",
      interactionSource: "button",
    });
    const currentScale = scaleRef.current;
    const currentOffset = offsetRef.current;
    const centerX = innerWidth / 2;
    const centerY = innerHeight / 2;
    const newScale = clampScale(currentScale / ZOOM_STEP);
    const rawOffsetX = currentOffset.x - centerX * (newScale / currentScale - 1);
    const rawOffsetY = currentOffset.y - centerY * (newScale / currentScale - 1);
    scaleRef.current = newScale;
    offsetRef.current = clampContentOffset(rawOffsetX, rawOffsetY, newScale, innerWidth, innerHeight);
    scheduleUpdate();
  }, [innerWidth, innerHeight, scheduleUpdate]);

  const handleReset = useCallback(() => {
    logChartInteractionEvent({
      interactionType: "RESET",
      visualizationLibrary: "Konva",
      interactionSource: "button",
    });
    scaleRef.current = 1;
    offsetRef.current = { x: 0, y: 0 };
    scheduleUpdate();
  }, [scheduleUpdate]);

  const handleDoubleClick = useCallback(() => {
    logChartInteractionEvent({
      interactionType: "RESET",
      visualizationLibrary: "Konva",
      interactionSource: "double_click",
    });
    scaleRef.current = 1;
    offsetRef.current = { x: 0, y: 0 };
    scheduleUpdate();
  }, [scheduleUpdate]);

  const stageCursor = isPanMode
    ? (isDragging ? "grabbing" : "grab")
    : "crosshair";

  return (
    <div style={{ position: "relative" }}>
      <PlotterControls
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
        zoomLevel={contentScale}
        interactionMode={interactionMode}
        onModeChange={setInteractionMode}
      />
      <Stage
        ref={stageRef}
        width={PLOT_DIMENSIONS.width}
        height={PLOT_DIMENSIONS.height}
        onWheel={handleWheel}
        onDblClick={handleDoubleClick}
        onDblTap={handleDoubleClick}
        onMouseDown={handleStageMouseDown}
        onMouseMove={handleStageMouseMove}
        onMouseUp={() => handleStageMouseUp(brushRect)}
        onMouseLeave={() => handleStageMouseUp(brushRect)}
        style={{ cursor: stageCursor }}
      >
        {/* Static axis layer — grid and labels derived from current visible domain */}
        <Layer listening={false}>
          <PlotBackground innerWidth={innerWidth} innerHeight={innerHeight} />
          <AxisGrid
            visibleDomain={visibleDomain}
            innerWidth={innerWidth}
            innerHeight={innerHeight}
          />
          <AxisLabels
            visibleDomain={visibleDomain}
            innerWidth={innerWidth}
            innerHeight={innerHeight}
          />
          <AxisBorder innerWidth={innerWidth} innerHeight={innerHeight} />
        </Layer>

        {/* Clipped content layer — images positioned from domain-derived scales */}
        <Layer>
          <ClippedContentGroup innerWidth={innerWidth} innerHeight={innerHeight}>
            {visiblePointsForRender.map((point) => (
              <ImagePointGroup
                key={point.id}
                point={point}
                xScale={dynamicXScale}
                yScale={dynamicYScale}
                imageCount={effectiveImageCountForRender}
                cellSize={adaptiveCellSizeForRender}
                onHover={setHoveredPoint}
                onCursorMove={setCursorPosition}
              />
            ))}
          </ClippedContentGroup>
        </Layer>

        {/* Brush overlay layer — only rendered in zoom mode */}
        {isZoomMode && (
          <Layer listening={false}>
            <BrushSelectionOverlay brushRect={brushRect} />
          </Layer>
        )}
      </Stage>

      {hoveredPoint && (
        <PointTooltip
          hoveredPoint={hoveredPoint}
          cursorPosition={cursorPosition}
        />
      )}
    </div>
  );
}

function BrushSelectionOverlay({
  brushRect,
}) {
  return (
    <Group listening={false}>
      {/* Semi-transparent selection rectangle */}
      {brushRect && brushRect.width > 0 && brushRect.height > 0 && (
        <Rect
          x={PLOT_MARGIN.left + brushRect.x}
          y={PLOT_MARGIN.top + brushRect.y}
          width={brushRect.width}
          height={brushRect.height}
          fill={BRUSH_FILL}
          stroke={BRUSH_STROKE}
          strokeWidth={BRUSH_STROKE_WIDTH}
          listening={false}
        />
      )}
    </Group>
  );
}

function ClippedContentGroup({
  innerWidth,
  innerHeight,
  children,
}) {
  const plotLeft = PLOT_MARGIN.left;
  const plotTop = PLOT_MARGIN.top;

  const clipFunction = (ctx) => {
    ctx.rect(plotLeft, plotTop, innerWidth, innerHeight);
  };

  return (
    <Group clipFunc={clipFunction}>
      <Group
        x={plotLeft}
        y={plotTop}
        scaleX={1}
        scaleY={1}
      >
        {children}
      </Group>
    </Group>
  );
}

function PointTooltip({ hoveredPoint, cursorPosition }) {
  return (
    <div
      className="plotter-tooltip"
      style={{
        display: "block",
        position: "absolute",
        left: cursorPosition.x + 15,
        top: cursorPosition.y - 10,
        pointerEvents: "none",
      }}
    >
      <div className="tooltip-label">{hoveredPoint.label}</div>
      <div className="tooltip-meta">
        <span>Interval: {hoveredPoint.meta.interval}s</span>
        <span>Angle: {hoveredPoint.meta.angle}°</span>
        <span>Quality: {hoveredPoint.meta.quality}</span>
      </div>
    </div>
  );
}

function PlotBackground({ innerWidth, innerHeight }) {
  return (
    <Rect
      x={PLOT_MARGIN.left}
      y={PLOT_MARGIN.top}
      width={innerWidth}
      height={innerHeight}
      fill="#16213e"
    />
  );
}

function AxisBorder({ innerWidth, innerHeight }) {
  return (
    <Rect
      x={PLOT_MARGIN.left}
      y={PLOT_MARGIN.top}
      width={innerWidth}
      height={innerHeight}
      stroke={AXIS_LINE_COLOR}
      strokeWidth={1}
      listening={false}
    />
  );
}

function AxisGrid({ visibleDomain, innerWidth, innerHeight }) {
  const xTicks = buildTicks(
    visibleDomain.xMin,
    visibleDomain.xMax,
    AXIS_TICK_COUNT,
  );
  const yTicks = buildTicks(
    visibleDomain.yMin,
    visibleDomain.yMax,
    AXIS_TICK_COUNT,
  );

  const xScreenScale = buildLinearScale(
    visibleDomain.xMin,
    visibleDomain.xMax,
    0,
    innerWidth,
  );
  const yScreenScale = buildLinearScale(
    visibleDomain.yMin,
    visibleDomain.yMax,
    innerHeight,
    0,
  );

  const gridLines = [];

  xTicks.forEach((value, index) => {
    const xPos = PLOT_MARGIN.left + xScreenScale(value);
    if (xPos < PLOT_MARGIN.left || xPos > PLOT_MARGIN.left + innerWidth) return;
    gridLines.push(
      <Line
        key={`xgrid-${index}`}
        points={[xPos, PLOT_MARGIN.top, xPos, PLOT_MARGIN.top + innerHeight]}
        stroke={GRID_COLOR}
        strokeWidth={1}
        dash={[4, 4]}
        listening={false}
      />,
    );
  });

  yTicks.forEach((value, index) => {
    const yPos = PLOT_MARGIN.top + yScreenScale(value);
    if (yPos < PLOT_MARGIN.top || yPos > PLOT_MARGIN.top + innerHeight) return;
    gridLines.push(
      <Line
        key={`ygrid-${index}`}
        points={[PLOT_MARGIN.left, yPos, PLOT_MARGIN.left + innerWidth, yPos]}
        stroke={GRID_COLOR}
        strokeWidth={1}
        dash={[4, 4]}
        listening={false}
      />,
    );
  });

  return <>{gridLines}</>;
}

function AxisLabels({ visibleDomain, innerWidth, innerHeight }) {
  const xTicks = buildTicks(
    visibleDomain.xMin,
    visibleDomain.xMax,
    AXIS_TICK_COUNT,
  );
  const yTicks = buildTicks(
    visibleDomain.yMin,
    visibleDomain.yMax,
    AXIS_TICK_COUNT,
  );

  const xScreenScale = buildLinearScale(
    visibleDomain.xMin,
    visibleDomain.xMax,
    0,
    innerWidth,
  );
  const yScreenScale = buildLinearScale(
    visibleDomain.yMin,
    visibleDomain.yMax,
    innerHeight,
    0,
  );

  const tickLabels = [];

  xTicks.forEach((value, index) => {
    const xPos = PLOT_MARGIN.left + xScreenScale(value);
    if (xPos < PLOT_MARGIN.left - 5 || xPos > PLOT_MARGIN.left + innerWidth + 5)
      return;
    tickLabels.push(
      <Text
        key={`xlabel-${index}`}
        text={formatTickLabel(value)}
        x={xPos - 14}
        y={PLOT_MARGIN.top + innerHeight + 6}
        fill={TICK_LABEL_COLOR}
        fontSize={TICK_LABEL_FONT_SIZE}
        listening={false}
      />,
    );
  });

  yTicks.forEach((value, index) => {
    const yPos = PLOT_MARGIN.top + yScreenScale(value);
    if (yPos < PLOT_MARGIN.top - 5 || yPos > PLOT_MARGIN.top + innerHeight + 5)
      return;
    tickLabels.push(
      <Text
        key={`ylabel-${index}`}
        text={formatTickLabel(value)}
        x={PLOT_MARGIN.left - 36}
        y={yPos - 6}
        fill={TICK_LABEL_COLOR}
        fontSize={TICK_LABEL_FONT_SIZE}
        width={32}
        align="right"
        listening={false}
      />,
    );
  });

  return <>{tickLabels}</>;
}

function ImagePointGroup({
  point,
  xScale,
  yScale,
  imageCount,
  cellSize,
  onHover,
  onCursorMove,
}) {
  const centerX = xScale(point.x);
  const centerY = yScale(point.y);
  const resolvedCellSize = cellSize ?? CELL_SIZE;
  const positions = computeImagePositions(
    centerX,
    centerY,
    resolvedCellSize,
    resolvedCellSize,
    imageCount,
  );

  return (
    <>
      {positions.map((position, index) => (
        <KonvaCachedImage
          key={`${point.id}-${index}`}
          imageUrl={point.image}
          x={position.x}
          y={position.y}
          width={position.width}
          height={position.height}
          point={point}
          onHover={onHover}
          onCursorMove={onCursorMove}
        />
      ))}
    </>
  );
}

function KonvaCachedImage({
  imageUrl,
  x,
  y,
  width,
  height,
  point,
  onHover,
  onCursorMove,
}) {
  const loadedImage = getCachedImageObject(imageUrl);

  const handleMouseEnter = useCallback(
    (event) => {
      const stage = event.target.getStage();
      const pointer = stage.getPointerPosition();
      onCursorMove({ x: pointer.x, y: pointer.y });
      onHover(point);
    },
    [point, onHover, onCursorMove],
  );

  const handleMouseLeave = useCallback(() => onHover(null), [onHover]);

  if (!loadedImage) return null;

  return (
    <KonvaImage
      image={loadedImage}
      x={x}
      y={y}
      width={width}
      height={height}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
}

/* ─── Brush → Zoom conversion ─────────────────────────────────────────── */

function convertBrushToZoom(
  brushPixelRect,
  currentOffset,
  currentScale,
  plotInnerWidth,
  plotInnerHeight,
) {
  const contentX0 =
    (brushPixelRect.x - currentOffset.x) / currentScale;
  const contentY0 =
    (brushPixelRect.y - currentOffset.y) / currentScale;
  const contentBrushWidth = brushPixelRect.width / currentScale;
  const contentBrushHeight = brushPixelRect.height / currentScale;

  const fitScaleX = plotInnerWidth / contentBrushWidth;
  const fitScaleY = plotInnerHeight / contentBrushHeight;
  const newScale = clampScale(Math.min(fitScaleX, fitScaleY));

  const rawOffsetX = -contentX0 * newScale;
  const rawOffsetY = -contentY0 * newScale;

  const clampedOffset = clampContentOffset(
    rawOffsetX,
    rawOffsetY,
    newScale,
    plotInnerWidth,
    plotInnerHeight,
  );

  return { scale: newScale, offset: clampedOffset };
}

function clampValue(value, min, max) {
  return Math.max(min, Math.min(value, max));
}

/* ─── Pure utility functions ──────────────────────────────────────────── */

function isPointerInsidePlotArea(
  pointerPosition,
  plotInnerWidth,
  plotInnerHeight,
) {
  return (
    pointerPosition.x > PLOT_MARGIN.left &&
    pointerPosition.x < PLOT_MARGIN.left + plotInnerWidth &&
    pointerPosition.y > PLOT_MARGIN.top &&
    pointerPosition.y < PLOT_MARGIN.top + plotInnerHeight
  );
}

function clampScale(rawScale) {
  return Math.max(ZOOM_MIN, Math.min(rawScale, ZOOM_MAX));
}

function computeWheelScaleDelta(deltaY, isPinchGesture) {
  if (isPinchGesture) {
    return Math.exp(-deltaY * PINCH_ZOOM_SENSITIVITY);
  }
  return deltaY > 0 ? 1 / ZOOM_STEP : ZOOM_STEP;
}

function clampContentOffset(
  rawX,
  rawY,
  scale,
  plotInnerWidth,
  plotInnerHeight,
) {
  const scaledWidth = plotInnerWidth * scale;
  const scaledHeight = plotInnerHeight * scale;

  let clampedX;
  let clampedY;

  if (scaledWidth <= plotInnerWidth) {
    clampedX = (plotInnerWidth - scaledWidth) / 2;
  } else {
    const minX = plotInnerWidth - scaledWidth;
    const maxX = 0;
    clampedX = Math.max(minX, Math.min(rawX, maxX));
  }

  if (scaledHeight <= plotInnerHeight) {
    clampedY = (plotInnerHeight - scaledHeight) / 2;
  } else {
    const minY = plotInnerHeight - scaledHeight;
    const maxY = 0;
    clampedY = Math.max(minY, Math.min(rawY, maxY));
  }

  return { x: clampedX, y: clampedY };
}

function buildScales(plotterPoints, plotInnerWidth, plotInnerHeight) {
  const xValues = plotterPoints.map((p) => p.x);
  const yValues = plotterPoints.map((p) => p.y);

  const xMin = Math.min(...xValues);
  const xMax = Math.max(...xValues);
  const yMin = Math.min(...yValues);
  const yMax = Math.max(...yValues);

  const xPadding =
    (xMax - xMin) * EXTENT_PADDING_RATIO || EXTENT_FALLBACK_PADDING;
  const yPadding =
    (yMax - yMin) * EXTENT_PADDING_RATIO || EXTENT_FALLBACK_PADDING;

  const xExtent = [xMin - xPadding, xMax + xPadding];
  const yExtent = [yMin - yPadding, yMax + yPadding];

  const xScale = buildLinearScale(xExtent[0], xExtent[1], 0, plotInnerWidth);
  const yScale = buildLinearScale(yExtent[0], yExtent[1], plotInnerHeight, 0);

  return { xScale, yScale, xExtent, yExtent };
}

function computeVisibleDomain(
  xExtent,
  yExtent,
  contentOffset,
  scale,
  plotInnerWidth,
  plotInnerHeight,
) {
  const domainWidth = xExtent[1] - xExtent[0];
  const domainHeight = yExtent[1] - yExtent[0];

  const xMin =
    xExtent[0] - (contentOffset.x / scale / plotInnerWidth) * domainWidth;
  const xMax = xMin + domainWidth / scale;

  const yMax =
    yExtent[1] + (contentOffset.y / scale / plotInnerHeight) * domainHeight;
  const yMin = yMax - domainHeight / scale;

  return { xMin, xMax, yMin, yMax };
}

function buildLinearScale(domainMin, domainMax, rangeMin, rangeMax) {
  return (value) => {
    const ratio = (value - domainMin) / (domainMax - domainMin);
    return rangeMin + ratio * (rangeMax - rangeMin);
  };
}

function buildTicks(min, max, count) {
  const rawStep = (max - min) / count;
  const magnitude = Math.pow(10, Math.floor(Math.log10(rawStep)));
  const niceSteps = [1, 2, 2.5, 5, 10];
  const step =
    niceSteps.map((s) => s * magnitude).find((s) => s >= rawStep) ?? rawStep;

  const start = Math.ceil(min / step) * step;
  const ticks = [];

  for (let tick = start; tick <= max + step * 0.001; tick += step) {
    ticks.push(parseFloat(tick.toPrecision(10)));
  }

  return ticks;
}

function formatTickLabel(value) {
  if (Math.abs(value) >= 1000) return value.toExponential(1);
  const formattedString = value.toPrecision(4);
  return parseFloat(formattedString).toString();
}

export default KonvaPlotter;

```

---

# src\components\Navbar.jsx

```jsx
import { LIBRARIES, DISABLED_LIBRARIES } from "../lib/constants";

function Navbar({ activeTab, setActiveTab }) {
  return (
    <div className="tab-container">
      {LIBRARIES.map((libraryName) => {
        const isDisabled = DISABLED_LIBRARIES.includes(libraryName);

        return (
          <button
            key={libraryName}
            className={`tab-button ${activeTab === libraryName ? "active" : ""} ${isDisabled ? "disabled" : ""}`}
            onClick={() => !isDisabled && setActiveTab(libraryName)}
            disabled={isDisabled}
            title={isDisabled ? `${libraryName} is disabled for this test` : ""}
          >
            {libraryName}
          </button>
        );
      })}
    </div>
  );
}

export default Navbar;

```

---

# src\components\PixiPlotter.jsx

```jsx
import { useRef, useEffect, useState, useCallback } from "react";

import {
  Application as PixiApp,
  Container,
  Sprite,
  Graphics,
  Assets,
  Text as PixiText,
} from "pixi.js";

import * as d3 from "d3";

import { usePlotterData } from "../lib/plotterData";
import { computeImagePositions } from "../lib/gridLayout";
import { CELL_SIZE, PLOT_DIMENSIONS, PLOT_MARGIN } from "../lib/constants";
import {
  computeAdaptiveCellSize,
  filterVisiblePoints,
  computeEffectiveImageCount,
} from "../lib/densityLayout";

import PlotterControls from "./PlotterControls";
import { logChartInteractionEvent } from "../lib/chartInteractionLogger";
import { useInteractionMode } from "../lib/interactionMode";

const GRID_COLOR = 0x333333;
const GRID_ALPHA = 0.45;
const AXIS_BORDER_COLOR = 0x555555;
const TICK_COLOR = "#999999";

const ZOOM_MIN = 0.3;
const ZOOM_MAX = 100000;
const ZOOM_STEP = 1.5;

/*
 * CLAMP PAN
 */
function clampPan(xOffset, yOffset, scaleFactor, width, height) {
  const scaledWidth = width * scaleFactor;
  const scaledHeight = height * scaleFactor;

  let minOffsetLimitX = width - scaledWidth;
  let minOffsetLimitY = height - scaledHeight;

  if (scaledWidth < width) {
    minOffsetLimitX = (width - scaledWidth) / 2;
  }

  if (scaledHeight < height) {
    minOffsetLimitY = (height - scaledHeight) / 2;
  }

  return {
    x: Math.min(0, Math.max(minOffsetLimitX, xOffset)),
    y: Math.min(0, Math.max(minOffsetLimitY, yOffset)),
  };
}

/*
 * COMPUTE VIEWPORT SCALES
 */
function computeViewportScales(baseScaleX, baseScaleY, scaleFactor, xOffset, yOffset, width, height) {
  const leftPixel = -xOffset / scaleFactor;
  const rightPixel = (width - xOffset) / scaleFactor;

  const topPixel = -yOffset / scaleFactor;
  const bottomPixel = (height - yOffset) / scaleFactor;

  const visibleXMin = baseScaleX.invert(leftPixel);
  const visibleXMax = baseScaleX.invert(rightPixel);

  const visibleYMax = baseScaleY.invert(topPixel);
  const visibleYMin = baseScaleY.invert(bottomPixel);

  const dynamicXScale = d3
    .scaleLinear()
    .domain([visibleXMin, visibleXMax])
    .range([0, width]);

  const dynamicYScale = d3
    .scaleLinear()
    .domain([visibleYMin, visibleYMax])
    .range([height, 0]);

  return {
    dynamicXScale,
    dynamicYScale,
  };
}

/*
 * INITIALIZE PIXI APP
 */
async function initializePixiApp(containerElement, innerWidth, innerHeight) {
  const app = new PixiApp();

  await app.init({
    width: PLOT_DIMENSIONS.width,
    height: PLOT_DIMENSIONS.height,
    background: 0x16213e,
    antialias: true,
  });

  containerElement.appendChild(app.canvas);

  const axesLayer = new Container();
  axesLayer.x = PLOT_MARGIN.left;
  axesLayer.y = PLOT_MARGIN.top;
  app.stage.addChild(axesLayer);

  const contentLayer = new Container();
  contentLayer.x = PLOT_MARGIN.left;
  contentLayer.y = PLOT_MARGIN.top;
  app.stage.addChild(contentLayer);

  const mask = new Graphics();
  mask.rect(PLOT_MARGIN.left, PLOT_MARGIN.top, innerWidth, innerHeight);
  mask.fill(0xffffff);
  app.stage.addChild(mask);
  contentLayer.mask = mask;

  const brushGraphics = new Graphics();
  app.stage.addChild(brushGraphics);

  return {
    app,
    axesLayer,
    contentLayer,
    mask,
    brushGraphics,
  };
}

/*
 * APPLY BRUSH ZOOM TO TRANSFORM
 */
function applyBrushZoom({ startX, startY, width, height }, transformRef, innerWidth, innerHeight) {
  const currentScale = transformRef.current.scale;
  const currentX = transformRef.current.x;
  const currentY = transformRef.current.y;

  const contentX0 = (startX - currentX) / currentScale;
  const contentY0 = (startY - currentY) / currentScale;
  const contentWidth = width / currentScale;
  const contentHeight = height / currentScale;

  const scaleFactorX = innerWidth / contentWidth;
  const scaleFactorY = innerHeight / contentHeight;
  const nextScale = Math.max(ZOOM_MIN, Math.min(Math.min(scaleFactorX, scaleFactorY), ZOOM_MAX));

  const offsetCoordinateX = -contentX0 * nextScale;
  const offsetCoordinateY = -contentY0 * nextScale;

  const clamped = clampPan(offsetCoordinateX, offsetCoordinateY, nextScale, innerWidth, innerHeight);
  return {
    scale: nextScale,
    x: clamped.x,
    y: clamped.y,
  };
}

/*
 * DRAW BRUSH OVERLAY
 */
function drawBrushOverlay(graphics, startX, startY, width, height) {
  if (!graphics) return;
  graphics.clear();
  if (width > 0 && height > 0) {
    graphics.rect(
      PLOT_MARGIN.left + startX,
      PLOT_MARGIN.top + startY,
      width,
      height
    );
    graphics.fill({ color: 0x4493ff, alpha: 0.15 });
    graphics.stroke({ width: 1.5, color: 0x4493ff });
  }
}

function PixiPlotter({ imageCount, xGap, yGap, syntheticPoints }) {
  const { plotterPoints: fetchedPoints, isLoading, loadError } = usePlotterData();
  const plotterPoints = syntheticPoints || fetchedPoints;

  if (!syntheticPoints && isLoading) {
    return <div>Loading...</div>;
  }

  if (!syntheticPoints && loadError) {
    return <div>Error: {loadError}</div>;
  }

  return (
    <PixiCanvas
      plotterPoints={plotterPoints}
      imageCount={imageCount}
      xGap={xGap}
      yGap={yGap}
    />
  );
}

function PixiCanvas({ plotterPoints, imageCount, xGap, yGap }) {
  const containerRef = useRef(null);
  const pixiAppRef = useRef(null);
  const axesLayerRef = useRef(null);
  const contentLayerRef = useRef(null);
  const maskRef = useRef(null);
  const tooltipRef = useRef(null);
  const brushGraphicsRef = useRef(null);
  const brushStartRef = useRef(null);

  const baseScalesRef = useRef({
    xScale: null,
    yScale: null,
  });

  const transformRef = useRef({
    scale: 1,
    x: 0,
    y: 0,
  });

  const dragRef = useRef({
    dragging: false,
    startX: 0,
    startY: 0,
  });

  const [zoomLevel, setZoomLevel] = useState(1);
  const [isDragging, setIsDragging] = useState(false);

  const {
    interactionMode,
    setInteractionMode,
    isPanMode,
  } = useInteractionMode();

  const innerWidth = PLOT_DIMENSIONS.width - PLOT_MARGIN.left - PLOT_MARGIN.right;
  const innerHeight = PLOT_DIMENSIONS.height - PLOT_MARGIN.top - PLOT_MARGIN.bottom;

  /*
   * GET VIEWPORT SCALES
   */
  const getViewportScales = useCallback(() => {
    const baseScaleX = baseScalesRef.current.xScale;
    const baseScaleY = baseScalesRef.current.yScale;

    if (!baseScaleX || !baseScaleY) {
      return null;
    }

    const { scale, x, y } = transformRef.current;

    return computeViewportScales(
      baseScaleX,
      baseScaleY,
      scale,
      x,
      y,
      innerWidth,
      innerHeight
    );
  }, [innerWidth, innerHeight]);

  /*
   * RENDER AXES
   */
  const renderAxes = useCallback(() => {
    if (!axesLayerRef.current) return;

    const viewportScales = getViewportScales();
    if (!viewportScales) return;

    const axesLayer = axesLayerRef.current;
    axesLayer.removeChildren();

    drawGrid(
      axesLayer,
      viewportScales.dynamicXScale,
      viewportScales.dynamicYScale,
      innerWidth,
      innerHeight
    );

    drawAxesLabels(
      axesLayer,
      viewportScales.dynamicXScale,
      viewportScales.dynamicYScale,
      innerWidth,
      innerHeight
    );
  }, [getViewportScales, innerWidth, innerHeight]);

  /*
   * APPLY TRANSFORM — redraws points from current viewport scales (deep zoom).
   * Content layer is always identity; no matrix upscaling of sprites.
   */
  const applyTransform = useCallback(() => {
    if (!contentLayerRef.current) return;

    const viewportScales = getViewportScales();
    if (!viewportScales) return;

    const { dynamicXScale, dynamicYScale } = viewportScales;
    const { scale } = transformRef.current;

    const contentLayer = contentLayerRef.current;
    contentLayer.removeChildren();
    contentLayer.scale.set(1);
    contentLayer.x = PLOT_MARGIN.left;
    contentLayer.y = PLOT_MARGIN.top;

    const baseScaleX = baseScalesRef.current.xScale;
    const baseScaleY = baseScalesRef.current.yScale;
    if (!baseScaleX || !baseScaleY) return;

    const scaledPoints = plotterPoints.map((point) => ({
      ...point,
      scaledX: point.x * (xGap / 10),
      scaledY: point.y * (yGap / 10),
    }));

    /* Same pattern as Recharts: base cell size × current zoom scale. */
    const adaptiveCellSizeBase = computeAdaptiveCellSize(
      scaledPoints,
      (val) => baseScaleX(val),
      (val) => baseScaleY(val),
    );
    const currentCellSize = adaptiveCellSizeBase * scale;

    /* Screen-space culling. */
    const xScreenFn = (val) => baseScaleX(val) * scale + transformRef.current.x;
    const yScreenFn = (val) => baseScaleY(val) * scale + transformRef.current.y;
    const visiblePoints = filterVisiblePoints(
      scaledPoints,
      xScreenFn,
      yScreenFn,
      innerWidth,
      innerHeight,
      currentCellSize,
    );

    const effectiveImageCount = computeEffectiveImageCount(currentCellSize, imageCount);

    drawPoints(
      contentLayer,
      visiblePoints,
      dynamicXScale,
      dynamicYScale,
      effectiveImageCount,
      tooltipRef,
      currentCellSize,
    );

    renderAxes();
  }, [getViewportScales, renderAxes, plotterPoints, xGap, yGap, innerWidth, innerHeight, imageCount]);

  /*
   * MAIN RENDER — loads assets then delegates to applyTransform for drawing.
   */
  const renderScene = useCallback(async () => {
    if (!axesLayerRef.current || !contentLayerRef.current) return;

    const scaledPoints = plotterPoints.map((point) => ({
      ...point,
      scaledX: point.x * (xGap / 10),
      scaledY: point.y * (yGap / 10),
    }));

    const xDomainExtent = d3.extent(scaledPoints, (point) => point.scaledX);
    const yDomainExtent = d3.extent(scaledPoints, (point) => point.scaledY);

    const baseScaleX = d3.scaleLinear()
      .domain([xDomainExtent[0] - 5, xDomainExtent[1] + 5])
      .range([0, innerWidth]);

    const baseScaleY = d3.scaleLinear()
      .domain([yDomainExtent[0] - 5, yDomainExtent[1] + 5])
      .range([innerHeight, 0]);

    baseScalesRef.current = { xScale: baseScaleX, yScale: baseScaleY };
    renderAxes();

    const uniqueImageUrls = [...new Set(plotterPoints.map((point) => point.image))];
    await Assets.load(uniqueImageUrls);

    applyTransform();
  }, [plotterPoints, xGap, yGap, innerWidth, innerHeight, renderAxes, applyTransform]);



  /*
   * ZOOM
   */
  const zoom = useCallback((direction, interactionSource = "button") => {
    logChartInteractionEvent({
      interactionType: direction === "in" ? "ZOOM_IN" : "ZOOM_OUT",
      visualizationLibrary: "Pixi",
      interactionSource: interactionSource,
    });
    const currentScale = transformRef.current.scale;

    const nextScale =
      direction === "in"
        ? Math.min(currentScale * ZOOM_STEP, ZOOM_MAX)
        : Math.max(currentScale / ZOOM_STEP, ZOOM_MIN);

    const plotCenterX = innerWidth / 2;
    const plotCenterY = innerHeight / 2;

    const nextTransformOffsetX =
      transformRef.current.x - plotCenterX * (nextScale / currentScale - 1);

    const nextTransformOffsetY =
      transformRef.current.y - plotCenterY * (nextScale / currentScale - 1);

    const clampedTransformOffset = clampPan(
      nextTransformOffsetX,
      nextTransformOffsetY,
      nextScale,
      innerWidth,
      innerHeight
    );

    transformRef.current = {
      scale: nextScale,
      x: clampedTransformOffset.x,
      y: clampedTransformOffset.y,
    };

    setZoomLevel(nextScale);
    applyTransform();
  }, [innerWidth, innerHeight, applyTransform]);

  /*
   * RESET
   */
  const reset = useCallback((interactionSource) => {
    const computedSource =
      interactionSource && typeof interactionSource === "string"
        ? interactionSource
        : "button";

    logChartInteractionEvent({
      interactionType: "RESET",
      visualizationLibrary: "Pixi",
      interactionSource: computedSource,
    });

    transformRef.current = {
      scale: 1,
      x: 0,
      y: 0,
    };

    setZoomLevel(1);
    applyTransform();
  }, [applyTransform]);

  /*
   * CANVAS INTERACTIONS
   */
  const onCanvasMouseDown = useCallback((event) => {
    if (isPanMode) {
      logChartInteractionEvent({
        interactionType: "PAN",
        visualizationLibrary: "Pixi",
        interactionSource: "drag",
      });
      setIsDragging(true);
      dragRef.current.dragging = true;
      dragRef.current.startX = event.clientX - transformRef.current.x;
      dragRef.current.startY = event.clientY - transformRef.current.y;
    } else {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const localX = event.clientX - rect.left - PLOT_MARGIN.left;
      const localY = event.clientY - rect.top - PLOT_MARGIN.top;

      if (localX >= 0 && localX <= innerWidth && localY >= 0 && localY <= innerHeight) {
        brushStartRef.current = { x: localX, y: localY };
      }
    }
  }, [isPanMode, innerWidth, innerHeight]);

  const onCanvasMouseMove = useCallback((event) => {
    if (dragRef.current.dragging) {
      const nextX = event.clientX - dragRef.current.startX;
      const nextY = event.clientY - dragRef.current.startY;
      const clamped = clampPan(nextX, nextY, transformRef.current.scale, innerWidth, innerHeight);

      transformRef.current.x = clamped.x;
      transformRef.current.y = clamped.y;

      applyTransform();
      return;
    }

    if (brushStartRef.current) {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const localX = Math.max(0, Math.min(innerWidth, event.clientX - rect.left - PLOT_MARGIN.left));
      const localY = Math.max(0, Math.min(innerHeight, event.clientY - rect.top - PLOT_MARGIN.top));

      const brushStartX = Math.min(brushStartRef.current.x, localX);
      const brushStartY = Math.min(brushStartRef.current.y, localY);
      const brushWidth = Math.abs(localX - brushStartRef.current.x);
      const brushHeight = Math.abs(localY - brushStartRef.current.y);

      drawBrushOverlay(brushGraphicsRef.current, brushStartX, brushStartY, brushWidth, brushHeight);
    }
  }, [innerWidth, innerHeight, applyTransform]);

  const onCanvasMouseUp = useCallback((event) => {
    setIsDragging(false);
    if (dragRef.current.dragging) {
      dragRef.current.dragging = false;
      return;
    }

    if (brushStartRef.current) {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const localX = Math.max(0, Math.min(innerWidth, event.clientX - rect.left - PLOT_MARGIN.left));
      const localY = Math.max(0, Math.min(innerHeight, event.clientY - rect.top - PLOT_MARGIN.top));

      const brushStartX = Math.min(brushStartRef.current.x, localX);
      const brushStartY = Math.min(brushStartRef.current.y, localY);
      const brushWidth = Math.abs(localX - brushStartRef.current.x);
      const brushHeight = Math.abs(localY - brushStartRef.current.y);

      if (brushWidth >= 5 && brushHeight >= 5) {
        logChartInteractionEvent({
          interactionType: "ZOOM_IN",
          visualizationLibrary: "Pixi",
          interactionSource: "brush",
        });

        const nextTransform = applyBrushZoom(
          { startX: brushStartX, startY: brushStartY, width: brushWidth, height: brushHeight },
          transformRef,
          innerWidth,
          innerHeight
        );

        transformRef.current = {
          scale: nextTransform.scale,
          x: nextTransform.x,
          y: nextTransform.y,
        };

        setZoomLevel(nextTransform.scale);
        applyTransform();
      }

      if (brushGraphicsRef.current) {
        brushGraphicsRef.current.clear();
      }
      brushStartRef.current = null;
    }
  }, [innerWidth, innerHeight, applyTransform]);

  /* Cancel in-progress brush when switching to pan mode */
  useEffect(() => {
    if (isPanMode) {
      brushStartRef.current = null;
      if (brushGraphicsRef.current) {
        brushGraphicsRef.current.clear();
      }
    }
  }, [isPanMode]);

  /*
   * INITIALIZE PIXI
   */
  useEffect(() => {
    let isComponentUnmounted = false;
    let pixiApplicationInstance = null;

    if (!containerRef.current) return;

    initializePixiApp(containerRef.current, innerWidth, innerHeight)
      .then(({ app, axesLayer, contentLayer, mask, brushGraphics }) => {
        if (isComponentUnmounted) {
          try {
            app.destroy({ removeView: true });
          } catch (err) {
            console.error("Error destroying Pixi App during init cancellation:", err);
          }
          return;
        }

        pixiAppRef.current = app;
        axesLayerRef.current = axesLayer;
        contentLayerRef.current = contentLayer;
        maskRef.current = mask;
        brushGraphicsRef.current = brushGraphics;
        pixiApplicationInstance = app;

        renderScene();
      })
      .catch((err) => {
        console.error("Failed to initialize Pixi:", err);
      });

    return () => {
      isComponentUnmounted = true;
      if (pixiApplicationInstance) {
        try {
          pixiApplicationInstance.destroy({ removeView: true });
        } catch (err) {
          console.error("Error destroying Pixi App:", err);
        }
      }
    };
  }, [innerWidth, innerHeight, renderScene]);

  /*
   * RERENDER DATA CHANGES
   */
  useEffect(() => {
    if (!plotterPoints.length) return;
    renderScene();
  }, [plotterPoints, imageCount, xGap, yGap, renderScene]);

  /*
   * ATTACH NON-PASSIVE WHEEL LISTENER
   */
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onCanvasWheelScroll = (event) => {
      event.preventDefault();
      if (event.deltaY > 0) {
        zoom("out", "wheel");
      } else {
        zoom("in", "wheel");
      }
    };

    container.addEventListener("wheel", onCanvasWheelScroll, { passive: false });

    return () => {
      container.removeEventListener("wheel", onCanvasWheelScroll);
    };
  }, [zoom]);

  return (
    <div style={{ position: "relative" }}>
      <PlotterControls
        zoomLevel={zoomLevel}
        onZoomIn={() => zoom("in")}
        onZoomOut={() => zoom("out")}
        onReset={() => reset("button")}
        interactionMode={interactionMode}
        onModeChange={setInteractionMode}
      />

      <div
        ref={containerRef}
        onMouseDown={onCanvasMouseDown}
        onMouseMove={onCanvasMouseMove}
        onMouseUp={onCanvasMouseUp}
        onMouseLeave={onCanvasMouseUp}
        onDoubleClick={() => reset("double_click")}
        style={{
          cursor: isPanMode
            ? (isDragging ? "grabbing" : "grab")
            : "crosshair",
        }}
      />

      <div
        ref={tooltipRef}
        className="plotter-tooltip"
        style={{
          display: "none",
          position: "absolute",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

/*
 * GRID
 */
function drawGrid(layer, scaleX, scaleY, width, height) {
  const grid = new Graphics();

  const xTicks = buildIntegerTicks(scaleX.domain());
  const yTicks = buildIntegerTicks(scaleY.domain());

  xTicks.forEach((tick) => {
    const x = scaleX(tick);
    grid.moveTo(x, 0);
    grid.lineTo(x, height);
  });

  yTicks.forEach((tick) => {
    const y = scaleY(tick);
    grid.moveTo(0, y);
    grid.lineTo(width, y);
  });

  grid.stroke({
    width: 1,
    color: GRID_COLOR,
    alpha: GRID_ALPHA,
  });

  const border = new Graphics();
  border.rect(0, 0, width, height);
  border.stroke({
    width: 1,
    color: AXIS_BORDER_COLOR,
  });

  layer.addChild(grid);
  layer.addChild(border);
}

/*
 * LABELS
 */
function drawAxesLabels(layer, scaleX, scaleY, innerWidth, innerHeight) {
  const xTicks = buildIntegerTicks(scaleX.domain());
  const yTicks = buildIntegerTicks(scaleY.domain());

  xTicks.forEach((tick) => {
    const label = new PixiText({
      text: tick.toString(),
      style: {
        fill: TICK_COLOR,
        fontSize: 11,
      },
    });

    label.x = scaleX(tick) - label.width / 2;
    label.y = innerHeight + 6;
    layer.addChild(label);
  });

  yTicks.forEach((tick) => {
    const label = new PixiText({
      text: tick.toString(),
      style: {
        fill: TICK_COLOR,
        fontSize: 11,
      },
    });

    label.x = -label.width - 6;
    label.y = scaleY(tick) - label.height / 2;
    layer.addChild(label);
  });
}

/*
 * POINTS
 */
function drawPoints(layer, points, scaleX, scaleY, imageCount, tooltipRef, cellSize = CELL_SIZE) {
  points.forEach((point) => {
    const x = scaleX(point.scaledX);
    const y = scaleY(point.scaledY);

    const positions = computeImagePositions(
      x,
      y,
      cellSize,
      cellSize,
      imageCount
    );

    positions.forEach((position) => {
      const sprite = Sprite.from(point.image);
      sprite.x = position.x;
      sprite.y = position.y;
      sprite.width = position.width;
      sprite.height = position.height;
      sprite.eventMode = "static";
      sprite.cursor = "pointer";

      sprite.on("pointerenter", (event) => {
        showTooltip(tooltipRef.current, event, point);
      });

      sprite.on("pointerleave", () => {
        hideTooltip(tooltipRef.current);
      });

      layer.addChild(sprite);
    });
  });
}

/*
 * SMART TICKS
 */
function buildIntegerTicks([min, max]) {
  const range = max - min;
  let step;

  if (range <= 10) step = 1;
  else if (range <= 20) step = 2;
  else if (range <= 50) step = 5;
  else if (range <= 100) step = 10;
  else if (range <= 200) step = 20;
  else step = 50;

  const ticks = [];
  const start = Math.floor(min / step) * step;

  for (let value = start; value <= max; value += step) {
    ticks.push(Number(value.toFixed(2)));
  }

  return ticks;
}

/*
 * TOOLTIP
 */
function showTooltip(element, event, point) {
  if (!element) return;

  const global = event.global;
  element.style.display = "block";
  element.style.left = `${global.x + 15}px`;
  element.style.top = `${global.y - 10}px`;

  element.innerHTML = `
    <div class="tooltip-label">
      ${point.label}
    </div>
 
    <div class="tooltip-meta">
      <span>Interval: ${point.meta.interval}s</span>
      <span>Angle: ${point.meta.angle}°</span>
      <span>Quality: ${point.meta.quality}</span>
    </div>
  `;
}

function hideTooltip(element) {
  if (!element) return;
  element.style.display = "none";
}

export default PixiPlotter;
```

---

# src\components\PlotterControls.jsx

```jsx
import { INTERACTION_MODES } from "../lib/interactionMode";

function ZoomIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
      <line x1="11" y1="8" x2="11" y2="14" />
      <line x1="8" y1="11" x2="14" y2="11" />
    </svg>
  );
}

function PanIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 11V6a2 2 0 0 0-4 0v5" />
      <path d="M14 10V4a2 2 0 0 0-4 0v6" />
      <path d="M10 10.5V6a2 2 0 0 0-4 0v8" />
      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
    </svg>
  );
}

export default function PlotterControls({
  onZoomIn,
  onZoomOut,
  onReset,
  zoomLevel,
  interactionMode,
  onModeChange,
}) {
  const isZoomActive = interactionMode === INTERACTION_MODES.ZOOM;
  const isPanActive = interactionMode === INTERACTION_MODES.PAN;

  return (
    <div className="zoom-controls">
      {onModeChange && (
        <>
          <button
            className={`mode-button ${isZoomActive ? "active" : ""}`}
            onClick={() => onModeChange(INTERACTION_MODES.ZOOM)}
            title="Zoom Mode — drag to select zoom area"
          >
            <ZoomIcon />
            <span>Zoom</span>
          </button>
          <button
            className={`mode-button ${isPanActive ? "active" : ""}`}
            onClick={() => onModeChange(INTERACTION_MODES.PAN)}
            title="Pan Mode — drag to move the chart"
          >
            <PanIcon />
            <span>Pan</span>
          </button>
          <span className="mode-separator" />
        </>
      )}

      <button className="zoom-button" onClick={onZoomIn}>
        +
      </button>
      <button className="zoom-button" onClick={onZoomOut}>
        −
      </button>
      <button className="zoom-button" onClick={onReset}>
        Reset
      </button>
      {zoomLevel !== undefined && (
        <span style={{ color: "#888", fontSize: "0.75rem", marginLeft: 8 }}>
          {Math.round(zoomLevel * 100)}%
        </span>
      )}
    </div>
  );
}

```

---

# src\components\RechartsPlotter.jsx

```jsx
/* eslint-disable react-hooks/purity */
import { useState, useMemo, useRef, useEffect, useCallback } from "react";
import * as d3 from "d3";
import { usePlotterData } from "../lib/plotterData";
import { computeImagePositions } from "../lib/gridLayout";
import { CELL_SIZE, PLOT_DIMENSIONS, PLOT_MARGIN } from "../lib/constants";
import {
  computeAdaptiveCellSize,
  filterVisiblePoints,
  computeEffectiveImageCount,
} from "../lib/densityLayout";
import PlotterControls from "./PlotterControls";
import { logChartInteractionEvent } from "../lib/chartInteractionLogger";
import { useInteractionMode } from "../lib/interactionMode";

const ZOOM_STEP = 1.5;
const ZOOM_MIN = 0.35;
const ZOOM_MAX = 250;
const BRUSH_MIN_PIXELS = 5;
const BRUSH_FILL = "rgba(68, 147, 255, 0.15)";
const BRUSH_STROKE = "#4493ff";
const BRUSH_STROKE_WIDTH = 1.5;

const BASE_IMAGE_GAP_X = 10;
const BASE_IMAGE_GAP_Y = 10;

function RechartsPlotter({ imageCount, xGap, yGap, syntheticPoints }) {
  const {
    plotterPoints: fetchedPoints,
    isLoading,
    loadError,
  } = usePlotterData();

  const plotterPoints = syntheticPoints || fetchedPoints;

  if (!syntheticPoints && isLoading)
    return <div className="plotter-loading">Loading data…</div>;
  if (!syntheticPoints && loadError)
    return <div className="plotter-error">Error: {loadError}</div>;

  return (
    <RechartsCanvas
      plotterPoints={plotterPoints}
      imageCount={imageCount}
      xGap={xGap}
      yGap={yGap}
    />
  );
}

function RechartsCanvas({ plotterPoints, imageCount, xGap, yGap }) {
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const dragRef = useRef({
    dragging: false,
    pointerId: null,
    startClientX: 0,
    startClientY: 0,
    startTransform: { scale: 1, x: 0, y: 0 },
  });

  const [containerWidth, setContainerWidth] = useState(PLOT_DIMENSIONS.width);
  const [transform, setTransform] = useState({ scale: 1, x: 0, y: 0 });
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const [brushRect, setBrushRect] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const brushStartRef = useRef(null);

  const { interactionMode, setInteractionMode, isPanMode } =
    useInteractionMode();

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) setContainerWidth(entry.contentRect.width);
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  /* Cancel in-progress brush when switching to pan mode */
  useEffect(() => {
    if (isPanMode) {
      brushStartRef.current = null;
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setBrushRect(null);
    }
  }, [isPanMode]);

  const height = PLOT_DIMENSIONS.height;
  const innerWidth = Math.max(
    containerWidth - PLOT_MARGIN.left - PLOT_MARGIN.right,
    320,
  );
  const innerHeight = Math.max(
    height - PLOT_MARGIN.top - PLOT_MARGIN.bottom,
    240,
  );

  const normalizedPoints = useMemo(() => {
    const xScale = xGap / BASE_IMAGE_GAP_X;
    const yScale = yGap / BASE_IMAGE_GAP_Y;

    return plotterPoints.map((point) => ({
      ...point,
      scaledX: point.x * xScale,
      scaledY: point.y * yScale,
    }));
  }, [plotterPoints, xGap, yGap]);

  const xExtent = useMemo(
    () => extentWithPadding(normalizedPoints.map((p) => p.scaledX)),
    [normalizedPoints],
  );
  const yExtent = useMemo(
    () => extentWithPadding(normalizedPoints.map((p) => p.scaledY)),
    [normalizedPoints],
  );

  const baseXScale = useMemo(
    () => d3.scaleLinear().domain(xExtent).range([0, innerWidth]),
    [xExtent, innerWidth],
  );

  const baseYScale = useMemo(
    () => d3.scaleLinear().domain(yExtent).range([innerHeight, 0]),
    [yExtent, innerHeight],
  );

  const visibleDomain = useMemo(
    () =>
      computeVisibleDomain(
        xExtent,
        yExtent,
        transform,
        innerWidth,
        innerHeight,
      ),
    [xExtent, yExtent, transform, innerWidth, innerHeight],
  );

  const xTicks = useMemo(
    () => d3.ticks(visibleDomain.xMin, visibleDomain.xMax, 8),
    [visibleDomain],
  );
  const yTicks = useMemo(
    () => d3.ticks(visibleDomain.yMin, visibleDomain.yMax, 6),
    [visibleDomain],
  );

  const xTickScale = useMemo(
    () =>
      d3
        .scaleLinear()
        .domain([visibleDomain.xMin, visibleDomain.xMax])
        .range([0, innerWidth]),
    [visibleDomain, innerWidth],
  );

  const yTickScale = useMemo(
    () =>
      d3
        .scaleLinear()
        .domain([visibleDomain.yMin, visibleDomain.yMax])
        .range([innerHeight, 0]),
    [visibleDomain, innerHeight],
  );

  const clipId = "recharts-clip-static";

  const adaptiveCellSizeForRender = useMemo(() => {
    /* Compute from base scales (content-space) so the cell size is set at
       the default zoom level. The SVG transform then naturally magnifies
       images when zoomed in, revealing more detail. */
    return computeAdaptiveCellSize(
      normalizedPoints,
      (val) => baseXScale(val),
      (val) => baseYScale(val),
    );
  }, [normalizedPoints, baseXScale, baseYScale]);

  const visiblePointsForRender = useMemo(() => {
    /* Viewport culling still needs screen-space coordinates. */
    const xScreenFn = (val) => baseXScale(val) * transform.scale + transform.x;
    const yScreenFn = (val) => baseYScale(val) * transform.scale + transform.y;
    return filterVisiblePoints(
      normalizedPoints,
      xScreenFn,
      yScreenFn,
      innerWidth,
      innerHeight,
      adaptiveCellSizeForRender * transform.scale,
    );
  }, [
    normalizedPoints,
    baseXScale,
    baseYScale,
    transform,
    innerWidth,
    innerHeight,
    adaptiveCellSizeForRender,
  ]);

  const effectiveImageCountForRender = useMemo(
    () =>
      computeEffectiveImageCount(
        adaptiveCellSizeForRender * transform.scale,
        imageCount,
      ),
    [adaptiveCellSizeForRender, transform.scale, imageCount],
  );

  const zoomTo = useCallback(
    (nextScale, anchorX, anchorY) => {
      setTransform((prev) => {
        const clampedScale = clamp(nextScale, ZOOM_MIN, ZOOM_MAX);
        const pivotX = Number.isFinite(anchorX) ? anchorX : innerWidth / 2;
        const pivotY = Number.isFinite(anchorY) ? anchorY : innerHeight / 2;

        const nextX =
          prev.x - (pivotX - prev.x) * (clampedScale / prev.scale - 1);
        const nextY =
          prev.y - (pivotY - prev.y) * (clampedScale / prev.scale - 1);

        return clampTransform(
          { scale: clampedScale, x: nextX, y: nextY },
          innerWidth,
          innerHeight,
        );
      });
    },
    [innerWidth, innerHeight],
  );

  const handleZoomIn = useCallback(() => {
    logChartInteractionEvent({
      interactionType: "ZOOM_IN",
      visualizationLibrary: "Recharts",
      interactionSource: "button",
    });
    zoomTo(transform.scale * ZOOM_STEP, innerWidth / 2, innerHeight / 2);
  }, [transform.scale, zoomTo, innerWidth, innerHeight]);

  const handleZoomOut = useCallback(() => {
    logChartInteractionEvent({
      interactionType: "ZOOM_OUT",
      visualizationLibrary: "Recharts",
      interactionSource: "button",
    });
    zoomTo(transform.scale / ZOOM_STEP, innerWidth / 2, innerHeight / 2);
  }, [transform.scale, zoomTo, innerWidth, innerHeight]);

  const handleReset = useCallback(() => {
    logChartInteractionEvent({
      interactionType: "RESET",
      visualizationLibrary: "Recharts",
      interactionSource: "button",
    });
    setTransform({ scale: 1, x: 0, y: 0 });
    setHoveredPoint(null);
  }, []);

  const handleWheel = useCallback(
    (event) => {
      event.preventDefault();

      const rect = svgRef.current?.getBoundingClientRect();
      if (!rect) return;

      const clientX = event.clientX - rect.left;
      const clientY = event.clientY - rect.top;

      const localX = clientX - PLOT_MARGIN.left;
      const localY = clientY - PLOT_MARGIN.top;

      if (
        localX < 0 ||
        localY < 0 ||
        localX > innerWidth ||
        localY > innerHeight
      ) {
        return;
      }

      const isZoomIn = event.deltaY < 0;
      logChartInteractionEvent({
        interactionType: isZoomIn ? "ZOOM_IN" : "ZOOM_OUT",
        visualizationLibrary: "Recharts",
        interactionSource: "wheel",
      });

      const factor = event.deltaY > 0 ? 1 / 1.15 : 1.15;

      setTransform((prev) => {
        const clampedScale = clamp(prev.scale * factor, ZOOM_MIN, ZOOM_MAX);

        const nextX =
          prev.x - (localX - prev.x) * (clampedScale / prev.scale - 1);
        const nextY =
          prev.y - (localY - prev.y) * (clampedScale / prev.scale - 1);
        return clampTransform(
          { scale: clampedScale, x: nextX, y: nextY },
          innerWidth,
          innerHeight,
        );
      });
    },
    [innerWidth, innerHeight],
  );

  const handlePointerDown = useCallback(
    (event) => {
      const rect = svgRef.current?.getBoundingClientRect();
      if (!rect) return;

      const localX = event.clientX - rect.left - PLOT_MARGIN.left;
      const localY = event.clientY - rect.top - PLOT_MARGIN.top;

      if (
        localX < 0 ||
        localY < 0 ||
        localX > innerWidth ||
        localY > innerHeight
      ) {
        return;
      }

      if (isPanMode) {
        logChartInteractionEvent({
          interactionType: "PAN",
          visualizationLibrary: "Recharts",
          interactionSource: "drag",
        });
        setIsDragging(true);
        dragRef.current = {
          dragging: true,
          pointerId: event.pointerId,
          startClientX: event.clientX,
          startClientY: event.clientY,
          startTransform: transform,
        };
        event.currentTarget.setPointerCapture?.(event.pointerId);
        return;
      }

      const clampedX = clamp(localX, 0, innerWidth);
      const clampedY = clamp(localY, 0, innerHeight);
      brushStartRef.current = { x: clampedX, y: clampedY };
      setBrushRect({ x: clampedX, y: clampedY, width: 0, height: 0 });
      event.currentTarget.setPointerCapture?.(event.pointerId);
    },
    [innerWidth, innerHeight, transform, isPanMode],
  );

  const handlePointerMove = useCallback(
    (event) => {
      if (brushStartRef.current) {
        const rect = svgRef.current?.getBoundingClientRect();
        if (!rect) return;

        const localX = clamp(
          event.clientX - rect.left - PLOT_MARGIN.left,
          0,
          innerWidth,
        );
        const localY = clamp(
          event.clientY - rect.top - PLOT_MARGIN.top,
          0,
          innerHeight,
        );
        const startPoint = brushStartRef.current;

        setBrushRect({
          x: Math.min(startPoint.x, localX),
          y: Math.min(startPoint.y, localY),
          width: Math.abs(localX - startPoint.x),
          height: Math.abs(localY - startPoint.y),
        });
        return;
      }

      if (dragRef.current.dragging) {
        const dx = event.clientX - dragRef.current.startClientX;
        const dy = event.clientY - dragRef.current.startClientY;

        const next = clampTransform(
          {
            scale: dragRef.current.startTransform.scale,
            x: dragRef.current.startTransform.x + dx,
            y: dragRef.current.startTransform.y + dy,
          },
          innerWidth,
          innerHeight,
        );

        setTransform(next);
        return;
      }

      const target = event.target?.closest?.("[data-point-id]");
      if (!target) {
        setHoveredPoint(null);
        return;
      }

      const id = target.getAttribute("data-point-id");
      const point = plotterPoints.find((p) => p.id === id);
      if (!point) return;

      setHoveredPoint(point);
      setTooltipPos({ x: event.clientX, y: event.clientY });
    },
    [innerWidth, innerHeight, plotterPoints],
  );

  const handlePointerUp = useCallback(
    (event) => {
      if (brushStartRef.current && brushRect) {
        const isTooSmall =
          brushRect.width < BRUSH_MIN_PIXELS ||
          brushRect.height < BRUSH_MIN_PIXELS;

        if (!isTooSmall) {
          logChartInteractionEvent({
            interactionType: "ZOOM_IN",
            visualizationLibrary: "Recharts",
            interactionSource: "brush",
          });
          const newTransform = convertBrushToTransform(
            brushRect,
            transform,
            innerWidth,
            innerHeight,
          );
          setTransform(newTransform);
        }

        brushStartRef.current = null;
        setBrushRect(null);
        event.currentTarget.releasePointerCapture?.(event.pointerId);
        return;
      }

      setIsDragging(false);
      dragRef.current.dragging = false;
      dragRef.current.pointerId = null;
      event.currentTarget.releasePointerCapture?.(event.pointerId);
    },
    [brushRect, transform, innerWidth, innerHeight],
  );

  useEffect(() => {
    const svgElement = svgRef.current;

    if (!svgElement) return;

    const wheelHandler = (event) => {
      event.preventDefault();
      handleWheel(event);
    };

    svgElement.addEventListener("wheel", wheelHandler, {
      passive: false,
    });

    return () => {
      svgElement.removeEventListener("wheel", wheelHandler);
    };
  }, [handleWheel]);

  const handleDoubleClick = useCallback(() => {
    logChartInteractionEvent({
      interactionType: "RESET",
      visualizationLibrary: "Recharts",
      interactionSource: "double_click",
    });
    setTransform({ scale: 1, x: 0, y: 0 });
    setHoveredPoint(null);
  }, []);

  const stageCursor = isPanMode
    ? isDragging
      ? "grabbing"
      : "grab"
    : "crosshair";

  const contentTransform = `translate(${transform.x}, ${transform.y}) scale(${transform.scale})`;

  return (
    <div ref={containerRef} style={{ position: "relative", width: "100%" }}>
      <PlotterControls
        zoomLevel={transform.scale}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
        interactionMode={interactionMode}
        onModeChange={setInteractionMode}
      />

      <svg
        ref={svgRef}
        width={containerWidth}
        height={height}
        style={{
          display: "block",
          touchAction: "none",
          userSelect: "none",
          cursor: stageCursor,
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onDoubleClick={handleDoubleClick}
      >
        <defs>
          <clipPath id={clipId}>
            <rect
              x={PLOT_MARGIN.left}
              y={PLOT_MARGIN.top}
              width={innerWidth}
              height={innerHeight}
            />
          </clipPath>
        </defs>

        <rect
          x={0}
          y={0}
          width={containerWidth}
          height={height}
          fill="#16213e"
        />

        <g transform={`translate(${PLOT_MARGIN.left},${PLOT_MARGIN.top})`}>
          <rect
            x={0}
            y={0}
            width={innerWidth}
            height={innerHeight}
            fill="#16213e"
          />

          <AxisGrid
            xTicks={xTicks}
            yTicks={yTicks}
            xTickScale={xTickScale}
            yTickScale={yTickScale}
            innerWidth={innerWidth}
            innerHeight={innerHeight}
          />

          <AxisLabels
            xTicks={xTicks}
            yTicks={yTicks}
            xTickScale={xTickScale}
            yTickScale={yTickScale}
            innerWidth={innerWidth}
            innerHeight={innerHeight}
          />

          <g clipPath={`url(#${clipId})`}>
            <g transform={contentTransform}>
              {visiblePointsForRender.map((point) => (
                <ImagePoint
                  key={point.id}
                  point={point}
                  baseXScale={baseXScale}
                  baseYScale={baseYScale}
                  imageCount={effectiveImageCountForRender}
                  adaptiveCellSize={adaptiveCellSizeForRender}
                />
              ))}
            </g>
          </g>

          <rect
            x={0}
            y={0}
            width={innerWidth}
            height={innerHeight}
            fill="transparent"
            stroke="#555"
            pointerEvents="none"
          />

          {brushRect && brushRect.width > 0 && brushRect.height > 0 && (
            <rect
              x={brushRect.x}
              y={brushRect.y}
              width={brushRect.width}
              height={brushRect.height}
              fill={BRUSH_FILL}
              stroke={BRUSH_STROKE}
              strokeWidth={BRUSH_STROKE_WIDTH}
              rx={2}
              ry={2}
              pointerEvents="none"
            />
          )}
        </g>
      </svg>

      {hoveredPoint && (
        <div
          className="plotter-tooltip"
          style={{
            display: "block",
            position: "fixed",
            left: tooltipPos.x + 12,
            top: tooltipPos.y - 10,
            pointerEvents: "none",
            zIndex: 20,
          }}
        >
          <div className="tooltip-label">{hoveredPoint.label}</div>
          <div className="tooltip-meta">
            <span>Interval: {hoveredPoint.meta.interval}s</span>
            <span>Angle: {hoveredPoint.meta.angle}°</span>
            <span>Quality: {hoveredPoint.meta.quality}</span>
          </div>
        </div>
      )}
    </div>
  );
}

function ImagePoint({
  point,
  baseXScale,
  baseYScale,
  imageCount,
  adaptiveCellSize,
}) {
  const centerX = baseXScale(point.scaledX);
  const centerY = baseYScale(point.scaledY);
  const cellSize = adaptiveCellSize ?? CELL_SIZE;

  const positions = computeImagePositions(
    centerX,
    centerY,
    cellSize,
    cellSize,
    imageCount,
  );

  return (
    <>
      {positions.map((position, index) => (
        <image
          key={`${point.id}-${imageCount}-${index}`}
          data-point-id={point.id}
          href={point.image}
          x={position.x}
          y={position.y}
          width={position.width}
          height={position.height}
          preserveAspectRatio="xMidYMid meet"
          style={{ cursor: "pointer" }}
        />
      ))}
    </>
  );
}

function AxisGrid({
  xTicks,
  yTicks,
  xTickScale,
  yTickScale,
  innerWidth,
  innerHeight,
}) {
  return (
    <>
      {xTicks.map((tick, index) => {
        const x = xTickScale(tick);
        return (
          <line
            key={`xgrid-${index}`}
            x1={x}
            y1={0}
            x2={x}
            y2={innerHeight}
            stroke="#2a2a3e"
            strokeDasharray="3 3"
          />
        );
      })}

      {yTicks.map((tick, index) => {
        const y = yTickScale(tick);
        return (
          <line
            key={`ygrid-${index}`}
            x1={0}
            y1={y}
            x2={innerWidth}
            y2={y}
            stroke="#2a2a3e"
            strokeDasharray="3 3"
          />
        );
      })}
    </>
  );
}

function AxisLabels({ xTicks, yTicks, xTickScale, yTickScale, innerHeight }) {
  return (
    <>
      {xTicks.map((tick, index) => {
        const x = xTickScale(tick);
        return (
          <text
            key={`xlabel-${index}`}
            x={x}
            y={innerHeight + 18}
            fill="#888"
            fontSize="11"
            textAnchor="middle"
          >
            {formatTick(tick)}
          </text>
        );
      })}

      {yTicks.map((tick, index) => {
        const y = yTickScale(tick);
        return (
          <text
            key={`ylabel-${index}`}
            x={-8}
            y={y + 4}
            fill="#888"
            fontSize="11"
            textAnchor="end"
          >
            {formatTick(tick)}
          </text>
        );
      })}
    </>
  );
}

function extentWithPadding(values) {
  if (!values.length) return [0, 1];

  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = max - min;
  const pad = span === 0 ? 5 : Math.max(span * 0.18, 1);

  return [min - pad, max + pad];
}

function computeVisibleDomain(
  xExtent,
  yExtent,
  transform,
  innerWidth,
  innerHeight,
) {
  const domainWidth = xExtent[1] - xExtent[0];
  const domainHeight = yExtent[1] - yExtent[0];

  const xMin =
    xExtent[0] - (transform.x / transform.scale / innerWidth) * domainWidth;
  const xMax = xMin + domainWidth / transform.scale;

  const yMax =
    yExtent[1] + (transform.y / transform.scale / innerHeight) * domainHeight;
  const yMin = yMax - domainHeight / transform.scale;

  return { xMin, xMax, yMin, yMax };
}

function clampTransform(transform, innerWidth, innerHeight) {
  const scale = transform.scale;
  const scaledWidth = innerWidth * scale;
  const scaledHeight = innerHeight * scale;

  let x = transform.x;
  let y = transform.y;

  if (scaledWidth <= innerWidth) {
    x = (innerWidth - scaledWidth) / 2;
  } else {
    x = Math.min(0, Math.max(innerWidth - scaledWidth, x));
  }

  if (scaledHeight <= innerHeight) {
    y = (innerHeight - scaledHeight) / 2;
  } else {
    y = Math.min(0, Math.max(innerHeight - scaledHeight, y));
  }

  return { scale, x, y };
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function convertBrushToTransform(
  brushPixelRect,
  currentTransform,
  plotInnerWidth,
  plotInnerHeight,
) {
  const contentX0 =
    (brushPixelRect.x - currentTransform.x) / currentTransform.scale;
  const contentY0 =
    (brushPixelRect.y - currentTransform.y) / currentTransform.scale;
  const contentBrushWidth = brushPixelRect.width / currentTransform.scale;
  const contentBrushHeight = brushPixelRect.height / currentTransform.scale;

  const fitScaleX = plotInnerWidth / contentBrushWidth;
  const fitScaleY = plotInnerHeight / contentBrushHeight;
  const newScale = clamp(Math.min(fitScaleX, fitScaleY), ZOOM_MIN, ZOOM_MAX);

  const rawX = -contentX0 * newScale;
  const rawY = -contentY0 * newScale;

  return clampTransform(
    { scale: newScale, x: rawX, y: rawY },
    plotInnerWidth,
    plotInnerHeight,
  );
}

function formatTick(value) {
  if (Number.isInteger(value)) return String(value);
  return parseFloat(Number(value).toPrecision(4)).toString();
}

export default RechartsPlotter;

```

---

# src\lib\chartInteractionLogger.js

```javascript
export function logChartInteractionEvent({
  interactionType,
  visualizationLibrary,
  interactionSource,
}) {
  console.log({
    type: interactionType,
    library: visualizationLibrary,
    source: interactionSource,
  });
}

```

---

# src\lib\constants.js

```javascript
export const LIBRARIES = [
  "Recharts",
  "D3",
  "PixiJS",
  "Konva",
  "DeckGL",
  "ECharts",
];

export const DISABLED_LIBRARIES = ["DeckGL", "ECharts"];

/**
 * Dynamic image count support.
 * We no longer restrict to [1,2,4,8].
 */
export const MIN_IMAGES_PER_POINT = 1;
export const MAX_IMAGES_PER_POINT = 8;

export const DATA_POINT_LIMITS = {
  min: 1,
  max: 1000,
  defaultCount: 100,
};

export const CELL_SIZE = 50;
export const IMAGE_PADDING = 0.9;

export const ADAPTIVE_CELL_SIZE = {
  max: 50,
  min: 4,
  gapRatio: 0.55,
  collapseThreshold: 0,
};

export const PLOT_DIMENSIONS = {
  width: 900,
  height: 600,
};

export const PLOT_MARGIN = {
  top: 20,
  right: 20,
  bottom: 40,
  left: 50,
};

export const DATA_URL = "/data/data.json";

export const BRUSH_ZOOM = {
  fill: "rgba(68, 147, 255, 0.15)",
  stroke: "#4493ff",
  strokeWidth: 1.5,
  minimumSelectionPixels: 5,
};

export const ZOOM_SCALE_FACTOR = 1.5;

export const WHEEL_ZOOM_SENSITIVITY = 0.002;

/**
 * Prevent browser crashes.
 * 1000 x 1000 = 1,000,000 rendered images.
 */
export const MAX_RENDER_IMAGES = 50000;

```

---

# src\lib\densityLayout.js

```javascript
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
 * Always preserve requested image count.
 * We scale image sizes instead of collapsing image count.
 */
export function computeEffectiveImageCount(adaptiveCellSize, imageCount) {
  const parsed = Number(imageCount);

  if (Number.isNaN(parsed)) {
    return 1;
  }

  return Math.max(1, Math.min(8, Math.floor(parsed)));
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

/* ─── Internal: Clamping ────────────────────────────────────────── */

function clampCellSize(rawSize) {
  return Math.max(
    ADAPTIVE_CELL_SIZE.min,
    Math.min(rawSize, ADAPTIVE_CELL_SIZE.max),
  );
}

```

---

# src\lib\gridLayout.js

```javascript
import { MAX_RENDER_IMAGES, IMAGE_PADDING } from "./constants";

/**
 * Computes deterministic grid offsets for ANY image count.
 */
export function computeGridOffsets(cellWidth, cellHeight, imageCount) {
  const safeImageCount = sanitizeImageCount(imageCount);

  const columns = Math.ceil(Math.sqrt(safeImageCount));
  const rows = Math.ceil(safeImageCount / columns);

  const subWidth = Math.max(2, cellWidth - columns * IMAGE_PADDING);

  const subHeight = Math.max(2, cellHeight - rows * IMAGE_PADDING);

  const offsets = [];

  const centeredOffsetX = ((columns - 1) * subWidth) / 2;

  const centeredOffsetY = ((rows - 1) * subHeight) / 2;

  for (let index = 0; index < safeImageCount; index++) {
    const column = index % columns;
    const row = Math.floor(index / columns);

    const offsetX = column * subWidth - centeredOffsetX;

    const offsetY = row * subHeight - centeredOffsetY;

    offsets.push({
      offsetX,
      offsetY,
      width: subWidth,
      height: subHeight,
    });
  }

  return offsets;
}

/**
 * Computes deterministic image positions.
 */
export function computeImagePositions(
  centerX,
  centerY,
  cellWidth,
  cellHeight,
  imageCount,
) {
  const safeImageCount = sanitizeImageCount(imageCount);

  const offsets = computeGridOffsets(cellWidth, cellHeight, safeImageCount);

  const positions = [];

  for (let index = 0; index < offsets.length; index++) {
    if (positions.length >= MAX_RENDER_IMAGES) {
      break;
    }

    const offset = offsets[index];

    positions.push({
      imageIndex: index,

      x: centerX + offset.offsetX - offset.width / 2,

      y: centerY + offset.offsetY - offset.height / 2,

      width: offset.width,
      height: offset.height,
    });
  }

  return positions;
}

/**
 * Normalizes image counts.
 */
function sanitizeImageCount(imageCount) {
  const parsed = Number(imageCount);

  if (Number.isNaN(parsed)) {
    return 1;
  }

  return Math.max(1, Math.min(1000, Math.floor(parsed)));
}

```

---

# src\lib\imageCache.js

```javascript
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

```

---

# src\lib\interactionMode.js

```javascript
import { useState, useCallback } from "react";

export const INTERACTION_MODES = {
  ZOOM: "zoom",
  PAN: "pan",
};

export function useInteractionMode(initialMode = INTERACTION_MODES.ZOOM) {
  const [interactionMode, setInteractionMode] = useState(initialMode);

  const isZoomMode = interactionMode === INTERACTION_MODES.ZOOM;
  const isPanMode = interactionMode === INTERACTION_MODES.PAN;

  const activateZoomMode = useCallback(() => {
    setInteractionMode(INTERACTION_MODES.ZOOM);
  }, []);

  const activatePanMode = useCallback(() => {
    setInteractionMode(INTERACTION_MODES.PAN);
  }, []);

  return {
    interactionMode,
    setInteractionMode,
    isZoomMode,
    isPanMode,
    activateZoomMode,
    activatePanMode,
  };
}

```

---

# src\lib\plotterData.js

```javascript
import { useState, useEffect } from "react";
import { DATA_URL } from "./constants";

export function usePlotterData() {
  const [plotterPoints, setPlotterPoints] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);

  useEffect(() => {
    fetch(DATA_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status}`);
        }
        return response.json();
      })
      .then((jsonData) => {
        setPlotterPoints(jsonData);
        setIsLoading(false);
      })
      .catch((fetchError) => {
        setLoadError(fetchError.message);
        setIsLoading(false);
      });
  }, []);

  return { plotterPoints, isLoading, loadError };
}

```

---

# src\lib\syntheticDataGenerator.js

```javascript
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

    syntheticPoints.push({
      id: `synth-${index}`,
      x: column * spacing,
      y: row * spacing,
      image: BASE_IMAGE_PATH,
      label: `Point ${index + 1} (${column * spacing}, ${row * spacing})`,
      meta: {
        interval: column * spacing,
        angle: row * spacing,
        quality: parseFloat((0.7 + Math.random() * 0.25).toFixed(2)),
      },
    });
  }

  return syntheticPoints;
}

/**
 * Computes the number of columns for a near-square grid layout.
 */
function computeGridColumns(totalPoints) {
  return Math.ceil(Math.sqrt(totalPoints));
}

```

---

# src\main.jsx

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

```

