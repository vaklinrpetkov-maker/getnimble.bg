"use client";

import { useEffect, useRef, useState } from "react";

// Counts from 0 to `to` once, when the number scrolls into view.
// Renders the final value on the server and when the visitor prefers reduced motion.
export default function CountUp({ to, duration = 1600 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(to);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setValue(0);
    let raf = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setValue(Math.round(eased * to));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, duration]);

  return (
    <span ref={ref} style={{ display: "inline-grid", fontVariantNumeric: "tabular-nums" }}>
      {/* Hidden final value reserves the width, so the layout does not shift while counting. */}
      <span aria-hidden="true" style={{ gridArea: "1 / 1", visibility: "hidden" }}>{to}</span>
      <span style={{ gridArea: "1 / 1" }}>{value}</span>
    </span>
  );
}
