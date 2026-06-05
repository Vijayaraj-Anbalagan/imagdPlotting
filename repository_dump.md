# Repository Dump (AI Friendly)

> Generated: 2026-06-05T09:54:02.126Z

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
│   │   ├── densityLayout.js
│   │   ├── gridLayout.js
│   │   ├── imageCache.js
│   │   ├── interactionMode.js
│   │   ├── plotterData.js
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
**hash:** `5d54e8ff`

### Chunk 1/2

```jsx
   1 | import { useState, useMemo } from "react";
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
  12 | import { generateSyntheticPoints } from "./lib/syntheticDataGenerator";
  13 | 
  14 | import {
  15 |   DATA_POINT_LIMITS,
  16 |   MAX_IMAGES_PER_POINT,
  17 |   MIN_IMAGES_PER_POINT,
  18 | } from "./lib/constants";
  19 | 
  20 | import "./App.css";
  21 | 
  22 | function App() {
  23 |   const [activeTab, setActiveTab] = useState(null);
  24 | 
  25 |   const [imageCount, setImageCount] = useState(1);
  26 | 
  27 |   const [multiChartMode, setMultiChartMode] = useState(false);
  28 | 
  29 |   const [multiChartCount, setMultiChartCount] = useState(5);
  30 | 
  31 |   const [virtualiseCharts, setVirtualiseCharts] = useState(false);
  32 | 
  33 |   const [dataPointCount, setDataPointCount] = useState(
  34 |     DATA_POINT_LIMITS.defaultCount,
  35 |   );
  36 | 
  37 |   const [appliedXGap, setAppliedXGap] = useState(10);
  38 | 
  39 |   const [appliedYGap, setAppliedYGap] = useState(10);
  40 | 
  41 |   const [draftXGap, setDraftXGap] = useState(10);
  42 | 
  43 |   const [draftYGap, setDraftYGap] = useState(10);
  44 | 
  45 |   const hasChanges = draftXGap !== appliedXGap || draftYGap !== appliedYGap;
  46 | 
  47 |   // eslint-disable-next-line react-hooks/incompatible-library
  48 |   const rowVirtualizer = useWindowVirtualizer({
  49 |     count: multiChartCount,
  50 |     estimateSize: () => 720,
  51 |     overscan: 1,
  52 |   });
  53 | 
  54 |   console.log(
  55 |     "Visible charts:",
  56 |     rowVirtualizer
  57 |       .getVirtualItems()
  58 |       .slice(0, 2)
  59 |       .map((item) => item.index + 1),
  60 |   );
  61 | 
  62 |   /**
  63 |    * Stable deterministic synthetic data.
  64 |    */
  65 |   const syntheticPoints = useMemo(() => {
  66 |     return generateSyntheticPoints(
  67 |       Math.max(
  68 |         DATA_POINT_LIMITS.min,
  69 |         Math.min(dataPointCount, DATA_POINT_LIMITS.max),
  70 |       ),
  71 |     );
  72 |   }, [dataPointCount]);
  73 | 
  74 |   const handleGapUpdate = () => {
  75 |     setAppliedXGap(draftXGap);
  76 |     setAppliedYGap(draftYGap);
  77 |   };
  78 | 
  79 |   const handleMultiChartCountChange = (value) => {
  80 |     const parsed = Number(value);
  81 |     if (Number.isNaN(parsed)) {
  82 |       setMultiChartCount(2);
  83 |       return;
  84 |     }
  85 |     const clamped = Math.max(2, Math.min(10, Math.floor(parsed)));
  86 |     setMultiChartCount(clamped);
  87 |   };
  88 | 
  89 |   /**
  90 |    * Critical normalization.
  91 |    */
  92 |   const handleImageCountChange = (value) => {
  93 |     const parsed = Number(value);
  94 | 
  95 |     if (Number.isNaN(parsed)) {
  96 |       setImageCount(1);
  97 |       return;
  98 |     }
  99 | 
 100 |     const clamped = Math.max(
 101 |       MIN_IMAGES_PER_POINT,
 102 |       Math.min(MAX_IMAGES_PER_POINT, Math.floor(parsed)),
 103 |     );
 104 | 
 105 |     setImageCount(clamped);
 106 |   };
 107 | 
 108 |   const plotterProps = {
 109 |     imageCount,
 110 |     xGap: appliedXGap,
 111 |     yGap: appliedYGap,
 112 |     syntheticPoints,
 113 |   };
 114 | 
 115 |   const renderSinglePlotter = ({ key, chartId }) => {
 116 |     switch (activeTab) {
 117 |       case "Recharts":
 118 |         return (
 119 |           <RechartsPlotter key={key} chartId={chartId} {...plotterProps} />
 120 |         );
 121 |       case "D3":
 122 |         return <D3Plotter key={key} chartId={chartId} {...plotterProps} />;
 123 |       case "PixiJS":
 124 |         return <PixiPlotter key={key} chartId={chartId} {...plotterProps} />;
 125 |       case "Konva":
 126 |         return <KonvaPlotter key={key} chartId={chartId} {...plotterProps} />;
 127 | 
 128 |       default:
 129 |         return (
 130 |           <div
 131 |             key={key}
 132 |             style={{
 133 |               height: "600px",
 134 |               display: "flex",
 135 |               alignItems: "center",
 136 |               justifyContent: "center",
 137 |               color: "#888",
 138 |               fontSize: "20px",
 139 |               fontWeight: "500",
 140 |             }}
 141 |           >
 142 |             Click a tab to render the chart
 143 |           </div>
 144 |         );
 145 |     }
 146 |   };
 147 | 
 148 |   const renderCharts = () => {
 149 |     if (!multiChartMode) {
 150 |       return (
 151 |         <div className="single-chart-wrapper">
 152 |           {renderSinglePlotter("single-chart", "single-chart")}
 153 |         </div>
 154 |       );
 155 |     }
 156 | 
 157 |     /**
 158 |      * NON VIRTUALIZED
 159 |      */
 160 |     if (!virtualiseCharts) {
 161 |       return (
 162 |         <div className="multi-chart-wrapper">
 163 |           {Array.from({
 164 |             length: multiChartCount,
 165 |           }).map((_, index) => (
 166 |             <div key={`chart-wrapper-${index}`} className="multi-chart-item">
 167 |               <div className="multi-chart-header">Chart {index + 1}</div>
 168 |               {renderSinglePlotter({
 169 |                 key: `chart-${index}`,
 170 |                 chartId: `chart-${index}`,
 171 |               })}
 172 |             </div>
 173 |           ))}
 174 |         </div>
 175 |       );
 176 |     }
 177 | 
 178 |     /**
 179 |      * VIRTUALIZED
 180 |      */
 181 |     return (
 182 |       <div
 183 |         style={{
 184 |           width: "100%",
 185 |           position: "relative",
 186 |         }}
 187 |       >
 188 |         <div
 189 |           style={{
 190 |             height: `${rowVirtualizer.getTotalSize()}px`,
 191 |             width: "100%",
 192 |             position: "relative",
 193 |           }}
 194 |         >
 195 |           {rowVirtualizer
 196 |             .getVirtualItems()
 197 |             .slice(0, 2)
 198 |             .map((virtualRow) => (
 199 |               <div
 200 |                 key={virtualRow.key}
```

### Chunk 2/2

```jsx
 201 |                 style={{
 202 |                   position: "absolute",
 203 |                   top: 0,
 204 |                   left: 0,
 205 |                   width: "100%",
 206 |                   transform: `translateY(${virtualRow.start}px)`,
 207 |                   paddingBottom: "20px",
 208 |                 }}
 209 |               >
 210 |                 <div className="multi-chart-item">
 211 |                   <div className="multi-chart-header">
 212 |                     Chart {virtualRow.index + 1}
 213 |                   </div>
 214 | 
 215 |                   {renderSinglePlotter({
 216 |                     key: `chart-${virtualRow.index}`,
 217 |                     chartId: `chart-${virtualRow.index}`,
 218 |                   })}
 219 |                 </div>
 220 |               </div>
 221 |             ))}
 222 |         </div>
 223 |       </div>
 224 |     );
 225 |   };
 226 | 
 227 |   return (
 228 |     <div
 229 |       className={`app-container ${multiChartMode ? "multi-mode-active" : ""}`}
 230 |     >
 231 |       <h1 className="app-title">Image Plotting System PoC</h1>
 232 | 
 233 |       <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
 234 | 
 235 |       <DataPointCountControl
 236 |         dataPointCount={dataPointCount}
 237 |         onDataPointCountChange={setDataPointCount}
 238 |       />
 239 | 
 240 |       <ImageCountSelector
 241 |         imageCount={imageCount}
 242 |         setImageCount={handleImageCountChange}
 243 |       />
 244 | 
 245 |       <div className="multi-chart-controls">
 246 |         {" "}
 247 |         <div className="multi-chart-toggle-row">
 248 |           <label className="multi-chart-label"> Multi Chart Mode </label>{" "}
 249 |           <button
 250 |             className={`multi-chart-toggle ${multiChartMode ? "active" : ""}`}
 251 |             onClick={() => setMultiChartMode((prev) => !prev)}
 252 |           >
 253 |             {" "}
 254 |             {multiChartMode ? "Enabled" : "Disabled"}{" "}
 255 |           </button>{" "}
 256 |           <label className="multi-chart-label">Virtualise Charts</label>
 257 |           <button
 258 |             className={`multi-chart-toggle ${virtualiseCharts ? "active" : ""}`}
 259 |             onClick={() => setVirtualiseCharts((prev) => !prev)}
 260 |           >
 261 |             {virtualiseCharts ? "Enabled" : "Disabled"}
 262 |           </button>{" "}
 263 |         </div>{" "}
 264 |         {multiChartMode && (
 265 |           <div className="multi-chart-count-row">
 266 |             {" "}
 267 |             <label className="multi-chart-label"> Charts Count </label>{" "}
 268 |             <input
 269 |               type="number"
 270 |               min="2"
 271 |               max="10"
 272 |               value={multiChartCount}
 273 |               onChange={(e) => handleMultiChartCountChange(e.target.value)}
 274 |               className="multi-chart-input"
 275 |             />{" "}
 276 |           </div>
 277 |         )}{" "}
 278 |       </div>
 279 | 
 280 |       <div
 281 |         style={{
 282 |           display: "flex",
 283 |           gap: "20px",
 284 |           justifyContent: "center",
 285 |           marginBottom: "20px",
 286 |         }}
 287 |       >
 288 |         <div
 289 |           style={{
 290 |             display: "flex",
 291 |             alignItems: "center",
 292 |             gap: "10px",
 293 |           }}
 294 |         >
 295 |           <label style={{ color: "#fff" }}>X Gap:</label>
 296 | 
 297 |           <input
 298 |             type="range"
 299 |             min="1"
 300 |             max="50"
 301 |             value={draftXGap}
 302 |             onChange={(e) => setDraftXGap(Number(e.target.value))}
 303 |           />
 304 | 
 305 |           <span
 306 |             style={{
 307 |               color: "#888",
 308 |               width: "20px",
 309 |             }}
 310 |           >
 311 |             {draftXGap}
 312 |           </span>
 313 |         </div>
 314 | 
 315 |         <div
 316 |           style={{
 317 |             display: "flex",
 318 |             alignItems: "center",
 319 |             gap: "10px",
 320 |           }}
 321 |         >
 322 |           <label style={{ color: "#fff" }}>Y Gap:</label>
 323 | 
 324 |           <input
 325 |             type="range"
 326 |             min="1"
 327 |             max="50"
 328 |             value={draftYGap}
 329 |             onChange={(e) => setDraftYGap(Number(e.target.value))}
 330 |           />
 331 | 
 332 |           <span
 333 |             style={{
 334 |               color: "#888",
 335 |               width: "20px",
 336 |             }}
 337 |           >
 338 |             {draftYGap}
 339 |           </span>
 340 |         </div>
 341 | 
 342 |         <button
 343 |           onClick={handleGapUpdate}
 344 |           disabled={!hasChanges}
 345 |           style={{
 346 |             padding: "5px 15px",
 347 |             backgroundColor: hasChanges ? "#2e8b57" : "#444",
 348 | 
 349 |             color: hasChanges ? "#fff" : "#888",
 350 | 
 351 |             border: "none",
 352 |             borderRadius: "4px",
 353 | 
 354 |             cursor: hasChanges ? "pointer" : "not-allowed",
 355 | 
 356 |             fontWeight: "bold",
 357 |           }}
 358 |         >
 359 |           Update
 360 |         </button>
 361 |       </div>
 362 | 
 363 |       <div className="viewer-container">{renderCharts()}</div>
 364 |     </div>
 365 |   );
 366 | }
 367 | 
 368 | export default App;
 369 | 
```


---

## 📄 src\components\D3Plotter.jsx
**hash:** `3f3371b0`

### Chunk 1/5

