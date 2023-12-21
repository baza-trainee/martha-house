/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  optimizeFonts: true,
  images: {
    domains: ["images.unsplash.com"],
  },
};

module.exports = nextConfig;
