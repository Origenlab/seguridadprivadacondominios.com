---
tags: [seo, schema, opengraph]
---

# Schema.org y Open Graph

## JSON-LD en BaseLayout

Cada página renderiza schema `SecurityService`:

```json
{
  "@context": "https://schema.org",
  "@type": "SecurityService",
  "name": "SEPRICO",
  "url": "https://seguridadprivadacondominios.com",
  "telephone": "+52 55 3628 2480",
  "email": "contacto@seguridadprivadacondominios.com",
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "Ciudad de México" },
    { "@type": "AdministrativeArea", "name": "Estado de México" }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "CDMX",
    "addressCountry": "MX"
  },
  "openingHours": "Mo-Su 00:00-23:59"
}
```

## Open Graph defaults

| Meta | Valor |
|---|---|
| `og:type` | `website` (o `article` en blog posts) |
| `og:site_name` | SEPRICO |
| `og:locale` | `es_MX` |
| `og:title` | Title de la página |
| `og:description` | Meta description |
| `og:url` | Canonical URL absoluta |
| `og:image` | `/images/og/og-image.webp` (override por página posible) |

## Twitter Card
- `twitter:card` = `summary_large_image`
- Mismas image/title/description que OG

## Geo tags
```html
<meta name="geo.region" content="MX-CMX" />
<meta name="geo.placename" content="Ciudad de México" />
```

## Pendientes
- [ ] Validar JSON-LD en https://validator.schema.org/
- [ ] Imagen OG 1200×630 optimizada (actualmente usa el logo)
- [ ] Agregar Schema `Article` en blog posts individuales
- [ ] Schema `BreadcrumbList` automático

Ver [[02-Keywords]] para meta descriptions.
