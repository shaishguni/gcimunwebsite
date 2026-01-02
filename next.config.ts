import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    qualities: [25, 50, 75, 85, 100],
  },
};

export default nextConfig;
