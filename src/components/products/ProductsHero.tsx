"use client";

import { motion } from "framer-motion";
import { Search, Cog, Wrench, Zap, ShieldCheck } from "lucide-react";
import { useState, useEffect } from "react";

const floatingIcons = [
  { Icon: Cog, top: "15%", left: "12%", size: 48, dur: 12, delay: 0 },
  { Icon: Wrench, top: "65%", left: "85%", size: 40, dur: 15, delay: 1 },
  { Icon: Zap, top: "75%", left: "20%", size: 36, dur: 14, delay: 2 },
  { Icon: ShieldCheck, top: "30%", left: "75%", size: 52, dur: 18, delay: 0.5 },
];

const typingTexts = [
  "Engineered for Excellence",
  "Built for Ethiopia",
  "Trusted Since 1980"
];

export function ProductsHero() {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % typingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative overflow-hidden text-white py-32 md:py-48"
      style={{
        background: "radial-gradient(circle at 50% 50%, #162a16 0%, #0a0f0a 100%)",
        paddingTop: "calc(6rem + 3.5rem)",
      }}
    >
      {/* 3D Mesh Gradient Overlay */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(56, 87, 35, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(74, 112, 48, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(165, 198, 139, 0.1) 0%, transparent 60%)
          `,
          filter: "blur(40px)"
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Floating Parts Icons */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute text-brand-300/20 pointer-events-none"
          style={{ top: item.top, left: item.left }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 15, -15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: item.dur,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <item.Icon size={item.size} strokeWidth={1} />
        </motion.div>
      ))}

      <div className="container mx-auto px-4 relative z-10 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Premium IVECO
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-white to-brand-300">
              Spare Parts Catalog
            </span>
          </h1>

          {/* Animated Typing Effect */}
          <div className="h-8 mb-12 flex justify-center items-center">
            <motion.p
              key={textIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl font-medium text-brand-100/90 tracking-wide"
            >
              {typingTexts[textIndex]}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block ml-[2px] w-0.5 h-6 bg-brand-300 align-middle"
              />
            </motion.p>
          </div>

          {/* Large Search Bar */}
          <div className="max-w-3xl mx-auto relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-brand-300 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative flex items-center w-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl">
              <div className="flex items-center justify-center pl-4 pr-2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <Search className="w-6 h-6 text-brand-300" />
                </motion.div>
              </div>
              <input
                type="text"
                placeholder="Search by part number, vehicle model, or category..."
                className="w-full bg-transparent border-none text-white placeholder-white/40 px-4 py-4 focus:outline-none focus:ring-0 text-lg"
              />
              <button className="bg-gradient-to-r from-brand-600 to-brand-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-brand-500/25 transition-all duration-300">
                Search
              </button>
            </div>
            
            {/* Auto-suggest dropdown placeholder (hidden by default) */}
            <div className="absolute top-full left-0 right-0 mt-2 bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden opacity-0 pointer-events-none translate-y-[-10px] transition-all duration-300 group-focus-within:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 shadow-2xl z-50 text-left">
              <div className="p-4 border-b border-white/5">
                <span className="text-xs font-semibold text-white/40 uppercase tracking-wider">Popular Searches</span>
              </div>
              <ul>
                {['Trakker Brake Pads', 'Daily Fuel Filter', 'Stralis Engine Gasket'].map((item, i) => (
                  <li key={i} className="px-4 py-3 text-white/70 hover:bg-white/5 hover:text-white cursor-pointer transition-colors flex items-center gap-3">
                    <Search className="w-4 h-4 text-white/30" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
