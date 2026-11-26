"use client";

import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

/* ───────── Data menu ───────── */
const navItems = [
  { id: "web", label: "Web Projects", num: "03", short: "Web", icon: "code" },
  { id: "uiux", label: "UI/UX", num: "04", short: "UI/UX", icon: "layout" },
  { id: "motion", label: "Motion", num: "05", short: "Motion", icon: "play" },
  { id: "graphic", label: "Graphic Design", num: "06", short: "Design", icon: "image" },
  { id: "branding", label: "Branding", num: "07", short: "Brand", icon: "gem" },
  { id: "contact", label: "Contact", num: "", short: "Contact", icon: "mail" },
];

/* ───────── Ikon ───────── */
function NavIcon({ name }: { name: string }) {
  const p = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "code":
      return (
        <svg {...p}>
          <path d="m16 18 6-6-6-6" />
          <path d="m8 6-6 6 6 6" />
        </svg>
      );
    case "layout":
      return (
        <svg {...p}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      );
    case "play":
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="9" />
          <path d="m10 8.5 5 3.5-5 3.5z" />
        </svg>
      );
    case "image":
      return (
        <svg {...p}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="9" cy="9" r="1.5" />
          <path d="m21 15-5-5L5 21" />
        </svg>
      );
    case "gem":
      return (
        <svg {...p}>
          <path d="M6 3h12l4 6-10 13L2 9Z" />
          <path d="M11 3 8 9l4 13 4-13-3-6" />
          <path d="M2 9h20" />
        </svg>
      );
    default:
      return (
        <svg {...p}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );
  }
}

/* ───────── Komponen utama ───────── */
export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("");
  const { scrollYProgress } = useScroll();

  // Tandai section yang sedang terlihat
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navItems.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ═════════ DESKTOP: menu melayang di atas ═════════ */}
      <div className="hidden md:flex fixed top-4 inset-x-0 z-[60] justify-center px-3 pointer-events-none">
        <motion.nav
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-auto relative flex items-center max-w-full rounded-full border p-1.5 overflow-hidden"
          style={{
            background: "rgba(12,10,9,0.72)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            borderColor: "rgba(16,185,129,0.22)",
            boxShadow: "0 10px 40px -12px rgba(0,0,0,0.6)",
          }}
        >
          {/* Monogram: klik untuk kembali ke atas */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 pl-3 pr-3 shrink-0"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono-dm text-[11px] tracking-[0.2em] uppercase text-stone-300">B.A</span>
          </a>

          <div className="w-px h-5 shrink-0" style={{ background: "rgba(16,185,129,0.22)" }} />

          {/* Link section */}
          <div className="flex items-center gap-0.5 px-1 min-w-0 overflow-x-auto no-scrollbar">
            {navItems
              .filter((n) => n.id !== "contact")
              .map((n) => {
                const active = activeSection === n.id;
                return (
                  <a
                    key={n.id}
                    href={`#${n.id}`}
                    className="group relative flex items-center gap-1.5 px-3.5 py-2 rounded-full whitespace-nowrap"
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full"
                        style={{ background: "rgba(16,185,129,0.14)", border: "1px solid rgba(16,185,129,0.35)" }}
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span
                      className={`relative z-10 font-mono-dm text-[10px] transition-colors duration-300 ${
                        active ? "text-emerald-400" : "text-stone-600 group-hover:text-emerald-400/70"
                      }`}
                    >
                      {n.num}
                    </span>
                    <span
                      className={`relative z-10 font-syne font-semibold text-xs tracking-wide transition-colors duration-300 ${
                        active ? "text-stone-50" : "text-stone-400 group-hover:text-stone-100"
                      }`}
                    >
                      {n.label}
                    </span>
                  </a>
                );
              })}
          </div>

          <div className="w-px h-5 shrink-0 mx-1" style={{ background: "rgba(16,185,129,0.22)" }} />

          {/* CTA Contact */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="shrink-0 px-4 py-2 rounded-full text-xs font-syne font-semibold tracking-wide text-stone-900"
            style={{ background: "linear-gradient(135deg, #10b981, #34d399)" }}
          >
            Contact
          </motion.a>

          {/* Garis progres scroll */}
          <motion.div
            className="absolute left-0 bottom-0 h-[2px] w-full origin-left"
            style={{ scaleX: scrollYProgress, background: "linear-gradient(90deg, #10b981, #6ee7b7)" }}
          />
        </motion.nav>
      </div>

      {/* ═════════ HP: dock melayang di bawah ═════════ */}
      <div className="md:hidden fixed bottom-6 inset-x-0 z-[60] flex justify-center px-3 pointer-events-none">
        <motion.nav
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-auto flex items-center gap-1 rounded-full border p-1.5 max-w-full"
          style={{
            background: "rgba(12,10,9,0.8)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            borderColor: "rgba(16,185,129,0.25)",
            boxShadow: "0 12px 40px -10px rgba(0,0,0,0.7)",
            marginBottom: "env(safe-area-inset-bottom)",
          }}
        >
          {navItems.map((n) => {
            const active = activeSection === n.id;
            const isContact = n.id === "contact";
            return (
              <a
                key={n.id}
                href={`#${n.id}`}
                aria-label={n.short}
                className="relative flex items-center justify-center h-10 rounded-full px-2.5"
                style={isContact ? { background: "linear-gradient(135deg, #10b981, #34d399)", color: "#0c0a09" } : undefined}
              >
                {active && !isContact && (
                  <motion.span
                    layoutId="m-nav-active"
                    className="absolute inset-0 rounded-full"
                    style={{ background: "rgba(16,185,129,0.14)", border: "1px solid rgba(16,185,129,0.35)" }}
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span
                  className={`relative z-10 transition-colors duration-300 ${
                    isContact ? "" : active ? "text-emerald-400" : "text-stone-400"
                  }`}
                >
                  <NavIcon name={n.icon} />
                </span>
                <motion.span
                  initial={false}
                  animate={{ width: active ? "auto" : 0, opacity: active ? 1 : 0, marginLeft: active ? 6 : 0 }}
                  transition={{ duration: 0.25 }}
                  className={`relative z-10 overflow-hidden whitespace-nowrap font-syne font-semibold text-xs ${
                    isContact ? "" : "text-stone-50"
                  }`}
                >
                  {n.short}
                </motion.span>
              </a>
            );
          })}
        </motion.nav>
      </div>
    </>
  );
}
