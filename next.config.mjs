/** @type {import('next').NextConfig} */
const nextConfig = {
  // DO NOT set output: 'export' — that generates a static bundle with no
  // Node.js server and is incompatible with cPanel / Phusion Passenger.
  // Standard build mode outputs to .next/ which server.js serves directly.

  images: {
    // Image Optimization requires a Node.js server; keep unoptimized: true
    // since cPanel shared hosting cannot run the optimizer.
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
};

export default nextConfig;
