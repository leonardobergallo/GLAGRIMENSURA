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
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200 bg-white shadow-md shadow-slate-900/5">
      <div className="relative mx-auto flex max-w-[1500px] items-center justify-between gap-4 px-4 py-2">
        <div className="flex w-full min-w-0 items-center justify-between lg:w-auto">
          <Link href="/" className="flex min-w-0 items-center gap-3 transition-opacity hover:opacity-85">
            <div className="relative h-12 w-12 flex-shrink-0 md:h-14 md:w-14">
              <Image
                src="/logoGeoSudFix.png"
                alt="Gabriel Lucero Agrimensura"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="site-brand-text min-w-0">
              <p className="font-heading text-lg font-extrabold leading-tight text-black md:text-xl">
                Gabriel Lucero
              </p>
              <p className="font-heading text-xs font-extrabold uppercase tracking-wide text-black md:text-sm">
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

        <nav className="site-desktop-nav items-center justify-end gap-2 lg:gap-4">
          {navLinks.map((link) => {
            return (
              <button
                key={link.section}
                onClick={() => handleNavigation(link.section)}
                className="rounded-md border border-slate-300 bg-white px-4 py-2.5 font-heading text-sm font-extrabold tracking-wide text-black shadow-sm transition-colors hover:border-slate-600 hover:bg-slate-100 lg:px-5"
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
                className="px-6 py-4 text-left font-heading text-lg font-extrabold tracking-wide text-black transition-colors hover:bg-slate-100"
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
