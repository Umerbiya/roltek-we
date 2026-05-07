"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export function AboutCTA() {
  return (
    <section className="relative py-24 md:py-32 bg-background overflow-hidden flex items-center justify-center">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-brand-950/20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-600/20 rounded-[100%] blur-[120px] pointer-events-none opacity-50" />
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background to-transparent" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto rounded-[2.5rem] bg-card/60 backdrop-blur-2xl border border-white/10 dark:border-white/5 p-8 md:p-16 text-center shadow-2xl relative overflow-hidden"
        >
          {/* Inner card glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-1 bg-gradient-to-r from-transparent via-brand-500 to-transparent" />
          
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-balance text-foreground">
            Ready to Source <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">Premium IVECO Parts?</span>
          </h2>
          
          <p className="text-muted-foreground text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you manage a single truck or an entire commercial fleet, RÖLTEK has the parts, the expertise, and the local logistics to keep your vehicles on the road.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link
              href="/products"
              className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-[1.04] overflow-hidden bg-gradient-to-r from-brand-600 to-brand-500 shadow-[0_8px_30px_rgba(56,87,35,0.25)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-500 to-brand-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                Browse Catalog
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-foreground bg-secondary/50 hover:bg-secondary border border-border/50 hover:border-border transition-all duration-300"
            >
              <Phone className="w-5 h-5 text-muted-foreground" />
              Contact Sales
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-border/50 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground font-medium">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500" /> Fast Response
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500" /> Wholesale Pricing
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-500" /> Nationwide Shipping
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
