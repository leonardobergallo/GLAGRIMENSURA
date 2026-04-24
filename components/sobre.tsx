import Image from "next/image"
import { CheckCircle } from "lucide-react"

export function Sobre() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-gray-50 py-28">
      <div className="absolute inset-0 opacity-15">
        <svg
          className="h-full w-full"
          viewBox="0 0 1000 600"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path d="M0,100 C200,50 400,150 600,100 S800,50 1000,100" fill="none" stroke="#1e3a5f" strokeWidth="2.5" />
            <path d="M0,150 C200,100 400,200 600,150 S800,100 1000,150" fill="none" stroke="#1e3a5f" strokeWidth="2" />
            <path d="M0,200 C200,150 400,250 600,200 S800,150 1000,200" fill="none" stroke="#1e3a5f" strokeWidth="1.7" />
            <path d="M0,400 C200,350 400,450 600,400 S800,350 1000,400" fill="none" stroke="#1e3a5f" strokeWidth="2.5" />
            <path d="M0,450 C200,400 400,500 600,450 S800,400 1000,450" fill="none" stroke="#1e3a5f" strokeWidth="2" />
            <path d="M0,500 C200,450 400,550 600,500 S800,450 1000,500" fill="none" stroke="#1e3a5f" strokeWidth="1.7" />
          </g>
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-5xl font-extrabold tracking-tight text-gray-900 md:text-6xl">
              Sobre Gabriel Lucero
            </h2>
            <div className="mb-8 space-y-5">
              <p className="text-xl leading-relaxed text-gray-700">
                Ingeniero Agrimensor con matrícula profesional CPA N° 2883, con
                amplia experiencia en relevamientos catastrales, mensuras y
                servicios topográficos en La Plata y zona de influencia.
              </p>
              <p className="text-xl leading-relaxed text-gray-700">
                Trabajo con equipamiento de última generación y técnicas modernas
                para garantizar precisión y confiabilidad en cada proyecto.
              </p>
            </div>

            <div className="mb-8 space-y-4">
              {[
                "Matrícula profesional CPA N° 2883",
                "Equipamiento GPS de precisión",
                "Experiencia en mensuras urbanas y rurales",
                "Certificados en deslindes y amojonamientos",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-1 flex-shrink-0 text-amber-500" size={24} />
                  <span className="text-lg font-bold text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[420px] overflow-hidden rounded-md bg-white shadow-2xl md:h-[520px]">
            <Image
              src="/sobre/agrimensura-ia.png"
              alt="Equipamiento profesional de agrimensura en campo"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
