"use client";

import { motion } from "framer-motion";
import { ArrowRight, Wrench, Search, Phone } from "lucide-react";
import React from "react";

export function ProductsCTA() {
  return (
    <section className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-900/10 pointer-events-none transform skew-x-12 translate-x-32" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Column: Graphic / Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 text-brand-700 dark:bg-brand-900/30 dark:text-brand-300 text-sm font-semibold uppercase tracking-wider mb-6">
              <Search className="w-4 h-4" />
              Find Your Part
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Can&apos;t Find What <br /> You Need?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl">
              With thousands of parts in our inventory, chances are we have exactly what you&apos;re looking for. Send us your requirements and our experts will locate it immediately.
            </p>

            {/* Abstract Parts Graphic */}
            <div className="relative h-64 w-full max-w-md rounded-3xl border border-border/50 bg-card/30 overflow-hidden backdrop-blur-sm flex items-center justify-center group">
              {/* Animated rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-brand-500/30 rounded-full group-hover:scale-150 transition-transform duration-700" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-brand-500/20 rounded-full group-hover:scale-125 transition-transform duration-700 delay-100" />
              
              <div className="relative z-10 flex gap-6 text-brand-600 dark:text-brand-400">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
                  <Wrench className="w-16 h-16" />
                </motion.div>
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }}>
                  <Settings className="w-12 h-12" />
                </motion.div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/20 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Right Column: Request Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full max-w-xl"
          >
            <div className="bg-card/60 backdrop-blur-xl border-t border-l border-white/10 dark:border-white/5 border-b border-r border-black/10 dark:border-black/20 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              {/* Green accent border top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-400 to-brand-600" />

              <h3 className="text-2xl font-bold mb-6">Request a Quote</h3>
              
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">Vehicle Model</label>
                    <select className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/50 appearance-none">
                      <option value="">Select Model...</option>
                      <option value="s-way">IVECO S-Way</option>
                      <option value="t-way">IVECO T-Way</option>
                      <option value="stralis">IVECO Stralis</option>
                      <option value="trakker">IVECO Trakker</option>
                      <option value="eurocargo">IVECO EuroCargo</option>
                      <option value="other">Other / Older Model</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">Year</label>
                    <input 
                      type="number" 
                      placeholder="e.g. 2018"
                      className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">Part Description / Part Number</label>
                  <textarea 
                    rows={3}
                    placeholder="Describe what you need..."
                    className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/50 resize-none"
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">Phone (Optional)</label>
                    <input 
                      type="tel" 
                      placeholder="+251 ..."
                      className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/50"
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full mt-4 group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-600 to-brand-500 text-white font-semibold text-lg py-4 rounded-xl overflow-hidden transition-all hover:shadow-[0_8px_30px_rgba(56,87,35,0.4)]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Send Request
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  {/* Hover effect gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-500 to-brand-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
                
                <p className="text-center text-xs text-muted-foreground mt-4">
                  Prefer to call? <a href="tel:+251911870000" className="text-brand-600 dark:text-brand-400 font-semibold hover:underline flex items-center justify-center gap-1 inline-flex"><Phone className="w-3 h-3" /> +251 911 870 000</a>
                </p>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// Simple Settings icon component since it wasn't imported from lucide-react above
function Settings(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
