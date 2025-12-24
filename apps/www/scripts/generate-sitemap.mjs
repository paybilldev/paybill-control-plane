import { writeFileSync } from 'fs'
import { globby } from 'globby'
import prettier from 'prettier'

async function generate() {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js')

  const unsortedPages = await globby([
    'pages/*.js',
    'pages/*.tsx',
    'pages/*.mdx',
    'pages/**/*.tsx',
    'data/**/*.mdx',
    '_blog/*.mdx',
    '_customers/*.mdx',
    '!data/*.mdx',
    '!pages/_*.js',
    '!pages/_*.tsx',
    '!pages/404.tsx',
    '!pages/505.tsx',
    '.next/server/pages/apps/*.html',
  ])

  const pages = unsortedPages.sort((a, b) => a.localeCompare(b))

  const blogUrl = 'blog'
  const customerStoriesUrl = 'customers'

  // Generate URLs for static pages
  const staticUrls = pages
    .map((page) => {
      const path = page
        .replace('.next/server/pages', '')
        .replace('pages', '')
        .replace('.html', '')
        // add a `/` for blog posts
        .replace('_blog', `/${blogUrl}`)
        .replace('_customers', `/${customerStoriesUrl}`)
        .replace('.tsx', '')
        .replace('.mdx', '')
        // replace /{directory}/index with /{directory}
        .replace(/\/([^\/]+)\/index/, '/$1')

      let route = path === '/index' ? '' : path

      if (route === '/customers/[slug]') return null
      if (route === '/blog/categories/[category]') return null

      /**
       * Blog based urls
       * handle removal of dates in filename
       */
      if (route.includes(`/${blogUrl}/`)) {
        /**
         * remove directory from route
         */
        const _route = route.replace(`/${blogUrl}/`, '')
        /**
         * remove the date from the file name
         */
        const substring = _route.substring(11)
        /**
         * reconsruct the route
         */
        route = `/${blogUrl}/` + substring
      }

      return `
        <url>
            <loc>${`${process.env.PLATFORM_PUBLIC_URL}${route}`}</loc>
            <changefreq>weekly</changefreq>
            <priority>0.5</priority>
        </url>
      `
    })
    .filter(Boolean)

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${[...staticUrls].join('')}
    </urlset>
    `

  const formatted = await prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  })

  /**
   * generate sitemap router
   *
   * this points to www and docs sitemaps
   */
  const sitemapRouter = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${process.env.PLATFORM_PUBLIC_URL}/sitemap_www.xml</loc>
  </sitemap>
  <sitemap>
    <loc>${process.env.PLATFORM_PUBLIC_URL}/docs/sitemap.xml</loc>
  </sitemap>
</sitemapindex>
`

  /**
   * write sitemaps
   */
  writeFileSync('public/sitemap.xml', sitemapRouter)
  writeFileSync('public/sitemap_www.xml', formatted)
}

generate()