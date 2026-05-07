"use client";

import { motion } from "framer-motion";
import { Building2, TrendingUp, Award, MonitorSmartphone, Rocket } from "lucide-react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const milestones = [
  {
    date: "Phase I",
    title: "Foundation",
    subtitle: "Pioneering IVECO distribution",
    icon: Building2,
    content: "RÖLTEK established as a pioneer in IVECO parts distribution in Ethiopia, laying the groundwork for a robust supply chain.",
    color: "#385723" // brand-700
  },
  {
    date: "Phase II",
    title: "Market Expansion",
    subtitle: "Building the network",
    icon: TrendingUp,
    content: "Expanded our inventory significantly and established a reliable nationwide distribution network across multiple Ethiopian regions.",
    color: "#4a7030" // brand-600
  },
  {
    date: "Phase III",
    title: "Quality Leadership",
    subtitle: "Setting industry standards",
    icon: Award,
    content: "Became the recognized leader in OEM quality standards and customer service within the heavy-duty automotive sector.",
    color: "#5c8a3d" // brand-500
  },
  {
    date: "Phase IV",
    title: "Digital Transformation",
    subtitle: "Modernizing operations",
    icon: MonitorSmartphone,
    content: "Modernized our inventory management systems and enhanced logistics capabilities to ensure faster, more accurate deliveries.",
    color: "#6e9e49" // brand-400
  },
  {
    date: "Phase V",
    title: "Innovation Era",
    subtitle: "Sustainable future focus",
    icon: Rocket,
    content: "Continuing our legacy of excellence with a renewed focus on sustainability, digital ordering, and expanded global brand partnerships.",
    color: "#385723"
  }
];

export function CompanyOverview() {
  const isDark = false; // Hardcode to true for dark mode

  const contentStyle = {
    background: isDark ? 'rgba(30, 41, 59, 0.5)' : 'rgba(255, 255, 255, 0.8)',
    color: isDark ? '#f8fafc' : '#0f172a',
    boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)',
    border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.05)',
    borderRadius: '1.5rem',
    backdropFilter: 'blur(10px)',
  };

  const contentArrowStyle = {
    borderRight: isDark ? '7px solid rgba(255,255,255,0.1)' : '7px solid rgba(0,0,0,0.05)'
  };

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-700/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 text-brand-700 text-sm font-semibold uppercase tracking-wider mb-6"
          >
            Our Journey
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Our Legacy &amp; Evolution
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            From our founding to the present day, RÖLTEK has consistently evolved to meet the demands of Ethiopia&apos;s growing transportation sector.
          </motion.p>
        </div>

        <div className="relative mt-20">
          <style dangerouslySetInnerHTML={{
            __html: `
            .vertical-timeline::before {
              background: linear-gradient(to bottom, transparent, #4a7030, transparent) !important;
              width: 4px !important;
            }
          `}} />

          <VerticalTimeline lineColor="transparent">
            {milestones.map((milestone, i) => (
              <VerticalTimelineElement
                key={i}
                className="vertical-timeline-element--work group"
                contentStyle={contentStyle}
                contentArrowStyle={contentArrowStyle}
                date={milestone.date}
                dateClassName="text-brand-600 dark:text-brand-400 font-bold text-xl md:text-2xl ml-4 mr-4"
                iconStyle={{
                  background: milestone.color,
                  color: '#fff',
                  boxShadow: `0 0 0 4px ${isDark ? 'rgba(30,41,59,1)' : 'rgba(255,255,255,1)'}, inset 0 2px 0 rgba(0,0,0,0.08), 0 3px 0 4px rgba(0,0,0,0.05)`
                }}
                icon={<milestone.icon />}
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="vertical-timeline-element-title text-2xl font-bold mb-1">{milestone.title}</h3>
                  <h4 className="vertical-timeline-element-subtitle text-brand-600 dark:text-brand-400 font-medium mb-4">{milestone.subtitle}</h4>
                  <p className="text-muted-foreground leading-relaxed !font-normal !mt-0 text-base">
                    {milestone.content}
                  </p>
                </motion.div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
}
