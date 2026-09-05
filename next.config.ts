import type { NextConfig } from "next";
import { readdirSync } from "node:fs";
import { join } from "node:path";

const legacyPreviewSlugs = readdirSync(join(process.cwd(), "preview"), {
	withFileTypes: true,
})
	.filter((entry) => entry.isDirectory())
	.map((entry) => entry.name);

const nextConfig: NextConfig = {
	devIndicators: false,
	async rewrites() {
		return legacyPreviewSlugs.map((slug) => ({
			source: `/preview/${slug}`,
			destination: `/preview/${slug}/index.html`,
		}));
	},
};

export default nextConfig;
