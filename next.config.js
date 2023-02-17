/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["react-feather"],
  },
};

module.exports = nextConfig;
