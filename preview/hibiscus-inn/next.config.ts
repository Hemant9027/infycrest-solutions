import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "export",
	basePath: "/preview/hibicuss-inn",
	images: { unoptimized: true },
};

export default nextConfig;
