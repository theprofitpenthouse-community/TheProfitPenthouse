import { Check, Lock } from 'lucide-react'
import { Shell } from './components/Shell'
import { Footer } from './components/Closing'
import { includes } from './components/Pricing'
import { Reveal } from './components/ui'
import { siteConfig } from './config'
import { KitForm } from './components/KitForm'

/**
 * PRIVATE founding member invite page (founding.html). Send it by email only.
 * Not linked anywhere on the site, marked noindex/nofollow so search engines skip it.
 * Visitors enter first name + email (sent to Kit) and are then redirected to the Skool join page.
 */
export default function FoundingInvitePage() {
  const join = siteConfig.checkout.community
  const formId = siteConfig.forms.kitFoundingFormId || siteConfig.forms.kitFormId

  return (
    <Shell>
      <header className="flex justify-center px-5 pt-10 sm:pt-14">
        <a href="./" className="font-display text-xl tracking-[0.08em] foil-text" aria-label="The Profit Penthouse home">
          The Profit Penthouse
        </a>
      </header>

      <main id="main" className="px-5 pb-24 pt-12 sm:px-8 md:pt-16">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-blush/40 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-blush">
            <Lock size={13} aria-hidden /> Founding membership
          </p>
          <h1 id="top" className="display-xl mt-6 text-white">
            You’re Invited to Be a <span className="foil-text">Founding Member.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75 [text-wrap:pretty]">
            The doors to The Profit Penthouse Community are open, and the women who join now are my founding members: the first ones in, helping shape what this becomes.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mx-auto mt-14 max-w-xl">
          <div className="relative rounded-[2rem] foil-ring foil-ring-2 bg-gradient-to-b from-[#17130d] to-ink p-7 shadow-gold sm:p-10">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] foil-text">Founding Membership</p>
            <h2 className="display-md mt-3 text-white">The Profit Penthouse Community</h2>
            <p className="mt-5 flex items-baseline gap-2">
              <span className="font-display text-[3.5rem] leading-none tracking-[0.02em] text-white">$19</span>
              <span className="text-base font-semibold text-white/60">/ month</span>
            </p>
            <p className="mt-1 text-sm text-white/50">Monthly subscription · Billed through Skool</p>

            <ul className="mt-7 space-y-3">
              {includes.map((item) => (
                <li key={item} className="flex gap-3 text-white/80">
                  <Check size={18} className="mt-0.5 shrink-0 text-blush" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9">
              <p className="mb-4 text-center text-sm font-semibold text-white/80">Enter your name and email to accept your invitation.</p>
              <KitForm
                formId={formId}
                button="Accept My Invitation"
                success="Taking you to Skool to set up your membership…"
                location="founding_invite"
                redirectTo={join}
              />
            </div>
            <p className="mt-4 text-center text-xs leading-relaxed text-white/50">
              After you submit, you’ll go to Skool to join and set up your membership. Self-paced education only. No trade signals or personalized investment advice.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="mx-auto mt-16 max-w-2xl text-center">
          <p className="text-lg leading-relaxed text-white/75 [text-wrap:pretty]">
            I built this space for women who are ready to learn the markets with structure, patience, and support. I can’t wait to welcome you inside.
          </p>
          <p className="script-accent foil-text foil-script mx-auto mt-6 block w-fit text-[2.6rem] sm:text-[3rem]">Shantae</p>
        </Reveal>
      </main>
      <Footer />
    </Shell>
  )
}
