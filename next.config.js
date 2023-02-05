/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const removeImports = require('next-remove-imports')();

const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: false,
};

module.exports = removeImports({
  ...nextConfig,
});
