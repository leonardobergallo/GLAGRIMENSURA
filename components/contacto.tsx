"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"
import { useState } from "react"

export function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Integrar con servicio de envío de emails en el futuro
    console.log("Formulario enviado:", formData)
    alert("Gracias por tu consulta. Nos pondremos en contacto pronto.")
    setFormData({ nombre: "", email: "", telefono: "", mensaje: "" })
  }

  return (
    <section id="contacto" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Contacto</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ponte en contacto para consultas y presupuestos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card className="border-primary/20 hover:border-primary/50 transition-all">
              <CardContent className="pt-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Teléfono</h3>
                  <a
                    href="tel:+542212230052"
                    className="text-accent hover:text-accent/80 transition-colors font-medium"
                  >
                    221-2230052
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/50 transition-all">
              <CardContent className="pt-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">WhatsApp</h3>
                  <a
                    href="https://wa.me/542212230052"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80 transition-colors font-medium"
                  >
                    Enviar mensaje
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/50 transition-all">
              <CardContent className="pt-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Email</h3>
                  <a
                    href="mailto:agrimensorglucero@gmail.com"
                    className="text-accent hover:text-accent/80 transition-colors font-medium text-sm"
                  >
                    agrimensorglucero@gmail.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/50 transition-all">
              <CardContent className="pt-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Ubicación</h3>
                  <p className="text-muted-foreground text-sm">La Plata, Buenos Aires</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-secondary/30 p-8 rounded-2xl border-2 border-primary/20"
          >
            <div>
              <label className="block text-sm font-medium text-primary mb-2">Nombre</label>
              <input
                type="text"
                required
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-primary mb-2">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-primary mb-2">Teléfono</label>
              <input
                type="tel"
                value={formData.telefono}
                onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="221-XXXXXXX"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-primary mb-2">Mensaje</label>
              <textarea
                required
                value={formData.mensaje}
                onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                rows={4}
                placeholder="Cuéntanos sobre tu proyecto..."
              />
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
              Enviar Consulta
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
