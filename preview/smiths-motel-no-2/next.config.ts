import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "export",
	basePath: "/preview/smiths-motel-no-2",
	images: { unoptimized: true },
};

export default nextConfig;
