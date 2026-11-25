import { BellRing, ChartCandlestick, ExternalLink, MonitorPlay, ShoppingBag, Wallet } from 'lucide-react'
import { CheckoutButton, Reveal, Section } from './ui'
import { siteConfig } from '../config'
import { track } from '../lib/analytics'

const icons = { chart: ChartCandlestick, wallet: Wallet, demo: MonitorPlay, shop: ShoppingBag, signal: BellRing }

export const AFFILIATE_DISCLOSURE =
  'Some links on this page are affiliate links. If you sign up through them, The Profit Penthouse may earn a commission at no extra cost to you. As an Amazon Associate, Shantae earns from qualifying purchases. We only recommend tools Shantae uses or trusts. Opening a brokerage or crypto account involves risk; review each provider’s terms before depositing funds. Signal services and automated trading are third-party products, are not part of The Profit Penthouse, and carry additional risk.'

export function Toolkit() {
  const tools = siteConfig.affiliates.filter((t) => t.group !== 'signals')
  const signals = siteConfig.affiliates.filter((t) => t.group === 'signals')
  return (
    <Section id="top" labelledBy="toolkit-title" className="!pt-10 md:!pt-16">
      <Reveal className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-blush">Resources</p>
        <h1 id="toolkit-title" className="display-xl mt-4 text-white">Your Trading Toolkit.</h1>
        <p className="mt-5 text-lg leading-relaxed text-white/70 [text-wrap:pretty]">
          The tools Shantae recommends for charting, practicing, and setting up your space, so you’re not guessing there either.
        </p>
      </Reveal>
      <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {tools.map((t, i) => {
          const Icon = icons[t.icon]
          return (
            <li key={t.id}>
              <Reveal delay={i * 0.08} className="glass flex h-full flex-col rounded-3xl p-7">
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-rose/15 text-blush">
                  <Icon size={22} aria-hidden />
                </span>
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-blush">{t.label}</p>
                <h3 className="display-sm mt-2 text-white">{t.name}</h3>
                <p className="mb-6 mt-3 leading-relaxed text-white/70">{t.body}</p>
                <a
                  href={t.url}
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                  onClick={() => track('affiliate_click', { tool: t.id })}
                  className="mt-auto inline-flex min-h-[48px] items-center justify-center gap-2 whitespace-nowrap rounded-full border border-blush/50 px-4 py-3 text-xs font-extrabold uppercase tracking-[0.06em] text-white transition hover:border-blush hover:bg-rose/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blush"
                >
                  {t.cta} <ExternalLink size={16} aria-hidden />
                  <span className="sr-only">(opens in a new tab, affiliate link)</span>
                </a>
              </Reveal>
            </li>
          )
        })}
      </ul>
      {signals.map((t) => (
        <Reveal key={t.id} className="mt-10">
          <article aria-labelledby={`${t.id}-title`} className="flex flex-col gap-6 rounded-3xl border border-dashed border-white/20 bg-white/[0.02] p-7 md:flex-row md:items-center md:gap-10 md:p-9">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/[0.06] text-white/80">
              <BellRing size={22} aria-hidden />
            </span>
            <div className="flex-1">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-blush">{t.label}</p>
              <h2 id={`${t.id}-title`} className="display-sm mt-2 text-white">{t.name}</h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-white/70">{t.body}</p>
              <p className="mt-3 text-sm text-white/50">Not affiliated with The Profit Penthouse curriculum. If you try it, start on a demo account and never risk money you can’t afford to lose.</p>
            </div>
            <a
              href={t.url}
              target="_blank"
              rel="sponsored noopener noreferrer"
              onClick={() => track('affiliate_click', { tool: t.id })}
              className="inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/30 px-5 py-3 text-xs font-extrabold uppercase tracking-[0.06em] text-white transition hover:border-blush hover:bg-rose/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blush"
            >
              {t.cta} <ExternalLink size={16} aria-hidden />
              <span className="sr-only">(opens in a new tab, affiliate link)</span>
            </a>
          </article>
        </Reveal>
      ))}
      <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-relaxed text-white/45">
        <span className="font-bold text-white/60">Affiliate disclosure:</span> {AFFILIATE_DISCLOSURE}
      </p>
      <Reveal className="mx-auto mt-16 max-w-3xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 text-center sm:p-10">
        <h2 className="display-md text-white">Tools are only half of it.</h2>
        <p className="mx-auto mt-3 max-w-md text-white/70">Learn how to actually read the charts with structured lessons and a community of women doing the same.</p>
        <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <CheckoutButton plan="roadmap" label="Get My Free Trading Roadmap" location="toolkit_page" />
          <CheckoutButton plan="waitlist" label="Join The Profit Penthouse Community" variant="secondary" location="toolkit_page" />
        </div>
        <p className="mt-4 text-sm">
          <a href="./" className="font-semibold text-white/60 underline-offset-4 hover:text-blush hover:underline">See what’s inside The Profit Penthouse</a>
        </p>
      </Reveal>
    </Section>
  )
}
