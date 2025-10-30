import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel поддерживает полноценный Next.js с серверными функциями
  // Убрали output: 'export' чтобы работали API routes
  images: {
    // Vercel автоматически оптимизирует изображения через свой CDN
    // Можно убрать unoptimized, но оставим для совместимости
    unoptimized: false,
  },
};

export default nextConfig;
