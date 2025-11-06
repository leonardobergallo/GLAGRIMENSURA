import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { servicios } from "@/lib/servicios"

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
              <Link key={idx} href={`/servicios/${servicio.slug}`}>
                <Card className="border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg cursor-pointer">
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
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
