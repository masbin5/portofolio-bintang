"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";

import Navbar from "@/components/Navbar";
import Section, { containerVariants, itemVariants } from "@/components/Section";
import MotionVideo from "@/components/MotionVideo";
import GithubIcon from "@/components/GithubIcon";
import {
  webProjects,
  uiuxProjects,
  motionVideos,
  graphicPages,
  skillGroups,
  marqueeItems,
  logos,
  scratches,
  grainUrl,
} from "@/lib/data";

const contacts = [
  { icon: "📧", label: "masbin544@gmail.com", href: "mailto:masbin544@gmail.com", accent: "#60a5fa" },
  { icon: "💬", label: "+62 817 7417 8707", href: "https://wa.me/6281774178707", accent: "#34d399" },
  { icon: <GithubIcon className="w-5 h-5" />, label: "github.com/masbin5", href: "https://github.com/masbin5", accent: "#818cf8" },
];

export default function Portfolio() {
  const [available, setAvailable] = useState<boolean>(true);

  /* Animasi hero saat scroll */
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.15], [1, 0.92]);
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -60]);

  /* Kursor kustom */
  const mouseX = useMotionValue(-100); // di luar layar sampai mouse bergerak
  const mouseY = useMotionValue(-100);
  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  /* Status "Available for work" disimpan di browser */
  useEffect(() => {
    const saved = localStorage.getItem("availability");
    if (saved !== null) setAvailable(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("availability", JSON.stringify(available));
  }, [available]);

  return (
    <>
      {/* Font + CSS global halaman ini */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Mono:ital,wght@0,300;0,400;1,300&display=swap');

        /* Kursor kustom hanya untuk mouse. Di HP/tablet sentuh disembunyikan. */
        @media (pointer: fine) { * { cursor: none !important; } }
        @media (pointer: coarse) { .custom-cursor { display: none !important; } }

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

        .shimmer-text {
          background: linear-gradient(90deg, #6ee7b7, #ecfdf5, #34d399, #d1fae5, #6ee7b7);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: text-shimmer 4s linear infinite;
        }

        .card-hover-border { transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1); }
        .card-hover-border:hover {
          box-shadow: 0 0 0 1px rgba(16, 185, 129, 0.25), 0 20px 60px -20px rgba(16, 185, 129, 0.1);
        }

        .marquee-track { animation: marquee 20s linear infinite; }
        .marquee-track:hover { animation-play-state: paused; }

        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: #0c0a09; }
        ::-webkit-scrollbar-thumb { background: rgba(16, 185, 129, 0.3); border-radius: 2px; }
      `}</style>

      {/* Menu navigasi (desktop: atas, HP: dock bawah) */}
      <Navbar />

      {/* Kursor kustom */}
      <motion.div
        className="custom-cursor fixed z-[9999] pointer-events-none"
        style={{ left: smoothX, top: smoothY, translateX: "-50%", translateY: "-50%" }}
      >
        <div className="w-4 h-4 rounded-full bg-emerald-400/80 mix-blend-difference" />
      </motion.div>
      <motion.div
        className="custom-cursor fixed z-[9998] pointer-events-none"
        style={{ left: mouseX, top: mouseY, translateX: "-50%", translateY: "-50%" }}
      >
        <div
          className="w-10 h-10 rounded-full border border-emerald-400/20 pointer-events-none"
          style={{ transition: "all 0.15s ease" }}
        />
      </motion.div>

      {/* Cahaya mengikuti kursor */}
      <motion.div
        className="custom-cursor fixed pointer-events-none z-0 rounded-full"
        style={{
          left: smoothX,
          top: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%)",
        }}
      />

      {/* ═════════ Pembungkus utama ═════════ */}
      <div
        className="min-h-screen text-stone-100 px-6 py-0 relative overflow-hidden font-syne"
        style={{ background: "#0c0a09" }}
      >
        {/* Background: gradasi hijau → hitam bergaya grunge */}
        <div className="absolute inset-x-0 top-0 h-[115vh] pointer-events-none z-0 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, #0f7a55 0%, #0d6647 12%, #0a4a35 28%, #07301f 46%, #06140e 64%, #0c0a09 82%)",
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
                  ? `linear-gradient(to bottom, rgba(209,250,229,${s.o}), transparent)`
                  : `linear-gradient(to bottom, rgba(0,0,0,${s.o * 2}), transparent)`,
              }}
            />
          ))}
        </div>

        {/* Grain film di seluruh halaman */}
        <div className="fixed inset-0 pointer-events-none z-[40]" style={{ backgroundImage: grainUrl, opacity: 0.09 }} />

        {/* Bentuk geometris melayang */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="geo-1 absolute" style={{ top: "12%", right: "8%", width: 60, height: 60, border: "1px solid rgba(16,185,129,0.16)", transform: "rotate(45deg)" }} />
          <div className="geo-2 absolute" style={{ top: "38%", left: "4%", width: 90, height: 90, border: "1px solid rgba(16,185,129,0.1)", borderRadius: "50%" }} />
          <div className="geo-3 absolute" style={{ bottom: "20%", left: "10%", width: 30, height: 30, border: "1px solid rgba(52,211,153,0.18)", transform: "rotate(30deg)" }} />
          <svg className="geo-1 absolute" style={{ top: "65%", right: "6%", opacity: 0.09 }} width="80" height="80" viewBox="0 0 80 80">
            <polygon points="40,4 76,68 4,68" fill="none" stroke="#10b981" strokeWidth="1" />
          </svg>
          <svg className="absolute" style={{ top: "25%", right: "18%", opacity: 0.05 }} width="120" height="120" viewBox="0 0 120 120">
            {Array.from({ length: 5 }).map((_, r) =>
              Array.from({ length: 5 }).map((_, c) => (
                <circle key={`${r}-${c}`} cx={c * 24 + 12} cy={r * 24 + 12} r="2" fill="#10b981" />
              ))
            )}
          </svg>
        </div>

        {/* Garis aksen atas */}
        <div className="fixed top-0 left-0 right-0 h-[1px] z-50" style={{ background: "linear-gradient(90deg, transparent, rgba(16,185,129,0.5), transparent)" }} />

        {/* Garis vertikal kiri */}
        <div className="fixed top-0 left-[3.5rem] bottom-0 w-px z-0 hidden md:block" style={{ background: "linear-gradient(to bottom, transparent, rgba(16,185,129,0.06) 20%, rgba(16,185,129,0.06) 80%, transparent)" }} />

        <div className="relative z-10">
          {/* ── HERO ── */}
          <motion.section
            style={{ opacity, scale, y: heroY }}
            className="max-w-5xl mx-auto min-h-screen flex flex-col justify-center pt-16"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="w-8 h-[1px]" style={{ background: "rgba(16,185,129,0.6)" }} />
              <span className="font-mono-dm text-xs tracking-[0.2em] text-emerald-400/70 uppercase">Portfolio 2026</span>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-12 items-start md:items-center">
              {/* Teks */}
              <div className="flex-1">
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="text-6xl md:text-[5.5rem] font-syne font-bold leading-[0.95] tracking-tight mb-6"
                >
                  <span className="text-stone-100 block">Designing</span>
                  <span className="block shimmer-text">intuitive</span>
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
                      style={{ background: "linear-gradient(135deg, #10b981, #34d399)" }}
                    >
                      <span className="relative z-10">Contact Me</span>
                    </motion.button>
                  </a>
                  <a href="/cv/Bintang-Akbar-Alim-CV.pdf" download>
                    <motion.button
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      className="px-7 py-3.5 text-sm font-medium tracking-wide rounded-full text-stone-300 border transition-all"
                      style={{ borderColor: "rgba(16,185,129,0.2)", background: "rgba(16,185,129,0.04)" }}
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
                      <GithubIcon />
                      GitHub
                    </motion.button>
                  </a>
                </motion.div>
              </div>

              {/* Foto profil */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex-shrink-0"
              >
                <div className="pulse-ring absolute inset-[-24px] rounded-[2.5rem] border" style={{ borderColor: "rgba(16,185,129,0.15)" }} />
                <div className="pulse-ring absolute inset-[-44px] rounded-[3rem] border" style={{ borderColor: "rgba(16,185,129,0.07)", animationDelay: "1.5s" }} />

                <div
                  className="relative w-64 h-72 rounded-[2rem] overflow-hidden border"
                  style={{ borderColor: "rgba(16,185,129,0.15)", background: "#1c1917" }}
                >
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 rounded-tl-2xl" style={{ borderColor: "rgba(16,185,129,0.5)" }} />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 rounded-br-2xl" style={{ borderColor: "rgba(16,185,129,0.5)" }} />
                  <img src="/profile/profile.jpg" alt="Bintang Akbar Alim" className="w-full h-full object-cover opacity-90" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(12,10,9,0.5) 0%, transparent 50%)" }} />
                </div>

                {/* Status badge */}
                <motion.div
                  onClick={() => setAvailable(!available)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-mono-dm tracking-wide cursor-pointer select-none whitespace-nowrap"
                  style={{
                    background: available ? "rgba(16,185,129,0.1)" : "rgba(255,255,255,0.03)",
                    borderColor: available ? "rgba(16,185,129,0.3)" : "rgba(255,255,255,0.08)",
                    color: available ? "#34d399" : "#64748b",
                  }}
                >
                  {available && (
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                    </span>
                  )}
                  {available ? "Available for work" : "Not Available"}
                </motion.div>
              </motion.div>
            </div>

            {/* Petunjuk scroll */}
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
                style={{ background: "linear-gradient(to bottom, rgba(16,185,129,0.4), transparent)" }}
              />
            </motion.div>
          </motion.section>

          {/* ── MARQUEE ── */}
          <div className="relative overflow-hidden py-6 my-20 border-y" style={{ borderColor: "rgba(16,185,129,0.06)" }}>
            <div className="flex gap-16 marquee-track whitespace-nowrap">
              {[...marqueeItems, ...marqueeItems].map((t, i) => (
                <span
                  key={i}
                  className="font-syne font-semibold text-sm tracking-widest uppercase"
                  style={{ color: i % 3 === 1 ? "rgba(16,185,129,0.4)" : "rgba(255,255,255,0.06)" }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* ── 01 ABOUT ── */}
          <Section num="01" label="About Me" title="Crafting digital solutions" subtitle="with passion." top="mt-16" titleMb="mb-8">
            <motion.div
              variants={itemVariants}
              className="space-y-4 text-stone-500 leading-relaxed font-sans text-[0.95rem]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <p>
                Saya adalah <span className="text-emerald-400/80 font-medium">UI/UX Designer</span>, <span className="text-emerald-400/80 font-medium">Graphic Designer</span>, dan <span className="text-emerald-400/80 font-medium">Junior Web Developer</span> dengan pengalaman lebih dari 2 tahun dalam merancang dan membangun solusi digital yang fungsional, estetis, serta berorientasi pada pengguna.
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
          </Section>

          {/* ── 02 SKILLS ── */}
          <Section num="02" label="Skills & Expertise" title="What I bring" subtitle="to the table.">
            <div className="grid md:grid-cols-3 gap-5">
              {skillGroups.map((g) => (
                <motion.div
                  key={g.title}
                  variants={itemVariants}
                  className="card-hover-border relative rounded-2xl p-7 overflow-hidden border"
                  style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.06)" }}
                >
                  <div className="absolute inset-0 rounded-2xl" style={{ background: "linear-gradient(135deg, rgba(16,185,129,0.05) 0%, transparent 60%)" }} />
                  <div className="relative">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm" style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.25)" }}>
                          {g.icon}
                        </div>
                        <h3 className="font-syne font-semibold text-sm tracking-wide text-emerald-400">{g.title}</h3>
                      </div>
                      <span className="font-mono-dm text-[10px] text-stone-600">{String(g.items.length).padStart(2, "0")}</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {g.items.map((t) => (
                        <span
                          key={t.name}
                          className="text-xs px-3 py-1.5 rounded-full transition-all duration-300 hover:-translate-y-0.5"
                          style={
                            t.core
                              ? { color: "#a7f3d0", background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.35)", fontFamily: "'DM Sans', sans-serif" }
                              : { color: "rgba(255,255,255,0.55)", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", fontFamily: "'DM Sans', sans-serif" }
                          }
                        >
                          {t.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="flex items-center gap-5 mt-6 font-mono-dm text-[10px] tracking-wide text-stone-600">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ background: "#10b981" }} /> Core stack
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ background: "rgba(255,255,255,0.25)" }} /> Familiar
              </span>
            </motion.div>
          </Section>

          {/* ── 03 WEB PROJECTS ── */}
          <Section id="web" num="03" label="Web Development" title="Web Projects" subtitle="built from scratch.">
            <div className="grid md:grid-cols-2 gap-5">
              {webProjects.map((p) => (
                <motion.div
                  key={p.title}
                  variants={itemVariants}
                  whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                  className="group card-hover-border relative rounded-2xl overflow-hidden border"
                  style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.06)" }}
                >
                  <div className="relative w-full h-52 overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-all duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0c0a09 0%, rgba(12,10,9,0.4) 60%, transparent 100%)" }} />
                    <div className="absolute top-3 right-3 px-2 py-1 rounded-md font-mono-dm text-[10px] tracking-wide" style={{ background: "rgba(12,10,9,0.7)", color: p.accent, border: `1px solid ${p.accent}30` }}>
                      {p.duration}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-syne font-bold text-lg text-stone-100 mb-2 tracking-tight">{p.title}</h3>
                    <p className="text-stone-500 text-sm leading-relaxed mb-5 font-sans" style={{ fontFamily: "'DM Sans', sans-serif" }}>{p.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {p.tags.map((t) => (
                        <span key={t} className="text-xs px-3 py-1 rounded-full font-sans" style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.4)", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                          {t}
                        </span>
                      ))}
                    </div>
                    <a href={p.link} target="_blank" rel="noopener noreferrer">
                      <motion.button whileHover={{ x: 4 }} className="flex items-center gap-2 text-sm font-syne font-semibold tracking-wide" style={{ color: p.accent }}>
                        View Project
                        <span className="text-base">→</span>
                      </motion.button>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </Section>

          {/* ── 04 UI/UX ── */}
          <Section id="uiux" num="04" label="UI/UX Design" title="UI/UX Projects" subtitle="user-centered design.">
            <div className="grid md:grid-cols-2 gap-4">
              {uiuxProjects.map((p) => (
                <motion.div
                  key={p.title}
                  variants={itemVariants}
                  whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                  className="group card-hover-border relative rounded-2xl p-6 border overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.06)" }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: `radial-gradient(circle, ${p.accent}10 0%, transparent 70%)`, transform: "translate(30%, -30%)" }} />
                  <div className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl" style={{ background: `linear-gradient(90deg, transparent, ${p.accent}40, transparent)` }} />

                  <div className="relative">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-syne font-bold text-base text-stone-100 tracking-tight pr-4">{p.title}</h3>
                      <span className="font-mono-dm text-[10px] shrink-0 mt-1" style={{ color: p.accent }}>{p.duration}</span>
                    </div>
                    <p className="text-stone-500 text-sm leading-relaxed mb-5 font-sans" style={{ fontFamily: "'DM Sans', sans-serif" }}>{p.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {p.tags.map((t) => (
                        <span key={t} className="text-xs px-2.5 py-0.5 rounded-full" style={{ color: "rgba(255,255,255,0.35)", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", fontFamily: "'DM Sans', sans-serif" }}>
                          {t}
                        </span>
                      ))}
                    </div>
                    <a href={p.link} target="_blank" rel="noopener noreferrer">
                      <motion.button whileHover={{ x: 4 }} className="flex items-center gap-2 text-xs font-syne font-semibold tracking-wide opacity-60 group-hover:opacity-100 transition-opacity" style={{ color: p.accent }}>
                        View Design →
                      </motion.button>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </Section>

          {/* ── 05 MOTION GRAPHIC ── */}
          <Section
            id="motion"
            num="05"
            label="Motion Graphic"
            title="Motion Graphic"
            subtitle="bringing ideas to life."
            desc="Kumpulan karya motion graphic dan video pendek untuk brand, produk, dan konten sosial media."
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {motionVideos.map((v) => (
                <motion.div key={v.src} variants={itemVariants}>
                  <MotionVideo {...v} />
                </motion.div>
              ))}
            </div>
          </Section>

          {/* ── 06 GRAPHIC DESIGN ── */}
          <Section
            id="graphic"
            num="06"
            label="Graphic Design"
            title="Graphic Design"
            subtitle="posters & visuals."
            desc="Karya desain grafis berupa poster, flyer, dan konten visual dengan pendekatan bold, kreatif, dan eye-catching."
          >
            <motion.div
              variants={itemVariants}
              className="card-hover-border relative rounded-2xl overflow-hidden border"
              style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.06)" }}
            >
              <div className="flex items-center justify-between px-5 py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                <span className="font-mono-dm text-xs text-stone-500 tracking-wide">Bintang - Graphic Designer</span>
                <span className="font-mono-dm text-xs text-stone-600">{graphicPages.length} halaman</span>
              </div>

              <div className="flex flex-col gap-3 p-3" style={{ background: "#1c1917" }}>
                {graphicPages.map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt={`Portfolio Graphic Designer - halaman ${i + 1}`}
                    loading="lazy"
                    className="w-full h-auto block rounded-lg"
                  />
                ))}
              </div>
            </motion.div>
          </Section>

          {/* ── 07 BRANDING ── */}
          <Section
            id="branding"
            num="07"
            label="Branding"
            title="Branding & Logo"
            subtitle="visual identity."
            desc="Selain UI/UX, saya juga mengerjakan desain logo dan identitas visual untuk berbagai produk dan sistem digital dengan pendekatan modern dan bermakna."
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {logos.map((logo) => (
                <motion.div
                  key={logo}
                  variants={itemVariants}
                  whileHover={{ scale: 1.04, y: -4 }}
                  className="group relative rounded-xl border flex items-center justify-center overflow-hidden transition-all duration-300"
                  style={{ aspectRatio: "1", background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.06)" }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" style={{ background: "linear-gradient(135deg, rgba(16,185,129,0.05) 0%, transparent 60%)" }} />
                  <div className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "linear-gradient(90deg, transparent, rgba(16,185,129,0.3), transparent)" }} />
                  <img
                    src={`/logos/${logo}`}
                    alt={logo}
                    className="absolute inset-0 w-full h-full p-6 md:p-8 object-contain grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100 z-10"
                  />
                </motion.div>
              ))}
            </div>
          </Section>

          {/* ── CONTACT ── */}
          <motion.section
            id="contact"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
            className="max-w-5xl mx-auto mt-40 mb-0"
          >
            <div className="h-[1px] mb-20" style={{ background: "linear-gradient(90deg, transparent, rgba(16,185,129,0.15), transparent)" }} />

            <div className="text-center">
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-8">
                <div className="w-4 h-[1px]" style={{ background: "rgba(16,185,129,0.6)" }} />
                <span className="font-mono-dm text-xs tracking-[0.2em] text-emerald-400/70 uppercase">Get In Touch</span>
                <div className="w-4 h-[1px]" style={{ background: "rgba(16,185,129,0.6)" }} />
              </motion.div>

              <motion.h2
                variants={itemVariants}
                className="font-syne font-bold text-5xl md:text-7xl mb-6 leading-tight"
                style={{ letterSpacing: "-0.03em", color: "#fafaf9" }}
              >
                Let&apos;s work<br />
                <span className="shimmer-text">together.</span>
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-stone-500 mb-14 font-sans text-base max-w-md mx-auto leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Feel free to reach out for collaboration, freelance work, or full-time opportunities.
              </motion.p>

              <motion.div variants={containerVariants} className="flex flex-col md:flex-row justify-center gap-4 max-w-2xl mx-auto">
                {contacts.map((c) => (
                  <motion.a
                    key={c.href}
                    variants={itemVariants}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="group relative overflow-hidden flex items-center justify-center gap-3 px-7 py-5 rounded-2xl border flex-1 transition-all duration-300"
                    style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.06)" }}
                  >
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `radial-gradient(ellipse at center, ${c.accent}14 0%, transparent 70%)` }} />
                    <span className="text-xl group-hover:scale-110 transition-transform duration-300 relative z-10">{c.icon}</span>
                    <span className="text-sm font-sans relative z-10 transition-colors duration-300 text-stone-400 group-hover:text-stone-200" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {c.label}
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
            className="max-w-5xl mx-auto mt-24 pt-10 pb-28 md:pb-10 flex flex-col md:flex-row items-center justify-between gap-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
          >
            <span className="font-mono-dm text-xs text-stone-700 tracking-widest uppercase">
              © {new Date().getFullYear()} Bintang Akbar Alim
            </span>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(16,185,129,0.5)" }} />
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
