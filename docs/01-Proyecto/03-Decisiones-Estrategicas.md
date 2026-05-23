---
tags: [decisiones, arquitectura]
---

# Decisiones estratégicas tomadas

Registro de decisiones clave durante la migración. Cada decisión incluye contexto y razón.

## D-001: Stack Astro 4 + Tailwind + MDX
**Por qué:** SSG estático maximiza velocidad y SEO. MDX permite content collections versionadas en git. Tailwind acelera desarrollo manteniendo consistencia visual.

## D-002: Preservar URLs WordPress exactas
**Por qué:** El sitio actual tiene SEO acumulado (años de indexación). Cambiar URLs costaría tráfico orgánico. Configurado `trailingSlash: 'always'` + archivos con slugs idénticos.

## D-003: Modelo de 4 pilares en home
**Por qué:** El usuario notó duplicidad entre "Más solicitados" (4 cards) y "Catálogo completo" (9 cards). Solución: 1 solo módulo con 4 pilares operativos (Personal · Tecnología · Protocolos · Atención al Comité). El catálogo de 9 servicios vive en `/servicios-de-seguridad-privada/`.

## D-004: Eliminar animaciones en cards
**Por qué:** Petición explícita del usuario. Solo los botones (`.btn-*`) mantienen transiciones. Cards e imágenes estáticas para look más profesional/corporativo.

## D-005: Header con fondo blanco
**Por qué:** El logo SEPRICO es oscuro y necesita contraste. Patrón B2B clásico: header light + body dark. Más profesional/institucional.

## D-006: Sin CTA banner final ni stats banner
**Por qué:** El usuario los pidió quitar — fricción visual sin valor real cuando el footer ya tiene CTAs y datos.

## D-007: Aliados como backlinks SEO
**Por qué:** 6 empresas aliadas en testimonios (con dofollow) + 12 artículos blog dedicados. Mejora linkneighborhood temático. Ver [[../04-Contenido/03-Aliados-Partnerships]].

## D-008: Mobile-first overhaul
**Por qué:** Petición del usuario. Aplicado mediante `src/styles/mobile.css` con 20 bloques de overrides quirúrgicos. Ver [[../02-Diseno/03-Mobile-Responsive]].

## D-009: Hero sólido sin patrones
**Por qué:** Después de iterar con grid de fondo y glow rojo, el usuario pidió fondo plano negro. Más limpio y serio.

## D-010: Header NO sticky
**Por qué:** Petición del usuario. Scroll natural en lugar de header fijo.
