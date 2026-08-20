import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { posts } from "@/lib/blog-data";

// Asumido a partir del dominio de contacto (hola@xentra.pe). Confirmar/ajustar
// apenas el dominio de producción esté 100% definido y publicado.
const BASE_URL = "https://xentra.pe";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/blog", changefreq: "weekly", priority: "0.8" },
          ...posts.map((p) => ({
            path: `/blog/${p.slug}`,
            changefreq: "monthly",
            priority: "0.7",
            lastmod: p.actualizado,
          })),
        ];

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...entries.map((e) =>
            [
              `  <url>`,
              `    <loc>${BASE_URL}${e.path}</loc>`,
              "lastmod" in e && e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
              `    <changefreq>${e.changefreq}</changefreq>`,
              `    <priority>${e.priority}</priority>`,
              `  </url>`,
            ]
              .filter(Boolean)
              .join("\n"),
          ),
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
