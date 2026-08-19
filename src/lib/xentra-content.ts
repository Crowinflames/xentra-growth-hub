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
  inversion?: string;
  becas: Beca[];
  badge: string;
  resumen: string;
  incluye: string[];
  inscripcionesDesde?: string;
  grupoInicio?: string;
  preventa?: string;
  cta: string;
  ctaHref: string;
  ctaExternal?: boolean;
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
    badge: "Vacantes limitadas",
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
    grupoInicio: "6 de octubre de 2026",
    cta: "Reserva tu vacante",
    ctaHref: "#cta-final",
  },
  {
    slug: "liderar-con-ia-sin-perder-identidad",
    nombre: "Liderar con IA sin Perder Identidad",
    duracion: "2 sesiones · 8 horas académicas",
    modalidad: "Virtual en vivo",
    becas: [],
    badge: "Nuevo taller",
    resumen:
      "Taller práctico para líderes que quieren integrar la IA en su gestión sin perder el criterio humano, la autoridad personal ni la confianza del equipo.",
    incluye: [
      "2 sesiones virtuales en vivo de 4 horas cada una",
      "8 horas académicas de formación ejecutiva",
      "Casos prácticos de liderazgo con herramientas de IA",
      "Plantillas de prompts aplicables a tu contexto",
      "Certificado digital de Xentra",
    ],
    grupoInicio: "21 de octubre de 2026",
    preventa: "Beneficio de preventa para los primeros interesados",
    cta: "Solicitar información",
    ctaHref:
      "https://wa.me/51941200421?text=Hola,%20quiero%20información%20sobre%20Liderar%20con%20IA%20sin%20Perder%20Identidad",
    ctaExternal: true,
  },
];

export const faqs = [
  {
    q: "¿Cuánto cuestan los programas?",
    a: "El curso \"Primer Liderazgo\" tiene una inversión de S/ 650.\nPróximamente comunicaremos el valor del taller \"Liderar con IA sin perder identidad\"",
  },
  {
    q: "¿En qué se diferencia de un diplomado tradicional?",
    a: "En que aplicas lo aprendido desde el primer día, no al final de varios meses. Cada sesión termina con algo concreto que llevas a tu día a día, y el programa completo dura semanas, no meses.",
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

export const comparativaMetodologia = [
  {
    tradicional: "Enseña contenidos",
    xentra: "Desarrolla capacidades",
    gana: "Mayor transferencia al trabajo",
  },
  {
    tradicional: "Programas por temas",
    xentra: "Programas por desafíos reales",
    gana: "Aprendizaje relevante",
  },
  {
    tradicional: "Programas estáticos",
    xentra: "Experiencias en evolución permanente",
    gana: "Vigencia permanente",
  },
  {
    tradicional: "El docente transmite",
    xentra: "El conocimiento se co-crea",
    gana: "Mayor participación",
  },
  {
    tradicional: "Evalúa conocimientos",
    xentra: "Evalúa aplicación e impacto",
    gana: "Resultados observables",
  },
];
