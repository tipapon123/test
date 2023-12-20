/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sea-lion-app-hl2ko.ondigitalocean.app',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
