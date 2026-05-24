---
tags: [template, blog, articulo, layout, seo, interlinking, aprobado]
aprobado: 2026-05-24
referencia: src/pages/seguridad-privada/[...slug].astro
ejemplo_vivo: http://localhost:4321/seguridad-privada/entrenamiento-guardias-seguridad-privada-que-incluir/
---

# Template Artículo Blog — Diseño aprobado

Plantilla profesional para **todos los artículos del blog SEPRICO**. Reutiliza el `<Hero/>` autorizado del home/blog index/L2/L3, agrega meta strip de autoridad, layout 8/4 con TOC sticky, bloque obligatorio "Sobre SEPRICO" (E-E-A-T) y JSON-LD `BlogPosting` + `BreadcrumbList`.

> **Archivo de referencia:** `src/pages/seguridad-privada/[...slug].astro`
> **Aprobado:** 2026-05-24
> **Aplicable a:** los 7 templates de artículo por categoría (ver [[#Checklist de replicación]])

---

## Orden de secciones (top → bottom)

1. `<Breadcrumb/>` — Blog → Seguridad privada → {título}
2. **`<Hero/>` autorizado** — patrón 50/50 (igual que home/blog index)
3. **Meta strip** — autor SEPRICO + 3 chips certificación
4. **Section contenido + sidebar** — grid `lg:grid-cols-12` (8 + 4)
5. `<CtaBanner/>` — banner brand final con teléfono y formulario
6. Script TOC scroll-spy (vanilla JS, `is:inline`)

---

## 1. Hero (componente `<Hero/>`)

Mismo componente autorizado del home/blog/L2/L3. Para artículos los props son:

```astro
<Hero
  eyebrow={`Blog SEPRICO · Artículo · ${readingMin} min de lectura`}
  label="Equipo SEPRICO · Documentación operativa"
  headline="Seguridad Privada"
  subheadline={entry.data.title}
  body={`<strong class="text-white">${entry.data.description}</strong>`}
  asideEyebrow="Sobre este artículo"
  asideP1={`Este artículo es parte de la documentación abierta de <strong class="text-white">SEPRICO</strong> — empresa de seguridad privada para condominios y residenciales en CDMX y Estado de México desde el año ${SITE.founded}. Cada publicación nace de un caso real atendido por nuestro equipo operativo, no de contenido genérico de marketing.`}
  asideP2={`Lectura aproximada: <strong class="text-white">${readingMin} minutos</strong> · ${entry.data.tags.length} tema${tagsPlural} cubierto${tagsPlural}. Si trabajas en un comité vecinal o administración profesional, este material está pensado para ti.`}
  isH1={true}
/>
```

**Notas:**
- `headline` siempre es la **categoría como palabra** (`"Seguridad Privada"`, `"Tecnología y Monitoreo"`, etc.) → mantiene el patrón del gradient brand gigante.
- `subheadline` es el `entry.data.title` completo → queda dentro del `<h1>` SEO.
- `isH1={true}` siempre — el H1 vive en el Hero, no debe duplicarse abajo.
- `readingMin` se calcula así: `Math.max(1, Math.round(words / 220))` donde `words = entry.body.trim().split(/\s+/).length`.

---

## 2. Meta strip (autoridad)

Tira delgada `border-b border-white/10 bg-ink-900` entre Hero y contenido. Refuerza autoría sin romper el hero.

```astro
<section class="border-b border-white/10 bg-ink-900">
  <div class="container-pro py-5">
    <div class="flex flex-wrap items-center justify-between gap-4">
      <!-- Avatar "S" + autor + razón social + año -->
      <div class="flex items-center gap-3">...</div>

      <!-- 3 chips certificación: SSPC, ISO 9001, SETEC -->
      <div class="flex flex-wrap items-center gap-2">...</div>
    </div>
  </div>
</section>
```

---

## 3. Layout contenido + sidebar (`lg:grid-cols-12`)

```
┌──────────────────────────────────────────┬─────────────────────┐
│ ARTICLE (lg:col-span-8)                  │ SIDEBAR             │
│                                          │ (lg:col-span-4)     │
│ ┌── Tags chips arriba ──────────────────┐│ ┌─ TOC sticky ─────┐│
│ ├── Prose <Content/> ────────────────────┤│ │  H2 numerados    ││
│ ├── Mid-article CTA (brand inline) ─────┤│ │  scroll-spy IO   ││
│ ├── Sobre SEPRICO (E-E-A-T box) ────────┤│ ├─ CTA WhatsApp ───┤│
│ ├── Tag footer ─────────────────────────┤│ ├─ Lista servicios ┤│
│ └── Related grid 3-cols ────────────────┘│ └──────────────────┘│
└──────────────────────────────────────────┴─────────────────────┘
```

### 3.1 Tags chips arriba

```astro
<div class="mb-8 flex flex-wrap gap-2">
  {tags.map((t) => (
    <span class="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-ink-900 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest2 text-white/60">
      #{t}
    </span>
  ))}
</div>
```

### 3.2 Prose (`<Content/>`)

Container con `id="article-content"` (lo necesita el scroll-spy). Clases prose enriquecidas:

```
prose prose-invert prose-lg max-w-none
prose-headings:scroll-mt-28 prose-headings:font-bold prose-headings:text-white
prose-h2:mt-12 prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:leading-tight
prose-h2:border-l-4 prose-h2:border-brand-500 prose-h2:pl-4
prose-h3:mt-8 prose-h3:text-xl prose-h3:text-white
prose-p:leading-relaxed prose-p:text-white/80
prose-strong:text-white prose-strong:font-semibold
prose-a:text-brand-400 prose-a:font-semibold prose-a:no-underline
hover:prose-a:text-brand-300 hover:prose-a:underline
prose-ul:my-6 prose-li:text-white/80 prose-li:marker:text-brand-500
prose-blockquote:border-l-4 prose-blockquote:border-brand-500 prose-blockquote:bg-ink-900/50
prose-blockquote:py-2 prose-blockquote:px-5 prose-blockquote:not-italic
prose-blockquote:text-white/85 prose-blockquote:rounded-r-lg
prose-code:rounded prose-code:bg-ink-800 prose-code:px-1.5 prose-code:py-0.5
prose-code:text-brand-300 prose-code:before:hidden prose-code:after:hidden
prose-table:text-sm prose-th:bg-ink-800 prose-th:text-white prose-th:font-semibold
prose-td:border-white/10 prose-th:border-white/10
prose-img:rounded-xl prose-img:border prose-img:border-white/10
prose-hr:border-white/10
```

**Decisiones de estilo:**
- H2 lleva `border-l-4 border-brand-500 pl-4` — marca visual fuerte de sección.
- Blockquote no-italic con bg ink-900/50, border brand izquierda, rounded a la derecha.
- Code inline en brand-300 sobre ink-800.
- Tabla header en ink-800 (consistente con el sistema).
- `scroll-mt-28` para que el TOC ancle bien debajo del header sticky.

### 3.3 Mid-article CTA inline

Card brand inline entre el contenido y el bloque "Sobre SEPRICO". Genera conversión en mid-scroll.

```astro
<aside class="my-12 overflow-hidden rounded-2xl border border-brand-500/30
              bg-gradient-to-br from-brand-500/15 via-ink-900 to-ink-900
              p-6 md:p-8">
  <!-- icon shield + título "¿Tu condominio aplica estos criterios?"
       + descripción "Auditoría inicial gratuita..."
       + botón WhatsApp (btn-brand) + link formulario (btn-ghost) -->
</aside>
```

### 3.4 Bloque "Sobre SEPRICO" (E-E-A-T obligatorio)

Renderiza **autoridad de empresa** en cada artículo — refuerzo crítico para Google E-E-A-T.

```astro
<section class="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-ink-900">
  <header class="border-b border-white/10 bg-ink-800/50 px-6 py-4">
    Sobre el autor
  </header>
  <div class="grid gap-6 p-6 md:grid-cols-3 md:p-8">
    <!-- Col 1: Avatar "S" + nombre + razón social + 2 mini-stats (años, comunidades) -->
    <!-- Col 2: Párrafo bio + grid 2 cols con SITE.certifications + CTAs (Nosotros, Catálogo) -->
  </div>
</section>
```

**Contenido fijo del párrafo bio** (usar literal en el template):

> **SEPRICO** ({SITE.legalName}) opera desde el **año {SITE.founded}** como empresa especializada en [seguridad privada para condominios](/), fraccionamientos y residenciales en CDMX y Estado de México. Esta publicación es parte de nuestra documentación abierta para comités administrativos, presidentes vecinales y administradores profesionales que requieren criterios técnicos, no recomendaciones genéricas.

### 3.5 Tag footer

Re-renderiza tags como links a `/category/{category}/` (interlinking).

### 3.6 Related posts grid

3 cards `sm:grid-cols-2 lg:grid-cols-3` filtrados por **tags en común**. Cada card:
- Aspect ratio 16/9, gradient ink-700→ink-800→ink-900 + radial brand
- Icon shield en lg-10x10 brand
- Categoría como eyebrow brand-400
- Título line-clamp-3
- Description line-clamp-2
- "Leer artículo →" link brand-500

Filtro JS:
```ts
const related = all
  .filter((p) => p.slug !== entry.slug && p.data.tags.some((t) => entry.data.tags.includes(t)))
  .slice(0, 3);
```

---

## 4. Sidebar (`lg:col-span-4`, sticky `lg:sticky lg:top-24`)

### 4.1 TOC dinámico

Auto-generado desde `headings` de Astro (filtrado a H2):

```ts
const { Content, headings } = await entry.render();
const tocItems = headings.filter((h) => h.depth === 2);
```

Estructura HTML:
```astro
<nav id="article-toc" aria-label="Tabla de contenidos del artículo"
     class="overflow-hidden rounded-2xl border border-white/10 bg-ink-900">
  <header>En este artículo · {N} secciones</header>
  <ol>
    {tocItems.map((h, i) => (
      <li>
        <a href={`#${h.slug}`} data-toc-link={h.slug}
           class="group flex items-start gap-3 border-l-2 border-transparent px-5 py-2.5
                  text-white/65 transition-colors hover:border-brand-500/40
                  hover:bg-brand-500/5 hover:text-white">
          <span>{String(i + 1).padStart(2, '0')}</span>
          <span>{h.text}</span>
        </a>
      </li>
    ))}
  </ol>
