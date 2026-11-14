"use client";

import { useEffect, useRef } from "react";

/**
 * The brand X drawn across the hero, with crosshair rules that follow the
 * pointer like a drafting square. Stays static on touch screens.
 */
export default function HeroX() {
  const wrap = useRef<HTMLDivElement>(null);
  const h = useRef<HTMLDivElement>(null);
  const v = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrap.current?.parentElement;
    if (!el || !window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const home = { x: 0.68, y: 0.5 };
    const target = { ...home };
    const pos = { ...home };
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      target.x = (e.clientX - r.left) / r.width;
      target.y = (e.clientY - r.top) / r.height;
    };
    const onLeave = () => Object.assign(target, home);
    const tick = () => {
      pos.x += (target.x - pos.x) * 0.09;
      pos.y += (target.y - pos.y) * 0.09;
      const x = `${(pos.x * 100).toFixed(3)}%`;
      const y = `${(pos.y * 100).toFixed(3)}%`;
      if (h.current) h.current.style.top = y;
      if (v.current) v.current.style.left = x;
      if (dot.current) {
        dot.current.style.left = x;
        dot.current.style.top = y;
      }
      raf = requestAnimationFrame(tick);
    };
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    raf = requestAnimationFrame(tick);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={wrap} aria-hidden className="pointer-events-none absolute inset-0">
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
        <path d="M430 -40 L1180 1040" pathLength={1} className="draw" stroke="#2b44ff" strokeWidth={150} fill="none" style={{ "--d": "250ms" } as React.CSSProperties} />
        <path d="M1180 -40 L430 1040" pathLength={1} className="draw" stroke="#2b44ff" strokeWidth={46} fill="none" opacity={0.85} style={{ "--d": "550ms" } as React.CSSProperties} />
      </svg>
      <div className="fade-in absolute inset-0" style={{ "--d": "1100ms" } as React.CSSProperties}>
        <div ref={h} className="absolute inset-x-0 h-px bg-sky/40" style={{ top: "50%" }} />
        <div ref={v} className="absolute inset-y-0 w-px bg-sky/40" style={{ left: "68%" }} />
        <div ref={dot} className="absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-sky" style={{ left: "68%", top: "50%" }} />
      </div>
    </div>
  );
}
