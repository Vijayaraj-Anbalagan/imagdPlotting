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
├── repository_dump.md
└── src
    ├── App.jsx
    ├── components
    │   ├── D3Plotter.jsx
    │   ├── DeckGLPlotter.jsx
    │   ├── EChartsPlotter.jsx
    │   ├── ImageCountSelector.jsx
    │   ├── KonvaPlotter.jsx
    │   ├── Navbar.jsx
    │   ├── PixiPlotter.jsx
    │   ├── PlotterControls.jsx
    │   └── RechartsPlotter.jsx
    ├── lib
    │   ├── constants.js
    │   ├── gridLayout.js
    │   └── plotterData.js
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
    "image": "/images/base.jpeg",
    "label": "Interval 0s, 0°",
    "meta": { "interval": 0, "angle": 0, "quality": 0.95 }
  },
  {
    "id": "1-15",
    "x": 0,
    "y": 15,
    "image": "/images/base.jpeg",
    "label": "Interval 0s, 15°",
    "meta": { "interval": 0, "angle": 15, "quality": 0.93 }
  },
  {
    "id": "1-30",
    "x": 0,
    "y": 30,
    "image": "/images/base.jpeg",
    "label": "Interval 0s, 30°",
    "meta": { "interval": 0, "angle": 30, "quality": 0.91 }
  },
  {
    "id": "1-45",
    "x": 0,
    "y": 45,
    "image": "/images/base.jpeg",
    "label": "Interval 0s, 45°",
    "meta": { "interval": 0, "angle": 45, "quality": 0.88 }
  },
  {
    "id": "2-0",
    "x": 10,
    "y": 0,
    "image": "/images/base.jpeg",
    "label": "Interval 10s, 0°",
    "meta": { "interval": 10, "angle": 0, "quality": 0.92 }
  },
  {
    "id": "2-15",
    "x": 10,
    "y": 15,
    "image": "/images/base.jpeg",
    "label": "Interval 10s, 15°",
    "meta": { "interval": 10, "angle": 15, "quality": 0.90 }
  },
  {
    "id": "2-30",
    "x": 10,
    "y": 30,
    "image": "/images/base.jpeg",
    "label": "Interval 10s, 30°",
    "meta": { "interval": 10, "angle": 30, "quality": 0.87 }
  },
  {
    "id": "2-45",
    "x": 10,
    "y": 45,
    "image": "/images/base.jpeg",
    "label": "Interval 10s, 45°",
    "meta": { "interval": 10, "angle": 45, "quality": 0.84 }
  },
  {
    "id": "3-0",
    "x": 20,
    "y": 0,
    "image": "/images/base.jpeg",
    "label": "Interval 20s, 0°",
    "meta": { "interval": 20, "angle": 0, "quality": 0.89 }
  },
  {
    "id": "3-15",
    "x": 20,
    "y": 15,
    "image": "/images/base.jpeg",
    "label": "Interval 20s, 15°",
    "meta": { "interval": 20, "angle": 15, "quality": 0.86 }
  },
  {
    "id": "3-30",
    "x": 20,
    "y": 30,
    "image": "/images/base.jpeg",
    "label": "Interval 20s, 30°",
    "meta": { "interval": 20, "angle": 30, "quality": 0.83 }
  },
  {
    "id": "3-45",
    "x": 20,
    "y": 45,
    "image": "/images/base.jpeg",
    "label": "Interval 20s, 45°",
    "meta": { "interval": 20, "angle": 45, "quality": 0.80 }
  },
  {
    "id": "4-0",
    "x": 30,
    "y": 0,
    "image": "/images/base.jpeg",
    "label": "Interval 30s, 0°",
    "meta": { "interval": 30, "angle": 0, "quality": 0.85 }
  },
  {
    "id": "4-15",
    "x": 30,
    "y": 15,
    "image": "/images/base.jpeg",
    "label": "Interval 30s, 15°",
    "meta": { "interval": 30, "angle": 15, "quality": 0.82 }
  },
  {
    "id": "4-30",
    "x": 30,
    "y": 30,
    "image": "/images/base.jpeg",
    "label": "Interval 30s, 30°",
    "meta": { "interval": 30, "angle": 30, "quality": 0.79 }
  },
  {
    "id": "4-45",
    "x": 30,
    "y": 45,
    "image": "/images/base.jpeg",
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
├── repository_dump.md
└── src
    ├── App.jsx
    ├── components
    │   ├── D3Plotter.jsx
    │   ├── DeckGLPlotter.jsx
    │   ├── EChartsPlotter.jsx
    │   ├── ImageCountSelector.jsx
    │   ├── KonvaPlotter.jsx
    │   ├── Navbar.jsx
    │   ├── PixiPlotter.jsx
    │   ├── PlotterControls.jsx
    │   └── RechartsPlotter.jsx
    ├── lib
    │   ├── constants.js
    │   ├── gridLayout.js
    │   └── plotterData.js
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
    "image": "/images/base.jpeg",
    "label": "Interval 0s, 0°",
    "meta": { "interval": 0, "angle": 0, "quality": 0.95 }
  },
  {
    "id": "1-15",
    "x": 0,
    "y": 15,
    "image": "/images/base.jpeg",
    "label": "Interval 0s, 15°",
    "meta": { "interval": 0, "angle": 15, "quality": 0.93 }
  },
  {
    "id": "1-30",
    "x": 0,
    "y": 30,
    "image": "/images/base.jpeg",
    "label": "Interval 0s, 30°",
    "meta": { "interval": 0, "angle": 30, "quality": 0.91 }
  },
  {
    "id": "1-45",
    "x": 0,
    "y": 45,
    "image": "/images/base.jpeg",
    "label": "Interval 0s, 45°",
    "meta": { "interval": 0, "angle": 45, "quality": 0.88 }
  },
  {
    "id": "2-0",
    "x": 10,
    "y": 0,
    "image": "/images/base.jpeg",
    "label": "Interval 10s, 0°",
    "meta": { "interval": 10, "angle": 0, "quality": 0.92 }
  },
  {
    "id": "2-15",
    "x": 10,
    "y": 15,
    "image": "/images/base.jpeg",
    "label": "Interval 10s, 15°",
    "meta": { "interval": 10, "angle": 15, "quality": 0.90 }
  },
  {
    "id": "2-30",
    "x": 10,
    "y": 30,
    "image": "/images/base.jpeg",
    "label": "Interval 10s, 30°",
    "meta": { "interval": 10, "angle": 30, "quality": 0.87 }
  },
  {
    "id": "2-45",
    "x": 10,
    "y": 45,
    "image": "/images/base.jpeg",
    "label": "Interval 10s, 45°",
    "meta": { "interval": 10, "angle": 45, "quality": 0.84 }
  },
  {
    "id": "3-0",
    "x": 20,
    "y": 0,
    "image": "/images/base.jpeg",
    "label": "Interval 20s, 0°",
    "meta": { "interval": 20, "angle": 0, "quality": 0.89 }
  },
  {
    "id": "3-15",
    "x": 20,
    "y": 15,
    "image": "/images/base.jpeg",
    "label": "Interval 20s, 15°",
    "meta": { "interval": 20, "angle": 15, "quality": 0.86 }
  },
  {
    "id": "3-30",
    "x": 20,
    "y": 30,
    "image": "/images/base.jpeg",
    "label": "Interval 20s, 30°",
    "meta": { "interval": 20, "angle": 30, "quality": 0.83 }
  },
  {
    "id": "3-45",
    "x": 20,
    "y": 45,
    "image": "/images/base.jpeg",
    "label": "Interval 20s, 45°",
    "meta": { "interval": 20, "angle": 45, "quality": 0.80 }
  },
  {
    "id": "4-0",
    "x": 30,
    "y": 0,
    "image": "/images/base.jpeg",
    "label": "Interval 30s, 0°",
    "meta": { "interval": 30, "angle": 0, "quality": 0.85 }
  },
  {
    "id": "4-15",
    "x": 30,
    "y": 15,
    "image": "/images/base.jpeg",
    "label": "Interval 30s, 15°",
    "meta": { "interval": 30, "angle": 15, "quality": 0.82 }
  },
  {
    "id": "4-30",
    "x": 30,
    "y": 30,
    "image": "/images/base.jpeg",
    "label": "Interval 30s, 30°",
    "meta": { "interval": 30, "angle": 30, "quality": 0.79 }
  },
  {
    "id": "4-45",
    "x": 30,
    "y": 45,
    "image": "/images/base.jpeg",
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
└── src
    ├── App.jsx
    ├── components
    │   ├── D3Plotter.jsx
    │   ├── DeckGLPlotter.jsx
    │   ├── EChartsPlotter.jsx
    │   ├── ImageCountSelector.jsx
    │   ├── KonvaPlotter.jsx
    │   ├── Navbar.jsx
    │   ├── PixiPlotter.jsx
    │   ├── PlotterControls.jsx
    │   └── RechartsPlotter.jsx
    ├── lib
    │   ├── constants.js
    │   ├── gridLayout.js
    │   └── plotterData.js
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
    "image": "/images/base.jpeg",
    "label": "Interval 0s, 0°",
    "meta": { "interval": 0, "angle": 0, "quality": 0.95 }
  },
  {
    "id": "1-15",
    "x": 0,
    "y": 15,
    "image": "/images/base.jpeg",
    "label": "Interval 0s, 15°",
    "meta": { "interval": 0, "angle": 15, "quality": 0.93 }
  },
  {
    "id": "1-30",
    "x": 0,
    "y": 30,
    "image": "/images/base.jpeg",
    "label": "Interval 0s, 30°",
    "meta": { "interval": 0, "angle": 30, "quality": 0.91 }
  },
  {
    "id": "1-45",
    "x": 0,
    "y": 45,
    "image": "/images/base.jpeg",
    "label": "Interval 0s, 45°",
    "meta": { "interval": 0, "angle": 45, "quality": 0.88 }
  },
  {
    "id": "2-0",
    "x": 10,
    "y": 0,
    "image": "/images/base.jpeg",
    "label": "Interval 10s, 0°",
    "meta": { "interval": 10, "angle": 0, "quality": 0.92 }
  },
  {
    "id": "2-15",
    "x": 10,
    "y": 15,
    "image": "/images/base.jpeg",
    "label": "Interval 10s, 15°",
    "meta": { "interval": 10, "angle": 15, "quality": 0.90 }
  },
  {
    "id": "2-30",
    "x": 10,
    "y": 30,
    "image": "/images/base.jpeg",
    "label": "Interval 10s, 30°",
    "meta": { "interval": 10, "angle": 30, "quality": 0.87 }
  },
  {
    "id": "2-45",
    "x": 10,
    "y": 45,
    "image": "/images/base.jpeg",
    "label": "Interval 10s, 45°",
    "meta": { "interval": 10, "angle": 45, "quality": 0.84 }
  },
  {
    "id": "3-0",
    "x": 20,
    "y": 0,
    "image": "/images/base.jpeg",
    "label": "Interval 20s, 0°",
    "meta": { "interval": 20, "angle": 0, "quality": 0.89 }
  },
  {
    "id": "3-15",
    "x": 20,
    "y": 15,
    "image": "/images/base.jpeg",
    "label": "Interval 20s, 15°",
    "meta": { "interval": 20, "angle": 15, "quality": 0.86 }
  },
  {
    "id": "3-30",
    "x": 20,
    "y": 30,
    "image": "/images/base.jpeg",
    "label": "Interval 20s, 30°",
    "meta": { "interval": 20, "angle": 30, "quality": 0.83 }
  },
  {
    "id": "3-45",
    "x": 20,
    "y": 45,
    "image": "/images/base.jpeg",
    "label": "Interval 20s, 45°",
    "meta": { "interval": 20, "angle": 45, "quality": 0.80 }
  },
  {
    "id": "4-0",
    "x": 30,
    "y": 0,
    "image": "/images/base.jpeg",
    "label": "Interval 30s, 0°",
    "meta": { "interval": 30, "angle": 0, "quality": 0.85 }
  },
  {
    "id": "4-15",
    "x": 30,
    "y": 15,
    "image": "/images/base.jpeg",
    "label": "Interval 30s, 15°",
    "meta": { "interval": 30, "angle": 15, "quality": 0.82 }
  },
  {
    "id": "4-30",
    "x": 30,
    "y": 30,
    "image": "/images/base.jpeg",
    "label": "Interval 30s, 30°",
    "meta": { "interval": 30, "angle": 30, "quality": 0.79 }
  },
  {
    "id": "4-45",
    "x": 30,
    "y": 45,
    "image": "/images/base.jpeg",
    "label": "Interval 30s, 45°",
    "meta": { "interval": 30, "angle": 45, "quality": 0.76 }
  }
]

