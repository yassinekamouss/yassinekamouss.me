import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["next-mdx-remote"],
  allowedDevOrigins: ["*"],
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nlifytjvdlnrgaervfwo.supabase.co",
      },
      {
        protocol: "https",
        hostname: "www.yassinekamouss.me",
      },
      {
        protocol: "https",
        hostname: "yassinekamouss.me",
      },
      {
        protocol: "https",
        hostname: "yassinekamouss.vercel.app",
      },
      {
        protocol: "https",
        hostname: "www.docker.com",
      },
      {
        protocol: "https",
        hostname: "www.linkedin.com",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
