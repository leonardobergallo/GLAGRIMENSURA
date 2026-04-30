export type ServicioSlug =
  | 'estados-parcelarios'
  | 'mensura'
  | 'usucapion'
  | 'subdivision'
  | 'ph'
  | 'topografia'
  | 'amojonamientos'

export interface ServicioSection {
  title: string
  paragraphs?: string[]
  items?: string[]
}

export interface Servicio {
  slug: ServicioSlug
  title: string
  subtitle: string
  description: string
  benefits: string[]
  sections: ServicioSection[]
  whatsappMessage: string
  keywords: string[]
  imagen: string
  planos: {
    title: string
    file: string
    thumbnail?: string
  }[]
}

export const serviciosData: Record<ServicioSlug, Servicio> = {
  'estados-parcelarios': {
    slug: 'estados-parcelarios',
    title: 'Constitución de Estado Parcelario',
    subtitle: 'Documentación técnica para operaciones inmobiliarias',
    description:
      'Gestionamos la documentación técnica necesaria para ventas, escrituras y trámites catastrales, brindando respaldo y seguridad en cada operación.',
    benefits: [
      'Verificación técnica de dimensiones, ubicación y límites',
      'Documentación para ventas, escrituras y transferencias',
      'Gestión ágil del trámite catastral',
      'Acompañamiento técnico durante todo el proceso',
    ],
    sections: [
      {
        title: 'Estado Parcelario',
        paragraphs: [
          'El estado parcelario es un requisito fundamental para la transferencia de inmuebles. Consiste en la verificación técnica de la parcela, asegurando que sus dimensiones, ubicación y límites coincidan con la documentación vigente.',
        ],
      },
      {
        title: 'Cuándo lo necesitás',
        paragraphs: [
          'Es obligatorio al momento de vender, escriturar o realizar cualquier acto que implique la transferencia de dominio del inmueble.',
          'Realizamos el trámite de forma ágil y precisa, brindando seguridad jurídica y acompañamiento en todo el proceso.',
        ],
      },
      {
        title: 'Documentación necesaria',
        items: [
          'Título de propiedad o escritura, en foto o PDF',
          'DNI del titular',
          'Datos catastrales de la parcela: partido, partida y nomenclatura catastral',
          'Boleta de impuesto inmobiliario',
        ],
      },
    ],
    whatsappMessage:
      'Hola, necesito gestionar una Constitución de Estado Parcelario. Me gustaría recibir información y presupuesto.',
    keywords: ['estado parcelario la plata', 'constitución de estado parcelario', 'agrimensor la plata'],
    imagen: '/servicios/estado-parcelario.svg',
    planos: [],
  },
  mensura: {
    slug: 'mensura',
    title: 'Mensuras Urbanas y Rurales',
    subtitle: 'Medición, delimitación y registro de propiedades',
    description:
      'Medimos, delimitamos y registramos tu propiedad, urbana o rural, con precisión técnica y total confiabilidad.',
    benefits: [
      'Mensura para subdivisión',
      'Mensura para unificación de parcelas',
      'Mensura de primera inscripción',
      'Mensura para anexión',
    ],
    sections: [
      {
        title: 'Mensuras Rurales y Urbanas',
        paragraphs: [
          'Realizamos mensuras en ámbitos urbanos y rurales, adaptadas a cada necesidad y cumpliendo con la normativa vigente. Estos trabajos permiten determinar, verificar y registrar correctamente la situación de un inmueble.',
        ],
        items: [
          'Mensura para subdivisión',
          'Mensura para unificación de parcelas',
          'Mensura de primera inscripción',
          'Mensura para anexión',
        ],
      },
      {
        title: 'Subdivisión',
        paragraphs: [
          'La mensura de subdivisión permite dividir un inmueble en dos o más parcelas independientes, generando nuevas unidades con su propia identificación catastral. Es fundamental para poder vender, transferir o desarrollar cada fracción por separado.',
          'Es importante conocer la zonificación según las ordenanzas municipales vigentes, ya que de esto dependen las dimensiones mínimas, tanto lineales como de superficie, de las parcelas a generar.',
        ],
        items: [
          'Título de propiedad o escritura',
          'DNI del titular',
          'Plano antecedente, si lo tenés',
          'Datos catastrales',
        ],
      },
      {
        title: 'Unificación',
        paragraphs: [
          'La mensura de unificación consiste en integrar dos o más parcelas en una sola, generando una nueva unidad parcelaria. Es útil para simplificar la gestión del inmueble o desarrollar proyectos sobre una superficie mayor.',
        ],
        items: [
          'Títulos de propiedad de todas las parcelas',
          'DNI del titular o titulares',
          'Planos antecedentes, si los hay',
          'Datos catastrales',
        ],
      },
      {
        title: 'Primera Inscripción',
        paragraphs: [
          'La mensura para primera inscripción se realiza cuando un inmueble no cuenta con antecedentes registrales o catastrales. Permite incorporar la parcela al sistema, otorgándole identidad legal y posibilitando su posterior inscripción en el registro.',
        ],
        items: [
          'Documentación que acredite la posesión o titularidad',
          'DNI del interesado',
          'Antecedentes o información disponible del inmueble',
        ],
      },
      {
        title: 'Anexión',
        paragraphs: [
          'La mensura de anexión permite incorporar una parcela o parte de ella a otra existente, modificando sus límites y superficies. Es una herramienta útil para ajustar configuraciones parcelarias según necesidades específicas.',
        ],
        items: [
          'Títulos de propiedad de las parcelas involucradas',
          'DNI del titular o titulares',
          'Planos antecedentes, si los hay',
          'Datos catastrales',
        ],
      },
    ],
    whatsappMessage:
      'Hola, necesito una mensura urbana o rural. Me gustaría recibir información y presupuesto.',
    keywords: ['mensura la plata', 'agrimensor la plata', 'mensura urbana', 'mensura rural'],
    imagen: '/servicios/mensura.svg',
    planos: [],
  },
  usucapion: {
    slug: 'usucapion',
    title: 'Prescripción Adquisitiva (Usucapión)',
    subtitle: 'Plano técnico para iniciar el trámite de titularidad legal',
    description:
      'Plano técnico que delimita el inmueble y permite iniciar el trámite para obtener la titularidad legal.',
    benefits: [
      'Relevamiento completo del inmueble',
      'Plano de mensura para usucapión',
      'Documentación técnica para respaldar el proceso',
      'Acompañamiento en cada etapa',
    ],
    sections: [
      {
        title: 'Usucapión (Prescripción Adquisitiva)',
        paragraphs: [
          'La mensura para usucapión permite regularizar la situación de un inmueble a partir de la posesión continua, pública y pacífica durante el tiempo que establece la ley. Es el paso técnico necesario para iniciar el proceso judicial y obtener el reconocimiento legal de la propiedad.',
        ],
      },
      {
        title: 'Cuándo lo necesitás',
        paragraphs: [
          'Cuando ocupás un inmueble sin título de propiedad y buscás obtener la titularidad de forma legal.',
        ],
      },
      {
        title: 'Documentación necesaria',
        items: [
          'DNI del interesado',
          'Información sobre la posesión: antigüedad, uso y mejoras',
          'Comprobantes que acrediten ocupación, como impuestos o servicios',
          'Cualquier antecedente o documentación disponible',
        ],
      },
    ],
    whatsappMessage:
      'Hola, necesito iniciar un trámite de usucapión. Quisiera asesoramiento.',
    keywords: ['usucapión la plata', 'agrimensor usucapión', 'prescripción adquisitiva'],
    imagen: '/servicios/usucapion.svg',
    planos: [],
  },
  subdivision: {
    slug: 'subdivision',
    title: 'Subdivisión de Lotes',
    subtitle: 'Dividí tu terreno de forma legal',
    description:
      'Te asesoramos y realizamos todos los trabajos técnicos para subdividir tu terreno, cumpliendo con las normativas municipales y provinciales.',
    benefits: [
      'Análisis de factibilidad de subdivisión',
      'Plano de subdivisión aprobado',
      'Nuevas partidas inmobiliarias',
      'Gestión ante organismos oficiales',
      'Asesoramiento legal-técnico',
    ],
    sections: [],
    whatsappMessage:
      'Hola, quiero subdividir mi terreno. Necesito asesoramiento y presupuesto.',
    keywords: ['subdivisión la plata', 'dividir terreno', 'subdivisión lote'],
    imagen: '/servicios/subdivision.svg',
    planos: [],
  },
  ph: {
    slug: 'ph',
    title: 'Propiedad Horizontal (PH - PHE)',
    subtitle: 'Unidades independientes para vender o administrar por separado',
    description:
      'Transformamos tu propiedad en unidades independientes bajo el régimen de propiedad horizontal, permitiendo vender o administrar cada espacio de forma individual.',
    benefits: [
      'Subdivisión en propiedad horizontal para edificios, locales o cocheras',
      'Propiedad horizontal especial para barrios cerrados y countries',
      'Definición de unidades funcionales y espacios comunes',
      'Documentación técnica con normativa vigente',
    ],
    sections: [
      {
        title: 'Subdivisión en Propiedad Horizontal (PH)',
        paragraphs: [
          'La subdivisión en propiedad horizontal permite dividir un inmueble en unidades funcionales independientes, como departamentos, locales o cocheras, manteniendo espacios comunes. Es la herramienta legal para poder vender, alquilar o administrar cada unidad por separado.',
        ],
        items: [
          'Título de propiedad o escritura',
          'DNI del titular o titulares de dominio',
          'Plano de obra aprobado y empadronado en el municipio correspondiente',
          'Datos catastrales',
        ],
      },
      {
        title: 'Propiedad Horizontal en Barrios Cerrados y Countries (PHE)',
        paragraphs: [
          'La propiedad horizontal en barrios cerrados o countries permite organizar legalmente el desarrollo, definiendo unidades funcionales, lotes o viviendas, y espacios comunes como calles internas, áreas verdes y servicios.',
          'Es fundamental para regularizar el emprendimiento, permitir la escrituración individual de cada unidad y establecer el correcto funcionamiento del conjunto.',
        ],
        items: [
          'Título de propiedad o escritura',
          'Plano de mensura del predio',
          'Antecedentes catastrales',
          'Proyecto o masterplan del desarrollo',
          'Planos de infraestructura y servicios',
          'Reglamentos o documentación previa, si la hubiera',
        ],
      },
    ],
    whatsappMessage:
      'Hola, necesito hacer Propiedad Horizontal. Quisiera información.',
    keywords: ['propiedad horizontal la plata', 'ph la plata', 'phe barrios cerrados'],
    imagen: '/servicios/ph.svg',
    planos: [],
  },
  topografia: {
    slug: 'topografia',
    title: 'Topografía de Precisión para Ingeniería y Construcción',
    subtitle: 'Soluciones topográficas de alta precisión',
    description:
      'Soluciones topográficas de alta precisión para proyectos de ingeniería, obras y servicios para el agro, con tecnología avanzada y resultados confiables en cada etapa.',
    benefits: [
      'GPS geodésico de alta precisión RTK',
      'Estación Total para detalle, replanteos y control en obra',
      'Levantamientos con dron para ortofotos, MDT y nubes de puntos',
      'Apoyo topográfico continuo en obra',
    ],
    sections: [
      {
        title: 'Topografía Integral para Proyectos de Ingeniería y Obras',
        paragraphs: [
          'Brindamos servicios de topografía integral orientados a empresas constructoras, desarrolladores e ingeniería, acompañando proyectos desde su etapa inicial hasta la ejecución y control de obra.',
          'Nos apoyamos en tecnología de última generación, lo que nos permite garantizar precisión, eficiencia y confiabilidad en cada trabajo.',
        ],
        items: [
          'GPS geodésico de alta precisión RTK para georreferenciación y relevamientos de grandes extensiones',
          'Estación Total para mediciones de detalle, replanteos y control milimétrico en obra',
          'Levantamientos con dron UAV para ortofotos, modelos digitales del terreno y nubes de puntos',
        ],
      },
      {
        title: 'Alcance de nuestros servicios',
        items: [
          'Relevamientos planialtimétricos',
          'Replanteos de obra',
          'Cómputo y control de movimientos de suelo',
          'Modelos digitales del terreno',
          'Apoyo topográfico continuo en obra',
        ],
      },
      {
        title: 'Cuándo lo necesitás',
        items: [
          'Etapa de anteproyecto y diseño',
          'Inicio de obra',
          'Seguimiento y control de ejecución',
          'Certificación y verificación de avances',
        ],
      },
      {
        title: 'Qué necesitás aportar',
        items: [
          'Ubicación del proyecto',
          'Alcance y objetivos del trabajo',
          'Información o documentación disponible',
        ],
      },
      {
        title: 'Servicios para el agro',
        paragraphs: [
          'Incorporamos tecnología aplicada al sector agropecuario mediante el uso de drones, permitiendo obtener información clave para optimizar la producción.',
        ],
        items: [
          'Monitoreo y seguimiento de cultivos',
          'Generación de mapas e imágenes aéreas',
          'Detección de variabilidad en lotes',
          'Evaluación del estado general de los cultivos',
          'Apoyo en la toma de decisiones productivas',
        ],
      },
    ],
    whatsappMessage:
      'Hola, necesito un relevamiento topográfico. Quisiera presupuesto.',
    keywords: ['topografía la plata', 'gps rtk', 'relevamiento topográfico', 'dron agro'],
    imagen: '/servicios/topografia.svg',
    planos: [],
  },
  amojonamientos: {
    slug: 'amojonamientos',
    title: 'Deslinde y Amojonamiento',
    subtitle: 'Determinación precisa de límites y materialización en terreno',
    description:
      'Determinación precisa de los límites de tu parcela y materialización en terreno mediante la colocación de mojones.',
    benefits: [
      'Determinación precisa de límites',
      'Colocación de mojones en terreno',
      'Prevención de conflictos con linderos',
      'Acompañamiento técnico durante la medición',
    ],
    sections: [
      {
        title: 'Deslinde y Amojonamiento',
        paragraphs: [
          'El deslinde y amojonamiento permite determinar con precisión los límites de tu terreno y materializarlos en el lugar mediante mojones. Es fundamental para evitar conflictos con linderos y asegurar la correcta ubicación de la parcela.',
        ],
      },
      {
        title: 'Cuándo lo necesitás',
        paragraphs: [
          'Cuando existen dudas sobre los límites, antes de construir, o ante posibles ocupaciones o conflictos con vecinos.',
        ],
      },
      {
        title: 'Documentación necesaria',
        items: [
          'DNI del titular',
          'Plano antecedente, si lo tenés',
          'Datos catastrales',
          'Cualquier información adicional sobre cercos o construcciones existentes',
        ],
      },
    ],
    whatsappMessage:
      'Hola, necesito realizar un deslinde y amojonamiento. Quisiera presupuesto.',
    keywords: ['deslinde la plata', 'amojonamiento la plata', 'límites terreno'],
    imagen: '/servicios/amojonamientos.svg',
    planos: [],
  },
}

export const getAllServicios = () => Object.values(serviciosData)
export const getServicioBySlug = (slug: string) => serviciosData[slug as ServicioSlug]
