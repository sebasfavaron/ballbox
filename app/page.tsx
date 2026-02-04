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
        <section className="relative w-full bg-black">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto max-h-[80vh] object-cover"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
        </section>
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
