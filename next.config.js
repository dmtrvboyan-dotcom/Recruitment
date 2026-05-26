/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
  },
  compiler: {
    removeConsole: true,
  },
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig