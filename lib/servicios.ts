import { MapPin, Ruler, FileText, Building2, Compass, Map, LucideIcon } from "lucide-react"

export interface Servicio {
  icon: LucideIcon
  title: string
  slug: string
  description: string
}

export const servicios: Servicio[] = [
  {
    icon: Ruler,
    title: "Mensuras Urbanas y Rurales",
    slug: "mensuras-urbanas-y-rurales",
    description: "Levantamientos planimétricos de precisión para propiedades en zona urbana y rural",
  },
  {
    icon: FileText,
    title: "Subdivisión",
    slug: "subdivision",
    description: "Trámites y relevamientos para divisiones de propiedades",
  },
  {
    icon: MapPin,
    title: "Usucapión",
    slug: "usucapion",
    description: "Servicios de agrimensura para trámites de usucapión",
  },
  {
    icon: Building2,
    title: "Propiedad Horizontal",
    slug: "propiedad-horizontal",
    description: "Mensuras de unidades funcionales en edificios e inmuebles",
  },
  {
    icon: Compass,
    title: "Amojonamientos",
    slug: "amojonamientos",
    description: "Demarcación y colocación de mojones según normas catastrales",
  },
  {
    icon: Map,
    title: "Topografía Integral",
    slug: "topografia-integral",
    description: "Relevamientos con GPS y tecnología de última generación",
  },
]

