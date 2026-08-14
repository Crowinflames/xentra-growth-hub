import blogLiderazgo from "@/assets/blog-liderazgo.jpg";
import blogFeedback from "@/assets/blog-feedback.jpg";
import blogComunicacion from "@/assets/blog-comunicacion.jpg";

export type Post = {
  slug: string;
  titulo: string;
  bajada: string;
  categoria: string;
  pilar: boolean;
  fecha: string;
  actualizado: string;
  lectura: string;
  imagen: string;
  alt: string;
  autor: { nombre: string; cargo: string; iniciales: string };
  programaRelacionado: string;
  secciones: { h2: string; parrafos: string[]; bullets?: string[] }[];
  faqs: { q: string; a: string }[];
};

// PLACEHOLDER: autores y contenido editorial pendientes de revisión por Xentra.
const autorRuiz = { nombre: "Nombre Apellido", cargo: "Director académico, Xentra", iniciales: "NA" };
const autoraLopez = { nombre: "Nombre Apellido", cargo: "Mentora de liderazgo, Xentra", iniciales: "NA" };

export const categorias = [
  "Liderazgo de Equipos",
  "Gestión del Cambio",
  "Habilidades Directivas",
  "Comunicación Ejecutiva",
  "Casos y Tendencias",
];

export const posts: Post[] = [
  {
    slug: "como-liderar-un-equipo-de-alto-rendimiento",
    titulo: "¿Cómo liderar un equipo de alto rendimiento? Guía completa",
    bajada:
      "Un equipo de alto rendimiento se construye con tres cosas concretas: objetivos medibles y compartidos, rituales de seguimiento constantes (1:1 y weekly) y conversaciones de feedback frecuentes. No depende del carisma del líder, sino del sistema de trabajo que instala.",
    categoria: "Liderazgo de Equipos",
    pilar: true,
    fecha: "2026-07-14",
    actualizado: "2026-08-10",
    lectura: "11 min",
    imagen: blogLiderazgo,
    alt: "Equipo de trabajo en sesión de planificación alrededor de una mesa con laptops y notas adhesivas",
    autor: autorRuiz,
    programaRelacionado: "Liderazgo de Equipos en Acción",
    secciones: [
      {
        h2: "¿Qué define a un equipo de alto rendimiento?",
        parrafos: [
          "No es el talento individual: es la claridad. Un equipo de alto rendimiento sabe qué se espera de él, cómo se mide y cuándo se revisa. Cuando esas tres respuestas no existen, el esfuerzo se dispersa aunque las personas sean excelentes.",
          "En la práctica, el líder que obtiene resultados sostenidos no trabaja más horas: instala un sistema de acuerdos y seguimiento que funciona incluso cuando él no está en la sala.",
        ],
        bullets: [
          "Objetivos escritos, con métrica y fecha",
          "Roles y decisiones asignados a personas, no a áreas",
          "Un ritmo fijo de revisión semanal",
          "Feedback frecuente y de bajo drama",
        ],
      },
      {
        h2: "¿Qué rituales necesita instalar el líder?",
        parrafos: [
          "Tres rituales bastan para la mayoría de equipos: la 1:1 quincenal con cada persona, la reunión semanal de equipo enfocada en obstáculos, y el cierre mensual de resultados. Todo lo demás suele ser reunión sobrante.",
          "La clave está en la disciplina del calendario: un ritual que se cancela dos veces deja de ser un ritual y vuelve a la gestión por urgencias.",
        ],
      },
      {
        h2: "¿Cómo se mide el avance sin caer en microgestión?",
        parrafos: [
          "Mide resultados y puntos de control acordados, no actividad diaria. Si necesitas saber a qué hora se conectó alguien, el problema no es la herramienta de control: es que el resultado esperado nunca se definió con precisión.",
        ],
        bullets: [
          "Define 2-3 indicadores por persona, no diez",
          "Acuerda hitos intermedios en entregables largos",
          "Revisa desviaciones en la 1:1, no en público",
        ],
      },
      {
        h2: "¿Qué hacer cuando el rendimiento cae?",
        parrafos: [
          "Separa siempre tres causas posibles: falta de claridad, falta de capacidad o falta de motivación. Cada una se resuelve distinto, y tratarlas todas como problema de actitud es el error más caro que comete un mando medio.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cuánto tarda en verse el cambio en un equipo?",
        a: "Con rituales sostenidos, los primeros cambios de conducta se notan entre la cuarta y la sexta semana. Los indicadores de resultado suelen moverse hacia el segundo trimestre.",
      },
      {
        q: "¿Cuántas personas puede liderar bien un mando medio?",
        a: "Con 1:1 quincenales de calidad, entre 6 y 9 reportes directos es un rango manejable. Por encima de eso hay que delegar coordinación o espaciar el ritual.",
      },
      {
        q: "¿Sirve para equipos remotos?",
        a: "Sí, y con más razón: en remoto los rituales escritos y el seguimiento acordado sustituyen la información informal del pasillo.",
      },
    ],
  },
  {
    slug: "como-dar-feedback-a-un-colaborador-que-no-rinde",
    titulo: "¿Cómo dar feedback a un colaborador que no rinde?",
    bajada:
      "Empieza por un hecho observable y su impacto concreto, pregunta por la causa antes de proponer solución y cierra con un acuerdo escrito con fecha de revisión. Evita el 'sándwich' de elogios: diluye el mensaje y el colaborador se queda sin saber qué debe cambiar.",
    categoria: "Liderazgo de Equipos",
    pilar: false,
    fecha: "2026-07-28",
    actualizado: "2026-07-28",
    lectura: "7 min",
    imagen: blogFeedback,
    alt: "Dos profesionales conversando en una reunión uno a uno junto a una ventana",
    autor: autoraLopez,
    programaRelacionado: "Liderazgo de Equipos en Acción",
    secciones: [
      {
        h2: "¿Cómo abrir la conversación sin ponerlo a la defensiva?",
        parrafos: [
          "Nombra el hecho, no la personalidad. 'Los tres últimos informes llegaron después de la fecha acordada' es accionable; 'te falta compromiso' es una etiqueta que solo genera defensa.",
          "Anuncia el propósito al inicio: la persona necesita saber que la conversación busca resolver algo, no sancionar.",
        ],
      },
      {
        h2: "¿Qué preguntar antes de proponer una solución?",
        parrafos: [
          "Pregunta qué está dificultando el resultado y escucha completo antes de responder. Muchas caídas de rendimiento son problemas de prioridades cruzadas o de acceso a información, no de voluntad.",
        ],
        bullets: [
          "¿Qué te está impidiendo llegar a la fecha?",
          "¿Qué necesitas de mí que hoy no tienes?",
          "¿Qué parte del proceso te toma más tiempo del previsto?",
        ],
      },
      {
        h2: "¿Cómo cerrar con un acuerdo que sí se cumpla?",
        parrafos: [
          "Un acuerdo útil tiene tres partes: qué cambia, cómo se verifica y cuándo se revisa. Envíalo por escrito el mismo día en dos líneas; ese registro evita la discusión de versiones un mes después.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cada cuánto debo dar feedback?",
        a: "De forma continua ante hechos puntuales, y de manera estructurada en la 1:1 quincenal. El feedback anual concentrado casi nunca cambia conductas.",
      },
      {
        q: "¿Qué hago si la persona reacciona mal?",
        a: "Baja el ritmo, valida la emoción sin retirar el mensaje y ofrece retomar en 24 horas. El objetivo es el acuerdo, no ganar la conversación.",
      },
      {
        q: "¿Debo documentar el feedback?",
        a: "Sí, siempre que exista un acuerdo de mejora. Un resumen breve por escrito protege a ambas partes y da continuidad al seguimiento.",
      },
    ],
  },
  {
    slug: "reuniones-1-a-1-que-si-funcionan",
    titulo: "Reuniones 1:1 que sí funcionan: estructura y preguntas",
    bajada:
      "Una 1:1 efectiva dura 30 minutos, la agenda la propone el colaborador y termina con acuerdos escritos. No es una reunión de estado de proyectos: es el espacio donde se resuelven obstáculos, se da feedback y se conversa el desarrollo profesional.",
    categoria: "Habilidades Directivas",
    pilar: false,
    fecha: "2026-08-04",
    actualizado: "2026-08-04",
    lectura: "6 min",
    imagen: blogComunicacion,
    alt: "Líder presentando ante un pequeño equipo en una sala de reuniones iluminada con luz natural",
    autor: autorRuiz,
    programaRelacionado: "Liderazgo de Equipos en Acción",
    secciones: [
      {
        h2: "¿Cuál es la estructura de una 1:1 de 30 minutos?",
        parrafos: [
          "Diez minutos para los temas del colaborador, diez para los tuyos y diez para acuerdos y desarrollo. Ese reparto evita que la reunión se convierta en un reporte de avances que ya está en la herramienta de gestión.",
        ],
        bullets: [
          "Temas del colaborador primero",
          "Obstáculos concretos, no resúmenes",
          "Un acuerdo escrito al cierre",
        ],
      },
      {
        h2: "¿Qué preguntas abren una conversación real?",
        parrafos: [
          "Las preguntas específicas funcionan mejor que '¿cómo vas?'. Pregunta qué le quitó más tiempo esta semana, qué decisión está esperando de ti y qué haría distinto si empezara el proyecto de nuevo.",
        ],
      },
      {
        h2: "¿Qué errores la vuelven inútil?",
        parrafos: [
          "Cancelarla, convertirla en seguimiento de tareas y no dejar registro. Si tres 1:1 seguidas terminan sin ningún acuerdo, el espacio dejó de aportar valor y hay que rediseñarlo.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cada cuánto conviene hacer 1:1?",
        a: "Quincenal para la mayoría de equipos; semanal con personas nuevas o en procesos de mejora.",
      },
      {
        q: "¿Quién debe preparar la agenda?",
        a: "El colaborador propone los temas y el líder agrega los suyos. Un documento compartido vivo funciona mejor que preparar de cero cada vez.",
      },
      {
        q: "¿Se puede hacer 1:1 en remoto?",
        a: "Sí. Cámara encendida, 30 minutos y notas compartidas al cierre logran el mismo efecto que la presencial.",
      },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
export const relacionados = (post: Post) =>
  posts.filter((p) => p.slug !== post.slug && p.categoria === post.categoria).slice(0, 2);