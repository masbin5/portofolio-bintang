"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, type Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  const [available, setAvailable] = useState<boolean>(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.15], [1, 0.92]);
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -60]);

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
      title: "Web Project – Company Profile (Unfinished)",
      desc: "Company profile website designed with a clean and structured layout, featuring a modern hero section, organized content hierarchy, responsive design, and scalable components.",
      duration: "3 Minggu",
      tags: ["Next.js", "Tailwind", "Responsive"],
      link: "https://taxmin-platform.vercel.app/",
      image: "/projects/compro-web.png",
      accent: "#34d399",
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

  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Mono:ital,wght@0,300;0,400;1,300&display=swap');

        * { cursor: none !important; }

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
          background: "radial-gradient(circle, rgba(245,158,11,0.04) 0%, transparent 70%)",
        }}
      />

      <div
        className="min-h-screen text-stone-100 px-6 py-0 relative overflow-hidden font-syne"
        style={{ background: "#0c0a09" }}
      >
        {/* Background: warm mesh */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div style={{ position: "absolute", top: "-5%", left: "-10%", width: 700, height: 700, background: "radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 65%)", borderRadius: "50%", filter: "blur(40px)" }} />
          <div style={{ position: "absolute", bottom: "5%", right: "-5%", width: 550, height: 550, background: "radial-gradient(circle, rgba(251,191,36,0.04) 0%, transparent 65%)", borderRadius: "50%", filter: "blur(60px)" }} />
          <div style={{ position: "absolute", top: "45%", left: "55%", width: 400, height: 400, background: "radial-gradient(circle, rgba(196,181,253,0.04) 0%, transparent 65%)", borderRadius: "50%", filter: "blur(60px)" }} />
        </div>

        {/* Floating geometric shapes */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Diamond top-right */}
          <div className="geo-1 absolute" style={{ top: "12%", right: "8%", width: 60, height: 60, border: "1px solid rgba(245,158,11,0.12)", transform: "rotate(45deg)" }} />
          {/* Circle mid-left */}
          <div className="geo-2 absolute" style={{ top: "38%", left: "4%", width: 90, height: 90, border: "1px solid rgba(245,158,11,0.07)", borderRadius: "50%" }} />
          {/* Small square bottom-left */}
          <div className="geo-3 absolute" style={{ bottom: "20%", left: "10%", width: 30, height: 30, border: "1px solid rgba(251,191,36,0.15)", transform: "rotate(30deg)" }} />
          {/* Triangle-ish polygon */}
          <svg className="geo-1 absolute" style={{ top: "65%", right: "6%", opacity: 0.07 }} width="80" height="80" viewBox="0 0 80 80">
            <polygon points="40,4 76,68 4,68" fill="none" stroke="#f59e0b" strokeWidth="1" />
          </svg>
          {/* Dotted grid pattern */}
          <svg className="absolute" style={{ top: "25%", right: "18%", opacity: 0.04 }} width="120" height="120" viewBox="0 0 120 120">
            {Array.from({ length: 5 }).map((_, r) =>
              Array.from({ length: 5 }).map((_, c) => (
                <circle key={`${r}-${c}`} cx={c * 24 + 12} cy={r * 24 + 12} r="2" fill="#f59e0b" />
              ))
            )}
          </svg>
        </div>

        {/* Top border accent line */}
        <div className="fixed top-0 left-0 right-0 h-[1px] z-50" style={{ background: "linear-gradient(90deg, transparent, rgba(245,158,11,0.5), transparent)" }} />

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
              <span className="font-mono-dm text-xs tracking-[0.2em] text-amber-400/70 uppercase">Portfolio 2025</span>
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {[
                    {
                      image: "/graphic/IRON_MAN.png",
                      title: "Iron Man Poster",
                      desc: "Fan-made cinematic poster — Iron Man as Tony Stark.",
                      tags: ["Poster", "Cinematic", "Fan Art"],
                      accent: "#ef4444",
                    },
                    {
                      image: "/graphic/CAPTAIN_AMERICA.png",
                      title: "Captain America Poster",
                      desc: "Fan-made cinematic poster — Captain America as Steve Rogers.",
                      tags: ["Poster", "Cinematic", "Fan Art"],
                      accent: "#3b82f6",
                    },
                    {
                      image: "/graphic/GOAT.png",
                      title: "The GOAT – Lionel Messi",
                      desc: "Stats infographic poster for Lionel Messi with bold typographic layout.",
                      tags: ["Poster", "Sports", "Infographic"],
                      accent: "#a3e635",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      variants={itemVariants}
                      whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                      className="group card-hover-border relative rounded-2xl overflow-hidden border"
                      style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.06)" }}
                    >
                      {/* Image */}
                      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "3/4" }}>
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover object-top opacity-85 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0c0a09 0%, rgba(12,10,9,0.3) 50%, transparent 100%)" }} />
                        {/* Accent top line on hover */}
                        <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(90deg, transparent, ${item.accent}80, transparent)` }} />
                      </div>

                      <div className="p-5">
                        <h3 className="font-syne font-bold text-base text-stone-100 mb-1 tracking-tight">{item.title}</h3>
                        <p className="text-stone-500 text-xs leading-relaxed mb-4 font-sans" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item.desc}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {item.tags.map((t, idx) => (
                            <span key={idx} className="text-xs px-2.5 py-0.5 rounded-full" style={{ color: item.accent, background: `${item.accent}12`, border: `1px solid ${item.accent}25`, fontFamily: "'DM Sans', sans-serif" }}>
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── BRANDING ── */}
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
                  {["logo-intan.png", "logo-elecon.png", "logo-vicit.png", "logo-jojanjejen.png", "logo-novacreative.png", "logo-panggilaja.png", "logo-herardo.png", "logo-echorift.png"].map((logo, i) => (
                    <motion.div
                      key={i}
                      variants={itemVariants}
                      whileHover={{ scale: 1.04, y: -4 }}
                      className="group relative rounded-xl border flex items-center justify-center overflow-hidden transition-all duration-300"
                      style={{ aspectRatio: "1", background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.06)" }}
                    >
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" style={{ background: "linear-gradient(135deg, rgba(245,158,11,0.05) 0%, transparent 60%)" }} />
                      <div className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "linear-gradient(90deg, transparent, rgba(245,158,11,0.3), transparent)" }} />
                      <img src={`/logos/${logo}`} alt={logo} className="h-14 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500 opacity-50 group-hover:opacity-100 relative z-10" />
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