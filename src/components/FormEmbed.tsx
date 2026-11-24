import { useEffect, useRef } from 'react'
import { Clock } from 'lucide-react'

/**
 * Drops in a signup form from any email/autoresponder tool (MailerLite, Flodesk, ConvertKit, etc.).
 * Pass the tool's full HTML embed code. Scripts in the code are re-created so the browser runs them.
 * Empty code → a "signup opens soon" placeholder instead of a broken form.
 */
export function FormEmbed({ html, placeholder }: { html: string; placeholder: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const code = html.trim()

  useEffect(() => {
    const el = ref.current
    if (!el || !code) return
    el.innerHTML = code
    el.querySelectorAll('script').forEach((old) => {
      const s = document.createElement('script')
      for (const a of Array.from(old.attributes)) s.setAttribute(a.name, a.value)
      s.text = old.text
      old.replaceWith(s)
    })
  }, [code])

  if (!code) {
    return (
      <div className="rounded-2xl border border-gold/40 bg-gold/[0.07] p-5 text-center" role="status">
        <Clock size={22} className="foil-icon mx-auto" aria-hidden />
        <p className="mt-3 font-semibold text-white">{placeholder}</p>
        <p className="mt-1 text-xs text-white/50">
          Setup: paste your form’s embed code into <code className="text-blush">src/config.ts</code> → <code className="text-blush">forms</code>.
        </p>
      </div>
    )
  }
  return <div ref={ref} className="tpp-form-embed min-h-[120px]" />
}
