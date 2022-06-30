const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

const urlPrefix = process.env.NODE_ENV === 'production' ? '/conference/2021' : ''

const nextConfig = {
  target: 'server',
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      }
    }
    return config
  },
  trailingSlash: true,
  pwa: {
    dest: 'public',
    subdomainPrefix: urlPrefix,
    runtimeCaching,
  },
  optimizeImages: false,
}

module.exports = withPWA(nextConfig)
