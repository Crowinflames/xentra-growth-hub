import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Compass,
  Users,
  TrendingUp,
  Target,
  Repeat,
  Clock,
  Wallet,
  MonitorPlay,
  BadgeCheck,
  Check,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import heroLider from "@/assets/hero-lider.jpg";
import { Header, Footer } from "@/components/xentra/site-chrome";
import {
  Brochazo,
  Claim,
  CtaPrimary,
  CtaSecondary,
  Kicker,
  Reveal,
  SectionTitle,
} from "@/components/xentra/brand";
import { programas, faqs } from "@/lib/xentra-content";
import { posts } from "@/lib/blog-data";
import { ArticleCard } from "./blog.index";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Xentra | Formación ejecutiva práctica para líderes de equipo" },
      {
        name: "description",
        content:
          "Programas cortos y aplicables para líderes de equipo: liderazgo, gestión del cambio y comunicación ejecutiva. Precio fundacional y cupos limitados.",
      },
      {
        property: "og:title",
        content: "Xentra | Formación ejecutiva práctica para líderes de equipo",
      },
      {
        property: "og:description",
        content:
          "Educación que se vive. Conocimiento que se aplica. Programas de 4 a 6 semanas, online en vivo, con herramientas que usas desde la primera semana.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          programas.map((p) => ({
            "@context": "https://schema.org",
            "@type": "Course",
            name: p.nombre,
            description: p.resumen,
            provider: { "@type": "EducationalOrganization", name: "Xentra" },
            hasCourseInstance: {
              "@type": "CourseInstance",
              courseMode: "online",
              courseWorkload: p.duracion,
            },
          })),
        ),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Contraste />
        <Metodologia />
        <Programas />
        <PorQue />
        <Testimonios />
        <Faq />
        <UltimosArticulos />
        <CtaFinal />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-14 pb-16 md:pt-20 md:pb-24">
      <Brochazo className="top-[-90px] right-[-6%] h-64 w-[520px] rotate-3" opacity={0.13} />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Kicker>Ecosistema educativo Xentra</Kicker>
          <span className="trazo-naranja mt-5" />
          <h1 className="mt-5 text-left text-4xl leading-[1.08] font-extrabold tracking-tight md:text-6xl">
            <Claim />
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gris-oscuro">
            Formación ejecutiva práctica para líderes de equipo. Sin diplomados eternos ni teoría
            que se memoriza y se olvida: herramientas que aplicas con tu equipo desde la primera
            semana.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <CtaPrimary href="#programas">Ver programas</CtaPrimary>
            <CtaSecondary href="#metodologia">Conoce la metodología</CtaSecondary>
          </div>
          <p className="mt-6 text-sm text-gris-medio">
            Programas de 4 a 6 semanas · Online en vivo · Precio fundacional de lanzamiento
          </p>
        </div>

        <div className="relative">
          <span
            aria-hidden="true"
            className="absolute -top-6 -left-6 h-40 w-40 rounded-full bg-turquesa-claro/20"
          />
          <img
            src={heroLider}
            alt="Líder de equipo explicando un plan de trabajo a dos colaboradores frente a una pizarra"
            width={1200}
            height={1408}
            className="relative aspect-[4/5] w-full rounded-xl object-cover shadow-[0_30px_60px_-30px_rgba(13,27,42,0.5)]"
          />
          <p className="mt-2 text-xs text-gris-medio">
            Imagen referencial — reemplazar con fotografía real de Xentra.
          </p>
        </div>
      </div>
    </section>
  );
}

const contrastes = [
  {
    icon: Clock,
    titulo: "Meses de teoría vs. semanas de práctica",
    texto:
      "La formación ejecutiva tradicional te pide medio año antes de ver un cambio. En Xentra el programa dura semanas y cada sesión termina con algo que aplicas en tu equipo.",
  },
  {
    icon: Repeat,
    titulo: "Memorizar vs. desarrollar capacidades",
    texto:
      "No evaluamos cuánto recuerdas de un marco conceptual, sino qué conversación tuviste, qué acuerdo cerraste y qué cambió en tu equipo esa semana.",
  },
  {
    icon: Target,
    titulo: "Casos ajenos vs. tu propio caso",
    texto:
      "Trabajas sobre tu equipo real, tus indicadores y tus conflictos actuales. El material de estudio eres tú y el problema que tienes hoy sobre la mesa.",
  },
];

