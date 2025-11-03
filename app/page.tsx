import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Servicios } from "@/components/servicios"
import { Galeria } from "@/components/galeria"
import { Sobre } from "@/components/sobre"
import { Contacto } from "@/components/contacto"
import { Footer } from "@/components/footer"

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
