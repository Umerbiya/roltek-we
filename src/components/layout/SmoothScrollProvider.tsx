"use client";

import { useEffect, useRef } from "react";

/**
 * SmoothScrollProvider
 * ─────────────────────────────────────────────────────────────────
 * Integrates Lenis for buttery-smooth, native-feel scrolling.
 * 
 * Configuration:
 *  - duration: 1.15s — premium eased feel without being sluggish
 *  - easing: exponential decay (classic Apple-style scroll curve)
 *  - touchMultiplier: 1.8 — responsive on mobile without over-shooting
 *  - wheelMultiplier: 1.0 — natural wheel speed
 *
 * The RAF loop is driven by requestAnimationFrame for exact 60/120fps
 * synchronization without layout thrash.
 */
export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<import("lenis").default | null>(null);

  useEffect(() => {
    let animFrameId: number;

    const initLenis = async () => {
      const Lenis = (await import("lenis")).default;

      const lenis = new Lenis({
        duration: 1.15,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        touchMultiplier: 1.8,
        infinite: false,
      });

      lenisRef.current = lenis;

      // Make lenis globally accessible for anchor-link scroll (cast via unknown for TS strict)
      if (typeof window !== "undefined") {
        (window as unknown as Record<string, unknown>).lenis = lenis;
      }

      const raf = (time: number) => {
        lenis.raf(time);
        animFrameId = requestAnimationFrame(raf);
      };

      animFrameId = requestAnimationFrame(raf);
    };

    initLenis();

    return () => {
      cancelAnimationFrame(animFrameId);
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    };
  }, []);

  return <>{children}</>;
}
