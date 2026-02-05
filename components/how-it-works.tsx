const steps = [
  {
    number: "01",
    title: "Instalamos la máquina",
    description: "Nuestro equipo se encarga de todo: ubicación óptima, instalación y puesta en marcha sin costo alguno para tu club.",
  },
  {
    number: "02",
    title: "Jugadores compran fácilmente",
    description: "Tus jugadores pueden comprar pelotas y accesorios de forma rápida con tarjeta, MercadoPago o efectivo, las 24 horas.",
  },
  {
    number: "03",
    title: "Publicidad genera ingresos",
    description: "La pantalla integrada muestra publicidad de marcas deportivas y locales, generando ingresos extra de hasta $50.000 ARS/mes.",
  },
  {
    number: "04",
    title: "Monitoreá todo desde tu celular",
    description: "Accedé a estadísticas de ventas, ingresos por publicidad y más desde nuestra app o portal web en tiempo real.",
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 bg-card">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
            Cómo funciona
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Un proceso simple en 4 pasos
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Desde la instalación hasta generar ingresos, nos encargamos de todo para que vos solo tengas que disfrutar de los beneficios.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="p-6 rounded-2xl bg-background border border-border h-full">
                <div className="text-5xl font-black text-primary mb-4 drop-shadow-[0_0_24px_rgba(196,214,0,0.4)]">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              {/* Connector Line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
