import Image from "next/image"
import { CheckCircle } from "lucide-react"

export function Sobre() {
  return (
    <section id="sobre" className="relative py-24 overflow-hidden bg-gray-50">
      {/* Patrón de curvas de nivel sutil */}
      <div className="absolute inset-0 opacity-5">
        <svg 
          className="w-full h-full" 
          viewBox="0 0 1000 600" 
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            <path d="M0,100 C200,50 400,150 600,100 S800,50 1000,100" fill="none" stroke="#1e3a5f" strokeWidth="2"/>
            <path d="M0,150 C200,100 400,200 600,150 S800,100 1000,150" fill="none" stroke="#1e3a5f" strokeWidth="1.5"/>
            <path d="M0,200 C200,150 400,250 600,200 S800,150 1000,200" fill="none" stroke="#1e3a5f" strokeWidth="1"/>
            <path d="M0,400 C200,350 400,450 600,400 S800,350 1000,400" fill="none" stroke="#1e3a5f" strokeWidth="2"/>
            <path d="M0,450 C200,400 400,500 600,450 S800,400 1000,450" fill="none" stroke="#1e3a5f" strokeWidth="1.5"/>
            <path d="M0,500 C200,450 400,550 600,500 S800,450 1000,500" fill="none" stroke="#1e3a5f" strokeWidth="1"/>
          </g>
        </svg>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-heading">Sobre Gabriel Lucero</h2>
            <div className="space-y-4 mb-8">
              <p className="text-lg text-gray-600 leading-relaxed">
                Ingeniero Agrimensor con matrícula profesional CPA Nº 2883, con amplia experiencia en relevamientos
                catastrales, mensuras y servicios topográficos en La Plata y zona de influencia.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Utilizo equipamiento de última generación y técnicas modernas para garantizar precisión y confiabilidad
                en cada proyecto.
              </p>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-amber-500 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700 font-medium">Matrícula profesional CPA Nº 2883</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-amber-500 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700 font-medium">Equipamiento GPS de precisión</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-amber-500 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700 font-medium">Experiencia en mensuras urbanas y rurales</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-amber-500 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700 font-medium">Certificados en deslindes y amojonamientos</span>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96 bg-white">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wxdgJwMx9rPIajG6zkMonxD8VevADA.png"
              alt="Ing. Gabriel Lucero - Agrimensor"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
