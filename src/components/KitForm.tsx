import { useState, type FormEvent } from 'react'
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'
import { track } from '../lib/analytics'

/**
 * Custom Profit Penthouse signup form (first name + email).
 * Sends each signup straight to your Kit form, so Kit's own form never has to load on the page.
 * formId = the number in your Kit form's HTML embed: action="https://app.kit.com/forms/<formId>/subscriptions"
 */
export function KitForm({ formId, button, success, location, redirectTo }: { formId: string; button: string; success: string; location: string; redirectTo?: string }) {
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    if (data.get('website')) return // spam bot filled the hidden field
    const body = new URLSearchParams({
      email_address: String(data.get('email') ?? '').trim(),
      'fields[first_name]': String(data.get('first_name') ?? '').trim(),
    })
    setState('sending')
    try {
      // Kit doesn't send CORS headers on form endpoints, so the response can't be read; a network failure still throws.
      await fetch(`https://app.kit.com/forms/${formId}/subscriptions`, { method: 'POST', mode: 'no-cors', body })
      setState('done')
      track('signup_submit', { location })
      if (redirectTo) window.setTimeout(() => window.location.assign(redirectTo), 1200)
    } catch {
      setState('error')
    }
  }

  if (state === 'done') {
    return (
      <div className="rounded-2xl border border-gold/40 bg-gold/[0.07] p-6 text-center" role="status">
        <CheckCircle2 size={28} className="foil-icon mx-auto" aria-hidden />
        <p className="mt-3 text-lg font-semibold text-white">You’re in!</p>
        <p className="mt-1 text-sm text-white/70">{success}</p>
        {redirectTo && (
          <a href={redirectTo} className="mt-4 inline-block text-sm font-semibold text-blush underline underline-offset-4">
            Not redirected? Continue to Skool
          </a>
        )}
      </div>
    )
  }

  const input =
    'w-full rounded-2xl border border-white/15 bg-white/[0.04] px-4 py-3.5 text-base text-white placeholder:text-white/40 transition focus:border-blush focus:outline-none focus:ring-2 focus:ring-blush/40'
  return (
    <form onSubmit={submit} className="space-y-3" noValidate={false}>
      <label className="block">
        <span className="sr-only">First name</span>
        <input name="first_name" type="text" autoComplete="given-name" required placeholder="First name" className={input} />
      </label>
      <label className="block">
        <span className="sr-only">Email address</span>
        <input name="email" type="email" autoComplete="email" required placeholder="Email address" className={input} />
      </label>
      {/* Honeypot: hidden from people, bots fill it in */}
      <input name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
      <button
        type="submit"
        disabled={state === 'sending'}
        className="group inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-rose px-6 py-3.5 text-sm font-extrabold uppercase tracking-[0.08em] text-ink shadow-glow transition duration-300 hover:shadow-glow-lg hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blush focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:opacity-70"
      >
        {state === 'sending' ? <Loader2 size={18} className="animate-spin" aria-hidden /> : null}
        <span>{state === 'sending' ? 'Sending…' : button}</span>
        {state !== 'sending' && <ArrowRight size={18} aria-hidden className="shrink-0 transition-transform group-hover:translate-x-1" />}
      </button>
      {state === 'error' && (
        <p className="text-center text-sm text-blush" role="alert">
          That didn’t go through. Check your connection and try again.
        </p>
      )}
    </form>
  )
}
