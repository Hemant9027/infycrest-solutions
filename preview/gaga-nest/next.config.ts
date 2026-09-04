import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "export",
	basePath: "/preview/gaga-nest",
	images: { unoptimized: true },
};

export default nextConfig;
