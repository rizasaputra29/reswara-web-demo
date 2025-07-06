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
  },
  webpack: (config) => {
    config.externals = [...config.externals, { 'framer-motion': 'framer-motion' }];
    return config;
  },
};

module.exports = nextConfig;