</nav>
```

### 4.2 Compact WhatsApp CTA

Card brand sólido (gradient brand-500→brand-600) con:
- Badge pulse "Respuesta < 15 min"
- Pregunta "¿Aplica este artículo a tu condominio?"
- Botón "WhatsApp directo" white sobre brand

### 4.3 Lista de servicios (interlinking)

6 links directos a L2/L3:
- `/personal-de-seguridad/`
- `/monitoreo-electronico/`
- `/control-de-acceso/`
- `/vigilancia-y-patrullaje/`
- `/alarmas-de-seguridad/`
- `/consultoria-en-seguridad/`

Cada link con `Icon` brand-400 + label + arrow derecha.

---

## 5. JSON-LD schemas (via `<Fragment slot="schemas">`)

`BaseLayout` expone `<slot name="schemas" />` en el `<head>`. Inyectar:

### 5.1 `BlogPosting`

```ts
{
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  '@id': `${canonical}#article`,
  mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
  headline: entry.data.title,
  description: entry.data.description,
  inLanguage: 'es-MX',
  datePublished: entry.data.pubDate.toISOString(),
  dateModified: entry.data.pubDate.toISOString(),
  image: ogImage, // SITE.url + /images/og/og-image.webp
  url: canonical,
  articleSection: 'Seguridad Privada para Condominios',
  keywords: entry.data.tags.join(', '),
  wordCount: words,
  author: {
    '@type': 'Organization',
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
  },
  publisher: { '@id': `${SITE.url}/#organization` },
  about: entry.data.tags.map((t) => ({ '@type': 'Thing', name: t })),
}
```

### 5.2 `BreadcrumbList`

```ts
{
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE.url}/` },
    { '@type': 'ListItem', position: 2, name: 'Blog',   item: `${SITE.url}/blog/` },
    { '@type': 'ListItem', position: 3, name: 'Seguridad privada', item: `${SITE.url}/category/seguridad-privada/` },
    { '@type': 'ListItem', position: 4, name: entry.data.title, item: canonical },
  ],
}
```

