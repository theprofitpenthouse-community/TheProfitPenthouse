import founderPhoto from './assets/shantae.webp'

/**
 * ─────────────────────────────────────────────────────────────
 *  THE PROFIT PENTHOUSE — SITE CONFIGURATION
 *  Everything you'll need to edit before launch lives here.
 *  Leave a value as '' until you have the real one — the page
 *  shows a clearly marked setup state instead of a broken link.
 * ─────────────────────────────────────────────────────────────
 */

export const siteConfig = {
  siteUrl: 'https://theprofitpenthouse.com',
  instagramHandle: 'theprofitpenthouse',

  /**
   * Free lead magnet: The Busy Woman's Beginner Trading Roadmap.
   * Every "Get My Free Trading Roadmap" button opens roadmap.html, which shows your
   * ThriveCart $0 checkout embedded on the page (name + email, no redirect).
   * Values come from the ThriveCart embed code (Checkout → Embed). Leave embeddable '' to hide it.
   */
  thrivecart: {
    account: 'enrichmarketingsolutions',
    product: '45',
    embeddable: 'tc-enrichmarketingsolutions-45-RGRZ2Q',
  },

  /**
   * Signup forms from your email/autoresponder tool (MailerLite, Flodesk, ConvertKit, etc.).
   * Paste the tool's full "HTML embed" code between the backticks. Leave `` blank for a
   * "signup coming soon" placeholder. If `roadmap` is filled in, it replaces the ThriveCart form.
   * Turn ON the name field in your form builder so you get first name + email.
   */
  forms: {
    /**
     * Your Kit form's ID number. When set, both pages show the custom Profit Penthouse form
     * (first name + email) and send signups straight to Kit, instead of loading Kit's embed below.
     * Find it in Kit: your form → Publish/Embed → HTML → action="https://app.kit.com/forms/<ID>/subscriptions".
     */
    kitFormId: '',
    roadmap: `<script async data-uid="a479d6f483" src="https://theprofitpenthouse.kit.com/a479d6f483/index.js"></script>`,
    waitlist: `<script async data-uid="a479d6f483" src="https://theprofitpenthouse.kit.com/a479d6f483/index.js"></script>`,
  },

  /** Waitlist page (waitlist.html). The Community join buttons point here until doors open. */
  waitlist: {
    opening: '', // e.g. 'Doors open January 2027' — leave '' to just say "Opening soon"
  },

  /** Your Skool group URL, e.g. https://www.skool.com/your-group — used on the members-only Inner Circle page. */
  communityUrl: 'https://www.skool.com/the-profit-penthouse-6394',

  /** Skool links. */
  checkout: {
    /** Public join link for The Profit Penthouse Community ($19/mo) — your Skool About page. */
    community: 'https://www.skool.com/the-profit-penthouse-6394/about',
    /** Not used right now — members upgrade to the Inner Circle from inside Skool. */
    innerCircle: '',
  },

  /** Members-only Inner Circle upgrade page (inner-circle.html). Not linked from the public site. */
  innerCircle: {
    status: 'Opening March 2027', // set to '' to hide
    foundingPrice: 67,
    regularPrice: 97,
    foundingSeats: 25,
    /**
     * Flip to true ONLY after you've confirmed in Skool that upgrading replaces the $19
     * subscription (no double billing). Until then the page doesn't make that promise.
     */
    billingConfirmed: false,
  },

  /**
   * Affiliate / recommended tools. Shown in the "Your Trading Toolkit" section.
   * icon: 'chart' | 'wallet' | 'demo'. Remove an entry to hide it.
   */
  affiliates: [
    {
      id: 'tradingview',
      icon: 'chart',
      label: 'Charting platform',
      name: 'TradingView',
      body: 'The charting platform used throughout the lessons. Mark up structure, practice zones, and backtest on the same charts you’ll study in class.',
      cta: 'Get TradingView',
      url: 'https://www.tradingview.com/pricing/?share_your_love=TheFXQueen&mobileapp=true',
    },
    {
      id: 'demo-broker',
      icon: 'demo',
      label: 'Recommended broker',
      name: 'Open a free demo account',
      body: 'Practice with simulated funds before you ever risk real money. A demo account lets you apply what you learn and build your routine with zero pressure.',
      cta: 'Create a demo account',
      url: 'https://secure.gatesfx.com/links/go/1664',
    },
    {
      id: 'sofi-crypto',
      icon: 'wallet',
      label: 'Recommended crypto wallet',
      name: 'SoFi Crypto',
      body: 'The crypto wallet Shantae recommends for women who want to start exploring digital assets.',
      cta: 'Open SoFi Crypto',
      url: 'https://www.sofi.com/invite/crypto?gcp=95cd83b0-76e3-47f3-8aec-350bc09311b5&isAliasGcp=false&siid=5da5165a-3db8-4bbc-b606-ab94f87244e9',
    },
    {
      id: 'amazon-must-haves',
      icon: 'shop',
      label: 'Shantae’s Amazon picks',
      name: 'New Trader Must-Haves',
      body: 'The desk and setup essentials Shantae recommends for new traders, all in one Amazon list.',
      cta: 'Shop the list',
      url: 'https://www.amazon.com/shop/laquonia_shantae/list/2QO5JZG37OC9H?ref_=aipsflist',
    },
    {
      id: 'cc-trend-pro',
      group: 'signals',
      icon: 'signal',
      label: 'Prefer signals?',
      name: 'CC Trend Pro',
      body: 'The Profit Penthouse teaches you to read the charts and make your own decisions, so we don’t offer trade signals. If you’d rather follow alerts, CC Trend Pro is a separate, third-party service with a TradingView signal indicator, VIP Telegram trade calls, and an optional MT5 trading bot.',
      cta: 'Explore CC Trend Pro',
      url: 'https://cctrendpro.com/ref/theprofitpenthouse',
    },
  ] as { id: string; group?: 'signals'; icon: 'chart' | 'wallet' | 'demo' | 'shop' | 'signal'; label: string; name: string; body: string; cta: string; url: string }[],

  /** Founder photo. Drop the file in /public (e.g. public/shantae.jpg) and set './shantae.jpg'. */
  founderImage: founderPhoto as string,

  /** Public contact email shown in the footer. */
  contactEmail: '',

  /** Legal pages. Use full URLs or paths like './privacy.html' once the documents exist. */
  legal: {
    privacy: '',
    terms: '',
    refund: '',
    riskDisclosure: '',
  },


  /**
   * Analytics. Set provider to 'gtag' (Google Analytics 4), 'plausible', or 'dataLayer'
   * (Google Tag Manager) AFTER you've added that provider's script tag to index.html.
   * While 'none', events are only logged to the browser console in development.
   */
  analytics: {
    provider: 'none' as 'none' | 'gtag' | 'plausible' | 'dataLayer',
  },
}

export type PlanId = 'roadmap' | 'waitlist' | 'community' | 'innerCircle'

/** Where each button goes ('' = not set up yet → the button shows a setup note instead of a broken link). */
export const destination = (plan: PlanId) =>
  (plan === 'roadmap' ? './roadmap.html' : plan === 'waitlist' ? './waitlist.html' : siteConfig.checkout[plan]).trim()

/** True once the ThriveCart roadmap embed is configured. */
export const isRoadmapConnected = () => siteConfig.forms.kitFormId.trim() !== '' || siteConfig.forms.roadmap.trim() !== '' || siteConfig.thrivecart.embeddable.trim() !== ''

export const isConfigured = (plan: PlanId) => destination(plan) !== ''
