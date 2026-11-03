"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, type Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const navItems = [
  { id: "web", label: "Web Projects", num: "03" },
  { id: "uiux", label: "UI/UX", num: "04" },
  { id: "graphic", label: "Graphic Design", num: "05" },
  { id: "branding", label: "Branding", num: "06" },
  { id: "contact", label: "Contact", num: "" },
];

const grainSvg = `<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%' height='100%' filter='url(#n)'/></svg>`;
const grainUrl = `url("data:image/svg+xml;utf8,${encodeURIComponent(grainSvg)}")`;

const scratches = [
  { l: "6%", h: "55%", o: 0.16, light: true },
  { l: "11%", h: "80%", o: 0.1, light: false },
  { l: "19%", h: "38%", o: 0.2, light: true },
  { l: "27%", h: "70%", o: 0.12, light: false },
  { l: "34%", h: "48%", o: 0.18, light: true },
  { l: "41%", h: "90%", o: 0.1, light: false },
  { l: "47%", h: "62%", o: 0.22, light: true },
  { l: "53%", h: "42%", o: 0.12, light: false },
  { l: "60%", h: "75%", o: 0.16, light: true },
  { l: "66%", h: "58%", o: 0.1, light: false },
  { l: "72%", h: "85%", o: 0.2, light: true },
  { l: "79%", h: "46%", o: 0.12, light: false },
  { l: "86%", h: "66%", o: 0.18, light: true },
  { l: "93%", h: "52%", o: 0.14, light: false },
];
export default function Portfolio() {
  const [available, setAvailable] = useState<boolean>(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.15], [1, 0.92]);
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -60]);
  const [activeSection, setActiveSection] = useState<string>("");
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
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const saved = localStorage.getItem("availability");
    if (saved !== null) setAvailable(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("availability", JSON.stringify(available));
  }, [available]);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  const webProjects = [
    {
      title: "Website Portfolio Interaktif",
      desc: "Website portfolio personal dengan animasi modern, smooth transitions, dan interactive elements menggunakan Next.js dan Framer Motion.",
      duration: "2 Minggu",
      tags: ["Next.js", "Framer Motion", "Tailwind"],
      link: "https://projek-landingpage-cbda.vercel.app/",
      image: "/projects/portofolio-web.png",
      accent: "#f59e0b",
    },
    {
      title: "Web Project – Company Profile",
      desc: "Company profile website designed with a clean and structured layout, featuring a modern hero section, organized content hierarchy, responsive design, and scalable components.",
      duration: "3 Minggu",
      tags: ["Next.js", "Tailwind", "Responsive"],
      link: "https://taxmin-platform.vercel.app/",
      image: "/projects/compro-web.png",
      accent: "#34d399",
    },
    {
      title: "Website Toko Roti",
      desc: "Website toko roti dengan fitur katalog produk, pemesanan online, dan tampilan modern yang user-friendly.",
      duration: "1 Minggu",
      tags: ["HTML", "CSS", "JS"],
      link: "https://toko-roti-lafarine.vercel.app/",
      image: "/projects/tokoroti.png",
      accent: "#f59e0b",
    },
    {
      title: "Website Konsultasi Kesehatan",
      desc: "Platform konsultasi kesehatan online yang memungkinkan pengguna untuk berkonsultasi dengan tenaga medis, dilengkapi fitur booking, live chat, dan tampilan responsif yang mudah digunakan.",
      duration: "1 Minggu",
      tags: ["HTML", "CSS", "JS"],
      link: "https://sehatku-web.vercel.app/",
      image: "/projects/kesehatan.png",
      accent: "#38bdf8",
    },
    {
      title: "BYD Harmoni Palmerah – Automotive Website",
      desc: "Responsive automotive sales website for BYD Harmoni Palmerah, featuring BYD and DENZA vehicle catalogs, promotional offers, credit simulation, test drive information, and direct WhatsApp sales consultation.",
      duration: "Project Website",
      tags: ["Next.js", "Tailwind", "Responsive", "Automotive"],
      link: "https://www.rarabydpalmerah.com/",
      image: "/projects/byd-harmoni-palmerah.png",
      accent: "#2563eb",
    },
  ];

  const uiuxProjects = [
    {
      title: "Uper-Food",
      desc: "Aplikasi pemesanan makanan iOS & Android dengan UX fokus ke kecepatan dan kemudahan order.",
      duration: "1 Minggu",
      tags: ["UI/UX", "Mobile App", "Figma"],
      link: "https://www.figma.com/design/xjtxgCb06ehlCZN1yaZjFq/Uper-Food?node-id=0-1",
      accent: "#f59e0b",
    },
    {
      title: "Elecon-Apps",
      desc: "Aplikasi layanan elektrik & elektronik dengan tampilan modern dan efisien.",
      duration: "1+ Minggu",
      tags: ["UI/UX", "Mobile", "Dashboard"],
      link: "https://www.figma.com/design/lOAx5XRpjt8UJ2uKxAXDkT/Elecon-Apps?node-id=0-1",
      accent: "#60a5fa",
    },
    {
      title: "ViCit Try-On Visual",
      desc: "Aplikasi & website virtual try-on untuk fashion dengan pendekatan visual interaktif.",
      duration: "3 Minggu",
      tags: ["UI/UX", "Web App", "Prototype"],
      link: "https://www.figma.com/design/trkZJNl5Jjrvyuf6V0mye3/ViCit-Try-on-Visual?node-id=0-1",
      accent: "#c084fc",
    },
    {
      title: "APP-Tau Kajian",
      desc: "Aplikasi pencarian kajian edukasi & keagamaan dengan UX sederhana dan informatif.",
      duration: "1+ Minggu",
      tags: ["UI/UX", "Mobile", "Research"],
      link: "https://www.figma.com/design/t3KMTo1RzkNJnTLGzw9XR2/APP-Tau-Kajian?node-id=2-34",
      accent: "#34d399",
    },
    {
      title: "Panggil Aja",
      desc: "Aplikasi layanan on-demand berbasis desktop dengan alur pemesanan yang ringkas.",
      duration: "1+ Minggu",
      tags: ["UI/UX", "Desktop App"],
      link: "https://www.figma.com/design/2RvM70FmM6RY1WMC0V85UY/Panggil-Aja?node-id=0-1",
      accent: "#fb7185",
    },
    {
      title: "Website Survei Harian PTTUN",
      desc: "Redesign dan pembaruan tampilan website survei harian agar lebih modern dan mudah digunakan.",
      duration: "2 Minggu",
      tags: ["Website", "UI Redesign"],
      link: "https://survei-harian.pttun-banjarmasin.go.id/",
      accent: "#818cf8",
    },
    {
      title: "INTAN – Integrasi Administrasi & Kepegawaian",
      desc: "Website internal untuk integrasi administrasi dan kepegawaian.",
      duration: "1 Bulan",
      tags: ["Website", "Internal System"],
      link: "#",
      accent: "#94a3b8",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  const frontendSkills = [
    { name: "HTML", value: 95, icon: "⌨" },
    { name: "CSS / Tailwind", value: 90, icon: "✦" },
    { name: "JavaScript", value: 85, icon: "⚡" },
    { name: "React.js", value: 80, icon: "⚛" },
    { name: "Next.js", value: 75, icon: "▲" },
  ];

  const uiuxSkills = [
    { name: "Figma", value: 90, icon: "◈" },
    { name: "Wireframing", value: 85, icon: "⬡" },
    { name: "Prototyping", value: 88, icon: "◎" },
    { name: "User Flow", value: 80, icon: "⟡" },
    { name: "Design System", value: 65, icon: "◻" },
  ];

  const backendSkills = [
    { name: "MySQL", value: 75, icon: "◈" },
    { name: "Laravel", value: 70, icon: "🔺" },
    { name: "Node.js", value: 65, icon: "⬢" },
  ];
  const graphicPages = Array.from(
  { length: 13 },
  (_, i) => `/graphic/pages/page-${String(i + 1).padStart(2, "0")}.jpg`
);

  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Mono:ital,wght@0,300;0,400;1,300&display=swap');

        * { cursor: none !important; }
                html { scroll-behavior: smooth; }
        section[id] { scroll-margin-top: 4rem; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { scrollbar-width: none; }  
        .font-syne { font-family: 'Syne', sans-serif; }
        .font-mono-dm { font-family: 'DM Mono', monospace; }

        @keyframes float-geo {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(8deg); }
        }
        @keyframes float-geo2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(15px) rotate(-5deg); }
        }
        @keyframes pulse-ring {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.08); }
        }
        @keyframes draw-line {
          from { stroke-dashoffset: 1000; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes shimmer2 {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @keyframes text-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .geo-1 { animation: float-geo 7s ease-in-out infinite; }
        .geo-2 { animation: float-geo2 9s ease-in-out infinite; }
        .geo-3 { animation: float-geo 11s ease-in-out infinite 2s; }
        .pulse-ring { animation: pulse-ring 4s ease-in-out infinite; }

        .gold-shimmer {
          background: linear-gradient(90deg, #f59e0b, #fbbf24, #f59e0b, #fcd34d, #f59e0b);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: text-shimmer 4s linear infinite;
        }

        .card-hover-border {
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .card-hover-border:hover {
          box-shadow: 0 0 0 1px rgba(245, 158, 11, 0.25), 0 20px 60px -20px rgba(245, 158, 11, 0.1);
        }

        .marquee-track { animation: marquee 20s linear infinite; }
        .marquee-track:hover { animation-play-state: paused; }

        .skill-bar-fill { transition: width 1.4s cubic-bezier(0.22, 1, 0.36, 1); }

        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: #0c0a09; }
        ::-webkit-scrollbar-thumb { background: rgba(245, 158, 11, 0.3); border-radius: 2px; }
      `}</style>

      {/* Custom cursor */}
      <motion.div
        className="fixed z-[9999] pointer-events-none"
        style={{ left: smoothX, top: smoothY, translateX: "-50%", translateY: "-50%" }}
      >
        <div className="w-4 h-4 rounded-full bg-amber-400/80 mix-blend-difference" />
      </motion.div>
      <motion.div
        className="fixed z-[9998] pointer-events-none"
        style={{
          left: mouseX,
          top: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div
          className="w-10 h-10 rounded-full border border-amber-400/20 pointer-events-none"
          style={{ transition: "all 0.15s ease" }}
        />
      </motion.div>

      {/* Cursor glow */}
      <motion.div
        className="fixed pointer-events-none z-0 rounded-full"
        style={{
          left: smoothX,
          top: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(242,107,29,0.05) 0%, transparent 70%)",
        }}
      />

      <div
        className="min-h-screen text-stone-100 px-6 py-0 relative overflow-hidden font-syne"
        style={{ background: "#0c0a09" }}
      >
        {/* Background: gradasi oranye → hitam bergaya grunge */}
        <div className="absolute inset-x-0 top-0 h-[115vh] pointer-events-none z-0 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, #f2661c 0%, #d9551a 12%, #a8410f 28%, #5c240a 46%, #1a0e08 64%, #0c0a09 82%)",
            }}
          />
          {/* Goresan vertikal */}
          {scratches.map((s, i) => (
            <div
              key={i}
              className="absolute top-0 w-px"
              style={{
                left: s.l,
                height: s.h,
                background: s.light
                  ? `linear-gradient(to bottom, rgba(255,214,180,${s.o}), transparent)`
                  : `linear-gradient(to bottom, rgba(0,0,0,${s.o * 2}), transparent)`,
              }}
            />
          ))}
        </div>

        {/* Grain film di seluruh halaman */}
        <div
          className="fixed inset-0 pointer-events-none z-[40]"
          style={{ backgroundImage: grainUrl, opacity: 0.09 }}
        />

        {/* Floating geometric shapes */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Diamond top-right */}
          <div className="geo-1 absolute" style={{ top: "12%", right: "8%", width: 60, height: 60, border: "1px solid rgba(242,107,29,0.16)", transform: "rotate(45deg)" }} />
          {/* Circle mid-left */}
          <div className="geo-2 absolute" style={{ top: "38%", left: "4%", width: 90, height: 90, border: "1px solid rgba(242,107,29,0.1)", borderRadius: "50%" }} />
          {/* Small square bottom-left */}
          <div className="geo-3 absolute" style={{ bottom: "20%", left: "10%", width: 30, height: 30, border: "1px solid rgba(255,143,74,0.18)", transform: "rotate(30deg)" }} />
          {/* Triangle-ish polygon */}
          <svg className="geo-1 absolute" style={{ top: "65%", right: "6%", opacity: 0.09 }} width="80" height="80" viewBox="0 0 80 80">
            <polygon points="40,4 76,68 4,68" fill="none" stroke="#f26b1d" strokeWidth="1" />
          </svg>
          {/* Dotted grid pattern */}
          <svg className="absolute" style={{ top: "25%", right: "18%", opacity: 0.05 }} width="120" height="120" viewBox="0 0 120 120">
            {Array.from({ length: 5 }).map((_, r) =>
              Array.from({ length: 5 }).map((_, c) => (
                <circle key={`${r}-${c}`} cx={c * 24 + 12} cy={r * 24 + 12} r="2" fill="#f26b1d" />
              ))
            )}
          </svg>
        </div>

        {/* Top border accent line */}
        <div className="fixed top-0 left-0 right-0 h-[1px] z-50" style={{ background: "linear-gradient(90deg, transparent, rgba(245,158,11,0.5), transparent)" }} />
                {/* Navigation */}
        <div className="fixed top-4 inset-x-0 z-50 flex justify-center px-3 pointer-events-none">
          <motion.nav
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-auto relative flex items-center max-w-full rounded-full border p-1.5 overflow-hidden"
            style={{
              background: "rgba(12,10,9,0.72)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              borderColor: "rgba(245,158,11,0.18)",
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
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber-400" />
              </span>
              <span className="hidden sm:inline font-mono-dm text-[11px] tracking-[0.2em] uppercase text-stone-300">
                B.A
              </span>
            </a>

            <div className="w-px h-5 shrink-0" style={{ background: "rgba(245,158,11,0.18)" }} />

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
                          style={{
                            background: "rgba(245,158,11,0.12)",
                            border: "1px solid rgba(245,158,11,0.3)",
                          }}
                          transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        />
                      )}
                      <span
                        className={`relative z-10 font-mono-dm text-[10px] transition-colors duration-300 ${
                          active ? "text-amber-400" : "text-stone-600 group-hover:text-amber-400/70"
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

            <div className="w-px h-5 shrink-0 mx-1" style={{ background: "rgba(245,158,11,0.18)" }} />

            {/* CTA Contact */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="shrink-0 px-4 py-2 rounded-full text-xs font-syne font-semibold tracking-wide text-stone-900"
              style={{ background: "linear-gradient(135deg, #f59e0b, #fbbf24)" }}
            >
              Contact
            </motion.a>

            {/* Garis progres scroll */}
            <motion.div
              className="absolute left-0 bottom-0 h-[2px] w-full origin-left"
              style={{ scaleX: scrollYProgress, background: "linear-gradient(90deg, #f59e0b, #fcd34d)" }}
            />
          </motion.nav>
        </div>
        {/* Thin vertical line left */}
        <div className="fixed top-0 left-[3.5rem] bottom-0 w-px z-0 hidden md:block" style={{ background: "linear-gradient(to bottom, transparent, rgba(245,158,11,0.06) 20%, rgba(245,158,11,0.06) 80%, transparent)" }} />

        <div className="relative z-10">

          {/* ── HERO ── */}
          <motion.section
            style={{ opacity, scale, y: heroY }}
            className="max-w-5xl mx-auto min-h-screen flex flex-col justify-center pt-16"
          >
            {/* Small eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="w-8 h-[1px]" style={{ background: "rgba(245,158,11,0.6)" }} />
              <span className="font-mono-dm text-xs tracking-[0.2em] text-amber-400/70 uppercase">Portfolio 2026</span>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-12 items-start md:items-center">
              {/* Left: text */}
              <div className="flex-1">
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="text-6xl md:text-[5.5rem] font-syne font-bold leading-[0.95] tracking-tight mb-6"
                >
                  <span className="text-stone-100 block">Designing</span>
                  <span className="block gold-shimmer">intuitive</span>
                  <span className="text-stone-500 font-normal block">experiences.</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.8 }}
                  className="text-stone-500 max-w-md text-base leading-relaxed mb-10 font-sans"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  UI/UX, Web Junior Dev & Graphic Designer with 2+ years crafting clean,
                  functional, and elegant digital products.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="flex flex-wrap gap-3"
                >
                  <a href="#contact">
                    <motion.button
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      className="relative px-7 py-3.5 text-sm font-semibold tracking-wide text-stone-900 rounded-full overflow-hidden"
                      style={{ background: "linear-gradient(135deg, #f59e0b, #fbbf24)" }}
                    >
                      <span className="relative z-10">Contact Me</span>
                    </motion.button>
                  </a>
                  <a href="/cv/Bintang-Akbar-Alim-CV.pdf" download>
                    <motion.button
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      className="px-7 py-3.5 text-sm font-medium tracking-wide rounded-full text-stone-300 border transition-all"
                      style={{ borderColor: "rgba(245,158,11,0.2)", background: "rgba(245,158,11,0.04)" }}
                    >
                      Download CV
                    </motion.button>
                  </a>
                  <a href="https://github.com/masbin5" target="_blank" rel="noopener noreferrer">
                    <motion.button
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      className="px-7 py-3.5 text-sm font-medium tracking-wide rounded-full text-stone-300 border flex items-center gap-2 transition-all"
                      style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)" }}
                    >
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                      GitHub
                    </motion.button>
                  </a>
                </motion.div>
              </div>

              {/* Right: profile image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex-shrink-0"
              >
                {/* Decorative rings */}
                <div className="pulse-ring absolute inset-[-24px] rounded-[2.5rem] border" style={{ borderColor: "rgba(245,158,11,0.15)" }} />
                <div className="pulse-ring absolute inset-[-44px] rounded-[3rem] border" style={{ borderColor: "rgba(245,158,11,0.07)", animationDelay: "1.5s" }} />

                <div
                  className="relative w-64 h-72 rounded-[2rem] overflow-hidden border"
                  style={{ borderColor: "rgba(245,158,11,0.15)", background: "#1c1917" }}
                >
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 rounded-tl-2xl" style={{ borderColor: "rgba(245,158,11,0.5)" }} />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 rounded-br-2xl" style={{ borderColor: "rgba(245,158,11,0.5)" }} />

                  <img src="/profile/profile.jpg" alt="Bintang Akbar Alim" className="w-full h-full object-cover opacity-90" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(12,10,9,0.5) 0%, transparent 50%)" }} />
                </div>

                {/* Status badge */}
                <motion.div
                  onClick={() => setAvailable(!available)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-mono-dm tracking-wide cursor-pointer select-none"
                  style={{
                    background: available ? "rgba(245,158,11,0.1)" : "rgba(255,255,255,0.03)",
                    borderColor: available ? "rgba(245,158,11,0.3)" : "rgba(255,255,255,0.08)",
                    color: available ? "#fbbf24" : "#64748b",
                  }}
                >
                  {available && (
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
                    </span>
                  )}
                  {available ? "Available for work" : "Not Available"}
                </motion.div>
              </motion.div>
            </div>

            {/* Scroll hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
              <span className="font-mono-dm text-xs text-stone-600 tracking-widest uppercase">Scroll</span>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                className="w-[1px] h-8 rounded-full"
                style={{ background: "linear-gradient(to bottom, rgba(245,158,11,0.4), transparent)" }}
              />
            </motion.div>
          </motion.section>

          {/* ── MARQUEE STRIP ── */}
          <div className="relative overflow-hidden py-6 my-20 border-y" style={{ borderColor: "rgba(245,158,11,0.06)" }}>
            <div className="flex gap-16 marquee-track whitespace-nowrap">
              {["UI/UX Design", "Figma", "Next.js", "React.js", "Tailwind CSS", "Framer Motion", "Graphic Design", "Laravel", "Visual Branding", "UI/UX Design", "Figma", "Next.js", "React.js", "Tailwind CSS", "Framer Motion", "Graphic Design", "Laravel", "Visual Branding"].map((t, i) => (
                <span key={i} className="font-syne font-semibold text-sm tracking-widest uppercase" style={{ color: i % 3 === 1 ? "rgba(245,158,11,0.4)" : "rgba(255,255,255,0.06)" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* ── ABOUT ── */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
            className="max-w-5xl mx-auto mt-16"
          >
            <div className="flex flex-col md:flex-row gap-16">
              {/* Section numbering */}
              <div className="flex-shrink-0 md:w-16">
                <motion.div variants={itemVariants} className="sticky top-24">
                  <span className="font-mono-dm text-xs text-stone-700 block mb-2">01</span>
                  <div className="w-[1px] h-24 mx-auto" style={{ background: "linear-gradient(to bottom, rgba(245,158,11,0.3), transparent)" }} />
                </motion.div>
              </div>

              <div className="flex-1">
                <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
                  <div className="w-4 h-[1px]" style={{ background: "rgba(245,158,11,0.6)" }} />
                  <span className="font-mono-dm text-xs tracking-[0.2em] text-amber-400/70 uppercase">About Me</span>
                </motion.div>

                <motion.h2
                  variants={itemVariants}
                  className="font-syne font-bold text-4xl md:text-5xl mb-8 leading-tight"
                  style={{ letterSpacing: "-0.02em", color: "#fafaf9" }}
                >
                  Crafting digital solutions<br />
                  <span className="text-stone-500 font-normal">with passion.</span>
                </motion.h2>

                <motion.div variants={itemVariants} className="space-y-4 text-stone-500 leading-relaxed font-sans text-[0.95rem]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  <p>
                    Saya adalah <span className="text-amber-400/80 font-medium">UI/UX Designer</span>, <span className="text-amber-400/80 font-medium">Graphic Designer</span>, dan <span className="text-amber-400/80 font-medium">Junior Web Developer</span> dengan pengalaman lebih dari 2 tahun dalam merancang dan membangun solusi digital yang fungsional, estetis, serta berorientasi pada pengguna.
                  </p>
                  <p>
                    Dalam peran UI/UX, saya berfokus pada perancangan user flow, wireframing, dan prototyping menggunakan Figma untuk menciptakan pengalaman pengguna yang intuitif dan efisien. Sebagai Graphic Designer, saya terbiasa mengerjakan desain logo, visual branding, serta elemen grafis yang konsisten dengan identitas brand.
                  </p>
                  <p>
                    Sebagai Junior Web Developer, saya mampu mengimplementasikan desain ke dalam website yang responsif dan terstruktur menggunakan <span className="text-stone-300 font-medium">HTML, CSS, JavaScript</span>, serta framework modern seperti <span className="text-stone-300 font-medium">Next.js</span>, <span className="text-stone-300 font-medium">React.js</span> dan <span className="text-stone-300 font-medium">Laravel</span>.
                  </p>
                  <p>
                    Pendekatan saya selalu berpusat pada keseimbangan antara estetika visual yang menarik dan fungsionalitas yang solid, dengan tujuan menciptakan produk digital yang tidak hanya indah dilihat, tetapi juga mudah digunakan dan memberi dampak nyata.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* ── SKILLS ── */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
            className="max-w-5xl mx-auto mt-40"
          >
            <div className="flex flex-col md:flex-row gap-16">
              <div className="flex-shrink-0 md:w-16">
                <motion.div variants={itemVariants} className="sticky top-24">
                  <span className="font-mono-dm text-xs text-stone-700 block mb-2">02</span>
                  <div className="w-[1px] h-24 mx-auto" style={{ background: "linear-gradient(to bottom, rgba(245,158,11,0.3), transparent)" }} />
                </motion.div>
              </div>

              <div className="flex-1">
                <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
                  <div className="w-4 h-[1px]" style={{ background: "rgba(245,158,11,0.6)" }} />
                  <span className="font-mono-dm text-xs tracking-[0.2em] text-amber-400/70 uppercase">Skills & Expertise</span>
                </motion.div>

                <motion.h2
                  variants={itemVariants}
                  className="font-syne font-bold text-4xl md:text-5xl mb-12 leading-tight"
                  style={{ letterSpacing: "-0.02em", color: "#fafaf9" }}
                >
                  What I bring<br />
                  <span className="text-stone-500 font-normal">to the table.</span>
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-5">
                  {/* Frontend */}
                  <motion.div
                    variants={itemVariants}
                    className="card-hover-border relative rounded-2xl p-7 overflow-hidden border"
                    style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.06)" }}
                  >
                    <div className="absolute inset-0 rounded-2xl" style={{ background: "linear-gradient(135deg, rgba(245,158,11,0.03) 0%, transparent 60%)" }} />
                    <div className="relative">
                      <div className="flex items-center gap-3 mb-7">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm" style={{ background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.2)" }}>
                          ⌨
                        </div>
                        <h3 className="font-syne font-semibold text-sm tracking-wide text-amber-400">Frontend</h3>
                      </div>
                      {frontendSkills.map((s, i) => (
                        <div key={i} className="mb-5 last:mb-0">
                          <div className="flex justify-between text-xs mb-2">
                            <span className="text-stone-400 font-sans" style={{ fontFamily: "'DM Sans', sans-serif" }}>{s.name}</span>
                            <span className="font-mono-dm text-stone-600">{s.value}%</span>
                          </div>
                          <div className="h-[2px] rounded-full" style={{ background: "rgba(255,255,255,0.04)" }}>
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${s.value}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.4, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                              className="h-full rounded-full relative overflow-hidden"
                              style={{ background: "linear-gradient(90deg, #f59e0b, #fcd34d)" }}
                            >
                              <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)", animation: "shimmer2 2s infinite" }} />
                            </motion.div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* UI/UX */}
                  <motion.div
                    variants={itemVariants}
                    className="card-hover-border relative rounded-2xl p-7 overflow-hidden border"
                    style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.06)" }}
                  >
                    <div className="absolute inset-0 rounded-2xl" style={{ background: "linear-gradient(135deg, rgba(192,132,252,0.03) 0%, transparent 60%)" }} />
                    <div className="relative">
                      <div className="flex items-center gap-3 mb-7">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm" style={{ background: "rgba(192,132,252,0.1)", border: "1px solid rgba(192,132,252,0.2)" }}>
                          ◈
                        </div>
                        <h3 className="font-syne font-semibold text-sm tracking-wide text-purple-400">UI/UX & Design</h3>
                      </div>
                      {uiuxSkills.map((s, i) => (
                        <div key={i} className="mb-5 last:mb-0">
                          <div className="flex justify-between text-xs mb-2">
                            <span className="text-stone-400 font-sans" style={{ fontFamily: "'DM Sans', sans-serif" }}>{s.name}</span>
                            <span className="font-mono-dm text-stone-600">{s.value}%</span>
                          </div>
                          <div className="h-[2px] rounded-full" style={{ background: "rgba(255,255,255,0.04)" }}>
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${s.value}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.4, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                              className="h-full rounded-full"
                              style={{ background: "linear-gradient(90deg, #a855f7, #e879f9)" }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Backend */}
                  <motion.div
                    variants={itemVariants}
                    className="card-hover-border relative rounded-2xl p-7 overflow-hidden border"
                    style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.06)" }}
                  >
                    <div className="absolute inset-0 rounded-2xl" style={{ background: "linear-gradient(135deg, rgba(52,211,153,0.03) 0%, transparent 60%)" }} />
                    <div className="relative">
                      <div className="flex items-center gap-3 mb-7">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm" style={{ background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.2)" }}>
                          ⬢
                        </div>
                        <h3 className="font-syne font-semibold text-sm tracking-wide text-emerald-400">Backend</h3>
                      </div>
                      {backendSkills.map((s, i) => (
                        <div key={i} className="mb-5 last:mb-0">
                          <div className="flex justify-between text-xs mb-2">
                            <span className="text-stone-400 font-sans" style={{ fontFamily: "'DM Sans', sans-serif" }}>{s.name}</span>
                            <span className="font-mono-dm text-stone-600">{s.value}%</span>
                          </div>
                          <div className="h-[2px] rounded-full" style={{ background: "rgba(255,255,255,0.04)" }}>
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${s.value}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.4, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                              className="h-full rounded-full"
                              style={{ background: "linear-gradient(90deg, #34d399, #6ee7b7)" }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── WEB PROJECTS ── */}
          <motion.section
            id="web"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
            className="max-w-5xl mx-auto mt-40"
          >
            <div className="flex flex-col md:flex-row gap-16">
              <div className="flex-shrink-0 md:w-16">
                <motion.div variants={itemVariants} className="sticky top-24">
                  <span className="font-mono-dm text-xs text-stone-700 block mb-2">03</span>
                  <div className="w-[1px] h-24 mx-auto" style={{ background: "linear-gradient(to bottom, rgba(245,158,11,0.3), transparent)" }} />
                </motion.div>
              </div>

              <div className="flex-1">
                <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
                  <div className="w-4 h-[1px]" style={{ background: "rgba(245,158,11,0.6)" }} />
                  <span className="font-mono-dm text-xs tracking-[0.2em] text-amber-400/70 uppercase">Web Development</span>
                </motion.div>

                <motion.h2
                  variants={itemVariants}
                  className="font-syne font-bold text-4xl md:text-5xl mb-12 leading-tight"
                  style={{ letterSpacing: "-0.02em", color: "#fafaf9" }}
                >
                  Web Projects<br />
                  <span className="text-stone-500 font-normal">built from scratch.</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-5">
                  {webProjects.map((p, i) => (
                    <motion.div
                      key={i}
                      variants={itemVariants}
                      whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                      className="group card-hover-border relative rounded-2xl overflow-hidden border"
                      style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.06)" }}
                    >
                      {/* Image */}
                      <div className="relative w-full h-52 overflow-hidden">
                        <img src={p.image} alt={p.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-all duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0c0a09 0%, rgba(12,10,9,0.4) 60%, transparent 100%)" }} />
                        {/* Accent corner */}
                        <div className="absolute top-3 right-3 px-2 py-1 rounded-md font-mono-dm text-[10px] tracking-wide" style={{ background: "rgba(12,10,9,0.7)", color: p.accent, border: `1px solid ${p.accent}30` }}>
                          {p.duration}
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="font-syne font-bold text-lg text-stone-100 mb-2 tracking-tight">{p.title}</h3>
                        <p className="text-stone-500 text-sm leading-relaxed mb-5 font-sans" style={{ fontFamily: "'DM Sans', sans-serif" }}>{p.desc}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {p.tags.map((t, idx) => (
                            <span key={idx} className="text-xs px-3 py-1 rounded-full font-sans" style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.4)", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                              {t}
                            </span>
                          ))}
                        </div>

                        <a href={p.link} target="_blank" rel="noopener noreferrer">
                          <motion.button
                            whileHover={{ x: 4 }}
                            className="flex items-center gap-2 text-sm font-syne font-semibold tracking-wide"
                            style={{ color: p.accent }}
                          >
                            View Project
                            <span className="text-base">→</span>
                          </motion.button>
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── UI/UX PROJECTS ── */}
          <motion.section
            id="uiux"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
            className="max-w-5xl mx-auto mt-40"
          >
            <div className="flex flex-col md:flex-row gap-16">
              <div className="flex-shrink-0 md:w-16">
                <motion.div variants={itemVariants} className="sticky top-24">
                  <span className="font-mono-dm text-xs text-stone-700 block mb-2">04</span>
                  <div className="w-[1px] h-24 mx-auto" style={{ background: "linear-gradient(to bottom, rgba(245,158,11,0.3), transparent)" }} />
                </motion.div>
              </div>

              <div className="flex-1">
                <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
                  <div className="w-4 h-[1px]" style={{ background: "rgba(245,158,11,0.6)" }} />
                  <span className="font-mono-dm text-xs tracking-[0.2em] text-amber-400/70 uppercase">UI/UX Design</span>
                </motion.div>

                <motion.h2
                  variants={itemVariants}
                  className="font-syne font-bold text-4xl md:text-5xl mb-12 leading-tight"
                  style={{ letterSpacing: "-0.02em", color: "#fafaf9" }}
                >
                  UI/UX Projects<br />
                  <span className="text-stone-500 font-normal">user-centered design.</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-4">
                  {uiuxProjects.map((p, i) => (
                    <motion.div
                      key={i}
                      variants={itemVariants}
                      whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                      className="group card-hover-border relative rounded-2xl p-6 border overflow-hidden"
                      style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.06)" }}
                    >
                      {/* Accent blob */}
                      <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: `radial-gradient(circle, ${p.accent}10 0%, transparent 70%)`, transform: "translate(30%, -30%)" }} />

                      {/* Accent line top */}
                      <div className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl" style={{ background: `linear-gradient(90deg, transparent, ${p.accent}40, transparent)` }} />

                      <div className="relative">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-syne font-bold text-base text-stone-100 tracking-tight pr-4">{p.title}</h3>
                          <span className="font-mono-dm text-[10px] shrink-0 mt-1" style={{ color: p.accent }}>{p.duration}</span>
                        </div>
                        <p className="text-stone-500 text-sm leading-relaxed mb-5 font-sans" style={{ fontFamily: "'DM Sans', sans-serif" }}>{p.desc}</p>
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {p.tags.map((t, idx) => (
                            <span key={idx} className="text-xs px-2.5 py-0.5 rounded-full" style={{ color: "rgba(255,255,255,0.35)", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", fontFamily: "'DM Sans', sans-serif" }}>
                              {t}
                            </span>
                          ))}
                        </div>
                        <a href={p.link} target="_blank" rel="noopener noreferrer">
                          <motion.button
                            whileHover={{ x: 4 }}
                            className="flex items-center gap-2 text-xs font-syne font-semibold tracking-wide opacity-60 group-hover:opacity-100 transition-opacity"
                            style={{ color: p.accent }}
                          >
                            View Design →
                          </motion.button>
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── GRAPHIC DESIGN ── */}
          <motion.section
            id="graphic"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
            className="max-w-5xl mx-auto mt-40"
          >
            <div className="flex flex-col md:flex-row gap-16">
              <div className="flex-shrink-0 md:w-16">
                <motion.div variants={itemVariants} className="sticky top-24">
                  <span className="font-mono-dm text-xs text-stone-700 block mb-2">05</span>
                  <div className="w-[1px] h-24 mx-auto" style={{ background: "linear-gradient(to bottom, rgba(245,158,11,0.3), transparent)" }} />
                </motion.div>
              </div>

              <div className="flex-1">
                <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
                  <div className="w-4 h-[1px]" style={{ background: "rgba(245,158,11,0.6)" }} />
                  <span className="font-mono-dm text-xs tracking-[0.2em] text-amber-400/70 uppercase">Graphic Design</span>
                </motion.div>

                <motion.h2
                  variants={itemVariants}
                  className="font-syne font-bold text-4xl md:text-5xl mb-4 leading-tight"
                  style={{ letterSpacing: "-0.02em", color: "#fafaf9" }}
                >
                  Graphic Design<br />
                  <span className="text-stone-500 font-normal">posters & visuals.</span>
                </motion.h2>

                <motion.p variants={itemVariants} className="text-stone-500 mb-12 font-sans text-sm leading-relaxed max-w-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Karya desain grafis berupa poster, flyer, dan konten visual dengan pendekatan bold, kreatif, dan eye-catching.
                </motion.p>
                  <motion.div
                  variants={itemVariants}
                  className="card-hover-border relative rounded-2xl overflow-hidden border"
                  style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.06)" }}
                >
                  {/* Toolbar */}
                  <div
                    className="flex items-center justify-between px-5 py-3 border-b"
                    style={{ borderColor: "rgba(255,255,255,0.06)" }}
                  >
                    <span className="font-mono-dm text-xs text-stone-500 tracking-wide">
                      Bintang - Graphic Designer
                    </span>
                    <span className="font-mono-dm text-xs text-stone-600">
                      {graphicPages.length} halaman
                      
                    </span>
                  </div>

                  {/* Halaman langsung tersusun ke bawah, tanpa scroll di dalam kotak */}
                  <div className="flex flex-col gap-3 p-3" style={{ background: "#1c1917" }}>
                    {graphicPages.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={`Portfolio Graphic Designer - halaman ${i + 1}`}
                        loading="lazy"
                        className="w-full h-auto block rounded-lg"
                      />
                    ))}
                  </div>
                </motion.div>
                </div>
                </div>
          </motion.section>

          {/* ── BRANDING ── */}
          <motion.section
            id="branding"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
            className="max-w-5xl mx-auto mt-40"
          >
            <div className="flex flex-col md:flex-row gap-16">
              <div className="flex-shrink-0 md:w-16">
                <motion.div variants={itemVariants} className="sticky top-24">
                  <span className="font-mono-dm text-xs text-stone-700 block mb-2">06</span>
                  <div className="w-[1px] h-24 mx-auto" style={{ background: "linear-gradient(to bottom, rgba(245,158,11,0.3), transparent)" }} />
                </motion.div>
              </div>

              <div className="flex-1">
                <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
                  <div className="w-4 h-[1px]" style={{ background: "rgba(245,158,11,0.6)" }} />
                  <span className="font-mono-dm text-xs tracking-[0.2em] text-amber-400/70 uppercase">Branding</span>
                </motion.div>

                <motion.h2
                  variants={itemVariants}
                  className="font-syne font-bold text-4xl md:text-5xl mb-4 leading-tight"
                  style={{ letterSpacing: "-0.02em", color: "#fafaf9" }}
                >
                  Branding & Logo<br />
                  <span className="text-stone-500 font-normal">visual identity.</span>
                </motion.h2>

                <motion.p variants={itemVariants} className="text-stone-500 mb-12 font-sans text-sm leading-relaxed max-w-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Selain UI/UX, saya juga mengerjakan desain logo dan identitas visual untuk berbagai produk dan sistem digital dengan pendekatan modern dan bermakna.
                </motion.p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {["logo-intan.png", "logo-elecon.png", "logo-vicit.png", "logo-jojanjejen.png", "logo-novacreative.png", "logo-panggilaja.png", "logo-herardo.png", "logo-echorift.png", "logo-huttangerang.png", "logo-duniawaralaba.png"].map((logo, i) => (
                    <motion.div
                      key={i}
                      variants={itemVariants}
                      whileHover={{ scale: 1.04, y: -4 }}
                      className="group relative rounded-xl border flex items-center justify-center overflow-hidden transition-all duration-300"
                      style={{ aspectRatio: "1", background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.06)" }}
                    >
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" style={{ background: "linear-gradient(135deg, rgba(245,158,11,0.05) 0%, transparent 60%)" }} />
                      <div className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "linear-gradient(90deg, transparent, rgba(245,158,11,0.3), transparent)" }} />
                      <img
                      src={`/logos/${logo}`}
                      alt={logo}
                      className="absolute inset-0 w-full h-full p-6 md:p-8 object-contain grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100 z-10"
                    />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── CONTACT ── */}
          <motion.section
            id="contact"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
            className="max-w-5xl mx-auto mt-40 mb-0"
          >
            {/* Divider */}
            <div className="h-[1px] mb-20" style={{ background: "linear-gradient(90deg, transparent, rgba(245,158,11,0.15), transparent)" }} />

            <div className="text-center">
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-8">
                <div className="w-4 h-[1px]" style={{ background: "rgba(245,158,11,0.6)" }} />
                <span className="font-mono-dm text-xs tracking-[0.2em] text-amber-400/70 uppercase">Get In Touch</span>
                <div className="w-4 h-[1px]" style={{ background: "rgba(245,158,11,0.6)" }} />
              </motion.div>

              <motion.h2
                variants={itemVariants}
                className="font-syne font-bold text-5xl md:text-7xl mb-6 leading-tight"
                style={{ letterSpacing: "-0.03em", color: "#fafaf9" }}
              >
                Let&apos;s work<br />
                <span className="gold-shimmer">together.</span>
              </motion.h2>

              <motion.p variants={itemVariants} className="text-stone-500 mb-14 font-sans text-base max-w-md mx-auto leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Feel free to reach out for collaboration, freelance work, or full-time opportunities.
              </motion.p>

              <motion.div variants={containerVariants} className="flex flex-col md:flex-row justify-center gap-4 max-w-2xl mx-auto">
                {[
                  { icon: "📧", label: "masbin544@gmail.com", href: "mailto:masbin544@gmail.com", accent: "#60a5fa" },
                  { icon: "💬", label: "+62 817 7417 8707", href: "https://wa.me/6281774178707", accent: "#34d399" },
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                    ),
                    label: "github.com/masbin5",
                    href: "https://github.com/masbin5",
                    accent: "#818cf8",
                  },
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    variants={itemVariants}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="group flex items-center justify-center gap-3 px-7 py-5 rounded-2xl border flex-1 transition-all duration-300"
                    style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.06)" }}
                  >
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `radial-gradient(ellipse at center, ${item.accent}08 0%, transparent 70%)` }} />
                    <span className="text-xl group-hover:scale-110 transition-transform duration-300 relative z-10">{item.icon}</span>
                    <span className="text-sm font-sans relative z-10 transition-colors duration-300 text-stone-400 group-hover:text-stone-200" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {item.label}
                    </span>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.section>

          {/* ── FOOTER ── */}
          <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-5xl mx-auto mt-24 py-10 flex flex-col md:flex-row items-center justify-between gap-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
          >
            <span className="font-mono-dm text-xs text-stone-700 tracking-widest uppercase">
              © {new Date().getFullYear()} Bintang Akbar Alim
            </span>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(245,158,11,0.5)" }} />
              <span className="font-mono-dm text-xs text-stone-700 tracking-widest uppercase">
                UI/UX · Web Dev · Graphic Designer
              </span>
            </div>
          </motion.footer>
        </div>
      </div>
    </>
  );
}