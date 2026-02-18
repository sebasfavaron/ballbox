import { MapPin, Mail, MessageCircle } from "lucide-react"
import Image from "next/image"

const WHATSAPP_ARGENTINA = "5491112345678"
const WHATSAPP_CHILE = "56912345678"

const footerLinks = {
  producto: [
    { name: "Cómo funciona", href: "#como-funciona" },
    { name: "Beneficios", href: "#beneficios" },
    { name: "Publicidad", href: "#publicidad" },
    { name: "FAQ", href: "#faq" },
  ],
  empresa: [
    { name: "Sobre nosotros", href: "#" },
    { name: "Trabaja con nosotros", href: "#" },
    { name: "Contacto", href: "#contacto" },
  ],
  legal: [
    { name: "Política de privacidad", href: "#" },
    { name: "Términos y condiciones", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/image.png"
                alt="Ballbox Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="font-bold text-xl text-primary">Ballbox</span>
            </div>
            <p className="text-sm text-primary font-medium mb-2">Juga Ahora, Juga Mejor</p>
            <p className="text-muted-foreground text-sm mb-6 max-w-sm leading-relaxed">
              Automatizamos la venta de pelotas de pádel en clubes deportivos. Sin inversión, sin gestión, con ingresos extra por publicidad.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Argentina</p>
                  <p className="text-sm text-muted-foreground">CABA y AMBA</p>
                  <p className="text-xs text-muted-foreground/70">Próximamente: Córdoba, Mendoza y Rosario</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Chile</p>
                  <p className="text-sm text-muted-foreground">Santiago de Chile</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Producto</h3>
            <ul className="space-y-2">
              {footerLinks.producto.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Empresa</h3>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Contacto</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_ARGENTINA}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp Argentina</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_CHILE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp Chile</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contacto@ballbox.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>contacto@ballbox.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Ballbox. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
