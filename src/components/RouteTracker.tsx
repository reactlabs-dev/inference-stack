'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { pageview } from '@vercel/analytics'

export const RouteTracker = () => {
  const pathname = usePathname()

  useEffect(() => {
    if (pathname) {
      pageview({ path: pathname })
    }
  }, [pathname])

  return null
}
