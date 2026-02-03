import { Facebook, Instagram } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo y descripción */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-16 h-16">
                <Image
                  src="/logoGeoSudFix.png"
                  alt="Geo Sud Logo"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg font-heading">Gabriel Lucero</h3>
                <p className="text-xs text-gray-400">Agrimensura</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">Servicios profesionales de agrimensura en La Plata y zona de influencia.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-amber-400">Servicios</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#servicios" className="hover:text-white transition">
                  Mensuras
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition">
                  Topografía
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition">
                  Subdivisión
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition">
                  Propiedad Horizontal
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-amber-400">Contacto</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="tel:+542212230052" className="hover:text-white transition">
                  221-2230052
                </a>
              </li>
              <li>
                <a href="mailto:agrimensorglucero@gmail.com" className="hover:text-white transition">
                  Email
                </a>
              </li>
              <li>
                <a href="https://wa.me/542212230052" className="hover:text-white transition">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-amber-400">Redes Sociales</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-amber-500 transition"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-amber-500 transition"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-sm text-gray-400">
            © 2025 GL Agrimensura - Ing. Gabriel Lucero. Matrícula CPA Nº 2883. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
