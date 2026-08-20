import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-extrabold tracking-tight text-petroleo">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-petroleo">Página no encontrada</h2>
        <p className="mt-2 text-sm text-gris-oscuro">
          La página que buscas no existe o fue movida de lugar.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-naranja px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:brightness-110"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-petroleo">Esta página no cargó</h1>
        <p className="mt-2 text-sm text-gris-oscuro">
          Algo salió mal de nuestro lado. Puedes intentar de nuevo o volver al inicio.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-naranja px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:brightness-110"
          >
            Intentar de nuevo
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-gris-secundario px-6 py-3 text-sm font-semibold text-petroleo transition-all duration-200 hover:border-turquesa hover:text-turquesa"
          >
            Volver al inicio
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Xentra — Centro de Desarrollo Profesional" },
      {
        name: "description",
        content:
          "Formación ejecutiva práctica para líderes de equipo. Programas cortos, aplicables desde la primera semana.",
      },
      { name: "author", content: "Xentra" },
      { property: "og:site_name", content: "Xentra" },
      { property: "og:title", content: "Xentra — Centro de Desarrollo Profesional" },
      {
        property: "og:description",
        content:
          "Educación que se vive. Conocimiento que se aplica. Formación ejecutiva práctica para líderes de equipo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "Xentra",
          alternateName: "Xentra, Centro de Desarrollo Profesional",
          description:
            "Centro de desarrollo profesional con formación ejecutiva práctica para líderes de equipo.",
          slogan: "Educación que se vive. Conocimiento que se aplica.",
          url: "/",
          logo: "/favicon.ico",
          areaServed: "PE",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
