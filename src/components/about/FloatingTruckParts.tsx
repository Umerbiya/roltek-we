"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// ─── DEBUG MODE ───────────────────────────────────────────────────────────────
// Set to false once visually confirmed working, then tune colors/opacity
const DEBUG = false;
// ─────────────────────────────────────────────────────────────────────────────

const parts: Array<(props: React.SVGProps<SVGSVGElement>) => React.ReactElement> = [
  // Bearing
  (props) => (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <circle cx="50" cy="50" r="40" strokeWidth="4" />
      <circle cx="50" cy="50" r="25" strokeWidth="4" />
      <circle cx="50" cy="15" r="4" fill="currentColor" />
      <circle cx="50" cy="85" r="4" fill="currentColor" />
      <circle cx="15" cy="50" r="4" fill="currentColor" />
      <circle cx="85" cy="50" r="4" fill="currentColor" />
      <circle cx="25.2" cy="25.2" r="4" fill="currentColor" />
      <circle cx="74.8" cy="74.8" r="4" fill="currentColor" />
      <circle cx="25.2" cy="74.8" r="4" fill="currentColor" />
      <circle cx="74.8" cy="25.2" r="4" fill="currentColor" />
    </svg>
  ),
  // Brake Disk
  (props) => (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" {...props}>
      <circle cx="50" cy="50" r="45" strokeWidth="2" />
      <circle cx="50" cy="50" r="20" strokeWidth="2" />
      <circle cx="50" cy="50" r="10" strokeWidth="1" />
      <circle cx="50" cy="30" r="2" fill="currentColor" />
      <circle cx="50" cy="70" r="2" fill="currentColor" />
      <circle cx="30" cy="50" r="2" fill="currentColor" />
      <circle cx="70" cy="50" r="2" fill="currentColor" />
      <circle cx="35.8" cy="35.8" r="2" fill="currentColor" />
      <circle cx="64.2" cy="64.2" r="2" fill="currentColor" />
      <circle cx="35.8" cy="64.2" r="2" fill="currentColor" />
      <circle cx="64.2" cy="35.8" r="2" fill="currentColor" />
    </svg>
  ),
  // Gasket
  (props) => (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" {...props}>
      <path d="M 10,30 Q 10,10 30,10 L 70,10 Q 90,10 90,30 L 90,70 Q 90,90 70,90 L 30,90 Q 10,90 10,70 Z" strokeWidth="2" />
      <circle cx="30" cy="50" r="15" strokeWidth="2" />
      <circle cx="70" cy="50" r="15" strokeWidth="2" />
      <circle cx="50" cy="50" r="5" strokeWidth="1" />
      <circle cx="15" cy="15" r="2" fill="currentColor" />
      <circle cx="85" cy="15" r="2" fill="currentColor" />
      <circle cx="15" cy="85" r="2" fill="currentColor" />
      <circle cx="85" cy="85" r="2" fill="currentColor" />
    </svg>
  ),
  // Clutch Disk
  (props) => (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" {...props}>
      <circle cx="50" cy="50" r="45" strokeWidth="2" strokeDasharray="10 5" />
      <circle cx="50" cy="50" r="35" strokeWidth="1" />
      <circle cx="50" cy="50" r="15" strokeWidth="2" />
      <path d="M 45,50 L 55,50 M 50,45 L 50,55" strokeWidth="2" />
      <circle cx="50" cy="25" r="3" fill="currentColor" />
      <circle cx="50" cy="75" r="3" fill="currentColor" />
      <circle cx="25" cy="50" r="3" fill="currentColor" />
      <circle cx="75" cy="50" r="3" fill="currentColor" />
    </svg>
  ),
  // Brake Drum
  (props) => (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" {...props}>
      <ellipse cx="50" cy="40" rx="40" ry="15" strokeWidth="2" />
      <ellipse cx="50" cy="60" rx="40" ry="15" strokeWidth="2" />
      <path d="M 10,40 L 10,60 M 90,40 L 90,60" strokeWidth="2" />
      <circle cx="50" cy="40" r="5" strokeWidth="1" />
    </svg>
  ),
];

interface FloatingPartProps {
  index: number;
  isMobile: boolean;
}

const FloatingPart = ({ index, isMobile }: FloatingPartProps) => {
  const PartIcon = parts[index % parts.length];

  const [params, setParams] = useState<{
    x: number; y: number; size: number; duration: number;
    xDuration: number; rotateDuration: number; direction: number;
  } | null>(null);

  useEffect(() => {
    setParams({
      x: Math.random() * 90,         // 0–90% left
      y: Math.random() * 90,         // 0–90% top
      size: isMobile
        ? Math.random() * 60 + 60    // 60–120px on mobile
        : Math.random() * 120 + 80,  // 80–200px on desktop
      duration: Math.random() * 30 + 25,       // 25–55s vertical drift
      xDuration: Math.random() * 35 + 20,      // 20–55s horizontal drift
      rotateDuration: Math.random() * 20 + 15, // 15–35s rotation
      direction: Math.random() > 0.5 ? 1 : -1,
    });
  }, [isMobile]);

  if (!params) return null;

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left: `${params.x}%`,
        top: `${params.y}%`,
        width: params.size,
        height: params.size,
        // DEBUG: neon pink; PRODUCTION: brand-500 green
        color: DEBUG ? "#ff00ff" : "rgb(74 112 48)",
        opacity: DEBUG ? 1 : 0.18,
        border: DEBUG ? "2px dashed #ff00ff" : "none",
        zIndex: DEBUG ? 9999 : "auto",
      }}
      animate={{
        y: [0, -80 * params.direction, 40 * params.direction, 0],
        x: [0, 40 * params.direction, -20 * params.direction, 0],
        rotate: [0, 360 * params.direction],
      }}
      transition={{
        y: { duration: params.duration, repeat: Infinity, ease: "easeInOut" },
        x: { duration: params.xDuration, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: params.rotateDuration, repeat: Infinity, ease: "linear" },
      }}
    >
      <PartIcon
        style={{ width: "100%", height: "100%", display: "block" }}
        strokeWidth={DEBUG ? 3 : 1.5}
      />
    </motion.div>
  );
};

export function FloatingTruckParts() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    console.log("FloatingTruckParts mounted successfully!");
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const numParts = isMobile ? 8 : 18;

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: DEBUG ? 9999 : 1 }}
    >
      {Array.from({ length: numParts }).map((_, i) => (
        <FloatingPart key={i} index={i} isMobile={isMobile} />
      ))}

      {/* Soft bottom fade — only in production mode */}
      {!DEBUG && (
        <div
          className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(4,8,6,0.7))" }}
        />
      )}
    </div>
  );
}
