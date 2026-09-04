import { resolve } from "node:path";
import { injectImageFallback, repairPreviewDirectory } from "./preview-image-fallback.mjs";

const publicRoot = resolve(import.meta.dirname, "..", "public", "preview");
const repairedCount = await repairPreviewDirectory(publicRoot);
console.log(`Added image fallback handling to ${repairedCount} preview(s).`);