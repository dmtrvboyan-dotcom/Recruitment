/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: false,
  },
  compiler: {
    removeConsole: true,
  },
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig