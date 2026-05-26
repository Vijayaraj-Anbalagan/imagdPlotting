// save as: generate-repo-md.js
// run with: node generate-repo-md.js

const fs = require("fs");
const path = require("path");

const ROOT_DIR = process.cwd();
const OUTPUT_FILE = "repository_dump.md";

/**
 * ============================================
 * CONFIG
 * ============================================
 */

// folders to completely ignore
const IGNORE_FOLDERS = [
  "node_modules",
  ".git",
  "dist",
  "build",
  ".vscode",
  ".idea",
  "coverage",
];

// exact filenames to ignore
const IGNORE_FILES = [
  "package-lock.json",
  "yarn.lock",
  "pnpm-lock.yaml",
  ".DS_Store",

  // vite/react boilerplate
  "vite.config.js",
  "eslint.config.js",
  ".gitignore",
  "index.html",
  "App.css",
  // optional
  "README.md",
];

// extensions to ignore
const IGNORE_EXTENSIONS = [
  ".png",
  ".jpg",
  ".jpg",
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
  ".css",
  ".html",
];

// include only these source code extensions
const ALLOWED_EXTENSIONS = [
  ".js",
  ".jsx",
  ".ts",
  ".tsx",
  ".scss",
  ".json",
  ".md",
];

/**
 * ============================================
 * HELPERS
 * ============================================
 */

function shouldIgnore(filePath, fileName) {
  const ext = path.extname(fileName);

  if (IGNORE_FILES.includes(fileName)) {
    return true;
  }

  if (IGNORE_EXTENSIONS.includes(ext)) {
    return true;
  }

  if (
    fs.statSync(filePath).isDirectory() &&
    IGNORE_FOLDERS.includes(fileName)
  ) {
    return true;
  }

  return false;
}

function generateTree(dir, prefix = "") {
  let output = "";

  const items = fs
    .readdirSync(dir)
    .filter((item) => {
      const fullPath = path.join(dir, item);
      return !shouldIgnore(fullPath, item);
    })
    .sort((a, b) => a.localeCompare(b));

  items.forEach((item, index) => {
    const fullPath = path.join(dir, item);
    const isLast = index === items.length - 1;
    const connector = isLast ? "└── " : "├── ";

    output += `${prefix}${connector}${item}\n`;

    if (fs.statSync(fullPath).isDirectory()) {
      output += generateTree(fullPath, prefix + (isLast ? "    " : "│   "));
    }
  });

  return output;
}

function collectFiles(dir, files = []) {
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);

    if (shouldIgnore(fullPath, item)) {
      continue;
    }

    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      collectFiles(fullPath, files);
    } else {
      const ext = path.extname(item);

      if (ALLOWED_EXTENSIONS.includes(ext)) {
        files.push(fullPath);
      }
    }
  }

  return files;
}

function safeReadFile(filePath) {
  try {
    return fs.readFileSync(filePath, "utf8");
  } catch (err) {
    return `ERROR READING FILE: ${err.message}`;
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
 * ============================================
 * MAIN
 * ============================================
 */

function generateMarkdown() {
  let md = "";

  // title
  md += `# Repository Dump\n\n`;

  // folder structure
  md += `## Folder Structure\n\n`;
  md += "```txt\n";
  md += path.basename(ROOT_DIR) + "\n";
  md += generateTree(ROOT_DIR);
  md += "```\n\n";

  // files
  md += `## Files\n\n`;

  const files = collectFiles(ROOT_DIR);

  files.forEach((filePath) => {
    const relativePath = path.relative(ROOT_DIR, filePath);
    const ext = path.extname(filePath);
    const language = getLanguage(ext);

    md += `---\n\n`;
    md += `# ${relativePath}\n\n`;
    md += `\`\`\`${language}\n`;
    md += safeReadFile(filePath);
    md += `\n\`\`\`\n\n`;
  });

  fs.writeFileSync(path.join(ROOT_DIR, OUTPUT_FILE), md, "utf8");

  console.log(`✅ Markdown repository dump created: ${OUTPUT_FILE}`);
}

generateMarkdown();
