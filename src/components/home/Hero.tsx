"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MessageCircle, ChevronDown } from "lucide-react";
import { StatCounter } from "@/components/home/StatCounter";
import { FloatingTruckParts } from "@/components/about/FloatingTruckParts";

/* ─── Particles ──────────────────────────────────────── */
const PARTICLES = [
  { id: 1, top: "12%", left: "8%", size: 5, dur: 8, delay: 0 },
  { id: 2, top: "28%", left: "88%", size: 3, dur: 11, delay: 1.5 },
  { id: 3, top: "65%", left: "5%", size: 7, dur: 9, delay: 0.8 },
  { id: 4, top: "80%", left: "92%", size: 4, dur: 13, delay: 3 },
  { id: 5, top: "45%", left: "78%", size: 3, dur: 7, delay: 2.2 },
  { id: 6, top: "18%", left: "50%", size: 5, dur: 10, delay: 0.3 },
  { id: 7, top: "72%", left: "35%", size: 3, dur: 12, delay: 1.1 },
  { id: 8, top: "35%", left: "18%", size: 6, dur: 8, delay: 2.7 },
  { id: 9, top: "55%", left: "60%", size: 4, dur: 9, delay: 0.5 },
  { id: 10, top: "88%", left: "70%", size: 3, dur: 11, delay: 1.8 },
  { id: 11, top: "8%", left: "72%", size: 4, dur: 14, delay: 3.5 },
  { id: 12, top: "22%", left: "32%", size: 3, dur: 10, delay: 4.1 },
] as const;

/* ─── Noise SVG ──────────────────────────────────────── */
const NOISE = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

