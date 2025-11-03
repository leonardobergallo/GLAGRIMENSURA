"use client"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">GL</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-primary">GL_AGRIMENSURA</h1>
            <p className="text-xs text-muted-foreground">Gabriel Lucero</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("servicios")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Servicios
          </button>
          <button
            onClick={() => scrollToSection("galeria")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Galería
          </button>
          <button
            onClick={() => scrollToSection("sobre")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Sobre Mí
          </button>
          <button
            onClick={() => scrollToSection("contacto")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contacto
          </button>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+542212230052"
            className="flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
          >
            <Phone size={18} />
            <span>221-2230052</span>
          </a>
          <Button onClick={() => scrollToSection("contacto")} className="bg-primary hover:bg-primary/90">
            Contactar
          </Button>
        </div>

        <div className="md:hidden">
          <Button onClick={() => scrollToSection("contacto")} size="sm">
            Contactar
          </Button>
        </div>
      </div>
    </header>
  )
}
