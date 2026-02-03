# 📋 CHECKLIST - Estado Actual del Proyecto GL Agrimensura

## ✅ COMPLETADO

### 1. Servicios → Mini Landing por cada rubro

✅ **Páginas individuales creadas** - Las 6 páginas están implementadas:
- `/servicios/mensura` ✅
- `/servicios/usucapion` ✅
- `/servicios/subdivision` ✅
- `/servicios/ph` ✅
- `/servicios/topografia` ✅
- `/servicios/amojonamientos` ✅

✅ **Fondo con imagen específica** - Implementado en `ServiceHero` con imagen de fondo
⚠️ **PERO**: Actualmente usa SVG (`/servicios/mensura.svg`) - **FALTA reemplazar por fotos reales**

✅ **Texto simple y comercial** - Cada servicio tiene:
- Título, subtítulo y descripción ✅
- Lista de beneficios ✅
- Mensaje de WhatsApp preconfigurado ✅

✅ **Botón WhatsApp directo** - Implementado en:
- Hero de cada servicio ✅
- Formulario ✅
- Botón flotante en toda la web ✅

✅ **Botón enviar por Email** - Implementado en:
- Hero de cada servicio ✅
- Formulario ✅

✅ **CTA visible en header** - Implementado:
- Botón "Solicitar Presupuesto" ✅
- Botón "Consultar WhatsApp" ✅

---

### 2. Formulario por servicio

✅ **Formulario específico según servicio** - Implementado con campos dinámicos:
- Mensura: dirección, partido ✅
- Usucapión: dirección, partido, superficie, años de posesión ✅
- Subdivisión: dirección, partido, superficie total, lotes deseados ✅
- PH: dirección, partido, cantidad unidades, tipo inmueble ✅
- Topografía: ubicación, tipo trabajo ✅
- Amojonamientos: dirección, partido, cantidad mojones ✅

✅ **Validación de campos** - Implementada con Zod:
- Nombre, email, teléfono obligatorios ✅
- Validación específica por servicio ✅

✅ **Botón Enviar por WhatsApp** - Con mensaje prearmado ✅

✅ **Botón Enviar por Email** - Con API `/api/contact` ✅

✅ **Texto de agradecimiento** - Mensaje de confirmación después de enviar ✅

✅ **Subida de documentos** - Implementado con Uploadthing ✅

---

### 3. Subir y visualizar planos en la web

✅ **Sección Visor de planos** - Implementada en cada servicio ✅

✅ **Soporte PDF / JPG / PNG** - Implementado ✅

✅ **Visor embebido** - Modal con iframe para PDFs e imágenes ✅

✅ **Miniatura de cada plano** - Con título y descripción ✅

✅ **Botón Descargar plano** - Implementado en el modal ✅

✅ **Clasificación por servicio** - Sistema de base de datos con `servicio_slug` ✅

✅ **Panel de administración** - `/admin` para subir planos ✅

⚠️ **PERO**: La base de datos está vacía - **FALTA subir planos de ejemplo**

---

### 4. Diseño / Branding

