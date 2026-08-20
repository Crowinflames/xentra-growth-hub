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
  actualizado?: string;
  lectura: string;
  imagen: string;
  alt: string;
  autor: { nombre: string; cargo: string; iniciales: string };
  programaRelacionado: string;
  secciones: {
    h2?: string;
    parrafos: string[];
    bullets?: string[];
    timeline?: string[];
    cita?: { texto: string; autor: string };
  }[];
  faqs: { q: string; a: string }[];
};

// PLACEHOLDER: autores y contenido editorial pendientes de revisión por Xentra.
const autorRuiz = { nombre: "Nombre Apellido", cargo: "Director académico, Xentra", iniciales: "NA" };
const autoraNicole = {
  nombre: "Nicole Sanguineti",
  cargo:
    "Más de 20 años liderando equipos, más de 10 años en Belcorp y más de 10 años en el sector educativo peruano",
  iniciales: "NS",
};
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
    titulo: "Cómo liderar cuando nada es como aprendiste",
    bajada:
      "Veinte años liderando equipos en Perú, México y Panamá me enseñaron que no existe una forma 'correcta' de liderar, solo una forma atenta. Hoy, con la IA como nueva compañera de gestión, esa lección importa más que nunca.",
    categoria: "Liderazgo de Equipos",
    pilar: true,
    fecha: "2026-07-13",
    lectura: "9 min",
    imagen: blogLiderazgo,
    alt: "Una líder con experiencia conversa con dos colaboradoras más jóvenes alrededor de una laptop, con luz natural",
    autor: autoraNicole,
    programaRelacionado: "Primer Liderazgo",
    secciones: [
      {
        parrafos: [
          "Empecé a liderar equipos hace más de 20 años, en Belcorp. Doce años ahí me enseñaron una primera versión de lo que significa dirigir personas. Posteriormente, una etapa que complementó mi aprendizaje fue cuando entré al rubro educativo: Nancy Matos me dio la oportunidad de sumarme al equipo de la Universidad ESAN, y de ahí mi ruta pasó por UPSJB, Certus, la Escuela de Postgrado de la UTP, y después proyectos que me llevaron hasta liderar el inicio de la gestión y lanzamiento de una nueva universidad en el Perú.",
        ],
        timeline: [
          "Belcorp",
          "Universidad ESAN",
          "UPSJB",
          "Certus",
          "Escuela de Postgrado UTP",
          "Lanzamiento de nueva universidad",
        ],
      },
      {
        parrafos: [
          "En ese camino tuve la oportunidad de liderar equipos multifuncionales no solo en Lima, sino en México y Panamá, equipos multiculturales, con personas de Venezuela, Colombia, México, Centroamérica y el Caribe. Eso te abre la mente de una forma que ningún manual de liderazgo puede enseñarte: entiendes que nada es definitivo, que lo que crees saber depende del punto de vista de quien lo mira, de la cultura de donde viene, de la edad que tiene, de la 'mochila' que cada persona carga.",
          "Posteriormente vino un nuevo gran reto: liderar en remoto. Claro, ya sabemos: 2020, llegó la pandemia. Ese fue otro reto mayor, distinto a todos los anteriores. Y pensé que, después de eso, ya lo había visto todo.",
          "No fue así. Nada nos preparó para lo que nos enfrentamos hoy. La tecnología llegó a replantear el trabajo, y la inteligencia artificial dejó de ser una herramienta más para convertirse en algo distinto: un socio estratégico que no solo ejecuta tareas mecánicas, sino que colidera contigo, te acompaña en la gestión y te hace pensar más rápido y mejor. Y hay un punto adicional, no menos importante: las nuevas generaciones, tus colaboradores, los líderes que recién están empezando, llegan mucho más acostumbrados a esta tecnología que muchos líderes con más años en la institución. Ese cambio de orden, donde a veces el que menos años tiene es el que más domina la herramienta, es en sí mismo una lección de liderazgo.",
          "Y ahí volví a aprender lo mismo que ya sabía desde Belcorp, desde México, desde Panamá, desde la pandemia: en liderazgo nada es estático, todo va cambiando, y tienes que ir un paso adelante. Pero lo más importante que aprendí en 20 años no fue una técnica ni un framework, fue no perder nunca la humanidad. Sentí, en cada uno de esos equipos, que éramos una gran familia. Y esa parte, ni la mejor IA del mundo te la puede reemplazar.",
        ],
      },
      {
        h2: "Liderar equipos multiculturales te obliga a soltar certezas",
        parrafos: [
          "Cuando lideras solo dentro de tu propia cultura, es fácil creer que tu forma de comunicar, de dar feedback o de tomar decisiones es 'la normal'. Liderar en México, en Panamá, con equipos venezolanos, colombianos, centroamericanos y caribeños, me quitó esa comodidad.",
          "Hablando el mismo idioma, muchas veces no nos entendíamos. Podíamos hablar español, pero hay palabras que en el mejor de los casos no se entendían, y en otros casos se malinterpretaban. La forma de saludar, de tratar, de solicitar información, todo es diferente en cada cultura, y debes entender que no puedes dar nada por sentado. Todo lo tienes que desaprender para volver a aprenderlo.",
          "No hay una manera 'correcta'. Es indispensable investigar, escuchar y encontrar la manera adecuada para cada realidad: observar antes de asumir.",
          "Esto no es una técnica que se aplica una vez y ya. Es un músculo que se entrena liderando personas distintas a ti, una y otra vez.",
        ],
      },
      {
        h2: "Liderar con IA sin dejar de liderar personas",
        parrafos: [
          "La pandemia me enseñó a liderar en remoto, sin la sala físicamente compartida. La IA me está enseñando algo distinto: a liderar con un socio que piensa junto contigo, que te ayuda a decidir más rápido, pero que no reemplaza el criterio ni el vínculo humano que sostiene a un equipo.",
          "El reto de hoy no es aprender a usar una herramienta más. Es aprender a coliderar: dejar que la IA haga lo que hace mejor, y quedarte tú con lo que solo un líder humano puede dar, la lectura del contexto, la conversación difícil, el criterio para saber cuándo apoyarte en la tecnología y cuándo no.",
        ],
      },
      {
        h2: "Nunca perder la humanidad",
        parrafos: [
          "Si tuviera que resumir 20 años liderando equipos en una sola idea, sería esta: la técnica se aprende, la tecnología se aprende, pero la humanidad es lo que hace que un equipo se sostenga en el tiempo.",
          "Es humanidad genuina: saber que son personas, que a veces cargan situaciones que los preocupan, y que tienes que verlos, sentir que algo pasa y no dejarlo ahí. Preguntarles, ser empático. Muchas veces con solo escucharlos es suficiente, otras veces es necesario dar un paso más, pero lo importante es que te sientan genuinamente presente.",
        ],
        cita: {
          texto:
            "Para mí, mis equipos terminan siendo mi segunda familia, como mis hijos, a quienes enseño, aplaudo, cuido y protejo, sin perder el objetivo empresarial y comercial.",
          autor: "Nicole Sanguineti",
        },
      },
      {
        parrafos: [
          "Eso es, al final, lo que quiero que se lleve cualquier persona que pase por Primer Liderazgo: que liderar bien no es aplicar una fórmula ni dominar la herramienta de moda, es desarrollar el criterio para leer a tu equipo real y decidir, en cada momento, qué parte del liderazgo le corresponde a la tecnología y qué parte te corresponde a ti.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Liderar equipos multiculturales es muy distinto a liderar un equipo local?",
        a: "Sí y no. Los fundamentos (claridad, seguimiento, feedback) siguen siendo los mismos. Lo que cambia es cómo los comunicas: la misma conversación que funciona en Lima puede necesitar un tono distinto en otro país. La clave es observar antes de asumir.",
      },
      {
        q: "¿La IA reemplaza el rol del líder?",
        a: "No. La IA puede ayudarte a decidir más rápido y a organizar mejor la gestión, pero la lectura del contexto, la conversación difícil y el vínculo humano con tu equipo siguen siendo trabajo tuyo, no de la herramienta.",
      },
      {
        q: "¿Cómo se sostiene la cercanía humana en equipos grandes o remotos?",
        a: "Con intención, no con improvisación. Preguntar cómo está alguien de verdad, no solo cómo va el proyecto, es una decisión que tomas cada semana, sin importar si el equipo es de 5 o de 40 personas.",
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