---
tags: [seo, auditoria, estudio, propuesta, priorizacion, roadmap]
fecha_reporte: 2026-06-18
herramienta: Auditoría de sitio (crawler externo, 70 páginas)
dominio: seguridadprivadacondominios.com
relacionado: [[05-Auditoria-SEO]]
---

# Estudio de Auditoría SEO — Base para propuesta de mejora

Análisis del reporte de auditoría del **18 jun 2026** (70 páginas rastreadas) y plan de acción priorizado por impacto y esfuerzo. Documento ejecutivo: identifica qué arreglar, en qué orden y qué retorno esperar. No incluye el detalle de implementación línea por línea — ese irá en la propuesta técnica derivada.

> **Veredicto en una línea:** el sitio tiene una base SEO sólida; de los 412 hallazgos, **el 87% son informativos y benignos**. Los problemas reales se concentran en **2 causas raíz** que, corregidas, eliminan los 2 errores y 57 de las 62 alertas.

---

## 1. Resumen ejecutivo

El crawler reportó **412 problemas**, una cifra que asusta en frío pero engaña. Al clasificarlos por severidad real:

| Severidad | Cantidad | ¿Qué tan grave? |
|-----------|---------:|-----------------|
| 🔴 Errores | 2 | Reales, pero ambos de bajo esfuerzo |
| 🟠 Alertas | 62 | **57 provienen de una sola causa** (email del footer) |
| ⚪ Info / Notices | 348 | Mayoría benignos o intencionales |
| **Total** | **412** | |

La conclusión clave: **no hay un problema estructural de SEO**. Hay dos defectos puntuales que se replican en muchas páginas (por eso inflan el conteo) y un puñado de ajustes de contenido. El grueso de los 348 "info" son señales que ya gestionamos a propósito (canónicas correctas, backlinks a aliados, interlinking masivo).

**Proyección:** con la Fase 1 del plan (≈1 jornada de trabajo) el reporte pasa de **2 errores + 62 alertas** a **0 errores + 5 alertas**. Con la Fase 2, a **0 + 0** en lo accionable.

---

## 2. Lo que ya está bien (no tocar)

El reporte confirma que los fundamentos están resueltos. Vale documentarlo porque es el 90% de una auditoría y sostiene la propuesta de que el sitio está sano:

- **Indexación y rastreo:** `robots.txt` presente, `sitemap.xml` presente, página 404 correcta, sin errores 5xx, www/no-www unificadas, sin duplicados HTTP/HTTPS, **51 canónicas** bien configuradas.
- **Redirecciones:** sin 302, sin cadenas largas, sin meta-refresh. Limpio.
- **Contenido on-page:** **0** títulos vacíos, **0** títulos duplicados, **0** meta descripciones vacías, **0** duplicadas.
- **Imágenes:** **0** rotas, **0** ALT vacíos.
- **Técnico:** **0** contenido mixto, **0** frames, **0** páginas demasiado grandes, **0** URLs dinámicas o demasiado largas.
- **Internacionalización:** sin conflictos hreflang (sitio mono-idioma es-MX, correcto).

---

## 3. Hallazgos priorizados — matriz impacto / esfuerzo

| # | Hallazgo | Incidencias | Impacto | Esfuerzo | Prioridad |
|---|----------|------------:|---------|----------|-----------|
| H1 | Email ofuscado roto en el footer | 53 alertas + 1 error | Alto | Bajo | **P0** |
| H2 | Títulos duplican "\| SEPRICO \| SEPRICO" y exceden 70 car. | 4 alertas | Alto | Bajo | **P1** |
| H3 | `fonts.googleapis.com` devuelve 404 | 1 error | Medio | Bajo | **P1** |
| H4 | Meta descripciones >160 caracteres | 5 alertas | Medio | Bajo | **P2** |
| H5 | Enlace interno a URL legacy bloqueada (`/servicios/…`) | 1 (notice) | Medio | Bajo | **P2** |
| H6 | Páginas con >100 enlaces salientes | 51 info | Bajo | Medio | **P3** |
| H7 | 244 enlaces dofollow externos | 244 info | Bajo | Bajo | **P3** |
| H8 | 2 páginas restringidas en `robots.txt` | 2 info | Bajo (verificar) | Bajo | **P3** |
| — | Core Web Vitals / rendimiento / móvil | Sin datos | ? | — | **Medir** |

