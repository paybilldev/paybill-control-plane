import dynamic from 'next/dynamic'
import Layout from '~/components/layouts/Default'
import Hero from '~/components/layouts/Hero/Hero'
import HeroFrameworks from '~/components/layouts/Hero/HeroFrameworks'

const CTABanner = dynamic(() => import('components/layouts/CTABanner/index'))

const Index = () => {
  return (
    <Layout>
      <Hero />
      <HeroFrameworks />
      <CTABanner className="border-none" />
    </Layout>
  )
}

export default Index
