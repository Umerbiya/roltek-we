"use client";

import { motion } from "framer-motion";

export function TeamHero() {
  return (
    <section className="relative overflow-hidden text-white py-28 md:py-40 min-h-[60vh] flex items-center">
      {/* Background with noise and gradient */}
      <div 
        className="absolute inset-0 bg-brand-950"
        style={{
          backgroundImage: "radial-gradient(circle at 80% 20%, #385723 0%, transparent 50%), radial-gradient(circle at 20% 80%, #1a2e1a 0%, transparent 50%)"
        }}
      />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      {/* Glow effects */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-500 rounded-full blur-[120px] opacity-20" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-600 rounded-full blur-[150px] opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 bg-brand-800/50 border border-brand-500/30 text-brand-300 text-sm font-semibold px-5 py-2 rounded-full mb-8 backdrop-blur-md shadow-lg uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
              The People Behind RÖLTEK
            </span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-[1.1]">
            Meet Our <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-white to-brand-300">Leadership</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-brand-100/80 font-medium max-w-2xl leading-relaxed">
            Experts with deep Ethiopian market knowledge, dedicated to driving excellence in the automotive parts sector.
          </p>
        </motion.div>
      </div>

      {/* Decorative bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
