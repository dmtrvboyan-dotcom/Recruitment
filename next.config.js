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
}

module.exports = nextConfig