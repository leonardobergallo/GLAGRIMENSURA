"use client"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"

export function Header() {
  const pathname = usePathname()
  const router = useRouter()
  const isHome = pathname === '/'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavigation = (section: string) => {
    setMobileMenuOpen(false)
    if (isHome) {
      const element = document.getElementById(section)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      router.push(`/#${section}`)
      setTimeout(() => {
        const element = document.getElementById(section)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    }
  }

  const navLinks = [
    { label: 'SERVICIOS', section: 'servicios' },
    { label: 'NOSOTROS', section: 'sobre' },
    { label: 'TRABAJOS', section: 'galeria' },
    { label: 'CONTACTO', section: 'contacto' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      {/* Patrón de curvas de nivel en el header */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <svg 
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 400 100" 
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,30 Q100,10 200,30 T400,30" fill="none" stroke="#1e3a5f" strokeWidth="0.8"/>
          <path d="M0,50 Q100,30 200,50 T400,50" fill="none" stroke="#1e3a5f" strokeWidth="0.6"/>
          <path d="M0,70 Q100,50 200,70 T400,70" fill="none" stroke="#1e3a5f" strokeWidth="0.5"/>
        </svg>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="relative w-14 h-14 md:w-16 md:h-16">
            <Image
              src="/logoGeoSudFix.png"
              alt="Geo Sud Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="hidden sm:block">
            <p className="text-base font-bold text-gray-800">Gabriel Lucero</p>
            <p className="text-xs text-gray-500">Agrimensura</p>
          </div>
        </Link>

        {/* Desktop Navigation - FORZADO VISIBLE */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <button
            onClick={() => handleNavigation('servicios')}
            style={{ 
              background: 'none', 
              border: 'none', 
              fontSize: '14px', 
              fontWeight: 600, 
              color: '#374151',
              cursor: 'pointer',
              padding: '8px 4px'
            }}
          >
            SERVICIOS
          </button>
          <button
            onClick={() => handleNavigation('sobre')}
            style={{ 
              background: 'none', 
              border: 'none', 
              fontSize: '14px', 
              fontWeight: 600, 
              color: '#374151',
              cursor: 'pointer',
              padding: '8px 4px'
            }}
          >
            NOSOTROS
          </button>
          <button
            onClick={() => handleNavigation('galeria')}
            style={{ 
              background: 'none', 
              border: 'none', 
              fontSize: '14px', 
              fontWeight: 600, 
              color: '#374151',
              cursor: 'pointer',
              padding: '8px 4px'
            }}
          >
            TRABAJOS
          </button>
          <button
            onClick={() => handleNavigation('contacto')}
            style={{ 
              background: 'none', 
              border: 'none', 
              fontSize: '14px', 
              fontWeight: 600, 
              color: '#374151',
              cursor: 'pointer',
              padding: '8px 4px'
            }}
          >
            CONTACTO
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <nav className="flex flex-col py-4">
            {navLinks.map((link) => (
              <button
                key={link.section}
                onClick={() => handleNavigation(link.section)}
                className="px-6 py-3 text-left text-sm font-semibold text-gray-700 hover:text-amber-500 hover:bg-gray-50 transition-colors tracking-wide"
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
