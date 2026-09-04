import { cp, mkdir, readdir, rm, readFile, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { spawn } from "node:child_process";
import { existsSync } from "node:fs";

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
  if (outputDirectory !== "dist") return; // Only for Vite
  
  const htmlPath = join(outputPath, "index.html");
  if (!existsSync(htmlPath)) return;
  
  let html = await readFile(htmlPath, "utf-8");
  
  // Replace relative paths with absolute preview paths
  // Converts ./assets/ to /preview/clay-dental/assets/
  html = html.replace(/\.\/([^\s"'`]+)/g, `/preview/${outputName}/$1`);
  
  await writeFile(htmlPath, html, "utf-8");
}

await rm(publicRoot, { recursive: true, force: true });
await mkdir(publicRoot, { recursive: true });

const entries = await readdir(previewsRoot, { withFileTypes: true });
const projects = entries.filter((entry) => entry.isDirectory());

for (const project of projects) {
  const projectDir = join(previewsRoot, project.name);
  console.log(`Building preview: ${project.name}`);
  const npmCommand = process.platform === "win32" ? "npm.cmd" : "npm";
  
  // Install dependencies with proper cwd (include dev dependencies)
  try {
    await spawnAsync(npmCommand, ["install", "--include=dev", "--no-audit", "--no-fund"], {
      cwd: projectDir,
      stdio: "pipe",
    });
  } catch (error) {
    console.error(`Failed to install dependencies for ${project.name}:`, error.message);
    throw error;
  }
  
  // Build the project with proper cwd
  try {
    await spawnAsync(npmCommand, ["run", "build"], {
      cwd: projectDir,
      stdio: "pipe",
    });
  } catch (error) {
    console.error(`Failed to build ${project.name}:`, error.message);
    throw error;
  }
  
  // Detect output directory and normalize if needed
  const outputDirectory = resolveOutputDirectory(projectDir);
  const outputPath = join(projectDir, outputDirectory);
  const publicPath = join(publicRoot, project.name);
  
  // Normalize Vite HTML before copying
  await normalizeViteHtml(outputPath, outputDirectory, project.name);
  
  // Copy to public
  await cp(outputPath, publicPath, { recursive: true });
}

console.log(`Built ${projects.length} portfolio preview(s).`);
