"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Sun, MapPin, Truck, CloudSun, CloudRain } from "lucide-react";
import { useState, useEffect } from "react";

export function FeaturesSection() {
  const [weatherIndex, setWeatherIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWeatherIndex((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-brand-950/20 border-y border-brand-900/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            The RÖLTEK Advantage
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Why thousands of fleet operators across Ethiopia trust us for their mission-critical components.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Feature 1: OEM Quality */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative group bg-card/40 border border-border/50 rounded-3xl p-8 hover:bg-card/60 transition-colors"
          >
            <div className="h-40 flex items-center justify-center mb-6 relative">
              <motion.div
                className="absolute inset-0 bg-brand-500/10 rounded-full blur-2xl"
                whileInView={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative">
                <ShieldCheck className="w-20 h-20 text-brand-700/30" strokeWidth={1} />
                <motion.svg
                  className="absolute inset-0 text-brand-500 w-20 h-20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <motion.path
                    d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    viewport={{ once: true }}
                  />
                  <motion.path
                    d="m9 12 2 2 4-4"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                </motion.svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Genuine OEM Quality</h3>
            <p className="text-muted-foreground text-center leading-relaxed">
              Factory-certified original parts with manufacturer warranties ensuring maximum vehicle uptime.
            </p>
          </motion.div>

          {/* Feature 2: Historical Coverage */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative group bg-card/40 border border-border/50 rounded-3xl p-8 hover:bg-card/60 transition-colors"
          >
            <div className="h-40 flex items-center justify-center mb-6">
              <div className="w-full flex items-center justify-between relative px-4">
                <div className="absolute left-4 right-4 h-1 bg-border rounded-full" />
                <motion.div
                  className="absolute left-4 h-1 bg-brand-500 rounded-full"
                  initial={{ right: "100%" }}
                  whileInView={{ right: "16px" }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  viewport={{ once: true }}
                />

                {[1986, 2000, 2026].map((year, i) => (
                  <motion.div
                    key={year}
                    className="relative z-10 flex flex-col items-center gap-2"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 + (i * 0.5) }}
                    viewport={{ once: true }}
                  >
                    <div className="w-4 h-4 rounded-full bg-brand-500 border-4 border-background" />
                    <span className="text-xs font-bold text-muted-foreground">{year}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Complete Historical Coverage</h3>
            <p className="text-muted-foreground text-center leading-relaxed">
              From classic 1980s workhorses to 2026 cutting-edge models, we have the parts you need.
            </p>
          </motion.div>

          {/* Feature 3: Climate Tested */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative group bg-card/40 border border-border/50 rounded-3xl p-8 hover:bg-card/60 transition-colors"
          >
            <div className="h-40 flex items-center justify-center mb-6">
              <div className="relative w-24 h-24 flex items-center justify-center">
                {/* Terrain / Road */}
                <motion.div
                  className="absolute bottom-0 w-full h-8 border-t-2 border-brand-500 rounded-[50%]"
                  animate={{ scaleY: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <Truck className="absolute bottom-4 w-10 h-10 text-brand-400" />

                {/* Weather Cycling */}
                <div className="absolute top-0 right-0">
                  {weatherIndex === 0 && <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}><Sun className="w-8 h-8 text-yellow-500" /></motion.div>}
                  {weatherIndex === 1 && <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}><CloudSun className="w-8 h-8 text-orange-400" /></motion.div>}
                  {weatherIndex === 2 && <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}><CloudRain className="w-8 h-8 text-blue-400" /></motion.div>}
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Ethiopian Climate Tested</h3>
            <p className="text-muted-foreground text-center leading-relaxed">
              Parts specifically selected and engineered for harsh Ethiopian terrain and extreme climate variations.
            </p>
          </motion.div>

          {/* Feature 4: Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative group bg-card/40 border border-border/50 rounded-3xl p-8 hover:bg-card/60 transition-colors"
          >
            <div className="h-40 flex items-center justify-center mb-6 relative">
              <div className="relative w-24 h-24">
                {/* Center point */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-brand-500 rounded-full z-10" />
                <MapPin className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full w-6 h-6 text-brand-400 z-10" />

                {/* Radiating pulses */}
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 border-2 border-brand-500 rounded-full"
                    animate={{
                      width: ["1rem", "6rem"],
                      height: ["1rem", "6rem"],
                      opacity: [1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.6,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Nationwide Distribution</h3>
            <p className="text-muted-foreground text-center leading-relaxed">
              Rapid delivery across all Ethiopian regions through our robust and extensive logistics network.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
