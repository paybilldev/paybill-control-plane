'use client'

import React from 'react'
import Link from 'next/link'
import { ChevronRight, Sparkles } from 'lucide-react'

import { useBreakpoint } from 'common'
import { NavigationMenuLink } from 'ui'
import MenuItem from './MenuItem'

import { MainFeatures, OtherFeatures } from '~/data/features'

export const FeaturesDropdown = () => {
  const isTablet = useBreakpoint(1279)

  return (
    <div className="flex flex-col xl:flex-row">
      <div className="flex flex-col">
        <div className="flex flex-row py-6 px-6 gap-2">
          <ul className="flex flex-col gap-4 w-[280px] xl:w-[250px]">
            {Object.values(MainFeatures).map((feature) => (
              <NavigationMenuLink key={feature.name} asChild>
                <MenuItem
                  title={feature.name}
                  href={feature.url}
                  description={feature.description_short}
                  icon={feature.icon}
                  className="h-fit p-0"
                  hasChevron
                />
              </NavigationMenuLink>
            ))}
          </ul>
          <div className="flex flex-col gap-4 w-[250px]">
            <div className="group flex items-center gap-1 text-foreground-lighter text-xs uppercase tracking-widest font-mono">
              Others
            </div>
            <ul className="flex flex-col gap-4">
              {Object.values(OtherFeatures).map((feature) => (
                <NavigationMenuLink key={feature.name} asChild>
                  <Link
                    href={feature.url}
                    className="
                    h-fit group/menu-item
                    flex items-start gap-2
                    text-xs leading-none
                    text-foreground-light hover:text-foreground
                    no-underline outline-none select-none
                    focus-visible:ring-2 focus-visible:ring-foreground-lighter focus-visible:text-foreground
                    "
                  >
                    <div className="w-8 h-8 min-w-8 shrink-0 bg-background border flex items-center justify-center rounded-md">
                      <svg
                        className="h-4 w-4 group-hover/menu-item:text-foreground group-focus-visible/menu-item:text-foreground"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d={feature.icon}
                          stroke="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="flex items-center gap-1">
                        <p className="leading-snug text-foreground">{feature.name}</p>
                        <ChevronRight
                          strokeWidth={2}
                          className="w-3 h-3 text-foreground transition-all will-change-transform -translate-x-1 opacity-0 group-hover/menu-item:translate-x-0 group-hover/menu-item:opacity-100"
                        />
                      </div>
                      {feature.description_short && (
                        <p className="line-clamp-2 leading-tight text-foreground-lighter group-hover/menu-item:text-foreground-light group-focus-visible/menu-item:text-foreground-light">
                          {feature.description_short}
                        </p>
                      )}
                    </div>
                  </Link>
                </NavigationMenuLink>
              ))}
            </ul>
            <div className="pt-4 border-t">
              <Link
                href="/features"
                className="
                h-fit group/menu-item
                flex items-start gap-2
                text-xs leading-none
                text-foreground-light hover:text-foreground
                no-underline outline-none select-none
                focus-visible:ring-2 focus-visible:ring-foreground-lighter focus-visible:text-foreground
              "
              >
                <div className="w-8 h-8 min-w-8 shrink-0 bg-background border flex items-center justify-center rounded-md">
                  <Sparkles size={16} strokeWidth={1.3} />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-1">
                    <p className="leading-snug text-foreground">Features</p>
                    <ChevronRight
                      strokeWidth={2}
                      className="w-3 h-3 text-foreground transition-all will-change-transform -translate-x-1 opacity-0 group-hover/menu-item:translate-x-0 group-hover/menu-item:opacity-100"
                    />
                  </div>
                  <span className="line-clamp-2 leading-tight text-foreground-lighter group-hover/menu-item:text-foreground-light group-focus-visible/menu-item:text-foreground-light">
                    Explore everything you can do with Paybill.
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
