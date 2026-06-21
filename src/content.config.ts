import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const ICONS = ['shield', 'cctv', 'patrol', 'access', 'alert', 'check', 'phone', 'mail', 'pin', 'clock', 'star', 'arrow'] as const;

const servicios = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/servicios' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.enum(ICONS),
    category: z.enum(['personal', 'tecnologia', 'protocolos', 'atencion']).default('protocolos'),
    kind: z.enum(['servicio', 'rrhh']).default('servicio'),
    image: z.string().optional(),
    order: z.number().default(0),
    features: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    keywords: z.array(z.string()).default([]),
    benefits: z.array(z.object({ title: z.string(), desc: z.string() })).default([]),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    related: z.array(z.string()).default([]),
    lastReviewed: z.date().optional(),
    heroEyebrow: z.string().optional(),
    heroLabel: z.string().optional(),
    heroHeadline: z.string().optional(),
    heroSubheadline: z.string().optional(),
    heroBody: z.string().optional(),
    heroAsideP1: z.string().optional(),
    heroAsideP2: z.string().optional(),
    stats: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    process: z.array(z.object({ icon: z.enum(ICONS), title: z.string(), desc: z.string() })).default([]),
    valueProps: z.array(z.object({ icon: z.enum(ICONS), title: z.string(), desc: z.string() })).default([]),
    techStack: z.array(z.object({ title: z.string(), items: z.array(z.string()) })).default([]),
    featureCards: z.array(z.object({ title: z.string(), desc: z.string().optional(), image: z.string(), href: z.string().optional() })).default([]),
    showSectors: z.boolean().default(false),
  }),
});

const comunidades = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/comunidades' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    emoji: z.string().default('🏢'),
    order: z.number().default(0),
    challenges: z.array(z.string()).default([]),
    recommended: z.array(z.string()).default([]),
  }),
});

const zonas = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/zonas' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    region: z.enum(['cdmx', 'edomex']),
    order: z.number().default(0),
    neighborhoods: z.array(z.string()).default([]),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().default('Equipo SEPRICO'),
    tags: z.array(z.string()).default([]),
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
    image: z.string().optional(),
    imageAlt: z.string().optional(),
  }),
});

export const collections = { servicios, comunidades, zonas, blog };
