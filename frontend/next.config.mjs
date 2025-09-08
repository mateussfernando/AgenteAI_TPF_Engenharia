/** @type {import('next').NextConfig} */
import withPWA from "next-pwa";

const pwaConfig = withPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,

});

const nextConfig = {
  reactStrictMode: true,
  output: "export", // ativa exportação estática
};

export default pwaConfig(nextConfig);