```jsx
   1 | import { useRef, useEffect, useState } from "react";
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
  18 | } from "../lib/constants";
  19 | import {
  20 |   computeAdaptiveCellSize,
  21 |   filterVisiblePoints,
  22 |   computeEffectiveImageCount,
  23 | } from "../lib/densityLayout";
  24 | import PlotterControls from "./PlotterControls";
  25 | 
  26 | /* ─── Entry Component ───────────────────────────────────────────── */
  27 | 
  28 | function D3Plotter({ chartId, imageCount, xGap, yGap, syntheticPoints }) {
  29 |   const {
  30 |     plotterPoints: fetchedPoints,
  31 |     isLoading,
  32 |     loadError,
  33 |   } = usePlotterData();
  34 | 
  35 |   const plotterPoints = syntheticPoints || fetchedPoints;
  36 | 
  37 |   if (!syntheticPoints && isLoading)
  38 |     return <div className="plotter-loading">Loading data…</div>;
  39 |   if (!syntheticPoints && loadError)
  40 |     return <div className="plotter-error">Error: {loadError}</div>;
  41 | 
  42 |   return (
  43 |     <D3PlotCanvas
  44 |       plotterPoints={plotterPoints}
  45 |       imageCount={imageCount}
  46 |       xGap={xGap}
  47 |       yGap={yGap}
  48 |       chartId={chartId}
  49 |     />
  50 |   );
  51 | }
  52 | 
  53 | /* ─── Canvas Wrapper ────────────────────────────────────────────── */
  54 | 
  55 | function D3PlotCanvas({ plotterPoints, imageCount, xGap, yGap, chartId }) {
  56 |   const svgRef = useRef(null);
  57 |   const tooltipRef = useRef(null);
  58 |   const containerRef = useRef(null);
  59 |   const plotControlsRef = useRef(null);
  60 |   const interactionCleanupRef = useRef(null);
  61 | 
  62 |   const originalXDomainRef = useRef(null);
  63 |   const originalYDomainRef = useRef(null);
  64 | 
  65 |   const [containerWidth, setContainerWidth] = useState(PLOT_DIMENSIONS.width);
  66 |   const { interactionMode, setInteractionMode, isZoomMode } =
  67 |     useInteractionMode();
  68 | 
  69 |   useEffect(() => {
  70 |     if (!containerRef.current) return;
  71 | 
  72 |     const resizeObserver = new ResizeObserver((entries) => {
  73 |       const entry = entries[0];
  74 |       if (entry) setContainerWidth(entry.contentRect.width);
  75 |     });
  76 | 
  77 |     resizeObserver.observe(containerRef.current);
  78 |     return () => resizeObserver.disconnect();
  79 |   }, []);
  80 | 
  81 |   useEffect(() => {
  82 |     if (!svgRef.current || plotterPoints.length === 0) return;
  83 | 
  84 |     const initResult = initializePlot(
  85 |       svgRef.current,
  86 |       tooltipRef.current,
  87 |       plotterPoints,
  88 |       imageCount,
  89 |       containerWidth,
  90 |       xGap,
  91 |       yGap,
  92 |       originalXDomainRef,
  93 |       originalYDomainRef,
  94 |       chartId,
  95 |     );
  96 | 
  97 |     plotControlsRef.current = initResult.controls;
  98 |     interactionCleanupRef.current = initResult.setActiveInteractionMode;
  99 | 
 100 |     // Apply initial mode once after chart creation
 101 |     initResult.setActiveInteractionMode(interactionMode);
 102 |   }, [plotterPoints, imageCount, containerWidth, xGap, yGap]); // interactionMode removed
 103 | 
 104 |   useEffect(() => {
 105 |     if (interactionCleanupRef.current) {
 106 |       interactionCleanupRef.current(interactionMode);
 107 |     }
 108 |   }, [interactionMode]);
 109 | 
 110 |   const handleZoomIn = () => plotControlsRef.current?.zoomIn();
 111 |   const handleZoomOut = () => plotControlsRef.current?.zoomOut();
 112 |   const handleReset = () => plotControlsRef.current?.resetZoom();
 113 |   const cursorStyle = isZoomMode ? "crosshair" : "grab";
 114 | 
 115 |   return (
 116 |     <div ref={containerRef} style={{ position: "relative" }}>
 117 |       <PlotterControls
 118 |         onZoomIn={handleZoomIn}
 119 |         onZoomOut={handleZoomOut}
 120 |         onReset={handleReset}
 121 |         interactionMode={interactionMode}
 122 |         onModeChange={setInteractionMode}
 123 |       />
 124 |       <svg ref={svgRef} style={{ cursor: cursorStyle }} />
 125 |       <div
 126 |         ref={tooltipRef}
 127 |         className="plotter-tooltip"
 128 |         style={{ display: "none" }}
 129 |       />
 130 |     </div>
 131 |   );
 132 | }
 133 | 
 134 | /* ─── Plot Initialization ───────────────────────────────────────── */
 135 | 
 136 | function initializePlot(
 137 |   svgElement,
 138 |   tooltipElement,
 139 |   plotterPoints,
 140 |   imageCount,
 141 |   containerWidth,
 142 |   xGap,
 143 |   yGap,
 144 |   originalXDomainRef,
 145 |   originalYDomainRef,
 146 |   chartId,
 147 | ) {
 148 |   const width = containerWidth;
 149 |   const height = PLOT_DIMENSIONS.height;
 150 |   const margin = PLOT_MARGIN;
 151 |   const innerWidth = width - margin.left - margin.right;
 152 |   const innerHeight = height - margin.top - margin.bottom;
 153 | 
 154 |   const svg = d3.select(svgElement);
 155 |   svg.selectAll("*").remove();
 156 |   svg
 157 |     .attr("width", width)
 158 |     .attr("height", height)
 159 |     .style("background", "transparent");
 160 | 
 161 |   const xScale = buildXScale(plotterPoints, innerWidth, xGap);
 162 |   const yScale = buildYScale(plotterPoints, innerHeight, yGap);
 163 | 
 164 |   originalXDomainRef.current = xScale.domain().slice();
 165 |   originalYDomainRef.current = yScale.domain().slice();
 166 | 
 167 |   const originalDomainSpanX =
 168 |     originalXDomainRef.current[1] - originalXDomainRef.current[0];
 169 | 
 170 |   const originalDomainSpanY =
 171 |     originalYDomainRef.current[1] - originalYDomainRef.current[0];
 172 | 
 173 |   const savedViewport = getChartViewport(chartId);
 174 | 
 175 |   if (savedViewport.xDomain) {
 176 |     xScale.domain(savedViewport.xDomain);
 177 |   }
 178 | 
 179 |   if (savedViewport.yDomain) {
 180 |     yScale.domain(savedViewport.yDomain);
 181 |   }
 182 | 
 183 |   const clipId = "plot-clip-" + Math.random().toString(36).slice(2);
 184 |   svg
 185 |     .append("defs")
 186 |     .append("clipPath")
 187 |     .attr("id", clipId)
 188 |     .append("rect")
 189 |     .attr("width", innerWidth)
 190 |     .attr("height", innerHeight);
 191 | 
 192 |   const rootGroup = svg
 193 |     .append("g")
 194 |     .attr("transform", `translate(${margin.left},${margin.top})`);
 195 | 
 196 |   const plotGroup = rootGroup.append("g").attr("clip-path", `url(#${clipId})`);
 197 |   const contentGroup = plotGroup.append("g");
 198 | 
 199 |   renderAxes(rootGroup, xScale, yScale, innerWidth, innerHeight);
 200 |   renderGrid(contentGroup, xScale, yScale, innerWidth, innerHeight);
```

### Chunk 2/5

```jsx
 201 | 
 202 |   const initialVisiblePoints = filterVisiblePoints(
 203 |     plotterPoints,
 204 |     (val) => xScale(val),
 205 |     (val) => yScale(val),
 206 |     innerWidth,
 207 |     innerHeight,
 208 |     CELL_SIZE,
 209 |   );
 210 | 
 211 |   const baseCellSize =
 212 |     savedViewport.baseCellSize ??
 213 |     computeAdaptiveCellSize(
 214 |       initialVisiblePoints,
 215 |       (val) => xScale(val),
 216 |       (val) => yScale(val),
 217 |     );
 218 | 
 219 |   updateChartViewport(chartId, {
 220 |     baseCellSize,
 221 |   });
 222 | 
 223 |   const currentSpanX = xScale.domain()[1] - xScale.domain()[0];
 224 | 
 225 |   const currentSpanY = yScale.domain()[1] - yScale.domain()[0];
 226 | 
 227 |   const zoomFactorX = originalDomainSpanX / currentSpanX;
 228 | 
 229 |   const zoomFactorY = originalDomainSpanY / currentSpanY;
 230 | 
 231 |   const zoomFactor = Math.min(zoomFactorX, zoomFactorY);
 232 | 
 233 |   const zoomedCellSize = baseCellSize * zoomFactor;
 234 | 
 235 |   const initialEffectiveImageCount = computeEffectiveImageCount(
 236 |     zoomedCellSize,
 237 |     imageCount,
 238 |   );
 239 | 
 240 |   renderImagePoints(
 241 |     contentGroup,
 242 |     initialVisiblePoints,
 243 |     xScale,
 244 |     yScale,
 245 |     initialEffectiveImageCount,
 246 |     tooltipElement,
 247 |     zoomedCellSize,
 248 |   );
 249 | 
 250 |   const redrawContext = {
 251 |     contentGroup,
 252 |     rootGroup,
 253 |     xScale,
 254 |     yScale,
 255 |     innerWidth,
 256 |     innerHeight,
 257 |     plotterPoints,
 258 |     imageCount,
 259 |     tooltipElement,
 260 |     baseCellSize,
 261 |     originalDomainSpanX,
 262 |     originalDomainSpanY,
 263 |   };
 264 | 
 265 |   const triggerRedraw = () => redrawPlotContent(redrawContext);
 266 | 
 267 |   const brushGroup = plotGroup.append("g").attr("class", "d3-brush");
 268 | 
 269 |   const brush = buildBrush(
 270 |     xScale,
 271 |     yScale,
 272 |     innerWidth,
 273 |     innerHeight,
 274 |     brushGroup,
 275 |     triggerRedraw,
 276 |     chartId,
 277 |   );
 278 |   brushGroup.call(brush);
 279 | 
 280 |   brushGroup.lower();
 281 |   const panOverlay = plotGroup
 282 |     .append("rect")
 283 |     .attr("class", "d3-pan-overlay")
 284 |     .attr("width", innerWidth)
 285 |     .attr("height", innerHeight)
 286 |     .attr("fill", "transparent")
 287 |     .style("display", "none");
 288 | 
 289 |   const panDrag = buildPanDrag(
 290 |     xScale,
 291 |     yScale,
 292 |     innerWidth,
 293 |     innerHeight,
 294 |     triggerRedraw,
 295 |     chartId,
 296 |   );
 297 | 
 298 |   attachWheelZoom(
 299 |     svg,
 300 |     margin,
 301 |     xScale,
 302 |     yScale,
 303 |     innerWidth,
 304 |     innerHeight,
 305 |     triggerRedraw,
 306 |     chartId,
 307 |   );
 308 |   attachDoubleClickReset(
 309 |     svg,
 310 |     xScale,
 311 |     yScale,
 312 |     originalXDomainRef,
 313 |     originalYDomainRef,
 314 |     triggerRedraw,
 315 |     chartId,
 316 |   );
 317 | 
 318 |   const setActiveInteractionMode = (mode) => {
 319 |     // Clear previous interactions
 320 |     brushGroup.on(".brush", null);
 321 |     panOverlay.on(".drag", null);
 322 | 
 323 |     if (mode === INTERACTION_MODES.ZOOM) {
 324 |       panOverlay.style("display", "none");
 325 | 
 326 |       brushGroup.style("display", null);
 327 |       brushGroup.call(brush);
 328 | 
 329 |       brushGroup.select(".overlay").style("cursor", "crosshair");
 330 |     } else {
 331 |       brushGroup.style("display", "none");
 332 | 
 333 |       panOverlay.style("display", null);
 334 |       panOverlay.call(panDrag);
 335 |     }
 336 |   };
 337 | 
 338 |   const controls = buildPlotControls(
 339 |     xScale,
 340 |     yScale,
 341 |     originalXDomainRef,
 342 |     originalYDomainRef,
 343 |     triggerRedraw,
 344 |     chartId,
 345 |   );
 346 | 
 347 |   return { controls, setActiveInteractionMode };
 348 | }
 349 | 
 350 | /* ─── Scale Builders ────────────────────────────────────────────── */
 351 | 
 352 | function buildXScale(plotterPoints, innerWidth, xGap) {
 353 |   const xExtent = d3.extent(plotterPoints, (point) => point.x);
 354 |   const padding = (xExtent[1] - xExtent[0]) * 0.15 || 5;
 355 |   const xSpacingScale = xGap / 10;
 356 | 
 357 |   return d3
 358 |     .scaleLinear()
 359 |     .domain([xExtent[0] - padding, xExtent[1] + padding])
 360 |     .range([0, innerWidth * xSpacingScale]);
 361 | }
 362 | 
 363 | function buildYScale(plotterPoints, innerHeight, yGap) {
 364 |   const yExtent = d3.extent(plotterPoints, (point) => point.y);
 365 |   const padding = (yExtent[1] - yExtent[0]) * 0.15 || 5;
 366 |   const ySpacingScale = yGap / 10;
 367 | 
 368 |   return d3
 369 |     .scaleLinear()
 370 |     .domain([yExtent[0] - padding, yExtent[1] + padding])
 371 |     .range([innerHeight * ySpacingScale, 0]);
 372 | }
 373 | 
 374 | /* ─── Brush Zoom ────────────────────────────────────────────────── */
 375 | 
 376 | function buildBrush(
 377 |   xScale,
 378 |   yScale,
 379 |   innerWidth,
 380 |   innerHeight,
 381 |   brushGroup,
 382 |   redrawCallback,
 383 |   chartId,
 384 | ) {
 385 |   const brush = d3
 386 |     .brush()
 387 |     .extent([
 388 |       [0, 0],
 389 |       [innerWidth, innerHeight],
 390 |     ])
 391 |     .on("end", (event) => {
 392 |       handleBrushEnd(
 393 |         event,
 394 |         brush,
 395 |         brushGroup,
 396 |         xScale,
 397 |         yScale,
 398 |         redrawCallback,
 399 |         chartId,
 400 |       );
```

### Chunk 3/5

```jsx
 401 |     });
 402 | 
 403 |   return brush;
 404 | }
 405 | 
 406 | function handleBrushEnd(
 407 |   event,
 408 |   brush,
 409 |   brushGroup,
 410 |   xScale,
 411 |   yScale,
 412 |   redrawCallback,
 413 |   chartId,
 414 | ) {
 415 |   const selection = event.selection;
 416 |   if (!selection) return;
 417 | 
 418 |   const [[pixelX0, pixelY0], [pixelX1, pixelY1]] = selection;
 419 |   const selectionWidth = pixelX1 - pixelX0;
 420 |   const selectionHeight = pixelY1 - pixelY0;
 421 | 
 422 |   if (
 423 |     selectionWidth < BRUSH_ZOOM.minimumSelectionPixels ||
 424 |     selectionHeight < BRUSH_ZOOM.minimumSelectionPixels
 425 |   ) {
 426 |     brushGroup.call(brush.move, null);
 427 |     return;
 428 |   }
 429 | 
 430 |   logChartInteractionEvent({
 431 |     interactionType: "ZOOM_IN",
 432 |     visualizationLibrary: "D3",
 433 |     interactionSource: "brush",
 434 |   });
 435 | 
 436 |   const newXDomain = [xScale.invert(pixelX0), xScale.invert(pixelX1)];
 437 |   const newYDomain = [yScale.invert(pixelY1), yScale.invert(pixelY0)];
 438 | 
 439 |   xScale.domain(newXDomain);
 440 |   yScale.domain(newYDomain);
 441 | 
 442 |   updateChartViewport(chartId, {
 443 |     xDomain: newXDomain,
 444 |     yDomain: newYDomain,
 445 |   });
 446 | 
 447 |   brushGroup.call(brush.move, null);
 448 |   redrawCallback();
 449 | }
 450 | 
 451 | /* ─── Pan Drag ──────────────────────────────────────────────────── */
 452 | 
 453 | function buildPanDrag(
 454 |   xScale,
 455 |   yScale,
 456 |   innerWidth,
 457 |   innerHeight,
 458 |   redrawCallback,
 459 |   chartId,
 460 | ) {
 461 |   let startXDomain = null;
 462 |   let startYDomain = null;
 463 | 
 464 |   return d3
 465 |     .drag()
 466 |     .on("start", () => {
 467 |       logChartInteractionEvent({
 468 |         interactionType: "PAN",
 469 |         visualizationLibrary: "D3",
 470 |         interactionSource: "drag",
 471 |       });
 472 |       startXDomain = xScale.domain().slice();
 473 |       startYDomain = yScale.domain().slice();
 474 |     })
 475 |     .on("drag", (event) => {
 476 |       if (!startXDomain || !startYDomain) return;
 477 | 
 478 |       const xSpanPerPixel = (startXDomain[1] - startXDomain[0]) / innerWidth;
 479 |       const ySpanPerPixel = (startYDomain[1] - startYDomain[0]) / innerHeight;
 480 | 
 481 |       const domainDeltaX = -event.dx * xSpanPerPixel;
 482 |       const domainDeltaY = event.dy * ySpanPerPixel;
 483 | 
 484 |       const currentXDomain = xScale.domain();
 485 |       const currentYDomain = yScale.domain();
 486 | 
 487 |       xScale.domain([
 488 |         currentXDomain[0] + domainDeltaX,
 489 |         currentXDomain[1] + domainDeltaX,
 490 |       ]);
 491 |       yScale.domain([
 492 |         currentYDomain[0] + domainDeltaY,
 493 |         currentYDomain[1] + domainDeltaY,
 494 |       ]);
 495 | 
 496 |       updateChartViewport(chartId, {
 497 |         xDomain: xScale.domain().slice(),
 498 |         yDomain: yScale.domain().slice(),
 499 |       });
 500 | 
 501 |       redrawCallback();
 502 |     })
 503 |     .on("end", () => {
 504 |       startXDomain = null;
 505 |       startYDomain = null;
 506 |     });
 507 | }
 508 | 
 509 | /* ─── Wheel Zoom ────────────────────────────────────────────────── */
 510 | 
 511 | function attachWheelZoom(
 512 |   svg,
 513 |   margin,
 514 |   xScale,
 515 |   yScale,
 516 |   innerWidth,
 517 |   innerHeight,
 518 |   redrawCallback,
 519 |   chartId,
 520 | ) {
 521 |   svg.on(
 522 |     "wheel.zoom",
 523 |     (event) => {
 524 |       event.preventDefault();
 525 |       handleWheelZoom(
 526 |         event,
 527 |         margin,
 528 |         xScale,
 529 |         yScale,
 530 |         innerWidth,
 531 |         innerHeight,
 532 |         redrawCallback,
 533 |         chartId,
 534 |       );
 535 |     },
 536 |     { passive: false },
 537 |   );
 538 | }
 539 | 
 540 | function handleWheelZoom(
 541 |   event,
 542 |   margin,
 543 |   xScale,
 544 |   yScale,
 545 |   innerWidth,
 546 |   innerHeight,
 547 |   redrawCallback,
 548 |   chartId,
 549 | ) {
 550 |   const zoomFactor = Math.exp(-event.deltaY * WHEEL_ZOOM_SENSITIVITY);
 551 | 
 552 |   const svgRect = event.currentTarget.getBoundingClientRect();
 553 |   const cursorX = event.clientX - svgRect.left - margin.left;
 554 |   const cursorY = event.clientY - svgRect.top - margin.top;
 555 | 
 556 |   const isCursorInsidePlot =
 557 |     cursorX >= 0 &&
 558 |     cursorX <= innerWidth &&
 559 |     cursorY >= 0 &&
 560 |     cursorY <= innerHeight;
 561 | 
 562 |   if (!isCursorInsidePlot) return;
 563 | 
 564 |   const isZoomIn = event.deltaY < 0;
 565 |   logChartInteractionEvent({
 566 |     interactionType: isZoomIn ? "ZOOM_IN" : "ZOOM_OUT",
 567 |     visualizationLibrary: "D3",
 568 |     interactionSource: "wheel",
 569 |   });
 570 | 
 571 |   const anchorDataX = xScale.invert(cursorX);
 572 |   const anchorDataY = yScale.invert(cursorY);
 573 | 
 574 |   zoomDomainAroundAnchor(xScale, anchorDataX, zoomFactor);
 575 |   zoomDomainAroundAnchor(yScale, anchorDataY, zoomFactor);
 576 | 
 577 |   updateChartViewport(chartId, {
 578 |     xDomain: xScale.domain().slice(),
 579 |     yDomain: yScale.domain().slice(),
 580 |   });
 581 | 
 582 |   redrawCallback();
 583 | }
 584 | 
 585 | /* ─── Double-Click Reset ───────────────────────────────────────── */
 586 | 
 587 | function attachDoubleClickReset(
 588 |   svg,
 589 |   xScale,
 590 |   yScale,
 591 |   originalXDomainRef,
 592 |   originalYDomainRef,
 593 |   redrawCallback,
 594 |   chartId,
 595 | ) {
 596 |   svg.on("dblclick.zoom", () => {
 597 |     logChartInteractionEvent({
 598 |       interactionType: "RESET",
 599 |       visualizationLibrary: "D3",
 600 |       interactionSource: "double_click",
```

### Chunk 4/5

```jsx
 601 |     });
 602 |     resetDomains(xScale, yScale, originalXDomainRef, originalYDomainRef);
 603 |     updateChartViewport(chartId, {
 604 |       xDomain: originalXDomainRef.current.slice(),
 605 |       yDomain: originalYDomainRef.current.slice(),
 606 |     });
 607 |     redrawCallback();
 608 |   });
 609 | }
 610 | 
 611 | /* ─── Domain Manipulation Helpers ───────────────────────────────── */
 612 | 
 613 | function zoomDomainAroundAnchor(scale, anchorValue, zoomFactor) {
 614 |   const [domainMin, domainMax] = scale.domain();
 615 |   const newMin = anchorValue - (anchorValue - domainMin) / zoomFactor;
 616 |   const newMax = anchorValue + (domainMax - anchorValue) / zoomFactor;
 617 |   scale.domain([newMin, newMax]);
 618 | }
 619 | 
 620 | function zoomDomainAroundCenter(scale, zoomFactor) {
 621 |   const [domainMin, domainMax] = scale.domain();
 622 |   const center = (domainMin + domainMax) / 2;
 623 |   zoomDomainAroundAnchor(scale, center, zoomFactor);
 624 | }
 625 | 
 626 | function resetDomains(xScale, yScale, originalXDomainRef, originalYDomainRef) {
 627 |   xScale.domain(originalXDomainRef.current.slice());
 628 |   yScale.domain(originalYDomainRef.current.slice());
 629 | }
 630 | 
 631 | /* ─── Plot Controls (Button Handlers) ──────────────────────────── */
 632 | 
 633 | function buildPlotControls(
 634 |   xScale,
 635 |   yScale,
 636 |   originalXDomainRef,
 637 |   originalYDomainRef,
 638 |   redrawCallback,
 639 |   chartId,
 640 | ) {
 641 |   return {
 642 |     zoomIn: () => {
 643 |       logChartInteractionEvent({
 644 |         interactionType: "ZOOM_IN",
 645 |         visualizationLibrary: "D3",
 646 |         interactionSource: "button",
 647 |       });
 648 |       zoomDomainAroundCenter(xScale, ZOOM_SCALE_FACTOR);
 649 |       zoomDomainAroundCenter(yScale, ZOOM_SCALE_FACTOR);
 650 |       updateChartViewport(chartId, {
 651 |         xDomain: xScale.domain().slice(),
 652 |         yDomain: yScale.domain().slice(),
 653 |       });
 654 |       redrawCallback();
 655 |     },
 656 |     zoomOut: () => {
 657 |       logChartInteractionEvent({
 658 |         interactionType: "ZOOM_OUT",
 659 |         visualizationLibrary: "D3",
 660 |         interactionSource: "button",
 661 |       });
 662 |       zoomDomainAroundCenter(xScale, 1 / ZOOM_SCALE_FACTOR);
 663 |       zoomDomainAroundCenter(yScale, 1 / ZOOM_SCALE_FACTOR);
 664 |       updateChartViewport(chartId, {
 665 |         xDomain: xScale.domain().slice(),
 666 |         yDomain: yScale.domain().slice(),
 667 |       });
 668 |       redrawCallback();
 669 |     },
 670 |     resetZoom: () => {
 671 |       logChartInteractionEvent({
 672 |         interactionType: "RESET",
 673 |         visualizationLibrary: "D3",
 674 |         interactionSource: "button",
 675 |       });
 676 |       resetDomains(xScale, yScale, originalXDomainRef, originalYDomainRef);
 677 |       updateChartViewport(chartId, {
 678 |         xDomain: originalXDomainRef.current.slice(),
 679 |         yDomain: originalYDomainRef.current.slice(),
 680 |       });
 681 |       redrawCallback();
 682 |     },
 683 |   };
 684 | }
 685 | 
 686 | /* ─── Content Redraw Pipeline ───────────────────────────────────── */
 687 | 
 688 | function redrawPlotContent(context) {
 689 |   const {
 690 |     contentGroup,
 691 |     rootGroup,
 692 |     xScale,
 693 |     yScale,
 694 |     innerWidth,
 695 |     innerHeight,
 696 |     plotterPoints,
 697 |     imageCount,
 698 |     tooltipElement,
 699 |     baseCellSize,
 700 |     originalDomainSpanX,
 701 |     originalDomainSpanY,
 702 |   } = context;
 703 | 
 704 |   /* Compute zoom factor from domain ratio so images grow when zoomed in,
 705 |      matching the transform-based magnification of Recharts/Konva/PixiJS. */
 706 |   const currentSpanX = xScale.domain()[1] - xScale.domain()[0];
 707 |   const currentSpanY = yScale.domain()[1] - yScale.domain()[0];
 708 |   const zoomFactorX = originalDomainSpanX / currentSpanX;
 709 |   const zoomFactorY = originalDomainSpanY / currentSpanY;
 710 |   const zoomFactor = Math.min(zoomFactorX, zoomFactorY);
 711 | 
 712 |   const zoomedCellSize = baseCellSize * zoomFactor;
 713 | 
 714 |   const visiblePoints = filterVisiblePoints(
 715 |     plotterPoints,
 716 |     (val) => xScale(val),
 717 |     (val) => yScale(val),
 718 |     innerWidth,
 719 |     innerHeight,
 720 |     zoomedCellSize,
 721 |   );
 722 | 
 723 |   const effectiveImageCount = computeEffectiveImageCount(
 724 |     zoomedCellSize,
 725 |     imageCount,
 726 |   );
 727 | 
 728 |   contentGroup.selectAll(".grid-lines, .image-point").remove();
 729 | 
 730 |   renderGrid(contentGroup, xScale, yScale, innerWidth, innerHeight);
 731 |   renderImagePoints(
 732 |     contentGroup,
 733 |     visiblePoints,
 734 |     xScale,
 735 |     yScale,
 736 |     effectiveImageCount,
 737 |     tooltipElement,
 738 |     zoomedCellSize,
 739 |   );
 740 | 
 741 |   updateAxes(rootGroup, xScale, yScale);
 742 | }
 743 | 
 744 | /* ─── Axes ──────────────────────────────────────────────────────── */
 745 | 
 746 | function renderAxes(container, xScale, yScale, innerWidth, innerHeight) {
 747 |   container
 748 |     .append("g")
 749 |     .attr("class", "x-axis")
 750 |     .attr("transform", `translate(0,${innerHeight})`)
 751 |     .call(d3.axisBottom(xScale).ticks(8))
 752 |     .selectAll("text")
 753 |     .attr("fill", "#888");
 754 | 
 755 |   container
 756 |     .append("g")
 757 |     .attr("class", "y-axis")
 758 |     .call(d3.axisLeft(yScale).ticks(6))
 759 |     .selectAll("text")
 760 |     .attr("fill", "#888");
 761 | 
 762 |   styleAxisElements(container);
 763 | }
 764 | 
 765 | function updateAxes(container, xScale, yScale) {
 766 |   container.select(".x-axis").call(d3.axisBottom(xScale).ticks(8));
 767 |   container.select(".y-axis").call(d3.axisLeft(yScale).ticks(6));
 768 | 
 769 |   container.selectAll(".x-axis text, .y-axis text").attr("fill", "#888");
 770 |   styleAxisElements(container);
 771 | }
 772 | 
 773 | function styleAxisElements(container) {
 774 |   container.selectAll(".x-axis line, .y-axis line").attr("stroke", "#555");
 775 |   container.selectAll(".x-axis path, .y-axis path").attr("stroke", "#555");
 776 | }
 777 | 
 778 | /* ─── Grid ──────────────────────────────────────────────────────── */
 779 | 
 780 | function renderGrid(container, xScale, yScale, innerWidth, innerHeight) {
 781 |   const gridGroup = container.append("g").attr("class", "grid-lines");
 782 | 
 783 |   gridGroup
 784 |     .selectAll("line.horizontal")
 785 |     .data(yScale.ticks(6))
 786 |     .enter()
 787 |     .append("line")
 788 |     .attr("class", "horizontal")
 789 |     .attr("x1", 0)
 790 |     .attr("x2", innerWidth)
 791 |     .attr("y1", (tick) => yScale(tick))
 792 |     .attr("y2", (tick) => yScale(tick))
 793 |     .attr("stroke", "#2a2a3e")
 794 |     .attr("stroke-dasharray", "3 3");
 795 | 
 796 |   gridGroup
 797 |     .selectAll("line.vertical")
 798 |     .data(xScale.ticks(8))
 799 |     .enter()
 800 |     .append("line")
```

### Chunk 5/5

```jsx
 801 |     .attr("class", "vertical")
 802 |     .attr("x1", (tick) => xScale(tick))
 803 |     .attr("x2", (tick) => xScale(tick))
 804 |     .attr("y1", 0)
 805 |     .attr("y2", innerHeight)
 806 |     .attr("stroke", "#2a2a3e")
 807 |     .attr("stroke-dasharray", "3 3");
 808 | }
 809 | 
 810 | /* ─── Image Points ──────────────────────────────────────────────── */
 811 | 
 812 | function renderImagePoints(
 813 |   container,
 814 |   plotterPoints,
 815 |   xScale,
 816 |   yScale,
 817 |   imageCount,
 818 |   tooltipElement,
 819 |   cellSize = CELL_SIZE,
 820 | ) {
 821 |   const tooltip = d3.select(tooltipElement);
 822 | 
 823 |   plotterPoints.forEach((point) => {
 824 |     const centerX = xScale(point.x);
 825 |     const centerY = yScale(point.y);
 826 |     const positions = computeImagePositions(
 827 |       centerX,
 828 |       centerY,
 829 |       cellSize,
 830 |       cellSize,
 831 |       imageCount,
 832 |     );
 833 | 
 834 |     const pointGroup = container.append("g").attr("class", "image-point");
 835 | 
 836 |     positions.forEach((position) => {
 837 |       pointGroup
 838 |         .append("image")
 839 |         .attr("href", point.image)
 840 |         .attr("x", position.x)
 841 |         .attr("y", position.y)
 842 |         .attr("width", position.width)
 843 |         .attr("height", position.height)
 844 |         .attr("preserveAspectRatio", "xMidYMid meet")
 845 |         .style("cursor", "pointer")
 846 |         .on("mouseenter", function () {
 847 |           console.log("IMAGE ENTER");
 848 |         })
 849 |         .on("mouseenter", function () {
 850 |           d3.select(".d3-brush .overlay").style("pointer-events", "none");
 851 | 
 852 |           showTooltip(tooltip, event, point);
 853 |         })
 854 |         .on("mouseleave", function () {
 855 |           d3.select(".d3-brush .overlay").style("pointer-events", "all");
 856 | 
 857 |           hideTooltip(tooltip);
 858 |         });
 859 |     });
 860 | 
 861 |     pointGroup
 862 |       .on("mouseenter", (event) => showTooltip(tooltip, event, point))
 863 |       .on("mousemove", (event) => moveTooltip(tooltip, event))
 864 |       .on("mouseleave", () => hideTooltip(tooltip));
 865 |   });
 866 | }
 867 | 
 868 | /* ─── Tooltip ───────────────────────────────────────────────────── */
 869 | 
 870 | function showTooltip(tooltip, event, point) {
 871 |   tooltip
 872 |     .style("display", "block")
 873 |     .html(
 874 |       `<div class="tooltip-label">${point.label}</div>` +
 875 |         `<div class="tooltip-meta">` +
 876 |         `<span>Interval: ${point.meta.interval}s</span>` +
 877 |         `<span>Angle: ${point.meta.angle}°</span>` +
 878 |         `<span>Quality: ${point.meta.quality}</span>` +
 879 |         `</div>`,
 880 |     );
 881 | 
 882 |   moveTooltip(tooltip, event);
 883 | }
 884 | 
 885 | function moveTooltip(tooltip, event) {
 886 |   const containerRect = event.currentTarget
 887 |     .closest(".viewer-container")
 888 |     ?.getBoundingClientRect();
 889 |   if (!containerRect) return;
 890 | 
 891 |   tooltip
 892 |     .style("left", `${event.clientX - containerRect.left + 12}px`)
 893 |     .style("top", `${event.clientY - containerRect.top - 10}px`);
 894 | }
 895 | 
 896 | function hideTooltip(tooltip) {
 897 |   tooltip.style("display", "none");
 898 | }
 899 | 
 900 | export default D3Plotter;
 901 | 
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

