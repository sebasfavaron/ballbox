import { Building2, Users, CheckCircle2, XCircle } from "lucide-react"

const myths = [
  {
    myth: "Voy a perder mi negocio de venta de pelotas",
    reality: "No reemplazamos tu venta, la potenciamos. Vendés más marcas y generás ingresos adicionales por publicidad.",
  },
  {
    myth: "Va a ser un trabajo extra para mi equipo",
    reality: "Nosotros nos encargamos de todo: mantenimiento, reposición de stock y servicio técnico. Tu equipo no hace nada.",
  },
  {
    myth: "Tengo que invertir dinero",
    reality: "Inversión inicial: $0 pesos. Instalamos la máquina sin costo. Vos solo ponés el espacio.",
  },
]

const clubBenefits = [
  "Seguís vendiendo pelotas, pero con más marcas y mejor stock",
  "Ingresos extra por publicidad en pantalla integrada",
  "Cero horas de tu equipo dedicadas a gestión de pelotas",
  "Mantenimiento y reposición 100% a cargo nuestro",
  "Sin inversión inicial ni costos ocultos",
  "Disponibilidad 24/7 para tus socios",
  "Reportes de ventas y analytics en tiempo real",
]

const playerBenefits = [
  "Compra rápida en menos de 30 segundos",
  "Variedad de marcas premium disponibles",
  "Pelotas disponibles 24/7, incluso de madrugada",
  "Pago con tarjeta, billetera virtual o efectivo",
  "Sin esperar en recepción cuando hay cola",
  "Pelotas siempre en stock garantizado",
]

export function Benefits() {
  return (
    <section id="beneficios" className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Entendemos las dudas
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Por eso queremos ser claros desde el inicio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {myths.map((item) => (
            <div
              key={item.myth}
              className="p-6 rounded-2xl bg-card border border-border"
            >
              <div className="flex items-start gap-3 mb-4">
                <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                <p className="font-medium text-foreground line-through decoration-destructive/50">
                  {item.myth}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground text-sm">{item.reality}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-primary/5 border border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Lo que tu club gana</h3>
                <p className="text-sm text-muted-foreground">Potenciá tu negocio actual</p>
              </div>
            </div>
            <ul className="space-y-4">
              {clubBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-2xl bg-card border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                <Users className="h-6 w-6 text-muted-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Lo que tus jugadores ganan</h3>
                <p className="text-sm text-muted-foreground">La comodidad que merecen</p>
              </div>
            </div>
            <ul className="space-y-4">
              {playerBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
