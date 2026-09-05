import { cp, mkdir, readdir, rm, readFile, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { injectImageFallback } from "./preview-image-fallback.mjs";

// Helper: Promisify spawn
function spawnAsync(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, options);
    let stdout = "";
    let stderr = "";
    
    if (child.stdout) child.stdout.on("data", (data) => { stdout += data; });
    if (child.stderr) child.stderr.on("data", (data) => { stderr += data; });
    
    child.on("close", (code) => {
      if (code === 0) {
        resolve({ stdout, stderr });
      } else {
        reject(new Error(`Command failed with code ${code}: ${stderr || stdout}`));
      }
    });
    
    child.on("error", reject);
  });
}
const root = resolve(import.meta.dirname, "..");
const previewsRoot = join(root, "preview");
const publicRoot = join(root, "public", "preview");

// Helper: Detect output directory (Next.js uses 'out/', Vite uses 'dist/')
function resolveOutputDirectory(projectDir) {
  const outPath = join(projectDir, "out");
  const distPath = join(projectDir, "dist");
  
  if (existsSync(outPath)) return "out";
  if (existsSync(distPath)) return "dist";
  return "out"; // Default fallback
}

// Helper: Normalize Vite HTML to use absolute paths for assets
async function normalizeViteHtml(outputPath, outputDirectory, outputName) {
  const htmlPath = join(outputPath, "index.html");
  if (!existsSync(htmlPath)) return;
  
  let html = await readFile(htmlPath, "utf-8");
  
  if (outputDirectory === "dist") {
    // Replace relative Vite asset paths with absolute preview paths.
    html = html.replace(/\.\/([^\s"'`]+)/g, `/preview/${outputName}/$1`);
  }

  const title = outputName
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
  const price = outputName === "clay-dental" ? "₹999" : "Website Concepts";
  const chrome = `
    <style>
      .infycrest-preview-bar {
        align-items: center;
        background: #fff;
        border-bottom: 1px solid #e5e5e5;
        box-sizing: border-box;
        color: #171717;
        display: flex;
        font-family: Arial, sans-serif;
        gap: 16px;
        justify-content: space-between;
        min-height: 64px;
        padding: 10px max(20px, calc((100vw - 1200px) / 2));
        position: fixed;
        inset: 0 0 auto;
        z-index: 2147483647;
      }
      body { padding-top: 64px !important; scroll-padding-top: 64px; }
      body > header:not(.infycrest-preview-bar), #root header { position: fixed !important; top: 64px !important; z-index: 2147483646 !important; }
      .infycrest-preview-brand { align-items: center; display: inline-flex; flex-shrink: 0; gap: 9px; text-decoration: none; }
      .infycrest-preview-mark { background: #0a0a0a; border-radius: 8px; display: grid; height: 32px; place-items: center; width: 32px; }
      .infycrest-preview-name { color: #171717; font-size: 14px; font-weight: 600; white-space: nowrap; }
      .infycrest-preview-name span { color: #a3a3a3; font-weight: 500; }
      .infycrest-preview-title { color: #737373; font-size: 12px; min-width: 0; overflow: hidden; text-align: center; text-overflow: ellipsis; white-space: nowrap; }
      .infycrest-preview-title strong { color: #404040; font-weight: 600; }
      .infycrest-preview-links { align-items: center; display: inline-flex; flex-shrink: 0; gap: 16px; }
      .infycrest-preview-links a { color: #737373; font-size: 12px; text-decoration: none; white-space: nowrap; }
      .infycrest-preview-links a:hover { color: #171717; }
      @media (max-width: 640px) {
        .infycrest-preview-bar { gap: 8px; min-height: 56px; padding: 8px 12px; }
        body { padding-top: 56px !important; scroll-padding-top: 56px; }
        body > header:not(.infycrest-preview-bar), #root header { position: fixed !important; top: 56px !important; z-index: 2147483646 !important; }
        .infycrest-preview-name { font-size: 12px; }
        .infycrest-preview-title { display: none; }
        .infycrest-preview-links { gap: 9px; }
        .infycrest-preview-links a { font-size: 11px; }
      }
    </style>
    <div class="infycrest-preview-bar" role="banner">
      <a class="infycrest-preview-brand" href="/" aria-label="InfyCrest Solutions home">
        <span class="infycrest-preview-mark" aria-hidden="true"><svg viewBox="0 0 32 32" width="22" height="22" fill="none"><path d="m5 11 11-5 11 5-11 5L5 11Z" stroke="#fff" stroke-width="1.8" stroke-linejoin="round"/><path d="m5 16 11 5 11-5M5 21l11 5 11-5" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
        <span class="infycrest-preview-name">InfyCrest <span>Solutions</span></span>
      </a>
      <p class="infycrest-preview-title">Live preview · <strong>${title} Modern Landing Page - ${price}</strong></p>
      <nav class="infycrest-preview-links" aria-label="Preview navigation">
        <a href="/demo/${outputName}">Back to details</a>
        <a href="/#collection">All products</a>
      </nav>
    </div>`;
  const styleTag = chrome.slice(chrome.indexOf("<style>"), chrome.indexOf("</style>") + "</style>".length);
  const bodyChrome = chrome.replace(styleTag, "").trim();
  const reinjectScript = `<script>setTimeout(() => { if (!document.querySelector(".infycrest-preview-bar")) { document.head.insertAdjacentHTML("beforeend", ${JSON.stringify(styleTag)}); document.body.insertAdjacentHTML("afterbegin", ${JSON.stringify(bodyChrome)}); } }, 1200);</script>`;
  html = html.replace(/<\/head>/i, `${styleTag}</head>`);
  html = html.replace(/<body([^>]*)>/i, `<body$1>${bodyChrome}`);
  html = html.replace(/<\/body>/i, `${reinjectScript}</body>`);
  
  await writeFile(htmlPath, injectImageFallback(html), "utf-8");
}

await mkdir(publicRoot, { recursive: true });

const entries = await readdir(previewsRoot, { withFileTypes: true });
const projects = entries.filter((entry) => entry.isDirectory());
let builtCount = 0;
let skippedCount = 0;

for (const project of projects) {
  const projectDir = join(previewsRoot, project.name);
  const publicPath = join(publicRoot, project.name);

  if (existsSync(join(publicPath, "index.html"))) {
    console.log(`Using existing preview: ${project.name}`);
    builtCount += 1;
    continue;
  }

  console.log(`Building preview: ${project.name}`);
  const npmCommand = process.platform === "win32" ? "npm.cmd" : "npm";
  
  // Install dependencies with proper cwd (include dev dependencies)
  try {
    await spawnAsync(npmCommand, ["install", "--include=dev", "--no-audit", "--no-fund"], {
      cwd: projectDir,
      stdio: "pipe",
      shell: process.platform === "win32",
    });
  } catch (error) {
    console.error(`Failed to install dependencies for ${project.name}:`, error.message);
    skippedCount += 1;
    continue;
  }
  
  // Build the project with proper cwd
  try {
    await spawnAsync(npmCommand, ["run", "build"], {
      cwd: projectDir,
      stdio: "pipe",
      shell: process.platform === "win32",
    });
  } catch (error) {
    console.error(`Failed to build ${project.name}:`, error.message);
    skippedCount += 1;
    continue;
  }
  
  // Detect output directory and normalize if needed
  const outputDirectory = resolveOutputDirectory(projectDir);
  const outputPath = join(projectDir, outputDirectory);

  if (!existsSync(outputPath)) {
    console.error(`Skipping ${project.name}: no ${outputDirectory} export directory was produced.`);
    skippedCount += 1;
    continue;
  }
  
  // Normalize Vite HTML before copying
  await normalizeViteHtml(outputPath, outputDirectory, project.name);
  
  // Copy to public
  await cp(outputPath, publicPath, { recursive: true });

  // Next.js exports are already HTML, so apply the same image recovery behavior.
  const exportedHtmlPath = join(publicPath, "index.html");
  if (existsSync(exportedHtmlPath)) {
    const exportedHtml = await readFile(exportedHtmlPath, "utf-8");
    await writeFile(exportedHtmlPath, injectImageFallback(exportedHtml), "utf-8");
  }
  builtCount += 1;
}

console.log(`Built ${builtCount} portfolio preview(s); skipped ${skippedCount}.`);
