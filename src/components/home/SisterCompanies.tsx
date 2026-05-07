"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Truck, Factory, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const COMPANIES = [
  {
    name: "RÖLTEK TRADING PLC",
    tagline: "IVECO Spare Parts Excellence",
    description: "Premium OEM and aftermarket spare parts for IVECO trucks and trailers across Ethiopia.",
    icon: Truck,
    href: "/products",
    cta: "Explore Products",
    featured: true,
  },
  {
    name: "DANGTS",
    tagline: "Sister Company - Industrial Solutions",
    description: "Engaged in the import and export of vehicles, bitumen, scrap metal, and other commodities, serving both local and international markets.",
    icon: Factory,
    href: "http://dangts.et/", // External or specific route
    cta: "Visit Website",
    featured: false,
  },
  {
    name: "ETS Kassa FZE",
    tagline: "International Trading Partner",
    description: "A free zone enterprise focused on international trade, warehousing, procurement, and logistics across multiple product categories.",
    icon: Globe,
    href: "http://ets-kassafze.com/",
    cta: "Contact Hub",
    featured: false,
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
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number] } },
};

export function SisterCompanies() {
  return (
    <section className="py-20 md:py-32 relative bg-background overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ background: "radial-gradient(circle at 50% 0%, #385723 0%, transparent 60%)" }} />

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
              Our Family of <span className="gradient-text-static">Companies</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Part of a comprehensive automotive solutions network delivering excellence across borders.
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {COMPANIES.map((company) => (
            <motion.div
              key={company.name}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className={cn(
                "group relative flex flex-col p-8 rounded-3xl transition-all duration-400 overflow-hidden",
                company.featured
                  ? "bg-[#385723]/5 border border-[#385723]/30 shadow-[0_8px_32px_rgba(56,87,35,0.1)] lg:scale-105 z-10"
                  : "glass-card hover:bg-foreground/[0.03] border-foreground/10 hover:border-foreground/20"
              )}
            >
              {/* Highlight for featured */}
              {company.featured && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#385723] to-[#a5c68b]" />
              )}

              {/* Icon */}
              <div
                className={cn(
                  "w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110",
                  company.featured ? "bg-gradient-to-br from-[#385723] to-[#4a7030] shadow-[0_4px_20px_rgba(56,87,35,0.4)]" : "bg-foreground/5"
                )}
              >
                <company.icon className={cn("w-8 h-8", company.featured ? "text-white" : "text-foreground/70")} />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className={cn("text-2xl font-bold mb-2", company.featured ? "text-[#385723] dark:text-[#a5c68b]" : "text-foreground")}>
                  {company.name}
                </h3>
                <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                  {company.tagline}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {company.description}
                </p>
              </div>

              {/* CTA */}
              <Link
                href={company.href}
                target="_blank"
                className={cn(
                  "inline-flex items-center justify-between w-full px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300",
                  company.featured
                    ? "bg-[#385723] text-white hover:bg-[#4a7030] hover:shadow-[0_4px_16px_rgba(56,87,35,0.4)]"
                    : "bg-transparent border border-foreground/20 text-foreground hover:bg-foreground hover:text-background"
                )}
              >
                {company.cta}
                <ArrowRight className={cn("w-4 h-4 transition-transform duration-300", company.featured ? "group-hover:translate-x-1" : "group-hover:translate-x-1")} />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
