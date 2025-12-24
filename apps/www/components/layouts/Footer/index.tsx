import Image from 'next/image'
import Link from 'next/link'

import footerData from '~/data/footer'
import {
  cn,
  Badge,
  IconDiscord,
  IconGitHubSolid,
  IconTwitterX,
  IconYoutubeSolid,
  SectionContainer,
  ThemeToggle,
} from 'ui'
import { PrivacySettings } from 'common'
import { CheckIcon } from 'lucide-react'

interface Props {
  className?: string
  hideFooter?: boolean
}

const Footer = (props: Props) => {
  if (props.hideFooter) {
    return null
  }

  return (
    <footer className={cn('bg-alternative', props.className)} aria-labelledby="footerHeading">
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>
      <div className="w-full !py-0">
        <SectionContainer className="grid grid-cols-2 md:flex items-center justify-between text-foreground md:justify-center gap-8 md:gap-16 xl:gap-28 !py-6 md:!py-10 text-sm">
          <div className="flex flex-col md:flex-row gap-2 md:items-center">
            We protect your data.
            <Link href="/security" className="text-brand-link hover:underline">
              More on Security
            </Link>
          </div>
        </SectionContainer>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
      <SectionContainer className="py-8">
        <div className="xl:grid xl:grid-cols-7 xl:gap-4">
          <div className="space-y-8 xl:col-span-2">
            <Link href="#" as="/" className="w-40">
              <Image
                src="/logo-wordmark--light.png"
                width={160}
                height={30}
                alt="Logo"
                className="dark:hidden"
                priority
              />
              <Image
                src="/logo-wordmark--dark.png"
                width={160}
                height={30}
                alt="Logo"
                className="hidden dark:block"
                priority
              />
            </Link>
            <div className="flex space-x-5">
              <a
                href="https://twitter.com/paybilldev"
                className="text-foreground-lighter hover:text-foreground transition"
              >
                <span className="sr-only">Twitter</span>
                <IconTwitterX size={22} />
              </a>

              <a
                href="https://github.com/paybilldev"
                className="text-foreground-lighter hover:text-foreground transition"
              >
                <span className="sr-only">GitHub</span>
                <IconGitHubSolid size={22} />
              </a>

              <a
                href="https://discord.gg/v9rYchap"
                className="text-foreground-lighter hover:text-foreground transition"
              >
                <span className="sr-only">Discord</span>
                <IconDiscord size={22} />
              </a>

              <a
                href="https://youtube.com/c/paybilldev"
                className="text-foreground-lighter hover:text-foreground transition"
              >
                <span className="sr-only">Youtube</span>
                <IconYoutubeSolid size={22} />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 xl:col-span-5 xl:mt-0">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
              {footerData.map((segment) => {
                return (
                  <div key={`footer_${segment.title}`}>
                    <h6 className="text-foreground overwrite text-base">{segment.title}</h6>
                    <ul className="mt-4 space-y-2">
                      {segment.links.map((linkItem: any, idx: number) => {
                        const { component: Component, ...link } = linkItem
                        const children = (
                          <div
                            className={`text-sm transition-colors ${
                              link.url || Component
                                ? 'text-foreground-lighter hover:text-foreground'
                                : 'text-muted hover:text-foreground-lighter'
                            } `}
                          >
                            {link.text}
                            {!link.url && !Component && (
                              <div className="ml-2 inline text-xs xl:ml-0 xl:block 2xl:ml-2 2xl:inline">
                                <Badge size="small">Coming soon</Badge>
                              </div>
                            )}
                          </div>
                        )

                        return (
                          <li key={`${segment.title}_link_${idx}`}>
                            {link.url ? (
                              link.url.startsWith('https') ? (
                                <a href={link.url}>{children}</a>
                              ) : (
                                <Link href={link.url}>{children}</Link>
                              )
                            ) : (
                              Component && <Component>{children}</Component>
                            )}
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="border-default mt-32 flex justify-between border-t pt-8">
          <div className="xl:col-span-2">
            <small className="small">&copy; Welgon Limited</small>
          </div>
          <ThemeToggle />
        </div>
      </SectionContainer>
    </footer>
  )
}

export default Footer
