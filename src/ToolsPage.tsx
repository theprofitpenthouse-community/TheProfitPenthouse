import { ArrowLeft } from 'lucide-react'
import { Shell } from './components/Shell'
import { Toolkit } from './components/Toolkit'
import { Footer } from './components/Closing'
import { CheckoutButton } from './components/ui'
import { isConfigured, isRoadmapConnected } from './config'

export default function ToolsPage() {
  const needsSetup = !isRoadmapConnected() || !isConfigured('community')
  return (
    <Shell>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/85 backdrop-blur-xl">
        {needsSetup && (
          <p id="checkout-setup-note" className="foil-fill px-4 py-1.5 text-center text-xs font-bold text-ink">
            Preview mode — {[!isRoadmapConnected() && 'the roadmap signup form', !isConfigured('community') && 'the Skool join link'].filter(Boolean).join(' and ')} isn’t connected yet. Add it in <code>src/config.ts</code>.
          </p>
        )}
        <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
          <a href="./" className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-white/75 transition hover:text-blush">
            <ArrowLeft size={18} aria-hidden /> Back to The Profit Penthouse
          </a>
          <div className="hidden sm:block">
            <CheckoutButton plan="roadmap" label="Free Roadmap" location="toolkit_nav" className="!min-h-[44px] !px-5 !py-2.5 !text-xs" />
          </div>
        </nav>
      </header>
      <main id="main">
        <Toolkit />
      </main>
      <Footer home="./" affiliateDisclosure />
    </Shell>
  )
}
