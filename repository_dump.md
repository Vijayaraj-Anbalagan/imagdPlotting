# Repository Dump (AI Friendly)

> Generated: 2026-06-15T13:35:40.225Z

## Folder Structure

```txt
imagdPlotting
├── README.md
├── eslint.config.js
├── generate-repo-md.cjs
├── index.html
├── package.json
├── public
│   ├── data
│   │   └── data.json
│   └── images
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── components
│   │   ├── D3Plotter.jsx
│   │   ├── DataPointCountControl.jsx
│   │   ├── DeckGLPlotter.jsx
│   │   ├── EChartsPlotter.jsx
│   │   ├── ImageCanvasLayer.jsx
│   │   ├── ImageCountSelector.jsx
│   │   ├── KonvaPlotter.jsx
│   │   ├── Navbar.jsx
│   │   ├── PixiPlotter.jsx
│   │   ├── PlotterControls.jsx
│   │   └── RechartsPlotter.jsx
│   ├── lib
│   │   ├── chartInteractionLogger.js
│   │   ├── chartViewportStore.js
│   │   ├── constants.js
│   │   ├── debouncedHooks.js
│   │   ├── densityLayout.js
│   │   ├── gridLayout.js
│   │   ├── imageBitmapCache.js
│   │   ├── interactionMode.js
│   │   ├── plotterData.js
│   │   ├── quadtree.js
│   │   └── syntheticDataGenerator.js
│   └── main.jsx
└── vite.config.js
```

## Files (with line numbers)


---

## 📄 eslint.config.js
**hash:** `2f037ef9`

### Chunk 1/1

```javascript
   1 | import js from '@eslint/js'
   2 | import globals from 'globals'
   3 | import reactHooks from 'eslint-plugin-react-hooks'
   4 | import reactRefresh from 'eslint-plugin-react-refresh'
   5 | import { defineConfig, globalIgnores } from 'eslint/config'
   6 | 
   7 | export default defineConfig([
   8 |   globalIgnores(['dist']),
   9 |   {
  10 |     files: ['**/*.{js,jsx}'],
  11 |     extends: [
  12 |       js.configs.recommended,
  13 |       reactHooks.configs.flat.recommended,
  14 |       reactRefresh.configs.vite,
  15 |     ],
  16 |     languageOptions: {
  17 |       globals: globals.browser,
  18 |       parserOptions: { ecmaFeatures: { jsx: true } },
  19 |     },
  20 |   },
  21 | ])
  22 | 
```


---

## 📄 index.html
**hash:** `788ea85d`

### Chunk 1/1

```html
   1 | <!doctype html>
   2 | <html lang="en">
   3 |   <head>
   4 |     <meta charset="UTF-8" />
   5 |     <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
   6 |     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   7 |     <title>poc</title>
   8 |   </head>
   9 |   <body>
  10 |     <div id="root"></div>
  11 |     <script type="module" src="/src/main.jsx"></script>
  12 |   </body>
  13 | </html>
  14 | 
```


---

## 📄 package.json
**hash:** `6336c160`

### Chunk 1/1

```json
   1 | {
   2 |   "name": "poc",
   3 |   "private": true,
   4 |   "version": "0.0.0",
   5 |   "type": "module",
   6 |   "scripts": {
   7 |     "dev": "vite",
   8 |     "build": "vite build",
   9 |     "lint": "eslint .",
  10 |     "preview": "vite preview"
  11 |   },
  12 |   "dependencies": {
  13 |     "@deck.gl/core": "^9.3.2",
  14 |     "@deck.gl/layers": "^9.3.2",
  15 |     "@deck.gl/react": "^9.3.2",
  16 |     "@luma.gl/engine": "^9.3.3",
  17 |     "@luma.gl/webgl": "^9.3.3",
  18 |     "@pixi/react": "^8.0.5",
  19 |     "@tanstack/react-virtual": "^3.14.2",
  20 |     "d3": "^7.9.0",
  21 |     "echarts": "^6.0.0",
  22 |     "echarts-for-react": "^3.0.6",
  23 |     "konva": "^10.3.0",
  24 |     "pixi.js": "^8.18.1",
  25 |     "react": "^19.2.6",
  26 |     "react-dom": "^19.2.6",
  27 |     "react-konva": "^19.2.4",
  28 |     "recharts": "^3.8.1",
  29 |     "use-image": "^1.1.4"
  30 |   },
  31 |   "devDependencies": {
  32 |     "@eslint/js": "^10.0.1",
  33 |     "@types/react": "^19.2.14",
  34 |     "@types/react-dom": "^19.2.3",
  35 |     "@vitejs/plugin-react": "^6.0.1",
  36 |     "eslint": "^10.3.0",
  37 |     "eslint-plugin-react-hooks": "^7.1.1",
  38 |     "eslint-plugin-react-refresh": "^0.5.2",
  39 |     "globals": "^17.6.0",
  40 |     "vite": "^8.0.12"
  41 |   }
  42 | }
  43 | 
```


---

## 📄 public\data\data.json
**hash:** `3e7e3001`

### Chunk 1/1

```json
   1 | [
   2 |   {
   3 |     "id": "1-0",
   4 |     "x": 0,
   5 |     "y": 0,
   6 |     "image": "/images/base.jpg",
   7 |     "label": "Interval 0s, 0°",
   8 |     "meta": { "interval": 0, "angle": 0, "quality": 0.95 }
   9 |   },
  10 |   {
  11 |     "id": "1-15",
  12 |     "x": 0,
  13 |     "y": 15,
  14 |     "image": "/images/base.jpg",
  15 |     "label": "Interval 0s, 15°",
  16 |     "meta": { "interval": 0, "angle": 15, "quality": 0.93 }
  17 |   },
  18 |   {
  19 |     "id": "1-30",
  20 |     "x": 0,
  21 |     "y": 30,
  22 |     "image": "/images/base.jpg",
  23 |     "label": "Interval 0s, 30°",
  24 |     "meta": { "interval": 0, "angle": 30, "quality": 0.91 }
  25 |   },
  26 |   {
  27 |     "id": "1-45",
  28 |     "x": 0,
  29 |     "y": 45,
  30 |     "image": "/images/base.jpg",
  31 |     "label": "Interval 0s, 45°",
  32 |     "meta": { "interval": 0, "angle": 45, "quality": 0.88 }
  33 |   },
  34 |   {
  35 |     "id": "2-0",
  36 |     "x": 10,
  37 |     "y": 0,
  38 |     "image": "/images/base.jpg",
  39 |     "label": "Interval 10s, 0°",
  40 |     "meta": { "interval": 10, "angle": 0, "quality": 0.92 }
  41 |   },
  42 |   {
  43 |     "id": "2-15",
  44 |     "x": 10,
  45 |     "y": 15,
  46 |     "image": "/images/base.jpg",
  47 |     "label": "Interval 10s, 15°",
  48 |     "meta": { "interval": 10, "angle": 15, "quality": 0.9 }
  49 |   },
  50 |   {
  51 |     "id": "2-30",
  52 |     "x": 10,
  53 |     "y": 30,
  54 |     "image": "/images/base.jpg",
  55 |     "label": "Interval 10s, 30°",
  56 |     "meta": { "interval": 10, "angle": 30, "quality": 0.87 }
  57 |   },
  58 |   {
  59 |     "id": "2-45",
  60 |     "x": 10,
  61 |     "y": 45,
  62 |     "image": "/images/base.jpg",
  63 |     "label": "Interval 10s, 45°",
  64 |     "meta": { "interval": 10, "angle": 45, "quality": 0.84 }
  65 |   },
  66 |   {
  67 |     "id": "3-0",
  68 |     "x": 20,
  69 |     "y": 0,
  70 |     "image": "/images/base.jpg",
  71 |     "label": "Interval 20s, 0°",
  72 |     "meta": { "interval": 20, "angle": 0, "quality": 0.89 }
  73 |   },
  74 |   {
  75 |     "id": "3-15",
  76 |     "x": 20,
  77 |     "y": 15,
  78 |     "image": "/images/base.jpg",
  79 |     "label": "Interval 20s, 15°",
  80 |     "meta": { "interval": 20, "angle": 15, "quality": 0.86 }
  81 |   },
  82 |   {
  83 |     "id": "3-30",
  84 |     "x": 20,
  85 |     "y": 30,
  86 |     "image": "/images/base.jpg",
  87 |     "label": "Interval 20s, 30°",
  88 |     "meta": { "interval": 20, "angle": 30, "quality": 0.83 }
  89 |   },
  90 |   {
  91 |     "id": "3-45",
  92 |     "x": 20,
  93 |     "y": 45,
  94 |     "image": "/images/base.jpg",
  95 |     "label": "Interval 20s, 45°",
  96 |     "meta": { "interval": 20, "angle": 45, "quality": 0.8 }
  97 |   },
  98 |   {
  99 |     "id": "4-0",
 100 |     "x": 30,
 101 |     "y": 0,
 102 |     "image": "/images/base.jpg",
 103 |     "label": "Interval 30s, 0°",
 104 |     "meta": { "interval": 30, "angle": 0, "quality": 0.85 }
 105 |   },
 106 |   {
 107 |     "id": "4-15",
 108 |     "x": 30,
 109 |     "y": 15,
 110 |     "image": "/images/base.jpg",
 111 |     "label": "Interval 30s, 15°",
 112 |     "meta": { "interval": 30, "angle": 15, "quality": 0.82 }
 113 |   },
 114 |   {
 115 |     "id": "4-30",
 116 |     "x": 30,
 117 |     "y": 30,
 118 |     "image": "/images/base.jpg",
 119 |     "label": "Interval 30s, 30°",
 120 |     "meta": { "interval": 30, "angle": 30, "quality": 0.79 }
 121 |   },
 122 |   {
 123 |     "id": "4-45",
 124 |     "x": 30,
 125 |     "y": 45,
 126 |     "image": "/images/base.jpg",
 127 |     "label": "Interval 30s, 45°",
 128 |     "meta": { "interval": 30, "angle": 45, "quality": 0.76 }
 129 |   }
 130 | ]
 131 | 
```


---

## 📄 README.md
**hash:** `419af146`

### Chunk 1/1

```markdown
   1 | # imagdPlotting
   2 | 
   3 | A simple Proof of Concept (POC) project for experimenting with different plotting/rendering approaches in React.
   4 | 
   5 | ## Tech Stack
   6 | 
   7 | - React
   8 | - Vite
   9 | - Konva
  10 | - PixiJS
  11 | - Recharts
  12 | - Deck.gl
  13 | -
  14 | 
  15 | ---
  16 | 
  17 | # Getting Started
  18 | 
  19 | ## Install Dependencies
  20 | 
  21 | ```bash
  22 | npm install
  23 | ```
  24 | 
  25 | ## Run Development Server
  26 | 
  27 | ```bash
  28 | npm run dev
  29 | ```
  30 | 
  31 | This will start the local Vite development server.
  32 | 
  33 | ---
  34 | 
  35 | # Build for Production
  36 | 
  37 | ```bash
  38 | npm run build
  39 | ```
  40 | 
  41 | ---
  42 | 
  43 | # Preview Production Build
  44 | 
  45 | ```bash
  46 | npm run preview
  47 | ```
  48 | 
  49 | ---
  50 | 
  51 | # Repository Markdown Dump Generator
  52 | 
  53 | This project includes a helper script to generate a markdown dump of the repository source code.
  54 | 
  55 | ## Run the Generator
  56 | 
  57 | ```bash
  58 | node generate-repo-md.cjs
  59 | ```
  60 | 
  61 | ## Output
  62 | 
  63 | The script generates:
  64 | 
  65 | ```bash
  66 | repository_dump.md
  67 | ```
  68 | 
  69 | This markdown file contains a consolidated dump of the project source/code structure which can be useful for:
  70 | 
  71 | - Sharing project context
  72 | - Code reviews
  73 | - AI-assisted analysis
  74 | - Documentation snapshots
  75 | 
  76 | ---
  77 | 
  78 | # Project Notes
  79 | 
  80 | This repository is currently a **POC (Proof of Concept)** and is focused primarily on experimentation and visualization testing.
  81 | 
  82 | Because of that:
  83 | 
  84 | - Coding standards are not fully enforced yet
  85 | - Some ESLint rules are intentionally disabled in certain areas
  86 | - Code structure and architecture are still evolving
  87 | - Optimizations and refactoring are pending
  88 | 
  89 | The current goal is rapid iteration and testing of multiple plotting/rendering approaches.
  90 | 
  91 | ---
  92 | 
  93 | # Available Plotter Components
  94 | 
  95 | The project currently includes multiple rendering implementations:
  96 | 
  97 | - Konva Plotter
  98 | - Pixi Plotter
  99 | - DeckGL Plotter
 100 | - ECharts Plotter
 101 | - Recharts Plotter
 102 | - D3 Plotter
 103 | 
 104 | These are available under:
 105 | 
 106 | ```bash
 107 | src/components
 108 | ```
 109 | 
 110 | ---
 111 | 
 112 | # Folder Structure
 113 | 
 114 | ```bash
 115 | src/
 116 |  ├── components/
 117 |  ├── lib/
 118 |  ├── App.jsx
 119 |  └── main.jsx
 120 | ```
 121 | 
 122 | ---
 123 | 
 124 | # License
 125 | 
 126 | Internal / POC Usage
 127 | 
```


---

## 📄 src\App.css
**hash:** `3dc505ff`

### Chunk 1/3

```css
   1 | * {
   2 |   margin: 0;
   3 |   padding: 0;
   4 |   box-sizing: border-box;
   5 | }
   6 | 
   7 | body {
   8 |   font-family:
   9 |     -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  10 |   background: #1a1a2e;
  11 |   color: #e0e0e0;
  12 | }
  13 | 
  14 | .app-container {
  15 |   max-width: 1100px;
  16 |   margin: 0 auto;
  17 |   padding: 20px;
  18 | }
  19 | 
  20 | .app-title {
  21 |   font-size: 1.4rem;
  22 |   font-weight: 600;
  23 |   margin-bottom: 16px;
  24 |   color: #f0f0f0;
  25 | }
  26 | 
  27 | /* Tab Bar */
  28 | .tab-container {
  29 |   display: flex;
  30 |   gap: 4px;
  31 |   margin-bottom: 16px;
  32 |   border-bottom: 1px solid #333;
  33 |   padding-bottom: 8px;
  34 | }
  35 | 
  36 | .tab-button {
  37 |   padding: 8px 16px;
  38 |   border: 1px solid #444;
  39 |   background: #2a2a3e;
  40 |   color: #aaa;
  41 |   cursor: pointer;
  42 |   font-size: 0.85rem;
  43 |   border-radius: 4px 4px 0 0;
  44 |   transition:
  45 |     background 0.15s,
  46 |     color 0.15s;
  47 | }
  48 | 
  49 | .tab-button:hover {
  50 |   background: #3a3a5e;
  51 |   color: #ddd;
  52 | }
  53 | 
  54 | .tab-button.active {
  55 |   background: #4a4a7e;
  56 |   color: #fff;
  57 |   border-color: #6a6aae;
  58 | }
  59 | 
  60 | .tab-button.disabled,
  61 | .tab-button:disabled {
  62 |   opacity: 0.35;
  63 |   cursor: not-allowed;
  64 |   pointer-events: none;
  65 |   background: #222;
  66 |   color: #555;
  67 |   border-color: #333;
  68 | }
  69 | 
  70 | /* Data Point Count Control */
  71 | .data-point-control {
  72 |   display: flex;
  73 |   align-items: center;
  74 |   gap: 12px;
  75 |   margin-bottom: 16px;
  76 |   padding: 10px 16px;
  77 |   background: #1e1e38;
  78 |   border: 1px solid #333;
  79 |   border-radius: 6px;
  80 | }
  81 | 
  82 | .data-point-label {
  83 |   font-size: 0.85rem;
  84 |   color: #bbb;
  85 |   white-space: nowrap;
  86 |   font-weight: 500;
  87 | }
  88 | 
  89 | .data-point-slider {
  90 |   flex: 1;
  91 |   min-width: 200px;
  92 |   accent-color: #6a6aae;
  93 |   cursor: pointer;
  94 | }
  95 | 
  96 | .data-point-input {
  97 |   width: 72px;
  98 |   padding: 4px 8px;
  99 |   border: 1px solid #444;
 100 |   background: #2a2a3e;
 101 |   color: #e0e0e0;
 102 |   font-size: 0.85rem;
 103 |   border-radius: 4px;
 104 |   text-align: center;
 105 | }
 106 | 
 107 | .data-point-input:focus {
 108 |   outline: none;
 109 |   border-color: #6a6aae;
 110 | }
 111 | 
 112 | .data-point-count-badge {
 113 |   font-size: 0.75rem;
 114 |   color: #888;
 115 |   background: #2a2a3e;
 116 |   padding: 2px 8px;
 117 |   border-radius: 10px;
 118 |   white-space: nowrap;
 119 | }
 120 | 
 121 | /* Image Count Selector */
 122 | .image-count-selector {
 123 |   display: flex;
 124 |   align-items: center;
 125 |   gap: 8px;
 126 |   margin-bottom: 16px;
 127 | }
 128 | 
 129 | .selector-label {
 130 |   font-size: 0.85rem;
 131 |   color: #aaa;
 132 | }
 133 | 
 134 | .count-button {
 135 |   padding: 4px 12px;
 136 |   border: 1px solid #444;
 137 |   background: #2a2a3e;
 138 |   color: #aaa;
 139 |   cursor: pointer;
 140 |   font-size: 0.8rem;
 141 |   border-radius: 4px;
 142 | }
 143 | 
 144 | .count-button:hover {
 145 |   background: #3a3a5e;
 146 | }
 147 | 
 148 | .count-button.active {
 149 |   background: #4a4a7e;
 150 |   color: #fff;
 151 |   border-color: #6a6aae;
 152 | }
 153 | 
 154 | /* Viewer Container */
 155 | .viewer-container {
 156 |   background: #16213e;
 157 |   border: 1px solid #333;
 158 |   border-radius: 6px;
 159 |   padding: 16px;
 160 |   min-height: 500px;
 161 |   position: relative;
 162 | }
 163 | 
 164 | /* Loading / Error States */
 165 | .plotter-loading,
 166 | .plotter-error {
 167 |   display: flex;
 168 |   align-items: center;
 169 |   justify-content: center;
 170 |   min-height: 400px;
 171 |   color: #888;
 172 |   font-size: 0.9rem;
 173 | }
 174 | 
 175 | .plotter-error {
 176 |   color: #e74c3c;
 177 | }
 178 | 
 179 | /* Tooltip */
 180 | .plotter-tooltip {
 181 |   position: absolute;
 182 |   background: #2a2a3e;
 183 |   border: 1px solid #555;
 184 |   border-radius: 4px;
 185 |   padding: 8px 12px;
 186 |   font-size: 0.75rem;
 187 |   color: #ddd;
 188 |   pointer-events: none;
 189 |   z-index: 100;
 190 |   max-width: 220px;
 191 | }
 192 | 
 193 | .plotter-tooltip .tooltip-label {
 194 |   font-weight: 600;
 195 |   margin-bottom: 4px;
 196 | }
 197 | 
 198 | .plotter-tooltip .tooltip-meta {
 199 |   color: #aaa;
 200 | }
```

### Chunk 2/3

```css
 201 | 
 202 | .plotter-tooltip .tooltip-meta span {
 203 |   display: block;
 204 | }
 205 | 
 206 | /* Zoom Controls */
 207 | .zoom-controls {
 208 |   display: flex;
 209 |   gap: 4px;
 210 |   margin-bottom: 8px;
 211 | }
 212 | 
 213 | .zoom-button {
 214 |   padding: 4px 10px;
 215 |   border: 1px solid #444;
 216 |   background: #2a2a3e;
 217 |   color: #aaa;
 218 |   cursor: pointer;
 219 |   font-size: 0.8rem;
 220 |   border-radius: 4px;
 221 | }
 222 | 
 223 | .zoom-button:hover {
 224 |   background: #3a3a5e;
 225 |   color: #ddd;
 226 | }
 227 | 
 228 | .zoom-button.active {
 229 |   background: #4a4a7e;
 230 |   color: #fff;
 231 |   border-color: #6a6aae;
 232 | }
 233 | 
 234 | /* Mode Toggle Buttons */
 235 | .mode-button {
 236 |   display: flex;
 237 |   align-items: center;
 238 |   gap: 5px;
 239 |   padding: 4px 10px;
 240 |   border: 1px solid #444;
 241 |   background: #2a2a3e;
 242 |   color: #aaa;
 243 |   cursor: pointer;
 244 |   font-size: 0.8rem;
 245 |   border-radius: 4px;
 246 |   transition:
 247 |     background 0.15s,
 248 |     color 0.15s,
 249 |     border-color 0.15s;
 250 | }
 251 | 
 252 | .mode-button:hover {
 253 |   background: #3a3a5e;
 254 |   color: #ddd;
 255 | }
 256 | 
 257 | .mode-button.active {
 258 |   background: #3a6a9e;
 259 |   color: #fff;
 260 |   border-color: #5a9ad8;
 261 | }
 262 | 
 263 | .mode-separator {
 264 |   display: inline-block;
 265 |   width: 1px;
 266 |   height: 22px;
 267 |   background: #444;
 268 |   margin: 0 4px;
 269 |   align-self: center;
 270 | }
 271 | 
 272 | /* D3 Brush Zoom Overlay */
 273 | .d3-brush .overlay {
 274 |   cursor: inherit;
 275 | }
 276 | 
 277 | .d3-brush .selection {
 278 |   fill: rgba(68, 147, 255, 0.15);
 279 |   stroke: #4493ff;
 280 |   stroke-width: 1.5;
 281 |   rx: 2;
 282 |   ry: 2;
 283 | }
 284 | 
 285 | .d3-brush .handle {
 286 |   display: none;
 287 | }
 288 | 
 289 | /* Data Point Count Control */
 290 | 
 291 | .dp-control {
 292 |   display: flex;
 293 |   flex-direction: column;
 294 |   gap: 12px;
 295 | 
 296 |   margin-bottom: 16px;
 297 |   padding: 14px 16px;
 298 | 
 299 |   background: #1e1e38;
 300 |   border: 1px solid #333;
 301 |   border-radius: 10px;
 302 | }
 303 | 
 304 | .dp-header {
 305 |   display: flex;
 306 |   align-items: center;
 307 |   justify-content: space-between;
 308 | }
 309 | 
 310 | .dp-title {
 311 |   font-size: 0.9rem;
 312 |   font-weight: 600;
 313 |   color: #f0f0f0;
 314 | }
 315 | 
 316 | .dp-selected {
 317 |   font-size: 0.75rem;
 318 |   color: #999;
 319 |   background: #2a2a3e;
 320 |   padding: 4px 10px;
 321 |   border-radius: 999px;
 322 | }
 323 | 
 324 | .dp-buttons {
 325 |   display: flex;
 326 |   gap: 10px;
 327 |   flex-wrap: wrap;
 328 | }
 329 | 
 330 | .dp-button {
 331 |   min-width: 90px;
 332 | 
 333 |   padding: 10px 16px;
 334 | 
 335 |   border: 1px solid #444;
 336 |   border-radius: 10px;
 337 | 
 338 |   background: #2a2a3e;
 339 |   color: #bbb;
 340 | 
 341 |   font-size: 0.85rem;
 342 |   font-weight: 500;
 343 | 
 344 |   cursor: pointer;
 345 | 
 346 |   transition:
 347 |     background 0.18s ease,
 348 |     color 0.18s ease,
 349 |     border-color 0.18s ease,
 350 |     transform 0.18s ease,
 351 |     box-shadow 0.18s ease;
 352 | }
 353 | 
 354 | .dp-button:hover {
 355 |   background: #35355a;
 356 |   color: #fff;
 357 |   border-color: #666;
 358 | }
 359 | 
 360 | .dp-button.active {
 361 |   background: #6a6aae;
 362 |   color: #fff;
 363 |   border-color: #8c8cff;
 364 | 
 365 |   box-shadow: 0 0 12px rgba(106, 106, 174, 0.35);
 366 | 
 367 |   transform: scale(1.02);
 368 | }
 369 | 
 370 | .multi-chart-controls {
 371 |   display: flex;
 372 |   gap: 20px;
 373 |   align-items: center;
 374 |   margin-bottom: 20px;
 375 |   padding: 12px 16px;
 376 |   background: #1f1f32;
 377 |   border: 1px solid #333;
 378 |   border-radius: 8px;
 379 | }
 380 | 
 381 | .multi-chart-toggle-row,
 382 | .multi-chart-count-row {
 383 |   display: flex;
 384 |   align-items: center;
 385 |   gap: 12px;
 386 | }
 387 | 
 388 | .multi-chart-label {
 389 |   color: #ddd;
 390 |   font-size: 14px;
 391 |   font-weight: 500;
 392 | }
 393 | 
 394 | .multi-chart-toggle {
 395 |   padding: 8px 14px;
 396 |   border: none;
 397 |   border-radius: 6px;
 398 |   cursor: pointer;
 399 |   background: #444;
 400 |   color: white;
```

### Chunk 3/3

```css
 401 |   transition: 0.2s ease;
 402 | }
 403 | 
 404 | .multi-chart-toggle.active {
 405 |   background: #2e8b57;
 406 | }
 407 | 
 408 | .multi-chart-input {
 409 |   width: 80px;
 410 |   padding: 8px;
 411 |   border-radius: 6px;
 412 |   border: 1px solid #555;
 413 |   background: #222;
 414 |   color: white;
 415 | }
 416 | 
 417 | .single-chart-wrapper {
 418 |   width: 100%;
 419 | }
 420 | 
 421 | .multi-chart-wrapper {
 422 |   display: flex;
 423 |   flex-direction: column;
 424 |   gap: 24px;
 425 |   padding-bottom: 40vh;
 426 | }
 427 | 
 428 | .multi-chart-item {
 429 |   width: 100%;
 430 |   min-height: 78vh;
 431 |   background: #181828;
 432 |   border: 1px solid #2d2d44;
 433 |   border-radius: 12px;
 434 |   overflow: hidden;
 435 |   padding: 12px;
 436 | }
 437 | 
 438 | .multi-chart-header {
 439 |   color: #aaa;
 440 |   font-size: 14px;
 441 |   font-weight: 600;
 442 |   margin-bottom: 12px;
 443 | }
 444 | 
 445 | .multi-mode-active {
 446 |   max-width: 1400px;
 447 | }
 448 | 
 449 | .multi-chart-item {
 450 |   height: 820px;
 451 |   padding-bottom: 20px;
 452 |   overflow: hidden;
 453 |   box-sizing: border-box;
 454 |   border: 1px solid red;
 455 | }
 456 | 
 457 | .multi-chart-wrapper {
 458 |   width: 100%;
 459 | }
 460 | 
 461 | .single-chart-wrapper {
 462 |   width: 100%;
 463 | }
 464 | 
```


---

## 📄 src\App.jsx
**hash:** `1f35b659`

### Chunk 1/3

```jsx
   1 | import { useState, useMemo, useEffect } from "react";
   2 | import { useWindowVirtualizer } from "@tanstack/react-virtual";
   3 | import Navbar from "./components/Navbar";
   4 | import ImageCountSelector from "./components/ImageCountSelector";
   5 | import DataPointCountControl from "./components/DataPointCountControl";
   6 | 
   7 | import RechartsPlotter from "./components/RechartsPlotter";
   8 | import D3Plotter from "./components/D3Plotter";
   9 | import PixiPlotter from "./components/PixiPlotter";
  10 | import KonvaPlotter from "./components/KonvaPlotter";
  11 | 
  12 | import {
  13 |   DATA_POINT_LIMITS,
  14 |   MAX_IMAGES_PER_POINT,
  15 |   MIN_IMAGES_PER_POINT,
  16 | } from "./lib/constants";
  17 | 
  18 | import { retainOnlyChartViewports } from "./lib/chartViewportStore";
  19 | import "./App.css";
  20 | 
  21 | function App() {
  22 |   const [activeTab, setActiveTab] = useState(null);
  23 | 
  24 |   const [imageCount, setImageCount] = useState(1);
  25 | 
  26 |   const [multiChartMode, setMultiChartMode] = useState(false);
  27 | 
  28 |   const [multiChartCount, setMultiChartCount] = useState(5);
  29 | 
  30 |   const [virtualiseCharts, setVirtualiseCharts] = useState(false);
  31 | 
  32 |   const [enableQuadtree, setEnableQuadtree] = useState(false);
  33 | 
  34 |   const [enableLOD, setEnableLOD] = useState(false);
  35 | 
  36 |   const [enableCanvas, setEnableCanvas] = useState(false);
  37 | 
  38 |   const [dataPointCount, setDataPointCount] = useState(
  39 |     DATA_POINT_LIMITS.defaultCount,
  40 |   );
  41 | 
  42 |   const [appliedXGap, setAppliedXGap] = useState(10);
  43 | 
  44 |   const [appliedYGap, setAppliedYGap] = useState(10);
  45 | 
  46 |   const [draftXGap, setDraftXGap] = useState(10);
  47 | 
  48 |   const [draftYGap, setDraftYGap] = useState(10);
  49 | 
  50 |   const hasChanges = draftXGap !== appliedXGap || draftYGap !== appliedYGap;
  51 | 
  52 |   // eslint-disable-next-line react-hooks/incompatible-library
  53 |   const rowVirtualizer = useWindowVirtualizer({
  54 |     count: multiChartCount,
  55 |     estimateSize: () => 720,
  56 |     overscan: 1,
  57 |   });
  58 | 
  59 |   const virtualItems = rowVirtualizer.getVirtualItems();
  60 | 
  61 |   const handleGapUpdate = () => {
  62 |     setAppliedXGap(draftXGap);
  63 |     setAppliedYGap(draftYGap);
  64 |   };
  65 | 
  66 |   const handleMultiChartCountChange = (value) => {
  67 |     const parsed = Number(value);
  68 |     if (Number.isNaN(parsed)) {
  69 |       setMultiChartCount(2);
  70 |       return;
  71 |     }
  72 |     const clamped = Math.max(2, Math.min(10, Math.floor(parsed)));
  73 |     setMultiChartCount(clamped);
  74 |   };
  75 | 
  76 |   /**
  77 |    * Critical normalization.
  78 |    */
  79 |   const handleImageCountChange = (value) => {
  80 |     const parsed = Number(value);
  81 | 
  82 |     if (Number.isNaN(parsed)) {
  83 |       setImageCount(1);
  84 |       return;
  85 |     }
  86 | 
  87 |     const clamped = Math.max(
  88 |       MIN_IMAGES_PER_POINT,
  89 |       Math.min(MAX_IMAGES_PER_POINT, Math.floor(parsed)),
  90 |     );
  91 | 
  92 |     setImageCount(clamped);
  93 |   };
  94 | 
  95 |   const plotterProps = {
  96 |     imageCount,
  97 |     xGap: appliedXGap,
  98 |     yGap: appliedYGap,
  99 |     dataPointCount,
 100 |     enableQuadtree,
 101 |     enableLOD,
 102 |     enableCanvas,
 103 |   };
 104 | 
 105 |   const activeChartIds = useMemo(() => {
 106 |     if (!multiChartMode) {
 107 |       return ["single-chart"];
 108 |     }
 109 | 
 110 |     return Array.from(
 111 |       {
 112 |         length: multiChartCount,
 113 |       },
 114 |       (_, index) => `chart-${index}`,
 115 |     );
 116 |   }, [multiChartMode, multiChartCount]);
 117 | 
 118 |   useEffect(() => {
 119 |     retainOnlyChartViewports(activeChartIds);
 120 |   }, [activeChartIds]);
 121 | 
 122 |   const renderSinglePlotter = ({ key, chartId }) => {
 123 |     switch (activeTab) {
 124 |       case "Recharts":
 125 |         return (
 126 |           <RechartsPlotter key={key} chartId={chartId} {...plotterProps} />
 127 |         );
 128 |       case "D3":
 129 |         return <D3Plotter key={key} chartId={chartId} {...plotterProps} />;
 130 |       case "PixiJS":
 131 |         return <PixiPlotter key={key} chartId={chartId} {...plotterProps} />;
 132 |       case "Konva":
 133 |         return <KonvaPlotter key={key} chartId={chartId} {...plotterProps} />;
 134 | 
 135 |       default:
 136 |         return (
 137 |           <div
 138 |             key={key}
 139 |             style={{
 140 |               height: "600px",
 141 |               display: "flex",
 142 |               alignItems: "center",
 143 |               justifyContent: "center",
 144 |               color: "#888",
 145 |               fontSize: "20px",
 146 |               fontWeight: "500",
 147 |             }}
 148 |           >
 149 |             Click a tab to render the chart
 150 |           </div>
 151 |         );
 152 |     }
 153 |   };
 154 | 
 155 |   const renderCharts = () => {
 156 |     if (!multiChartMode) {
 157 |       return (
 158 |         <div className="single-chart-wrapper">
 159 |           {renderSinglePlotter({
 160 |             key: "single-chart",
 161 |             chartId: "single-chart",
 162 |           })}
 163 |         </div>
 164 |       );
 165 |     }
 166 | 
 167 |     /**
 168 |      * NON VIRTUALIZED
 169 |      */
 170 |     if (!virtualiseCharts) {
 171 |       return (
 172 |         <div className="multi-chart-wrapper">
 173 |           {Array.from({
 174 |             length: multiChartCount,
 175 |           }).map((_, index) => (
 176 |             <div key={`chart-wrapper-${index}`} className="multi-chart-item">
 177 |               <div className="multi-chart-header">Chart {index + 1}</div>
 178 |               {renderSinglePlotter({
 179 |                 key: `chart-${index}`,
 180 |                 chartId: `chart-${index}`,
 181 |               })}
 182 |             </div>
 183 |           ))}
 184 |         </div>
 185 |       );
 186 |     }
 187 | 
 188 |     /**
 189 |      * VIRTUALIZED
 190 |      */
 191 |     return (
 192 |       <div
 193 |         style={{
 194 |           width: "100%",
 195 |           position: "relative",
 196 |         }}
 197 |       >
 198 |         <div
 199 |           style={{
 200 |             height: `${rowVirtualizer.getTotalSize()}px`,
```

### Chunk 2/3

