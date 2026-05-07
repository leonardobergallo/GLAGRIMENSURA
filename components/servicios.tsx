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
import { getAllServicios, Servicio as ServicioData, ServicioSlug } from "@/lib/servicios-data"

const iconos: Record<ServicioSlug, typeof FileCheck2> = {
  "estados-parcelarios": FileCheck2,
  amojonamientos: Compass,
  ph: FileText,
  mensura: Ruler,
  usucapion: MapPin,
  topografia: Map,
  subdivision: Ruler,
}

const orden: ServicioSlug[] = [
  "estados-parcelarios",
  "amojonamientos",
  "ph",
  "mensura",
  "usucapion",
  "topografia",
]

const servicios = orden
  .map((slug) => getAllServicios().find((servicio) => servicio.slug === slug))
  .filter((servicio): servicio is ServicioData => Boolean(servicio))

export function Servicios() {
  return (
    <section id="servicios" className="relative overflow-hidden bg-white py-20">
      <div className="absolute inset-0 bg-[url('/relieve-topografico.svg')] bg-[length:620px_360px] bg-center opacity-20" />
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-primary md:text-5xl">
            Nuestros Servicios
          </h2>
          <p className="mx-auto max-w-3xl text-lg font-medium leading-relaxed text-muted-foreground md:text-xl">
            Presupuestos y asesoramientos personalizados en La Plata y Provincia
            de Buenos Aires.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicios.map((servicio) => {
            const Icon = iconos[servicio.slug]

            return (
              <Link key={servicio.slug} href={`/servicios/${servicio.slug}`}>
                <Card className="group flex h-full min-h-[390px] cursor-pointer flex-col overflow-hidden border border-slate-200 shadow-md transition-all hover:-translate-y-1 hover:border-slate-400 hover:shadow-xl">
                  <div className="relative h-40 overflow-hidden bg-primary">
                    <Image
                      src={servicio.imagen}
                      alt={servicio.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[url('/relieve-topografico.svg')] bg-cover bg-center opacity-45 mix-blend-screen" />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-blue-800/10 to-sky-500/20" />
                    <div className="absolute right-4 top-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-md bg-white/95 shadow-lg ring-1 ring-slate-200">
                        <Icon className="text-primary" size={30} />
                      </div>
                    </div>
                  </div>

                  <CardHeader className="sr-only">
                    <CardTitle>{servicio.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col pt-6">
                    <CardDescription className="mb-5 line-clamp-4 text-base leading-relaxed text-muted-foreground">
                      {servicio.description}
                    </CardDescription>
                    <Button
                      variant="ghost"
                      className="mt-auto h-11 w-full text-base font-extrabold transition-colors group-hover:bg-primary group-hover:text-white"
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
