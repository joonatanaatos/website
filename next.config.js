/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.html$/i,
      loader: 'html-loader',
    });
    return config;
  },
};

module.exports = nextConfig;