```jsx
 201 |             width: "100%",
 202 |             position: "relative",
 203 |           }}
 204 |         >
 205 |           {virtualItems.slice(0, 2).map((virtualRow) => {
 206 |             const chartId = `chart-${virtualRow.index}`;
 207 | 
 208 |             return (
 209 |               <div
 210 |                 key={chartId}
 211 |                 style={{
 212 |                   position: "absolute",
 213 |                   top: 0,
 214 |                   left: 0,
 215 |                   width: "100%",
 216 |                   transform: `translateY(${virtualRow.start}px)`,
 217 |                   paddingBottom: "20px",
 218 |                 }}
 219 |               >
 220 |                 <div className="multi-chart-item">
 221 |                   <div className="multi-chart-header">
 222 |                     Chart {virtualRow.index + 1}
 223 |                   </div>
 224 | 
 225 |                   {renderSinglePlotter({
 226 |                     key: chartId,
 227 |                     chartId,
 228 |                   })}
 229 |                 </div>
 230 |               </div>
 231 |             );
 232 |           })}
 233 |         </div>
 234 |       </div>
 235 |     );
 236 |   };
 237 | 
 238 |   return (
 239 |     <div
 240 |       className={`app-container ${multiChartMode ? "multi-mode-active" : ""}`}
 241 |     >
 242 |       <h1 className="app-title">Image Plotting System PoC</h1>
 243 | 
 244 |       <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
 245 | 
 246 |       <DataPointCountControl
 247 |         dataPointCount={dataPointCount}
 248 |         onDataPointCountChange={setDataPointCount}
 249 |       />
 250 | 
 251 |       <ImageCountSelector
 252 |         imageCount={imageCount}
 253 |         setImageCount={handleImageCountChange}
 254 |       />
 255 | 
 256 |       <div className="multi-chart-controls">
 257 |         {" "}
 258 |         <div className="multi-chart-toggle-row">
 259 |           <label className="multi-chart-label"> Multi Chart Mode </label>
 260 |           <button
 261 |             className={`multi-chart-toggle ${multiChartMode ? "active" : ""}`}
 262 |             onClick={() => setMultiChartMode((prev) => !prev)}
 263 |           >
 264 |             {multiChartMode ? "Enabled" : "Disabled"}
 265 |           </button>
 266 | 
 267 |           <label className="multi-chart-label">Virtualise Charts</label>
 268 |           <button
 269 |             className={`multi-chart-toggle ${virtualiseCharts ? "active" : ""}`}
 270 |             onClick={() => setVirtualiseCharts((prev) => !prev)}
 271 |           >
 272 |             {virtualiseCharts ? "Enabled" : "Disabled"}
 273 |           </button>
 274 | 
 275 |           {/* ✅ NEW BUTTONS */}
 276 | 
 277 |           <label className="multi-chart-label">Quadtree</label>
 278 |           <button
 279 |             className={`multi-chart-toggle ${enableQuadtree ? "active" : ""}`}
 280 |             onClick={() => setEnableQuadtree((prev) => !prev)}
 281 |           >
 282 |             {enableQuadtree ? "Enabled" : "Disabled"}
 283 |           </button>
 284 | 
 285 |           <label className="multi-chart-label">LOD Images</label>
 286 |           <button
 287 |             className={`multi-chart-toggle ${enableLOD ? "active" : ""}`}
 288 |             onClick={() => setEnableLOD((prev) => !prev)}
 289 |           >
 290 |             {enableLOD ? "Enabled" : "Disabled"}
 291 |           </button>
 292 | 
 293 |           <label className="multi-chart-label">Canvas Rendering</label>
 294 |           <button
 295 |             className={`multi-chart-toggle ${enableCanvas ? "active" : ""}`}
 296 |             onClick={() => setEnableCanvas((prev) => !prev)}
 297 |           >
 298 |             {enableCanvas ? "Enabled" : "Disabled"}
 299 |           </button>
 300 |         </div>{" "}
 301 |         {multiChartMode && (
 302 |           <div className="multi-chart-count-row">
 303 |             {" "}
 304 |             <label className="multi-chart-label"> Charts Count </label>{" "}
 305 |             <input
 306 |               type="number"
 307 |               min="2"
 308 |               max="10"
 309 |               value={multiChartCount}
 310 |               onChange={(e) => handleMultiChartCountChange(e.target.value)}
 311 |               className="multi-chart-input"
 312 |             />{" "}
 313 |           </div>
 314 |         )}{" "}
 315 |       </div>
 316 | 
 317 |       <div
 318 |         style={{
 319 |           display: "flex",
 320 |           gap: "20px",
 321 |           justifyContent: "center",
 322 |           marginBottom: "20px",
 323 |         }}
 324 |       >
 325 |         <div
 326 |           style={{
 327 |             display: "flex",
 328 |             alignItems: "center",
 329 |             gap: "10px",
 330 |           }}
 331 |         >
 332 |           <label style={{ color: "#fff" }}>X Gap:</label>
 333 | 
 334 |           <input
 335 |             type="range"
 336 |             min="1"
 337 |             max="50"
 338 |             value={draftXGap}
 339 |             onChange={(e) => setDraftXGap(Number(e.target.value))}
 340 |           />
 341 | 
 342 |           <span
 343 |             style={{
 344 |               color: "#888",
 345 |               width: "20px",
 346 |             }}
 347 |           >
 348 |             {draftXGap}
 349 |           </span>
 350 |         </div>
 351 | 
 352 |         <div
 353 |           style={{
 354 |             display: "flex",
 355 |             alignItems: "center",
 356 |             gap: "10px",
 357 |           }}
 358 |         >
 359 |           <label style={{ color: "#fff" }}>Y Gap:</label>
 360 | 
 361 |           <input
 362 |             type="range"
 363 |             min="1"
 364 |             max="50"
 365 |             value={draftYGap}
 366 |             onChange={(e) => setDraftYGap(Number(e.target.value))}
 367 |           />
 368 | 
 369 |           <span
 370 |             style={{
 371 |               color: "#888",
 372 |               width: "20px",
 373 |             }}
 374 |           >
 375 |             {draftYGap}
 376 |           </span>
 377 |         </div>
 378 | 
 379 |         <button
 380 |           onClick={handleGapUpdate}
 381 |           disabled={!hasChanges}
 382 |           style={{
 383 |             padding: "5px 15px",
 384 |             backgroundColor: hasChanges ? "#2e8b57" : "#444",
 385 | 
 386 |             color: hasChanges ? "#fff" : "#888",
 387 | 
 388 |             border: "none",
 389 |             borderRadius: "4px",
 390 | 
 391 |             cursor: hasChanges ? "pointer" : "not-allowed",
 392 | 
 393 |             fontWeight: "bold",
 394 |           }}
 395 |         >
 396 |           Update
 397 |         </button>
 398 |       </div>
 399 | 
 400 |       <div className="viewer-container">{renderCharts()}</div>
```

### Chunk 3/3

```jsx
 401 |     </div>
 402 |   );
 403 | }
 404 | 
 405 | export default App;
 406 | 
```


---

## 📄 src\components\D3Plotter.jsx
**hash:** `71c04db7`

### Chunk 1/6

```jsx
   1 | import { useRef, useEffect, useState, useMemo } from "react";
   2 | import * as d3 from "d3";
   3 | import { usePlotterData } from "../lib/plotterData";
   4 | import { logChartInteractionEvent } from "../lib/chartInteractionLogger";
   5 | import { useInteractionMode, INTERACTION_MODES } from "../lib/interactionMode";
   6 | import {
   7 |   getChartViewport,
   8 |   updateChartViewport,
   9 | } from "../lib/chartViewportStore";
  10 | import { computeImagePositions } from "../lib/gridLayout";
  11 | import {
  12 |   CELL_SIZE,
  13 |   PLOT_DIMENSIONS,
  14 |   PLOT_MARGIN,
  15 |   BRUSH_ZOOM,
  16 |   ZOOM_SCALE_FACTOR,
  17 |   WHEEL_ZOOM_SENSITIVITY,
  18 |   DATA_POINT_LIMITS,
  19 | } from "../lib/constants";
  20 | import {
  21 |   computeAdaptiveCellSize,
  22 |   filterVisiblePoints,
  23 |   computeEffectiveImageCount,
  24 | } from "../lib/densityLayout";
  25 | import { generateSyntheticPoints } from "../lib/syntheticDataGenerator";
  26 | import PlotterControls from "./PlotterControls";
  27 | 
  28 | const MIN_ZOOM_SCALE = 1.001;
  29 | 
  30 | /* ─── Entry Component ───────────────────────────────────────────── */
  31 | 
  32 | function D3Plotter({ chartId, imageCount, xGap, yGap, dataPointCount }) {
  33 |   const {
  34 |     plotterPoints: fetchedPoints,
  35 |     isLoading,
  36 |     loadError,
  37 |   } = usePlotterData();
  38 | 
  39 |   const syntheticPoints = useMemo(() => {
  40 |     return generateSyntheticPoints(
  41 |       Math.max(
  42 |         DATA_POINT_LIMITS.min,
  43 |         Math.min(dataPointCount, DATA_POINT_LIMITS.max),
  44 |       ),
  45 |     );
  46 |   }, [dataPointCount]);
  47 | 
  48 |   const plotterPoints = syntheticPoints || fetchedPoints;
  49 | 
  50 |   if (!syntheticPoints && isLoading)
  51 |     return <div className="plotter-loading">Loading data…</div>;
  52 |   if (!syntheticPoints && loadError)
  53 |     return <div className="plotter-error">Error: {loadError}</div>;
  54 | 
  55 |   return (
  56 |     <D3PlotCanvas
  57 |       plotterPoints={plotterPoints}
  58 |       imageCount={imageCount}
  59 |       xGap={xGap}
  60 |       yGap={yGap}
  61 |       chartId={chartId}
  62 |     />
  63 |   );
  64 | }
  65 | 
  66 | /* ─── Canvas Wrapper ────────────────────────────────────────────── */
  67 | 
  68 | function D3PlotCanvas({ plotterPoints, imageCount, xGap, yGap, chartId }) {
  69 |   const svgRef = useRef(null);
  70 |   const tooltipRef = useRef(null);
  71 |   const containerRef = useRef(null);
  72 |   const plotControlsRef = useRef(null);
  73 |   const interactionCleanupRef = useRef(null);
  74 | 
  75 |   const originalXDomainRef = useRef(null);
  76 |   const originalYDomainRef = useRef(null);
  77 | 
  78 |   const [containerWidth, setContainerWidth] = useState(PLOT_DIMENSIONS.width);
  79 |   const { interactionMode, setInteractionMode, isZoomMode } =
  80 |     useInteractionMode();
  81 | 
  82 |   useEffect(() => {
  83 |     if (!containerRef.current) return;
  84 | 
  85 |     const resizeObserver = new ResizeObserver((entries) => {
  86 |       const entry = entries[0];
  87 |       if (entry) setContainerWidth(entry.contentRect.width);
  88 |     });
  89 | 
  90 |     resizeObserver.observe(containerRef.current);
  91 |     return () => resizeObserver.disconnect();
  92 |   }, []);
  93 | 
  94 |   useEffect(() => {
  95 |     if (!svgRef.current || plotterPoints.length === 0) return;
  96 | 
  97 |     const initResult = initializePlot(
  98 |       svgRef.current,
  99 |       tooltipRef.current,
 100 |       plotterPoints,
 101 |       imageCount,
 102 |       containerWidth,
 103 |       xGap,
 104 |       yGap,
 105 |       originalXDomainRef,
 106 |       originalYDomainRef,
 107 |       chartId,
 108 |     );
 109 | 
 110 |     plotControlsRef.current = initResult.controls;
 111 |     interactionCleanupRef.current = initResult.setActiveInteractionMode;
 112 | 
 113 |     // Apply initial mode once after chart creation
 114 |     initResult.setActiveInteractionMode(interactionMode);
 115 | 
 116 |     return () => {
 117 |       initResult.destroy?.();
 118 | 
 119 |       plotControlsRef.current = null;
 120 |       interactionCleanupRef.current = null;
 121 |       originalXDomainRef.current = null;
 122 |       originalYDomainRef.current = null;
 123 |     };
 124 |   }, [plotterPoints, imageCount, containerWidth, xGap, yGap, chartId]); // interactionMode removed
 125 | 
 126 |   useEffect(() => {
 127 |     if (interactionCleanupRef.current) {
 128 |       interactionCleanupRef.current(interactionMode);
 129 |     }
 130 |   }, [interactionMode]);
 131 | 
 132 |   const handleZoomIn = () => plotControlsRef.current?.zoomIn();
 133 |   const handleZoomOut = () => plotControlsRef.current?.zoomOut();
 134 |   const handleReset = () => plotControlsRef.current?.resetZoom();
 135 |   const cursorStyle = isZoomMode ? "crosshair" : "grab";
 136 | 
 137 |   return (
 138 |     <div ref={containerRef} style={{ position: "relative" }}>
 139 |       <PlotterControls
 140 |         onZoomIn={handleZoomIn}
 141 |         onZoomOut={handleZoomOut}
 142 |         onReset={handleReset}
 143 |         interactionMode={interactionMode}
 144 |         onModeChange={setInteractionMode}
 145 |       />
 146 |       <svg ref={svgRef} style={{ cursor: cursorStyle }} />
 147 |       <div
 148 |         ref={tooltipRef}
 149 |         className="plotter-tooltip"
 150 |         style={{ display: "none" }}
 151 |       />
 152 |     </div>
 153 |   );
 154 | }
 155 | 
 156 | /* ─── Plot Initialization ───────────────────────────────────────── */
 157 | 
 158 | function initializePlot(
 159 |   svgElement,
 160 |   tooltipElement,
 161 |   plotterPoints,
 162 |   imageCount,
 163 |   containerWidth,
 164 |   xGap,
 165 |   yGap,
 166 |   originalXDomainRef,
 167 |   originalYDomainRef,
 168 |   chartId,
 169 | ) {
 170 |   const width = containerWidth;
 171 |   const height = PLOT_DIMENSIONS.height;
 172 |   const margin = PLOT_MARGIN;
 173 |   const innerWidth = width - margin.left - margin.right;
 174 |   const innerHeight = height - margin.top - margin.bottom;
 175 | 
 176 |   const svg = d3.select(svgElement);
 177 |   svg.selectAll("*").remove();
 178 |   svg
 179 |     .attr("width", width)
 180 |     .attr("height", height)
 181 |     .style("background", "transparent");
 182 | 
 183 |   const xScale = buildXScale(plotterPoints, innerWidth, xGap);
 184 |   const yScale = buildYScale(plotterPoints, innerHeight, yGap);
 185 | 
 186 |   originalXDomainRef.current = xScale.domain().slice();
 187 |   originalYDomainRef.current = yScale.domain().slice();
 188 | 
 189 |   const originalDomainSpanX =
 190 |     originalXDomainRef.current[1] - originalXDomainRef.current[0];
 191 | 
 192 |   const originalDomainSpanY =
 193 |     originalYDomainRef.current[1] - originalYDomainRef.current[0];
 194 | 
 195 |   const savedViewport = getChartViewport(chartId);
 196 | 
 197 |   if (savedViewport.xDomain && savedViewport.yDomain) {
 198 |     const savedXSpan = savedViewport.xDomain[1] - savedViewport.xDomain[0];
 199 |     const savedYSpan = savedViewport.yDomain[1] - savedViewport.yDomain[0];
 200 | 
```

### Chunk 2/6

```jsx
 201 |     const originalXSpan =
 202 |       originalXDomainRef.current[1] - originalXDomainRef.current[0];
 203 |     const originalYSpan =
 204 |       originalYDomainRef.current[1] - originalYDomainRef.current[0];
 205 | 
 206 |     const isSavedZoomedOut =
 207 |       savedXSpan > originalXSpan || savedYSpan > originalYSpan;
 208 | 
 209 |     if (!isSavedZoomedOut) {
 210 |       xScale.domain(savedViewport.xDomain);
 211 |       yScale.domain(savedViewport.yDomain);
 212 |     } else {
 213 |       updateChartViewport(chartId, {
 214 |         xDomain: originalXDomainRef.current.slice(),
 215 |         yDomain: originalYDomainRef.current.slice(),
 216 |       });
 217 |     }
 218 |   }
 219 | 
 220 |   const clipId = "plot-clip-" + Math.random().toString(36).slice(2);
 221 |   svg
 222 |     .append("defs")
 223 |     .append("clipPath")
 224 |     .attr("id", clipId)
 225 |     .append("rect")
 226 |     .attr("width", innerWidth)
 227 |     .attr("height", innerHeight);
 228 | 
 229 |   const rootGroup = svg
 230 |     .append("g")
 231 |     .attr("transform", `translate(${margin.left},${margin.top})`);
 232 | 
 233 |   const plotGroup = rootGroup.append("g").attr("clip-path", `url(#${clipId})`);
 234 |   const contentGroup = plotGroup.append("g");
 235 | 
 236 |   renderAxes(rootGroup, xScale, yScale, innerWidth, innerHeight);
 237 |   renderGrid(contentGroup, xScale, yScale, innerWidth, innerHeight);
 238 | 
 239 |   const initialVisiblePoints = filterVisiblePoints(
 240 |     plotterPoints,
 241 |     (val) => xScale(val),
 242 |     (val) => yScale(val),
 243 |     innerWidth,
 244 |     innerHeight,
 245 |     CELL_SIZE,
 246 |   );
 247 | 
 248 |   const baseCellSize =
 249 |     savedViewport.baseCellSize ??
 250 |     computeAdaptiveCellSize(
 251 |       initialVisiblePoints,
 252 |       (val) => xScale(val),
 253 |       (val) => yScale(val),
 254 |     );
 255 | 
 256 |   updateChartViewport(chartId, {
 257 |     baseCellSize,
 258 |   });
 259 | 
 260 |   const currentSpanX = xScale.domain()[1] - xScale.domain()[0];
 261 | 
 262 |   const currentSpanY = yScale.domain()[1] - yScale.domain()[0];
 263 | 
 264 |   const zoomFactorX = originalDomainSpanX / currentSpanX;
 265 | 
 266 |   const zoomFactorY = originalDomainSpanY / currentSpanY;
 267 | 
 268 |   const zoomFactor = Math.min(zoomFactorX, zoomFactorY);
 269 | 
 270 |   const zoomedCellSize = baseCellSize * zoomFactor;
 271 | 
 272 |   const initialEffectiveImageCount = computeEffectiveImageCount(
 273 |     zoomedCellSize,
 274 |     imageCount,
 275 |   );
 276 | 
 277 |   renderImagePoints(
 278 |     contentGroup,
 279 |     initialVisiblePoints,
 280 |     xScale,
 281 |     yScale,
 282 |     initialEffectiveImageCount,
 283 |     tooltipElement,
 284 |     zoomedCellSize,
 285 |   );
 286 | 
 287 |   const redrawContext = {
 288 |     contentGroup,
 289 |     rootGroup,
 290 |     xScale,
 291 |     yScale,
 292 |     innerWidth,
 293 |     innerHeight,
 294 |     plotterPoints,
 295 |     imageCount,
 296 |     tooltipElement,
 297 |     baseCellSize,
 298 |     originalDomainSpanX,
 299 |     originalDomainSpanY,
 300 |   };
 301 | 
 302 |   const triggerRedraw = () => redrawPlotContent(redrawContext);
 303 | 
 304 |   const brushGroup = plotGroup.append("g").attr("class", "d3-brush");
 305 | 
 306 |   const brush = buildBrush(
 307 |     xScale,
 308 |     yScale,
 309 |     innerWidth,
 310 |     innerHeight,
 311 |     brushGroup,
 312 |     triggerRedraw,
 313 |     chartId,
 314 |   );
 315 |   brushGroup.call(brush);
 316 | 
 317 |   brushGroup.lower();
 318 |   const panOverlay = plotGroup
 319 |     .append("rect")
 320 |     .attr("class", "d3-pan-overlay")
 321 |     .attr("width", innerWidth)
 322 |     .attr("height", innerHeight)
 323 |     .attr("fill", "transparent")
 324 |     .style("display", "none");
 325 | 
 326 |   const panDrag = buildPanDrag(
 327 |     xScale,
 328 |     yScale,
 329 |     innerWidth,
 330 |     innerHeight,
 331 |     triggerRedraw,
 332 |     chartId,
 333 |     originalXDomainRef,
 334 |     originalYDomainRef,
 335 |   );
 336 | 
 337 |   attachWheelZoom(
 338 |     svg,
 339 |     margin,
 340 |     xScale,
 341 |     yScale,
 342 |     innerWidth,
 343 |     innerHeight,
 344 |     triggerRedraw,
 345 |     chartId,
 346 |     originalXDomainRef,
 347 |     originalYDomainRef,
 348 |   );
 349 |   attachDoubleClickReset(
 350 |     svg,
 351 |     xScale,
 352 |     yScale,
 353 |     originalXDomainRef,
 354 |     originalYDomainRef,
 355 |     triggerRedraw,
 356 |     chartId,
 357 |   );
 358 | 
 359 |   const setActiveInteractionMode = (mode) => {
 360 |     // Clear previous interactions
 361 |     brushGroup.on(".brush", null);
 362 |     panOverlay.on(".drag", null);
 363 | 
 364 |     if (mode === INTERACTION_MODES.ZOOM) {
 365 |       panOverlay.style("display", "none");
 366 | 
 367 |       brushGroup.style("display", null);
 368 |       brushGroup.call(brush);
 369 | 
 370 |       brushGroup.select(".overlay").style("cursor", "crosshair");
 371 |     } else {
 372 |       brushGroup.style("display", "none");
 373 | 
 374 |       panOverlay.style("display", null);
 375 |       panOverlay.call(panDrag);
 376 |     }
 377 |   };
 378 | 
 379 |   const controls = buildPlotControls(
 380 |     xScale,
 381 |     yScale,
 382 |     originalXDomainRef,
 383 |     originalYDomainRef,
 384 |     triggerRedraw,
 385 |     chartId,
 386 |   );
 387 |   const destroy = () => {
 388 |     brushGroup.on(".brush", null);
 389 |     panOverlay.on(".drag", null);
 390 | 
 391 |     svg.on("wheel.zoom", null);
 392 |     svg.on("dblclick.zoom", null);
 393 |     svg.on(".zoom", null);
 394 |     svg.on(".brush", null);
 395 |     svg.on(".drag", null);
 396 | 
 397 |     contentGroup.selectAll("*").on(".", null).remove();
 398 |     rootGroup.selectAll("*").on(".", null).remove();
 399 |     svg.selectAll("*").on(".", null).remove();
 400 | 
```

### Chunk 3/6

```jsx
 401 |     if (tooltipElement) {
 402 |       d3.select(tooltipElement).style("display", "none").html("");
 403 |     }
 404 | 
 405 |     redrawContext.contentGroup = null;
 406 |     redrawContext.rootGroup = null;
 407 |     redrawContext.xScale = null;
 408 |     redrawContext.yScale = null;
 409 |     redrawContext.plotterPoints = null;
 410 |     redrawContext.imageCount = null;
 411 |     redrawContext.tooltipElement = null;
 412 |     redrawContext.baseCellSize = null;
 413 |     redrawContext.originalDomainSpanX = null;
 414 |     redrawContext.originalDomainSpanY = null;
 415 |   };
 416 | 
 417 |   return { controls, setActiveInteractionMode, destroy };
 418 | }
 419 | 
 420 | /* ─── Scale Builders ────────────────────────────────────────────── */
 421 | 
 422 | function buildXScale(plotterPoints, innerWidth, xGap) {
 423 |   const xExtent = d3.extent(plotterPoints, (point) => point.x);
 424 |   const padding = (xExtent[1] - xExtent[0]) * 0.15 || 5;
 425 |   const xSpacingScale = xGap / 10;
 426 | 
 427 |   return d3
 428 |     .scaleLinear()
 429 |     .domain([xExtent[0] - padding, xExtent[1] + padding])
 430 |     .range([0, innerWidth * xSpacingScale]);
 431 | }
 432 | 
 433 | function buildYScale(plotterPoints, innerHeight, yGap) {
 434 |   const yExtent = d3.extent(plotterPoints, (point) => point.y);
 435 |   const padding = (yExtent[1] - yExtent[0]) * 0.15 || 5;
 436 |   const ySpacingScale = yGap / 10;
 437 | 
 438 |   return d3
 439 |     .scaleLinear()
 440 |     .domain([yExtent[0] - padding, yExtent[1] + padding])
 441 |     .range([innerHeight * ySpacingScale, 0]);
 442 | }
 443 | 
 444 | /* ─── Brush Zoom ────────────────────────────────────────────────── */
 445 | 
 446 | function buildBrush(
 447 |   xScale,
 448 |   yScale,
 449 |   innerWidth,
 450 |   innerHeight,
 451 |   brushGroup,
 452 |   redrawCallback,
 453 |   chartId,
 454 | ) {
 455 |   const brush = d3
 456 |     .brush()
 457 |     .extent([
 458 |       [0, 0],
 459 |       [innerWidth, innerHeight],
 460 |     ])
 461 |     .on("end", (event) => {
 462 |       handleBrushEnd(
 463 |         event,
 464 |         brush,
 465 |         brushGroup,
 466 |         xScale,
 467 |         yScale,
 468 |         redrawCallback,
 469 |         chartId,
 470 |       );
 471 |     });
 472 | 
 473 |   return brush;
 474 | }
 475 | 
 476 | function handleBrushEnd(
 477 |   event,
 478 |   brush,
 479 |   brushGroup,
 480 |   xScale,
 481 |   yScale,
 482 |   redrawCallback,
 483 |   chartId,
 484 | ) {
 485 |   const selection = event.selection;
 486 |   if (!selection) return;
 487 | 
 488 |   const [[pixelX0, pixelY0], [pixelX1, pixelY1]] = selection;
 489 |   const selectionWidth = pixelX1 - pixelX0;
 490 |   const selectionHeight = pixelY1 - pixelY0;
 491 | 
 492 |   if (
 493 |     selectionWidth < BRUSH_ZOOM.minimumSelectionPixels ||
 494 |     selectionHeight < BRUSH_ZOOM.minimumSelectionPixels
 495 |   ) {
 496 |     brushGroup.call(brush.move, null);
 497 |     return;
 498 |   }
 499 | 
 500 |   logChartInteractionEvent({
 501 |     interactionType: "ZOOM_IN",
 502 |     visualizationLibrary: "D3",
 503 |     interactionSource: "brush",
 504 |   });
 505 | 
 506 |   const newXDomain = [xScale.invert(pixelX0), xScale.invert(pixelX1)];
 507 |   const newYDomain = [yScale.invert(pixelY1), yScale.invert(pixelY0)];
 508 | 
 509 |   xScale.domain(newXDomain);
 510 |   yScale.domain(newYDomain);
 511 | 
 512 |   updateChartViewport(chartId, {
 513 |     xDomain: newXDomain,
 514 |     yDomain: newYDomain,
 515 |   });
 516 | 
 517 |   brushGroup.call(brush.move, null);
 518 |   redrawCallback();
 519 | }
 520 | 
 521 | /* ─── Pan Drag ──────────────────────────────────────────────────── */
 522 | 
 523 | function buildPanDrag(
 524 |   xScale,
 525 |   yScale,
 526 |   innerWidth,
 527 |   innerHeight,
 528 |   redrawCallback,
 529 |   chartId,
 530 |   originalXDomainRef,
 531 |   originalYDomainRef,
 532 | ) {
 533 |   let startXDomain = null;
 534 |   let startYDomain = null;
 535 | 
 536 |   return d3
 537 |     .drag()
 538 |     .on("start", () => {
 539 |       if (
 540 |         isD3AtBaseZoomOrBelow(
 541 |           xScale,
 542 |           yScale,
 543 |           originalXDomainRef,
 544 |           originalYDomainRef,
 545 |         )
 546 |       ) {
 547 |         startXDomain = null;
 548 |         startYDomain = null;
 549 |         return;
 550 |       }
 551 | 
 552 |       logChartInteractionEvent({
 553 |         interactionType: "PAN",
 554 |         visualizationLibrary: "D3",
 555 |         interactionSource: "drag",
 556 |       });
 557 | 
 558 |       startXDomain = xScale.domain().slice();
 559 |       startYDomain = yScale.domain().slice();
 560 |     })
 561 |     .on("drag", (event) => {
 562 |       if (!startXDomain || !startYDomain) return;
 563 | 
 564 |       if (
 565 |         isD3AtBaseZoomOrBelow(
 566 |           xScale,
 567 |           yScale,
 568 |           originalXDomainRef,
 569 |           originalYDomainRef,
 570 |         )
 571 |       ) {
 572 |         startXDomain = null;
 573 |         startYDomain = null;
 574 |         return;
 575 |       }
 576 | 
 577 |       const xSpanPerPixel = (startXDomain[1] - startXDomain[0]) / innerWidth;
 578 |       const ySpanPerPixel = (startYDomain[1] - startYDomain[0]) / innerHeight;
 579 | 
 580 |       const domainDeltaX = -event.dx * xSpanPerPixel;
 581 |       const domainDeltaY = event.dy * ySpanPerPixel;
 582 | 
 583 |       const currentXDomain = xScale.domain();
 584 |       const currentYDomain = yScale.domain();
 585 | 
 586 |       xScale.domain([
 587 |         currentXDomain[0] + domainDeltaX,
 588 |         currentXDomain[1] + domainDeltaX,
 589 |       ]);
 590 |       yScale.domain([
 591 |         currentYDomain[0] + domainDeltaY,
 592 |         currentYDomain[1] + domainDeltaY,
 593 |       ]);
 594 | 
 595 |       updateChartViewport(chartId, {
 596 |         xDomain: xScale.domain().slice(),
 597 |         yDomain: yScale.domain().slice(),
 598 |       });
 599 | 
 600 |       redrawCallback();
```

### Chunk 4/6

```jsx
 601 |     })
 602 |     .on("end", () => {
 603 |       startXDomain = null;
 604 |       startYDomain = null;
 605 |     });
 606 | }
 607 | 
 608 | /* ─── Wheel Zoom ────────────────────────────────────────────────── */
 609 | 
 610 | function attachWheelZoom(
 611 |   svg,
 612 |   margin,
 613 |   xScale,
 614 |   yScale,
 615 |   innerWidth,
 616 |   innerHeight,
 617 |   redrawCallback,
 618 |   chartId,
 619 |   originalXDomainRef,
 620 |   originalYDomainRef,
 621 | ) {
 622 |   svg.on(
 623 |     "wheel.zoom",
 624 |     (event) => {
 625 |       event.preventDefault();
 626 |       handleWheelZoom(
 627 |         event,
 628 |         margin,
 629 |         xScale,
 630 |         yScale,
 631 |         innerWidth,
 632 |         innerHeight,
 633 |         redrawCallback,
 634 |         chartId,
 635 |         originalXDomainRef,
 636 |         originalYDomainRef,
 637 |       );
 638 |     },
 639 |     { passive: false },
 640 |   );
 641 | }
 642 | 
 643 | function handleWheelZoom(
 644 |   event,
 645 |   margin,
 646 |   xScale,
 647 |   yScale,
 648 |   innerWidth,
 649 |   innerHeight,
 650 |   redrawCallback,
 651 |   chartId,
 652 |   originalXDomainRef,
 653 |   originalYDomainRef,
 654 | ) {
 655 |   const zoomFactor = Math.exp(-event.deltaY * WHEEL_ZOOM_SENSITIVITY);
 656 | 
 657 |   const svgRect = event.currentTarget.getBoundingClientRect();
 658 |   const cursorX = event.clientX - svgRect.left - margin.left;
 659 |   const cursorY = event.clientY - svgRect.top - margin.top;
 660 | 
 661 |   const isCursorInsidePlot =
 662 |     cursorX >= 0 &&
 663 |     cursorX <= innerWidth &&
 664 |     cursorY >= 0 &&
 665 |     cursorY <= innerHeight;
 666 | 
 667 |   if (!isCursorInsidePlot) return;
 668 | 
 669 |   const isZoomIn = event.deltaY < 0;
 670 | 
 671 |   if (
 672 |     !isZoomIn &&
 673 |     isD3AtBaseZoomOrBelow(
 674 |       xScale,
 675 |       yScale,
 676 |       originalXDomainRef,
 677 |       originalYDomainRef,
 678 |     )
 679 |   ) {
 680 |     return;
 681 |   }
 682 | 
 683 |   logChartInteractionEvent({
 684 |     interactionType: isZoomIn ? "ZOOM_IN" : "ZOOM_OUT",
 685 |     visualizationLibrary: "D3",
 686 |     interactionSource: "wheel",
 687 |   });
 688 | 
 689 |   const anchorDataX = xScale.invert(cursorX);
 690 |   const anchorDataY = yScale.invert(cursorY);
 691 | 
 692 |   zoomDomainAroundAnchor(xScale, anchorDataX, zoomFactor);
 693 |   zoomDomainAroundAnchor(yScale, anchorDataY, zoomFactor);
 694 | 
 695 |   if (
 696 |     !isZoomIn &&
 697 |     isD3AtBaseZoomOrBelow(
 698 |       xScale,
 699 |       yScale,
 700 |       originalXDomainRef,
 701 |       originalYDomainRef,
 702 |     )
 703 |   ) {
 704 |     xScale.domain(originalXDomainRef.current.slice());
 705 |     yScale.domain(originalYDomainRef.current.slice());
 706 |   }
 707 | 
 708 |   updateChartViewport(chartId, {
 709 |     xDomain: xScale.domain().slice(),
 710 |     yDomain: yScale.domain().slice(),
 711 |   });
 712 | 
 713 |   redrawCallback();
 714 | }
 715 | 
 716 | /* ─── Double-Click Reset ───────────────────────────────────────── */
 717 | 
 718 | function attachDoubleClickReset(
 719 |   svg,
 720 |   xScale,
 721 |   yScale,
 722 |   originalXDomainRef,
 723 |   originalYDomainRef,
 724 |   redrawCallback,
 725 |   chartId,
 726 | ) {
 727 |   svg.on("dblclick.zoom", () => {
 728 |     logChartInteractionEvent({
 729 |       interactionType: "RESET",
 730 |       visualizationLibrary: "D3",
 731 |       interactionSource: "double_click",
 732 |     });
 733 |     resetDomains(xScale, yScale, originalXDomainRef, originalYDomainRef);
 734 |     updateChartViewport(chartId, {
 735 |       xDomain: originalXDomainRef.current.slice(),
 736 |       yDomain: originalYDomainRef.current.slice(),
 737 |     });
 738 |     redrawCallback();
 739 |   });
 740 | }
 741 | 
 742 | /* ─── Domain Manipulation Helpers ───────────────────────────────── */
 743 | 
 744 | function getD3ZoomLevel(
 745 |   xScale,
 746 |   yScale,
 747 |   originalXDomainRef,
 748 |   originalYDomainRef,
 749 | ) {
 750 |   if (!originalXDomainRef.current || !originalYDomainRef.current) {
 751 |     return 1;
 752 |   }
 753 | 
 754 |   const currentXSpan = xScale.domain()[1] - xScale.domain()[0];
 755 |   const currentYSpan = yScale.domain()[1] - yScale.domain()[0];
 756 | 
 757 |   const originalXSpan =
 758 |     originalXDomainRef.current[1] - originalXDomainRef.current[0];
 759 |   const originalYSpan =
 760 |     originalYDomainRef.current[1] - originalYDomainRef.current[0];
 761 | 
 762 |   const zoomX = originalXSpan / currentXSpan;
 763 |   const zoomY = originalYSpan / currentYSpan;
 764 | 
 765 |   return Math.min(zoomX, zoomY);
 766 | }
 767 | 
 768 | function isD3AtBaseZoomOrBelow(
 769 |   xScale,
 770 |   yScale,
 771 |   originalXDomainRef,
 772 |   originalYDomainRef,
 773 | ) {
 774 |   return (
 775 |     getD3ZoomLevel(xScale, yScale, originalXDomainRef, originalYDomainRef) <=
 776 |     MIN_ZOOM_SCALE
 777 |   );
 778 | }
 779 | 
 780 | function zoomDomainAroundAnchor(scale, anchorValue, zoomFactor) {
 781 |   const [domainMin, domainMax] = scale.domain();
 782 |   const newMin = anchorValue - (anchorValue - domainMin) / zoomFactor;
 783 |   const newMax = anchorValue + (domainMax - anchorValue) / zoomFactor;
 784 |   scale.domain([newMin, newMax]);
 785 | }
 786 | 
 787 | function zoomDomainAroundCenter(scale, zoomFactor) {
 788 |   const [domainMin, domainMax] = scale.domain();
 789 |   const center = (domainMin + domainMax) / 2;
 790 |   zoomDomainAroundAnchor(scale, center, zoomFactor);
 791 | }
 792 | 
 793 | function resetDomains(xScale, yScale, originalXDomainRef, originalYDomainRef) {
 794 |   xScale.domain(originalXDomainRef.current.slice());
 795 |   yScale.domain(originalYDomainRef.current.slice());
 796 | }
 797 | 
 798 | /* ─── Plot Controls (Button Handlers) ──────────────────────────── */
 799 | 
 800 | function buildPlotControls(
```

### Chunk 5/6

```jsx
 801 |   xScale,
 802 |   yScale,
 803 |   originalXDomainRef,
 804 |   originalYDomainRef,
 805 |   redrawCallback,
 806 |   chartId,
 807 | ) {
 808 |   return {
 809 |     zoomIn: () => {
 810 |       logChartInteractionEvent({
 811 |         interactionType: "ZOOM_IN",
 812 |         visualizationLibrary: "D3",
 813 |         interactionSource: "button",
 814 |       });
 815 |       zoomDomainAroundCenter(xScale, ZOOM_SCALE_FACTOR);
 816 |       zoomDomainAroundCenter(yScale, ZOOM_SCALE_FACTOR);
 817 |       updateChartViewport(chartId, {
 818 |         xDomain: xScale.domain().slice(),
 819 |         yDomain: yScale.domain().slice(),
 820 |       });
 821 |       redrawCallback();
 822 |     },
 823 |     zoomOut: () => {
 824 |       if (
 825 |         isD3AtBaseZoomOrBelow(
 826 |           xScale,
 827 |           yScale,
 828 |           originalXDomainRef,
 829 |           originalYDomainRef,
 830 |         )
 831 |       ) {
 832 |         return;
 833 |       }
 834 |       logChartInteractionEvent({
 835 |         interactionType: "ZOOM_OUT",
 836 |         visualizationLibrary: "D3",
 837 |         interactionSource: "button",
 838 |       });
 839 |       zoomDomainAroundCenter(xScale, 1 / ZOOM_SCALE_FACTOR);
 840 |       zoomDomainAroundCenter(yScale, 1 / ZOOM_SCALE_FACTOR);
 841 | 
 842 |       if (
 843 |         isD3AtBaseZoomOrBelow(
 844 |           xScale,
 845 |           yScale,
 846 |           originalXDomainRef,
 847 |           originalYDomainRef,
 848 |         )
 849 |       ) {
 850 |         xScale.domain(originalXDomainRef.current.slice());
 851 |         yScale.domain(originalYDomainRef.current.slice());
 852 |       }
 853 | 
 854 |       updateChartViewport(chartId, {
 855 |         xDomain: xScale.domain().slice(),
 856 |         yDomain: yScale.domain().slice(),
 857 |       });
 858 | 
 859 |       redrawCallback();
 860 |     },
 861 |     resetZoom: () => {
 862 |       logChartInteractionEvent({
 863 |         interactionType: "RESET",
 864 |         visualizationLibrary: "D3",
 865 |         interactionSource: "button",
 866 |       });
 867 |       resetDomains(xScale, yScale, originalXDomainRef, originalYDomainRef);
 868 |       updateChartViewport(chartId, {
 869 |         xDomain: originalXDomainRef.current.slice(),
 870 |         yDomain: originalYDomainRef.current.slice(),
 871 |       });
 872 |       redrawCallback();
 873 |     },
 874 |   };
 875 | }
 876 | 
 877 | /* ─── Content Redraw Pipeline ───────────────────────────────────── */
 878 | 
 879 | function redrawPlotContent(context) {
 880 |   const {
 881 |     contentGroup,
 882 |     rootGroup,
 883 |     xScale,
 884 |     yScale,
 885 |     innerWidth,
 886 |     innerHeight,
 887 |     plotterPoints,
 888 |     imageCount,
 889 |     tooltipElement,
 890 |     baseCellSize,
 891 |     originalDomainSpanX,
 892 |     originalDomainSpanY,
 893 |   } = context;
 894 | 
 895 |   /* Compute zoom factor from domain ratio so images grow when zoomed in,
 896 |      matching the transform-based magnification of Recharts/Konva/PixiJS. */
 897 |   const currentSpanX = xScale.domain()[1] - xScale.domain()[0];
 898 |   const currentSpanY = yScale.domain()[1] - yScale.domain()[0];
 899 |   const zoomFactorX = originalDomainSpanX / currentSpanX;
 900 |   const zoomFactorY = originalDomainSpanY / currentSpanY;
 901 |   const zoomFactor = Math.min(zoomFactorX, zoomFactorY);
 902 | 
 903 |   const zoomedCellSize = baseCellSize * zoomFactor;
 904 | 
 905 |   const visiblePoints = filterVisiblePoints(
 906 |     plotterPoints,
 907 |     (val) => xScale(val),
 908 |     (val) => yScale(val),
 909 |     innerWidth,
 910 |     innerHeight,
 911 |     zoomedCellSize,
 912 |   );
 913 | 
 914 |   const effectiveImageCount = computeEffectiveImageCount(
 915 |     zoomedCellSize,
 916 |     imageCount,
 917 |   );
 918 | 
 919 |   contentGroup.selectAll(".grid-lines, .image-point").remove();
 920 | 
 921 |   renderGrid(contentGroup, xScale, yScale, innerWidth, innerHeight);
 922 |   renderImagePoints(
 923 |     contentGroup,
 924 |     visiblePoints,
 925 |     xScale,
 926 |     yScale,
 927 |     effectiveImageCount,
 928 |     tooltipElement,
 929 |     zoomedCellSize,
 930 |   );
 931 | 
 932 |   updateAxes(rootGroup, xScale, yScale);
 933 | }
 934 | 
 935 | /* ─── Axes ──────────────────────────────────────────────────────── */
 936 | 
 937 | function renderAxes(container, xScale, yScale, innerWidth, innerHeight) {
 938 |   container
 939 |     .append("g")
 940 |     .attr("class", "x-axis")
 941 |     .attr("transform", `translate(0,${innerHeight})`)
 942 |     .call(d3.axisBottom(xScale).ticks(8))
 943 |     .selectAll("text")
 944 |     .attr("fill", "#888");
 945 | 
 946 |   container
 947 |     .append("g")
 948 |     .attr("class", "y-axis")
 949 |     .call(d3.axisLeft(yScale).ticks(6))
 950 |     .selectAll("text")
 951 |     .attr("fill", "#888");
 952 | 
 953 |   styleAxisElements(container);
 954 | }
 955 | 
 956 | function updateAxes(container, xScale, yScale) {
 957 |   container.select(".x-axis").call(d3.axisBottom(xScale).ticks(8));
 958 |   container.select(".y-axis").call(d3.axisLeft(yScale).ticks(6));
 959 | 
 960 |   container.selectAll(".x-axis text, .y-axis text").attr("fill", "#888");
 961 |   styleAxisElements(container);
 962 | }
 963 | 
 964 | function styleAxisElements(container) {
 965 |   container.selectAll(".x-axis line, .y-axis line").attr("stroke", "#555");
 966 |   container.selectAll(".x-axis path, .y-axis path").attr("stroke", "#555");
 967 | }
 968 | 
 969 | /* ─── Grid ──────────────────────────────────────────────────────── */
 970 | 
 971 | function renderGrid(container, xScale, yScale, innerWidth, innerHeight) {
 972 |   const gridGroup = container.append("g").attr("class", "grid-lines");
 973 | 
 974 |   gridGroup
 975 |     .selectAll("line.horizontal")
 976 |     .data(yScale.ticks(6))
 977 |     .enter()
 978 |     .append("line")
 979 |     .attr("class", "horizontal")
 980 |     .attr("x1", 0)
 981 |     .attr("x2", innerWidth)
 982 |     .attr("y1", (tick) => yScale(tick))
 983 |     .attr("y2", (tick) => yScale(tick))
 984 |     .attr("stroke", "#2a2a3e")
 985 |     .attr("stroke-dasharray", "3 3");
 986 | 
 987 |   gridGroup
 988 |     .selectAll("line.vertical")
 989 |     .data(xScale.ticks(8))
 990 |     .enter()
 991 |     .append("line")
 992 |     .attr("class", "vertical")
 993 |     .attr("x1", (tick) => xScale(tick))
 994 |     .attr("x2", (tick) => xScale(tick))
 995 |     .attr("y1", 0)
 996 |     .attr("y2", innerHeight)
 997 |     .attr("stroke", "#2a2a3e")
 998 |     .attr("stroke-dasharray", "3 3");
 999 | }
