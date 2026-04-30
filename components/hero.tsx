"use client"

import Image from "next/image"
import { ChevronDown, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-100 pt-28 md:pt-32">
      <div className="absolute inset-0">
        <Image
          src="/FotoBanner.jpg"
          alt=""
          fill
          priority
          className="scale-110 object-cover opacity-60 blur-sm saturate-125"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.24),rgba(15,23,42,0.42)),linear-gradient(120deg,rgba(248,250,252,0.55),rgba(148,163,184,0.18),rgba(15,23,42,0.30))]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.20),rgba(255,255,255,0.54))]" />
        <div className="absolute inset-0 bg-[url('/relieve-topografico.svg')] bg-[length:620px_360px] bg-center opacity-45" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl flex-col items-center justify-center px-4 py-8 md:min-h-[calc(100vh-8rem)] md:px-6">
        <div className="sr-only">
          <h1>Ingeniero Agrimensor Gabriel Lucero</h1>
          <p>
            Servicios de agrimensura en La Plata y Provincia de Buenos Aires:
            estados parcelarios, amojonamientos, subdivisión en propiedad
            horizontal, mensuras urbanas y rurales, usucapión y topografía
            integral.
          </p>
        </div>

        <div className="grid w-full items-center gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex justify-center lg:justify-start">
            <div className="relative h-40 w-40 rounded-md bg-white/90 p-5 shadow-2xl shadow-slate-900/15 ring-1 ring-white md:h-52 md:w-52">
              <Image
                src="/logoGeoSudFix.png"
                alt="Gabriel Lucero Agrimensura"
                fill
                priority
                className="object-contain p-5"
              />
            </div>
          </div>

          <div className="relative overflow-hidden rounded-md border border-white/70 bg-white/88 p-6 text-center shadow-2xl shadow-slate-900/15 backdrop-blur-md md:p-9 lg:text-left">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.08)_1px,transparent_1px)] bg-[length:56px_56px]" />
            <div className="hero-survey-scan pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-[linear-gradient(90deg,transparent,rgba(56,189,248,0.18),transparent)]" />
            <div className="relative">
              <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.22em] text-slate-600">
                Agrimensura y topografía
              </p>
              <h1 className="mb-5 text-4xl font-extrabold leading-tight text-slate-950 md:text-6xl">
                Gabriel Lucero
              </h1>
              <p className="max-w-3xl text-xl font-bold leading-relaxed text-slate-800 md:text-2xl">
                Estados parcelarios, mensuras urbanas y rurales, deslindes, amojonamientos,
                propiedad horizontal, usucapión y topografía de precisión para obras y agro.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button
            size="lg"
            className="min-w-60 bg-slate-900 px-9 py-7 text-xl font-extrabold text-white shadow-xl shadow-slate-900/20 hover:bg-slate-700"
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
