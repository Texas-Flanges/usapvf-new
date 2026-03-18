/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/services",
        destination: "/products",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