1000 | 
```

### Chunk 6/6

```jsx
1001 | /* ─── Image Points ──────────────────────────────────────────────── */
1002 | 
1003 | function renderImagePoints(
1004 |   container,
1005 |   plotterPoints,
1006 |   xScale,
1007 |   yScale,
1008 |   imageCount,
1009 |   tooltipElement,
1010 |   cellSize = CELL_SIZE,
1011 | ) {
1012 |   const tooltip = d3.select(tooltipElement);
1013 | 
1014 |   plotterPoints.forEach((point) => {
1015 |     const centerX = xScale(point.x);
1016 |     const centerY = yScale(point.y);
1017 |     const positions = computeImagePositions(
1018 |       centerX,
1019 |       centerY,
1020 |       cellSize,
1021 |       cellSize,
1022 |       imageCount,
1023 |     );
1024 | 
1025 |     const pointGroup = container.append("g").attr("class", "image-point");
1026 | 
1027 |     positions.forEach((position) => {
1028 |       pointGroup
1029 |         .append("image")
1030 |         .attr("href", point.image)
1031 |         .attr("x", position.x)
1032 |         .attr("y", position.y)
1033 |         .attr("width", position.width)
1034 |         .attr("height", position.height)
1035 |         .attr("preserveAspectRatio", "xMidYMid meet")
1036 |         .style("cursor", "pointer")
1037 |         .on("mouseenter", function () {
1038 |           console.log("IMAGE ENTER");
1039 |         })
1040 |         .on("mouseenter", function (event) {
1041 |           d3.select(".d3-brush .overlay").style("pointer-events", "none");
1042 | 
1043 |           showTooltip(tooltip, event, point);
1044 |         })
1045 |         .on("mouseleave", function () {
1046 |           d3.select(".d3-brush .overlay").style("pointer-events", "all");
1047 | 
1048 |           hideTooltip(tooltip);
1049 |         });
1050 |     });
1051 | 
1052 |     pointGroup
1053 |       .on("mouseenter", (event) => showTooltip(tooltip, event, point))
1054 |       .on("mousemove", (event) => moveTooltip(tooltip, event))
1055 |       .on("mouseleave", () => hideTooltip(tooltip));
1056 |   });
1057 | }
1058 | 
1059 | /* ─── Tooltip ───────────────────────────────────────────────────── */
1060 | 
1061 | function showTooltip(tooltip, event, point) {
1062 |   tooltip
1063 |     .style("display", "block")
1064 |     .html(
1065 |       `<div class="tooltip-label">${point.label}</div>` +
1066 |         `<div class="tooltip-meta">` +
1067 |         `<span>Interval: ${point.meta.interval}s</span>` +
1068 |         `<span>Angle: ${point.meta.angle}°</span>` +
1069 |         `<span>Quality: ${point.meta.quality}</span>` +
1070 |         `</div>`,
1071 |     );
1072 | 
1073 |   moveTooltip(tooltip, event);
1074 | }
1075 | 
1076 | function moveTooltip(tooltip, event) {
1077 |   const containerRect = event.currentTarget
1078 |     .closest(".viewer-container")
1079 |     ?.getBoundingClientRect();
1080 |   if (!containerRect) return;
1081 | 
1082 |   tooltip
1083 |     .style("left", `${event.clientX - containerRect.left + 12}px`)
1084 |     .style("top", `${event.clientY - containerRect.top - 10}px`);
1085 | }
1086 | 
1087 | function hideTooltip(tooltip) {
1088 |   tooltip.style("display", "none");
1089 | }
1090 | 
1091 | export default D3Plotter;
1092 | 
```


---

## 📄 src\components\DataPointCountControl.jsx
**hash:** `7cf3aee6`

### Chunk 1/1

```jsx
   1 | "use client";
   2 | 
   3 | const DATA_POINT_OPTIONS = [100, 500, 1000];
   4 | 
   5 | export default function DataPointCountControl({
   6 |   dataPointCount,
   7 |   onDataPointCountChange,
   8 | }) {
   9 |   return (
  10 |     <div className="dp-control">
  11 |       {/* Header */}
  12 |       <div className="dp-header">
  13 |         <h3 className="dp-title">Data Points</h3>
  14 | 
  15 |         <span className="dp-selected">{dataPointCount} selected</span>
  16 |       </div>
  17 | 
  18 |       {/* Buttons */}
  19 |       <div className="dp-buttons">
  20 |         {DATA_POINT_OPTIONS.map((count) => {
  21 |           const isActive = dataPointCount === count;
  22 | 
  23 |           return (
  24 |             <button
  25 |               key={count}
  26 |               onClick={() => onDataPointCountChange(count)}
  27 |               className={`dp-button ${isActive ? "active" : ""}`}
  28 |             >
  29 |               {count}
  30 |             </button>
  31 |           );
  32 |         })}
  33 |       </div>
  34 |     </div>
  35 |   );
  36 | }
  37 | 
```


---

## 📄 src\components\DeckGLPlotter.jsx
**hash:** `29b49072`

### Chunk 1/2

```jsx
   1 | import { useState, useMemo, useRef, useEffect } from "react";
   2 | import DeckGL from "@deck.gl/react";
   3 | import { OrthographicView } from "@deck.gl/core";
   4 | import { IconLayer, TextLayer } from "@deck.gl/layers";
   5 | import * as d3 from "d3";
   6 | 
   7 | import { usePlotterData } from "../lib/plotterData";
   8 | import { computeImagePositions } from "../lib/gridLayout";
   9 | 
  10 | import { CELL_SIZE, PLOT_DIMENSIONS, PLOT_MARGIN } from "../lib/constants";
  11 | 
  12 | import PlotterControls from "./PlotterControls";
  13 | 
  14 | const ORTHOGRAPHIC_VIEW = new OrthographicView({
  15 |   id: "orthographic-view",
  16 |   flipY: true,
  17 | });
  18 | 
  19 | const ZOOM_MIN = -4;
  20 | const ZOOM_MAX = 8;
  21 | 
  22 | const BASE_X_GAP = 10;
  23 | const BASE_Y_GAP = 10;
  24 | 
  25 | function DeckGLPlotter({ imageCount, xGap, yGap }) {
  26 |   const { plotterPoints, isLoading, loadError } = usePlotterData();
  27 | 
  28 |   if (isLoading) {
  29 |     return <div className="plotter-loading">Loading data…</div>;
  30 |   }
  31 | 
  32 |   if (loadError) {
  33 |     return <div className="plotter-error">Error: {loadError}</div>;
  34 |   }
  35 | 
  36 |   return (
  37 |     <DeckGLCanvas
  38 |       plotterPoints={plotterPoints}
  39 |       imageCount={imageCount}
  40 |       xGap={xGap}
  41 |       yGap={yGap}
  42 |     />
  43 |   );
  44 | }
  45 | 
  46 | function DeckGLCanvas({ plotterPoints, imageCount, xGap, yGap }) {
  47 |   const containerRef = useRef(null);
  48 | 
  49 |   const [containerWidth, setContainerWidth] = useState(PLOT_DIMENSIONS.width);
  50 | 
  51 |   const [hoveredPoint, setHoveredPoint] = useState(null);
  52 | 
  53 |   const [tooltipPos, setTooltipPos] = useState({
  54 |     x: 0,
  55 |     y: 0,
  56 |   });
  57 | 
  58 |   const [viewState, setViewState] = useState({
  59 |     target: [0, 0, 0],
  60 |     zoom: 0,
  61 |   });
  62 | 
  63 |   useEffect(() => {
  64 |     if (!containerRef.current) return;
  65 | 
  66 |     const observer = new ResizeObserver((entries) => {
  67 |       const entry = entries[0];
  68 | 
  69 |       if (entry) {
  70 |         setContainerWidth(entry.contentRect.width);
  71 |       }
  72 |     });
  73 | 
  74 |     observer.observe(containerRef.current);
  75 | 
  76 |     return () => observer.disconnect();
  77 |   }, []);
  78 | 
  79 |   const width = containerWidth;
  80 |   const height = PLOT_DIMENSIONS.height;
  81 | 
  82 |   const innerWidth = Math.max(
  83 |     width - PLOT_MARGIN.left - PLOT_MARGIN.right,
  84 |     320,
  85 |   );
  86 | 
  87 |   const innerHeight = Math.max(
  88 |     height - PLOT_MARGIN.top - PLOT_MARGIN.bottom,
  89 |     240,
  90 |   );
  91 | 
  92 |   /**
  93 |    * NORMALIZE DATA
  94 |    */
  95 |   const normalizedPoints = useMemo(() => {
  96 |     const xScale = xGap / BASE_X_GAP;
  97 |     const yScale = yGap / BASE_Y_GAP;
  98 | 
  99 |     return plotterPoints.map((point) => ({
 100 |       ...point,
 101 |       scaledX: point.x * xScale,
 102 |       scaledY: point.y * yScale,
 103 |     }));
 104 |   }, [plotterPoints, xGap, yGap]);
 105 | 
 106 |   /**
 107 |    * WORLD EXTENTS
 108 |    */
 109 |   const xExtent = useMemo(() => {
 110 |     return extentWithPadding(normalizedPoints.map((d) => d.scaledX));
 111 |   }, [normalizedPoints]);
 112 | 
 113 |   const yExtent = useMemo(() => {
 114 |     return extentWithPadding(normalizedPoints.map((d) => d.scaledY));
 115 |   }, [normalizedPoints]);
 116 | 
 117 |   /**
 118 |    * FIT DATA INITIALLY
 119 |    */
 120 |   useEffect(() => {
 121 |     const domainWidth = xExtent[1] - xExtent[0];
 122 |     const domainHeight = yExtent[1] - yExtent[0];
 123 | 
 124 |     const scaleX = innerWidth / domainWidth;
 125 |     const scaleY = innerHeight / domainHeight;
 126 | 
 127 |     const scale = Math.min(scaleX, scaleY);
 128 | 
 129 |     const zoom = Math.log2(scale);
 130 | 
 131 |     const centerX = (xExtent[0] + xExtent[1]) / 2;
 132 |     const centerY = (yExtent[0] + yExtent[1]) / 2;
 133 | 
 134 |     Promise.resolve().then(() => {
 135 |       setViewState({
 136 |         target: [centerX, centerY, 0],
 137 |         zoom,
 138 |       });
 139 |     });
 140 |   }, [xExtent, yExtent, innerWidth, innerHeight]);
 141 | 
 142 |   /**
 143 |    * IMAGE DATA
 144 |    */
 145 |   const imageData = useMemo(() => {
 146 |     const items = [];
 147 | 
 148 |     for (const point of normalizedPoints) {
 149 |       const positions = computeImagePositions(
 150 |         point.scaledX,
 151 |         point.scaledY,
 152 |         CELL_SIZE,
 153 |         CELL_SIZE,
 154 |         imageCount,
 155 |       );
 156 | 
 157 |       positions.forEach((position, index) => {
 158 |         if (!point.image) return;
 159 | 
 160 |         items.push({
 161 |           id: `${point.id}-${index}`,
 162 | 
 163 |           x: position.x,
 164 |           y: position.y,
 165 | 
 166 |           width: position.width,
 167 |           height: position.height,
 168 | 
 169 |           image: point.image,
 170 | 
 171 |           point,
 172 |         });
 173 |       });
 174 |     }
 175 | 
 176 |     return items;
 177 |   }, [normalizedPoints, imageCount]);
 178 | 
 179 |   /**
 180 |    * GRID LINES
 181 |    */
 182 | 
 183 | 
 184 |   /**
 185 |    * LAYERS
 186 |    */
 187 |   const layers = useMemo(() => {
 188 |     return [
 189 |       new IconLayer({
 190 |         id: "image-layer",
 191 | 
 192 |         data: imageData,
 193 | 
 194 |         pickable: true,
 195 | 
 196 |         billboard: false,
 197 | 
 198 |         sizeUnits: "common",
 199 | 
 200 |         getPosition: (d) => [d.x, d.y],
```

### Chunk 2/2

```jsx
 201 | 
 202 |         getIcon: (d) => ({
 203 |           url: d.image,
 204 |           width: d.width,
 205 |           height: d.height,
 206 |         }),
 207 | 
 208 |         getSize: (d) => d.width,
 209 | 
 210 |         onHover: (info) => {
 211 |           if (info.object) {
 212 |             setHoveredPoint(info.object.point);
 213 | 
 214 |             setTooltipPos({
 215 |               x: info.x,
 216 |               y: info.y,
 217 |             });
 218 |           } else {
 219 |             setHoveredPoint(null);
 220 |           }
 221 |         },
 222 | 
 223 |         updateTriggers: {
 224 |           getIcon: imageData,
 225 |         },
 226 |       }),
 227 | 
 228 |       new TextLayer({
 229 |         id: "axis-labels",
 230 | 
 231 |         data: [
 232 |           ...d3.ticks(xExtent[0], xExtent[1], 10).map((x) => ({
 233 |             position: [x, yExtent[0] - 10],
 234 |             text: formatTick(x),
 235 |           })),
 236 | 
 237 |           ...d3.ticks(yExtent[0], yExtent[1], 8).map((y) => ({
 238 |             position: [xExtent[0] - 10, y],
 239 |             text: formatTick(y),
 240 |           })),
 241 |         ],
 242 | 
 243 |         getPosition: (d) => d.position,
 244 | 
 245 |         getText: (d) => d.text,
 246 | 
 247 |         getSize: 12,
 248 | 
 249 |         getColor: [140, 140, 140],
 250 | 
 251 |         getTextAnchor: "middle",
 252 | 
 253 |         getAlignmentBaseline: "center",
 254 |       }),
 255 |     ];
 256 |   }, [imageData, xExtent, yExtent]);
 257 | 
 258 |   /**
 259 |    * CONTROLS
 260 |    */
 261 |   const handleZoomIn = () => {
 262 |     setViewState((prev) => ({
 263 |       ...prev,
 264 |       zoom: Math.min(prev.zoom + 0.5, ZOOM_MAX),
 265 |     }));
 266 |   };
 267 | 
 268 |   const handleZoomOut = () => {
 269 |     setViewState((prev) => ({
 270 |       ...prev,
 271 |       zoom: Math.max(prev.zoom - 0.5, ZOOM_MIN),
 272 |     }));
 273 |   };
 274 | 
 275 |   const handleReset = () => {
 276 |     const domainWidth = xExtent[1] - xExtent[0];
 277 |     const domainHeight = yExtent[1] - yExtent[0];
 278 | 
 279 |     const scaleX = innerWidth / domainWidth;
 280 |     const scaleY = innerHeight / domainHeight;
 281 | 
 282 |     const scale = Math.min(scaleX, scaleY);
 283 | 
 284 |     const zoom = Math.log2(scale);
 285 | 
 286 |     setViewState({
 287 |       target: [(xExtent[0] + xExtent[1]) / 2, (yExtent[0] + yExtent[1]) / 2, 0],
 288 |       zoom,
 289 |     });
 290 |   };
 291 | 
 292 |   return (
 293 |     <div
 294 |       ref={containerRef}
 295 |       style={{
 296 |         position: "relative",
 297 |         width: "100%",
 298 |       }}
 299 |     >
 300 |       <PlotterControls
 301 |         zoomLevel={Number(Math.pow(2, viewState.zoom).toFixed(2))}
 302 |         onZoomIn={handleZoomIn}
 303 |         onZoomOut={handleZoomOut}
 304 |         onReset={handleReset}
 305 |       />
 306 | 
 307 |       <div
 308 |         style={{
 309 |           position: "relative",
 310 |           width: "100%",
 311 |           height,
 312 |           background: "#16213e",
 313 |           overflow: "hidden",
 314 |         }}
 315 |       >
 316 |         <DeckGL
 317 |           views={ORTHOGRAPHIC_VIEW}
 318 |           controller={{
 319 |             dragPan: true,
 320 |             scrollZoom: true,
 321 |             doubleClickZoom: true,
 322 |             touchZoom: true,
 323 |             touchRotate: false,
 324 |             keyboard: false,
 325 |           }}
 326 |           layers={layers}
 327 |           width={width}
 328 |           height={height}
 329 |           viewState={viewState}
 330 |           onViewStateChange={({ viewState }) => {
 331 |             setViewState({
 332 |               ...viewState,
 333 |               zoom: clamp(viewState.zoom, ZOOM_MIN, ZOOM_MAX),
 334 |             });
 335 |           }}
 336 |           parameters={{
 337 |             depthTest: false,
 338 |             blend: true,
 339 |           }}
 340 |           style={{
 341 |             position: "absolute",
 342 |             inset: 0,
 343 |           }}
 344 |         />
 345 | 
 346 |         {hoveredPoint && (
 347 |           <div
 348 |             className="plotter-tooltip"
 349 |             style={{
 350 |               display: "block",
 351 |               position: "fixed",
 352 |               left: tooltipPos.x + 12,
 353 |               top: tooltipPos.y - 10,
 354 |               pointerEvents: "none",
 355 |               zIndex: 1000,
 356 |             }}
 357 |           >
 358 |             <div className="tooltip-label">{hoveredPoint.label}</div>
 359 | 
 360 |             <div className="tooltip-meta">
 361 |               <span>Interval: {hoveredPoint.meta.interval}s</span>
 362 | 
 363 |               <span>Angle: {hoveredPoint.meta.angle}°</span>
 364 | 
 365 |               <span>Quality: {hoveredPoint.meta.quality}</span>
 366 |             </div>
 367 |           </div>
 368 |         )}
 369 |       </div>
 370 |     </div>
 371 |   );
 372 | }
 373 | 
 374 | function extentWithPadding(values) {
 375 |   if (!values.length) return [0, 1];
 376 | 
 377 |   const min = Math.min(...values);
 378 |   const max = Math.max(...values);
 379 | 
 380 |   const span = max - min;
 381 | 
 382 |   const pad = span === 0 ? 5 : Math.max(span * 0.18, 1);
 383 | 
 384 |   return [min - pad, max + pad];
 385 | }
 386 | 
 387 | function clamp(value, min, max) {
 388 |   return Math.max(min, Math.min(max, value));
 389 | }
 390 | 
 391 | function formatTick(value) {
 392 |   if (Number.isInteger(value)) {
 393 |     return String(value);
 394 |   }
 395 | 
 396 |   return parseFloat(Number(value).toPrecision(4)).toString();
 397 | }
 398 | 
 399 | export default DeckGLPlotter;
 400 | 
```


---

## 📄 src\components\EChartsPlotter.jsx
**hash:** `41b8362e`

### Chunk 1/1

```jsx
   1 | import { useMemo, useCallback, useRef } from "react";
   2 | import ReactECharts from "echarts-for-react";
   3 | import { usePlotterData } from "../lib/plotterData";
   4 | import { CELL_SIZE } from "../lib/constants";
   5 | import PlotterControls from "./PlotterControls";
   6 | 
   7 | function EChartsPlotter({ imageCount, xGap, yGap }) {
   8 |   const { plotterPoints, isLoading, loadError } = usePlotterData();
   9 | 
  10 |   if (isLoading) return <div className="plotter-loading">Loading data…</div>;
  11 |   if (loadError) return <div className="plotter-error">Error: {loadError}</div>;
  12 | 
  13 |   return (
  14 |     <EChartsCanvas
  15 |       plotterPoints={plotterPoints}
  16 |       imageCount={imageCount}
  17 |       xGap={xGap}
  18 |       yGap={yGap}
  19 |     />
  20 |   );
  21 | }
  22 | 
  23 | function EChartsCanvas({ plotterPoints, imageCount, xGap, yGap }) {
  24 |   const echartsRef = useRef(null);
  25 | 
  26 |   const chartOption = useMemo(
  27 |     () => buildChartOption(plotterPoints, imageCount, xGap, yGap),
  28 |     [plotterPoints, imageCount, xGap, yGap],
  29 |   );
  30 | 
  31 |   const handleChartEvents = useCallback(() => ({}), []);
  32 | 
  33 |   const handleZoom = (scale) => {
  34 |     if (!echartsRef.current) return;
  35 |     const instance = echartsRef.current.getEchartsInstance();
  36 |     const option = instance.getOption();
  37 |     const dataZoom = option.dataZoom[0];
  38 |     const range = dataZoom.end - dataZoom.start;
  39 |     const newRange = range * scale;
  40 |     const center = (dataZoom.end + dataZoom.start) / 2;
  41 |     instance.dispatchAction({
  42 |       type: "dataZoom",
  43 |       start: Math.max(0, center - newRange / 2),
  44 |       end: Math.min(100, center + newRange / 2),
  45 |     });
  46 |   };
  47 | 
  48 |   const handleReset = () => {
  49 |     if (!echartsRef.current) return;
  50 |     const instance = echartsRef.current.getEchartsInstance();
  51 |     instance.dispatchAction({ type: "dataZoom", start: 0, end: 100 });
  52 |   };
  53 | 
  54 |   return (
  55 |     <div style={{ position: "relative" }}>
  56 |       <PlotterControls
  57 |         onZoomIn={() => handleZoom(1 / 1.5)}
  58 |         onZoomOut={() => handleZoom(1.5)}
  59 |         onReset={handleReset}
  60 |       />
  61 |       <ReactECharts
  62 |         ref={echartsRef}
  63 |         option={chartOption}
  64 |         style={{ height: 550, width: "100%" }}
  65 |         notMerge
  66 |         opts={{ renderer: "canvas" }}
  67 |         onEvents={handleChartEvents()}
  68 |       />
  69 |     </div>
  70 |   );
  71 | }
  72 | 
  73 | function buildChartOption(plotterPoints, imageCount, xGap, yGap) {
  74 |   const gridConfig = getGridConfig(imageCount);
  75 |   const subCellWidth = CELL_SIZE;
  76 |   const subCellHeight = CELL_SIZE;
  77 | 
  78 |   const xValues = plotterPoints.map((p) => p.x);
  79 |   const yValues = plotterPoints.map((p) => p.y);
  80 | 
  81 |   const xMin = Math.min(...xValues);
  82 |   const xMax = Math.max(...xValues);
  83 |   const yMin = Math.min(...yValues);
  84 |   const yMax = Math.max(...yValues);
  85 | 
  86 |   const xPadding = (xMax - xMin) * 0.15 || 5;
  87 |   const yPadding = (yMax - yMin) * 0.15 || 5;
  88 | 
  89 |   const xCenter = (xMax + xMin) / 2;
  90 |   const yCenter = (yMax + yMin) / 2;
  91 | 
  92 |   const xSpacingScale = xGap / 10;
  93 |   const ySpacingScale = yGap / 10;
  94 | 
  95 |   const xRange = (xMax - xMin + 2 * xPadding) / xSpacingScale;
  96 |   const yRange = (yMax - yMin + 2 * yPadding) / ySpacingScale;
  97 | 
  98 |   return {
  99 |     backgroundColor: "transparent",
 100 |     tooltip: {
 101 |       trigger: "item",
 102 |       formatter: formatTooltip,
 103 |     },
 104 |     xAxis: {
 105 |       type: "value",
 106 |       min: xCenter - xRange / 2,
 107 |       max: xCenter + xRange / 2,
 108 |       axisLine: { lineStyle: { color: "#555" } },
 109 |       axisLabel: { color: "#888" },
 110 |       splitLine: { lineStyle: { color: "#2a2a3e", type: "dashed" } },
 111 |     },
 112 |     yAxis: {
 113 |       type: "value",
 114 |       min: yCenter - yRange / 2,
 115 |       max: yCenter + yRange / 2,
 116 |       axisLine: { lineStyle: { color: "#555" } },
 117 |       axisLabel: { color: "#888" },
 118 |       splitLine: { lineStyle: { color: "#2a2a3e", type: "dashed" } },
 119 |     },
 120 |     dataZoom: [
 121 |       { type: "inside", xAxisIndex: 0 },
 122 |       { type: "inside", yAxisIndex: 0 },
 123 |     ],
 124 |     series: [
 125 |       {
 126 |         type: "custom",
 127 |         renderItem: function (params, api) {
 128 |           const x = api.value(0);
 129 |           const y = api.value(1);
 130 |           const coord = api.coord([x, y]);
 131 | 
 132 |           const children = [];
 133 |           let subIndex = 0;
 134 |           for (let row = 0; row < gridConfig.rows; row++) {
 135 |             for (let col = 0; col < gridConfig.columns; col++) {
 136 |               if (subIndex >= imageCount) break;
 137 | 
 138 |               const xPos =
 139 |                 col * (subCellWidth + xGap) -
 140 |                 ((gridConfig.columns - 1) * (subCellWidth + xGap)) / 2;
 141 |               const yPos =
 142 |                 row * (subCellHeight + yGap) -
 143 |                 ((gridConfig.rows - 1) * (subCellHeight + yGap)) / 2;
 144 | 
 145 |               children.push({
 146 |                 type: "image",
 147 |                 style: {
 148 |                   image: api.value(2),
 149 |                   x: coord[0] + xPos - subCellWidth / 2,
 150 |                   y: coord[1] + yPos - subCellHeight / 2,
 151 |                   width: subCellWidth,
 152 |                   height: subCellHeight,
 153 |                 },
 154 |               });
 155 | 
 156 |               subIndex++;
 157 |             }
 158 |           }
 159 |           return { type: "group", children: children };
 160 |         },
 161 |         data: plotterPoints.map((point) => ({
 162 |           value: [point.x, point.y, point.image],
 163 |           name: point.label,
 164 |           meta: point.meta,
 165 |         })),
 166 |       },
 167 |     ],
 168 |   };
 169 | }
 170 | 
 171 | // Removed graphic element builders since we are using custom series
 172 | 
 173 | function getGridConfig(imageCount) {
 174 |   const configs = {
 175 |     1: { rows: 1, columns: 1 },
 176 |     2: { rows: 1, columns: 2 },
 177 |     4: { rows: 2, columns: 2 },
 178 |     8: { rows: 2, columns: 4 },
 179 |   };
 180 | 
 181 |   return configs[imageCount] || configs[1];
 182 | }
 183 | 
 184 | function formatTooltip(params) {
 185 |   if (!params || !params.data) return "";
 186 | 
 187 |   const { name, data } = params;
 188 |   const meta = data.meta;
 189 | 
 190 |   return (
 191 |     `<strong>${name}</strong><br/>` +
 192 |     `Interval: ${meta.interval}s<br/>` +
 193 |     `Angle: ${meta.angle}°<br/>` +
 194 |     `Quality: ${meta.quality}`
 195 |   );
 196 | }
 197 | 
 198 | export default EChartsPlotter;
 199 | 
```


---

## 📄 src\components\ImageCanvasLayer.jsx
**hash:** `19ba8cf2`

### Chunk 1/1

```jsx
   1 | import { useEffect, useRef } from "react";
   2 | import { getImageBitmapLoD } from "../lib/imageBitmapCache";
   3 | import { PLOT_MARGIN } from "../lib/constants";
   4 | import { computeImagePositions } from "../lib/gridLayout";
   5 | 
   6 | export default function ImageCanvasLayer({
   7 |   points,
   8 |   baseXScale,
   9 |   baseYScale,
  10 |   cellSize,
  11 |   transform,
  12 |   imageCount,
  13 | }) {
  14 |   const canvasRef = useRef(null);
  15 | 
  16 |   useEffect(() => {
  17 |     if (!canvasRef.current || !points.length) return;
  18 | 
  19 |     const canvas = canvasRef.current;
  20 |     const ctx = canvas.getContext("2d");
  21 | 
  22 |     const dpr = window.devicePixelRatio || 1;
  23 |     const width = canvas.clientWidth;
  24 |     const height = canvas.clientHeight;
  25 | 
  26 |     canvas.width = width * dpr;
  27 |     canvas.height = height * dpr;
  28 | 
  29 |     ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  30 | 
  31 |     ctx.clearRect(0, 0, width, height);
  32 | 
  33 |     let cancelled = false;
  34 | 
  35 |     const render = async () => {
  36 |       const renderedPx = cellSize * transform.scale;
  37 |       const uniqueUrls = [...new Set(points.map((p) => p.image))];
  38 | 
  39 |       const bitmapMap = new Map();
  40 | 
  41 |       await Promise.all(
  42 |         uniqueUrls.map(async (url) => {
  43 |           try {
  44 |             const bmp = await getImageBitmapLoD(url, renderedPx);
  45 |             bitmapMap.set(url, bmp);
  46 |           } catch {
  47 |             // ignore
  48 |           }
  49 |         }),
  50 |       );
  51 | 
  52 |       if (cancelled) return;
  53 | 
  54 |       for (const point of points) {
  55 |         const x = transform.x + baseXScale(point.scaledX) * transform.scale;
  56 |         const y = transform.y + baseYScale(point.scaledY) * transform.scale;
  57 | 
  58 |         if (renderedPx < 6) {
  59 |           ctx.fillStyle = "#2a3a5a";
  60 |           ctx.fillRect(
  61 |             x - renderedPx / 2,
  62 |             y - renderedPx / 2,
  63 |             renderedPx,
  64 |             renderedPx,
  65 |           );
  66 |           continue;
  67 |         }
  68 | 
  69 |         const bitmap = bitmapMap.get(point.image);
  70 | 
  71 |         if (!bitmap) {
  72 |           ctx.fillStyle = "#444";
  73 |           ctx.fillRect(
  74 |             x - renderedPx / 2,
  75 |             y - renderedPx / 2,
  76 |             renderedPx,
  77 |             renderedPx,
  78 |           );
  79 |           continue;
  80 |         }
  81 | 
  82 |         const positions = computeImagePositions(
  83 |           x,
  84 |           y,
  85 |           renderedPx,
  86 |           renderedPx,
  87 |           imageCount,
  88 |         );
  89 | 
  90 |         for (const pos of positions) {
  91 |           ctx.drawImage(bitmap, pos.x, pos.y, pos.width, pos.height);
  92 |         }
  93 |       }
  94 |     };
  95 | 
  96 |     render();
  97 | 
  98 |     return () => {
  99 |       cancelled = true;
 100 |     };
 101 |   }, [
 102 |     points,
 103 |     baseXScale,
 104 |     baseYScale,
 105 |     cellSize,
 106 |     transform.scale,
 107 |     transform.x,
 108 |     transform.y,
 109 |     imageCount,
 110 |   ]);
 111 | 
 112 |   return (
 113 |     <canvas
 114 |       ref={canvasRef}
 115 |       style={{
 116 |         position: "absolute",
 117 |         left: `${PLOT_MARGIN.left}px`,
 118 |         top: `${PLOT_MARGIN.top}px`,
 119 |         width: `calc(100% - ${PLOT_MARGIN.left + PLOT_MARGIN.right}px)`,
 120 |         height: `calc(100% - ${PLOT_MARGIN.top + PLOT_MARGIN.bottom}px)`,
 121 |         pointerEvents: "none",
 122 |       }}
 123 |     />
 124 |   );
 125 | }
 126 | 
