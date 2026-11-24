import type { ReactNode } from 'react'
import { MotionConfig } from 'framer-motion'
import { SetupProvider } from './ui'

/** Wrapper shared by every page: reduced-motion handling, setup dialog, skip link, foil gradient. */
export function Shell({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <SetupProvider>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-blush focus:px-4 focus:py-2 focus:font-bold focus:text-ink">
          Skip to content
        </a>
        {/* Shared gold-foil gradient for icon strokes */}
        <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden focusable="false">
          <defs>
            <linearGradient id="foil-grad" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="24" y2="24">
              <stop offset="0" stopColor="#8a6f3e" />
              <stop offset=".3" stopColor="#f3e6c4" />
              <stop offset=".5" stopColor="#c6a66b" />
              <stop offset=".72" stopColor="#f8efd9" />
              <stop offset="1" stopColor="#85693a" />
            </linearGradient>
          </defs>
        </svg>
        {children}
      </SetupProvider>
    </MotionConfig>
  )
}
