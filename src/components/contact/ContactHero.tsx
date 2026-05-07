"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Mail, ArrowRight } from "lucide-react";

const particles = [
  { top: "20%", left: "8%", size: 5, dur: 10, delay: 0.3 },
  { top: "60%", left: "92%", size: 3, dur: 12, delay: 1.7 },
  { top: "80%", left: "55%", size: 4, dur: 8, delay: 0.8 },
  { top: "35%", left: "72%", size: 3, dur: 9, delay: 2.5 },
];

export function ContactHero() {
  return (
    <section
      className="relative text-white py-28 md:py-36 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a0f0a 0%, #1a2e1a 55%, #0f1f0f 100%)",
        paddingTop: "calc(4rem + 3.5rem)",
      }}
    >
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(165,198,139,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(165,198,139,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full blur-3xl opacity-20"
          style={{ background: "radial-gradient(circle, #385723 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full blur-3xl opacity-12"
          style={{ background: "radial-gradient(circle, #4a7030 0%, transparent 70%)" }} />
      </div>

      {/* Particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{ top: p.top, left: p.left, width: p.size, height: p.size, background: "rgba(165,198,139,0.5)" }}
          animate={{ y: [0, -16, 8, 0], opacity: [0.3, 0.65, 0.3] }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10 max-w-7xl text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-7"
          style={{ background: "rgba(56,87,35,0.35)", border: "1px solid rgba(165,198,139,0.3)", color: "#a5c68b" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#a5c68b] animate-pulse" />
          We&apos;re Here to Help
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.05] mx-auto"
        >
          Get in <span className="gradient-text">Touch</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto mb-10"
        >
          We&apos;re here to support your IVECO parts needs — from quick availability checks
          to wholesale pricing and nationwide delivery.
        </motion.p>

        {/* Quick contact links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="tel:+251911870000"
            className="shimmer-btn group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-white transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_8px_30px_rgba(56,87,35,0.5)]"
            style={{ background: "linear-gradient(90deg, #385723 0%, #4a7030 100%)" }}
          >
            <Phone className="w-4 h-4" />
            Call Us Now
          </a>
          <a
            href="mailto:abdulfeta@roltek.et"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300"
            style={{ border: "1px solid rgba(255,255,255,0.2)" }}
          >
            <Mail className="w-4 h-4" />
            Send Email
          </a>
          <Link
            href="#contact-form"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300"
            style={{ border: "1px solid rgba(255,255,255,0.2)" }}
          >
            Fill the Form
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(10,15,10,0.5))" }} />
    </section>
  );
}
