"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav } from "@/content/site";
import Art from "./Art";
import Logo from "./Logo";
import { XMark } from "./ui";

const menu = nav.filter((n) => n.href !== "/contact");

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState<number | null>(null);
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > lastY.current && y > 260);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close any open menu when the route changes
  const [prevPath, setPrevPath] = useState(pathname);
  if (pathname !== prevPath) {
    setPrevPath(pathname);
    setOpen(null);
    setMobile(false);
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
        setMobile(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("lenis-stopped", mobile);
    document.body.style.overflow = mobile ? "hidden" : "";
  }, [mobile]);

  const solid = (scrolled || open !== null) && !mobile;
  const isActive = (href?: string) => !!href && (pathname === href || pathname.startsWith(href + "/"));

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[transform,background-color,color,border-color] duration-500 ${
        hidden && open === null && !mobile ? "-translate-y-full" : "translate-y-0"
      } ${
        solid
          ? "border-b border-rule bg-white text-midnight"
          : `on-dark border-b text-white ${mobile ? "border-white/10 bg-midnight" : "border-transparent"}`
      }`}
      onMouseLeave={() => setOpen(null)}
    >
      <div className="shell flex h-[76px] items-center justify-between gap-6">
        <Link href="/" aria-label="GivenX Tech home" className="shrink-0">
          <Logo variant={solid ? "dark" : "light"} height={30} priority />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {menu.map((item, i) =>
              item.mega ? (
                <li key={item.label}>
                  <button
                    type="button"
                    aria-expanded={open === i}
                    aria-controls={`mega-${i}`}
                    onMouseEnter={() => setOpen(i)}
                    onClick={() => setOpen(open === i ? null : i)}
                    className={`wide flex items-center gap-2 rounded-[3px] px-4 py-2 text-[15px] font-medium transition-colors ${
                      open === i ? "text-cobalt" : ""
                    }`}
                  >
                    {item.label}
                    <XMark className={`h-2 w-2 transition-transform duration-500 ${open === i ? "rotate-0" : "rotate-45"}`} strokeWidth={2} />
                  </button>
                </li>
              ) : (
                <li key={item.label}>
                  <Link
                    href={item.href!}
                    onMouseEnter={() => setOpen(null)}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className="wide block px-4 py-2 text-[15px] font-medium"
                  >
                    <span className={`link-line ${isActive(item.href) ? "bg-[length:100%_1px]" : ""}`}>{item.label}</span>
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contact" className={`btn ${solid ? "btn-primary" : "btn-light"} hidden sm:inline-flex`}>
            Get in touch
            <XMark />
          </Link>
          <button
            type="button"
            className="wide flex h-11 items-center gap-3 px-1 text-[15px] font-medium lg:hidden"
            aria-expanded={mobile}
            aria-controls="mobile-menu"
            onClick={() => setMobile((m) => !m)}
          >
            {mobile ? "Close" : "Menu"}
            <span className="relative block h-3 w-6" aria-hidden>
              <span className={`absolute left-0 h-[2px] w-6 bg-current transition-transform duration-500 ${mobile ? "top-[5px] rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 h-[2px] w-6 bg-current transition-transform duration-500 ${mobile ? "top-[5px] -rotate-45" : "top-[10px]"}`} />
            </span>
          </button>
        </div>
      </div>

      {/* desktop mega menus */}
      {menu.map((item, i) =>
        item.mega ? (
          <div
            key={item.label}
            id={`mega-${i}`}
            className={`mega absolute inset-x-0 top-full hidden border-b border-rule bg-white text-midnight shadow-[0_30px_60px_-30px_rgba(14,19,48,0.35)] lg:block ${
              open === i ? "is-open" : ""
            }`}
          >
            <div className="shell grid grid-cols-12 gap-10 py-12">
              {item.mega.columns.map((col, c) => (
                <div key={col.title} className="col-span-3">
                  <p className="mega-item mb-5 text-sm text-slate" style={{ "--i": c } as React.CSSProperties}>
                    {col.title}
                  </p>
                  <ul className="space-y-2.5">
                    {col.links.map((l, k) => (
                      <li key={l.label} className="mega-item" style={{ "--i": c * 3 + k + 1 } as React.CSSProperties}>
                        <Link href={l.href} className="link-line text-[15px] font-medium hover:text-cobalt" tabIndex={open === i ? 0 : -1}>
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <Link
                href={item.mega.promo.cta.href}
                tabIndex={open === i ? 0 : -1}
                className="mega-item group col-span-6 grid grid-cols-2 overflow-hidden bg-paper"
                style={{ "--i": 4 } as React.CSSProperties}
              >
                <Art seed={item.mega.promo.art} className="min-h-[220px]" />
                <div className="flex flex-col justify-between p-7">
                  <div>
                    <p className="display t-3">{item.mega.promo.title}</p>
                    <p className="mt-3 text-[15px] text-slate">{item.mega.promo.text}</p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-cobalt">
                    <span className="link-line">{item.mega.promo.cta.label}</span>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        ) : null,
      )}

    </header>

      {/* mobile menu: a sibling of <header>, because the header's transform would trap a fixed child */}
      <div
        id="mobile-menu"
        className={`on-dark fixed inset-x-0 bottom-0 top-[76px] z-40 overflow-y-auto bg-midnight text-white transition-[opacity,visibility] duration-300 lg:hidden ${
          mobile ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="shell pb-12 pt-6">
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {menu.map((item) =>
              item.mega ? (
                <li key={item.label}>
                  <details>
                    <summary className="display flex items-center justify-between py-5 text-2xl">
                      {item.label}
                      <XMark className="faq-x h-3 w-3 rotate-45" />
                    </summary>
                    <div className="grid gap-6 pb-6 sm:grid-cols-2">
                      {item.mega.columns.map((col) => (
                        <div key={col.title}>
                          <p className="mb-3 text-sm text-sky">{col.title}</p>
                          <ul className="space-y-2">
                            {col.links.map((l) => (
                              <li key={l.label}>
                                <Link href={l.href} className="text-white/85 hover:text-white">
                                  {l.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </details>
                </li>
              ) : (
                <li key={item.label}>
                  <Link href={item.href!} className="display block py-5 text-2xl">
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
          <Link href="/contact" className="btn btn-primary mt-8">
            Get in touch
            <XMark />
          </Link>
        </nav>
      </div>
    </>
  );
}
