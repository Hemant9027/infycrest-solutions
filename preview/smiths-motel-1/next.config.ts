import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/preview/smiths-motel-1",
  images: { unoptimized: true },
};

export default nextConfig;