```


---

## 📄 src\components\ImageCountSelector.jsx
**hash:** `f42373a`

### Chunk 1/1

```jsx
   1 | import { IMAGE_COUNT_OPTIONS } from "../lib/constants";
   2 | 
   3 | function ImageCountSelector({ imageCount, setImageCount }) {
   4 |   return (
   5 |     <div className="image-count-selector">
   6 |       <span className="selector-label">Images per point:</span>
   7 | 
   8 |       {IMAGE_COUNT_OPTIONS.map((count) => (
   9 |         <button
  10 |           key={count}
  11 |           className={`count-button ${imageCount === count ? "active" : ""}`}
  12 |           onClick={() => setImageCount(count)}
  13 |         >
  14 |           {count}
  15 |         </button>
  16 |       ))}
  17 |     </div>
  18 |   );
  19 | }
  20 | 
  21 | export default ImageCountSelector;
  22 | 
```


---

## 📄 src\components\KonvaPlotter.jsx
**hash:** `739264ae`

### Chunk 1/6

```jsx
   1 | /* eslint-disable react-hooks/refs */
   2 | import { useState, useRef, useCallback, useEffect, useMemo } from "react";
   3 | import {
   4 |   Stage,
   5 |   Layer,
   6 |   Image as KonvaImage,
   7 |   Text,
   8 |   Line,
   9 |   Rect,
  10 |   Group,
  11 | } from "react-konva";
  12 | import { usePlotterData } from "../lib/plotterData";
  13 | import { computeImagePositions } from "../lib/gridLayout";
  14 | import {
  15 |   CELL_SIZE,
  16 |   PLOT_DIMENSIONS,
  17 |   PLOT_MARGIN,
  18 |   DATA_POINT_LIMITS,
  19 | } from "../lib/constants";
  20 | import {
  21 |   computeAdaptiveCellSize,
  22 |   filterVisiblePoints,
  23 |   computeEffectiveImageCount,
  24 | } from "../lib/densityLayout";
  25 | import PlotterControls from "./PlotterControls";
  26 | import { logChartInteractionEvent } from "../lib/chartInteractionLogger";
  27 | import { useInteractionMode } from "../lib/interactionMode";
  28 | import {
  29 |   getChartViewport,
  30 |   updateChartViewport,
  31 | } from "../lib/chartViewportStore";
  32 | import { generateSyntheticPoints } from "../lib/syntheticDataGenerator";
  33 | 
  34 | const AXIS_TICK_COUNT = 8;
  35 | const EXTENT_PADDING_RATIO = 0.2;
  36 | const EXTENT_FALLBACK_PADDING = 5;
  37 | const ZOOM_STEP = 1.5;
  38 | const PINCH_ZOOM_SENSITIVITY = 0.01;
  39 | const ZOOM_MIN = 1;
  40 | const MIN_ZOOM_SCALE = 1.001;
  41 | const ZOOM_MAX = 100000;
  42 | const GRID_COLOR = "#2a2a3e";
  43 | const AXIS_LINE_COLOR = "#555555";
  44 | const TICK_LABEL_COLOR = "#aaaaaa";
  45 | const TICK_LABEL_FONT_SIZE = 11;
  46 | const BRUSH_FILL = "rgba(68, 147, 255, 0.15)";
  47 | const BRUSH_STROKE = "#4493ff";
  48 | const BRUSH_STROKE_WIDTH = 1.5;
  49 | const BRUSH_MIN_PIXELS = 5;
  50 | 
  51 | function KonvaPlotter({ chartId, imageCount, dataPointCount }) {
  52 |   const {
  53 |     plotterPoints: fetchedPoints,
  54 |     isLoading,
  55 |     loadError,
  56 |   } = usePlotterData();
  57 | 
  58 |   const syntheticPoints = useMemo(() => {
  59 |     return generateSyntheticPoints(
  60 |       Math.max(
  61 |         DATA_POINT_LIMITS.min,
  62 |         Math.min(dataPointCount, DATA_POINT_LIMITS.max),
  63 |       ),
  64 |     );
  65 |   }, [dataPointCount]);
  66 | 
  67 |   const plotterPoints = syntheticPoints || fetchedPoints;
  68 | 
  69 |   if (!syntheticPoints && isLoading)
  70 |     return <div className="plotter-loading">Loading data…</div>;
  71 |   if (!syntheticPoints && loadError)
  72 |     return <div className="plotter-error">Error: {loadError}</div>;
  73 | 
  74 |   return (
  75 |     <KonvaCanvas
  76 |       chartId={chartId}
  77 |       plotterPoints={plotterPoints}
  78 |       imageCount={imageCount}
  79 |     />
  80 |   );
  81 | }
  82 | 
  83 | function KonvaCanvas({ chartId, plotterPoints, imageCount }) {
  84 |   /* Hot-path viewport state stored in refs — mutations never trigger React
  85 |      reconciliation. A RAF-throttled forceUpdate flushes the view at ≤60 fps. */
  86 |   const savedViewportRef = useRef(getChartViewport(chartId) ?? {});
  87 | 
  88 |   const initialScale = Math.max(savedViewportRef.current.scale ?? 1, ZOOM_MIN);
  89 | 
  90 |   const scaleRef = useRef(initialScale);
  91 | 
  92 |   const offsetRef = useRef(
  93 |     initialScale <= MIN_ZOOM_SCALE
  94 |       ? { x: 0, y: 0 }
  95 |       : {
  96 |           x: savedViewportRef.current.translateX ?? 0,
  97 |           y: savedViewportRef.current.translateY ?? 0,
  98 |         },
  99 |   );
 100 | 
 101 |   const rafPendingRef = useRef(false);
 102 |   const [, forceUpdate] = useState(0);
 103 |   const rafIdRef = useRef(null);
 104 |   const [hoveredPoint, setHoveredPoint] = useState(null);
 105 |   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
 106 |   const [isDragging, setIsDragging] = useState(false);
 107 |   const [brushRect, setBrushRect] = useState(null);
 108 | 
 109 |   const stageRef = useRef(null);
 110 |   const brushStartRef = useRef(null);
 111 |   const dragRef = useRef({
 112 |     dragging: false,
 113 |     startX: 0,
 114 |     startY: 0,
 115 |     startOffset: { x: 0, y: 0 },
 116 |   });
 117 | 
 118 |   const persistViewport = useCallback(() => {
 119 |     if (!chartId) return;
 120 |     if (scaleRef.current == null || !offsetRef.current) return;
 121 | 
 122 |     updateChartViewport(chartId, {
 123 |       scale: scaleRef.current,
 124 |       translateX: offsetRef.current.x,
 125 |       translateY: offsetRef.current.y,
 126 |     });
 127 |   }, [chartId]);
 128 | 
 129 |   /* Schedule a single React flush per animation frame. */
 130 |   const scheduleUpdate = useCallback(() => {
 131 |     if (rafPendingRef.current) return;
 132 | 
 133 |     rafPendingRef.current = true;
 134 | 
 135 |     rafIdRef.current = requestAnimationFrame(() => {
 136 |       rafPendingRef.current = false;
 137 |       rafIdRef.current = null;
 138 |       forceUpdate((n) => n + 1);
 139 |     });
 140 |   }, []);
 141 | 
 142 |   const { interactionMode, setInteractionMode, isZoomMode, isPanMode } =
 143 |     useInteractionMode();
 144 | 
 145 |   const innerWidth =
 146 |     PLOT_DIMENSIONS.width - PLOT_MARGIN.left - PLOT_MARGIN.right;
 147 |   const innerHeight =
 148 |     PLOT_DIMENSIONS.height - PLOT_MARGIN.top - PLOT_MARGIN.bottom;
 149 | 
 150 |   const contentScale = scaleRef.current ?? 1;
 151 |   const contentOffset = offsetRef.current ?? { x: 0, y: 0 };
 152 | 
 153 |   const { xScale, yScale, xExtent, yExtent } = buildScales(
 154 |     plotterPoints,
 155 |     innerWidth,
 156 |     innerHeight,
 157 |   );
 158 | 
 159 |   /* Domain-based visible region — shrinks as zoom increases, matching D3. */
 160 |   const visibleDomain = computeVisibleDomain(
 161 |     xExtent,
 162 |     yExtent,
 163 |     contentOffset,
 164 |     contentScale,
 165 |     innerWidth,
 166 |     innerHeight,
 167 |   );
 168 | 
 169 |   /* Dynamic scales recomputed from the visible domain — no matrix transform. */
 170 |   const dynamicXScale = buildLinearScale(
 171 |     visibleDomain.xMin,
 172 |     visibleDomain.xMax,
 173 |     0,
 174 |     innerWidth,
 175 |   );
 176 |   const dynamicYScale = buildLinearScale(
 177 |     visibleDomain.yMin,
 178 |     visibleDomain.yMax,
 179 |     innerHeight,
 180 |     0,
 181 |   );
 182 | 
 183 |   /* Cancel in-progress brush when switching to pan mode. */
 184 |   useEffect(() => {
 185 |     if (isPanMode) {
 186 |       brushStartRef.current = null;
 187 |       // eslint-disable-next-line react-hooks/set-state-in-effect
 188 |       setBrushRect(null);
 189 |     }
 190 |   }, [isPanMode]);
 191 | 
 192 |   useEffect(() => {
 193 |     return () => {
 194 |       /**
 195 |        * Keep only lightweight interaction state.
 196 |        * This allows restoring zoom/pan when chart remounts.
 197 |        */
 198 |       if (chartId && scaleRef.current != null && offsetRef.current) {
 199 |         updateChartViewport(chartId, {
 200 |           scale: scaleRef.current,
```

### Chunk 2/6

```jsx
 201 |           translateX: offsetRef.current.x,
 202 |           translateY: offsetRef.current.y,
 203 |         });
 204 |       }
 205 | 
 206 |       /**
 207 |        * Release temporary runtime state.
 208 |        */
 209 |       if (rafIdRef.current) {
 210 |         cancelAnimationFrame(rafIdRef.current);
 211 |         rafIdRef.current = null;
 212 |       }
 213 | 
 214 |       rafPendingRef.current = false;
 215 | 
 216 |       brushStartRef.current = null;
 217 | 
 218 |       dragRef.current = {
 219 |         dragging: false,
 220 |         startX: 0,
 221 |         startY: 0,
 222 |         startOffset: { x: 0, y: 0 },
 223 |       };
 224 | 
 225 |       stageRef.current = null;
 226 | 
 227 |       /**
 228 |        * Do NOT remove chartViewportStore entry here.
 229 |        * App.jsx will prune it only when the chart becomes disabled / removed.
 230 |        */
 231 |     };
 232 |   }, [chartId]);
 233 | 
 234 |   /* Base cell size computed once from the full dataset. */
 235 |   const adaptiveCellSizeBase = useMemo(
 236 |     () => computeAdaptiveCellSize(plotterPoints, xScale, yScale),
 237 |     [plotterPoints, xScale, yScale],
 238 |   );
 239 | 
 240 |   /* Zoom-scaled cell size — grows as domain shrinks. */
 241 |   const adaptiveCellSizeForRender = adaptiveCellSizeBase * contentScale;
 242 | 
 243 |   /* Viewport culling in screen-space. */
 244 |   const visiblePointsForRender = useMemo(() => {
 245 |     const xScreenFn = (val) => xScale(val) * contentScale + contentOffset.x;
 246 |     const yScreenFn = (val) => yScale(val) * contentScale + contentOffset.y;
 247 |     return filterVisiblePoints(
 248 |       plotterPoints,
 249 |       xScreenFn,
 250 |       yScreenFn,
 251 |       innerWidth,
 252 |       innerHeight,
 253 |       adaptiveCellSizeBase * contentScale,
 254 |     );
 255 |     // eslint-disable-next-line react-hooks/exhaustive-deps
 256 |   }, [
 257 |     plotterPoints,
 258 |     xScale,
 259 |     yScale,
 260 |     contentScale,
 261 |     contentOffset.x,
 262 |     contentOffset.y,
 263 |     innerWidth,
 264 |     innerHeight,
 265 |     adaptiveCellSizeBase,
 266 |   ]);
 267 | 
 268 |   const effectiveImageCountForRender = computeEffectiveImageCount(
 269 |     adaptiveCellSizeForRender,
 270 |     imageCount,
 271 |   );
 272 | 
 273 |   /* ── Wheel zoom — mutates refs, schedules RAF flush ── */
 274 |   const handleWheel = useCallback(
 275 |     (event) => {
 276 |       event.evt.preventDefault();
 277 |       const stage = event.target.getStage();
 278 |       const pointerPosition = stage.getPointerPosition();
 279 | 
 280 |       if (!isPointerInsidePlotArea(pointerPosition, innerWidth, innerHeight))
 281 |         return;
 282 | 
 283 |       const nativeEvent = event.evt;
 284 |       const isPinchGesture = nativeEvent.ctrlKey;
 285 |       const scaleDelta = computeWheelScaleDelta(
 286 |         nativeEvent.deltaY,
 287 |         isPinchGesture,
 288 |       );
 289 |       const currentScale = scaleRef.current;
 290 |       const currentOffset = offsetRef.current;
 291 |       const isZoomOut = scaleDelta < 1;
 292 | 
 293 |       if (isZoomOut && currentScale <= MIN_ZOOM_SCALE) {
 294 |         return;
 295 |       }
 296 | 
 297 |       const newScale = clampScale(currentScale * scaleDelta);
 298 | 
 299 |       if (newScale === currentScale) {
 300 |         return;
 301 |       }
 302 | 
 303 |       logChartInteractionEvent({
 304 |         interactionType: scaleDelta > 1 ? "ZOOM_IN" : "ZOOM_OUT",
 305 |         visualizationLibrary: "Konva",
 306 |         interactionSource: "wheel",
 307 |       });
 308 | 
 309 |       const mouseRelX = pointerPosition.x - PLOT_MARGIN.left - currentOffset.x;
 310 |       const mouseRelY = pointerPosition.y - PLOT_MARGIN.top - currentOffset.y;
 311 | 
 312 |       const rawOffsetX =
 313 |         currentOffset.x - mouseRelX * (newScale / currentScale - 1);
 314 |       const rawOffsetY =
 315 |         currentOffset.y - mouseRelY * (newScale / currentScale - 1);
 316 |       const clampedOffset = clampContentOffset(
 317 |         rawOffsetX,
 318 |         rawOffsetY,
 319 |         newScale,
 320 |         innerWidth,
 321 |         innerHeight,
 322 |       );
 323 | 
 324 |       scaleRef.current = newScale;
 325 |       offsetRef.current = clampedOffset;
 326 |       persistViewport();
 327 |       scheduleUpdate();
 328 |     },
 329 |     [innerWidth, innerHeight, persistViewport, scheduleUpdate],
 330 |   );
 331 | 
 332 |   /* ── Pan drag — mutates refs, schedules RAF flush ── */
 333 |   const handleStageMouseDown = useCallback(
 334 |     (event) => {
 335 |       const stage = event.target.getStage();
 336 |       const pointer = stage.getPointerPosition();
 337 |       if (!isPointerInsidePlotArea(pointer, innerWidth, innerHeight)) return;
 338 | 
 339 |       if (isPanMode) {
 340 |         if (scaleRef.current <= MIN_ZOOM_SCALE) return;
 341 |         logChartInteractionEvent({
 342 |           interactionType: "PAN",
 343 |           visualizationLibrary: "Konva",
 344 |           interactionSource: "drag",
 345 |         });
 346 |         setIsDragging(true);
 347 |         dragRef.current = {
 348 |           dragging: true,
 349 |           startX: pointer.x,
 350 |           startY: pointer.y,
 351 |           startOffset: { ...offsetRef.current },
 352 |         };
 353 |       } else if (isZoomMode) {
 354 |         const plotX = clampValue(pointer.x - PLOT_MARGIN.left, 0, innerWidth);
 355 |         const plotY = clampValue(pointer.y - PLOT_MARGIN.top, 0, innerHeight);
 356 |         brushStartRef.current = { x: plotX, y: plotY };
 357 |         setBrushRect({ x: plotX, y: plotY, width: 0, height: 0 });
 358 |       }
 359 |     },
 360 |     [isPanMode, isZoomMode, innerWidth, innerHeight],
 361 |   );
 362 | 
 363 |   const handleStageMouseMove = useCallback(
 364 |     (event) => {
 365 |       const stage = event.target.getStage();
 366 |       const pointer = stage.getPointerPosition();
 367 |       if (!pointer) return;
 368 | 
 369 |       if (dragRef.current.dragging) {
 370 |         if (scaleRef.current <= MIN_ZOOM_SCALE) return;
 371 |         const dx = pointer.x - dragRef.current.startX;
 372 |         const dy = pointer.y - dragRef.current.startY;
 373 |         const clamped = clampContentOffset(
 374 |           dragRef.current.startOffset.x + dx,
 375 |           dragRef.current.startOffset.y + dy,
 376 |           scaleRef.current,
 377 |           innerWidth,
 378 |           innerHeight,
 379 |         );
 380 |         offsetRef.current = clamped;
 381 |         persistViewport();
 382 |         scheduleUpdate();
 383 |         return;
 384 |       }
 385 | 
 386 |       if (brushStartRef.current) {
 387 |         const plotX = clampValue(pointer.x - PLOT_MARGIN.left, 0, innerWidth);
 388 |         const plotY = clampValue(pointer.y - PLOT_MARGIN.top, 0, innerHeight);
 389 |         const startPoint = brushStartRef.current;
 390 |         setBrushRect({
 391 |           x: Math.min(startPoint.x, plotX),
 392 |           y: Math.min(startPoint.y, plotY),
 393 |           width: Math.abs(plotX - startPoint.x),
 394 |           height: Math.abs(plotY - startPoint.y),
 395 |         });
 396 |       }
 397 |     },
 398 |     [innerWidth, innerHeight, persistViewport, scheduleUpdate],
 399 |   );
 400 | 
```

### Chunk 3/6

```jsx
 401 |   const handleStageMouseUp = useCallback(
 402 |     (localBrushRect) => {
 403 |       if (dragRef.current.dragging) {
 404 |         setIsDragging(false);
 405 |         dragRef.current.dragging = false;
 406 |         return;
 407 |       }
 408 | 
 409 |       if (brushStartRef.current && localBrushRect) {
 410 |         const isTooSmall =
 411 |           localBrushRect.width < BRUSH_MIN_PIXELS ||
 412 |           localBrushRect.height < BRUSH_MIN_PIXELS;
 413 | 
 414 |         if (!isTooSmall) {
 415 |           logChartInteractionEvent({
 416 |             interactionType: "ZOOM_IN",
 417 |             visualizationLibrary: "Konva",
 418 |             interactionSource: "brush",
 419 |           });
 420 |           const zoomResult = convertBrushToZoom(
 421 |             localBrushRect,
 422 |             offsetRef.current,
 423 |             scaleRef.current,
 424 |             innerWidth,
 425 |             innerHeight,
 426 |           );
 427 |           scaleRef.current = zoomResult.scale;
 428 |           offsetRef.current = zoomResult.offset;
 429 |           persistViewport();
 430 |           scheduleUpdate();
 431 |         }
 432 |       }
 433 | 
 434 |       brushStartRef.current = null;
 435 |       setBrushRect(null);
 436 |     },
 437 |     [innerWidth, innerHeight, persistViewport, scheduleUpdate],
 438 |   );
 439 | 
 440 |   /* ── Button controls — mutate refs + scheduleUpdate ── */
 441 |   const handleZoomIn = useCallback(() => {
 442 |     logChartInteractionEvent({
 443 |       interactionType: "ZOOM_IN",
 444 |       visualizationLibrary: "Konva",
 445 |       interactionSource: "button",
 446 |     });
 447 |     const currentScale = scaleRef.current;
 448 |     const currentOffset = offsetRef.current;
 449 |     const centerX = innerWidth / 2;
 450 |     const centerY = innerHeight / 2;
 451 |     const newScale = clampScale(currentScale * ZOOM_STEP);
 452 |     const rawOffsetX =
 453 |       currentOffset.x - centerX * (newScale / currentScale - 1);
 454 |     const rawOffsetY =
 455 |       currentOffset.y - centerY * (newScale / currentScale - 1);
 456 |     scaleRef.current = newScale;
 457 |     offsetRef.current = clampContentOffset(
 458 |       rawOffsetX,
 459 |       rawOffsetY,
 460 |       newScale,
 461 |       innerWidth,
 462 |       innerHeight,
 463 |     );
 464 |     persistViewport();
 465 |     scheduleUpdate();
 466 |   }, [innerWidth, innerHeight, persistViewport, scheduleUpdate]);
 467 | 
 468 |   const handleZoomOut = useCallback(() => {
 469 |     const currentScale = scaleRef.current;
 470 | 
 471 |     if (currentScale <= MIN_ZOOM_SCALE) {
 472 |       return;
 473 |     }
 474 | 
 475 |     logChartInteractionEvent({
 476 |       interactionType: "ZOOM_OUT",
 477 |       visualizationLibrary: "Konva",
 478 |       interactionSource: "button",
 479 |     });
 480 | 
 481 |     const currentOffset = offsetRef.current;
 482 | 
 483 |     const centerX = innerWidth / 2;
 484 |     const centerY = innerHeight / 2;
 485 |     const newScale = clampScale(currentScale / ZOOM_STEP);
 486 |     const rawOffsetX =
 487 |       currentOffset.x - centerX * (newScale / currentScale - 1);
 488 |     const rawOffsetY =
 489 |       currentOffset.y - centerY * (newScale / currentScale - 1);
 490 |     scaleRef.current = newScale;
 491 |     offsetRef.current = clampContentOffset(
 492 |       rawOffsetX,
 493 |       rawOffsetY,
 494 |       newScale,
 495 |       innerWidth,
 496 |       innerHeight,
 497 |     );
 498 |     persistViewport();
 499 |     scheduleUpdate();
 500 |   }, [innerWidth, innerHeight, persistViewport, scheduleUpdate]);
 501 | 
 502 |   const handleReset = useCallback(() => {
 503 |     logChartInteractionEvent({
 504 |       interactionType: "RESET",
 505 |       visualizationLibrary: "Konva",
 506 |       interactionSource: "button",
 507 |     });
 508 |     scaleRef.current = 1;
 509 |     offsetRef.current = { x: 0, y: 0 };
 510 |     persistViewport();
 511 |     scheduleUpdate();
 512 |   }, [persistViewport, scheduleUpdate]);
 513 | 
 514 |   const handleDoubleClick = useCallback(() => {
 515 |     logChartInteractionEvent({
 516 |       interactionType: "RESET",
 517 |       visualizationLibrary: "Konva",
 518 |       interactionSource: "double_click",
 519 |     });
 520 |     scaleRef.current = 1;
 521 |     offsetRef.current = { x: 0, y: 0 };
 522 |     persistViewport();
 523 |     scheduleUpdate();
 524 |   }, [persistViewport, scheduleUpdate]);
 525 | 
 526 |   const stageCursor = isPanMode
 527 |     ? isDragging
 528 |       ? "grabbing"
 529 |       : "grab"
 530 |     : "crosshair";
 531 | 
 532 |   return (
 533 |     <div style={{ position: "relative" }}>
 534 |       <PlotterControls
 535 |         onZoomIn={handleZoomIn}
 536 |         onZoomOut={handleZoomOut}
 537 |         onReset={handleReset}
 538 |         zoomLevel={contentScale}
 539 |         interactionMode={interactionMode}
 540 |         onModeChange={setInteractionMode}
 541 |       />
 542 |       <Stage
 543 |         ref={stageRef}
 544 |         width={PLOT_DIMENSIONS.width}
 545 |         height={PLOT_DIMENSIONS.height}
 546 |         onWheel={handleWheel}
 547 |         onDblClick={handleDoubleClick}
 548 |         onDblTap={handleDoubleClick}
 549 |         onMouseDown={handleStageMouseDown}
 550 |         onMouseMove={handleStageMouseMove}
 551 |         onMouseUp={() => handleStageMouseUp(brushRect)}
 552 |         onMouseLeave={() => handleStageMouseUp(brushRect)}
 553 |         style={{ cursor: stageCursor }}
 554 |       >
 555 |         {/* Static axis layer — grid and labels derived from current visible domain */}
 556 |         <Layer listening={false}>
 557 |           <PlotBackground innerWidth={innerWidth} innerHeight={innerHeight} />
 558 |           <AxisGrid
 559 |             visibleDomain={visibleDomain}
 560 |             innerWidth={innerWidth}
 561 |             innerHeight={innerHeight}
 562 |           />
 563 |           <AxisLabels
 564 |             visibleDomain={visibleDomain}
 565 |             innerWidth={innerWidth}
 566 |             innerHeight={innerHeight}
 567 |           />
 568 |           <AxisBorder innerWidth={innerWidth} innerHeight={innerHeight} />
 569 |         </Layer>
 570 | 
 571 |         {/* Clipped content layer — images positioned from domain-derived scales */}
 572 |         <Layer>
 573 |           <ClippedContentGroup
 574 |             innerWidth={innerWidth}
 575 |             innerHeight={innerHeight}
 576 |           >
 577 |             {visiblePointsForRender.map((point) => (
 578 |               <ImagePointGroup
 579 |                 key={point.id}
 580 |                 point={point}
 581 |                 xScale={dynamicXScale}
 582 |                 yScale={dynamicYScale}
 583 |                 imageCount={effectiveImageCountForRender}
 584 |                 cellSize={adaptiveCellSizeForRender}
 585 |                 onHover={setHoveredPoint}
 586 |                 onCursorMove={setCursorPosition}
 587 |               />
 588 |             ))}
 589 |           </ClippedContentGroup>
 590 |         </Layer>
 591 | 
 592 |         {/* Brush overlay layer — only rendered in zoom mode */}
 593 |         {isZoomMode && (
 594 |           <Layer listening={false}>
 595 |             <BrushSelectionOverlay brushRect={brushRect} />
 596 |           </Layer>
 597 |         )}
 598 |       </Stage>
 599 | 
 600 |       {hoveredPoint && (
```

### Chunk 4/6

```jsx
 601 |         <PointTooltip
 602 |           hoveredPoint={hoveredPoint}
 603 |           cursorPosition={cursorPosition}
 604 |         />
 605 |       )}
 606 |     </div>
 607 |   );
 608 | }
 609 | 
 610 | function BrushSelectionOverlay({ brushRect }) {
 611 |   return (
 612 |     <Group listening={false}>
 613 |       {/* Semi-transparent selection rectangle */}
 614 |       {brushRect && brushRect.width > 0 && brushRect.height > 0 && (
 615 |         <Rect
 616 |           x={PLOT_MARGIN.left + brushRect.x}
 617 |           y={PLOT_MARGIN.top + brushRect.y}
 618 |           width={brushRect.width}
 619 |           height={brushRect.height}
 620 |           fill={BRUSH_FILL}
 621 |           stroke={BRUSH_STROKE}
 622 |           strokeWidth={BRUSH_STROKE_WIDTH}
 623 |           listening={false}
 624 |         />
 625 |       )}
 626 |     </Group>
 627 |   );
 628 | }
 629 | 
 630 | function ClippedContentGroup({ innerWidth, innerHeight, children }) {
 631 |   const plotLeft = PLOT_MARGIN.left;
 632 |   const plotTop = PLOT_MARGIN.top;
 633 | 
 634 |   const clipFunction = (ctx) => {
 635 |     ctx.rect(plotLeft, plotTop, innerWidth, innerHeight);
 636 |   };
 637 | 
 638 |   return (
 639 |     <Group clipFunc={clipFunction}>
 640 |       <Group x={plotLeft} y={plotTop} scaleX={1} scaleY={1}>
 641 |         {children}
 642 |       </Group>
 643 |     </Group>
 644 |   );
 645 | }
 646 | 
 647 | function PointTooltip({ hoveredPoint, cursorPosition }) {
 648 |   return (
 649 |     <div
 650 |       className="plotter-tooltip"
 651 |       style={{
 652 |         display: "block",
 653 |         position: "absolute",
 654 |         left: cursorPosition.x + 15,
 655 |         top: cursorPosition.y - 10,
 656 |         pointerEvents: "none",
 657 |       }}
 658 |     >
 659 |       <div className="tooltip-label">{hoveredPoint.label}</div>
 660 |       <div className="tooltip-meta">
 661 |         <span>Interval: {hoveredPoint.meta.interval}s</span>
 662 |         <span>Angle: {hoveredPoint.meta.angle}°</span>
 663 |         <span>Quality: {hoveredPoint.meta.quality}</span>
 664 |       </div>
 665 |     </div>
 666 |   );
 667 | }
 668 | 
 669 | function PlotBackground({ innerWidth, innerHeight }) {
 670 |   return (
 671 |     <Rect
 672 |       x={PLOT_MARGIN.left}
 673 |       y={PLOT_MARGIN.top}
 674 |       width={innerWidth}
 675 |       height={innerHeight}
 676 |       fill="#16213e"
 677 |     />
 678 |   );
 679 | }
 680 | 
 681 | function AxisBorder({ innerWidth, innerHeight }) {
 682 |   return (
 683 |     <Rect
 684 |       x={PLOT_MARGIN.left}
 685 |       y={PLOT_MARGIN.top}
 686 |       width={innerWidth}
 687 |       height={innerHeight}
 688 |       stroke={AXIS_LINE_COLOR}
 689 |       strokeWidth={1}
 690 |       listening={false}
 691 |     />
 692 |   );
 693 | }
 694 | 
 695 | function AxisGrid({ visibleDomain, innerWidth, innerHeight }) {
 696 |   const xTicks = buildTicks(
 697 |     visibleDomain.xMin,
 698 |     visibleDomain.xMax,
 699 |     AXIS_TICK_COUNT,
 700 |   );
 701 |   const yTicks = buildTicks(
 702 |     visibleDomain.yMin,
 703 |     visibleDomain.yMax,
 704 |     AXIS_TICK_COUNT,
 705 |   );
 706 | 
 707 |   const xScreenScale = buildLinearScale(
 708 |     visibleDomain.xMin,
 709 |     visibleDomain.xMax,
 710 |     0,
 711 |     innerWidth,
 712 |   );
 713 |   const yScreenScale = buildLinearScale(
 714 |     visibleDomain.yMin,
 715 |     visibleDomain.yMax,
 716 |     innerHeight,
 717 |     0,
 718 |   );
 719 | 
 720 |   const gridLines = [];
 721 | 
 722 |   xTicks.forEach((value, index) => {
 723 |     const xPos = PLOT_MARGIN.left + xScreenScale(value);
 724 |     if (xPos < PLOT_MARGIN.left || xPos > PLOT_MARGIN.left + innerWidth) return;
 725 |     gridLines.push(
 726 |       <Line
 727 |         key={`xgrid-${index}`}
 728 |         points={[xPos, PLOT_MARGIN.top, xPos, PLOT_MARGIN.top + innerHeight]}
 729 |         stroke={GRID_COLOR}
 730 |         strokeWidth={1}
 731 |         dash={[4, 4]}
 732 |         listening={false}
 733 |       />,
 734 |     );
 735 |   });
 736 | 
 737 |   yTicks.forEach((value, index) => {
 738 |     const yPos = PLOT_MARGIN.top + yScreenScale(value);
 739 |     if (yPos < PLOT_MARGIN.top || yPos > PLOT_MARGIN.top + innerHeight) return;
 740 |     gridLines.push(
 741 |       <Line
 742 |         key={`ygrid-${index}`}
 743 |         points={[PLOT_MARGIN.left, yPos, PLOT_MARGIN.left + innerWidth, yPos]}
 744 |         stroke={GRID_COLOR}
 745 |         strokeWidth={1}
 746 |         dash={[4, 4]}
 747 |         listening={false}
 748 |       />,
 749 |     );
 750 |   });
 751 | 
 752 |   return <>{gridLines}</>;
 753 | }
 754 | 
 755 | function AxisLabels({ visibleDomain, innerWidth, innerHeight }) {
 756 |   const xTicks = buildTicks(
 757 |     visibleDomain.xMin,
 758 |     visibleDomain.xMax,
 759 |     AXIS_TICK_COUNT,
 760 |   );
 761 |   const yTicks = buildTicks(
 762 |     visibleDomain.yMin,
 763 |     visibleDomain.yMax,
 764 |     AXIS_TICK_COUNT,
 765 |   );
 766 | 
 767 |   const xScreenScale = buildLinearScale(
 768 |     visibleDomain.xMin,
 769 |     visibleDomain.xMax,
 770 |     0,
 771 |     innerWidth,
 772 |   );
 773 |   const yScreenScale = buildLinearScale(
 774 |     visibleDomain.yMin,
 775 |     visibleDomain.yMax,
 776 |     innerHeight,
 777 |     0,
 778 |   );
 779 | 
 780 |   const tickLabels = [];
 781 | 
 782 |   xTicks.forEach((value, index) => {
 783 |     const xPos = PLOT_MARGIN.left + xScreenScale(value);
 784 |     if (xPos < PLOT_MARGIN.left - 5 || xPos > PLOT_MARGIN.left + innerWidth + 5)
 785 |       return;
 786 |     tickLabels.push(
 787 |       <Text
 788 |         key={`xlabel-${index}`}
 789 |         text={formatTickLabel(value)}
 790 |         x={xPos - 14}
 791 |         y={PLOT_MARGIN.top + innerHeight + 6}
 792 |         fill={TICK_LABEL_COLOR}
 793 |         fontSize={TICK_LABEL_FONT_SIZE}
 794 |         listening={false}
 795 |       />,
 796 |     );
 797 |   });
 798 | 
 799 |   yTicks.forEach((value, index) => {
 800 |     const yPos = PLOT_MARGIN.top + yScreenScale(value);
```

### Chunk 5/6

```jsx
 801 |     if (yPos < PLOT_MARGIN.top - 5 || yPos > PLOT_MARGIN.top + innerHeight + 5)
 802 |       return;
 803 |     tickLabels.push(
 804 |       <Text
 805 |         key={`ylabel-${index}`}
 806 |         text={formatTickLabel(value)}
 807 |         x={PLOT_MARGIN.left - 36}
 808 |         y={yPos - 6}
 809 |         fill={TICK_LABEL_COLOR}
 810 |         fontSize={TICK_LABEL_FONT_SIZE}
 811 |         width={32}
 812 |         align="right"
 813 |         listening={false}
 814 |       />,
 815 |     );
 816 |   });
 817 | 
 818 |   return <>{tickLabels}</>;
 819 | }
 820 | 
 821 | function ImagePointGroup({
 822 |   point,
 823 |   xScale,
 824 |   yScale,
 825 |   imageCount,
 826 |   cellSize,
 827 |   onHover,
 828 |   onCursorMove,
 829 | }) {
 830 |   const [imgObj, setImgObj] = useState(null);
 831 | 
 832 |   useEffect(() => {
 833 |     let isMounted = true;
 834 |     const img = new Image();
 835 | 
 836 |     img.onload = () => {
 837 |       if (isMounted) {
 838 |         setImgObj(img);
 839 |       }
 840 |     };
 841 | 
 842 |     img.onerror = () => {
 843 |       if (isMounted) {
 844 |         setImgObj(null);
 845 |       }
 846 |     };
 847 | 
 848 |     img.src = point.image;
 849 | 
 850 |     return () => {
 851 |       isMounted = false;
 852 | 
 853 |       img.onload = null;
 854 |       img.onerror = null;
 855 |       img.src = "";
 856 | 
 857 |       setImgObj(null);
 858 |     };
 859 |   }, [point.image]);
 860 | 
 861 |   const centerX = xScale(point.x);
 862 |   const centerY = yScale(point.y);
 863 |   const resolvedCellSize = cellSize ?? CELL_SIZE;
 864 |   const positions = computeImagePositions(
 865 |     centerX,
 866 |     centerY,
 867 |     resolvedCellSize,
 868 |     resolvedCellSize,
 869 |     imageCount,
 870 |   );
 871 | 
 872 |   if (!imgObj) return null;
 873 | 
 874 |   return (
 875 |     <>
 876 |       {positions.map((position, index) => (
 877 |         <KonvaImage
 878 |           key={`${point.id}-${index}`}
 879 |           image={imgObj}
 880 |           x={position.x}
 881 |           y={position.y}
 882 |           width={position.width}
 883 |           height={position.height}
 884 |           point={point}
 885 |           onMouseEnter={(event) => {
 886 |             const stage = event.target.getStage();
 887 |             const pointerPosition = stage.getPointerPosition();
 888 |             onHover(point);
 889 |             onCursorMove({ x: pointerPosition.x, y: pointerPosition.y });
 890 |           }}
 891 |           onMouseLeave={() => onHover(null)}
 892 |         />
 893 |       ))}
 894 |     </>
 895 |   );
 896 | }
 897 | 
 898 | function convertBrushToZoom(
 899 |   brushPixelRect,
 900 |   currentOffset,
 901 |   currentScale,
 902 |   plotInnerWidth,
 903 |   plotInnerHeight,
 904 | ) {
 905 |   const contentX0 = (brushPixelRect.x - currentOffset.x) / currentScale;
 906 |   const contentY0 = (brushPixelRect.y - currentOffset.y) / currentScale;
 907 |   const contentBrushWidth = brushPixelRect.width / currentScale;
 908 |   const contentBrushHeight = brushPixelRect.height / currentScale;
 909 | 
 910 |   const fitScaleX = plotInnerWidth / contentBrushWidth;
 911 |   const fitScaleY = plotInnerHeight / contentBrushHeight;
 912 |   const newScale = clampScale(Math.min(fitScaleX, fitScaleY));
 913 | 
 914 |   const rawOffsetX = -contentX0 * newScale;
 915 |   const rawOffsetY = -contentY0 * newScale;
 916 | 
 917 |   const clampedOffset = clampContentOffset(
 918 |     rawOffsetX,
 919 |     rawOffsetY,
 920 |     newScale,
 921 |     plotInnerWidth,
 922 |     plotInnerHeight,
 923 |   );
 924 | 
 925 |   return { scale: newScale, offset: clampedOffset };
 926 | }
 927 | 
 928 | function clampValue(value, min, max) {
 929 |   return Math.max(min, Math.min(value, max));
 930 | }
 931 | 
 932 | /* ─── Pure utility functions ──────────────────────────────────────────── */
 933 | 
 934 | function isPointerInsidePlotArea(
 935 |   pointerPosition,
 936 |   plotInnerWidth,
 937 |   plotInnerHeight,
 938 | ) {
 939 |   return (
 940 |     pointerPosition.x > PLOT_MARGIN.left &&
 941 |     pointerPosition.x < PLOT_MARGIN.left + plotInnerWidth &&
 942 |     pointerPosition.y > PLOT_MARGIN.top &&
 943 |     pointerPosition.y < PLOT_MARGIN.top + plotInnerHeight
 944 |   );
 945 | }
 946 | 
 947 | function clampScale(rawScale) {
 948 |   return Math.max(ZOOM_MIN, Math.min(rawScale, ZOOM_MAX));
 949 | }
 950 | 
 951 | function computeWheelScaleDelta(deltaY, isPinchGesture) {
 952 |   if (isPinchGesture) {
 953 |     return Math.exp(-deltaY * PINCH_ZOOM_SENSITIVITY);
 954 |   }
 955 |   return deltaY > 0 ? 1 / ZOOM_STEP : ZOOM_STEP;
 956 | }
 957 | 
 958 | function clampContentOffset(
 959 |   rawX,
 960 |   rawY,
 961 |   scale,
 962 |   plotInnerWidth,
 963 |   plotInnerHeight,
 964 | ) {
 965 |   const scaledWidth = plotInnerWidth * scale;
 966 |   const scaledHeight = plotInnerHeight * scale;
 967 | 
 968 |   let clampedX;
 969 |   let clampedY;
 970 | 
 971 |   if (scaledWidth <= plotInnerWidth) {
 972 |     clampedX = (plotInnerWidth - scaledWidth) / 2;
 973 |   } else {
 974 |     const minX = plotInnerWidth - scaledWidth;
 975 |     const maxX = 0;
 976 |     clampedX = Math.max(minX, Math.min(rawX, maxX));
 977 |   }
 978 | 
 979 |   if (scaledHeight <= plotInnerHeight) {
 980 |     clampedY = (plotInnerHeight - scaledHeight) / 2;
 981 |   } else {
 982 |     const minY = plotInnerHeight - scaledHeight;
 983 |     const maxY = 0;
 984 |     clampedY = Math.max(minY, Math.min(rawY, maxY));
 985 |   }
 986 | 
 987 |   return { x: clampedX, y: clampedY };
 988 | }
 989 | 
 990 | function buildScales(plotterPoints, plotInnerWidth, plotInnerHeight) {
 991 |   const xValues = plotterPoints.map((p) => p.x);
 992 |   const yValues = plotterPoints.map((p) => p.y);
 993 | 
 994 |   const xMin = Math.min(...xValues);
 995 |   const xMax = Math.max(...xValues);
 996 |   const yMin = Math.min(...yValues);
 997 |   const yMax = Math.max(...yValues);
 998 | 
 999 |   const xPadding =
1000 |     (xMax - xMin) * EXTENT_PADDING_RATIO || EXTENT_FALLBACK_PADDING;
```

### Chunk 6/6

```jsx
1001 |   const yPadding =
1002 |     (yMax - yMin) * EXTENT_PADDING_RATIO || EXTENT_FALLBACK_PADDING;
1003 | 
1004 |   const xExtent = [xMin - xPadding, xMax + xPadding];
1005 |   const yExtent = [yMin - yPadding, yMax + yPadding];
1006 | 
1007 |   const xScale = buildLinearScale(xExtent[0], xExtent[1], 0, plotInnerWidth);
1008 |   const yScale = buildLinearScale(yExtent[0], yExtent[1], plotInnerHeight, 0);
1009 | 
1010 |   return { xScale, yScale, xExtent, yExtent };
1011 | }
1012 | 
1013 | function computeVisibleDomain(
1014 |   xExtent,
1015 |   yExtent,
1016 |   contentOffset,
1017 |   scale,
1018 |   plotInnerWidth,
1019 |   plotInnerHeight,
1020 | ) {
1021 |   const domainWidth = xExtent[1] - xExtent[0];
1022 |   const domainHeight = yExtent[1] - yExtent[0];
1023 | 
1024 |   const xMin =
1025 |     xExtent[0] - (contentOffset.x / scale / plotInnerWidth) * domainWidth;
1026 |   const xMax = xMin + domainWidth / scale;
1027 | 
1028 |   const yMax =
1029 |     yExtent[1] + (contentOffset.y / scale / plotInnerHeight) * domainHeight;
1030 |   const yMin = yMax - domainHeight / scale;
1031 | 
1032 |   return { xMin, xMax, yMin, yMax };
1033 | }
1034 | 
1035 | function buildLinearScale(domainMin, domainMax, rangeMin, rangeMax) {
1036 |   return (value) => {
1037 |     const ratio = (value - domainMin) / (domainMax - domainMin);
1038 |     return rangeMin + ratio * (rangeMax - rangeMin);
1039 |   };
1040 | }
1041 | 
1042 | function buildTicks(min, max, count) {
1043 |   const rawStep = (max - min) / count;
1044 |   const magnitude = Math.pow(10, Math.floor(Math.log10(rawStep)));
1045 |   const niceSteps = [1, 2, 2.5, 5, 10];
1046 |   const step =
1047 |     niceSteps.map((s) => s * magnitude).find((s) => s >= rawStep) ?? rawStep;
1048 | 
1049 |   const start = Math.ceil(min / step) * step;
1050 |   const ticks = [];
1051 | 
1052 |   for (let tick = start; tick <= max + step * 0.001; tick += step) {
1053 |     ticks.push(parseFloat(tick.toPrecision(10)));
1054 |   }
1055 | 
1056 |   return ticks;
1057 | }
1058 | 
1059 | function formatTickLabel(value) {
1060 |   if (Math.abs(value) >= 1000) return value.toExponential(1);
1061 |   const formattedString = value.toPrecision(4);
1062 |   return parseFloat(formattedString).toString();
1063 | }
1064 | 
1065 | export default KonvaPlotter;
1066 | 
```


---

## 📄 src\components\Navbar.jsx
**hash:** `538e52b8`

### Chunk 1/1

```jsx
   1 | import { LIBRARIES, DISABLED_LIBRARIES } from "../lib/constants";
   2 | 
   3 | function Navbar({ activeTab, setActiveTab }) {
   4 |   return (
   5 |     <div className="tab-container">
   6 |       {LIBRARIES.map((libraryName) => {
   7 |         const isDisabled = DISABLED_LIBRARIES.includes(libraryName);
   8 | 
   9 |         return (
  10 |           <button
  11 |             key={libraryName}
  12 |             className={`tab-button ${activeTab === libraryName ? "active" : ""} ${isDisabled ? "disabled" : ""}`}
  13 |             onClick={() => !isDisabled && setActiveTab(libraryName)}
  14 |             disabled={isDisabled}
  15 |             title={isDisabled ? `${libraryName} is disabled for this test` : ""}
  16 |           >
  17 |             {libraryName}
  18 |           </button>
  19 |         );
  20 |       })}
  21 |     </div>
  22 |   );
  23 | }
  24 | 
  25 | export default Navbar;
  26 | 
