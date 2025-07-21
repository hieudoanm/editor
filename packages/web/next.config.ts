import type { NextConfig } from 'next';

const NODE_ENV = process.env.NODE_ENV ?? 'development';
const VERCEL_ENV = process.env.VERCEL_ENV ?? 'development';

const partialNextConfig: Partial<NextConfig> =
  VERCEL_ENV === 'development'
    ? {
        images: { unoptimized: true },
        basePath: NODE_ENV === 'development' ? '' : '/editor',
        output: NODE_ENV === 'development' ? 'standalone' : 'export',
        distDir: NODE_ENV === 'development' ? '.next' : '../../docs',
      }
    : {};

const nextConfig: NextConfig = {
  /* config options here */
  ...partialNextConfig,
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
