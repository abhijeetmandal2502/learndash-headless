/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
    API_BASE_URL: 'https://cesimple.wpengine.com/wp-json'

  },
  images: {
    domains: ['h2d0qdmatmf2l6agp7tn7y36y.js.wpenginepowered.com', 'h5dy7uj4qf3om2qd3ma359c2g.js.wpenginepowered.com']
  },
}

module.exports = nextConfig