```


---

## 📄 src\components\PixiPlotter.jsx
**hash:** `64bbc76a`

### Chunk 1/6

```jsx
   1 | import { useRef, useEffect, useState, useCallback, useMemo } from "react";
   2 | 
   3 | import {
   4 |   Application as PixiApp,
   5 |   Container,
   6 |   Sprite,
   7 |   Graphics,
   8 |   Assets,
   9 |   Text as PixiText,
  10 | } from "pixi.js";
  11 | 
  12 | import * as d3 from "d3";
  13 | 
  14 | import { usePlotterData } from "../lib/plotterData";
  15 | import { computeImagePositions } from "../lib/gridLayout";
  16 | import {
  17 |   CELL_SIZE,
  18 |   PLOT_DIMENSIONS,
  19 |   PLOT_MARGIN,
  20 |   DATA_POINT_LIMITS,
  21 | } from "../lib/constants";
  22 | import {
  23 |   computeAdaptiveCellSize,
  24 |   filterVisiblePoints,
  25 |   computeEffectiveImageCount,
  26 | } from "../lib/densityLayout";
  27 | import {
  28 |   getChartViewport,
  29 |   updateChartViewport,
  30 | } from "../lib/chartViewportStore";
  31 | import PlotterControls from "./PlotterControls";
  32 | import { logChartInteractionEvent } from "../lib/chartInteractionLogger";
  33 | import { generateSyntheticPoints } from "../lib/syntheticDataGenerator";
  34 | import { useInteractionMode } from "../lib/interactionMode";
  35 | 
  36 | const GRID_COLOR = 0x333333;
  37 | const GRID_ALPHA = 0.45;
  38 | const AXIS_BORDER_COLOR = 0x555555;
  39 | const TICK_COLOR = "#999999";
  40 | 
  41 | const ZOOM_MIN = 1;
  42 | const MIN_ZOOM_SCALE = 1.001;
  43 | const ZOOM_MAX = 100000;
  44 | const ZOOM_STEP = 1.5;
  45 | 
  46 | /*
  47 |  * CLAMP PAN
  48 |  */
  49 | function clampPan(xOffset, yOffset, scaleFactor, width, height) {
  50 |   if (scaleFactor <= MIN_ZOOM_SCALE) {
  51 |     return { x: 0, y: 0 };
  52 |   }
  53 | 
  54 |   const scaledWidth = width * scaleFactor;
  55 |   const scaledHeight = height * scaleFactor;
  56 | 
  57 |   let minOffsetLimitX = width - scaledWidth;
  58 |   let minOffsetLimitY = height - scaledHeight;
  59 | 
  60 |   if (scaledWidth < width) {
  61 |     minOffsetLimitX = (width - scaledWidth) / 2;
  62 |   }
  63 | 
  64 |   if (scaledHeight < height) {
  65 |     minOffsetLimitY = (height - scaledHeight) / 2;
  66 |   }
  67 | 
  68 |   return {
  69 |     x: Math.min(0, Math.max(minOffsetLimitX, xOffset)),
  70 |     y: Math.min(0, Math.max(minOffsetLimitY, yOffset)),
  71 |   };
  72 | }
  73 | 
  74 | /*
  75 |  * COMPUTE VIEWPORT SCALES
  76 |  */
  77 | function computeViewportScales(
  78 |   baseScaleX,
  79 |   baseScaleY,
  80 |   scaleFactor,
  81 |   xOffset,
  82 |   yOffset,
  83 |   width,
  84 |   height,
  85 | ) {
  86 |   const leftPixel = -xOffset / scaleFactor;
  87 |   const rightPixel = (width - xOffset) / scaleFactor;
  88 | 
  89 |   const topPixel = -yOffset / scaleFactor;
  90 |   const bottomPixel = (height - yOffset) / scaleFactor;
  91 | 
  92 |   const visibleXMin = baseScaleX.invert(leftPixel);
  93 |   const visibleXMax = baseScaleX.invert(rightPixel);
  94 | 
  95 |   const visibleYMax = baseScaleY.invert(topPixel);
  96 |   const visibleYMin = baseScaleY.invert(bottomPixel);
  97 | 
  98 |   const dynamicXScale = d3
  99 |     .scaleLinear()
 100 |     .domain([visibleXMin, visibleXMax])
 101 |     .range([0, width]);
 102 | 
 103 |   const dynamicYScale = d3
 104 |     .scaleLinear()
 105 |     .domain([visibleYMin, visibleYMax])
 106 |     .range([height, 0]);
 107 | 
 108 |   return {
 109 |     dynamicXScale,
 110 |     dynamicYScale,
 111 |   };
 112 | }
 113 | 
 114 | /*
 115 |  * INITIALIZE PIXI APP
 116 |  */
 117 | async function initializePixiApp(containerElement, innerWidth, innerHeight) {
 118 |   const app = new PixiApp();
 119 | 
 120 |   await app.init({
 121 |     width: PLOT_DIMENSIONS.width,
 122 |     height: PLOT_DIMENSIONS.height,
 123 |     background: 0x16213e,
 124 |     antialias: true,
 125 |   });
 126 | 
 127 |   containerElement.appendChild(app.canvas);
 128 | 
 129 |   const axesLayer = new Container();
 130 |   axesLayer.x = PLOT_MARGIN.left;
 131 |   axesLayer.y = PLOT_MARGIN.top;
 132 |   app.stage.addChild(axesLayer);
 133 | 
 134 |   const contentLayer = new Container();
 135 |   contentLayer.x = PLOT_MARGIN.left;
 136 |   contentLayer.y = PLOT_MARGIN.top;
 137 |   app.stage.addChild(contentLayer);
 138 | 
 139 |   const mask = new Graphics();
 140 |   mask.rect(PLOT_MARGIN.left, PLOT_MARGIN.top, innerWidth, innerHeight);
 141 |   mask.fill(0xffffff);
 142 |   app.stage.addChild(mask);
 143 |   contentLayer.mask = mask;
 144 | 
 145 |   const brushGraphics = new Graphics();
 146 |   app.stage.addChild(brushGraphics);
 147 | 
 148 |   return {
 149 |     app,
 150 |     axesLayer,
 151 |     contentLayer,
 152 |     mask,
 153 |     brushGraphics,
 154 |   };
 155 | }
 156 | 
 157 | /*
 158 |  * APPLY BRUSH ZOOM TO TRANSFORM
 159 |  */
 160 | function applyBrushZoom(
 161 |   { startX, startY, width, height },
 162 |   transformRef,
 163 |   innerWidth,
 164 |   innerHeight,
 165 | ) {
 166 |   const currentScale = transformRef.current.scale;
 167 |   const currentX = transformRef.current.x;
 168 |   const currentY = transformRef.current.y;
 169 | 
 170 |   const contentX0 = (startX - currentX) / currentScale;
 171 |   const contentY0 = (startY - currentY) / currentScale;
 172 |   const contentWidth = width / currentScale;
 173 |   const contentHeight = height / currentScale;
 174 | 
 175 |   const scaleFactorX = innerWidth / contentWidth;
 176 |   const scaleFactorY = innerHeight / contentHeight;
 177 |   const nextScale = Math.max(
 178 |     ZOOM_MIN,
 179 |     Math.min(Math.min(scaleFactorX, scaleFactorY), ZOOM_MAX),
 180 |   );
 181 | 
 182 |   const offsetCoordinateX = -contentX0 * nextScale;
 183 |   const offsetCoordinateY = -contentY0 * nextScale;
 184 | 
 185 |   const clamped = clampPan(
 186 |     offsetCoordinateX,
 187 |     offsetCoordinateY,
 188 |     nextScale,
 189 |     innerWidth,
 190 |     innerHeight,
 191 |   );
 192 |   return {
 193 |     scale: nextScale,
 194 |     x: clamped.x,
 195 |     y: clamped.y,
 196 |   };
 197 | }
 198 | 
 199 | /*
 200 |  * DRAW BRUSH OVERLAY
```

### Chunk 2/6

```jsx
 201 |  */
 202 | function drawBrushOverlay(graphics, startX, startY, width, height) {
 203 |   if (!graphics) return;
 204 |   graphics.clear();
 205 |   if (width > 0 && height > 0) {
 206 |     graphics.rect(
 207 |       PLOT_MARGIN.left + startX,
 208 |       PLOT_MARGIN.top + startY,
 209 |       width,
 210 |       height,
 211 |     );
 212 |     graphics.fill({ color: 0x4493ff, alpha: 0.15 });
 213 |     graphics.stroke({ width: 1.5, color: 0x4493ff });
 214 |   }
 215 | }
 216 | 
 217 | function PixiPlotter({ chartId, imageCount, xGap, yGap, dataPointCount }) {
 218 |   const {
 219 |     plotterPoints: fetchedPoints,
 220 |     isLoading,
 221 |     loadError,
 222 |   } = usePlotterData();
 223 | 
 224 |   const syntheticPoints = useMemo(() => {
 225 |     return generateSyntheticPoints(
 226 |       Math.max(
 227 |         DATA_POINT_LIMITS.min,
 228 |         Math.min(dataPointCount, DATA_POINT_LIMITS.max),
 229 |       ),
 230 |     );
 231 |   }, [dataPointCount]);
 232 |   const plotterPoints = syntheticPoints || fetchedPoints;
 233 | 
 234 |   if (!syntheticPoints && isLoading) {
 235 |     return <div>Loading...</div>;
 236 |   }
 237 | 
 238 |   if (!syntheticPoints && loadError) {
 239 |     return <div>Error: {loadError}</div>;
 240 |   }
 241 | 
 242 |   return (
 243 |     <PixiCanvas
 244 |       plotterPoints={plotterPoints}
 245 |       imageCount={imageCount}
 246 |       xGap={xGap}
 247 |       yGap={yGap}
 248 |       chartId={chartId}
 249 |     />
 250 |   );
 251 | }
 252 | 
 253 | function PixiCanvas({ plotterPoints, imageCount, xGap, yGap, chartId }) {
 254 |   const containerRef = useRef(null);
 255 |   const pixiAppRef = useRef(null);
 256 |   const axesLayerRef = useRef(null);
 257 |   const contentLayerRef = useRef(null);
 258 |   const maskRef = useRef(null);
 259 |   const tooltipRef = useRef(null);
 260 |   const brushGraphicsRef = useRef(null);
 261 |   const brushStartRef = useRef(null);
 262 |   const renderFrameRef = useRef(null);
 263 |   const loadedImageUrlsRef = useRef([]);
 264 |   const baseScalesRef = useRef({
 265 |     xScale: null,
 266 |     yScale: null,
 267 |   });
 268 | 
 269 |   const savedViewport = getChartViewport(chartId);
 270 | 
 271 |   const initialScale = Math.max(savedViewport.scale || 1, ZOOM_MIN);
 272 | 
 273 |   const transformRef = useRef(
 274 |     initialScale <= MIN_ZOOM_SCALE
 275 |       ? {
 276 |           scale: 1,
 277 |           x: 0,
 278 |           y: 0,
 279 |         }
 280 |       : {
 281 |           scale: initialScale,
 282 |           x: savedViewport.translateX || 0,
 283 |           y: savedViewport.translateY || 0,
 284 |         },
 285 |   );
 286 | 
 287 |   const dragRef = useRef({
 288 |     dragging: false,
 289 |     startX: 0,
 290 |     startY: 0,
 291 |   });
 292 | 
 293 |   const [zoomLevel, setZoomLevel] = useState(savedViewport.scale);
 294 |   const [isDragging, setIsDragging] = useState(false);
 295 | 
 296 |   const { interactionMode, setInteractionMode, isPanMode, isZoomMode } =
 297 |     useInteractionMode();
 298 | 
 299 |   const innerWidth =
 300 |     PLOT_DIMENSIONS.width - PLOT_MARGIN.left - PLOT_MARGIN.right;
 301 |   const innerHeight =
 302 |     PLOT_DIMENSIONS.height - PLOT_MARGIN.top - PLOT_MARGIN.bottom;
 303 | 
 304 |   /*
 305 |    * GET VIEWPORT SCALES
 306 |    */
 307 |   const getViewportScales = useCallback(() => {
 308 |     const baseScaleX = baseScalesRef.current.xScale;
 309 |     const baseScaleY = baseScalesRef.current.yScale;
 310 | 
 311 |     if (!baseScaleX || !baseScaleY) {
 312 |       return null;
 313 |     }
 314 | 
 315 |     const { scale, x, y } = transformRef.current;
 316 | 
 317 |     return computeViewportScales(
 318 |       baseScaleX,
 319 |       baseScaleY,
 320 |       scale,
 321 |       x,
 322 |       y,
 323 |       innerWidth,
 324 |       innerHeight,
 325 |     );
 326 |   }, [innerWidth, innerHeight]);
 327 | 
 328 |   /*
 329 |    * RENDER AXES
 330 |    */
 331 |   const renderAxes = useCallback(() => {
 332 |     if (!axesLayerRef.current) return;
 333 | 
 334 |     const viewportScales = getViewportScales();
 335 |     if (!viewportScales) return;
 336 | 
 337 |     const axesLayer = axesLayerRef.current;
 338 |     axesLayer.removeChildren();
 339 | 
 340 |     drawGrid(
 341 |       axesLayer,
 342 |       viewportScales.dynamicXScale,
 343 |       viewportScales.dynamicYScale,
 344 |       innerWidth,
 345 |       innerHeight,
 346 |     );
 347 | 
 348 |     drawAxesLabels(
 349 |       axesLayer,
 350 |       viewportScales.dynamicXScale,
 351 |       viewportScales.dynamicYScale,
 352 |       innerWidth,
 353 |       innerHeight,
 354 |     );
 355 |   }, [getViewportScales, innerWidth, innerHeight]);
 356 | 
 357 |   /*
 358 |    * APPLY TRANSFORM — redraws points from current viewport scales (deep zoom).
 359 |    * Content layer is always identity; no matrix upscaling of sprites.
 360 |    */
 361 |   const applyTransform = useCallback(() => {
 362 |     if (!contentLayerRef.current) return;
 363 | 
 364 |     const viewportScales = getViewportScales();
 365 |     if (!viewportScales) return;
 366 | 
 367 |     const { dynamicXScale, dynamicYScale } = viewportScales;
 368 |     const { scale } = transformRef.current;
 369 | 
 370 |     const contentLayer = contentLayerRef.current;
 371 |     contentLayer.removeChildren();
 372 |     contentLayer.scale.set(1);
 373 |     contentLayer.x = PLOT_MARGIN.left;
 374 |     contentLayer.y = PLOT_MARGIN.top;
 375 | 
 376 |     const baseScaleX = baseScalesRef.current.xScale;
 377 |     const baseScaleY = baseScalesRef.current.yScale;
 378 |     if (!baseScaleX || !baseScaleY) return;
 379 | 
 380 |     const scaledPoints = plotterPoints.map((point) => ({
 381 |       ...point,
 382 |       scaledX: point.x * (xGap / 10),
 383 |       scaledY: point.y * (yGap / 10),
 384 |     }));
 385 | 
 386 |     /* Same pattern as Recharts: base cell size × current zoom scale. */
 387 |     const adaptiveCellSizeBase = computeAdaptiveCellSize(
 388 |       scaledPoints,
 389 |       (val) => baseScaleX(val),
 390 |       (val) => baseScaleY(val),
 391 |     );
 392 |     const currentCellSize = adaptiveCellSizeBase * scale;
 393 | 
 394 |     /* Screen-space culling. */
 395 |     const xScreenFn = (val) => baseScaleX(val) * scale + transformRef.current.x;
 396 |     const yScreenFn = (val) => baseScaleY(val) * scale + transformRef.current.y;
 397 |     const visiblePoints = filterVisiblePoints(
 398 |       scaledPoints,
 399 |       xScreenFn,
 400 |       yScreenFn,
```

### Chunk 3/6

```jsx
 401 |       innerWidth,
 402 |       innerHeight,
 403 |       currentCellSize,
 404 |     );
 405 | 
 406 |     const effectiveImageCount = computeEffectiveImageCount(
 407 |       currentCellSize,
 408 |       imageCount,
 409 |     );
 410 | 
 411 |     drawPoints(
 412 |       contentLayer,
 413 |       visiblePoints,
 414 |       dynamicXScale,
 415 |       dynamicYScale,
 416 |       effectiveImageCount,
 417 |       tooltipRef,
 418 |       currentCellSize,
 419 |     );
 420 | 
 421 |     renderAxes();
 422 |   }, [
 423 |     getViewportScales,
 424 |     renderAxes,
 425 |     plotterPoints,
 426 |     xGap,
 427 |     yGap,
 428 |     innerWidth,
 429 |     innerHeight,
 430 |     imageCount,
 431 |   ]);
 432 | 
 433 |   /*
 434 |    * MAIN RENDER — loads assets then delegates to applyTransform for drawing.
 435 |    */
 436 |   const renderScene = useCallback(async () => {
 437 |     if (!axesLayerRef.current || !contentLayerRef.current) return;
 438 | 
 439 |     const scaledPoints = plotterPoints.map((point) => ({
 440 |       ...point,
 441 |       scaledX: point.x * (xGap / 10),
 442 |       scaledY: point.y * (yGap / 10),
 443 |     }));
 444 | 
 445 |     const xDomainExtent = d3.extent(scaledPoints, (point) => point.scaledX);
 446 |     const yDomainExtent = d3.extent(scaledPoints, (point) => point.scaledY);
 447 | 
 448 |     const baseScaleX = d3
 449 |       .scaleLinear()
 450 |       .domain([xDomainExtent[0] - 5, xDomainExtent[1] + 5])
 451 |       .range([0, innerWidth]);
 452 | 
 453 |     const baseScaleY = d3
 454 |       .scaleLinear()
 455 |       .domain([yDomainExtent[0] - 5, yDomainExtent[1] + 5])
 456 |       .range([innerHeight, 0]);
 457 | 
 458 |     baseScalesRef.current = { xScale: baseScaleX, yScale: baseScaleY };
 459 |     renderAxes();
 460 | 
 461 |     const uniqueImageUrls = [
 462 |       ...new Set(plotterPoints.map((point) => point.image).filter(Boolean)),
 463 |     ];
 464 | 
 465 |     loadedImageUrlsRef.current = uniqueImageUrls;
 466 | 
 467 |     await Assets.load(uniqueImageUrls);
 468 | 
 469 |     applyTransform();
 470 |   }, [
 471 |     plotterPoints,
 472 |     xGap,
 473 |     yGap,
 474 |     innerWidth,
 475 |     innerHeight,
 476 |     renderAxes,
 477 |     applyTransform,
 478 |   ]);
 479 | 
 480 |   /*
 481 |    * ZOOM
 482 |    */
 483 |   const zoom = useCallback(
 484 |     (direction, interactionSource = "button") => {
 485 |       const currentScale = transformRef.current.scale;
 486 | 
 487 |       if (direction === "out" && currentScale <= MIN_ZOOM_SCALE) {
 488 |         return;
 489 |       }
 490 | 
 491 |       const nextScale =
 492 |         direction === "in"
 493 |           ? Math.min(currentScale * ZOOM_STEP, ZOOM_MAX)
 494 |           : Math.max(currentScale / ZOOM_STEP, ZOOM_MIN);
 495 | 
 496 |       if (nextScale === currentScale) {
 497 |         return;
 498 |       }
 499 | 
 500 |       logChartInteractionEvent({
 501 |         interactionType: direction === "in" ? "ZOOM_IN" : "ZOOM_OUT",
 502 |         visualizationLibrary: "Pixi",
 503 |         interactionSource: interactionSource,
 504 |       });
 505 | 
 506 |       const plotCenterX = innerWidth / 2;
 507 |       const plotCenterY = innerHeight / 2;
 508 | 
 509 |       const nextTransformOffsetX =
 510 |         transformRef.current.x - plotCenterX * (nextScale / currentScale - 1);
 511 | 
 512 |       const nextTransformOffsetY =
 513 |         transformRef.current.y - plotCenterY * (nextScale / currentScale - 1);
 514 | 
 515 |       const clampedTransformOffset = clampPan(
 516 |         nextTransformOffsetX,
 517 |         nextTransformOffsetY,
 518 |         nextScale,
 519 |         innerWidth,
 520 |         innerHeight,
 521 |       );
 522 | 
 523 |       transformRef.current = {
 524 |         scale: nextScale,
 525 |         x: clampedTransformOffset.x,
 526 |         y: clampedTransformOffset.y,
 527 |       };
 528 | 
 529 |       updateChartViewport(chartId, {
 530 |         scale: nextScale,
 531 |         translateX: clampedTransformOffset.x,
 532 |         translateY: clampedTransformOffset.y,
 533 |       });
 534 | 
 535 |       setZoomLevel(nextScale);
 536 |       applyTransform();
 537 |     },
 538 |     [innerWidth, innerHeight, chartId, applyTransform],
 539 |   );
 540 | 
 541 |   /*
 542 |    * RESET
 543 |    */
 544 |   const reset = useCallback(
 545 |     (interactionSource) => {
 546 |       const computedSource =
 547 |         interactionSource && typeof interactionSource === "string"
 548 |           ? interactionSource
 549 |           : "button";
 550 | 
 551 |       logChartInteractionEvent({
 552 |         interactionType: "RESET",
 553 |         visualizationLibrary: "Pixi",
 554 |         interactionSource: computedSource,
 555 |       });
 556 | 
 557 |       transformRef.current = {
 558 |         scale: 1,
 559 |         x: 0,
 560 |         y: 0,
 561 |       };
 562 |       updateChartViewport(chartId, {
 563 |         scale: 1,
 564 |         translateX: 0,
 565 |         translateY: 0,
 566 |       });
 567 | 
 568 |       setZoomLevel(1);
 569 |       applyTransform();
 570 |     },
 571 |     [applyTransform, chartId],
 572 |   );
 573 | 
 574 |   /*
 575 |    * CANVAS INTERACTIONS
 576 |    */
 577 |   const onCanvasMouseDown = useCallback(
 578 |     (event) => {
 579 |       if (isPanMode) {
 580 |         if (transformRef.current.scale <= MIN_ZOOM_SCALE) {
 581 |           return;
 582 |         }
 583 |         logChartInteractionEvent({
 584 |           interactionType: "PAN",
 585 |           visualizationLibrary: "Pixi",
 586 |           interactionSource: "drag",
 587 |         });
 588 |         setIsDragging(true);
 589 |         // eslint-disable-next-line react-hooks/immutability
 590 |         const dragState = ensureDragRef();
 591 |         dragState.dragging = true;
 592 |         dragState.startX = event.clientX - transformRef.current.x;
 593 |         dragState.startY = event.clientY - transformRef.current.y;
 594 |       } else if (isZoomMode) {
 595 |         if (!containerRef.current) return;
 596 |         const rect = containerRef.current.getBoundingClientRect();
 597 |         const localX = event.clientX - rect.left - PLOT_MARGIN.left;
 598 |         const localY = event.clientY - rect.top - PLOT_MARGIN.top;
 599 | 
 600 |         if (
```

### Chunk 4/6

```jsx
 601 |           localX >= 0 &&
 602 |           localX <= innerWidth &&
 603 |           localY >= 0 &&
 604 |           localY <= innerHeight
 605 |         ) {
 606 |           brushStartRef.current = { x: localX, y: localY };
 607 |         }
 608 |       }
 609 |     },
 610 |     [isPanMode, isZoomMode, innerWidth, innerHeight],
 611 |   );
 612 | 
 613 |   const onCanvasMouseMove = useCallback(
 614 |     (event) => {
 615 |       const dragState = ensureDragRef();
 616 |       if (dragState.dragging) {
 617 |         if (transformRef.current.scale <= MIN_ZOOM_SCALE) {
 618 |           dragState.dragging = false;
 619 |           setIsDragging(false);
 620 |           transformRef.current.x = 0;
 621 |           transformRef.current.y = 0;
 622 | 
 623 |           updateChartViewport(chartId, {
 624 |             scale: 1,
 625 |             translateX: 0,
 626 |             translateY: 0,
 627 |           });
 628 | 
 629 |           applyTransform();
 630 |           return;
 631 |         }
 632 | 
 633 |         const nextX = event.clientX - dragState.startX;
 634 |         const nextY = event.clientY - dragState.startY;
 635 |         const clamped = clampPan(
 636 |           nextX,
 637 |           nextY,
 638 |           transformRef.current.scale,
 639 |           innerWidth,
 640 |           innerHeight,
 641 |         );
 642 | 
 643 |         transformRef.current.x = clamped.x;
 644 |         transformRef.current.y = clamped.y;
 645 | 
 646 |         updateChartViewport(chartId, {
 647 |           scale: transformRef.current.scale,
 648 |           translateX: clamped.x,
 649 |           translateY: clamped.y,
 650 |         });
 651 | 
 652 |         applyTransform();
 653 |         return;
 654 |       }
 655 | 
 656 |       if (brushStartRef.current) {
 657 |         if (!containerRef.current) return;
 658 |         const rect = containerRef.current.getBoundingClientRect();
 659 |         const localX = Math.max(
 660 |           0,
 661 |           Math.min(innerWidth, event.clientX - rect.left - PLOT_MARGIN.left),
 662 |         );
 663 |         const localY = Math.max(
 664 |           0,
 665 |           Math.min(innerHeight, event.clientY - rect.top - PLOT_MARGIN.top),
 666 |         );
 667 | 
 668 |         const brushStartX = Math.min(brushStartRef.current.x, localX);
 669 |         const brushStartY = Math.min(brushStartRef.current.y, localY);
 670 |         const brushWidth = Math.abs(localX - brushStartRef.current.x);
 671 |         const brushHeight = Math.abs(localY - brushStartRef.current.y);
 672 | 
 673 |         drawBrushOverlay(
 674 |           brushGraphicsRef.current,
 675 |           brushStartX,
 676 |           brushStartY,
 677 |           brushWidth,
 678 |           brushHeight,
 679 |         );
 680 |       }
 681 |     },
 682 |     [innerWidth, innerHeight, chartId, applyTransform],
 683 |   );
 684 | 
 685 |   const onCanvasMouseUp = useCallback(
 686 |     (event) => {
 687 |       setIsDragging(false);
 688 |       const dragState = ensureDragRef();
 689 |       if (dragState.dragging) {
 690 |         dragState.dragging = false;
 691 | 
 692 |         if (transformRef.current.scale <= MIN_ZOOM_SCALE) {
 693 |           transformRef.current.scale = 1;
 694 |           transformRef.current.x = 0;
 695 |           transformRef.current.y = 0;
 696 |           setZoomLevel(1);
 697 | 
 698 |           updateChartViewport(chartId, {
 699 |             scale: 1,
 700 |             translateX: 0,
 701 |             translateY: 0,
 702 |           });
 703 | 
 704 |           applyTransform();
 705 |           return;
 706 |         }
 707 |         updateChartViewport(chartId, {
 708 |           scale: transformRef.current.scale,
 709 |           translateX: transformRef.current.x,
 710 |           translateY: transformRef.current.y,
 711 |         });
 712 |         return;
 713 |       }
 714 | 
 715 |       if (brushStartRef.current) {
 716 |         if (!containerRef.current) return;
 717 |         const rect = containerRef.current.getBoundingClientRect();
 718 |         const localX = Math.max(
 719 |           0,
 720 |           Math.min(innerWidth, event.clientX - rect.left - PLOT_MARGIN.left),
 721 |         );
 722 |         const localY = Math.max(
 723 |           0,
 724 |           Math.min(innerHeight, event.clientY - rect.top - PLOT_MARGIN.top),
 725 |         );
 726 | 
 727 |         const brushStartX = Math.min(brushStartRef.current.x, localX);
 728 |         const brushStartY = Math.min(brushStartRef.current.y, localY);
 729 |         const brushWidth = Math.abs(localX - brushStartRef.current.x);
 730 |         const brushHeight = Math.abs(localY - brushStartRef.current.y);
 731 | 
 732 |         if (brushWidth >= 5 && brushHeight >= 5) {
 733 |           logChartInteractionEvent({
 734 |             interactionType: "ZOOM_IN",
 735 |             visualizationLibrary: "Pixi",
 736 |             interactionSource: "brush",
 737 |           });
 738 | 
 739 |           const nextTransform = applyBrushZoom(
 740 |             {
 741 |               startX: brushStartX,
 742 |               startY: brushStartY,
 743 |               width: brushWidth,
 744 |               height: brushHeight,
 745 |             },
 746 |             transformRef,
 747 |             innerWidth,
 748 |             innerHeight,
 749 |           );
 750 | 
 751 |           transformRef.current = {
 752 |             scale: nextTransform.scale,
 753 |             x: nextTransform.x,
 754 |             y: nextTransform.y,
 755 |           };
 756 | 
 757 |           updateChartViewport(chartId, {
 758 |             scale: nextTransform.scale,
 759 |             translateX: nextTransform.x,
 760 |             translateY: nextTransform.y,
 761 |           });
 762 | 
 763 |           setZoomLevel(nextTransform.scale);
 764 |           applyTransform();
 765 |         }
 766 | 
 767 |         if (brushGraphicsRef.current) {
 768 |           brushGraphicsRef.current.clear();
 769 |         }
 770 |         brushStartRef.current = null;
 771 |       }
 772 |     },
 773 |     [innerWidth, innerHeight, chartId, applyTransform],
 774 |   );
 775 | 
 776 |   /* Cancel in-progress brush when switching to pan mode */
 777 |   useEffect(() => {
 778 |     if (isPanMode) {
 779 |       brushStartRef.current = null;
 780 |       if (brushGraphicsRef.current) {
 781 |         brushGraphicsRef.current.clear();
 782 |       }
 783 |     }
 784 |   }, [isPanMode]);
 785 | 
 786 |   const ensureDragRef = () => {
 787 |     if (!dragRef.current) {
 788 |       dragRef.current = {
 789 |         dragging: false,
 790 |         startX: 0,
 791 |         startY: 0,
 792 |       };
 793 |     }
 794 | 
 795 |     return dragRef.current;
 796 |   };
 797 |   /*
 798 |    * INITIALIZE PIXI
 799 |    */
 800 |   useEffect(() => {
```

### Chunk 5/6

```jsx
 801 |     let isComponentUnmounted = false;
 802 | 
 803 |     if (!containerRef.current) return;
 804 | 
 805 |     initializePixiApp(containerRef.current, innerWidth, innerHeight)
 806 |       .then(({ app, axesLayer, contentLayer, mask, brushGraphics }) => {
 807 |         if (isComponentUnmounted) {
 808 |           try {
 809 |             app.destroy(true, {
 810 |               children: true,
 811 |               texture: false,
 812 |               textureSource: false,
 813 |             });
 814 |           } catch (err) {
 815 |             console.error(
 816 |               "Error destroying Pixi App during init cancellation:",
 817 |               err,
 818 |             );
 819 |           }
 820 |           return;
 821 |         }
 822 | 
 823 |         pixiAppRef.current = app;
 824 |         axesLayerRef.current = axesLayer;
 825 |         contentLayerRef.current = contentLayer;
 826 |         maskRef.current = mask;
 827 |         brushGraphicsRef.current = brushGraphics;
 828 | 
 829 |         renderScene().then(() => {
 830 |           if (isComponentUnmounted) return;
 831 | 
 832 |           renderFrameRef.current = requestAnimationFrame(() => {
 833 |             if (!isComponentUnmounted) {
 834 |               applyTransform();
 835 |             }
 836 |           });
 837 |         });
 838 |       })
 839 |       .catch((err) => {
 840 |         if (!isComponentUnmounted) {
 841 |           console.error("Failed to initialize Pixi:", err);
 842 |         }
 843 |       });
 844 | 
 845 |     return () => {
 846 |       isComponentUnmounted = true;
 847 | 
 848 |       /**
 849 |        * Persist lightweight interaction state.
 850 |        * Do this before destroying Pixi objects.
 851 |        */
 852 |       if (chartId && transformRef.current) {
 853 |         updateChartViewport(chartId, {
 854 |           scale: transformRef.current.scale,
 855 |           translateX: transformRef.current.x,
 856 |           translateY: transformRef.current.y,
 857 |         });
 858 |       }
 859 | 
 860 |       try {
 861 |         if (renderFrameRef.current) {
 862 |           cancelAnimationFrame(renderFrameRef.current);
 863 |           renderFrameRef.current = null;
 864 |         }
 865 | 
 866 |         brushStartRef.current = null;
 867 |         dragRef.current = {
 868 |           dragging: false,
 869 |           startX: 0,
 870 |           startY: 0,
 871 |         };
 872 | 
 873 |         baseScalesRef.current = {
 874 |           xScale: null,
 875 |           yScale: null,
 876 |         };
 877 | 
 878 |         brushGraphicsRef.current?.clear?.();
 879 |         brushGraphicsRef.current?.destroy?.({
 880 |           children: true,
 881 |           texture: false,
 882 |           textureSource: false,
 883 |         });
 884 | 
 885 |         axesLayerRef.current?.removeChildren?.();
 886 |         axesLayerRef.current?.destroy?.({
 887 |           children: true,
 888 |           texture: false,
 889 |           textureSource: false,
 890 |         });
 891 | 
 892 |         contentLayerRef.current?.removeChildren?.();
 893 |         contentLayerRef.current?.destroy?.({
 894 |           children: true,
 895 |           texture: false,
 896 |           textureSource: false,
 897 |         });
 898 | 
 899 |         maskRef.current?.clear?.();
 900 |         maskRef.current?.destroy?.({
 901 |           children: true,
 902 |           texture: false,
 903 |           textureSource: false,
 904 |         });
 905 | 
 906 |         pixiAppRef.current?.destroy?.(true, {
 907 |           children: true,
 908 |           texture: false,
 909 |           textureSource: false,
 910 |         });
 911 | 
 912 |         if (containerRef.current) {
 913 |           // eslint-disable-next-line react-hooks/exhaustive-deps
 914 |           containerRef.current.replaceChildren();
 915 |         }
 916 | 
 917 |         pixiAppRef.current = null;
 918 |         axesLayerRef.current = null;
 919 |         contentLayerRef.current = null;
 920 |         maskRef.current = null;
 921 |         brushGraphicsRef.current = null;
 922 |         tooltipRef.current = null;
 923 |         loadedImageUrlsRef.current = [];
 924 |       } catch (error) {
 925 |         console.warn("Pixi cleanup failed", error);
 926 |       }
 927 |     };
 928 |   }, [innerWidth, innerHeight, renderScene, applyTransform, chartId]);
 929 | 
 930 |   /*
 931 |    * RERENDER DATA CHANGES
 932 |    */
 933 |   useEffect(() => {
 934 |     if (!plotterPoints.length) return;
 935 |     renderScene();
 936 |   }, [plotterPoints, imageCount, xGap, yGap, renderScene]);
 937 | 
 938 |   /*
 939 |    * ATTACH NON-PASSIVE WHEEL LISTENER
 940 |    */
 941 |   useEffect(() => {
 942 |     const container = containerRef.current;
 943 |     if (!container) return;
 944 | 
 945 |     const onCanvasWheelScroll = (event) => {
 946 |       event.preventDefault();
 947 | 
 948 |       const isZoomOut = event.deltaY > 0;
 949 | 
 950 |       if (isZoomOut && transformRef.current.scale <= MIN_ZOOM_SCALE) {
 951 |         return;
 952 |       }
 953 | 
 954 |       if (isZoomOut) {
 955 |         zoom("out", "wheel");
 956 |       } else {
 957 |         zoom("in", "wheel");
 958 |       }
 959 |     };
 960 | 
 961 |     container.addEventListener("wheel", onCanvasWheelScroll, {
 962 |       passive: false,
 963 |     });
 964 | 
 965 |     return () => {
 966 |       container.removeEventListener("wheel", onCanvasWheelScroll);
 967 |     };
 968 |   }, [zoom]);
 969 | 
 970 |   return (
 971 |     <div style={{ position: "relative" }}>
 972 |       <PlotterControls
 973 |         zoomLevel={zoomLevel}
 974 |         onZoomIn={() => zoom("in")}
 975 |         onZoomOut={() => zoom("out")}
 976 |         onReset={() => reset("button")}
 977 |         interactionMode={interactionMode}
 978 |         onModeChange={setInteractionMode}
 979 |       />
 980 | 
 981 |       <div
 982 |         ref={containerRef}
 983 |         onMouseDown={onCanvasMouseDown}
 984 |         onMouseMove={onCanvasMouseMove}
 985 |         onMouseUp={onCanvasMouseUp}
 986 |         onMouseLeave={onCanvasMouseUp}
 987 |         onDoubleClick={() => reset("double_click")}
 988 |         style={{
 989 |           cursor: isPanMode ? (isDragging ? "grabbing" : "grab") : "crosshair",
 990 |         }}
 991 |       />
 992 | 
 993 |       <div
 994 |         ref={tooltipRef}
 995 |         className="plotter-tooltip"
 996 |         style={{
 997 |           display: "none",
 998 |           position: "absolute",
 999 |           pointerEvents: "none",
1000 |         }}
```

### Chunk 6/6

```jsx
1001 |       />
1002 |     </div>
1003 |   );
1004 | }
1005 | 
1006 | /*
1007 |  * GRID
1008 |  */
1009 | function drawGrid(layer, scaleX, scaleY, width, height) {
1010 |   const grid = new Graphics();
1011 | 
1012 |   const xTicks = buildIntegerTicks(scaleX.domain());
1013 |   const yTicks = buildIntegerTicks(scaleY.domain());
1014 | 
1015 |   xTicks.forEach((tick) => {
1016 |     const x = scaleX(tick);
1017 |     grid.moveTo(x, 0);
1018 |     grid.lineTo(x, height);
1019 |   });
1020 | 
1021 |   yTicks.forEach((tick) => {
1022 |     const y = scaleY(tick);
1023 |     grid.moveTo(0, y);
1024 |     grid.lineTo(width, y);
1025 |   });
1026 | 
1027 |   grid.stroke({
1028 |     width: 1,
1029 |     color: GRID_COLOR,
1030 |     alpha: GRID_ALPHA,
1031 |   });
1032 | 
1033 |   const border = new Graphics();
1034 |   border.rect(0, 0, width, height);
1035 |   border.stroke({
1036 |     width: 1,
1037 |     color: AXIS_BORDER_COLOR,
1038 |   });
1039 | 
1040 |   layer.addChild(grid);
1041 |   layer.addChild(border);
1042 | }
1043 | 
1044 | /*
1045 |  * LABELS
1046 |  */
1047 | function drawAxesLabels(layer, scaleX, scaleY, innerWidth, innerHeight) {
1048 |   const xTicks = buildIntegerTicks(scaleX.domain());
1049 |   const yTicks = buildIntegerTicks(scaleY.domain());
1050 | 
1051 |   xTicks.forEach((tick) => {
1052 |     const label = new PixiText({
1053 |       text: tick.toString(),
1054 |       style: {
1055 |         fill: TICK_COLOR,
1056 |         fontSize: 11,
1057 |       },
1058 |     });
1059 | 
1060 |     label.x = scaleX(tick) - label.width / 2;
1061 |     label.y = innerHeight + 6;
1062 |     layer.addChild(label);
1063 |   });
1064 | 
1065 |   yTicks.forEach((tick) => {
1066 |     const label = new PixiText({
1067 |       text: tick.toString(),
1068 |       style: {
1069 |         fill: TICK_COLOR,
1070 |         fontSize: 11,
1071 |       },
1072 |     });
1073 | 
1074 |     label.x = -label.width - 6;
1075 |     label.y = scaleY(tick) - label.height / 2;
1076 |     layer.addChild(label);
1077 |   });
1078 | }
1079 | 
1080 | /*
1081 |  * POINTS
1082 |  */
1083 | function drawPoints(
1084 |   layer,
1085 |   points,
1086 |   scaleX,
1087 |   scaleY,
1088 |   imageCount,
1089 |   tooltipRef,
1090 |   cellSize = CELL_SIZE,
1091 | ) {
1092 |   points.forEach((point) => {
1093 |     const x = scaleX(point.scaledX);
1094 |     const y = scaleY(point.scaledY);
1095 | 
1096 |     const positions = computeImagePositions(
1097 |       x,
1098 |       y,
1099 |       cellSize,
1100 |       cellSize,
1101 |       imageCount,
1102 |     );
1103 | 
1104 |     positions.forEach((position) => {
1105 |       const sprite = Sprite.from(point.image);
1106 |       sprite.x = position.x;
1107 |       sprite.y = position.y;
1108 |       sprite.width = position.width;
1109 |       sprite.height = position.height;
1110 |       sprite.eventMode = "static";
1111 |       sprite.cursor = "pointer";
1112 | 
1113 |       sprite.on("pointerenter", (event) => {
1114 |         showTooltip(tooltipRef.current, event, point);
1115 |       });
1116 | 
1117 |       sprite.on("pointerleave", () => {
1118 |         hideTooltip(tooltipRef.current);
1119 |       });
1120 | 
1121 |       layer.addChild(sprite);
1122 |     });
1123 |   });
1124 | }
1125 | 
1126 | /*
1127 |  * SMART TICKS
1128 |  */
1129 | function buildIntegerTicks([min, max]) {
1130 |   const range = max - min;
1131 |   let step;
1132 | 
1133 |   if (range <= 10) step = 1;
1134 |   else if (range <= 20) step = 2;
1135 |   else if (range <= 50) step = 5;
1136 |   else if (range <= 100) step = 10;
1137 |   else if (range <= 200) step = 20;
1138 |   else step = 50;
1139 | 
1140 |   const ticks = [];
1141 |   const start = Math.floor(min / step) * step;
1142 | 
1143 |   for (let value = start; value <= max; value += step) {
1144 |     ticks.push(Number(value.toFixed(2)));
1145 |   }
1146 | 
1147 |   return ticks;
1148 | }
1149 | 
1150 | /*
1151 |  * TOOLTIP
1152 |  */
1153 | function showTooltip(element, event, point) {
1154 |   if (!element) return;
1155 | 
1156 |   const global = event.global;
1157 |   element.style.display = "block";
1158 |   element.style.left = `${global.x + 15}px`;
1159 |   element.style.top = `${global.y - 10}px`;
1160 | 
1161 |   element.innerHTML = `
1162 |     <div class="tooltip-label">
1163 |       ${point.label}
1164 |     </div>
1165 |  
1166 |     <div class="tooltip-meta">
1167 |       <span>Interval: ${point.meta.interval}s</span>
1168 |       <span>Angle: ${point.meta.angle}°</span>
1169 |       <span>Quality: ${point.meta.quality}</span>
1170 |     </div>
1171 |   `;
1172 | }
1173 | 
1174 | function hideTooltip(element) {
1175 |   if (!element) return;
1176 |   element.style.display = "none";
1177 | }
1178 | 
1179 | export default PixiPlotter;
1180 | 
```


---

## 📄 src\components\PlotterControls.jsx
**hash:** `2136d095`

### Chunk 1/1

```jsx
   1 | import { INTERACTION_MODES } from "../lib/interactionMode";
   2 | 
   3 | function ZoomIcon() {
   4 |   return (
   5 |     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
   6 |       <circle cx="11" cy="11" r="8" />
   7 |       <line x1="21" y1="21" x2="16.65" y2="16.65" />
   8 |       <line x1="11" y1="8" x2="11" y2="14" />
   9 |       <line x1="8" y1="11" x2="14" y2="11" />
  10 |     </svg>
  11 |   );
  12 | }
  13 | 
  14 | function PanIcon() {
  15 |   return (
  16 |     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  17 |       <path d="M18 11V6a2 2 0 0 0-4 0v5" />
  18 |       <path d="M14 10V4a2 2 0 0 0-4 0v6" />
  19 |       <path d="M10 10.5V6a2 2 0 0 0-4 0v8" />
  20 |       <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
  21 |     </svg>
  22 |   );
  23 | }
  24 | 
  25 | export default function PlotterControls({
  26 |   onZoomIn,
  27 |   onZoomOut,
  28 |   onReset,
  29 |   zoomLevel,
  30 |   interactionMode,
  31 |   onModeChange,
  32 | }) {
  33 |   const isZoomActive = interactionMode === INTERACTION_MODES.ZOOM;
  34 |   const isPanActive = interactionMode === INTERACTION_MODES.PAN;
  35 | 
  36 |   return (
  37 |     <div className="zoom-controls">
  38 |       {onModeChange && (
  39 |         <>
  40 |           <button
  41 |             className={`mode-button ${isZoomActive ? "active" : ""}`}
  42 |             onClick={() => onModeChange(INTERACTION_MODES.ZOOM)}
  43 |             title="Zoom Mode — drag to select zoom area"
  44 |           >
  45 |             <ZoomIcon />
  46 |             <span>Zoom</span>
  47 |           </button>
  48 |           <button
  49 |             className={`mode-button ${isPanActive ? "active" : ""}`}
  50 |             onClick={() => onModeChange(INTERACTION_MODES.PAN)}
  51 |             title="Pan Mode — drag to move the chart"
  52 |           >
  53 |             <PanIcon />
  54 |             <span>Pan</span>
  55 |           </button>
  56 |           <span className="mode-separator" />
  57 |         </>
  58 |       )}
  59 | 
  60 |       <button className="zoom-button" onClick={onZoomIn}>
  61 |         +
  62 |       </button>
  63 |       <button className="zoom-button" onClick={onZoomOut}>
  64 |         −
  65 |       </button>
  66 |       <button className="zoom-button" onClick={onReset}>
  67 |         Reset
  68 |       </button>
  69 |       {zoomLevel !== undefined && (
  70 |         <span style={{ color: "#888", fontSize: "0.75rem", marginLeft: 8 }}>
  71 |           {Math.round(zoomLevel * 100)}%
  72 |         </span>
  73 |       )}
  74 |     </div>
  75 |   );
  76 | }
  77 | 
