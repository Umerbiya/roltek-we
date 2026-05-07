"use client";

import { motion } from "framer-motion";
import { Eye, Compass, Heart, Users, Award, Zap, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Zap,
    title: "We give 110%",
    body: "We believe in going above and beyond in everything we do — from sourcing the right part to delivering it on time.",
  },
  {
    icon: Heart,
    title: "Customer First",
    body: "We care deeply about our customers and foster a consumer-first mindset in every decision we make.",
  },
  {
    icon: Award,
    title: "Decades of Expertise",
    body: "Decades of experience and deep knowledge of the aftermarket and OEM spare parts market in Ethiopia.",
  },
  {
    icon: Users,
    title: "A Great Team",
    body: "A passionate, experienced team united by a shared commitment to keeping IVECO vehicles on Ethiopian roads.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function MissionPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-brand-900 text-white py-20 md:py-28">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-600 rounded-full blur-[120px] opacity-30" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-brand-400 rounded-full blur-[100px] opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="inline-block bg-brand-600/40 border border-brand-400/40 text-brand-200 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              Purpose &amp; Direction
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-5 leading-tight">
              Our Mission,{" "}
              <span className="text-brand-300">Vision</span> &amp; Values
            </h1>
            <p className="text-xl text-brand-100 font-semibold">
              Driving Excellence in the Ethiopian Automotive Parts Industry
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Vision ── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative rounded-3xl border-2 border-primary/30 bg-gradient-to-br from-brand-50 to-brand-100 p-8 md:p-12 overflow-hidden shadow-lg">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                <div className="shrink-0 p-5 bg-primary/15 rounded-2xl text-primary">
                  <Eye className="w-12 h-12" />
                </div>
                <div>
                  <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">Our Vision</span>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-5">
                    Leading Supplier of Italian Vehicle Parts in Ethiopia
                  </h2>
                  <p className="text-foreground/80 text-lg leading-relaxed">
                    Our vision is to be the leading supplier of Italian heavy and light goods vehicle spare parts in Ethiopia.
                    Our goal is to build on our national supply networks of parts for the Italian rolling stock
                    that&apos;s been around for decades.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="py-4 md:py-8 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative rounded-3xl border-2 border-brand-300/40 bg-gradient-to-br from-brand-900 to-brand-950 text-white p-8 md:p-12 overflow-hidden shadow-xl">
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-brand-600/30 rounded-full blur-3xl" />
              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                <div className="shrink-0 p-5 bg-white/10 rounded-2xl text-brand-300">
                  <Compass className="w-12 h-12" />
                </div>
                <div>
                  <span className="text-xs font-bold text-brand-300 uppercase tracking-widest mb-3 block">Our Mission</span>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-5 text-white">
                    Continuous Improvement, Best Quality, Best Prices
                  </h2>
                  <p className="text-brand-100/80 text-lg leading-relaxed">
                    Our goal is to continuously improve and enlarge our product line, ensure the best quality, provide
                    the best logistics service, and offer the best prices, all while paying attention to environmental
                    issues and safety. We are here to ensure IVECO remains the most robust vehicle on the roads in Ethiopia.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest mb-3 block">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">What We Stand For</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              A range of spare parts developed specifically for Ethiopia to meet the needs of the market.
              Our parts are easily available throughout the country for IVECO vehicles dating back to the 1950s.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((val, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col gap-4 p-6 rounded-2xl border bg-background hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-3 bg-primary/10 rounded-xl text-primary w-fit group-hover:bg-primary/20 transition-colors">
                  <val.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg">{val.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{val.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-16 md:py-20 bg-background border-t">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-8 h-8 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Partner with RÖLTEK?</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Discover our full range of IVECO spare parts or get in touch with our expert team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/products">Browse Products</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
