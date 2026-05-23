export const SITE = {
  name: 'SEPRICO',
  legalName: 'Origins Private Security',
  shortName: 'SEPRICO',
  domain: 'seguridadprivadacondominios.com',
  url: 'https://seguridadprivadacondominios.com',
  tagline: 'Soluciones integrales que garantizan tranquilidad',
  description:
    'SEPRICO — Empresa de seguridad privada para condominios y residenciales en CDMX y Estado de México. Vigilancia 24/7, control de acceso, monitoreo y protocolos de emergencia.',
  defaultLocale: 'es-MX',
  founded: 2000,
  rating: { value: 4.9, reviews: 184 },
  stats: {
    eventos: '+120',
    eventosLabel: 'Comunidades atendidas',
    anios: '25+',
    aniosLabel: 'Años de experiencia',
    cobertura: '24/7',
    coberturaLabel: 'Operación continua',
    respuesta: '<10 min',
    respuestaLabel: 'Respuesta WhatsApp',
  },
  contact: {
    phone: '+52 55 3628 2480',
    phoneDisplay: '55 3628 2480',
    whatsapp: '525536282480',
    whatsappMessage: 'Requiero información por favor',
    email: 'contacto@seguridadprivadacondominios.com',
    address: 'CDMX y Estado de México',
    hours: 'Atención 24/7 los 365 días',
    fiscalAddress: 'Ciudad de México, CDMX',
  },
  social: {
    facebook: 'https://facebook.com/',
    instagram: 'https://instagram.com/',
    linkedin: 'https://linkedin.com/',
  },
  coverage: ['Ciudad de México', 'Estado de México', 'Zona Metropolitana del Valle de México'],
  certifications: [
    'Permiso SSPC vigente',
    'ISO 9001:2015',
    'Personal con capacitación SETEC',
    'Empresa registrada desde el año 2000',
  ],
  brands: ['Hikvision', 'Dahua', 'ZKTeco', 'Motorola', 'Bosch', 'Honeywell'],
  values: [
    { name: 'Confianza', desc: 'Construimos relaciones sólidas y transparentes, siendo el pilar en el que cada residente puede apoyarse.' },
    { name: 'Compromiso', desc: 'Vamos más allá del deber; el bienestar y la tranquilidad de tu comunidad son nuestra prioridad.' },
    { name: 'Integridad', desc: 'Actuamos siempre con honestidad y ética, porque tu seguridad no admite nada menos que eso.' },
    { name: 'Cercanía', desc: 'Somos un equipo accesible y amable, siempre listos para escuchar y responder a tus necesidades.' },
  ],
} as const;

/**
 * SERVICIOS — slugs EXACTOS a producción (URLs raíz, no /servicios/[slug])
 */
export const SERVICIOS = [
  { slug: 'control-de-acceso', title: 'Control de Acceso', icon: 'access' },
  { slug: 'vigilancia-y-patrullaje', title: 'Vigilancia y Patrullaje', icon: 'patrol' },
  { slug: 'monitoreo-electronico', title: 'Monitoreo Electrónico', icon: 'cctv' },
  { slug: 'consultoria-en-seguridad', title: 'Consultoría en Seguridad', icon: 'check' },
  { slug: 'sistemas-de-camaras-de-vigilancia', title: 'Cámaras de Vigilancia', icon: 'cctv' },
  { slug: 'control-biometrico-de-acceso', title: 'Control Biométrico', icon: 'access' },
  { slug: 'alarmas-de-seguridad', title: 'Alarmas de Seguridad', icon: 'alert' },
  { slug: 'intercomunicacion-avanzada', title: 'Intercomunicación', icon: 'phone' },
  { slug: 'sistemas-de-iluminacion-segura', title: 'Iluminación Segura', icon: 'shield' },
] as const;

/**
 * RECURSOS HUMANOS — slugs EXACTOS a producción
 */
export const RRHH = [
  { slug: 'personal-de-seguridad', title: 'Personal de Seguridad', icon: 'shield' },
  { slug: 'entrenamiento-continuo', title: 'Entrenamiento Continuo', icon: 'check' },
  { slug: 'investigacion-de-antecedentes', title: 'Investigación de Antecedentes', icon: 'check' },
  { slug: 'bolsa-de-trabajo', title: 'Bolsa de Trabajo', icon: 'patrol' },
] as const;

/**
 * Navegación con URLs IDÉNTICAS a producción (preservando SEO)
 * Estructura mega-menu profesional: 4 pilares con L2s reales del index.
 */
