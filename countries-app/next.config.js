// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/countries/myapi/:path*',       // The path your frontend will call
        destination: 'https://www.apicountries.com/:path*' // The actual API
      }
    ];
  }
};

module.exports = nextConfig;