"use client"

import { useEffect, useState } from "react"
import { ExternalLink, FileText, Pencil, Trash2, X } from "lucide-react"
import { AdminAuth } from "@/components/admin-auth"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { UploadButton } from "@/lib/uploadthing"

const servicios = [
  { slug: "estados-parcelarios", nombre: "Estados parcelarios" },
  { slug: "mensura", nombre: "Mensuras" },
  { slug: "usucapion", nombre: "Usucapion" },
  { slug: "subdivision", nombre: "Subdivision" },
  { slug: "ph", nombre: "Propiedad Horizontal" },
  { slug: "topografia", nombre: "Topografia" },
  { slug: "amojonamientos", nombre: "Amojonamientos" },
]

const categoriasCarrusel = [
  { slug: "urbano", nombre: "Urbano" },
  { slug: "rural", nombre: "Rural" },
  { slug: "gps", nombre: "GPS/Topografia" },
  { slug: "equipos", nombre: "Equipos" },
]

type GalleryItem = {
  id: number
  category: string
  title: string
  description: string | null
  imageUrl: string
  thumbnailUrl: string | null
  orden: number | null
}

type ServicePhoto = {
  id: number
  servicioSlug: string
  title: string
  description: string | null
  imageUrl: string
  thumbnailUrl: string | null
  orden: number | null
}

type Plano = {
  id: number
  servicioSlug: string
  title: string
  description: string | null
  fileUrl: string
  fileType: string
  thumbnailUrl: string | null
  orden: number | null
}

function getServicioName(slug: string) {
  return servicios.find((servicio) => servicio.slug === slug)?.nombre || slug
}

function getCategoryName(slug: string) {
  return categoriasCarrusel.find((categoria) => categoria.slug === slug)?.nombre || slug
}

function EmptyState({ text }: { text: string }) {
  return (
    <div className="rounded-md border border-dashed p-6 text-center text-sm text-gray-500">
      {text}
    </div>
  )
}

function ImagePreview({
  title,
  description,
  imageUrl,
  badge,
}: {
  title: string
  description?: string
  imageUrl: string
  badge: string
}) {
  return (
    <div className="overflow-hidden rounded-md border bg-white">
      <div className="relative aspect-video bg-gray-100">
        <img
          src={imageUrl}
          alt={title || "Vista previa"}
          className="h-full w-full object-cover"
        />
        <Badge className="absolute left-3 top-3 bg-amber-500 text-black">{badge}</Badge>
      </div>
      <div className="space-y-1 p-4">
        <h3 className="font-semibold">{title || "Sin titulo todavia"}</h3>
        {description ? (
          <p className="text-sm text-gray-600">{description}</p>
        ) : (
          <p className="text-sm text-gray-400">Sin descripcion</p>
        )}
      </div>
    </div>
  )
}

