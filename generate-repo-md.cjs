// save as: generate-repo-md.js
// run: node generate-repo-md.js

const fs = require("fs");
const path = require("path");

const ROOT_DIR = process.cwd();
const OUTPUT_FILE = "repository_dump.md";

/**
 * ============================================
 * CONFIG
 * ============================================
 */

const IGNORE_FOLDERS = [
  "node_modules",
  ".git",
  "dist",
  "build",
  ".vscode",
  ".idea",
  "coverage",
];

const IGNORE_FILES = [
  "package-lock.json",
  "yarn.lock",
  "pnpm-lock.yaml",
  ".DS_Store",
  ".gitignore",
];

const IGNORE_EXTENSIONS = [
  ".png",
  ".jpg",
  ".jpeg",
  ".gif",
  ".svg",
  ".webp",
  ".ico",
  ".mp4",
  ".mp3",
  ".woff",
  ".woff2",
  ".ttf",
  ".eot",
  ".map",
  ".lock",
];

const ALLOWED_EXTENSIONS = [
  ".js",
  ".jsx",
  ".ts",
  ".tsx",
  ".scss",
  ".css",
  ".json",
  ".md",
  ".html",
];

// split large files into chunks (important for LLMs)
const MAX_LINES_PER_CHUNK = 200;

/**
 * ============================================
 * HELPERS
 * ============================================
 */

function shouldIgnore(filePath, fileName) {
  const ext = path.extname(fileName);

  if (IGNORE_FILES.includes(fileName)) return true;
  if (IGNORE_EXTENSIONS.includes(ext)) return true;

  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    return IGNORE_FOLDERS.includes(fileName);
  }

  return false;
}

function generateTree(dir, prefix = "") {
  let output = "";

  const items = fs
    .readdirSync(dir)
    .filter((item) => {
      const full = path.join(dir, item);
      return !shouldIgnore(full, item);
    })
    .sort();

  items.forEach((item, index) => {
    const full = path.join(dir, item);
    const isLast = index === items.length - 1;

    const connector = isLast ? "└── " : "├── ";
    output += `${prefix}${connector}${item}\n`;

    if (fs.existsSync(full) && fs.statSync(full).isDirectory()) {
      output += generateTree(full, prefix + (isLast ? "    " : "│   "));
    }
  });

  return output;
}

function collectFiles(dir, files = []) {
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const full = path.join(dir, item);

    if (shouldIgnore(full, item)) continue;

    const stat = fs.statSync(full);

    if (stat.isDirectory()) {
      collectFiles(full, files);
    } else {
      const ext = path.extname(item);
      if (ALLOWED_EXTENSIONS.includes(ext)) {
        files.push(full);
      }
    }
  }

  return files;
}

function safeRead(filePath) {
  try {
    return fs.readFileSync(filePath, "utf8");
  } catch (e) {
    return `ERROR READING FILE: ${e.message}`;
  }
}

function getLanguage(ext) {
  const map = {
    ".js": "javascript",
    ".jsx": "jsx",
    ".ts": "typescript",
    ".tsx": "tsx",
    ".css": "css",
    ".scss": "scss",
    ".html": "html",
    ".json": "json",
    ".md": "markdown",
  };
  return map[ext] || "";
}

/**
 * Add line numbers (VERY important for AI patching)
 */
function addLineNumbers(content) {
  const lines = content.split("\n");

  return lines
    .map((line, i) => {
      const num = String(i + 1).padStart(4, " ");
      return `${num} | ${line}`;
    })
    .join("\n");
}

/**
 * Split big files into chunks
 */
function chunkLines(content) {
  const lines = content.split("\n");
  const chunks = [];

  for (let i = 0; i < lines.length; i += MAX_LINES_PER_CHUNK) {
    chunks.push(lines.slice(i, i + MAX_LINES_PER_CHUNK));
  }

  return chunks;
}

/**
 * Simple hash (for change tracking)
 */
function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash).toString(16);
}

/**
 * ============================================
 * MAIN
 * ============================================
 */

function generateMarkdown() {
  let md = "";

  md += `# Repository Dump (AI Friendly)\n\n`;
  md += `> Generated: ${new Date().toISOString()}\n\n`;

  /**
   * TREE
   */
  md += `## Folder Structure\n\n`;
  md += "```txt\n";
  md += path.basename(ROOT_DIR) + "\n";
  md += generateTree(ROOT_DIR);
  md += "```\n\n";

  /**
   * FILES
   */
  md += `## Files (with line numbers)\n\n`;

  const files = collectFiles(ROOT_DIR);

  for (const filePath of files) {
    const relative = path.relative(ROOT_DIR, filePath);
    const ext = path.extname(filePath);
    const lang = getLanguage(ext);

    const raw = safeRead(filePath);
    const hash = hashString(raw);

    const chunks = chunkLines(addLineNumbers(raw));

    md += `\n---\n\n`;
    md += `## 📄 ${relative}\n`;
    md += `**hash:** \`${hash}\`\n\n`;

    chunks.forEach((chunk, idx) => {
      md += `### Chunk ${idx + 1}/${chunks.length}\n\n`;
      md += "```" + lang + "\n";
      md += chunk.join("\n");
      md += "\n```\n\n";
    });
  }

  fs.writeFileSync(path.join(ROOT_DIR, OUTPUT_FILE), md, "utf8");

  console.log(`✅ AI-ready repo dump created: ${OUTPUT_FILE}`);
}

generateMarkdown();
