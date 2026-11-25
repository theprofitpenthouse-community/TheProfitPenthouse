import { useState, type ReactNode } from 'react'
import { ArrowLeft, ArrowRight, BookOpenCheck, Brain, ChartCandlestick, Check, ChevronDown, FlaskConical, Layers, Lock, MessageCircle, MonitorPlay, Sparkles } from 'lucide-react'
import { Shell } from './components/Shell'
import { Footer } from './components/Closing'
import { Reveal, Section } from './components/ui'
import { destination, siteConfig } from './config'
import { track } from './lib/analytics'

/**
 * MEMBERS-ONLY Inner Circle upgrade page (inner-circle.html).
 * Linked only from the mobile (hamburger) menu, not from the landing page itself; marked noindex.
 * There is no checkout on this page: members upgrade from inside the Skool community. See inner-circle-upgrade-plan.md in the project.
 */
const plus = [
  { icon: MonitorPlay, text: 'One live educational webinar each week' },
  { icon: ChartCandlestick, text: 'Guided forex and futures chart analysis' },
  { icon: FlaskConical, text: 'Live backtesting workshops' },
  { icon: Layers, text: 'Market structure and price action breakdowns' },
  { icon: BookOpenCheck, text: 'Strategy development and educational exercises' },
  { icon: MessageCircle, text: 'Interactive educational Q&A' },
  { icon: Brain, text: 'Deeper discussions about risk management, trading psychology, and discipline' },
]

const forWho = [
  'You’re ready to take your trading knowledge deeper than the core Community lessons',
  'You learn faster by watching, asking, and getting feedback in real time',
  'You’re journaling consistently and want deeper instruction on your process',
]

