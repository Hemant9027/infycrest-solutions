/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/preview/eighty-eight",
  images: {
    // Allow placeholder/no-remote optimization for generated local images
    unoptimized: true,
  },
};

export default nextConfig;
