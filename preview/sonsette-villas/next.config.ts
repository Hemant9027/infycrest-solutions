import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "export",
	basePath: "/preview/sonsette-villas",
	images: { unoptimized: true },
};

export default nextConfig;