## 📄 src\components\ImageCountSelector.jsx
**hash:** `3810d2f1`

### Chunk 1/1

```jsx
   1 | import { MAX_IMAGES_PER_POINT, MIN_IMAGES_PER_POINT } from "../lib/constants";
   2 | 
   3 | function ImageCountSelector({ imageCount, setImageCount }) {
   4 |   return (
   5 |     <div className="image-count-selector">
   6 |       <span className="selector-label">Images per point:</span>
   7 | 
   8 |       <input
   9 |         type="number"
  10 |         min={MIN_IMAGES_PER_POINT}
  11 |         max={MAX_IMAGES_PER_POINT}
  12 |         value={imageCount}
  13 |         onChange={(e) => setImageCount(e.target.value)}
  14 |         className="data-point-input"
  15 |       />
  16 | 
  17 |       <span
  18 |         style={{
  19 |           color: "#888",
  20 |           marginLeft: "10px",
  21 |         }}
  22 |       >
  23 |         Max: {MAX_IMAGES_PER_POINT}
  24 |       </span>
  25 |     </div>
  26 |   );
  27 | }
  28 | 
  29 | export default ImageCountSelector;
  30 | 
```


---

## 📄 src\components\KonvaPlotter.jsx
**hash:** `3eb8d23`

### Chunk 1/4

```jsx
   1 | /* eslint-disable no-useless-assignment */
   2 | import { useState, useRef, useCallback, useEffect } from "react";
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
  14 | import { CELL_SIZE, PLOT_DIMENSIONS, PLOT_MARGIN } from "../lib/constants";
  15 | import PlotterControls from "./PlotterControls";
  16 | import {
  17 |   getChartViewport,
  18 |   updateChartViewport,
  19 | } from "../lib/chartViewportStore";
  20 | 
  21 | const AXIS_TICK_COUNT = 8;
  22 | const EXTENT_PADDING_RATIO = 0.2;
  23 | const EXTENT_FALLBACK_PADDING = 5;
  24 | const ZOOM_STEP = 1.5;
  25 | const PINCH_ZOOM_SENSITIVITY = 0.01;
  26 | const ZOOM_MIN = 0.3;
  27 | const ZOOM_MAX = 10;
  28 | const GRID_COLOR = "#2a2a3e";
  29 | const AXIS_LINE_COLOR = "#555555";
  30 | const TICK_LABEL_COLOR = "#aaaaaa";
  31 | const TICK_LABEL_FONT_SIZE = 11;
  32 | 
  33 | function KonvaPlotter({ chartId, imageCount, xGap, yGap }) {
  34 |   const { plotterPoints, isLoading, loadError } = usePlotterData();
  35 | 
  36 |   if (isLoading) return <div className="plotter-loading">Loading data…</div>;
  37 |   if (loadError) return <div className="plotter-error">Error: {loadError}</div>;
  38 | 
  39 |   return (
  40 |     <KonvaCanvas
  41 |       plotterPoints={plotterPoints}
  42 |       imageCount={imageCount}
  43 |       xGap={xGap}
  44 |       yGap={yGap}
  45 |       chartId={chartId}
  46 |     />
  47 |   );
  48 | }
  49 | 
  50 | function KonvaCanvas({ chartId, plotterPoints, imageCount }) {
  51 |   const savedViewport = getChartViewport(chartId);
  52 |   const [contentScale, setContentScale] = useState(savedViewport.scale ?? 1);
  53 |   const [contentOffset, setContentOffset] = useState({
  54 |     x: savedViewport.translateX ?? 0,
  55 |     y: savedViewport.translateY ?? 0,
  56 |   });
  57 |   const [hoveredPoint, setHoveredPoint] = useState(null);
  58 |   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  59 |   const [isDragging, setIsDragging] = useState(false);
  60 |   const draggableGroupRef = useRef(null);
  61 |   const stageRef = useRef(null);
  62 | 
  63 |   const innerWidth =
  64 |     PLOT_DIMENSIONS.width - PLOT_MARGIN.left - PLOT_MARGIN.right;
  65 |   const innerHeight =
  66 |     PLOT_DIMENSIONS.height - PLOT_MARGIN.top - PLOT_MARGIN.bottom;
  67 | 
  68 |   const { xScale, yScale, xExtent, yExtent } = buildScales(
  69 |     plotterPoints,
  70 |     innerWidth,
  71 |     innerHeight,
  72 |   );
  73 | 
  74 |   useEffect(() => {
  75 |     if (!chartId) return;
  76 | 
  77 |     updateChartViewport(chartId, {
  78 |       scale: contentScale,
  79 |       translateX: contentOffset.x,
  80 |       translateY: contentOffset.y,
  81 |     });
  82 |   }, [chartId, contentScale, contentOffset]);
  83 | 
  84 |   const visibleDomain = computeVisibleDomain(
  85 |     xExtent,
  86 |     yExtent,
  87 |     contentOffset,
  88 |     contentScale,
  89 |     innerWidth,
  90 |     innerHeight,
  91 |   );
  92 | 
  93 |   const handleWheel = useCallback(
  94 |     (event) => {
  95 |       event.evt.preventDefault();
  96 |       const stage = event.target.getStage();
  97 |       const pointerPosition = stage.getPointerPosition();
  98 | 
  99 |       if (!isPointerInsidePlotArea(pointerPosition, innerWidth, innerHeight))
 100 |         return;
 101 | 
 102 |       const nativeEvent = event.evt;
 103 |       const isPinchGesture = nativeEvent.ctrlKey;
 104 |       const scaleDelta = computeWheelScaleDelta(
 105 |         nativeEvent.deltaY,
 106 |         isPinchGesture,
 107 |       );
 108 |       const newScale = clampScale(contentScale * scaleDelta);
 109 | 
 110 |       const mouseRelX = pointerPosition.x - PLOT_MARGIN.left - contentOffset.x;
 111 |       const mouseRelY = pointerPosition.y - PLOT_MARGIN.top - contentOffset.y;
 112 | 
 113 |       const nextOffsetX =
 114 |         contentOffset.x - mouseRelX * (newScale / contentScale - 1);
 115 |       const nextOffsetY =
 116 |         contentOffset.y - mouseRelY * (newScale / contentScale - 1);
 117 | 
 118 |       const clampedOffset = clampContentOffset(
 119 |         nextOffsetX,
 120 |         nextOffsetY,
 121 |         newScale,
 122 |         innerWidth,
 123 |         innerHeight,
 124 |       );
 125 | 
 126 |       setContentScale(newScale);
 127 |       setContentOffset(clampedOffset);
 128 |       updateChartViewport(chartId, {
 129 |         scale: newScale,
 130 |         translateX: clampedOffset.x,
 131 |         translateY: clampedOffset.y,
 132 |       });
 133 |     },
 134 |     [
 135 |       innerWidth,
 136 |       innerHeight,
 137 |       contentScale,
 138 |       contentOffset.x,
 139 |       contentOffset.y,
 140 |       chartId,
 141 |     ],
 142 |   );
 143 | 
 144 |   const handleContentDragStart = useCallback(() => {
 145 |     setIsDragging(true);
 146 |   }, []);
 147 | 
 148 |   const handleContentDragMove = useCallback(
 149 |     (event) => {
 150 |       const node = event.target;
 151 |       const offsetX = node.x() - PLOT_MARGIN.left;
 152 |       const offsetY = node.y() - PLOT_MARGIN.top;
 153 | 
 154 |       const clamped = clampContentOffset(
 155 |         offsetX,
 156 |         offsetY,
 157 |         contentScale,
 158 |         innerWidth,
 159 |         innerHeight,
 160 |       );
 161 | 
 162 |       node.x(PLOT_MARGIN.left + clamped.x);
 163 |       node.y(PLOT_MARGIN.top + clamped.y);
 164 |     },
 165 |     [contentScale, innerWidth, innerHeight],
 166 |   );
 167 | 
 168 |   const handleContentDragEnd = useCallback(
 169 |     (event) => {
 170 |       setIsDragging(false);
 171 | 
 172 |       const nodeX = event.target.x();
 173 |       const nodeY = event.target.y();
 174 | 
 175 |       const nextOffset = {
 176 |         x: nodeX - PLOT_MARGIN.left,
 177 |         y: nodeY - PLOT_MARGIN.top,
 178 |       };
 179 | 
 180 |       setContentOffset(nextOffset);
 181 | 
 182 |       updateChartViewport(chartId, {
 183 |         scale: contentScale,
 184 |         translateX: nextOffset.x,
 185 |         translateY: nextOffset.y,
 186 |       });
 187 |     },
 188 |     [chartId, contentScale],
 189 |   );
 190 | 
 191 |   const handleZoomIn = useCallback(() => {
 192 |     const centerX = innerWidth / 2;
 193 |     const centerY = innerHeight / 2;
 194 |     const newScale = clampScale(contentScale * ZOOM_STEP);
 195 | 
 196 |     const nextOffsetX =
 197 |       contentOffset.x - centerX * (newScale / contentScale - 1);
 198 |     const nextOffsetY =
 199 |       contentOffset.y - centerY * (newScale / contentScale - 1);
 200 |     const clampedOffset = clampContentOffset(
```

### Chunk 2/4

```jsx
 201 |       nextOffsetX,
 202 |       nextOffsetY,
 203 |       newScale,
 204 |       innerWidth,
 205 |       innerHeight,
 206 |     );
 207 | 
 208 |     setContentScale(newScale);
 209 |     setContentOffset(clampedOffset);
 210 |     updateChartViewport(chartId, {
 211 |       scale: newScale,
 212 |       translateX: clampedOffset.x,
 213 |       translateY: clampedOffset.y,
 214 |     });
 215 |   }, [
 216 |     innerWidth,
 217 |     innerHeight,
 218 |     contentScale,
 219 |     contentOffset.x,
 220 |     contentOffset.y,
 221 |     chartId,
 222 |   ]);
 223 | 
 224 |   const handleZoomOut = useCallback(() => {
 225 |     const centerX = innerWidth / 2;
 226 |     const centerY = innerHeight / 2;
 227 |     const newScale = clampScale(contentScale / ZOOM_STEP);
 228 | 
 229 |     const nextOffsetX =
 230 |       contentOffset.x - centerX * (newScale / contentScale - 1);
 231 |     const nextOffsetY =
 232 |       contentOffset.y - centerY * (newScale / contentScale - 1);
 233 |     const clampedOffset = clampContentOffset(
 234 |       nextOffsetX,
 235 |       nextOffsetY,
 236 |       newScale,
 237 |       innerWidth,
 238 |       innerHeight,
 239 |     );
 240 | 
 241 |     setContentScale(newScale);
 242 |     setContentOffset(clampedOffset);
 243 |     updateChartViewport(chartId, {
 244 |       scale: newScale,
 245 |       translateX: clampedOffset.x,
 246 |       translateY: clampedOffset.y,
 247 |     });
 248 |   }, [
 249 |     innerWidth,
 250 |     innerHeight,
 251 |     contentScale,
 252 |     contentOffset.x,
 253 |     contentOffset.y,
 254 |     chartId,
 255 |   ]);
 256 | 
 257 |   const handleReset = useCallback(() => {
 258 |     setContentScale(1);
 259 |     setContentOffset({ x: 0, y: 0 });
 260 | 
 261 |     updateChartViewport(chartId, {
 262 |       scale: 1,
 263 |       translateX: 0,
 264 |       translateY: 0,
 265 |     });
 266 |   }, [chartId]);
 267 | 
 268 |   const stageCursor = isDragging
 269 |     ? "grabbing"
 270 |     : contentScale > 1
 271 |       ? "grab"
 272 |       : "default";
 273 | 
 274 |   return (
 275 |     <div style={{ position: "relative" }}>
 276 |       <PlotterControls
 277 |         onZoomIn={handleZoomIn}
 278 |         onZoomOut={handleZoomOut}
 279 |         onReset={handleReset}
 280 |         zoomLevel={contentScale}
 281 |       />
 282 |       <Stage
 283 |         ref={stageRef}
 284 |         width={PLOT_DIMENSIONS.width}
 285 |         height={PLOT_DIMENSIONS.height}
 286 |         onWheel={handleWheel}
 287 |         style={{ cursor: stageCursor }}
 288 |       >
 289 |         {/* Static axis layer — grid, labels, border (not affected by zoom/pan) */}
 290 |         <Layer listening={false}>
 291 |           <PlotBackground innerWidth={innerWidth} innerHeight={innerHeight} />
 292 |           <AxisGrid
 293 |             visibleDomain={visibleDomain}
 294 |             innerWidth={innerWidth}
 295 |             innerHeight={innerHeight}
 296 |           />
 297 |           <AxisLabels
 298 |             visibleDomain={visibleDomain}
 299 |             innerWidth={innerWidth}
 300 |             innerHeight={innerHeight}
 301 |           />
 302 |           <AxisBorder innerWidth={innerWidth} innerHeight={innerHeight} />
 303 |         </Layer>
 304 | 
 305 |         {/* Clipped content layer — images are clipped to the plot area */}
 306 |         <Layer>
 307 |           <ClippedContentGroup
 308 |             innerWidth={innerWidth}
 309 |             innerHeight={innerHeight}
 310 |             contentOffset={contentOffset}
 311 |             contentScale={contentScale}
 312 |             draggableGroupRef={draggableGroupRef}
 313 |             onDragStart={handleContentDragStart}
 314 |             onDragMove={handleContentDragMove}
 315 |             onDragEnd={handleContentDragEnd}
 316 |           >
 317 |             {plotterPoints.map((point) => (
 318 |               <ImagePointGroup
 319 |                 key={point.id}
 320 |                 point={point}
 321 |                 xScale={xScale}
 322 |                 yScale={yScale}
 323 |                 imageCount={imageCount}
 324 |                 onHover={setHoveredPoint}
 325 |                 onCursorMove={setCursorPosition}
 326 |               />
 327 |             ))}
 328 |           </ClippedContentGroup>
 329 |         </Layer>
 330 |       </Stage>
 331 | 
 332 |       {hoveredPoint && (
 333 |         <PointTooltip
 334 |           hoveredPoint={hoveredPoint}
 335 |           cursorPosition={cursorPosition}
 336 |         />
 337 |       )}
 338 |     </div>
 339 |   );
 340 | }
 341 | 
 342 | function ClippedContentGroup({
 343 |   innerWidth,
 344 |   innerHeight,
 345 |   contentOffset,
 346 |   contentScale,
 347 |   draggableGroupRef,
 348 |   onDragStart,
 349 |   onDragMove,
 350 |   onDragEnd,
 351 |   children,
 352 | }) {
 353 |   const plotLeft = PLOT_MARGIN.left;
 354 |   const plotTop = PLOT_MARGIN.top;
 355 | 
 356 |   const clipFunction = (ctx) => {
 357 |     ctx.rect(plotLeft, plotTop, innerWidth, innerHeight);
 358 |   };
 359 | 
 360 |   return (
 361 |     <Group clipFunc={clipFunction}>
 362 |       <Group
 363 |         ref={draggableGroupRef}
 364 |         x={plotLeft + contentOffset.x}
 365 |         y={plotTop + contentOffset.y}
 366 |         scaleX={contentScale}
 367 |         scaleY={contentScale}
 368 |         draggable
 369 |         onDragStart={onDragStart}
 370 |         onDragMove={onDragMove}
 371 |         onDragEnd={onDragEnd}
 372 |       >
 373 |         {/* Invisible hit area so drag works from any empty space in the plot */}
 374 |         <Rect
 375 |           x={0}
 376 |           y={0}
 377 |           width={innerWidth}
 378 |           height={innerHeight}
 379 |           fill="transparent"
 380 |           listening={true}
 381 |         />
 382 |         {children}
 383 |       </Group>
 384 |     </Group>
 385 |   );
 386 | }
 387 | 
 388 | function PointTooltip({ hoveredPoint, cursorPosition }) {
 389 |   return (
 390 |     <div
 391 |       className="plotter-tooltip"
 392 |       style={{
 393 |         display: "block",
 394 |         position: "absolute",
 395 |         left: cursorPosition.x + 15,
 396 |         top: cursorPosition.y - 10,
 397 |         pointerEvents: "none",
 398 |       }}
 399 |     >
 400 |       <div className="tooltip-label">{hoveredPoint.label}</div>
```

