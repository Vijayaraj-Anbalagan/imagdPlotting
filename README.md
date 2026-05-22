# imagdPlotting

A simple Proof of Concept (POC) project for experimenting with different plotting/rendering approaches in React.

## Tech Stack

- React
- Vite
- Konva
- PixiJS
- Recharts
- Deck.gl
-

---

# Getting Started

## Install Dependencies

```bash
npm install
```

## Run Development Server

```bash
npm run dev
```

This will start the local Vite development server.

---

# Build for Production

```bash
npm run build
```

---

# Preview Production Build

```bash
npm run preview
```

---

# Repository Markdown Dump Generator

This project includes a helper script to generate a markdown dump of the repository source code.

## Run the Generator

```bash
node generate-repo-md.cjs
```

## Output

The script generates:

```bash
repository_dump.md
```

This markdown file contains a consolidated dump of the project source/code structure which can be useful for:

- Sharing project context
- Code reviews
- AI-assisted analysis
- Documentation snapshots

---

# Project Notes

This repository is currently a **POC (Proof of Concept)** and is focused primarily on experimentation and visualization testing.

Because of that:

- Coding standards are not fully enforced yet
- Some ESLint rules are intentionally disabled in certain areas
- Code structure and architecture are still evolving
- Optimizations and refactoring are pending

The current goal is rapid iteration and testing of multiple plotting/rendering approaches.

---

# Available Plotter Components

The project currently includes multiple rendering implementations:

- Konva Plotter
- Pixi Plotter
- DeckGL Plotter
- ECharts Plotter
- Recharts Plotter
- D3 Plotter

These are available under:

```bash
src/components
```

---

# Folder Structure

```bash
src/
 ├── components/
 ├── lib/
 ├── App.jsx
 └── main.jsx
```

---

# License

Internal / POC Usage
