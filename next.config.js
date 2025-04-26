/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove output: 'export' since we need dynamic routes for authentication
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig