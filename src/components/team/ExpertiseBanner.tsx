"use client";

import { motion } from "framer-motion";

export function ExpertiseBanner() {
  return (
    <section className="py-20 md:py-24 bg-background relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-700/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-[2rem] border border-border/50 bg-card/40 backdrop-blur-3xl p-10 md:p-16 text-center shadow-2xl overflow-hidden">
            {/* Top gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-400 via-brand-500 to-brand-600" />
            
            <div className="inline-flex items-center justify-center bg-brand-500/10 text-brand-600 dark:text-brand-400 text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
              Our Strength
            </div>
            
            <p className="text-xl md:text-2xl leading-relaxed text-foreground font-medium text-balance">
              The team at <span className="text-brand-600 dark:text-brand-400 font-bold">RÖLTEK</span> comprises experts with a profound understanding of the economic challenges faced in the Horn of Africa. Their knowledge enables the company to adapt its strategies effectively, ensuring resilience and competitiveness even amidst fluctuating market conditions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
