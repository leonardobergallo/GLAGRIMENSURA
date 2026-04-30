import { CheckCircle2 } from 'lucide-react'
import { ServicioSection } from '@/lib/servicios-data'

interface ServiceDetailsProps {
  sections: ServicioSection[]
}

export function ServiceDetails({ sections }: ServiceDetailsProps) {
  if (sections.length === 0) {
    return null
  }

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="space-y-8">
          {sections.map((section) => (
            <article
              key={section.title}
              className="rounded-md border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <h2 className="mb-4 text-3xl font-bold text-primary font-heading">
                {section.title}
              </h2>

              {section.paragraphs?.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mb-4 text-lg leading-relaxed text-slate-700 last:mb-0"
                >
                  {paragraph}
                </p>
              ))}

              {section.items && (
                <ul className="mt-5 grid gap-3 md:grid-cols-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-lg text-slate-800">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-amber-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
