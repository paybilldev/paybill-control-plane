import React, { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import debounce from 'lodash/debounce'
import { cn, Panel, Button, Checkbox, Input } from 'ui'
import DefaultLayout from '~/components/layouts/Default'
import { SectionContainer } from 'ui'
import { apps as appData } from '~/data/apps'

function AppsPage() {
  const router = useRouter()
  const { query } = router
  const [searchTerm, setSearchTerm] = useState<string>((query.q as string) || '')
  const [selectedApps, setSelectedApps] = useState<string[]>(
    (query.apps as string)?.split(',') || []
  )

  const HAS_ACTIVE_FILTERS = selectedApps.length || searchTerm.length

  const apps = Array.from(new Set(appData.flatMap((app) => app.apps)))

  // Debounced function to update URL params
  const updateQueryParamsDebounced = useCallback(
    debounce(() => updateQueryParams(), 300),
    [searchTerm, selectedApps]
  )

  const updateQueryParams = () => {
    const params = new URLSearchParams()
    if (searchTerm) params.set('q', searchTerm)
    if (selectedApps.length > 0) params.set('apps', selectedApps.join(','))

    router.replace({ pathname: '/apps', query: params.toString() }, undefined, {
      shallow: true,
    })
  }

  // Apply filters based on initial URL params on mount
  useEffect(() => {
    updateQueryParamsDebounced()
    return updateQueryParamsDebounced.cancel // Cleanup on unmount
  }, [searchTerm, selectedApps, updateQueryParamsDebounced])

  // Sync state with query parameters when they change
  useEffect(() => {
    if (query.q !== searchTerm) setSearchTerm((query.q as string) || '')
    if (query.apps !== selectedApps.join(',')) {
      setSelectedApps((query.apps as string)?.split(',') || [])
    }
  }, [query.q, query.apps])

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  // Handle app checkbox change
  const handleAppChange = (app: string) => {
    setSelectedApps((prev) => (prev.includes(app) ? prev.filter((p) => p !== app) : [...prev, app]))
  }

  // Filter apps based on search term and selected apps
  const filteredApps = appData.filter((app) => {
    const matchesSearch =
      app.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.subtitle.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesApp =
      selectedApps.length === 0 || app.apps.some((app) => selectedApps.includes(app))

    return matchesSearch && matchesApp
  })

  const meta = {
    title: 'Paybill Apps',
    description:
      'From authentication to storage, everything you need to build and ship your next project.',
  }

  return (
    <>
      <NextSeo
        title={meta.title}
        description={meta.description}
        openGraph={{
          title: meta.title,
          description: meta.description,
          url: `/pricing`,
          images: [
            {
              url: `/logo-preview.png`,
            },
          ],
        }}
      />
      <DefaultLayout>
        <SectionContainer className="!py-0 sm:!px-0">
          <div className="border border-muted rounded-xl bg-alternative my-4 px-6 py-8 md:py-10 lg:px-16 lg:py-20 xl:px-20 bg-center bg-cover bg-[url('/images/features/features-cover-light.svg')] dark:bg-[url('/images/features/features-cover-dark.svg')]">
            <motion.div
              className="mx-auto sm:max-w-xl text-center flex flex-col items-center gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, easing: 'easeOut' },
              }}
            >
              <h1 className="h1 text-foreground !m-0">Paybill Apps</h1>
              <p className="text-foreground-light text-base">
                Everything you need <br className="md:hidden" /> to build and ship your next
                project.
              </p>
            </motion.div>
          </div>
        </SectionContainer>
        <SectionContainer className="relative grid md:grid-cols-4 md:gap-4 !pt-0">
          <div className="relative w-full h-full">
            <div className="mb-4 flex flex-col gap-4 sticky top-20">
              <Input
                icon={<Search size="14" />}
                size="small"
                autoComplete="off"
                type="search"
                placeholder="Search apps"
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full [&_input]:text-base [&_input]:md:text-sm [&_input]:!leading-4"
              />
              <div className="hidden md:flex flex-col gap-4">
                <h2 className="text-sm text-foreground-lighter">Filter by tags:</h2>
                <div className="flex flex-col gap-2.5">
                  {apps
                    .sort((a, b) => (a.toLowerCase() > b.toLowerCase() ? 1 : -1))
                    .map((app) => (
                      <div
                        key={app}
                        className="flex items-center gap-2 text-foreground-light hover:text-foreground !cursor-pointer hover:!cursor-pointer transition-colors"
                      >
                        <Checkbox
                          id={app}
                          checked={selectedApps.includes(app)}
                          onChange={() => handleAppChange(app)}
                          className="[&_input]:m-0"
                        />
                        <label
                          htmlFor={app}
                          className="text-sm !leading-none capitalize flex-1 text-left"
                        >
                          {app}
                        </label>
                      </div>
                    ))}
                </div>
                <div className="text-foreground-muted text-xs">
                  Apps selected: {filteredApps.length}
                </div>
              </div>
              <Button
                tabIndex={HAS_ACTIVE_FILTERS ? 0 : -1}
                block
                type="dashed"
                onClick={() => {
                  setSelectedApps([])
                  setSearchTerm('')
                }}
                className={cn(
                  'opacity-0 transition-opacity hidden md:block',
                  HAS_ACTIVE_FILTERS && '!block opacity-100'
                )}
              >
                Clear all filters
              </Button>
            </div>
          </div>
          <div className="md:col-span-3 flex flex-col gap-4 md:gap-8">
            {!filteredApps?.length ? (
              <p className="text-foreground-lighter text-sm">No apps found with these filters</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
                {filteredApps
                  .sort((a, b) => (a.title > b.title ? 1 : -1))
                  .map((app) => (
                    <Link
                      key={`feat-${app.title}`}
                      href={`${app.url}`}
                      className="flex flex-col justify-start items-stretch group cursor-pointer transition rounded-xl focus-visible:ring-2 focus-visible:ring-foreground-lighter outline-none outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 focus-visible:outline-brand-600"
                    >
                      <Panel
                        hasActiveOnHover
                        outerClassName="h-full"
                        innerClassName="flex md:flex-col gap-3 sm:gap-2 h-full items-start p-2"
                      >
                        <div className="relative rounded-lg min-h-[80px] max-h-[80px] md:max-h-[140px] h-full md:h-auto aspect-square md:w-full md:!aspect-video bg-alternative flex items-center justify-center shadow-inner border border-muted">
                          <app.icon className="w-5 h-5 text-foreground-light group-hover:text-foreground transition-colors" />
                        </div>
                        <div className="md:p-2 md:pt-1 flex flex-col h-full md:h-auto flex-grow gap-0.5 md:gap-1.5 justify-center md:justify-start">
                          <h3 className="text-sm md:text-base text-foreground !leading-5">
                            {app.title}
                          </h3>
                          <p className="text-foreground-light text-sm line-clamp-2">
                            {app.subtitle}
                          </p>
                        </div>
                      </Panel>
                    </Link>
                  ))}
              </div>
            )}
          </div>
        </SectionContainer>
      </DefaultLayout>
    </>
  )
}

export default AppsPage
