# Seguridad Privada Condominios

Sitio web oficial — Astro 4 + Tailwind CSS + MDX.
Dominio: **seguridadprivadacondominios.com**

Identidad premium oscuro (negro + dorado), enfocado en condominios y residenciales en CDMX y Estado de México.

---

## Stack

- **Astro 4** — SSG con islas
- **TailwindCSS** + plugin Typography
- **MDX** para content collections (servicios)
- **@astrojs/sitemap** — sitemap automático
- **TypeScript** estricto con path aliases (`@/`, `@components/`, etc.)
- **Prettier** + plugin Astro + plugin Tailwind

---

## Arranque rápido

```bash
# 1. Instalar dependencias
npm install

# 2. Servidor de desarrollo
npm run dev
# → http://localhost:4321

# 3. Build de producción
npm run build

# 4. Preview del build
npm run preview

# 5. Type-check
npm run check

# 6. Formatear código
npm run format
```

Node >= 18.17.

---

## Estructura

```
.
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── site.webmanifest
└── src/
    ├── components/        # Hero, Header, Footer, ServicesGrid, etc.
    ├── config/
    │   └── site.ts        # ⚠️ Datos de contacto, redes, certificaciones
    ├── content/
    │   ├── config.ts      # Schema de la colección "servicios"
    │   └── servicios/     # MDX por servicio
    ├── layouts/
    │   └── BaseLayout.astro
    ├── pages/
    │   ├── index.astro
    │   ├── nosotros.astro
    │   ├── contacto.astro
    │   ├── gracias.astro
    │   ├── aviso-de-privacidad.astro
    │   ├── 404.astro
    │   └── servicios/
    │       ├── index.astro
    │       └── [...slug].astro
    └── styles/
        └── global.css
```

---

## Personalización inicial

Antes de publicar, edita `src/config/site.ts` con datos reales:

- Teléfono (`contact.phone`, `contact.phoneDisplay`)
- WhatsApp (`contact.whatsapp` — formato internacional sin `+`)
- Correo
- Dirección
- Redes sociales
- Certificaciones

También reemplaza los placeholders visuales en `public/`:

- `og-image.jpg` (1200x630) para previews en redes
- `apple-touch-icon.png` (180x180)

---

## Agregar un nuevo servicio

1. Crea `src/content/servicios/mi-servicio.mdx`
2. Usa el schema (ver otros archivos):

```mdx
---
title: 'Mi Servicio'
description: 'Descripción corta'
icon: 'shield'   # shield | cctv | patrol | access | alert | check
order: 7
features:
  - 'Característica 1'
  - 'Característica 2'
---

Contenido en MDX…
```

3. El servicio aparecerá automáticamente en `/servicios` y `/servicios/mi-servicio`.

---

## Despliegue recomendado

- **Netlify** (el form de contacto ya tiene `data-netlify="true"`)
- **Vercel**
- **Cloudflare Pages**

En cualquier plataforma:

```
Build command:  npm run build
Output dir:     dist
Node version:   18.17 o superior
```

---

## Próximos pasos sugeridos

- [ ] Sustituir datos reales en `src/config/site.ts`
- [ ] Agregar imágenes reales del equipo / instalaciones (carpeta `src/assets/`)
- [ ] Crear `og-image.jpg` con identidad de marca
- [ ] Conectar el form de contacto (Netlify Forms / Formspree / API propia)
- [ ] Configurar Google Analytics 4 o Plausible
- [ ] Agregar sección de Blog / Recursos (otra content collection)
- [ ] Casos de éxito / clientes
- [ ] Schema.org Review/Rating cuando haya testimonios reales

---

© Seguridad Privada Condominios
