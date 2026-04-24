"use client"

import Image from "next/image"
import { ChevronDown, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-100 pt-44 md:pt-48">
      <div className="absolute inset-0">
        <Image
          src="/banner/banner-principal.png"
          alt=""
          fill
          priority
          className="scale-110 object-cover opacity-40 blur-md"
        />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(236,243,247,0.86),rgba(221,183,30,0.38),rgba(114,161,183,0.48))]" />
        <svg
          className="absolute inset-0 h-full w-full opacity-55"
          viewBox="0 0 1200 700"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <path d="M-50 80 C180 0 330 170 560 80 S930 0 1250 80" fill="none" stroke="#0f172a" strokeWidth="2.6" />
          <path d="M-50 150 C190 65 360 245 600 150 S960 65 1250 150" fill="none" stroke="#0f172a" strokeWidth="2.1" />
          <path d="M-50 230 C190 150 350 320 590 230 S960 150 1250 230" fill="none" stroke="#0f172a" strokeWidth="2.4" />
          <path d="M-50 320 C180 240 360 420 620 320 S980 240 1250 320" fill="none" stroke="#0f172a" strokeWidth="2" />
          <path d="M-50 410 C190 325 380 500 650 410 S1010 325 1250 410" fill="none" stroke="#0f172a" strokeWidth="2.5" />
          <path d="M-50 500 C180 420 370 580 630 500 S990 420 1250 500" fill="none" stroke="#0f172a" strokeWidth="2" />
          <path d="M-50 595 C170 515 390 675 650 595 S1020 515 1250 595" fill="none" stroke="#0f172a" strokeWidth="2.3" />
        </svg>
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-11rem)] max-w-7xl flex-col items-center justify-center px-3 py-8 md:min-h-[calc(100vh-12rem)] md:px-6">
        <div className="sr-only">
          <h1>Ingeniero Agrimensor Gabriel Lucero</h1>
          <p>
            Servicios de agrimensura en La Plata y Provincia de Buenos Aires:
            estados parcelarios, amojonamientos, subdivisión en propiedad
            horizontal, mensuras urbanas y rurales, usucapión y topografía
            integral.
          </p>
        </div>

        <div className="relative w-full overflow-hidden rounded-md shadow-2xl shadow-slate-900/25 ring-1 ring-white/60">
          <Image
            src="/banner/banner-principal.png"
            alt="Ingeniero Agrimensor Gabriel Lucero. Servicios en La Plata y Provincia de Buenos Aires."
            width={2048}
            height={1024}
            priority
            className="h-auto w-full object-contain"
          />
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button
            size="lg"
            className="min-w-60 bg-amber-500 px-9 py-7 text-xl font-extrabold text-black shadow-xl shadow-amber-700/20 hover:bg-amber-400"
            onClick={() => scrollToSection("servicios")}
          >
            Nuestros servicios
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="min-w-52 border-slate-900/20 bg-white/90 px-9 py-7 text-xl font-extrabold text-slate-950 shadow-xl shadow-slate-900/10 hover:bg-white"
            onClick={() => scrollToSection("contacto")}
          >
            <MessageCircle className="mr-2 h-6 w-6" />
            Contacto
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection("servicios")}
          className="text-slate-900/60 transition-colors hover:text-slate-950"
          aria-label="Ir a servicios"
        >
          <ChevronDown size={36} />
        </button>
      </div>
    </section>
  )
}