/* ─── IVECO Truck SVG Illustration ───────────────────── */
function TruckIllustration() {
  return (
    <svg viewBox="0 0 520 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[520px]">
      {/* Cab shadow */}
      <ellipse cx="180" cy="295" rx="130" ry="12" fill="rgba(56,87,35,0.35)" />
      <ellipse cx="400" cy="295" rx="90" ry="10" fill="rgba(56,87,35,0.25)" />

      {/* Trailer body */}
      <rect x="220" y="100" width="280" height="170" rx="6" fill="url(#trailerGrad)" />
      <rect x="220" y="100" width="280" height="170" rx="6" stroke="rgba(165,198,139,0.3)" strokeWidth="1" />
      {/* Trailer ribs */}
      {[260, 300, 340, 380, 420, 460].map(x => (
        <line key={x} x1={x} y1="105" x2={x} y2="265" stroke="rgba(165,198,139,0.12)" strokeWidth="1" />
      ))}
      {/* Trailer top stripe */}
      <rect x="220" y="100" width="280" height="8" rx="3" fill="url(#stripeGrad)" />
      {/* ROLTEK text on trailer */}
      <text x="310" y="195" fill="rgba(165,198,139,0.55)" fontSize="22" fontWeight="700" fontFamily="system-ui" letterSpacing="4">RÖLTEK</text>
      <text x="320" y="215" fill="rgba(165,198,139,0.3)" fontSize="10" fontFamily="system-ui" letterSpacing="3">TRADING PLC</text>

      {/* Cab body */}
      <path d="M60 155 L60 265 L230 265 L230 100 L160 100 L100 130 L60 155Z" fill="url(#cabGrad)" />
      <path d="M60 155 L60 265 L230 265 L230 100 L160 100 L100 130 L60 155Z" stroke="rgba(165,198,139,0.25)" strokeWidth="1.5" />

      {/* Windshield */}
      <path d="M105 135 L165 108 L225 108 L225 158 L105 158Z" fill="url(#glassGrad)" />
      <path d="M105 135 L165 108 L225 108 L225 158 L105 158Z" stroke="rgba(165,198,139,0.4)" strokeWidth="1" />
      {/* Windshield glare */}
      <path d="M120 138 L170 112 L195 112 L195 125 L120 148Z" fill="rgba(255,255,255,0.07)" />

      {/* Cab door */}
      <rect x="65" y="165" width="60" height="80" rx="3" fill="rgba(56,87,35,0.3)" stroke="rgba(165,198,139,0.2)" strokeWidth="1" />
      {/* Door handle */}
      <rect x="110" y="202" width="12" height="4" rx="2" fill="rgba(165,198,139,0.5)" />

      {/* Side mirror */}
      <rect x="42" y="148" width="18" height="12" rx="2" fill="rgba(56,87,35,0.6)" stroke="rgba(165,198,139,0.3)" strokeWidth="1" />
      <line x1="60" y1="152" x2="65" y2="155" stroke="rgba(165,198,139,0.4)" strokeWidth="1.5" />

      {/* Front bumper */}
      <rect x="48" y="235" width="20" height="30" rx="3" fill="url(#bumperGrad)" />
      <rect x="45" y="255" width="26" height="8" rx="2" fill="rgba(165,198,139,0.2)" stroke="rgba(165,198,139,0.3)" strokeWidth="1" />

      {/* Headlights */}
      <rect x="50" y="170" width="14" height="10" rx="2" fill="url(#lightGrad)" />
      <rect x="50" y="185" width="14" height="6" rx="1" fill="rgba(165,198,139,0.2)" />

      {/* Grille */}
      {[195, 202, 209, 216, 223].map(y => (
        <rect key={y} x="52" y={y} width="10" height="2" rx="1" fill="rgba(165,198,139,0.25)" />
      ))}

      {/* Exhaust stack */}
      <rect x="205" y="68" width="8" height="35" rx="4" fill="rgba(74,112,48,0.6)" stroke="rgba(165,198,139,0.3)" strokeWidth="1" />
      <ellipse cx="209" cy="68" rx="5" ry="3" fill="rgba(56,87,35,0.8)" />

      {/* Fuel tank */}
      <rect x="135" y="225" width="65" height="38" rx="6" fill="rgba(40,65,25,0.7)" stroke="rgba(165,198,139,0.2)" strokeWidth="1" />

      {/* Front axle */}
      <rect x="50" y="260" width="175" height="8" rx="2" fill="rgba(30,48,20,0.8)" />
      {/* Rear axle */}
      <rect x="290" y="260" width="200" height="8" rx="2" fill="rgba(30,48,20,0.8)" />

      {/* Wheels — front */}
      <circle cx="100" cy="282" r="26" fill="url(#wheelGrad)" />
      <circle cx="100" cy="282" r="18" fill="rgba(20,30,15,0.9)" />
      <circle cx="100" cy="282" r="10" fill="rgba(56,87,35,0.5)" />
      {[0, 60, 120, 180, 240, 300].map(a => (
        <line key={a} x1={100 + 10 * Math.cos(a * Math.PI / 180)} y1={282 + 10 * Math.sin(a * Math.PI / 180)}
          x2={100 + 18 * Math.cos(a * Math.PI / 180)} y2={282 + 18 * Math.sin(a * Math.PI / 180)}
          stroke="rgba(165,198,139,0.3)" strokeWidth="1.5" />
      ))}

      {/* Wheels — rear left */}
      <circle cx="345" cy="282" r="26" fill="url(#wheelGrad)" />
      <circle cx="345" cy="282" r="18" fill="rgba(20,30,15,0.9)" />
      <circle cx="345" cy="282" r="10" fill="rgba(56,87,35,0.5)" />
      {[0, 60, 120, 180, 240, 300].map(a => (
        <line key={a} x1={345 + 10 * Math.cos(a * Math.PI / 180)} y1={282 + 10 * Math.sin(a * Math.PI / 180)}
          x2={345 + 18 * Math.cos(a * Math.PI / 180)} y2={282 + 18 * Math.sin(a * Math.PI / 180)}
          stroke="rgba(165,198,139,0.3)" strokeWidth="1.5" />
      ))}

      {/* Wheels — rear right */}
      <circle cx="430" cy="282" r="26" fill="url(#wheelGrad)" />
      <circle cx="430" cy="282" r="18" fill="rgba(20,30,15,0.9)" />
      <circle cx="430" cy="282" r="10" fill="rgba(56,87,35,0.5)" />
      {[0, 60, 120, 180, 240, 300].map(a => (
        <line key={a} x1={430 + 10 * Math.cos(a * Math.PI / 180)} y1={282 + 10 * Math.sin(a * Math.PI / 180)}
          x2={430 + 18 * Math.cos(a * Math.PI / 180)} y2={282 + 18 * Math.sin(a * Math.PI / 180)}
          stroke="rgba(165,198,139,0.3)" strokeWidth="1.5" />
      ))}

      {/* Connection hitch */}
      <rect x="215" y="198" width="12" height="22" rx="2" fill="rgba(50,75,35,0.8)" />

      {/* IVECO badge on cab */}
      <rect x="75" y="158" width="50" height="14" rx="3" fill="rgba(56,87,35,0.7)" stroke="rgba(165,198,139,0.4)" strokeWidth="1" />
      <text x="99" y="169" fill="rgba(165,198,139,0.9)" fontSize="8" fontWeight="700" fontFamily="system-ui" textAnchor="middle" letterSpacing="2">IVECO</text>

      {/* Gradients */}
      <defs>
        <linearGradient id="trailerGrad" x1="220" y1="100" x2="500" y2="270" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1a2e1a" />
          <stop offset="50%" stopColor="#253d20" />
          <stop offset="100%" stopColor="#1a2e1a" />
        </linearGradient>
        <linearGradient id="cabGrad" x1="60" y1="100" x2="230" y2="265" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2a4220" />
          <stop offset="100%" stopColor="#1a2e1a" />
        </linearGradient>
        <linearGradient id="glassGrad" x1="105" y1="108" x2="225" y2="158" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(120,180,100,0.22)" />
          <stop offset="100%" stopColor="rgba(60,100,50,0.12)" />
        </linearGradient>
        <linearGradient id="stripeGrad" x1="220" y1="0" x2="500" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(56,87,35,0.6)" />
          <stop offset="50%" stopColor="rgba(165,198,139,0.5)" />
          <stop offset="100%" stopColor="rgba(56,87,35,0.6)" />
        </linearGradient>
        <linearGradient id="bumperGrad" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="rgba(56,87,35,0.6)" />
          <stop offset="100%" stopColor="rgba(30,48,20,0.9)" />
        </linearGradient>
        <radialGradient id="lightGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(200,220,160,0.95)" />
          <stop offset="100%" stopColor="rgba(165,198,139,0.4)" />
        </radialGradient>
        <radialGradient id="wheelGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(56,87,35,0.5)" />
          <stop offset="60%" stopColor="rgba(30,48,20,0.9)" />
          <stop offset="100%" stopColor="rgba(15,25,10,1)" />
        </radialGradient>
      </defs>
    </svg>
  );
}

