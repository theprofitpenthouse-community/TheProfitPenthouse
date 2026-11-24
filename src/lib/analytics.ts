import { siteConfig } from '../config'

export type TrackEvent =
  | 'roadmap_cta_click'
  | 'waitlist_cta_click'
  | 'roadmap_signup'
  | 'community_cta_click'
  | 'inner_circle_cta_click'
  | 'pricing_section_view'
  | 'faq_interaction'
  | 'affiliate_click'

type Props = Record<string, string | number | boolean>

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    plausible?: (event: string, opts?: { props?: Props }) => void
    dataLayer?: unknown[]
  }
}

/**
 * Analytics-ready hook. Nothing is sent anywhere until you choose a provider in
 * src/config.ts AND add that provider's script to index.html.
 */
export function track(event: TrackEvent, props: Props = {}) {
  const { provider } = siteConfig.analytics
  try {
    if (provider === 'gtag' && window.gtag) window.gtag('event', event, props)
    else if (provider === 'plausible' && window.plausible) window.plausible(event, { props })
    else if (provider === 'dataLayer' && window.dataLayer) window.dataLayer.push({ event, ...props })
    else if (import.meta.env.DEV) console.debug('[analytics:not-configured]', event, props)
  } catch {
    /* never let analytics break the page */
  }
}
