import { defineCollection, z } from 'astro:content';

const servicios = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.enum(['shield', 'cctv', 'patrol', 'access', 'alert', 'check', 'phone', 'mail', 'pin', 'clock', 'star', 'arrow']),
    category: z.enum(['personal', 'tecnologia', 'protocolos']).default('protocolos'),
    /** 'servicio' aparece en /servicios-de-seguridad-privada/, 'rrhh' en /reclutamiento-para-seguridad-privada/ */
    kind: z.enum(['servicio', 'rrhh']).default('servicio'),
    /** Ruta a la imagen card (público) — ej. /images/servicios/control-de-acceso.jpg */
    image: z.string().optional(),
    order: z.number().default(0),
    features: z.array(z.string()).default([]),
    featured: z.boolean().default(false),

    // ---- SEO técnico (todos opcionales, no rompen MDX existentes) ----
    /** Title específico para <title> y OG. Si vacío, usa `title`. */
    seoTitle: z.string().optional(),
    /** Description específica para <meta description>. Si vacío, usa `description`. */
    seoDescription: z.string().optional(),
    /** Palabras clave semánticas (uso interno: schema.about, keywords meta). */
    keywords: z.array(z.string()).default([]),
    /** Beneficios concretos (3-6). Renderizados como sección H2. */
    benefits: z
      .array(z.object({ title: z.string(), desc: z.string() }))
      .default([]),
    /** FAQ específica de este servicio. Genera FAQPage JSON-LD. */
    faqs: z
      .array(z.object({ q: z.string(), a: z.string() }))
      .default([]),
    /** Slugs de servicios relacionados (internal linking). Si vacío, se calcula automáticamente. */
    related: z.array(z.string()).default([]),
    /** Fecha última revisión editorial (E-E-A-T). */
    lastReviewed: z.date().optional(),

    // ---- Campos L3 premium (todos opcionales, layout cae elegante si faltan) ----
    /** Eyebrow del hero (encima del título). */
    heroEyebrow: z.string().optional(),
    /** Pretítulo encima del headline (ej. "SEPRICO · Servicio de"). */
    heroLabel: z.string().optional(),
    /** Headline gigante en color brand. */
    heroHeadline: z.string().optional(),
    /** Subheadline debajo del headline (gris claro). */
    heroSubheadline: z.string().optional(),
    /** Body izquierdo del hero. Soporta <strong>. */
    heroBody: z.string().optional(),
    /** Aside derecho párrafo 1 del hero. Soporta <strong>. */
    heroAsideP1: z.string().optional(),
    /** Aside derecho párrafo 2 del hero. Soporta <strong>. */
    heroAsideP2: z.string().optional(),
    /** Stats row debajo del hero (3-4 items con value/label). */
    stats: z
      .array(z.object({ value: z.string(), label: z.string() }))
      .default([]),
    /** Proceso de implementación (4-5 pasos con icon/title/desc). */
    process: z
      .array(
        z.object({
          icon: z.enum(['shield', 'cctv', 'patrol', 'access', 'alert', 'check', 'phone', 'mail', 'pin', 'clock', 'star', 'arrow']),
          title: z.string(),
          desc: z.string(),
        }),
      )
      .default([]),
    /** Diferenciadores del servicio (3-6 cards icon/title/desc). */
    valueProps: z
      .array(
        z.object({
          icon: z.enum(['shield', 'cctv', 'patrol', 'access', 'alert', 'check', 'phone', 'mail', 'pin', 'clock', 'star', 'arrow']),
          title: z.string(),
          desc: z.string(),
        }),
      )
      .default([]),
    /** Stack tecnológico detallado por sub-categoría (ej. lectores, sensores, software). */
    techStack: z
      .array(
        z.object({
          title: z.string(),
          items: z.array(z.string()),
        }),
      )
      .default([]),
    /** Feature cards con imagen — versión rich de `features[]`. Si está presente, sustituye al grid simple. */
    featureCards: z
      .array(
        z.object({
          title: z.string(),
          desc: z.string().optional(),
          image: z.string(),
          href: z.string().optional(),
        }),
      )
      .default([]),
    /** Si true, renderiza sección Sectors (tipos de comunidad atendidas). */
    showSectors: z.boolean().default(false),
  }),
});

const comunidades = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    emoji: z.string().default('🏢'),
    order: z.number().default(0),
    challenges: z.array(z.string()).default([]),
    recommended: z.array(z.string()).default([]),
  }),
});

const zonas = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    region: z.enum(['cdmx', 'edomex']),
    order: z.number().default(0),
    neighborhoods: z.array(z.string()).default([]),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().default('Equipo SEPRICO'),
    tags: z.array(z.string()).default([]),
    /** Categoría: define la URL /{category}/{slug}/ */
    category: z.enum([
      'seguridad-privada',
      'personal-de-seguridad',
      'tecnologia-y-monitoreo',
      'protocolos-y-consultoria',
      'atencion-al-comite',
      'vigilancia',
      'uncategorized',
    ]).default('seguridad-privada'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { servicios, comunidades, zonas, blog };