---

## 4. Detalle de hallazgos

### P0 · H1 — Email del footer roto (53 alertas + 1 de los 2 errores)

**Qué pasa.** Los "53 enlaces rotos" del reporte son **el mismo enlace repetido en 53 páginas**: `…/cdn-cgi/l/email-protection`, que responde **404**. Aparece en cada página porque el correo de contacto vive en el footer global. Es, además, uno de los 2 errores 4xx del sitio.

**Causa raíz.** El footer publica el correo como enlace `mailto:` directo. La capa de Cloudflare aplica "Email Address Obfuscation" y reemplaza ese `mailto:` por un enlace a `/cdn-cgi/l/email-protection` que el crawler no puede resolver (no ejecuta el JS de Cloudflare). Para un visitante con JavaScript el correo funciona; para buscadores y crawlers es un enlace roto en **todo el sitio**.

**Por qué importa.** Es la causa del 85% de las alertas del reporte. Un enlace roto repetido en todas las páginas degrada la señal de calidad ante buscadores y ensucia cualquier auditoría futura.

**Acción.** Una sola corrección lo resuelve en las 53 páginas. Dos vías posibles (a decidir en la propuesta técnica):
- Desactivar "Email Obfuscation" en el panel de Cloudflare, **o**
- Sustituir el `mailto:` del footer por un enlace al formulario/página de contacto.

**Retorno:** −53 alertas y −1 error de un solo cambio.

---

### P1 · H2 — Títulos con "| SEPRICO" duplicado y demasiado largos (4 alertas)

**Qué pasa.** Cuatro páginas superan los 70 caracteres en el `<title>` y se cortan en resultados de búsqueda. Pero el síntoma de fondo es más amplio: varios títulos muestran **"| SEPRICO | SEPRICO"** (marca repetida).

Páginas con título largo detectadas: `/bolsa-de-trabajo/` (80), `/nosotros/` (76), `/empresa-de-seguridad-privada-para-condominios/` (73), `/entrenamiento-continuo/` (73).

**Causa raíz.** La plantilla SEO añade automáticamente "| SEPRICO" a cada título. Algunas páginas y campos `seoTitle` **ya incluyen "| SEPRICO"** escrito a mano, así que la marca se duplica y, de paso, empuja el título sobre el límite de 70 caracteres.

**Por qué importa.** El título es el principal gancho de clic en Google. Marca duplicada + corte a media frase = menor CTR aun estando bien posicionado.

**Acción.** Normalizar: que la marca se añada en **un solo lugar** y quitar el "| SEPRICO" manual de los títulos/`seoTitle` que lo traen. Revisar de paso los 4 títulos largos para dejarlos ≤70 car. con la keyword al frente.

**Retorno:** −4 alertas + corrección de marca duplicada en todo el sitio (afecta más de 4 páginas).

---

### P1 · H3 — `fonts.googleapis.com` devuelve 404 (1 error)

**Qué pasa.** Una referencia a `https://fonts.googleapis.com/` (con barra final) responde 404. Es el segundo de los 2 errores del sitio.

**Causa raíz probable.** Un `preconnect`/`link` al origen de Google Fonts mal formado (apunta a la raíz del dominio en vez de a la hoja de fuentes). No rompe la carga de fuentes, pero cuenta como recurso 4xx.

**Acción.** Revisar el `<head>` y corregir o quitar la referencia suelta al origen.

**Retorno:** −1 error → con H1 + H3, el sitio queda en **0 errores**.

---

### P2 · H4 — Meta descripciones demasiado largas (5 alertas)

**Qué pasa.** Cinco descripciones superan 160 caracteres y se truncan en buscadores:

| Página | Longitud |
|--------|---------:|
| `/equipo-de-seguridad/` | 223 |
| `/nosotros/` | 212 |
| `/reclutamiento-para-seguridad-privada/` | 184 |
| `/empresa-de-seguridad-privada-para-condominios/` | 168 |
| `/personal-de-seguridad/` | 165 |

**Acción.** Recortar cada una a ≤160 car. conservando keyword + llamado a la acción al inicio. Edición de contenido pura, sin código.

**Retorno:** −5 alertas → con H1+H2+H4 las alertas accionables quedan en **0**.

---

### P2 · H5 — Enlace interno a URL legacy bloqueada

