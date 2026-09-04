import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "export",
	basePath: "/preview/Quality-Inn",
	images: { unoptimized: true },
};

export default nextConfig;
