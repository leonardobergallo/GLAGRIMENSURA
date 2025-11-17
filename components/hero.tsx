"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative pt-16 pb-24 overflow-hidden">
      {/* Fondo moderno con patrones de agrimensura */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-amber-50/40">
        {/* Patrón de cuadrícula sutil (como planos técnicos) */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #1e293b 1px, transparent 1px),
              linear-gradient(to bottom, #1e293b 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Líneas de medición decorativas */}
        <div className="absolute top-20 left-10 w-32 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent rotate-12" />
        <div className="absolute top-40 right-20 w-24 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent -rotate-12" />
        <div className="absolute bottom-32 left-1/4 w-28 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent rotate-45" />
        
        {/* Círculos decorativos (como puntos de referencia) */}
        <div className="absolute top-32 right-1/3 w-2 h-2 rounded-full bg-primary/10" />
        <div className="absolute bottom-40 left-1/3 w-3 h-3 rounded-full bg-accent/10" />
        <div className="absolute top-1/2 right-10 w-1.5 h-1.5 rounded-full bg-primary/15" />
        
        {/* Formas geométricas modernas */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block bg-gradient-to-r from-primary/10 to-accent/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/20">
            Precisión en cada medida
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
            Soluciones en <span className="text-accent bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">Agrimensura</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Servicios profesionales de mensuras, topografía y relevamientos catastrales con equipamiento de última
            generación y precisión técnica garantizada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all"
              onClick={() => scrollToSection("contacto")}
            >
              Solicitar Presupuesto
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 hover:bg-accent/10 hover:border-accent transition-all"
              onClick={() => scrollToSection("servicios")}
            >
              Ver Servicios
            </Button>
          </div>
        </div>

        <div className="relative w-full max-w-md mx-auto">
          {/* Contenedor con efecto de profundidad */}
          <div className="relative rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl bg-white/50 backdrop-blur-sm">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pJvQ99Hx2xzVL7L2Cw7hQYiqO6VRpT.png"
              alt="Ing. Gabriel Lucero con equipo de topografía"
              width={400}
              height={500}
              className="w-full h-auto object-contain"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
          </div>
          
          {/* Elementos decorativos alrededor de la imagen */}
          <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-primary/20 rounded-lg rotate-12 opacity-30" />
          <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-accent/20 rounded-lg -rotate-12 opacity-30" />
        </div>
      </div>
    </section>
  )
}
