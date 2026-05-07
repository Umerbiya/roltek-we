"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, Trophy, Clock, Search } from "lucide-react";

/* ─── Count Up Hook ─────────────────────────────────────── */

function useCountUp(target: number, enabled: boolean, durationMs: number = 2000) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!enabled || target === 0) return;
    let start: number | null = null;
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    const frame = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / durationMs, 1);
      setCurrent(Math.round(easeOut(progress) * target));
      if (progress < 1) requestAnimationFrame(frame);
    };

    const id = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(id);
  }, [enabled, target, durationMs]);

  return current;
}

/* ─── Data ──────────────────────────────────────────────── */

const indicators = [
  {
    icon: CheckCircle2,
    value: 500,
    suffix: "+",
    label: "Active Clients Nationwide",
  },
  {
    icon: Trophy,
    value: 10000,
    suffix: "+",
    label: "Quality Parts in Stock",
    format: true, // Will add comma
  },
  {
    icon: Clock,
    value: 40,
    suffix: "+",
    label: "Years of Excellence",
  },
  {
    icon: Search,
    isText: true,
    textValue: "All ",
    label: "Nationwide Coverage",
  },
];

/* ─── Card Component ────────────────────────────────────── */

function IndicatorCard({ indicator, inView, index }: { indicator: { icon: React.ElementType; value?: number; suffix?: string; label: string; format?: boolean; isText?: boolean; textValue?: string }; inView: boolean; index: number }) {
  const count = useCountUp(indicator.value || 0, inView, 2500);
  const displayValue = indicator.format ? count.toLocaleString() : count;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
      whileHover={{ y: -8 }}
      className="group relative flex flex-col items-center text-center p-8 rounded-3xl glass-card border-foreground/5 hover:border-[#385723]/30 dark:hover:border-[#a5c68b]/30 transition-all duration-400"
    >
      {/* Icon with pulse background */}
      <div className="relative mb-6">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
          className="absolute inset-0 bg-[#385723] rounded-full blur-xl"
        />
        <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#385723]/20 to-transparent border border-[#385723]/30">
          <indicator.icon className="w-8 h-8 text-[#294712]" />
        </div>
      </div>

      {/* Value */}
      <div className="text-5xl md:text-6xl font-bold font-heading mb-3 tracking-tight tabular-nums">
        <span className="gradient-text-static">
          {indicator.isText ? indicator.textValue : displayValue}
        </span>  {indicator.isText ? "🇪🇹" : ""}
        {!indicator.isText && (
          <span className="text-[#385723] dark:text-[#a5c68b] text-3xl md:text-4xl ml-1">{indicator.suffix}</span>
        )}
      </div>

      {/* Label */}
      <div className="text-xs md:text-sm font-semibold uppercase tracking-widest text-muted-foreground">
        {indicator.label}
      </div>
    </motion.div>
  );
}

/* ─── Main Section ──────────────────────────────────────── */

export function TrustIndicators() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 md:py-32 bg-background overflow-hidden border-t border-white/5">
      {/* Subtle green gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#385723]/5 to-transparent pointer-events-none" />

      {/* Dotted Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#a5c68b 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-heading font-semibold text-foreground/90">
            Trusted by Ethiopia&apos;s Leading <span className="text-[#385723] dark:text-[#a5c68b]">Fleet Operators</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {indicators.map((indicator, index) => (
            <IndicatorCard
              key={index}
              indicator={indicator}
              inView={inView}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
