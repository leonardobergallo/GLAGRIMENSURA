import { servicios } from "@/lib/servicios"
import { notFound } from "next/navigation"

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return servicios.map((servicio) => ({
    slug: servicio.slug,
  }))
}

export default async function ServicioPage({ params }: PageProps) {
  const { slug } = await params
  const servicio = servicios.find((s) => s.slug === slug)

  if (!servicio) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-32">
        <h1 className="text-7xl md:text-9xl font-bold text-primary text-center">
          {servicio.title}
        </h1>
      </div>
    </main>
  )
}

