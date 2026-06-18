---
tags: [seo, optimizacion, meta-titles, meta-descriptions, encabezados, schema, errores, ejecutado]
fecha: 2026-06-18
alcance: 38 páginas core (home + 20 servicios + 4 comunidades + 14 zonas + hubs/institucionales)
relacionado: [[06-Estudio-Auditoria-SEO-2026-06-18]]
build: 371 páginas, 0 errores de contenido
---

# Optimización SEO Integral — Ejecución 2026-06-18

Reestructuración SEO de la capa de metadatos, encabezados y datos estructurados de las **38 páginas comerciales core**, más la corrección de los errores técnicos detectados en la [[06-Estudio-Auditoria-SEO-2026-06-18|auditoría externa]]. Documenta cada cambio realizado.

> **Regla nueva del sitio:** los meta titles **no incluyen la marca** ("SEPRICO"); el espacio se usa para **3 clusters de keywords** (Principal | Secundaria | Complementaria). La marca vive en `og:site_name` y en el schema. Las meta descriptions **lideran con la keyword principal** del title e integran las tres de forma natural.

---

## 1. Errores técnicos corregidos (del reporte de auditoría)

| Error del reporte | Causa raíz | Corrección | Archivo |
|---|---|---|---|
| **53 enlaces rotos** `/cdn-cgi/l/email-protection` (404) + 1 error 4xx | Footer publicaba `mailto:` literal → Cloudflare Email Obfuscation generaba el enlace roto en cada página | El correo se **ensambla en cliente** (data-attrs + script `is:inline`); el HTML servido ya no expone patrón de email ni `mailto:`, así Cloudflare no lo ofusca | `src/components/Footer.astro` |
| **Doble "\| SEPRICO \| SEPRICO"** + 4 títulos >70 car. | `SEO.astro` anexaba `\| SITE.name` mientras varios `seoTitle` ya traían la marca | Se eliminó el anexado automático de marca; el `<title>` ahora es exactamente el definido por la página | `src/components/SEO.astro` |
| **Enlace interno a `/servicios/control-de-acceso`** (ruta legacy bloqueada) | Las páginas de comunidad enlazaban `/servicios/${slug}` (ruta legacy WordPress) | Reapuntado a la URL canónica `/${slug}/` | `src/pages/comunidades/[...slug].astro` |
| **`/blog/` "restringida para indexación"** mientras estaba en el sitemap | `robots.txt` tenía `Disallow: /blog/$`, bloqueando el hub real del blog | Eliminada la regla; el índice del blog ahora es rastreable (coherente con el sitemap) | `public/robots.txt` |
| **`fonts.googleapis.com/` 404** (1 recurso) | Artefacto del crawler al auditar el `preconnect` al origen de Google Fonts (no es un enlace navegable) | Sin cambio de riesgo: el `preconnect` es práctica recomendada por Google. **Recomendación**: self-host de la fuente Inter como fase de rendimiento (elimina la dependencia externa y mejora CWV) | — (ver §6) |

Resultado: los **2 errores** y **~57 de las 62 alertas** del reporte quedan resueltos a nivel de código.

---

## 2. Nueva arquitectura de meta titles (sin marca, 3 clusters)

Cada title se construyó según intención de búsqueda y relevancia comercial del nicho (seguridad privada residencial, CDMX/Edomex), evitando reutilizar la misma fórmula. Longitudes 67–85 caracteres (los más largos corresponden a zonas con nombre extenso; se prioriza la cobertura de 3 clusters sobre el límite de 70, tal como se acordó).

**Ejemplos representativos:**

| Página | Meta title nuevo |
|---|---|
| Home | Seguridad Privada para Condominios \| Empresa de Seguridad Privada \| Vigilancia 24/7 |
| Control de acceso | Control de Acceso para Condominios \| Acceso Vehicular y Peatonal \| Casetas |
| Cámaras | Cámaras de Vigilancia para Condominios \| CCTV HD/4K \| Videovigilancia 24/7 |
| Personal de seguridad | Personal de Seguridad para Condominios \| Guardias SETEC \| Vigilantes Privados |
| Zona (Coyoacán) | Seguridad Privada en Coyoacán \| Vigilancia para Condominios \| Guardias 24/7 |
| Comunidad (cotos) | Seguridad para Cotos Cerrados \| Vigilancia Privada 24/7 \| Control de Acceso |