### Chunk 3/4

```jsx
 401 |       <div className="tooltip-meta">
 402 |         <span>Interval: {hoveredPoint.meta.interval}s</span>
 403 |         <span>Angle: {hoveredPoint.meta.angle}°</span>
 404 |         <span>Quality: {hoveredPoint.meta.quality}</span>
 405 |       </div>
 406 |     </div>
 407 |   );
 408 | }
 409 | 
 410 | function PlotBackground({ innerWidth, innerHeight }) {
 411 |   return (
 412 |     <Rect
 413 |       x={PLOT_MARGIN.left}
 414 |       y={PLOT_MARGIN.top}
 415 |       width={innerWidth}
 416 |       height={innerHeight}
 417 |       fill="#16213e"
 418 |     />
 419 |   );
 420 | }
 421 | 
 422 | function AxisBorder({ innerWidth, innerHeight }) {
 423 |   return (
 424 |     <Rect
 425 |       x={PLOT_MARGIN.left}
 426 |       y={PLOT_MARGIN.top}
 427 |       width={innerWidth}
 428 |       height={innerHeight}
 429 |       stroke={AXIS_LINE_COLOR}
 430 |       strokeWidth={1}
 431 |       listening={false}
 432 |     />
 433 |   );
 434 | }
 435 | 
 436 | function AxisGrid({ visibleDomain, innerWidth, innerHeight }) {
 437 |   const xTicks = buildTicks(
 438 |     visibleDomain.xMin,
 439 |     visibleDomain.xMax,
 440 |     AXIS_TICK_COUNT,
 441 |   );
 442 |   const yTicks = buildTicks(
 443 |     visibleDomain.yMin,
 444 |     visibleDomain.yMax,
 445 |     AXIS_TICK_COUNT,
 446 |   );
 447 | 
 448 |   const xScreenScale = buildLinearScale(
 449 |     visibleDomain.xMin,
 450 |     visibleDomain.xMax,
 451 |     0,
 452 |     innerWidth,
 453 |   );
 454 |   const yScreenScale = buildLinearScale(
 455 |     visibleDomain.yMin,
 456 |     visibleDomain.yMax,
 457 |     innerHeight,
 458 |     0,
 459 |   );
 460 | 
 461 |   const gridLines = [];
 462 | 
 463 |   xTicks.forEach((value, index) => {
 464 |     const xPos = PLOT_MARGIN.left + xScreenScale(value);
 465 |     if (xPos < PLOT_MARGIN.left || xPos > PLOT_MARGIN.left + innerWidth) return;
 466 |     gridLines.push(
 467 |       <Line
 468 |         key={`xgrid-${index}`}
 469 |         points={[xPos, PLOT_MARGIN.top, xPos, PLOT_MARGIN.top + innerHeight]}
 470 |         stroke={GRID_COLOR}
 471 |         strokeWidth={1}
 472 |         dash={[4, 4]}
 473 |         listening={false}
 474 |       />,
 475 |     );
 476 |   });
 477 | 
 478 |   yTicks.forEach((value, index) => {
 479 |     const yPos = PLOT_MARGIN.top + yScreenScale(value);
 480 |     if (yPos < PLOT_MARGIN.top || yPos > PLOT_MARGIN.top + innerHeight) return;
 481 |     gridLines.push(
 482 |       <Line
 483 |         key={`ygrid-${index}`}
 484 |         points={[PLOT_MARGIN.left, yPos, PLOT_MARGIN.left + innerWidth, yPos]}
 485 |         stroke={GRID_COLOR}
 486 |         strokeWidth={1}
 487 |         dash={[4, 4]}
 488 |         listening={false}
 489 |       />,
 490 |     );
 491 |   });
 492 | 
 493 |   return <>{gridLines}</>;
 494 | }
 495 | 
 496 | function AxisLabels({ visibleDomain, innerWidth, innerHeight }) {
 497 |   const xTicks = buildTicks(
 498 |     visibleDomain.xMin,
 499 |     visibleDomain.xMax,
 500 |     AXIS_TICK_COUNT,
 501 |   );
 502 |   const yTicks = buildTicks(
 503 |     visibleDomain.yMin,
 504 |     visibleDomain.yMax,
 505 |     AXIS_TICK_COUNT,
 506 |   );
 507 | 
 508 |   const xScreenScale = buildLinearScale(
 509 |     visibleDomain.xMin,
 510 |     visibleDomain.xMax,
 511 |     0,
 512 |     innerWidth,
 513 |   );
 514 |   const yScreenScale = buildLinearScale(
 515 |     visibleDomain.yMin,
 516 |     visibleDomain.yMax,
 517 |     innerHeight,
 518 |     0,
 519 |   );
 520 | 
 521 |   const tickLabels = [];
 522 | 
 523 |   xTicks.forEach((value, index) => {
 524 |     const xPos = PLOT_MARGIN.left + xScreenScale(value);
 525 |     if (xPos < PLOT_MARGIN.left - 5 || xPos > PLOT_MARGIN.left + innerWidth + 5)
 526 |       return;
 527 |     tickLabels.push(
 528 |       <Text
 529 |         key={`xlabel-${index}`}
 530 |         text={formatTickLabel(value)}
 531 |         x={xPos - 14}
 532 |         y={PLOT_MARGIN.top + innerHeight + 6}
 533 |         fill={TICK_LABEL_COLOR}
 534 |         fontSize={TICK_LABEL_FONT_SIZE}
 535 |         listening={false}
 536 |       />,
 537 |     );
 538 |   });
 539 | 
 540 |   yTicks.forEach((value, index) => {
 541 |     const yPos = PLOT_MARGIN.top + yScreenScale(value);
 542 |     if (yPos < PLOT_MARGIN.top - 5 || yPos > PLOT_MARGIN.top + innerHeight + 5)
 543 |       return;
 544 |     tickLabels.push(
 545 |       <Text
 546 |         key={`ylabel-${index}`}
 547 |         text={formatTickLabel(value)}
 548 |         x={PLOT_MARGIN.left - 36}
 549 |         y={yPos - 6}
 550 |         fill={TICK_LABEL_COLOR}
 551 |         fontSize={TICK_LABEL_FONT_SIZE}
 552 |         width={32}
 553 |         align="right"
 554 |         listening={false}
 555 |       />,
 556 |     );
 557 |   });
 558 | 
 559 |   return <>{tickLabels}</>;
 560 | }
 561 | 
 562 | function ImagePointGroup({
 563 |   point,
 564 |   xScale,
 565 |   yScale,
 566 |   imageCount,
 567 |   onHover,
 568 |   onCursorMove,
 569 | }) {
 570 |   const centerX = xScale(point.x);
 571 |   const centerY = yScale(point.y);
 572 |   const positions = computeImagePositions(
 573 |     centerX,
 574 |     centerY,
 575 |     CELL_SIZE,
 576 |     CELL_SIZE,
 577 |     imageCount,
 578 |   );
 579 | 
 580 |   return (
 581 |     <>
 582 |       {positions.map((position, index) => (
 583 |         <KonvaImageFromUrl
 584 |           key={`${point.id}-${index}`}
 585 |           imageUrl={point.image}
 586 |           x={position.x}
 587 |           y={position.y}
 588 |           width={position.width}
 589 |           height={position.height}
 590 |           point={point}
 591 |           onHover={onHover}
 592 |           onCursorMove={onCursorMove}
 593 |         />
 594 |       ))}
 595 |     </>
 596 |   );
 597 | }
 598 | 
 599 | function KonvaImageFromUrl({
 600 |   imageUrl,
```

### Chunk 4/4

