import { useEffect, useRef, useState } from 'react'
import { Loader2 } from 'lucide-react'
import { isRoadmapConnected, siteConfig } from '../config'

const SCRIPT_SRC = 'https://tinder.thrivecart.com/embed/v2/thrivecart.js'

/**
 * Embeds the ThriveCart $0 roadmap checkout (name + email) on the page.
 * Mirrors ThriveCart's own embed code: a target <div> plus their script,
 * which is loaded only after the target exists so ThriveCart can find it.
 */
export function ThriveCartEmbed() {
  const { account, product, embeddable } = siteConfig.thrivecart
  const targetRef = useRef<HTMLDivElement>(null)
  const [state, setState] = useState<'loading' | 'ready' | 'failed'>('loading')

  useEffect(() => {
    if (!isRoadmapConnected()) return
    if (!document.getElementById(embeddable)) {
      const s = document.createElement('script')
      s.async = true
      s.src = SCRIPT_SRC
      s.id = embeddable
      s.onerror = () => setState('failed')
      document.body.appendChild(s)
    }
    // Watch for ThriveCart to render its checkout into the target
    const el = targetRef.current
    if (!el) return
    const mo = new MutationObserver(() => {
      if (el.childElementCount > 0) setState('ready')
    })
    mo.observe(el, { childList: true, subtree: true })
    const t = window.setTimeout(() => setState((s) => (s === 'loading' ? 'failed' : s)), 15000)
    return () => {
      mo.disconnect()
      window.clearTimeout(t)
    }
  }, [embeddable])

  if (!isRoadmapConnected()) {
    return (
      <p className="rounded-2xl border border-gold/40 bg-gold/[0.07] p-4 text-sm text-white/80">
        <span className="font-bold text-gold">Setup needed:</span> add your ThriveCart embed details in <code className="text-blush">src/config.ts</code> under <code className="text-blush">thrivecart</code>.
      </p>
    )
  }

  return (
    <div>
      <div
        ref={targetRef}
        className="tc-v2-embeddable-target min-h-[120px]"
        data-thrivecart-account={account}
        data-thrivecart-tpl="v2"
        data-thrivecart-product={product}
        data-thrivecart-embeddable={embeddable}
      />
      {state === 'loading' && (
        <p className="flex items-center justify-center gap-2 py-6 text-sm text-white/60" role="status">
          <Loader2 size={16} className="animate-spin" aria-hidden /> Loading the signup form…
        </p>
      )}
      {state === 'failed' && (
        <p className="rounded-2xl border border-white/15 bg-white/[0.04] p-4 text-center text-sm text-white/70" role="status">
          The signup form didn’t load. Please refresh the page, or turn off any content blocker and try again.
        </p>
      )}
    </div>
  )
}
