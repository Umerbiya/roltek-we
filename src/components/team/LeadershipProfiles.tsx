"use client";

import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight, Briefcase } from "lucide-react";
import React from "react";

const team = [
  {
    initials: "BR",
    name: "Bruno De Bersigny Rözler",
    position: "Managing Director & Significant Shareholder",
    phones: ["+251 904 972 004"],
    emails: ["bruno.rozler@roltek.et", "brunodebersignyrozler@gmail.com"],
  },
  {
    initials: "DS",
    name: "Daniel Gebretatiyos Solomon",
    position: "Financier & Significant Shareholder",
    phones: ["+251 911 232 257"],
    emails: ["daniel.gts@roltek.et", "danieltatiyos@gmail.com"],
  },
  {
    initials: "AJ",
    name: 'Abdulfeta "Abdi" Jemal Awol',
    position: "Marketing and Sales Manager & Shareholder",
    phones: ["+251 912 351 518", "+251 911 870 000"],
    emails: ["abdulfeta.jemal@roltek.et", "abdulfetajemal64@gmail.com"],
  },
];

type TeamMember = {
  initials: string;
  name: string;
  position: string;
  phones: string[];
  emails: string[];
};

function ProfileCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white border border-zinc-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      {/* Top Accent Line */}
      <div className="h-1.5 w-full bg-brand-600" />

      <div className="p-8">
        {/* Header Section */}
        <div className="flex items-start gap-5 mb-8">
          <div className="w-16 h-16 rounded-xl bg-zinc-100 flex items-center justify-center shrink-0 border border-zinc-200">
            <span className="text-xl font-bold text-zinc-700 tracking-wider">
              {member.initials}
            </span>
          </div>
          <div>
            <h3 className="font-bold text-xl text-zinc-900 leading-tight mb-1.5">
              {member.name}
            </h3>
            <div className="flex items-center gap-1.5 text-brand-600 text-sm font-semibold uppercase tracking-wider">
              <Briefcase className="w-4 h-4" />
              <span>{member.position}</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-zinc-100 mb-6" />

        {/* Contact Info */}
        <div className="space-y-3 mb-8">
          {member.phones.map((phone: string, j: number) => (
            <a
              key={j}
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 text-sm text-zinc-600 hover:text-brand-600 transition-colors"
            >
              <Phone className="w-4 h-4 text-zinc-400" />
              <span className="font-medium">{phone}</span>
            </a>
          ))}
          {member.emails.map((email: string, j: number) => (
            <a
              key={j}
              href={`mailto:${email}`}
              className="flex items-center gap-3 text-sm text-zinc-600 hover:text-brand-600 transition-colors"
            >
              <Mail className="w-4 h-4 text-zinc-400 shrink-0" />
              <span className="font-medium truncate">{email}</span>
            </a>
          ))}
        </div>

        {/* Action Button */}
        <button className="w-full py-3 px-4 rounded-xl bg-zinc-50 hover:bg-brand-50 text-sm font-semibold text-zinc-700 hover:text-brand-700 transition-colors flex items-center justify-center gap-2 group/btn border border-zinc-200 hover:border-brand-200">
          View Profile
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
}

export function LeadershipProfiles() {
  return (
    <section className="py-24 md:py-32 bg-zinc-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-2xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-widest mb-4"
          >
            Executive Leadership
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-zinc-900 tracking-tight"
          >
            Guided by Experience.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <ProfileCard key={i} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}