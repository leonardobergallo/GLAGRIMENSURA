"use client"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Fondo con imagen y overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=2070&auto=format&fit=crop')`,
        }}
      >
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      </div>
      
      {/* Patrón de curvas de nivel SVG */}
      <div className="absolute inset-0 opacity-20">
        <svg 
          className="w-full h-full" 
          viewBox="0 0 1000 1000" 
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="contourPattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              {/* Líneas de curvas de nivel topográficas */}
              <path d="M0,100 Q50,50 100,100 T200,100" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1"/>
              <path d="M0,120 Q50,70 100,120 T200,120" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8"/>
              <path d="M0,140 Q50,90 100,140 T200,140" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.6"/>
              <path d="M0,80 Q50,30 100,80 T200,80" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="0.9"/>
              <path d="M0,60 Q50,10 100,60 T200,60" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="0.7"/>
              {/* Curvas adicionales para más realismo */}
              <ellipse cx="100" cy="100" rx="40" ry="25" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5"/>
              <ellipse cx="100" cy="100" rx="60" ry="40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.4"/>
              <ellipse cx="100" cy="100" rx="80" ry="55" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contourPattern)" />
          
          {/* Curvas de nivel orgánicas adicionales */}
          <g opacity="0.3">
            <path d="M0,200 C200,150 400,250 600,200 S800,150 1000,200" fill="none" stroke="white" strokeWidth="1.5"/>
            <path d="M0,300 C150,250 350,350 500,300 S700,250 1000,300" fill="none" stroke="white" strokeWidth="1.2"/>
            <path d="M0,400 C250,350 450,450 650,400 S850,350 1000,400" fill="none" stroke="white" strokeWidth="1"/>
            <path d="M0,500 C200,450 400,550 600,500 S800,450 1000,500" fill="none" stroke="white" strokeWidth="1.5"/>
            <path d="M0,600 C180,550 380,650 580,600 S780,550 1000,600" fill="none" stroke="white" strokeWidth="1.2"/>
            <path d="M0,700 C220,650 420,750 620,700 S820,650 1000,700" fill="none" stroke="white" strokeWidth="1"/>
            <path d="M0,800 C200,750 400,850 600,800 S800,750 1000,800" fill="none" stroke="white" strokeWidth="0.8"/>
          </g>
        </svg>
      </div>

      {/* Contenido centrado */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-heading">
          Somos un estudio integral de{" "}
          <span className="text-amber-400">agrimensura</span>,{" "}
          <span className="text-amber-400">topografía</span> y{" "}
          <span className="text-amber-400">consultoría</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
          Con amplia experiencia en relevamientos catastrales y servicios topográficos en La Plata y zona de influencia.
        </p>
        
        <Button 
          size="lg" 
          className="bg-amber-500 hover:bg-amber-600 text-black font-bold text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-amber-500/25 transition-all"
          onClick={() => scrollToSection("servicios")}
        >
          Nuestros Servicios
        </Button>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection("servicios")}
          className="text-white/70 hover:text-white transition-colors"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  )
}
