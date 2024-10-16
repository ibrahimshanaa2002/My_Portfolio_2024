/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

// Import next-videos
const withVideos = require("next-videos");

// Combine both configurations
module.exports = withVideos({
  ...nextConfig, // Spread the existing Next.js config
});