function Contraste() {
  return (
    <section className="relative overflow-hidden bg-gris-claro py-16 md:py-24">
      <Brochazo className="bottom-[-80px] left-[-10%] h-52 w-[420px] -rotate-6" opacity={0.1} />
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionTitle
          kicker="El problema"
          title="Aprendiste mucho. ¿Y qué cambió el lunes en tu equipo?"
          intro="La mayoría de la formación directiva se diseñó para acumular contenido, no para cambiar la manera en que se lidera. Xentra invierte esa lógica."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {contrastes.map((c, i) => (
            <Reveal key={c.titulo} delay={i * 90}>
              <div className="h-full rounded-xl border border-gris-secundario bg-white p-7 transition-shadow duration-300 hover:shadow-[0_20px_40px_-28px_rgba(13,27,42,0.5)]">
                <c.icon size={28} strokeWidth={1.75} className="text-turquesa" aria-hidden="true" />
                <h3 className="mt-5 text-lg leading-snug font-bold text-petroleo">{c.titulo}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gris-oscuro">{c.texto}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const pasos = [
  {
    n: "01",
    icon: Compass,
    titulo: "Diagnóstico de tu contexto",
    texto:
      "Antes de la primera sesión defines el equipo, el problema y el resultado que quieres mover. Todo el programa se ordena alrededor de eso.",
  },
  {
    n: "02",
    icon: Users,
    titulo: "Sesiones en vivo, práctica dirigida",
    texto:
      "Cada encuentro es taller: simulación de conversaciones, revisión de casos del grupo y retroalimentación directa del mentor.",
  },
  {
    n: "03",
    icon: TrendingUp,
    titulo: "Aplicación entre sesiones",
    texto:
      "Sales con una tarea concreta sobre tu equipo real y vuelves con evidencia: qué hiciste, qué respondió el equipo, qué ajustarías.",
  },
  {
    n: "04",
    icon: BadgeCheck,
    titulo: "Plan de 30 días y cierre",
    texto:
      "Terminas con un plan escrito de continuidad y una revisión de seguimiento para que la práctica no se apague al acabar la cohorte.",
  },
];

function Metodologia() {
  return (
    <section id="metodologia" className="scroll-mt-24 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle
          kicker="Metodología Xentra"
          title="Aprender haciendo, en cuatro pasos"
          intro="El modelo prioriza el desarrollo de capacidades por encima de la transmisión de contenidos. Contenido pendiente de ajuste a la metodología definitiva de Xentra."
        />
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pasos.map((p, i) => (
            <Reveal key={p.n} delay={i * 80}>
              <li className="relative h-full list-none rounded-xl border border-gris-secundario p-7">
                <span className="text-sm font-bold tracking-widest text-turquesa-claro">{p.n}</span>
                <p.icon
                  size={28}
                  strokeWidth={1.75}
                  className="mt-4 text-turquesa"
                  aria-hidden="true"
                />
                <h3 className="mt-4 text-lg leading-snug font-bold text-petroleo">{p.titulo}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gris-oscuro">{p.texto}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Programas() {
  return (
    <section
      id="programas"
      className="relative scroll-mt-24 overflow-hidden bg-gris-claro py-16 md:py-24"
    >
      <Brochazo className="top-[-70px] right-[-12%] h-56 w-[460px] rotate-6" opacity={0.12} />
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionTitle
          kicker="Programas"
          title="Elige el programa y reserva tu cupo"
          intro="Cohortes de lanzamiento con inversión fundacional. La oferta de IA está en validación: solicita información por WhatsApp y te contactamos."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {programas.map((p, i) => (
            <Reveal key={p.slug} delay={i * 90}>
              <article className="flex h-full flex-col rounded-xl border border-gris-secundario bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-turquesa/40 hover:shadow-[0_24px_50px_-30px_rgba(13,27,42,0.55)]">
                <span className="inline-flex w-fit items-center rounded-full border border-naranja/30 bg-naranja/10 px-3 py-1 text-[11px] font-semibold tracking-wide text-naranja">
                  {p.badge}
                </span>
                <h3 className="mt-4 text-xl leading-snug font-bold text-petroleo">{p.nombre}</h3>
                <p className="mt-2 text-sm text-gris-medio">
                  {p.duracion} · {p.modalidad}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-gris-oscuro">{p.resumen}</p>

                {p.inversion ? (
                  <p className="mt-6 flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-naranja">{p.inversion}</span>
                    <span className="text-xs text-gris-medio">inversión de lanzamiento</span>
                  </p>
                ) : null}

                <ul className="mt-6 space-y-3 border-t border-gris-secundario pt-6">
                  {p.incluye.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-gris-oscuro">
                      <Check
                        size={18}
                        strokeWidth={2}
                        className="mt-0.5 shrink-0 text-turquesa"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                {p.ctaExternal ? (
                  <a
                    href={p.ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 w-full inline-flex items-center justify-center rounded-md bg-naranja px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:brightness-110"
                  >
                    {p.cta}
                  </a>
                ) : (
                  <CtaPrimary href={p.ctaHref} className="mt-8 w-full">
                    {p.cta}
                  </CtaPrimary>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const diferenciadores = [
  {
    icon: Target,
    titulo: "Práctico desde el día uno",
    texto: "Cada sesión termina con una acción concreta para ejecutar con tu equipo esa semana.",
  },
  {
    icon: Wallet,
    titulo: "Precio fundacional",
    texto: "Las primeras cohortes acceden a la tarifa de lanzamiento del programa completo.",
  },
  {
    icon: MonitorPlay,
    titulo: "Formato flexible",
    texto: "Sesiones en vivo fuera del horario pico y grabaciones disponibles para repasar.",
  },
  {
    icon: Users,
    titulo: "Mentores en ejercicio",
    texto: "Personas que lideran equipos hoy, no solo docencia. (Placeholder — ajustar perfiles.)",
  },
  {
    icon: Clock,
    titulo: "3 a 4 horas por semana",
    texto: "Diseñado para agendas de mandos medios con operación a cargo.",
  },
  {
    icon: BadgeCheck,
    titulo: "Certificado con evidencia",
    texto: "El certificado detalla el proyecto aplicado, no solo la asistencia.",
  },
];

function PorQue() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle
          kicker="Por qué Xentra"
          title="Formación que se nota en la operación, no solo en el CV"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {diferenciadores.map((d, i) => (
            <Reveal key={d.titulo} delay={i * 70}>
              <div className="h-full rounded-xl bg-gris-claro p-7">
                <d.icon size={26} strokeWidth={1.75} className="text-turquesa" aria-hidden="true" />
                <h3 className="mt-4 text-base font-bold text-petroleo">{d.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gris-oscuro">{d.texto}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonios = [
  {
    nombre: "Nombre Apellido",
    cargo: "Jefa de Operaciones · Empresa (placeholder)",
    frase:
      "Llegué con un equipo que no cumplía fechas. A la cuarta semana ya teníamos 1:1 quincenales y acuerdos escritos.",
  },
  {
    nombre: "Nombre Apellido",
    cargo: "Gerente Comercial · Empresa (placeholder)",
    frase:
      "Lo que más me sirvió fue practicar la conversación difícil antes de tenerla de verdad con mi colaborador.",
  },
  {
    nombre: "Nombre Apellido",
    cargo: "Coordinador de Proyectos · Empresa (placeholder)",
    frase:
      "En cinco semanas apliqué más que en un diplomado de nueve meses. La diferencia está en el seguimiento.",
  },
];

function Testimonios() {
  return (
    <section className="relative overflow-hidden bg-gris-claro py-16 md:py-24">
      <Brochazo className="bottom-[-70px] right-[-8%] h-48 w-[400px]" opacity={0.1} />
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionTitle
          kicker="Testimonios"
          title="Lo que dicen quienes ya lideran distinto"
          intro="Contenido de ejemplo — reemplazar con testimonios reales y fotografía de participantes de Xentra."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonios.map((t, i) => (
            <Reveal key={t.frase} delay={i * 90}>
              <figure className="h-full rounded-xl border border-gris-secundario bg-white p-7">
                <blockquote className="text-base leading-relaxed text-gris-oscuro">
                  “{t.frase}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-gris-secundario pt-5">
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-gris-claro text-xs font-bold text-turquesa"
                  >
                    NA
                  </span>
                  <span className="text-sm">
                    <span className="block font-semibold text-petroleo">{t.nombre}</span>
                    <span className="block text-gris-medio">{t.cargo}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [abierta, setAbierta] = useState<number | null>(0);
  return (
    <section id="faq" className="scroll-mt-24 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-5">
        <SectionTitle kicker="Preguntas frecuentes" title="Todo lo que sueles preguntar antes de inscribirte" />
        <div className="mt-10 divide-y divide-gris-secundario border-y border-gris-secundario">
          {faqs.map((f, i) => {
            const open = abierta === i;
            return (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => setAbierta(open ? null : i)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-base font-semibold text-petroleo">{f.q}</span>
                  <ChevronDown
                    size={20}
                    aria-hidden="true"
                    className={`shrink-0 text-turquesa transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                  />
                </button>
                {open ? (
                  <p className="pb-6 text-sm leading-relaxed text-gris-oscuro">{f.a}</p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function UltimosArticulos() {
  return (
    <section className="bg-gris-claro py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionTitle
            kicker="Blog"
            title="Últimos artículos"
            intro="Ideas aplicables para quienes lideran equipos, publicadas por el equipo académico de Xentra."
          />
          <Link
            to="/blog"
            className="text-sm font-semibold text-turquesa transition-colors hover:text-turquesa-claro"
          >
            Ver todo el blog →
          </Link>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {posts.slice(0, 3).map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <ArticleCard slug={p.slug} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaFinal() {
  return (
    <section
      id="cta-final"
      className="relative scroll-mt-24 overflow-hidden bg-petroleo py-20 md:py-28"
    >
      <Brochazo className="top-[-60px] left-[-6%] h-64 w-[520px] rotate-6" opacity={0.3} />
      <div className="relative mx-auto max-w-4xl px-5">
        <Kicker tone="light">Cupos de la cohorte de lanzamiento</Kicker>
        <span className="trazo-naranja mt-5" />
        <h2 className="mt-5 text-3xl leading-tight font-extrabold tracking-tight md:text-5xl">
          <Claim variant="light" />
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-gris-secundario">
          Reserva tu cupo con precio fundacional y empieza a liderar distinto en las próximas
          semanas.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <CtaPrimary href="#programas">Reserva tu cupo</CtaPrimary>
          <CtaSecondary href="mailto:hola@xentra.pe" variant="light">
            Hablar con el equipo
          </CtaSecondary>
        </div>
      </div>
    </section>
  );
}
