"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowRight, Phone, Calendar, MessageCircle, Megaphone, MapPin } from "lucide-react"
import { useState } from "react"

const WHATSAPP_ARGENTINA = "5491112345678"
const WHATSAPP_CHILE = "56912345678"

export function CTA() {
  const [country, setCountry] = useState<string>("")
  const [contactType, setContactType] = useState<string>("")

  const handleWhatsAppClick = (number: string, message: string) => {
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${number}?text=${encodedMessage}`, "_blank")
  }

  return (
    <section id="contacto" className="py-24 bg-card">
      <div className="container px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Potenciá las ventas de tu club <span className="text-primary">sin perder tu negocio</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Elegí cómo preferís que te contactemos. Estamos en Argentina y Chile listos para ayudarte.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-background border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Dejanos tus datos
              </h3>
              <form className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre completo</Label>
                    <Input id="name" placeholder="Tu nombre" className="bg-card" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="club">Nombre del club</Label>
                    <Input id="club" placeholder="Club de Pádel..." className="bg-card" />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="tu@email.com" className="bg-card" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input id="phone" type="tel" placeholder="+54 9 11..." className="bg-card" />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label>País</Label>
                    <Select value={country} onValueChange={setCountry}>
                      <SelectTrigger className="bg-card">
                        <SelectValue placeholder="Seleccioná tu país" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="argentina">Argentina</SelectItem>
                        <SelectItem value="chile">Chile</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Tipo de contacto</Label>
                    <Select value={contactType} onValueChange={setContactType}>
                      <SelectTrigger className="bg-card">
                        <SelectValue placeholder="Cómo te contactamos" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="call">Quiero que me llamen</SelectItem>
                        <SelectItem value="demo">Agendar una demo</SelectItem>
                        <SelectItem value="info">Solo quiero información</SelectItem>
                        <SelectItem value="publicidad">Soy una marca de publicidad</SelectItem>
                        <SelectItem value="distribuidor">Quiero vender Ballbox en mi ciudad</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje (opcional)</Label>
                  <Textarea
                    id="message"
                    placeholder="Contanos sobre tu club, cantidad de canchas, etc."
                    rows={3}
                    className="bg-card"
                  />
                </div>

                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
                  Enviar solicitud
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="p-8 rounded-2xl bg-background border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  Contacto directo por WhatsApp
                </h3>

                <div className="space-y-4">
                  <button
                    type="button"
                    onClick={() =>
                      handleWhatsAppClick(
                        WHATSAPP_ARGENTINA,
                        "Hola! Me interesa conocer más sobre Ballbox para mi club en Argentina."
                      )
                    }
                    className="w-full flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors text-left"
                  >
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-primary">AR</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-foreground">Argentina</p>
                      <p className="text-sm text-muted-foreground">
                        CABA, AMBA y próximamente Córdoba, Mendoza y Rosario
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-primary" />
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      handleWhatsAppClick(
                        WHATSAPP_CHILE,
                        "Hola! Me interesa conocer más sobre Ballbox para mi club en Chile."
                      )
                    }
                    className="w-full flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors text-left"
                  >
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-primary">CL</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-foreground">Chile</p>
                      <p className="text-sm text-muted-foreground">
                        Santiago de Chile y alrededores
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-primary" />
                  </button>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Agendá una demo en vivo
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Te mostramos cómo funciona la máquina, el sistema de gestión y cómo se ve la pantalla publicitaria en acción.
                    </p>
                    <Button
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                      onClick={() =>
                        handleWhatsAppClick(
                          WHATSAPP_ARGENTINA,
                          "Hola! Quiero agendar una demo para ver cómo funciona Ballbox."
                        )
                      }
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Agendar demo
                    </Button>
                  </div>
                </div>
              </div>

              {/* New CTAs */}
              <div className="grid gap-4">
                <button
                  type="button"
                  onClick={() =>
                    handleWhatsAppClick(
                      WHATSAPP_ARGENTINA,
                      "Hola! Soy una marca y me interesa publicitar en las pantallas de Ballbox."
                    )
                  }
                  className="w-full flex items-center gap-4 p-4 rounded-xl bg-background border border-border hover:border-primary/30 transition-colors text-left"
                >
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Megaphone className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground text-sm">Soy una marca de publicidad</p>
                    <p className="text-xs text-muted-foreground">Quiero publicitar mi espacio en clubes</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-primary" />
                </button>

                <button
                  type="button"
                  onClick={() =>
                    handleWhatsAppClick(
                      WHATSAPP_ARGENTINA,
                      "Hola! Me interesa ser distribuidor de Ballbox en mi ciudad."
                    )
                  }
                  className="w-full flex items-center gap-4 p-4 rounded-xl bg-background border border-border hover:border-primary/30 transition-colors text-left"
                >
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground text-sm">Quiero vender Ballbox en mi ciudad</p>
                    <p className="text-xs text-muted-foreground">Sé distribuidor en tu zona</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-primary" />
                </button>
              </div>

              <div className="p-4 rounded-xl bg-background/50 border border-border">
                <p className="text-sm text-muted-foreground text-center">
                  Respondemos en menos de 24 horas hábiles. Sin compromisos, sin costos ocultos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
