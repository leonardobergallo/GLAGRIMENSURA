import { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ServiceHero } from '@/components/service-page/service-hero'
import { ServiceDetails } from '@/components/service-page/service-details'
import { ServiceBenefits } from '@/components/service-page/service-benefits'
import { ServiceForm } from '@/components/service-page/service-form'
import { PlanosViewerDB } from '@/components/service-page/planos-viewer-db'
import { ServicePhotosGallery } from '@/components/service-page/service-photos'
import { getServicioBySlug } from '@/lib/servicios-data'

export const metadata: Metadata = {
  title: 'Constitución de Estado Parcelario | GL Agrimensura',
  description:
    'Gestión de documentación técnica para ventas, escrituras y trámites catastrales.',
  keywords: ['estado parcelario la plata', 'constitución de estado parcelario', 'agrimensor la plata'],
}

export default function EstadosParcelariosPage() {
  const servicio = getServicioBySlug('estados-parcelarios')

  if (!servicio) {
    return <div>Servicio no encontrado</div>
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <ServiceHero
        title={servicio.title}
        subtitle={servicio.subtitle}
        description={servicio.description}
        imagen={servicio.imagen}
        whatsappMessage={servicio.whatsappMessage}
      />

      <ServiceDetails sections={servicio.sections} />

      <ServiceBenefits benefits={servicio.benefits} />

      <ServicePhotosGallery servicio="estados-parcelarios" />

      <PlanosViewerDB servicio="estados-parcelarios" />

      <ServiceForm servicio={servicio.slug} title={servicio.title} />

      <Footer />
    </main>
  )
}