Limpiar undefined antes de serializar: `JSON.parse(JSON.stringify(schema))`.

---

## 6. TOC scroll-spy (vanilla JS, `is:inline`)

Script al final del archivo (fuera del `<BaseLayout>`):

```html
<script is:inline>
  (function () {
    const toc = document.getElementById('article-toc');
    const content = document.getElementById('article-content');
    if (!toc || !content) return;

    const links = Array.from(toc.querySelectorAll('a[data-toc-link]'));
    const targets = links
      .map((a) => document.getElementById(a.getAttribute('data-toc-link')))
      .filter(Boolean);
    if (targets.length === 0) return;

    const activeCls = ['border-brand-500', 'bg-brand-500/10', 'text-white'];
    const inactiveCls = ['border-transparent'];

    function setActive(slug) {
      links.forEach((a) => {
        const isActive = a.getAttribute('data-toc-link') === slug;
        if (isActive) {
          a.classList.remove(...inactiveCls);
          a.classList.add(...activeCls);
        } else {
          a.classList.remove(...activeCls);
          a.classList.add(...inactiveCls);
        }
      });
    }

    const seen = new Map();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => seen.set(e.target.id, e.isIntersecting ? e.intersectionRatio : 0));
        let topSlug = null;
        let topRatio = 0;
        seen.forEach((ratio, id) => {
          if (ratio > topRatio) { topRatio = ratio; topSlug = id; }
        });
        if (topSlug) setActive(topSlug);
      },
      { rootMargin: '-100px 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    targets.forEach((t) => io.observe(t));
    setActive(targets[0].id);
  })();
</script>
```

