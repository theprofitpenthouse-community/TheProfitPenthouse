import { BookOpen, CandlestickChart, Users } from 'lucide-react'
import { Shell } from './components/Shell'
import { Nav } from './components/Nav'
import { Footer } from './components/Closing'
import { FormEmbed } from './components/FormEmbed'
import { KitForm } from './components/KitForm'
import { Reveal, Section } from './components/ui'
import { siteConfig } from './config'

const perks = [
  { icon: BookOpen, title: 'Hear it first.', body: 'You’ll get an email the moment the doors open, with the link to join.' },
  { icon: CandlestickChart, title: 'Built for beginners.', body: 'A step-by-step path through forex and futures, starting from the very basics.' },
  { icon: Users, title: 'Women only.', body: 'A focused space to learn, ask questions, and grow with women on the same journey.' },
]

/** waitlist.html: signup page for The Profit Penthouse Community waitlist (like roadmap.html). */
export default function WaitlistPage() {
  const { opening } = siteConfig.waitlist
  return (
    <Shell>
      <Nav />
      <main id="main">
        <Section id="top" labelledBy="wl-title" className="!pt-10 md:!pt-16">
          <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-blush">{opening || 'Opening soon'} · Free waitlist</p>
              <h1 id="wl-title" className="display-xl mt-4 text-white">
                The Profit Penthouse <span className="foil-text">Community</span>
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-white/75 [text-wrap:pretty]">
                A women-only trading education community for beginners who want to understand forex and futures with structure, not guesswork. The doors aren’t open yet. Join the waitlist and you’ll be the first to know.
              </p>
              <ul className="mt-8 hidden space-y-5 lg:block">
                {perks.map(({ icon: Icon, title, body }) => (
                  <li key={title} className="flex gap-4">
                    <span className="mt-0.5 relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl foil-ring">
                      <Icon size={19} className="foil-icon" aria-hidden />
                    </span>
                    <p className="leading-relaxed text-white/75">
                      <span className="font-bold text-white">{title}</span> {body}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.08}>
              <div id="join" className="glass relative scroll-mt-24 rounded-[2rem] foil-ring p-6 shadow-gold sm:p-8">
                <h2 className="display-sm text-white">Join the waitlist</h2>
                <p className="mt-2 text-sm text-white/60">Enter your name and email. It’s free, and it doesn’t sign you up for a membership.</p>
                <div className="mt-6">
                  {siteConfig.forms.kitFormId ? (
                    <KitForm formId={siteConfig.forms.kitFormId} button="Join the Waitlist" success="Check your email to confirm. You’ll be the first to know when the doors open." location="waitlist_page" />
                  ) : (
                    <FormEmbed html={siteConfig.forms.waitlist} placeholder="The waitlist signup opens soon." />
                  )}
                </div>
                <p className="mt-5 text-xs leading-relaxed text-white/45">
                  By joining, you’ll get updates about the Community opening plus occasional emails from The Profit Penthouse; unsubscribe anytime. Education only, not financial advice.
                </p>
              </div>
            </Reveal>

            {/* On phones the perks come after the form, so the form is visible right away */}
            <ul className="space-y-5 lg:hidden">
              {perks.map(({ icon: Icon, title, body }) => (
                <li key={title} className="flex gap-4">
                  <span className="mt-0.5 relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl foil-ring">
                    <Icon size={19} className="foil-icon" aria-hidden />
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
      <Footer />
    </Shell>
  )
}
