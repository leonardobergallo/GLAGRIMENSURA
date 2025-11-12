import { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ServiceHero } from '@/components/service-page/service-hero'
import { ServiceBenefits } from '@/components/service-page/service-benefits'
import { ServiceForm } from '@/components/service-page/service-form'
import { PlanosViewer } from '@/components/service-page/planos-viewer'
import { getServicioBySlug } from '@/lib/servicios-data'

export const metadata: Metadata = {
  title: 'Propiedad Horizontal | GL Agrimensura',
  description: 'Regularizá tu edificio o complejo. Mensuras de Propiedad Horizontal para edificios y unidades funcionales.',
  keywords: ['propiedad horizontal la plata', 'ph la plata', 'dividir departamentos'],
}

export default function PHPage() {
  const servicio = getServicioBySlug('ph')

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

      <ServiceBenefits benefits={servicio.benefits} />

      <ServiceForm servicio={servicio.slug} title={servicio.title} />

      <PlanosViewer planos={servicio.planos} />

      <Footer />
    </main>
  )
}
