import CTABanner from '~/components/layouts/CTABanner'
import { Button } from 'ui'
import Layout from '~/components/layouts/Default'

import { useRouter } from 'next/router'

import { Download } from 'lucide-react'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import { SectionContainer } from 'ui'

const Index = () => {
  // base path for images
  const router = useRouter()

  const meta_title = 'Branding | Paybill'
  const meta_description = 'Get Paybill Brand assets here.'

  return (
    <>
      <NextSeo
        title={meta_title}
        description={meta_description}
        openGraph={{
          title: meta_title,
          description: meta_description,
          url: `/brand-assets`,
          images: [
            {
              url: `/logo-preview.png`,
            },
          ],
        }}
      />
      <Layout>
        <div>
          <SectionContainer className="pb-0 md:pb-0 lg:pb-0">
            <div className="max-w-xl">
              <h1 className="text-foreground text-5xl">Brand assets</h1>
              <p className="text-foreground text-2xl">Download official Paybill logos</p>
              <p className="text-foreground text-sm">
                All Paybill trademarks, logos, or other brand elements can never be modified or used
                for any other purpose other than to represent Welgon Limited.
              </p>
            </div>
          </SectionContainer>
          <SectionContainer>
            <div className="shadow-small grid grid-cols-12 rounded-lg border border-default">
              <div className="relative col-span-12 h-60 w-full overflow-auto rounded-lg lg:col-span-5">
                <Image src="/logo-preview.png" alt="Logo Preview" layout="fill" objectFit="cover" />
              </div>
              <div className="col-span-12 flex items-center lg:col-span-7">
                <div className="p-16">
                  <div className="space-y-2">
                    <h1 className="text-foreground text-4xl">Paybill logos</h1>
                    <p className="text-foreground-light text-sm">
                      Download Paybill official logos, including as SVG's, in both light and dark
                      theme.
                    </p>
                    <p className="text-foreground-light text-sm">
                      Do not use any other color for the wordmark.
                    </p>
                    <form method="get" action={`/brand-assets.zip`}>
                      <Button htmlType="submit" type="default" iconRight={<Download />}>
                        Download logo kit
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </SectionContainer>
          <SectionContainer className="sm:pt-0 md:pt-0 lg:pt-0 xl:pt-0">
            <div className="shadow-small grid grid-cols-12 rounded-lg border border-default">
              <div className="relative col-span-12 h-60 w-full overflow-auto rounded-lg lg:col-span-5 flex items-center justify-center">
                <Image
                  src="/badge-made-with-paybill-dark.svg"
                  alt="Connect Paybill Button"
                  width={154}
                  height={31}
                />
              </div>
              <div className="col-span-12 flex items-center lg:col-span-7">
                <div className="p-16">
                  <div className="space-y-2">
                    <h1 className="text-foreground text-4xl">Paybill Integrations</h1>
                    <p className="text-foreground-light text-sm">
                      When building a Paybill Integration, use this "Connect Paybill" button to
                      initiate the OAuth redirect.
                    </p>
                    <p className="text-foreground-light text-sm">
                      Do not use any other color for the wordmark.
                    </p>
                    <form method="get" action={`/connect-paybill.zip`}>
                      <Button htmlType="submit" type="default" iconRight={<Download />}>
                        Download button kit
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </SectionContainer>
          <CTABanner />
        </div>
      </Layout>
    </>
  )
}

export default Index