```


---

## 📄 src\components\RechartsPlotter.jsx
**hash:** `f74f766`

### Chunk 1/7

```jsx
   1 | /* eslint-disable react-hooks/set-state-in-effect */
   2 | /* eslint-disable react-hooks/refs */
   3 | import {
   4 |   useState,
   5 |   useMemo,
   6 |   useRef,
   7 |   useEffect,
   8 |   useCallback,
   9 |   memo,
  10 |   useLayoutEffect,
  11 | } from "react";
  12 | import { createPortal } from "react-dom";
  13 | import * as d3 from "d3";
  14 | import { usePlotterData } from "../lib/plotterData";
  15 | import {
  16 |   PLOT_DIMENSIONS,
  17 |   PLOT_MARGIN,
  18 |   DATA_POINT_LIMITS,
  19 | } from "../lib/constants";
  20 | import {
  21 |   computeAdaptiveCellSize,
  22 |   computeEffectiveImageCount,
  23 | } from "../lib/densityLayout";
  24 | import PlotterControls from "./PlotterControls";
  25 | import ImageCanvasLayer from "./ImageCanvasLayer";
  26 | import { logChartInteractionEvent } from "../lib/chartInteractionLogger";
  27 | import { useInteractionMode } from "../lib/interactionMode";
  28 | import { generateSyntheticPoints } from "../lib/syntheticDataGenerator";
  29 | import {
  30 |   getChartViewport,
  31 |   updateChartViewport,
  32 | } from "../lib/chartViewportStore";
  33 | import { buildQuadtree, queryVisiblePointsQuadtree } from "../lib/quadtree";
  34 | import { useThrottledCallback } from "../lib/debouncedHooks";
  35 | import { computeImagePositions } from "../lib/gridLayout";
  36 | 
  37 | const ZOOM_STEP = 1.5;
  38 | const ZOOM_EPS = 0.001;
  39 | const ZOOM_MAX = 250;
  40 | const BRUSH_MIN_PIXELS = 5;
  41 | const BRUSH_FILL = "rgba(68, 147, 255, 0.15)";
  42 | const BRUSH_STROKE = "#4493ff";
  43 | const BRUSH_STROKE_WIDTH = 1.5;
  44 | 
  45 | const BASE_IMAGE_GAP_X = 10;
  46 | const BASE_IMAGE_GAP_Y = 10;
  47 | 
  48 | const TooltipOverlay = memo(function TooltipOverlay({
  49 |   hoveredPoint,
  50 |   tooltipRef,
  51 |   position,
  52 | }) {
  53 |   if (!hoveredPoint) return null;
  54 |   if (typeof document === "undefined") return null;
  55 | 
  56 |   return createPortal(
  57 |     <div
  58 |       ref={tooltipRef}
  59 |       style={{
  60 |         position: "fixed",
  61 |         left: `${position?.x ?? 0}px`,
  62 |         top: `${position?.y ?? 0}px`,
  63 |         background: "#111",
  64 |         border: "1px solid #333",
  65 |         padding: "10px",
  66 |         borderRadius: "8px",
  67 |         color: "white",
  68 |         fontSize: "12px",
  69 |         pointerEvents: "none",
  70 |         zIndex: 1000,
  71 |       }}
  72 |     >
  73 |       <div>{hoveredPoint.label}</div>
  74 |       <div>X: {hoveredPoint.x}</div>
  75 |       <div>Y: {hoveredPoint.y}</div>
  76 |     </div>,
  77 |     document.body,
  78 |   );
  79 | });
  80 | 
  81 | function createInitialDragState() {
  82 |   return {
  83 |     dragging: false,
  84 |     pointerId: null,
  85 |     startClientX: 0,
  86 |     startClientY: 0,
  87 |     startTransform: {
  88 |       scale: 1,
  89 |       x: 0,
  90 |       y: 0,
  91 |     },
  92 |   };
  93 | }
  94 | 
  95 | function SvgImageLayer({
  96 |   points,
  97 |   baseXScale,
  98 |   baseYScale,
  99 |   cellSize,
 100 |   transform,
 101 |   imageCount,
 102 | }) {
 103 |   return (
 104 |     <g
 105 |       transform={`translate(${transform.x},${transform.y}) scale(${transform.scale})`}
 106 |     >
 107 |       {points.flatMap((point) => {
 108 |         const centerX = baseXScale(point.scaledX);
 109 |         const centerY = baseYScale(point.scaledY);
 110 | 
 111 |         const positions = computeImagePositions(
 112 |           centerX,
 113 |           centerY,
 114 |           cellSize,
 115 |           cellSize,
 116 |           imageCount,
 117 |         );
 118 | 
 119 |         return positions.map((pos) => (
 120 |           <image
 121 |             key={`${point.id}-${pos.imageIndex}`}
 122 |             href={point.image}
 123 |             x={pos.x}
 124 |             y={pos.y}
 125 |             width={pos.width}
 126 |             height={pos.height}
 127 |             preserveAspectRatio="none"
 128 |             data-point-id={point.id}
 129 |           />
 130 |         ));
 131 |       })}
 132 |     </g>
 133 |   );
 134 | }
 135 | 
 136 | function RechartsPlotter({
 137 |   enableQuadtree,
 138 |   enableLOD,
 139 |   enableCanvas,
 140 |   chartId,
 141 |   imageCount,
 142 |   xGap,
 143 |   yGap,
 144 |   dataPointCount,
 145 | }) {
 146 |   const {
 147 |     plotterPoints: fetchedPoints,
 148 |     isLoading,
 149 |     loadError,
 150 |   } = usePlotterData();
 151 | 
 152 |   const syntheticPoints = useMemo(() => {
 153 |     return generateSyntheticPoints(
 154 |       Math.max(
 155 |         DATA_POINT_LIMITS.min,
 156 |         Math.min(dataPointCount, DATA_POINT_LIMITS.max),
 157 |       ),
 158 |     );
 159 |   }, [dataPointCount]);
 160 | 
 161 |   const plotterPoints = syntheticPoints || fetchedPoints;
 162 | 
 163 |   if (!syntheticPoints && isLoading)
 164 |     return <div className="plotter-loading">Loading data…</div>;
 165 |   if (!syntheticPoints && loadError)
 166 |     return <div className="plotter-error">Error: {loadError}</div>;
 167 | 
 168 |   return (
 169 |     <RechartsCanvas
 170 |       plotterPoints={plotterPoints}
 171 |       imageCount={imageCount}
 172 |       xGap={xGap}
 173 |       yGap={yGap}
 174 |       chartId={chartId}
 175 |       enableQuadtree={enableQuadtree}
 176 |       enableLOD={enableLOD}
 177 |       enableCanvas={enableCanvas}
 178 |     />
 179 |   );
 180 | }
 181 | 
 182 | const ControlsLayer = memo(function ControlsLayer({
 183 |   zoomLevel,
 184 |   onZoomIn,
 185 |   onZoomOut,
 186 |   onReset,
 187 |   interactionMode,
 188 |   onModeChange,
 189 | }) {
 190 |   return (
 191 |     <div style={{ position: "relative", zIndex: 10, marginBottom: 12 }}>
 192 |       <PlotterControls
 193 |         zoomLevel={zoomLevel}
 194 |         onZoomIn={onZoomIn}
 195 |         onZoomOut={onZoomOut}
 196 |         onReset={onReset}
 197 |         interactionMode={interactionMode}
 198 |         onModeChange={onModeChange}
 199 |       />
 200 |     </div>
```

### Chunk 2/7

```jsx
 201 |   );
 202 | });
 203 | 
 204 | function RechartsCanvas({
 205 |   plotterPoints,
 206 |   imageCount,
 207 |   xGap,
 208 |   yGap,
 209 |   chartId,
 210 |   enableQuadtree,
 211 |   enableLOD,
 212 |   enableCanvas,
 213 | }) {
 214 |   const containerRef = useRef(null);
 215 |   const svgRef = useRef(null);
 216 |   const rafIdRef = useRef(null);
 217 |   const dragRef = useRef(createInitialDragState());
 218 |   const cachedScalesRef = useRef({ key: null, xScale: null, yScale: null });
 219 |   const [containerWidth, setContainerWidth] = useState(PLOT_DIMENSIONS.width);
 220 |   const initialViewportRef = useRef(getChartViewport(chartId));
 221 | 
 222 |   const [transform, setTransform] = useState(() => ({
 223 |     scale: initialViewportRef.current.scale || 1,
 224 |     x: initialViewportRef.current.translateX || 0,
 225 |     y: initialViewportRef.current.translateY || 0,
 226 |   }));
 227 |   const [hoveredPoint, setHoveredPoint] = useState(null);
 228 |   const tooltipRef = useRef(null);
 229 |   const [brushRect, setBrushRect] = useState(null);
 230 |   const [isDragging, setIsDragging] = useState(false);
 231 |   const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
 232 |   const brushStartRef = useRef(null);
 233 |   const pendingTransformRef = useRef(null);
 234 |   const { interactionMode, setInteractionMode, isPanMode } =
 235 |     useInteractionMode();
 236 | 
 237 |   useEffect(() => {
 238 |     if (!containerRef.current) return;
 239 | 
 240 |     const observer = new ResizeObserver((entries) => {
 241 |       const entry = entries[0];
 242 |       if (entry) setContainerWidth(entry.contentRect.width);
 243 |     });
 244 | 
 245 |     observer.observe(containerRef.current);
 246 |     return () => observer.disconnect();
 247 |   }, []);
 248 | 
 249 |   useEffect(() => {
 250 |     if (isPanMode) {
 251 |       brushStartRef.current = null;
 252 |       setBrushRect(null);
 253 |     }
 254 |   }, [isPanMode]);
 255 | 
 256 |   useEffect(() => {
 257 |     updateChartViewport(chartId, {
 258 |       scale: transform.scale,
 259 |       translateX: transform.x,
 260 |       translateY: transform.y,
 261 |     });
 262 |   }, [chartId, transform]);
 263 | 
 264 |   useLayoutEffect(() => {
 265 |     const saved = getChartViewport(chartId);
 266 |     setTransform({
 267 |       scale: saved?.scale ?? 1,
 268 |       x: saved?.translateX ?? 0,
 269 |       y: saved?.translateY ?? 0,
 270 |     });
 271 |   }, [chartId]);
 272 | 
 273 |   const height = PLOT_DIMENSIONS.height;
 274 |   const innerWidth = Math.max(
 275 |     containerWidth - PLOT_MARGIN.left - PLOT_MARGIN.right,
 276 |     320,
 277 |   );
 278 |   const innerHeight = Math.max(
 279 |     height - PLOT_MARGIN.top - PLOT_MARGIN.bottom,
 280 |     240,
 281 |   );
 282 | 
 283 |   // Gap spreads images apart: the content box grows with the gap (matching the
 284 |   // D3 plotter's range model), while the viewport stays innerWidth/innerHeight.
 285 |   const xSpacingScale = xGap / BASE_IMAGE_GAP_X;
 286 |   const ySpacingScale = yGap / BASE_IMAGE_GAP_Y;
 287 |   const contentWidth = innerWidth * xSpacingScale;
 288 |   const contentHeight = innerHeight * ySpacingScale;
 289 | 
 290 |   // The scale at which the whole content fits inside the viewport. No cap: if
 291 |   // content is larger than the viewport we zoom out to fit, and if it is
 292 |   // smaller we zoom in so it fills the viewport ("contain" behaviour).
 293 |   const fitScale = Math.min(
 294 |     innerWidth / contentWidth,
 295 |     innerHeight / contentHeight,
 296 |   );
 297 | 
 298 |   // The "home"/reset view: fully fitted and centered.
 299 |   const homeTransform = useMemo(
 300 |     () =>
 301 |       clampTransform(
 302 |         { scale: fitScale, x: 0, y: 0 },
 303 |         contentWidth,
 304 |         contentHeight,
 305 |         innerWidth,
 306 |         innerHeight,
 307 |       ),
 308 |     [fitScale, contentWidth, contentHeight, innerWidth, innerHeight],
 309 |   );
 310 | 
 311 |   // Whenever the content box or viewport changes (gap update, resize), pull the
 312 |   // current transform back into the valid range and re-clamp its position.
 313 |   useEffect(() => {
 314 |     setTransform((prev) => {
 315 |       const scale = clamp(prev.scale, fitScale, ZOOM_MAX);
 316 |       return clampTransform(
 317 |         { scale, x: prev.x, y: prev.y },
 318 |         contentWidth,
 319 |         contentHeight,
 320 |         innerWidth,
 321 |         innerHeight,
 322 |       );
 323 |     });
 324 |   }, [fitScale, contentWidth, contentHeight, innerWidth, innerHeight]);
 325 | 
 326 |   const normalizedPoints = useMemo(() => {
 327 |     return plotterPoints.map((point) => ({
 328 |       id: point.id,
 329 |       x: point.x,
 330 |       y: point.y,
 331 |       scaledX: point.x,
 332 |       scaledY: point.y,
 333 |       image: point.image,
 334 |       label: point.label,
 335 |       meta: point.meta,
 336 |     }));
 337 |   }, [plotterPoints]);
 338 | 
 339 |   const xExtent = useMemo(
 340 |     () => extentWithPaddingFromPoints(normalizedPoints, (p) => p.scaledX),
 341 |     [normalizedPoints],
 342 |   );
 343 | 
 344 |   const yExtent = useMemo(
 345 |     () => extentWithPaddingFromPoints(normalizedPoints, (p) => p.scaledY),
 346 |     [normalizedPoints],
 347 |   );
 348 | 
 349 |   const { baseXScale, baseYScale } = useMemo(() => {
 350 |     const scaleKey = `${xExtent[0]}-${xExtent[1]}-${yExtent[0]}-${yExtent[1]}-${contentWidth}-${contentHeight}`;
 351 | 
 352 |     if (
 353 |       cachedScalesRef.current.key === scaleKey &&
 354 |       cachedScalesRef.current.xScale &&
 355 |       cachedScalesRef.current.yScale
 356 |     ) {
 357 |       return {
 358 |         baseXScale: cachedScalesRef.current.xScale,
 359 |         baseYScale: cachedScalesRef.current.yScale,
 360 |       };
 361 |     }
 362 | 
 363 |     const xScale = d3.scaleLinear().domain(xExtent).range([0, contentWidth]);
 364 |     const yScale = d3.scaleLinear().domain(yExtent).range([contentHeight, 0]);
 365 | 
 366 |     cachedScalesRef.current = { key: scaleKey, xScale, yScale };
 367 |     return { baseXScale: xScale, baseYScale: yScale };
 368 |   }, [xExtent, yExtent, contentWidth, contentHeight]);
 369 | 
 370 |   const quadtree = useMemo(() => {
 371 |     if (!normalizedPoints.length) return null;
 372 |     return buildQuadtree(normalizedPoints);
 373 |   }, [normalizedPoints]);
 374 | 
 375 |   const viewportCulledPoints = useMemo(() => {
 376 |     if (!quadtree || normalizedPoints.length === 0) {
 377 |       return normalizedPoints;
 378 |     }
 379 | 
 380 |     const xMinPx = (0 - transform.x) / transform.scale;
 381 |     const xMaxPx = (innerWidth - transform.x) / transform.scale;
 382 | 
 383 |     const yMaxPx = (0 - transform.y) / transform.scale;
 384 |     const yMinPx = (innerHeight - transform.y) / transform.scale;
 385 | 
 386 |     const xMin = baseXScale.invert(xMinPx);
 387 |     const xMax = baseXScale.invert(xMaxPx);
 388 | 
 389 |     const yMin = baseYScale.invert(yMinPx);
 390 |     const yMax = baseYScale.invert(yMaxPx);
 391 | 
 392 |     const result = queryVisiblePointsQuadtree(
 393 |       quadtree,
 394 |       { xMin, xMax, yMin, yMax },
 395 |       0,
 396 |     );
 397 | 
 398 |     return Array.isArray(result) && result.length ? result : normalizedPoints;
 399 |   }, [
 400 |     quadtree,
```

### Chunk 3/7

```jsx
 401 |     normalizedPoints,
 402 |     transform.x,
 403 |     transform.scale,
 404 |     transform.y,
 405 |     innerWidth,
 406 |     innerHeight,
 407 |     baseXScale,
 408 |     baseYScale,
 409 |   ]);
 410 | 
 411 |   const visibleDomain = useMemo(
 412 |     () =>
 413 |       computeVisibleDomain(
 414 |         xExtent,
 415 |         yExtent,
 416 |         transform,
 417 |         contentWidth,
 418 |         contentHeight,
 419 |         innerWidth,
 420 |         innerHeight,
 421 |       ),
 422 |     [
 423 |       xExtent,
 424 |       yExtent,
 425 |       transform,
 426 |       contentWidth,
 427 |       contentHeight,
 428 |       innerWidth,
 429 |       innerHeight,
 430 |     ],
 431 |   );
 432 | 
 433 |   const xTicks = useMemo(() => {
 434 |     return d3.ticks(visibleDomain.xMin, visibleDomain.xMax, 8);
 435 |   }, [visibleDomain.xMin, visibleDomain.xMax]);
 436 | 
 437 |   const yTicks = useMemo(() => {
 438 |     return d3.ticks(visibleDomain.yMin, visibleDomain.yMax, 6);
 439 |   }, [visibleDomain.yMin, visibleDomain.yMax]);
 440 | 
 441 |   const xTickScale = useMemo(() => {
 442 |     const scale = d3.scaleLinear();
 443 |     scale.domain([visibleDomain.xMin, visibleDomain.xMax]);
 444 |     scale.range([0, innerWidth]);
 445 |     return scale;
 446 |   }, [visibleDomain.xMin, visibleDomain.xMax, innerWidth]);
 447 | 
 448 |   const yTickScale = useMemo(() => {
 449 |     const scale = d3.scaleLinear();
 450 |     scale.domain([visibleDomain.yMin, visibleDomain.yMax]);
 451 |     scale.range([innerHeight, 0]);
 452 |     return scale;
 453 |   }, [visibleDomain.yMin, visibleDomain.yMax, innerHeight]);
 454 | 
 455 |   const axisProps = useMemo(
 456 |     () => ({
 457 |       xTicks,
 458 |       yTicks,
 459 |       xTickScale,
 460 |       yTickScale,
 461 |       innerWidth,
 462 |       innerHeight,
 463 |     }),
 464 |     [xTicks, yTicks, xTickScale, yTickScale, innerWidth, innerHeight],
 465 |   );
 466 | 
 467 |   const clipId = useMemo(
 468 |     () => `recharts-clip-${String(chartId).replace(/[^a-zA-Z0-9_-]/g, "")}`,
 469 |     [chartId],
 470 |   );
 471 | 
 472 |   const adaptiveCellSizeForRender = useMemo(() => {
 473 |     return computeAdaptiveCellSize(
 474 |       normalizedPoints,
 475 |       (val) => baseXScale(val),
 476 |       (val) => baseYScale(val),
 477 |     );
 478 |   }, [normalizedPoints, baseXScale, baseYScale]);
 479 | 
 480 |   const visiblePointsForRender = useMemo(() => {
 481 |     if (!enableQuadtree) {
 482 |       return normalizedPoints;
 483 |     }
 484 |     return viewportCulledPoints;
 485 |   }, [enableQuadtree, normalizedPoints, viewportCulledPoints]);
 486 | 
 487 |   const renderStats = useMemo(() => {
 488 |     const totalPoints = plotterPoints.length;
 489 |     const viewportCulledCount = Math.max(
 490 |       0,
 491 |       totalPoints - viewportCulledPoints.length,
 492 |     );
 493 |     const renderCulledCount = Math.max(
 494 |       0,
 495 |       viewportCulledPoints.length - visiblePointsForRender.length,
 496 |     );
 497 |     const totalCulledCount = Math.max(
 498 |       0,
 499 |       totalPoints - visiblePointsForRender.length,
 500 |     );
 501 | 
 502 |     return {
 503 |       chartId,
 504 |       totalPoints,
 505 |       afterViewportCulling: viewportCulledPoints.length,
 506 |       renderedPoints: visiblePointsForRender.length,
 507 |       viewportCulledCount,
 508 |       renderCulledCount,
 509 |       totalCulledCount,
 510 |       zoomScale: Number(transform.scale.toFixed(3)),
 511 |     };
 512 |   }, [
 513 |     chartId,
 514 |     plotterPoints.length,
 515 |     viewportCulledPoints.length,
 516 |     visiblePointsForRender.length,
 517 |     transform.scale,
 518 |   ]);
 519 | 
 520 |   const effectiveImageCountForRender = useMemo(() => {
 521 |     if (!enableLOD) {
 522 |       return imageCount;
 523 |     }
 524 | 
 525 |     return Math.max(
 526 |       1,
 527 |       computeEffectiveImageCount(
 528 |         adaptiveCellSizeForRender * transform.scale,
 529 |         imageCount,
 530 |       ),
 531 |     );
 532 |   }, [enableLOD, adaptiveCellSizeForRender, transform.scale, imageCount]);
 533 | 
 534 |   const throttledTransformUpdate = useThrottledCallback(
 535 |     (nextTransform) => setTransform(nextTransform),
 536 |     16,
 537 |   );
 538 | 
 539 |   const scheduleTransformUpdate = useCallback(
 540 |     (nextTransform) => {
 541 |       pendingTransformRef.current = nextTransform;
 542 | 
 543 |       if (rafIdRef.current) return;
 544 | 
 545 |       rafIdRef.current = requestAnimationFrame(() => {
 546 |         rafIdRef.current = null;
 547 | 
 548 |         if (pendingTransformRef.current) {
 549 |           throttledTransformUpdate(pendingTransformRef.current);
 550 |           pendingTransformRef.current = null;
 551 |         }
 552 |       });
 553 |     },
 554 |     [throttledTransformUpdate],
 555 |   );
 556 | 
 557 |   const zoomTo = useCallback(
 558 |     (nextScale, anchorX, anchorY) => {
 559 |       setTransform((prev) => {
 560 |         const clampedScale = clamp(nextScale, fitScale, ZOOM_MAX);
 561 | 
 562 |         const pivotX = Number.isFinite(anchorX) ? anchorX : innerWidth / 2;
 563 |         const pivotY = Number.isFinite(anchorY) ? anchorY : innerHeight / 2;
 564 | 
 565 |         const nextX =
 566 |           prev.x - (pivotX - prev.x) * (clampedScale / prev.scale - 1);
 567 |         const nextY =
 568 |           prev.y - (pivotY - prev.y) * (clampedScale / prev.scale - 1);
 569 | 
 570 |         return clampTransform(
 571 |           { scale: clampedScale, x: nextX, y: nextY },
 572 |           contentWidth,
 573 |           contentHeight,
 574 |           innerWidth,
 575 |           innerHeight,
 576 |         );
 577 |       });
 578 |     },
 579 |     [innerWidth, innerHeight, contentWidth, contentHeight, fitScale],
 580 |   );
 581 | 
 582 |   const handleZoomIn = useCallback(() => {
 583 |     logChartInteractionEvent({
 584 |       interactionType: "ZOOM_IN",
 585 |       visualizationLibrary: "Recharts",
 586 |       interactionSource: "button",
 587 |     });
 588 |     zoomTo(transform.scale * ZOOM_STEP, innerWidth / 2, innerHeight / 2);
 589 |   }, [transform.scale, zoomTo, innerWidth, innerHeight]);
 590 | 
 591 |   const handleZoomOut = useCallback(() => {
 592 |     if (transform.scale <= fitScale + ZOOM_EPS) {
 593 |       return;
 594 |     }
 595 | 
 596 |     logChartInteractionEvent({
 597 |       interactionType: "ZOOM_OUT",
 598 |       visualizationLibrary: "Recharts",
 599 |       interactionSource: "button",
 600 |     });
```

### Chunk 4/7

```jsx
 601 | 
 602 |     zoomTo(transform.scale / ZOOM_STEP, innerWidth / 2, innerHeight / 2);
 603 |   }, [transform.scale, zoomTo, innerWidth, innerHeight, fitScale]);
 604 | 
 605 |   const handleReset = useCallback(() => {
 606 |     logChartInteractionEvent({
 607 |       interactionType: "RESET",
 608 |       visualizationLibrary: "Recharts",
 609 |       interactionSource: "button",
 610 |     });
 611 |     setTransform(homeTransform);
 612 |     setHoveredPoint(null);
 613 |   }, [homeTransform]);
 614 | 
 615 |   const handleWheel = useCallback(
 616 |     (event) => {
 617 |       event.preventDefault();
 618 | 
 619 |       const rect = svgRef.current?.getBoundingClientRect();
 620 |       if (!rect) return;
 621 | 
 622 |       const clientX = event.clientX - rect.left;
 623 |       const clientY = event.clientY - rect.top;
 624 | 
 625 |       const localX = clientX - PLOT_MARGIN.left;
 626 |       const localY = clientY - PLOT_MARGIN.top;
 627 | 
 628 |       if (
 629 |         localX < 0 ||
 630 |         localY < 0 ||
 631 |         localX > innerWidth ||
 632 |         localY > innerHeight
 633 |       ) {
 634 |         return;
 635 |       }
 636 | 
 637 |       const isZoomIn = event.deltaY < 0;
 638 | 
 639 |       if (!isZoomIn && transform.scale <= fitScale + ZOOM_EPS) {
 640 |         return;
 641 |       }
 642 | 
 643 |       logChartInteractionEvent({
 644 |         interactionType: isZoomIn ? "ZOOM_IN" : "ZOOM_OUT",
 645 |         visualizationLibrary: "Recharts",
 646 |         interactionSource: "wheel",
 647 |       });
 648 | 
 649 |       const factor = event.deltaY > 0 ? 1 / ZOOM_STEP : ZOOM_STEP;
 650 | 
 651 |       setTransform((prev) => {
 652 |         const clampedScale = clamp(prev.scale * factor, fitScale, ZOOM_MAX);
 653 | 
 654 |         const nextX =
 655 |           prev.x - (localX - prev.x) * (clampedScale / prev.scale - 1);
 656 |         const nextY =
 657 |           prev.y - (localY - prev.y) * (clampedScale / prev.scale - 1);
 658 |         return clampTransform(
 659 |           { scale: clampedScale, x: nextX, y: nextY },
 660 |           contentWidth,
 661 |           contentHeight,
 662 |           innerWidth,
 663 |           innerHeight,
 664 |         );
 665 |       });
 666 |     },
 667 |     [
 668 |       innerWidth,
 669 |       innerHeight,
 670 |       contentWidth,
 671 |       contentHeight,
 672 |       transform.scale,
 673 |       fitScale,
 674 |     ],
 675 |   );
 676 | 
 677 |   const handlePointerDown = useCallback(
 678 |     (event) => {
 679 |       const rect = svgRef.current?.getBoundingClientRect();
 680 |       if (!rect) return;
 681 | 
 682 |       const localX = event.clientX - rect.left - PLOT_MARGIN.left;
 683 |       const localY = event.clientY - rect.top - PLOT_MARGIN.top;
 684 | 
 685 |       if (
 686 |         localX < 0 ||
 687 |         localY < 0 ||
 688 |         localX > innerWidth ||
 689 |         localY > innerHeight
 690 |       ) {
 691 |         return;
 692 |       }
 693 | 
 694 |       if (isPanMode) {
 695 |         if (transform.scale <= fitScale + ZOOM_EPS) {
 696 |           return;
 697 |         }
 698 |         logChartInteractionEvent({
 699 |           interactionType: "PAN",
 700 |           visualizationLibrary: "Recharts",
 701 |           interactionSource: "drag",
 702 |         });
 703 |         setIsDragging(true);
 704 |         dragRef.current = {
 705 |           dragging: true,
 706 |           pointerId: event.pointerId,
 707 |           startClientX: event.clientX,
 708 |           startClientY: event.clientY,
 709 |           startTransform: transform,
 710 |         };
 711 |         event.currentTarget.setPointerCapture?.(event.pointerId);
 712 |         return;
 713 |       }
 714 | 
 715 |       const clampedX = clamp(localX, 0, innerWidth);
 716 |       const clampedY = clamp(localY, 0, innerHeight);
 717 |       brushStartRef.current = { x: clampedX, y: clampedY };
 718 |       setBrushRect({ x: clampedX, y: clampedY, width: 0, height: 0 });
 719 |       event.currentTarget.setPointerCapture?.(event.pointerId);
 720 |     },
 721 |     [innerWidth, innerHeight, fitScale, transform, isPanMode],
 722 |   );
 723 | 
 724 |   const handlePointerMove = useCallback(
 725 |     (event) => {
 726 |       if (brushStartRef.current) {
 727 |         const rect = svgRef.current?.getBoundingClientRect();
 728 |         if (!rect) return;
 729 | 
 730 |         const localX = clamp(
 731 |           event.clientX - rect.left - PLOT_MARGIN.left,
 732 |           0,
 733 |           innerWidth,
 734 |         );
 735 |         const localY = clamp(
 736 |           event.clientY - rect.top - PLOT_MARGIN.top,
 737 |           0,
 738 |           innerHeight,
 739 |         );
 740 |         const startPoint = brushStartRef.current;
 741 | 
 742 |         setBrushRect({
 743 |           x: Math.min(startPoint.x, localX),
 744 |           y: Math.min(startPoint.y, localY),
 745 |           width: Math.abs(localX - startPoint.x),
 746 |           height: Math.abs(localY - startPoint.y),
 747 |         });
 748 |         return;
 749 |       }
 750 |       const dragState = dragRef.current;
 751 | 
 752 |       if (dragState?.dragging) {
 753 |         if (dragState.pointerId !== event.pointerId) {
 754 |           return;
 755 |         }
 756 | 
 757 |         if (dragState.startTransform.scale <= fitScale + ZOOM_EPS) {
 758 |           dragRef.current = createInitialDragState();
 759 |           setIsDragging(false);
 760 |           setTransform(homeTransform);
 761 |           return;
 762 |         }
 763 | 
 764 |         const dx = event.clientX - dragState.startClientX;
 765 |         const dy = event.clientY - dragState.startClientY;
 766 | 
 767 |         const next = clampTransform(
 768 |           {
 769 |             scale: dragState.startTransform.scale,
 770 |             x: dragState.startTransform.x + dx,
 771 |             y: dragState.startTransform.y + dy,
 772 |           },
 773 |           contentWidth,
 774 |           contentHeight,
 775 |           innerWidth,
 776 |           innerHeight,
 777 |         );
 778 | 
 779 |         scheduleTransformUpdate(next);
 780 |         return;
 781 |       }
 782 | 
 783 |       // --- Hover hit-testing (geometry-based; works for SVG and canvas) ---
 784 |       const rect = svgRef.current?.getBoundingClientRect();
 785 |       if (!rect) return;
 786 | 
 787 |       const hoverLocalX = event.clientX - rect.left - PLOT_MARGIN.left;
 788 |       const hoverLocalY = event.clientY - rect.top - PLOT_MARGIN.top;
 789 | 
 790 |       if (
 791 |         hoverLocalX < 0 ||
 792 |         hoverLocalY < 0 ||
 793 |         hoverLocalX > innerWidth ||
 794 |         hoverLocalY > innerHeight
 795 |       ) {
 796 |         setHoveredPoint((prev) => (prev ? null : prev));
 797 |         return;
 798 |       }
 799 | 
 800 |       // Undo pan/zoom to get content-space coordinates
```

### Chunk 5/7

```jsx
 801 |       const contentX = (hoverLocalX - transform.x) / transform.scale;
 802 |       const contentY = (hoverLocalY - transform.y) / transform.scale;
 803 | 
 804 |       const hitRadius = Math.max(adaptiveCellSizeForRender * 0.6, 4);
 805 |       const hitRadiusSq = hitRadius * hitRadius;
 806 | 
 807 |       let nearest = null;
 808 |       let nearestDistSq = Infinity;
 809 | 
 810 |       for (const p of visiblePointsForRender) {
 811 |         const px = baseXScale(p.scaledX);
 812 |         const py = baseYScale(p.scaledY);
 813 |         const dx = contentX - px;
 814 |         const dy = contentY - py;
 815 |         const distSq = dx * dx + dy * dy;
 816 |         if (distSq <= hitRadiusSq && distSq < nearestDistSq) {
 817 |           nearest = p;
 818 |           nearestDistSq = distSq;
 819 |         }
 820 |       }
 821 | 
 822 |       if (!nearest) {
 823 |         setHoveredPoint((prev) => (prev ? null : prev));
 824 |         return;
 825 |       }
 826 | 
 827 |       setTooltipPosition({
 828 |         x: event.clientX + 12,
 829 |         y: event.clientY + 12,
 830 |       });
 831 | 
 832 |       setHoveredPoint((prev) => (prev?.id === nearest.id ? prev : nearest));
 833 |     },
 834 |     [
 835 |       innerWidth,
 836 |       innerHeight,
 837 |       contentWidth,
 838 |       contentHeight,
 839 |       fitScale,
 840 |       homeTransform,
 841 |       scheduleTransformUpdate,
 842 |       transform,
 843 |       adaptiveCellSizeForRender,
 844 |       visiblePointsForRender,
 845 |       baseXScale,
 846 |       baseYScale,
 847 |     ],
 848 |   );
 849 | 
 850 |   const handlePointerUp = useCallback(
 851 |     (event) => {
 852 |       if (brushStartRef.current && brushRect) {
 853 |         const isTooSmall =
 854 |           brushRect.width < BRUSH_MIN_PIXELS ||
 855 |           brushRect.height < BRUSH_MIN_PIXELS;
 856 | 
 857 |         if (!isTooSmall) {
 858 |           logChartInteractionEvent({
 859 |             interactionType: "ZOOM_IN",
 860 |             visualizationLibrary: "Recharts",
 861 |             interactionSource: "brush",
 862 |           });
 863 |           const newTransform = convertBrushToTransform(
 864 |             brushRect,
 865 |             transform,
 866 |             contentWidth,
 867 |             contentHeight,
 868 |             innerWidth,
 869 |             innerHeight,
 870 |             fitScale,
 871 |           );
 872 | 
 873 |           setTransform(newTransform);
 874 |         }
 875 | 
 876 |         brushStartRef.current = null;
 877 |         setBrushRect(null);
 878 |         event.currentTarget.releasePointerCapture?.(event.pointerId);
 879 |         return;
 880 |       }
 881 |       setIsDragging(false);
 882 | 
 883 |       const dragState = dragRef.current;
 884 | 
 885 |       if (dragState?.dragging && transform.scale <= fitScale + ZOOM_EPS) {
 886 |         setTransform(homeTransform);
 887 |       }
 888 | 
 889 |       dragRef.current = createInitialDragState();
 890 |       event.currentTarget.releasePointerCapture?.(event.pointerId);
 891 |     },
 892 |     [
 893 |       brushRect,
 894 |       transform,
 895 |       innerWidth,
 896 |       innerHeight,
 897 |       contentWidth,
 898 |       contentHeight,
 899 |       fitScale,
 900 |       homeTransform,
 901 |     ],
 902 |   );
 903 | 
 904 |   useEffect(() => {
 905 |     console.log("[RechartsPlotter] point stats", renderStats);
 906 |   }, [renderStats]);
 907 | 
 908 |   useEffect(() => {
 909 |     return () => {
 910 |       if (rafIdRef.current) {
 911 |         cancelAnimationFrame(rafIdRef.current);
 912 |         rafIdRef.current = null;
 913 |       }
 914 |       dragRef.current = createInitialDragState();
 915 |       brushStartRef.current = null;
 916 |       cachedScalesRef.current = { key: null, xScale: null, yScale: null };
 917 |       pendingTransformRef.current = null;
 918 |     };
 919 |   }, []);
 920 | 
 921 |   useEffect(() => {
 922 |     const svgElement = svgRef.current;
 923 | 
 924 |     if (!svgElement) return;
 925 | 
 926 |     const wheelHandler = (event) => {
 927 |       event.preventDefault();
 928 |       handleWheel(event);
 929 |     };
 930 | 
 931 |     svgElement.addEventListener("wheel", wheelHandler, {
 932 |       passive: false,
 933 |     });
 934 | 
 935 |     return () => {
 936 |       svgElement.removeEventListener("wheel", wheelHandler);
 937 |     };
 938 |   }, [handleWheel]);
 939 | 
 940 |   const handleDoubleClick = useCallback(() => {
 941 |     logChartInteractionEvent({
 942 |       interactionType: "RESET",
 943 |       visualizationLibrary: "Recharts",
 944 |       interactionSource: "double_click",
 945 |     });
 946 |     setTransform(homeTransform);
 947 |     setHoveredPoint(null);
 948 |   }, [homeTransform]);
 949 | 
 950 |   const stageCursor = isPanMode
 951 |     ? isDragging
 952 |       ? "grabbing"
 953 |       : "grab"
 954 |     : "crosshair";
 955 | 
 956 |   const contentTransform = `translate(${transform.x}, ${transform.y}) scale(${transform.scale})`;
 957 |   return (
 958 |     <div ref={containerRef} style={{ position: "relative", width: "100%" }}>
 959 |       <ControlsLayer
 960 |         zoomLevel={transform.scale / fitScale}
 961 |         onZoomIn={handleZoomIn}
 962 |         onZoomOut={handleZoomOut}
 963 |         onReset={handleReset}
 964 |         interactionMode={interactionMode}
 965 |         onModeChange={setInteractionMode}
 966 |       />
 967 | 
 968 |       <div style={{ position: "relative", width: "100%" }}>
 969 |         {enableCanvas ? (
 970 |           <ImageCanvasLayer
 971 |             points={visiblePointsForRender}
 972 |             baseXScale={baseXScale}
 973 |             baseYScale={baseYScale}
 974 |             cellSize={adaptiveCellSizeForRender}
 975 |             transform={transform}
 976 |             imageCount={effectiveImageCountForRender}
 977 |           />
 978 |         ) : (
 979 |           <svg
 980 |             width={containerWidth}
 981 |             height={height}
 982 |             style={{
 983 |               position: "absolute",
 984 |               top: 0,
 985 |               left: 0,
 986 |               pointerEvents: "none",
 987 |             }}
 988 |           >
 989 |             <defs>
 990 |               <clipPath id={`${clipId}-img`}>
 991 |                 <rect
 992 |                   x={PLOT_MARGIN.left}
 993 |                   y={PLOT_MARGIN.top}
 994 |                   width={innerWidth}
 995 |                   height={innerHeight}
 996 |                 />
 997 |               </clipPath>
 998 |             </defs>
 999 |             <g clipPath={`url(#${clipId}-img)`}>
1000 |               <g
```

### Chunk 6/7

```jsx
1001 |                 transform={`translate(${PLOT_MARGIN.left},${PLOT_MARGIN.top})`}
1002 |               >
1003 |                 <SvgImageLayer
1004 |                   points={visiblePointsForRender}
1005 |                   baseXScale={baseXScale}
1006 |                   baseYScale={baseYScale}
1007 |                   cellSize={adaptiveCellSizeForRender}
1008 |                   transform={transform}
1009 |                   imageCount={effectiveImageCountForRender}
1010 |                 />
1011 |               </g>
1012 |             </g>
1013 |           </svg>
1014 |         )}
1015 | 
1016 |         <svg
1017 |           ref={svgRef}
1018 |           width={containerWidth}
1019 |           height={height}
1020 |           style={{
1021 |             display: "block",
1022 |             touchAction: "none",
1023 |             userSelect: "none",
1024 |             cursor: stageCursor,
1025 |           }}
1026 |           onPointerDown={handlePointerDown}
1027 |           onPointerMove={handlePointerMove}
1028 |           onPointerUp={handlePointerUp}
1029 |           onPointerLeave={handlePointerUp}
1030 |           onPointerCancel={handlePointerUp}
1031 |           onDoubleClick={handleDoubleClick}
1032 |         >
1033 |           <defs>
1034 |             <clipPath id={clipId}>
1035 |               <rect
1036 |                 x={PLOT_MARGIN.left}
1037 |                 y={PLOT_MARGIN.top}
1038 |                 width={innerWidth}
1039 |                 height={innerHeight}
1040 |               />
1041 |             </clipPath>
1042 |           </defs>
1043 | 
1044 |           <rect
1045 |             x={0}
1046 |             y={0}
1047 |             width={containerWidth}
1048 |             height={height}
1049 |             fill="#16213e"
1050 |           />
1051 | 
1052 |           <g transform={`translate(${PLOT_MARGIN.left},${PLOT_MARGIN.top})`}>
1053 |             <rect
1054 |               x={0}
1055 |               y={0}
1056 |               width={innerWidth}
1057 |               height={innerHeight}
1058 |               fill="#16213e"
1059 |             />
1060 | 
1061 |             <AxisGrid {...axisProps} />
1062 | 
1063 |             <AxisLabels {...axisProps} />
1064 | 
1065 |             <g clipPath={`url(#${clipId})`}>
1066 |               <g transform={contentTransform}></g>
1067 |             </g>
1068 | 
1069 |             <rect
1070 |               x={0}
1071 |               y={0}
1072 |               width={innerWidth}
1073 |               height={innerHeight}
1074 |               fill="transparent"
1075 |               stroke="#555"
1076 |               pointerEvents="none"
1077 |             />
1078 |           </g>
1079 |         </svg>
1080 | 
1081 |         {brushRect && brushRect.width > 0 && brushRect.height > 0 && (
1082 |           <svg
1083 |             width={containerWidth}
1084 |             height={height}
1085 |             style={{
1086 |               position: "absolute",
1087 |               top: 0,
1088 |               left: 0,
1089 |               pointerEvents: "none",
1090 |               zIndex: 5,
1091 |             }}
1092 |           >
1093 |             <g transform={`translate(${PLOT_MARGIN.left},${PLOT_MARGIN.top})`}>
1094 |               <rect
1095 |                 x={brushRect.x}
1096 |                 y={brushRect.y}
1097 |                 width={brushRect.width}
1098 |                 height={brushRect.height}
1099 |                 fill={BRUSH_FILL}
1100 |                 stroke={BRUSH_STROKE}
1101 |                 strokeWidth={BRUSH_STROKE_WIDTH}
1102 |                 rx={2}
1103 |                 ry={2}
1104 |               />
1105 |             </g>
1106 |           </svg>
1107 |         )}
1108 |       </div>
1109 | 
1110 |       <TooltipOverlay
1111 |         hoveredPoint={hoveredPoint}
1112 |         tooltipRef={tooltipRef}
1113 |         position={tooltipPosition}
1114 |       />
1115 |     </div>
1116 |   );
1117 | }
1118 | 
1119 | const AxisGrid = memo(function AxisGrid({
1120 |   xTicks,
1121 |   yTicks,
1122 |   xTickScale,
1123 |   yTickScale,
1124 |   innerWidth,
1125 |   innerHeight,
1126 | }) {
1127 |   return (
1128 |     <>
1129 |       {xTicks.map((tick, index) => {
1130 |         const x = xTickScale(tick);
1131 |         return (
1132 |           <line
1133 |             key={`xgrid-${index}`}
1134 |             x1={x}
1135 |             y1={0}
1136 |             x2={x}
1137 |             y2={innerHeight}
1138 |             stroke="#2a2a3e"
1139 |             strokeDasharray="3 3"
1140 |           />
1141 |         );
1142 |       })}
1143 | 
1144 |       {yTicks.map((tick, index) => {
1145 |         const y = yTickScale(tick);
1146 |         return (
1147 |           <line
1148 |             key={`ygrid-${index}`}
1149 |             x1={0}
1150 |             y1={y}
1151 |             x2={innerWidth}
1152 |             y2={y}
1153 |             stroke="#2a2a3e"
1154 |             strokeDasharray="3 3"
1155 |           />
1156 |         );
1157 |       })}
1158 |     </>
1159 |   );
1160 | });
1161 | 
1162 | const AxisLabels = memo(function AxisLabels({
1163 |   xTicks,
1164 |   yTicks,
1165 |   xTickScale,
1166 |   yTickScale,
1167 |   innerHeight,
1168 | }) {
1169 |   return (
1170 |     <>
1171 |       {xTicks.map((tick, index) => {
1172 |         const x = xTickScale(tick);
1173 |         return (
1174 |           <text
1175 |             key={`xlabel-${index}`}
1176 |             x={x}
1177 |             y={innerHeight + 18}
1178 |             fill="#888"
1179 |             fontSize="11"
1180 |             textAnchor="middle"
1181 |           >
1182 |             {formatTick(tick)}
1183 |           </text>
1184 |         );
1185 |       })}
1186 | 
1187 |       {yTicks.map((tick, index) => {
1188 |         const y = yTickScale(tick);
1189 |         return (
1190 |           <text
1191 |             key={`ylabel-${index}`}
1192 |             x={-8}
1193 |             y={y + 4}
1194 |             fill="#888"
1195 |             fontSize="11"
1196 |             textAnchor="end"
1197 |           >
1198 |             {formatTick(tick)}
1199 |           </text>
1200 |         );
```

### Chunk 7/7

```jsx
1201 |       })}
1202 |     </>
1203 |   );
1204 | });
1205 | 
1206 | function extentWithPaddingFromPoints(points, accessor) {
1207 |   if (!points.length) return [0, 1];
1208 | 
1209 |   let min = Infinity;
1210 |   let max = -Infinity;
1211 | 
1212 |   for (const point of points) {
1213 |     const value = accessor(point);
1214 | 
1215 |     if (value < min) min = value;
1216 |     if (value > max) max = value;
1217 |   }
1218 | 
1219 |   const span = max - min;
1220 |   const pad = span === 0 ? 5 : Math.max(span * 0.18, 1);
1221 | 
1222 |   return [min - pad, max + pad];
1223 | }
1224 | 
1225 | function computeVisibleDomain(
1226 |   xExtent,
1227 |   yExtent,
1228 |   transform,
1229 |   contentWidth,
1230 |   contentHeight,
1231 |   viewWidth,
1232 |   viewHeight,
1233 | ) {
1234 |   const domainWidth = xExtent[1] - xExtent[0];
1235 |   const domainHeight = yExtent[1] - yExtent[0];
1236 | 
1237 |   const xMin =
1238 |     xExtent[0] - (transform.x / transform.scale / contentWidth) * domainWidth;
1239 |   const xMax =
1240 |     xMin + (viewWidth / transform.scale / contentWidth) * domainWidth;
1241 | 
1242 |   const yMax =
1243 |     yExtent[1] + (transform.y / transform.scale / contentHeight) * domainHeight;
1244 |   const yMin =
1245 |     yMax - (viewHeight / transform.scale / contentHeight) * domainHeight;
1246 | 
1247 |   return { xMin, xMax, yMin, yMax };
1248 | }
1249 | 
1250 | function clampTransform(
1251 |   transform,
1252 |   contentWidth,
1253 |   contentHeight,
1254 |   viewWidth,
1255 |   viewHeight,
1256 | ) {
1257 |   const scale = transform.scale;
1258 | 
1259 |   const scaledWidth = contentWidth * scale;
1260 |   const scaledHeight = contentHeight * scale;
1261 | 
1262 |   let x = transform.x;
1263 |   let y = transform.y;
1264 | 
1265 |   if (scaledWidth <= viewWidth) {
1266 |     x = (viewWidth - scaledWidth) / 2;
1267 |   } else {
1268 |     x = Math.min(0, Math.max(viewWidth - scaledWidth, x));
1269 |   }
1270 | 
1271 |   if (scaledHeight <= viewHeight) {
1272 |     y = (viewHeight - scaledHeight) / 2;
1273 |   } else {
1274 |     y = Math.min(0, Math.max(viewHeight - scaledHeight, y));
1275 |   }
1276 | 
1277 |   return { scale, x, y };
1278 | }
1279 | 
1280 | function clamp(value, min, max) {
1281 |   return Math.max(min, Math.min(max, value));
1282 | }
1283 | 
1284 | function convertBrushToTransform(
1285 |   brushPixelRect,
1286 |   currentTransform,
1287 |   contentWidth,
1288 |   contentHeight,
1289 |   plotInnerWidth,
1290 |   plotInnerHeight,
1291 |   minScale,
1292 | ) {
1293 |   const contentX0 =
1294 |     (brushPixelRect.x - currentTransform.x) / currentTransform.scale;
1295 |   const contentY0 =
1296 |     (brushPixelRect.y - currentTransform.y) / currentTransform.scale;
1297 |   const contentBrushWidth = brushPixelRect.width / currentTransform.scale;
1298 |   const contentBrushHeight = brushPixelRect.height / currentTransform.scale;
1299 | 
1300 |   const fitScaleX = plotInnerWidth / contentBrushWidth;
1301 |   const fitScaleY = plotInnerHeight / contentBrushHeight;
1302 |   const newScale = clamp(Math.min(fitScaleX, fitScaleY), minScale, ZOOM_MAX);
1303 | 
1304 |   const rawX = -contentX0 * newScale;
1305 |   const rawY = -contentY0 * newScale;
1306 | 
1307 |   return clampTransform(
1308 |     { scale: newScale, x: rawX, y: rawY },
1309 |     contentWidth,
1310 |     contentHeight,
1311 |     plotInnerWidth,
1312 |     plotInnerHeight,
1313 |   );
1314 | }
1315 | 
1316 | function formatTick(value) {
1317 |   if (Number.isInteger(value)) return String(value);
1318 |   return parseFloat(Number(value).toPrecision(4)).toString();
1319 | }
1320 | 
1321 | export default RechartsPlotter;
1322 | 
```


---

## 📄 src\lib\chartInteractionLogger.js
**hash:** `7d118731`

### Chunk 1/1

```javascript
   1 | export function logChartInteractionEvent({
   2 |   interactionType,
   3 |   visualizationLibrary,
   4 |   interactionSource,
   5 | }) {
   6 |   console.log({
   7 |     type: interactionType,
   8 |     library: visualizationLibrary,
   9 |     source: interactionSource,
  10 |   });
  11 | }
  12 | 
