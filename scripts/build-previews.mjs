import { cp, mkdir, readdir, rm } from "node:fs/promises";
import { join, resolve } from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const root = resolve(import.meta.dirname, "..");
const previewsRoot = join(root, "preview");
const publicRoot = join(root, "public", "preview");

await rm(publicRoot, { recursive: true, force: true });
await mkdir(publicRoot, { recursive: true });

const entries = await readdir(previewsRoot, { withFileTypes: true });
const projects = entries.filter((entry) => entry.isDirectory());

for (const project of projects) {
  const projectDir = join(previewsRoot, project.name);
  console.log(`Building preview: ${project.name}`);
  const npmCommand = process.platform === "win32" ? "npm.cmd" : "npm";
  await execFileAsync(npmCommand, ["install", "--no-audit", "--no-fund"], {
    cwd: projectDir,
    windowsHide: true,
    shell: true,
  });
  await execFileAsync(npmCommand, ["run", "build"], {
    cwd: projectDir,
    windowsHide: true,
    shell: true,
  });
  await cp(join(projectDir, "out"), join(publicRoot, project.name), {
    recursive: true,
  });
}

console.log(`Built ${projects.length} portfolio preview(s).`);
