/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  compiler: {
    emotion: true,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
