"use client";

import { useEffect, useRef, useState } from "react";

/** Counts up to `value` once, the first time it scrolls into view. */
export default function Counter({ value, suffix = "", duration = 1600 }: { value: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setN(0);
    let raf = 0;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (t: number) => {
          const k = Math.min(1, (t - start) / duration);
          const eased = 1 - Math.pow(1 - k, 4);
          setN(Math.round(value * eased));
          if (k < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {n.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}
