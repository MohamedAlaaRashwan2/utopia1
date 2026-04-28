"use client";

import { useEffect, useRef } from "react";
import Lenis, { type LenisOptions } from "lenis";

type UseLenisOptions = LenisOptions & {
  touchMultiplier?: number;
};

export function useLenis(options?: UseLenisOptions) {
  const lenisRef = useRef<Lenis | null>(null);
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    const isTouchDevice =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches;

    const lenis = new Lenis({
      autoRaf: false,
      smoothWheel: true,
      syncTouch: true,
      touchMultiplier: isTouchDevice ? 1.2 : 1,
      ...options,
    });

    lenisRef.current = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      rafIdRef.current = window.requestAnimationFrame(raf);
    };

    rafIdRef.current = window.requestAnimationFrame(raf);

    return () => {
      if (rafIdRef.current !== null) {
        window.cancelAnimationFrame(rafIdRef.current);
      }

      lenis.destroy();
      lenisRef.current = null;
    };
  }, [options]);

  return lenisRef;
}
