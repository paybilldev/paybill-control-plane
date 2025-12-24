'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'
import { sendTelemetryEvent } from '../telemetry'
import { TelemetryEvent } from '../telemetry-constants'
import { API_URL } from '../constants'

export function useSendTelemetryEvent() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  return useCallback(
    (event: TelemetryEvent) => {
      const url = new URL(API_URL ?? 'http://localhost:8000')
      url.pathname = pathname ?? ''
      url.search = searchParams?.toString() ?? ''

      return sendTelemetryEvent(API_URL, event, url.toString())
    },
    [pathname, searchParams]
  )
}
