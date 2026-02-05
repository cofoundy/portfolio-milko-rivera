/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/portfolio-milko-rivera",
  assetPrefix: "/portfolio-milko-rivera",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.weserv.nl",
        port: "",
        pathname: "/**",
      },
    ],
  },
  trailingSlash: true,
};

module.exports = nextConfig;
