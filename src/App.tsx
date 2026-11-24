import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Intro, Problem } from './components/Story'
import { Pricing } from './components/Pricing'
import { Curriculum } from './components/Learn'
import { FAQ, FinalCTA, Footer, Founder } from './components/Closing'
import { Shell } from './components/Shell'

// One-page funnel: Attention → Problem → Solution → What you learn → The Community (waitlist) → Founder → FAQ → Join
// The free roadmap (roadmap.html) and the Community waitlist signup (waitlist.html) each have their own page.
export default function App() {
  return (
    <Shell>
      <Nav />
      <main id="main">
        <Hero />
        <Problem />
        <Intro />
        <Curriculum />
        <Pricing />
        <Founder />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </Shell>
  )
}
