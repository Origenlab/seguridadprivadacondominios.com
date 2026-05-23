---
tags: [seo, auditoria, checklist]
---

# Auditoría SEO del sitio

Auditoría realizada después de completar el layout y la estructura. Resultados y correcciones aplicadas.

## ✅ Lo que está correcto

### Estructura técnica
- [x] `trailingSlash: 'always'` configurado
- [x] `build.format: 'directory'` (genera `/foo/index.html`)
- [x] Sitemap.xml automático con `@astrojs/sitemap`
- [x] `robots.txt` permite indexación + bloquea bots IA
- [x] Meta viewport con `viewport-fit=cover` + `maximum-scale=5.0`
- [x] Open Graph + Twitter Cards en todas las páginas
- [x] JSON-LD `SecurityService` en BaseLayout
- [x] Geo tags MX-CMX
- [x] Canonical URL automática
- [x] Lang attribute `es-MX` en html

### Jerarquía de títulos
- [x] **1 solo H1** por página (vía `as="h1"` en Section)
- [x] H2 jerárquicos en cada sección
- [x] H3 solo en sub-secciones reales
- [x] Keyword exacta ≤ 2 veces en headings/página

### Densidad keyword
- [x] Todas las páginas < 2% densidad (anti-stuffing)
- [x] Variantes naturales intercaladas
- [x] No hay repetición de frases entre H2s

### Links
- [x] Todos los `target="_blank"` tienen `rel="noopener noreferrer"`
- [x] WhatsApp añadido `nofollow` (link comercial)
- [x] Anchor text descriptivo (no "click aquí")

### Imágenes
- [x] Todas con atributo `alt` descriptivo
- [x] `loading="lazy"` en cards no-hero
- [x] `decoding="async"`
- [x] Width/height explícitos donde aplica

### URLs canónicas
- [x] 23 URLs estáticas preservan slugs del WP original
- [x] Redirects de URLs viejas (/contacto, /servicios) hacia las canónicas
- [x] Trailing slash consistente

## ⚠️ Pendientes / mejoras opcionales

### Validaciones externas a hacer pre-launch
- [ ] Validar JSON-LD en https://validator.schema.org/
- [ ] Validar OG image en Facebook Debugger
- [ ] Validar mobile-friendly en Google PageSpeed Insights
- [ ] Submit sitemap a Google Search Console
- [ ] Configurar Bing Webmaster Tools
- [ ] Comparar UR-by-URL contra WordPress live para confirmar paridad SEO

### Información a confirmar con el cliente
- [ ] Meta descriptions reales (revisar c/u contra lo que prefiera el cliente)
- [ ] Datos de contacto (tel, email, dirección)
- [ ] Permisos / certificaciones reales (actualmente: placeholders)
- [ ] Cifras "+120 comunidades atendidas", "25+ años", etc.

### Mejoras técnicas opcionales
- [ ] Schema `Article` en posts del blog (actualmente solo SecurityService global)
- [ ] Schema `BreadcrumbList` automático
- [ ] Schema `FAQPage` en `/` (para los rich snippets de Google)
- [ ] Schema `LocalBusiness` con dirección fiscal real
- [ ] Schema `Review`/`AggregateRating` cuando haya reseñas reales
- [ ] OG image personalizada 1200×630 (actualmente usa el logo cropeado)
- [ ] `apple-touch-icon.png` 180×180 (actualmente falta)
- [ ] Archivo `humans.txt` (opcional, branding)

### Performance esperada
| Métrica | Target | Notas |
|---|---|---|
| Lighthouse Performance | 95+ | Astro SSG, sin JS pesado |
| Lighthouse SEO | 100 | Todo lo crítico cubierto |
| Lighthouse Accessibility | 95+ | Touch targets ≥48px, alt texts, contrast |
| LCP | <1.5s | Imágenes lazy + WebP |
| CLS | <0.1 | Width/height explícitos |
| FID/INP | <100ms | JS mínimo |

## Falsos positivos detectados en auditoría

Estos no son problemas reales — el grep los marcó pero la implementación es correcta:

### "Páginas sin title prop"
Las páginas de servicios individuales (`alarmas-de-seguridad.astro`, etc.) son wrappers de 3 líneas:
```astro
---
import ServiceLayout from '@/layouts/ServiceLayout.astro';
---
<ServiceLayout slug="alarmas-de-seguridad" type="servicios" />
```
El title/description los carga `ServiceLayout` desde el MDX y los pasa a `BaseLayout`. **Funciona correcto.**

### "Imágenes sin alt"
Algunas declaraciones `<img` están en multi-línea, con `alt=` en línea siguiente. El grep no las captó pero el HTML final tiene el alt correctamente.

Ver [[01-Jerarquia-Titulos]], [[02-Keywords]], [[03-URLs-Canonicas]], [[04-Schema-OG]].
