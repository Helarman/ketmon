/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  };
  
  module.exports = {
    ...nextConfig,
    images: {
      domains: ['31.128.45.168:1337'],
    },
  };

export default nextConfig;
