---
tags: [aliados, backlinks, seo]
---

# Red de aliados con backlinks

Estrategia de partnership SEO con **6 empresas aliadas** que aparecen en testimonios + 12 artículos blog dedicados.

## Lista completa

| # | Empresa | Dominio | Giro |
|---|---|---|---|
| 1 | Equipo de Seguridad Industrial | [equipo-de-seguridad-industrial.com](https://equipo-de-seguridad-industrial.com) | EPP industrial |
| 2 | Máquinas de Construcción | [maquinasdeconstruccion.com](https://maquinasdeconstruccion.com) | Maquinaria / desarrolladores |
| 3 | Seguridad Privada MX | [seguridadprivadamx.com](https://seguridadprivadamx.com) | Seguridad corporativa |
| 4 | Cámara de Seguridad | [camara-de-seguridad.com](https://camara-de-seguridad.com) | CCTV / equipo |
| 5 | Seguridad Eventos | [seguridadeventos.com](https://seguridadeventos.com) | Seguridad para eventos |
| 6 | Guardias Privados | [guardias-privados.com](https://guardias-privados.com) | Marketplace / directorio |

## Donde aparecen los backlinks

### Testimonios (home)
`src/components/Testimonials.astro` — 6 cards con `url:` clickeable. Badge "Aliado SEPRICO".

### Blog (12 artículos dedicados)

2 artículos por aliado:

#### Equipo de Seguridad Industrial
- `equipo-de-seguridad-industrial-alianza-seprico`
- `equipo-de-seguridad-industrial-condominios`

#### Máquinas de Construcción
- `maquinas-de-construccion-transicion-residencial`
- `maquinas-de-construccion-seguridad-obra`

#### Seguridad Privada MX
- `seguridad-privada-mx-referidos-condominios`
- `seguridad-privada-mx-modelo-colaboracion`

#### Cámara de Seguridad
- `camara-de-seguridad-integracion-cctv`
- `camara-de-seguridad-propuesta-conjunta`

#### Seguridad Eventos
- `seguridad-eventos-asambleas-vecinales`
- `seguridad-eventos-refuerzo-operativo`

#### Guardias Privados
- `guardias-privados-directorio-cdmx`
- `guardias-privados-marketplace-seguridad`

## Cómo agregar un aliado nuevo

1. Editar `src/components/Testimonials.astro` y agregar objeto con `url:`
2. Crear 2 archivos MDX en `src/content/blog/` con category `seguridad-privada`
3. Los artículos deben:
   - Mencionar la alianza con tono profesional
   - Incluir 1 link outbound al aliado
   - Incluir 5-8 links internos a SEPRICO
   - 400-500 palabras

Ver [[04-Blog-Estrategia]] para detalle.
