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

        <div className="relative w-full max-w-6xl px-4 py-6 text-white md:px-8 md:py-10">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)] bg-[length:72px_72px] opacity-35" />
          <div className="hero-survey-scan pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.22),rgba(56,189,248,0.18),transparent)]" />
          <div className="pointer-events-none absolute left-1/2 top-10 h-36 w-36 -translate-x-1/2 rounded-full border border-white/45 opacity-70 md:h-56 md:w-56">
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/25" />
            <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white/25" />
            <div className="absolute inset-8 rounded-full border border-white/25" />
          </div>

          <div className="relative drop-shadow-[0_4px_14px_rgba(0,0,0,0.78)]">
            <div className="mb-10 flex flex-col items-center justify-center gap-5 text-center sm:flex-row sm:gap-7">
              <div className="relative h-24 w-24 rounded-md bg-white/95 shadow-2xl shadow-slate-950/35 ring-1 ring-white md:h-32 md:w-32">
                <Image
                  src="/logoGeoSudFix.png"
                  alt="Geo Sud"
                  fill
                  className="object-contain p-2"
                />
              </div>
              <div className="max-w-xl">
                <p className="font-heading text-3xl font-extrabold leading-tight tracking-wide text-white [text-shadow:0_3px_12px_rgba(0,0,0,0.95)] md:text-5xl">
                  GL Agrimensura
                </p>
                <p className="mt-1 text-xl font-bold leading-tight tracking-wide text-amber-300 [text-shadow:0_3px_10px_rgba(0,0,0,0.95)] md:text-3xl">
                  Gabriel Lucero
                </p>
                <p className="mt-1 text-base font-semibold uppercase tracking-[0.18em] text-cyan-100 [text-shadow:0_3px_10px_rgba(0,0,0,0.95)] md:text-xl">
                  Ingeniero Agrimensor
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-4xl text-center">
              <p className="mx-auto mb-6 max-w-5xl rounded-md bg-slate-950/28 px-4 py-3 font-heading text-xl font-bold leading-snug text-white [text-shadow:0_3px_12px_rgba(0,0,0,0.95)] backdrop-blur-[2px] md:text-3xl">
                Somos un estudio integral de agrimensura, topografía y consultoría en ingeniería,
                con sólida experiencia en la provincia de Buenos Aires.
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
