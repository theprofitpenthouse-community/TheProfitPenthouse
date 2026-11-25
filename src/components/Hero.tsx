import { BookOpen, CandlestickChart, PlayCircle, Users } from 'lucide-react'
import { HeroVisual } from './HeroVisual'
import { IntroText } from './Story'
import { AnchorButton, CheckoutButton, Reveal } from './ui'

const trust = [
  { icon: BookOpen, label: 'Beginner-Friendly Education' },
  { icon: CandlestickChart, label: 'Futures & Forex' },
  { icon: PlayCircle, label: 'Step-by-Step Learning Path' },
  { icon: Users, label: 'Women-Only Community' },
]

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden px-5 pb-16 pt-10 sm:px-8 md:pb-24 md:pt-16">
      <div className="relative mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-blush [text-wrap:balance]">Trading education. Designed for women.</p>
          <h1 id="hero-title" className="display-xl text-white">
            Master Your Mindset.
            <span className="mx-auto mt-1 block w-fit foil-text">Decode the Markets.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80 [text-wrap:pretty] md:text-xl">
            Build your trading knowledge with structured forex and futures education that fits your real life.
          </p>
          <p className="mt-4 text-lg font-semibold text-gold md:text-xl">Your next chapter starts here.</p>
          <div className="mx-auto mt-9 flex w-full flex-col items-stretch justify-center gap-3 sm:mx-auto sm:max-w-md">
            <CheckoutButton plan="roadmap" label="Get My Free Trading Roadmap" location="hero" />
            <AnchorButton href="founding.html" label="Join The Profit Penthouse Community" variant="gold" />
          </div>
        </Reveal>

        <IntroText />

        <Reveal delay={0.15} className="mt-12 md:mt-16">
          <HeroVisual />
        </Reveal>

        <ul className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-4">
          {trust.map(({ icon: Icon, label }) => (
            <li key={label} className="glass flex items-center gap-3 rounded-2xl px-4 py-3.5 text-sm font-semibold text-white/85">
              <Icon size={20} className="foil-icon shrink-0" aria-hidden />
              <span>{label}</span>
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-10 flex w-full justify-center sm:max-w-md lg:w-max lg:max-w-none">
          <CheckoutButton plan="waitlist" label="Join the Community Waitlist — Opening Soon" location="hero_badges" className="w-full lg:w-auto lg:whitespace-nowrap" />
        </div>
      </div>
    </section>
  )
}
