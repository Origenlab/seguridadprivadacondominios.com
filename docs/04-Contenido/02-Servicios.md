---
tags: [servicios, catalogo]
---

# Catálogo de servicios (13 entradas MDX)

Servicios en `src/content/servicios/*.mdx`. Schema en `src/content/config.ts`.

## Schema MDX
```yaml
title: string
description: string
image: string?
icon: 'shield' | 'cctv' | 'patrol' | 'access' | 'alert' | 'check' | 'phone' | ...
category: 'personal' | 'tecnologia' | 'protocolos'
kind: 'servicio' | 'rrhh'
order: number
features: string[]
featured: boolean
```

## Servicios (`kind: servicio`, 9 entradas)

| Slug | Categoría | Icono |
|---|---|---|
| control-de-acceso | tecnologia | access |
| vigilancia-y-patrullaje | protocolos | patrol |
| monitoreo-electronico | tecnologia | cctv |
| consultoria-en-seguridad | protocolos | check |
| sistemas-de-camaras-de-vigilancia | tecnologia | cctv |
| control-biometrico-de-acceso | tecnologia | access |
| alarmas-de-seguridad | tecnologia | alert |
| intercomunicacion-avanzada | tecnologia | phone |
| sistemas-de-iluminacion-segura | tecnologia | shield |

## RRHH (`kind: rrhh`, 4 entradas)

| Slug | Categoría | Icono |
|---|---|---|
| personal-de-seguridad | personal | shield |
| entrenamiento-continuo | personal | check |
| investigacion-de-antecedentes | personal | check |
| bolsa-de-trabajo | personal | patrol |

## Agrupación visual en `/servicios-de-seguridad-privada/`

Las 9 services aparecen agrupadas en 3 macro-categorías con anchors:
- `#personal` — Personal de Seguridad y Vigilancia
- `#tecnologia` — Tecnología y Monitoreo Electrónico
- `#protocolos` — Consultoría y Protocolos Operativos

Ver [[../02-Diseno/02-Componentes]] (ServicesGrid).
