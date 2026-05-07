"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Home, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

// function AnimatedCounter({ from, to }: { from: number; to: number }) {
//   const nodeRef = useRef<HTMLSpanElement>(null);

//   useEffect(() => {
//     const node = nodeRef.current;
//     if (node) {
//       const controls = animate(from, to, {
//         duration: 2.5,
//         ease: "easeOut",
//         onUpdate(value) {
//           node.textContent = Math.round(value).toString();
//         },
//       });
//       return () => controls.stop();
//     }
//   }, [from, to]);

//   return <span ref={nodeRef} className="font-mono">{from}</span>;
// }

export function AboutHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden text-white py-32 md:py-48 min-h-[80vh] flex items-center"
      style={{ paddingTop: "calc(6rem + 3.5rem)" }}
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center bg-no-repeat opacity-20 mix-blend-luminosity"
        />
        {/* Ethiopia&apos;s leading importer and distributor of genuine IVECO parts, ensuring fleet reliability since the 1980s.maintain brand colors */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-950/90 via-brand-900/80 to-background" />

        {/* Mesh pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        {/* Breadcrumb Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-sm text-brand-200/60 font-medium mb-12"
        >
          <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
            <Home className="w-4 h-4" />
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-brand-300">About Us</span>
        </motion.nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.05]"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-white to-brand-300">
                40 Years of Excellence
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mb-10"
            >
              RÖLTEK TRADING PLC has been the backbone of Ethiopia&apos;s IVECO truck and trailer spare parts supply, trusted by fleet operators across the Horn of Africa.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/products"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white transition-all duration-300 hover:scale-[1.04] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-600 to-brand-400 group-hover:scale-105 transition-transform duration-300" />
                <span className="relative z-10 flex items-center gap-2">
                  Explore Products
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Animated Counter Box */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
              className="relative p-1 rounded-3xl bg-gradient-to-b from-brand-400/30 to-transparent backdrop-blur-xl"
              style={{ transformPerspective: 1000 }}
            >
              <div className="bg-brand-950/80 rounded-[22px] p-8 md:p-12 border border-brand-500/20 shadow-2xl relative overflow-hidden">
                {/* Decorative glows */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/20 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-400/10 rounded-full blur-2xl" />

                <div className="relative z-10 text-center">
                  <div className="text-sm font-semibold text-brand-300 uppercase tracking-widest">SPECIALIZING IN</div>
                  <div className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-brand-400 my-4 tracking-tighter">
                    {/* <AnimatedCounter from={1980} to={2026} /> */} IVECO
                  </div>
                  <div className="text-brand-100/60 font-medium">
                    Premium truck & trailer components
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom fade to match background */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
