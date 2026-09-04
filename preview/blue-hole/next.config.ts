import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "export",
	basePath: "/preview/blue-hole",
	images: { unoptimized: true },
};

export default nextConfig;
