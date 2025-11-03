import Image from "next/image"
import { CheckCircle } from "lucide-react"

export function Sobre() {
  return (
    <section id="sobre" className="py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-primary mb-6">Sobre Gabriel Lucero</h2>
            <div className="space-y-4 mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ingeniero Agrimensor con matrícula profesional CPA Nº 2883, con amplia experiencia en relevamientos
                catastrales, mensuras y servicios topográficos en La Plata y zona de influencia.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Utilizo equipamiento de última generación y técnicas modernas para garantizar precisión y confiabilidad
                en cada proyecto.
              </p>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-accent mt-1 flex-shrink-0" size={20} />
                <span className="text-foreground">Matrícula profesional CPA Nº 2883</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-accent mt-1 flex-shrink-0" size={20} />
                <span className="text-foreground">Equipamiento GPS de precisión</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-accent mt-1 flex-shrink-0" size={20} />
                <span className="text-foreground">Experiencia en mensuras urbanas y rurales</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-accent mt-1 flex-shrink-0" size={20} />
                <span className="text-foreground">Certificados en deslindes y amojonamientos</span>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border-2 border-primary/20 h-96 bg-white p-2">
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
