import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config options here
  serverExternalPackages: [
    'sharp',
    '@payloadcms/db-postgres',
    'drizzle-orm',
    'payload',
  ],
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = config.externals || []
      config.externals.push(
        'pg-native',
        'sharp',
        '@node-rs/argon2',
        '@node-rs/bcrypt',
      )
    }
    return config
  },
  experimental: {
    outputFileTracingIncludes: {
      '/api/**/*': ['./node_modules/**/*.wasm', './node_modules/**/*.node'],
    },
  },
  // Optimize bundle size
  outputFileTracing: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
}

export default withPayload(nextConfig, {
  // Disable bundling server packages in dev mode
  configPath: './src/payload.config.ts',
})
