"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"

export function Header() {
  const pathname = usePathname()
  const router = useRouter()
  const isHome = pathname === "/"
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavigation = (section: string) => {
    setMobileMenuOpen(false)

    if (section === "inicio") {
      if (isHome) {
        window.scrollTo({ top: 0, behavior: "smooth" })
      } else {
        router.push("/")
      }
      return
    }

    if (isHome) {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })
    } else {
      router.push(`/#${section}`)
      setTimeout(() => {
        document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })
      }, 100)
    }
  }

  const navLinks = [
    { label: "INICIO", section: "inicio" },
    { label: "SERVICIOS", section: "servicios" },
    { label: "NOSOTROS", section: "sobre" },
    { label: "TRABAJOS", section: "galeria" },
    { label: "CONTACTO", section: "contacto" },
  ]

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-amber-400/40 bg-slate-950/95 shadow-xl backdrop-blur">
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-15">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 400 100"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,30 Q100,10 200,30 T400,30" fill="none" stroke="#fbbf24" strokeWidth="0.8" />
          <path d="M0,50 Q100,30 200,50 T400,50" fill="none" stroke="#fbbf24" strokeWidth="0.6" />
          <path d="M0,70 Q100,50 200,70 T400,70" fill="none" stroke="#fbbf24" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative mx-auto flex max-w-[1500px] flex-col items-center px-4 py-2">
        <div className="flex w-full items-center justify-between">
          <Link href="/" className="flex min-w-0 items-center gap-3 transition-opacity hover:opacity-85">
            <div className="relative h-20 w-20 flex-shrink-0 md:h-24 md:w-24">
              <Image
                src="/logoGeoSudFix.png"
                alt="Gabriel Lucero Agrimensura"
                fill
                className="object-contain brightness-0 invert"
                priority
              />
            </div>
            <div className="site-brand-text min-w-0">
              <p className="text-xl font-extrabold leading-tight text-white md:text-2xl">
                Gabriel Lucero
              </p>
              <p className="text-sm font-extrabold uppercase tracking-wide text-amber-400 md:text-base">
                Ingeniero Agrimensor
              </p>
            </div>
          </Link>

          <button
            className="site-mobile-toggle rounded-lg p-3 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        <nav className="site-desktop-nav mt-1 w-full items-center justify-center gap-2 border-t border-white/15 pt-2 lg:gap-4">
          {navLinks.map((link) => {
            const isPrimary = link.section === "servicios" || link.section === "contacto"

            return (
              <button
                key={link.section}
                onClick={() => handleNavigation(link.section)}
                className={`rounded-full px-4 py-3 text-sm font-extrabold tracking-wide transition-all lg:px-7 lg:text-base ${
                  isPrimary
                    ? "bg-amber-500 text-black shadow-md hover:bg-amber-300"
                    : "text-white hover:bg-white/10 hover:text-amber-300"
                }`}
              >
                {link.label}
              </button>
            )
          })}
        </nav>
      </div>

      {mobileMenuOpen && (
        <div className="site-mobile-menu border-t border-white/15 bg-slate-950">
          <nav className="flex flex-col py-4">
            {navLinks.map((link) => (
              <button
                key={link.section}
                onClick={() => handleNavigation(link.section)}
                className="px-6 py-4 text-left text-lg font-extrabold tracking-wide text-white transition-colors hover:bg-white/10 hover:text-amber-300"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
