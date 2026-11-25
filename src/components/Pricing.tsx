import { useEffect, useRef } from 'react'
import { Check } from 'lucide-react'
import { CheckoutButton, Heading, Reveal } from './ui'
import { track } from '../lib/analytics'

export const includes = [
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
        <Heading id="pricing-title" title={<span className="text-blush">Your Trading Foundation Starts Here.</span>} sub="Learn to read the charts, understand market structure, manage risk, and develop the discipline to approach forex and futures with a plan." />
        <Reveal className="mx-auto max-w-xl">
          <article aria-labelledby="tier-community" className="relative flex flex-col rounded-[2rem] foil-ring foil-ring-2 bg-gradient-to-b from-[#17130d] to-ink p-7 shadow-gold sm:p-10">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] foil-text">Membership</p>
            <h3 id="tier-community" className="display-md mt-3 text-white">The Profit Penthouse Community</h3>
            <p className="mt-6 flex items-baseline gap-2">
              <span className="font-display text-[3.25rem] leading-none tracking-[0.02em] foil-text sm:text-[4rem]">$19</span>
              <span className="text-base font-semibold text-white/60">/ month</span>
            </p>
            <p className="mt-2 text-sm text-white/50">Founding member doors are open. Cancel anytime in Skool.</p>
            <p className="mt-5 leading-relaxed text-white/75">The entry point for every member: self-paced education, workbook exercises, journaling resources, and a learning path built for where you are.</p>
            <ul className="mt-7 space-y-3">
              {includes.map((f) => (
                <li key={f} className="flex gap-3 text-white/85">
                  <Check size={18} className="foil-icon mt-0.5 shrink-0" aria-hidden />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="pt-9">
              <CheckoutButton plan="waitlist" label="Join The Profit Penthouse Community" location="pricing_card" className="w-full" />
            </div>
          </article>
        </Reveal>
        <p className="mx-auto mt-8 max-w-xl text-center text-sm text-white/50">
          Self-paced education only — no trade signals or personalized investment advice.
        </p>
      </div>
    </section>
  )
}
