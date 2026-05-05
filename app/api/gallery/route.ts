import { NextRequest, NextResponse } from "next/server"
import { asc, eq } from "drizzle-orm"
import { db } from "@/db"
import { galleryItems } from "@/db/schema"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get("category")

  try {
    const query = db.select().from(galleryItems)

    const items = category && category !== "todos"
      ? await query.where(eq(galleryItems.category, category)).orderBy(asc(galleryItems.orden))
      : await query.orderBy(asc(galleryItems.orden))

    return NextResponse.json({ items })
  } catch (error) {
    console.error("Error al obtener imágenes de galería:", error)
    return NextResponse.json(
      { error: "Error al obtener imágenes de galería" },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { category, title, description, imageUrl, thumbnailUrl, orden } = body

    if (!category || !title || !imageUrl) {
      return NextResponse.json(
        { error: "Faltan campos requeridos: category, title, imageUrl" },
        { status: 400 }
      )
    }

    const [item] = await db
      .insert(galleryItems)
      .values({
        category,
        title,
        description,
        imageUrl,
        thumbnailUrl,
        orden: orden || 0,
      })
      .returning()

    return NextResponse.json({ item }, { status: 201 })
  } catch (error) {
    console.error("Error al crear imagen de galería:", error)
    return NextResponse.json(
      { error: "Error al crear imagen de galería" },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { id, category, title, description, imageUrl, thumbnailUrl, orden } = body

    if (!id || !category || !title || !imageUrl) {
      return NextResponse.json(
        { error: "Faltan campos requeridos: id, category, title, imageUrl" },
        { status: 400 }
      )
    }

    const [item] = await db
      .update(galleryItems)
      .set({
        category,
        title,
        description,
        imageUrl,
        thumbnailUrl,
        orden: orden || 0,
        updatedAt: new Date(),
      })
      .where(eq(galleryItems.id, Number(id)))
      .returning()

    return NextResponse.json({ item })
  } catch (error) {
    console.error("Error al actualizar imagen de galerÃ­a:", error)
    return NextResponse.json(
      { error: "Error al actualizar imagen de galerÃ­a" },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get("id")

  if (!id) {
    return NextResponse.json({ error: "ID no especificado" }, { status: 400 })
  }

  try {
    await db.delete(galleryItems).where(eq(galleryItems.id, Number(id)))
    return NextResponse.json({ message: "Imagen eliminada" })
  } catch (error) {
    console.error("Error al eliminar imagen de galería:", error)
    return NextResponse.json(
      { error: "Error al eliminar imagen de galería" },
      { status: 500 }
    )
  }
}