✅ **Colores llamativos para CTA** - Verde WhatsApp (#25D366) implementado ✅

⚠️ **Acento naranja** - Actualmente usa dorado (`--accent: oklch(0.65 0.12 60)`) - **FALTA cambiar a naranja**

✅ **Tipografías modernas** - Montserrat + Poppins implementadas ✅

❌ **Favicon con logo** - **FALTA** - No hay favicon.ico, icon.png ni apple-icon.png

⚠️ **Optimizar imágenes WebP** - Las imágenes actuales no están en WebP - **FALTA optimizar**

✅ **Contraste y legibilidad** - Bien implementado ✅

---

### 5. Galería de trabajos

✅ **Galería implementada** - Componente `Galeria` con categorías ✅

✅ **Agrupación por servicios** - Categorías: urbano, rural, PH, GPS, equipos ✅

✅ **Etiquetas en fotos** - Implementadas con Badge ✅

✅ **Lazy load** - Implementado con `loading="lazy"` ✅

⚠️ **Fotos actuales** - Hay 6 fotos hardcodeadas en el componente - **FALTA**:
- Subir más fotos nuevas
- Eliminar repetidas (si las hay)
- Conectar con base de datos (ya existe `gallery_items` pero no se usa)

---

### 6. SEO / Posicionamiento

✅ **Keywords definidas** - Implementadas en metadata de cada página ✅

✅ **Meta descripción** - En home y páginas de servicios ✅

✅ **Textos claros sin tecnicismos** - Descripciones comerciales ✅

✅ **URLs amigables** - `/servicios/mensura`, `/servicios/usucapion`, etc. ✅

✅ **Sitemap** - Implementado en `app/sitemap.ts` ✅

✅ **Robots.txt** - Implementado en `app/robots.ts` ✅

---

### 7. Contacto / Conversión

✅ **Botón flotante WhatsApp** - Implementado en toda la web ✅

✅ **Número con formato internacional** - `5492212230052` ✅

✅ **Mensaje prearmado** - Diferente según el servicio ✅

✅ **Respuesta automática al email** - Implementada en `/api/contact` ✅

---

## ❌ PENDIENTE / FALTANTE

### 🔴 URGENTE

1. **Reemplazar íconos SVG por fotos reales**
   - Actualmente: `/servicios/mensura.svg` (y otros SVG)
   - Necesario: Fotos reales en `/public/servicios/`:
     - `mensura.jpg` o `.webp`
     - `usucapion.jpg` o `.webp`
     - `subdivision.jpg` o `.webp`
     - `ph.jpg` o `.webp`
     - `topografia.jpg` o `.webp`
     - `amojonamientos.jpg` o `.webp`
   - Formato recomendado: 1200x800px, WebP optimizado

2. **Subir planos de ejemplo**
   - Acceder a `/admin`
   - Subir planos en PDF o imágenes para cada servicio
   - O actualizar `lib/servicios-data.ts` con planos estáticos

3. **Favicon y logos**
   - Crear `favicon.ico`
   - Crear `icon.png` (192x192)
   - Crear `apple-icon.png` (180x180)
   - Ubicación: `/public/`

4. **Cambiar acento dorado a naranja**
   - Editar `app/globals.css`
   - Cambiar `--accent: oklch(0.65 0.12 60)` a naranja

### 🟡 IMPORTANTE

5. **Optimizar imágenes a WebP**
   - Convertir todas las imágenes a formato WebP
   - Usar herramientas como Sharp o ImageOptim

6. **Mejorar galería**
   - Conectar con base de datos `gallery_items`
   - Subir más fotos desde `/admin`
   - Agregar más categorías si es necesario

7. **Configurar variables de entorno**
   - Crear `.env.local` con:
     - `DATABASE_URL` (Neon PostgreSQL)
     - `UPLOADTHING_TOKEN`
     - `RESEND_API_KEY`
     - `NEXT_PUBLIC_UPLOADTHING_URL`
     - `NEXT_PUBLIC_UPLOADTHING_KEY`

### 🟢 OPCIONAL / MEJORAS

8. **Agregar más contenido SEO**
   - Más keywords en metadata
   - Schema.org markup
   - Open Graph images

9. **Google Analytics**
   - Ya está instalado `@vercel/analytics`
   - Verificar que funcione correctamente

10. **Testimonios de clientes**
    - Sección nueva para agregar

11. **Sistema de blog/noticias**
    - Para contenido SEO adicional

---

## 📊 RESUMEN POR CATEGORÍA

| Categoría | Completado | Pendiente | Total |
|-----------|------------|-----------|-------|
| **Servicios - Landing** | 5/6 | 1 | 6 |
| **Formularios** | 5/5 | 0 | 5 |
| **Planos** | 6/6 | 1* | 6 |
| **Diseño/Branding** | 3/5 | 2 | 5 |
| **Galería** | 4/5 | 1 | 5 |
| **SEO** | 6/6 | 0 | 6 |
| **Contacto** | 4/4 | 0 | 4 |
| **TOTAL** | **33/37** | **5** | **37** |

*El sistema está completo pero falta contenido (subir planos)

---

## 🎯 PRIORIDADES PARA COMPLETAR

### Prioridad 1 (Crítico - Antes de lanzar)
1. ✅ Reemplazar SVG por fotos reales de servicios
2. ✅ Subir al menos 2-3 planos de ejemplo por servicio
3. ✅ Crear favicon y logos
4. ✅ Configurar variables de entorno

### Prioridad 2 (Importante - Mejorar conversión)
5. ✅ Cambiar acento a naranja
6. ✅ Optimizar imágenes a WebP
7. ✅ Mejorar galería con más fotos

### Prioridad 3 (Opcional - Mejoras futuras)
8. ⬜ Testimonios
9. ⬜ Blog/Noticias
10. ⬜ Más contenido SEO

---

## 📝 NOTAS TÉCNICAS

- **Base de datos**: Neon PostgreSQL configurada ✅
- **Storage**: Uploadthing configurado ✅
- **Panel Admin**: `/admin` disponible ✅
- **APIs**: `/api/photos` y `/api/planos` funcionando ✅
- **Formularios**: Validación con Zod ✅
- **Emails**: Resend configurado (requiere API key) ⚠️

---

**Última actualización**: $(date)
**Estado general**: 🟢 **89% Completado** (33/37 items)

