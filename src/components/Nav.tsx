import { useEffect, useState } from 'react'
import { Lock, Menu, X } from 'lucide-react'
import { CheckoutButton } from './ui'
import { isRoadmapConnected } from '../config'

const links = [
  { href: './#membership', label: 'Membership' },
  { href: './#curriculum', label: 'Curriculum' },
  { href: './#founder', label: 'Founder' },
  { href: './#faq', label: 'FAQ' },
]

export function Logo() {
  return (
    <a href="./" className="flex items-center rounded-md py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blush" aria-label="The Profit Penthouse — home">
      <span className="script-accent foil-text foil-script whitespace-nowrap text-[1.9rem] sm:text-[2.2rem]">The Profit Penthouse</span>
    </a>
  )
}

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const needsSetup = !isRoadmapConnected()

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  return (
    <header className="sticky top-0 z-50">
      {needsSetup && (
        <p id="checkout-setup-note" className="foil-fill px-4 py-1.5 text-center text-xs font-bold text-ink">
          Preview mode — the roadmap signup form isn’t connected yet. Add it in <code>src/config.ts</code>.
        </p>
      )}
      <nav
        aria-label="Main"
        className={`transition-colors duration-300 ${scrolled || open ? 'border-b border-white/10 bg-ink/85 backdrop-blur-xl' : 'bg-transparent'}`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-end gap-4 px-5 sm:px-8 lg:grid lg:grid-cols-[1fr_auto_1fr]">
          <span className="hidden lg:block" aria-hidden />
          <ul className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm font-semibold text-white/75 transition hover:text-blush">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden justify-self-end lg:block">
            <CheckoutButton plan="roadmap" label="Free Roadmap" location="nav" className="!min-h-[44px] !px-5 !py-2.5 !text-xs" />
          </div>
          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white hover:bg-white/10 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {open && (
          <div id="mobile-menu" className="border-t border-white/10 px-5 pb-6 lg:hidden">
            <ul className="flex flex-col py-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => setOpen(false)} className="block py-3.5 text-lg font-semibold text-white/85 hover:text-blush">
                    {l.label}
                  </a>
                </li>
              ))}
              {/* Hamburger menu only — not shown in the desktop bar or anywhere on the landing page */}
              <li>
                <a href="./inner-circle.html" onClick={() => setOpen(false)} className="flex items-center gap-2 py-3.5 text-lg font-semibold text-white/85 hover:text-blush">
                  Inner Circle
                  <span className="relative inline-flex items-center gap-1 rounded-full foil-ring px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-[0.14em]">
                    <Lock size={10} className="foil-icon" aria-hidden /> <span className="foil-text">Members</span>
                  </span>
                </a>
              </li>
            </ul>
            <div className="flex flex-col gap-3">
              <CheckoutButton plan="roadmap" label="Get My Free Trading Roadmap" location="mobile_menu" className="w-full" />
              <CheckoutButton plan="waitlist" label="Join The Profit Penthouse Community" variant="secondary" location="mobile_menu" className="w-full" />
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
