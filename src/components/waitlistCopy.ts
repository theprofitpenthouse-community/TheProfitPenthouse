import { siteConfig } from '../config'

/** FAQ entries about the waitlist itself. Shown first in the FAQ on waitlist.html. */
export const WAITLIST_FAQS: [string, string][] = [
  [
    'When does The Profit Penthouse Community open?',
    `${siteConfig.waitlist.opening ? `${siteConfig.waitlist.opening}.` : 'Soon.'} Join the waitlist and you’ll get an email as soon as the doors open, with the link to join.`,
  ],
  [
    'Does joining the waitlist cost anything?',
    'No. The waitlist is free, and joining it doesn’t sign you up for a membership. When the Community opens, you’ll get all the membership details and decide then whether to join.',
  ],
]