/* ─── Hero Visual Panel ──────────────────────────────── */
function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60, filter: "blur(16px)" }}
      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      transition={{ duration: 1.0, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className="relative flex items-center justify-center"
    >
      {/* Outer glow ring */}
      <div
        className="absolute inset-[-30px] rounded-3xl pointer-events-none animate-ring-pulse"
        style={{ background: "radial-gradient(ellipse at center, rgba(56,87,35,0.28) 0%, transparent 70%)", filter: "blur(20px)" }}
      />
      {/* Panel */}
      <div
        className="relative rounded-3xl overflow-hidden scan-line-container"
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(165,198,139,0.15)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 24px 80px rgba(56,87,35,0.3), inset 0 1px 0 rgba(165,198,139,0.1)",
          padding: "32px 28px 16px",
        }}
      >
        {/* Top accent bar */}
        <div className="absolute top-0 left-8 right-8 h-px rounded-full" style={{ background: "linear-gradient(90deg, transparent, rgba(165,198,139,0.5), transparent)" }} />

        {/* Truck */}
        <div className="animate-truck-float">
          <TruckIllustration />
        </div>

        {/* Stats row beneath truck */}
        <div className="grid grid-cols-3 gap-3 mt-4">
          {[
            { val: "200+", label: "Engine Parts" },
            { val: "1000+", label: "SKUs In Stock" },
            { val: "40+", label: "Yrs Experience" },
          ].map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center gap-1 py-3 rounded-2xl"
              style={{ background: "rgba(56,87,35,0.18)", border: "1px solid rgba(165,198,139,0.12)" }}
            >
              <span className="text-lg font-bold text-white tabular-nums">{s.val}</span>
              <span className="text-[9px] text-white/40 uppercase tracking-widest">{s.label}</span>
            </div>
          ))}
        </div>

        {/* IVECO badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
          className="absolute top-1 right-1 px-3 py-1.5 rounded-full text-[10px] font-bold text-white"
          style={{
            background: "linear-gradient(90deg, #385723 0%, #4a7030 100%)",
            border: "1px solid rgba(255,255,255,0.2)",
            boxShadow: "0 4px 20px rgba(56,87,35,0.55)",
          }}
        >
          ✓ IVECO Authorized
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ─── Scroll Indicator ───────────────────────────────── */
function ScrollIndicator() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const h = () => setVisible(window.scrollY < 200);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 2.5, duration: 0.7 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer select-none"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        >
          <span className="text-[10px] text-white/35 uppercase tracking-[0.2em] font-medium">Scroll to explore</span>
          <motion.div animate={{ y: [0, 8, 0], opacity: [0.35, 0.85, 0.35] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
            <ChevronDown className="w-5 h-5 text-white/40" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─── Badge ──────────────────────────────────────────── */
function HeroBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.6 }}
      className="inline-flex items-center gap-2.5 self-start px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider"
      style={{ background: "rgba(56,87,35,0.22)", border: "1px solid rgba(165,198,139,0.28)", color: "#a5c68b" }}
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-heartbeat absolute inline-flex h-full w-full rounded-full bg-[#a5c68b] opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#a5c68b]" />
      </span>
      Ethiopia&apos;s #1 IVECO Parts Specialist
    </motion.div>
  );
}

