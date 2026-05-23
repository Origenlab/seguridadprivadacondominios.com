---
tags: [tecnico, estructura, repositorio]
---

# Estructura del repositorio

```
SEGURIDADPARACONDOMINIOS/
├── astro.config.mjs          # config Astro
├── tailwind.config.mjs       # paleta ink + brand
├── tsconfig.json             # strict + paths
├── package.json
├── README.md                 # arranque
├── MIGRATION-PLAN.md         # plan completo migración
├── SEO-HIERARCHY.md          # plan SEO
├── docs/                     # ← vault Obsidian
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── site.webmanifest
│   └── images/
│       ├── brand/logo.webp
│       ├── servicios/*.jpg (9)
│       ├── rrhh/*.jpg (4)
│       ├── general/*.jpg (8)
│       └── og/og-image.webp
└── src/
    ├── components/           # 17 componentes Astro
    ├── config/site.ts        # config marca SEPRICO
    ├── content/
    │   ├── config.ts         # schemas Zod
    │   ├── servicios/        # 13 MDX
    │   ├── comunidades/      # 4 MDX
    │   ├── zonas/            # 14 MDX
    │   └── blog/             # 22 MDX
    ├── layouts/
    │   ├── BaseLayout.astro
    │   └── ServiceLayout.astro
    ├── pages/
    │   ├── index.astro
    │   ├── nosotros.astro
    │   ├── {servicio}.astro × 9
    │   ├── {rrhh}.astro × 4
    │   ├── servicios-de-seguridad-privada.astro
    │   ├── reclutamiento-para-seguridad-privada.astro
    │   ├── equipo-de-seguridad.astro
    │   ├── empresa-de-seguridad-privada-para-condominios.astro
    │   ├── aviso-de-privacidad.astro
    │   ├── 404.astro
    │   ├── gracias.astro
    │   ├── blog/
    │   ├── seguridad-privada/[...slug].astro
    │   ├── uncategorized/[...slug].astro
    │   ├── category/[...slug].astro
    │   ├── comunidades/
    │   ├── zonas/
    │   └── producto/[...slug].astro
    ├── styles/
    │   ├── global.css
    │   └── mobile.css         # overhaul responsive
    └── env.d.ts
```

## Tamaño del proyecto
- ~100 archivos fuente
- ~22 imágenes (1.1 MB)
- ~13 KB en CSS (global + mobile)

Ver [[01-Stack]] para tooling.
