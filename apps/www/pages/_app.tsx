import '@code-hike/mdx/styles'
import '../styles/code-hike.scss'
import '../styles/index.css'

import * as Sentry from '@sentry/nextjs'
import { Hydrate, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import duration from 'dayjs/plugin/duration'
import relativeTime from 'dayjs/plugin/relativeTime'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import { NuqsAdapter } from 'nuqs/adapters/next/pages'
import { ErrorInfo } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { ThemeProvider } from 'next-themes'

import {
  TelemetryTagManager,
  useThemeSandbox,
  PageTelemetry,
  useConsentToast,
  AuthProvider,
  FeatureFlagProvider,
  themes,
} from 'common'
import { GlobalErrorBoundaryState } from 'components/layouts/ErrorBoundary/GlobalErrorBoundaryState'
import { useRootQueryClient } from 'data/query-client'
import { Telemetry } from 'lib/telemetry'
import type { AppPropsWithLayout } from 'types'
import { SonnerToaster, TooltipProvider } from 'ui'
import { AppProps } from 'next/app'

dayjs.extend(customParseFormat)
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(relativeTime)
dayjs.extend(duration)

// [Joshen TODO] Once we settle on the new nav layout - we'll need a lot of clean up in terms of our layout components
// a lot of them are unnecessary and introduce way too many cluttered CSS especially with the height styles that make
// debugging way too difficult. Ideal scenario is we just have one AppLayout to control the height and scroll areas of
// the dashboard, all other layout components should not be doing that

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const queryClient = useRootQueryClient()
  const { hasAcceptedConsent } = useConsentToast()

  const getLayout = Component.getLayout ?? ((page) => page)

  const errorBoundaryHandler = (error: Error, info: ErrorInfo) => {
    Sentry.withScope(function (scope) {
      scope.setTag('globalErrorBoundary', true)
      const eventId = Sentry.captureException(error)
      // Attach the Sentry event ID to the error object so it can be accessed by the error boundary
      if (eventId && error && typeof error === 'object') {
        ;(error as any).sentryId = eventId
      }
    })

    console.error(error.stack)
  }

  useThemeSandbox()

  const isTestEnv = process.env.NODE_ENV === 'test'

  return (
    <AuthProvider>
      <FeatureFlagProvider
        API_URL={process.env.NEXT_PUBLIC_API_URL}
        enabled={{ cc: true, ph: false }}
      >
        <ErrorBoundary FallbackComponent={GlobalErrorBoundaryState} onError={errorBoundaryHandler}>
          <QueryClientProvider client={queryClient}>
            <NuqsAdapter>
              <Hydrate state={pageProps.dehydratedState}>
                <TooltipProvider delayDuration={0}>
                  <ThemeProvider
                    defaultTheme="system"
                    themes={themes.map((theme) => theme.value)}
                    enableSystem
                    disableTransitionOnChange
                  >
                    <TelemetryTagManager />
                    {getLayout(<Component {...pageProps} />)}
                    <SonnerToaster position="top-right" />
                    <PageTelemetry
                      API_URL={process.env.NEXT_PUBLIC_API_URL!}
                      hasAcceptedConsent={hasAcceptedConsent}
                      enabled={true}
                    />
                  </ThemeProvider>
                </TooltipProvider>
                <Telemetry />
                {!isTestEnv && <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />}
              </Hydrate>
            </NuqsAdapter>
          </QueryClientProvider>
          <TelemetryTagManager />
        </ErrorBoundary>
      </FeatureFlagProvider>
    </AuthProvider>
  )
}
