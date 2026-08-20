# Xentra Launchpad

Quiero que construyas el sitio web de Xentra, Centro de Desarrollo Profesional — formación ejecutiva práctica para líderes de equipo. Es un sitio de conversión: el objetivo es que el visitante entienda la propuesta de valor en segundos y se sienta impulsado a inscribirse en un programa. El negocio arranca con una estrategia low-cost (precio de entrada accesible para llenar las primeras cohortes) y subirá el ticket más adelante — el diseño debe sentirse premium y ejecutivo desde el día uno, independientemente del precio de lanzamiento.




Stack: React + Tailwind CSS sobre el motor de Lovable con renderizado en servidor (SSR — Lovable ya usa TanStack Start SSR por defecto en proyectos nuevos; si el proyecto quedó en el stack anterior, pide explícitamente que lo actualicen a SSR completo). Esto es imprescindible para que buscadores y motores de IA puedan leer el contenido — ver la sección 8 (SEO / AEO / GEO). El sitio ya no es una sola página: es un home tipo landing de scroll largo + una sección de Blog con rutas propias (ver sección 7). Todo mobile-first y totalmente responsive.








1. Dirección de diseño (léelo antes de construir)

Xentra ya tiene una identidad visual definida — no inventes una paleta ni una estética genérica de IA (nada de fondo crema + serif + acento terracota; nada de negro + acento neón; nada de layout tipo periódico con hairlines). Sigue exactamente el sistema de marca de abajo.




El hero debe funcionar como una tesis: el claim de marca es el elemento más característico de Xentra y debe ser lo primero que el visitante lee, con jerarquía tipográfica fuerte y el brochazo diagonal turquesa como firma visual recurrente en todo el sitio (no lo uses una sola vez y lo olvides — es el elemento que hace reconocible a Xentra).




Movimiento: sutil y deliberado (fade-ins al hacer scroll, hover states discretos en botones y cards). Nada de animaciones excesivas — la marca prioriza "elegancia ejecutiva" sobre efectos llamativos.




Numeración/pasos: solo usa marcadores tipo 01/02/03 donde exista una secuencia real (por ejemplo, los pasos de la metodología). No los uses como decoración en secciones que no son un proceso.




Copy: específico, no genérico. Voz activa en los CTA ("Reserva tu cupo", no "Enviar"). Nada de frases de relleno tipo "la mejor educación del mercado" — habla en términos concretos de lo que el usuario obtiene y hace.








2. Sistema de marca (obligatorio)

Paleta de color (config de Tailwind)

colors: {




  'azul-petroleo':  '#0D1B2A', // titulares, logotipo, header, fondo oscuro puntual




  'turquesa':       '#0F6878', // brochazos, recursos gráficos, línea de identificación




  'turquesa-claro': '#21B2B8', // diagramas, separadores, hover states




  'gris-claro':     '#F2F4F7', // fondo alterno de sección (base clara predominante)




  'gris-secundario':'#D9DEE3', // fondos muy sutiles, bordes, divisiones




  'gris-medio':     '#6B7280', // texto secundario




  'gris-oscuro':    '#1F2937', // texto de cuerpo sobre fondo claro




  'naranja':        '#FF6B00', // ÚNICO acento — ver reglas abajo




}




Regla del naranja (no negociable): el naranja es el único acento de marca. Se usa solo para: la palabra "aplica" en el claim, los botones de CTA principales, y llamadas de atención muy puntuales (badges, íconos de resultado). Nunca como color de fondo, nunca como color dominante de una sección.




