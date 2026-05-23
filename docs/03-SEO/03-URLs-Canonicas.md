---
tags: [seo, urls, canonicas]
---

# URLs canónicas (preservar)

Slugs originales del WordPress que **NO se pueden cambiar** porque tienen SEO acumulado.

## Configuración crítica
```js
// astro.config.mjs
trailingSlash: 'always'
build: { format: 'directory' }
```

Genera `/foo/index.html` en vez de `/foo.html`. URL final: `seguridadprivadacondominios.com/foo/`.

## Inventario completo

### Páginas hub (7)
1. `/`
2. `/nosotros/`
3. `/servicios-de-seguridad-privada/`
4. `/reclutamiento-para-seguridad-privada/`
5. `/equipo-de-seguridad/`
6. `/blog/`
7. `/empresa-de-seguridad-privada-para-condominios/`

### Servicios raíz (9)
1. `/control-de-acceso/`
2. `/vigilancia-y-patrullaje/`
3. `/monitoreo-electronico/`
4. `/consultoria-en-seguridad/`
5. `/sistemas-de-camaras-de-vigilancia/`
6. `/control-biometrico-de-acceso/`
7. `/alarmas-de-seguridad/`
8. `/intercomunicacion-avanzada/`
9. `/sistemas-de-iluminacion-segura/`

### Recursos Humanos raíz (4)
10. `/personal-de-seguridad/`
11. `/entrenamiento-continuo/`
12. `/investigacion-de-antecedentes/`
13. `/bolsa-de-trabajo/`

### Blog posts (10+)
Pattern: `/seguridad-privada/{slug}/` o `/uncategorized/{slug}/`

### Productos WooCommerce
Pattern: `/producto/{slug}/`

### Categorías
- `/category/seguridad-privada/`
- `/category/uncategorized/`

### Bonus SEO (NO existían en WP)
Estos son NUEVOS, agregados para sumar tráfico orgánico:
- `/comunidades/` + 4 detalles (torres, fraccionamientos, premium, cotos)
- `/zonas/` + 14 zonas (8 CDMX + 6 Edomex)

## Redirects de URLs viejas (que inventé)
Las siguientes redirigen a su versión canónica:
- `/contacto/` → `/empresa-de-seguridad-privada-para-condominios/`
- `/servicios/` → `/servicios-de-seguridad-privada/`
- `/servicios/{slug}/` → `/{slug}/`
- `/blog/{slug}/` → `/seguridad-privada/{slug}/`

Ver `MIGRATION-PLAN.md` para detalles.
