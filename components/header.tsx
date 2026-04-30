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
    <header className="fixed left-0 right-0 top-0 z-50 border-b-2 border-slate-300 bg-white shadow-lg shadow-slate-900/10">
      <div className="relative mx-auto flex max-w-[1500px] flex-col items-center px-4 py-2">
        <div className="flex w-full items-center justify-between">
          <Link href="/" className="flex min-w-0 items-center gap-3 transition-opacity hover:opacity-85">
            <div className="relative h-14 w-14 flex-shrink-0 md:h-16 md:w-16">
              <Image
                src="/logoGeoSudFix.png"
                alt="Gabriel Lucero Agrimensura"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="site-brand-text min-w-0">
              <p className="text-lg font-extrabold leading-tight text-slate-950 md:text-xl">
                Gabriel Lucero
              </p>
              <p className="text-xs font-extrabold uppercase tracking-wide text-slate-600 md:text-sm">
                Ingeniero Agrimensor
              </p>
            </div>
          </Link>

          <button
            className="site-mobile-toggle rounded-md border border-slate-200 p-3 text-slate-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        <nav className="site-desktop-nav mt-2 w-full items-center justify-center gap-3 border-t border-slate-300 pt-2 lg:gap-5">
          {navLinks.map((link) => {
            const isPrimary = link.section === "servicios" || link.section === "contacto"

            return (
              <button
                key={link.section}
                onClick={() => handleNavigation(link.section)}
                className={`rounded-md border px-4 py-3 text-sm font-extrabold tracking-wide shadow-sm transition-colors lg:px-6 lg:text-base ${
                  isPrimary
                    ? "border-slate-950 bg-slate-950 text-white hover:bg-slate-700"
                    : "border-slate-300 bg-white text-slate-950 hover:border-slate-500 hover:bg-slate-100"
                }`}
              >
                {link.label}
              </button>
            )
          })}
        </nav>
      </div>

      {mobileMenuOpen && (
        <div className="site-mobile-menu border-t border-slate-300 bg-white shadow-lg">
          <nav className="flex flex-col py-4">
            {navLinks.map((link) => (
              <button
                key={link.section}
                onClick={() => handleNavigation(link.section)}
                className="px-6 py-4 text-left text-lg font-extrabold tracking-wide text-slate-900 transition-colors hover:bg-slate-100"
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
