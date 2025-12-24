import Link from 'next/link'
import Layout from '~/components/layouts/Default'
import CTABanner from '~/components/layouts/CTABanner'
import { SectionHeader, SectionContainer } from 'ui'
import Image from 'next/image'
import { Button } from 'ui'
import { NextSeo } from 'next-seo'
import data from '~/data/community'

type Props = {}

const Index = ({}: Props) => {
  const meta_title = 'Simple is better than complex | Paybill'
  const meta_description =
    'Paybill is the community that builds the infrastructure for your applications. Even a baby can build with Paybill.'

  return (
    <>
      <NextSeo
        title={meta_title}
        description={meta_description}
        openGraph={{
          title: meta_title,
          description: meta_description,
          url: `/company`,
          images: [
            {
              url: `/logo-preview.png`,
            },
          ],
        }}
      />
      <Layout>
        <Header />
        <Community />
        <Investors />
        <Team />
        <CTABanner />
      </Layout>
    </>
  )
}

export default Index

const Header = () => {
  return (
    <>
      <div
        className="
          sm:py-18
          container relative mx-auto px-6 py-16 text-center md:py-24 lg:px-16 lg:py-24
          xl:px-20"
      >
        <h1 className="text-foreground text-5xl">Simple is better than complex</h1>
      </div>
    </>
  )
}

const Team = () => {
  return (
    <div className="border-t border-default">
      <SectionContainer>
        <SectionHeader title="Team" paragraph={<div></div>} />
        <div className="grid grid-cols-2 md:grid-cols-12">
          <div className="col-span-8 ">
            <p className="text-foreground text-lg">
              Paybill is fully remote, with team members across multiple time zones. We prioritise
              asynchronous communication, flexible schedules, and ownership — ship small, iterate
              fast. Join us to help build reliable, simple infrastructure that developers love.
            </p>
          </div>
          <div className=" col-span-4 pt-8 md:mt-0 md:text-right">
            <Button size="medium" className="text-white">
              <Link href="/careers">Join the team</Link>
            </Button>
          </div>
        </div>
      </SectionContainer>
    </div>
  )
}

const Community = () => {
  return (
    <SectionContainer className="pt-0 lg:pt-0">
      <div className="space-y-16">
        <div className="relative grid max-w-5xl grid-cols-2 gap-8 lg:grid-cols-2 ">
          {data.map((x, i) => (
            <div
              key={x.title}
              className={`
              space-y-4 text-center
              ${i !== data.length - 1 ? 'border-default lg:border-r' : ''}
              ${i === 1 ? 'border-default md:border-0 lg:border-r ' : ''}
          `}
            >
              <div
                className={`relative mx-auto h-7 w-7 ${
                  x.invertImgDarkMode ? ' dark:invert dark:filter' : ''
                }`}
              >
                <Image
                  layout="fill"
                  alt={`${x.title} logo`}
                  src={`/images/social/${x.img}`}
                  objectFit="scale-down"
                  objectPosition="center"
                  className="
                      bg-no-repeat
                  "
                />
              </div>
              <div>
                <h1 className="text-foreground mb-0 text-4xl">{x.stat}</h1>
                <p className="text-foreground-light text-sm">{x.statLabel}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}

const Investors = () => {
  return (
    <SectionContainer className="pt-0 lg:pt-0">
      <div id="investors">
        <SectionHeader
          title="Our investors"
          paragraph={
            <p className="text-foreground-lighter max-w-3xl text-lg sm:mt-4">
              We are looking to raise funding once we launch the first Long Term Support Version. If
              you are interested in investing, please contact us at{' '}
              <a href="mailto:investor@paybill.dev" className="underline text-primary">
                investor@paybill.dev
              </a>
              .
            </p>
          }
        />
      </div>
    </SectionContainer>
  )
}
