"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const competencies = [
  "OEM Quality",
  "Nationwide Reach",
  "40+ Years Trust",
  "Extensive Inventory",
  "Expert Logistics",
  "Dedicated Support",
  "IVECO Specialists"
];

// Double the array for seamless infinite scrolling
const marqueeItems = [...competencies, ...competencies, ...competencies, ...competencies];

export function Competitiveness() {
  return (
    <section className="bg-background overflow-hidden pb-24 md:pb-32">
      
      {/* Infinite Scrolling Marquee */}
      <div className="relative py-8 md:py-12 bg-brand-950 border-y border-brand-800/50 flex overflow-hidden mb-20 -rotate-1 scale-105">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,15,10,1)_0%,transparent_10%,transparent_90%,rgba(10,15,10,1)_100%)] z-10 pointer-events-none" />
        
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex whitespace-nowrap items-center gap-8 md:gap-16 w-max"
        >
          {marqueeItems.map((item, i) => (
            <div key={i} className="flex items-center gap-8 md:gap-16">
              <span className="text-xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-white uppercase tracking-widest">
                {item}
              </span>
              <Star className="w-6 h-6 md:w-8 md:h-8 text-brand-600 shrink-0 fill-brand-600/20" />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative rounded-[2.5rem] border border-border/50 bg-card/40 backdrop-blur-3xl p-8 md:p-16 overflow-hidden shadow-2xl">
            {/* Background decorative glows */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-500/10 rounded-full blur-[80px]" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-500/10 rounded-full blur-[80px]" />
            
            {/* Grid texture */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay" />

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-brand-500/10 flex items-center justify-center mb-8 border border-brand-500/20 shadow-[0_0_30px_rgba(56,87,35,0.2)]">
                <Quote className="w-8 h-8 text-brand-500" />
              </div>

              <p className="text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.4] text-foreground mb-12 max-w-4xl text-balance">
                &ldquo;With a solid foundation built over four decades, <span className="text-brand-600 dark:text-brand-400 font-bold">RÖLTEK TRADING PLC</span> continues to thrive as a leading wholesaler in IVECO&reg; truck and trailer spare parts in Ethiopia. Its focus on quality, logistical expertise, brand development, and an experienced team positions it well for future growth and success.&rdquo;
              </p>

              <div className="flex flex-wrap gap-4 justify-center items-center">
                <div className="h-px w-12 bg-border hidden sm:block" />
                <span className="font-bold text-muted-foreground tracking-widest text-sm uppercase">Executive Summary</span>
                <div className="h-px w-12 bg-border hidden sm:block" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
