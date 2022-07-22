/** @type {import('next').NextConfig} */
const withImages = require('next-images')
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  async redirects() {
    return [
      {
        source: '/',
        destination: 'Home',
        permanent: true,
      },
    ]
  },
  
}

module.exports = nextConfig, withImages()
