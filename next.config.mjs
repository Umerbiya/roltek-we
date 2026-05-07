/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // Only use static export during production builds.
  // In development, omitting this lets the Next.js dev server work normally
  // (including the Image Optimization API).
  ...(isProd && { output: 'export' }),
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
};

export default nextConfig;