**Cómo funciona:**
- Lee todos los H2 (sus IDs los inyecta Astro automáticamente desde `headings`).
- Observa cada uno con `IntersectionObserver` (rootMargin recortado para que solo cuenten cuando están en la franja media-superior del viewport).
- Marca el link activo con borde brand izquierdo y bg brand/10.

---

## 7. BaseLayout props

Pasar al `<BaseLayout>`:

```astro
<BaseLayout
  title={`${entry.data.title} | Blog SEPRICO`}
  description={entry.data.description}
  type="article"
  canonical={canonical}
  keywords={entry.data.tags}
  articleSection="Seguridad Privada para Condominios"
  lastReviewed={entry.data.pubDate}
>
```

---

## Arquitectura (refactor 2026-05-24)

Toda la lógica del template vive en **`src/components/BlogArticle.astro`** (~480 líneas). Cada archivo de página por categoría es un wrapper de ~15 líneas que:

1. Filtra los posts de su categoría con `getCollection`.
2. Pasa al `<BlogArticle/>` el `entry` y un objeto `CategoryMeta`.

### CategoryMeta (interfaz del componente)

```ts
interface CategoryMeta {
  slug: string;           // matches frontmatter.category — ej. 'seguridad-privada'
  label: string;          // visible en breadcrumb — ej. 'Seguridad privada'
  headline: string;       // headline gradient del Hero — ej. 'Seguridad Privada'
  archiveHref: string;    // path del archive — ej. '/category/seguridad-privada/'
  articleSection: string; // SEO + JSON-LD — ej. 'Seguridad Privada para Condominios'
  icon: IconName;         // icon en cards related — ej. 'shield'
}
```

### Inventario de templates por categoría (7/7 completos)

