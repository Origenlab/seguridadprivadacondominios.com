# Jerarquía SEO — Seguridad Privada para Condominios

**Keyword principal:** `seguridad privada para condominios`
**Variantes a usar como semánticos:** seguridad residencial, vigilancia para condominios, protección de condominios, seguridad para fraccionamientos, seguridad para residenciales, vigilancia 24/7, control de acceso para condominios.

**Reglas generales (anti-stuffing):**

- **1 solo H1 por página** que contenga la keyword principal o una variante exacta.
- **Keyword exacta máximo 2 veces** en headings de una misma página; el resto deben ser variantes/sinónimos.
- **Densidad en cuerpo:** entre 1% y 2% (1–2 menciones por cada 100 palabras). Lo demás con variantes.
- **No repetir** la misma frase como H2 dos veces.
- **Cada H2 debe abrir una sección con párrafo introductorio** antes de las cards/listas.
- **H3** solo para sub-secciones reales (no decoración).
- Usar `<strong>` con palabras clave 1–2 veces por sección, NUNCA en todas las repeticiones.

---

## Plantilla por tipo de página

### 1. Home (`/`)

| Nivel | Texto sugerido |
|---|---|
| H1 | Seguridad Privada para Condominios en CDMX y Estado de México |
| H2 | Servicios más contratados por condominios |
| H2 | Catálogo completo de seguridad para condominios |
| H2 | ¿Por qué elegir SEPRICO? |
| H2 | Testimonios de comités administrativos |
| H2 | Comunidades que protegemos |
| H2 | Preguntas frecuentes sobre seguridad privada |
| H3 | (cada FAQ pregunta) |

### 2. Hub Servicios (`/servicios-de-seguridad-privada/`)

| Nivel | Texto |
|---|---|
| H1 | Servicios de Seguridad Privada para Condominios |
| H2 | Vigilancia y monitoreo 24/7 |
| H3 | (cada card de servicio en su título) |

### 3. Servicio individual (ej. `/control-de-acceso/`)

| Nivel | Texto |
|---|---|
| H1 | Control de Acceso para Condominios |
| H2 | ¿Qué incluye nuestro servicio? |
| H2 | Beneficios para tu condominio |
| H3 | (puntos de la lista si aplica) |

Aplicar el mismo patrón a los 9 servicios: el nombre del servicio + "para Condominios" en el H1.

### 4. Hub Recursos Humanos (`/reclutamiento-para-seguridad-privada/`)

| Nivel | Texto |
|---|---|
| H1 | Recursos Humanos en Seguridad Privada para Condominios |
| H2 | Selección y capacitación del personal |
| H3 | (cada función: Personal, Entrenamiento, etc.) |

### 5. Nosotros (`/nosotros/`)

| Nivel | Texto |
|---|---|
| H1 | Empresa de Seguridad Privada para Condominios |
| H2 | Nuestra historia |
| H2 | Misión y visión |
| H2 | Valores que nos definen |
| H3 | Confianza · Compromiso · Integridad · Cercanía |

### 6. Contacto (`/empresa-de-seguridad-privada-para-condominios/`)

| Nivel | Texto |
|---|---|
| H1 | Contacto · Empresa de Seguridad Privada para Condominios |
| H2 | Solicita tu cotización |
| H2 | Nuestro compromiso con tu comunidad |

### 7. Catálogo (`/equipo-de-seguridad/`)

| Nivel | Texto |
|---|---|
| H1 | Equipo de Seguridad para Condominios |
| H2 | Tecnología instalada por SEPRICO |
| H3 | (cada producto destacado) |

### 8. Blog (`/blog/`)

| Nivel | Texto |
|---|---|
| H1 | Blog de Seguridad Privada para Condominios |
| H2 | Recursos para comités y administradores |
| H3 | (cada post título) |

### 9. Post individual (`/seguridad-privada/[slug]/`)

| Nivel | Texto |
|---|---|
| H1 | Título del post (sin forzar keyword) |
| H2 | Secciones internas |
| H3 | Sub-secciones |

### 10. Comunidades (`/comunidades/[slug]/`)

| Nivel | Texto |
|---|---|
| H1 | Seguridad Privada para [Torres / Fraccionamientos / Residenciales Premium / Cotos] |
| H2 | Retos típicos en este formato |
| H2 | Servicios recomendados |

### 11. Zonas (`/zonas/[slug]/`)

| Nivel | Texto |
|---|---|
| H1 | Seguridad Privada para Condominios en [Alcaldía/Municipio] |
| H2 | Colonias y zonas que atendemos |
| H2 | Cobertura local |

---

## Distribución de keyword en cuerpo (densidad sana)

**Home (≈ 600 palabras útiles):** 6–10 menciones de la keyword exacta + variantes intercaladas:
- "seguridad privada para condominios" (3 veces)
- "seguridad residencial" (2 veces)
- "vigilancia 24/7" (2 veces)
- "control de accesos" (2 veces)
- "fraccionamientos y residenciales" (2 veces)

**Servicios individuales (≈ 200 palabras):** 2–4 menciones:
- 1 vez "seguridad privada para condominios" (en H1 y primer párrafo)
- 1–2 veces variantes contextuales

**Zonas (≈ 150 palabras):** 1–2 menciones de la keyword + nombre de la alcaldía/municipio.

---

## Schema.org / JSON-LD a respetar

```json
{
  "@context": "https://schema.org",
  "@type": "SecurityService",
  "name": "SEPRICO",
  "areaServed": ["Ciudad de México", "Estado de México"],
  "serviceType": "Seguridad privada para condominios"
}
```
Ya implementado en `BaseLayout.astro`.

---

## Checklist por página antes de publicar

- [ ] H1 único con keyword o variante exacta
- [ ] H2 con variantes/sinónimos
- [ ] Primer párrafo menciona la keyword 1 vez
- [ ] Cada sección tiene párrafo introductorio antes de listas/cards
- [ ] Title HTML ≤ 60 chars, contiene keyword
- [ ] Meta description ≤ 160 chars, atractiva, con keyword 1 vez
- [ ] Alt en imágenes con contexto (no spamear keyword)
- [ ] Links internos a páginas relacionadas con anchor descriptivo
