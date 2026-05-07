"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { Package, Wrench, Headset, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    icon: Package,
    title: "Genuine OEM Parts",
    description: "Authentic manufacturer parts engineered for your exact vehicle specifications with full warranty coverage.",
    linkText: "Browse OEM Catalog",
    href: "/products",
  },
  {
    icon: Wrench,
    title: "Quality Aftermarket",
    description: "Certified aftermarket alternatives offering excellent value without compromising on performance or safety.",
    linkText: "View Alternatives",
    href: "/products",
  },
  {
    icon: Headset,
    title: "Technical Support",
    description: "Expert guidance from seasoned professionals to help you find the perfect part for your specific operational needs.",
    linkText: "Contact Experts",
    href: "/contact",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number] } },
};

export function ServicesPreview() {
  return (
    <section className="py-20 md:py-32 relative bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Comprehensive <span className="gradient-text-static">Parts Solutions</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to keep your IVECO fleet running at peak performance.
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col p-8 rounded-3xl glass-card transition-all duration-400 overflow-hidden border border-foreground/10 hover:border-[#385723]/50 hover:bg-foreground/[0.02]"
            >
              {/* Highlight accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#385723] to-[#a5c68b] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              
              {/* Corner Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#385723]/10 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Icon */}
              <div className="relative mb-8">
                {/* Animated Background Gradient */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: "linear-gradient(135deg, rgba(56,87,35,0.3) 0%, rgba(165,198,139,0.1) 100%)" }}
                />
                <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-[#385723]/10 border border-[#385723]/20 transition-transform duration-500 group-hover:scale-105 group-hover:shadow-[0_4px_20px_rgba(56,87,35,0.2)]">
                  <service.icon className="w-8 h-8 text-[#a5c68b] transition-transform duration-500 group-hover:rotate-[15deg]" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-[#385723] dark:group-hover:text-[#a5c68b] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>

              {/* CTA Button */}
              <Link
                href={service.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-[#385723] dark:hover:text-[#a5c68b] mt-auto"
              >
                <span>{service.linkText}</span>
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-foreground/5 border border-foreground/10 group-hover:bg-[#385723]/10 group-hover:border-[#385723]/30 transition-all duration-300">
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
