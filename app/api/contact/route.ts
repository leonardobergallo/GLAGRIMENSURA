import { NextResponse } from 'next/server'

export async function POST() {
  return NextResponse.json(
    {
      success: false,
      message: 'El sitio gestiona las consultas únicamente por WhatsApp.',
      whatsappUrl: 'https://web.whatsapp.com/send?phone=5492212230052',
    },
    { status: 410 }
  )
}
