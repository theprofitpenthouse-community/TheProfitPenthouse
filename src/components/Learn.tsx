import { useState } from 'react'
import { BookOpen, Brain, ChartCandlestick, ChevronDown, Droplets, Layers, ListChecks, NotebookPen, RefreshCw, ShieldCheck, Sprout } from 'lucide-react'
import { Heading, Reveal, Section } from './ui'

const modules = [
  { icon: BookOpen, title: 'Trading Foundations', short: 'Futures vs. forex, terminology, sessions and platforms.', topics: ['Futures vs. forex', 'Core terminology', 'Market sessions', 'Charting platforms'] },
  { icon: Layers, title: 'Market Structure', short: 'Trends, swing highs and lows, BOS and CHoCH.', topics: ['Trends', 'Swing highs & lows', 'Break of structure (BOS)', 'Change of character (CHoCH)'] },
  { icon: ChartCandlestick, title: 'Price Action', short: 'Candlesticks, support/resistance, supply and demand.', topics: ['Reading candlesticks', 'Support & resistance', 'Supply & demand zones'] },
  { icon: Droplets, title: 'Liquidity & Technical Tools', short: 'Liquidity concepts, Fibonacci and fair value gaps.', topics: ['Liquidity concepts', 'Fibonacci', 'Fair value gaps'] },
  { icon: ShieldCheck, title: 'Risk Management', short: 'Position sizing, stop losses and risk-to-reward.', topics: ['Position sizing', 'Stop-loss placement', 'Risk-to-reward'] },
  { icon: Brain, title: 'Trading Psychology', short: 'Patience, emotional discipline and avoiding revenge trading.', topics: ['Patience', 'Emotional discipline', 'Avoiding revenge trading'] },
  { icon: NotebookPen, title: 'Backtesting & Journaling', short: 'Evaluating setups and tracking execution.', topics: ['Evaluating setups', 'Journaling templates', 'Tracking execution'] },
  { icon: ListChecks, title: 'Trading Plans', short: 'Building repeatable rules and routines.', topics: ['Writing your rules', 'Pre-market routine', 'Review routine'] },
]

export function Curriculum() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <Section id="curriculum" labelledBy="curriculum-title">
      <Heading
        id="curriculum-title"
        title={<><span className="block text-blush">Learn to Read the Markets.</span> <span className="block w-fit mx-auto foil-text">Not Just Follow Signals.</span></>}
        sub="Eight core modules, in order. Tap any module to see what’s inside."
      />
      <div className="mb-8 flex flex-wrap justify-center gap-3 text-xs font-bold uppercase tracking-wider">
        <span className="relative inline-flex items-center gap-2 rounded-full foil-ring px-3 py-1.5 text-blush"><BookOpen size={14} aria-hidden /> What’s included in Community membership</span>
              </div>
      <ol className="grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {modules.map(({ icon: Icon, title, short, topics }, i) => {
          const isOpen = open === i
          return (
            <li key={title}>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`mod-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className={`glass group flex h-full w-full flex-col rounded-3xl p-6 text-left transition duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blush ${isOpen ? 'border-gold/60 shadow-gold' : ''}`}
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gold/10 foil-icon"><Icon size={20} aria-hidden /></span>
                  <span className="text-xs font-bold text-blush">Module {i + 1}</span>
                </div>
                <h3 className="display-sm mt-5 text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{short}</p>
                <div id={`mod-${i}`} hidden={!isOpen} className="mt-4 border-t border-white/10 pt-4">
                  <ul className="flex flex-wrap gap-2">
                    {topics.map((t) => (
                      <li key={t} className="rounded-full bg-white/[0.07] px-2.5 py-1 text-xs font-semibold text-white/80">{t}</li>
                    ))}
                  </ul>
                </div>
                <ChevronDown size={22} strokeWidth={2.5} aria-hidden className={`mt-auto self-end pt-3 text-blush transition ${isOpen ? 'rotate-180' : ''}`} />
              </button>
            </li>
          )
        })}
      </ol>
      <PathsRow />
    </Section>
  )
}

const paths = [
  { icon: Sprout, tag: 'Path One', name: 'The Beginner', quote: 'I’m brand new to trading.', body: 'Designed for women who want to understand trading terminology, charts, market mechanics, and risk management before considering live trading.' },
  { icon: RefreshCw, tag: 'Path Two', name: 'The Rebuild', quote: 'I’ve been trading, but I’m struggling.', body: 'Designed for women who need to revisit their foundations, improve their trading plans, develop discipline, and understand recurring execution mistakes.' },
]

function PathsRow() {
  return (
    <div className="mt-14">
      <Reveal className="mb-6 text-center">
        <h3 className="display-sm text-blush">Two ways in. Both included in your Community membership.</h3>
      </Reveal>
      <div className="grid gap-4 md:grid-cols-2">
        {paths.map(({ icon: Icon, tag, name, quote, body }, i) => (
          <Reveal key={name} delay={i * 0.08}>
            <article className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-gold/[0.08] via-white/[0.03] to-transparent p-6 sm:p-7">
              <Icon size={96} className="absolute -right-5 -top-5 text-gold/[0.08]" aria-hidden />
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] foil-text">{tag} · {name}</p>
              <p className="mt-3 text-lg font-semibold leading-snug text-white">“{quote}”</p>
              <p className="mt-2 leading-relaxed text-white/65">{body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
