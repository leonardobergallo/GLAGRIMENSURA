"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const categorias = [
  { id: 'todos', label: 'Todos' },
  { id: 'urbano', label: 'Urbano' },
  { id: 'rural', label: 'Rural' },
  { id: 'gps', label: 'GPS/Topografía' },
  { id: 'equipos', label: 'Equipos' },
]

const galeria = [
  {
    id: 1,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BXUvlOJjjMNUJnbVcvt1pu7s4N4ivS.png",
    alt: "Mensura urbana con teodolito - La Plata 2024",
    categoria: 'urbano',
    etiqueta: 'Mensura Urbana - La Plata 2024'
  },
  {
    id: 2,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EqYOI4D9jyhpfP45HDm8iYk9fVcvcF.png",
    alt: "Trabajo de campo con estación total",
    categoria: 'gps',
    etiqueta: 'Relevamiento Topográfico 2024'
  },
  {
    id: 3,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IhW5FCzcgv6tLF2olSE9lrIElB95Vu.png",
    alt: "GPS profesional en trabajo de campo",
    categoria: 'gps',
    etiqueta: 'GPS RTK - Precisión cm'
  },
  {
    id: 4,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-T3eyRRELOHqFKa5krvdEIdCNDz41mx.png",
    alt: "Mensura rural con GPS",
    categoria: 'rural',
    etiqueta: 'Mensura Rural 2024'
  },
  {
    id: 5,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0rrkL2idywkPXytSLjLb1ITR6DZqxH.png",
    alt: "Estación total en medición topográfica",
    categoria: 'equipos',
    etiqueta: 'Estación Total Profesional'
  },
  {
    id: 6,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2hTsIx7AElBsaVUM34g2prHJ11VtLN.png",
    alt: "GL Agrimensura - Servicios profesionales",
    categoria: 'equipos',
    etiqueta: 'GL Agrimensura'
  },
]

export function Galeria() {
  const [categoriaActiva, setCategoriaActiva] = useState('todos')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const imagenesFiltradas = categoriaActiva === 'todos' 
    ? galeria 
    : galeria.filter(img => img.categoria === categoriaActiva)

  // Reset index when category changes
  useEffect(() => {
    setCurrentIndex(0)
  }, [categoriaActiva])

  const nextSlide = useCallback(() => {
    if (imagenesFiltradas.length === 0) return
    setCurrentIndex((prev) => (prev + 1) % imagenesFiltradas.length)
  }, [imagenesFiltradas.length])

  const prevSlide = useCallback(() => {
    if (imagenesFiltradas.length === 0) return
    setCurrentIndex((prev) => (prev - 1 + imagenesFiltradas.length) % imagenesFiltradas.length)
  }, [imagenesFiltradas.length])

  // Autoplay
  useEffect(() => {
    if (!isAutoPlaying || imagenesFiltradas.length === 0) return
    const interval = setInterval(nextSlide, 4000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide, imagenesFiltradas.length])

  // Get visible indices for carousel (show 3 on desktop)
  const getVisibleIndices = () => {
    if (imagenesFiltradas.length === 0) return []
    if (imagenesFiltradas.length === 1) return [0]
    if (imagenesFiltradas.length === 2) return [0, 1]
    
    const indices = []
    for (let i = -1; i <= 1; i++) {
      indices.push((currentIndex + i + imagenesFiltradas.length) % imagenesFiltradas.length)
    }
    return indices
  }

  const visibleIndices = getVisibleIndices()

  return (
    <section id="galeria" className="py-24 bg-gray-900 overflow-hidden">
      {/* Patrón de curvas de nivel sutil */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1000 400" preserveAspectRatio="xMidYMid slice">
          <path d="M0,100 C200,50 400,150 600,100 S800,50 1000,100" fill="none" stroke="white" strokeWidth="1"/>
          <path d="M0,200 C200,150 400,250 600,200 S800,150 1000,200" fill="none" stroke="white" strokeWidth="1"/>
          <path d="M0,300 C200,250 400,350 600,300 S800,250 1000,300" fill="none" stroke="white" strokeWidth="1"/>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Nuestros Trabajos</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Proyectos realizados con precisión y profesionalismo
          </p>
        </div>

        {/* Filtros por categoría */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categorias.map(cat => (
            <Button
              key={cat.id}
              variant={categoriaActiva === cat.id ? "default" : "outline"}
              onClick={() => setCategoriaActiva(cat.id)}
              className={`rounded-full transition-all ${
                categoriaActiva === cat.id 
                  ? 'bg-amber-500 hover:bg-amber-600 text-black border-amber-500' 
                  : 'bg-transparent border-gray-600 text-gray-300 hover:border-amber-500 hover:text-amber-500'
              }`}
            >
              {cat.label}
            </Button>
          ))}
        </div>

        {/* Carrusel */}
        {imagenesFiltradas.length > 0 ? (
          <div 
            className="relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Botón anterior */}
            <button
              onClick={prevSlide}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-amber-500 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all"
              aria-label="Anterior"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Contenedor del carrusel - más ancho */}
            <div className="flex gap-4 md:gap-6 justify-center items-center px-16 md:px-20">
              {visibleIndices.map((index, i) => {
                const item = imagenesFiltradas[index]
                const isCenter = visibleIndices.length === 1 || i === 1 || (visibleIndices.length === 2 && i === 0)
                
                return (
                  <div
                    key={`${item.id}-${i}`}
                    className={`relative overflow-hidden rounded-xl transition-all duration-500 ${
                      isCenter 
                        ? 'w-full md:w-[550px] lg:w-[650px] h-[280px] md:h-[400px] lg:h-[450px] scale-100 opacity-100' 
                        : 'hidden md:block w-[280px] lg:w-[320px] h-[320px] lg:h-[380px] scale-95 opacity-50'
                    }`}
                  >
                    <Image
                      src={item.src || "/placeholder.svg"}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      priority={isCenter}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                      <div className="absolute bottom-4 left-4 right-4">
                        <Badge 
                          className={`bg-amber-500 text-black font-semibold ${
                            isCenter ? 'text-sm px-3 py-1' : 'text-xs'
                          }`}
                        >
                          {item.etiqueta}
                        </Badge>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Botón siguiente */}
            <button
              onClick={nextSlide}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-amber-500 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all"
              aria-label="Siguiente"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400">No hay imágenes en esta categoría</p>
          </div>
        )}

        {/* Indicadores */}
        {imagenesFiltradas.length > 0 && (
          <div className="flex justify-center gap-2 mt-8">
            {imagenesFiltradas.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-amber-500 w-8' 
                    : 'bg-white/30 hover:bg-white/50 w-2'
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
