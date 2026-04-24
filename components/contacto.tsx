"use client"

import type React from "react"
import { useState } from "react"
import { Facebook, Instagram, MapPin, MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const instagramUrl = "https://www.instagram.com/glucero_agrimensor/"
const facebookUrl = "https://www.facebook.com/agrimensor.gabriel.lucero"

export function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Formulario enviado:", formData)
    alert("Gracias por tu consulta. Nos pondremos en contacto pronto.")
    setFormData({ nombre: "", email: "", telefono: "", mensaje: "" })
  }

  return (
    <section id="contacto" className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-5 text-5xl font-extrabold tracking-tight text-primary md:text-6xl">
            Contacto
          </h2>
          <p className="mx-auto max-w-3xl text-xl font-medium leading-relaxed text-muted-foreground md:text-2xl">
            Consultas, presupuestos y asesoramientos personalizados.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-7">
            <Card className="border-2 border-primary/20 shadow-md transition-all hover:border-amber-500 hover:shadow-xl">
              <CardContent className="flex items-start gap-5 p-7">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg bg-amber-100">
                  <Phone className="text-amber-600" size={34} />
                </div>
                <div>
                  <h3 className="mb-2 text-2xl font-extrabold text-primary">
                    WhatsApp
                  </h3>
                  <a
                    href="https://wa.me/5492212230052"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-extrabold text-amber-600 transition-colors hover:text-amber-700"
                  >
                    +54 9 221 223-0052
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 shadow-md transition-all hover:border-amber-500 hover:shadow-xl">
              <CardContent className="flex items-start gap-5 p-7">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg bg-amber-100">
                  <Instagram className="text-amber-600" size={34} />
                </div>
                <div>
                  <h3 className="mb-2 text-2xl font-extrabold text-primary">
                    Instagram
                  </h3>
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-extrabold text-amber-600 transition-colors hover:text-amber-700"
                  >
                    glucero_agrimensor
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 shadow-md transition-all hover:border-amber-500 hover:shadow-xl">
              <CardContent className="flex items-start gap-5 p-7">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg bg-amber-100">
                  <Facebook className="text-amber-600" size={34} />
                </div>
                <div>
                  <h3 className="mb-2 text-2xl font-extrabold text-primary">
                    Facebook
                  </h3>
                  <a
                    href={facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-extrabold text-amber-600 transition-colors hover:text-amber-700"
                  >
                    agrimensor Gabriel Lucero
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 shadow-md transition-all hover:border-amber-500 hover:shadow-xl">
              <CardContent className="flex items-start gap-5 p-7">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg bg-amber-100">
                  <MapPin className="text-amber-600" size={34} />
                </div>
                <div>
                  <h3 className="mb-2 text-2xl font-extrabold text-primary">
                    Zona de atención
                  </h3>
                  <p className="text-xl font-semibold text-muted-foreground">
                    La Plata y Provincia de Buenos Aires
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-md border-2 border-primary/20 bg-secondary/30 p-8 shadow-lg md:p-10"
          >
            <div>
              <label className="mb-2 block text-lg font-extrabold text-primary">
                Nombre
              </label>
              <input
                type="text"
                required
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                className="w-full rounded-lg border border-border px-5 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label className="mb-2 block text-lg font-extrabold text-primary">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-lg border border-border px-5 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label className="mb-2 block text-lg font-extrabold text-primary">
                Teléfono
              </label>
              <input
                type="tel"
                value={formData.telefono}
                onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                className="w-full rounded-lg border border-border px-5 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="+54 9 221 223-0052"
              />
            </div>

            <div>
              <label className="mb-2 block text-lg font-extrabold text-primary">
                Mensaje
              </label>
              <textarea
                required
                value={formData.mensaje}
                onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                className="w-full resize-none rounded-lg border border-border px-5 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                rows={5}
                placeholder="Contanos qué servicio necesitás..."
              />
            </div>

            <Button type="submit" className="w-full bg-primary py-7 text-xl font-extrabold hover:bg-primary/90">
              <MessageCircle className="mr-2 h-6 w-6" />
              Enviar consulta
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
