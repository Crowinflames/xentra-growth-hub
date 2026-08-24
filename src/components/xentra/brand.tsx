import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const color = variant === "light" ? "text-white" : "text-petroleo";
  return (
    <span className={cn("inline-flex items-center gap-2", color)}>
      <svg width="28" height="28" viewBox="0 0 32 32" aria-hidden="true" fill="none">
        <rect width="32" height="32" rx="8" fill="currentColor" />
        <path d="M9 9l14 14" stroke="#21B2B8" strokeWidth="3" strokeLinecap="round" />
        <path d="M23 9L9 23" stroke="#FF6B00" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <span className="text-xl font-extrabold tracking-tight">Xentra</span>
    </span>
  );
}

export function Brochazo({ className, opacity = 0.12 }: { className?: string; opacity?: number }) {
  return <span aria-hidden="true" className={cn("brochazo", className)} style={{ opacity }} />;
}

export function Kicker({
  children,
  tone = "turquesa",
}: {
  children: ReactNode;
  tone?: "turquesa" | "light";
}) {
  return (
    <p className={cn("kicker", tone === "light" ? "text-turquesa-claro" : "text-turquesa")}>
      {children}
    </p>
  );
}

export function Claim({
  variant = "dark",
  className,
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  return (
    <span className={cn(variant === "light" ? "text-white" : "text-petroleo", className)}>
      Educación que se vive. Conocimiento que se <span className="text-naranja">aplica</span>.
    </span>
  );
}

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-700 ease-out motion-reduce:transition-none",
        shown ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        className,
      )}
    >
      {children}
    </div>
  );
}

const ctaBase =
  "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold transition-all duration-200";

export function CtaPrimary({
  children,
  href,
  to,
  className,
  target,
  rel,
}: {
  children: ReactNode;
  href?: string;
  to?: string;
  className?: string;
  target?: string;
  rel?: string;
}) {
  const cls = cn(
    ctaBase,
    "bg-naranja text-white shadow-sm hover:-translate-y-0.5 hover:shadow-lg hover:brightness-110",
    className,
  );
  if (to)
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    );
  return (
    <a href={href ?? "#programas"} className={cls} target={target} rel={rel}>
      {children}
    </a>
  );
}

export function CtaSecondary({
  children,
  href = "#metodologia",
  variant = "dark",
  className,
}: {
  children: ReactNode;
  href?: string;
  variant?: "dark" | "light";
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        ctaBase,
        "border",
        variant === "light"
          ? "border-white/40 text-white hover:border-turquesa-claro hover:text-turquesa-claro"
          : "border-gris-secundario text-petroleo hover:border-turquesa hover:text-turquesa",
        className,
      )}
    >
      {children}
    </a>
  );
}

export function SectionTitle({
  kicker,
  title,
  intro,
  tone = "dark",
}: {
  kicker?: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <div className="max-w-2xl">
      {kicker ? <Kicker tone={tone === "light" ? "light" : "turquesa"}>{kicker}</Kicker> : null}
      <h2
        className={cn(
          "mt-3 text-3xl leading-tight font-extrabold tracking-tight md:text-4xl",
          tone === "light" ? "text-white" : "text-petroleo",
        )}
      >
        {title}
      </h2>
      <span className="trazo-naranja mt-5" />
      {intro ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed",
            tone === "light" ? "text-gris-secundario" : "text-gris-oscuro",
          )}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
