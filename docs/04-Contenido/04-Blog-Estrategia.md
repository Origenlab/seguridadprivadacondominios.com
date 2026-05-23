---
tags: [blog, contenido, estrategia]
---

# Estrategia del blog

## Categorías
- `seguridad-privada` — categoría principal (20+ posts)
- `uncategorized` — legacy WP (2 posts heredados)

## Estructura de cada post

### Frontmatter
```yaml
title: string
description: string
pubDate: Date
author: 'Equipo SEPRICO'
category: 'seguridad-privada' | 'uncategorized'
tags: string[]
draft: boolean
```

### Layout
`/seguridad-privada/[slug]/` y `/uncategorized/[slug]/` usan el mismo template en `src/pages/seguridad-privada/[...slug].astro` con:

- **Contenido principal** (lg:col-span-8): H1, fecha, descripción, prose
- **Sidebar** (lg:col-span-4) con:
  - Card "Sobre SEPRICO" con link a `/`
  - Card CTA WhatsApp + form
  - Card "Servicios SEPRICO" con 6 links
  - Card "Cobertura"
  - Posts relacionados automáticos (por tags)

## Tipos de posts

### Posts de aliados (12)
Ver [[03-Aliados-Partnerships]]. Cada uno menciona un aliado y enlaza al sitio.

### Posts evergreen (8)
- `seguridad-privada-para-condominios`
- `el-futuro-de-la-seguridad-privada`
- `intercomunicacion-avanzada`
- `alarmas-de-seguridad-en-hogares`
- `la-importancia-de-contar-con-un-sistema-de-iluminacion-segura-en-tu-espacio`
- `estrategias-de-seguridad-personalizadas-para-empresas`
- `seguridad-inteligente-en-tiempo-real-con-seprico`
- `seguridad-privada-para-residenciales-...`

## Cadencia sugerida
- 1 post quincenal para fase 1
- 1 post semanal una vez estabilizada la operación de contenido

## Reglas de escritura
1. Cada post debe tener **al menos 5 links internos** a páginas SEPRICO
2. Si menciona aliado, **1 link outbound** al aliado
3. Sin keyword stuffing — ver [[../03-SEO/02-Keywords]]
4. Tono profesional B2B — sin hype
5. H2 y H3 jerárquicos
6. 400-700 palabras por post

## Paginación
`/blog/page/2/`, `/blog/page/3/`, etc. — automática con 8 posts por página.

Ver [[01-Mapa-Paginas]] para listado completo.
