import { useState, useEffect, useMemo } from 'react'
import { NextSeo } from 'next-seo'
import { cn } from 'ui'
import DefaultLayout from '~/components/layouts/Default'
import EventListItem from '~/components/layouts/Events/EventListItem'
import EventsFilters from '~/components/layouts/Events/EventsFilters'
import { SectionContainer } from 'ui'

import type { PostTypes } from '~/types'
import { isBrowser } from '~/lib/helpers'
import EventGridItem from '~/components/layouts/Events/EventGridItem'
import data from '~/data/json/events.json'

/* ---------------------------------------
   Luma Types (required)
---------------------------------------- */

export interface LumaGeoAddressJson {
  city: string
  type: string
  region: string
  address: string
  country: string
  latitude: string
  place_id: string
  longitude: string
  city_state: string
  description: string
  full_address: string
}

export interface LumaPayloadEvent {
  api_id: string
  calendar_api_id: string
  name: string
  description: string
  start_at: string
  end_at: string
  timezone: string
  url: string
  visibility: string
  geo_address_json: LumaGeoAddressJson
}

export interface LumaEvent {
  id: string
  calendar_api_id: string
  name: string
  description: string
  start_at: string
  end_at: string
  timezone: string
  city: string
  country: string
  url: string
  visibility: string
}

export interface LumaResponse {
  entries: { event: LumaPayloadEvent }[]
  has_more: boolean
  next_cursor?: string | null
}

/* ---------------------------------------
   Component Props
---------------------------------------- */

interface Props {
  events: PostTypes[]
  onDemandEvents: PostTypes[]
  categories: { [key: string]: number }
}

export type EventView = 'list' | 'grid'

/* ---------------------------------------
   Component
---------------------------------------- */

export default function Events({ onDemandEvents, categories: staticCategories }: Props) {
  const [lumaEvents, setLumaEvents] = useState<PostTypes[]>([])
  const [filteredEvents, setFilteredEvents] = useState<PostTypes[]>([])

  const localView = isBrowser
    ? (localStorage?.getItem('paybill-event-view') as EventView)
    : undefined

  const [view, setView] = useState<EventView>(localView ?? 'list')
  const isList = view === 'list'

  /* ---------------------------------------
     Load and parse data.json using *your real types*
  ---------------------------------------- */
  useEffect(() => {
    const fetchFromJson = async () => {
      try {
        const response = data as LumaResponse

        // Convert LumaPayloadEvent → LumaEvent shape
        const lumaConverted: LumaEvent[] = response.entries.map(({ event }) => ({
          id: event.api_id,
          calendar_api_id: event.calendar_api_id,
          name: event.name,
          description: event.description,
          start_at: event.start_at,
          end_at: event.end_at,
          timezone: event.timezone,
          city: event.geo_address_json?.city,
          country: event.geo_address_json?.country,
          url: event.url,
          visibility: event.visibility,
        }))

        // Convert LumaEvent → PostTypes
        const transformedEvents: PostTypes[] = lumaConverted.map((event) => {
          const categories: string[] = []

          if (event.name.toLowerCase().includes('meetup')) {
            categories.push('meetup')
          }

          return {
            slug: '',
            type: 'event',
            title: event.name,
            date: event.start_at,
            description: event.description ?? '',
            thumb: '',
            path: '',
            url: event.url ?? '',
            tags: categories,
            categories,
            timezone: event.timezone,
            disable_page_build: true,
            link: {
              href: event.url ?? '#',
              target: '_blank',
            },
          } as PostTypes
        })

        setLumaEvents(transformedEvents)
      } catch (error) {
        console.error('Failed loading local data.json:', error)
      }
    }

    fetchFromJson()
  }, [data])

  /* ---------------------------------------
     Combine + filter upcoming events
  ---------------------------------------- */
  const allEvents = useMemo(() => {
    return lumaEvents.filter((event) =>
      event.end_date ? new Date(event.end_date) >= new Date() : new Date(event.date!) >= new Date()
    )
  }, [lumaEvents])

  useEffect(() => {
    setFilteredEvents(allEvents)
  }, [allEvents])

  /* ---------------------------------------
     Merge categories
  ---------------------------------------- */
  const categories = useMemo(() => {
    const updated = { ...staticCategories }

    allEvents.forEach((event) => {
      updated.all = (updated.all || 0) + 1
      event.categories?.forEach((cat: string | number) => {
        updated[cat] = (updated[cat] || 0) + 1
      })
    })

    return updated
  }, [staticCategories, allEvents])

  const meta_title = 'Paybill Events: webinars, talks, hackathons, and meetups'
  const meta_description = 'Join Paybill and the open-source community at the upcoming events.'

  /* ---------------------------------------
     Render
  ---------------------------------------- */

  return (
    <>
      <NextSeo
        title={meta_title}
        description={meta_description}
        openGraph={{
          title: meta_title,
          description: meta_description,
          url: `/events`,
          images: [{ url: `/logo-preview.png` }],
        }}
      />

      <DefaultLayout className="min-h-[80dvh]">
        <SectionContainer className="!py-8 lg:!py-16">
          <h1 className="h1">
            <span className="sr-only">Paybill</span> Events
          </h1>
          <p className="text-foreground-light">Join us at the following upcoming events</p>
        </SectionContainer>

        <SectionContainer className="!py-0">
          <EventsFilters
            allEvents={allEvents}
            onDemandEvents={onDemandEvents}
            events={filteredEvents}
            setEvents={setFilteredEvents}
            view={view}
            setView={setView}
            categories={categories}
          />

          <ol
            className={cn(
              'grid -mx-2 sm:-mx-4 py-6 lg:py-6 lg:pb-20',
              !filteredEvents.length && 'mx-0 sm:mx-0',
              filteredEvents.length === 0
                ? 'grid-cols-1'
                : isList
                  ? 'grid-cols-1'
                  : 'grid-cols-12 lg:gap-4'
            )}
          >
            {filteredEvents.length ? (
              filteredEvents
                .sort((a, b) => new Date(a.date!).getTime() - new Date(b.date!).getTime())
                .map((event, idx) =>
                  isList ? (
                    <div
                      className="col-span-12 px-2 sm:px-4 [&_a]:last:border-none"
                      key={`${event.title}-${idx}`}
                    >
                      <EventListItem event={event} />
                    </div>
                  ) : (
                    <div
                      className="col-span-12 mb-4 md:col-span-12 lg:col-span-6 xl:col-span-4 h-full"
                      key={`${event.title}-${idx}`}
                    >
                      <EventGridItem event={event} />
                    </div>
                  )
                )
            ) : (
              <div className="flex flex-col items-center justify-center py-12">
                <p className="text-foreground-muted">No results found.</p>
              </div>
            )}
          </ol>
        </SectionContainer>
      </DefaultLayout>
    </>
  )
}
