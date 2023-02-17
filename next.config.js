/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["react-feather"],
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/(.*)*",
        headers: securityHeaders,
      },
    ];
  },
};

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value:
      "default-src 'self' 'unsafe-eval' 'unsafe-inline' vitals.vercel-insights.com;",
  },
];

module.exports = nextConfig;
