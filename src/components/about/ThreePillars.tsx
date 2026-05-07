"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Globe, ShieldCheck, TrendingUp, ChevronDown, MapPin, CheckCircle2, BarChart3 } from "lucide-react";
import { useState } from "react";

const pillars = [
  {
    id: "market",
    icon: Globe,
    tag: "Market Expertise",
    title: "Navigating the Ethiopian Trading Environment",
    shortBody: "Extensive expertise in local logistics and regulatory frameworks.",
    body: "The company possesses extensive expertise in navigating the complexities of the Ethiopian trading environment. This includes a deep understanding of local logistics, regulatory frameworks, and market dynamics that are unique to the Horn of Africa.",
    color: "from-blue-500 to-cyan-400",
    bgHover: "hover:bg-blue-500/5",
    activeBorder: "border-blue-500/50",
  },
  {
    id: "quality",
    icon: ShieldCheck,
    tag: "Focus on Quality",
    title: "Uncompromising Quality Assurance",
    shortBody: "100% authentic parts guarantee meeting industry standards.",
    body: "RÖLTEK TRADING PLC places a significant emphasis on quality assurance across its product offerings. By sourcing high-quality OEM and aftermarket parts, the company ensures that its customers receive reliable products that meet industry standards.",
    color: "from-brand-500 to-emerald-400",
    bgHover: "hover:bg-brand-500/5",
    activeBorder: "border-brand-500/50",
  },
  {
    id: "brand",
    icon: TrendingUp,
    tag: "Brand Development",
    title: "Building a Trusted Automotive Brand",
    shortBody: "Expanding market share and enhancing customer trust.",
    body: "In addition to its wholesale operations, RÖLTEK is actively working on building its own brand within the automotive spare parts sector. This strategic initiative aims to enhance recognition and trust among customers while expanding its market share.",
    color: "from-purple-500 to-pink-400",
    bgHover: "hover:bg-purple-500/5",
    activeBorder: "border-purple-500/50",
  },
];

export function ThreePillars() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="py-24 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 text-brand-70  text-sm font-semibold uppercase tracking-wider mb-6"
          >
            Strategic Foundation
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            What Drives RÖLTEK Forward
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Three strategic pillars underpin RÖLTEK&apos;s sustained leadership in the Ethiopian automotive parts market.
          </motion.p>
        </div>

        <div className="space-y-6">
          {pillars.map((pillar, i) => {
            const isActive = activeIndex === i;

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`
                  rounded-3xl border bg-card overflow-hidden transition-all duration-300
                  ${isActive ? `shadow-xl ${pillar.activeBorder}` : `border-border/50 hover:border-border ${pillar.bgHover}`}
                `}
              >
                {/* Header (Clickable) */}
                <button
                  onClick={() => setActiveIndex(isActive ? -1 : i)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 bg-gradient-to-br ${pillar.color} shadow-lg`}>
                      <pillar.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <span className={`text-sm font-bold uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-r ${pillar.color}`}>
                        {pillar.tag}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold mt-1 text-foreground">
                        {pillar.title}
                      </h3>
                      {!isActive && (
                        <p className="text-muted-foreground text-sm mt-2 hidden md:block">
                          {pillar.shortBody}
                        </p>
                      )}
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: isActive ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0 ml-4"
                  >
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  </motion.div>
                </button>

                {/* Expandable Content */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <div className="px-6 md:px-8 pb-8 pt-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-t border-border/50 pt-8">
                          {/* Text Detail */}
                          <div>
                            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                              {pillar.body}
                            </p>

                            {/* specific stats based on index */}
                            {i === 0 && (
                              <div className="flex items-center gap-4 text-foreground font-semibold">
                                <div className="text-4xl font-black text-blue-500">10+</div>
                                <div>Regions<br />Served</div>
                              </div>
                            )}
                            {i === 1 && (
                              <div className="flex items-center gap-4 text-foreground font-semibold">
                                <div className="text-4xl font-black text-brand-500">100%</div>
                                <div>Authentic<br />Guarantee</div>
                              </div>
                            )}
                            {i === 2 && (
                              <div className="flex items-center gap-4 text-foreground font-semibold">
                                <div className="text-4xl font-black text-purple-500">500+</div>
                                <div>Satisfied<br />Clients</div>
                              </div>
                            )}
                          </div>

                          {/* Visuals */}
                          <div className="relative h-64 rounded-2xl bg-muted/50 overflow-hidden border border-border/50 flex items-center justify-center">

                            {/* Visual 0: Market Expertise (Map) */}
                            {i === 0 && (
                              <>
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]" />
                                <MapPin className="absolute w-12 h-12 text-blue-500/20" />
                                <motion.div
                                  className="w-4 h-4 bg-blue-500 rounded-full relative z-10"
                                  animate={{ boxShadow: ["0 0 0 0 rgba(59,130,246,0.4)", "0 0 0 20px rgba(59,130,246,0)"] }}
                                  transition={{ duration: 1.5, repeat: Infinity }}
                                />
                                {/* Route lines animation */}
                                <svg className="absolute inset-0 w-full h-full">
                                  <motion.path
                                    d="M 50% 50% L 20% 30% M 50% 50% L 80% 40% M 50% 50% L 30% 80%"
                                    stroke="rgba(59,130,246,0.3)"
                                    strokeWidth="2"
                                    strokeDasharray="4 4"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                  />
                                </svg>
                              </>
                            )}

                            {/* Visual 1: Focus on Quality (Shield/Checks) */}
                            {i === 1 && (
                              <>
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0%,transparent_70%)]" />
                                <motion.div
                                  animate={{ y: [0, -10, 0] }}
                                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                  className="relative z-10"
                                >
                                  <ShieldCheck className="w-24 h-24 text-emerald-500 drop-shadow-lg" />
                                  <motion.div
                                    className="absolute -right-4 -bottom-4 bg-background rounded-full p-1 shadow-xl"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.5, type: "spring" }}
                                  >
                                    <CheckCircle2 className="w-8 h-8 text-brand-500 fill-brand-500/20" />
                                  </motion.div>
                                </motion.div>
                                {/* Particles */}
                                {[...Array(5)].map((_, j) => (
                                  <motion.div
                                    key={j}
                                    className="absolute w-2 h-2 rounded-full bg-emerald-400"
                                    initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                                    animate={{
                                      opacity: [0, 1, 0],
                                      scale: [0, 1, 0],
                                      x: (Math.random() - 0.5) * 100,
                                      y: (Math.random() - 0.5) * 100
                                    }}
                                    transition={{ duration: 2, repeat: Infinity, delay: j * 0.4 }}
                                  />
                                ))}
                              </>
                            )}

                            {/* Visual 2: Brand Development (Chart) */}
                            {i === 2 && (
                              <>
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1)_0%,transparent_70%)]" />
                                <div className="relative z-10 w-full px-12 h-32 flex items-end gap-4 justify-center">
                                  {[40, 60, 45, 80, 100].map((h, j) => (
                                    <motion.div
                                      key={j}
                                      className="w-8 bg-gradient-to-t from-purple-500 to-pink-400 rounded-t-sm"
                                      initial={{ height: 0 }}
                                      animate={{ height: `${h}%` }}
                                      transition={{ duration: 1, delay: j * 0.1 + 0.2, type: "spring" }}
                                    />
                                  ))}
                                </div>
                                <BarChart3 className="absolute right-4 top-4 w-8 h-8 text-purple-500/20" />
                              </>
                            )}

                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
