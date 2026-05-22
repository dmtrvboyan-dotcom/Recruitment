/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: false,
  },
  experimental: {
    optimizeCss: true,
  },
  compiler: {
    removeConsole: true,
  },
}

module.exports = nextConfig