```


---

## 📄 src\lib\chartViewportStore.js
**hash:** `1630584`

### Chunk 1/1

```javascript
   1 | const viewportStore = new Map();
   2 | 
   3 | /**
   4 |  * DEFAULT VIEWPORT
   5 |  */
   6 | const DEFAULT_VIEWPORT = {
   7 |   scale: 1,
   8 | 
   9 |   translateX: 0,
  10 |   translateY: 0,
  11 | 
  12 |   xDomain: null,
  13 |   yDomain: null,
  14 | 
  15 |   baseCellSize: null,
  16 | 
  17 |   originalDomainSpanX: null,
  18 |   originalDomainSpanY: null,
  19 | 
  20 |   stageX: 0,
  21 |   stageY: 0,
  22 | 
  23 |   cameraX: 0,
  24 |   cameraY: 0,
  25 | };
  26 | 
  27 | /**
  28 |  * GET VIEWPORT
  29 |  */
  30 | export function getChartViewport(chartId) {
  31 |   if (!viewportStore.has(chartId)) {
  32 |     viewportStore.set(chartId, {
  33 |       ...DEFAULT_VIEWPORT,
  34 |     });
  35 |   }
  36 | 
  37 |   return viewportStore.get(chartId);
  38 | }
  39 | 
  40 | /**
  41 |  * UPDATE VIEWPORT
  42 |  */
  43 | export function updateChartViewport(chartId, updates) {
  44 |   const current = getChartViewport(chartId);
  45 | 
  46 |   viewportStore.set(chartId, {
  47 |     ...current,
  48 |     ...updates,
  49 |   });
  50 | }
  51 | 
  52 | export function removeChartViewport(chartId) {
  53 |   if (!chartId) return;
  54 |   viewportStore.delete(chartId);
  55 | }
  56 | 
  57 | export function retainOnlyChartViewports(activeChartIds) {
  58 |   const activeSet = new Set(activeChartIds);
  59 | 
  60 |   for (const chartId of viewportStore.keys()) {
  61 |     if (!activeSet.has(chartId)) {
  62 |       viewportStore.delete(chartId);
  63 |     }
  64 |   }
  65 | }
  66 | 
  67 | export function getViewportStoreSize() {
  68 |   return viewportStore.size;
  69 | }
  70 | 
  71 | /**
  72 |  * CLEAR ALL
  73 |  */
  74 | export function clearViewportStore() {
  75 |   viewportStore.clear();
  76 | }
  77 | 
```


---

## 📄 src\lib\constants.js
**hash:** `18d38633`

### Chunk 1/1

```javascript
   1 | export const LIBRARIES = [
   2 |   "Recharts",
   3 |   "D3",
   4 |   "PixiJS",
   5 |   "Konva",
   6 |   "DeckGL",
   7 |   "ECharts",
   8 | ];
   9 | 
  10 | export const DISABLED_LIBRARIES = ["DeckGL", "ECharts"];
  11 | 
  12 | export const MIN_IMAGES_PER_POINT = 1;
  13 | export const MAX_IMAGES_PER_POINT = 8;
  14 | 
  15 | // Allowed images-per-point values shown in the selector.
  16 | export const IMAGE_COUNT_OPTIONS = [1, 2, 4, 6, 8];
  17 | 
  18 | export const DATA_POINT_LIMITS = {
  19 |   min: 1,
  20 |   max: 1000,
  21 |   defaultCount: 100,
  22 | };
  23 | 
  24 | export const CELL_SIZE = 50;
  25 | export const IMAGE_PADDING = 0.9;
  26 | 
  27 | export const ADAPTIVE_CELL_SIZE = {
  28 |   max: 50,
  29 |   min: 4,
  30 |   gapRatio: 0.55,
  31 |   collapseThreshold: 0,
  32 | };
  33 | 
  34 | export const PLOT_DIMENSIONS = {
  35 |   width: 900,
  36 |   height: 600,
  37 | };
  38 | 
  39 | export const PLOT_MARGIN = {
  40 |   top: 20,
  41 |   right: 20,
  42 |   bottom: 40,
  43 |   left: 50,
  44 | };
  45 | 
  46 | export const DATA_URL = "/data/data.json";
  47 | 
  48 | export const BRUSH_ZOOM = {
  49 |   fill: "rgba(68, 147, 255, 0.15)",
  50 |   stroke: "#4493ff",
  51 |   strokeWidth: 1.5,
  52 |   minimumSelectionPixels: 5,
  53 | };
  54 | 
  55 | export const ZOOM_SCALE_FACTOR = 1.5;
  56 | export const WHEEL_ZOOM_SENSITIVITY = 0.002;
  57 | export const MAX_RENDER_IMAGES = 50000;
  58 | 
```


---

## 📄 src\lib\debouncedHooks.js
**hash:** `3e30c2ae`

### Chunk 1/1

```javascript
   1 | /**
   2 |  * Custom hook for debounced state updates
   3 |  * Reduces render frequency during rapid interactions (pan, zoom, hover)
   4 |  * Returns [state, setState, flush] where flush forces immediate update
   5 |  */
   6 | 
   7 | import { useCallback, useRef, useEffect, useState } from "react";
   8 | 
   9 | export function useDebouncedState(initialValue, delay = 50) {
  10 |   const [state, setState] = useState(initialValue);
  11 |   const timeoutRef = useRef(null);
  12 |   const pendingRef = useRef(null);
  13 | 
  14 |   const setDebouncedState = useCallback(
  15 |     (newValue) => {
  16 |       // Store pending value
  17 |       pendingRef.current = newValue;
  18 | 
  19 |       // Clear existing timeout
  20 |       if (timeoutRef.current) {
  21 |         clearTimeout(timeoutRef.current);
  22 |       }
  23 | 
  24 |       // Set new timeout
  25 |       timeoutRef.current = setTimeout(() => {
  26 |         if (pendingRef.current !== null) {
  27 |           setState(pendingRef.current);
  28 |           pendingRef.current = null;
  29 |           timeoutRef.current = null;
  30 |         }
  31 |       }, delay);
  32 |     },
  33 |     [delay],
  34 |   );
  35 | 
  36 |   /**
  37 |    * Force immediate flush of pending state
  38 |    */
  39 |   const flush = useCallback(() => {
  40 |     if (timeoutRef.current) {
  41 |       clearTimeout(timeoutRef.current);
  42 |       timeoutRef.current = null;
  43 |     }
  44 | 
  45 |     if (pendingRef.current !== null) {
  46 |       setState(pendingRef.current);
  47 |       pendingRef.current = null;
  48 |     }
  49 |   }, []);
  50 | 
  51 |   /**
  52 |    * Cleanup on unmount
  53 |    */
  54 |   useEffect(() => {
  55 |     return () => {
  56 |       if (timeoutRef.current) {
  57 |         clearTimeout(timeoutRef.current);
  58 |         timeoutRef.current = null;
  59 |       }
  60 |     };
  61 |   }, []);
  62 | 
  63 |   return [state, setDebouncedState, flush];
  64 | }
  65 | 
  66 | /**
  67 |  * Custom hook for debounced callbacks
  68 |  * Prevents callback from being called too frequently
  69 |  */
  70 | export function useDebouncedCallback(callback, delay = 50) {
  71 |   const timeoutRef = useRef(null);
  72 |   const callbackRef = useRef(callback);
  73 | 
  74 |   // Update callback ref when callback changes
  75 |   useEffect(() => {
  76 |     callbackRef.current = callback;
  77 |   }, [callback]);
  78 | 
  79 |   const debouncedCallback = useCallback(
  80 |     (...args) => {
  81 |       if (timeoutRef.current) {
  82 |         clearTimeout(timeoutRef.current);
  83 |       }
  84 | 
  85 |       timeoutRef.current = setTimeout(() => {
  86 |         callbackRef.current(...args);
  87 |         timeoutRef.current = null;
  88 |       }, delay);
  89 |     },
  90 |     [delay],
  91 |   );
  92 | 
  93 |   /**
  94 |    * Cleanup on unmount
  95 |    */
  96 |   useEffect(() => {
  97 |     return () => {
  98 |       if (timeoutRef.current) {
  99 |         clearTimeout(timeoutRef.current);
 100 |         timeoutRef.current = null;
 101 |       }
 102 |     };
 103 |   }, []);
 104 | 
 105 |   return debouncedCallback;
 106 | }
 107 | 
 108 | /**
 109 |  * Custom hook for throttled callbacks
 110 |  * Calls callback at most once every `interval` milliseconds
 111 |  */
 112 | export function useThrottledCallback(callback, interval = 50) {
 113 |   const timeoutRef = useRef(null);
 114 |   const lastCallRef = useRef(0);
 115 |   const callbackRef = useRef(callback);
 116 | 
 117 |   // Update callback ref when callback changes
 118 |   useEffect(() => {
 119 |     callbackRef.current = callback;
 120 |   }, [callback]);
 121 | 
 122 |   const throttledCallback = useCallback(
 123 |     (...args) => {
 124 |       const now = Date.now();
 125 |       const timeSinceLastCall = now - lastCallRef.current;
 126 | 
 127 |       const execute = () => {
 128 |         lastCallRef.current = Date.now();
 129 |         callbackRef.current(...args);
 130 |       };
 131 | 
 132 |       if (timeSinceLastCall >= interval) {
 133 |         execute();
 134 |       } else {
 135 |         if (timeoutRef.current) {
 136 |           clearTimeout(timeoutRef.current);
 137 |         }
 138 | 
 139 |         timeoutRef.current = setTimeout(execute, interval - timeSinceLastCall);
 140 |       }
 141 |     },
 142 |     [interval],
 143 |   );
 144 | 
 145 |   /**
 146 |    * Cleanup on unmount
 147 |    */
 148 |   useEffect(() => {
 149 |     return () => {
 150 |       if (timeoutRef.current) {
 151 |         clearTimeout(timeoutRef.current);
 152 |         timeoutRef.current = null;
 153 |       }
 154 |     };
 155 |   }, []);
 156 | 
 157 |   return throttledCallback;
 158 | }
 159 | 
 160 | /**
 161 |  * Custom hook for interaction debouncing
 162 |  * Specific hook for zoom/pan interactions to reduce render churn
 163 |  */
 164 | export function useInteractionDebounce(delay = 40) {
 165 |   const [isInteracting, setIsInteracting] = useState(false);
 166 |   const timeoutRef = useRef(null);
 167 | 
 168 |   const startInteraction = useCallback(() => {
 169 |     if (!isInteracting) {
 170 |       setIsInteracting(true);
 171 |     }
 172 | 
 173 |     if (timeoutRef.current) {
 174 |       clearTimeout(timeoutRef.current);
 175 |     }
 176 | 
 177 |     timeoutRef.current = setTimeout(() => {
 178 |       setIsInteracting(false);
 179 |       timeoutRef.current = null;
 180 |     }, delay);
 181 |   }, [isInteracting, delay]);
 182 | 
 183 |   useEffect(() => {
 184 |     return () => {
 185 |       if (timeoutRef.current) {
 186 |         clearTimeout(timeoutRef.current);
 187 |       }
 188 |     };
 189 |   }, []);
 190 | 
 191 |   return { isInteracting, startInteraction };
 192 | }
 193 | 
```


---

## 📄 src\lib\densityLayout.js
**hash:** `44aee157`

### Chunk 1/2

```javascript
   1 | import { ADAPTIVE_CELL_SIZE } from "./constants";
   2 | 
   3 | /**
   4 |  * Computes an image cell size that prevents overlap by adapting to
   5 |  * the density of points in the current viewport's pixel-space.
   6 |  *
   7 |  * Uses a grid-bucket spatial index for O(n) nearest-neighbor estimation.
   8 |  *
   9 |  * @param {Array}    plotterPoints - Array of { x, y, ... } data objects
  10 |  * @param {Function} xScaleFn     - Converts data-x → pixel-x
  11 |  * @param {Function} yScaleFn     - Converts data-y → pixel-y
  12 |  * @returns {number} Optimal cell size in pixels
  13 |  */
  14 | export function computeAdaptiveCellSize(plotterPoints, xScaleFn, yScaleFn) {
  15 |   if (plotterPoints.length <= 1) {
  16 |     return ADAPTIVE_CELL_SIZE.max;
  17 |   }
  18 | 
  19 |   const pixelPositions = projectPointsToPixels(
  20 |     plotterPoints,
  21 |     xScaleFn,
  22 |     yScaleFn,
  23 |   );
  24 |   const medianDistance = estimateMedianNeighborDistance(pixelPositions);
  25 | 
  26 |   if (medianDistance <= 0) {
  27 |     return ADAPTIVE_CELL_SIZE.min;
  28 |   }
  29 | 
  30 |   const desiredSize = medianDistance * ADAPTIVE_CELL_SIZE.gapRatio;
  31 |   const clampedSize = clampCellSize(desiredSize);
  32 | 
  33 |   /* Hard ceiling: cell size must NEVER exceed the actual neighbor distance.
  34 |      This guarantees zero overlap even if the min floor is too high. */
  35 |   return Math.min(clampedSize, medianDistance * ADAPTIVE_CELL_SIZE.gapRatio);
  36 | }
  37 | 
  38 | /**
  39 |  * Filters points to only those visible within the viewport bounds,
  40 |  * plus a margin equal to one cell size on each side.
  41 |  *
  42 |  * @param {Array}    plotterPoints   - Full array of data points
  43 |  * @param {Function} xScaleFn       - Converts data-x → pixel-x
  44 |  * @param {Function} yScaleFn       - Converts data-y → pixel-y
  45 |  * @param {number}   viewportWidth  - Viewport width in pixels
  46 |  * @param {number}   viewportHeight - Viewport height in pixels
  47 |  * @param {number}   cellMargin     - Extra margin (half cell size) for edge points
  48 |  * @returns {Array} Subset of plotterPoints within the visible area
  49 |  */
  50 | export function filterVisiblePoints(
  51 |   plotterPoints,
  52 |   xScaleFn,
  53 |   yScaleFn,
  54 |   viewportWidth,
  55 |   viewportHeight,
  56 |   cellMargin,
  57 | ) {
  58 |   const boundsLeft = -cellMargin;
  59 |   const boundsTop = -cellMargin;
  60 |   const boundsRight = viewportWidth + cellMargin;
  61 |   const boundsBottom = viewportHeight + cellMargin;
  62 | 
  63 |   return plotterPoints.filter((point) => {
  64 |     const pixelX = xScaleFn(point.scaledX ?? point.x);
  65 |     const pixelY = yScaleFn(point.scaledY ?? point.y);
  66 | 
  67 |     return (
  68 |       pixelX >= boundsLeft &&
  69 |       pixelX <= boundsRight &&
  70 |       pixelY >= boundsTop &&
  71 |       pixelY <= boundsBottom
  72 |     );
  73 |   });
  74 | }
  75 | 
  76 | /**
  77 |  * Always preserve requested image count.
  78 |  * We scale image sizes instead of collapsing image count.
  79 |  */
  80 | export function computeEffectiveImageCount(adaptiveCellSize, imageCount) {
  81 |   const parsed = Number(imageCount);
  82 | 
  83 |   if (Number.isNaN(parsed)) {
  84 |     return 1;
  85 |   }
  86 | 
  87 |   return Math.max(1, Math.min(8, Math.floor(parsed)));
  88 | }
  89 | 
  90 | /* ─── Internal: Pixel Projection ────────────────────────────────── */
  91 | 
  92 | function projectPointsToPixels(plotterPoints, xScaleFn, yScaleFn) {
  93 |   return plotterPoints.map((point) => ({
  94 |     x: xScaleFn(point.scaledX ?? point.x),
  95 |     y: yScaleFn(point.scaledY ?? point.y),
  96 |   }));
  97 | }
  98 | 
  99 | /* ─── Internal: Median Nearest-Neighbor Distance ────────────────── */
 100 | 
 101 | function estimateMedianNeighborDistance(pixelPositions) {
 102 |   if (pixelPositions.length <= 1) {
 103 |     return ADAPTIVE_CELL_SIZE.max;
 104 |   }
 105 | 
 106 |   const neighborDistances = collectNearestNeighborDistances(pixelPositions);
 107 | 
 108 |   if (neighborDistances.length === 0) {
 109 |     return ADAPTIVE_CELL_SIZE.max;
 110 |   }
 111 | 
 112 |   neighborDistances.sort((a, b) => a - b);
 113 | 
 114 |   const medianIndex = Math.floor(neighborDistances.length / 2);
 115 |   return neighborDistances[medianIndex];
 116 | }
 117 | 
 118 | /* ─── Internal: Grid-Bucket Spatial Index ───────────────────────── */
 119 | 
 120 | /**
 121 |  * Computes nearest-neighbor distance for each point using a spatial
 122 |  * grid bucket approach. Average complexity is O(n).
 123 |  */
 124 | function collectNearestNeighborDistances(pixelPositions) {
 125 |   const bounds = computePixelBounds(pixelPositions);
 126 |   const bucketSize = estimateBucketSize(bounds, pixelPositions.length);
 127 | 
 128 |   if (bucketSize <= 0) {
 129 |     return [];
 130 |   }
 131 | 
 132 |   const grid = buildSpatialGrid(pixelPositions, bounds, bucketSize);
 133 |   const distances = [];
 134 | 
 135 |   for (let pointIndex = 0; pointIndex < pixelPositions.length; pointIndex++) {
 136 |     const nearestDistance = findNearestNeighborDistance(
 137 |       pixelPositions,
 138 |       pointIndex,
 139 |       grid,
 140 |       bounds,
 141 |       bucketSize,
 142 |     );
 143 | 
 144 |     if (nearestDistance < Infinity) {
 145 |       distances.push(nearestDistance);
 146 |     }
 147 |   }
 148 | 
 149 |   return distances;
 150 | }
 151 | 
 152 | function computePixelBounds(pixelPositions) {
 153 |   let minX = Infinity;
 154 |   let minY = Infinity;
 155 |   let maxX = -Infinity;
 156 |   let maxY = -Infinity;
 157 | 
 158 |   for (const position of pixelPositions) {
 159 |     if (position.x < minX) minX = position.x;
 160 |     if (position.x > maxX) maxX = position.x;
 161 |     if (position.y < minY) minY = position.y;
 162 |     if (position.y > maxY) maxY = position.y;
 163 |   }
 164 | 
 165 |   return { minX, minY, maxX, maxY };
 166 | }
 167 | 
 168 | function estimateBucketSize(bounds, pointCount) {
 169 |   const spanX = Math.max(bounds.maxX - bounds.minX, 1);
 170 |   const spanY = Math.max(bounds.maxY - bounds.minY, 1);
 171 |   return Math.sqrt((spanX * spanY) / pointCount) * 2;
 172 | }
 173 | 
 174 | function buildSpatialGrid(pixelPositions, bounds, bucketSize) {
 175 |   const grid = new Map();
 176 | 
 177 |   for (let index = 0; index < pixelPositions.length; index++) {
 178 |     const col = Math.floor(
 179 |       (pixelPositions[index].x - bounds.minX) / bucketSize,
 180 |     );
 181 |     const row = Math.floor(
 182 |       (pixelPositions[index].y - bounds.minY) / bucketSize,
 183 |     );
 184 |     const cellKey = `${col},${row}`;
 185 | 
 186 |     if (!grid.has(cellKey)) {
 187 |       grid.set(cellKey, []);
 188 |     }
 189 | 
 190 |     grid.get(cellKey).push(index);
 191 |   }
 192 | 
 193 |   return grid;
 194 | }
 195 | 
 196 | function findNearestNeighborDistance(
 197 |   pixelPositions,
 198 |   targetIndex,
 199 |   grid,
 200 |   bounds,
```

### Chunk 2/2

```javascript
 201 |   bucketSize,
 202 | ) {
 203 |   const targetPoint = pixelPositions[targetIndex];
 204 |   const centerCol = Math.floor((targetPoint.x - bounds.minX) / bucketSize);
 205 |   const centerRow = Math.floor((targetPoint.y - bounds.minY) / bucketSize);
 206 | 
 207 |   let nearestDistanceSquared = Infinity;
 208 | 
 209 |   for (let deltaCol = -1; deltaCol <= 1; deltaCol++) {
 210 |     for (let deltaRow = -1; deltaRow <= 1; deltaRow++) {
 211 |       const cellKey = `${centerCol + deltaCol},${centerRow + deltaRow}`;
 212 |       const cellIndices = grid.get(cellKey);
 213 | 
 214 |       if (!cellIndices) continue;
 215 | 
 216 |       for (const neighborIndex of cellIndices) {
 217 |         if (neighborIndex === targetIndex) continue;
 218 | 
 219 |         const neighborPoint = pixelPositions[neighborIndex];
 220 |         const deltaX = targetPoint.x - neighborPoint.x;
 221 |         const deltaY = targetPoint.y - neighborPoint.y;
 222 |         const distSquared = deltaX * deltaX + deltaY * deltaY;
 223 | 
 224 |         if (distSquared < nearestDistanceSquared) {
 225 |           nearestDistanceSquared = distSquared;
 226 |         }
 227 |       }
 228 |     }
 229 |   }
 230 | 
 231 |   return Math.sqrt(nearestDistanceSquared);
 232 | }
 233 | 
 234 | /* ─── Internal: Clamping ────────────────────────────────────────── */
 235 | 
 236 | function clampCellSize(rawSize) {
 237 |   return Math.max(
 238 |     ADAPTIVE_CELL_SIZE.min,
 239 |     Math.min(rawSize, ADAPTIVE_CELL_SIZE.max),
 240 |   );
 241 | }
 242 | 
```


---

## 📄 src\lib\gridLayout.js
**hash:** `57fd814e`

### Chunk 1/1

```javascript
   1 | import { MAX_RENDER_IMAGES } from "./constants";
   2 | 
   3 | /**
   4 |  * Chooses a column/row split for a given image count.
   5 |  * 1 -> 1x1, 2 -> 2x1, and everything larger packs into exactly 2 rows
   6 |  * (4 -> 2x2, 6 -> 3x2, 8 -> 4x2). Keeps clusters compact and centered.
   7 |  */
   8 | function chooseGrid(count) {
   9 |   if (count <= 1) return { columns: 1, rows: 1 };
  10 |   if (count <= 2) return { columns: count, rows: 1 };
  11 |   const rows = 2;
  12 |   const columns = Math.ceil(count / rows);
  13 |   return { columns, rows };
  14 | }
  15 | 
  16 | /**
  17 |  * Computes deterministic grid offsets for a per-point image cluster.
  18 |  *
  19 |  * The whole cluster is sized to fit inside cellWidth x cellHeight and is
  20 |  * centered on (0,0). Sub-images are square and tile edge-to-edge with no gaps
  21 |  * between rows or columns. Because the cluster never exceeds the cell, and the
  22 |  * cell is kept smaller than the nearest-neighbour distance, clusters from
  23 |  * different data points never overlap.
  24 |  */
  25 | export function computeGridOffsets(cellWidth, cellHeight, imageCount) {
  26 |   const safeImageCount = sanitizeImageCount(imageCount);
  27 | 
  28 |   const { columns, rows } = chooseGrid(safeImageCount);
  29 | 
  30 |   // Square sub-image: limited by whichever dimension is tighter.
  31 |   const sub = Math.max(2, Math.min(cellWidth / columns, cellHeight / rows));
  32 | 
  33 |   const clusterWidth = columns * sub;
  34 |   const clusterHeight = rows * sub;
  35 | 
  36 |   const offsets = [];
  37 | 
  38 |   for (let index = 0; index < safeImageCount; index++) {
  39 |     const column = index % columns;
  40 |     const row = Math.floor(index / columns);
  41 | 
  42 |     const offsetX = (column + 0.5) * sub - clusterWidth / 2;
  43 |     const offsetY = (row + 0.5) * sub - clusterHeight / 2;
  44 | 
  45 |     offsets.push({
  46 |       offsetX,
  47 |       offsetY,
  48 |       width: sub,
  49 |       height: sub,
  50 |     });
  51 |   }
  52 | 
  53 |   return offsets;
  54 | }
  55 | 
  56 | /**
  57 |  * Computes deterministic image positions (top-left x/y) for one data point.
  58 |  */
  59 | export function computeImagePositions(
  60 |   centerX,
  61 |   centerY,
  62 |   cellWidth,
  63 |   cellHeight,
  64 |   imageCount,
  65 | ) {
  66 |   const safeImageCount = sanitizeImageCount(imageCount);
  67 | 
  68 |   const offsets = computeGridOffsets(cellWidth, cellHeight, safeImageCount);
  69 | 
  70 |   const positions = [];
  71 | 
  72 |   for (let index = 0; index < offsets.length; index++) {
  73 |     if (positions.length >= MAX_RENDER_IMAGES) {
  74 |       break;
  75 |     }
  76 | 
  77 |     const offset = offsets[index];
  78 | 
  79 |     positions.push({
  80 |       imageIndex: index,
  81 |       x: centerX + offset.offsetX - offset.width / 2,
  82 |       y: centerY + offset.offsetY - offset.height / 2,
  83 |       width: offset.width,
  84 |       height: offset.height,
  85 |     });
  86 |   }
  87 | 
  88 |   return positions;
  89 | }
  90 | 
  91 | function sanitizeImageCount(imageCount) {
  92 |   const parsed = Number(imageCount);
  93 |   if (Number.isNaN(parsed)) return 1;
  94 |   return Math.max(1, Math.min(1000, Math.floor(parsed)));
  95 | }
  96 | 
```


---

## 📄 src\lib\imageBitmapCache.js
**hash:** `5a68c25c`

### Chunk 1/1

```javascript
   1 | // src/lib/imageBitmapCache.js
   2 | 
   3 | // Shared across ALL chart instances
   4 | const cache = new Map(); // url -> ImageBitmap
   5 | const pending = new Map(); // url -> Promise<ImageBitmap>
   6 | 
   7 | // Thumbnail cache (LoD)
   8 | const thumbCache = new Map();
   9 | 
  10 | // Config
  11 | const LOD_THUMB_SIZE = 32;
  12 | const LOD_THRESHOLD = 24;
  13 | 
  14 | // ---- Full bitmap loader ----
  15 | export async function getImageBitmap(url) {
  16 |   if (cache.has(url)) return cache.get(url);
  17 |   if (pending.has(url)) return pending.get(url);
  18 | 
  19 |   const promise = fetch(url)
  20 |     .then((r) => r.blob())
  21 |     .then((blob) => createImageBitmap(blob))
  22 |     .then((bitmap) => {
  23 |       cache.set(url, bitmap);
  24 |       pending.delete(url);
  25 |       return bitmap;
  26 |     })
  27 |     .catch((err) => {
  28 |       pending.delete(url);
  29 |       throw err;
  30 |     });
  31 | 
  32 |   pending.set(url, promise);
  33 |   return promise;
  34 | }
  35 | 
  36 | // ---- LoD loader ----
  37 | export async function getImageBitmapLoD(url, cellSizePx) {
  38 |   const useThumb = cellSizePx < LOD_THRESHOLD;
  39 | 
  40 |   if (useThumb) {
  41 |     if (thumbCache.has(url)) return thumbCache.get(url);
  42 | 
  43 |     const full = await getImageBitmap(url);
  44 | 
  45 |     const oc = new OffscreenCanvas(LOD_THUMB_SIZE, LOD_THUMB_SIZE);
  46 |     const ctx = oc.getContext("2d");
  47 |     ctx.drawImage(full, 0, 0, LOD_THUMB_SIZE, LOD_THUMB_SIZE);
  48 | 
  49 |     const thumb = await createImageBitmap(oc);
  50 |     thumbCache.set(url, thumb);
  51 |     return thumb;
  52 |   }
  53 | 
  54 |   return getImageBitmap(url);
  55 | }
  56 | 
  57 | // ---- Cleanup ----
  58 | export function clearImageBitmapCache() {
  59 |   for (const bmp of cache.values()) bmp.close();
  60 |   cache.clear();
  61 |   pending.clear();
  62 | }
  63 | 
  64 | export function clearThumbCache() {
  65 |   for (const bmp of thumbCache.values()) bmp.close();
  66 |   thumbCache.clear();
  67 | }
  68 | 
```


---

## 📄 src\lib\interactionMode.js
**hash:** `5a3ee7e6`

### Chunk 1/1

```javascript
   1 | import { useState, useCallback } from "react";
   2 | 
   3 | export const INTERACTION_MODES = {
   4 |   NONE: "none",
   5 |   ZOOM: "zoom",
   6 |   PAN: "pan",
   7 | };
   8 | 
   9 | export function useInteractionMode(initialMode = INTERACTION_MODES.ZOOM) {
  10 |   const [interactionMode, setInteractionMode] = useState(initialMode);
  11 | 
  12 |   const isZoomMode = interactionMode === INTERACTION_MODES.ZOOM;
  13 |   const isPanMode = interactionMode === INTERACTION_MODES.PAN;
  14 |   const isNoneMode = interactionMode === INTERACTION_MODES.NONE;
  15 | 
  16 |   const activateZoomMode = useCallback(() => {
  17 |     setInteractionMode(INTERACTION_MODES.ZOOM);
  18 |   }, []);
  19 | 
  20 |   const activatePanMode = useCallback(() => {
  21 |     setInteractionMode(INTERACTION_MODES.PAN);
  22 |   }, []);
  23 | 
  24 |   const activateNoneMode = useCallback(() => {
  25 |     setInteractionMode(INTERACTION_MODES.NONE);
  26 |   }, []);
  27 | 
  28 |   return {
  29 |     interactionMode,
  30 |     setInteractionMode,
  31 |     isZoomMode,
  32 |     isPanMode,
  33 |     isNoneMode,
  34 |     activateZoomMode,
  35 |     activatePanMode,
  36 |     activateNoneMode,
  37 |   };
  38 | }
  39 | 
```


---

## 📄 src\lib\plotterData.js
**hash:** `4ce7cddd`

### Chunk 1/1

```javascript
   1 | import { useState, useEffect } from "react";
   2 | 
   3 | import { DATA_URL, DATA_POINT_LIMITS } from "./constants";
   4 | 
   5 | export function usePlotterData() {
   6 |   const [plotterPoints, setPlotterPoints] = useState([]);
   7 | 
   8 |   const [isLoading, setIsLoading] = useState(true);
   9 | 
  10 |   const [loadError, setLoadError] = useState(null);
  11 | 
  12 |   useEffect(() => {
  13 |     // eslint-disable-next-line react-hooks/immutability
  14 |     fetchPlotterData();
  15 |   }, []);
  16 | 
  17 |   const fetchPlotterData = async () => {
  18 |     try {
  19 |       setIsLoading(true);
  20 | 
  21 |       setLoadError(null);
  22 | 
  23 |       const response = await fetch(DATA_URL);
  24 | 
  25 |       if (!response.ok) {
  26 |         throw new Error(`Failed to fetch data: ${response.status}`);
  27 |       }
  28 | 
  29 |       const jsonData = await response.json();
  30 | 
  31 |       /**
  32 |        * Hard safety limit.
  33 |        */
  34 |       const limitedData = Array.isArray(jsonData)
  35 |         ? jsonData.slice(0, DATA_POINT_LIMITS.max)
  36 |         : [];
  37 | 
  38 |       setPlotterPoints(limitedData);
  39 |     } catch (fetchError) {
  40 |       setLoadError(fetchError.message);
  41 |     } finally {
  42 |       setIsLoading(false);
  43 |     }
  44 |   };
  45 | 
  46 |   return {
  47 |     plotterPoints,
  48 |     isLoading,
  49 |     loadError,
  50 |   };
  51 | }
  52 | 
```


---

## 📄 src\lib\quadtree.js
**hash:** `6e9e5682`

### Chunk 1/2

```javascript
   1 | /**
   2 |  * Quadtree spatial index for efficient point culling and nearest-neighbor queries
   3 |  * Provides O(log n) lookup time instead of O(n) linear filtering
   4 |  */
   5 | 
   6 | export class Quadtree {
   7 |   constructor(bounds, maxPoints = 8, maxDepth = 8, depth = 0) {
   8 |     this.bounds = bounds; // { x, y, width, height }
   9 |     this.maxPoints = maxPoints; // Max points before subdivision
  10 |     this.maxDepth = maxDepth;
  11 |     this.depth = depth;
  12 |     this.points = [];
  13 |     this.divided = false;
  14 |     this.children = null;
  15 |   }
  16 | 
  17 |   /**
  18 |    * Insert a point into the quadtree
  19 |    */
  20 |   insert(point) {
  21 |     if (!this.contains(point)) {
  22 |       return false;
  23 |     }
  24 | 
  25 |     if (this.points.length < this.maxPoints && !this.divided) {
  26 |       this.points.push(point);
  27 |       return true;
  28 |     } else {
  29 |       if (!this.divided) {
  30 |         this.subdivide();
  31 |       }
  32 | 
  33 |       for (let child of this.children) {
  34 |         if (child.insert(point)) {
  35 |           return true;
  36 |         }
  37 |       }
  38 |     }
  39 |     return false;
  40 |   }
  41 | 
  42 |   /**
  43 |    * Subdivide quadtree into 4 children
  44 |    */
  45 |   subdivide() {
  46 |     const { x, y, width, height } = this.bounds;
  47 |     const halfW = width / 2;
  48 |     const halfH = height / 2;
  49 | 
  50 |     this.children = [
  51 |       // NE
  52 |       new Quadtree(
  53 |         { x: x + halfW, y, width: halfW, height: halfH },
  54 |         this.maxPoints,
  55 |         this.maxDepth,
  56 |         this.depth + 1,
  57 |       ),
  58 |       // NW
  59 |       new Quadtree(
  60 |         { x, y, width: halfW, height: halfH },
  61 |         this.maxPoints,
  62 |         this.maxDepth,
  63 |         this.depth + 1,
  64 |       ),
  65 |       // SE
  66 |       new Quadtree(
  67 |         { x: x + halfW, y: y + halfH, width: halfW, height: halfH },
  68 |         this.maxPoints,
  69 |         this.maxDepth,
  70 |         this.depth + 1,
  71 |       ),
  72 |       // SW
  73 |       new Quadtree(
  74 |         { x, y: y + halfH, width: halfW, height: halfH },
  75 |         this.maxPoints,
  76 |         this.maxDepth,
  77 |         this.depth + 1,
  78 |       ),
  79 |     ];
  80 | 
  81 |     this.divided = true;
  82 | 
  83 |     // Redistribute existing points to children
  84 |     for (let p of this.points) {
  85 |       for (let child of this.children) {
  86 |         if (child.insert(p)) break;
  87 |       }
  88 |     }
  89 | 
  90 |     this.points = [];
  91 |   }
  92 | 
  93 |   /**
  94 |    * Check if point is within bounds
  95 |    */
  96 |   contains(point) {
  97 |     const { x, y, width, height } = this.bounds;
  98 |     return (
  99 |       point.scaledX >= x &&
 100 |       point.scaledX < x + width &&
 101 |       point.scaledY >= y &&
 102 |       point.scaledY < y + height
 103 |     );
 104 |   }
 105 | 
 106 |   /**
 107 |    * Query points within a rectangular region (viewport)
 108 |    * Returns array of points intersecting the query bounds
 109 |    */
 110 |   query(queryBounds, found = []) {
 111 |     if (!this.intersects(queryBounds)) {
 112 |       return found;
 113 |     }
 114 | 
 115 |     for (let p of this.points) {
 116 |       if (this.pointInBounds(p, queryBounds)) {
 117 |         found.push(p);
 118 |       }
 119 |     }
 120 | 
 121 |     if (this.divided) {
 122 |       for (let child of this.children) {
 123 |         child.query(queryBounds, found);
 124 |       }
 125 |     }
 126 | 
 127 |     return found;
 128 |   }
 129 | 
 130 |   /**
 131 |    * Check if query bounds intersects with this node's bounds
 132 |    */
 133 |   intersects(queryBounds) {
 134 |     const { x, y, width, height } = this.bounds;
 135 |     const { minX, minY, maxX, maxY } = queryBounds;
 136 | 
 137 |     return !(maxX < x || minX > x + width || maxY < y || minY > y + height);
 138 |   }
 139 | 
 140 |   /**
 141 |    * Check if point is within query bounds
 142 |    */
 143 |   pointInBounds(point, bounds) {
 144 |     const { minX, minY, maxX, maxY } = bounds;
 145 |     return (
 146 |       point.scaledX >= minX &&
 147 |       point.scaledX <= maxX &&
 148 |       point.scaledY >= minY &&
 149 |       point.scaledY <= maxY
 150 |     );
 151 |   }
 152 | 
 153 |   /**
 154 |    * Clear all points from tree (for rebuilding)
 155 |    */
 156 |   clear() {
 157 |     this.points = [];
 158 |     this.divided = false;
 159 |     this.children = null;
 160 |   }
 161 | 
 162 |   /**
 163 |    * Get statistics about tree structure
 164 |    */
 165 |   stats() {
 166 |     let nodeCount = 1;
 167 |     let pointCount = this.points.length;
 168 | 
 169 |     if (this.divided) {
 170 |       for (let child of this.children) {
 171 |         const childStats = child.stats();
 172 |         nodeCount += childStats.nodeCount;
 173 |         pointCount += childStats.pointCount;
 174 |       }
 175 |     }
 176 | 
 177 |     return { nodeCount, pointCount, depth: this.depth };
 178 |   }
 179 | }
 180 | 
 181 | /**
 182 |  * Build a quadtree from a list of normalized points
 183 |  */
 184 | export function buildQuadtree(normalizedPoints) {
 185 |   if (!normalizedPoints || normalizedPoints.length === 0) {
 186 |     return new Quadtree({ x: 0, y: 0, width: 1000, height: 1000 });
 187 |   }
 188 | 
 189 |   // Find bounds of all points
 190 |   let minX = Infinity;
 191 |   let minY = Infinity;
 192 |   let maxX = -Infinity;
 193 |   let maxY = -Infinity;
 194 | 
 195 |   for (const point of normalizedPoints) {
 196 |     if (point.scaledX < minX) minX = point.scaledX;
 197 |     if (point.scaledX > maxX) maxX = point.scaledX;
 198 |     if (point.scaledY < minY) minY = point.scaledY;
 199 |     if (point.scaledY > maxY) maxY = point.scaledY;
 200 |   }
```

### Chunk 2/2

```javascript
 201 | 
 202 |   // Add padding to bounds
 203 |   const padding = 50;
 204 |   const bounds = {
 205 |     x: minX - padding,
 206 |     y: minY - padding,
 207 |     width: maxX - minX + padding * 2,
 208 |     height: maxY - minY + padding * 2,
 209 |   };
 210 | 
 211 |   const quadtree = new Quadtree(bounds, 8, 8);
 212 | 
 213 |   for (const point of normalizedPoints) {
 214 |     quadtree.insert(point);
 215 |   }
 216 | 
 217 |   return quadtree;
 218 | }
 219 | 
 220 | /**
 221 |  * Query visible points using quadtree
 222 |  * Much faster than linear filtering for large datasets
 223 |  */
 224 | export function queryVisiblePointsQuadtree(tree, bounds, buffer = 0) {
 225 |   if (!tree) return [];
 226 | 
 227 |   const result = [];
 228 | 
 229 |   const queryBounds = {
 230 |     minX: bounds.xMin - buffer,
 231 |     maxX: bounds.xMax + buffer,
 232 |     minY: bounds.yMin - buffer,
 233 |     maxY: bounds.yMax + buffer,
 234 |   };
 235 | 
 236 |   return tree.query(queryBounds, result);
 237 | }
 238 | 
```


---

## 📄 src\lib\syntheticDataGenerator.js
**hash:** `6c6e3f3b`

### Chunk 1/1

```javascript
   1 | const BASE_IMAGE_PATH = "/images/base.jpg";
   2 | 
   3 | /**
   4 |  * Generates an array of synthetic plotter data points arranged in a grid.
   5 |  * Each point has { id, x, y, image, label, meta } matching the data.json schema.
   6 |  *
   7 |  * @param {number} totalPoints - Number of data points to generate (1–2000)
   8 |  * @returns {Array} Array of plotter point objects
   9 |  */
  10 | export function generateSyntheticPoints(totalPoints) {
  11 |   const clampedCount = Math.max(1, Math.min(totalPoints, 2000));
  12 |   const columns = computeGridColumns(clampedCount);
  13 |   const spacing = 15;
  14 | 
  15 |   const syntheticPoints = [];
  16 | 
  17 |   for (let index = 0; index < clampedCount; index++) {
  18 |     const column = index % columns;
  19 |     const row = Math.floor(index / columns);
  20 | 
  21 |     syntheticPoints.push(
  22 |       Object.freeze({
  23 |         id: `synth-${index}`,
  24 |         x: column * spacing,
  25 |         y: row * spacing,
  26 |         image: BASE_IMAGE_PATH,
  27 |         label: `Point ${index + 1}`,
  28 |         meta: Object.freeze({
  29 |           interval: column * spacing,
  30 |           angle: row * spacing,
  31 |           quality: parseFloat((0.7 + Math.random() * 0.25).toFixed(2)),
  32 |         }),
  33 |       }),
  34 |     );
  35 |   }
  36 | 
  37 |   return syntheticPoints;
  38 | }
  39 | 
  40 | /**
  41 |  * Computes the number of columns for a near-square grid layout.
  42 |  */
  43 | function computeGridColumns(totalPoints) {
  44 |   return Math.ceil(Math.sqrt(totalPoints));
  45 | }
  46 | 
```


---

## 📄 src\main.jsx
**hash:** `1f4db25e`

### Chunk 1/1

```jsx
   1 | import { StrictMode } from 'react'
   2 | import { createRoot } from 'react-dom/client'
   3 | import App from './App.jsx'
   4 | 
   5 | createRoot(document.getElementById('root')).render(
   6 |   <StrictMode>
   7 |     <App />
   8 |   </StrictMode>,
   9 | )
  10 | 
```


---

## 📄 vite.config.js
**hash:** `97d55d2`

### Chunk 1/1

```javascript
   1 | import { defineConfig } from "vite";
   2 | import react from "@vitejs/plugin-react";
   3 | 
   4 | // https://vite.dev/config/
   5 | export default defineConfig({
   6 |   plugins: [react()],
   7 | });
   8 | 
```

