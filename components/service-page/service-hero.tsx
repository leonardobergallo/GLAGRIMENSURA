'use client'

import { Button } from '@/components/ui/button'
import { Mail, MessageCircle } from 'lucide-react'
import Image from 'next/image'

interface ServiceHeroProps {
  title: string
  subtitle: string
  description: string
  imagen: string
  whatsappMessage: string
  phoneNumber?: string
}

export function ServiceHero({
  title,
  subtitle,
  description,
  imagen,
  whatsappMessage,
  phoneNumber = '5492212230052'
}: ServiceHeroProps) {
  const handleWhatsApp = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  const handleEmail = () => {
    const subject = encodeURIComponent(`Consulta: ${title}`)
    const body = encodeURIComponent(whatsappMessage)
    window.location.href = `mailto:agrimensorglucero@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="relative min-h-[70vh] flex items-center">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imagen}
          alt={title}
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-heading">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-6 font-heading">
            {subtitle}
          </p>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            {description}
          </p>

          {/* CTAs - Botones más grandes */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={handleWhatsApp}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold shadow-lg"
              style={{ height: '56px', fontSize: '16px', paddingLeft: '32px', paddingRight: '32px' }}
            >
              <MessageCircle className="mr-2 h-6 w-6" />
              Consultar por WhatsApp
            </Button>
            <Button
              onClick={handleEmail}
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm font-bold"
              style={{ height: '56px', fontSize: '16px', paddingLeft: '32px', paddingRight: '32px' }}
            >
              <Mail className="mr-2 h-6 w-6" />
              Enviar Email
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
