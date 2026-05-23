---
tags: [progreso, L1, L2, roadmap]
created: 2026-05-20
---

# L1 cerrado · Plan L2

## L1 — Home `/` ✅ CERRADO

### Estructura final aprobada
1. **Header** blanco con logo SEPRICO +30% (h-16), nav, teléfono inline + Cotiza Gratis (no sticky)
2. **UtilityBar** dark superior con tel/horario/rating/WhatsApp chat
3. **Hero** fondo negro sólido — H1 gigante "Condominios" + copy SEO 2 párrafos derecha
4. **QuickNav** primaria — barra roja 6 chips servicios destacados
5. **ServicePillars** — 4 pilares operativos con imágenes (Personal · Tecnología · Protocolos · Atención al Comité)
6. **ValueProps** — 4 diferenciadores con imágenes + URLs reales
7. **Testimonials** — 6 cards: **6 aliados con backlinks dofollow**
8. **Communities** — 4 tipos de comunidad con imágenes
9. **FAQ** — 8 preguntas en accordion + sidebar CTA
10. **QuickNavBottom** secundaria — barra roja con chips distintos (no duplicada)
11. **Footer** multi-columna con marca, servicios, zonas

### Documentación generada
- [[../03-SEO/05-Auditoria-SEO|Auditoría SEO completa]]
- [[../02-Diseno/01-Sistema-Visual|Sistema visual]]
- [[../02-Diseno/03-Mobile-Responsive|Estrategia móvil]]
- [[../04-Contenido/03-Aliados-Partnerships|Red de aliados]]

---

## L2 — Hubs (8 páginas) · plan de iteración

Las 8 hubs están en **estructura base completa**. Cuando el usuario quiera iterar una, abrir la sección correspondiente.

### 🔹 `/nosotros/`
**Estado actual:** 4 sections (¿Quiénes Somos? · Historia · Misión y visión · Valores)
**Próximas mejoras potenciales:**
- Sección "Equipo directivo" con fotos
- Sección "Certificaciones" con logos institucionales (SSPC, ISO)
- Línea de tiempo visual de los 25 años
- Stats numéricos visuales (+120, 25+, etc.)
- CTA cerrar con auditoría gratuita

### 🔹 `/servicios-de-seguridad-privada/`
**Estado actual:** Hub completo con 3 categorías (Personal · Tecnología · Protocolos) y 9 servicios en grid
**Próximas mejoras potenciales:**
- Comparativa visual entre categorías
- FAQ específico de cada categoría
- Calculadora "qué necesita mi condominio"
- Casos de éxito asociados a cada servicio

### 🔹 `/reclutamiento-para-seguridad-privada/`
**Estado actual:** Hub con 4 cards RRHH
**Próximas mejoras potenciales:**
- Diagrama del proceso de selección (5 etapas)
- Formulario de aplicación inline
- Testimonios de empleados actuales
- Beneficios laborales destacados
- Link explícito a `/bolsa-de-trabajo/`

### 🔹 `/equipo-de-seguridad/`
**Estado actual:** Placeholder con 6 cards de catálogo
**Decisión pendiente:**
- ¿Migrar productos WooCommerce reales? (Si sí: integrar Snipcart / mantener WP headless)
- ¿O convertir en catálogo informativo? (Recomendado: más simple)

### 🔹 `/empresa-de-seguridad-privada-para-condominios/` (Contacto)
**Estado actual:** El más completo (190 líneas) — info + form + sección compromiso
**Próximas mejoras potenciales:**
- Mapa interactivo de ubicación
- Horarios desglosados por servicio
- Múltiples canales de contacto (Telegram, Messenger)
- FAQ de pre-contratación inline

### 🔹 `/blog/`
**Estado actual:** Grid de 8 posts con paginación + sidebar (sin search)
**Próximas mejoras potenciales:**
- Tag cloud para filtrar por temas
- Buscador con Pagefind (search estático)
- Posts destacados arriba
- Suscripción a newsletter

### 🔹 `/comunidades/`
**Estado actual:** Hub con 4 tipos de comunidad
**Próximas mejoras potenciales:**
- Tabla comparativa entre tipos (servicios incluidos, precio aproximado)
- Casos de éxito por tipo
- Quiz "qué tipo de comunidad soy"

### 🔹 `/zonas/`
**Estado actual:** Listado de 14 zonas (8 CDMX + 6 Edomex)
**Próximas mejoras potenciales:**
- Mapa interactivo (Leaflet/MapBox)
- Búsqueda por código postal
- Tiempos de respuesta por zona

---

## L3 — Contenido individual (Markdown)

### Estado actual
| Collection | Total | Necesidad |
|---|---|---|
| `servicios` | 13 MDX | ✅ contenido escrito profesional |
| `comunidades` | 4 MDX | ✅ contenido escrito |
| `zonas` | 14 MDX | ⚠️ stubs cortos, expandir cada zona con info local específica |
| `blog` | 48 MDX | ✅ 12 aliados + posts evergreen |

### Plan para zonas
Cada zona MDX debería tener:
- Lista de **colonias específicas** atendidas (ya está)
- Características demográficas locales
- Tipos de condominio típicos en la zona
- Casos de éxito (sin nombres reales)
- Tiempo de respuesta promedio
- Distancia al centro de monitoreo SEPRICO

---

## L4 — Productos WooCommerce
⏳ **Placeholder activo**. Decisión final con el cliente: catálogo real vs informativo.

---

## Workflow recomendado para iterar L2/L3

1. Abrir la nota de la sección correspondiente
2. Definir qué bloque agregar/mejorar
3. Implementar como componente Astro o expandir MDX
4. Actualizar [[../03-SEO/05-Auditoria-SEO|auditoría SEO]] si afecta SEO
5. Marcar en `docs/01-Proyecto/04-Roadmap.md`

Ver [[03-Decisiones-Estrategicas]] y [[04-Roadmap]].
