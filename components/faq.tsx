"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Cuánto cuesta la instalación de la máquina?",
    answer: "La instalación es completamente gratuita para el club. Nosotros asumimos toda la inversión inicial, incluyendo la máquina, la instalación y la puesta en marcha. El club no tiene ningún costo en pesos.",
  },
  {
    question: "¿Quién se encarga del mantenimiento y reposición de stock?",
    answer: "Nuestro equipo se encarga de todo. Realizamos visitas periódicas para reponer el stock de pelotas y accesorios, y ofrecemos soporte técnico 24/7 en caso de cualquier incidencia. El club no dedica tiempo a la gestión.",
  },
  {
    question: "¿Qué marcas de pelotas están disponibles?",
    answer: "Trabajamos con las mejores marcas del mercado: Head, Bullpadel, Nox, Wilson, Dunlop y más. También ofrecemos accesorios como overgrips, muñequeras y otros complementos.",
  },
  {
    question: "¿Cuánto cuestan las pelotas en la máquina?",
    answer: "Los precios varían según la marca, desde $3.500 ARS hasta $8.000 ARS aproximadamente. El precio es competitivo con el mercado y el club puede definir junto a nosotros la política de precios.",
  },
  {
    question: "¿Cómo funciona el sistema de publicidad?",
    answer: "La máquina incluye una pantalla HD que muestra publicidad de marcas deportivas y negocios locales. El club recibe una comisión mensual fija de aproximadamente $50.000 ARS por las impresiones publicitarias, sin tener que gestionar nada.",
  },
  {
    question: "¿Qué métodos de pago aceptan las máquinas?",
    answer: "Nuestras máquinas aceptan múltiples formas de pago: tarjeta de crédito/débito, pago contactless (NFC), MercadoPago, billeteras virtuales y efectivo. Facilitamos la compra a todos los jugadores.",
  },
  {
    question: "¿Cómo puedo ver las ventas y estadísticas de mi club?",
    answer: "Proporcionamos acceso a un portal web y una app móvil donde puedes consultar en tiempo real las ventas, ingresos por publicidad, productos más vendidos y otras métricas relevantes.",
  },
  {
    question: "¿Cuánto espacio necesita la máquina?",
    answer: "Nuestras máquinas tienen un diseño compacto de aproximadamente 180cm x 80cm x 70cm. Nuestro equipo te ayudará a encontrar la ubicación óptima en tu club para maximizar la visibilidad.",
  },
  {
    question: "¿Qué pasa si la máquina tiene una avería?",
    answer: "Ofrecemos soporte técnico 24/7. En caso de avería, nuestro equipo se desplaza en un plazo máximo de 24-48 horas para solucionar el problema sin ningún costo para el club.",
  },
  {
    question: "¿Puedo ser distribuidor de Ballbox en mi ciudad?",
    answer: "¡Sí! Si estás interesado en ser distribuidor de Ballbox en tu ciudad, contactanos por WhatsApp o completá el formulario indicando que querés ser distribuidor. Próximamente estaremos en Córdoba, Mendoza y Rosario.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-card">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
            Preguntas frecuentes
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Todo lo que necesitás saber
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Resolvemos las dudas más comunes sobre nuestro servicio de vending para clubes de pádel.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
