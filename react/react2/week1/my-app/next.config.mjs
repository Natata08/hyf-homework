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
    ],
  },
};

export default nextConfig;
