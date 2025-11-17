import Image from "next/image"
import { CheckCircle } from "lucide-react"

export function Sobre() {
  return (
    <section id="sobre" className="relative py-24 overflow-hidden">
      {/* Fondo moderno con patrones de agrimensura */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30">
        {/* Patrón de cuadrícula sutil */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #1e293b 1px, transparent 1px),
              linear-gradient(to bottom, #1e293b 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Líneas decorativas */}
        <div className="absolute top-10 right-20 w-40 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent -rotate-12" />
        <div className="absolute bottom-20 left-10 w-36 h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent rotate-12" />
        
        {/* Círculos decorativos */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-primary/8" />
        <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 rounded-full bg-accent/8" />
        
        {/* Formas geométricas suaves */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-primary/3 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-accent/3 to-transparent rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
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