export default function InnerCirclePage() {
  const { innerCircle, communityUrl } = siteConfig
  const { foundingPrice, regularPrice, foundingSeats, billingConfirmed } = innerCircle
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs: [string, ReactNode][] = [
    [
      'Who can join the Inner Circle?',
      'The Inner Circle is available only to active members of The Profit Penthouse Community. Upgrade from inside Skool while you’re signed in to your Community account.',
    ],
    [
      'Is the Inner Circle open to men?',
      <>
        No. Like The Profit Penthouse Community, the Inner Circle is for women only. If you’re a man looking for a trading community, I recommend{' '}
        <a href="https://cctrendpro.com/ref/theprofitpenthouse" target="_blank" rel="sponsored noopener" className="font-semibold text-blush underline underline-offset-4 hover:text-gold">
          CC Trend Pro
        </a>.
      </>,
    ],
    [
      'What happens to my Community membership when I upgrade?',
      billingConfirmed
        ? 'Your Inner Circle subscription replaces your Community subscription. You will not be charged for both memberships. You keep everything in the Community, plus everything the Inner Circle adds.'
        : 'You keep everything in the Community. The Inner Circle includes all of it, plus weekly live education. Your billing details are shown at checkout inside Skool before you confirm the upgrade.',
    ],
    [
      'What is the weekly webinar like?',
      'One live educational webinar each week. Sessions include guided forex and futures chart analysis, backtesting workshops, market structure and price action breakdowns, and interactive Q&A. The day and time are posted inside the community.',
    ],
    [
      'How does the founding-member rate work?',
      `The first ${foundingSeats} Inner Circle members get the founding rate of $${foundingPrice}/month, locked in for as long as their subscription stays continuously active. If you cancel and rejoin later, you’ll pay the regular price at that time ($${regularPrice}/month).`,
    ],
    [
      'Will I receive trade signals or see live trades?',
      'No. The Inner Circle is interactive education. It does not include live trading, trade signals, copy trading, or real-time trade execution.',
    ],
  ]

  return (
    <Shell>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/85 backdrop-blur-xl">
        <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
          {communityUrl ? (
            <a href={communityUrl} className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-white/75 transition hover:text-blush">
              <ArrowLeft size={18} aria-hidden /> Back to the community
            </a>
          ) : (
            <span className="script-accent foil-text foil-script whitespace-nowrap text-[1.6rem] sm:text-[1.9rem]">The Profit Penthouse</span>
          )}
          <span className="relative inline-flex items-center gap-1.5 rounded-full foil-ring px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.16em]">
            <Lock size={13} className="foil-icon" aria-hidden /> <span className="foil-text">Members only</span>
          </span>
        </nav>
      </header>

      <main id="main">
        <Section id="top" labelledBy="ic-title" className="!pt-14 md:!pt-20">
          {/* Hero */}
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-blush">Exclusive for community members</p>
            <h1 id="ic-title" className="display-xl mt-4 foil-text">Welcome to the Inner Circle.</h1>
            <p className="mx-auto mt-5 max-w-2xl text-xl font-semibold leading-snug text-white [text-wrap:balance] sm:text-2xl">
              Ready to go beyond self-paced lessons? Join us for weekly live education, guided chart analysis, backtesting, and deeper conversations about the markets.
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/70 [text-wrap:pretty]">
              The Inner Circle is an exclusive educational upgrade for Community members who are ready to take their trading knowledge deeper. It’s interactive education, not access to live trades.
            </p>
            {innerCircle.status && (
              <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/80">
                <Sparkles size={15} className="text-gold" aria-hidden /> {innerCircle.status}
              </p>
            )}
          </Reveal>

          {/* What's included + pricing */}
          <div className="mt-16 grid items-start gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <Reveal className="glass rounded-[2rem] p-8 sm:p-10">
              <h2 className="display-md text-white">What’s included</h2>
              <p className="mt-3 font-semibold text-white/85">Everything in The Profit Penthouse Community, plus:</p>
              <ul className="mt-6 space-y-4">
                {plus.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex gap-4">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose/15 text-blush">
                      <Icon size={19} aria-hidden />
                    </span>
                    <span className="pt-2 leading-snug text-white/85">{text}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-7 border-t border-white/10 pt-6 text-sm leading-relaxed text-white/60">
                <span className="font-bold text-white/80">Not included:</span> live trading, trade signals, copy trading, or real-time trade execution.
              </p>
            </Reveal>

            <Reveal delay={0.08} className="relative flex flex-col rounded-[2rem] foil-ring foil-ring-2 bg-gradient-to-b from-[#17130d] to-ink p-8 shadow-gold sm:p-10">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] foil-text">Founding member access</p>
              <h2 className="display-md mt-3 text-white">The Profit Penthouse Inner Circle</h2>
              <p className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-[4rem] leading-none tracking-[0.02em] text-white">${foundingPrice}</span>
                <span className="text-base font-semibold text-white/60">/ month</span>
              </p>
              <p className="mt-2 text-sm text-white/60">
                Regular future price: <span className="font-semibold text-white/80">${regularPrice}/month</span>
              </p>
              <p className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-gold/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-gold">
                First {foundingSeats} Inner Circle members only
              </p>
              <ul className="mt-6 space-y-3 text-white/85">
                {[
                  'Founding rate locked in while your subscription stays continuously active',
                  'Everything in The Profit Penthouse Community',
                  'Weekly live educational webinar',
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <Check size={18} className="foil-icon mt-0.5 shrink-0" aria-hidden /> {t}
                  </li>
                ))}
              </ul>
              {billingConfirmed && (
                <p className="mt-6 rounded-2xl border border-gold/30 bg-gold/[0.06] p-4 text-sm font-semibold leading-relaxed text-white/90">
                  Your Inner Circle subscription replaces your Community subscription. You will not be charged for both memberships.
                </p>
              )}
              {/* No checkout here: members upgrade from inside the Skool community */}
              <div className="mt-8 rounded-2xl border border-gold/30 bg-gold/[0.06] p-5 text-center">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] foil-text">How to upgrade</p>
                <p className="mt-2 leading-relaxed text-white/85">
                  The Inner Circle upgrade is available only inside The Profit Penthouse Community. Log in to the Community on Skool to upgrade your membership.
                </p>
                {communityUrl && (
                  <a href={communityUrl} className="mt-3 inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-gold underline-offset-4 hover:underline">
                    Go to the Community on Skool <ArrowRight size={15} aria-hidden />
                  </a>
                )}
              </div>
              <p className="mt-3 text-center text-sm text-white/55">
                Not a member yet?{' '}
                <a
                  href={destination('waitlist')}
                  onClick={() => track('waitlist_cta_click', { location: 'inner_circle_not_member' })}
                  className="font-semibold text-blush underline-offset-4 hover:underline"
                >
                  Join the Community
                </a>
              </p>
            </Reveal>
          </div>

          {/* Who it's for */}
          <Reveal className="mt-6 rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 sm:p-10">
            <div className="grid gap-8 md:grid-cols-[1fr_1fr]">
              <div>
                <h2 className="display-md text-white">Who it’s for</h2>
                <ul className="mt-6 space-y-4">
                  {forWho.map((t) => (
                    <li key={t} className="flex gap-3 leading-relaxed text-white/80">
                      <Check size={18} className="mt-1 shrink-0 text-blush" aria-hidden /> {t}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="self-end leading-relaxed text-white/60 md:border-l md:border-white/10 md:pl-8">
                Still working through the core lessons? Stay in the Community. It’s a complete education on its own, and the Inner Circle will be here when you’re ready.
              </p>
            </div>
          </Reveal>

          {/* FAQ */}
          <div className="mx-auto mt-16 max-w-3xl">
            <Reveal className="mb-8 text-center">
              <h2 id="ic-faq" className="display-lg text-white">Inner Circle FAQ</h2>
            </Reveal>
            <div className="divide-y divide-white/10 rounded-3xl border border-white/10 bg-white/[0.02]">
              {faqs.map(([q, a], i) => {
                const isOpen = openFaq === i
                return (
                  <div key={q}>
                    <h3>
                      <button
                        type="button"
                        id={`ic-q-${i}`}
                        aria-expanded={isOpen}
                        aria-controls={`ic-a-${i}`}
                        onClick={() => {
                          setOpenFaq(isOpen ? null : i)
                          track('faq_interaction', { question: q, action: isOpen ? 'close' : 'open', page: 'inner_circle' })
                        }}
                        className="flex min-h-[64px] w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-white transition hover:text-blush focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blush sm:px-7 sm:text-lg"
                      >
                        <span>{q}</span>
                        <ChevronDown size={20} aria-hidden className={`shrink-0 text-blush transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                    </h3>
                    <div id={`ic-a-${i}`} role="region" aria-labelledby={`ic-q-${i}`} hidden={!isOpen} className="px-5 pb-6 leading-relaxed text-white/70 sm:px-7">
                      {a}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <p className="mx-auto mt-12 max-w-3xl text-center text-xs leading-relaxed text-white/45">
            <span className="font-bold text-white/60">Education only. No live trading, trade signals, copy trading, real-time trade execution, or guaranteed results.</span> Sessions do not provide personalized investment advice. Futures and forex trading involve substantial risk of loss and may not be suitable for everyone.
          </p>
        </Section>
      </main>
      <Footer home="./" />
    </Shell>
  )
}
