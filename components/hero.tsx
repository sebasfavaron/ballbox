"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, MapPin } from "lucide-react"

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(196,214,0,0.08)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(196,214,0,0.05)_0%,transparent_50%)]" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 w-fit">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                Argentina y Chile
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-balance leading-[1.1] mb-6">
              Potenciá tus ventas de pelotas.{" "}
              <span className="text-primary">Sin perder tu negocio.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-4 leading-relaxed">
              Instalamos máquinas vending de pelotas de pádel en tu club.{" "}
              <strong className="text-foreground">
                Vendé múltiples marcas, generá ingresos por publicidad y olvidate del mantenimiento.
              </strong>{" "}
              Nosotros nos encargamos de todo.
            </p>

            <p className="text-base font-semibold text-primary mb-8">
              No reemplazamos tu venta de pelotas, la multiplicamos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="text-base px-8 py-6 rounded-full bg-primary text-primary-foreground hover:bg-primary/90" onClick={scrollToContact}>
                Quiero que me contacten
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 py-6 rounded-full border-primary/30 text-foreground hover:bg-primary/10 bg-transparent" onClick={scrollToContact}>
                <Play className="mr-2 h-5 w-5" />
                Agendar una demo
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-foreground">+50</p>
                <p className="text-xs text-muted-foreground">Clubes activos</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-foreground">24/7</p>
                <p className="text-xs text-muted-foreground">Disponibilidad</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-foreground">$0</p>
                <p className="text-xs text-muted-foreground">Inversión inicial</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-foreground">+40%</p>
                <p className="text-xs text-muted-foreground">Más ventas</p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-2">Presentes en</p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium text-foreground">
                <span>CABA</span>
                <span className="text-muted-foreground/40">|</span>
                <span>AMBA</span>
                <span className="text-muted-foreground/40">|</span>
                <span>Santiago de Chile</span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Próximamente en Córdoba, Mendoza y Rosario
              </p>
            </div>
          </div>

          {/* Hero Video */}
          <div className="hidden lg:flex justify-center self-start">
            <div className="relative">
              <div className="aspect-[9/16] w-[320px] xl:w-[360px] rounded-3xl overflow-hidden bg-black shadow-2xl">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/hero.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
