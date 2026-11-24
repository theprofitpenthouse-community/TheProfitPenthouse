import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Settings2, X } from 'lucide-react'
import { destination, isConfigured, type PlanId } from '../config'
import { track } from '../lib/analytics'

/* ── Fade-up on scroll (disabled for reduced-motion users) ── */
export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function Section({ id, children, className = '', labelledBy }: { id?: string; children: ReactNode; className?: string; labelledBy?: string }) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`relative px-5 py-20 sm:px-8 md:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  )
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-blush">{children}</p>
}

export function Heading({ id, title, sub, center = true }: { id: string; title: ReactNode; sub?: ReactNode; center?: boolean }) {
  return (
    <Reveal className={`mb-12 md:mb-16 ${center ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}`}>
      <h2 id={id} className="display-lg text-white">
        {title}
      </h2>
      {sub && <p className="mt-5 text-lg leading-relaxed text-white/70 [text-wrap:pretty]">{sub}</p>}
    </Reveal>
  )
}

/* ── Setup dialog: shown when a button's link hasn't been configured yet ── */
const setupCopy: Record<PlanId, { title: string; what: string; key: string }> = {
  roadmap: { title: 'The free roadmap signup', what: 'ThriveCart embed details', key: 'thrivecart' },
  waitlist: { title: 'The waitlist page', what: 'waitlist page', key: 'waitlist' },
  community: { title: 'The Community checkout', what: 'Skool join link', key: 'checkout.community' },
  innerCircle: { title: 'The Inner Circle upgrade', what: 'Skool plans/upgrade link', key: 'checkout.innerCircle' },
}
const SetupCtx = createContext<(plan: PlanId) => void>(() => {})

export function SetupProvider({ children }: { children: ReactNode }) {
  const [plan, setPlan] = useState<PlanId | null>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!plan) return
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setPlan(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [plan])

  return (
    <SetupCtx.Provider value={setPlan}>
      {children}
      {plan && (
        <div className="fixed inset-0 z-[60] flex items-end justify-center bg-black/70 p-4 backdrop-blur-sm sm:items-center" onClick={() => setPlan(null)}>
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="setup-title"
            className="glass w-full max-w-md rounded-3xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <span className="relative inline-flex items-center gap-2 rounded-full foil-ring px-3 py-1 text-xs font-bold uppercase tracking-wider foil-text">
                <Settings2 size={14} aria-hidden /> Setup needed
              </span>
              <button ref={closeRef} onClick={() => setPlan(null)} aria-label="Close" className="rounded-full p-2 text-white/70 hover:bg-white/10 hover:text-white">
                <X size={18} />
              </button>
            </div>
            <h3 id="setup-title" className="display-sm text-white">
              {setupCopy[plan].title} isn’t connected yet
            </h3>
            <p className="mt-3 text-white/70">
              Paste your {setupCopy[plan].what} into <code className="rounded bg-white/10 px-1.5 py-0.5 text-blush">src/config.ts</code> under{' '}
              <code className="rounded bg-white/10 px-1.5 py-0.5 text-blush">{setupCopy[plan].key}</code>. Once it’s set, this button goes straight there.
            </p>
          </div>
        </div>
      )}
    </SetupCtx.Provider>
  )
}

type Variant = 'primary' | 'secondary' | 'gold'
const styles: Record<Variant, string> = {
  primary: 'bg-rose text-ink shadow-glow hover:shadow-glow-lg hover:brightness-110',
  secondary: 'border border-white/25 bg-white/5 text-white hover:border-blush hover:bg-white/10',
  gold: 'relative foil-ring foil-ring-2 gold-btn bg-[#141109] shadow-gold hover:bg-[#1d180d] hover:shadow-gold-lg',
}
const base =
  'group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full px-6 py-3.5 text-center text-sm font-extrabold uppercase tracking-[0.08em] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blush focus-visible:ring-offset-2 focus-visible:ring-offset-ink'

const events = { roadmap: 'roadmap_cta_click', waitlist: 'waitlist_cta_click', community: 'community_cta_click', innerCircle: 'inner_circle_cta_click' } as const

/** Call-to-action button. Goes to the configured link; if it's blank, opens a setup note instead of a broken link. */
export function CheckoutButton({ plan, label, variant = 'primary', location, className = '' }: { plan: PlanId; label: string; variant?: Variant; location: string; className?: string }) {
  const openSetup = useContext(SetupCtx)
  const ready = isConfigured(plan)
  const fire = () => track(events[plan], { location, configured: ready })
  const content = (
    <>
      <span>{label}</span>
      <ArrowRight size={18} aria-hidden className="shrink-0 transition-transform group-hover:translate-x-1" />
    </>
  )
  if (ready) {
    return (
      <a href={destination(plan)} onClick={fire} className={`${base} ${styles[variant]} ${className}`}>
        {content}
      </a>
    )
  }
  return (
    <button
      type="button"
      onClick={() => {
        fire()
        openSetup(plan)
      }}
      className={`${base} ${styles[variant]} ${className} relative`}
      aria-describedby="checkout-setup-note"
    >
      {content}
      <span className="absolute -top-2 right-4 rounded-full foil-fill px-2 py-0.5 text-[10px] font-extrabold tracking-wider text-ink">SETUP</span>
    </button>
  )
}

export function AnchorButton({ href, label, variant = 'secondary', className = '' }: { href: string; label: string; variant?: Variant; className?: string }) {
  return (
    <a href={href} className={`${base} ${styles[variant]} ${className}`}>
      <span>{label}</span>
      <ArrowRight size={18} aria-hidden className="shrink-0 transition-transform group-hover:translate-x-1" />
    </a>
  )
}

/* ── Decorative pink candlestick strip (bullish = blush, bearish = light petal) ── */
export function CandleStrip({ count = 28, className = '', seed = 3 }: { count?: number; className?: string; seed?: number }) {
  let s = seed
  const rnd = () => ((s = (s * 9301 + 49297) % 233280) / 233280)
  let price = 60
  const candles = Array.from({ length: count }, (_, i) => {
    const open = price
    const close = open + (rnd() - 0.42) * 14
    const high = Math.max(open, close) + rnd() * 6
    const low = Math.min(open, close) - rnd() * 6
    price = close
    return { i, open, close, high, low }
  })
  const vals = candles.flatMap((c) => [c.high, c.low])
  const max = Math.max(...vals), min = Math.min(...vals)
  const y = (v: number) => 4 + ((max - v) / (max - min)) * 92
  const w = 100 / count
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden className={className}>
      {candles.map((c) => {
        const up = c.close >= c.open
        const x = c.i * w + w / 2
        return (
          <g key={c.i} fill={up ? '#F3A6C8' : '#FBD9E8'} stroke={up ? '#F3A6C8' : '#FBD9E8'}>
            <line x1={x} x2={x} y1={y(c.high)} y2={y(c.low)} strokeWidth={0.25} vectorEffect="non-scaling-stroke" />
            <rect x={x - w * 0.3} width={w * 0.6} y={y(Math.max(c.open, c.close))} height={Math.max(0.8, Math.abs(y(c.open) - y(c.close)))} rx={0.3} opacity={up ? 1 : 0.9} />
          </g>
        )
      })}
    </svg>
  )
}
