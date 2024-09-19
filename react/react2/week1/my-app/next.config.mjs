/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.nasa.gov",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "*.nasa.gov",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