| Categoría (slug) | Page file | Headline Hero | Icon | Posts |
|------------------|-----------|---------------|------|------:|
| `seguridad-privada` | `src/pages/seguridad-privada/[...slug].astro` | Seguridad Privada | shield | 47 |
| `tecnologia-y-monitoreo` | `src/pages/tecnologia-y-monitoreo/[...slug].astro` | Tecnología y Monitoreo | cctv | 17 |
| `protocolos-y-consultoria` | `src/pages/protocolos-y-consultoria/[...slug].astro` | Protocolos y Consultoría | check | 9 |
| `atencion-al-comite` | `src/pages/atencion-al-comite/[...slug].astro` | Atención al Comité | phone | 8 |
| `personal-de-seguridad` | `src/pages/personal-de-seguridad/[...slug].astro` | Personal de Seguridad | patrol | 6 |
| `vigilancia` | `src/pages/vigilancia/[...slug].astro` | Vigilancia | patrol | 2 |
| `uncategorized` | `src/pages/uncategorized/[...slug].astro` | Blog SEPRICO | star | 2 |

**Total: 91 artículos** (89 categorizados + 2 uncategorized) — todos sirviendo el mismo template profesional.

### Ejemplo de page file (15 líneas)

```astro
---
import BlogArticle from '@/components/BlogArticle.astro';
import { getCollection, type CollectionEntry } from 'astro:content';

export async function getStaticPaths() {
  const posts = await getCollection('blog', ({ data }) =>
    !data.draft && data.category === 'tecnologia-y-monitoreo'
  );
  return posts.map((p) => ({ params: { slug: p.slug }, props: { entry: p } }));
}

interface Props { entry: CollectionEntry<'blog'>; }
const { entry } = Astro.props;
---

<BlogArticle
  entry={entry}
  category={{
    slug: 'tecnologia-y-monitoreo',
    label: 'Tecnología y Monitoreo',
    headline: 'Tecnología y Monitoreo',
    archiveHref: '/category/tecnologia-y-monitoreo/',
    articleSection: 'Tecnología y Monitoreo para Condominios',
    icon: 'cctv',
  }}
/>
```

### Para agregar una nueva categoría

1. Agregar la categoría al `z.enum([...])` de `src/content/config.ts`.
2. Crear `src/pages/{nueva-categoria}/[...slug].astro` con el wrapper de arriba.
3. Si la categoría debe aparecer en el sidebar del blog, agregarla al array `CATS` en `src/components/BlogSidebar.astro`.
4. (Opcional) Agregar la categoría al objeto `CAT_META` en `src/pages/blog/index.astro` y `src/pages/blog/page/[page].astro`.

**Cualquier cambio de diseño se hace en un solo lugar:** `src/components/BlogArticle.astro`. Los 7 wrappers no necesitan tocarse.

---

## Decisiones de diseño que NO se deben tocar

| Decisión | Razón |
|----------|-------|
| Hero autorizado siempre | Consistencia visual con home/blog/L2/L3 ([[03-Diseno-Section-Title]] memoria) |
| `headline` = categoría (no título) | El título completo va en `subheadline` y dentro del `<h1>` SEO; el headline gigante mantiene el patrón del gradient brand |
| Bloque "Sobre SEPRICO" en cada artículo | E-E-A-T obligatorio para Google + posicionamiento de marca |
| TOC solo H2 (no H3) | Evita ruido en sidebar — H3 ya están bajo H2 en visual jerárquico |
| Sidebar con 3 módulos máximo | TOC + WhatsApp + Servicios — más módulos saturan |
| Sin fechas visibles en cards ni cabecera | Decisión 2026-05-24 ([[feedback_blog_no_dates]]) |
| `prose-h2` con border-l brand | Marca visual fuerte, ayuda al scaneo de lectura |
| Mid-CTA siempre presente | Conversión en mid-scroll antes del bloque autoría |
| Related grid SIEMPRE filtrado por tags | Interlinking semántico, no aleatorio |

---

## Relacionados

- [[01-Sistema-Visual]] — tokens de color brand, ink, typography
- [[02-Componentes]] — inventario de Hero, Section, CtaBanner, Icon, BaseLayout
- [[03-Mobile-Responsive]] — overrides móvil
- [[../03-SEO/01-Estrategia]] — política SEO general del sitio (si existe)
