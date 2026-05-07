"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";

export function TeamCTA() {
  return (
    <section className="relative py-24 md:py-32 bg-brand-950 overflow-hidden text-white flex items-center justify-center">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,87,35,0.4)_0%,transparent_70%)] opacity-50" />
      
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto flex flex-col items-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-brand-500/20 flex items-center justify-center mb-8 border border-brand-500/30">
            <Users className="w-8 h-8 text-brand-400" />
          </div>

          <span className="inline-block bg-brand-900 border border-brand-700 text-brand-300 text-sm font-semibold uppercase tracking-widest px-5 py-2 rounded-full mb-6">
            Careers at RÖLTEK
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Join Our Team
          </h2>
          
          <p className="text-brand-100/70 text-xl mb-12 max-w-2xl mx-auto leading-relaxed text-balance">
            We are always looking for passionate individuals who share our commitment to quality, expertise, and serving the Ethiopian automotive market. If that sounds like you, we&apos;d love to hear from you.
          </p>
          
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-semibold text-lg text-brand-950 transition-all duration-300 hover:scale-[1.04] overflow-hidden shadow-[0_0_40px_rgba(165,198,139,0.3)] bg-brand-300 hover:bg-brand-200"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Opportunities
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
