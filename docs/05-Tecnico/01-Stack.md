---
tags: [tecnico, stack, dependencias]
---

# Stack tecnológico

## Core
- **Astro 4.16** — SSG con format directory
- **TypeScript 5.6** strict
- **Tailwind CSS 3.4** + plugin Typography
- **MDX** para content collections
- **Node >= 18.17**

## Integraciones Astro
- `@astrojs/tailwind` (sin base styles propios, usa global.css)
- `@astrojs/mdx`
- `@astrojs/sitemap` (auto-genera `sitemap-index.xml`)
- `@astrojs/check` para type-check

## Dev tools
- **Prettier** + plugin Astro + plugin Tailwind
- ESLint (opcional, no configurado aún)

## Configuración clave en `astro.config.mjs`

```js
{
  site: 'https://seguridadprivadacondominios.com',
  trailingSlash: 'always',
  integrations: [tailwind(), mdx(), sitemap({...})],
  build: {
    inlineStylesheets: 'auto',
    format: 'directory',
  },
  compressHTML: true,
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
}
```

## Path aliases (`tsconfig.json`)
- `@/*` → `src/*`
- `@components/*` → `src/components/*`
- `@layouts/*` → `src/layouts/*`
- `@assets/*` → `src/assets/*`
- `@content/*` → `src/content/*`

## Content collections (`src/content/config.ts`)
- `servicios` — 13 entradas MDX
- `comunidades` — 4 entradas MDX
- `zonas` — 14 entradas MDX
- `blog` — 22 entradas MDX

Cada una con schema Zod estricto.

Ver [[02-Estructura-Repo]] para árbol.