Cobertura: **20 servicios** (`seoTitle` en frontmatter MDX), **4 comunidades** y **14 zonas** (nuevos campos `seoTitle`/`seoDescription` en el schema), **home + 9 hubs/institucionales** (props/const en `.astro`).

---

## 3. Meta descriptions (lideran con keyword principal)

Todas las descriptions de las 38 páginas se reescribieron para: **(1)** iniciar con la keyword principal del title, **(2)** integrar las tres keywords del cluster de forma natural, **(3)** intención comercial con CTA, **(4)** longitud ≤160 caracteres, **(5)** únicas por página.

Ejemplo (home):
`Seguridad privada para condominios con guardias SETEC, monitoreo 24/7 y control de acceso. Empresa de seguridad privada con 25 años en CDMX y Estado de México.`

---

## 4. Encabezados H1–H4

- **Home:** el H1 ahora lidera con la keyword principal — *"Seguridad Privada para Condominios — Vigilancia 24/7 en CDMX y Estado de México"* (antes era solo "Condominios…").
- **Servicios:** el H1 (`heroHeadline` + subheadline del `ServiceLayout`) resuelve a *"{Servicio} para Condominios y Residenciales"*, con la keyword principal presente; los H2 generados por el layout la refuerzan.
- **Comunidades / zonas:** H1 *"Seguridad Privada para {tipo}"* y *"Seguridad para Condominios en {zona}"* — keyword principal nativa.
- **Anti-stuffing:** las keywords secundaria/complementaria del title **no se forzaron** en H2–H4 cuando habría implicado repetición artificial; se respetó la regla del sitio ([[feedback_seo_rules]]) y la naturalidad pedida. Los subtítulos comerciales existentes ya aportan cobertura semántica.

---

## 5. Datos estructurados (schema) — auditoría

Inventario verificado en el build: cobertura **robusta y sin errores**. Presentes según tipo de página: `WebSite`, grafo `LocalBusiness`/`SecurityService` (con `AggregateRating`, `ContactPoint`, `OpeningHoursSpecification`, `PostalAddress`, `AdministrativeArea`), `Service`, `FAQPage`, `HowTo`, `BreadcrumbList`, `Offer`/`OfferCatalog`, `Brand`. Los cambios de title **no afectan** el schema (usa `data.title`/config, no `seoTitle`). El `email` del schema se conserva (string en JSON-LD, no genera enlace roto). Mejora menor pendiente: emitir `BreadcrumbList` JSON-LD también en comunidades/zonas (hoy solo en servicios).

---

## 6. Verificación

- **Build:** `astro build` exitoso — **371 páginas generadas, 0 errores de contenido**.
- **Títulos:** 0 ocurrencias de marca en titles core; 0 casos de doble "\| SEPRICO \| SEPRICO" en todo el sitio.
- **Footer:** el HTML servido ya no expone el patrón de email; el `mailto` se arma en cliente.
- **Comunidades:** 0 enlaces a `/servicios/` legacy.

---

## 7. Pendiente / siguientes fases

1. **Blog (137 artículos):** fuera del alcance de esta tanda. Sus titles aún usan "| Blog SEPRICO"; aplicar la misma regla (sin marca / clusters) en una segunda tanda.
2. **Rendimiento / Core Web Vitals:** el reporte salió "sin datos". Correr Lighthouse y evaluar **self-host de la fuente Inter** (elimina el origen del 404 de fonts y reduce render-blocking).
3. **Schema:** añadir `BreadcrumbList` JSON-LD a comunidades y zonas.
4. **Contenido profundo / entidades semánticas:** ampliación de cuerpos, FAQs y cobertura semántica por página (no incluido en esta capa de metadatos).

---

## 8. Archivos modificados (resumen)

Infraestructura: `src/components/SEO.astro`, `src/components/Footer.astro`, `public/robots.txt`, `src/content/config.ts`, `src/pages/comunidades/[...slug].astro`, `src/pages/zonas/[...slug].astro`.

Contenido (frontmatter): 20× `src/content/servicios/*.mdx`, 4× `src/content/comunidades/*.mdx`, 14× `src/content/zonas/*.mdx`.

Páginas `.astro`: `index`, `nosotros`, `empresa-de-seguridad-privada-para-condominios`, `equipo-de-seguridad`, `reclutamiento-para-seguridad-privada`, `servicios-de-seguridad-privada`, `tecnologia-y-monitoreo`, `protocolos-y-consultoria`, `personal-de-seguridad-residencial`, `atencion-al-comite-condominios`, `blog/index`, `comunidades/index`, `zonas/index`.
