import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    domains: ['firebasestorage.googleapis.com', 'imgs.search.brave.com', 'res.cloudinary.com']
  }
};

export default nextConfig;
