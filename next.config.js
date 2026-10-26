/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "casalp.digilogy.co" }],
  },
};

module.exports = nextConfig;
