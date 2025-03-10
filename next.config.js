/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'https://researchbridge-server.onrender.com',
  },
  images: {
    domains: ['researchbridge-server.onrender.com'],
    unoptimized: true,
  },
  output: 'standalone',
  webpack: (config) => {
    config.externals = [...(config.externals || []), 'socket.io-client'];
    return config;
  },
};

module.exports = nextConfig; 