import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { cn, Button, ButtonProps, Panel } from 'ui'
import DefaultLayout from '~/components/layouts/Default'
import { SectionContainer } from 'ui'
import data from '~/data/support'

const Index = () => {
  return (
    <>
      <NextSeo
        title={data.meta_title}
        description={data.meta_description}
        openGraph={{
          title: data.meta_title,
          description: data.meta_description,
          url: `/support`,
          images: [
            {
              url: `/logo-preview.png`,
            },
          ],
        }}
      />
      <DefaultLayout className="!min-h-fit">
        <SectionContainer className="text grid gap-5 md:grid-cols-2 xl:grid-cols-3 max-w-7xl !pb-8">
          {data.cards.map((card) => (
            <Panel
              key={card.title}
              outerClassName={cn(card.className)}
              innerClassName="flex flex-col p-5"
            >
              <div className="mb-4 lg:mb-8 flex-1">
                <h2 className="text text-lg font-medium">{card.title}</h2>
                <div className="my-2 block">
                  <p className="text-foreground-light">{card.paragraph}</p>
                </div>
              </div>
              <div className="flex gap-2">
                {card.links.map((link) => (
                  <Button
                    size="small"
                    type={(link.type as ButtonProps['type']) ?? 'default'}
                    iconRight={link.icon}
                    asChild
                  >
                    <Link href={link.link} as={link.link} target={link.target}>
                      {link.label}
                    </Link>
                  </Button>
                ))}
              </div>
            </Panel>
          ))}
        </SectionContainer>
        <SectionContainer className="!pt-0 max-w-7xl">
          <div className="mx-auto bg-alternative border rounded-xl p-6 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 xl:gap-16 justify-between">
              <div className="gap-2 flex flex-col">
                <h2 className="text-xl lg:text-2xl tracking-tight">{data.banner.title}</h2>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col">{data.banner.paragraph}</div>
                <div className="flex gap-2">
                  {data.banner.links.map((link) => (
                    <Button
                      size="tiny"
                      type={(link.type as ButtonProps['type']) ?? 'default'}
                      iconRight={link.icon}
                      asChild
                    >
                      <Link
                        href={link.link}
                        as={link.link}
                        target={link.target}
                        className={cn(link.className)}
                      >
                        {link.label}
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </DefaultLayout>
    </>
  )
}

export default Index
