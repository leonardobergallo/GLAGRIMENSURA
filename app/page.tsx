import { Metadata } from "next"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Servicios } from "@/components/servicios"
import { Galeria } from "@/components/galeria"
import { Sobre } from "@/components/sobre"
import { Contacto } from "@/components/contacto"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "GL Agrimensura | Agrimensor La Plata - Ing. Gabriel Lucero",
  description: "Servicios profesionales de agrimensura en La Plata: mensuras urbanas y rurales, usucapión, subdivisión, propiedad horizontal, topografía GPS y amojonamientos. Tecnología de última generación.",
  keywords: [
    'agrimensor la plata',
    'mensuras la plata',
    'usucapion la plata',
    'subdivision terrenos',
    'propiedad horizontal',
    'topografia gps',
    'amojonamientos',
    'gabriel lucero agrimensor',
    'agrimensura la plata'
  ],
  openGraph: {
    title: "GL Agrimensura | Agrimensor La Plata",
    description: "Servicios profesionales de agrimensura con tecnología GPS de última generación",
    type: "website",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Servicios />
      <Galeria />
      <Sobre />
      <Contacto />
      <Footer />
    </main>
  )
}
