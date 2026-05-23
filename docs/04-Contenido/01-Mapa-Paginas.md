---
tags: [contenido, sitemap, paginas]
---

# Mapa de páginas del sitio

Inventario completo de las **23 páginas estáticas + 4 routes dinámicos** que genera el sitio.

## Estáticas raíz (sin URLs dinámicas)
- `/` Home
- `/nosotros/` Empresa
- `/servicios-de-seguridad-privada/` Hub servicios
- `/reclutamiento-para-seguridad-privada/` Hub RRHH
- `/equipo-de-seguridad/` Catálogo
- `/empresa-de-seguridad-privada-para-condominios/` Contacto
- `/blog/` Blog index
- `/comunidades/` Hub comunidades
- `/zonas/` Hub zonas
- `/aviso-de-privacidad/` Legal
- `/404` Not found
- `/gracias/` Post-submit

## Servicios raíz (9 archivos individuales)
- `/control-de-acceso/`
- `/vigilancia-y-patrullaje/`
- `/monitoreo-electronico/`
- `/consultoria-en-seguridad/`
- `/sistemas-de-camaras-de-vigilancia/`
- `/control-biometrico-de-acceso/`
- `/alarmas-de-seguridad/`
- `/intercomunicacion-avanzada/`
- `/sistemas-de-iluminacion-segura/`

## RRHH raíz (4 archivos individuales)
- `/personal-de-seguridad/`
- `/entrenamiento-continuo/`
- `/investigacion-de-antecedentes/`
- `/bolsa-de-trabajo/`

## Routes dinámicas (con `[...slug].astro`)
- `/comunidades/[...slug]/` — 4 detalles
- `/zonas/[...slug]/` — 14 zonas (8 CDMX + 6 Edomex)
- `/seguridad-privada/[...slug]/` — blog posts categoría main (20+)
- `/uncategorized/[...slug]/` — blog posts categoría legacy
- `/category/[...slug]/` — taxonomías
- `/blog/page/[page].astro` — paginación blog
- `/producto/[...slug]/` — productos WooCommerce (placeholder)

## Total páginas generadas en build
Aprox **65 páginas HTML** estáticas (sin contar productos).

Ver [[../03-SEO/03-URLs-Canonicas]] para detalle de slugs canónicos.