```jsx
 601 |   x,
 602 |   y,
 603 |   width,
 604 |   height,
 605 |   point,
 606 |   onHover,
 607 |   onCursorMove,
 608 | }) {
 609 |   const [loadedImage, setLoadedImage] = useState(null);
 610 | 
 611 |   useEffect(() => {
 612 |     const htmlImage = new window.Image();
 613 |     htmlImage.crossOrigin = "anonymous";
 614 |     htmlImage.src = imageUrl;
 615 |     htmlImage.onload = () => setLoadedImage(htmlImage);
 616 |     return () => {
 617 |       htmlImage.onload = null;
 618 |     };
 619 |   }, [imageUrl]);
 620 | 
 621 |   const handleMouseEnter = useCallback(
 622 |     (event) => {
 623 |       const stage = event.target.getStage();
 624 |       const pointer = stage.getPointerPosition();
 625 |       onCursorMove({ x: pointer.x, y: pointer.y });
 626 |       onHover(point);
 627 |     },
 628 |     [point, onHover, onCursorMove],
 629 |   );
 630 | 
 631 |   const handleMouseLeave = useCallback(() => onHover(null), [onHover]);
 632 | 
 633 |   if (!loadedImage) return null;
 634 | 
 635 |   return (
 636 |     <KonvaImage
 637 |       image={loadedImage}
 638 |       x={x}
 639 |       y={y}
 640 |       width={width}
 641 |       height={height}
 642 |       onMouseEnter={handleMouseEnter}
 643 |       onMouseLeave={handleMouseLeave}
 644 |     />
 645 |   );
 646 | }
 647 | 
 648 | /* ─── Pure utility functions ──────────────────────────────────────────── */
 649 | 
 650 | function isPointerInsidePlotArea(
 651 |   pointerPosition,
 652 |   plotInnerWidth,
 653 |   plotInnerHeight,
 654 | ) {
 655 |   return (
 656 |     pointerPosition.x > PLOT_MARGIN.left &&
 657 |     pointerPosition.x < PLOT_MARGIN.left + plotInnerWidth &&
 658 |     pointerPosition.y > PLOT_MARGIN.top &&
 659 |     pointerPosition.y < PLOT_MARGIN.top + plotInnerHeight
 660 |   );
 661 | }
 662 | 
 663 | function clampScale(rawScale) {
 664 |   return Math.max(ZOOM_MIN, Math.min(rawScale, ZOOM_MAX));
 665 | }
 666 | 
 667 | function computeWheelScaleDelta(deltaY, isPinchGesture) {
 668 |   if (isPinchGesture) {
 669 |     return Math.exp(-deltaY * PINCH_ZOOM_SENSITIVITY);
 670 |   }
 671 |   return deltaY > 0 ? 1 / ZOOM_STEP : ZOOM_STEP;
 672 | }
 673 | 
 674 | function clampContentOffset(
 675 |   rawX,
 676 |   rawY,
 677 |   scale,
 678 |   plotInnerWidth,
 679 |   plotInnerHeight,
 680 | ) {
 681 |   const scaledWidth = plotInnerWidth * scale;
 682 |   const scaledHeight = plotInnerHeight * scale;
 683 | 
 684 |   let clampedX = rawX;
 685 |   let clampedY = rawY;
 686 | 
 687 |   if (scaledWidth <= plotInnerWidth) {
 688 |     clampedX = (plotInnerWidth - scaledWidth) / 2;
 689 |   } else {
 690 |     const minX = plotInnerWidth - scaledWidth;
 691 |     const maxX = 0;
 692 |     clampedX = Math.max(minX, Math.min(rawX, maxX));
 693 |   }
 694 | 
 695 |   if (scaledHeight <= plotInnerHeight) {
 696 |     clampedY = (plotInnerHeight - scaledHeight) / 2;
 697 |   } else {
 698 |     const minY = plotInnerHeight - scaledHeight;
 699 |     const maxY = 0;
 700 |     clampedY = Math.max(minY, Math.min(rawY, maxY));
 701 |   }
 702 | 
 703 |   return { x: clampedX, y: clampedY };
 704 | }
 705 | 
 706 | function buildScales(plotterPoints, plotInnerWidth, plotInnerHeight) {
 707 |   const xValues = plotterPoints.map((p) => p.x);
 708 |   const yValues = plotterPoints.map((p) => p.y);
 709 | 
 710 |   const xMin = Math.min(...xValues);
 711 |   const xMax = Math.max(...xValues);
 712 |   const yMin = Math.min(...yValues);
 713 |   const yMax = Math.max(...yValues);
 714 | 
 715 |   const xPadding =
 716 |     (xMax - xMin) * EXTENT_PADDING_RATIO || EXTENT_FALLBACK_PADDING;
 717 |   const yPadding =
 718 |     (yMax - yMin) * EXTENT_PADDING_RATIO || EXTENT_FALLBACK_PADDING;
 719 | 
 720 |   const xExtent = [xMin - xPadding, xMax + xPadding];
 721 |   const yExtent = [yMin - yPadding, yMax + yPadding];
 722 | 
 723 |   const xScale = buildLinearScale(xExtent[0], xExtent[1], 0, plotInnerWidth);
 724 |   const yScale = buildLinearScale(yExtent[0], yExtent[1], plotInnerHeight, 0);
 725 | 
 726 |   return { xScale, yScale, xExtent, yExtent };
 727 | }
 728 | 
 729 | function computeVisibleDomain(
 730 |   xExtent,
 731 |   yExtent,
 732 |   contentOffset,
 733 |   scale,
 734 |   plotInnerWidth,
 735 |   plotInnerHeight,
 736 | ) {
 737 |   const domainWidth = xExtent[1] - xExtent[0];
 738 |   const domainHeight = yExtent[1] - yExtent[0];
 739 | 
 740 |   const xMin =
 741 |     xExtent[0] - (contentOffset.x / scale / plotInnerWidth) * domainWidth;
 742 |   const xMax = xMin + domainWidth / scale;
 743 | 
 744 |   const yMax =
 745 |     yExtent[1] + (contentOffset.y / scale / plotInnerHeight) * domainHeight;
 746 |   const yMin = yMax - domainHeight / scale;
 747 | 
 748 |   return { xMin, xMax, yMin, yMax };
 749 | }
 750 | 
 751 | function buildLinearScale(domainMin, domainMax, rangeMin, rangeMax) {
 752 |   return (value) => {
 753 |     const ratio = (value - domainMin) / (domainMax - domainMin);
 754 |     return rangeMin + ratio * (rangeMax - rangeMin);
 755 |   };
 756 | }
 757 | 
 758 | function buildTicks(min, max, count) {
 759 |   const rawStep = (max - min) / count;
 760 |   const magnitude = Math.pow(10, Math.floor(Math.log10(rawStep)));
 761 |   const niceSteps = [1, 2, 2.5, 5, 10];
 762 |   const step =
 763 |     niceSteps.map((s) => s * magnitude).find((s) => s >= rawStep) ?? rawStep;
 764 | 
 765 |   const start = Math.ceil(min / step) * step;
 766 |   const ticks = [];
 767 | 
 768 |   for (let tick = start; tick <= max + step * 0.001; tick += step) {
 769 |     ticks.push(parseFloat(tick.toPrecision(10)));
 770 |   }
 771 | 
 772 |   return ticks;
 773 | }
 774 | 
 775 | function formatTickLabel(value) {
 776 |   if (Math.abs(value) >= 1000) return value.toExponential(1);
 777 |   const formattedString = value.toPrecision(4);
 778 |   return parseFloat(formattedString).toString();
 779 | }
 780 | 
 781 | export default KonvaPlotter;
 782 | 
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
**hash:** `265f2eab`

### Chunk 1/5

```jsx
   1 | import { useRef, useEffect, useState, useCallback } from "react";
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
  16 | import { CELL_SIZE, PLOT_DIMENSIONS, PLOT_MARGIN } from "../lib/constants";
  17 | import {
  18 |   computeAdaptiveCellSize,
  19 |   filterVisiblePoints,
  20 |   computeEffectiveImageCount,
  21 | } from "../lib/densityLayout";
  22 | import {
  23 |   getChartViewport,
  24 |   updateChartViewport,
  25 | } from "../lib/chartViewportStore";
  26 | import PlotterControls from "./PlotterControls";
  27 | import { logChartInteractionEvent } from "../lib/chartInteractionLogger";
  28 | import { useInteractionMode } from "../lib/interactionMode";
  29 | 
  30 | const GRID_COLOR = 0x333333;
  31 | const GRID_ALPHA = 0.45;
  32 | const AXIS_BORDER_COLOR = 0x555555;
  33 | const TICK_COLOR = "#999999";
  34 | 
  35 | const ZOOM_MIN = 0.3;
  36 | const ZOOM_MAX = 100000;
  37 | const ZOOM_STEP = 1.5;
  38 | 
  39 | /*
  40 |  * CLAMP PAN
  41 |  */
  42 | function clampPan(xOffset, yOffset, scaleFactor, width, height) {
  43 |   const scaledWidth = width * scaleFactor;
  44 |   const scaledHeight = height * scaleFactor;
  45 | 
  46 |   let minOffsetLimitX = width - scaledWidth;
  47 |   let minOffsetLimitY = height - scaledHeight;
  48 | 
  49 |   if (scaledWidth < width) {
  50 |     minOffsetLimitX = (width - scaledWidth) / 2;
  51 |   }
  52 | 
  53 |   if (scaledHeight < height) {
  54 |     minOffsetLimitY = (height - scaledHeight) / 2;
  55 |   }
  56 | 
  57 |   return {
  58 |     x: Math.min(0, Math.max(minOffsetLimitX, xOffset)),
  59 |     y: Math.min(0, Math.max(minOffsetLimitY, yOffset)),
  60 |   };
  61 | }
  62 | 
  63 | /*
  64 |  * COMPUTE VIEWPORT SCALES
  65 |  */
  66 | function computeViewportScales(
  67 |   baseScaleX,
  68 |   baseScaleY,
  69 |   scaleFactor,
  70 |   xOffset,
  71 |   yOffset,
  72 |   width,
  73 |   height,
  74 | ) {
  75 |   const leftPixel = -xOffset / scaleFactor;
  76 |   const rightPixel = (width - xOffset) / scaleFactor;
  77 | 
  78 |   const topPixel = -yOffset / scaleFactor;
  79 |   const bottomPixel = (height - yOffset) / scaleFactor;
  80 | 
  81 |   const visibleXMin = baseScaleX.invert(leftPixel);
  82 |   const visibleXMax = baseScaleX.invert(rightPixel);
  83 | 
  84 |   const visibleYMax = baseScaleY.invert(topPixel);
  85 |   const visibleYMin = baseScaleY.invert(bottomPixel);
  86 | 
  87 |   const dynamicXScale = d3
  88 |     .scaleLinear()
  89 |     .domain([visibleXMin, visibleXMax])
  90 |     .range([0, width]);
  91 | 
  92 |   const dynamicYScale = d3
  93 |     .scaleLinear()
  94 |     .domain([visibleYMin, visibleYMax])
  95 |     .range([height, 0]);
  96 | 
  97 |   return {
  98 |     dynamicXScale,
  99 |     dynamicYScale,
 100 |   };
 101 | }
 102 | 
 103 | /*
 104 |  * INITIALIZE PIXI APP
 105 |  */
 106 | async function initializePixiApp(containerElement, innerWidth, innerHeight) {
 107 |   const app = new PixiApp();
 108 | 
 109 |   await app.init({
 110 |     width: PLOT_DIMENSIONS.width,
 111 |     height: PLOT_DIMENSIONS.height,
 112 |     background: 0x16213e,
 113 |     antialias: true,
 114 |   });
 115 | 
 116 |   containerElement.appendChild(app.canvas);
 117 | 
 118 |   const axesLayer = new Container();
 119 |   axesLayer.x = PLOT_MARGIN.left;
 120 |   axesLayer.y = PLOT_MARGIN.top;
 121 |   app.stage.addChild(axesLayer);
 122 | 
 123 |   const contentLayer = new Container();
 124 |   contentLayer.x = PLOT_MARGIN.left;
 125 |   contentLayer.y = PLOT_MARGIN.top;
 126 |   app.stage.addChild(contentLayer);
 127 | 
 128 |   const mask = new Graphics();
 129 |   mask.rect(PLOT_MARGIN.left, PLOT_MARGIN.top, innerWidth, innerHeight);
 130 |   mask.fill(0xffffff);
 131 |   app.stage.addChild(mask);
 132 |   contentLayer.mask = mask;
 133 | 
 134 |   const brushGraphics = new Graphics();
 135 |   app.stage.addChild(brushGraphics);
 136 | 
 137 |   return {
 138 |     app,
 139 |     axesLayer,
 140 |     contentLayer,
 141 |     mask,
 142 |     brushGraphics,
 143 |   };
 144 | }
 145 | 
 146 | /*
 147 |  * APPLY BRUSH ZOOM TO TRANSFORM
 148 |  */
 149 | function applyBrushZoom(
 150 |   { startX, startY, width, height },
 151 |   transformRef,
 152 |   innerWidth,
 153 |   innerHeight,
 154 | ) {
 155 |   const currentScale = transformRef.current.scale;
 156 |   const currentX = transformRef.current.x;
 157 |   const currentY = transformRef.current.y;
 158 | 
 159 |   const contentX0 = (startX - currentX) / currentScale;
 160 |   const contentY0 = (startY - currentY) / currentScale;
 161 |   const contentWidth = width / currentScale;
 162 |   const contentHeight = height / currentScale;
 163 | 
 164 |   const scaleFactorX = innerWidth / contentWidth;
 165 |   const scaleFactorY = innerHeight / contentHeight;
 166 |   const nextScale = Math.max(
 167 |     ZOOM_MIN,
 168 |     Math.min(Math.min(scaleFactorX, scaleFactorY), ZOOM_MAX),
 169 |   );
 170 | 
 171 |   const offsetCoordinateX = -contentX0 * nextScale;
 172 |   const offsetCoordinateY = -contentY0 * nextScale;
 173 | 
 174 |   const clamped = clampPan(
 175 |     offsetCoordinateX,
 176 |     offsetCoordinateY,
 177 |     nextScale,
 178 |     innerWidth,
 179 |     innerHeight,
 180 |   );
 181 |   return {
 182 |     scale: nextScale,
 183 |     x: clamped.x,
 184 |     y: clamped.y,
 185 |   };
 186 | }
 187 | 
 188 | /*
 189 |  * DRAW BRUSH OVERLAY
 190 |  */
 191 | function drawBrushOverlay(graphics, startX, startY, width, height) {
 192 |   if (!graphics) return;
 193 |   graphics.clear();
 194 |   if (width > 0 && height > 0) {
 195 |     graphics.rect(
 196 |       PLOT_MARGIN.left + startX,
 197 |       PLOT_MARGIN.top + startY,
 198 |       width,
 199 |       height,
 200 |     );
```

### Chunk 2/5

```jsx
 201 |     graphics.fill({ color: 0x4493ff, alpha: 0.15 });
 202 |     graphics.stroke({ width: 1.5, color: 0x4493ff });
 203 |   }
 204 | }
 205 | 
 206 | function PixiPlotter({ chartId, imageCount, xGap, yGap, syntheticPoints }) {
 207 |   const {
 208 |     plotterPoints: fetchedPoints,
 209 |     isLoading,
 210 |     loadError,
 211 |   } = usePlotterData();
 212 |   const plotterPoints = syntheticPoints || fetchedPoints;
 213 | 
 214 |   if (!syntheticPoints && isLoading) {
 215 |     return <div>Loading...</div>;
 216 |   }
 217 | 
 218 |   if (!syntheticPoints && loadError) {
 219 |     return <div>Error: {loadError}</div>;
 220 |   }
 221 | 
 222 |   return (
 223 |     <PixiCanvas
 224 |       plotterPoints={plotterPoints}
 225 |       imageCount={imageCount}
 226 |       xGap={xGap}
 227 |       yGap={yGap}
 228 |       chartId={chartId}
 229 |     />
 230 |   );
 231 | }
 232 | 
 233 | function PixiCanvas({ plotterPoints, imageCount, xGap, yGap, chartId }) {
 234 |   const containerRef = useRef(null);
 235 |   const pixiAppRef = useRef(null);
 236 |   const axesLayerRef = useRef(null);
 237 |   const contentLayerRef = useRef(null);
 238 |   const maskRef = useRef(null);
 239 |   const tooltipRef = useRef(null);
 240 |   const brushGraphicsRef = useRef(null);
 241 |   const brushStartRef = useRef(null);
 242 | 
 243 |   const baseScalesRef = useRef({
 244 |     xScale: null,
 245 |     yScale: null,
 246 |   });
 247 | 
 248 |   const savedViewport = getChartViewport(chartId);
 249 | 
 250 |   const transformRef = useRef({
 251 |     scale: savedViewport.scale || 1,
 252 |     x: savedViewport.translateX || 0,
 253 |     y: savedViewport.translateY || 0,
 254 |   });
 255 | 
 256 |   const dragRef = useRef({
 257 |     dragging: false,
 258 |     startX: 0,
 259 |     startY: 0,
 260 |   });
 261 | 
 262 |   const [zoomLevel, setZoomLevel] = useState(savedViewport.scale || 1);
 263 |   const [isDragging, setIsDragging] = useState(false);
 264 | 
 265 |   const { interactionMode, setInteractionMode, isPanMode } =
 266 |     useInteractionMode();
 267 | 
 268 |   const innerWidth =
 269 |     PLOT_DIMENSIONS.width - PLOT_MARGIN.left - PLOT_MARGIN.right;
 270 |   const innerHeight =
 271 |     PLOT_DIMENSIONS.height - PLOT_MARGIN.top - PLOT_MARGIN.bottom;
 272 | 
 273 |   /*
 274 |    * GET VIEWPORT SCALES
 275 |    */
 276 |   const getViewportScales = useCallback(() => {
 277 |     const baseScaleX = baseScalesRef.current.xScale;
 278 |     const baseScaleY = baseScalesRef.current.yScale;
 279 | 
 280 |     if (!baseScaleX || !baseScaleY) {
 281 |       return null;
 282 |     }
 283 | 
 284 |     const { scale, x, y } = transformRef.current;
 285 | 
 286 |     return computeViewportScales(
 287 |       baseScaleX,
 288 |       baseScaleY,
 289 |       scale,
 290 |       x,
 291 |       y,
 292 |       innerWidth,
 293 |       innerHeight,
 294 |     );
 295 |   }, [innerWidth, innerHeight]);
 296 | 
 297 |   /*
 298 |    * RENDER AXES
 299 |    */
 300 |   const renderAxes = useCallback(() => {
 301 |     if (!axesLayerRef.current) return;
 302 | 
 303 |     const viewportScales = getViewportScales();
 304 |     if (!viewportScales) return;
 305 | 
 306 |     const axesLayer = axesLayerRef.current;
 307 |     axesLayer.removeChildren();
 308 | 
 309 |     drawGrid(
 310 |       axesLayer,
 311 |       viewportScales.dynamicXScale,
 312 |       viewportScales.dynamicYScale,
 313 |       innerWidth,
 314 |       innerHeight,
 315 |     );
 316 | 
 317 |     drawAxesLabels(
 318 |       axesLayer,
 319 |       viewportScales.dynamicXScale,
 320 |       viewportScales.dynamicYScale,
 321 |       innerWidth,
 322 |       innerHeight,
 323 |     );
 324 |   }, [getViewportScales, innerWidth, innerHeight]);
 325 | 
 326 |   /*
 327 |    * APPLY TRANSFORM — redraws points from current viewport scales (deep zoom).
 328 |    * Content layer is always identity; no matrix upscaling of sprites.
 329 |    */
 330 |   const applyTransform = useCallback(() => {
 331 |     if (!contentLayerRef.current) return;
 332 | 
 333 |     const viewportScales = getViewportScales();
 334 |     if (!viewportScales) return;
 335 | 
 336 |     const { dynamicXScale, dynamicYScale } = viewportScales;
 337 |     const { scale } = transformRef.current;
 338 | 
 339 |     const contentLayer = contentLayerRef.current;
 340 |     contentLayer.removeChildren();
 341 |     contentLayer.scale.set(1);
 342 |     contentLayer.x = PLOT_MARGIN.left;
 343 |     contentLayer.y = PLOT_MARGIN.top;
 344 | 
 345 |     const baseScaleX = baseScalesRef.current.xScale;
 346 |     const baseScaleY = baseScalesRef.current.yScale;
 347 |     if (!baseScaleX || !baseScaleY) return;
 348 | 
 349 |     const scaledPoints = plotterPoints.map((point) => ({
 350 |       ...point,
 351 |       scaledX: point.x * (xGap / 10),
 352 |       scaledY: point.y * (yGap / 10),
 353 |     }));
 354 | 
 355 |     /* Same pattern as Recharts: base cell size × current zoom scale. */
 356 |     const adaptiveCellSizeBase = computeAdaptiveCellSize(
 357 |       scaledPoints,
 358 |       (val) => baseScaleX(val),
 359 |       (val) => baseScaleY(val),
 360 |     );
 361 |     const currentCellSize = adaptiveCellSizeBase * scale;
 362 | 
 363 |     /* Screen-space culling. */
 364 |     const xScreenFn = (val) => baseScaleX(val) * scale + transformRef.current.x;
 365 |     const yScreenFn = (val) => baseScaleY(val) * scale + transformRef.current.y;
 366 |     const visiblePoints = filterVisiblePoints(
 367 |       scaledPoints,
 368 |       xScreenFn,
 369 |       yScreenFn,
 370 |       innerWidth,
 371 |       innerHeight,
 372 |       currentCellSize,
 373 |     );
 374 | 
 375 |     const effectiveImageCount = computeEffectiveImageCount(
 376 |       currentCellSize,
 377 |       imageCount,
 378 |     );
 379 | 
 380 |     drawPoints(
 381 |       contentLayer,
 382 |       visiblePoints,
 383 |       dynamicXScale,
 384 |       dynamicYScale,
 385 |       effectiveImageCount,
 386 |       tooltipRef,
 387 |       currentCellSize,
 388 |     );
 389 | 
 390 |     renderAxes();
 391 |   }, [
 392 |     getViewportScales,
 393 |     renderAxes,
 394 |     plotterPoints,
 395 |     xGap,
 396 |     yGap,
 397 |     innerWidth,
 398 |     innerHeight,
 399 |     imageCount,
 400 |   ]);
```

### Chunk 3/5

```jsx
 401 | 
 402 |   /*
 403 |    * MAIN RENDER — loads assets then delegates to applyTransform for drawing.
 404 |    */
 405 |   const renderScene = useCallback(async () => {
 406 |     if (!axesLayerRef.current || !contentLayerRef.current) return;
 407 | 
 408 |     const scaledPoints = plotterPoints.map((point) => ({
 409 |       ...point,
 410 |       scaledX: point.x * (xGap / 10),
 411 |       scaledY: point.y * (yGap / 10),
 412 |     }));
 413 | 
 414 |     const xDomainExtent = d3.extent(scaledPoints, (point) => point.scaledX);
 415 |     const yDomainExtent = d3.extent(scaledPoints, (point) => point.scaledY);
 416 | 
 417 |     const baseScaleX = d3
 418 |       .scaleLinear()
 419 |       .domain([xDomainExtent[0] - 5, xDomainExtent[1] + 5])
 420 |       .range([0, innerWidth]);
 421 | 
 422 |     const baseScaleY = d3
 423 |       .scaleLinear()
 424 |       .domain([yDomainExtent[0] - 5, yDomainExtent[1] + 5])
 425 |       .range([innerHeight, 0]);
 426 | 
 427 |     baseScalesRef.current = { xScale: baseScaleX, yScale: baseScaleY };
 428 |     renderAxes();
 429 | 
 430 |     const uniqueImageUrls = [
 431 |       ...new Set(plotterPoints.map((point) => point.image)),
 432 |     ];
 433 |     await Assets.load(uniqueImageUrls);
 434 | 
 435 |     applyTransform();
 436 |   }, [
 437 |     plotterPoints,
 438 |     xGap,
 439 |     yGap,
 440 |     innerWidth,
 441 |     innerHeight,
 442 |     renderAxes,
 443 |     applyTransform,
 444 |   ]);
 445 | 
 446 |   /*
 447 |    * ZOOM
 448 |    */
 449 |   const zoom = useCallback(
 450 |     (direction, interactionSource = "button") => {
 451 |       logChartInteractionEvent({
 452 |         interactionType: direction === "in" ? "ZOOM_IN" : "ZOOM_OUT",
 453 |         visualizationLibrary: "Pixi",
 454 |         interactionSource: interactionSource,
 455 |       });
 456 |       const currentScale = transformRef.current.scale;
 457 | 
 458 |       const nextScale =
 459 |         direction === "in"
 460 |           ? Math.min(currentScale * ZOOM_STEP, ZOOM_MAX)
 461 |           : Math.max(currentScale / ZOOM_STEP, ZOOM_MIN);
 462 | 
 463 |       const plotCenterX = innerWidth / 2;
 464 |       const plotCenterY = innerHeight / 2;
 465 | 
 466 |       const nextTransformOffsetX =
 467 |         transformRef.current.x - plotCenterX * (nextScale / currentScale - 1);
 468 | 
 469 |       const nextTransformOffsetY =
 470 |         transformRef.current.y - plotCenterY * (nextScale / currentScale - 1);
 471 | 
 472 |       const clampedTransformOffset = clampPan(
 473 |         nextTransformOffsetX,
 474 |         nextTransformOffsetY,
 475 |         nextScale,
 476 |         innerWidth,
 477 |         innerHeight,
 478 |       );
 479 | 
 480 |       transformRef.current = {
 481 |         scale: nextScale,
 482 |         x: clampedTransformOffset.x,
 483 |         y: clampedTransformOffset.y,
 484 |       };
 485 | 
 486 |       updateChartViewport(chartId, {
 487 |         scale: nextScale,
 488 |         translateX: clampedTransformOffset.x,
 489 |         translateY: clampedTransformOffset.y,
 490 |       });
 491 | 
 492 |       setZoomLevel(nextScale);
 493 |       applyTransform();
 494 |     },
 495 |     [innerWidth, innerHeight, chartId, applyTransform],
 496 |   );
 497 | 
 498 |   /*
 499 |    * RESET
 500 |    */
 501 |   const reset = useCallback(
 502 |     (interactionSource) => {
 503 |       const computedSource =
 504 |         interactionSource && typeof interactionSource === "string"
 505 |           ? interactionSource
 506 |           : "button";
 507 | 
 508 |       logChartInteractionEvent({
 509 |         interactionType: "RESET",
 510 |         visualizationLibrary: "Pixi",
 511 |         interactionSource: computedSource,
 512 |       });
 513 | 
 514 |       transformRef.current = {
 515 |         scale: 1,
 516 |         x: 0,
 517 |         y: 0,
 518 |       };
 519 |       updateChartViewport(chartId, {
 520 |         scale: 1,
 521 |         translateX: 0,
 522 |         translateY: 0,
 523 |       });
 524 | 
 525 |       setZoomLevel(1);
 526 |       applyTransform();
 527 |     },
 528 |     [applyTransform, chartId],
 529 |   );
 530 | 
 531 |   /*
 532 |    * CANVAS INTERACTIONS
 533 |    */
 534 |   const onCanvasMouseDown = useCallback(
 535 |     (event) => {
 536 |       if (isPanMode) {
 537 |         logChartInteractionEvent({
 538 |           interactionType: "PAN",
 539 |           visualizationLibrary: "Pixi",
 540 |           interactionSource: "drag",
 541 |         });
 542 |         setIsDragging(true);
 543 |         dragRef.current.dragging = true;
 544 |         dragRef.current.startX = event.clientX - transformRef.current.x;
 545 |         dragRef.current.startY = event.clientY - transformRef.current.y;
 546 |       } else {
 547 |         if (!containerRef.current) return;
 548 |         const rect = containerRef.current.getBoundingClientRect();
 549 |         const localX = event.clientX - rect.left - PLOT_MARGIN.left;
 550 |         const localY = event.clientY - rect.top - PLOT_MARGIN.top;
 551 | 
 552 |         if (
 553 |           localX >= 0 &&
 554 |           localX <= innerWidth &&
 555 |           localY >= 0 &&
 556 |           localY <= innerHeight
 557 |         ) {
 558 |           brushStartRef.current = { x: localX, y: localY };
 559 |         }
 560 |       }
 561 |     },
 562 |     [isPanMode, innerWidth, innerHeight],
 563 |   );
 564 | 
 565 |   const onCanvasMouseMove = useCallback(
 566 |     (event) => {
 567 |       if (dragRef.current.dragging) {
 568 |         const nextX = event.clientX - dragRef.current.startX;
 569 |         const nextY = event.clientY - dragRef.current.startY;
 570 |         const clamped = clampPan(
 571 |           nextX,
 572 |           nextY,
 573 |           transformRef.current.scale,
 574 |           innerWidth,
 575 |           innerHeight,
 576 |         );
 577 | 
 578 |         transformRef.current.x = clamped.x;
 579 |         transformRef.current.y = clamped.y;
 580 | 
 581 |         updateChartViewport(chartId, {
 582 |           scale: transformRef.current.scale,
 583 |           translateX: clamped.x,
 584 |           translateY: clamped.y,
 585 |         });
 586 | 
 587 |         applyTransform();
 588 |         return;
 589 |       }
 590 | 
 591 |       if (brushStartRef.current) {
 592 |         if (!containerRef.current) return;
 593 |         const rect = containerRef.current.getBoundingClientRect();
 594 |         const localX = Math.max(
 595 |           0,
 596 |           Math.min(innerWidth, event.clientX - rect.left - PLOT_MARGIN.left),
 597 |         );
 598 |         const localY = Math.max(
 599 |           0,
 600 |           Math.min(innerHeight, event.clientY - rect.top - PLOT_MARGIN.top),
```

### Chunk 4/5

```jsx
 601 |         );
 602 | 
 603 |         const brushStartX = Math.min(brushStartRef.current.x, localX);
 604 |         const brushStartY = Math.min(brushStartRef.current.y, localY);
 605 |         const brushWidth = Math.abs(localX - brushStartRef.current.x);
 606 |         const brushHeight = Math.abs(localY - brushStartRef.current.y);
 607 | 
 608 |         drawBrushOverlay(
 609 |           brushGraphicsRef.current,
 610 |           brushStartX,
 611 |           brushStartY,
 612 |           brushWidth,
 613 |           brushHeight,
 614 |         );
 615 |       }
 616 |     },
 617 |     [innerWidth, innerHeight, chartId, applyTransform],
 618 |   );
 619 | 
 620 |   const onCanvasMouseUp = useCallback(
 621 |     (event) => {
 622 |       setIsDragging(false);
 623 |       if (dragRef.current.dragging) {
 624 |         dragRef.current.dragging = false;
 625 |         updateChartViewport(chartId, {
 626 |           scale: transformRef.current.scale,
 627 |           translateX: transformRef.current.x,
 628 |           translateY: transformRef.current.y,
 629 |         });
 630 |         return;
 631 |       }
 632 | 
 633 |       if (brushStartRef.current) {
 634 |         if (!containerRef.current) return;
 635 |         const rect = containerRef.current.getBoundingClientRect();
 636 |         const localX = Math.max(
 637 |           0,
 638 |           Math.min(innerWidth, event.clientX - rect.left - PLOT_MARGIN.left),
 639 |         );
 640 |         const localY = Math.max(
 641 |           0,
 642 |           Math.min(innerHeight, event.clientY - rect.top - PLOT_MARGIN.top),
 643 |         );
 644 | 
 645 |         const brushStartX = Math.min(brushStartRef.current.x, localX);
 646 |         const brushStartY = Math.min(brushStartRef.current.y, localY);
 647 |         const brushWidth = Math.abs(localX - brushStartRef.current.x);
 648 |         const brushHeight = Math.abs(localY - brushStartRef.current.y);
 649 | 
 650 |         if (brushWidth >= 5 && brushHeight >= 5) {
 651 |           logChartInteractionEvent({
 652 |             interactionType: "ZOOM_IN",
 653 |             visualizationLibrary: "Pixi",
 654 |             interactionSource: "brush",
 655 |           });
 656 | 
 657 |           const nextTransform = applyBrushZoom(
 658 |             {
 659 |               startX: brushStartX,
 660 |               startY: brushStartY,
 661 |               width: brushWidth,
 662 |               height: brushHeight,
 663 |             },
 664 |             transformRef,
 665 |             innerWidth,
 666 |             innerHeight,
 667 |           );
 668 | 
 669 |           transformRef.current = {
 670 |             scale: nextTransform.scale,
 671 |             x: nextTransform.x,
 672 |             y: nextTransform.y,
 673 |           };
 674 | 
 675 |           updateChartViewport(chartId, {
 676 |             scale: nextTransform.scale,
 677 |             translateX: nextTransform.x,
 678 |             translateY: nextTransform.y,
 679 |           });
 680 | 
 681 |           setZoomLevel(nextTransform.scale);
 682 |           applyTransform();
 683 |         }
 684 | 
 685 |         if (brushGraphicsRef.current) {
 686 |           brushGraphicsRef.current.clear();
 687 |         }
 688 |         brushStartRef.current = null;
 689 |       }
 690 |     },
 691 |     [innerWidth, innerHeight, chartId, applyTransform],
 692 |   );
 693 | 
 694 |   /* Cancel in-progress brush when switching to pan mode */
 695 |   useEffect(() => {
 696 |     if (isPanMode) {
 697 |       brushStartRef.current = null;
 698 |       if (brushGraphicsRef.current) {
 699 |         brushGraphicsRef.current.clear();
 700 |       }
 701 |     }
 702 |   }, [isPanMode]);
 703 | 
 704 |   /*
 705 |    * INITIALIZE PIXI
 706 |    */
 707 |   useEffect(() => {
 708 |     let isComponentUnmounted = false;
 709 |     let pixiApplicationInstance = null;
 710 | 
 711 |     if (!containerRef.current) return;
 712 | 
 713 |     initializePixiApp(containerRef.current, innerWidth, innerHeight)
 714 |       .then(({ app, axesLayer, contentLayer, mask, brushGraphics }) => {
 715 |         if (isComponentUnmounted) {
 716 |           try {
 717 |             app.destroy({ removeView: true });
 718 |           } catch (err) {
 719 |             console.error(
 720 |               "Error destroying Pixi App during init cancellation:",
 721 |               err,
 722 |             );
 723 |           }
 724 |           return;
 725 |         }
 726 | 
 727 |         pixiAppRef.current = app;
 728 |         axesLayerRef.current = axesLayer;
 729 |         contentLayerRef.current = contentLayer;
 730 |         maskRef.current = mask;
 731 |         brushGraphicsRef.current = brushGraphics;
 732 |         pixiApplicationInstance = app;
 733 | 
 734 |         renderScene().then(() => {
 735 |           requestAnimationFrame(() => {
 736 |             applyTransform();
 737 |           });
 738 |         });
 739 |       })
 740 |       .catch((err) => {
 741 |         console.error("Failed to initialize Pixi:", err);
 742 |       });
 743 | 
 744 |     return () => {
 745 |       isComponentUnmounted = true;
 746 |       if (pixiApplicationInstance) {
 747 |         try {
 748 |           pixiApplicationInstance.destroy({ removeView: true });
 749 |         } catch (err) {
 750 |           console.error("Error destroying Pixi App:", err);
 751 |         }
 752 |       }
 753 |     };
 754 |   }, [innerWidth, innerHeight, renderScene]);
 755 | 
 756 |   /*
 757 |    * RERENDER DATA CHANGES
 758 |    */
 759 |   useEffect(() => {
 760 |     if (!plotterPoints.length) return;
 761 |     renderScene();
 762 |   }, [plotterPoints, imageCount, xGap, yGap, renderScene]);
 763 | 
 764 |   /*
 765 |    * ATTACH NON-PASSIVE WHEEL LISTENER
 766 |    */
 767 |   useEffect(() => {
 768 |     const container = containerRef.current;
 769 |     if (!container) return;
 770 | 
 771 |     const onCanvasWheelScroll = (event) => {
 772 |       event.preventDefault();
 773 |       if (event.deltaY > 0) {
 774 |         zoom("out", "wheel");
 775 |       } else {
 776 |         zoom("in", "wheel");
 777 |       }
 778 |     };
 779 | 
 780 |     container.addEventListener("wheel", onCanvasWheelScroll, {
 781 |       passive: false,
 782 |     });
 783 | 
 784 |     return () => {
 785 |       container.removeEventListener("wheel", onCanvasWheelScroll);
 786 |     };
 787 |   }, [zoom]);
 788 | 
 789 |   return (
 790 |     <div style={{ position: "relative" }}>
 791 |       <PlotterControls
 792 |         zoomLevel={zoomLevel}
 793 |         onZoomIn={() => zoom("in")}
 794 |         onZoomOut={() => zoom("out")}
 795 |         onReset={() => reset("button")}
 796 |         interactionMode={interactionMode}
 797 |         onModeChange={setInteractionMode}
 798 |       />
 799 | 
 800 |       <div
```

### Chunk 5/5

```jsx
 801 |         ref={containerRef}
 802 |         onMouseDown={onCanvasMouseDown}
 803 |         onMouseMove={onCanvasMouseMove}
 804 |         onMouseUp={onCanvasMouseUp}
 805 |         onMouseLeave={onCanvasMouseUp}
 806 |         onDoubleClick={() => reset("double_click")}
 807 |         style={{
 808 |           cursor: isPanMode ? (isDragging ? "grabbing" : "grab") : "crosshair",
 809 |         }}
 810 |       />
 811 | 
 812 |       <div
 813 |         ref={tooltipRef}
 814 |         className="plotter-tooltip"
 815 |         style={{
 816 |           display: "none",
 817 |           position: "absolute",
 818 |           pointerEvents: "none",
 819 |         }}
 820 |       />
 821 |     </div>
 822 |   );
 823 | }
 824 | 
 825 | /*
 826 |  * GRID
 827 |  */
 828 | function drawGrid(layer, scaleX, scaleY, width, height) {
 829 |   const grid = new Graphics();
 830 | 
 831 |   const xTicks = buildIntegerTicks(scaleX.domain());
 832 |   const yTicks = buildIntegerTicks(scaleY.domain());
 833 | 
 834 |   xTicks.forEach((tick) => {
 835 |     const x = scaleX(tick);
 836 |     grid.moveTo(x, 0);
 837 |     grid.lineTo(x, height);
 838 |   });
 839 | 
 840 |   yTicks.forEach((tick) => {
 841 |     const y = scaleY(tick);
 842 |     grid.moveTo(0, y);
 843 |     grid.lineTo(width, y);
 844 |   });
 845 | 
 846 |   grid.stroke({
 847 |     width: 1,
 848 |     color: GRID_COLOR,
 849 |     alpha: GRID_ALPHA,
 850 |   });
 851 | 
 852 |   const border = new Graphics();
 853 |   border.rect(0, 0, width, height);
 854 |   border.stroke({
 855 |     width: 1,
 856 |     color: AXIS_BORDER_COLOR,
 857 |   });
 858 | 
 859 |   layer.addChild(grid);
 860 |   layer.addChild(border);
 861 | }
 862 | 
 863 | /*
 864 |  * LABELS
 865 |  */
 866 | function drawAxesLabels(layer, scaleX, scaleY, innerWidth, innerHeight) {
 867 |   const xTicks = buildIntegerTicks(scaleX.domain());
 868 |   const yTicks = buildIntegerTicks(scaleY.domain());
 869 | 
 870 |   xTicks.forEach((tick) => {
 871 |     const label = new PixiText({
 872 |       text: tick.toString(),
 873 |       style: {
 874 |         fill: TICK_COLOR,
 875 |         fontSize: 11,
 876 |       },
 877 |     });
 878 | 
 879 |     label.x = scaleX(tick) - label.width / 2;
 880 |     label.y = innerHeight + 6;
 881 |     layer.addChild(label);
 882 |   });
 883 | 
 884 |   yTicks.forEach((tick) => {
 885 |     const label = new PixiText({
 886 |       text: tick.toString(),
 887 |       style: {
 888 |         fill: TICK_COLOR,
 889 |         fontSize: 11,
 890 |       },
 891 |     });
 892 | 
 893 |     label.x = -label.width - 6;
 894 |     label.y = scaleY(tick) - label.height / 2;
 895 |     layer.addChild(label);
 896 |   });
 897 | }
 898 | 
 899 | /*
 900 |  * POINTS
 901 |  */
 902 | function drawPoints(
 903 |   layer,
 904 |   points,
 905 |   scaleX,
 906 |   scaleY,
 907 |   imageCount,
 908 |   tooltipRef,
 909 |   cellSize = CELL_SIZE,
 910 | ) {
 911 |   points.forEach((point) => {
 912 |     const x = scaleX(point.scaledX);
 913 |     const y = scaleY(point.scaledY);
 914 | 
 915 |     const positions = computeImagePositions(
 916 |       x,
 917 |       y,
 918 |       cellSize,
 919 |       cellSize,
 920 |       imageCount,
 921 |     );
 922 | 
 923 |     positions.forEach((position) => {
 924 |       const sprite = Sprite.from(point.image);
 925 |       sprite.x = position.x;
 926 |       sprite.y = position.y;
 927 |       sprite.width = position.width;
 928 |       sprite.height = position.height;
 929 |       sprite.eventMode = "static";
 930 |       sprite.cursor = "pointer";
 931 | 
 932 |       sprite.on("pointerenter", (event) => {
 933 |         showTooltip(tooltipRef.current, event, point);
 934 |       });
 935 | 
 936 |       sprite.on("pointerleave", () => {
 937 |         hideTooltip(tooltipRef.current);
 938 |       });
 939 | 
 940 |       layer.addChild(sprite);
 941 |     });
 942 |   });
 943 | }
 944 | 
 945 | /*
 946 |  * SMART TICKS
 947 |  */
 948 | function buildIntegerTicks([min, max]) {
 949 |   const range = max - min;
 950 |   let step;
 951 | 
 952 |   if (range <= 10) step = 1;
 953 |   else if (range <= 20) step = 2;
 954 |   else if (range <= 50) step = 5;
 955 |   else if (range <= 100) step = 10;
 956 |   else if (range <= 200) step = 20;
 957 |   else step = 50;
 958 | 
 959 |   const ticks = [];
 960 |   const start = Math.floor(min / step) * step;
 961 | 
 962 |   for (let value = start; value <= max; value += step) {
 963 |     ticks.push(Number(value.toFixed(2)));
 964 |   }
 965 | 
 966 |   return ticks;
 967 | }
 968 | 
 969 | /*
 970 |  * TOOLTIP
 971 |  */
 972 | function showTooltip(element, event, point) {
 973 |   if (!element) return;
 974 | 
 975 |   const global = event.global;
 976 |   element.style.display = "block";
 977 |   element.style.left = `${global.x + 15}px`;
 978 |   element.style.top = `${global.y - 10}px`;
 979 | 
 980 |   element.innerHTML = `
 981 |     <div class="tooltip-label">
 982 |       ${point.label}
 983 |     </div>
 984 |  
 985 |     <div class="tooltip-meta">
 986 |       <span>Interval: ${point.meta.interval}s</span>
 987 |       <span>Angle: ${point.meta.angle}°</span>
 988 |       <span>Quality: ${point.meta.quality}</span>
 989 |     </div>
 990 |   `;
 991 | }
 992 | 
 993 | function hideTooltip(element) {
 994 |   if (!element) return;
 995 |   element.style.display = "none";
 996 | }
 997 | 
 998 | export default PixiPlotter;
 999 | 
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
**hash:** `3551e4f6`

