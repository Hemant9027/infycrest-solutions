import { islandGarden } from "./island-garden";
import type { DemoConfig } from "./types";

/**
 * Demo registry. To add another hotel demo:
 * 1. Create `src/demos/<slug>.ts` exporting a HotelDemoConfig
 * 2. Add it here — routes, metadata, sitemap and APIs update automatically.
 */
export const demos: Record<string, DemoConfig> = {
  "island-garden": islandGarden,
};

export function getDemo(slug: string): DemoConfig | undefined {
  return demos[slug];
}

export function listDemos(): DemoConfig[] {
  return Object.values(demos);
}
