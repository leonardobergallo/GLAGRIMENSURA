"use client"

import { useState } from "react"
import { AdminAuth } from "@/components/admin-auth"
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
  { slug: "usucapion", nombre: "Usucapión" },
  { slug: "subdivision", nombre: "Subdivisión" },
  { slug: "ph", nombre: "Propiedad Horizontal" },
  { slug: "topografia", nombre: "Topografía" },
  { slug: "amojonamientos", nombre: "Amojonamientos" },
]

const categoriasCarrusel = [
  { slug: "urbano", nombre: "Urbano" },
  { slug: "rural", nombre: "Rural" },
  { slug: "gps", nombre: "GPS/Topografía" },
  { slug: "equipos", nombre: "Equipos" },
]

export default function AdminPage() {
  const [selectedServicio, setSelectedServicio] = useState("")
  const [photoTitle, setPhotoTitle] = useState("")
  const [photoDescription, setPhotoDescription] = useState("")
  const [photoUrl, setPhotoUrl] = useState("")
  const [planoTitle, setPlanoTitle] = useState("")
  const [planoDescription, setPlanoDescription] = useState("")
  const [planoUrl, setPlanoUrl] = useState("")
  const [planoType, setPlanoType] = useState("")
  const [galleryCategory, setGalleryCategory] = useState("")
  const [galleryTitle, setGalleryTitle] = useState("")
  const [galleryDescription, setGalleryDescription] = useState("")
  const [galleryUrl, setGalleryUrl] = useState("")

  const handleSavePhoto = async () => {
    if (!selectedServicio || !photoTitle || !photoUrl) {
      alert("Por favor completa todos los campos requeridos")
      return
    }

    try {
      const response = await fetch("/api/photos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          servicioSlug: selectedServicio,
          title: photoTitle,
          description: photoDescription,
          imageUrl: photoUrl,
        }),
      })

      if (response.ok) {
        alert("Foto guardada exitosamente.")
        setPhotoTitle("")
        setPhotoDescription("")
        setPhotoUrl("")
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
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          servicioSlug: selectedServicio,
          title: planoTitle,
          description: planoDescription,
          fileUrl: planoUrl,
          fileType: planoType,
        }),
      })

      if (response.ok) {
        alert("Plano guardado exitosamente.")
        setPlanoTitle("")
        setPlanoDescription("")
        setPlanoUrl("")
        setPlanoType("")
      } else {
        alert("Error al guardar el plano")
      }
    } catch (error) {
      console.error(error)
      alert("Error al guardar el plano")
    }
  }

  const handleSaveGalleryImage = async () => {
    if (!galleryCategory || !galleryTitle || !galleryUrl) {
      alert("Por favor completa categoría, título e imagen")
      return
    }

    try {
      const response = await fetch("/api/gallery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category: galleryCategory,
          title: galleryTitle,
          description: galleryDescription,
          imageUrl: galleryUrl,
        }),
      })

      if (response.ok) {
        alert("Imagen agregada al carrusel principal.")
        setGalleryTitle("")
        setGalleryDescription("")
        setGalleryUrl("")
      } else {
        alert("Error al guardar la imagen del carrusel")
      }
    } catch (error) {
      console.error(error)
      alert("Error al guardar la imagen del carrusel")
    }
  }

  return (
    <AdminAuth>
      <div className="min-h-screen bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-center text-4xl font-bold">
            Gestión de Contenido
          </h1>

          <Tabs defaultValue="gallery" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="gallery">Carrusel principal</TabsTrigger>
              <TabsTrigger value="photos">Fotos servicios</TabsTrigger>
              <TabsTrigger value="planos">Planos</TabsTrigger>
            </TabsList>

            <TabsContent value="gallery">
              <Card>
                <CardHeader>
                  <CardTitle>Subir foto al carrusel de la página principal</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>Categoría *</Label>
                    <Select value={galleryCategory} onValueChange={setGalleryCategory}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona una categoría" />
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
                            alert("Imagen subida exitosamente.")
                          }
                        }}
                        onUploadError={(error: Error) => {
                          alert(`Error: ${error.message}`)
                        }}
                      />
                    </div>
                    {galleryUrl && (
                      <div className="mt-2">
                        <p className="text-sm text-green-600">Imagen subida</p>
                        <p className="truncate text-xs text-gray-500">{galleryUrl}</p>
                      </div>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="gallery-title">Título *</Label>
                    <Input
                      id="gallery-title"
                      value={galleryTitle}
                      onChange={(e) => setGalleryTitle(e.target.value)}
                      placeholder="Ej: Relevamiento topográfico en La Plata"
                    />
                  </div>

                  <div>
                    <Label htmlFor="gallery-description">Descripción</Label>
                    <Textarea
                      id="gallery-description"
                      value={galleryDescription}
                      onChange={(e) => setGalleryDescription(e.target.value)}
                      placeholder="Descripción opcional de la imagen"
                    />
                  </div>

                  <Button
                    onClick={handleSaveGalleryImage}
                    disabled={!galleryCategory || !galleryTitle || !galleryUrl}
                    className="w-full"
                  >
                    Guardar en carrusel principal
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="photos">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Seleccionar Servicio</CardTitle>
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
                  <CardTitle>Subir Foto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>Archivo</Label>
                    <div className="mt-2">
                      <UploadButton
                        endpoint="servicePhotos"
                        onClientUploadComplete={(res: any) => {
                          if (res?.[0]?.url) {
                            setPhotoUrl(res[0].url)
                            alert("Imagen subida exitosamente.")
                          }
                        }}
                        onUploadError={(error: Error) => {
                          alert(`Error: ${error.message}`)
                        }}
                      />
                    </div>
                    {photoUrl && (
                      <div className="mt-2">
                        <p className="text-sm text-green-600">Imagen subida</p>
                        <p className="truncate text-xs text-gray-500">{photoUrl}</p>
                      </div>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="photo-title">Título *</Label>
                    <Input
                      id="photo-title"
                      value={photoTitle}
                      onChange={(e) => setPhotoTitle(e.target.value)}
                      placeholder="Ej: Mensura en zona urbana"
                    />
                  </div>

                  <div>
                    <Label htmlFor="photo-description">Descripción</Label>
                    <Textarea
                      id="photo-description"
                      value={photoDescription}
                      onChange={(e) => setPhotoDescription(e.target.value)}
                      placeholder="Descripción opcional de la foto"
                    />
                  </div>

                  <Button
                    onClick={handleSavePhoto}
                    disabled={!selectedServicio || !photoTitle || !photoUrl}
                    className="w-full"
                  >
                    Guardar Foto
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="planos">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Seleccionar Servicio</CardTitle>
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
                  <CardTitle>Subir Plano</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
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
                            alert("Plano subido exitosamente.")
                          }
                        }}
                        onUploadError={(error: Error) => {
                          alert(`Error: ${error.message}`)
                        }}
                      />
                    </div>
                    {planoUrl && (
                      <div className="mt-2">
                        <p className="text-sm text-green-600">Archivo subido</p>
                        <p className="truncate text-xs text-gray-500">{planoUrl}</p>
                      </div>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="plano-title">Título *</Label>
                    <Input
                      id="plano-title"
                      value={planoTitle}
                      onChange={(e) => setPlanoTitle(e.target.value)}
                      placeholder="Ej: Plano de mensura Partida 123456"
                    />
                  </div>

                  <div>
                    <Label htmlFor="plano-description">Descripción</Label>
                    <Textarea
                      id="plano-description"
                      value={planoDescription}
                      onChange={(e) => setPlanoDescription(e.target.value)}
                      placeholder="Descripción opcional del plano"
                    />
                  </div>

                  <Button
                    onClick={handleSavePlano}
                    disabled={!selectedServicio || !planoTitle || !planoUrl}
                    className="w-full"
                  >
                    Guardar Plano
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </AdminAuth>
  )
}