### Chunk 1/5

```jsx
   1 | /* eslint-disable react-hooks/purity */
   2 | import { useState, useMemo, useRef, useEffect, useCallback, memo } from "react";
   3 | import * as d3 from "d3";
   4 | import { usePlotterData } from "../lib/plotterData";
   5 | import { computeImagePositions } from "../lib/gridLayout";
   6 | import { CELL_SIZE, PLOT_DIMENSIONS, PLOT_MARGIN } from "../lib/constants";
   7 | import {
   8 |   computeAdaptiveCellSize,
   9 |   filterVisiblePoints,
  10 |   computeEffectiveImageCount,
  11 | } from "../lib/densityLayout";
  12 | import PlotterControls from "./PlotterControls";
  13 | import { logChartInteractionEvent } from "../lib/chartInteractionLogger";
  14 | import { useInteractionMode } from "../lib/interactionMode";
  15 | import {
  16 |   getChartViewport,
  17 |   updateChartViewport,
  18 | } from "../lib/chartViewportStore";
  19 | 
  20 | const ZOOM_STEP = 1.5;
  21 | const ZOOM_MIN = 0.35;
  22 | const ZOOM_MAX = 250;
  23 | const BRUSH_MIN_PIXELS = 5;
  24 | const BRUSH_FILL = "rgba(68, 147, 255, 0.15)";
  25 | const BRUSH_STROKE = "#4493ff";
  26 | const BRUSH_STROKE_WIDTH = 1.5;
  27 | 
  28 | const BASE_IMAGE_GAP_X = 10;
  29 | const BASE_IMAGE_GAP_Y = 10;
  30 | 
  31 | const TooltipOverlay = memo(function TooltipOverlay({
  32 |   hoveredPoint,
  33 |   tooltipRef,
  34 | }) {
  35 |   if (!hoveredPoint) return null;
  36 | 
  37 |   return (
  38 |     <div
  39 |       ref={tooltipRef}
  40 |       style={{
  41 |         position: "fixed",
  42 |         left: 0,
  43 |         top: 0,
  44 |         background: "#111",
  45 |         border: "1px solid #333",
  46 |         padding: "10px",
  47 |         borderRadius: "8px",
  48 |         color: "white",
  49 |         fontSize: "12px",
  50 |         pointerEvents: "none",
  51 |         zIndex: 1000,
  52 |       }}
  53 |     >
  54 |       <div>{hoveredPoint.label}</div>
  55 |       <div>X: {hoveredPoint.x}</div>
  56 |       <div>Y: {hoveredPoint.y}</div>
  57 |     </div>
  58 |   );
  59 | });
  60 | 
  61 | function RechartsPlotter({ chartId, imageCount, xGap, yGap, syntheticPoints }) {
  62 |   const {
  63 |     plotterPoints: fetchedPoints,
  64 |     isLoading,
  65 |     loadError,
  66 |   } = usePlotterData();
  67 | 
  68 |   const plotterPoints = syntheticPoints || fetchedPoints;
  69 | 
  70 |   if (!syntheticPoints && isLoading)
  71 |     return <div className="plotter-loading">Loading data…</div>;
  72 |   if (!syntheticPoints && loadError)
  73 |     return <div className="plotter-error">Error: {loadError}</div>;
  74 | 
  75 |   return (
  76 |     <RechartsCanvas
  77 |       plotterPoints={plotterPoints}
  78 |       imageCount={imageCount}
  79 |       xGap={xGap}
  80 |       yGap={yGap}
  81 |       chartId={chartId}
  82 |     />
  83 |   );
  84 | }
  85 | 
  86 | const ControlsLayer = memo(function ControlsLayer({
  87 |   zoomLevel,
  88 |   onZoomIn,
  89 |   onZoomOut,
  90 |   onReset,
  91 |   interactionMode,
  92 |   onModeChange,
  93 | }) {
  94 |   return (
  95 |     <div style={{ position: "absolute", top: 0, left: 0, zIndex: 10 }}>
  96 |       <PlotterControls
  97 |         zoomLevel={zoomLevel}
  98 |         onZoomIn={onZoomIn}
  99 |         onZoomOut={onZoomOut}
 100 |         onReset={onReset}
 101 |         interactionMode={interactionMode}
 102 |         onModeChange={onModeChange}
 103 |       />
 104 |     </div>
 105 |   );
 106 | });
 107 | 
 108 | function RechartsCanvas({ plotterPoints, imageCount, xGap, yGap, chartId }) {
 109 |   const containerRef = useRef(null);
 110 |   const svgRef = useRef(null);
 111 |   const dragRef = useRef({
 112 |     dragging: false,
 113 |     pointerId: null,
 114 |     startClientX: 0,
 115 |     startClientY: 0,
 116 |     startTransform: { scale: 1, x: 0, y: 0 },
 117 |   });
 118 | 
 119 |   const [containerWidth, setContainerWidth] = useState(PLOT_DIMENSIONS.width);
 120 |   const initialViewportRef = useRef(getChartViewport(chartId));
 121 |   // eslint-disable-next-line react-hooks/refs
 122 |   const [transform, setTransform] = useState(() => ({
 123 |     scale: initialViewportRef.current.scale || 1,
 124 |     x: initialViewportRef.current.translateX || 0,
 125 |     y: initialViewportRef.current.translateY || 0,
 126 |   }));
 127 |   const [hoveredPoint, setHoveredPoint] = useState(null);
 128 |   const tooltipRef = useRef(null);
 129 |   const [brushRect, setBrushRect] = useState(null);
 130 |   const [isDragging, setIsDragging] = useState(false);
 131 |   const brushStartRef = useRef(null);
 132 | 
 133 |   const { interactionMode, setInteractionMode, isPanMode } =
 134 |     useInteractionMode();
 135 | 
 136 |   useEffect(() => {
 137 |     if (!containerRef.current) return;
 138 | 
 139 |     const observer = new ResizeObserver((entries) => {
 140 |       const entry = entries[0];
 141 |       if (entry) setContainerWidth(entry.contentRect.width);
 142 |     });
 143 | 
 144 |     observer.observe(containerRef.current);
 145 |     return () => observer.disconnect();
 146 |   }, []);
 147 | 
 148 |   /* Cancel in-progress brush when switching to pan mode */
 149 |   useEffect(() => {
 150 |     if (isPanMode) {
 151 |       brushStartRef.current = null;
 152 |       // eslint-disable-next-line react-hooks/set-state-in-effect
 153 |       setBrushRect(null);
 154 |     }
 155 |   }, [isPanMode]);
 156 | 
 157 |   useEffect(() => {
 158 |     updateChartViewport(chartId, {
 159 |       scale: transform.scale,
 160 |       translateX: transform.x,
 161 |       translateY: transform.y,
 162 |     });
 163 |   }, [chartId, transform]);
 164 | 
 165 |   useEffect(() => {
 166 |     const saved = getChartViewport(chartId);
 167 | 
 168 |     setTransform({
 169 |       scale: saved?.scale ?? 1,
 170 |       x: saved?.translateX ?? 0,
 171 |       y: saved?.translateY ?? 0,
 172 |     });
 173 |   }, [chartId]);
 174 | 
 175 |   // const imagePositions = useMemo(() => {
 176 |   //   return computeImagePositions(imageCount, CELL_SIZE);
 177 |   // }, [imageCount]);
 178 | 
 179 |   const height = PLOT_DIMENSIONS.height;
 180 |   const innerWidth = Math.max(
 181 |     containerWidth - PLOT_MARGIN.left - PLOT_MARGIN.right,
 182 |     320,
 183 |   );
 184 |   const innerHeight = Math.max(
 185 |     height - PLOT_MARGIN.top - PLOT_MARGIN.bottom,
 186 |     240,
 187 |   );
 188 | 
 189 |   const normalizedPoints = useMemo(() => {
 190 |     const xScale = xGap / BASE_IMAGE_GAP_X;
 191 |     const yScale = yGap / BASE_IMAGE_GAP_Y;
 192 | 
 193 |     return plotterPoints.map((point) => ({
 194 |       ...point,
 195 |       scaledX: point.x * xScale,
 196 |       scaledY: point.y * yScale,
 197 |     }));
 198 |   }, [plotterPoints, xGap, yGap]);
 199 | 
 200 |   const xExtent = useMemo(
```

