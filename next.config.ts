import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The ads landing page briefly lived here before moving to /landing.
      // Query strings (utm_*, fbclid) carry through, so attribution survives.
      {
        source: "/restaurants-wineries",
        destination: "/landing",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
