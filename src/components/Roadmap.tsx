import { Check, Clock, ShieldCheck, Compass } from 'lucide-react'
import { CheckoutButton, Reveal, Section } from './ui'

const benefits = [
  { icon: Compass, title: 'Know where to start.', body: 'Forex vs. futures in plain English, plus how to read candles and market structure.' },
  { icon: ShieldCheck, title: 'Put risk first.', body: 'See how stops, position size, leverage, and fees work, with worked examples.' },
  { icon: Clock, title: 'Practice on your schedule.', body: 'A 7-day, 30–60-minute plan using free charting and a paper account. No live money required.' },
]

/** Lead magnet: The Busy Woman's Beginner Trading Roadmap */
export function Roadmap() {
  return (
    <Section id="roadmap" labelledBy="roadmap-title">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.22em] foil-text">Free · Start here</p>
          <h2 id="roadmap-title" className="display-lg mt-4 text-white">The Busy Woman’s Beginner Trading Roadmap</h2>
          <p className="mt-5 text-lg leading-relaxed text-white/75 [text-wrap:pretty]">
            A clear first step into forex and futures, made for learning after work. Read a chart, put risk first, and follow a 7-day plan without risking a dollar.
          </p>
          <ul className="mt-8 space-y-5">
            {benefits.map(({ icon: Icon, title, body }) => (
              <li key={title} className="flex gap-4">
                <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/10 foil-icon">
                  <Icon size={19} aria-hidden />
                </span>
                <p className="leading-relaxed text-white/75">
                  <span className="font-bold text-white">{title}</span> {body}
                </p>
              </li>
            ))}
          </ul>
          <CheckoutButton plan="roadmap" label="Get My Free Trading Roadmap" location="roadmap_section" className="mt-9" />
          <p className="mt-4 max-w-md text-xs leading-relaxed text-white/45">
            Free. You’ll get the roadmap by email plus occasional emails from The Profit Penthouse; unsubscribe anytime. Education only, not financial advice. Examples are hypothetical.
          </p>
        </Reveal>

        {/* Roadmap cover mockup (pure CSS — swap for the real cover image anytime) */}
        <Reveal delay={0.1}>
          <div className="relative mx-auto w-[88%] max-w-sm sm:w-full" aria-hidden>
            <div className="absolute inset-0 translate-x-3 translate-y-3 rotate-2 sm:translate-x-4 sm:translate-y-4 sm:rotate-3 rounded-2xl border border-white/10 bg-night" />
            <div className="relative overflow-hidden rounded-2xl foil-ring bg-gradient-to-b from-[#17130d] to-ink p-7 shadow-gold">
              <p className="script-accent foil-text foil-script w-fit text-3xl">The Profit Penthouse</p>
              <p className="display-md mt-5 text-white">The Busy Woman’s Beginner Trading Roadmap</p>
              <div className="my-6 h-px bg-gradient-to-r from-gold/70 to-transparent" />
              <ul className="space-y-2.5 text-sm text-white/75">
                {['Chart basics', 'Forex vs. futures', 'Risk-first math', '7-day practice plan'].map((t) => (
                  <li key={t} className="flex items-center gap-2.5">
                    <Check size={15} className="foil-icon" /> {t}
                  </li>
                ))}
              </ul>
              <p className="mt-7 text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">Free PDF guide</p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