function PlanoPreview({
  title,
  description,
  fileUrl,
  fileType,
  badge,
}: {
  title: string
  description?: string
  fileUrl: string
  fileType: string
  badge: string
}) {
  const isPdf = fileType === "pdf"

  return (
    <div className="overflow-hidden rounded-md border bg-white">
      <div className="flex aspect-video items-center justify-center bg-gray-100">
        {isPdf ? (
          <div className="text-center text-gray-600">
            <FileText className="mx-auto mb-2 h-12 w-12" />
            <p className="text-sm font-medium">Archivo PDF</p>
          </div>
        ) : (
          <img
            src={fileUrl}
            alt={title || "Vista previa del plano"}
            className="h-full w-full object-contain"
          />
        )}
      </div>
      <div className="space-y-2 p-4">
        <Badge variant="outline">{badge}</Badge>
        <h3 className="font-semibold">{title || "Sin titulo todavia"}</h3>
        {description ? (
          <p className="text-sm text-gray-600">{description}</p>
        ) : (
          <p className="text-sm text-gray-400">Sin descripcion</p>
        )}
        <a
          href={fileUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium text-blue-600"
        >
          Abrir archivo <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  )
}

export default function AdminPage() {
  const [selectedServicio, setSelectedServicio] = useState("")

  const [photoTitle, setPhotoTitle] = useState("")
  const [photoDescription, setPhotoDescription] = useState("")
  const [photoUrl, setPhotoUrl] = useState("")
  const [editingPhotoId, setEditingPhotoId] = useState<number | null>(null)
  const [photos, setPhotos] = useState<ServicePhoto[]>([])

  const [planoTitle, setPlanoTitle] = useState("")
  const [planoDescription, setPlanoDescription] = useState("")
  const [planoUrl, setPlanoUrl] = useState("")
  const [planoType, setPlanoType] = useState("")
  const [editingPlanoId, setEditingPlanoId] = useState<number | null>(null)
  const [planos, setPlanos] = useState<Plano[]>([])

  const [galleryCategory, setGalleryCategory] = useState("")
  const [galleryTitle, setGalleryTitle] = useState("")
  const [galleryDescription, setGalleryDescription] = useState("")
  const [galleryUrl, setGalleryUrl] = useState("")
  const [editingGalleryId, setEditingGalleryId] = useState<number | null>(null)
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([])

  const fetchGallery = async () => {
    const response = await fetch("/api/gallery", { cache: "no-store" })
    if (!response.ok) return
    const data = await response.json()
    setGalleryItems(data.items || [])
  }

  const fetchPhotos = async (servicio: string) => {
    if (!servicio) {
      setPhotos([])
      return
    }
    const response = await fetch(`/api/photos?servicio=${servicio}`, { cache: "no-store" })
    if (!response.ok) return
    const data = await response.json()
    setPhotos(data.photos || [])
  }

  const fetchPlanos = async (servicio: string) => {
    if (!servicio) {
      setPlanos([])
      return
    }
    const response = await fetch(`/api/planos?servicio=${servicio}`, { cache: "no-store" })
    if (!response.ok) return
    const data = await response.json()
    setPlanos(data.planos || [])
  }

  useEffect(() => {
    fetchGallery()
  }, [])

  useEffect(() => {
    fetchPhotos(selectedServicio)
    fetchPlanos(selectedServicio)
  }, [selectedServicio])

  const clearGalleryForm = () => {
    setGalleryTitle("")
    setGalleryDescription("")
    setGalleryUrl("")
    setGalleryCategory("")
    setEditingGalleryId(null)
  }

  const clearPhotoForm = () => {
    setPhotoTitle("")
    setPhotoDescription("")
    setPhotoUrl("")
    setEditingPhotoId(null)
  }

  const clearPlanoForm = () => {
    setPlanoTitle("")
    setPlanoDescription("")
    setPlanoUrl("")
    setPlanoType("")
    setEditingPlanoId(null)
  }

  const handleSaveGalleryImage = async () => {
    if (!galleryCategory || !galleryTitle || !galleryUrl) {
      alert("Por favor completa categoria, titulo e imagen")
      return
    }

    try {
      const response = await fetch("/api/gallery", {
        method: editingGalleryId ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: editingGalleryId,
          category: galleryCategory,
          title: galleryTitle,
          description: galleryDescription,
          imageUrl: galleryUrl,
        }),
      })

      if (response.ok) {
        alert(editingGalleryId ? "Imagen actualizada." : "Imagen agregada al carrusel principal.")
        clearGalleryForm()
        fetchGallery()
      } else {
        alert("Error al guardar la imagen del carrusel")
      }
    } catch (error) {
      console.error(error)
      alert("Error al guardar la imagen del carrusel")
    }
  }

  const handleSavePhoto = async () => {
    if (!selectedServicio || !photoTitle || !photoUrl) {
      alert("Por favor completa todos los campos requeridos")
      return
    }

    try {
      const response = await fetch("/api/photos", {
        method: editingPhotoId ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: editingPhotoId,
          servicioSlug: selectedServicio,
          title: photoTitle,
          description: photoDescription,
          imageUrl: photoUrl,
        }),
      })

      if (response.ok) {
        alert(editingPhotoId ? "Foto actualizada." : "Foto guardada exitosamente.")
        clearPhotoForm()
        fetchPhotos(selectedServicio)
      } else {
        alert("Error al guardar la foto")
      }
    } catch (error) {
      console.error(error)
      alert("Error al guardar la foto")
    }
  }

  const handleSavePlano = async () => {
    if (!selectedServicio || !planoTitle || !planoUrl || !planoType) {
      alert("Por favor completa todos los campos requeridos")
      return
    }

    try {
      const response = await fetch("/api/planos", {
        method: editingPlanoId ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: editingPlanoId,
          servicioSlug: selectedServicio,
          title: planoTitle,
          description: planoDescription,
          fileUrl: planoUrl,
          fileType: planoType,
        }),
      })

      if (response.ok) {
        alert(editingPlanoId ? "Plano actualizado." : "Plano guardado exitosamente.")
        clearPlanoForm()
        fetchPlanos(selectedServicio)
      } else {
        alert("Error al guardar el plano")
      }
    } catch (error) {
      console.error(error)
      alert("Error al guardar el plano")
    }
  }

  const deleteItem = async (type: "gallery" | "photos" | "planos", id: number) => {
    const labels = {
      gallery: "esta imagen del carrusel",
      photos: "esta foto",
      planos: "este plano",
    }

    if (!confirm(`Seguro que queres eliminar ${labels[type]}?`)) return

    const response = await fetch(`/api/${type}?id=${id}`, { method: "DELETE" })
    if (!response.ok) {
      alert("No se pudo eliminar")
      return
    }

    if (type === "gallery") fetchGallery()
    if (type === "photos") fetchPhotos(selectedServicio)
    if (type === "planos") fetchPlanos(selectedServicio)
  }

  return (
    <AdminAuth>
      <div className="min-h-screen bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <h1 className="mb-8 text-center text-4xl font-bold">Gestion de Contenido</h1>

          <Tabs defaultValue="gallery" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="gallery">Carrusel principal</TabsTrigger>
              <TabsTrigger value="photos">Fotos servicios</TabsTrigger>
              <TabsTrigger value="planos">Planos</TabsTrigger>
            </TabsList>

            <TabsContent value="gallery" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>
                    {editingGalleryId ? "Editar foto del carrusel" : "Subir foto al carrusel de la pagina principal"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid gap-6 lg:grid-cols-[1fr_320px]">
                  <div className="space-y-4">
                    <div>
                      <Label>Categoria *</Label>
                      <Select value={galleryCategory} onValueChange={setGalleryCategory}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona una categoria" />
                        </SelectTrigger>
                        <SelectContent>
                          {categoriasCarrusel.map((categoria) => (
                            <SelectItem key={categoria.slug} value={categoria.slug}>
                              {categoria.nombre}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label>Archivo</Label>
                      <div className="mt-2">
                        <UploadButton
                          endpoint="galleryImages"
                          onClientUploadComplete={(res: any) => {
                            if (res?.[0]?.url) {
                              setGalleryUrl(res[0].url)
                              alert("Imagen subida. Revisala en la vista previa antes de guardar.")
                            }
                          }}
                          onUploadError={(error: Error) => {
                            alert(`Error: ${error.message}`)
                          }}
                        />
                      </div>
                      {galleryUrl && <p className="mt-2 truncate text-xs text-gray-500">{galleryUrl}</p>}
                    </div>

                    <div>
                      <Label htmlFor="gallery-title">Titulo *</Label>
                      <Input
                        id="gallery-title"
                        value={galleryTitle}
                        onChange={(e) => setGalleryTitle(e.target.value)}
                        placeholder="Ej: Relevamiento topografico en La Plata"
                      />
                    </div>

                    <div>
                      <Label htmlFor="gallery-description">Descripcion</Label>
                      <Textarea
                        id="gallery-description"
                        value={galleryDescription}
                        onChange={(e) => setGalleryDescription(e.target.value)}
                        placeholder="Descripcion opcional de la imagen"
                      />
                    </div>

                    <div className="flex gap-2">
                      <Button
                        onClick={handleSaveGalleryImage}
                        disabled={!galleryCategory || !galleryTitle || !galleryUrl}
                        className="flex-1"
                      >
                        {editingGalleryId ? "Guardar cambios" : "Publicar en carrusel"}
                      </Button>
                      {editingGalleryId && (
                        <Button variant="outline" onClick={clearGalleryForm}>
                          <X className="mr-2 h-4 w-4" />
                          Cancelar
                        </Button>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label>Vista previa antes de publicar</Label>
                    <div className="mt-2">
                      {galleryUrl ? (
                        <ImagePreview
                          title={galleryTitle}
                          description={galleryDescription}
                          imageUrl={galleryUrl}
                          badge={galleryCategory ? getCategoryName(galleryCategory) : "Sin categoria"}
                        />
                      ) : (
                        <EmptyState text="Cuando subas una imagen, aca vas a ver como quedaria antes de publicarla." />
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Publicado en el carrusel</CardTitle>
                </CardHeader>
                <CardContent>
                  {galleryItems.length === 0 ? (
                    <EmptyState text="Todavia no hay imagenes cargadas en la base." />
                  ) : (
                    <div className="grid gap-4 md:grid-cols-2">
                      {galleryItems.map((item) => (
                        <ImagePreview
                          key={item.id}
                          title={item.title}
                          description={item.description || ""}
                          imageUrl={item.thumbnailUrl || item.imageUrl}
                          badge={getCategoryName(item.category)}
                        />
                      ))}
                    </div>
                  )}
                  <div className="mt-4 grid gap-2">
                    {galleryItems.map((item) => (
                      <div key={item.id} className="flex items-center justify-between gap-3 rounded-md border bg-white p-3">
                        <span className="truncate text-sm font-medium">{item.title}</span>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => {
                              setEditingGalleryId(item.id)
                              setGalleryCategory(item.category)
                              setGalleryTitle(item.title)
                              setGalleryDescription(item.description || "")
                              setGalleryUrl(item.imageUrl)
                              window.scrollTo({ top: 0, behavior: "smooth" })
                            }}
                          >
                            <Pencil className="mr-2 h-4 w-4" />
                            Editar
                          </Button>
                          <Button size="sm" variant="destructive" onClick={() => deleteItem("gallery", item.id)}>
                            <Trash2 className="mr-2 h-4 w-4" />
                            Eliminar
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="photos" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Seleccionar servicio</CardTitle>
                </CardHeader>
                <CardContent>
                  <Select value={selectedServicio} onValueChange={setSelectedServicio}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona un servicio" />
                    </SelectTrigger>
                    <SelectContent>
                      {servicios.map((servicio) => (
                        <SelectItem key={servicio.slug} value={servicio.slug}>
                          {servicio.nombre}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{editingPhotoId ? "Editar foto" : "Subir foto"}</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-6 lg:grid-cols-[1fr_320px]">
                  <div className="space-y-4">
                    <div>
                      <Label>Archivo</Label>
                      <div className="mt-2">
                        <UploadButton
                          endpoint="servicePhotos"
                          onClientUploadComplete={(res: any) => {
                            if (res?.[0]?.url) {
                              setPhotoUrl(res[0].url)
                              alert("Imagen subida. Revisala en la vista previa antes de guardar.")
                            }
                          }}
                          onUploadError={(error: Error) => {
                            alert(`Error: ${error.message}`)
                          }}
                        />
                      </div>
                      {photoUrl && <p className="mt-2 truncate text-xs text-gray-500">{photoUrl}</p>}
                    </div>

                    <div>
                      <Label htmlFor="photo-title">Titulo *</Label>
                      <Input
                        id="photo-title"
                        value={photoTitle}
                        onChange={(e) => setPhotoTitle(e.target.value)}
                        placeholder="Ej: Mensura en zona urbana"
                      />
                    </div>

                    <div>
                      <Label htmlFor="photo-description">Descripcion</Label>
                      <Textarea
                        id="photo-description"
                        value={photoDescription}
                        onChange={(e) => setPhotoDescription(e.target.value)}
                        placeholder="Descripcion opcional de la foto"
                      />
                    </div>

                    <div className="flex gap-2">
                      <Button
                        onClick={handleSavePhoto}
                        disabled={!selectedServicio || !photoTitle || !photoUrl}
                        className="flex-1"
                      >
                        {editingPhotoId ? "Guardar cambios" : "Publicar foto"}
                      </Button>
                      {editingPhotoId && (
                        <Button variant="outline" onClick={clearPhotoForm}>
                          <X className="mr-2 h-4 w-4" />
                          Cancelar
                        </Button>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label>Vista previa antes de publicar</Label>
                    <div className="mt-2">
                      {photoUrl ? (
                        <ImagePreview
                          title={photoTitle}
                          description={photoDescription}
                          imageUrl={photoUrl}
                          badge={selectedServicio ? getServicioName(selectedServicio) : "Sin servicio"}
                        />
                      ) : (
                        <EmptyState text="Cuando subas una foto, aca vas a ver como quedaria en el servicio." />
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Fotos publicadas</CardTitle>
                </CardHeader>
                <CardContent>
                  {!selectedServicio ? (
                    <EmptyState text="Selecciona un servicio para ver, editar o eliminar sus fotos." />
                  ) : photos.length === 0 ? (
                    <EmptyState text="Este servicio todavia no tiene fotos cargadas." />
                  ) : (
                    <div className="grid gap-4 md:grid-cols-2">
                      {photos.map((photo) => (
                        <div key={photo.id} className="space-y-2">
                          <ImagePreview
                            title={photo.title}
                            description={photo.description || ""}
                            imageUrl={photo.thumbnailUrl || photo.imageUrl}
                            badge={getServicioName(photo.servicioSlug)}
                          />
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="flex-1"
                              onClick={() => {
                                setEditingPhotoId(photo.id)
                                setPhotoTitle(photo.title)
                                setPhotoDescription(photo.description || "")
                                setPhotoUrl(photo.imageUrl)
                                window.scrollTo({ top: 0, behavior: "smooth" })
                              }}
                            >
                              <Pencil className="mr-2 h-4 w-4" />
                              Editar
                            </Button>
                            <Button size="sm" variant="destructive" onClick={() => deleteItem("photos", photo.id)}>
                              <Trash2 className="mr-2 h-4 w-4" />
                              Eliminar
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="planos" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Seleccionar servicio</CardTitle>
                </CardHeader>
                <CardContent>
                  <Select value={selectedServicio} onValueChange={setSelectedServicio}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona un servicio" />
                    </SelectTrigger>
                    <SelectContent>
                      {servicios.map((servicio) => (
                        <SelectItem key={servicio.slug} value={servicio.slug}>
                          {servicio.nombre}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{editingPlanoId ? "Editar plano" : "Subir plano"}</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-6 lg:grid-cols-[1fr_320px]">
                  <div className="space-y-4">
                    <div>
                      <Label>Archivo (PDF o imagen)</Label>
                      <div className="mt-2">
                        <UploadButton
                          endpoint="planos"
                          onClientUploadComplete={(res: any) => {
                            if (res?.[0]?.url) {
                              setPlanoUrl(res[0].url)
                              const ext = res[0].url.split(".").pop()?.toLowerCase()
                              setPlanoType(ext === "pdf" ? "pdf" : "image")
                              alert("Plano subido. Revisalo en la vista previa antes de guardar.")
                            }
                          }}
                          onUploadError={(error: Error) => {
                            alert(`Error: ${error.message}`)
                          }}
                        />
                      </div>
                      {planoUrl && <p className="mt-2 truncate text-xs text-gray-500">{planoUrl}</p>}
                    </div>

                    <div>
                      <Label htmlFor="plano-title">Titulo *</Label>
                      <Input
                        id="plano-title"
                        value={planoTitle}
                        onChange={(e) => setPlanoTitle(e.target.value)}
                        placeholder="Ej: Plano de mensura Partida 123456"
                      />
                    </div>

                    <div>
                      <Label htmlFor="plano-description">Descripcion</Label>
                      <Textarea
                        id="plano-description"
                        value={planoDescription}
                        onChange={(e) => setPlanoDescription(e.target.value)}
                        placeholder="Descripcion opcional del plano"
                      />
                    </div>

                    <div className="flex gap-2">
                      <Button
                        onClick={handleSavePlano}
                        disabled={!selectedServicio || !planoTitle || !planoUrl}
                        className="flex-1"
                      >
                        {editingPlanoId ? "Guardar cambios" : "Publicar plano"}
                      </Button>
                      {editingPlanoId && (
                        <Button variant="outline" onClick={clearPlanoForm}>
                          <X className="mr-2 h-4 w-4" />
                          Cancelar
                        </Button>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label>Vista previa antes de publicar</Label>
                    <div className="mt-2">
                      {planoUrl ? (
                        <PlanoPreview
                          title={planoTitle}
                          description={planoDescription}
                          fileUrl={planoUrl}
                          fileType={planoType}
                          badge={selectedServicio ? getServicioName(selectedServicio) : "Sin servicio"}
                        />
                      ) : (
                        <EmptyState text="Cuando subas un plano, aca vas a ver que archivo se publicaria." />
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Planos publicados</CardTitle>
                </CardHeader>
                <CardContent>
                  {!selectedServicio ? (
                    <EmptyState text="Selecciona un servicio para ver, editar o eliminar sus planos." />
                  ) : planos.length === 0 ? (
                    <EmptyState text="Este servicio todavia no tiene planos cargados." />
                  ) : (
                    <div className="grid gap-4 md:grid-cols-2">
                      {planos.map((plano) => (
                        <div key={plano.id} className="space-y-2">
                          <PlanoPreview
                            title={plano.title}
                            description={plano.description || ""}
                            fileUrl={plano.thumbnailUrl || plano.fileUrl}
                            fileType={plano.fileType}
                            badge={getServicioName(plano.servicioSlug)}
                          />
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="flex-1"
                              onClick={() => {
                                setEditingPlanoId(plano.id)
                                setPlanoTitle(plano.title)
                                setPlanoDescription(plano.description || "")
                                setPlanoUrl(plano.fileUrl)
                                setPlanoType(plano.fileType)
                                window.scrollTo({ top: 0, behavior: "smooth" })
                              }}
                            >
                              <Pencil className="mr-2 h-4 w-4" />
                              Editar
                            </Button>
                            <Button size="sm" variant="destructive" onClick={() => deleteItem("planos", plano.id)}>
                              <Trash2 className="mr-2 h-4 w-4" />
                              Eliminar
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </AdminAuth>
  )
}
