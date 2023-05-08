/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
    API_BASE_URL: 'https://cesimple.wpengine.com/wp-json'

  },
}

module.exports = nextConfig
