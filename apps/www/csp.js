const API_URL = process.env.NEXT_PUBLIC_API_URL
  ? new URL(process.env.NEXT_PUBLIC_API_URL).origin
  : ''
const PAYBILL_PROJECTS_URL = process.env.NEXT_PAYBILL_PROJECTS_URL
const PAYBILL_PROJECTS_URL_WS = process.env.NEXT_PAYBILL_PROJECTS_URL_WS

const isDevOrStaging =
  process.env.NODE_ENV === 'preview' ||
  process.env.NODE_ENV === 'local' ||
  process.env.NODE_ENV === 'staging'

const PAYBILL_URL = process.env.NEXT_PUBLIC_URL
const CLOUDFLARE_CDN_URL = 'https://cdnjs.cloudflare.com'
const HCAPTCHA_SUBDOMAINS_URL = 'https://*.hcaptcha.com'
const HCAPTCHA_ASSET_URL = 'https://newassets.hcaptcha.com'
const HCAPTCHA_JS_URL = 'https://js.hcaptcha.com'
const CONFIGCAT_URL = process.env.CONFIGCAT_URL
const CONFIGCAT_PROXY_URL = process.env.NEXT_PUBLIC_CONFIGCAT_PROXY_URL
const CLOUDFLARE_URL = 'https://www.cloudflare.com'
const GITHUB_API_URL = 'https://api.github.com'
const GITHUB_USER_CONTENT_URL = 'https://raw.githubusercontent.com'
const GITHUB_USER_AVATAR_URL = 'https://avatars.githubusercontent.com'
const GOOGLE_USER_AVATAR_URL = 'https://lh3.googleusercontent.com'

const SENTRY_URL =
  'https://*.ingest.sentry.io https://*.ingest.us.sentry.io https://*.ingest.de.sentry.io'
const ASSETS_URL = process.env.ASSETS_URL
const POSTHOG_URL = process.env.POSTHOG_URL

const USERCENTRICS_URLS = 'https://*.usercentrics.eu'
const USERCENTRICS_APP_URL = 'https://app.usercentrics.eu'

const GOOGLE_MAPS_API_URL = 'https://maps.googleapis.com'

module.exports.getCSP = function getCSP() {
  const DEFAULT_SRC_URLS = [
    API_URL,
    PAYBILL_PROJECTS_URL,
    PAYBILL_PROJECTS_URL_WS,
    HCAPTCHA_SUBDOMAINS_URL,
    CONFIGCAT_URL,
    CONFIGCAT_PROXY_URL,
    CLOUDFLARE_URL,
    GITHUB_API_URL,
    GITHUB_USER_CONTENT_URL,
    ASSETS_URL,
    USERCENTRICS_URLS,
    GOOGLE_MAPS_API_URL,
    POSTHOG_URL,
    CLOUDFLARE_CDN_URL,
  ]
  const SCRIPT_SRC_URLS = [CLOUDFLARE_CDN_URL, HCAPTCHA_JS_URL, ASSETS_URL, POSTHOG_URL]
  const FRAME_SRC_URLS = [HCAPTCHA_ASSET_URL]
  const IMG_SRC_URLS = [
    PAYBILL_URL,
    PAYBILL_PROJECTS_URL,
    GITHUB_USER_AVATAR_URL,
    GOOGLE_USER_AVATAR_URL,
    ASSETS_URL,
    USERCENTRICS_APP_URL,
  ]
  const STYLE_SRC_URLS = [CLOUDFLARE_CDN_URL, ASSETS_URL]
  const FONT_SRC_URLS = [CLOUDFLARE_CDN_URL, ASSETS_URL]

  const defaultSrcDirective = [
    `default-src 'self'`,
    ...DEFAULT_SRC_URLS,
    ...(isDevOrStaging ? [PAYBILL_DOCS_PROJECT_URL] : []),
    SENTRY_URL,
  ].join(' ')

  const imgSrcDirective = [`img-src 'self'`, `blob:`, `data:`, ...IMG_SRC_URLS].join(' ')

  const scriptSrcDirective = [
    `script-src 'self'`,
    `'unsafe-eval'`,
    `'unsafe-inline'`,
    ...SCRIPT_SRC_URLS,
    GOOGLE_MAPS_API_URL,
  ].join(' ')

  const frameSrcDirective = [`frame-src 'self'`, ...FRAME_SRC_URLS].join(' ')

  const styleSrcDirective = [`style-src 'self'`, `'unsafe-inline'`, ...STYLE_SRC_URLS].join(' ')

  const fontSrcDirective = [`font-src 'self'`, ...FONT_SRC_URLS].join(' ')

  const workerSrcDirective = [`worker-src 'self'`, `blob:`, `data:`].join(' ')

  const cspDirectives = [
    defaultSrcDirective,
    imgSrcDirective,
    scriptSrcDirective,
    frameSrcDirective,
    styleSrcDirective,
    fontSrcDirective,
    workerSrcDirective,
    `object-src 'none'`,
    `base-uri 'self'`,
    `form-action 'self'`,
    `frame-ancestors 'none'`,
    `block-all-mixed-content`,
    ...(process.env.NEXT_PUBLIC_ENVIRONMENT === 'prod' ? [`upgrade-insecure-requests`] : []),
  ]

  const csp = cspDirectives.join('; ') + ';'

  // Replace newline characters and spaces
  return csp.replace(/\s{2,}/g, ' ').trim()
}
