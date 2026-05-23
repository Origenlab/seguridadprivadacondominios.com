---
tags: [tecnico, troubleshooting, errores]
---

# Problemas comunes y soluciones

## El dev server no arranca / da error

### `Could not read package.json: ENOENT`
Estás en `~` en lugar del proyecto.
```bash
cd "/Users/frankoropeza/Documents/Claude/Projects/SEGURIDADPARACONDOMINIOS"
npm run dev
```

### `ContentSchemaContainsSlugError`
`slug` es reservado en content collections. Eliminar de schema.

### Cambios en `content/config.ts` no se reflejan
Reiniciar dev server. Astro cachea schemas.

## El logo no se ve / muestra placeholder

Verificar que `public/images/brand/logo.webp` existe. Si no, descargar de nuevo del WP original:
```bash
curl -sSL -o public/images/brand/logo.webp \
  "https://seguridadprivadacondominios.com/wp-content/uploads/2025/11/cropped-seguridad-privada-para-condominios.webp"
```

## El mobile.css no aplica

Verificar que está importado **después** de global.css en `BaseLayout.astro`:
```astro
import '@/styles/global.css';
import '@/styles/mobile.css';
```

## Formulario no envía

En desarrollo (`npm run dev`) los forms con `data-netlify="true"` no funcionan. Solo en producción Netlify los procesa.

## URL nueva en `[slug].astro` da 404

Verificar que el archivo MDX existe en la collection correspondiente y `category` coincide:
```bash
ls src/content/blog/ | grep nombre-del-post
```

## Build falla con `Cannot find module 'astro:content'`

Ejecutar `npm install` y `npm run astro check` para regenerar tipos.

## El header se ve roto en algún viewport

Revisar `src/styles/mobile.css` bloque 3 (HEADER). Los selectores usan `#header-shell > div` — si la estructura del Header.astro cambió, ajustar.

## Imágenes pesan mucho

Las imágenes en `public/images/` son las originales del WP. Para optimizar:
```bash
# Convertir a WebP / AVIF
npm i -D @astrojs/image
```
O procesar manualmente con tinypng.com / squoosh.app.

Ver [[03-Deploy]].
