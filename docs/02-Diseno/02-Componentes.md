---
tags: [componentes, inventario]
---

# Inventario de componentes

Listado de componentes Astro en `src/components/`.

## Layout
- **Header.astro** — barra superior blanca, logo, nav, CTAs
- **UtilityBar.astro** — barra dark superior con tel/horario
- **Footer.astro** — footer multi-columna con marca, servicios, zonas
- **BaseLayout.astro** (en `src/layouts/`) — wrapper con SEO + slot
- **ServiceLayout.astro** (en `src/layouts/`) — layout específico para servicios MDX

## Sections de home
- **Hero.astro** — H1 gigante "Condominios" + copy SEO derecha
- **QuickNav.astro** — barra roja chips primaria
- **QuickNavBottom.astro** — barra roja chips secundaria (varía contenido)
- **Section.astro** — wrapper de sección con eyebrow/title/subtitle/desc + prop `as: h1 | h2`
- **ServicePillars.astro** — 4 pilares operativos (Personal · Tecnología · Protocolos · Atención)
- **ValueProps.astro** — 4 cards de diferenciadores (con imagen)
- **Communities.astro** — 4 tipos de comunidad atendidos
- **Testimonials.astro** — 6 testimonios (5 aliados con backlinks + 1 cliente)
- **Faq.astro** — accordion 8 preguntas + sidebar CTA
- **CtaBanner.astro** — banner rojo CTA con teléfono y formulario
- **MostRequested.astro** — (legacy, no usado actualmente)
- **Sectors.astro** — (legacy)

## Reutilizables
- **ServicesGrid.astro** — grid de servicios filtrado por category/kind
- **Breadcrumb.astro** — navegación de migas
- **Icon.astro** — 12 iconos SVG inline (shield, cctv, patrol, access, etc.)
- **SEO.astro** — meta tags + OG
- **WhatsAppFloat.astro** — botón flotante WhatsApp esquina inferior derecha

Ver [[01-Sistema-Visual]] para tokens.
