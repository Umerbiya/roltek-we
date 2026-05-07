"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { CheckCircle2, Info } from "lucide-react";

const advantages = [
  "Competitive wholesale pricing built from decades of supplier relationships",
  "Comprehensive stock coverage from historic IVECO models to modern fleets",
  "Strategic location in Addis Ababa for efficient nationwide distribution",
  "Faster lead times than international importers due to local logistics mastery",
];

const quadrants = [
  {
    id: "q1",
    label: "RÖLTEK",
    x: "Convenient",
    y: "Affordable",
    isBrand: true,
    desc: "Premium parts, localized inventory, and highly competitive pricing.",
    gradient: "from-brand-500/20 to-brand-400/20",
    border: "border-brand-500/50 shadow-[0_0_30px_rgba(56,87,35,0.3)]",
    position: "top-left"
  },
  {
    id: "q2",
    label: "Premium Importers",
    x: "Convenient",
    y: "Expensive",
    isBrand: false,
    desc: "Fast delivery but often with high markups due to overheads.",
    gradient: "from-slate-500/10 to-slate-400/10",
    border: "border-border/50",
    position: "top-right"
  },
  {
    id: "q3",
    label: "Generic Suppliers",
    x: "Inconvenient",
    y: "Affordable",
    isBrand: false,
    desc: "Low cost but unreliable availability and slower lead times.",
    gradient: "from-slate-500/10 to-slate-400/10",
    border: "border-border/50",
    position: "bottom-left"
  },
  {
    id: "q4",
    label: "Distant Competitors",
    x: "Inconvenient",
    y: "Expensive",
    isBrand: false,
    desc: "International sourcing with high shipping costs and delays.",
    gradient: "from-slate-500/10 to-slate-400/10",
    border: "border-border/50",
    position: "bottom-right"
  }
];

export function ValuePositioning() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredQ, setHoveredQ] = useState<string | null>(null);

  return (
    <section ref={ref} className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 text-brand-700 text-sm font-semibold uppercase tracking-wider mb-6"
          >
            Market Position
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Where RÖLTEK Stands
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Our value proposition is clear — premium parts and deep expertise at competitive wholesale prices, establishing us as the clear market leader.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Quadrant Diagram */}
          <div className="lg:col-span-6 flex items-center justify-center relative">
            <div className="relative w-full max-w-[500px] aspect-square p-8">

              {/* Axis lines & Grid Background */}
              <div className="absolute inset-8 rounded-3xl bg-muted/20 border border-border/50 backdrop-blur-3xl overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
                {/* Crosshairs */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-border to-transparent" />
                  <div className="absolute h-full w-[2px] bg-gradient-to-b from-transparent via-border to-transparent" />
                </div>
              </div>

              {/* Axis Labels */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 text-xs font-bold text-brand-500 tracking-widest uppercase bg-background px-3 py-1 rounded-full border border-border shadow-sm z-20">Convenient</div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-xs font-bold text-muted-foreground tracking-widest uppercase bg-background px-3 py-1 rounded-full border border-border shadow-sm z-20">Inconvenient</div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 text-xs font-bold text-brand-500 tracking-widest uppercase bg-background px-3 py-1 rounded-full border border-border shadow-sm z-20 origin-center whitespace-nowrap">Affordable</div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 text-xs font-bold text-muted-foreground tracking-widest uppercase bg-background px-3 py-1 rounded-full border border-border shadow-sm z-20 origin-center whitespace-nowrap">Expensive</div>

              {/* Four Quadrants */}
              <div className="absolute inset-8 grid grid-cols-2 grid-rows-2 p-4 gap-4 z-10">
                {quadrants.map((q, i) => (
                  <motion.div
                    key={q.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1, type: "spring" }}
                    onMouseEnter={() => setHoveredQ(q.id)}
                    onMouseLeave={() => setHoveredQ(null)}
                    className={`
                      relative rounded-2xl flex flex-col items-center justify-center p-4 transition-all duration-300 cursor-pointer overflow-hidden
                      bg-gradient-to-br ${q.gradient} border ${q.border} backdrop-blur-md
                      ${hoveredQ === q.id ? "scale-105 z-30" : hoveredQ ? "opacity-40 scale-95" : "hover:scale-[1.02]"}
                      ${q.isBrand ? "bg-brand-500/10 dark:bg-brand-500/20" : "bg-background/40"}
                    `}
                  >
                    {/* Hover tooltip for non-brand items to show details */}
                    <div className={`absolute inset-0 bg-background/95 backdrop-blur-md p-4 flex flex-col items-center justify-center text-center transition-opacity duration-300 z-20 ${hoveredQ === q.id ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                      <h4 className={`font-bold text-sm mb-2 ${q.isBrand ? 'text-brand-500' : 'text-foreground'}`}>{q.label}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{q.desc}</p>
                    </div>

                    {q.isBrand ? (
                      <div className="relative z-10 flex flex-col items-center">
                        {/* Particles for RÖLTEK */}
                        {[...Array(6)].map((_, j) => (
                          <motion.div
                            key={j}
                            className="absolute w-1.5 h-1.5 rounded-full bg-brand-400"
                            animate={{
                              y: [0, -30, 0],
                              x: [0, (Math.random() - 0.5) * 40, 0],
                              scale: [0, 1.5, 0],
                              opacity: [0, 1, 0]
                            }}
                            transition={{ duration: 2 + Math.random(), repeat: Infinity, delay: Math.random() * 2 }}
                          />
                        ))}

                        <div className="w-12 h-12 rounded-full bg-brand-500 flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(56,87,35,0.5)] relative">
                          <motion.div
                            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute inset-0 rounded-full bg-brand-400"
                          />
                          <span className="text-white font-bold text-xs relative z-10 tracking-widest">RÖ</span>
                        </div>
                        <span className="font-bold text-foreground text-sm uppercase tracking-wider">{q.label}</span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center opacity-70">
                        <Info className="w-6 h-6 mb-2 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground text-center font-medium px-2">{q.label}</span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Advantages list */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-3xl font-bold mb-8">The RÖLTEK Advantage</h3>
              <div className="space-y-6">
                {advantages.map((adv, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * i }}
                    className="group flex items-start gap-5 p-6 rounded-2xl border bg-card hover:border-brand-500/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:hover:shadow-[0_8px_30px_rgba(56,87,35,0.1)] transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-full bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 group-hover:bg-brand-100 dark:group-hover:bg-brand-900/50">
                      <CheckCircle2 className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                    </div>
                    <p className="text-foreground/80 leading-relaxed text-lg pt-1 group-hover:text-foreground transition-colors">{adv}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
