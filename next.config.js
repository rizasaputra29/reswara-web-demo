/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  transpilePackages: ['framer-motion'],
  experimental: {
    esmExternals: 'loose'
  }
};

module.exports = nextConfig;