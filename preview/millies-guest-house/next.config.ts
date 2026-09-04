import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/preview/millies-guest-house",
  images: { unoptimized: true },
};

export default nextConfig;
