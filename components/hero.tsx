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

      <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl flex-col items-center justify-center px-3 py-8 md:min-h-[calc(100vh-8rem)] md:px-6">
        <div className="sr-only">
          <h1>Ingeniero Agrimensor Gabriel Lucero</h1>
          <p>
            Servicios de agrimensura en La Plata y Provincia de Buenos Aires:
            estados parcelarios, amojonamientos, subdivisión en propiedad
            horizontal, mensuras urbanas y rurales, usucapión y topografía
            integral.
          </p>
        </div>

        <div className="relative w-full overflow-hidden rounded-md shadow-2xl shadow-slate-900/20 ring-1 ring-white/70">
          <Image
            src="/FotoBanner.jpg"
            alt="Ingeniero Agrimensor Gabriel Lucero. Servicios en La Plata y Provincia de Buenos Aires."
            width={2048}
            height={1024}
            priority
            className="h-auto w-full object-contain contrast-110 saturate-110"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.20),transparent_34%,transparent_66%,rgba(15,23,42,0.16))]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.13)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.13)_1px,transparent_1px)] bg-[length:72px_72px] opacity-35" />
          <div className="hero-survey-scan pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.24),rgba(56,189,248,0.20),transparent)]" />
          <div className="pointer-events-none absolute left-6 top-6 hidden h-24 w-24 rounded-full border border-white/45 md:block">
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/35" />
            <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white/35" />
            <div className="absolute inset-5 rounded-full border border-white/30" />
          </div>
          <div className="pointer-events-none absolute bottom-6 right-6 hidden items-end gap-2 text-white/80 md:flex">
            <div className="h-16 w-px bg-white/55" />
            <div className="h-10 w-px bg-white/45" />
            <div className="h-20 w-px bg-white/65" />
            <div className="h-7 w-px bg-white/40" />
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 via-slate-950/55 to-transparent px-5 pb-5 pt-16 text-center md:px-10 md:pb-8">
            <p className="mx-auto max-w-5xl text-lg font-bold leading-relaxed text-white drop-shadow md:text-2xl">
              Estados parcelarios, mensuras urbanas y rurales, deslindes, amojonamientos,
              propiedad horizontal, usucapión y topografía de precisión para obras y agro.
            </p>
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
