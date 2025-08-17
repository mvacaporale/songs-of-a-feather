import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    BACKEND_BASE_URL: process.env.NODE_ENV === 'development'
      ? 'http://localhost:5000'
      : '/api'
  }
};



export default nextConfig;
