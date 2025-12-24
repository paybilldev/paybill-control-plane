import Document, { Head, Html, Main, NextScript } from 'next/document'
import { DefaultSeo } from 'next-seo'
import {
  MetaFaviconsPagesRouter,
  DEFAULT_FAVICON_ROUTE,
  DEFAULT_FAVICON_THEME_COLOR,
} from 'common'

class MyDocument extends Document {
  render() {
    const APP_NAME = 'Paybill'
    const DEFAULT_META_DESCRIPTION =
      'Build production-grade applications with a any database, Authentication, instant APIs, Functions, Storage and Vector embeddings.'
    const site_title = `${APP_NAME} | Simple is better than complex.`

    let applicationName = 'Paybill'
    let faviconRoute = DEFAULT_FAVICON_ROUTE
    let themeColor = DEFAULT_FAVICON_THEME_COLOR
    return (
      <Html lang="en">
        <Head>
          <MetaFaviconsPagesRouter
            applicationName={applicationName}
            route={faviconRoute}
            themeColor={themeColor}
            includeManifest
            includeMsApplicationConfig
            includeRssXmlFeed
          />
          <DefaultSeo
            title={site_title}
            description={DEFAULT_META_DESCRIPTION}
            openGraph={{
              type: 'website',
              url: '/',
              site_name: 'Paybill',
              images: [
                {
                  url: `/logo-preview.png`,
                  width: 800,
                  height: 600,
                  alt: 'Paybill Og Image',
                },
              ],
            }}
            twitter={{
              handle: '@paybilldev',
              site: '@paybilldev',
              cardType: 'summary_large_image',
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />

          <script async src="https://www.googletagmanager.com/gtag/js?id=G-B6WDFQNTZ5"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-B6WDFQNTZ5');
              `,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                (function(){
                  var s1=document.createElement("script");
                  s1.async=true;
                  s1.src='https://embed.tawk.to/6917e66e5781c019591e4f6e/1ja2lo89t';
                  s1.charset='UTF-8';
                  s1.setAttribute('crossorigin','*');
                  document.body.appendChild(s1);
                })();
              `,
            }}
          />
        </body>
      </Html>
    )
  }
}

export default MyDocument
