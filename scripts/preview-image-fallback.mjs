import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const imageFallbackScript = String.raw`<script>
(() => {
  const imageSources = {
    dalMakhni: [
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1600&q=85"
    ],
    indianFood: [
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1600&q=85"
    ],
    food: [
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eebe?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=85"
    ],
    dental: [
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=1600&q=85"
    ],
    room: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=85"
    ],
    beach: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1600&q=85"
    ],
    garden: [
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1599685315640-9c821f4f6e0a?auto=format&fit=crop&w=1600&q=85"
    ],
    outdoors: [
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1600&q=85"
    ],
    exterior: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85"
    ],
    default: [
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85"
    ]
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