**Qué pasa.** El crawler halló un enlace interno a `/servicios/control-de-acceso`, ruta bloqueada por `robots.txt` (`Disallow: /servicios/`, legacy de WordPress). La URL canónica vigente es `/control-de-acceso/`.

**Acción.** Localizar y reapuntar el enlace interno a la URL canónica. Evita mandar autoridad interna a una ruta bloqueada.

---

### P3 · H6 — Páginas con >100 enlaces salientes (51 info)

**Qué pasa.** 51 páginas tienen ~140–155 enlaces internos cada una (home: 169). Origen: el mega-menú de navegación + el footer extenso, repetidos globalmente — consecuencia directa de la regla de interlinking obligatorio del proyecto.

**Lectura.** Es un *notice*, no un error. Google ya no penaliza por número de enlaces como antaño; el interlinking ayuda al rastreo. **Recomendación: no actuar todavía.** Si más adelante se busca concentrar autoridad, evaluar reducir enlaces del footer o agrupar el mega-menú — pero es optimización fina, no corrección.

---

### P3 · H7 — 244 enlaces dofollow externos (info)

**Qué pasa.** Salidas dofollow a dominios externos. Parte es **intencional**: backlinks a empresas aliadas (estrategia de partnerships documentada). 

**Acción.** Verificación, no corrección: confirmar que los externos *no estratégicos* (proveedores, referencias) lleven `rel` adecuado y que los de aliados sigan dofollow a propósito.

---

### P3 · H8 — 2 páginas restringidas en robots.txt (info)

**Qué pasa.** `/blog/` y `/servicios/control-de-acceso` figuran como "restringidas para indexación". Ambas por reglas **intencionales** (`Disallow: /blog/$` exacto y `Disallow: /servicios/` para URLs legacy de WordPress).

**Acción.** Verificación: confirmar que el índice real del blog (la ruta vigente, no `/blog/`) **sí** sea indexable y esté en el sitemap. Si el blog se sirve en `/blog/`, la regla lo estaría ocultando — punto a validar en la propuesta.

---

## 5. Lo que el reporte NO pudo medir

El crawler devolvió **"sin datos" (N/D)** en todo el bloque de rendimiento: Core Web Vitals, puntuación de rendimiento, optimización móvil y validación W3C HTML/CSS. No significa que estén mal — significa que esta herramienta no los evaluó.

**Recomendación:** complementar con una medición dedicada (PageSpeed Insights / Lighthouse) sobre 3–4 plantillas representativas (home, L2 servicio, L3 detalle, artículo de blog) antes de cerrar la propuesta. Es el único frente del que hoy no tenemos visibilidad.

---

## 6. Roadmap propuesto

### Fase 1 — Quick wins (≈1 jornada) · elimina 2 errores + 57 alertas
1. **H1** — corregir email del footer (1 cambio, −53 alertas −1 error).
2. **H2** — normalizar marca en títulos + acortar los 4 largos (−4 alertas).
3. **H3** — corregir referencia a Google Fonts (−1 error).

> Resultado esperado: **0 errores, 5 alertas.**

### Fase 2 — Ajustes de contenido (≈medio día) · cierra lo accionable
4. **H4** — recortar 5 meta descripciones a ≤160 (−5 alertas).
5. **H5** — reapuntar enlace interno legacy a URL canónica.

> Resultado esperado: **0 errores, 0 alertas accionables.**

### Fase 3 — Verificación y decisiones (revisión, sin urgencia)
6. **H8** — validar que el blog esté indexable y en sitemap.
7. **H7** — revisar `rel` de externos no estratégicos.
8. **Medición de rendimiento** — Lighthouse/CWV sobre plantillas clave.
9. **H6** — decidir si conviene (o no) reducir enlaces de footer/menú.

---

## 7. Cierre

El reporte de 412 hallazgos **no describe un sitio con problemas de SEO**, sino uno bien construido con dos defectos puntuales que se multiplican por replicarse en el footer y la plantilla de títulos. El trabajo real cabe en **menos de dos jornadas** y el 90% del valor está en la Fase 1. La propuesta de mejora puede presentarse con confianza: base sólida, correcciones acotadas, retorno medible.

> **Siguiente entregable sugerido:** propuesta técnica con el *cómo* de cada fix (archivos, cambios y pruebas) — o, si se prefiere, una versión ejecutiva en `.docx` de este estudio para presentar al cliente/comité.
