# RechartsNativePlotter — Architecture & Workflow

A genuine **Recharts-library** implementation of the image-scatter plotter, with
feature parity to the hand-rolled SVG/d3 `RechartsPlotter`. It renders many data
points (each drawn as a cluster of 1–8 images) on a zoom/pan-able scatter chart.

> File: [`src/components/RechartsNativePlotter.jsx`](../src/components/RechartsNativePlotter.jsx)
>
> Diagrams below use [Mermaid](https://mermaid.js.org/) — they render on GitHub
> and in VS Code (with the *Markdown Preview Mermaid Support* extension).

---

## Libraries used

| Library | Role in this component |
|---|---|
| **react** (`useState/useRef/useMemo/useEffect/useLayoutEffect/useCallback/memo`) | Component model, state, lifecycle, memoization |
| **react-dom** (`createPortal`) | Renders tooltip + image modal into `document.body` (escapes overflow/stacking) |
| **recharts** (`ScatterChart, Scatter, XAxis, YAxis, CartesianGrid`) | Draws grid + axes; in SVG mode also draws point images via a custom `shape` |
| **d3** (`scaleLinear`, `ticks`) | Content-space scales (data↔pixels) and "nice" axis tick generation |
| **openseadragon** (inside `ImageModal`) | Deep-zoom full-image viewer on point click |

### Project modules

| Module | Responsibility |
|---|---|
| `lib/plotterData` | `usePlotterData` — fetch `/data/data.json` (fallback source) |
| `lib/syntheticDataGenerator` | `generateSyntheticPoints` — grid of `{id,x,y,image,label,meta}` (actual source) |
| `lib/densityLayout` | `computeAdaptiveCellSize`, `computeEffectiveImageCount` (LOD) |
| `lib/quadtree` | `buildQuadtree`, `queryVisiblePointsQuadtree` — viewport culling |
| `lib/gridLayout` | `computeImagePositions` — lay out the per-point image cluster |
| `lib/imageBitmapCache` | `getImageBitmapLoD` — shared `ImageBitmap` cache + LOD thumbnails (canvas mode) |
| `lib/chartViewportStore` | Persist zoom/pan per `chartId` across remounts |
| `lib/interactionMode` | `useInteractionMode` — Zoom vs Pan |
| `lib/debouncedHooks` | `useThrottledCallback` — throttle pan updates |
| `lib/chartInteractionLogger` | Log ZOOM/PAN/RESET events |
| `components/PlotterControls` | Mode buttons, +/−, Reset, Str→Num toggle |
| `components/ImageModal` | OpenSeadragon modal on click |

---

## 1. Component / layer stack

```mermaid
flowchart TB
  App["App.jsx<br/>(props + chartId)"] --> Gate

  subgraph Gate["RechartsNativePlotter — data gate"]
    direction TB
    G1["usePlotterData()"]
    G2["generateSyntheticPoints(dataPointCount)"]
    G3["synthetic wins → plotterPoints"]
    G1 --> G3
    G2 --> G3
  end

  Gate --> Engine

  subgraph Engine["RechartsNativeCanvas — the engine"]
    direction TB
    Ctrls["ControlsLayer → PlotterControls<br/>(mode, +/−, Reset, Str→Num)"]

    subgraph Wrap["plot-wrapper (position: relative) — 3 stacked layers"]
      direction TB
      L1["Layer 1 — ScatterChart (Recharts / SVG)<br/>CartesianGrid + XAxis + YAxis<br/>Scatter (images in SVG mode)"]
      L2["Layer 2 — RechartsImageCanvas<br/>(only when enableCanvas)<br/>canvas drawImage loop"]
      L3["Layer 3 — transparent svg (on top)<br/>captures pointer + wheel<br/>draws brush rectangle"]
      L1 --- L2 --- L3
    end

    Ctrls --> Wrap
  end

  Engine -.portal.-> Tip["TooltipOverlay (hover)"]
  Engine -.portal.-> Modal["ImageModal → OpenSeadragon (click)"]
```

Three layers share the **same plot rectangle**. Layer 3 is transparent and sits
on top so all interaction is geometric — which is why hover/click/brush/pan work
identically whether images were drawn as SVG (Layer 1) or canvas (Layer 2).

---

## 2. Data → pixels pipeline (the core model)

```mermaid
flowchart TD
  P["props: dataPointCount, imageCount, xGap, yGap,<br/>enableQuadtree, enableLOD, enableCanvas, chartId"]
  P --> SP["generateSyntheticPoints → 1000 points"]
  SP --> NP["normalizedPoints (scaledX/scaledY = x/y)"]

  NP --> EXT["xExtent / yExtent (min/max + padding)"]
  P --> GAP["CONTENT BOX<br/>contentWidth = plotWidth * (xGap/10)<br/>contentHeight = plotHeight * (yGap/10)"]

  EXT --> SCALES["baseXScale: d3 xExtent → [0, contentWidth]<br/>baseYScale: d3 yExtent → [contentHeight, 0]<br/>(CONTENT space)"]
  GAP --> SCALES
  NP --> QT["buildQuadtree(normalizedPoints)"]

  SCALES --> T
  subgraph T["transform {scale, x, y} — single source of truth"]
    direction TB
    TT["CONTENT → VIEWPORT<br/>seeded from chartViewportStore[chartId]<br/>persisted back on every change"]
  end

  T --> VD["visibleDomain = computeVisibleDomain(...)"]
  T --> PXM["pixel(p) = transform.x + baseXScale(scaledX)*scale"]
  VD -. algebraically equal .- PXM

  VD --> AX["XAxis domain=[vd.xMin,vd.xMax]<br/>YAxis domain=[vd.yMin,vd.yMax]<br/>(Recharts positions points)"]

  QT --> CULL["visiblePointsForRender =<br/>enableQuadtree ? quadtreeQuery(domain) : all"]
  T --> CELL["cellPx = adaptiveCellSizeBase * scale"]
  CELL --> LOD["effectiveImageCount =<br/>enableLOD ? f(cellPx, imageCount) : imageCount"]
```

**Key insight:** feeding Recharts the derived `visibleDomain` makes its computed
point pixel resolve to exactly `transform.x + baseXScale(d) * scale`. So the
Recharts SVG layer and the canvas layer land on the same pixel — toggling Canvas
never shifts the plot.

---

## 3. Interaction flow

```mermaid
flowchart LR
  W["Wheel"] --> WH["handleWheel<br/>accumulate factor → pendingWheelRef"]
  WH --> RAF["requestAnimationFrame(flushWheel)<br/>ONE setTransform / frame (Fix 4)"]

  DP["Drag — Pan mode"] --> PAN["pointerdown→move→up<br/>scheduleTransformUpdate (RAF + 16ms)"]
  DZ["Drag — Zoom mode"] --> BR["brushRect (Layer 3)<br/>pointerup → convertBrushToTransform"]
  BTN["Buttons / DblClick"] --> ZT["zoomTo / homeTransform"]

  HOV["pointermove (no drag)"] --> HIT["cursor→content space<br/>nearest point in radius"]
  HIT --> TIP["TooltipOverlay (portal)"]
  CLK["pointerup<br/>moved <5px, <300ms"] --> PICK["nearest point + tile index"]
  PICK --> MOD["ImageModal (OpenSeadragon)"]

  RAF --> ST["setTransform"]
  PAN --> ST
  BR --> ST
  ZT --> ST
  ST --> CL["clampTransform (keep content in view)"]
  CL --> PERSIST["updateChartViewport(chartId)"]
```

---

## 4. SVG vs Canvas render decision

```mermaid
flowchart TD
  Q{"enableCanvas ?"}

  Q -- "no (SVG)" --> S1["Recharts Scatter data = visiblePoints<br/>shape = renderImageShape (STABLE via ref, Fix 2)"]
  S1 --> S2["per point: computeImagePositions(cx, cy, cellPx)<br/>→ up to 4 SVG image tiles<br/>(~4000 DOM nodes, React-reconciled)"]

  Q -- "yes (Canvas)" --> C1["Recharts Scatter data = EMPTY_DATA<br/>shape never called (Fix 3)"]
  C1 --> C2["RechartsImageCanvas useEffect repaint:<br/>• dpr-scale + clearRect<br/>• preload bitmaps via getImageBitmapLoD (LOD)<br/>• per point: ctx.drawImage tiles<br/>• <6px → solid square; missing → gray square<br/>• race guard: cancelled flag<br/>(0 per-point DOM nodes)"]
```

In **both** modes Recharts draws the `CartesianGrid` + `XAxis` + `YAxis`. Only the
*images* differ: SVG `<image>` tiles (Layer 1) vs `ctx.drawImage` onto a `<canvas>`
(Layer 2).

---

## 5. End-to-end sequence (mount → zoom → unmount)

```mermaid
sequenceDiagram
  participant App
  participant Plotter as RechartsNativePlotter
  participant Store as chartViewportStore
  participant Recharts
  participant Canvas as RechartsImageCanvas
  participant User

  Note over App,Plotter: MOUNT
  App->>Plotter: props (chartId, counts, toggles)
  Plotter->>Plotter: generateSyntheticPoints → normalized → extents → baseXY scales → quadtree
  Plotter->>Store: read viewport[chartId] (restore prior zoom/pan)
  Plotter->>Plotter: gap/first-mount effect → setTransform(homeTransform) unless userModified
  Plotter->>Plotter: ResizeObserver + non-passive wheel listener
  alt SVG mode
    Plotter->>Recharts: grid + axes + Scatter image tiles
  else Canvas mode
    Plotter->>Recharts: grid + axes only (data = EMPTY_DATA)
    Plotter->>Canvas: paint images (drawImage loop)
  end

  Note over User,Canvas: ZOOM (wheel)
  User->>Plotter: wheel
  Plotter->>Plotter: handleWheel → accumulate factor → RAF(flushWheel)
  Plotter->>Plotter: flushWheel → setTransform (cursor-anchored, clamped)
  Plotter->>Recharts: new visibleDomain → re-lay axes (+ reposition tiles in SVG)
  Plotter->>Canvas: effect re-runs → full repaint at new scale/offset
  Plotter->>Store: updateChartViewport(chartId)

  Note over App,Store: UNMOUNT (e.g. virtualization scroll)
  Plotter->>Plotter: cleanup — cancel RAFs (incl. wheel), clear refs,<br/>disconnect observer, remove wheel listener
  Note over Store: zoom/pan retained for remount
```

---

## Applied performance fixes

These reduce per-frame allocation churn (Recharts is a per-point declarative
library, so naive use re-renders all symbols every frame):

1. **Fix 2 — stable `shape`:** `renderImageShape` reads `cellPx`/imageCount/geometry
   from `shapeParamsRef` and has empty deps, so its identity never changes across
   zoom frames (Recharts no longer treats `shape` as a changed prop each frame).
2. **Fix 3 — skip points in Canvas mode:** the `<Scatter>` gets a stable
   `EMPTY_DATA`, so Recharts doesn't allocate per-point objects for points it
   never draws.
3. **Fix 4 — coalesce wheel zoom:** wheel ticks accumulate into `pendingWheelRef`
   and commit once per animation frame via `flushWheel`, capping wheel-driven
   re-renders at ~60/s.

> Note: `domain`/`ticks` array identity genuinely changes on zoom (that's how
> Recharts reflects the view) and cannot be stabilized without abandoning
> domain-driven zoom. Measure memory in a **production build**
> (`npm run build && npm run preview`) — dev mode + `StrictMode` inflate the
> numbers ~2–4×.
