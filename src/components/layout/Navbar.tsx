"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { ChevronDown, Building2, Target, Users, X, Menu, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

/* ─── Data ───────────────────────────────────────────── */

const companyLinks = [
  {
    name: "About Us",
    href: "/about",
    icon: Building2,
    description: "Our story & values",
  },
  {
    name: "Mission & Vision",
    href: "/mission",
    icon: Target,
    description: "What drives us forward",
  },
  {
    name: "Leadership Team",
    href: "/team",
    icon: Users,
    description: "The people behind RÖLTEK",
  },
];

/* ─── Scroll Behavior Hook ───────────────────────────── */

function useScrollBehavior() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          const currentY = window.scrollY;
          const scrollingDown = currentY > lastY.current;

          setScrolled(currentY > 20);
          if (currentY > 80) {
            setHidden(scrollingDown && currentY - lastY.current > 4);
          } else {
            setHidden(false);
          }
          lastY.current = currentY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrolled, hidden };
}

/* ─── Magnetic Nav Link ───────────────────────────────── */

function MagneticNavLink({
  href,
  active,
  scrolled,
  children,
}: {
  href: string;
  active: boolean;
  scrolled?: boolean;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.22);
    y.set((e.clientY - cy) * 0.22);
  }, [x, y]);

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x: springX, y: springY }}
      className={cn(
        "relative text-sm font-medium transition-colors duration-200 hover:text-[#385723] group cursor-pointer",
        active ? "text-[#385723]" : (scrolled ? "text-foreground/70" : "text-white/80")
      )}
    >
      {children}
      {/* Animated underline */}
      <span
        className={cn(
          "absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-[#385723] transition-all duration-300",
          active ? "w-full" : "w-0 group-hover:w-full"
        )}
      />
      {/* Active indicator dot */}
      {active && (
        <motion.span
          layoutId="nav-active-dot"
          className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#385723]"
        />
      )}
    </motion.a>
  );
}

/* ─── Magnetic Company Button ─────────────────────────── */

function MagneticButton({
  active,
  isOpen,
  scrolled,
  onClick,
  children,
}: {
  active: boolean;
  isOpen: boolean;
  scrolled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.22);
    y.set((e.clientY - cy) * 0.22);
  }, [x, y]);

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      style={{ x: springX, y: springY }}
      className={cn(
        "flex items-center gap-1 text-sm font-medium transition-colors duration-200 hover:text-[#385723] group relative",
        active ? "text-[#385723]" : (scrolled ? "text-foreground/70" : "text-white/80")
      )}
      aria-expanded={isOpen}
      aria-haspopup="true"
    >
      {children}
      <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}>
        <ChevronDown className="w-3.5 h-3.5" />
      </motion.span>
      <span className={cn(
        "absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-[#385723] transition-all duration-300",
        active ? "w-full" : "w-0 group-hover:w-full"
      )} />
    </motion.button>
  );
}

/* ─── Animation Variants ─────────────────────────────── */

const dropdownVariants = {
  hidden: { opacity: 0, y: -10, scale: 0.95, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.22, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
  },
  exit: {
    opacity: 0,
    y: -6,
    scale: 0.97,
    filter: "blur(2px)",
    transition: { duration: 0.15 },
  },
};

const dropdownItemVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.05, duration: 0.2 },
  }),
};

const mobileMenuVariants = {
  hidden: { opacity: 0, x: "100%" },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.38, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
  },
  exit: {
    opacity: 0,
    x: "100%",
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
  },
};

const mobileItemVariants = {
  hidden: { opacity: 0, x: 24 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.075, duration: 0.35, ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number] },
  }),
};

/* ─── Logo Component ─────────────────────────────────── */

function NavLogo({ onClick, scrolled }: { onClick?: () => void; scrolled?: boolean }) {
  return (
    <Link href="/" onClick={onClick} className="flex items-center gap-2.5 group" aria-label="RÖLTEK Trading PLC — Home">
      {/* Emblem with spin ring on hover */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.25, ease: [0.34, 1.56, 0.64, 1] }}
        className="relative flex items-center justify-center w-9 h-9 rounded-xl overflow-visible flex-shrink-0"
      >
        {/* Spinning border ring */}
        <span
          className="absolute inset-[-3px] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin-slow"
          style={{
            background: "conic-gradient(from 0deg, transparent 0%, #385723 50%, transparent 100%)",
            borderRadius: "inherit",
            padding: "1.5px",
          }}
        />
        <Image src={"/logo.png"} alt="RT" className="" fill={true} ></Image>
        {/* Glow */}
        <span
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"
          style={{ boxShadow: "0 0 20px rgba(56,87,35,0.65)" }}
        />
      </motion.div>

      {/* Wordmark */}
      {/* <div className="flex flex-col leading-none"> */}
      <motion.span
        whileHover={{ opacity: 0.9 }}
        className={cn(
          "text-[22px] font-bold tracking-tight",
          scrolled ? "text-foreground" : "text-white"
        )}
      >
        RÖLTEK
      </motion.span>
      {/* <span className={cn(
          "text-[9px] font-medium tracking-[0.18em] uppercase",
          scrolled ? "text-foreground/40" : "text-white/60"
        )}>
          Trading PLC
        </span>
      </div> */}
    </Link>
  );
}

