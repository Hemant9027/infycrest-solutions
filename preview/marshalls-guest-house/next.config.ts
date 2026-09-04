import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "export",
	basePath: "/preview/marshalls-guest-house",
	images: { unoptimized: true },
};

export default nextConfig;
