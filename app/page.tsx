import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ValueProposition } from "@/components/value-proposition"
import { Benefits } from "@/components/benefits"
import { HowItWorks } from "@/components/how-it-works"
import { Advertising } from "@/components/advertising"
import { Stats } from "@/components/stats"
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <ValueProposition />
        <Benefits />
        <HowItWorks />
        <Advertising />
        <Stats />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </main>
  )
}
