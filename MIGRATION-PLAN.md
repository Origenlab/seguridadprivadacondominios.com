# Plan de Migración — seguridadprivadacondominios.com

**Origen:** WordPress + WooCommerce (live en https://seguridadprivadacondominios.com)
**Destino:** Astro 4 + MDX (este proyecto)
**Marca:** SEPRICO / ORIGINS PRIVATE SECURITY
**Objetivo:** migración 1:1 preservando **todas las URLs** para no romper SEO ni links externos.

---

## 1. Datos clave del sitio actual

| Dato | Valor |
|---|---|
| Marca | **SEPRICO** (Origins Private Security) |
| Tagline | "Soluciones integrales que garantizan tranquilidad" |
| WhatsApp (home) | +52 1 55 1079 6404 (`5610796404` en algunas referencias) |
| Plataforma | WordPress + WooCommerce |
| Idioma | español MX |
| Sitemap XML | **No expuesto** públicamente (404 en `/sitemap.xml`, `/wp-sitemap.xml`) |
| robots.txt | Permite indexación pública, bloquea bots IA |

---

## 2. Inventario completo de URLs (a preservar)

### 2.1 Páginas principales (7)

| # | URL | Título actual | Tipo |
|---|---|---|---|
| 1 | `/` | Seguridad privada para condominios \| seguridad privada | Home |
| 2 | `/nosotros/` | Nosotros \| seguridad privada | Página |
| 3 | `/servicios-de-seguridad-privada/` | Servicios de seguridad privada \| seguridad para condominimio | Hub servicios |
| 4 | `/reclutamiento-para-seguridad-privada/` | Recursos Humanos \| Reclutamiento para seguridad privada | Hub RRHH |
| 5 | `/equipo-de-seguridad/` | Equipo de seguridad \| equipo de seguridad para condominios | Catálogo (WooCommerce) |
| 6 | `/blog/` | BLOG | Hub blog (paginado) |
| 7 | `/empresa-de-seguridad-privada-para-condominios/` | Contacto \| Empresa de seguridad privada para condominios | Contacto |

### 2.2 Servicios (9 páginas)

| # | URL | Servicio |
|---|---|---|
| 1 | `/control-de-acceso/` | Control de Acceso |
| 2 | `/vigilancia-y-patrullaje/` | Vigilancia y Patrullaje |
| 3 | `/monitoreo-electronico/` | Monitoreo Electrónico |
| 4 | `/consultoria-en-seguridad/` | Consultoría en Seguridad |
| 5 | `/sistemas-de-camaras-de-vigilancia/` | Cámaras de Vigilancia |
| 6 | `/control-biometrico-de-acceso/` | Control Biométrico |
| 7 | `/alarmas-de-seguridad/` | Alarmas de Seguridad |
| 8 | `/intercomunicacion-avanzada/` | Intercomunicación |
| 9 | `/sistemas-de-iluminacion-segura/` | Iluminación Segura |

### 2.3 Recursos Humanos (4 páginas)

| # | URL | Sección |
|---|---|---|
| 1 | `/personal-de-seguridad/` | Personal de Seguridad |
| 2 | `/entrenamiento-continuo/` | Entrenamiento Continuo |
| 3 | `/investigacion-de-antecedentes/` | Investigación de Antecedentes |
| 4 | `/bolsa-de-trabajo/` | Bolsa de Trabajo |

### 2.4 Blog posts identificados (10+)

Patrón de URL: `/seguridad-privada/[slug]/` o `/uncategorized/[slug]/`

| URL | Título |
|---|---|
| `/seguridad-privada/seguridad-privada-para-condominios/` | Seguridad Privada para Condominios |
| `/seguridad-privada/seguridad-privada-para-residenciales-proteccion-integral-para-tu-comunidad-con-seprico/` | Seguridad Privada para Residenciales |
| `/seguridad-privada/intercomunicacion-avanzada/` | Intercomunicación Avanzada |
| `/seguridad-privada/alarmas-de-seguridad-en-hogares/` | Alarmas de seguridad en hogares |
| `/seguridad-privada/el-futuro-de-la-seguridad-privada/` | El Futuro de la Seguridad Privada |
| `/seguridad-privada/estrategias-de-seguridad-personalizadas-para-empresas/` | Estrategias de seguridad personalizadas |
| `/seguridad-privada/seguridad-inteligente-en-tiempo-real-con-seprico/` | Seguridad Inteligente en Tiempo Real |
| `/seguridad-privada/la-importancia-de-contar-con-un-sistema-de-iluminacion-segura-en-tu-espacio/` | La importancia de un Sistema de Iluminación Segura |
| `/uncategorized/control-de-acceso-para-residenciales/` | Control de Acceso para Residenciales |
| `/uncategorized/vigilancia-y-el-patrullaje-en-la-seguridad-privada/` | Vigilancia y el Patrullaje en la Seguridad Privada |

Paginación blog: `/blog/`, `/blog/page/2/` (al menos 2 páginas).

### 2.5 Categorías

| URL | Categoría |
|---|---|
| `/category/seguridad-privada/` | Seguridad privada (taxonomía principal) |
| `/category/uncategorized/` | Uncategorized |

### 2.6 Productos WooCommerce (catálogo)

Patrón: `/producto/[slug]/` — productos individuales tipo Amazon affiliate (alarmas, sensores, cámaras).

Productos identificados (muestra parcial):
- `/producto/alarma-de-boton-de-panico-...`
- `/producto/alarma-de-la-manija-de-la-puerta-de-110-db-...`
- `/producto/alarma-de-parada-de-puerta-de-2-paquetes-...`
- `/producto/alarma-de-seguridad-de-la-puerta-de-cuna-de-120-db-...`
- `/producto/alarma-personal-de-vantamo-para-mujeres-...`
- `/producto/emacros-1-2-milla-de-largo-alcance-alarma-...`

⚠️ **Pendiente:** extracción completa de todos los productos del catálogo (requiere recorrido página por página de `/equipo-de-seguridad/?paged=N/`).

---

## 3. Jerarquía de menú actual

```
ORIGINS PRIVATE SECURITY (logo, link a /)
├── NOSOTROS                    → /nosotros/
├── SERVICIOS (dropdown)        → /servicios-de-seguridad-privada/
│   ├── Control de Acceso
│   ├── Vigilancia y Patrullaje
│   ├── Monitoreo Electrónico
│   ├── Consultoría
│   ├── Cámaras de Vigilancia
│   ├── Control Biométrico
│   ├── Alarmas de Seguridad
│   ├── Intercomunicación
│   └── Iluminación Segura
├── RECURSOS HUMANOS (dropdown) → /reclutamiento-para-seguridad-privada/
│   ├── Personal de Seguridad
│   ├── Entrenamiento Continuo
│   ├── Investigación
│   └── Bolsa de Trabajo
├── CATÁLOGO                    → /equipo-de-seguridad/
├── BLOG                        → /blog/
└── CONTACTO (dropdown)         → /empresa-de-seguridad-privada-para-condominios/
```

WhatsApp flotante: `https://api.whatsapp.com/send?phone=+5215510796404`

---

## 4. Estructura de contenido por página

### Home (`/`)
- Hero: "SEGURIDAD PRIVADA PARA CONDOMINIOS / soluciones integrales que garantizan tranquilidad"
- CTA WhatsApp
- Bloque introductorio sobre SEPRICO
- **9 servicios** en grid (links a cada subpage de servicio)
- **4 secciones RRHH** en grid
- Bloques de marketing largos: "La Seguridad Que Tu Condominio Merece", "Por Qué Elegirnos", "Nuestros Servicios", "Contrata Nuestros Servicios"

### Nosotros (`/nosotros/`)
- ¿Quiénes Somos?
- Nuestra Historia (desde el año 2000)
- Misión
- Visión
- 4 Valores: Confianza, Compromiso, Integridad, Cercanía
- Grid de servicios

### Hub Servicios (`/servicios-de-seguridad-privada/`)
- Intro
- Grid de 9 servicios con imagen + título + link

### Cada servicio individual
- Título grande
- Descripción extensa SEO-friendly
- Patrón uniforme

### Hub RRHH (`/reclutamiento-para-seguridad-privada/`)
- Grid de 4 cards
- Descripciones de cada función

### Catálogo (`/equipo-de-seguridad/`)
- Productos WooCommerce paginados (badge SALE, precio probable)
- Sidebar con "destacados" de blog

### Blog (`/blog/`)
- Lista paginada (2 páginas mínimo)
- Cards con imagen, categoría, título, excerpt, link
- Sidebar con destacados de productos

### Contacto (`/empresa-de-seguridad-privada-para-condominios/`)
- Teléfono: **5610796404**
- Formulario: nombre, correo, asunto, mensaje
- Bloques de copy: compromiso, aviso de privacidad
- Link a aviso de privacidad

---

## 5. Estrategia de migración 1:1 en Astro

### 5.1 Mapping URL → archivo Astro

| URL en producción | Archivo destino en Astro |
|---|---|
| `/` | `src/pages/index.astro` |
| `/nosotros/` | `src/pages/nosotros.astro` |
| `/servicios-de-seguridad-privada/` | `src/pages/servicios-de-seguridad-privada.astro` (o redirect a `/servicios/`) |
| `/reclutamiento-para-seguridad-privada/` | `src/pages/reclutamiento-para-seguridad-privada.astro` |
| `/equipo-de-seguridad/` | `src/pages/equipo-de-seguridad.astro` |
| `/blog/` | `src/pages/blog/index.astro` (con paginación) |
| `/empresa-de-seguridad-privada-para-condominios/` | `src/pages/empresa-de-seguridad-privada-para-condominios.astro` |
| `/control-de-acceso/` | `src/pages/control-de-acceso.astro` |
| ... (8 servicios más) | mismo patrón |
| `/personal-de-seguridad/` | `src/pages/personal-de-seguridad.astro` |
| ... (3 RRHH más) | mismo patrón |
| `/seguridad-privada/[slug]/` | `src/pages/seguridad-privada/[slug].astro` + collection blog |
| `/uncategorized/[slug]/` | `src/pages/uncategorized/[slug].astro` + collection blog |
| `/producto/[slug]/` | `src/pages/producto/[slug].astro` + collection productos |
| `/category/seguridad-privada/` | `src/pages/category/seguridad-privada.astro` |

### 5.2 Content Collections necesarias

```ts
// src/content/config.ts
servicios       — 9 entradas (URLs raíz, no /servicios/[slug]/)
rrhh            — 4 entradas (URLs raíz)
blog            — 8+ posts en /seguridad-privada/[slug]/
blog-legacy     — 2+ posts en /uncategorized/[slug]/
productos       — todos los items WooCommerce en /producto/[slug]/
```

### 5.3 Astro config — preservar trailing slash

```js
// astro.config.mjs
export default defineConfig({
  site: 'https://seguridadprivadacondominios.com',
  trailingSlash: 'always',   // ← CRÍTICO para mantener URLs idénticas
  build: { format: 'directory' }, // genera /foo/index.html en vez de /foo.html
  ...
});
```

### 5.4 Redirects a configurar (si cambia algo)

Solo si decidimos consolidar — **recomendación: no consolidar nada, mantener URLs exactas**.

Si en algún momento se quisiera, los redirects 301 irían en `_redirects` (Netlify) o `vercel.json`.

---

## 6. SEO crítico a preservar

Por cada página de producción se debe replicar:
- `<title>` exacto
- `<meta name="description">` exacto
- H1 / estructura de headings
- Schema.org / JSON-LD si lo tienen
- canonical
- Open Graph

⚠️ **Pendiente recoger:** meta descriptions de cada página (requiere ver `<head>` HTML, no solo texto visible). Se puede hacer via curl/fetch o `view-source:` en cada URL.

---

## 7. Imágenes y assets

El sitio actual usa imágenes WordPress (uploads/). Necesitamos:
1. Descargar todas las imágenes referenciadas (hero, cards de servicios, productos, blog).
2. Optimizarlas (WebP/AVIF).
3. Colocar en `public/images/` o `src/assets/`.

---

## 8. Funcionalidades a replicar

| Función | Estado en Astro |
|---|---|
| Form de contacto | Necesita backend (Netlify Forms / Formspree / serverless) |
| WhatsApp flotante | ✅ ya implementado |
| Búsqueda de blog/productos | Pendiente — implementar Pagefind |
| WooCommerce (carrito/precios) | ⚠️ Si los productos solo son catálogo informativo, no hace falta. Si hay venta real, necesita Snipcart/Shopify Lite o conservar WP headless. |
| Comentarios en blog | Pendiente decisión (Disqus / Giscus / sin comentarios) |
| Paginación blog | ✅ Astro lo soporta nativamente |

---

## 9. Plan de fases sugerido

### Fase 1 — Esqueleto con URLs reales (1-2 días)
- Renombrar/crear las páginas con los slugs exactos de producción
- Configurar `trailingSlash: 'always'`
- Crear placeholders con título y H1 correcto en cada URL
- Sitemap.xml auto-generado por Astro

### Fase 2 — Migrar contenido (2-3 días)
- Extraer texto completo de cada URL del sitio actual
- Pasarlo a MDX en collections
- Migrar imágenes

### Fase 3 — Diseño y componentes (2-3 días)
- Aplicar el diseño rojo/coral REDEIL-like que ya tienes construido
- Adaptar componentes existentes a las URLs reales
- Header / Footer / WhatsApp flotante

### Fase 4 — SEO técnico (1 día)
- Replicar title + meta description exactos
- JSON-LD LocalBusiness/SecurityService
- robots.txt y sitemap
- Open Graph + Twitter Cards

### Fase 5 — Productos catálogo (1-2 días)
- Decidir si se mantiene el catálogo o se simplifica
- Si se mantiene: extraer todos via crawl + crear collection

### Fase 6 — Deploy y verificación (1 día)
- Deploy a Netlify/Vercel/Cloudflare Pages
- Comparar URL por URL contra producción
- Verificar Google Search Console (request indexing)
- Monitor 404s primeras 2 semanas

---

## 10. Pendientes inmediatos (lo que falta capturar)

1. **Meta descriptions** de cada URL (vía `view-source` o curl)
2. **Texto completo** de cada servicio individual (9 páginas)
3. **Texto completo** de cada RRHH (4 páginas)
4. **Texto completo** de cada blog post (10+ posts)
5. **Catálogo completo** de productos WooCommerce (cuántos hay, todos sus slugs)
6. **URL del aviso de privacidad** (referenciada en contacto pero no capturada)
7. **Imágenes** — descargar todas las que usa producción
8. **Esquema de colores** del actual (negro + naranja `#f05a23`?) — ya parecido a nuestro coral, validar si replicar o mantener nuestro rojo `#f43f3f`

---

## 11. Riesgos identificados

| Riesgo | Impacto | Mitigación |
|---|---|---|
| Cambiar trailing slash rompería todas las URLs | Alto | Configurar `trailingSlash: 'always'` desde el primer commit |
| Si WordPress tiene URLs con `?p=ID` indexadas, perderlas | Medio | Configurar redirects 301 en hosting |
| Productos WooCommerce con precios dinámicos | Medio | Decidir si mantener o convertir a catálogo informativo |
| Form de contacto sin backend | Alto | Definir solución (Netlify Forms recomendado) antes de migrar |
| Imágenes perdidas en migración | Alto | Backup completo de `/wp-content/uploads/` antes de cambiar DNS |

---

## 12. Comparativa con lo ya construido en este proyecto

Lo que ya tenemos construido NO coincide con las URLs reales. Decisión:

**Opción A (recomendada):** Renombrar/redirigir páginas para que coincidan con URLs en producción.
- Las URLs `/servicios/[slug]` que hicimos → cambiar a URLs raíz (`/control-de-acceso/`, etc.)
- `/comunidades/` y `/zonas/` que inventamos no existen en producción — decisión: mantenerlos como nuevas páginas (ganan SEO) o quitarlos.
- `/blog/[slug]` que hicimos → cambiar a `/seguridad-privada/[slug]`

**Opción B:** Mantener nuestras URLs y poner 301 redirects desde las antiguas → arriesgado para SEO, no recomendado.

---

## Siguiente paso

Confirmar contigo:
1. ¿Migrar el catálogo de productos WooCommerce completo o convertirlo en catálogo informativo simple?
2. ¿Mantener marca **SEPRICO / ORIGINS PRIVATE SECURITY** o cambiarla?
3. ¿Mantener teléfono y datos actuales o actualizarlos?
4. ¿Mantener categorías `/category/seguridad-privada/` y `/category/uncategorized/` o consolidar todo bajo una sola taxonomía?
5. ¿Conservar las páginas extra que ya construí (`/comunidades`, `/zonas`) o eliminarlas para no inflar el sitio?

Una vez confirmado, procedo a:
1. Reconfigurar `trailingSlash: 'always'`
2. Renombrar todas las páginas existentes a los slugs reales de producción
3. Crear las páginas faltantes con placeholders del contenido real