```

---

# src\App.jsx

```jsx
import { useState } from "react";
import Navbar from "./components/Navbar";
import ImageCountSelector from "./components/ImageCountSelector";
import RechartsPlotter from "./components/RechartsPlotter";
import D3Plotter from "./components/D3Plotter";
import PixiPlotter from "./components/PixiPlotter";
import KonvaPlotter from "./components/KonvaPlotter";
import DeckGLPlotter from "./components/DeckGLPlotter";
import EChartsPlotter from "./components/EChartsPlotter";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("Recharts");
  const [imageCount, setImageCount] = useState(1);
  const [appliedXGap, setAppliedXGap] = useState(10);
  const [appliedYGap, setAppliedYGap] = useState(10);
  const [draftXGap, setDraftXGap] = useState(10);
  const [draftYGap, setDraftYGap] = useState(10);

  const hasChanges = draftXGap !== appliedXGap || draftYGap !== appliedYGap;

  const handleUpdate = () => {
    setAppliedXGap(draftXGap);
    setAppliedYGap(draftYGap);
  };

  const renderActivePlotter = () => {
    switch (activeTab) {
      case "Recharts":
        return <RechartsPlotter imageCount={imageCount} xGap={appliedXGap} yGap={appliedYGap} />;

      case "D3":
        return <D3Plotter imageCount={imageCount} xGap={appliedXGap} yGap={appliedYGap} />;

      case "PixiJS":
        return <PixiPlotter imageCount={imageCount} xGap={appliedXGap} yGap={appliedYGap} />;

      case "Konva":
        return <KonvaPlotter imageCount={imageCount} xGap={appliedXGap} yGap={appliedYGap} />;

      case "DeckGL":
        return <DeckGLPlotter imageCount={imageCount} xGap={appliedXGap} yGap={appliedYGap} />;

      case "ECharts":
        return <EChartsPlotter imageCount={imageCount} xGap={appliedXGap} yGap={appliedYGap} />;

      default:
        return <RechartsPlotter imageCount={imageCount} xGap={appliedXGap} yGap={appliedYGap} />;
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Image Plotting System PoC</h1>

      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <ImageCountSelector
        imageCount={imageCount}
        setImageCount={setImageCount}
      />

      <div style={{ display: "flex", gap: "20px", justifyContent: "center", marginBottom: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <label style={{ color: "#fff" }}>X Gap:</label>
          <input
            type="range"
            min="1"
            max="50"
            value={draftXGap}
            onChange={(e) => setDraftXGap(Number(e.target.value))}
          />
          <span style={{ color: "#888", width: "20px" }}>{draftXGap}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <label style={{ color: "#fff" }}>Y Gap:</label>
          <input
            type="range"
            min="1"
            max="50"
            value={draftYGap}
            onChange={(e) => setDraftYGap(Number(e.target.value))}
          />
          <span style={{ color: "#888", width: "20px" }}>{draftYGap}</span>
        </div>
        <button
          onClick={handleUpdate}
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

function PlaceholderPlotter({ libraryName }) {
  return (
    <div className="plotter-loading">
      {libraryName} plotter — coming soon (Phase 2/3)
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
import { computeImagePositions } from "../lib/gridLayout";
import { CELL_SIZE, PLOT_DIMENSIONS, PLOT_MARGIN } from "../lib/constants";
import PlotterControls from "./PlotterControls";

function D3Plotter({ imageCount, xGap, yGap }) {
  const { plotterPoints, isLoading, loadError } = usePlotterData();

  if (isLoading) return <div className="plotter-loading">Loading data…</div>;
  if (loadError) return <div className="plotter-error">Error: {loadError}</div>;

  return (
    <D3PlotCanvas plotterPoints={plotterPoints} imageCount={imageCount} xGap={xGap} yGap={yGap} />
  );
}

function D3PlotCanvas({ plotterPoints, imageCount, xGap, yGap }) {
  const svgRef = useRef(null);
  const tooltipRef = useRef(null);
  const zoomBehaviorRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(PLOT_DIMENSIONS.width);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        setContainerWidth(entry.contentRect.width);
      }
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    if (!svgRef.current || plotterPoints.length === 0) return;

    zoomBehaviorRef.current = renderPlot(
      svgRef.current,
      tooltipRef.current,
      plotterPoints,
      imageCount,
      containerWidth,
      xGap,
      yGap
    );
  }, [plotterPoints, imageCount, containerWidth, xGap, yGap]);

  const handleZoomIn = () => {
    if (zoomBehaviorRef.current && svgRef.current) {
      d3.select(svgRef.current).transition().call(zoomBehaviorRef.current.scaleBy, 1.5);
    }
  };

  const handleZoomOut = () => {
    if (zoomBehaviorRef.current && svgRef.current) {
      d3.select(svgRef.current).transition().call(zoomBehaviorRef.current.scaleBy, 1 / 1.5);
    }
  };

  const handleReset = () => {
    if (zoomBehaviorRef.current && svgRef.current) {
      d3.select(svgRef.current).transition().call(zoomBehaviorRef.current.transform, d3.zoomIdentity);
    }
  };

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      <PlotterControls
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
      />
      <svg ref={svgRef} />
      <div ref={tooltipRef} className="plotter-tooltip" style={{ display: "none" }} />
    </div>
  );
}

function renderPlot(svgElement, tooltipElement, plotterPoints, imageCount, containerWidth, xGap, yGap) {
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

  const zoomGroup = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

  const clipId = "plot-clip-" + Math.random().toString(36).slice(2);
  svg.append("defs")
    .append("clipPath")
    .attr("id", clipId)
    .append("rect")
    .attr("width", innerWidth)
    .attr("height", innerHeight);

  const plotGroup = zoomGroup.append("g").attr("clip-path", `url(#${clipId})`);
  const contentGroup = plotGroup.append("g");

  renderAxes(zoomGroup, xScale, yScale, innerWidth, innerHeight);
  renderGrid(contentGroup, xScale, yScale, innerWidth, innerHeight);
  renderImagePoints(contentGroup, plotterPoints, xScale, yScale, imageCount, tooltipElement);

  const zoomBehavior = d3.zoom()
    .scaleExtent([0.3, 10])
    .on("zoom", (event) => {
      const newXScale = event.transform.rescaleX(xScale);
      const newYScale = event.transform.rescaleY(yScale);

      contentGroup.attr("transform", event.transform);
      updateAxes(zoomGroup, newXScale, newYScale, innerWidth, innerHeight);
    });

  svg.call(zoomBehavior);
  return zoomBehavior;
}

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

function renderAxes(container, xScale, yScale, innerWidth, innerHeight) {
  container.append("g")
    .attr("class", "x-axis")
    .attr("transform", `translate(0,${innerHeight})`)
    .call(d3.axisBottom(xScale).ticks(8))
    .selectAll("text")
    .attr("fill", "#888");

  container.append("g")
    .attr("class", "y-axis")
    .call(d3.axisLeft(yScale).ticks(6))
    .selectAll("text")
    .attr("fill", "#888");

  container.selectAll(".x-axis line, .y-axis line").attr("stroke", "#555");
  container.selectAll(".x-axis path, .y-axis path").attr("stroke", "#555");
}

function updateAxes(container, newXScale, newYScale, innerWidth, innerHeight) {
  container.select(".x-axis").call(d3.axisBottom(newXScale).ticks(8));
  container.select(".y-axis").call(d3.axisLeft(newYScale).ticks(6));

  container.selectAll(".x-axis text, .y-axis text").attr("fill", "#888");
  container.selectAll(".x-axis line, .y-axis line").attr("stroke", "#555");
  container.selectAll(".x-axis path, .y-axis path").attr("stroke", "#555");
}

function renderGrid(container, xScale, yScale, innerWidth, innerHeight) {
  container.append("g")
    .attr("class", "grid-lines")
    .selectAll("line.horizontal")
    .data(yScale.ticks(6))
    .enter()
    .append("line")
    .attr("x1", 0)
    .attr("x2", innerWidth)
    .attr("y1", (tick) => yScale(tick))
    .attr("y2", (tick) => yScale(tick))
    .attr("stroke", "#2a2a3e")
    .attr("stroke-dasharray", "3 3");

  container.select(".grid-lines")
    .selectAll("line.vertical")
    .data(xScale.ticks(8))
    .enter()
    .append("line")
    .attr("x1", (tick) => xScale(tick))
    .attr("x2", (tick) => xScale(tick))
    .attr("y1", 0)
    .attr("y2", innerHeight)
    .attr("stroke", "#2a2a3e")
    .attr("stroke-dasharray", "3 3");
}

function renderImagePoints(container, plotterPoints, xScale, yScale, imageCount, tooltipElement) {
  const tooltip = d3.select(tooltipElement);

  plotterPoints.forEach((point) => {
    const centerX = xScale(point.x);
    const centerY = yScale(point.y);
    const positions = computeImagePositions(centerX, centerY, CELL_SIZE, CELL_SIZE, imageCount);

    const pointGroup = container.append("g").attr("class", "image-point");

    positions.forEach((position) => {
      pointGroup.append("image")
        .attr("href", point.image)
        .attr("x", position.x)
        .attr("y", position.y)
        .attr("width", position.width)
        .attr("height", position.height)
        .attr("preserveAspectRatio", "xMidYMid slice")
        .style("cursor", "pointer");
    });

    pointGroup
      .on("mouseenter", (event) => showTooltip(tooltip, event, point))
      .on("mousemove", (event) => moveTooltip(tooltip, event))
      .on("mouseleave", () => hideTooltip(tooltip));
  });
}

function showTooltip(tooltip, event, point) {
  tooltip
    .style("display", "block")
    .html(
      `<div class="tooltip-label">${point.label}</div>` +
      `<div class="tooltip-meta">` +
      `<span>Interval: ${point.meta.interval}s</span>` +
      `<span>Angle: ${point.meta.angle}°</span>` +
      `<span>Quality: ${point.meta.quality}</span>` +
      `</div>`
    );

  moveTooltip(tooltip, event);
}

function moveTooltip(tooltip, event) {
  const containerRect = event.currentTarget.closest(".viewer-container")?.getBoundingClientRect();
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

# src\components\DeckGLPlotter.jsx

```jsx
import { useState, useMemo, useCallback } from "react";
import DeckGL from "@deck.gl/react";
import { OrthographicView } from "@deck.gl/core";
import { IconLayer, LineLayer, TextLayer } from "@deck.gl/layers";
import { usePlotterData } from "../lib/plotterData";
import { computeImagePositions } from "../lib/gridLayout";
import { CELL_SIZE } from "../lib/constants";
import PlotterControls from "./PlotterControls";

const INITIAL_VIEW_STATE = {
  target: [15, 22, 0],
  zoom: 3,
  minZoom: -2,
  maxZoom: 10,
};

const ORTHOGRAPHIC_VIEW = new OrthographicView({
  id: "ortho-view",
  flipY: false,
});

function DeckGLPlotter({ imageCount, xGap, yGap }) {
  const { plotterPoints, isLoading, loadError } = usePlotterData();

  if (isLoading) return <div className="plotter-loading">Loading data…</div>;
  if (loadError) return <div className="plotter-error">Error: {loadError}</div>;

  return (
    <DeckGLCanvas plotterPoints={plotterPoints} imageCount={imageCount} xGap={xGap} yGap={yGap} />
  );
}

function DeckGLCanvas({ plotterPoints, imageCount, xGap, yGap }) {
  const [tooltipInfo, setTooltipInfo] = useState(null);
  const [viewState, setViewState] = useState(INITIAL_VIEW_STATE);

  const expandedIconData = useMemo(
    () => expandDataForMultiImage(plotterPoints, imageCount, xGap, yGap),
    [plotterPoints, imageCount, xGap, yGap]
  );

  const iconLayer = useMemo(
    () => createIconLayer(expandedIconData),
    [expandedIconData]
  );

  const axesLayers = useMemo(
    () => createAxesLayers(plotterPoints, xGap, yGap),
    [plotterPoints, xGap, yGap]
  );

  const handleHover = useCallback((info) => {
    if (info.object) {
      setTooltipInfo({
        x: info.x,
        y: info.y,
        object: info.object,
      });
    } else {
      setTooltipInfo(null);
    }
  }, []);

  const handleZoomIn = () => setViewState((v) => ({ ...v, zoom: Math.min(v.zoom + 1, v.maxZoom) }));
  const handleZoomOut = () => setViewState((v) => ({ ...v, zoom: Math.max(v.zoom - 1, v.minZoom) }));
  const handleReset = () => setViewState(INITIAL_VIEW_STATE);

  return (
    <div style={{ position: "relative", height: 550, background: "#16213e" }}>
      <PlotterControls
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
      />
      <DeckGL
        views={ORTHOGRAPHIC_VIEW}
        viewState={viewState}
        onViewStateChange={({ viewState }) => setViewState(viewState)}
        controller
        layers={[...axesLayers, iconLayer]}
        onHover={handleHover}
        style={{ position: "relative", height: "100%" }}
      />
      {tooltipInfo && (
        <DeckGLTooltip tooltipInfo={tooltipInfo} />
      )}
    </div>
  );
}

function expandDataForMultiImage(plotterPoints, imageCount, xGap, yGap) {
  const expandedEntries = [];
  const scaleFactor = 2;
  const xSpacingScale = xGap / 10;
  const ySpacingScale = yGap / 10;

  plotterPoints.forEach((point) => {
    const cellSize = CELL_SIZE / scaleFactor;
    const positions = computeImagePositions(
      point.x * xSpacingScale,
      point.y * ySpacingScale,
      cellSize,
      cellSize,
      imageCount
    );

    positions.forEach((position, index) => {
      expandedEntries.push({
        id: `${point.id}-sub-${index}`,
        position: [
          position.x + position.width / 2,
          position.y + position.height / 2,
        ],
        width: position.width,
        height: position.height,
        image: point.image,
        label: point.label,
        meta: point.meta,
      });
    });
  });

  return expandedEntries;
}

function createIconLayer(expandedIconData) {
  return new IconLayer({
    id: "image-icon-layer",
    data: expandedIconData,
    getPosition: (entry) => entry.position,
    getIcon: (entry) => ({
      url: entry.image,
      width: 128,
      height: 128,
    }),
    getSize: 20,
    sizeUnits: "common",
    pickable: true,
    sizeScale: 1,
  });
}

function createAxesLayers(plotterPoints, xGap, yGap) {
  if (plotterPoints.length === 0) return [];
  const xValues = plotterPoints.map((p) => p.x);
  const yValues = plotterPoints.map((p) => p.y);
  const xMin = Math.min(...xValues);
  const xMax = Math.max(...xValues);
  const yMin = Math.min(...yValues);
  const yMax = Math.max(...yValues);
  const padX = (xMax - xMin) * 0.1 || 5;
  const padY = (yMax - yMin) * 0.1 || 5;

  const xSpacingScale = xGap / 10;
  const ySpacingScale = yGap / 10;

  const lines = [];
  const texts = [];

  const tickCount = 5;
  for (let i = 0; i <= tickCount; i++) {
    const x = xMin - padX + ((xMax - xMin + padX * 2) * i) / tickCount;
    const scaledX = x * xSpacingScale;
    lines.push({
      sourcePosition: [scaledX, (yMin - padY) * ySpacingScale],
      targetPosition: [scaledX, (yMax + padY) * ySpacingScale]
    });
    texts.push({ position: [scaledX, (yMax + padY + 2) * ySpacingScale], text: Math.round(x).toString() });
  }

  for (let i = 0; i <= tickCount; i++) {
    const y = yMin - padY + ((yMax - yMin + padY * 2) * i) / tickCount;
    const scaledY = y * ySpacingScale;
    lines.push({
      sourcePosition: [(xMin - padX) * xSpacingScale, scaledY],
      targetPosition: [(xMax + padX) * xSpacingScale, scaledY]
    });
    texts.push({ position: [(xMin - padX - 2) * xSpacingScale, scaledY], text: Math.round(y).toString() });
  }

  return [
    new LineLayer({
      id: "grid-lines",
      data: lines,
      getSourcePosition: (d) => d.sourcePosition,
      getTargetPosition: (d) => d.targetPosition,
      getColor: [42, 42, 62],
      getWidth: 1,
      widthUnits: "pixels",
    }),
    new TextLayer({
      id: "axis-labels",
      data: texts,
      getPosition: (d) => d.position,
      getText: (d) => d.text,
      getSize: 12,
      getColor: [136, 136, 136],
      sizeUnits: "pixels",
    }),
  ];
}

function DeckGLTooltip({ tooltipInfo }) {
  const { x, y, object } = tooltipInfo;

  return (
    <div
      className="plotter-tooltip"
      style={{
        display: "block",
        left: x + 12,
        top: y - 10,
      }}
    >
      <div className="tooltip-label">{object.label}</div>
      <div className="tooltip-meta">
        <span>Interval: {object.meta.interval}s</span>
        <span>Angle: {object.meta.angle}°</span>
        <span>Quality: {object.meta.quality}</span>
      </div>
    </div>
  );
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
    <EChartsCanvas plotterPoints={plotterPoints} imageCount={imageCount} xGap={xGap} yGap={yGap} />
  );
}

function EChartsCanvas({ plotterPoints, imageCount, xGap, yGap }) {
  const echartsRef = useRef(null);

  const chartOption = useMemo(
    () => buildChartOption(plotterPoints, imageCount, xGap, yGap),
    [plotterPoints, imageCount, xGap, yGap]
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
      type: 'dataZoom',
      start: Math.max(0, center - newRange / 2),
      end: Math.min(100, center + newRange / 2)
    });
  };

  const handleReset = () => {
    if (!echartsRef.current) return;
    const instance = echartsRef.current.getEchartsInstance();
    instance.dispatchAction({ type: 'dataZoom', start: 0, end: 100 });
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

              const xPos = col * (subCellWidth + xGap) - ((gridConfig.columns - 1) * (subCellWidth + xGap)) / 2;
              const yPos = row * (subCellHeight + yGap) - ((gridConfig.rows - 1) * (subCellHeight + yGap)) / 2;

              children.push({
                type: "image",
                style: {
                  image: api.value(2),
                  x: coord[0] + xPos - subCellWidth / 2,
                  y: coord[1] + yPos - subCellHeight / 2,
                  width: subCellWidth,
                  height: subCellHeight,
                }
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
import { IMAGE_COUNTS } from "../lib/constants";

function ImageCountSelector({ imageCount, setImageCount }) {
  return (
    <div className="image-count-selector">
      <span className="selector-label">Images per point:</span>
      {IMAGE_COUNTS.map((count) => (
        <button
          key={count}
          className={`count-button ${imageCount === count ? "active" : ""}`}
          onClick={() => setImageCount(count)}
        >
          {count}
        </button>
      ))}
    </div>
  );
}

export default ImageCountSelector;

```

---

# src\components\KonvaPlotter.jsx

```jsx
import { useState, useRef, useCallback, useEffect } from "react";
import { Stage, Layer, Image as KonvaImage, Text, Line, Rect, Group } from "react-konva";
import { usePlotterData } from "../lib/plotterData";
import { computeImagePositions } from "../lib/gridLayout";
import { CELL_SIZE, PLOT_DIMENSIONS, PLOT_MARGIN } from "../lib/constants";
import PlotterControls from "./PlotterControls";

const AXIS_TICK_COUNT = 8;
const EXTENT_PADDING_RATIO = 0.2;
const EXTENT_FALLBACK_PADDING = 5;
const ZOOM_STEP = 1.5;
const PINCH_ZOOM_SENSITIVITY = 0.01;
const ZOOM_MIN = 0.3;
const ZOOM_MAX = 10;
const GRID_COLOR = "#2a2a3e";
const AXIS_LINE_COLOR = "#555555";
const TICK_LABEL_COLOR = "#aaaaaa";
const TICK_LABEL_FONT_SIZE = 11;

function KonvaPlotter({ imageCount, xGap, yGap }) {
  const { plotterPoints, isLoading, loadError } = usePlotterData();

  if (isLoading) return <div className="plotter-loading">Loading data…</div>;
  if (loadError) return <div className="plotter-error">Error: {loadError}</div>;

  return (
    <KonvaCanvas
      plotterPoints={plotterPoints}
      imageCount={imageCount}
      xGap={xGap}
      yGap={yGap}
    />
  );
}

function KonvaCanvas({ plotterPoints, imageCount, xGap, yGap }) {
  const [contentScale, setContentScale] = useState(1);
  const [contentOffset, setContentOffset] = useState({ x: 0, y: 0 });
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const draggableGroupRef = useRef(null);
  const stageRef = useRef(null);

  const innerWidth = PLOT_DIMENSIONS.width - PLOT_MARGIN.left - PLOT_MARGIN.right;
  const innerHeight = PLOT_DIMENSIONS.height - PLOT_MARGIN.top - PLOT_MARGIN.bottom;

  const { xScale, yScale, xExtent, yExtent } = buildScales(
    plotterPoints,
    innerWidth,
    innerHeight
  );

  const visibleDomain = computeVisibleDomain(
    xExtent,
    yExtent,
    contentOffset,
    contentScale,
    innerWidth,
    innerHeight
  );

  const handleWheel = useCallback(
    (event) => {
      event.evt.preventDefault();
      const stage = event.target.getStage();
      const pointerPosition = stage.getPointerPosition();

      if (!isPointerInsidePlotArea(pointerPosition, innerWidth, innerHeight)) return;

      const nativeEvent = event.evt;
      const isPinchGesture = nativeEvent.ctrlKey;
      const scaleDelta = computeWheelScaleDelta(nativeEvent.deltaY, isPinchGesture);
      const newScale = clampScale(contentScale * scaleDelta);

      const mouseRelX = pointerPosition.x - PLOT_MARGIN.left - contentOffset.x;
      const mouseRelY = pointerPosition.y - PLOT_MARGIN.top - contentOffset.y;

      const nextOffsetX = contentOffset.x - mouseRelX * (newScale / contentScale - 1);
      const nextOffsetY = contentOffset.y - mouseRelY * (newScale / contentScale - 1);

      const clampedOffset = clampContentOffset(nextOffsetX, nextOffsetY, newScale, innerWidth, innerHeight);

      setContentScale(newScale);
      setContentOffset(clampedOffset);
    },
    [contentScale, contentOffset, innerWidth, innerHeight]
  );

  const handleContentDragStart = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleContentDragMove = useCallback(
    (event) => {
      const node = event.target;
      const offsetX = node.x() - PLOT_MARGIN.left;
      const offsetY = node.y() - PLOT_MARGIN.top;

      const clamped = clampContentOffset(offsetX, offsetY, contentScale, innerWidth, innerHeight);

      node.x(PLOT_MARGIN.left + clamped.x);
      node.y(PLOT_MARGIN.top + clamped.y);
    },
    [contentScale, innerWidth, innerHeight]
  );

  const handleContentDragEnd = useCallback(
    (event) => {
      setIsDragging(false);
      const nodeX = event.target.x();
      const nodeY = event.target.y();
      setContentOffset({
        x: nodeX - PLOT_MARGIN.left,
        y: nodeY - PLOT_MARGIN.top,
      });
    },
    []
  );

  const handleZoomIn = useCallback(() => {
    const centerX = innerWidth / 2;
    const centerY = innerHeight / 2;
    const newScale = clampScale(contentScale * ZOOM_STEP);

    const nextOffsetX = contentOffset.x - centerX * (newScale / contentScale - 1);
    const nextOffsetY = contentOffset.y - centerY * (newScale / contentScale - 1);
    const clampedOffset = clampContentOffset(nextOffsetX, nextOffsetY, newScale, innerWidth, innerHeight);

    setContentScale(newScale);
    setContentOffset(clampedOffset);
  }, [contentScale, contentOffset, innerWidth, innerHeight]);

  const handleZoomOut = useCallback(() => {
    const centerX = innerWidth / 2;
    const centerY = innerHeight / 2;
    const newScale = clampScale(contentScale / ZOOM_STEP);

    const nextOffsetX = contentOffset.x - centerX * (newScale / contentScale - 1);
    const nextOffsetY = contentOffset.y - centerY * (newScale / contentScale - 1);
    const clampedOffset = clampContentOffset(nextOffsetX, nextOffsetY, newScale, innerWidth, innerHeight);

    setContentScale(newScale);
    setContentOffset(clampedOffset);
  }, [contentScale, contentOffset, innerWidth, innerHeight]);

  const handleReset = useCallback(() => {
    setContentScale(1);
    setContentOffset({ x: 0, y: 0 });
  }, []);

  const stageCursor = isDragging ? "grabbing" : contentScale > 1 ? "grab" : "default";

  return (
    <div style={{ position: "relative" }}>
      <PlotterControls
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
        zoomLevel={contentScale}
      />
      <Stage
        ref={stageRef}
        width={PLOT_DIMENSIONS.width}
        height={PLOT_DIMENSIONS.height}
        onWheel={handleWheel}
        style={{ cursor: stageCursor }}
      >
        {/* Static axis layer — grid, labels, border (not affected by zoom/pan) */}
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

        {/* Clipped content layer — images are clipped to the plot area */}
        <Layer>
          <ClippedContentGroup
            innerWidth={innerWidth}
            innerHeight={innerHeight}
            contentOffset={contentOffset}
            contentScale={contentScale}
            draggableGroupRef={draggableGroupRef}
            onDragStart={handleContentDragStart}
            onDragMove={handleContentDragMove}
            onDragEnd={handleContentDragEnd}
          >
            {plotterPoints.map((point) => (
              <ImagePointGroup
                key={point.id}
                point={point}
                xScale={xScale}
                yScale={yScale}
                imageCount={imageCount}
                onHover={setHoveredPoint}
                onCursorMove={setCursorPosition}
              />
            ))}
          </ClippedContentGroup>
        </Layer>
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

function ClippedContentGroup({
  innerWidth,
  innerHeight,
  contentOffset,
  contentScale,
  draggableGroupRef,
  onDragStart,
  onDragMove,
  onDragEnd,
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
        ref={draggableGroupRef}
        x={plotLeft + contentOffset.x}
        y={plotTop + contentOffset.y}
        scaleX={contentScale}
        scaleY={contentScale}
        draggable
        onDragStart={onDragStart}
        onDragMove={onDragMove}
        onDragEnd={onDragEnd}
      >
        {/* Invisible hit area so drag works from any empty space in the plot */}
        <Rect
          x={0}
          y={0}
          width={innerWidth}
          height={innerHeight}
          fill="transparent"
          listening={true}
        />
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
  const xTicks = buildTicks(visibleDomain.xMin, visibleDomain.xMax, AXIS_TICK_COUNT);
  const yTicks = buildTicks(visibleDomain.yMin, visibleDomain.yMax, AXIS_TICK_COUNT);

  const xScreenScale = buildLinearScale(visibleDomain.xMin, visibleDomain.xMax, 0, innerWidth);
  const yScreenScale = buildLinearScale(visibleDomain.yMin, visibleDomain.yMax, innerHeight, 0);

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
      />
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
      />
    );
  });

  return <>{gridLines}</>;
}

function AxisLabels({ visibleDomain, innerWidth, innerHeight }) {
  const xTicks = buildTicks(visibleDomain.xMin, visibleDomain.xMax, AXIS_TICK_COUNT);
  const yTicks = buildTicks(visibleDomain.yMin, visibleDomain.yMax, AXIS_TICK_COUNT);

  const xScreenScale = buildLinearScale(visibleDomain.xMin, visibleDomain.xMax, 0, innerWidth);
  const yScreenScale = buildLinearScale(visibleDomain.yMin, visibleDomain.yMax, innerHeight, 0);

  const tickLabels = [];

  xTicks.forEach((value, index) => {
    const xPos = PLOT_MARGIN.left + xScreenScale(value);
    if (xPos < PLOT_MARGIN.left - 5 || xPos > PLOT_MARGIN.left + innerWidth + 5) return;
    tickLabels.push(
      <Text
        key={`xlabel-${index}`}
        text={formatTickLabel(value)}
        x={xPos - 14}
        y={PLOT_MARGIN.top + innerHeight + 6}
        fill={TICK_LABEL_COLOR}
        fontSize={TICK_LABEL_FONT_SIZE}
        listening={false}
      />
    );
  });

  yTicks.forEach((value, index) => {
    const yPos = PLOT_MARGIN.top + yScreenScale(value);
    if (yPos < PLOT_MARGIN.top - 5 || yPos > PLOT_MARGIN.top + innerHeight + 5) return;
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
      />
    );
  });

  return <>{tickLabels}</>;
}

function ImagePointGroup({ point, xScale, yScale, imageCount, onHover, onCursorMove }) {
  const centerX = xScale(point.x);
  const centerY = yScale(point.y);
  const positions = computeImagePositions(centerX, centerY, CELL_SIZE, CELL_SIZE, imageCount);

  return (
    <>
      {positions.map((position, index) => (
        <KonvaImageFromUrl
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

function KonvaImageFromUrl({ imageUrl, x, y, width, height, point, onHover, onCursorMove }) {
  const [loadedImage, setLoadedImage] = useState(null);

  useEffect(() => {
    const htmlImage = new window.Image();
    htmlImage.crossOrigin = "anonymous";
    htmlImage.src = imageUrl;
    htmlImage.onload = () => setLoadedImage(htmlImage);
    return () => { htmlImage.onload = null; };
  }, [imageUrl]);

  const handleMouseEnter = useCallback(
    (event) => {
      const stage = event.target.getStage();
      const pointer = stage.getPointerPosition();
      onCursorMove({ x: pointer.x, y: pointer.y });
      onHover(point);
    },
    [point, onHover, onCursorMove]
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

/* ─── Pure utility functions ──────────────────────────────────────────── */

function isPointerInsidePlotArea(pointerPosition, plotInnerWidth, plotInnerHeight) {
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

function clampContentOffset(rawX, rawY, scale, plotInnerWidth, plotInnerHeight) {
  const scaledWidth = plotInnerWidth * scale;
  const scaledHeight = plotInnerHeight * scale;

  let clampedX = rawX;
  let clampedY = rawY;

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

  const xPadding = (xMax - xMin) * EXTENT_PADDING_RATIO || EXTENT_FALLBACK_PADDING;
  const yPadding = (yMax - yMin) * EXTENT_PADDING_RATIO || EXTENT_FALLBACK_PADDING;

  const xExtent = [xMin - xPadding, xMax + xPadding];
  const yExtent = [yMin - yPadding, yMax + yPadding];

  const xScale = buildLinearScale(xExtent[0], xExtent[1], 0, plotInnerWidth);
  const yScale = buildLinearScale(yExtent[0], yExtent[1], plotInnerHeight, 0);

  return { xScale, yScale, xExtent, yExtent };
}

function computeVisibleDomain(xExtent, yExtent, contentOffset, scale, plotInnerWidth, plotInnerHeight) {
  const domainWidth = xExtent[1] - xExtent[0];
  const domainHeight = yExtent[1] - yExtent[0];

  const xMin = xExtent[0] - (contentOffset.x / scale / plotInnerWidth) * domainWidth;
  const xMax = xMin + domainWidth / scale;

  const yMax = yExtent[1] + (contentOffset.y / scale / plotInnerHeight) * domainHeight;
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
  const step = niceSteps.map((s) => s * magnitude).find((s) => s >= rawStep) ?? rawStep;

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
import { LIBRARIES } from "../lib/constants";

function Navbar({ activeTab, setActiveTab }) {
  return (
    <div className="tab-container">
      {LIBRARIES.map((libraryName) => (
        <button
          key={libraryName}
          className={`tab-button ${activeTab === libraryName ? "active" : ""}`}
          onClick={() => setActiveTab(libraryName)}
        >
          {libraryName}
        </button>
      ))}
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
  Sprite,
  Container,
  Text as PixiText,
  Graphics,
  Assets,
} from "pixi.js";
import { usePlotterData } from "../lib/plotterData";
import { computeImagePositions } from "../lib/gridLayout";
import { CELL_SIZE, PLOT_DIMENSIONS, PLOT_MARGIN } from "../lib/constants";
import PlotterControls from "./PlotterControls";

const AXIS_TICK_COUNT = 5;
const TICK_LABEL_COLOR = "#888888";
const TICK_LABEL_SIZE = 11;
const GRID_COLOR = 0x333333;
const GRID_ALPHA = 0.6;
const AXIS_BORDER_COLOR = 0x555555;
const EXTENT_PADDING_RATIO = 0.2;
const EXTENT_FALLBACK_PADDING = 5;
const ZOOM_STEP = 1.5;
const ZOOM_MIN = 0.3;
const ZOOM_MAX = 10;

function PixiPlotter({ imageCount, xGap, yGap }) {
  const { plotterPoints, isLoading, loadError } = usePlotterData();

  if (isLoading) return <div className="plotter-loading">Loading data…</div>;
  if (loadError) return <div className="plotter-error">Error: {loadError}</div>;

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
  const canvasContainerRef = useRef(null);
  const pixiAppRef = useRef(null);
  const contentLayerRef = useRef(null);
  const axesLayerRef = useRef(null);
  const tooltipRef = useRef(null);
  const scaleRef = useRef(1);
  const panOffsetRef = useRef({ x: 0, y: 0 });
  const dragStartRef = useRef({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isAppReady, setIsAppReady] = useState(false);

  const innerWidth = PLOT_DIMENSIONS.width - PLOT_MARGIN.left - PLOT_MARGIN.right;
  const innerHeight = PLOT_DIMENSIONS.height - PLOT_MARGIN.top - PLOT_MARGIN.bottom;

  useEffect(() => {
    let cancelled = false;

    async function bootstrapPixi() {
      if (!canvasContainerRef.current || pixiAppRef.current) return;

      const pixiApplication = new PixiApp();
      await pixiApplication.init({
        width: PLOT_DIMENSIONS.width,
        height: PLOT_DIMENSIONS.height,
        background: 0x16213e,
        antialias: true,
      });

      if (cancelled) {
        pixiApplication.destroy(true);
        return;
      }

      canvasContainerRef.current.appendChild(pixiApplication.canvas);
      pixiAppRef.current = pixiApplication;

      const axesLayer = new Container();
      axesLayer.x = PLOT_MARGIN.left;
      axesLayer.y = PLOT_MARGIN.top;
      pixiApplication.stage.addChild(axesLayer);
      axesLayerRef.current = axesLayer;

      const contentLayer = new Container();
      contentLayer.x = PLOT_MARGIN.left;
      contentLayer.y = PLOT_MARGIN.top;
      pixiApplication.stage.addChild(contentLayer);
      contentLayerRef.current = contentLayer;

      setIsAppReady(true);
    }

    bootstrapPixi();

    return () => {
      cancelled = true;
      if (pixiAppRef.current) {
        pixiAppRef.current.destroy(true);
        pixiAppRef.current = null;
        contentLayerRef.current = null;
        axesLayerRef.current = null;
        setIsAppReady(false);
      }
    };
  }, []);

  useEffect(() => {
    if (!isAppReady || !contentLayerRef.current || !axesLayerRef.current) return;
    if (plotterPoints.length === 0) return;

    contentLayerRef.current.removeChildren();
    axesLayerRef.current.removeChildren();

    const xExtent = computeExtent(plotterPoints, "x");
    const yExtent = computeExtent(plotterPoints, "y");

    const xScale = buildLinearScale(xExtent[0], xExtent[1], 0, innerWidth);
    const yScale = buildLinearScale(yExtent[0], yExtent[1], innerHeight, 0);

    drawGrid(axesLayerRef.current, xScale, yScale, xExtent, yExtent, innerWidth, innerHeight);
    drawAxesLabels(axesLayerRef.current, xScale, yScale, xExtent, yExtent, innerHeight);

    const uniqueImageUrls = [...new Set(plotterPoints.map((point) => point.image))];

    Assets.load(uniqueImageUrls).then(() => {
      if (!contentLayerRef.current) return;
      drawDataPoints(contentLayerRef.current, plotterPoints, xScale, yScale, imageCount, tooltipRef);
    });
  }, [isAppReady, plotterPoints, imageCount, xGap, yGap, innerWidth, innerHeight]);

  const handleWheel = useCallback((event) => {
    event.preventDefault();
    if (!contentLayerRef.current) return;

    const scaleDelta = event.deltaY > 0 ? 1 / ZOOM_STEP : ZOOM_STEP;
    const newScale = Math.max(ZOOM_MIN, Math.min(scaleRef.current * scaleDelta, ZOOM_MAX));
    scaleRef.current = newScale;
    contentLayerRef.current.scale.set(newScale);
  }, []);

  const handleMouseDown = useCallback((event) => {
    setIsDragging(true);
    dragStartRef.current = {
      x: event.clientX - panOffsetRef.current.x,
      y: event.clientY - panOffsetRef.current.y,
    };
  }, []);

  const handleMouseMove = useCallback(
    (event) => {
      if (!isDragging || !contentLayerRef.current) return;

      const newOffsetX = event.clientX - dragStartRef.current.x;
      const newOffsetY = event.clientY - dragStartRef.current.y;
      panOffsetRef.current = { x: newOffsetX, y: newOffsetY };

      contentLayerRef.current.x = PLOT_MARGIN.left + newOffsetX;
      contentLayerRef.current.y = PLOT_MARGIN.top + newOffsetY;
    },
    [isDragging]
  );

  const handleMouseUp = useCallback(() => setIsDragging(false), []);

  const handleZoomIn = useCallback(() => {
    const newScale = Math.min(scaleRef.current * ZOOM_STEP, ZOOM_MAX);
    scaleRef.current = newScale;
    if (contentLayerRef.current) contentLayerRef.current.scale.set(newScale);
  }, []);

  const handleZoomOut = useCallback(() => {
    const newScale = Math.max(scaleRef.current / ZOOM_STEP, ZOOM_MIN);
    scaleRef.current = newScale;
    if (contentLayerRef.current) contentLayerRef.current.scale.set(newScale);
  }, []);

  const handleReset = useCallback(() => {
    scaleRef.current = 1;
    panOffsetRef.current = { x: 0, y: 0 };
    if (contentLayerRef.current) {
      contentLayerRef.current.scale.set(1);
      contentLayerRef.current.x = PLOT_MARGIN.left;
      contentLayerRef.current.y = PLOT_MARGIN.top;
    }
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <PlotterControls
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
      />
      <div
        ref={canvasContainerRef}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
      />
      <div
        ref={tooltipRef}
        className="plotter-tooltip"
        style={{ display: "none", position: "absolute", pointerEvents: "none" }}
      />
    </div>
  );
}

function drawGrid(axesLayer, xScale, yScale, xExtent, yExtent, innerWidth, innerHeight) {
  const grid = new Graphics();

  for (let i = 0; i <= AXIS_TICK_COUNT; i++) {
    const xValue = xExtent[0] + (xExtent[1] - xExtent[0]) * (i / AXIS_TICK_COUNT);
    const xPos = xScale(xValue);
    grid.moveTo(xPos, 0);
    grid.lineTo(xPos, innerHeight);
  }

  for (let i = 0; i <= AXIS_TICK_COUNT; i++) {
    const yValue = yExtent[0] + (yExtent[1] - yExtent[0]) * (i / AXIS_TICK_COUNT);
    const yPos = yScale(yValue);
    grid.moveTo(0, yPos);
    grid.lineTo(innerWidth, yPos);
  }

  grid.stroke({ width: 1, color: GRID_COLOR, alpha: GRID_ALPHA });

  const border = new Graphics();
  border.rect(0, 0, innerWidth, innerHeight);
  border.stroke({ width: 1, color: AXIS_BORDER_COLOR });

  axesLayer.addChild(grid);
  axesLayer.addChild(border);
}

function drawAxesLabels(axesLayer, xScale, yScale, xExtent, yExtent, innerHeight) {
  for (let i = 0; i <= AXIS_TICK_COUNT; i++) {
    const xValue = xExtent[0] + (xExtent[1] - xExtent[0]) * (i / AXIS_TICK_COUNT);
    const xPos = xScale(xValue);

    const xLabel = new PixiText({
      text: Math.round(xValue).toString(),
      style: { fill: TICK_LABEL_COLOR, fontSize: TICK_LABEL_SIZE },
    });
    xLabel.x = xPos - xLabel.width / 2;
    xLabel.y = innerHeight + 6;
    axesLayer.addChild(xLabel);
  }

  for (let i = 0; i <= AXIS_TICK_COUNT; i++) {
    const yValue = yExtent[0] + (yExtent[1] - yExtent[0]) * (i / AXIS_TICK_COUNT);
    const yPos = yScale(yValue);

    const yLabel = new PixiText({
      text: Math.round(yValue).toString(),
      style: { fill: TICK_LABEL_COLOR, fontSize: TICK_LABEL_SIZE },
    });
    yLabel.x = -yLabel.width - 6;
    yLabel.y = yPos - yLabel.height / 2;
    axesLayer.addChild(yLabel);
  }
}

function drawDataPoints(contentLayer, plotterPoints, xScale, yScale, imageCount, tooltipRef) {
  plotterPoints.forEach((point) => {
    const centerX = xScale(point.x);
    const centerY = yScale(point.y);
    const positions = computeImagePositions(centerX, centerY, CELL_SIZE, CELL_SIZE, imageCount);

    positions.forEach((position) => {
      const sprite = Sprite.from(point.image);
      sprite.x = position.x;
      sprite.y = position.y;
      sprite.width = position.width;
      sprite.height = position.height;
      sprite.eventMode = "static";
      sprite.cursor = "pointer";

      sprite.on("pointerenter", (event) => showPixiTooltip(tooltipRef.current, event, point));
      sprite.on("pointerleave", () => hidePixiTooltip(tooltipRef.current));

      contentLayer.addChild(sprite);
    });
  });
}

function computeExtent(dataPoints, key) {
  const values = dataPoints.map((point) => point[key]);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const padding = (max - min) * EXTENT_PADDING_RATIO || EXTENT_FALLBACK_PADDING;
  return [min - padding, max + padding];
}

function buildLinearScale(domainMin, domainMax, rangeMin, rangeMax) {
  return (value) => {
    const ratio = (value - domainMin) / (domainMax - domainMin);
    return rangeMin + ratio * (rangeMax - rangeMin);
  };
}

function showPixiTooltip(tooltipElement, event, point) {
  if (!tooltipElement) return;

  const globalPosition = event.global ?? event.data?.global;
  if (globalPosition) {
    tooltipElement.style.left = `${globalPosition.x + 15}px`;
    tooltipElement.style.top = `${globalPosition.y - 10}px`;
  }

  tooltipElement.style.display = "block";
  tooltipElement.innerHTML =
    `<div class="tooltip-label">${point.label}</div>` +
    `<div class="tooltip-meta">` +
    `<span>Interval: ${point.meta.interval}s</span>` +
    `<span>Angle: ${point.meta.angle}°</span>` +
    `<span>Quality: ${point.meta.quality}</span>` +
    `</div>`;
}

function hidePixiTooltip(tooltipElement) {
  if (!tooltipElement) return;
  tooltipElement.style.display = "none";
}

export default PixiPlotter;

```

---

# src\components\PlotterControls.jsx

```jsx
export default function PlotterControls({ onZoomIn, onZoomOut, onReset, zoomLevel }) {
  return (
    <div className="zoom-controls">
      <button className="zoom-button" onClick={onZoomIn}>+</button>
      <button className="zoom-button" onClick={onZoomOut}>−</button>
      <button className="zoom-button" onClick={onReset}>Reset</button>
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
import { useState, useCallback, useRef } from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { usePlotterData } from "../lib/plotterData";
import { computeImagePositions } from "../lib/gridLayout";
import { CELL_SIZE, PLOT_MARGIN } from "../lib/constants";
import PlotterControls from "./PlotterControls";

const ZOOM_STEP = 1.5;
const ZOOM_MIN = 0.3;
const ZOOM_MAX = 8;
const DOMAIN_PADDING_UNITS = 1;
const CLIP_PATH_ID = "recharts-plot-clip";

function RechartsPlotter({ imageCount, xGap, yGap }) {
  const { plotterPoints, isLoading, loadError } = usePlotterData();
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoomIn = useCallback(
    () => setZoomLevel((prev) => Math.min(prev * ZOOM_STEP, ZOOM_MAX)),
    []
  );

  const handleZoomOut = useCallback(
    () => setZoomLevel((prev) => Math.max(prev / ZOOM_STEP, ZOOM_MIN)),
    []
  );

  const handleReset = useCallback(() => setZoomLevel(1), []);

  if (isLoading) return <div className="plotter-loading">Loading data…</div>;
  if (loadError) return <div className="plotter-error">Error: {loadError}</div>;

  return (
    <div>
      <PlotterControls
        zoomLevel={zoomLevel}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
      />
      <PlotArea
        plotterPoints={plotterPoints}
        imageCount={imageCount}
        zoomLevel={zoomLevel}
        xGap={xGap}
        yGap={yGap}
      />
    </div>
  );
}

function buildAxisDomain(values, zoomLevel, padding) {
  const dataMin = Math.min(...values);
  const dataMax = Math.max(...values);
  const center = (dataMin + dataMax) / 2;
  const halfSpan = ((dataMax - dataMin) / 2 + padding) / zoomLevel;
  return [center - halfSpan, center + halfSpan];
}

function PlotArea({ plotterPoints, imageCount, zoomLevel, xGap, yGap }) {
  const containerRef = useRef(null);
  const xValues = plotterPoints.map((point) => point.x);
  const yValues = plotterPoints.map((point) => point.y);

  const domainX = buildAxisDomain(xValues, zoomLevel, DOMAIN_PADDING_UNITS);
  const domainY = buildAxisDomain(yValues, zoomLevel, DOMAIN_PADDING_UNITS);

  const renderCustomShape = useCallback(
    (shapeProps) => {
      const { cx, cy, payload } = shapeProps;
      const positions = computeImagePositions(
        cx,
        cy,
        CELL_SIZE,
        CELL_SIZE,
        imageCount
      );

      return (
        <g clipPath={`url(#${CLIP_PATH_ID})`}>
          {positions.map((position, index) => (
            <image
              key={`${payload.id}-${index}`}
              href={payload.image}
              x={position.x}
              y={position.y}
              width={position.width}
              height={position.height}
              preserveAspectRatio="xMidYMid slice"
            />
          ))}
        </g>
      );
    },
    [imageCount]
  );

  const chartHeight = 500;
  const plotWidth =
    (containerRef.current?.offsetWidth ?? 900) -
    PLOT_MARGIN.left -
    PLOT_MARGIN.right;
  const plotHeight = chartHeight - PLOT_MARGIN.top - PLOT_MARGIN.bottom;

  return (
    <div ref={containerRef}>
      <ResponsiveContainer width="100%" height={chartHeight}>
        <ScatterChart margin={PLOT_MARGIN}>
          <defs>
            <clipPath id={CLIP_PATH_ID}>
              <rect x={0} y={0} width={plotWidth} height={plotHeight} />
            </clipPath>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis
            type="number"
            dataKey="x"
            domain={domainX}
            tick={{ fill: "#888", fontSize: 12 }}
            stroke="#555"
            name="X"
          />
          <YAxis
            type="number"
            dataKey="y"
            domain={domainY}
            tick={{ fill: "#888", fontSize: 12 }}
            stroke="#555"
            name="Y"
          />
          <Tooltip content={<MetadataTooltip />} />
          <Scatter
            key={`scatter-${imageCount}-${zoomLevel}-${xGap}-${yGap}`}
            data={plotterPoints}
            shape={renderCustomShape}
          />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}

function MetadataTooltip({ active, payload }) {
  if (!active || !payload || payload.length === 0) return null;

  const dataPoint = payload[0].payload;

  return (
    <div className="plotter-tooltip">
      <div className="tooltip-label">{dataPoint.label}</div>
      <div className="tooltip-meta">
        <span>Interval: {dataPoint.meta.interval}s</span>
        <span>Angle: {dataPoint.meta.angle}°</span>
        <span>Quality: {dataPoint.meta.quality}</span>
      </div>
    </div>
  );
}

export default RechartsPlotter;

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

export const IMAGE_COUNTS = [1, 2, 4, 8];

export const CELL_SIZE = 50;

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

```

---

# src\lib\gridLayout.js

```javascript
/**
 * Computes sub-image positions within a cell for multi-image rendering.
 *
 * Given an imageCount (1, 2, 4, or 8), returns an array of
 * { offsetX, offsetY, width, height } objects describing
 * each sub-image's position relative to the cell center.
 */
export function computeGridOffsets(cellWidth, cellHeight, imageCount) {
  const gridConfig = getGridConfig(imageCount);
  const subWidth = cellWidth;
  const subHeight = cellHeight;
  const offsets = [];

  for (let row = 0; row < gridConfig.rows; row++) {
    for (let col = 0; col < gridConfig.columns; col++) {
      if (offsets.length >= imageCount) break;

      const xPos = col * subWidth - ((gridConfig.columns - 1) * subWidth) / 2;
      const yPos = row * subHeight - ((gridConfig.rows - 1) * subHeight) / 2;

      offsets.push({
        offsetX: xPos,
        offsetY: yPos,
        width: subWidth,
        height: subHeight,
      });
    }
  }

  return offsets;
}

/**
 * Returns grid rows/columns for a given image count.
 */
function getGridConfig(imageCount) {
  const configs = {
    1: { rows: 1, columns: 1 },
    2: { rows: 1, columns: 2 },
    4: { rows: 2, columns: 2 },
    8: { rows: 2, columns: 4 },
  };

  return configs[imageCount] || configs[1];
}

/**
 * Computes absolute positions for sub-images at a given coordinate.
 * Returns array of { x, y, width, height } for each sub-image.
 */
export function computeImagePositions(centerX, centerY, cellWidth, cellHeight, imageCount) {
  const offsets = computeGridOffsets(cellWidth, cellHeight, imageCount);

  return offsets.map((offset) => ({
    x: centerX + offset.offsetX - offset.width / 2,
    y: centerY + offset.offsetY - offset.height / 2,
    width: offset.width,
    height: offset.height,
  }));
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
    fetchPlotterData();
  }, []);

  const fetchPlotterData = async () => {
    try {
      setIsLoading(true);
      setLoadError(null);

      const response = await fetch(DATA_URL);

      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status}`);
      }

      const jsonData = await response.json();
      setPlotterPoints(jsonData);
    } catch (fetchError) {
      setLoadError(fetchError.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { plotterPoints, isLoading, loadError };
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
import { useState } from "react";
import Navbar from "./components/Navbar";
import ImageCountSelector from "./components/ImageCountSelector";
import RechartsPlotter from "./components/RechartsPlotter";
import D3Plotter from "./components/D3Plotter";
import PixiPlotter from "./components/PixiPlotter";
import KonvaPlotter from "./components/KonvaPlotter";
import DeckGLPlotter from "./components/DeckGLPlotter";
import EChartsPlotter from "./components/EChartsPlotter";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("Recharts");
  const [imageCount, setImageCount] = useState(1);
  const [appliedXGap, setAppliedXGap] = useState(10);
  const [appliedYGap, setAppliedYGap] = useState(10);
  const [draftXGap, setDraftXGap] = useState(10);
  const [draftYGap, setDraftYGap] = useState(10);

  const hasChanges = draftXGap !== appliedXGap || draftYGap !== appliedYGap;

  const handleUpdate = () => {
    setAppliedXGap(draftXGap);
    setAppliedYGap(draftYGap);
  };

  const renderActivePlotter = () => {
    switch (activeTab) {
      case "Recharts":
        return <RechartsPlotter imageCount={imageCount} xGap={appliedXGap} yGap={appliedYGap} />;

      case "D3":
        return <D3Plotter imageCount={imageCount} xGap={appliedXGap} yGap={appliedYGap} />;

      case "PixiJS":
        return <PixiPlotter imageCount={imageCount} xGap={appliedXGap} yGap={appliedYGap} />;

      case "Konva":
        return <KonvaPlotter imageCount={imageCount} xGap={appliedXGap} yGap={appliedYGap} />;

      case "DeckGL":
        return <DeckGLPlotter imageCount={imageCount} xGap={appliedXGap} yGap={appliedYGap} />;

      case "ECharts":
        return <EChartsPlotter imageCount={imageCount} xGap={appliedXGap} yGap={appliedYGap} />;

      default:
        return <RechartsPlotter imageCount={imageCount} xGap={appliedXGap} yGap={appliedYGap} />;
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Image Plotting System PoC</h1>

      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <ImageCountSelector
        imageCount={imageCount}
        setImageCount={setImageCount}
      />

      <div style={{ display: "flex", gap: "20px", justifyContent: "center", marginBottom: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <label style={{ color: "#fff" }}>X Gap:</label>
          <input
            type="range"
            min="1"
            max="50"
            value={draftXGap}
            onChange={(e) => setDraftXGap(Number(e.target.value))}
          />
          <span style={{ color: "#888", width: "20px" }}>{draftXGap}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <label style={{ color: "#fff" }}>Y Gap:</label>
          <input
            type="range"
            min="1"
            max="50"
            value={draftYGap}
            onChange={(e) => setDraftYGap(Number(e.target.value))}
          />
          <span style={{ color: "#888", width: "20px" }}>{draftYGap}</span>
        </div>
        <button
          onClick={handleUpdate}
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

function PlaceholderPlotter({ libraryName }) {
  return (
    <div className="plotter-loading">
      {libraryName} plotter — coming soon (Phase 2/3)
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
import { computeImagePositions } from "../lib/gridLayout";
import { CELL_SIZE, PLOT_DIMENSIONS, PLOT_MARGIN } from "../lib/constants";
import PlotterControls from "./PlotterControls";

function D3Plotter({ imageCount, xGap, yGap }) {
  const { plotterPoints, isLoading, loadError } = usePlotterData();

  if (isLoading) return <div className="plotter-loading">Loading data…</div>;
  if (loadError) return <div className="plotter-error">Error: {loadError}</div>;

  return (
    <D3PlotCanvas plotterPoints={plotterPoints} imageCount={imageCount} xGap={xGap} yGap={yGap} />
  );
}

function D3PlotCanvas({ plotterPoints, imageCount, xGap, yGap }) {
  const svgRef = useRef(null);
  const tooltipRef = useRef(null);
  const zoomBehaviorRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(PLOT_DIMENSIONS.width);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        setContainerWidth(entry.contentRect.width);
      }
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    if (!svgRef.current || plotterPoints.length === 0) return;

    zoomBehaviorRef.current = renderPlot(
      svgRef.current,
      tooltipRef.current,
      plotterPoints,
      imageCount,
      containerWidth,
      xGap,
      yGap
    );
  }, [plotterPoints, imageCount, containerWidth, xGap, yGap]);

  const handleZoomIn = () => {
    if (zoomBehaviorRef.current && svgRef.current) {
      d3.select(svgRef.current).transition().call(zoomBehaviorRef.current.scaleBy, 1.5);
    }
  };

  const handleZoomOut = () => {
    if (zoomBehaviorRef.current && svgRef.current) {
      d3.select(svgRef.current).transition().call(zoomBehaviorRef.current.scaleBy, 1 / 1.5);
    }
  };

  const handleReset = () => {
    if (zoomBehaviorRef.current && svgRef.current) {
      d3.select(svgRef.current).transition().call(zoomBehaviorRef.current.transform, d3.zoomIdentity);
    }
  };

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      <PlotterControls
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
      />
      <svg ref={svgRef} />
      <div ref={tooltipRef} className="plotter-tooltip" style={{ display: "none" }} />
    </div>
  );
}

function renderPlot(svgElement, tooltipElement, plotterPoints, imageCount, containerWidth, xGap, yGap) {
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

  const zoomGroup = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

  const clipId = "plot-clip-" + Math.random().toString(36).slice(2);
  svg.append("defs")
    .append("clipPath")
    .attr("id", clipId)
    .append("rect")
    .attr("width", innerWidth)
    .attr("height", innerHeight);

  const plotGroup = zoomGroup.append("g").attr("clip-path", `url(#${clipId})`);
  const contentGroup = plotGroup.append("g");

  renderAxes(zoomGroup, xScale, yScale, innerWidth, innerHeight);
  renderGrid(contentGroup, xScale, yScale, innerWidth, innerHeight);
  renderImagePoints(contentGroup, plotterPoints, xScale, yScale, imageCount, tooltipElement);

  const zoomBehavior = d3.zoom()
    .scaleExtent([0.3, 10])
    .on("zoom", (event) => {
      const newXScale = event.transform.rescaleX(xScale);
      const newYScale = event.transform.rescaleY(yScale);

      contentGroup.attr("transform", event.transform);
      updateAxes(zoomGroup, newXScale, newYScale, innerWidth, innerHeight);
    });

  svg.call(zoomBehavior);
  return zoomBehavior;
}

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

function renderAxes(container, xScale, yScale, innerWidth, innerHeight) {
  container.append("g")
    .attr("class", "x-axis")
    .attr("transform", `translate(0,${innerHeight})`)
    .call(d3.axisBottom(xScale).ticks(8))
    .selectAll("text")
    .attr("fill", "#888");

  container.append("g")
    .attr("class", "y-axis")
    .call(d3.axisLeft(yScale).ticks(6))
    .selectAll("text")
    .attr("fill", "#888");

  container.selectAll(".x-axis line, .y-axis line").attr("stroke", "#555");
  container.selectAll(".x-axis path, .y-axis path").attr("stroke", "#555");
}

function updateAxes(container, newXScale, newYScale, innerWidth, innerHeight) {
  container.select(".x-axis").call(d3.axisBottom(newXScale).ticks(8));
  container.select(".y-axis").call(d3.axisLeft(newYScale).ticks(6));

  container.selectAll(".x-axis text, .y-axis text").attr("fill", "#888");
  container.selectAll(".x-axis line, .y-axis line").attr("stroke", "#555");
  container.selectAll(".x-axis path, .y-axis path").attr("stroke", "#555");
}

function renderGrid(container, xScale, yScale, innerWidth, innerHeight) {
  container.append("g")
    .attr("class", "grid-lines")
    .selectAll("line.horizontal")
    .data(yScale.ticks(6))
    .enter()
    .append("line")
    .attr("x1", 0)
    .attr("x2", innerWidth)
    .attr("y1", (tick) => yScale(tick))
    .attr("y2", (tick) => yScale(tick))
    .attr("stroke", "#2a2a3e")
    .attr("stroke-dasharray", "3 3");

  container.select(".grid-lines")
    .selectAll("line.vertical")
    .data(xScale.ticks(8))
    .enter()
    .append("line")
    .attr("x1", (tick) => xScale(tick))
    .attr("x2", (tick) => xScale(tick))
    .attr("y1", 0)
    .attr("y2", innerHeight)
    .attr("stroke", "#2a2a3e")
    .attr("stroke-dasharray", "3 3");
}

function renderImagePoints(container, plotterPoints, xScale, yScale, imageCount, tooltipElement) {
  const tooltip = d3.select(tooltipElement);

  plotterPoints.forEach((point) => {
    const centerX = xScale(point.x);
    const centerY = yScale(point.y);
    const positions = computeImagePositions(centerX, centerY, CELL_SIZE, CELL_SIZE, imageCount);

    const pointGroup = container.append("g").attr("class", "image-point");

    positions.forEach((position) => {
      pointGroup.append("image")
        .attr("href", point.image)
        .attr("x", position.x)
        .attr("y", position.y)
        .attr("width", position.width)
        .attr("height", position.height)
        .attr("preserveAspectRatio", "xMidYMid slice")
        .style("cursor", "pointer");
    });

    pointGroup
      .on("mouseenter", (event) => showTooltip(tooltip, event, point))
      .on("mousemove", (event) => moveTooltip(tooltip, event))
      .on("mouseleave", () => hideTooltip(tooltip));
  });
}

function showTooltip(tooltip, event, point) {
  tooltip
    .style("display", "block")
    .html(
      `<div class="tooltip-label">${point.label}</div>` +
      `<div class="tooltip-meta">` +
      `<span>Interval: ${point.meta.interval}s</span>` +
      `<span>Angle: ${point.meta.angle}°</span>` +
      `<span>Quality: ${point.meta.quality}</span>` +
      `</div>`
    );

  moveTooltip(tooltip, event);
}

function moveTooltip(tooltip, event) {
  const containerRect = event.currentTarget.closest(".viewer-container")?.getBoundingClientRect();
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

# src\components\DeckGLPlotter.jsx

```jsx
import { useState, useMemo, useCallback } from "react";
import DeckGL from "@deck.gl/react";
import { OrthographicView } from "@deck.gl/core";
import { IconLayer, LineLayer, TextLayer } from "@deck.gl/layers";
import { usePlotterData } from "../lib/plotterData";
import { computeImagePositions } from "../lib/gridLayout";
import { CELL_SIZE } from "../lib/constants";
import PlotterControls from "./PlotterControls";

const INITIAL_VIEW_STATE = {
  target: [15, 22, 0],
  zoom: 3,
  minZoom: -2,
  maxZoom: 10,
};

const ORTHOGRAPHIC_VIEW = new OrthographicView({
  id: "ortho-view",
  flipY: false,
});

function DeckGLPlotter({ imageCount, xGap, yGap }) {
  const { plotterPoints, isLoading, loadError } = usePlotterData();

  if (isLoading) return <div className="plotter-loading">Loading data…</div>;
  if (loadError) return <div className="plotter-error">Error: {loadError}</div>;

  return (
    <DeckGLCanvas plotterPoints={plotterPoints} imageCount={imageCount} xGap={xGap} yGap={yGap} />
  );
}

function DeckGLCanvas({ plotterPoints, imageCount, xGap, yGap }) {
  const [tooltipInfo, setTooltipInfo] = useState(null);
  const [viewState, setViewState] = useState(INITIAL_VIEW_STATE);

  const expandedIconData = useMemo(
    () => expandDataForMultiImage(plotterPoints, imageCount, xGap, yGap),
    [plotterPoints, imageCount, xGap, yGap]
  );

  const iconLayer = useMemo(
    () => createIconLayer(expandedIconData),
    [expandedIconData]
  );

  const axesLayers = useMemo(
    () => createAxesLayers(plotterPoints, xGap, yGap),
    [plotterPoints, xGap, yGap]
  );

  const handleHover = useCallback((info) => {
    if (info.object) {
      setTooltipInfo({
        x: info.x,
        y: info.y,
        object: info.object,
      });
    } else {
      setTooltipInfo(null);
    }
  }, []);

  const handleZoomIn = () => setViewState((v) => ({ ...v, zoom: Math.min(v.zoom + 1, v.maxZoom) }));
  const handleZoomOut = () => setViewState((v) => ({ ...v, zoom: Math.max(v.zoom - 1, v.minZoom) }));
  const handleReset = () => setViewState(INITIAL_VIEW_STATE);

  return (
    <div style={{ position: "relative", height: 550, background: "#16213e" }}>
      <PlotterControls
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
      />
      <DeckGL
        views={ORTHOGRAPHIC_VIEW}
        viewState={viewState}
        onViewStateChange={({ viewState }) => setViewState(viewState)}
        controller
        layers={[...axesLayers, iconLayer]}
        onHover={handleHover}
        style={{ position: "relative", height: "100%" }}
      />
      {tooltipInfo && (
        <DeckGLTooltip tooltipInfo={tooltipInfo} />
      )}
    </div>
  );
}

function expandDataForMultiImage(plotterPoints, imageCount, xGap, yGap) {
  const expandedEntries = [];
  const scaleFactor = 2;
  const xSpacingScale = xGap / 10;
  const ySpacingScale = yGap / 10;

  plotterPoints.forEach((point) => {
    const cellSize = CELL_SIZE / scaleFactor;
    const positions = computeImagePositions(
      point.x * xSpacingScale,
      point.y * ySpacingScale,
      cellSize,
      cellSize,
      imageCount
    );

    positions.forEach((position, index) => {
      expandedEntries.push({
        id: `${point.id}-sub-${index}`,
        position: [
          position.x + position.width / 2,
          position.y + position.height / 2,
        ],
        width: position.width,
        height: position.height,
        image: point.image,
        label: point.label,
        meta: point.meta,
      });
    });
  });

  return expandedEntries;
}

function createIconLayer(expandedIconData) {
  return new IconLayer({
    id: "image-icon-layer",
    data: expandedIconData,
    getPosition: (entry) => entry.position,
    getIcon: (entry) => ({
      url: entry.image,
      width: 128,
      height: 128,
    }),
    getSize: 20,
    sizeUnits: "common",
    pickable: true,
    sizeScale: 1,
  });
}

function createAxesLayers(plotterPoints, xGap, yGap) {
  if (plotterPoints.length === 0) return [];
  const xValues = plotterPoints.map((p) => p.x);
  const yValues = plotterPoints.map((p) => p.y);
  const xMin = Math.min(...xValues);
  const xMax = Math.max(...xValues);
  const yMin = Math.min(...yValues);
  const yMax = Math.max(...yValues);
  const padX = (xMax - xMin) * 0.1 || 5;
  const padY = (yMax - yMin) * 0.1 || 5;

  const xSpacingScale = xGap / 10;
  const ySpacingScale = yGap / 10;

  const lines = [];
  const texts = [];

  const tickCount = 5;
  for (let i = 0; i <= tickCount; i++) {
    const x = xMin - padX + ((xMax - xMin + padX * 2) * i) / tickCount;
    const scaledX = x * xSpacingScale;
    lines.push({
      sourcePosition: [scaledX, (yMin - padY) * ySpacingScale],
      targetPosition: [scaledX, (yMax + padY) * ySpacingScale]
    });
    texts.push({ position: [scaledX, (yMax + padY + 2) * ySpacingScale], text: Math.round(x).toString() });
  }

  for (let i = 0; i <= tickCount; i++) {
    const y = yMin - padY + ((yMax - yMin + padY * 2) * i) / tickCount;
    const scaledY = y * ySpacingScale;
    lines.push({
      sourcePosition: [(xMin - padX) * xSpacingScale, scaledY],
      targetPosition: [(xMax + padX) * xSpacingScale, scaledY]
    });
    texts.push({ position: [(xMin - padX - 2) * xSpacingScale, scaledY], text: Math.round(y).toString() });
  }

  return [
    new LineLayer({
      id: "grid-lines",
      data: lines,
      getSourcePosition: (d) => d.sourcePosition,
      getTargetPosition: (d) => d.targetPosition,
      getColor: [42, 42, 62],
      getWidth: 1,
      widthUnits: "pixels",
    }),
    new TextLayer({
      id: "axis-labels",
      data: texts,
      getPosition: (d) => d.position,
      getText: (d) => d.text,
      getSize: 12,
      getColor: [136, 136, 136],
      sizeUnits: "pixels",
    }),
  ];
}

function DeckGLTooltip({ tooltipInfo }) {
  const { x, y, object } = tooltipInfo;

  return (
    <div
      className="plotter-tooltip"
      style={{
        display: "block",
        left: x + 12,
        top: y - 10,
      }}
    >
      <div className="tooltip-label">{object.label}</div>
      <div className="tooltip-meta">
        <span>Interval: {object.meta.interval}s</span>
        <span>Angle: {object.meta.angle}°</span>
        <span>Quality: {object.meta.quality}</span>
      </div>
    </div>
  );
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
    <EChartsCanvas plotterPoints={plotterPoints} imageCount={imageCount} xGap={xGap} yGap={yGap} />
  );
}

function EChartsCanvas({ plotterPoints, imageCount, xGap, yGap }) {
  const echartsRef = useRef(null);

  const chartOption = useMemo(
    () => buildChartOption(plotterPoints, imageCount, xGap, yGap),
    [plotterPoints, imageCount, xGap, yGap]
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
      type: 'dataZoom',
      start: Math.max(0, center - newRange / 2),
      end: Math.min(100, center + newRange / 2)
    });
  };

  const handleReset = () => {
    if (!echartsRef.current) return;
    const instance = echartsRef.current.getEchartsInstance();
    instance.dispatchAction({ type: 'dataZoom', start: 0, end: 100 });
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

              const xPos = col * (subCellWidth + xGap) - ((gridConfig.columns - 1) * (subCellWidth + xGap)) / 2;
              const yPos = row * (subCellHeight + yGap) - ((gridConfig.rows - 1) * (subCellHeight + yGap)) / 2;

              children.push({
                type: "image",
                style: {
                  image: api.value(2),
                  x: coord[0] + xPos - subCellWidth / 2,
                  y: coord[1] + yPos - subCellHeight / 2,
                  width: subCellWidth,
                  height: subCellHeight,
                }
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
import { IMAGE_COUNTS } from "../lib/constants";

function ImageCountSelector({ imageCount, setImageCount }) {
  return (
    <div className="image-count-selector">
      <span className="selector-label">Images per point:</span>
      {IMAGE_COUNTS.map((count) => (
        <button
          key={count}
          className={`count-button ${imageCount === count ? "active" : ""}`}
          onClick={() => setImageCount(count)}
        >
          {count}
        </button>
      ))}
    </div>
  );
}

export default ImageCountSelector;

```

---

# src\components\KonvaPlotter.jsx

```jsx
import { useState, useRef, useCallback, useEffect } from "react";
import { Stage, Layer, Image as KonvaImage, Text, Line, Rect, Group } from "react-konva";
import { usePlotterData } from "../lib/plotterData";
import { computeImagePositions } from "../lib/gridLayout";
import { CELL_SIZE, PLOT_DIMENSIONS, PLOT_MARGIN } from "../lib/constants";
import PlotterControls from "./PlotterControls";

const AXIS_TICK_COUNT = 8;
const EXTENT_PADDING_RATIO = 0.2;
const EXTENT_FALLBACK_PADDING = 5;
const ZOOM_STEP = 1.5;
const PINCH_ZOOM_SENSITIVITY = 0.01;
const ZOOM_MIN = 0.3;
const ZOOM_MAX = 10;
const GRID_COLOR = "#2a2a3e";
const AXIS_LINE_COLOR = "#555555";
const TICK_LABEL_COLOR = "#aaaaaa";
const TICK_LABEL_FONT_SIZE = 11;

function KonvaPlotter({ imageCount, xGap, yGap }) {
  const { plotterPoints, isLoading, loadError } = usePlotterData();

  if (isLoading) return <div className="plotter-loading">Loading data…</div>;
  if (loadError) return <div className="plotter-error">Error: {loadError}</div>;

  return (
    <KonvaCanvas
      plotterPoints={plotterPoints}
      imageCount={imageCount}
      xGap={xGap}
      yGap={yGap}
    />
  );
}

function KonvaCanvas({ plotterPoints, imageCount, xGap, yGap }) {
  const [contentScale, setContentScale] = useState(1);
  const [contentOffset, setContentOffset] = useState({ x: 0, y: 0 });
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const draggableGroupRef = useRef(null);
  const stageRef = useRef(null);

  const innerWidth = PLOT_DIMENSIONS.width - PLOT_MARGIN.left - PLOT_MARGIN.right;
  const innerHeight = PLOT_DIMENSIONS.height - PLOT_MARGIN.top - PLOT_MARGIN.bottom;

  const { xScale, yScale, xExtent, yExtent } = buildScales(
    plotterPoints,
    innerWidth,
    innerHeight
  );

  const visibleDomain = computeVisibleDomain(
    xExtent,
    yExtent,
    contentOffset,
    contentScale,
    innerWidth,
    innerHeight
  );

  const handleWheel = useCallback(
    (event) => {
      event.evt.preventDefault();
      const stage = event.target.getStage();
      const pointerPosition = stage.getPointerPosition();

      if (!isPointerInsidePlotArea(pointerPosition, innerWidth, innerHeight)) return;

      const nativeEvent = event.evt;
      const isPinchGesture = nativeEvent.ctrlKey;
      const scaleDelta = computeWheelScaleDelta(nativeEvent.deltaY, isPinchGesture);
      const newScale = clampScale(contentScale * scaleDelta);

      const mouseRelX = pointerPosition.x - PLOT_MARGIN.left - contentOffset.x;
      const mouseRelY = pointerPosition.y - PLOT_MARGIN.top - contentOffset.y;

      const nextOffsetX = contentOffset.x - mouseRelX * (newScale / contentScale - 1);
      const nextOffsetY = contentOffset.y - mouseRelY * (newScale / contentScale - 1);

      const clampedOffset = clampContentOffset(nextOffsetX, nextOffsetY, newScale, innerWidth, innerHeight);

      setContentScale(newScale);
      setContentOffset(clampedOffset);
    },
    [contentScale, contentOffset, innerWidth, innerHeight]
  );

  const handleContentDragStart = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleContentDragMove = useCallback(
    (event) => {
      const node = event.target;
      const offsetX = node.x() - PLOT_MARGIN.left;
      const offsetY = node.y() - PLOT_MARGIN.top;

      const clamped = clampContentOffset(offsetX, offsetY, contentScale, innerWidth, innerHeight);

      node.x(PLOT_MARGIN.left + clamped.x);
      node.y(PLOT_MARGIN.top + clamped.y);
    },
    [contentScale, innerWidth, innerHeight]
  );

  const handleContentDragEnd = useCallback(
    (event) => {
      setIsDragging(false);
      const nodeX = event.target.x();
      const nodeY = event.target.y();
      setContentOffset({
        x: nodeX - PLOT_MARGIN.left,
        y: nodeY - PLOT_MARGIN.top,
      });
    },
    []
  );

  const handleZoomIn = useCallback(() => {
    const centerX = innerWidth / 2;
    const centerY = innerHeight / 2;
    const newScale = clampScale(contentScale * ZOOM_STEP);

    const nextOffsetX = contentOffset.x - centerX * (newScale / contentScale - 1);
    const nextOffsetY = contentOffset.y - centerY * (newScale / contentScale - 1);
    const clampedOffset = clampContentOffset(nextOffsetX, nextOffsetY, newScale, innerWidth, innerHeight);

    setContentScale(newScale);
    setContentOffset(clampedOffset);
  }, [contentScale, contentOffset, innerWidth, innerHeight]);

  const handleZoomOut = useCallback(() => {
    const centerX = innerWidth / 2;
    const centerY = innerHeight / 2;
    const newScale = clampScale(contentScale / ZOOM_STEP);

    const nextOffsetX = contentOffset.x - centerX * (newScale / contentScale - 1);
    const nextOffsetY = contentOffset.y - centerY * (newScale / contentScale - 1);
    const clampedOffset = clampContentOffset(nextOffsetX, nextOffsetY, newScale, innerWidth, innerHeight);

    setContentScale(newScale);
    setContentOffset(clampedOffset);
  }, [contentScale, contentOffset, innerWidth, innerHeight]);

  const handleReset = useCallback(() => {
    setContentScale(1);
    setContentOffset({ x: 0, y: 0 });
  }, []);

  const stageCursor = isDragging ? "grabbing" : contentScale > 1 ? "grab" : "default";

  return (
    <div style={{ position: "relative" }}>
      <PlotterControls
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
        zoomLevel={contentScale}
      />
      <Stage
        ref={stageRef}
        width={PLOT_DIMENSIONS.width}
        height={PLOT_DIMENSIONS.height}
        onWheel={handleWheel}
        style={{ cursor: stageCursor }}
      >
        {/* Static axis layer — grid, labels, border (not affected by zoom/pan) */}
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

        {/* Clipped content layer — images are clipped to the plot area */}
        <Layer>
          <ClippedContentGroup
            innerWidth={innerWidth}
            innerHeight={innerHeight}
            contentOffset={contentOffset}
            contentScale={contentScale}
            draggableGroupRef={draggableGroupRef}
            onDragStart={handleContentDragStart}
            onDragMove={handleContentDragMove}
            onDragEnd={handleContentDragEnd}
          >
            {plotterPoints.map((point) => (
              <ImagePointGroup
                key={point.id}
                point={point}
                xScale={xScale}
                yScale={yScale}
                imageCount={imageCount}
                onHover={setHoveredPoint}
                onCursorMove={setCursorPosition}
              />
            ))}
          </ClippedContentGroup>
        </Layer>
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

function ClippedContentGroup({
  innerWidth,
  innerHeight,
  contentOffset,
  contentScale,
  draggableGroupRef,
  onDragStart,
  onDragMove,
  onDragEnd,
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
        ref={draggableGroupRef}
        x={plotLeft + contentOffset.x}
        y={plotTop + contentOffset.y}
        scaleX={contentScale}
        scaleY={contentScale}
        draggable
        onDragStart={onDragStart}
        onDragMove={onDragMove}
        onDragEnd={onDragEnd}
      >
        {/* Invisible hit area so drag works from any empty space in the plot */}
        <Rect
          x={0}
          y={0}
          width={innerWidth}
          height={innerHeight}
          fill="transparent"
          listening={true}
        />
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
  const xTicks = buildTicks(visibleDomain.xMin, visibleDomain.xMax, AXIS_TICK_COUNT);
  const yTicks = buildTicks(visibleDomain.yMin, visibleDomain.yMax, AXIS_TICK_COUNT);

  const xScreenScale = buildLinearScale(visibleDomain.xMin, visibleDomain.xMax, 0, innerWidth);
  const yScreenScale = buildLinearScale(visibleDomain.yMin, visibleDomain.yMax, innerHeight, 0);

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
      />
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
      />
    );
  });

  return <>{gridLines}</>;
}

function AxisLabels({ visibleDomain, innerWidth, innerHeight }) {
  const xTicks = buildTicks(visibleDomain.xMin, visibleDomain.xMax, AXIS_TICK_COUNT);
  const yTicks = buildTicks(visibleDomain.yMin, visibleDomain.yMax, AXIS_TICK_COUNT);

  const xScreenScale = buildLinearScale(visibleDomain.xMin, visibleDomain.xMax, 0, innerWidth);
  const yScreenScale = buildLinearScale(visibleDomain.yMin, visibleDomain.yMax, innerHeight, 0);

  const tickLabels = [];

  xTicks.forEach((value, index) => {
    const xPos = PLOT_MARGIN.left + xScreenScale(value);
    if (xPos < PLOT_MARGIN.left - 5 || xPos > PLOT_MARGIN.left + innerWidth + 5) return;
    tickLabels.push(
      <Text
        key={`xlabel-${index}`}
        text={formatTickLabel(value)}
        x={xPos - 14}
        y={PLOT_MARGIN.top + innerHeight + 6}
        fill={TICK_LABEL_COLOR}
        fontSize={TICK_LABEL_FONT_SIZE}
        listening={false}
      />
    );
  });

  yTicks.forEach((value, index) => {
    const yPos = PLOT_MARGIN.top + yScreenScale(value);
    if (yPos < PLOT_MARGIN.top - 5 || yPos > PLOT_MARGIN.top + innerHeight + 5) return;
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
      />
    );
  });

  return <>{tickLabels}</>;
}

function ImagePointGroup({ point, xScale, yScale, imageCount, onHover, onCursorMove }) {
  const centerX = xScale(point.x);
  const centerY = yScale(point.y);
  const positions = computeImagePositions(centerX, centerY, CELL_SIZE, CELL_SIZE, imageCount);

  return (
    <>
      {positions.map((position, index) => (
        <KonvaImageFromUrl
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

function KonvaImageFromUrl({ imageUrl, x, y, width, height, point, onHover, onCursorMove }) {
  const [loadedImage, setLoadedImage] = useState(null);

  useEffect(() => {
    const htmlImage = new window.Image();
    htmlImage.crossOrigin = "anonymous";
    htmlImage.src = imageUrl;
    htmlImage.onload = () => setLoadedImage(htmlImage);
    return () => { htmlImage.onload = null; };
  }, [imageUrl]);

  const handleMouseEnter = useCallback(
    (event) => {
      const stage = event.target.getStage();
      const pointer = stage.getPointerPosition();
      onCursorMove({ x: pointer.x, y: pointer.y });
      onHover(point);
    },
    [point, onHover, onCursorMove]
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

/* ─── Pure utility functions ──────────────────────────────────────────── */

function isPointerInsidePlotArea(pointerPosition, plotInnerWidth, plotInnerHeight) {
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

function clampContentOffset(rawX, rawY, scale, plotInnerWidth, plotInnerHeight) {
  const scaledWidth = plotInnerWidth * scale;
  const scaledHeight = plotInnerHeight * scale;

  let clampedX = rawX;
  let clampedY = rawY;

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

  const xPadding = (xMax - xMin) * EXTENT_PADDING_RATIO || EXTENT_FALLBACK_PADDING;
  const yPadding = (yMax - yMin) * EXTENT_PADDING_RATIO || EXTENT_FALLBACK_PADDING;

  const xExtent = [xMin - xPadding, xMax + xPadding];
  const yExtent = [yMin - yPadding, yMax + yPadding];

  const xScale = buildLinearScale(xExtent[0], xExtent[1], 0, plotInnerWidth);
  const yScale = buildLinearScale(yExtent[0], yExtent[1], plotInnerHeight, 0);

  return { xScale, yScale, xExtent, yExtent };
}

function computeVisibleDomain(xExtent, yExtent, contentOffset, scale, plotInnerWidth, plotInnerHeight) {
  const domainWidth = xExtent[1] - xExtent[0];
  const domainHeight = yExtent[1] - yExtent[0];

  const xMin = xExtent[0] - (contentOffset.x / scale / plotInnerWidth) * domainWidth;
  const xMax = xMin + domainWidth / scale;

  const yMax = yExtent[1] + (contentOffset.y / scale / plotInnerHeight) * domainHeight;
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
  const step = niceSteps.map((s) => s * magnitude).find((s) => s >= rawStep) ?? rawStep;

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
import { LIBRARIES } from "../lib/constants";

function Navbar({ activeTab, setActiveTab }) {
  return (
    <div className="tab-container">
      {LIBRARIES.map((libraryName) => (
        <button
          key={libraryName}
          className={`tab-button ${activeTab === libraryName ? "active" : ""}`}
          onClick={() => setActiveTab(libraryName)}
        >
          {libraryName}
        </button>
      ))}
    </div>
  );
}

export default Navbar;

```

---

# src\components\PixiPlotter.jsx

```jsx
/* eslint-disable react-hooks/immutability */
import { useRef, useEffect, useState } from "react";

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

import PlotterControls from "./PlotterControls";

const GRID_COLOR = 0x333333;
const GRID_ALPHA = 0.5;

const AXIS_BORDER_COLOR = 0x555555;

const TICK_COLOR = "#999999";

const ZOOM_MIN = 0.5;
const ZOOM_MAX = 20;

function PixiPlotter({ imageCount, xGap, yGap }) {
  const { plotterPoints, isLoading, loadError } = usePlotterData();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (loadError) {
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

  const tooltipRef = useRef(null);

  const zoomBehaviorRef = useRef(null);

  const transformRef = useRef(d3.zoomIdentity);

  const [zoomLevel, setZoomLevel] = useState(1);

  const innerWidth =
    PLOT_DIMENSIONS.width - PLOT_MARGIN.left - PLOT_MARGIN.right;

  const innerHeight =
    PLOT_DIMENSIONS.height - PLOT_MARGIN.top - PLOT_MARGIN.bottom;

  /*
   * INITIALIZE PIXI
   */
  useEffect(() => {
    let cancelled = false;

    async function init() {
      if (!containerRef.current) return;

      const app = new PixiApp();

      await app.init({
        width: PLOT_DIMENSIONS.width,
        height: PLOT_DIMENSIONS.height,
        background: 0x16213e,
        antialias: true,
      });

      if (cancelled) {
        app.destroy(true);
        return;
      }

      containerRef.current.appendChild(app.canvas);

      pixiAppRef.current = app;

      const axesLayer = new Container();

      axesLayer.x = PLOT_MARGIN.left;
      axesLayer.y = PLOT_MARGIN.top;

      app.stage.addChild(axesLayer);

      axesLayerRef.current = axesLayer;

      const contentLayer = new Container();

      contentLayer.x = PLOT_MARGIN.left;
      contentLayer.y = PLOT_MARGIN.top;

      app.stage.addChild(contentLayer);

      contentLayerRef.current = contentLayer;

      setupZoom();
    }

    init();

    return () => {
      cancelled = true;

      if (pixiAppRef.current) {
        pixiAppRef.current.destroy(true);
      }
    };
  }, []);

  /*
   * D3 ZOOM
   */
  const setupZoom = () => {
    const zoom = d3
      .zoom()
      .scaleExtent([ZOOM_MIN, ZOOM_MAX])
      .on("zoom", (event) => {
        transformRef.current = event.transform;

        setZoomLevel(event.transform.k);

        renderScene(event.transform);
      });

    zoomBehaviorRef.current = zoom;

    d3.select(containerRef.current).call(zoom);
  };

  /*
   * MAIN RENDER
   */
  const renderScene = async (transform = d3.zoomIdentity) => {
    if (!axesLayerRef.current) return;

    if (!contentLayerRef.current) return;

    const axesLayer = axesLayerRef.current;

    const contentLayer = contentLayerRef.current;

    axesLayer.removeChildren();

    contentLayer.removeChildren();

    const scaledPoints = plotterPoints.map((point) => ({
      ...point,
      scaledX: point.x * (xGap / 10),
      scaledY: point.y * (yGap / 10),
    }));

    const xExtent = d3.extent(scaledPoints, (d) => d.scaledX);

    const yExtent = d3.extent(scaledPoints, (d) => d.scaledY);

    const xScale = d3.scaleLinear().domain(xExtent).range([0, innerWidth]);

    const yScale = d3.scaleLinear().domain(yExtent).range([innerHeight, 0]);

    /*
     * RESCALED ZOOM SCALES
     */
    const zoomedXScale = transform.rescaleX(xScale);

    const zoomedYScale = transform.rescaleY(yScale);

    /*
     * DYNAMIC TICKS
     */
    const xTicks = zoomedXScale.ticks(Math.max(5, transform.k * 8));

    const yTicks = zoomedYScale.ticks(Math.max(5, transform.k * 8));

    drawGrid(
      axesLayer,
      zoomedXScale,
      zoomedYScale,
      xTicks,
      yTicks,
      innerWidth,
      innerHeight,
    );

    drawAxesLabels(
      axesLayer,
      zoomedXScale,
      zoomedYScale,
      xTicks,
      yTicks,
      innerHeight,
    );

    const uniqueImages = [...new Set(plotterPoints.map((p) => p.image))];

    await Assets.load(uniqueImages);

    drawPoints(
      contentLayer,
      scaledPoints,
      zoomedXScale,
      zoomedYScale,
      imageCount,
      tooltipRef,
    );
  };

  /*
   * INITIAL DRAW
   */
  useEffect(() => {
    if (!plotterPoints.length) return;

    renderScene(transformRef.current);
  }, [plotterPoints, imageCount, xGap, yGap]);

  /*
   * CONTROLS
   */
  const zoomIn = () => {
    d3.select(containerRef.current)
      .transition()
      .call(zoomBehaviorRef.current.scaleBy, 1.5);
  };

  const zoomOut = () => {
    d3.select(containerRef.current)
      .transition()
      .call(zoomBehaviorRef.current.scaleBy, 0.7);
  };

  const reset = () => {
    d3.select(containerRef.current)
      .transition()
      .call(zoomBehaviorRef.current.transform, d3.zoomIdentity);
  };

  return (
    <div style={{ position: "relative" }}>
      <PlotterControls
        zoomLevel={zoomLevel}
        onZoomIn={zoomIn}
        onZoomOut={zoomOut}
        onReset={reset}
      />

      <div
        ref={containerRef}
        style={{
          cursor: "grab",
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
function drawGrid(layer, xScale, yScale, xTicks, yTicks, width, height) {
  const grid = new Graphics();

  xTicks.forEach((tick) => {
    const x = xScale(tick);

    grid.moveTo(x, 0);
    grid.lineTo(x, height);
  });

  yTicks.forEach((tick) => {
    const y = yScale(tick);

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
function drawAxesLabels(layer, xScale, yScale, xTicks, yTicks, innerHeight) {
  xTicks.forEach((tick) => {
    const label = new PixiText({
      text: tick.toFixed(1),
      style: {
        fill: TICK_COLOR,
        fontSize: 11,
      },
    });

    label.x = xScale(tick) - label.width / 2;

    label.y = innerHeight + 6;

    layer.addChild(label);
  });

  yTicks.forEach((tick) => {
    const label = new PixiText({
      text: tick.toFixed(1),
      style: {
        fill: TICK_COLOR,
        fontSize: 11,
      },
    });

    label.x = -label.width - 6;

    label.y = yScale(tick) - label.height / 2;

    layer.addChild(label);
  });
}

/*
 * POINTS
 */
function drawPoints(layer, points, xScale, yScale, imageCount, tooltipRef) {
  points.forEach((point) => {
    const x = xScale(point.scaledX);

    const y = yScale(point.scaledY);

    const positions = computeImagePositions(
      x,
      y,
      CELL_SIZE,
      CELL_SIZE,
      imageCount,
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
 * TOOLTIP
 */
function showTooltip(element, event, point) {
  if (!element) return;

  const global = event.global;

  element.style.display = "block";

  element.style.left = `${global.x + 15}px`;

  element.style.top = `${global.y - 10}px`;

  element.innerHTML = `
    <div>${point.label}</div>
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
export default function PlotterControls({ onZoomIn, onZoomOut, onReset, zoomLevel }) {
  return (
    <div className="zoom-controls">
      <button className="zoom-button" onClick={onZoomIn}>+</button>
      <button className="zoom-button" onClick={onZoomOut}>−</button>
      <button className="zoom-button" onClick={onReset}>Reset</button>
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
import { useState, useCallback, useRef } from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { usePlotterData } from "../lib/plotterData";
import { computeImagePositions } from "../lib/gridLayout";
import { CELL_SIZE, PLOT_MARGIN } from "../lib/constants";
import PlotterControls from "./PlotterControls";

const ZOOM_STEP = 1.5;
const ZOOM_MIN = 0.3;
const ZOOM_MAX = 8;
const DOMAIN_PADDING_UNITS = 1;
const CLIP_PATH_ID = "recharts-plot-clip";

function RechartsPlotter({ imageCount, xGap, yGap }) {
  const { plotterPoints, isLoading, loadError } = usePlotterData();
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoomIn = useCallback(
    () => setZoomLevel((prev) => Math.min(prev * ZOOM_STEP, ZOOM_MAX)),
    [],
  );

  const handleZoomOut = useCallback(
    () => setZoomLevel((prev) => Math.max(prev / ZOOM_STEP, ZOOM_MIN)),
    [],
  );

  const handleReset = useCallback(() => setZoomLevel(1), []);

  if (isLoading) return <div className="plotter-loading">Loading data…</div>;
  if (loadError) return <div className="plotter-error">Error: {loadError}</div>;

  return (
    <div>
      <PlotterControls
        zoomLevel={zoomLevel}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
      />
      <PlotArea
        plotterPoints={plotterPoints}
        imageCount={imageCount}
        zoomLevel={zoomLevel}
        xGap={xGap}
        yGap={yGap}
      />
    </div>
  );
}

function buildAxisDomain(values, zoomLevel, padding) {
  const dataMin = Math.min(...values);
  const dataMax = Math.max(...values);

  const center = (dataMin + dataMax) / 2;

  /*
   * PREVENT OVER-INTERPOLATION
   */
  const zoomedSpan = Math.max((dataMax - dataMin) / zoomLevel, 2);

  const halfSpan = (zoomedSpan + padding) / 2;

  return [center - halfSpan, center + halfSpan];
}

function PlotArea({ plotterPoints, imageCount, zoomLevel, xGap, yGap }) {
  const containerRef = useRef(null);
  const xValues = plotterPoints.map((point) => point.x);
  const yValues = plotterPoints.map((point) => point.y);

  const domainX = buildAxisDomain(xValues, zoomLevel, DOMAIN_PADDING_UNITS);
  const domainY = buildAxisDomain(yValues, zoomLevel, DOMAIN_PADDING_UNITS);

  const renderCustomShape = useCallback(
    (shapeProps) => {
      const { cx, cy, payload } = shapeProps;
      const positions = computeImagePositions(
        cx,
        cy,
        CELL_SIZE,
        CELL_SIZE,
        imageCount,
      );

      return (
        <g clipPath={`url(#${CLIP_PATH_ID})`}>
          {positions.map((position, index) => (
            <image
              key={`${payload.id}-${index}`}
              href={payload.image}
              x={position.x}
              y={position.y}
              width={position.width}
              height={position.height}
              preserveAspectRatio="xMidYMid slice"
            />
          ))}
        </g>
      );
    },
    [imageCount],
  );

  const chartHeight = 500;
  const plotWidth = Math.max(
    (containerRef.current?.offsetWidth || 900) -
      PLOT_MARGIN.left -
      PLOT_MARGIN.right,
    300,
  );
  const plotHeight = chartHeight - PLOT_MARGIN.top - PLOT_MARGIN.bottom;

  return (
    <div ref={containerRef}>
      <ResponsiveContainer width="100%" height={chartHeight}>
        <ScatterChart margin={PLOT_MARGIN}>
          <defs>
            <clipPath id={CLIP_PATH_ID}>
              <rect
                x={PLOT_MARGIN.left}
                y={PLOT_MARGIN.top}
                width={plotWidth}
                height={plotHeight}
              />
            </clipPath>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis
            type="number"
            dataKey="x"
            domain={domainX}
            tick={{ fill: "#888", fontSize: 12 }}
            stroke="#555"
            name="X"
          />
          <YAxis
            type="number"
            dataKey="y"
            domain={domainY}
            tick={{ fill: "#888", fontSize: 12 }}
            stroke="#555"
            name="Y"
          />
          <Tooltip content={<MetadataTooltip />} />
          <Scatter
            key={`scatter-${imageCount}-${zoomLevel}-${xGap}-${yGap}`}
            data={plotterPoints}
            shape={renderCustomShape}
          />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}

function MetadataTooltip({ active, payload }) {
  if (!active || !payload || payload.length === 0) return null;

  const dataPoint = payload[0].payload;

  return (
    <div className="plotter-tooltip">
      <div className="tooltip-label">{dataPoint.label}</div>
      <div className="tooltip-meta">
        <span>Interval: {dataPoint.meta.interval}s</span>
        <span>Angle: {dataPoint.meta.angle}°</span>
        <span>Quality: {dataPoint.meta.quality}</span>
      </div>
    </div>
  );
}

export default RechartsPlotter;

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

export const IMAGE_COUNTS = [1, 2, 4, 8];

export const CELL_SIZE = 50;

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

```

---

# src\lib\gridLayout.js

```javascript
/**
 * Computes sub-image positions within a cell for multi-image rendering.
 *
 * Given an imageCount (1, 2, 4, or 8), returns an array of
 * { offsetX, offsetY, width, height } objects describing
 * each sub-image's position relative to the cell center.
 */
export function computeGridOffsets(cellWidth, cellHeight, imageCount) {
  const gridConfig = getGridConfig(imageCount);
  const subWidth = cellWidth;
  const subHeight = cellHeight;
  const offsets = [];

  for (let row = 0; row < gridConfig.rows; row++) {
    for (let col = 0; col < gridConfig.columns; col++) {
      if (offsets.length >= imageCount) break;

      const xPos = col * subWidth - ((gridConfig.columns - 1) * subWidth) / 2;
      const yPos = row * subHeight - ((gridConfig.rows - 1) * subHeight) / 2;

      offsets.push({
        offsetX: xPos,
        offsetY: yPos,
        width: subWidth,
        height: subHeight,
      });
    }
  }

  return offsets;
}

/**
 * Returns grid rows/columns for a given image count.
 */
function getGridConfig(imageCount) {
  const configs = {
    1: { rows: 1, columns: 1 },
    2: { rows: 1, columns: 2 },
    4: { rows: 2, columns: 2 },
    8: { rows: 2, columns: 4 },
  };

  return configs[imageCount] || configs[1];
}

/**
 * Computes absolute positions for sub-images at a given coordinate.
 * Returns array of { x, y, width, height } for each sub-image.
 */
export function computeImagePositions(centerX, centerY, cellWidth, cellHeight, imageCount) {
  const offsets = computeGridOffsets(cellWidth, cellHeight, imageCount);

  return offsets.map((offset) => ({
    x: centerX + offset.offsetX - offset.width / 2,
    y: centerY + offset.offsetY - offset.height / 2,
    width: offset.width,
    height: offset.height,
  }));
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
    fetchPlotterData();
  }, []);

  const fetchPlotterData = async () => {
    try {
      setIsLoading(true);
      setLoadError(null);

      const response = await fetch(DATA_URL);

      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status}`);
      }

      const jsonData = await response.json();
      setPlotterPoints(jsonData);
    } catch (fetchError) {
      setLoadError(fetchError.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { plotterPoints, isLoading, loadError };
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
import { useState } from "react";
import Navbar from "./components/Navbar";
import ImageCountSelector from "./components/ImageCountSelector";
import RechartsPlotter from "./components/RechartsPlotter";
import D3Plotter from "./components/D3Plotter";
import PixiPlotter from "./components/PixiPlotter";
import KonvaPlotter from "./components/KonvaPlotter";
import DeckGLPlotter from "./components/DeckGLPlotter";
import EChartsPlotter from "./components/EChartsPlotter";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("Recharts");
  const [imageCount, setImageCount] = useState(1);
  const [appliedXGap, setAppliedXGap] = useState(10);
  const [appliedYGap, setAppliedYGap] = useState(10);
  const [draftXGap, setDraftXGap] = useState(10);
  const [draftYGap, setDraftYGap] = useState(10);

  const hasChanges = draftXGap !== appliedXGap || draftYGap !== appliedYGap;

  const handleUpdate = () => {
    setAppliedXGap(draftXGap);
    setAppliedYGap(draftYGap);
  };

  const renderActivePlotter = () => {
    switch (activeTab) {
      case "Recharts":
        return <RechartsPlotter imageCount={imageCount} xGap={appliedXGap} yGap={appliedYGap} />;

      case "D3":
        return <D3Plotter imageCount={imageCount} xGap={appliedXGap} yGap={appliedYGap} />;

      case "PixiJS":
        return <PixiPlotter imageCount={imageCount} xGap={appliedXGap} yGap={appliedYGap} />;

      case "Konva":
        return <KonvaPlotter imageCount={imageCount} xGap={appliedXGap} yGap={appliedYGap} />;

      case "DeckGL":
        return <DeckGLPlotter imageCount={imageCount} xGap={appliedXGap} yGap={appliedYGap} />;

      case "ECharts":
        return <EChartsPlotter imageCount={imageCount} xGap={appliedXGap} yGap={appliedYGap} />;

      default:
        return <RechartsPlotter imageCount={imageCount} xGap={appliedXGap} yGap={appliedYGap} />;
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Image Plotting System PoC</h1>

      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <ImageCountSelector
        imageCount={imageCount}
        setImageCount={setImageCount}
      />

      <div style={{ display: "flex", gap: "20px", justifyContent: "center", marginBottom: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <label style={{ color: "#fff" }}>X Gap:</label>
          <input
            type="range"
            min="1"
            max="50"
            value={draftXGap}
            onChange={(e) => setDraftXGap(Number(e.target.value))}
          />
          <span style={{ color: "#888", width: "20px" }}>{draftXGap}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <label style={{ color: "#fff" }}>Y Gap:</label>
          <input
            type="range"
            min="1"
            max="50"
            value={draftYGap}
            onChange={(e) => setDraftYGap(Number(e.target.value))}
          />
          <span style={{ color: "#888", width: "20px" }}>{draftYGap}</span>
        </div>
        <button
          onClick={handleUpdate}
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

function PlaceholderPlotter({ libraryName }) {
  return (
    <div className="plotter-loading">
      {libraryName} plotter — coming soon (Phase 2/3)
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
import { computeImagePositions } from "../lib/gridLayout";
import { CELL_SIZE, PLOT_DIMENSIONS, PLOT_MARGIN } from "../lib/constants";
import PlotterControls from "./PlotterControls";

function D3Plotter({ imageCount, xGap, yGap }) {
  const { plotterPoints, isLoading, loadError } = usePlotterData();

  if (isLoading) return <div className="plotter-loading">Loading data…</div>;
  if (loadError) return <div className="plotter-error">Error: {loadError}</div>;

  return (
    <D3PlotCanvas plotterPoints={plotterPoints} imageCount={imageCount} xGap={xGap} yGap={yGap} />
  );
}

function D3PlotCanvas({ plotterPoints, imageCount, xGap, yGap }) {
  const svgRef = useRef(null);
  const tooltipRef = useRef(null);
  const zoomBehaviorRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(PLOT_DIMENSIONS.width);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        setContainerWidth(entry.contentRect.width);
      }
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    if (!svgRef.current || plotterPoints.length === 0) return;

    zoomBehaviorRef.current = renderPlot(
      svgRef.current,
      tooltipRef.current,
      plotterPoints,
      imageCount,
      containerWidth,
      xGap,
      yGap
    );
  }, [plotterPoints, imageCount, containerWidth, xGap, yGap]);

  const handleZoomIn = () => {
    if (zoomBehaviorRef.current && svgRef.current) {
      d3.select(svgRef.current).transition().call(zoomBehaviorRef.current.scaleBy, 1.5);
    }
  };

  const handleZoomOut = () => {
    if (zoomBehaviorRef.current && svgRef.current) {
      d3.select(svgRef.current).transition().call(zoomBehaviorRef.current.scaleBy, 1 / 1.5);
    }
  };

  const handleReset = () => {
    if (zoomBehaviorRef.current && svgRef.current) {
      d3.select(svgRef.current).transition().call(zoomBehaviorRef.current.transform, d3.zoomIdentity);
    }
  };

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      <PlotterControls
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
      />
      <svg ref={svgRef} />
      <div ref={tooltipRef} className="plotter-tooltip" style={{ display: "none" }} />
    </div>
  );
}

function renderPlot(svgElement, tooltipElement, plotterPoints, imageCount, containerWidth, xGap, yGap) {
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

  const zoomGroup = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

  const clipId = "plot-clip-" + Math.random().toString(36).slice(2);
  svg.append("defs")
    .append("clipPath")
    .attr("id", clipId)
    .append("rect")
    .attr("width", innerWidth)
    .attr("height", innerHeight);

  const plotGroup = zoomGroup.append("g").attr("clip-path", `url(#${clipId})`);
  const contentGroup = plotGroup.append("g");

  renderAxes(zoomGroup, xScale, yScale, innerWidth, innerHeight);
  renderGrid(contentGroup, xScale, yScale, innerWidth, innerHeight);
  renderImagePoints(contentGroup, plotterPoints, xScale, yScale, imageCount, tooltipElement);

  const zoomBehavior = d3.zoom()
    .scaleExtent([0.3, 10])
    .on("zoom", (event) => {
      const newXScale = event.transform.rescaleX(xScale);
      const newYScale = event.transform.rescaleY(yScale);

      contentGroup.attr("transform", event.transform);
      updateAxes(zoomGroup, newXScale, newYScale, innerWidth, innerHeight);
    });

  svg.call(zoomBehavior);
  return zoomBehavior;
}

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

function renderAxes(container, xScale, yScale, innerWidth, innerHeight) {
  container.append("g")
    .attr("class", "x-axis")
    .attr("transform", `translate(0,${innerHeight})`)
    .call(d3.axisBottom(xScale).ticks(8))
    .selectAll("text")
    .attr("fill", "#888");

  container.append("g")
    .attr("class", "y-axis")
    .call(d3.axisLeft(yScale).ticks(6))
    .selectAll("text")
    .attr("fill", "#888");

  container.selectAll(".x-axis line, .y-axis line").attr("stroke", "#555");
  container.selectAll(".x-axis path, .y-axis path").attr("stroke", "#555");
}

function updateAxes(container, newXScale, newYScale, innerWidth, innerHeight) {
  container.select(".x-axis").call(d3.axisBottom(newXScale).ticks(8));
  container.select(".y-axis").call(d3.axisLeft(newYScale).ticks(6));

  container.selectAll(".x-axis text, .y-axis text").attr("fill", "#888");
  container.selectAll(".x-axis line, .y-axis line").attr("stroke", "#555");
  container.selectAll(".x-axis path, .y-axis path").attr("stroke", "#555");
}

function renderGrid(container, xScale, yScale, innerWidth, innerHeight) {
  container.append("g")
    .attr("class", "grid-lines")
    .selectAll("line.horizontal")
    .data(yScale.ticks(6))
    .enter()
    .append("line")
    .attr("x1", 0)
    .attr("x2", innerWidth)
    .attr("y1", (tick) => yScale(tick))
    .attr("y2", (tick) => yScale(tick))
    .attr("stroke", "#2a2a3e")
    .attr("stroke-dasharray", "3 3");

  container.select(".grid-lines")
    .selectAll("line.vertical")
    .data(xScale.ticks(8))
    .enter()
    .append("line")
    .attr("x1", (tick) => xScale(tick))
    .attr("x2", (tick) => xScale(tick))
    .attr("y1", 0)
    .attr("y2", innerHeight)
    .attr("stroke", "#2a2a3e")
    .attr("stroke-dasharray", "3 3");
}

function renderImagePoints(container, plotterPoints, xScale, yScale, imageCount, tooltipElement) {
  const tooltip = d3.select(tooltipElement);

  plotterPoints.forEach((point) => {
    const centerX = xScale(point.x);
    const centerY = yScale(point.y);
    const positions = computeImagePositions(centerX, centerY, CELL_SIZE, CELL_SIZE, imageCount);

    const pointGroup = container.append("g").attr("class", "image-point");

    positions.forEach((position) => {
      pointGroup.append("image")
        .attr("href", point.image)
        .attr("x", position.x)
        .attr("y", position.y)
        .attr("width", position.width)
        .attr("height", position.height)
        .attr("preserveAspectRatio", "xMidYMid slice")
        .style("cursor", "pointer");
    });

    pointGroup
      .on("mouseenter", (event) => showTooltip(tooltip, event, point))
      .on("mousemove", (event) => moveTooltip(tooltip, event))
      .on("mouseleave", () => hideTooltip(tooltip));
  });
}

function showTooltip(tooltip, event, point) {
  tooltip
    .style("display", "block")
    .html(
      `<div class="tooltip-label">${point.label}</div>` +
      `<div class="tooltip-meta">` +
      `<span>Interval: ${point.meta.interval}s</span>` +
      `<span>Angle: ${point.meta.angle}°</span>` +
      `<span>Quality: ${point.meta.quality}</span>` +
      `</div>`
    );

  moveTooltip(tooltip, event);
}

function moveTooltip(tooltip, event) {
  const containerRect = event.currentTarget.closest(".viewer-container")?.getBoundingClientRect();
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

# src\components\DeckGLPlotter.jsx

```jsx
import { useState, useMemo, useCallback } from "react";
import DeckGL from "@deck.gl/react";
import { OrthographicView } from "@deck.gl/core";
import { IconLayer, LineLayer, TextLayer } from "@deck.gl/layers";
import { usePlotterData } from "../lib/plotterData";
import { computeImagePositions } from "../lib/gridLayout";
import { CELL_SIZE } from "../lib/constants";
import PlotterControls from "./PlotterControls";

const INITIAL_VIEW_STATE = {
  target: [15, 22, 0],
  zoom: 3,
  minZoom: -2,
  maxZoom: 10,
};

const ORTHOGRAPHIC_VIEW = new OrthographicView({
  id: "ortho-view",
  flipY: false,
});

function DeckGLPlotter({ imageCount, xGap, yGap }) {
  const { plotterPoints, isLoading, loadError } = usePlotterData();

  if (isLoading) return <div className="plotter-loading">Loading data…</div>;
  if (loadError) return <div className="plotter-error">Error: {loadError}</div>;

  return (
    <DeckGLCanvas plotterPoints={plotterPoints} imageCount={imageCount} xGap={xGap} yGap={yGap} />
  );
}

function DeckGLCanvas({ plotterPoints, imageCount, xGap, yGap }) {
  const [tooltipInfo, setTooltipInfo] = useState(null);
  const [viewState, setViewState] = useState(INITIAL_VIEW_STATE);

  const expandedIconData = useMemo(
    () => expandDataForMultiImage(plotterPoints, imageCount, xGap, yGap),
    [plotterPoints, imageCount, xGap, yGap]
  );

  const iconLayer = useMemo(
    () => createIconLayer(expandedIconData),
    [expandedIconData]
  );

  const axesLayers = useMemo(
    () => createAxesLayers(plotterPoints, xGap, yGap),
    [plotterPoints, xGap, yGap]
  );

  const handleHover = useCallback((info) => {
    if (info.object) {
      setTooltipInfo({
        x: info.x,
        y: info.y,
        object: info.object,
      });
    } else {
      setTooltipInfo(null);
    }
  }, []);

  const handleZoomIn = () => setViewState((v) => ({ ...v, zoom: Math.min(v.zoom + 1, v.maxZoom) }));
  const handleZoomOut = () => setViewState((v) => ({ ...v, zoom: Math.max(v.zoom - 1, v.minZoom) }));
  const handleReset = () => setViewState(INITIAL_VIEW_STATE);

  return (
    <div style={{ position: "relative", height: 550, background: "#16213e" }}>
      <PlotterControls
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
      />
      <DeckGL
        views={ORTHOGRAPHIC_VIEW}
        viewState={viewState}
        onViewStateChange={({ viewState }) => setViewState(viewState)}
        controller
        layers={[...axesLayers, iconLayer]}
        onHover={handleHover}
        style={{ position: "relative", height: "100%" }}
      />
      {tooltipInfo && (
        <DeckGLTooltip tooltipInfo={tooltipInfo} />
      )}
    </div>
  );
}

function expandDataForMultiImage(plotterPoints, imageCount, xGap, yGap) {
  const expandedEntries = [];
  const scaleFactor = 2;
  const xSpacingScale = xGap / 10;
  const ySpacingScale = yGap / 10;

  plotterPoints.forEach((point) => {
    const cellSize = CELL_SIZE / scaleFactor;
    const positions = computeImagePositions(
      point.x * xSpacingScale,
      point.y * ySpacingScale,
      cellSize,
      cellSize,
      imageCount
    );

    positions.forEach((position, index) => {
      expandedEntries.push({
        id: `${point.id}-sub-${index}`,
        position: [
          position.x + position.width / 2,
          position.y + position.height / 2,
        ],
        width: position.width,
        height: position.height,
        image: point.image,
        label: point.label,
        meta: point.meta,
      });
    });
  });

  return expandedEntries;
}

function createIconLayer(expandedIconData) {
  return new IconLayer({
    id: "image-icon-layer",
    data: expandedIconData,
    getPosition: (entry) => entry.position,
    getIcon: (entry) => ({
      url: entry.image,
      width: 128,
      height: 128,
    }),
    getSize: 20,
    sizeUnits: "common",
    pickable: true,
    sizeScale: 1,
  });
}

function createAxesLayers(plotterPoints, xGap, yGap) {
  if (plotterPoints.length === 0) return [];
  const xValues = plotterPoints.map((p) => p.x);
  const yValues = plotterPoints.map((p) => p.y);
  const xMin = Math.min(...xValues);
  const xMax = Math.max(...xValues);
  const yMin = Math.min(...yValues);
  const yMax = Math.max(...yValues);
  const padX = (xMax - xMin) * 0.1 || 5;
  const padY = (yMax - yMin) * 0.1 || 5;

  const xSpacingScale = xGap / 10;
  const ySpacingScale = yGap / 10;

  const lines = [];
  const texts = [];

  const tickCount = 5;
  for (let i = 0; i <= tickCount; i++) {
    const x = xMin - padX + ((xMax - xMin + padX * 2) * i) / tickCount;
    const scaledX = x * xSpacingScale;
    lines.push({
      sourcePosition: [scaledX, (yMin - padY) * ySpacingScale],
      targetPosition: [scaledX, (yMax + padY) * ySpacingScale]
    });
    texts.push({ position: [scaledX, (yMax + padY + 2) * ySpacingScale], text: Math.round(x).toString() });
  }

  for (let i = 0; i <= tickCount; i++) {
    const y = yMin - padY + ((yMax - yMin + padY * 2) * i) / tickCount;
    const scaledY = y * ySpacingScale;
    lines.push({
      sourcePosition: [(xMin - padX) * xSpacingScale, scaledY],
      targetPosition: [(xMax + padX) * xSpacingScale, scaledY]
    });
    texts.push({ position: [(xMin - padX - 2) * xSpacingScale, scaledY], text: Math.round(y).toString() });
  }

  return [
    new LineLayer({
      id: "grid-lines",
      data: lines,
      getSourcePosition: (d) => d.sourcePosition,
      getTargetPosition: (d) => d.targetPosition,
      getColor: [42, 42, 62],
      getWidth: 1,
      widthUnits: "pixels",
    }),
    new TextLayer({
      id: "axis-labels",
      data: texts,
      getPosition: (d) => d.position,
      getText: (d) => d.text,
      getSize: 12,
      getColor: [136, 136, 136],
      sizeUnits: "pixels",
    }),
  ];
}

function DeckGLTooltip({ tooltipInfo }) {
  const { x, y, object } = tooltipInfo;

  return (
    <div
      className="plotter-tooltip"
      style={{
        display: "block",
        left: x + 12,
        top: y - 10,
      }}
    >
      <div className="tooltip-label">{object.label}</div>
      <div className="tooltip-meta">
        <span>Interval: {object.meta.interval}s</span>
        <span>Angle: {object.meta.angle}°</span>
        <span>Quality: {object.meta.quality}</span>
      </div>
    </div>
  );
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
    <EChartsCanvas plotterPoints={plotterPoints} imageCount={imageCount} xGap={xGap} yGap={yGap} />
  );
}

function EChartsCanvas({ plotterPoints, imageCount, xGap, yGap }) {
  const echartsRef = useRef(null);

  const chartOption = useMemo(
    () => buildChartOption(plotterPoints, imageCount, xGap, yGap),
    [plotterPoints, imageCount, xGap, yGap]
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
      type: 'dataZoom',
      start: Math.max(0, center - newRange / 2),
      end: Math.min(100, center + newRange / 2)
    });
  };

  const handleReset = () => {
    if (!echartsRef.current) return;
    const instance = echartsRef.current.getEchartsInstance();
    instance.dispatchAction({ type: 'dataZoom', start: 0, end: 100 });
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

              const xPos = col * (subCellWidth + xGap) - ((gridConfig.columns - 1) * (subCellWidth + xGap)) / 2;
              const yPos = row * (subCellHeight + yGap) - ((gridConfig.rows - 1) * (subCellHeight + yGap)) / 2;

              children.push({
                type: "image",
                style: {
                  image: api.value(2),
                  x: coord[0] + xPos - subCellWidth / 2,
                  y: coord[1] + yPos - subCellHeight / 2,
                  width: subCellWidth,
                  height: subCellHeight,
                }
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
import { IMAGE_COUNTS } from "../lib/constants";

function ImageCountSelector({ imageCount, setImageCount }) {
  return (
    <div className="image-count-selector">
      <span className="selector-label">Images per point:</span>
      {IMAGE_COUNTS.map((count) => (
        <button
          key={count}
          className={`count-button ${imageCount === count ? "active" : ""}`}
          onClick={() => setImageCount(count)}
        >
          {count}
        </button>
      ))}
    </div>
  );
}

export default ImageCountSelector;

```

---

# src\components\KonvaPlotter.jsx

```jsx
import { useState, useRef, useCallback, useEffect } from "react";
import { Stage, Layer, Image as KonvaImage, Text, Line, Rect, Group } from "react-konva";
import { usePlotterData } from "../lib/plotterData";
import { computeImagePositions } from "../lib/gridLayout";
import { CELL_SIZE, PLOT_DIMENSIONS, PLOT_MARGIN } from "../lib/constants";
import PlotterControls from "./PlotterControls";

const AXIS_TICK_COUNT = 8;
const EXTENT_PADDING_RATIO = 0.2;
const EXTENT_FALLBACK_PADDING = 5;
const ZOOM_STEP = 1.5;
const PINCH_ZOOM_SENSITIVITY = 0.01;
const ZOOM_MIN = 0.3;
const ZOOM_MAX = 10;
const GRID_COLOR = "#2a2a3e";
const AXIS_LINE_COLOR = "#555555";
const TICK_LABEL_COLOR = "#aaaaaa";
const TICK_LABEL_FONT_SIZE = 11;

function KonvaPlotter({ imageCount, xGap, yGap }) {
  const { plotterPoints, isLoading, loadError } = usePlotterData();

  if (isLoading) return <div className="plotter-loading">Loading data…</div>;
  if (loadError) return <div className="plotter-error">Error: {loadError}</div>;

  return (
    <KonvaCanvas
      plotterPoints={plotterPoints}
      imageCount={imageCount}
      xGap={xGap}
      yGap={yGap}
    />
  );
}

function KonvaCanvas({ plotterPoints, imageCount, xGap, yGap }) {
  const [contentScale, setContentScale] = useState(1);
  const [contentOffset, setContentOffset] = useState({ x: 0, y: 0 });
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const draggableGroupRef = useRef(null);
  const stageRef = useRef(null);

  const innerWidth = PLOT_DIMENSIONS.width - PLOT_MARGIN.left - PLOT_MARGIN.right;
  const innerHeight = PLOT_DIMENSIONS.height - PLOT_MARGIN.top - PLOT_MARGIN.bottom;

  const { xScale, yScale, xExtent, yExtent } = buildScales(
    plotterPoints,
    innerWidth,
    innerHeight
  );

  const visibleDomain = computeVisibleDomain(
    xExtent,
    yExtent,
    contentOffset,
    contentScale,
    innerWidth,
    innerHeight
  );

  const handleWheel = useCallback(
    (event) => {
      event.evt.preventDefault();
      const stage = event.target.getStage();
      const pointerPosition = stage.getPointerPosition();

      if (!isPointerInsidePlotArea(pointerPosition, innerWidth, innerHeight)) return;

      const nativeEvent = event.evt;
      const isPinchGesture = nativeEvent.ctrlKey;
      const scaleDelta = computeWheelScaleDelta(nativeEvent.deltaY, isPinchGesture);
      const newScale = clampScale(contentScale * scaleDelta);

      const mouseRelX = pointerPosition.x - PLOT_MARGIN.left - contentOffset.x;
      const mouseRelY = pointerPosition.y - PLOT_MARGIN.top - contentOffset.y;

      const nextOffsetX = contentOffset.x - mouseRelX * (newScale / contentScale - 1);
      const nextOffsetY = contentOffset.y - mouseRelY * (newScale / contentScale - 1);

      const clampedOffset = clampContentOffset(nextOffsetX, nextOffsetY, newScale, innerWidth, innerHeight);

      setContentScale(newScale);
      setContentOffset(clampedOffset);
    },
    [contentScale, contentOffset, innerWidth, innerHeight]
  );

  const handleContentDragStart = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleContentDragMove = useCallback(
    (event) => {
      const node = event.target;
      const offsetX = node.x() - PLOT_MARGIN.left;
      const offsetY = node.y() - PLOT_MARGIN.top;

      const clamped = clampContentOffset(offsetX, offsetY, contentScale, innerWidth, innerHeight);

      node.x(PLOT_MARGIN.left + clamped.x);
      node.y(PLOT_MARGIN.top + clamped.y);
    },
    [contentScale, innerWidth, innerHeight]
  );

  const handleContentDragEnd = useCallback(
    (event) => {
      setIsDragging(false);
      const nodeX = event.target.x();
      const nodeY = event.target.y();
      setContentOffset({
        x: nodeX - PLOT_MARGIN.left,
        y: nodeY - PLOT_MARGIN.top,
      });
    },
    []
  );

  const handleZoomIn = useCallback(() => {
    const centerX = innerWidth / 2;
    const centerY = innerHeight / 2;
    const newScale = clampScale(contentScale * ZOOM_STEP);

    const nextOffsetX = contentOffset.x - centerX * (newScale / contentScale - 1);
    const nextOffsetY = contentOffset.y - centerY * (newScale / contentScale - 1);
    const clampedOffset = clampContentOffset(nextOffsetX, nextOffsetY, newScale, innerWidth, innerHeight);

    setContentScale(newScale);
    setContentOffset(clampedOffset);
  }, [contentScale, contentOffset, innerWidth, innerHeight]);

  const handleZoomOut = useCallback(() => {
    const centerX = innerWidth / 2;
    const centerY = innerHeight / 2;
    const newScale = clampScale(contentScale / ZOOM_STEP);

    const nextOffsetX = contentOffset.x - centerX * (newScale / contentScale - 1);
    const nextOffsetY = contentOffset.y - centerY * (newScale / contentScale - 1);
    const clampedOffset = clampContentOffset(nextOffsetX, nextOffsetY, newScale, innerWidth, innerHeight);

    setContentScale(newScale);
    setContentOffset(clampedOffset);
  }, [contentScale, contentOffset, innerWidth, innerHeight]);

  const handleReset = useCallback(() => {
    setContentScale(1);
    setContentOffset({ x: 0, y: 0 });
  }, []);

  const stageCursor = isDragging ? "grabbing" : contentScale > 1 ? "grab" : "default";

  return (
    <div style={{ position: "relative" }}>
      <PlotterControls
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
        zoomLevel={contentScale}
      />
      <Stage
        ref={stageRef}
        width={PLOT_DIMENSIONS.width}
        height={PLOT_DIMENSIONS.height}
        onWheel={handleWheel}
        style={{ cursor: stageCursor }}
      >
        {/* Static axis layer — grid, labels, border (not affected by zoom/pan) */}
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

        {/* Clipped content layer — images are clipped to the plot area */}
        <Layer>
          <ClippedContentGroup
            innerWidth={innerWidth}
            innerHeight={innerHeight}
            contentOffset={contentOffset}
            contentScale={contentScale}
            draggableGroupRef={draggableGroupRef}
            onDragStart={handleContentDragStart}
            onDragMove={handleContentDragMove}
            onDragEnd={handleContentDragEnd}
          >
            {plotterPoints.map((point) => (
              <ImagePointGroup
                key={point.id}
                point={point}
                xScale={xScale}
                yScale={yScale}
                imageCount={imageCount}
                onHover={setHoveredPoint}
                onCursorMove={setCursorPosition}
              />
            ))}
          </ClippedContentGroup>
        </Layer>
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

function ClippedContentGroup({
  innerWidth,
  innerHeight,
  contentOffset,
  contentScale,
  draggableGroupRef,
  onDragStart,
  onDragMove,
  onDragEnd,
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
        ref={draggableGroupRef}
        x={plotLeft + contentOffset.x}
        y={plotTop + contentOffset.y}
        scaleX={contentScale}
        scaleY={contentScale}
        draggable
        onDragStart={onDragStart}
        onDragMove={onDragMove}
        onDragEnd={onDragEnd}
      >
        {/* Invisible hit area so drag works from any empty space in the plot */}
        <Rect
          x={0}
          y={0}
          width={innerWidth}
          height={innerHeight}
          fill="transparent"
          listening={true}
        />
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
  const xTicks = buildTicks(visibleDomain.xMin, visibleDomain.xMax, AXIS_TICK_COUNT);
  const yTicks = buildTicks(visibleDomain.yMin, visibleDomain.yMax, AXIS_TICK_COUNT);

  const xScreenScale = buildLinearScale(visibleDomain.xMin, visibleDomain.xMax, 0, innerWidth);
  const yScreenScale = buildLinearScale(visibleDomain.yMin, visibleDomain.yMax, innerHeight, 0);

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
      />
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
      />
    );
  });

  return <>{gridLines}</>;
}

function AxisLabels({ visibleDomain, innerWidth, innerHeight }) {
  const xTicks = buildTicks(visibleDomain.xMin, visibleDomain.xMax, AXIS_TICK_COUNT);
  const yTicks = buildTicks(visibleDomain.yMin, visibleDomain.yMax, AXIS_TICK_COUNT);

  const xScreenScale = buildLinearScale(visibleDomain.xMin, visibleDomain.xMax, 0, innerWidth);
  const yScreenScale = buildLinearScale(visibleDomain.yMin, visibleDomain.yMax, innerHeight, 0);

  const tickLabels = [];

  xTicks.forEach((value, index) => {
    const xPos = PLOT_MARGIN.left + xScreenScale(value);
    if (xPos < PLOT_MARGIN.left - 5 || xPos > PLOT_MARGIN.left + innerWidth + 5) return;
    tickLabels.push(
      <Text
        key={`xlabel-${index}`}
        text={formatTickLabel(value)}
        x={xPos - 14}
        y={PLOT_MARGIN.top + innerHeight + 6}
        fill={TICK_LABEL_COLOR}
        fontSize={TICK_LABEL_FONT_SIZE}
        listening={false}
      />
    );
  });

  yTicks.forEach((value, index) => {
    const yPos = PLOT_MARGIN.top + yScreenScale(value);
    if (yPos < PLOT_MARGIN.top - 5 || yPos > PLOT_MARGIN.top + innerHeight + 5) return;
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
      />
    );
  });

  return <>{tickLabels}</>;
}

function ImagePointGroup({ point, xScale, yScale, imageCount, onHover, onCursorMove }) {
  const centerX = xScale(point.x);
  const centerY = yScale(point.y);
  const positions = computeImagePositions(centerX, centerY, CELL_SIZE, CELL_SIZE, imageCount);

  return (
    <>
      {positions.map((position, index) => (
        <KonvaImageFromUrl
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

function KonvaImageFromUrl({ imageUrl, x, y, width, height, point, onHover, onCursorMove }) {
  const [loadedImage, setLoadedImage] = useState(null);

  useEffect(() => {
    const htmlImage = new window.Image();
    htmlImage.crossOrigin = "anonymous";
    htmlImage.src = imageUrl;
    htmlImage.onload = () => setLoadedImage(htmlImage);
    return () => { htmlImage.onload = null; };
  }, [imageUrl]);

  const handleMouseEnter = useCallback(
    (event) => {
      const stage = event.target.getStage();
      const pointer = stage.getPointerPosition();
      onCursorMove({ x: pointer.x, y: pointer.y });
      onHover(point);
    },
    [point, onHover, onCursorMove]
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

/* ─── Pure utility functions ──────────────────────────────────────────── */

function isPointerInsidePlotArea(pointerPosition, plotInnerWidth, plotInnerHeight) {
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

function clampContentOffset(rawX, rawY, scale, plotInnerWidth, plotInnerHeight) {
  const scaledWidth = plotInnerWidth * scale;
  const scaledHeight = plotInnerHeight * scale;

  let clampedX = rawX;
  let clampedY = rawY;

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

  const xPadding = (xMax - xMin) * EXTENT_PADDING_RATIO || EXTENT_FALLBACK_PADDING;
  const yPadding = (yMax - yMin) * EXTENT_PADDING_RATIO || EXTENT_FALLBACK_PADDING;

  const xExtent = [xMin - xPadding, xMax + xPadding];
  const yExtent = [yMin - yPadding, yMax + yPadding];

  const xScale = buildLinearScale(xExtent[0], xExtent[1], 0, plotInnerWidth);
  const yScale = buildLinearScale(yExtent[0], yExtent[1], plotInnerHeight, 0);

  return { xScale, yScale, xExtent, yExtent };
}

function computeVisibleDomain(xExtent, yExtent, contentOffset, scale, plotInnerWidth, plotInnerHeight) {
  const domainWidth = xExtent[1] - xExtent[0];
  const domainHeight = yExtent[1] - yExtent[0];

  const xMin = xExtent[0] - (contentOffset.x / scale / plotInnerWidth) * domainWidth;
  const xMax = xMin + domainWidth / scale;

  const yMax = yExtent[1] + (contentOffset.y / scale / plotInnerHeight) * domainHeight;
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
  const step = niceSteps.map((s) => s * magnitude).find((s) => s >= rawStep) ?? rawStep;

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
import { LIBRARIES } from "../lib/constants";

function Navbar({ activeTab, setActiveTab }) {
  return (
    <div className="tab-container">
      {LIBRARIES.map((libraryName) => (
        <button
          key={libraryName}
          className={`tab-button ${activeTab === libraryName ? "active" : ""}`}
          onClick={() => setActiveTab(libraryName)}
        >
          {libraryName}
        </button>
      ))}
    </div>
  );
}

export default Navbar;

```

---

# src\components\PixiPlotter.jsx

```jsx
/* eslint-disable react-hooks/exhaustive-deps */
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

import PlotterControls from "./PlotterControls";

const GRID_COLOR = 0x333333;
const GRID_ALPHA = 0.45;

const AXIS_BORDER_COLOR = 0x555555;

const TICK_COLOR = "#999999";

const ZOOM_MIN = 0.5;
const ZOOM_MAX = 8;

const ZOOM_STEP = 1.4;

function PixiPlotter({ imageCount, xGap, yGap }) {
  const { plotterPoints, isLoading, loadError } = usePlotterData();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (loadError) {
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

  const innerWidth =
    PLOT_DIMENSIONS.width - PLOT_MARGIN.left - PLOT_MARGIN.right;

  const innerHeight =
    PLOT_DIMENSIONS.height - PLOT_MARGIN.top - PLOT_MARGIN.bottom;

  /*
   * INITIALIZE PIXI
   */
  useEffect(() => {
    let cancelled = false;

    async function init() {
      if (!containerRef.current) return;

      const app = new PixiApp();

      await app.init({
        width: PLOT_DIMENSIONS.width,
        height: PLOT_DIMENSIONS.height,
        background: 0x16213e,
        antialias: true,
      });

      if (cancelled) {
        app.destroy(true);
        return;
      }

      containerRef.current.appendChild(app.canvas);

      pixiAppRef.current = app;

      /*
       * AXES LAYER
       */
      const axesLayer = new Container();

      axesLayer.x = PLOT_MARGIN.left;
      axesLayer.y = PLOT_MARGIN.top;

      app.stage.addChild(axesLayer);

      axesLayerRef.current = axesLayer;

      /*
       * CONTENT LAYER
       */
      const contentLayer = new Container();

      contentLayer.x = PLOT_MARGIN.left;
      contentLayer.y = PLOT_MARGIN.top;

      app.stage.addChild(contentLayer);

      contentLayerRef.current = contentLayer;

      /*
       * MASK / CLIPPING
       */
      const mask = new Graphics();

      mask.rect(PLOT_MARGIN.left, PLOT_MARGIN.top, innerWidth, innerHeight);

      mask.fill(0xffffff);

      app.stage.addChild(mask);

      contentLayer.mask = mask;

      maskRef.current = mask;

      requestAnimationFrame(() => {
        renderScene();
      });
    }

    init();

    return () => {
      cancelled = true;

      if (pixiAppRef.current) {
        pixiAppRef.current.destroy(true);
      }
    };
  }, []);

  /*
   * GET VIEWPORT SCALES
   */
  const getViewportScales = useCallback(() => {
    const baseXScale = baseScalesRef.current.xScale;
    const baseYScale = baseScalesRef.current.yScale;

    if (!baseXScale || !baseYScale) {
      return null;
    }

    const { scale, x, y } = transformRef.current;

    /*
     * visible viewport pixels
     */
    const leftPx = -x / scale;
    const rightPx = (innerWidth - x) / scale;

    const topPx = -y / scale;
    const bottomPx = (innerHeight - y) / scale;

    /*
     * convert visible pixels -> domain
     */
    const visibleXMin = baseXScale.invert(leftPx);
    const visibleXMax = baseXScale.invert(rightPx);

    const visibleYMax = baseYScale.invert(topPx);
    const visibleYMin = baseYScale.invert(bottomPx);

    const dynamicXScale = d3
      .scaleLinear()
      .domain([visibleXMin, visibleXMax])
      .range([0, innerWidth]);

    const dynamicYScale = d3
      .scaleLinear()
      .domain([visibleYMin, visibleYMax])
      .range([innerHeight, 0]);

    return {
      dynamicXScale,
      dynamicYScale,
    };
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
      innerHeight,
    );

    drawAxesLabels(
      axesLayer,
      viewportScales.dynamicXScale,
      viewportScales.dynamicYScale,
      innerWidth,
      innerHeight,
    );
  }, [getViewportScales, innerWidth, innerHeight]);

  /*
   * MAIN RENDER
   */
  const renderScene = async () => {
    if (!axesLayerRef.current) return;

    if (!contentLayerRef.current) return;

    const contentLayer = contentLayerRef.current;

    contentLayer.removeChildren();

    const scaledPoints = plotterPoints.map((point) => ({
      ...point,
      scaledX: point.x * (xGap / 10),
      scaledY: point.y * (yGap / 10),
    }));

    const xExtent = d3.extent(scaledPoints, (d) => d.scaledX);

    const yExtent = d3.extent(scaledPoints, (d) => d.scaledY);

    /*
     * BASE SCALES
     */
    const baseXScale = d3
      .scaleLinear()
      .domain([xExtent[0] - 5, xExtent[1] + 5])
      .range([0, innerWidth]);

    const baseYScale = d3
      .scaleLinear()
      .domain([yExtent[0] - 5, yExtent[1] + 5])
      .range([innerHeight, 0]);

    baseScalesRef.current = {
      xScale: baseXScale,
      yScale: baseYScale,
    };

    /*
     * RENDER DYNAMIC AXES
     */
    renderAxes();

    /*
     * LOAD IMAGES
     */
    const uniqueImages = [...new Set(plotterPoints.map((p) => p.image))];

    await Assets.load(uniqueImages);

    /*
     * DRAW POINTS USING BASE SCALE
     */
    drawPoints(
      contentLayer,
      scaledPoints,
      baseXScale,
      baseYScale,
      imageCount,
      tooltipRef,
    );

    applyTransform();
  };

  /*
   * APPLY TRANSFORM
   */
  const applyTransform = () => {
    if (!contentLayerRef.current) return;

    const contentLayer = contentLayerRef.current;

    contentLayer.scale.set(transformRef.current.scale);

    contentLayer.x = PLOT_MARGIN.left + transformRef.current.x;

    contentLayer.y = PLOT_MARGIN.top + transformRef.current.y;

    /*
     * rerender viewport axes
     */
    renderAxes();
  };

  /*
   * CLAMP PAN
   */
  const clampPan = (x, y, scale) => {
    const scaledWidth = innerWidth * scale;
    const scaledHeight = innerHeight * scale;

    let minX = innerWidth - scaledWidth;
    let minY = innerHeight - scaledHeight;

    if (scaledWidth < innerWidth) {
      minX = (innerWidth - scaledWidth) / 2;
    }

    if (scaledHeight < innerHeight) {
      minY = (innerHeight - scaledHeight) / 2;
    }

    return {
      x: Math.min(0, Math.max(minX, x)),
      y: Math.min(0, Math.max(minY, y)),
    };
  };

  /*
   * ZOOM
   */
  const zoom = (direction) => {
    const currentScale = transformRef.current.scale;

    const nextScale =
      direction === "in"
        ? Math.min(currentScale * ZOOM_STEP, ZOOM_MAX)
        : Math.max(currentScale / ZOOM_STEP, ZOOM_MIN);

    const centerX = innerWidth / 2;
    const centerY = innerHeight / 2;

    let nextX =
      transformRef.current.x - centerX * (nextScale / currentScale - 1);

    let nextY =
      transformRef.current.y - centerY * (nextScale / currentScale - 1);

    const clamped = clampPan(nextX, nextY, nextScale);

    transformRef.current = {
      scale: nextScale,
      x: clamped.x,
      y: clamped.y,
    };

    setZoomLevel(nextScale);

    applyTransform();
  };

  /*
   * RESET
   */
  const reset = () => {
    transformRef.current = {
      scale: 1,
      x: 0,
      y: 0,
    };

    setZoomLevel(1);

    applyTransform();
  };

  /*
   * WHEEL ZOOM
   */
  const handleWheel = useCallback((event) => {
    event.preventDefault();

    if (event.deltaY > 0) {
      zoom("out");
    } else {
      zoom("in");
    }
  }, []);

  /*
   * DRAG
   */
  const handleMouseDown = useCallback((event) => {
    dragRef.current.dragging = true;

    dragRef.current.startX = event.clientX - transformRef.current.x;

    dragRef.current.startY = event.clientY - transformRef.current.y;
  }, []);

  const handleMouseMove = useCallback((event) => {
    if (!dragRef.current.dragging) return;

    let nextX = event.clientX - dragRef.current.startX;

    let nextY = event.clientY - dragRef.current.startY;

    const clamped = clampPan(nextX, nextY, transformRef.current.scale);

    transformRef.current.x = clamped.x;
    transformRef.current.y = clamped.y;

    applyTransform();
  }, []);

  const handleMouseUp = useCallback(() => {
    dragRef.current.dragging = false;
  }, []);

  /*
   * RERENDER
   */
  useEffect(() => {
    if (!plotterPoints.length) return;

    renderScene();
  }, [plotterPoints, imageCount, xGap, yGap]);

  return (
    <div style={{ position: "relative" }}>
      <PlotterControls
        zoomLevel={zoomLevel}
        onZoomIn={() => zoom("in")}
        onZoomOut={() => zoom("out")}
        onReset={reset}
      />

      <div
        ref={containerRef}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{
          cursor: dragRef.current.dragging ? "grabbing" : "grab",
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
function drawGrid(layer, xScale, yScale, width, height) {
  const grid = new Graphics();

  const xTicks = buildIntegerTicks(xScale.domain());

  const yTicks = buildIntegerTicks(yScale.domain());

  xTicks.forEach((tick) => {
    const x = xScale(tick);

    grid.moveTo(x, 0);
    grid.lineTo(x, height);
  });

  yTicks.forEach((tick) => {
    const y = yScale(tick);

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
function drawAxesLabels(layer, xScale, yScale, innerWidth, innerHeight) {
  const xTicks = buildIntegerTicks(xScale.domain());

  const yTicks = buildIntegerTicks(yScale.domain());

  xTicks.forEach((tick) => {
    const label = new PixiText({
      text: tick.toString(),
      style: {
        fill: TICK_COLOR,
        fontSize: 11,
      },
    });

    label.x = xScale(tick) - label.width / 2;

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

    label.y = yScale(tick) - label.height / 2;

    layer.addChild(label);
  });
}

/*
 * POINTS
 */
function drawPoints(layer, points, xScale, yScale, imageCount, tooltipRef) {
  points.forEach((point) => {
    const x = xScale(point.scaledX);

    const y = yScale(point.scaledY);

    const positions = computeImagePositions(
      x,
      y,
      CELL_SIZE,
      CELL_SIZE,
      imageCount,
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
export default function PlotterControls({ onZoomIn, onZoomOut, onReset, zoomLevel }) {
  return (
    <div className="zoom-controls">
      <button className="zoom-button" onClick={onZoomIn}>+</button>
      <button className="zoom-button" onClick={onZoomOut}>−</button>
      <button className="zoom-button" onClick={onReset}>Reset</button>
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
import { useState, useCallback, useRef } from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { usePlotterData } from "../lib/plotterData";
import { computeImagePositions } from "../lib/gridLayout";
import { CELL_SIZE, PLOT_MARGIN } from "../lib/constants";
import PlotterControls from "./PlotterControls";

const ZOOM_STEP = 1.5;
const ZOOM_MIN = 0.3;
const ZOOM_MAX = 8;
const DOMAIN_PADDING_UNITS = 1;
const CLIP_PATH_ID = "recharts-plot-clip";

function RechartsPlotter({ imageCount, xGap, yGap }) {
  const { plotterPoints, isLoading, loadError } = usePlotterData();
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoomIn = useCallback(
    () => setZoomLevel((prev) => Math.min(prev * ZOOM_STEP, ZOOM_MAX)),
    [],
  );

  const handleZoomOut = useCallback(
    () => setZoomLevel((prev) => Math.max(prev / ZOOM_STEP, ZOOM_MIN)),
    [],
  );

  const handleReset = useCallback(() => setZoomLevel(1), []);

  if (isLoading) return <div className="plotter-loading">Loading data…</div>;
  if (loadError) return <div className="plotter-error">Error: {loadError}</div>;

  return (
    <div>
      <PlotterControls
        zoomLevel={zoomLevel}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
      />
      <PlotArea
        plotterPoints={plotterPoints}
        imageCount={imageCount}
        zoomLevel={zoomLevel}
        xGap={xGap}
        yGap={yGap}
      />
    </div>
  );
}

function buildAxisDomain(values, zoomLevel, padding) {
  const dataMin = Math.min(...values);
  const dataMax = Math.max(...values);

  const center = (dataMin + dataMax) / 2;

  /*
   * PREVENT OVER-INTERPOLATION
   */
  const zoomedSpan = Math.max((dataMax - dataMin) / zoomLevel, 2);

  const halfSpan = (zoomedSpan + padding) / 2;

  return [center - halfSpan, center + halfSpan];
}

function PlotArea({ plotterPoints, imageCount, zoomLevel, xGap, yGap }) {
  const containerRef = useRef(null);
  const xValues = plotterPoints.map((point) => point.x);
  const yValues = plotterPoints.map((point) => point.y);

  const domainX = buildAxisDomain(xValues, zoomLevel, DOMAIN_PADDING_UNITS);
  const domainY = buildAxisDomain(yValues, zoomLevel, DOMAIN_PADDING_UNITS);

  const renderCustomShape = useCallback(
    (shapeProps) => {
      const { cx, cy, payload } = shapeProps;
      const positions = computeImagePositions(
        cx,
        cy,
        CELL_SIZE,
        CELL_SIZE,
        imageCount,
      );

      return (
        <g clipPath={`url(#${CLIP_PATH_ID})`}>
          {positions.map((position, index) => (
            <image
              key={`${payload.id}-${index}`}
              href={payload.image}
              x={position.x}
              y={position.y}
              width={position.width}
              height={position.height}
              preserveAspectRatio="xMidYMid slice"
            />
          ))}
        </g>
      );
    },
    [imageCount],
  );

  const chartHeight = 500;
  const plotWidth = Math.max(
    (containerRef.current?.offsetWidth || 900) -
      PLOT_MARGIN.left -
      PLOT_MARGIN.right,
    300,
  );
  const plotHeight = chartHeight - PLOT_MARGIN.top - PLOT_MARGIN.bottom;

  return (
    <div ref={containerRef}>
      <ResponsiveContainer width="100%" height={chartHeight}>
        <ScatterChart margin={PLOT_MARGIN}>
          <defs>
            <clipPath id={CLIP_PATH_ID}>
              <rect
                x={PLOT_MARGIN.left}
                y={PLOT_MARGIN.top}
                width={plotWidth}
                height={plotHeight}
              />
            </clipPath>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis
            type="number"
            dataKey="x"
            domain={domainX}
            tick={{ fill: "#888", fontSize: 12 }}
            stroke="#555"
            name="X"
          />
          <YAxis
            type="number"
            dataKey="y"
            domain={domainY}
            tick={{ fill: "#888", fontSize: 12 }}
            stroke="#555"
            name="Y"
          />
          <Tooltip content={<MetadataTooltip />} />
          <Scatter
            key={`scatter-${imageCount}-${zoomLevel}-${xGap}-${yGap}`}
            data={plotterPoints}
            shape={renderCustomShape}
          />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}

function MetadataTooltip({ active, payload }) {
  if (!active || !payload || payload.length === 0) return null;

  const dataPoint = payload[0].payload;

  return (
    <div className="plotter-tooltip">
      <div className="tooltip-label">{dataPoint.label}</div>
      <div className="tooltip-meta">
        <span>Interval: {dataPoint.meta.interval}s</span>
        <span>Angle: {dataPoint.meta.angle}°</span>
        <span>Quality: {dataPoint.meta.quality}</span>
      </div>
    </div>
  );
}

export default RechartsPlotter;

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

export const IMAGE_COUNTS = [1, 2, 4, 8];

export const CELL_SIZE = 50;

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

```

---

# src\lib\gridLayout.js

```javascript
/**
 * Computes sub-image positions within a cell for multi-image rendering.
 *
 * Given an imageCount (1, 2, 4, or 8), returns an array of
 * { offsetX, offsetY, width, height } objects describing
 * each sub-image's position relative to the cell center.
 */
export function computeGridOffsets(cellWidth, cellHeight, imageCount) {
  const gridConfig = getGridConfig(imageCount);
  const subWidth = cellWidth;
  const subHeight = cellHeight;
  const offsets = [];

  for (let row = 0; row < gridConfig.rows; row++) {
    for (let col = 0; col < gridConfig.columns; col++) {
      if (offsets.length >= imageCount) break;

      const xPos = col * subWidth - ((gridConfig.columns - 1) * subWidth) / 2;
      const yPos = row * subHeight - ((gridConfig.rows - 1) * subHeight) / 2;

      offsets.push({
        offsetX: xPos,
        offsetY: yPos,
        width: subWidth,
        height: subHeight,
      });
    }
  }

  return offsets;
}

/**
 * Returns grid rows/columns for a given image count.
 */
function getGridConfig(imageCount) {
  const configs = {
    1: { rows: 1, columns: 1 },
    2: { rows: 1, columns: 2 },
    4: { rows: 2, columns: 2 },
    8: { rows: 2, columns: 4 },
  };

  return configs[imageCount] || configs[1];
}

/**
 * Computes absolute positions for sub-images at a given coordinate.
 * Returns array of { x, y, width, height } for each sub-image.
 */
export function computeImagePositions(centerX, centerY, cellWidth, cellHeight, imageCount) {
  const offsets = computeGridOffsets(cellWidth, cellHeight, imageCount);

  return offsets.map((offset) => ({
    x: centerX + offset.offsetX - offset.width / 2,
    y: centerY + offset.offsetY - offset.height / 2,
    width: offset.width,
    height: offset.height,
  }));
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
    fetchPlotterData();
  }, []);

  const fetchPlotterData = async () => {
    try {
      setIsLoading(true);
      setLoadError(null);

      const response = await fetch(DATA_URL);

      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status}`);
      }

      const jsonData = await response.json();
      setPlotterPoints(jsonData);
    } catch (fetchError) {
      setLoadError(fetchError.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { plotterPoints, isLoading, loadError };
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

