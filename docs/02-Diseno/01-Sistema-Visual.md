---
tags: [diseno, sistema-visual, colores, tipografia]
---

# Sistema visual

Inspiración: estilo **REDEIL** (rentadeiluminacion.com) — negro + rojo coral, sans bold, cards con imagen.

## Paleta de colores

### Ink (oscuros)
| Token | Hex | Uso |
|---|---|---|
| `ink-950` | `#0a0a0a` | Background principal |
| `ink-900` | `#0f0f0f` | Background de sections "darker" |
| `ink-800` | `#161616` | Cards, dropdowns |
| `ink-700` | `#1f1f1f` | Bordes sutiles |

### Brand (rojo coral)
| Token | Hex | Uso |
|---|---|---|
| `brand-300` | `#ff9d9d` | Tags / chips secundarios |
| `brand-400` | `#ff6868` | Hover de links |
| `brand-500` | `#f43f3f` | Color primario, botones, acentos |
| `brand-600` | `#e02424` | Hover de botones brand |

### Whites con opacity (texto)
- `text-white` — títulos principales
- `text-white/85` — texto base
- `text-white/75` — descripciones
- `text-white/65` — texto secundario
- `text-white/45` — texto muted

## Tipografía
- **Familia única:** Inter (de Google Fonts)
- Pesos: 400, 500, 600, 700, 800, 900
- **Sin serifs** — todo sans
- Display y body comparten familia

## Componentes base globales

### `.btn-brand`
Botón primario rojo. Min-height 48px en móvil (touch).

### `.btn-ghost`
Botón secundario con borde blanco/15.

### `.eyebrow`
Etiqueta pequeña con punto rojo + texto uppercase tracking widest.

### `.service-card`
Card estilo REDEIL: imagen aspect 4:3 arriba + body abajo con padding.

### `.card`
Card simple sin imagen, padding interno.

### `.container-pro`
Container fluid 100% con padding lateral responsive.

### `.section-title`
H2/H1 con `clamp` para tipografía fluida.

## Patrones visuales

- **Eyebrow** con punto rojo `•` + texto uppercase tracking-widest2
- **Línea decorativa roja** `h-[3px] w-12 bg-brand-500` debajo de títulos
- **Icono en card** dentro de cuadro rojo `bg-brand-500` (24×24px)
- **Gradient overlay** sobre imágenes: `from-ink-950/85 via-ink-950/40 to-transparent`

Ver [[02-Componentes]] para inventario completo.
