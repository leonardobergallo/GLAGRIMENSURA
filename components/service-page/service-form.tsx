'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { CheckCircle, FileText, MessageCircle, X } from 'lucide-react'
import { ServicioSlug } from '@/lib/servicios-data'
import { UploadButton } from '@/lib/uploadthing'

const optionalText = (message: string, min = 2) =>
  z.string().optional().refine((value) => !value || value.trim().length >= min, message)

const optionalPhone = z
  .string()
  .optional()
  .refine(
    (value) => !value || /^[0-9+\-\s()]{8,}$/.test(value.trim()),
    'Revisá el teléfono. Podés usar números, espacios, +, guiones o paréntesis.'
  )

const baseSchema = z.object({
  nombre: optionalText('Revisá el nombre. Si lo completás, usá al menos 2 caracteres.'),
  telefono: optionalPhone,
  mensaje: z.string().optional(),
})

const schemas: Record<ServicioSlug, z.ZodType<any>> = {
  'estados-parcelarios': baseSchema.extend({
    direccion: optionalText('Revisá la dirección. Si la completás, usá al menos 5 caracteres.', 5),
    partido: optionalText('Revisá el partido. Si lo completás, usá al menos 2 caracteres.'),
    partida: z.string().optional(),
    nomenclatura: z.string().optional(),
  }),
  mensura: baseSchema.extend({
    direccion: optionalText('Revisá la dirección. Si la completás, usá al menos 5 caracteres.', 5),
    partido: optionalText('Revisá el partido. Si lo completás, usá al menos 2 caracteres.'),
  }),
  usucapion: baseSchema.extend({
    direccion: optionalText('Revisá la dirección. Si la completás, usá al menos 5 caracteres.', 5),
    partido: optionalText('Revisá el partido. Si lo completás, usá al menos 2 caracteres.'),
    superficie: z.string().optional(),
    aniosPosesion: z.string().optional(),
  }),
  subdivision: baseSchema.extend({
    direccion: optionalText('Revisá la dirección. Si la completás, usá al menos 5 caracteres.', 5),
    partido: optionalText('Revisá el partido. Si lo completás, usá al menos 2 caracteres.'),
    superficieTotal: z.string().optional(),
    lotesDeseados: z.string().optional(),
  }),
  ph: baseSchema.extend({
    direccion: optionalText('Revisá la dirección. Si la completás, usá al menos 5 caracteres.', 5),
    partido: optionalText('Revisá el partido. Si lo completás, usá al menos 2 caracteres.'),
    cantidadUnidades: z.string().optional(),
    tipoInmueble: z.string().optional(),
  }),
  topografia: baseSchema.extend({
    ubicacion: optionalText('Revisá la ubicación. Si la completás, usá al menos 5 caracteres.', 5),
    tipoTrabajo: z.string().optional(),
  }),
  amojonamientos: baseSchema.extend({
    direccion: optionalText('Revisá la dirección. Si la completás, usá al menos 5 caracteres.', 5),
    partido: optionalText('Revisá el partido. Si lo completás, usá al menos 2 caracteres.'),
    cantidadMojones: z.string().optional(),
  }),
}

interface ServiceFormProps {
  servicio: ServicioSlug
  title: string
  phoneNumber?: string
}

