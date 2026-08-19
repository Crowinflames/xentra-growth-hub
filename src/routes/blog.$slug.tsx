import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header, Footer } from "@/components/xentra/site-chrome";
import { Brochazo, Kicker, CtaPrimary } from "@/components/xentra/brand";
import { getPost, posts, relacionados } from "@/lib/blog-data";
import { ArticleCard } from "./blog.index";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Artículo no disponible | Xentra" }, { name: "robots", content: "noindex" }] };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.titulo} | Xentra` },
        { name: "description", content: post.bajada.slice(0, 155) },
        { property: "og:title", content: post.titulo },
        { property: "og:description", content: post.bajada.slice(0, 155) },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.titulo,
            description: post.bajada,
            datePublished: post.fecha,
            dateModified: post.actualizado ?? post.fecha,
            articleSection: post.categoria,
            author: { "@type": "Person", name: post.autor.nombre, jobTitle: post.autor.cargo },
            publisher: { "@type": "Organization", name: "Xentra" },
            mainEntityOfPage: `/blog/${params.slug}`,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: post.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Inicio", item: "/" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "/blog" },
              { "@type": "ListItem", position: 3, name: post.titulo, item: `/blog/${params.slug}` },
            ],
          }),
        },
      ],
    };
  },
  component: ArticuloPage,
});

function ArticuloPage() {
  const { post } = Route.useLoaderData();
  const otros = relacionados(post).length
    ? relacionados(post)
    : posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const fecha = (d: string) =>
    new Date(d).toLocaleDateString("es-PE", { day: "numeric", month: "long", year: "numeric" });

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <article className="relative overflow-hidden">
        <Brochazo className="top-[-70px] right-[-10%] h-56 w-[440px]" opacity={0.1} />

        <div className="relative mx-auto max-w-3xl px-5 pt-12 pb-8 md:pt-16">
          <nav aria-label="Ruta de navegación" className="mb-6 text-xs text-gris-medio">
            <Link to="/" className="hover:text-turquesa">Inicio</Link>
            <span className="mx-2">/</span>
            <Link to="/blog" className="hover:text-turquesa">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gris-oscuro">{post.categoria}</span>
          </nav>

          <Kicker>{post.categoria}</Kicker>
          <h1 className="mt-3 text-3xl leading-tight font-extrabold tracking-tight text-petroleo md:text-[2.75rem]">
            {post.titulo}
          </h1>
          <p className="mt-5 border-l-4 border-turquesa pl-4 text-lg leading-relaxed text-gris-oscuro">
            {post.bajada}
          </p>

          <div className="mt-7 flex items-center gap-3 border-t border-gris-secundario pt-6">
            <span
              aria-hidden="true"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-gris-claro text-sm font-bold text-turquesa"
            >
              {post.autor.iniciales}
            </span>
            <div className="text-sm">
              <p className="font-semibold text-petroleo">
                {post.autor.nombre}
              </p>
              <p className="text-gris-medio">
                {post.autor.cargo} · Publicado el {fecha(post.fecha)}
                {post.actualizado && post.actualizado !== post.fecha
                  ? ` · Actualizado el ${fecha(post.actualizado)}`
                  : ""}{" "}
                · {post.lectura}
              </p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-4xl px-5">
          <img
            src={post.imagen}
            alt={post.alt}
            width={1200}
            height={800}
            className="aspect-[3/2] w-full rounded-xl object-cover"
          />
          <Brochazo className="bottom-[-46px] left-[6%] h-24 w-[320px]" opacity={0.16} />
        </div>

        <div className="mx-auto max-w-3xl px-5 py-12">
          {post.secciones.map((sec, i) => (
            <section key={sec.h2 ?? `s-${i}`} className="mb-10">
              {sec.h2 ? (
                <>
                  <h2 className="text-2xl leading-snug font-bold text-petroleo">{sec.h2}</h2>
                  <span className="trazo-naranja mt-4 !h-[4px] !w-12" />
                </>
              ) : null}
              {sec.parrafos.map((p) => (
                <p key={p} className="mt-4 text-base leading-relaxed text-gris-oscuro">
                  {p}
                </p>
              ))}
              {sec.bullets ? (
                <ul className="mt-5 space-y-2">
                  {sec.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-base text-gris-oscuro">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-turquesa-claro" />
                      {b}
                    </li>
                  ))}
                </ul>
              ) : null}

              {sec.timeline ? <Timeline items={sec.timeline} /> : null}
              {sec.cita ? <PullQuote texto={sec.cita.texto} autor={sec.cita.autor} /> : null}

              {sec.h2 && i === 2 ? <CtaArticulo post={post} /> : null}
            </section>
          ))}

          <section className="border-t border-gris-secundario pt-10">
            <h2 className="text-2xl font-bold text-petroleo">Preguntas frecuentes</h2>
            <dl className="mt-6 space-y-6">
              {post.faqs.map((f) => (
                <div key={f.q}>
                  <dt className="text-base font-semibold text-turquesa">{f.q}</dt>
                  <dd className="mt-2 text-base leading-relaxed text-gris-oscuro">{f.a}</dd>
                </div>
              ))}
            </dl>
          </section>

          <CtaArticulo post={post} />
        </div>
      </article>

      <section className="bg-gris-claro py-16">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-2xl font-bold text-petroleo">Artículos relacionados</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {otros.map((p) => (
              <ArticleCard key={p.slug} slug={p.slug} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Timeline({ items }: { items: string[] }) {
  return (
    <div className="my-9 rounded-xl border border-gris-secundario bg-gris-claro p-6">
      <ol className="flex flex-col gap-5 md:flex-row md:items-start md:gap-0">
        {items.map((item, i) => (
          <li key={item} className="relative flex items-start gap-4 md:flex-1 md:flex-col md:gap-3">
            <span
              aria-hidden="true"
              className="absolute top-3 left-[5px] h-full w-[2px] bg-turquesa/30 md:top-[5px] md:left-auto md:h-[2px] md:w-full"
            />
            <span
              aria-hidden="true"
              className="relative z-10 mt-1 h-3 w-3 shrink-0 rounded-full bg-turquesa ring-4 ring-gris-claro md:mt-0"
            />
            <span className="relative z-10 pr-3 text-sm leading-snug font-semibold text-petroleo md:pb-0">
              {item}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function PullQuote({ texto, autor }: { texto: string; autor: string }) {
  return (
    <figure className="my-10 border-l-4 border-naranja bg-gris-claro/70 py-6 pr-6 pl-6">
      <span aria-hidden="true" className="block text-4xl leading-none font-extrabold text-turquesa">
        “
      </span>
      <blockquote className="mt-2 text-xl leading-relaxed font-medium text-petroleo italic md:text-2xl">
        {texto}
      </blockquote>
      <figcaption className="mt-4 text-sm font-semibold text-turquesa">— {autor}</figcaption>
    </figure>
  );
}

function CtaArticulo({ post }: { post: { programaRelacionado: string } }) {
  return (
    <aside className="my-10 rounded-xl border border-gris-secundario bg-gris-claro p-7">
      <Kicker>Programa relacionado</Kicker>
      <p className="mt-3 text-lg font-bold text-petroleo">{post.programaRelacionado}</p>
      <p className="mt-2 text-sm leading-relaxed text-gris-oscuro">
        Lleva estas prácticas a tu equipo con acompañamiento de un mentor y un plan de aplicación
        de 30 días.
      </p>
      <CtaPrimary href="/#programas" className="mt-5">
        Ver programa
      </CtaPrimary>
    </aside>
  );
}