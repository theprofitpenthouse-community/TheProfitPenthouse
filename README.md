# The Profit Penthouse — Membership Landing Page

React + TypeScript + Tailwind CSS + Lucide icons + Framer Motion. Built for GitHub Pages at **theprofitpenthouse.com**.

## Pages

| File | What it is |
| --- | --- |
| `index.html` | Public one-page funnel: free roadmap + The Profit Penthouse Community ($19/mo) only |
| `roadmap.html` | Free roadmap signup page with your ThriveCart $0 checkout embedded (name + email, no redirect) |
| `tools.html` | Trading Toolkit (affiliate links, CC Trend Pro for signal seekers) |
| `inner-circle.html` | **Members-only** Inner Circle upgrade page ($67 founding / $97 regular). Linked only from the phone menu, noindex. No checkout button: a “How to upgrade” note sends members to upgrade inside Skool; “Not a member yet?” link → $19 Community. |

## Before launch — edit `src/config.ts`

| Setting | What to put there |
| --- | --- |
| `thrivecart` | ThriveCart embed details for the roadmap signup (already filled in) |
| `checkout.community` | Skool About/join link for The Profit Penthouse Community ($19/mo) |
| `checkout.innerCircle` | Not used — members upgrade inside Skool |
| `communityUrl` | Your Skool group URL (optional; not shown on the site right now) |
| `innerCircle.status` | Status line on the Inner Circle page ("Opening March 2027"; '' hides it) |
| `innerCircle.foundingPrice` / `regularPrice` / `foundingSeats` | 67 / 97 / 25 |
| `innerCircle.billingConfirmed` | Set `true` only after Skool confirms upgrades replace the $19 plan — shows the “not charged for both” statement |
| `founderImage` | Put your photo in `public/` and set `'./shantae.jpg'` |
| `contactEmail` | Public contact email (falls back to Instagram DM until set) |
| `legal.*` | Privacy, Terms, Refund/Cancellation, Trading Risk Disclosure URLs |
| `affiliates` | Toolkit cards (TradingView, demo broker, SoFi, Amazon list, CC Trend Pro) |
| `analytics.provider` | `'gtag'`, `'plausible'` or `'dataLayer'` after adding that script to the HTML files |

Any button whose link is blank shows a gold **Preview mode** bar and opens a "setup needed" note instead of a broken link.

## Roadmap signup (ThriveCart)

`roadmap.html` embeds your ThriveCart $0 roadmap checkout (name + email) right on the page, so visitors never leave your site. Every “Get My Free Trading Roadmap” button opens this page.

- The embed details live in `src/config.ts` → `thrivecart` (account, product, embeddable), copied from ThriveCart's **Checkout → Embed** code.
- Style the checkout itself (colors, fonts, button text) inside ThriveCart's checkout designer; the website can't restyle the embedded form.
- Deliver the PDF with ThriveCart's fulfillment (digital delivery / success page), and set any follow-up emails in ThriveCart's autoresponder.
- To embed a different product later, paste the new values from its embed code into `thrivecart`.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
```

## How the live site is published

- Repo: `theprofitpenthouse-community/TheProfitPenthouse`
- **`new-site` branch** = this source code.
- **`main` branch** = the built website. GitHub Pages serves `main` (deploy from branch, root) at theprofitpenthouse.com.
- To publish a change: edit the source here, run `npm run build`, then replace everything on `main` with the contents of `dist/` plus `.nojekyll` and a short README. `CNAME` comes along in `dist/`.
- `.github/workflows/deploy.yml` is an alternative: if you ever switch **Settings → Pages → Source** to **GitHub Actions** and keep the source on `main`, every push builds and deploys automatically.

## Analytics events (ready, not active)

`src/lib/analytics.ts` fires: `roadmap_cta_click`, `community_cta_click`, `inner_circle_cta_click` (with `location`), `pricing_section_view`, `faq_interaction`, `affiliate_click`. Nothing is sent until you set a provider.

## Structure

```
src/config.ts               ← all editable settings and links
src/lib/analytics.ts        ← tracking hooks
src/components/Shell.tsx    ← shared page wrapper (motion, setup dialog, foil gradient)
src/components/ui.tsx       ← buttons, reveal animation, setup dialog, candle strip
src/components/Nav.tsx      ← sticky nav + mobile menu
src/components/Hero*.tsx    ← hero + curved-monitor chart (pure SVG)
src/components/Story.tsx    ← problem + intro pillars
src/components/Roadmap.tsx  ← free roadmap lead magnet
src/components/Learn.tsx    ← curriculum + Beginner/Rebuild paths
src/components/Pricing.tsx  ← The Profit Penthouse Community ($19) membership
src/components/Closing.tsx  ← founder, FAQ, final CTA, footer
src/components/Toolkit.tsx  ← toolkit cards (tools.html)
src/ToolsPage.tsx           ← tools.html page
src/InnerCirclePage.tsx     ← inner-circle.html (members-only, unlisted)
```

Palette: black #0B0B0F · pink #C84D87 · gold #C6A66B · white #FAF8F9. Fonts: American Captain (headlines), Brother Signature (script accents), Manrope (everything else). Decorative charts use pink candles only. Motion respects `prefers-reduced-motion`.
