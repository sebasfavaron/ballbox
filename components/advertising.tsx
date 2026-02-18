"use client"

import { Button } from "@/components/ui/button"
import { BarChart3, Repeat, Target, DollarSign, ArrowRight } from "lucide-react"

const adFeatures = [
  {
    icon: Target,
    title: "Audiencia segmentada",
    description: "Publicidad dirigida a jugadores de pádel, el público ideal para marcas deportivas.",
  },
  {
    icon: Repeat,
    title: "Rotación inteligente",
    description: "Sistema de rotación automática de anuncios para máxima visibilidad de cada marca.",
  },
  {
    icon: BarChart3,
    title: "Estadísticas detalladas",
    description: "Informes completos de impresiones, horarios de mayor impacto y rendimiento.",
  },
  {
    icon: DollarSign,
    title: "Ingresos garantizados",
    description: "Comisión mensual fija por la publicidad mostrada en la pantalla de tu club.",
  },
]

export function Advertising() {
  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="publicidad" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Pantalla publicitaria
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Monetizá el espacio de tu club con publicidad inteligente
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Cada máquina Ballbox incluye una pantalla digital de alta definición que muestra
              publicidad de marcas deportivas, negocios locales y patrocinadores. Tu club recibe
              una comisión mensual sin hacer nada.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {adFeatures.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20 mb-8">
              <h3 className="font-bold text-foreground mb-2">Soy una marca y quiero publicitar</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Si tenés una marca deportiva, negocio local o querés patrocinar en clubes de pádel, contactanos para conocer nuestros espacios publicitarios.
              </p>
              <Button 
                variant="outline" 
                className="bg-transparent border-primary/30 text-foreground hover:bg-primary/10"
                onClick={scrollToContact}
              >
                Quiero publicitar mi marca
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90" onClick={scrollToContact}>
              Solicitar información
            </Button>
          </div>

          {/* Visual Representation */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-card overflow-hidden border border-border">
              {/* Machine Preview */}
              <div className="h-full flex items-center justify-center p-8">
                <div className="w-full max-w-sm bg-background rounded-xl border border-border p-6 shadow-lg">
                  {/* Screen Header */}
                  <div className="bg-primary rounded-lg p-4 mb-4">
                    <div className="text-center">
                      <p className="text-primary-foreground text-xs uppercase tracking-wider mb-1">
                        Espacio publicitario
                      </p>
                      <p className="text-primary-foreground font-bold text-lg">
                        Tu marca aquí
                      </p>
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-card rounded-lg p-3 text-center border border-border">
                      <p className="text-2xl font-bold text-foreground">500+</p>
                      <p className="text-xs text-muted-foreground">Impresiones/día</p>
                    </div>
                    <div className="bg-card rounded-lg p-3 text-center border border-border">
                      <p className="text-2xl font-bold text-foreground">15s</p>
                      <p className="text-xs text-muted-foreground">Por anuncio</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              +$50.000 ARS/mes extra
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
