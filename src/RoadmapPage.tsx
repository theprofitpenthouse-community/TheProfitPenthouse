import { ArrowLeft, Clock, Compass, ShieldCheck } from 'lucide-react'
import { Shell } from './components/Shell'
import { Footer } from './components/Closing'
import { ThriveCartEmbed } from './components/ThriveCartEmbed'
import { FormEmbed } from './components/FormEmbed'
import { KitForm } from './components/KitForm'
import { siteConfig } from './config'
import { Reveal, Section } from './components/ui'

const benefits = [
  { icon: Compass, title: 'Know where to start.', body: 'Forex vs. futures in plain English, plus how to read candles and market structure.' },
  { icon: ShieldCheck, title: 'Put risk first.', body: 'See how stops, position size, leverage, and fees work, with worked examples.' },
  { icon: Clock, title: 'Practice on your schedule.', body: 'A 7-day, 30–60-minute plan using free charting and a paper account. No live money required.' },
]

/** roadmap.html — dedicated signup page for the free roadmap (lead magnet). */
export default function RoadmapPage() {
  return (
    <Shell>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/85 backdrop-blur-xl">
        <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
          <a href="./" className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-white/75 transition hover:text-blush">
            <ArrowLeft size={18} aria-hidden /> <span className="hidden sm:inline">Back to The Profit Penthouse</span>
            <span className="sm:hidden">Back</span>
          </a>
          <span className="script-accent foil-text foil-script whitespace-nowrap text-[1.6rem] sm:text-[1.9rem]">The Profit Penthouse</span>
        </nav>
      </header>

      <main id="main">
        <Section id="top" labelledBy="rm-title" className="!pt-10 md:!pt-16">
          <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-blush">Free · Start here</p>
              <h1 id="rm-title" className="display-xl mt-4 text-white">The Busy Woman’s Beginner Trading Roadmap</h1>
              <p className="mt-5 text-lg leading-relaxed text-white/75 [text-wrap:pretty]">
                A clear first step into forex and futures, made for learning after work. Read a chart, put risk first, and follow a 7-day plan without risking a dollar.
              </p>
              <ul className="mt-8 hidden space-y-5 lg:block">
                {benefits.map(({ icon: Icon, title, body }) => (
                  <li key={title} className="flex gap-4">
                    <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose/15 text-blush">
                      <Icon size={19} aria-hidden />
                    </span>
                    <p className="leading-relaxed text-white/75">
                      <span className="font-bold text-white">{title}</span> {body}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.08} className="glass relative rounded-[2rem] p-6 shadow-glow sm:p-8">
              <h2 className="display-sm text-white">Send me the free roadmap</h2>
              <p className="mt-2 text-sm text-white/60">Enter your name and email and it goes straight to your inbox.</p>
              <div className="mt-6">
                {siteConfig.forms.kitFormId ? (
                  <KitForm formId={siteConfig.forms.kitFormId} button="Send Me the Roadmap" success="Check your email (and spam folder) for the link to your free roadmap." location="roadmap_page" />
                ) : siteConfig.forms.roadmap.trim() ? (
                  <FormEmbed html={siteConfig.forms.roadmap} placeholder="The roadmap signup opens soon." />
                ) : (
                  <ThriveCartEmbed />
                )}
              </div>
              <p className="mt-5 text-xs leading-relaxed text-white/45">
                By signing up, you’ll get the roadmap plus occasional emails from The Profit Penthouse; unsubscribe anytime. Education only, not financial advice. Trading forex and futures involves substantial risk of loss and isn’t suitable for everyone. Examples are hypothetical.
              </p>
            </Reveal>

            {/* On phones the benefits come after the form, so the form is visible right away */}
            <ul className="space-y-5 lg:hidden">
              {benefits.map(({ icon: Icon, title, body }) => (
                <li key={title} className="flex gap-4">
                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose/15 text-blush">
                    <Icon size={19} aria-hidden />
                  </span>
                  <p className="leading-relaxed text-white/75">
                    <span className="font-bold text-white">{title}</span> {body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      </main>
      <Footer home="./" />
    </Shell>
  )
}
