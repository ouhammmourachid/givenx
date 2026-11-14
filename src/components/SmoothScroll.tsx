"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function SmoothScroll() {
  const lenis = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const l = new Lenis({ autoRaf: true, anchors: { offset: -96 }, lerp: 0.11 });
    lenis.current = l;
    return () => {
      l.destroy();
      lenis.current = null;
    };
  }, []);

  useEffect(() => {
    if (!window.location.hash) lenis.current?.scrollTo(0, { immediate: true });
  }, [pathname]);

  return null;
}
