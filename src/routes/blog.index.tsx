import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Header, Footer } from "@/components/xentra/site-chrome";
import { Reveal, SectionTitle, Brochazo, Kicker } from "@/components/xentra/brand";
import { posts, categorias } from "@/lib/blog-data";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog de liderazgo y gestión de equipos | Xentra" },
      {
        name: "description",
        content:
          "Artículos prácticos para líderes de equipo: feedback, 1:1, gestión del cambio y comunicación ejecutiva. Publicado por Xentra, Centro de Desarrollo Profesional.",
      },
      { property: "og:title", content: "Blog de liderazgo y gestión de equipos | Xentra" },
      {
        property: "og:description",
        content:
          "Guías y respuestas concretas para quienes lideran equipos: feedback, reuniones 1:1, cambio y comunicación ejecutiva.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/blog" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: "/" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "/blog" },
          ],
        }),
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [filtro, setFiltro] = useState<string>("Todas");
  const visibles = filtro === "Todas" ? posts : posts.filter((p) => p.categoria === filtro);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="relative overflow-hidden bg-gris-claro py-16 md:py-24">
        <Brochazo className="top-[-60px] right-[-8%] h-52 w-[420px]" opacity={0.13} />
        <div className="relative mx-auto max-w-6xl px-5">
          <nav aria-label="Ruta de navegación" className="mb-6 text-xs text-gris-medio">
            <Link to="/" className="hover:text-turquesa">Inicio</Link>
            <span className="mx-2">/</span>
            <span className="text-gris-oscuro">Blog</span>
          </nav>
          <SectionTitle
            kicker="Ecosistema educativo Xentra"
            title="Ideas que se aplican el lunes por la mañana"
            intro="Respuestas concretas a las preguntas que se hace quien lidera un equipo: cómo dar feedback, cómo estructurar una 1:1, cómo sostener un cambio. Sin teoría de relleno."
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <div className="flex flex-wrap gap-2">
          {["Todas", ...categorias].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFiltro(cat)}
              aria-pressed={filtro === cat}
              className={
                filtro === cat
                  ? "rounded-full border border-turquesa bg-turquesa px-4 py-2 text-xs font-semibold text-white"
                  : "rounded-full border border-gris-secundario px-4 py-2 text-xs font-semibold text-gris-oscuro transition-colors hover:border-turquesa hover:text-turquesa"
              }
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {visibles.map((post, i) => (
            <Reveal key={post.slug} delay={i * 80}>
              <ArticleCard slug={post.slug} />
            </Reveal>
          ))}
        </div>

        {visibles.length === 0 ? (
          <p className="mt-10 text-sm text-gris-medio">
            Aún no hay artículos publicados en esta categoría. Pronto sumaremos contenido.
          </p>
        ) : null}
      </section>

      <Footer />
    </div>
  );
}

export function ArticleCard({ slug }: { slug: string }) {
  const post = posts.find((p) => p.slug === slug)!;
  return (
    <Link
      to="/blog/$slug"
      params={{ slug: post.slug }}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-gris-secundario bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgba(13,27,42,0.45)]"
    >
      <img
        src={post.imagen}
        alt={post.alt}
        loading="lazy"
        width={1200}
        height={800}
        className="h-44 w-full object-cover"
      />
      <div className="flex flex-1 flex-col p-6">
        <Kicker>{post.categoria}</Kicker>
        <h3 className="mt-3 text-lg leading-snug font-bold text-petroleo group-hover:text-turquesa">
          {post.titulo}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-gris-oscuro">{post.bajada}</p>
        <p className="mt-auto pt-5 text-xs text-gris-medio">
          {new Date(post.fecha).toLocaleDateString("es-PE", { day: "numeric", month: "long", year: "numeric" })} ·{" "}
          {post.lectura}
        </p>
      </div>
    </Link>
  );
}