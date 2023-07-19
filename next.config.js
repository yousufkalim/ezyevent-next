/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['pages', 'utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },

  //   // rules: {
  //   //   // Other rules
  //   //   "@next/next/no-img-element": "off",
  //   // },
  //   webpack(config) {
  //     config.module.rules.push({
  //       test: /\.svg$/,
  //       use: ['@svgr/webpack'],
  //     });

  //     return config;
  //   },

  //   images: {
  //     disableStaticImages: true,
  //     // next/image support `srcSet` using the below deviceSizes
  //     // for more info, visit https://nextjs.org/docs/basic-features/image-optimization#device-sizes
  //     deviceSizes: [320, 480, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  //     // https://nextjs.org/docs/basic-features/image-optimization#image-sizes
  //     imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  //     domains: ['assets.vercel.com', 'https://firebasestorage.googleapis.com/'],
  //   },
  //   eslint: {
  //     // Warning: This allows production builds to successfully complete even if
  //     // your project has ESLint errors.
  //     ignoreDuringBuilds: true,
  //   },
};

module.exports = nextConfig;
