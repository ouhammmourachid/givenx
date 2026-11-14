import Link from "next/link";
import type { ReactNode } from "react";
import Art from "./Art";

export function XMark({ className = "btn-x", strokeWidth = 1.8 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 10 10" className={className} aria-hidden fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square">
      <path d="M1 1 9 9M9 1 1 9" />
    </svg>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "light";
  className?: string;
}) {
  return (
    <Link href={href} className={`btn btn-${variant} ${className}`}>
      {children}
      <XMark />
    </Link>
  );
}

/** Dark page header shared by every inner page. */
export function PageHero({
  kicker,
  title,
  intro,
  art,
  children,
}: {
  kicker?: ReactNode;
  title: string;
  intro?: string;
  art?: number;
  children?: ReactNode;
}) {
  return (
    <section className="on-dark blueprint relative overflow-hidden bg-midnight pb-16 pt-36 text-white md:pb-24 md:pt-48">
      <div className="shell relative grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className={art !== undefined ? "lg:col-span-7" : "lg:col-span-10"}>
          {kicker && <div className="fade-in mb-6 text-sm text-sky">{kicker}</div>}
          <h1 className="display t-1">
            <span className="hero-line">
              <span style={{ "--d": "80ms" } as React.CSSProperties}>{title}</span>
            </span>
          </h1>
          {intro && (
            <p className="lede measure fade-in mt-8" style={{ "--d": "450ms" } as React.CSSProperties}>
              {intro}
            </p>
          )}
          {children && (
            <div className="fade-in mt-10" style={{ "--d": "600ms" } as React.CSSProperties}>
              {children}
            </div>
          )}
        </div>
        {art !== undefined && (
          <div className="fade-in lg:col-span-5" style={{ "--d": "300ms" } as React.CSSProperties}>
            <Art seed={art} className="aspect-[4/3] w-full" />
          </div>
        )}
      </div>
    </section>
  );
}

/** Shown for an instant while a detail page resolves its URL params. */
export function HeroFallback() {
  return <div aria-hidden className="blueprint min-h-[70svh] bg-midnight" />;
}

export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((it, i) => (
          <li key={it.label} className="flex items-center gap-2">
            {it.href ? (
              <Link href={it.href} className="link-line hover:text-white">
                {it.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-white/60">
                {it.label}
              </span>
            )}
            {i < items.length - 1 && <span aria-hidden className="text-white/35">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return `${d} ${months[m - 1]} ${y}`;
}
