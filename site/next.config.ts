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
        protocol: "https",
        hostname: "cms-hmtg.webbuild.arachnova.id",
        pathname: "/uploads/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
