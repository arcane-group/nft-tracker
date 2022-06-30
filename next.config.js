/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    ETHERSCAN_API_KEY: process.env.ETHERSCAN_API_KEY,
    MORALIS_SERVER_URL: process.env.MORALIS_SERVER_URL,
    MORALIS_API_KEY: process.env.MORALIS_API_KEY,
  },
}

module.exports = nextConfig
