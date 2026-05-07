"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Settings, Cog, Disc, Zap, Move, Truck, Thermometer, Droplet } from "lucide-react";
import Link from "next/link";
import React, { useRef } from "react";

const categories = [
  {
    icon: Cog,
    title: "Engine Systems",
    count: "500+",
    color: "from-red-500 to-rose-700",
    bgAccent: "group-hover:bg-red-500/10",
    preview: ["Pistons", "Gaskets", "Oil Filters"],
  },
  {
    icon: Settings,
    title: "Transmission & Drivetrain",
    count: "450+",
    color: "from-blue-500 to-indigo-700",
    bgAccent: "group-hover:bg-blue-500/10",
    preview: ["Clutch Kits", "Gearbox Parts", "Axle Components"],
  },
  {
    icon: Disc,
    title: "Braking Systems",
    count: "380+",
    color: "from-orange-500 to-amber-700",
    bgAccent: "group-hover:bg-orange-500/10",
    preview: ["Brake Pads", "Discs", "Calipers"],
  },
  {
    icon: Zap,
    title: "Electrical Systems",
    count: "420+",
    color: "from-yellow-400 to-amber-600",
    bgAccent: "group-hover:bg-yellow-500/10",
    preview: ["Batteries", "Alternators", "Wiring Harnesses"],
  },
  {
    icon: Move,
    title: "Suspension & Steering",
    count: "350+",
    color: "from-purple-500 to-violet-700",
    bgAccent: "group-hover:bg-purple-500/10",
    preview: ["Springs", "Dampers", "Steering Racks"],
  },
  {
    icon: Truck,
    title: "Body & Cabin",
    count: "600+",
    color: "from-emerald-400 to-brand-600",
    bgAccent: "group-hover:bg-brand-500/10",
    preview: ["Mirrors", "Lights", "Interior Trim"],
  },
  {
    icon: Thermometer,
    title: "Cooling Systems",
    count: "280+",
    color: "from-cyan-400 to-blue-600",
    bgAccent: "group-hover:bg-cyan-500/10",
    preview: ["Radiators", "Thermostats", "Hoses"],
  },
  {
    icon: Droplet,
    title: "Fuel Systems",
    count: "310+",
    color: "from-pink-500 to-rose-600",
    bgAccent: "group-hover:bg-pink-500/10",
    preview: ["Injectors", "Pumps", "Filters"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
  },
};

function TiltCard({ cat }: { cat: typeof categories[0] }) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div variants={itemVariants} className="perspective-1000">
      <Link href="#category-details" className="block outline-none group">
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className={`relative h-full flex flex-col items-center justify-center p-8 rounded-3xl border border-border/40 bg-card/60 transition-colors duration-500 overflow-hidden shadow-lg hover:shadow-2xl ${cat.bgAccent}`}
        >
          {/* Animated gradient background shift */}
          <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${cat.color} transition-opacity duration-500`} />

          <div style={{ transform: "translateZ(50px)" }} className="relative z-10 w-full flex flex-col items-center">
            {/* Parts count badge */}
            <span className="absolute -top-4 -right-2 text-xs font-bold text-muted-foreground group-hover:text-foreground transition-colors px-3 py-1 bg-background/80 rounded-full border border-border shadow-sm">
              {cat.count} parts
            </span>

            {/* Large Animated Icon */}
            <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 bg-gradient-to-br ${cat.color} shadow-lg group-hover:scale-110 transition-transform duration-500`}>
              <cat.icon className="w-12 h-12 text-white" />
            </div>

            {/* Title */}
            <h3 className={`font-bold text-xl text-center mb-2 bg-clip-text text-transparent bg-gradient-to-br ${cat.color} group-hover:scale-105 transition-transform duration-300`}>
              {cat.title}
            </h3>

            {/* Slide up preview */}
            <div className="h-0 overflow-hidden opacity-0 group-hover:h-[80px] group-hover:opacity-100 group-hover:mt-4 transition-all duration-500 flex flex-col items-center gap-2">
              {cat.preview.map((p, i) => (
                <span key={i} className="text-sm font-medium text-muted-foreground/90 bg-muted px-3 py-1 rounded-md w-full text-center">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export function CategoryGrid() {
  return (
    <section id="categories" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 text-brand-700 text-sm font-semibold uppercase tracking-wider mb-6"
          >
            Explore Our Catalog
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Premium Parts Categories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
          >
            Select a category to view our extensive inventory of genuine OEM and high-quality aftermarket components.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {categories.map((cat, i) => (
            <TiltCard key={i} cat={cat} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
