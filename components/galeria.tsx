"use client"

import Image from "next/image"

const galeria = [
  {
    id: 1,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BXUvlOJjjMNUJnbVcvt1pu7s4N4ivS.png",
    alt: "Teodolito en medición de carretera - La Plata",
  },
  {
    id: 2,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EqYOI4D9jyhpfP45HDm8iYk9fVcvcF.png",
    alt: "Gabriel Lucero con teodolito en campo",
  },
  {
    id: 3,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IhW5FCzcgv6tLF2olSE9lrIElB95Vu.png",
    alt: "Medidor GPS profesional en trabajo de campo",
  },
  {
    id: 4,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-T3eyRRELOHqFKa5krvdEIdCNDz41mx.png",
    alt: "Equipo de agrimensura con GPS en campo",
  },
  {
    id: 5,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0rrkL2idywkPXytSLjLb1ITR6DZqxH.png",
    alt: "Teodolito profesional en medición topográfica",
  },
  {
    id: 6,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2hTsIx7AElBsaVUM34g2prHJ11VtLN.png",
    alt: "Tarjeta profesional GL Agrimensura",
  },
]

export function Galeria() {
  return (
    <section id="galeria" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Galería de Trabajos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proyectos realizados con precisión y profesionalismo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {galeria.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl border-2 border-primary/20 hover:border-primary/50 transition-all h-64"
            >
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
