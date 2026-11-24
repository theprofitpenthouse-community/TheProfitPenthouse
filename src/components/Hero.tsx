import { BookOpen, CandlestickChart, PlayCircle, Users } from 'lucide-react'
import { HeroVisual } from './HeroVisual'
import { CheckoutButton, Reveal } from './ui'

const trust = [
  { icon: BookOpen, label: 'Free Beginner Roadmap' },
  { icon: CandlestickChart, label: 'Futures & Forex' },
  { icon: PlayCircle, label: 'Step-by-Step Learning Path' },
  { icon: Users, label: 'Women-Only Community' },
]

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden px-5 pb-16 pt-10 sm:px-8 md:pb-24 md:pt-16">
      <div className="relative mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-blush">For women ready to understand the markets</p>
          <h1 id="hero-title" className="display-xl text-white">
            Stop Guessing.
            <span className="mx-auto mt-1 block w-fit foil-text">Start Understanding the Charts.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80 [text-wrap:pretty] md:text-xl">
            Learn futures and forex trading through structured education, practical resources, and a supportive community of women who are serious about developing their trading skills.
          </p>
          <div className="mx-auto mt-9 flex w-full flex-col items-stretch justify-center gap-3 sm:mx-auto sm:max-w-md lg:w-max lg:max-w-none lg:flex-row lg:items-center lg:[&>*]:whitespace-nowrap">
            <CheckoutButton plan="roadmap" label="Get My Free Trading Roadmap" location="hero" />
            <CheckoutButton plan="community" label="Join The Community — $19/Month" variant="secondary" location="hero" />
          </div>
          <p className="mt-3 text-xs text-white/50">The roadmap is free · Community membership is $19/month, billed through Skool</p>
        </Reveal>

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
      </div>
    </section>
  )
}
