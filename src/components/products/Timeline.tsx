"use client";

import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Truck, Search, Wrench, Settings } from "lucide-react";

const timelineData = [
  {
    id: "Phase 1",
    year: "Phase 1",
    title: "The Classic Era",
    desc: "Supporting early heavy-duty transport",
    models: "IVECO 600 series, 190 series",
    parts: "Mechanical fuel pumps, early brake drums, cast iron blocks",
    image: "/images/timeline-placeholder.jpg"
  },
  {
    id: "Phase 2",
    year: "Phase 2",
    title: "Expansion Era",
    desc: "Building the foundation of the modern fleet",
    models: "IVECO TurboStar, Zeta",
    parts: "Turbochargers, heavy-duty suspension springs",
    image: "/images/timeline-placeholder.jpg"
  },
  {
    id: "Phase 3",
    year: "Phase 3",
    title: "Technological Shift",
    desc: "Electronic systems introduction",
    models: "EuroCargo, EuroTech",
    parts: "Early ECUs, electronic fuel injection, ABS sensors",
    image: "/images/timeline-placeholder.jpg"
  },
  {
    id: "Phase 4",
    year: "Phase 4",
    title: "Modern Efficiency",
    desc: "Focus on fuel economy and emissions",
    models: "Stralis, Trakker",
    parts: "EGR valves, advanced cooling systems, disc brakes",
    image: "/images/timeline-placeholder.jpg"
  },
  {
    id: "Phase 5",
    year: "Phase 5",
    title: "Digital Integration",
    desc: "Smart trucks and advanced telematics",
    models: "Stralis Hi-Way",
    parts: "Complex wiring harnesses, LED lighting, advanced sensors",
    image: "/images/timeline-placeholder.jpg"
  },
  {
    id: "Phase 6",
    year: "Phase 6",
    title: "The Innovation Era",
    desc: "Next-generation heavy-duty platforms",
    models: "S-Way, T-Way, X-Way",
    parts: "Aerodynamic body panels, hybrid system components, ADAS sensors",
    image: "/images/timeline-placeholder.jpg"
  },
];

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-700/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 text-brand-700 text-sm font-semibold uppercase tracking-wider mb-6"
          >
            Our Legacy
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            Seven Decades of IVECO Excellence
          </motion.h2>
        </div>

        {/* Timeline Bar Container */}
        <div className="relative mb-16">
          {/* Base Track */}
          <div className="absolute top-1/2 left-4 right-4 md:left-12 md:right-12 h-2 -translate-y-1/2 bg-muted rounded-full overflow-hidden">
            {/* Animated Progress Bar */}
            <motion.div
              className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-brand-600 to-brand-400 origin-left rounded-full"
              style={{ scaleX, width: "100%" }}
            />
          </div>

          {/* Nodes */}
          <div className="relative flex justify-between px-2 md:px-8">
            {timelineData.map((node, i) => {
              const isActive = activeNode === node.id;

              return (
                <div key={node.id} className="relative flex flex-col items-center group">
                  <motion.button
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: i * 0.1, type: "spring" }}
                    onClick={() => setActiveNode(isActive ? null : node.id)}
                    className={`
                      w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center relative z-10 
                      transition-all duration-300 shadow-lg border-4 
                      ${isActive ? 'border-brand-500 bg-background scale-125' : 'border-background bg-brand-200 dark:bg-brand-800 group-hover:border-brand-300'}
                    `}
                  >
                    <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors duration-300 ${isActive ? 'bg-brand-500' : 'bg-brand-600 dark:bg-brand-400'}`} />
                  </motion.button>

                  {/* Year Label */}
                  <div className={`
                    absolute top-full mt-4 text-sm md:text-base font-bold whitespace-nowrap transition-colors duration-300
                    ${isActive ? 'text-brand-600 dark:text-brand-400' : 'text-muted-foreground group-hover:text-foreground'}
                  `}>
                    {node.year}
                  </div>

                  {/* Hidden click area for better mobile tapping */}
                  <div className="absolute inset-x-[-20px] inset-y-[-20px] cursor-pointer" onClick={() => setActiveNode(isActive ? null : node.id)} />
                </div>
              )
            })}
          </div>
        </div>

        {/* Detailed View Panel */}
        <div className="min-h-[300px] mt-24">
          <AnimatePresence mode="wait">
            {activeNode ? (
              <motion.div
                key={activeNode}
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                transition={{ duration: 0.4 }}
                className="bg-card/50 backdrop-blur-md border border-border/50 rounded-3xl p-6 md:p-10 shadow-2xl max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
              >
                {/* Left: Content */}
                <div className="flex flex-col justify-center">
                  <div className="inline-block px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold text-sm mb-4 w-fit">
                    {timelineData.find(d => d.id === activeNode)?.year}
                  </div>
                  <h3 className="text-3xl font-bold mb-4">
                    {timelineData.find(d => d.id === activeNode)?.title}
                  </h3>
                  <p className="text-muted-foreground mb-8 text-lg">
                    {timelineData.find(d => d.id === activeNode)?.desc}
                  </p>

                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-brand-500/10 flex items-center justify-center shrink-0">
                        <Truck className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-foreground">Featured Models</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {timelineData.find(d => d.id === activeNode)?.models}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-brand-500/10 flex items-center justify-center shrink-0">
                        <Settings className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-foreground">Sample Inventory</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {timelineData.find(d => d.id === activeNode)?.parts}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Graphic Placeholder */}
                <div className="relative rounded-2xl overflow-hidden bg-muted aspect-[4/3] flex items-center justify-center group border border-border/50">
                  {/* Decorative placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-900/20 to-brand-500/20 mix-blend-overlay z-10" />
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:4px_4px] opacity-30 z-10" />
                  <Search className="w-16 h-16 text-muted-foreground/30 relative z-20 group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-background/80 px-4 py-2 rounded-lg font-medium text-sm backdrop-blur-sm">
                      Image coming soon
                    </span>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center h-full text-muted-foreground/60 p-12 border-2 border-dashed border-border/50 rounded-3xl"
              >
                <div className="text-center">
                  <Wrench className="w-12 h-12 mx-auto mb-4 opacity-50 animate-pulse" />
                  <p className="text-lg">Click any era on the timeline to explore details</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