### Chunk 2/5

```jsx
 201 |     () => extentWithPadding(normalizedPoints.map((p) => p.scaledX)),
 202 |     [normalizedPoints],
 203 |   );
 204 |   const yExtent = useMemo(
 205 |     () => extentWithPadding(normalizedPoints.map((p) => p.scaledY)),
 206 |     [normalizedPoints],
 207 |   );
 208 | 
 209 |   const baseXScale = useMemo(
 210 |     () => d3.scaleLinear().domain(xExtent).range([0, innerWidth]),
 211 |     [xExtent, innerWidth],
 212 |   );
 213 | 
 214 |   const baseYScale = useMemo(
 215 |     () => d3.scaleLinear().domain(yExtent).range([innerHeight, 0]),
 216 |     [yExtent, innerHeight],
 217 |   );
 218 | 
 219 |   const visibleDomain = useMemo(
 220 |     () =>
 221 |       computeVisibleDomain(
 222 |         xExtent,
 223 |         yExtent,
 224 |         transform,
 225 |         innerWidth,
 226 |         innerHeight,
 227 |       ),
 228 |     [xExtent, yExtent, transform, innerWidth, innerHeight],
 229 |   );
 230 | 
 231 |   const xTicks = useMemo(() => {
 232 |     return d3.ticks(visibleDomain.xMin, visibleDomain.xMax, 8);
 233 |   }, [visibleDomain.xMin, visibleDomain.xMax]);
 234 | 
 235 |   const yTicks = useMemo(() => {
 236 |     return d3.ticks(visibleDomain.yMin, visibleDomain.yMax, 6);
 237 |   }, [visibleDomain.yMin, visibleDomain.yMax]);
 238 | 
 239 |   const xTickScale = useMemo(() => {
 240 |     const scale = d3.scaleLinear();
 241 |     scale.domain([visibleDomain.xMin, visibleDomain.xMax]);
 242 |     scale.range([0, innerWidth]);
 243 |     return scale;
 244 |   }, [visibleDomain.xMin, visibleDomain.xMax, innerWidth]);
 245 | 
 246 |   const yTickScale = useMemo(() => {
 247 |     const scale = d3.scaleLinear();
 248 |     scale.domain([visibleDomain.yMin, visibleDomain.yMax]);
 249 |     scale.range([innerHeight, 0]);
 250 |     return scale;
 251 |   }, [visibleDomain.yMin, visibleDomain.yMax, innerHeight]);
 252 | 
 253 |   const axisProps = useMemo(
 254 |     () => ({
 255 |       xTicks,
 256 |       yTicks,
 257 |       xTickScale,
 258 |       yTickScale,
 259 |       innerWidth,
 260 |       innerHeight,
 261 |     }),
 262 |     [xTicks, yTicks, xTickScale, yTickScale, innerWidth, innerHeight],
 263 |   );
 264 | 
 265 |   const clipId = "recharts-clip-static";
 266 | 
 267 |   const adaptiveCellSizeForRender = useMemo(() => {
 268 |     /* Compute from base scales (content-space) so the cell size is set at
 269 |        the default zoom level. The SVG transform then naturally magnifies
 270 |        images when zoomed in, revealing more detail. */
 271 |     return computeAdaptiveCellSize(
 272 |       normalizedPoints,
 273 |       (val) => baseXScale(val),
 274 |       (val) => baseYScale(val),
 275 |     );
 276 |   }, [normalizedPoints, baseXScale, baseYScale]);
 277 | 
 278 |   const visiblePointsForRender = useMemo(() => {
 279 |     /* Viewport culling still needs screen-space coordinates. */
 280 |     const xScreenFn = (val) => baseXScale(val) * transform.scale + transform.x;
 281 |     const yScreenFn = (val) => baseYScale(val) * transform.scale + transform.y;
 282 |     return filterVisiblePoints(
 283 |       normalizedPoints,
 284 |       xScreenFn,
 285 |       yScreenFn,
 286 |       innerWidth,
 287 |       innerHeight,
 288 |       adaptiveCellSizeForRender * transform.scale,
 289 |     );
 290 |   }, [
 291 |     normalizedPoints,
 292 |     baseXScale,
 293 |     baseYScale,
 294 |     transform,
 295 |     innerWidth,
 296 |     innerHeight,
 297 |     adaptiveCellSizeForRender,
 298 |   ]);
 299 | 
 300 |   const effectiveImageCountForRender = useMemo(
 301 |     () =>
 302 |       computeEffectiveImageCount(
 303 |         adaptiveCellSizeForRender * transform.scale,
 304 |         imageCount,
 305 |       ),
 306 |     [adaptiveCellSizeForRender, transform.scale, imageCount],
 307 |   );
 308 | 
 309 |   const zoomTo = useCallback(
 310 |     (nextScale, anchorX, anchorY) => {
 311 |       setTransform((prev) => {
 312 |         const clampedScale = clamp(nextScale, ZOOM_MIN, ZOOM_MAX);
 313 |         const pivotX = Number.isFinite(anchorX) ? anchorX : innerWidth / 2;
 314 |         const pivotY = Number.isFinite(anchorY) ? anchorY : innerHeight / 2;
 315 | 
 316 |         const nextX =
 317 |           prev.x - (pivotX - prev.x) * (clampedScale / prev.scale - 1);
 318 |         const nextY =
 319 |           prev.y - (pivotY - prev.y) * (clampedScale / prev.scale - 1);
 320 | 
 321 |         return clampTransform(
 322 |           { scale: clampedScale, x: nextX, y: nextY },
 323 |           innerWidth,
 324 |           innerHeight,
 325 |         );
 326 |       });
 327 |     },
 328 |     [innerWidth, innerHeight],
 329 |   );
 330 | 
 331 |   const pointMap = useMemo(
 332 |     () => new Map(plotterPoints.map((p) => [p.id, p])),
 333 |     [plotterPoints],
 334 |   );
 335 | 
 336 |   const handleZoomIn = useCallback(() => {
 337 |     logChartInteractionEvent({
 338 |       interactionType: "ZOOM_IN",
 339 |       visualizationLibrary: "Recharts",
 340 |       interactionSource: "button",
 341 |     });
 342 |     zoomTo(transform.scale * ZOOM_STEP, innerWidth / 2, innerHeight / 2);
 343 |   }, [transform.scale, zoomTo, innerWidth, innerHeight]);
 344 | 
 345 |   const handleZoomOut = useCallback(() => {
 346 |     logChartInteractionEvent({
 347 |       interactionType: "ZOOM_OUT",
 348 |       visualizationLibrary: "Recharts",
 349 |       interactionSource: "button",
 350 |     });
 351 |     zoomTo(transform.scale / ZOOM_STEP, innerWidth / 2, innerHeight / 2);
 352 |   }, [transform.scale, zoomTo, innerWidth, innerHeight]);
 353 | 
 354 |   const handleReset = useCallback(() => {
 355 |     logChartInteractionEvent({
 356 |       interactionType: "RESET",
 357 |       visualizationLibrary: "Recharts",
 358 |       interactionSource: "button",
 359 |     });
 360 |     setTransform({ scale: 1, x: 0, y: 0 });
 361 |     setHoveredPoint(null);
 362 |   }, []);
 363 | 
 364 |   const handleWheel = useCallback(
 365 |     (event) => {
 366 |       event.preventDefault();
 367 | 
 368 |       const rect = svgRef.current?.getBoundingClientRect();
 369 |       if (!rect) return;
 370 | 
 371 |       const clientX = event.clientX - rect.left;
 372 |       const clientY = event.clientY - rect.top;
 373 | 
 374 |       const localX = clientX - PLOT_MARGIN.left;
 375 |       const localY = clientY - PLOT_MARGIN.top;
 376 | 
 377 |       if (
 378 |         localX < 0 ||
 379 |         localY < 0 ||
 380 |         localX > innerWidth ||
 381 |         localY > innerHeight
 382 |       ) {
 383 |         return;
 384 |       }
 385 | 
 386 |       const isZoomIn = event.deltaY < 0;
 387 |       logChartInteractionEvent({
 388 |         interactionType: isZoomIn ? "ZOOM_IN" : "ZOOM_OUT",
 389 |         visualizationLibrary: "Recharts",
 390 |         interactionSource: "wheel",
 391 |       });
 392 | 
 393 |       const factor = event.deltaY > 0 ? 1 / 1.15 : 1.15;
 394 | 
 395 |       setTransform((prev) => {
 396 |         const clampedScale = clamp(prev.scale * factor, ZOOM_MIN, ZOOM_MAX);
 397 | 
 398 |         const nextX =
 399 |           prev.x - (localX - prev.x) * (clampedScale / prev.scale - 1);
 400 |         const nextY =
```

### Chunk 3/5

```jsx
 401 |           prev.y - (localY - prev.y) * (clampedScale / prev.scale - 1);
 402 |         return clampTransform(
 403 |           { scale: clampedScale, x: nextX, y: nextY },
 404 |           innerWidth,
 405 |           innerHeight,
 406 |         );
 407 |       });
 408 |     },
 409 |     [innerWidth, innerHeight],
 410 |   );
 411 | 
 412 |   const handlePointerDown = useCallback(
 413 |     (event) => {
 414 |       const rect = svgRef.current?.getBoundingClientRect();
 415 |       if (!rect) return;
 416 | 
 417 |       const localX = event.clientX - rect.left - PLOT_MARGIN.left;
 418 |       const localY = event.clientY - rect.top - PLOT_MARGIN.top;
 419 | 
 420 |       if (
 421 |         localX < 0 ||
 422 |         localY < 0 ||
 423 |         localX > innerWidth ||
 424 |         localY > innerHeight
 425 |       ) {
 426 |         return;
 427 |       }
 428 | 
 429 |       if (isPanMode) {
 430 |         logChartInteractionEvent({
 431 |           interactionType: "PAN",
 432 |           visualizationLibrary: "Recharts",
 433 |           interactionSource: "drag",
 434 |         });
 435 |         setIsDragging(true);
 436 |         dragRef.current = {
 437 |           dragging: true,
 438 |           pointerId: event.pointerId,
 439 |           startClientX: event.clientX,
 440 |           startClientY: event.clientY,
 441 |           startTransform: transform,
 442 |         };
 443 |         event.currentTarget.setPointerCapture?.(event.pointerId);
 444 |         return;
 445 |       }
 446 | 
 447 |       const clampedX = clamp(localX, 0, innerWidth);
 448 |       const clampedY = clamp(localY, 0, innerHeight);
 449 |       brushStartRef.current = { x: clampedX, y: clampedY };
 450 |       setBrushRect({ x: clampedX, y: clampedY, width: 0, height: 0 });
 451 |       event.currentTarget.setPointerCapture?.(event.pointerId);
 452 |     },
 453 |     [innerWidth, innerHeight, transform, isPanMode],
 454 |   );
 455 | 
 456 |   const handlePointerMove = useCallback(
 457 |     (event) => {
 458 |       if (brushStartRef.current) {
 459 |         const rect = svgRef.current?.getBoundingClientRect();
 460 |         if (!rect) return;
 461 | 
 462 |         const localX = clamp(
 463 |           event.clientX - rect.left - PLOT_MARGIN.left,
 464 |           0,
 465 |           innerWidth,
 466 |         );
 467 |         const localY = clamp(
 468 |           event.clientY - rect.top - PLOT_MARGIN.top,
 469 |           0,
 470 |           innerHeight,
 471 |         );
 472 |         const startPoint = brushStartRef.current;
 473 | 
 474 |         setBrushRect({
 475 |           x: Math.min(startPoint.x, localX),
 476 |           y: Math.min(startPoint.y, localY),
 477 |           width: Math.abs(localX - startPoint.x),
 478 |           height: Math.abs(localY - startPoint.y),
 479 |         });
 480 |         return;
 481 |       }
 482 | 
 483 |       if (dragRef.current.dragging) {
 484 |         const dx = event.clientX - dragRef.current.startClientX;
 485 |         const dy = event.clientY - dragRef.current.startClientY;
 486 | 
 487 |         const next = clampTransform(
 488 |           {
 489 |             scale: dragRef.current.startTransform.scale,
 490 |             x: dragRef.current.startTransform.x + dx,
 491 |             y: dragRef.current.startTransform.y + dy,
 492 |           },
 493 |           innerWidth,
 494 |           innerHeight,
 495 |         );
 496 | 
 497 |         setTransform(next);
 498 |         return;
 499 |       }
 500 | 
 501 |       const target = event.target?.closest?.("[data-point-id]");
 502 | 
 503 |       if (!target) {
 504 |         setHoveredPoint((prev) => (prev ? null : prev));
 505 |         return;
 506 |       }
 507 | 
 508 |       const id = target.getAttribute("data-point-id");
 509 |       const point = pointMap.get(id);
 510 | 
 511 |       if (!point) {
 512 |         setHoveredPoint((prev) => (prev ? null : prev));
 513 |         return;
 514 |       }
 515 | 
 516 |       /*
 517 |        * Move tooltip with cursor WITHOUT React state updates.
 518 |        */
 519 |       if (tooltipRef.current) {
 520 |         tooltipRef.current.style.left = `${event.clientX + 12}px`;
 521 |         tooltipRef.current.style.top = `${event.clientY + 12}px`;
 522 |       }
 523 | 
 524 |       if (hoveredPoint?.id !== point.id && tooltipRef.current) {
 525 |         tooltipRef.current.style.left = `${event.clientX + 12}px`;
 526 |         tooltipRef.current.style.top = `${event.clientY + 12}px`;
 527 |       }
 528 | 
 529 |       /*
 530 |        * Re-render ONLY when changing image.
 531 |        */
 532 |       setHoveredPoint((prev) => (prev?.id === point.id ? prev : point));
 533 |     },
 534 |     [innerWidth, innerHeight, pointMap, hoveredPoint],
 535 |   );
 536 | 
 537 |   const handlePointerUp = useCallback(
 538 |     (event) => {
 539 |       if (brushStartRef.current && brushRect) {
 540 |         const isTooSmall =
 541 |           brushRect.width < BRUSH_MIN_PIXELS ||
 542 |           brushRect.height < BRUSH_MIN_PIXELS;
 543 | 
 544 |         if (!isTooSmall) {
 545 |           logChartInteractionEvent({
 546 |             interactionType: "ZOOM_IN",
 547 |             visualizationLibrary: "Recharts",
 548 |             interactionSource: "brush",
 549 |           });
 550 |           const newTransform = convertBrushToTransform(
 551 |             brushRect,
 552 |             transform,
 553 |             innerWidth,
 554 |             innerHeight,
 555 |           );
 556 |           setTransform(newTransform);
 557 |         }
 558 | 
 559 |         brushStartRef.current = null;
 560 |         setBrushRect(null);
 561 |         event.currentTarget.releasePointerCapture?.(event.pointerId);
 562 |         return;
 563 |       }
 564 | 
 565 |       setIsDragging(false);
 566 |       dragRef.current.dragging = false;
 567 |       dragRef.current.pointerId = null;
 568 |       event.currentTarget.releasePointerCapture?.(event.pointerId);
 569 |     },
 570 |     [brushRect, transform, innerWidth, innerHeight],
 571 |   );
 572 | 
 573 |   useEffect(() => {
 574 |     const svgElement = svgRef.current;
 575 | 
 576 |     if (!svgElement) return;
 577 | 
 578 |     const wheelHandler = (event) => {
 579 |       event.preventDefault();
 580 |       handleWheel(event);
 581 |     };
 582 | 
 583 |     svgElement.addEventListener("wheel", wheelHandler, {
 584 |       passive: false,
 585 |     });
 586 | 
 587 |     return () => {
 588 |       svgElement.removeEventListener("wheel", wheelHandler);
 589 |     };
 590 |   }, [handleWheel]);
 591 | 
 592 |   const handleDoubleClick = useCallback(() => {
 593 |     logChartInteractionEvent({
 594 |       interactionType: "RESET",
 595 |       visualizationLibrary: "Recharts",
 596 |       interactionSource: "double_click",
 597 |     });
 598 |     setTransform({ scale: 1, x: 0, y: 0 });
 599 |     setHoveredPoint(null);
 600 |   }, []);
```

### Chunk 4/5

