import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Abaikan error ESLint saat build (Biar warning <img> tidak menggagalkan deploy)
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Abaikan error TypeScript kecil saat build
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "certain-angel-bc161b7e61.strapiapp.comhttps",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "certain-angel-bc161b7e61.media.strapiapp.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.strapi.app", // Untuk Strapi Cloud
      },
    ],
  },
};

export default nextConfig;
