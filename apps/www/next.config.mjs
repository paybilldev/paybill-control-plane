import bundleAnalyzer from '@next/bundle-analyzer'
import nextMdx from '@next/mdx'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

import redirects from './lib/redirects.js'
import remotePatterns from './lib/remotePatterns.js'
import rewrites from './lib/rewrites.js'

import { remarkCodeHike } from '@code-hike/mdx'
import codeHikeTheme from './data/json/code-hike.theme.json' with { type: 'json' }

import { withContentlayer } from 'next-contentlayer2'

// Convert require() → import
import { withSentryConfig } from '@sentry/nextjs'
import { getCSP } from './csp.js'

// Bundle analyzer
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

const withMDX = nextMdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      [
        remarkCodeHike,
        {
          theme: codeHikeTheme,
          lineNumbers: true,
          showCopyButton: true,
        },
      ],
      remarkGfm,
    ],
    rehypePlugins: [rehypeSlug],
    providerImportSource: '@mdx-js/react',
  },
})

function getAssetPrefix() {
  if (process.env.FORCE_ASSET_CDN !== '1' && process.env.NODE_ENV !== 'production') {
    return undefined
  }

  if (process.env.FORCE_ASSET_CDN === '-1') {
    return undefined
  }

  return `${process.env.ASSETS_URL}`
}

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? '',
  assetPrefix: getAssetPrefix(),
  output: 'standalone',

  experimental: {
    webpackBuildWorker: true,
  },

  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  trailingSlash: false,
  reactStrictMode: true,

  async rewrites() {
    return rewrites
  },

  async redirects() {
    return redirects
  },

  async headers() {
    return [
      {
        source: '/(.*?)',
        headers: [
          { key: 'X-Robots-Tag', value: 'all' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'no-sniff' },
          { key: 'Strict-Transport-Security', value: '' },
          {
            key: 'Content-Security-Policy',
            value: getCSP(),
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/images/:slug*',
        headers: [{ key: 'cache-control', value: 'public, max-age=2592000' }],
      },
      {
        source: '/favicon/:slug*',
        headers: [{ key: 'cache-control', value: 'public, max-age=86400' }],
      },
      {
        source: '/(.*).ts',
        headers: [{ key: 'content-type', value: 'text/typescript' }],
      },
      {
        source: '/(.*)',
        headers: [{ key: 'Strict-Transport-Security', value: '' }],
      },
    ]
  },

  images: {
    dangerouslyAllowSVG: false,
    remotePatterns,
  },

  transpilePackages: ['ui', 'common', 'platform-api-types'],

  turbopack: {
    rules: {
      '*.md': {
        loaders: ['raw-loader'],
        as: '*.js',
      },
    },
  },

  webpack(config) {
    config.infrastructureLogging = { level: 'error' }

    config.module.rules.push({
      test: /\.md$/,
      type: 'asset/source',
    })

    return config
  },

  onDemandEntries: {
    maxInactiveAge: 24 * 60 * 60 * 1000,
    pagesBufferLength: 100,
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
}

// ---- Plugin wrapping ----

const plugins = [withContentlayer, withMDX, withBundleAnalyzer]
const wrappedConfig = plugins.reduce((acc, next) => next(acc), nextConfig)

// ---- Sentry must be last ----
export default withSentryConfig(wrappedConfig, {
  silent: true,
  widenClientFileUpload: true,
  reactComponentAnnotation: { enabled: true },
  hideSourceMaps: true,
  disableLogger: true,
})
