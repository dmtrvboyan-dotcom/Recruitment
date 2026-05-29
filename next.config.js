/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-2e44b458d83f45af99300367d0b52938.r2.dev",
      },
    ],
  },
  compiler: {
    removeConsole: true,
  },
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig