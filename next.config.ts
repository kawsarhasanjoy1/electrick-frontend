import { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cf-sparkai-live.s3.amazonaws.com"],
    remotePatterns: [
      {
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
