"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const categorias = [
  { id: "todos", label: "Todos" },
  { id: "urbano", label: "Urbano" },
  { id: "rural", label: "Rural" },
  { id: "gps", label: "GPS/Topografía" },
  { id: "equipos", label: "Equipos" },
]

interface GalleryImage {
  id: number
  src: string
  alt: string
  categoria: string
  etiqueta: string
}

const galeriaInicial: GalleryImage[] = [
  {
    id: 0,
    src: "/sobre/agrimensura-ia.png",
    alt: "Equipamiento profesional de agrimensura en campo",
    categoria: "equipos",
    etiqueta: "Agrimensura Profesional",
  },
  {
    id: 1,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BXUvlOJjjMNUJnbVcvt1pu7s4N4ivS.png",
    alt: "Mensura urbana con teodolito - La Plata 2024",
    categoria: "urbano",
    etiqueta: "Mensura Urbana - La Plata 2024",
  },
  {
    id: 2,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EqYOI4D9jyhpfP45HDm8iYk9fVcvcF.png",
    alt: "Trabajo de campo con estación total",
    categoria: "gps",
    etiqueta: "Relevamiento Topográfico 2024",
  },
  {
    id: 3,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IhW5FCzcgv6tLF2olSE9lrIElB95Vu.png",
    alt: "GPS profesional en trabajo de campo",
    categoria: "gps",
    etiqueta: "GPS RTK - Precisión cm",
  },
  {
    id: 4,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-T3eyRRELOHqFKa5krvdEIdCNDz41mx.png",
    alt: "Mensura rural con GPS",
    categoria: "rural",
    etiqueta: "Mensura Rural 2024",
  },
  {
    id: 5,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0rrkL2idywkPXytSLjLb1ITR6DZqxH.png",
    alt: "Estación total en medición topográfica",
    categoria: "equipos",
    etiqueta: "Estación Total Profesional",
  },
]

export function Galeria() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [galeria, setGaleria] = useState<GalleryImage[]>(galeriaInicial)

  useEffect(() => {
    async function fetchGallery() {
      try {
        const response = await fetch("/api/gallery", { cache: "no-store" })
        if (!response.ok) return

        const data = await response.json()
        const items = data.items || []

        if (items.length > 0) {
          setGaleria(
            items.map((item: any) => ({
              id: item.id,
              src: item.thumbnailUrl || item.imageUrl,
              alt: item.title,
              categoria: item.category,
              etiqueta: item.title,
            }))
          )
        }
      } catch (error) {
        console.error("Error al cargar la galería principal:", error)
      }
    }

    fetchGallery()
  }, [])

  const imagenesFiltradas = useMemo(() => galeria, [galeria])

  useEffect(() => {
    setCurrentIndex(0)
  }, [galeria])

  const nextSlide = useCallback(() => {
    if (imagenesFiltradas.length === 0) return
    setCurrentIndex((prev) => (prev + 1) % imagenesFiltradas.length)
  }, [imagenesFiltradas.length])

  const prevSlide = useCallback(() => {
    if (imagenesFiltradas.length === 0) return
    setCurrentIndex(
      (prev) => (prev - 1 + imagenesFiltradas.length) % imagenesFiltradas.length
    )
  }, [imagenesFiltradas.length])

  useEffect(() => {
    if (!isAutoPlaying || imagenesFiltradas.length === 0) return
    const interval = setInterval(nextSlide, 4000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide, imagenesFiltradas.length])

  const getVisibleIndices = () => {
    if (imagenesFiltradas.length === 0) return []
    if (imagenesFiltradas.length === 1) return [0]
    if (imagenesFiltradas.length === 2) return [0, 1]

    const indices = []
    for (let i = -2; i <= 2; i++) {
      indices.push((currentIndex + i + imagenesFiltradas.length) % imagenesFiltradas.length)
    }
    return indices
  }

  const visibleIndices = getVisibleIndices()

  return (
    <section id="galeria" className="relative overflow-hidden bg-gray-900 py-20">
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 1000 400" preserveAspectRatio="xMidYMid slice">
          <path d="M0,100 C200,50 400,150 600,100 S800,50 1000,100" fill="none" stroke="white" strokeWidth="1.5" />
          <path d="M0,200 C200,150 400,250 600,200 S800,150 1000,200" fill="none" stroke="white" strokeWidth="1.5" />
          <path d="M0,300 C200,250 400,350 600,300 S800,250 1000,300" fill="none" stroke="white" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-[1200px] px-4">
        <div className="mb-8 text-center">
          <h2 className="mb-3 text-4xl font-extrabold text-white md:text-5xl">
            Nuestros Trabajos
          </h2>
          <p className="mx-auto max-w-3xl text-lg font-medium text-gray-300 md:text-xl">
            Proyectos realizados con precisión y profesionalismo
          </p>
        </div>

        {imagenesFiltradas.length > 0 ? (
          <div
            className="relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <button
              onClick={prevSlide}
              className="absolute left-1 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-all hover:bg-amber-500 hover:text-black md:left-4"
              aria-label="Anterior"
            >
              <ChevronLeft size={26} />
            </button>

            <div className="flex items-center justify-center gap-4 px-10 md:px-14">
              {visibleIndices.map((index, i) => {
                const item = imagenesFiltradas[index]
                const isCenter =
                  visibleIndices.length === 1 ||
                  i === 2 ||
                  (visibleIndices.length === 2 && i === 0)

                return (
                  <div
                    key={`${item.id}-${i}`}
                    className={`relative overflow-hidden rounded-md bg-black transition-all duration-500 ${
                      isCenter
                        ? "h-[170px] w-full scale-100 opacity-100 shadow-2xl md:h-[240px] md:w-[430px] lg:h-[280px] lg:w-[520px]"
                        : "hidden h-[135px] w-[210px] scale-95 opacity-65 md:block lg:h-[160px] lg:w-[250px]"
                    }`}
                  >
                    <Image
                      src={item.src || "/placeholder.svg"}
                      alt={item.alt}
                      fill
                      className="object-contain"
                      priority={isCenter}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent">
                      <div className="absolute bottom-4 left-4 right-4">
                        <Badge
                          className={`bg-amber-500 font-bold text-black ${
                            isCenter ? "px-3 py-1.5 text-sm" : "text-xs"
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

            <button
              onClick={nextSlide}
              className="absolute right-1 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-all hover:bg-amber-500 hover:text-black md:right-4"
              aria-label="Siguiente"
            >
              <ChevronRight size={26} />
            </button>
          </div>
        ) : (
          <div className="py-12 text-center">
            <p className="text-gray-400">No hay imágenes en esta categoría</p>
          </div>
        )}

        {imagenesFiltradas.length > 0 && (
          <div className="mt-7 flex justify-center gap-2">
            {imagenesFiltradas.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all ${
                  index === currentIndex ? "w-10 bg-amber-500" : "w-3 bg-white/30 hover:bg-white/50"
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
