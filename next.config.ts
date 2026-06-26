import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/projects", destination: "/our-work", permanent: true },
      { source: "/gallery", destination: "/our-work", permanent: true },
    ];
  },
};

export default nextConfig;
