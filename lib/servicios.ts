import {
  Compass,
  FileCheck2,
  FileText,
  LucideIcon,
  Map,
  MapPin,
  Ruler,
} from "lucide-react"

export interface Servicio {
  icon: LucideIcon
  title: string
  slug: string
  description: string
}

export const servicios: Servicio[] = [
  {
    icon: FileCheck2,
    title: "Estados parcelarios",
    slug: "estados-parcelarios",
    description:
      "Documentación técnica para operaciones inmobiliarias y trámites catastrales.",
  },
  {
    icon: Compass,
    title: "Amojonamientos",
    slug: "amojonamientos",
    description:
      "Demarcación precisa de límites y colocación de mojones según normativa.",
  },
  {
    icon: FileText,
    title: "Subdivisión en propiedad horizontal (PH)",
    slug: "ph",
    description:
      "Relevamientos y planos para dividir inmuebles en unidades funcionales.",
  },
  {
    icon: Ruler,
    title: "Mensuras Urbanas y Rurales",
    slug: "mensura",
    description:
      "Medición, delimitación y registro de propiedades urbanas y rurales.",
  },
  {
    icon: MapPin,
    title: "Usucapión",
    slug: "usucapion",
    description:
      "Servicios de agrimensura para trámites de prescripción adquisitiva.",
  },
  {
    icon: Map,
    title: "Topografía Integral",
    slug: "topografia",
    description:
      "Relevamientos planialtimétricos para obras, proyectos y regularizaciones.",
  },
]
