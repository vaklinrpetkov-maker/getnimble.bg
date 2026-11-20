import type { NextConfig } from "next";

// Static export: `npm run build` writes a plain HTML/CSS/JS site to ./out
// that can be hosted anywhere (Vercel, SuperHosting, Netlify, any static host).
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