/* ─── Headline with word-by-word reveal ──────────────── */
const words = ["40+", "Years", "of", "IVECO", "Expertise", "in", "Ethiopia"];
function HeroHeadline() {
  return (
    <h1
      className="font-heading font-bold leading-[1.06] tracking-[-0.025em]"
      style={{ fontSize: "clamp(42px, 6vw, 78px)" }}
    >
      <span className="flex flex-wrap gap-x-[0.25em]">
        {words.map((word, i) => (
          <motion.span
            key={word + i}
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.65, delay: 0.12 + i * 0.1, ease: [0.4, 0, 0.2, 1] }}
            className={i < 2 || i === 3 || i === 4 ? "gradient-text" : "text-white"}
          >
            {word}
          </motion.span>
        ))}
      </span>
    </h1>
  );
}

/* ─── Sub-headline ───────────────────────────────────── */
function HeroSubheadline() {
  return (
    <motion.p
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.9, ease: [0.4, 0, 0.2, 1] }}
      className="text-lg md:text-xl text-white/60 leading-[1.75] max-w-xl"
    >
      Leading the Ethiopian market with premium OEM and trusted aftermarket spare parts for IVECO trucks and trailers — keeping your fleet on the road.
    </motion.p>
  );
}

/* ─── CTA Buttons ────────────────────────────────────── */
function HeroCTAs() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 1.1, ease: [0.4, 0, 0.2, 1] }}
      className="flex flex-col sm:flex-row gap-4"
    >
      <Link
        href="/products"
        className="shimmer-btn group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-white transition-all duration-300 hover:scale-[1.05] active:scale-[0.97] animate-cta-glow"
        style={{ background: "linear-gradient(90deg, #385723 0%, #4a7030 50%, #385723 100%)", backgroundSize: "200% 100%" }}
      >
        View Products
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
      </Link>
      <Link
        href="/contact"
        className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-white/75 transition-all duration-300 hover:text-white hover:bg-white/10 active:scale-[0.97]"
        style={{ border: "1px solid rgba(255,255,255,0.18)" }}
      >
        <MessageCircle className="w-4 h-4" />
        Contact Us
      </Link>
    </motion.div>
  );
}

/* ─── Particles ──────────────────────────────────────── */
function BackgroundParticles() {
  return (
    <>
      {PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{ top: p.top, left: p.left, width: p.size, height: p.size, background: "rgba(165,198,139,0.6)", boxShadow: `0 0 ${p.size * 2.5}px rgba(165,198,139,0.4)` }}
          animate={{ y: [0, -20, 10, 0], x: [0, 8, -6, 0], opacity: [0.2, 0.75, 0.3, 0.5], scale: [1, 1.5, 0.8, 1] }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </>
  );
}

/* ─── Ambient Orbs ───────────────────────────────────── */
function AmbientOrbs() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full orb-pulse"
        style={{ background: "radial-gradient(circle, rgba(56,87,35,0.25) 0%, transparent 65%)" }} />
      <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] rounded-full orb-drift"
        style={{ background: "radial-gradient(circle, rgba(74,112,48,0.18) 0%, transparent 65%)" }} />
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full orb-pulse-delayed"
        style={{ background: "radial-gradient(ellipse, rgba(56,87,35,0.14) 0%, transparent 70%)" }} />
    </div>
  );
}

/* ─── Main Hero ──────────────────────────────────────── */
export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="hero-mesh relative overflow-hidden min-h-screen flex items-center"
      style={{ paddingTop: "68px" }}
      aria-label="RÖLTEK Hero"
    >
      {/* Parallax background */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        <div className="absolute inset-0 opacity-[0.022]" style={{ backgroundImage: NOISE, backgroundRepeat: "repeat" }} />
        <div className="hero-grid absolute inset-0 opacity-[0.06]" />
        <div className="hero-vignette absolute inset-0" />
        <AmbientOrbs />
      </motion.div>

      {/* Floating Truck Parts */}
      <FloatingTruckParts />

      {/* Particles */}
      <BackgroundParticles />

      {/* Content */}
      <motion.div
        className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10 py-20 md:py-28"
        style={{ y: contentY, opacity }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-10 items-center">
          {/* Left — Text */}
          <div className="flex flex-col gap-8">
            <HeroBadge />
            <HeroHeadline />
            <HeroSubheadline />
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.0, ease: [0.4, 0, 0.2, 1] }}
            >
              <StatCounter />
            </motion.div>
            <HeroCTAs />
          </div>

          {/* Right — Truck Visual */}
          <div className="hidden lg:flex items-center justify-center">
            <HeroVisual />
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <ScrollIndicator />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(10,15,10,0.55) 70%, rgba(4,8,6,0.85) 100%)" }}
      />
    </section>
  );
}
