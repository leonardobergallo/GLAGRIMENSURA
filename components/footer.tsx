import { Facebook, Instagram } from "lucide-react"
import Image from "next/image"

const instagramUrl = "https://www.instagram.com/glucero_agrimensor/"
const facebookUrl = "https://www.facebook.com/agrimensor.gabriel.lucero"
const whatsappUrl = "https://web.whatsapp.com/send?phone=5492212230052"

export function Footer() {
  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 grid gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="relative h-20 w-20">
                <Image
                  src="/logoGeoSudFix.png"
                  alt="Gabriel Lucero Agrimensura"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold">Gabriel Lucero</h3>
                <p className="text-sm text-gray-400">Ingeniero Agrimensor</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Servicios profesionales de agrimensura en La Plata y Provincia de
              Buenos Aires.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-amber-400">Servicios</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#servicios" className="transition hover:text-white">Mensuras</a></li>
              <li><a href="#servicios" className="transition hover:text-white">Topografía</a></li>
              <li><a href="#servicios" className="transition hover:text-white">Subdivisión</a></li>
              <li><a href="#servicios" className="transition hover:text-white">Propiedad Horizontal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-amber-400">Contacto</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="tel:+542212230052" className="transition hover:text-white">
                  +54 9 221 223-0052
                </a>
              </li>
              <li>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-amber-400">Redes Sociales</h4>
            <div className="flex gap-4">
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir Facebook de Gabriel Lucero"
                className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 transition hover:bg-amber-500 hover:text-black"
              >
                <Facebook size={24} />
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir Instagram glucero_agrimensor"
                className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 transition hover:bg-amber-500 hover:text-black"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-sm text-gray-400">
            © 2026 GL Agrimensura - Ing. Gabriel Lucero. Matrícula CPA N° 2883.
            Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
