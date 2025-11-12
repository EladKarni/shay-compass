import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config options here
}

export default withPayload(nextConfig, {
  // Disable bundling server packages in dev mode
  configPath: './src/payload.config.ts',
})
