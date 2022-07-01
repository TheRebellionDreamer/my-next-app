// /** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      loader: '@svgr/webpack',
      test: /\.svg$/,
    });

    return config;
  },
};

module.exports = nextConfig;