export function ServiceForm({ servicio, title, phoneNumber = '5492212230052' }: ServiceFormProps) {
  const [isSuccess, setIsSuccess] = useState(false)
  const [documentoUrl, setDocumentoUrl] = useState<string>('')
  const [documentoNombre, setDocumentoNombre] = useState<string>('')
  const [mostrarAdjunto, setMostrarAdjunto] = useState(false)

  const form = useForm({
    resolver: zodResolver(schemas[servicio]),
    defaultValues: {
      nombre: '',
      telefono: '',
      mensaje: '',
    },
  })

  const handleWhatsAppSubmit = (data: any) => {
    const pageUrl = typeof window !== 'undefined' ? window.location.href : ''
    const mensaje = formatWhatsAppMessage(data, title, pageUrl, documentoUrl)
    const encodedMessage = encodeURIComponent(mensaje)
    const whatsappUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    setIsSuccess(true)

    setTimeout(() => {
      form.reset()
      setDocumentoUrl('')
      setDocumentoNombre('')
      setMostrarAdjunto(false)
      setIsSuccess(false)
    }, 3000)
  }

  if (isSuccess) {
    return (
      <Card className="mx-auto max-w-2xl">
        <CardContent className="py-12 text-center">
          <CheckCircle className="mx-auto mb-4 h-16 w-16 text-green-500" />
          <h3 className="mb-2 text-2xl font-bold">Consulta abierta en WhatsApp</h3>
          <p className="text-muted-foreground">
            Se abrió WhatsApp Web con el mensaje preparado para enviar.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-2xl px-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-heading">Solicitá tu presupuesto</CardTitle>
            <CardDescription>
              Completá solo los datos que quieras compartir. La consulta se envía por WhatsApp.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <FormField
                  id="nombre"
                  label="Nombre completo"
                  placeholder="Juan Pérez"
                  register={form.register('nombre')}
                  error={form.formState.errors.nombre?.message as string}
                />
                <FormField
                  id="telefono"
                  label="Teléfono"
                  placeholder="+54 9 221 223-0052"
                  register={form.register('telefono')}
                  error={form.formState.errors.telefono?.message as string}
                />
              </div>

              {renderSpecificFields(servicio, form)}

              <div>
                <Label htmlFor="mensaje">Mensaje adicional</Label>
                <Textarea
                  id="mensaje"
                  {...form.register('mensaje')}
                  placeholder="Contanos más detalles sobre tu consulta..."
                  rows={4}
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="mostrarAdjunto"
                  checked={mostrarAdjunto}
                  onChange={(e) => setMostrarAdjunto(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <Label htmlFor="mostrarAdjunto" className="cursor-pointer text-sm">
                  Deseo adjuntar un documento (opcional)
                </Label>
              </div>

              {mostrarAdjunto && (
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                  <Label htmlFor="documento">Documento adjunto</Label>
                  <p className="mb-2 text-sm text-muted-foreground">
                    Podés subir un PDF, documento o imagen relacionada con tu consulta.
                  </p>
                  {!documentoUrl ? (
                    <div className="rounded-lg border-2 border-dashed border-gray-300 p-4">
                      <UploadButton
                        endpoint="consultaDocumentos"
                        onClientUploadComplete={(res: any) => {
                          if (res?.[0]?.url) {
                            setDocumentoUrl(res[0].url)
                            setDocumentoNombre(res[0].name || 'Documento adjunto')
                          }
                        }}
                        onUploadError={(error: Error) => {
                          alert(`Error al subir el documento: ${error.message}`)
                        }}
                      />
                    </div>
                  ) : (
                    <div className="flex items-center justify-between rounded-lg border border-green-200 bg-green-50 p-3">
                      <div className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-green-600" />
                        <div>
                          <p className="text-sm font-medium text-green-900">{documentoNombre}</p>
                          <p className="max-w-xs truncate text-xs text-green-600">{documentoUrl}</p>
                        </div>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setDocumentoUrl('')
                          setDocumentoNombre('')
                        }}
                        className="text-red-600 hover:bg-red-50 hover:text-red-700"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </div>
              )}

              <div className="pt-6">
                <Button
                  type="button"
                  onClick={form.handleSubmit(handleWhatsAppSubmit)}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 font-bold text-white shadow-lg hover:from-green-600 hover:to-green-700"
                  style={{ height: '56px', fontSize: '16px' }}
                >
                  <MessageCircle className="mr-2 h-6 w-6" />
                  Enviar por WhatsApp
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

function FormField({
  id,
  label,
  placeholder,
  register,
  error,
}: {
  id: string
  label: string
  placeholder?: string
  register: any
  error?: string
}) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} {...register} placeholder={placeholder} />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  )
}

function renderSpecificFields(servicio: ServicioSlug, form: any) {
  const error = (name: string) => form.formState.errors[name]?.message as string | undefined

  switch (servicio) {
    case 'estados-parcelarios':
      return (
        <>
          <div className="grid gap-4 md:grid-cols-2">
            <FormField id="direccion" label="Dirección" register={form.register('direccion')} error={error('direccion')} />
            <FormField id="partido" label="Partido" register={form.register('partido')} error={error('partido')} />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <FormField id="partida" label="Partida inmobiliaria" register={form.register('partida')} />
            <FormField id="nomenclatura" label="Nomenclatura catastral" register={form.register('nomenclatura')} />
          </div>
        </>
      )
    case 'mensura':
      return (
        <div className="grid gap-4 md:grid-cols-2">
          <FormField id="direccion" label="Dirección" register={form.register('direccion')} error={error('direccion')} />
          <FormField id="partido" label="Partido" register={form.register('partido')} error={error('partido')} />
        </div>
      )
    case 'usucapion':
      return (
        <>
          <div className="grid gap-4 md:grid-cols-2">
            <FormField id="direccion" label="Dirección" register={form.register('direccion')} error={error('direccion')} />
            <FormField id="partido" label="Partido" register={form.register('partido')} error={error('partido')} />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <FormField id="superficie" label="Superficie aproximada" placeholder="Ej: 300 m²" register={form.register('superficie')} />
            <FormField id="aniosPosesion" label="Años de posesión" placeholder="Ej: 20 años" register={form.register('aniosPosesion')} />
          </div>
        </>
      )
    case 'subdivision':
      return (
        <>
          <div className="grid gap-4 md:grid-cols-2">
            <FormField id="direccion" label="Dirección" register={form.register('direccion')} error={error('direccion')} />
            <FormField id="partido" label="Partido" register={form.register('partido')} error={error('partido')} />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <FormField id="superficieTotal" label="Superficie total" placeholder="Ej: 1000 m²" register={form.register('superficieTotal')} />
            <FormField id="lotesDeseados" label="Cantidad de lotes" placeholder="Ej: 4 lotes" register={form.register('lotesDeseados')} />
          </div>
        </>
      )
    case 'ph':
      return (
        <>
          <div className="grid gap-4 md:grid-cols-2">
            <FormField id="direccion" label="Dirección" register={form.register('direccion')} error={error('direccion')} />
            <FormField id="partido" label="Partido" register={form.register('partido')} error={error('partido')} />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <FormField id="cantidadUnidades" label="Cantidad de unidades" placeholder="Ej: 8 unidades" register={form.register('cantidadUnidades')} />
            <FormField id="tipoInmueble" label="Tipo de inmueble" placeholder="Edificio, dúplex, etc." register={form.register('tipoInmueble')} />
          </div>
        </>
      )
    case 'topografia':
      return (
        <div className="grid gap-4 md:grid-cols-2">
          <FormField id="ubicacion" label="Ubicación" register={form.register('ubicacion')} error={error('ubicacion')} />
          <FormField id="tipoTrabajo" label="Tipo de trabajo" placeholder="Relevamiento, replanteo..." register={form.register('tipoTrabajo')} />
        </div>
      )
    case 'amojonamientos':
      return (
        <>
          <div className="grid gap-4 md:grid-cols-2">
            <FormField id="direccion" label="Dirección" register={form.register('direccion')} error={error('direccion')} />
            <FormField id="partido" label="Partido" register={form.register('partido')} error={error('partido')} />
          </div>
          <FormField id="cantidadMojones" label="Cantidad de mojones estimados" placeholder="Ej: 4 esquinas" register={form.register('cantidadMojones')} />
        </>
      )
    default:
      return null
  }
}

function formatWhatsAppMessage(data: any, title: string, pageUrl: string, documentoUrl?: string): string {
  let mensaje = `*Consulta por servicio: ${title}*\n`
  if (pageUrl) mensaje += `*Página:* ${pageUrl}\n`
  mensaje += '\n'

  const fields: [string, string][] = [
    ['Nombre', data.nombre],
    ['Teléfono', data.telefono],
    ['Dirección', data.direccion],
    ['Partido', data.partido],
    ['Ubicación', data.ubicacion],
    ['Partida inmobiliaria', data.partida],
    ['Nomenclatura catastral', data.nomenclatura],
    ['Superficie aproximada', data.superficie],
    ['Superficie total', data.superficieTotal],
    ['Años de posesión', data.aniosPosesion],
    ['Lotes deseados', data.lotesDeseados],
    ['Cantidad de unidades', data.cantidadUnidades],
    ['Tipo de inmueble', data.tipoInmueble],
    ['Tipo de trabajo', data.tipoTrabajo],
    ['Cantidad de mojones', data.cantidadMojones],
  ]

  fields.forEach(([label, value]) => {
    if (value?.trim()) mensaje += `*${label}:* ${value.trim()}\n`
  })

  if (data.mensaje?.trim()) mensaje += `\n*Mensaje:*\n${data.mensaje.trim()}`
  if (documentoUrl) mensaje += `\n\n*Documento adjunto:*\n${documentoUrl}`

  return mensaje.trim()
}
