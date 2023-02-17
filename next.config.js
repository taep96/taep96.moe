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

const ContentSecurityPolicy = `
    default-src 'self' vitals.vercel-insights.com;
`;

module.exports = nextConfig;
