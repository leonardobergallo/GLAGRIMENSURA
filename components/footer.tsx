import { Facebook, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                <span className="text-accent font-bold">GL</span>
              </div>
              <div>
                <h3 className="font-bold">GL_AGRIMENSURA</h3>
                <p className="text-xs opacity-80">Gabriel Lucero</p>
              </div>
            </div>
            <p className="text-sm opacity-80">Servicios profesionales de agrimensura en La Plata</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#servicios" className="hover:opacity-100 transition">
                  Mensuras
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:opacity-100 transition">
                  Topografía
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:opacity-100 transition">
                  Subdivisión
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:opacity-100 transition">
                  Propiedad Horizontal
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="tel:+542212230052" className="hover:opacity-100 transition">
                  221-2230052
                </a>
              </li>
              <li>
                <a href="mailto:agrimensorglucero@gmail.com" className="hover:opacity-100 transition">
                  Email
                </a>
              </li>
              <li>
                <a href="https://wa.me/542212230052" className="hover:opacity-100 transition">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Redes Sociales</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center hover:bg-accent/30 transition"
              >
                <Facebook size={20} className="text-accent" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center hover:bg-accent/30 transition"
              >
                <Instagram size={20} className="text-accent" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-sm opacity-80">
            © 2025 GL Agrimensura - Ing. Gabriel Lucero. Matrícula CPA Nº 2883. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
