/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    domains: [
      'assets.website-files.com',
      'ik.imagekit.io',
      'website-files.com',
      'res.cloudinary.com',
    ],
    loader: 'custom',
    loaderFile: './lib/imageLoader.js',
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
