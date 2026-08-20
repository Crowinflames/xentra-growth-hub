import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { posts } from "@/lib/blog-data";

export const Route = createFileRoute("/llms.txt")({
  server: {
    handlers: {
      GET: async () => {
        const body = [
          "# Xentra",
          "",
          "> Xentra, Centro de Desarrollo Profesional. Formación ejecutiva práctica para líderes de equipo: programas cortos, online en vivo, con herramientas que se aplican desde la primera semana.",
          "",
          "## Páginas principales",
          "- [Inicio](/): claim de marca, metodología, programas con precio de lanzamiento y preguntas frecuentes.",
          "- [Blog](/blog): artículos prácticos sobre liderazgo de equipos, gestión del cambio, habilidades directivas y comunicación ejecutiva.",
          "",
          "## Artículos",
          ...posts.map((p) => `- [${p.titulo}](/blog/${p.slug}): ${p.bajada}`),
          "",
          "## Contacto",
          "- Email: hola@xentra.pe",
          "",
        ].join("\n");

        return new Response(body, {
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
