// PLACEHOLDER: contenido editable. Reemplazar con datos reales de Xentra.

export type Programa = {
  slug: string;
  nombre: string;
  duracion: string;
  modalidad: string;
  precio: string;
  badge: string;
  resumen: string;
  incluye: string[];
};

export const programas: Programa[] = [
  {
    slug: "liderazgo-de-equipos-en-accion",
    nombre: "Liderazgo de Equipos en Acción",
    duracion: "6 semanas",
    modalidad: "Online en vivo · 2 sesiones/semana",
    precio: "S/XXX",
    badge: "Precio fundacional",
    resumen:
      "Conduce a tu equipo con criterios claros de delegación, feedback y seguimiento semanal.",
    incluye: [
      "Rituales de equipo: 1:1, weekly y cierre de mes",
      "Guion de conversaciones difíciles y feedback",
      "Matriz de delegación aplicada a tu propio equipo",
      "Plan de 30 días con seguimiento del mentor",
    ],
  },
  {
    slug: "gestion-del-cambio-para-mandos-medios",
    nombre: "Gestión del Cambio para Mandos Medios",
    duracion: "5 semanas",
    modalidad: "Online en vivo · 1 sesión/semana + taller",
    precio: "S/XXX",
    badge: "Cupos limitados",
    resumen:
      "Implementa cambios sin perder al equipo en el camino: resistencia, comunicación y adopción.",
    incluye: [
      "Mapa de actores y resistencias de tu iniciativa",
      "Plan de comunicación del cambio en 1 página",
      "Métricas de adopción y puntos de control",
      "Revisión en vivo de tu caso real",
    ],
  },
  {
    slug: "comunicacion-ejecutiva-de-alto-impacto",
    nombre: "Comunicación Ejecutiva de Alto Impacto",
    duracion: "4 semanas",
    modalidad: "Online en vivo · sesiones de práctica grabada",
    precio: "S/XXX",
    badge: "Precio fundacional",
    resumen:
      "Presenta ante dirección con estructura, datos y una recomendación clara en menos de 10 minutos.",
    incluye: [
      "Estructura de recomendación ejecutiva",
      "Práctica grabada con retroalimentación individual",
      "Plantillas de comité y reporte mensual",
      "Manejo de preguntas difíciles",
    ],
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