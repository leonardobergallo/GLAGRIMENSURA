import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Compass,
  FileCheck2,
  FileText,
  Map,
  MapPin,
  Ruler,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const servicios = [
  {
    icon: FileCheck2,
    title: "Estados parcelarios",
    description:
      "Documentación técnica para operaciones inmobiliarias, venta, escritura y trámites catastrales.",
    slug: "estados-parcelarios",
    imagen: "/servicios/mensura.svg",
  },
  {
    icon: Compass,
    title: "Amojonamientos",
    description:
      "Demarcación precisa de límites y colocación de mojones para identificar tu terreno con seguridad.",
    slug: "amojonamientos",
    imagen: "/servicios/amojonamientos.svg",
  },
  {
    icon: FileText,
    title: "Subdivisión en propiedad horizontal (PH)",
    description:
      "Relevamientos, planos y asesoramiento para dividir inmuebles en unidades funcionales.",
    slug: "ph",
    imagen: "/servicios/ph.svg",
  },
  {
    icon: Ruler,
    title: "Mensuras Urbanas y Rurales",
    description:
      "Medición, delimitación y registro de propiedades urbanas y rurales con precisión técnica.",
    slug: "mensura",
    imagen: "/servicios/mensura.svg",
  },
  {
    icon: MapPin,
    title: "Usucapión",
    description:
      "Servicios de agrimensura para trámites de prescripción adquisitiva y regularización dominial.",
    slug: "usucapion",
    imagen: "/servicios/usucapion.svg",
  },
  {
    icon: Map,
    title: "Topografía Integral",
    description:
      "Relevamientos planialtimétricos para obras, proyectos, replanteos y regularizaciones.",
    slug: "topografia",
    imagen: "/servicios/topografia.svg",
  },
]

export function Servicios() {
  return (
    <section id="servicios" className="bg-secondary/30 py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-18 text-center">
          <h2 className="mb-5 text-5xl font-extrabold tracking-tight text-primary md:text-6xl">
            Nuestros Servicios
          </h2>
          <p className="mx-auto max-w-4xl text-xl font-medium leading-relaxed text-muted-foreground md:text-2xl">
            Presupuestos y asesoramientos personalizados en La Plata y Provincia
            de Buenos Aires.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicios.map((servicio) => {
            const Icon = servicio.icon

            return (
              <Link key={servicio.slug} href={`/servicios/${servicio.slug}`}>
                <Card className="group h-full cursor-pointer overflow-hidden border-2 border-primary/20 shadow-md transition-all hover:-translate-y-1 hover:border-amber-500 hover:shadow-2xl">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={servicio.imagen}
                      alt={servicio.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-900/25 to-transparent" />
                    <div className="absolute bottom-5 left-5">
                      <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-white shadow-lg">
                        <Icon className="text-primary" size={34} />
                      </div>
                    </div>
                  </div>

                  <CardHeader className="pb-3 pt-6">
                    <CardTitle className="text-2xl font-extrabold leading-tight text-primary transition-colors group-hover:text-amber-600">
                      {servicio.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-6 text-lg leading-relaxed text-muted-foreground">
                      {servicio.description}
                    </CardDescription>
                    <Button
                      variant="ghost"
                      className="h-13 w-full text-lg font-extrabold transition-colors group-hover:bg-primary group-hover:text-white"
                    >
                      Ver más <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