export const NAV_LINKS = [
  { label: 'Nosotros', href: '/nosotros/' },
  {
    label: 'Servicios',
    href: '/servicios-de-seguridad-privada/',
    mega: true,
    columns: [
      {
        pilar: '01',
        title: 'Personal de Seguridad',
        href: '/personal-de-seguridad-residencial/',
        icon: 'shield' as const,
        desc: 'Guardias SETEC, supervisión rotativa y selección rigurosa.',
        items: [
          { label: 'Personal de Seguridad', href: '/personal-de-seguridad/', icon: 'shield' as const },
          { label: 'Vigilancia y Patrullaje', href: '/vigilancia-y-patrullaje/', icon: 'patrol' as const },
          { label: 'Entrenamiento Continuo', href: '/entrenamiento-continuo/', icon: 'check' as const },
          { label: 'Investigación de Antecedentes', href: '/investigacion-de-antecedentes/', icon: 'check' as const },
          { label: 'Bolsa de Trabajo', href: '/bolsa-de-trabajo/', icon: 'patrol' as const },
        ],
      },
      {
        pilar: '02',
        title: 'Tecnología y Monitoreo',
        href: '/tecnologia-y-monitoreo/',
        icon: 'cctv' as const,
        desc: 'CCTV, biometría, alarmas y centro 24/7 integrados.',
        items: [
          { label: 'Monitoreo Electrónico', href: '/monitoreo-electronico/', icon: 'cctv' as const },
          { label: 'Control de Acceso', href: '/control-de-acceso/', icon: 'access' as const },
          { label: 'Cámaras de Vigilancia', href: '/sistemas-de-camaras-de-vigilancia/', icon: 'cctv' as const },
          { label: 'Control Biométrico', href: '/control-biometrico-de-acceso/', icon: 'access' as const },
          { label: 'Alarmas de Seguridad', href: '/alarmas-de-seguridad/', icon: 'alert' as const },
          { label: 'Intercomunicación IP', href: '/intercomunicacion-avanzada/', icon: 'phone' as const },
          { label: 'Iluminación Segura', href: '/sistemas-de-iluminacion-segura/', icon: 'shield' as const },
        ],
      },
      {
        pilar: '03',
        title: 'Protocolos y Consultoría',
        href: '/servicios-de-seguridad-privada/#protocolos',
        icon: 'check' as const,
        desc: 'Análisis de riesgos, planes y auditorías documentadas.',
        items: [
          { label: 'Consultoría en Seguridad', href: '/consultoria-en-seguridad/', icon: 'check' as const },
          { label: 'Análisis de Riesgos', href: '/servicios-de-seguridad-privada/#protocolos', icon: 'check' as const },
          { label: 'Planes de Contingencia', href: '/servicios-de-seguridad-privada/#protocolos', icon: 'check' as const },
          { label: 'Auditorías Documentadas', href: '/servicios-de-seguridad-privada/#protocolos', icon: 'check' as const },
        ],
      },
      {
        pilar: '04',
        title: 'Atención al Comité',
        href: '/servicios-de-seguridad-privada/#comite',
        icon: 'star' as const,
        desc: 'Ejecutivo dedicado, KPIs trimestrales y bitácora digital.',
        items: [
          { label: 'Ejecutivo de Cuenta Dedicado', href: '/empresa-de-seguridad-privada-para-condominios/', icon: 'phone' as const },
          { label: 'Reportes Mensuales al Comité', href: '/empresa-de-seguridad-privada-para-condominios/', icon: 'check' as const },
          { label: 'Bitácora Digital en Tiempo Real', href: '/empresa-de-seguridad-privada-para-condominios/', icon: 'check' as const },
          { label: 'Revisión Trimestral con KPIs', href: '/empresa-de-seguridad-privada-para-condominios/', icon: 'clock' as const },
        ],
      },
    ],
  },
  {
    label: 'Recursos Humanos',
    href: '/reclutamiento-para-seguridad-privada/',
    children: [
      ...RRHH.map((r) => ({ label: r.title, href: `/${r.slug}/`, desc: '' })),
    ],
  },
  { label: 'Catálogo', href: '/equipo-de-seguridad/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contacto', href: '/empresa-de-seguridad-privada-para-condominios/' },
] as const;

export const ZONAS_CDMX = [
  { name: 'Miguel Hidalgo', slug: 'miguel-hidalgo' },
  { name: 'Benito Juárez', slug: 'benito-juarez' },
  { name: 'Cuauhtémoc', slug: 'cuauhtemoc' },
  { name: 'Coyoacán', slug: 'coyoacan' },
  { name: 'Tlalpan', slug: 'tlalpan' },
  { name: 'Álvaro Obregón', slug: 'alvaro-obregon' },
  { name: 'Cuajimalpa', slug: 'cuajimalpa' },
  { name: 'Magdalena Contreras', slug: 'magdalena-contreras' },
] as const;

