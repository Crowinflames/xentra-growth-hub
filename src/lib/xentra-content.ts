// PLACEHOLDER: contenido editable. Reemplazar con datos reales de Xentra.

export type Beca = {
  nombre: string;
  inversion: string;
  nota?: string;
};

export type Programa = {
  slug: string;
  nombre: string;
  duracion: string;
  modalidad: string;
  inversion: string;
  becas: Beca[];
  badge: string;
  resumen: string;
  incluye: string[];
  inscripcionesDesde?: string;
  cohorteInicio?: string;
};

export const programas: Programa[] = [
  {
    slug: "primer-liderazgo-ruta-liderazgo",
    nombre: "Primer Liderazgo",
    duracion: "5 sesiones · 20 horas académicas",
    modalidad: "Virtual en vivo",
    inversion: "S/650",
    becas: [
      { nombre: "Media beca", inversion: "S/325", nota: "50% de beca" },
      { nombre: "Beca 30%", inversion: "S/455", nota: "30% de beca" },
      { nombre: "Beneficio", inversion: "S/520", nota: "20% de beca" },
    ],
    badge: "Inscripciones abren el 24 de agosto",
    resumen:
      "Tu primera ruta de liderazgo para comenzar a conducir equipos con criterio, conversaciones claras y seguimiento aplicado.",
    incluye: [
      "5 sesiones virtuales en vivo de alto impacto",
      "20 horas académicas de formación ejecutiva",
      "Herramientas aplicables a tu equipo desde la primera sesión",
      "Acceso a grabaciones y material de trabajo",
      "Certificado digital de Xentra",
    ],
    inscripcionesDesde: "24 de agosto de 2026",
    cohorteInicio: "6 de octubre de 2026",
  },
];

export const faqs = [
  {
    q: "¿Cuánto cuestan los programas?",
    a: "Los programas de lanzamiento tienen precio fundacional desde S/XXX (placeholder editable). El precio siempre está visible en la sección Programas, sin cotizaciones ocultas.",
  },
  {
    q: "¿Los programas son 100% online?",
    a: "Sí. Las sesiones son online y en vivo, con grabación disponible. Cada cohorte incluye trabajo aplicado sobre tu propio equipo entre sesión y sesión.",
  },
  {
    q: "¿Recibo certificación?",
    a: "Sí. Al completar el programa recibes un certificado digital de Xentra que indica horas, contenidos y el proyecto aplicado que desarrollaste.",
  },
  {
    q: "¿Cuánto tiempo semanal necesito?",
    a: "Entre 3 y 4 horas por semana: sesiones en vivo más la aplicación en tu trabajo. Está diseñado para líderes con agenda ocupada.",
  },
  {
    q: "¿Qué medios de pago aceptan?",
    a: "Tarjeta de crédito y débito, transferencia bancaria y pago en cuotas para empresas. Emitimos factura y boleta.",
  },
  {
    q: "¿En qué se diferencia de un diplomado tradicional?",
    a: "En duración y en foco: semanas en lugar de meses, y desarrollo de capacidades aplicadas en lugar de acumulación de teoría para un examen.",
  },
];