/* ─── CTA Button ─────────────────────────────────────── */

function CTAButton({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/contact"
      onClick={onClick}
      className="shimmer-btn group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_4px_24px_rgba(56,87,35,0.5)] active:scale-[0.97]"
      style={{ background: "linear-gradient(90deg, #385723 0%, #4a7030 50%, #385723 100%)", backgroundSize: "200% 100%" }}
    >
      Get a Quote
      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
    </Link>
  );
}

/* ─── Main Navbar ────────────────────────────────────── */

export function Navbar() {
  const pathname = usePathname();
  const { scrolled, hidden } = useScrollBehavior();
  const [companyOpen, setCompanyOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const companyRef = useRef<HTMLDivElement>(null);

  const isCompanyActive = companyLinks.some((l) => pathname === l.href);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (companyRef.current && !companyRef.current.contains(e.target as Node)) {
        setCompanyOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setCompanyOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: hidden ? "-100%" : 0 }}
        transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "glass-light navbar-scrolled" : "glass-dark"
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Gradient top-border accent (only when dark/transparent) */}
        {!scrolled && (
          <div
            className="absolute top-0 left-0 right-0 h-px pointer-events-none"
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(56,87,35,0.6) 30%, rgba(165,198,139,0.4) 50%, rgba(56,87,35,0.6) 70%, transparent 100%)",
            }}
          />
        )}

        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between max-w-7xl" style={{ height: "68px" }}>

          {/* Logo */}
          <NavLogo onClick={() => setMobileOpen(false)} scrolled={scrolled} />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-7">

            <MagneticNavLink href="/" active={pathname === "/"} scrolled={scrolled}>Home</MagneticNavLink>

            {/* Company Dropdown */}
            <div
              ref={companyRef}
              className="relative"
              onMouseEnter={() => setCompanyOpen(true)}
              onMouseLeave={() => setCompanyOpen(false)}
            >
              <MagneticButton
                active={isCompanyActive}
                isOpen={companyOpen}
                scrolled={scrolled}
                onClick={() => setCompanyOpen((v) => !v)}
              >
                Company
              </MagneticButton>

              <AnimatePresence>
                {companyOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="dropdown-glass absolute top-full left-1/2 -translate-x-1/2 mt-4 w-68 rounded-2xl py-2 z-50 overflow-hidden"
                    style={{ width: "272px" }}
                  >
                    {/* Top accent line */}
                    <div
                      className="absolute top-0 left-6 right-6 h-px rounded-full"
                      style={{ background: "linear-gradient(90deg, transparent, rgba(56,87,35,0.4), transparent)" }}
                    />

                    {companyLinks.map((link, i) => (
                      <motion.div
                        key={link.href}
                        custom={i}
                        variants={dropdownItemVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <Link
                          href={link.href}
                          onClick={() => setCompanyOpen(false)}
                          className={cn(
                            "flex items-center gap-3 px-4 py-3 mx-1.5 rounded-xl text-sm transition-all duration-200 group/item",
                            pathname === link.href
                              ? "bg-[#385723]/10 text-[#385723]"
                              : "text-foreground/75 hover:bg-[#385723]/8 hover:text-[#385723]"
                          )}
                        >
                          <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#385723]/10 text-[#385723] flex-shrink-0 transition-all duration-200 group-hover/item:bg-[#385723] group-hover/item:text-white group-hover/item:shadow-[0_4px_12px_rgba(56,87,35,0.4)]">
                            <link.icon className="w-4 h-4" />
                          </span>
                          <div>
                            <div className="font-semibold leading-none mb-0.5">{link.name}</div>
                            <div className="text-xs text-foreground/45 leading-tight">{link.description}</div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <MagneticNavLink href="/products" active={pathname === "/products"} scrolled={scrolled}>Products</MagneticNavLink>
            <MagneticNavLink href="/contact" active={pathname === "/contact"} scrolled={scrolled}>Contact</MagneticNavLink>

            <CTAButton />
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden relative flex items-center justify-center w-10 h-10 rounded-xl transition-colors hover:bg-foreground/6"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span
                  key="x"
                  initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.22, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  <X className="w-5 h-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.22, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  <Menu className="w-5 h-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile Full-Screen Menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-black/55 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Slide-in Panel */}
            <motion.div
              key="mobile-panel"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 bottom-0 z-50 w-[85vw] max-w-[340px] md:hidden overflow-y-auto"
              style={{
                background: "rgba(255,255,255,0.97)",
                backdropFilter: "blur(28px)",
                borderLeft: "1px solid rgba(56,87,35,0.1)",
                boxShadow: "-20px 0 60px rgba(0,0,0,0.15)",
              }}
            >
              {/* Panel header */}
              <div className="flex items-center justify-between px-5 border-b border-[#385723]/10" style={{ height: "68px" }}>
                <NavLogo onClick={() => setMobileOpen(false)} scrolled={true} />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-9 h-9 rounded-xl hover:bg-[#385723]/10 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="px-4 py-6 flex flex-col gap-1" aria-label="Mobile navigation">

                {/* Home */}
                <motion.div custom={0} variants={mobileItemVariants} initial="hidden" animate="visible">
                  <Link
                    href="/"
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center px-4 py-3.5 rounded-xl text-sm font-medium transition-all hover:bg-[#385723]/8 hover:text-[#385723]",
                      pathname === "/" ? "bg-[#385723]/10 text-[#385723] font-semibold" : "text-foreground/70"
                    )}
                  >
                    Home
                    {pathname === "/" && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#385723]" />}
                  </Link>
                </motion.div>

                {/* Company Accordion */}
                <motion.div custom={1} variants={mobileItemVariants} initial="hidden" animate="visible">
                  <button
                    onClick={() => setMobileCompanyOpen((v) => !v)}
                    className={cn(
                      "w-full flex items-center px-4 py-3.5 rounded-xl text-sm font-medium transition-all hover:bg-[#385723]/8 hover:text-[#385723]",
                      isCompanyActive ? "bg-[#385723]/10 text-[#385723] font-semibold" : "text-foreground/70"
                    )}
                  >
                    Company
                    <motion.span
                      animate={{ rotate: mobileCompanyOpen ? 180 : 0 }}
                      transition={{ duration: 0.22 }}
                      className="ml-auto"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {mobileCompanyOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden ml-3 mt-1 pl-3 border-l-2 border-[#385723]/20"
                      >
                        {companyLinks.map((link, i) => (
                          <motion.div
                            key={link.href}
                            initial={{ opacity: 0, x: -12 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.06, ease: [0.34, 1.56, 0.64, 1] }}
                          >
                            <Link
                              href={link.href}
                              onClick={() => { setMobileOpen(false); setMobileCompanyOpen(false); }}
                              className={cn(
                                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all hover:bg-[#385723]/8 hover:text-[#385723]",
                                pathname === link.href ? "text-[#385723] font-medium" : "text-foreground/70"
                              )}
                            >
                              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#385723]/10 text-[#385723] flex-shrink-0">
                                <link.icon className="w-3.5 h-3.5" />
                              </span>
                              {link.name}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Products */}
                <motion.div custom={2} variants={mobileItemVariants} initial="hidden" animate="visible">
                  <Link
                    href="/products"
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center px-4 py-3.5 rounded-xl text-sm font-medium transition-all hover:bg-[#385723]/8 hover:text-[#385723]",
                      pathname === "/products" ? "bg-[#385723]/10 text-[#385723] font-semibold" : "text-foreground/70"
                    )}
                  >
                    Products
                    {pathname === "/products" && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#385723]" />}
                  </Link>
                </motion.div>

                {/* Contact */}
                <motion.div custom={3} variants={mobileItemVariants} initial="hidden" animate="visible">
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center px-4 py-3.5 rounded-xl text-sm font-medium transition-all hover:bg-[#385723]/8 hover:text-[#385723]",
                      pathname === "/contact" ? "bg-[#385723]/10 text-[#385723] font-semibold" : "text-foreground/70"
                    )}
                  >
                    Contact
                    {pathname === "/contact" && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#385723]" />}
                  </Link>
                </motion.div>

                {/* CTA */}
                <motion.div
                  custom={4}
                  variants={mobileItemVariants}
                  initial="hidden"
                  animate="visible"
                  className="mt-6 px-1"
                >
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="shimmer-btn group flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_8px_24px_rgba(56,87,35,0.5)] active:scale-[0.97]"
                    style={{ background: "linear-gradient(90deg, #385723 0%, #4a7030 100%)" }}
                  >
                    Get a Quote
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>

                {/* Footer note */}
                <motion.p
                  custom={5}
                  variants={mobileItemVariants}
                  initial="hidden"
                  animate="visible"
                  className="mt-8 px-4 text-xs text-foreground/35 text-center"
                >
                  Ethiopia&apos;s Premier IVECO Parts Specialist
                </motion.p>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
