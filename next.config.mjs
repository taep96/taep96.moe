/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    domains: [
      "repository-images.githubusercontent.com",
      "opengraph.githubassets.com",
    ],
  },
};

export default nextConfig;
