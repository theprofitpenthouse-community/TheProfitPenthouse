import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Intro, Problem } from './components/Story'
import { Pricing } from './components/Pricing'
import { Curriculum } from './components/Learn'
import { FAQ, FinalCTA, Footer, Founder } from './components/Closing'
import { Shell } from './components/Shell'
import { Roadmap } from './components/Roadmap'

// One-page funnel: Attention → Problem → Free roadmap → Solution → What you learn → The Profit Penthouse Community ($19) → Founder → FAQ → Join
export default function App() {
  return (
    <Shell>
      <Nav />
      <main id="main">
        <Hero />
        <Problem />
        <Roadmap />
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
