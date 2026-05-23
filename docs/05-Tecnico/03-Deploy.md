---
tags: [deploy, hosting, produccion]
---

# Guía de deploy

## Hosting recomendado
**Netlify** (forma natural para formularios + redirects + sitio Astro estático).

Alternativas: **Vercel**, **Cloudflare Pages**.

## Pasos para Netlify

### 1. Conectar repo
```
Build command: npm run build
Output dir: dist
Node version: 18.17
```

### 2. Variables de entorno
Por ahora ninguna obligatoria. Cuando se integre el form de contacto:
- `CONTACT_EMAIL` (opcional, vía Netlify Forms ya capta automático)

### 3. Form de contacto
El formulario en `/empresa-de-seguridad-privada-para-condominios/` ya tiene `data-netlify="true"`. Netlify lo detecta automáticamente.

### 4. Custom domain
```
seguridadprivadacondominios.com → A record / CNAME a Netlify
```

SSL automático con Let's Encrypt.

## Redirects 301
Si alguna URL antigua del WP cambió, agregar a `public/_redirects`:
```
/url-vieja  /url-nueva  301
```

## Sitemap
Astro lo genera automáticamente en `dist/sitemap-index.xml`. Submit a Google Search Console.

## Performance esperado
- Lighthouse Performance: 95+ (estático, sin JS pesado)
- Lighthouse SEO: 100
- Lighthouse Accessibility: 95+
- LCP: <1.5s
- CLS: <0.1

## Pre-launch checklist
- [ ] Confirmar datos del cliente (tel, email, dirección)
- [ ] Conectar Google Analytics 4
- [ ] Submit sitemap en Search Console
- [ ] Test form de contacto end-to-end
- [ ] Validar redirects URL viejas → nuevas
- [ ] Verificar OG image se renderiza correcto en Facebook debugger

Ver [[../01-Proyecto/04-Roadmap]].