```jsx
 601 | 
 602 |   const stageCursor = isPanMode
 603 |     ? isDragging
 604 |       ? "grabbing"
 605 |       : "grab"
 606 |     : "crosshair";
 607 | 
 608 |   const contentTransform = `translate(${transform.x}, ${transform.y}) scale(${transform.scale})`;
 609 | 
 610 |   return (
 611 |     <div ref={containerRef} style={{ position: "relative", width: "100%" }}>
 612 |       <ControlsLayer
 613 |         zoomLevel={transform.scale}
 614 |         onZoomIn={handleZoomIn}
 615 |         onZoomOut={handleZoomOut}
 616 |         onReset={handleReset}
 617 |         interactionMode={interactionMode}
 618 |         onModeChange={setInteractionMode}
 619 |       />
 620 | 
 621 |       <svg
 622 |         ref={svgRef}
 623 |         width={containerWidth}
 624 |         height={height}
 625 |         style={{
 626 |           display: "block",
 627 |           touchAction: "none",
 628 |           userSelect: "none",
 629 |           cursor: stageCursor,
 630 |         }}
 631 |         onPointerDown={handlePointerDown}
 632 |         onPointerMove={handlePointerMove}
 633 |         onPointerUp={handlePointerUp}
 634 |         onPointerLeave={handlePointerUp}
 635 |         onDoubleClick={handleDoubleClick}
 636 |       >
 637 |         <defs>
 638 |           <clipPath id={clipId}>
 639 |             <rect
 640 |               x={PLOT_MARGIN.left}
 641 |               y={PLOT_MARGIN.top}
 642 |               width={innerWidth}
 643 |               height={innerHeight}
 644 |             />
 645 |           </clipPath>
 646 |         </defs>
 647 | 
 648 |         <rect
 649 |           x={0}
 650 |           y={0}
 651 |           width={containerWidth}
 652 |           height={height}
 653 |           fill="#16213e"
 654 |         />
 655 | 
 656 |         <g transform={`translate(${PLOT_MARGIN.left},${PLOT_MARGIN.top})`}>
 657 |           <rect
 658 |             x={0}
 659 |             y={0}
 660 |             width={innerWidth}
 661 |             height={innerHeight}
 662 |             fill="#16213e"
 663 |           />
 664 | 
 665 |           <AxisGrid {...axisProps} />
 666 | 
 667 |           <AxisLabels {...axisProps} />
 668 | 
 669 |           <g clipPath={`url(#${clipId})`}>
 670 |             <g transform={contentTransform}>
 671 |               {visiblePointsForRender.map((point) => (
 672 |                 <ImagePoint
 673 |                   key={point.id}
 674 |                   point={point}
 675 |                   baseXScale={baseXScale}
 676 |                   baseYScale={baseYScale}
 677 |                   imageCount={effectiveImageCountForRender}
 678 |                   adaptiveCellSize={adaptiveCellSizeForRender}
 679 |                 />
 680 |               ))}
 681 |             </g>
 682 |           </g>
 683 | 
 684 |           <rect
 685 |             x={0}
 686 |             y={0}
 687 |             width={innerWidth}
 688 |             height={innerHeight}
 689 |             fill="transparent"
 690 |             stroke="#555"
 691 |             pointerEvents="none"
 692 |           />
 693 | 
 694 |           {brushRect && brushRect.width > 0 && brushRect.height > 0 && (
 695 |             <rect
 696 |               x={brushRect.x}
 697 |               y={brushRect.y}
 698 |               width={brushRect.width}
 699 |               height={brushRect.height}
 700 |               fill={BRUSH_FILL}
 701 |               stroke={BRUSH_STROKE}
 702 |               strokeWidth={BRUSH_STROKE_WIDTH}
 703 |               rx={2}
 704 |               ry={2}
 705 |               pointerEvents="none"
 706 |             />
 707 |           )}
 708 |         </g>
 709 |       </svg>
 710 |       <TooltipOverlay hoveredPoint={hoveredPoint} tooltipRef={tooltipRef} />
 711 |     </div>
 712 |   );
 713 | }
 714 | 
 715 | const ImagePoint = memo(function ImagePoint({
 716 |   point,
 717 |   baseXScale,
 718 |   baseYScale,
 719 |   imageCount,
 720 |   adaptiveCellSize,
 721 | }) {
 722 |   const centerX = baseXScale(point.scaledX);
 723 |   const centerY = baseYScale(point.scaledY);
 724 |   const cellSize = adaptiveCellSize ?? CELL_SIZE;
 725 | 
 726 |   const positions = useMemo(
 727 |     () =>
 728 |       computeImagePositions(centerX, centerY, cellSize, cellSize, imageCount),
 729 |     [centerX, centerY, cellSize, imageCount],
 730 |   );
 731 | 
 732 |   return (
 733 |     <>
 734 |       {positions.map((position, index) => (
 735 |         <image
 736 |           key={`${point.id}-${imageCount}-${index}`}
 737 |           data-point-id={point.id}
 738 |           href={point.image}
 739 |           x={position.x}
 740 |           y={position.y}
 741 |           width={position.width}
 742 |           height={position.height}
 743 |           preserveAspectRatio="xMidYMid meet"
 744 |           style={{ cursor: "pointer" }}
 745 |         />
 746 |       ))}
 747 |     </>
 748 |   );
 749 | });
 750 | 
 751 | const AxisGrid = memo(function AxisGrid({
 752 |   xTicks,
 753 |   yTicks,
 754 |   xTickScale,
 755 |   yTickScale,
 756 |   innerWidth,
 757 |   innerHeight,
 758 | }) {
 759 |   return (
 760 |     <>
 761 |       {xTicks.map((tick, index) => {
 762 |         const x = xTickScale(tick);
 763 |         return (
 764 |           <line
 765 |             key={`xgrid-${index}`}
 766 |             x1={x}
 767 |             y1={0}
 768 |             x2={x}
 769 |             y2={innerHeight}
 770 |             stroke="#2a2a3e"
 771 |             strokeDasharray="3 3"
 772 |           />
 773 |         );
 774 |       })}
 775 | 
 776 |       {yTicks.map((tick, index) => {
 777 |         const y = yTickScale(tick);
 778 |         return (
 779 |           <line
 780 |             key={`ygrid-${index}`}
 781 |             x1={0}
 782 |             y1={y}
 783 |             x2={innerWidth}
 784 |             y2={y}
 785 |             stroke="#2a2a3e"
 786 |             strokeDasharray="3 3"
 787 |           />
 788 |         );
 789 |       })}
 790 |     </>
 791 |   );
 792 | });
 793 | 
 794 | const AxisLabels = memo(function AxisLabels({
 795 |   xTicks,
 796 |   yTicks,
 797 |   xTickScale,
 798 |   yTickScale,
 799 |   innerHeight,
 800 | }) {
```

### Chunk 5/5

```jsx
 801 |   return (
 802 |     <>
 803 |       {xTicks.map((tick, index) => {
 804 |         const x = xTickScale(tick);
 805 |         return (
 806 |           <text
 807 |             key={`xlabel-${index}`}
 808 |             x={x}
 809 |             y={innerHeight + 18}
 810 |             fill="#888"
 811 |             fontSize="11"
 812 |             textAnchor="middle"
 813 |           >
 814 |             {formatTick(tick)}
 815 |           </text>
 816 |         );
 817 |       })}
 818 | 
 819 |       {yTicks.map((tick, index) => {
 820 |         const y = yTickScale(tick);
 821 |         return (
 822 |           <text
 823 |             key={`ylabel-${index}`}
 824 |             x={-8}
 825 |             y={y + 4}
 826 |             fill="#888"
 827 |             fontSize="11"
 828 |             textAnchor="end"
 829 |           >
 830 |             {formatTick(tick)}
 831 |           </text>
 832 |         );
 833 |       })}
 834 |     </>
 835 |   );
 836 | });
 837 | 
 838 | function extentWithPadding(values) {
 839 |   if (!values.length) return [0, 1];
 840 | 
 841 |   const min = Math.min(...values);
 842 |   const max = Math.max(...values);
 843 |   const span = max - min;
 844 |   const pad = span === 0 ? 5 : Math.max(span * 0.18, 1);
 845 | 
 846 |   return [min - pad, max + pad];
 847 | }
 848 | 
 849 | function computeVisibleDomain(
 850 |   xExtent,
 851 |   yExtent,
 852 |   transform,
 853 |   innerWidth,
 854 |   innerHeight,
 855 | ) {
 856 |   const domainWidth = xExtent[1] - xExtent[0];
 857 |   const domainHeight = yExtent[1] - yExtent[0];
 858 | 
 859 |   const xMin =
 860 |     xExtent[0] - (transform.x / transform.scale / innerWidth) * domainWidth;
 861 |   const xMax = xMin + domainWidth / transform.scale;
 862 | 
 863 |   const yMax =
 864 |     yExtent[1] + (transform.y / transform.scale / innerHeight) * domainHeight;
 865 |   const yMin = yMax - domainHeight / transform.scale;
 866 | 
 867 |   return { xMin, xMax, yMin, yMax };
 868 | }
 869 | 
 870 | function clampTransform(transform, innerWidth, innerHeight) {
 871 |   const scale = transform.scale;
 872 |   const scaledWidth = innerWidth * scale;
 873 |   const scaledHeight = innerHeight * scale;
 874 | 
 875 |   let x = transform.x;
 876 |   let y = transform.y;
 877 | 
 878 |   if (scaledWidth <= innerWidth) {
 879 |     x = (innerWidth - scaledWidth) / 2;
 880 |   } else {
 881 |     x = Math.min(0, Math.max(innerWidth - scaledWidth, x));
 882 |   }
 883 | 
 884 |   if (scaledHeight <= innerHeight) {
 885 |     y = (innerHeight - scaledHeight) / 2;
 886 |   } else {
 887 |     y = Math.min(0, Math.max(innerHeight - scaledHeight, y));
 888 |   }
 889 | 
 890 |   return { scale, x, y };
 891 | }
 892 | 
 893 | function clamp(value, min, max) {
 894 |   return Math.max(min, Math.min(max, value));
 895 | }
 896 | 
 897 | function convertBrushToTransform(
 898 |   brushPixelRect,
 899 |   currentTransform,
 900 |   plotInnerWidth,
 901 |   plotInnerHeight,
 902 | ) {
 903 |   const contentX0 =
 904 |     (brushPixelRect.x - currentTransform.x) / currentTransform.scale;
 905 |   const contentY0 =
 906 |     (brushPixelRect.y - currentTransform.y) / currentTransform.scale;
 907 |   const contentBrushWidth = brushPixelRect.width / currentTransform.scale;
 908 |   const contentBrushHeight = brushPixelRect.height / currentTransform.scale;
 909 | 
 910 |   const fitScaleX = plotInnerWidth / contentBrushWidth;
 911 |   const fitScaleY = plotInnerHeight / contentBrushHeight;
 912 |   const newScale = clamp(Math.min(fitScaleX, fitScaleY), ZOOM_MIN, ZOOM_MAX);
 913 | 
 914 |   const rawX = -contentX0 * newScale;
 915 |   const rawY = -contentY0 * newScale;
 916 | 
 917 |   return clampTransform(
 918 |     { scale: newScale, x: rawX, y: rawY },
 919 |     plotInnerWidth,
 920 |     plotInnerHeight,
 921 |   );
 922 | }
 923 | 
 924 | function formatTick(value) {
 925 |   if (Number.isInteger(value)) return String(value);
 926 |   return parseFloat(Number(value).toPrecision(4)).toString();
 927 | }
 928 | 
 929 | export default RechartsPlotter;
 930 | 
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
**hash:** `7a0ce23f`

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
  52 | /**
  53 |  * CLEAR ALL
  54 |  */
  55 | export function clearViewportStore() {
  56 |   viewportStore.clear();
  57 | }
  58 | 
```


---

## 📄 src\lib\constants.js
**hash:** `141e78cb`

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
  12 | /**
  13 |  * Dynamic image count support.
  14 |  * We no longer restrict to [1,2,4,8].
  15 |  */
  16 | export const MIN_IMAGES_PER_POINT = 1;
  17 | export const MAX_IMAGES_PER_POINT = 8;
  18 | 
  19 | export const DATA_POINT_LIMITS = {
  20 |   min: 1,
  21 |   max: 1000,
  22 |   defaultCount: 100,
  23 | };
  24 | 
  25 | export const CELL_SIZE = 50;
  26 | export const IMAGE_PADDING = 0.9;
  27 | 
  28 | export const ADAPTIVE_CELL_SIZE = {
  29 |   max: 50,
  30 |   min: 4,
  31 |   gapRatio: 0.55,
  32 |   collapseThreshold: 0,
  33 | };
  34 | 
  35 | export const PLOT_DIMENSIONS = {
  36 |   width: 900,
  37 |   height: 600,
  38 | };
  39 | 
  40 | export const PLOT_MARGIN = {
  41 |   top: 20,
  42 |   right: 20,
  43 |   bottom: 40,
  44 |   left: 50,
  45 | };
  46 | 
  47 | export const DATA_URL = "/data/data.json";
  48 | 
  49 | export const BRUSH_ZOOM = {
  50 |   fill: "rgba(68, 147, 255, 0.15)",
  51 |   stroke: "#4493ff",
  52 |   strokeWidth: 1.5,
  53 |   minimumSelectionPixels: 5,
  54 | };
  55 | 
  56 | export const ZOOM_SCALE_FACTOR = 1.5;
  57 | 
  58 | export const WHEEL_ZOOM_SENSITIVITY = 0.002;
  59 | 
  60 | /**
  61 |  * Prevent browser crashes.
  62 |  * 1000 x 1000 = 1,000,000 rendered images.
  63 |  */
  64 | export const MAX_RENDER_IMAGES = 50000;
  65 | 
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
**hash:** `79e51971`

### Chunk 1/1

```javascript
   1 | import { MAX_RENDER_IMAGES, IMAGE_PADDING } from "./constants";
   2 | 
   3 | /**
   4 |  * Computes deterministic grid offsets for ANY image count.
   5 |  */
   6 | export function computeGridOffsets(cellWidth, cellHeight, imageCount) {
   7 |   const safeImageCount = sanitizeImageCount(imageCount);
   8 | 
   9 |   const columns = Math.ceil(Math.sqrt(safeImageCount));
  10 |   const rows = Math.ceil(safeImageCount / columns);
  11 | 
  12 |   const subWidth = Math.max(2, cellWidth - columns * IMAGE_PADDING);
  13 | 
  14 |   const subHeight = Math.max(2, cellHeight - rows * IMAGE_PADDING);
  15 | 
  16 |   const offsets = [];
  17 | 
  18 |   const centeredOffsetX = ((columns - 1) * subWidth) / 2;
  19 | 
  20 |   const centeredOffsetY = ((rows - 1) * subHeight) / 2;
  21 | 
  22 |   for (let index = 0; index < safeImageCount; index++) {
  23 |     const column = index % columns;
  24 |     const row = Math.floor(index / columns);
  25 | 
  26 |     const offsetX = column * subWidth - centeredOffsetX;
  27 | 
  28 |     const offsetY = row * subHeight - centeredOffsetY;
  29 | 
  30 |     offsets.push({
  31 |       offsetX,
  32 |       offsetY,
  33 |       width: subWidth,
  34 |       height: subHeight,
  35 |     });
  36 |   }
  37 | 
  38 |   return offsets;
  39 | }
  40 | 
  41 | /**
  42 |  * Computes deterministic image positions.
  43 |  */
  44 | export function computeImagePositions(
  45 |   centerX,
  46 |   centerY,
  47 |   cellWidth,
  48 |   cellHeight,
  49 |   imageCount,
  50 | ) {
  51 |   const safeImageCount = sanitizeImageCount(imageCount);
  52 | 
  53 |   const offsets = computeGridOffsets(cellWidth, cellHeight, safeImageCount);
  54 | 
  55 |   const positions = [];
  56 | 
  57 |   for (let index = 0; index < offsets.length; index++) {
  58 |     if (positions.length >= MAX_RENDER_IMAGES) {
  59 |       break;
  60 |     }
  61 | 
  62 |     const offset = offsets[index];
  63 | 
  64 |     positions.push({
  65 |       imageIndex: index,
  66 | 
  67 |       x: centerX + offset.offsetX - offset.width / 2,
  68 | 
  69 |       y: centerY + offset.offsetY - offset.height / 2,
  70 | 
  71 |       width: offset.width,
  72 |       height: offset.height,
  73 |     });
  74 |   }
  75 | 
  76 |   return positions;
  77 | }
  78 | 
  79 | /**
  80 |  * Normalizes image counts.
  81 |  */
  82 | function sanitizeImageCount(imageCount) {
  83 |   const parsed = Number(imageCount);
  84 | 
  85 |   if (Number.isNaN(parsed)) {
  86 |     return 1;
  87 |   }
  88 | 
  89 |   return Math.max(1, Math.min(1000, Math.floor(parsed)));
  90 | }
  91 | 
```


---

## 📄 src\lib\imageCache.js
**hash:** `673eb4cc`

### Chunk 1/1

```javascript
   1 | const imageCache = new Map();
   2 | 
   3 | /**
   4 |  * Preloads image sources.
   5 |  */
   6 | export async function preloadImageSources(imageSourceList) {
   7 |   const uniqueSources = [...new Set(imageSourceList)];
   8 | 
   9 |   const loadPromises = uniqueSources.map((source) => {
  10 |     if (imageCache.has(source)) {
  11 |       return Promise.resolve(imageCache.get(source));
  12 |     }
  13 | 
  14 |     return new Promise((resolve) => {
  15 |       const image = new window.Image();
  16 | 
  17 |       image.crossOrigin = "anonymous";
  18 | 
  19 |       image.src = source;
  20 | 
  21 |       image.onload = () => {
  22 |         imageCache.set(source, image);
  23 | 
  24 |         resolve(image);
  25 |       };
  26 | 
  27 |       image.onerror = () => {
  28 |         resolve(null);
  29 |       };
  30 |     });
  31 |   });
  32 | 
  33 |   return Promise.all(loadPromises);
  34 | }
  35 | 
  36 | /**
  37 |  * Returns cached image.
  38 |  */
  39 | export function getCachedImageObject(source) {
  40 |   return imageCache.get(source);
  41 | }
  42 | 
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
**hash:** `216f438d`

### Chunk 1/1

```javascript
   1 | import { useState, useEffect } from "react";
   2 | import { DATA_URL } from "./constants";
   3 | 
   4 | export function usePlotterData() {
   5 |   const [plotterPoints, setPlotterPoints] = useState([]);
   6 |   const [isLoading, setIsLoading] = useState(true);
   7 |   const [loadError, setLoadError] = useState(null);
   8 | 
   9 |   useEffect(() => {
  10 |     fetch(DATA_URL)
  11 |       .then((response) => {
  12 |         if (!response.ok) {
  13 |           throw new Error(`Failed to fetch data: ${response.status}`);
  14 |         }
  15 |         return response.json();
  16 |       })
  17 |       .then((jsonData) => {
  18 |         setPlotterPoints(jsonData);
  19 |         setIsLoading(false);
  20 |       })
  21 |       .catch((fetchError) => {
  22 |         setLoadError(fetchError.message);
  23 |         setIsLoading(false);
  24 |       });
  25 |   }, []);
  26 | 
  27 |   return { plotterPoints, isLoading, loadError };
  28 | }
  29 | 
```


---

## 📄 src\lib\syntheticDataGenerator.js
**hash:** `1a03078e`

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
  21 |     syntheticPoints.push({
  22 |       id: `synth-${index}`,
  23 |       x: column * spacing,
  24 |       y: row * spacing,
  25 |       image: BASE_IMAGE_PATH,
  26 |       label: `Point ${index + 1} (${column * spacing}, ${row * spacing})`,
  27 |       meta: {
  28 |         interval: column * spacing,
  29 |         angle: row * spacing,
  30 |         quality: parseFloat((0.7 + Math.random() * 0.25).toFixed(2)),
  31 |       },
  32 |     });
  33 |   }
  34 | 
  35 |   return syntheticPoints;
  36 | }
  37 | 
  38 | /**
  39 |  * Computes the number of columns for a near-square grid layout.
  40 |  */
  41 | function computeGridColumns(totalPoints) {
  42 |   return Math.ceil(Math.sqrt(totalPoints));
  43 | }
  44 | 
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

