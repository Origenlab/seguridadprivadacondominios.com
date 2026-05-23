---
tags: [mobile, responsive, accesibilidad]
---

# Estrategia móvil

Implementada con `src/styles/mobile.css` cargada después de `global.css` en `BaseLayout.astro`.

## Breakpoints

| BP | Tamaño | Devices target |
|---|---|---|
| 1024px | Tablets / laptops pequeños | iPad landscape |
| 768px | Tablet portrait | iPad |
| 640px | Móviles grandes | iPhone Pro Max, Galaxy Note |
| 480px | Móviles estándar | iPhone 14, Pixel |
| 380px | Móviles pequeños | iPhone SE |

## Reglas críticas aplicadas

### iOS no-zoom
Inputs forzados a `font-size: 16px` en ≤640px. Sin esto, Safari iOS hace zoom automático al enfocar input.

### Touch targets
Mínimo 48px en `.btn-*`, links de nav móvil, items de form. Cumple WCAG y Apple HIG.

### Safe-area iOS
Container y WhatsApp float respetan `env(safe-area-inset-*)` para notch / dynamic island.

### Header móvil
- Altura: 96 → 76 → 68 → 64px según breakpoint
- Logo: 64 → 48 → 42 → 38px

### Cards
Todas las grids 4-col → forzadas a 1 col en ≤640px con `!important`.

### Overflow
`overflow-x: hidden` global anti-scroll horizontal accidental.

### Tap highlight
Reemplaza el feo gris iOS por tinte `brand-500/15`.

## Meta viewport
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, maximum-scale=5.0" />
```

`maximum-scale=5.0` permite zoom accesibilidad (vs `=1` que lo bloquea — accesibilidad fail).

## Validación
DevTools → device toolbar:
- iPhone 14 (390×844)
- iPhone SE (375×667)
- Galaxy S20 (360×800)
- iPad Mini (768×1024)
