import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo, Claim } from "./brand";

const nav = [
  { label: "Metodología", href: "/#metodologia" },
  { label: "Programas", href: "/#programas" },
  { label: "Blog", href: "/blog" },
  { label: "Preguntas frecuentes", href: "/#faq" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-white transition-shadow duration-300",
        scrolled ? "shadow-[0_2px_18px_-8px_rgba(13,27,42,0.35)]" : "",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20">
        <Link to="/" aria-label="Xentra, inicio">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gris-oscuro transition-colors hover:text-turquesa"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/#programas"
            className="hidden rounded-md bg-naranja px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110 md:inline-flex"
          >
            Ver programas
          </a>
          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-md p-2 text-petroleo md:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-gris-secundario bg-white px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-4" aria-label="Principal móvil">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-gris-oscuro"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/#programas"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-md bg-naranja px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Ver programas
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-petroleo text-gris-secundario">
      <span
        aria-hidden="true"
        className="brochazo -top-16 right-[-10%] h-56 w-[420px] rotate-6"
        style={{ opacity: 0.28 }}
      />
      <div className="relative mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo variant="light" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gris-secundario/80">
              Centro de Desarrollo Profesional. Formación ejecutiva práctica para líderes de
              equipo.
            </p>
            <p className="mt-6 text-[15px] font-semibold">
              <Claim variant="light" />
            </p>
          </div>

          <div>
            <p className="kicker text-turquesa-claro">Navegación</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li><a href="/#metodologia" className="hover:text-turquesa-claro">Metodología</a></li>
              <li><a href="/#programas" className="hover:text-turquesa-claro">Programas</a></li>
              <li><Link to="/blog" className="hover:text-turquesa-claro">Blog</Link></li>
              <li><a href="/#faq" className="hover:text-turquesa-claro">Preguntas frecuentes</a></li>
            </ul>
          </div>

          <div>
            <p className="kicker text-turquesa-claro">Contacto</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li><a href="mailto:hola@xentra.pe" className="hover:text-turquesa-claro">hola@xentra.pe</a></li>
              <li><a href="https://www.linkedin.com" className="hover:text-turquesa-claro">LinkedIn</a></li>
              <li><a href="https://www.instagram.com" className="hover:text-turquesa-claro">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-gris-secundario/70 md:flex md:items-center md:justify-between">
          <p>Estrategias que transforman. Personas que impactan. Resultados que perduran.</p>
          <p className="mt-3 md:mt-0">© {new Date().getFullYear()} Xentra. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}