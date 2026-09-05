import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const imageFallbackScript = String.raw`<script>
(() => {
  const imageSources = {
    dalMakhni: ["/images/villa-1.jpg", "/images/villa-2.jpg"],
    indianFood: ["/images/villa-3.jpg", "/images/villa-4.jpg", "/images/villa-5.jpg"],
    food: ["/images/villa-6.jpg", "/images/villa-7.jpg", "/images/villa-8.jpg"],
    dental: ["/images/villa-1.jpg", "/images/villa-2.jpg"],
    room: ["/images/villa-3.jpg", "/images/villa-4.jpg", "/images/villa-5.jpg"],
    beach: ["/images/villa-6.jpg", "/images/villa-7.jpg", "/images/villa-8.jpg"],
    garden: ["/images/villa-9.jpg", "/images/villa-10.jpg", "/images/villa-11.jpg"],
    outdoors: ["/images/villa-12.jpg", "/images/villa-13.jpg", "/images/villa-14.jpg"],
    exterior: ["/images/villa-15.jpg", "/images/villa-16.jpg", "/images/villa-17.jpg"],
    default: ["/images/villa-18.jpg", "/images/villa-19.jpg"]
  };

  const usedSources = new Set();
  const allSources = Object.values(imageSources).flat();

  function fallbackFor(image) {
    const description = (image.alt + " " + image.src).toLowerCase();
    let candidates = imageSources.default;
    if (/dal makhni|dal makhani|black lentil|maa ki dal/.test(description)) candidates = imageSources.dalMakhni;
    else if (/indian|punjabi|curry|naan|tandoori|biryani|samosa|thali|masala/.test(description)) candidates = imageSources.indianFood;
    else if (/dental|clinic|tooth|smile/.test(description)) candidates = imageSources.dental;
    else if (/chicken|fish|rice|cocktail|sweet|cake|buffet|restaurant|dish|food|kitchen/.test(description)) candidates = imageSources.food;
    else if (/room|bed|suite|hotel|motel|lodge|villa|interior|living/.test(description)) candidates = imageSources.room;
    else if (/beach|ocean|sea|coast|water|reef|flamingo|saltpan|island|andros/.test(description)) candidates = imageSources.beach;
    else if (/garden|palm|flower|courtyard|creek|park/.test(description)) candidates = imageSources.garden;
    else if (/fish|fishing|kayak|canoe|wade|boardwalk|outdoor|sunset/.test(description)) candidates = imageSources.outdoors;
    else if (/house|porch|veranda|exterior|hut|property/.test(description)) candidates = imageSources.exterior;

    const unused = candidates.find((source) => !usedSources.has(source));
    const source = unused || allSources.find((candidate) => !usedSources.has(candidate)) || candidates[usedSources.size % candidates.length];
    usedSources.add(source);
    return source;
  }

  function repair(image) {
    if (image.dataset.imageFallbackApplied) return;
    image.dataset.imageFallbackApplied = "true";
    image.src = fallbackFor(image);
    image.removeAttribute("srcset");
  }

  document.addEventListener("error", (event) => {
    if (event.target instanceof HTMLImageElement) repair(event.target);
  }, true);

  document.querySelectorAll("img").forEach((image) => {
    if (image.complete && image.naturalWidth === 0) repair(image);
  });
})();
</script>`;

export function injectImageFallback(html) {
  html = html.replace(/<script>\s*\(\(\) => \{\s*const imageSources[\s\S]*?<\/script>/, "");
  return html.replace(/<\/body>/i, `${imageFallbackScript}</body>`);
}

export async function repairPreviewDirectory(publicRoot) {
  const entries = await readdir(publicRoot, { withFileTypes: true });
  let repairedCount = 0;

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const htmlPath = join(publicRoot, entry.name, "index.html");
    try {
      const html = await readFile(htmlPath, "utf-8");
      const repaired = injectImageFallback(html);
      if (repaired !== html) {
        await writeFile(htmlPath, repaired, "utf-8");
        repairedCount += 1;
      }
    } catch {
      // A preview without a static index is not part of this repair pass.
    }
  }

  return repairedCount;
}