// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

const SITE = 'https://seguridadprivadacondominios.com';

// Patrones de URLs que NO deben indexarse (redirects, thank-you, legales, etc.)
const SITEMAP_EXCLUDE = [
  /\/gracias\/?$/,
  /\/contacto\/?$/,
  /\/404\/?$/,
  /\/blog\/[^/]+\/?$/, // posts redirigen a /{category}/{slug}/
  /\/servicios\/?$/, // hub legacy (redirect a /servicios-de-seguridad-privada/)
  /\/servicios\/[^/]+\/?$/, // legacy redirect a /{slug}/
  /\/producto\//,
  /\/uncategorized\//,
];

// https://astro.build/config
export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => !SITEMAP_EXCLUDE.some((rx) => rx.test(page)),
      serialize(item) {
        const url = item.url;
        // Homepage: prioridad máxima + cambio diario
        if (url === `${SITE}/`) {
          return { ...item, priority: 1.0, changefreq: 'daily' };
        }
        // Pilares L1 + hub servicios + contacto/nosotros: prioridad alta
        if (
          /\/(servicios-de-seguridad-privada|personal-de-seguridad-residencial|tecnologia-y-monitoreo|protocolos-y-consultoria|atencion-al-comite-condominios|empresa-de-seguridad-privada-para-condominios|reclutamiento-para-seguridad-privada|nosotros|equipo-de-seguridad)\/$/.test(url)
        ) {
          return { ...item, priority: 0.9, changefreq: 'weekly' };
        }
        // Servicios L2 (slugs raíz preservados) y comunidades/zonas hubs
        if (
          /\/(control-de-acceso|vigilancia-y-patrullaje|monitoreo-electronico|consultoria-en-seguridad|sistemas-de-camaras-de-vigilancia|control-biometrico-de-acceso|alarmas-de-seguridad|intercomunicacion-avanzada|sistemas-de-iluminacion-segura|personal-de-seguridad|entrenamiento-continuo|investigacion-de-antecedentes|bolsa-de-trabajo|comunidades|zonas)\/$/.test(url)
        ) {
          return { ...item, priority: 0.8, changefreq: 'weekly' };
        }
        // Comunidades y zonas detalle
        if (/\/(comunidades|zonas)\/[^/]+\/$/.test(url)) {
          return { ...item, priority: 0.7, changefreq: 'monthly' };
        }
        // Blog index + categorías
        if (/\/blog\/?$/.test(url) || /\/category\/[^/]+\/?$/.test(url)) {
          return { ...item, priority: 0.7, changefreq: 'weekly' };
        }
        // Paginación blog
        if (/\/blog\/page\/\d+\/?$/.test(url)) {
          return { ...item, priority: 0.4, changefreq: 'weekly' };
        }
        // Artículos de blog (categorías reales)
        if (
          /\/(seguridad-privada|personal-de-seguridad|tecnologia-y-monitoreo|protocolos-y-consultoria|atencion-al-comite|vigilancia)\/[^/]+\/$/.test(url)
        ) {
          return { ...item, priority: 0.6, changefreq: 'monthly' };
        }
        // Aviso legal y resto
        return { ...item, priority: 0.3, changefreq: 'yearly' };
      },
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
    format: 'directory',
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
