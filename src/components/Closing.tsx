import { useState } from 'react'
import { ChevronDown, Globe, Mail } from 'lucide-react'
import { AnchorButton, CheckoutButton, Heading, Reveal, Section } from './ui'
import { WAITLIST_FAQS } from './waitlistCopy'
import { Logo } from './Nav'
import { siteConfig } from '../config'
import { track } from '../lib/analytics'
import { AFFILIATE_DISCLOSURE } from './Toolkit'

export function Founder() {
  return (
    <Section id="founder" labelledBy="founder-title">
      <div aria-hidden className="mx-auto mb-14 h-px w-full max-w-md bg-gradient-to-r from-transparent via-gold/70 to-transparent md:mb-16" />
      <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <div className="relative mx-auto aspect-square w-full max-w-[15rem] sm:max-w-[18rem]">
            <div className="relative h-full overflow-hidden rounded-full foil-ring foil-ring-2 bg-gradient-to-b from-[#1c1519] to-ink shadow-gold">
              {siteConfig.founderImage ? (
                <img src={siteConfig.founderImage} alt="Shantae, founder of The Profit Penthouse" loading="lazy" className="h-full w-full rounded-full object-cover object-[50%_22%]" width={900} height={1350} />
              ) : (
                <div className="flex h-full flex-col items-center justify-center p-8 text-center">
                  <span className="script-accent text-[8rem] text-blush">S</span>
                  <span className="relative mt-4 rounded-full foil-ring px-3 py-1 text-[11px] font-bold uppercase tracking-wider foil-text">Founder photo</span>
                  <span className="mt-2 text-xs text-white/40">Set <code>founderImage</code> in src/config.ts</span>
                </div>
              )}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-xs font-bold uppercase tracking-[0.22em] foil-text">Meet your founder</p>
          <h2 id="founder-title" className="display-lg mt-4 text-white">Hey Girl, I’m Shantae.</h2>
          <div className="mt-7 space-y-5 text-lg leading-relaxed text-white/75">
            <p>I’m a funded futures and forex trader, and my journey into the markets didn’t come with a shortcut.</p>
            <p>After spending a decade in network marketing, I shifted my focus toward learning how financial markets work. I spent years studying, watching tutorials, making expensive mistakes, and learning why discipline matters just as much as strategy.</p>
            <p>I know what it’s like to try to figure everything out on your own while balancing work and real life.</p>
            <p className="font-semibold text-white">That’s why I created The Profit Penthouse.</p>
            <p>I wanted to build the kind of educational space I wish I’d had when I started — one where women could learn the language of the markets, develop their skills, ask questions, and grow without feeling intimidated.</p>
            <p>I’m not here to promise you overnight success.</p>
            <p className="text-white">I’m here to help you approach trading education with more structure, intention, and discipline.</p>
          </div>
          <div className="mt-8">
            <p className="script-accent text-6xl text-blush sm:text-7xl">Shantae</p>
            <p className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-white/50">Founder, The Profit Penthouse</p>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

const faqs = [
  ...WAITLIST_FAQS,
  ['Is The Profit Penthouse beginner-friendly?', 'Yes. The Profit Penthouse Community includes a Beginner path for women who are completely new to futures and forex, and a Rebuild path for women who have traded before but need to reset their foundation.'],
  ['Do I need money to start trading?', 'No trading account is required to begin learning. Members can study charts and practice using simulation tools before deciding whether to risk real capital.'],
  ['Do you teach futures or forex?', 'Both. The curriculum covers concepts relevant to futures and forex, while explaining important differences between the two markets.'],
  ['Will I receive trade signals?', 'No. The Profit Penthouse focuses on education, market understanding, independent decision-making, and risk management. If you specifically want a signal service, there’s a third-party option on our Trading Toolkit page.'],
  ['Can I cancel my membership?', 'Memberships are billed monthly and can be canceled according to the checkout platform’s subscription terms. Full billing and cancellation details are shown at checkout and in our Refund/Cancellation Policy.'],
  ['Will this make me a profitable trader?', 'Trading involves substantial risk. Education can help members develop knowledge and skills, but no specific trading results, profits, or funded-account outcomes are guaranteed.'],
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <Section id="faq" labelledBy="faq-title">
      <Heading id="faq-title" title="Questions, Answered." />
      <div className="mx-auto max-w-3xl divide-y divide-white/10 rounded-3xl border border-white/10 bg-white/[0.02]">
        {faqs.map(([q, a], i) => {
          const isOpen = open === i
          return (
            <div key={q}>
              <h3>
                <button
                  type="button"
                  id={`faq-q-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-a-${i}`}
                  onClick={() => {
                    setOpen(isOpen ? null : i)
                    track('faq_interaction', { question: q, action: isOpen ? 'close' : 'open' })
                  }}
                  className="flex min-h-[64px] w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-white transition hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blush sm:px-7 sm:text-lg"
                >
                  <span>{q}</span>
                  <ChevronDown size={20} aria-hidden className={`shrink-0 text-gold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
              </h3>
              <div id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`} hidden={!isOpen} className="px-5 pb-6 leading-relaxed text-white/70 sm:px-7">
                {a}
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}

export function FinalCTA() {
  return (
    <section aria-labelledby="final-title" className="relative overflow-hidden bg-ink px-5 py-24 sm:px-8 md:py-32">
      <Reveal className="relative mx-auto max-w-4xl text-center">
        <h2 id="final-title" className="display-lg foil-text">
          Your Next Chapter Starts With Understanding the Charts.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/75">You don’t need to know everything before you begin.</p>
        <p className="mx-auto mt-2 max-w-xl text-lg leading-relaxed text-white/75">
          You just need a place to start, a structured learning path, and the willingness to keep showing up.
        </p>
        <div className="mx-auto mt-10 flex w-full flex-col items-stretch justify-center gap-3 sm:mx-auto sm:max-w-md lg:w-max lg:max-w-none lg:flex-row lg:items-center lg:[&>*]:whitespace-nowrap">
          <CheckoutButton plan="roadmap" label="Get My Free Trading Roadmap" location="final" />
          <CheckoutButton plan="waitlist" label="Join the Community Waitlist — Opening Soon" variant="secondary" location="final" />
        </div>
        <p className="mt-12 text-2xl font-semibold leading-snug text-blush [text-wrap:balance] sm:text-3xl">Your seat at The Profit Penthouse is waiting.</p>
      </Reveal>
    </section>
  )
}

function PolicyLink({ href, label }: { href: string; label: string }) {
  if (href) return <a href={href} className="hover:text-gold">{label}</a>
  return (
    <span className="cursor-not-allowed text-white/35" title="Document not published yet">
      {label} <span className="text-[10px] uppercase tracking-wider text-gold/70">(coming soon)</span>
    </span>
  )
}

const IgIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
)

export function Footer({ affiliateDisclosure = false }: { home?: string; affiliateDisclosure?: boolean }) {
  const { legal, contactEmail, instagramHandle } = siteConfig
  // The Legal column only shows once at least one policy link is added in src/config.ts
  const hasLegal = Object.values(legal).some((v) => v.trim() !== '')
  return (
    <footer className="border-t border-white/10 bg-ink px-5 pb-10 pt-14 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className={`grid gap-10 ${hasLegal ? 'md:grid-cols-[1.3fr_1fr_1fr]' : 'md:grid-cols-[1.3fr_1fr]'}`}>
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">Where Women Learn to Trade With Structure, Strategy &amp; Confidence.</p>
            <ul className="mt-5 space-y-2.5 text-sm text-white/70">
              <li>
                <a href={`https://instagram.com/${instagramHandle}`} className="inline-flex items-center gap-2 hover:text-gold" rel="noopener">
                  <IgIcon /> @{instagramHandle}
                </a>
              </li>
              <li>
                <a href="https://theprofitpenthouse.com" className="inline-flex items-center gap-2 hover:text-gold">
                  <Globe size={18} aria-hidden /> theprofitpenthouse.com
                </a>
              </li>
            </ul>
          </div>
          <nav aria-label="Footer">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">Explore</p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li><a href="./#membership" className="hover:text-gold">Membership</a></li>
              <li><a href="./#founder" className="hover:text-gold">About</a></li>
              <li><a href="./tools.html" className="hover:text-gold">Trading Toolkit</a></li>
              <li><a href="./#faq" className="hover:text-gold">FAQ</a></li>
              <li>
                {contactEmail ? (
                  <a href={`mailto:${contactEmail}`} className="inline-flex items-center gap-2 hover:text-gold"><Mail size={16} aria-hidden /> Contact · {contactEmail}</a>
                ) : (
                  <a href={`https://instagram.com/${instagramHandle}`} className="hover:text-gold">Contact (DM on Instagram)</a>
                )}
              </li>
            </ul>
          </nav>
          {hasLegal && (<div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">Legal</p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li><PolicyLink href={legal.privacy} label="Privacy Policy" /></li>
              <li><PolicyLink href={legal.terms} label="Terms & Conditions" /></li>
              <li><PolicyLink href={legal.refund} label="Refund/Cancellation Policy" /></li>
              <li><PolicyLink href={legal.riskDisclosure} label="Trading Risk Disclosure" /></li>
            </ul>
          </div>)}
        </div>
        <p className="mt-12 border-t border-white/10 pt-8 text-xs leading-relaxed text-white/45">
          The Profit Penthouse provides educational content only and does not provide personalized investment advice, trade recommendations, or guarantees of financial results. Futures and forex trading involve substantial risk of loss and may not be suitable for everyone. Past performance does not guarantee future results.
        </p>
        {affiliateDisclosure && <p className="mt-3 text-xs leading-relaxed text-white/45">{AFFILIATE_DISCLOSURE}</p>}
        <div className="mt-6 flex flex-col items-start justify-between gap-4 text-xs text-white/40 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} The Profit Penthouse. All rights reserved.</p>
          <AnchorButton href="#top" label="Back to top" className="!min-h-[40px] !px-4 !py-2 !text-[11px]" />
        </div>
      </div>
    </footer>
  )
}
