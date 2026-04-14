/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    rules: {
      '*.html': {
        loaders: ['html-loader'],
        as: '*.js',
      },
    },
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
