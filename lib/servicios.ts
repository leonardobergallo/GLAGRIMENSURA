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
    title: "Constitución de Estado Parcelario",
    slug: "estados-parcelarios",
    description:
      "Gestión de documentación técnica para ventas, escrituras y trámites catastrales.",
  },
  {
    icon: Compass,
    title: "Deslinde y Amojonamiento",
    slug: "amojonamientos",
    description:
      "Determinación precisa de límites y colocación de mojones en terreno.",
  },
  {
    icon: FileText,
    title: "Propiedad Horizontal (PH - PHE)",
    slug: "ph",
    description:
      "Transformación de propiedades en unidades independientes.",
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
    title: "Prescripción Adquisitiva (Usucapión)",
    slug: "usucapion",
    description:
      "Plano técnico para iniciar el trámite de titularidad legal.",
  },
  {
    icon: Map,
    title: "Topografía de Precisión para Ingeniería y Construcción",
    slug: "topografia",
    description:
      "Soluciones topográficas para ingeniería, obras y servicios para el agro.",
  },
]
