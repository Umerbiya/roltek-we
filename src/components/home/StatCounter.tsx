"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Package, Users, MapPin } from "lucide-react";

/* ─── Types ────────────────────────────────────────────── */

interface Stat {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  isText?: boolean;
  textValue?: string;
}

/* ─── Data ─────────────────────────────────────────────── */

const stats: Stat[] = [
  { icon: Trophy,  value: 40,   suffix: "+",  label: "Years Experience"    },
  { icon: Package, value: 1000, suffix: "+",  label: "Parts Available"     },
  { icon: Users,   value: 500,  suffix: "+",  label: "Satisfied Clients"   },
  { icon: MapPin,  value: 0,    suffix: "",   label: "Coverage", isText: true, textValue: "Nationwide" },
];

/* ─── Eased counter hook ────────────────────────────────── */

function useAnimatedCounter(target: number, durationMs = 2000, enabled = false) {
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

/* ─── Stat Card ─────────────────────────────────────────── */

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.92 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.11,
      duration: 0.55,
      ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number],
    },
  }),
};

function StatCard({ stat, index, containerInView }: { stat: Stat; index: number; containerInView: boolean }) {
  const Icon = stat.icon;
  const count = useAnimatedCounter(stat.value, 2200, containerInView && !stat.isText);

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      whileHover={{ scale: 1.04, y: -4 }}
      transition={{ duration: 0.2 }}
      className="stat-card group relative flex flex-col items-center text-center gap-2.5 px-4 py-5 rounded-2xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.046)",
        border: "1px solid rgba(255,255,255,0.09)",
        backdropFilter: "blur(8px)",
      }}
    >
      {/* Inner top highlight */}
      <div
        className="absolute top-0 left-1/4 right-1/4 h-px rounded-full"
        style={{ background: "linear-gradient(90deg, transparent, rgba(165,198,139,0.4), transparent)" }}
      />

      {/* Icon with glow ring */}
      <div className="relative">
        <div
          className="flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(56,87,35,0.6)]"
          style={{ background: "rgba(56,87,35,0.3)" }}
        >
          <Icon className="w-5 h-5 text-[#a5c68b]" />
        </div>
        {/* Glow ring that appears on hover */}
        <div
          className="absolute inset-[-4px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ boxShadow: "0 0 16px rgba(56,87,35,0.45)", borderRadius: "16px" }}
        />
      </div>

      {/* Value */}
      <div className={`font-bold text-white tracking-tight leading-none tabular-nums ${stat.isText ? "text-[22px] md:text-[24px]" : "text-[28px]"}`}>
        {stat.isText ? (
          <span>
            Nation<span className="text-[#a5c68b]">wide</span>
          </span>
        ) : (
          <span>
            {count}
            <span className="text-[#a5c68b] text-[22px]">{stat.suffix}</span>
          </span>
        )}
      </div>

      {/* Label */}
      <div className="text-[10px] text-white/45 font-semibold uppercase tracking-[0.14em] leading-none">
        {stat.label}
      </div>
    </motion.div>
  );
}

/* ─── Export ────────────────────────────────────────────── */

export function StatCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full"
    >
      {stats.map((stat, i) => (
        <StatCard key={stat.label} stat={stat} index={i} containerInView={inView} />
      ))}
    </motion.div>
  );
}
