/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    config.module.rules.push({
      loader: '@svgr/webpack',
      test: /\.svg$/,
    });

    return config;
  },
};

// eslint-disable-next-line no-undef
module.exports = nextConfig;
