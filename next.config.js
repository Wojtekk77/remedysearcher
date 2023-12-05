/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // appDir: true, // no experimental in next 14 :D
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  transpilePackages: ['@mui/x-charts'],
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }
    return config
  }
}

module.exports = nextConfig
