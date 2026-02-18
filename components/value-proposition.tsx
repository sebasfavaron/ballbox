import { Package, TrendingUp, Clock, ShieldCheck } from "lucide-react"

const features = [
  {
    icon: Package,
    title: "Múltiples marcas, más opciones",
    description: "Ofrecé a tus socios variedad de marcas premium. No perdés tu venta de pelotas, la ampliás con más opciones y mejor stock.",
  },
  {
    icon: TrendingUp,
    title: "Doble fuente de ingresos",
    description: "Generá revenue por la venta de pelotas + ingresos pasivos por publicidad en las pantallas integradas. Sin esfuerzo adicional.",
  },
  {
    icon: Clock,
    title: "Cero tiempo de gestión",
    description: "Nosotros nos encargamos del mantenimiento, reposición de stock y servicio técnico. Tu equipo se enfoca en lo importante.",
  },
  {
    icon: ShieldCheck,
    title: "Sin riesgo, sin inversión",
    description: "Instalación gratuita, sin costos ocultos. El club mantiene su modelo de negocio y suma una nueva línea de ingresos.",
  },
]

export function ValueProposition() {
  return (
    <section id="propuesta" className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            No reemplazamos tu negocio, <span className="text-primary">lo potenciamos</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Muchos clubes creen que perderán su venta de pelotas. La realidad es opuesta: 
            vendés más marcas, generás ingresos por publicidad y reducís horas de trabajo de tu equipo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-primary/10 border border-primary/20">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Lo que tu club gana con Ballbox
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">+40%</p>
              <p className="text-sm text-muted-foreground">Incremento promedio en venta de pelotas</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">0 hs</p>
              <p className="text-sm text-muted-foreground">Tiempo de tu equipo dedicado a gestión</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">24/7</p>
              <p className="text-sm text-muted-foreground">Disponibilidad para tus socios</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
