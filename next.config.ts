import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/alpen-wool',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
