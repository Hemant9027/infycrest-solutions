import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	devIndicators: false,
	async rewrites() {
		return [{
			source: "/preview/:slug",
			destination: "/preview/:slug/index.html",
		}];
	},
};

export default nextConfig;
