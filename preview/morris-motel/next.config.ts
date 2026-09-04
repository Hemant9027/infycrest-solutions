import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/preview/morris-motel",
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: "https", hostname: "images.pexels.com" }],
  },
};

export default nextConfig;
