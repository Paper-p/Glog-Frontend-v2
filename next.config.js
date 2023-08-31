/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    esmExternals: 'loose',
  },
  reactStrictMode: false,
  compiler: {
    emotion: true,
  },
};

// eslint-disable-next-line @typescript-eslint/no-var-requires
const removeImports = require('next-remove-imports')();

module.exports = removeImports(nextConfig);
