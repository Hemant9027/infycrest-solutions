import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "export",
	basePath: "/preview/Island-Garden",
	images: { unoptimized: true },
};

export default nextConfig;
