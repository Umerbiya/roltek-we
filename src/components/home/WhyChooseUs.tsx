"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Trophy, ShieldCheck, Map, Truck } from "lucide-react";

const valueProps = [
  {
    icon: Trophy,
    title: "40+ Years Market Experience",
    badge: "Since 1980s",
    description:
      "Four decades of unmatched industry expertise serving Ethiopia's transportation sector with dedication and reliability.",
    accentColor: "#385723",
  },
  {
    icon: ShieldCheck,
    title: "Premium Quality Assurance",
    badge: "100% Authentic",
    description:
      "Rigorously curated selection of genuine OEM and certified aftermarket parts ensuring maximum vehicle performance and longevity.",
    accentColor: "#4a7030",
  },
  {
    icon: Map,
    title: "Ethiopian Market Mastery",
    badge: "Local Experts",
    description:
      "Deep understanding of Ethiopia's unique terrain, climate conditions, and operational challenges facing fleet operators.",
    accentColor: "#5c8a3d",
  },
  {
    icon: Truck,
    title: "Complete IVECO Coverage",
    badge: "1950s-2026",
    description:
      "Comprehensive spare parts inventory spanning seven decades of IVECO evolution, from vintage classics to cutting-edge modern fleets.",
    accentColor: "#6e9e49",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number], // Spring-like ease out
    },
  },
};

export function WhyChooseUs() {
  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 md:py-32 bg-[#020504] overflow-hidden">
      {/* Ambient gradient orbs */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-[#385723]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-[#a5c68b]/5 blur-[100px] pointer-events-none" />
      
      {/* Noise Texture */}
      <div 
        className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-20"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      <div className="container relative mx-auto px-4 sm:px-6 max-w-7xl z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 border border-[#385723]/30 text-[#a5c68b] bg-[#385723]/10 backdrop-blur-md">
            The RÖLTEK Advantage
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 tracking-tight text-white">
            Why Choose{" "}
            <span
              className="text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #a5c68b 0%, #385723 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
              }}
            >
              RÖLTEK?
            </span>
          </h2>

          <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            We are dedicated to keeping your heavy-duty vehicles on the road
            with reliable parts and unparalleled market expertise.
          </p>
        </motion.div>

        {/* Cards Grid 2x2 */}
        <motion.div
          ref={gridRef}
          variants={containerVariants}
          initial="hidden"
          animate={gridInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {valueProps.map((prop, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="group relative flex flex-col p-8 rounded-3xl bg-white/[0.03] border border-white/5 backdrop-blur-md overflow-hidden cursor-default transition-all duration-300 hover:border-[#a5c68b]/30 hover:shadow-[0_10px_40px_-10px_rgba(165,198,139,0.15)]"
            >
              {/* Hover glow border top */}
              <div
                className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${prop.accentColor}, transparent)` }}
              />

              {/* Top corner glow */}
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-[40px] translate-x-1/2 -translate-y-1/2"
                style={{ background: prop.accentColor }}
              />

              <div className="flex items-start justify-between mb-8">
                {/* Icon */}
                <div className="relative">
                  {/* Subtle pulsing background for icon */}
                  <motion.div 
                    animate={{ scale: [1, 1.05, 1] }} 
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-[#385723]/20 rounded-2xl blur-md"
                  />
                  <div
                    className="relative flex items-center justify-center w-16 h-16 md:w-[72px] md:h-[72px] rounded-2xl transition-transform duration-500 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${prop.accentColor}40 0%, ${prop.accentColor}10 100%)`,
                      border: `1px solid ${prop.accentColor}40`,
                    }}
                  >
                    <prop.icon
                      className="w-8 h-8 md:w-10 md:h-10 text-[#a5c68b] transition-transform duration-500 group-hover:rotate-12"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* Badge */}
                <div className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase text-[#a5c68b] bg-[#a5c68b]/10 border border-[#a5c68b]/20">
                  {prop.badge}
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#a5c68b] transition-colors duration-300">
                {prop.title}
              </h3>
              
              <p className="text-white/60 leading-relaxed text-base md:text-lg font-medium group-hover:text-white/80 transition-colors duration-300">
                {prop.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
