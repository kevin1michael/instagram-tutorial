/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    swcPlugins: process.env.NEXT_PUBLIC_TEMPO
      ? [[require.resolve("@petergok/tempo-devtools/swc")], {}]
      : [],
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
