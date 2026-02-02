const stats = [
  {
    value: "+50",
    label: "Clubes activos",
    description: "confían en Ballbox",
  },
  {
    value: "12.000+",
    label: "Pelotas vendidas",
    description: "cada mes",
  },
  {
    value: "+35%",
    label: "Incremento",
    description: "en ingresos de clubes",
  },
  {
    value: "98%",
    label: "Satisfacción",
    description: "de clubes y jugadores",
  },
]

const testimonials = [
  {
    quote: "Desde que instalamos Ballbox, nuestros socios están encantados. Ya no tenemos que preocuparnos por el stock de pelotas.",
    author: "Carlos Martínez",
    role: "Director, Club Pádel Palermo",
  },
  {
    quote: "Los ingresos por publicidad superaron nuestras expectativas. Es dinero que entra sin hacer nada.",
    author: "Laura García",
    role: "Gerente, Pádel Indoor Belgrano",
  },
  {
    quote: "La instalación fue rapidísima y el soporte técnico es excelente. Muy recomendable.",
    author: "Miguel Ángel Ruiz",
    role: "Propietario, Pádel Center Santiago",
  },
]

export function Stats() {
  return (
    <section className="py-24 bg-primary">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-primary-foreground/70 uppercase tracking-wider mb-4">
            Resultados reales
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance text-primary-foreground">
            Números que hablan por sí solos
          </h2>
          <p className="text-lg text-primary-foreground/80 leading-relaxed">
            Clubes de Argentina y Chile ya disfrutan de los beneficios de Ballbox.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl md:text-5xl font-bold mb-2 text-primary-foreground">{stat.value}</p>
              <p className="text-lg font-semibold text-primary-foreground">{stat.label}</p>
              <p className="text-sm text-primary-foreground/70">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm"
            >
              <p className="text-primary-foreground/90 mb-4 italic leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </p>
              <div>
                <p className="font-semibold text-primary-foreground">{testimonial.author}</p>
                <p className="text-sm text-primary-foreground/70">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
