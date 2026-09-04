import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/preview/sir-charles-hotel",
  images: { unoptimized: true },
};

export default nextConfig;
