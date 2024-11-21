/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    domains: [
      "repository-images.githubusercontent.com",
      "opengraph.githubassets.com",
    ],
  },
  redirects() {
    return [
      {
        source: "/discord",
        destination: process.env.DISCORD_URL,
        permanent: false,
      }
    ];
  },
};

export default nextConfig;
