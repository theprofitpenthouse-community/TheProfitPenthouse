import { Brain, Compass, Layers, MessageCircle, ShieldCheck, Target } from 'lucide-react'
import { CandleStrip, Heading, Reveal, Section } from './ui'

const problems = [
  { icon: Layers, title: 'Information Overload', body: 'You’ve watched countless tutorials but still struggle to connect the concepts.' },
  { icon: Compass, title: 'No Clear Learning Path', body: 'You know trading terms, but you’re unsure what to study first or how everything fits together.' },
  { icon: MessageCircle, title: 'Learning Alone', body: 'You have questions, but no structured educational community where you feel comfortable asking them.' },
]

export function Problem() {
  return (
    <Section id="why" labelledBy="problem-title">
      <Heading id="problem-title" title="You Don’t Need Another Random Trading Video." sub={<span className="text-xl font-semibold text-blush sm:text-2xl">You need a place to actually learn.</span>} />
      <div className="grid gap-5 md:grid-cols-3">
        {problems.map(({ icon: Icon, title, body }, i) => (
          <Reveal key={title} delay={i * 0.08}>
            <article className="glass h-full rounded-3xl p-7">
              <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-rose/15 text-blush">
                <Icon size={22} aria-hidden />
              </span>
              <h3 className="display-sm text-white">{title}</h3>
              <p className="mt-3 leading-relaxed text-white/70">{body}</p>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal className="mx-auto mt-14 max-w-2xl text-center">
        <p className="display-md text-white">
          The Profit Penthouse was created to change the way women approach learning the markets.
        </p>
      </Reveal>
    </Section>
  )
}

const pillars = [
  { icon: ShieldCheck, title: 'Discipline', body: 'Build habits, trading routines, risk-management practices, and accountability.' },
  { icon: Target, title: 'Strategy', body: 'Learn to analyze price action, identify market structure, and develop a systematic approach to studying charts.' },
  { icon: Brain, title: 'Mindset', body: 'Understand the psychological challenges of trading and build healthier decision-making habits.' },
]

export function Intro() {
  return (
    <Section id="about" labelledBy="intro-title">
      <CandleStrip className="pointer-events-none absolute inset-x-0 top-10 h-40 w-full opacity-[0.07]" count={48} seed={7} />
      <div className="relative">
        <Reveal className="mx-auto mb-14 max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-blush">Introducing The Profit Penthouse</p>
          <h2 id="intro-title" className="mt-5 text-white">
            <span className="script-accent block text-[2.6rem] text-blush sm:text-[3.4rem]">Welcome to your</span>
            <span className="display-lg -mt-1 block sm:-mt-2">Trading Education Era.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/75 [text-wrap:pretty]">
            The Profit Penthouse is a private educational community where women learn to understand futures and forex markets through price action, market structure, trading psychology, and disciplined risk management.
          </p>
          <p className="mt-4 text-lg font-semibold text-white">No shortcuts. No overnight success stories. Just education, structure, and a community committed to learning.</p>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <article className="relative h-full overflow-hidden rounded-3xl foil-ring foil-soft bg-gradient-to-b from-white/[0.06] to-transparent p-8 text-center">
                <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#f3dc9e] to-transparent" aria-hidden />
                <span className="foil-icon relative mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full foil-ring">
                  <Icon size={24} aria-hidden />
                </span>
                <h3 className="text-sm font-extrabold uppercase tracking-[0.24em] text-white">{title}</h3>
                <p className="mt-4 leading-relaxed text-white/70">{body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
