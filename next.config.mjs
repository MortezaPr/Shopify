/** @type {import('next').NextConfig} */
import withPWAInit from "@ducanh2912/next-pwa";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const withPWA = withPWAInit({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swMinify: true,
  disable: process.env.NODE_ENV === "development",
  workboxOptions: {
    disableDevLogs: true,
    runtimeCaching: [
      {
        urlPattern: new RegExp(`^${apiBaseUrl}/api/.*`),
        handler: "NetworkOnly",
      },
    ],
  },
});

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        port: "",
      },
    ],
  },
};

export default withPWA({
  ...nextConfig,
});