export const ZONAS_EDOMEX = [
  { name: 'Naucalpan', slug: 'naucalpan' },
  { name: 'Huixquilucan', slug: 'huixquilucan' },
  { name: 'Atizapán', slug: 'atizapan' },
  { name: 'Tlalnepantla', slug: 'tlalnepantla' },
  { name: 'Cuautitlán Izcalli', slug: 'cuautitlan-izcalli' },
  { name: 'Metepec', slug: 'metepec' },
] as const;

/**
 * Catálogo combinado de URLs L2 — usado por helpers de internal linking.
 * No modificar slugs (preserva SEO en producción).
 */
export const ALL_SERVICES = [
  ...SERVICIOS.map((s) => ({ ...s, kind: 'servicio' as const })),
  ...RRHH.map((s) => ({ ...s, kind: 'rrhh' as const })),
] as const;

/**
 * Devuelve N slugs relacionados al servicio dado, excluyéndolo a sí mismo.
 * Si el MDX declara `related: []`, esos prevalecen. Si no, se autorrellena
 * con servicios del mismo kind y luego completa cíclico.
 */
export function getRelatedServiceSlugs(currentSlug: string, declared: readonly string[] = [], n = 4): string[] {
  if (declared && declared.length > 0) {
    return declared.filter((s) => s !== currentSlug).slice(0, n);
  }
  const current = ALL_SERVICES.find((s) => s.slug === currentSlug);
  const pool = ALL_SERVICES.filter((s) => s.slug !== currentSlug);
  const sameKind = pool.filter((s) => s.kind === current?.kind);
  const otherKind = pool.filter((s) => s.kind !== current?.kind);
  const ordered = [...sameKind, ...otherKind];
  return ordered.slice(0, n).map((s) => s.slug);
}

/**
 * Resuelve metadata enriquecida (title, href, icon) para una lista de slugs.
 */
export function resolveServiceMeta(slugs: string[]) {
  return slugs
    .map((slug) => ALL_SERVICES.find((s) => s.slug === slug))
    .filter(Boolean)
    .map((s) => ({
      slug: s!.slug,
      title: s!.title,
      icon: s!.icon,
      kind: s!.kind,
      href: `/${s!.slug}/`,
    }));
}

export const FAQS = [
  {
    q: '¿Qué incluye el servicio de seguridad para mi condominio?',
    a: 'Personal uniformado y capacitado, supervisión rotativa, bitácora digital, reportes mensuales al comité, radio de comunicación y cobertura las 24 horas. Cada propuesta se ajusta al tamaño y necesidades de la comunidad.',
  },
  {
    q: '¿Cuánto cuesta contratar seguridad privada para un condominio?',
    a: 'El precio depende del número de elementos, turnos, antigüedad solicitada y servicios adicionales (CCTV, control de acceso). Tras la auditoría gratuita te entregamos una propuesta económica desglosada en menos de 48 horas.',
  },
  {
    q: '¿Con cuánta anticipación deben contratarme?',
    a: 'Para activación estándar bastan de 7 a 10 días hábiles. En emergencias podemos arrancar en 48 a 72 horas con elementos de respaldo, mientras concluimos el proceso de selección definitivo.',
  },
  {
    q: '¿El personal está capacitado y registrado?',
    a: 'Sí. Cada elemento cuenta con identificación oficial, exámenes psicométricos, capacitación SETEC y registro en la empresa con permiso SSPC vigente. Entregamos copia de credenciales y plantilla al comité.',
  },
  {
    q: '¿Pueden integrarse con la administración y el sistema actual?',
    a: 'Trabajamos con la administración del condominio para respetar reglamentos internos, formatos de bitácora y procesos existentes. Si tienen CCTV o acceso instalado, lo integramos a nuestra operación.',
  },
  {
    q: '¿Atienden Estado de México?',
    a: 'Sí. Cubrimos la Zona Metropolitana del Valle de México: alcaldías de CDMX y municipios principales del Edomex como Naucalpan, Huixquilucan, Atizapán, Tlalnepantla, Metepec y más.',
  },
  {
    q: '¿Qué pasa ante una emergencia o incidente?',
    a: 'Activamos un protocolo documentado: aviso a residentes afectados, coordinación con autoridades, supervisor en sitio dentro de 30 minutos y reporte formal al administrador. Cada caso queda registrado.',
  },
  {
    q: '¿Puedo solicitar una auditoría sin compromiso?',
    a: 'Por supuesto. Visitamos tu condominio, evaluamos los riesgos y entregamos un informe con hallazgos y propuesta económica sin costo ni compromiso.',
  },
] as const;
