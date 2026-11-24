import { useEffect, useRef } from 'react'
import { Check } from 'lucide-react'
import { CheckoutButton, Heading, Reveal } from './ui'
import { track } from '../lib/analytics'

const includes = [
  'Self-paced forex and futures trading education',
  'Beginner and Rebuild learning paths',
  'Market structure and price action lessons',
  'Supply and demand education',
  'Risk management and trading psychology',
  'Workbooks, charting exercises, and educational resources',
  'Access to the women-only community',
]

export function Pricing() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          track('pricing_section_view')
          io.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section ref={ref} id="membership" aria-labelledby="pricing-title" className="relative px-5 py-20 sm:px-8 md:py-28">
      <div className="relative mx-auto max-w-6xl">
        <Heading id="pricing-title" title="Your Trading Foundation Starts Here." sub="Learn to read the charts, understand market structure, manage risk, and develop the discipline to approach forex and futures with a plan." />
        <Reveal className="mx-auto max-w-xl">
          <article aria-labelledby="tier-community" className="glass flex flex-col rounded-[2rem] p-7 shadow-glow sm:p-10">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-blush">Membership</p>
            <h3 id="tier-community" className="display-md mt-3 text-white">The Profit Penthouse Community</h3>
            <p className="mt-6 flex items-baseline gap-2">
              <span className="font-display text-[4rem] leading-none tracking-[0.02em] text-white">$19</span>
              <span className="text-base font-semibold text-white/60">/ month</span>
            </p>
            <p className="mt-1 text-sm text-white/50">Recurring monthly subscription · Billed through Skool</p>
            <p className="mt-5 leading-relaxed text-white/75">The entry point for every member: self-paced education, workbook exercises, journaling resources, and a learning path built for where you are.</p>
            <ul className="mt-7 space-y-3">
              {includes.map((f) => (
                <li key={f} className="flex gap-3 text-white/85">
                  <Check size={18} className="mt-0.5 shrink-0 text-blush" aria-hidden />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="pt-9">
              <CheckoutButton plan="community" label="Join The Community — $19/Month" location="pricing_card" className="w-full" />
            </div>
          </article>
        </Reveal>
        <p className="mx-auto mt-8 max-w-xl text-center text-sm text-white/50">
          Billed monthly through Skool. Self-paced education only — no trade signals or personalized investment advice.
        </p>
      </div>
    </section>
  )
}
