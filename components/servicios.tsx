import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Ruler, FileText, Building2, Compass, Map } from "lucide-react"

const servicios = [
  {
    icon: Ruler,
    title: "Mensuras Urbanas y Rurales",
    description: "Levantamientos planimétricos de precisión para propiedades en zona urbana y rural",
  },
  {
    icon: FileText,
    title: "Subdivisión",
    description: "Trámites y relevamientos para divisiones de propiedades",
  },
  {
    icon: MapPin,
    title: "Usucapión",
    description: "Servicios de agrimensura para trámites de usucapión",
  },
  {
    icon: Building2,
    title: "Propiedad Horizontal",
    description: "Mensuras de unidades funcionales en edificios e inmuebles",
  },
  {
    icon: Compass,
    title: "Amojonamientos",
    description: "Demarcación y colocación de mojones según normas catastrales",
  },
  {
    icon: Map,
    title: "Topografía Integral",
    description: "Relevamientos con GPS y tecnología de última generación",
  },
]

export function Servicios() {
  return (
    <section id="servicios" className="py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos soluciones completas en agrimensura con profesionalismo y precisión técnica
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {servicios.map((servicio, idx) => {
            const Icon = servicio.icon
            return (
              <Card key={idx} className="border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-accent" size={24} />
                  </div>
                  <CardTitle className="text-primary">{servicio.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">{servicio.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
