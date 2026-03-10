/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/blog/understanding-usa-distribution-design-and-specifications",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/industrial-applications-for-usa-distribution",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/standards-and-quality-assurance-in-usa-distribution",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/products",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
