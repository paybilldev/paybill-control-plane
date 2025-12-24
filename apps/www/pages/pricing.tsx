import { ArrowDownIcon } from '@heroicons/react/outline'
import { ArrowUpRight } from 'lucide-react'
import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Button } from 'ui'

import DefaultLayout from '~/components/layouts/Default'
import PricingPlans from '~/components/layouts/Pricing/PricingPlans'

const PricingComputeSection = dynamic(
  () => import('~/components/layouts/Pricing/PricingComputeSection')
)
const PricingAddons = dynamic(() => import('~/components/layouts/Pricing/PricingAddons'))
const PricingComparisonTable = dynamic(
  () => import('~/components/layouts/Pricing/PricingComparisonTable')
)
const PricingFAQs = dynamic(() => import('~/components/layouts/Pricing/PricingFAQs'))
const CTABanner = dynamic(() => import('~/components/layouts/CTABanner'))
const PricingDiskSection = dynamic(() => import('~/components/layouts/Pricing/PricingDiskSection'))

export default function IndexPage() {
  const { asPath } = useRouter()

  const meta_title = 'Pricing & Fees | Paybill'
  const meta_description =
    'Explore Paybill fees and pricing information. Find our competitive pricing Plans, with no hidden pricing.'

  // Ability to scroll into pricing sections like storage
  useEffect(() => {
    /**
     * As we render a mobile and a desktop row for each item and just display based on screen size, we cannot navigate by simple id hash
     * on both mobile and desktop. To handle both cases, we actually need to check screen size
     */

    const hash = asPath.split('#')[1]
    if (!hash) return

    let device = 'desktop'
    if (window.matchMedia('screen and (max-width: 1024px)').matches) {
      device = 'mobile'
    }

    const element = document.querySelector(`#${hash}-${device}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, [asPath])

  return (
    <DefaultLayout>
      <NextSeo
        title={meta_title}
        description={meta_description}
        openGraph={{
          title: meta_title,
          description: meta_description,
          url: `/pricing`,
          images: [
            {
              url: `/logo-preview.png`,
            },
          ],
        }}
      />

      <div className="relative z-10 pt-8 pb-4 xl:py-16">
        <div className="mx-auto max-w-7xl px-8 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-2 lg:max-w-none">
            <h1 className="h1">
              Predictable pricing,
              <br className="block lg:hidden" /> designed to scale
            </h1>
            <p className="p text-lg leading-5">
              Start building, collaborate with your team, find our competitive pricing Plans, with
              no hidden pricing.
            </p>
          </div>
        </div>
      </div>

      <PricingPlans />

      <div className="text-center mt-10 xl:mt-16 mx-auto max-w-lg flex flex-col gap-8">
        <div className="flex justify-center gap-2">
          <a href="#compare-plans">
            <Button size="tiny" type="secondary" iconRight={<ArrowDownIcon className="w-3" />}>
              Compare Plans
            </Button>
          </a>
          <Button size="tiny" type="default" asChild iconRight={<ArrowUpRight className="w-4" />}>
            <a href="/docs/guides/platform/billing#organization-based-billing" target="_blank">
              Learn how billing works
            </a>
          </Button>
        </div>
      </div>

      <div
        id="addon-compute"
        className="container relative mx-auto px-4 lg:px-12 pt-16 md:pt-24 lg:pt-32 lg:pb-16"
      >
        <PricingComputeSection />
      </div>

      <div
        id="disk"
        className="container relative mx-auto px-4 lg:px-12 pt-16 md:pt-24 lg:pt-32 lg:pb-16"
      >
        <PricingDiskSection />
      </div>

      <div id="addons" className="sm:py-18 container relative mx-auto px-4 py-16 md:py-24 lg:px-12">
        <PricingAddons />
      </div>

      <PricingComparisonTable />

      <div id="faq" className="border-t">
        <PricingFAQs />
      </div>
      <CTABanner />
    </DefaultLayout>
  )
}