Fondos: blanco o gris-claro (#F2F4F7) como base predominante de todo el sitio. azul-petroleo (#0D1B2A) como fondo oscuro está permitido solo en bloques puntuales (el Hero, si se elige la variante premium, o el bloque de CTA final) — nunca como estándar del sitio completo.

Tipografía

Familia única para todo el sitio: Montserrat (Google Fonts — pesos 400, 500, 600, 700, 800). No mezclar con ninguna otra tipografía, ni siquiera en detalles menores.




Titulares (H1/H2): Montserrat ExtraBold/Bold, color azul-petroleo

Subtítulos: Montserrat SemiBold, color turquesa

Cuerpo de texto: Montserrat Regular/Medium, color gris-oscuro

Texto secundario / captions: Montserrat Medium, color gris-medio

Acentos de resultado (números, highlights): Montserrat Bold, color naranja

Línea institucional en mayúsculas ("ECOSISTEMA EDUCATIVO XENTRA"): Montserrat SemiBold, mayúsculas, letterspacing amplio, tamaño pequeño (10-12px)




Nunca en mayúsculas sostenidas salvo para H1 de titulares muy cortos o la línea institucional descrita arriba.

Lenguaje gráfico

Brochazos diagonales en turquesa (turquesa / turquesa-claro) como recurso decorativo recurrente en esquinas y separadores de sección. Opacidad baja (10-15%) sobre fondo claro; más marcada (25-35%) solo en los bloques puntuales de fondo oscuro.

Un trazo naranja corto y diagonal puede reforzar la zona del claim o del CTA principal — con moderación, nunca como fondo.

Formas geométricas simples (círculo, rectángulo, triángulo diagonal) como acentos sutiles, siempre dentro de la paleta.

Iconografía lineal, moderna, trazo consistente (~2px, estilo outline) para conceptos como Estrategia, Liderazgo, Crecimiento, Aprendizaje, Ejecución, Resultados, Impacto.

Composición: Titular (mensaje principal, tipografía fuerte) → Subtítulo (contexto) → Acento naranja (lo más importante) → Imagen (personas/escenarios que generan conexión).

Fotografía

Personas reales en contexto profesional — colaborando, liderando, presentando. Nunca fotografía de stock genérica ni poses forzadas a cámara (nada de "apretón de manos" o "señalando un gráfico sonriendo"). Tratamiento: luz natural, alto contraste suave, tonos fríos con acentos cálidos. Usa placeholders de bancos de imágenes editoriales/auténticos, marcados claramente para reemplazo posterior con fotografía real de Xentra.

ADN de marca (para calibrar el tono, no solo los colores)

La estrategia debe sentirse; toda pieza debe transmitir movimiento (de ahí los brochazos diagonales).

El blanco comunica claridad — no llenes el espacio en blanco por llenarlo.

El color dirige la atención, no decora.

La energía visual nunca debe comprometer la elegancia ejecutiva — si dudas entre "más llamativo" o "más contenido", elige contenido.

Qué evitar siempre

Naranja como fondo o color dominante.

Logotipo distorsionado o recoloreado (la única variante permitida es blanco sobre fondo oscuro).

Secciones saturadas de elementos decorativos.

Mezclar tipografías.

Fotografía de stock genérica o poses forzadas.

Mostrar el claim de marca junto con la frase "Estrategias que transforman. Personas que impactan. Resultados que perduran." en el mismo bloque visual — son dos mensajes de marca que no compiten entre sí; la segunda frase solo puede aparecer, si acaso, en el footer, separada del claim principal.








3. El claim (elemento central del Hero)

"Educación que se vive. Conocimiento que se aplica."




Es el claim fijo de marca madre de Xentra — no varía por curso ni campaña. La palabra "aplica" siempre en naranja (#FF6B00); es la única palabra con color distinto en toda la frase. El resto en azul-petroleo (o blanco, si el Hero usa fondo oscuro). Alineado a la izquierda, nunca centrado ni en mayúsculas sostenidas. Debe ser el H1 del Hero, en el tamaño más grande de la jerarquía tipográfica del sitio.




Racional que debe transmitir (no es texto para poner literalmente, es lo que el diseño y el copy deben lograr): que Xentra es una institución educativa, que el aprendizaje se aplica de inmediato (no es solo teoría que se memoriza), y que es una alternativa más ágil y práctica frente a los diplomados largos y teóricos tradicionales del mercado — sin necesidad de nombrar competidores por nombre.








4. Estructura del sitio

Landing de una sola página, scroll largo, en este orden:




Header fijo (sticky) Logo Xentra (ícono + wordmark) a la izquierda, sin distorsión. Nav: Metodología · Programas · Blog · Preguntas frecuentes. Botón CTA a la derecha (naranja, texto blanco): "Ver programas". Fondo blanco; agrega una sombra sutil al hacer scroll.




Hero Fondo claro (blanco o gris-claro) con brochazo turquesa sutil en la esquina superior derecha (10-15% opacidad) y un trazo naranja corto cerca del claim. (Alternativa: si se prefiere una apertura más "cover premium", usar fondo azul-petroleo solo en esta sección, logo en blanco, brochazos al 25-35% — pero el resto del sitio vuelve a fondo claro de inmediato después.)




Kicker opcional arriba: "ECOSISTEMA EDUCATIVO XENTRA"

H1: el claim completo, con "aplica" en naranja

Subheadline (1-2 líneas): reforzar que es formación ejecutiva práctica para líderes de equipo, sin diplomados eternos ni contenido que se memoriza y se olvida — herramientas que se aplican desde la primera semana (placeholder de copy — ajustar)

CTA principal (botón naranja): "Ver programas"

CTA secundaria (texto o outline): "Conoce la metodología"

Imagen: foto real de un líder o equipo en acción, con un elemento gráfico de marca detrás (círculo turquesa o brochazo)




El problema / contraste Fondo gris-claro. Título corto contrastando la educación ejecutiva tradicional (larga, teórica, memorización) con el enfoque de Xentra (corto, práctico, aplicación inmediata). 2-3 columnas o tarjetas con iconografía lineal. Sin nombrar competidores específicos.




Metodología Xentra Fondo blanco. 3-4 pilares o pasos (aquí sí se justifica la numeración 01/02/03, porque es una secuencia real), con íconos lineales. Base conceptual: el modelo prioriza desarrollo de capacidades por encima de la transmisión de contenidos — "aprender haciendo" más que memorizar teoría. (Placeholder — ajustar a la metodología real de Xentra.)




Programas (el corazón de la conversión) Grid de cards, 3 columnas en desktop / 1 en mobile. Cada card incluye: nombre del programa, duración y modalidad, precio de lanzamiento con un badge tipo "Precio fundacional" o "Cupos limitados" (transmite accesibilidad sin verse barato — cuida el diseño de la card: borde sutil, tipografía cuidada, nada de rebajas agresivas estilo e-commerce), 3-4 bullets de contenido incluido, y botón CTA naranja ("Reservar cupo"). Deja el diseño preparado para que en el futuro convivan programas de ticket más alto sin rediseñar la sección. (No tengo aún nombres ni precios reales de programas — usa placeholders claramente editables, por ejemplo "Liderazgo de Equipos en Acción · 6 semanas · S/XXX".)




Por qué Xentra 4-6 tarjetas o íconos con diferenciadores: práctico desde el día uno, precio accesible de lanzamiento, formato flexible, mentores con experiencia real, etc. (Placeholder — ajustar.)




Testimonios Grid o carrusel de 3. Foto real + nombre + cargo/empresa + frase corta. (Marcar como contenido a reemplazar con testimonios reales de Xentra.)




Preguntas frecuentes Acordeón simple, 5-6 preguntas (precio, modalidad, certificación, si es 100% online, medios de pago).




CTA final Puede usar fondo azul-petroleo (uso puntual permitido para bloques de cierre). Repetir el claim o una variación corta, con "aplica" en naranja. Botón CTA grande.




Footer Fondo azul-petroleo (o blanco con separador turquesa fino de 2-3pt arriba). Logo en versión blanca si el fondo es oscuro. Claim en versión firma: una sola línea, tamaño reducido (14-16px), "aplica" en naranja. Si se incluye la frase "Estrategias que transforman. Personas que impactan. Resultados que perduran.", va aquí como firma de cierre, nunca junto al claim principal. Links de navegación, redes sociales, contacto, copyright.




Nota: además de estas 10 secciones, agrega un módulo "Últimos artículos" (3 cards enlazando a /blog) cerca del cierre del home, antes de la sección de CTA final — mantiene contenido fresco visible y refuerza el enlazado interno hacia el blog. El detalle completo del blog está en la sección 7, y la estrategia de SEO/AEO/GEO en la sección 8.








5. Notas de conversión y UX

CTA visible en cada sección relevante (header, hero, programas, cierre) — no obligues al usuario a buscar cómo inscribirse.

El precio debe estar siempre visible en la sección Programas, no oculto detrás de "cotiza aquí" — la estrategia de lanzamiento low-cost funciona como gancho y debe notarse.

Prioriza mobile: buena parte del tráfico llegará desde redes sociales (Instagram/LinkedIn) en celular.

Imágenes optimizadas, animaciones ligeras — prioriza velocidad de carga.

Accesibilidad: contraste de texto correcto sobre fondo oscuro y claro, focus visible en botones y links, respeta prefers-reduced-motion.

7. Blog: arquitectura, plantillas y estrategia editorial

El blog es la principal palanca de posicionamiento orgánico de Xentra: cada artículo es una página indexable que puede rankear en Google y ser citada por motores de IA, y que empuja tráfico hacia los programas.




Rutas: /blog (listado, con filtro por categoría) y /blog/[slug] (plantilla de artículo). Son rutas propias con SSR, cada una con su propio title, meta description y schema (ver sección 8) — no son parte del scroll de una sola página.

Categorías sugeridas (alineadas a los programas, para reforzar autoridad temática): Liderazgo de Equipos, Gestión del Cambio, Habilidades Directivas, Comunicación Ejecutiva, Casos y Tendencias. (Ajustar a los programas reales.)

Modelo "pilar + clusters": por cada categoría, un artículo pilar largo y completo (ej. "Guía completa: cómo liderar un equipo de alto rendimiento") que enlaza a varios artículos más cortos y específicos sobre subtemas (ej. "Cómo dar feedback difícil sin dañar la relación", "Reuniones 1:1 que sí funcionan"). Esto construye autoridad temática frente a Google y frente a los motores de IA — mucho más que publicar posts sueltos sin relación entre sí.

Plantilla de artículo (/blog/[slug]):

H1 = título del artículo, formulado como la pregunta o el término real que un líder de equipo escribiría (no un título genérico de marketing)

Bajada de 2-3 líneas justo debajo del H1 que responda la pregunta central de forma directa — clave para AEO, porque es el bloque que los motores de respuesta suelen extraer

Foto de portada (misma línea fotográfica de marca) con alt text descriptivo

Byline: autor real (nombre, cargo en Xentra, foto pequeña) + fecha de publicación/actualización — señal de autoría real que da confianza tanto a Google como a los modelos de IA

Cuerpo con H2/H3 claros, uno por subtema, idealmente formulados como preguntas reales

Listas y bullets para escaneabilidad

Bloque de FAQ al final (3-5 preguntas) con schema FAQPage

Caja de CTA a mitad y al final del artículo, enlazando al programa relacionado (ej. un artículo sobre feedback enlaza al programa de Liderazgo de Equipos)

Artículos relacionados al final (misma categoría)

Look & feel: misma identidad de marca del resto del sitio (Montserrat, paleta, brochazos como separadores dentro del artículo) — el blog no debe sentirse como un tema genérico pegado al sitio.








8. SEO / AEO / GEO — checklist técnico y de contenido

SEO (que te encuentren en Google), AEO (que te usen como respuesta directa) y GEO (que ChatGPT, Perplexity, ­Gemini, Claude, etc. te citen) se solapan bastante y comparten base técnica, pero no son lo mismo: SEO te mete en el conjunto de páginas que el motor lee, AEO hace que tu contenido sea fácil de extraer, y GEO hace que la IA te elija a ti sobre la competencia al armar la respuesta final. Hay una capa técnica que se construye una sola vez (esto sí se lo puedes pedir directo a Lovable) y una capa de contenido que es trabajo editorial continuo del equipo (esto no lo resuelve el build).

Capa técnica — pídele esto explícitamente a Lovable

Confirma que el proyecto corre sobre el stack con SSR (TanStack Start) — es el que Lovable usa por defecto en proyectos nuevos desde mayo 2026; sin esto, buscadores y motores de IA ven una página en blanco. Si el proyecto quedó en el stack anterior, pide actualizarlo a SSR completo.

Título y meta description únicos por página: home, cada programa (si se separan en páginas propias — ver nota abajo), y cada artículo del blog.

Open Graph y Twitter Card en cada página (imagen, título, descripción), para que los links se vean bien al compartirse en LinkedIn, WhatsApp o Instagram.

sitemap.xml y robots.txt — verifica que no estén bloqueando crawlers de IA (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.). Si el hosting pasa por Cloudflare, revisa que no tenga activado por defecto el bloqueo de bots de IA.

URLs canónicas en cada página.

Datos estructurados (schema.org / JSON-LD):

Organization (o EducationalOrganization) en el home, con nombre, logo, descripción y datos de contacto

Course en cada programa

Article / BlogPosting en cada entrada del blog, con autor y fecha

FAQPage en la sección de preguntas frecuentes del home y en cada bloque de FAQ de los artículos

BreadcrumbList en el blog

Considera un archivo llms.txt (estándar emergente, todavía no universal, pero barato de implementar): un índice curado de las páginas más importantes del sitio con una descripción breve de cada una, para que los motores de IA entiendan rápido de qué trata Xentra.

Usa la herramienta de revisión integrada de Lovable (More → SEO & AI search → Scan project) antes de publicar y después de cada tanda de contenido nuevo — revisa metadatos, jerarquía de encabezados, alt text, canonical, sitemap, y permite aplicar varias correcciones en un clic.

Rendimiento: imágenes optimizadas y lazy loading fuera del viewport inicial — afecta tanto el ranking (Core Web Vitals) como qué tan bien pueden "leer" la página los crawlers.

Capa de contenido — trabajo editorial continuo (no lo resuelve el build)

Escribe cada artículo respondiendo una pregunta real y específica que un líder de equipo buscaría, en Google o preguntándole a un asistente de IA — frases largas y conversacionales, no solo keywords cortas (mejor "cómo dar feedback a un colaborador que no rinde" que solo "feedback laboral").

Responde directo en el primer párrafo, luego desarrolla — es el formato que más citan los motores de respuesta.

Mantén los datos de marca exactamente iguales en todas partes (nombre, qué hace Xentra, ubicación, modalidad) — sitio, Google Business Profile, LinkedIn, cualquier directorio. Los motores de IA bajan la confianza (y a veces omiten la respuesta) cuando encuentran datos contradictorios entre fuentes.

Crea o confirma el Google Business Profile de Xentra — es gratis, rápido, y hoy es una de las fuentes que Google AI Overviews y Gemini usan directamente para responder sobre negocios.

Prioriza contenido con punto de vista propio o datos originales de Xentra (resultados de programas, mini-encuestas, casos reales) sobre contenido genérico — es lo que hace que un modelo de IA cite a Xentra como fuente en vez de a un blog cualquiera.

Nota realista: la parte técnica se construye una vez; el posicionamiento real (rankear, ser citado) depende de publicar contenido de calidad de forma sostenida y de construir autoridad — ahí no hay atajo.




Nota sobre páginas de programa: si más adelante quieres invertir más en SEO, separar cada programa en su propia página (/programas/[slug]) con su propio schema Course, más contenido y testimonios específicos suele rendir mejor en búsquedas de intención alta (ej. "curso de liderazgo de equipos Lima") que tenerlos solo como cards dentro del home. No es indispensable para el lanzamiento, pero vale la pena tenerlo en el radar.








9. Contenido pendiente (marcar como placeholder editable en el sitio)

Nombres, duración y precios reales de los programas

Testimonios reales

Fotografía real del equipo y mentores

Copy final revisado (el copy de este brief es punto de partida, no definitivo)

Autores reales para los bylines del blog (nombre, cargo, foto)

Google Business Profile de Xentra (crear o confirmar)

Calendario editorial de los primeros 6-8 artículos del blog

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://xentra-growth-hub.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d4f11056-c5f9-40a8-89bd-d4193453270a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
