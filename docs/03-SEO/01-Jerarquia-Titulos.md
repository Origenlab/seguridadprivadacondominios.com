---
tags: [seo, jerarquia, headings]
---

# Jerarquía de títulos H1/H2/H3

Reglas para evitar sobreoptimización y mantener semántica HTML correcta.

## Reglas fijas
1. **1 solo H1 por página** (vía prop `as="h1"` en el primer `<Section>`)
2. Keyword exacta máximo **2 veces** en headings de la misma página
3. Variantes naturales en el resto (no repetir frase como H2 dos veces)
4. H3 solo para sub-secciones reales (no decoración)

## H1 efectivo por URL

| URL | H1 |
|---|---|
| `/` | "Seguridad Privada para **Condominios** en CDMX y Estado de México" |
| `/servicios-de-seguridad-privada/` | "Servicios de Seguridad Privada para Condominios" |
| `/reclutamiento-para-seguridad-privada/` | "Recursos Humanos en Seguridad Privada para Condominios" |
| `/equipo-de-seguridad/` | "Equipo de Seguridad para Condominios" |
| `/empresa-de-seguridad-privada-para-condominios/` | "Contacto · Empresa de Seguridad Privada para Condominios" |
| `/nosotros/` | "Empresa de Seguridad Privada para Condominios" |
| `/blog/` | "Blog de Seguridad Privada para Condominios" |
| `/comunidades/` | "Comunidades que protegemos" |
| `/zonas/` | "Zonas de Cobertura · Seguridad Privada para Condominios" |
| `/{servicio}/` | "{Servicio} **para Condominios**" |
| `/comunidades/{slug}/` | "Seguridad Privada para {tipo}" |
| `/zonas/{slug}/` | "Seguridad para Condominios en {alcaldía}" |
| `/seguridad-privada/{slug}/` | Título del post |

## Section component
Soporta `as: 'h1' | 'h2'` (default h2). Cambia automáticamente la tag renderizada.

## Plan completo
Documento de referencia: `SEO-HIERARCHY.md` en raíz del repo.

Ver [[02-Keywords]] para densidad medida.
