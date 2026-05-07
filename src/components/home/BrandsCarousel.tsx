"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

/* ─── Data ──────────────────────────────────────────────── */

interface Brand {
  name: string;
  logo: string;
  primary?: boolean;
  highlight?: boolean;
}

const BRANDS: Brand[] = [
  { name: "IVECO", logo: "/our_brands/p1.png" },
  { name: "ZF", logo: "/our_brands/p2.png" },
  { name: "ERREVI", logo: "/our_brands/p3.png" },
  { name: "ASBO", logo: "/our_brands/p4.png" },
  { name: "SAMPA", logo: "/our_brands/p5.png" },
  { name: "RÖLTEK", logo: "/our_brands/p6.png" },
  { name: "LECRAI", logo: "/our_brands/p7.png" },
  { name: "CORTECO", logo: "/our_brands/p8.png" },
  { name: "CEI", logo: "/our_brands/p9.png", },
  { name: "MEGORI", logo: "/our_brands/p10.png", },
  { name: "SACHS", logo: "/our_brands/p11.png" },
  { name: "CNH Industrial", logo: "/our_brands/p6.png" },
  { name: "CNC Driveline", logo: "/our_brands/p7.png" },
];

/* ─── Components ────────────────────────────────────────── */

function BrandCard({ brand }: { brand: Brand }) {
  return (
    <div
      className={cn(
        "relative flex flex-col col- items-center justify-center gap-3 rounded-2xl flex-shrink-0 transition-all duration-400 group cursor-pointer",
        brand.primary ? "w-[200px] h-[120px] md:w-[240px] md:h-[140px]" : "w-[160px] h-[100px] md:w-[200px] md:h-[120px]",
        brand.highlight ? "glass-card-hover border-[#a5c68b]/30" : "glass-card"
      )}
      style={{
        boxShadow: brand.highlight ? "0 8px 32px rgba(56,87,35,0.25)" : undefined,
      }}
    >
      {/* Hover glow border */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none border border-[#a5c68b] shadow-[0_0_15px_rgba(165,198,139,0.3)_inset]" />

      {/* Icon */}
      <Image
        src={brand.logo}
        alt=""
        fill={true}
        className={cn(
          "transition-all duration-400",
          brand.primary ? "w-12 h-12 md:w-16 md:h-16" : "w-8 h-8 md:w-10 md:h-10",
          brand.highlight ? "text-[#a5c68b]" : "text-white/40 group-hover:text-[#a5c68b] group-hover:scale-110"
        )}
      />

      {/* Name */}
      <span
        className={cn(
          "font-heading font-bold tracking-wider transition-colors duration-400",
          brand.primary ? "text-lg md:text-xl" : "text-sm md:text-base",
          brand.highlight ? "text-[#a5c68b]" : "text-white/40 group-hover:text-white"
        )}
      >
        {brand.name}
      </span>

      {/* Primary/Highlight indicators */}
      {brand.primary && !brand.highlight && (
        <span className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#a5c68b] transition-colors" />
      )}
      {brand.highlight && (
        <span className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-[#a5c68b] animate-pulse" />
      )}
    </div>
  );
}

export function BrandsCarousel() {
  // Setup Embla with loop and autoplay
  const [emblaRef] = useEmblaCarousel(
    { loop: true, dragFree: true, containScroll: "trimSnaps" },
    [Autoplay({ delay: 3000, playOnInit: true, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-background to-background/95">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{ background: "radial-gradient(ellipse at center, rgba(56,87,35,0.15) 0%, transparent 70%)" }} />

      <div className="container mx-auto px-4 md:px-6 mb-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border border-[#385723]/30 text-[#a5c68b] bg-[#385723]/10">
            Our Network
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Our Trusted <span className="gradient-text-static">Brand Partners</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We collaborate with world-leading manufacturers and dealers to deliver authentic, high-quality spare parts for your entire fleet.
          </p>
        </motion.div>
      </div>

      {/* Carousel */}
      <div className="relative max-w-[100vw] mx-auto">
        {/* Edge masks for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex items-center gap-y-4 gap-x-4 md:gap-x-24 py-4 px-4 md:px-8" style={{ willChange: 'transform', transitionTimingFunction: 'linear' }}>
            {/* Render 3 sets of the brands array to ensure seamless infinite scroll */}
            {[...BRANDS, ...BRANDS, ...BRANDS].map((brand, index) => (
              <div key={`${brand.name}-${index}`} className="flex-[0_0_auto]">
                <BrandCard brand={brand} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS override for Embla smooth continuous scrolling */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .embla__container { transition-timing-function: linear !important; }
      `}} />
    </section>
  );
}
