import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@rallycrew/ui"],
  turbopack: {
    // Ensure Next picks the monorepo root (prevents the “inferred root” weirdness)
    root: "../../",
  },
};

export default nextConfig;