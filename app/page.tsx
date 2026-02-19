"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  const [available, setAvailable] = useState<boolean>(true);
  const [stars, setStars] = useState<
    { top: number; left: number; size: number; duration: number; delay: number }[]
  >([]);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  // ✅ Persist availability status
  useEffect(() => {
    const saved = localStorage.getItem("availability");
    if (saved !== null) {
      setAvailable(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("availability", JSON.stringify(available));
  }, [available]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 50 }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      duration: Math.random() * 8 + 8,
      delay: Math.random() * 5,
    }));

    setStars(generatedStars);
  }, []);

  const webProjects = [
    {
      title: "Website Portfolio Interaktif",
      desc: "Website portfolio personal dengan animasi modern, smooth transitions, dan interactive elements menggunakan Next.js dan Framer Motion.",
      duration: "2 Minggu",
      tags: ["Next.js", "Framer Motion", "Tailwind"],
      link: "https://projek-landingpage-cbda.vercel.app/",
      image: "/projects/portofolio-web.png",
      gradient: "from-violet-500/10 to-fuchsia-500/10",
      borderGradient: "hover:border-violet-500/50",
      shadowColor: "hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]",
    },
    {
      title: "Web Project – Company Profile (Unfinished)",
      desc: "Company profile website designed with a clean and structured layout, featuring a modern hero section, organized content hierarchy, responsive design, and scalable components.",
      duration: "3 Minggu",
      tags: ["Next.js", "Tailwind", "Responsive"],
      link: "https://taxmin-platform.vercel.app/",
      image: "/projects/compro-web.png",
      gradient: "from-cyan-500/10 to-blue-500/10",
      borderGradient: "hover:border-cyan-500/50",
      shadowColor: "hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]",
    },
  ];

  const uiuxProjects = [
    {
      title: "Uper-Food",
      desc: "Aplikasi pemesanan makanan iOS & Android dengan UX fokus ke kecepatan dan kemudahan order.",
      duration: "1 Minggu",
      tags: ["UI/UX", "Mobile App", "Figma"],
      link: "https://www.figma.com/design/xjtxgCb06ehlCZN1yaZjFq/Uper-Food?node-id=0-1",
      gradient: "from-amber-500/10 to-orange-500/10",
      borderGradient: "hover:border-amber-500/50",
      shadowColor: "hover:shadow-[0_0_40px_rgba(245,158,11,0.15)]",
    },
    {
      title: "Elecon-Apps",
      desc: "Aplikasi layanan elektrik & elektronik dengan tampilan modern dan efisien.",
      duration: "1+ Minggu",
      tags: ["UI/UX", "Mobile", "Dashboard"],
      link: "https://www.figma.com/design/lOAx5XRpjt8UJ2uKxAXDkT/Elecon-Apps?node-id=0-1",
      gradient: "from-blue-500/10 to-cyan-500/10",
      borderGradient: "hover:border-blue-500/50",
      shadowColor: "hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]",
    },
    {
      title: "ViCit Try-On Visual",
      desc: "Aplikasi & website virtual try-on untuk fashion dengan pendekatan visual interaktif.",
      duration: "3 Minggu",
      tags: ["UI/UX", "Web App", "Prototype"],
      link: "https://www.figma.com/design/trkZJNl5Jjrvyuf6V0mye3/ViCit-Try-on-Visual?node-id=0-1",
      gradient: "from-purple-500/10 to-pink-500/10",
      borderGradient: "hover:border-purple-500/50",
      shadowColor: "hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]",
    },
    {
      title: "APP-Tau Kajian",
      desc: "Aplikasi pencarian kajian edukasi & keagamaan dengan UX sederhana dan informatif.",
      duration: "1+ Minggu",
      tags: ["UI/UX", "Mobile", "Research"],
      link: "https://www.figma.com/design/t3KMTo1RzkNJnTLGzw9XR2/APP-Tau-Kajian?node-id=2-34",
      gradient: "from-emerald-500/10 to-teal-500/10",
      borderGradient: "hover:border-emerald-500/50",
      shadowColor: "hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]",
    },
    {
      title: "Panggil Aja",
      desc: "Aplikasi layanan on-demand berbasis desktop dengan alur pemesanan yang ringkas.",
      duration: "1+ Minggu",
      tags: ["UI/UX", "Desktop App"],
      link: "https://www.figma.com/design/2RvM70FmM6RY1WMC0V85UY/Panggil-Aja?node-id=0-1",
      gradient: "from-rose-500/10 to-red-500/10",
      borderGradient: "hover:border-rose-500/50",
      shadowColor: "hover:shadow-[0_0_40px_rgba(244,63,94,0.15)]",
    },
    {
      title: "Website Survei Harian PTTUN",
      desc: "Redesign dan pembaruan tampilan website survei harian agar lebih modern dan mudah digunakan.",
      duration: "2 Minggu",
      tags: ["Website", "UI Redesign"],
      link: "https://survei-harian.pttun-banjarmasin.go.id/",
      gradient: "from-indigo-500/10 to-violet-500/10",
      borderGradient: "hover:border-indigo-500/50",
      shadowColor: "hover:shadow-[0_0_40px_rgba(99,102,241,0.15)]",
    },
    {
      title: "INTAN – Integrasi Administrasi & Kepegawaian",
      desc: "Website internal untuk integrasi administrasi dan kepegawaian.",
      duration: "1 Bulan",
      tags: ["Website", "Internal System"],
      link: "#",
      gradient: "from-slate-500/10 to-gray-500/10",
      borderGradient: "hover:border-slate-500/50",
      shadowColor: "hover:shadow-[0_0_40px_rgba(100,116,139,0.15)]",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 px-6 py-16 relative overflow-hidden"
      style={{ fontFamily: "'DM Sans', 'Inter', sans-serif" }}
    >
      {/* Subtle noise texture overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Animated background stars */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {stars.map((star, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Refined gradient orbs — more subtle & sophisticated */}
      <div className="fixed top-[-10%] left-[-5%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="fixed top-[40%] left-[50%] w-[400px] h-[400px] bg-sky-600/5 rounded-full blur-[140px] pointer-events-none -translate-x-1/2" />

      {/* Thin top border line — luxury detail */}
      <div className="fixed top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent z-50" />

      <div className="relative z-10">
        {/* HERO */}
        <motion.section
          style={{ opacity, scale }}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center mb-10"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative w-44 h-44 rounded-full flex items-center justify-center group"
            >
              {/* Galaxy star particles */}
              <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
                {stars.slice(0, 20).map((star, i) => (
                  <motion.span
                    key={i}
                    className="absolute rounded-full bg-white/70"
                    style={{
                      top: `${star.top}%`,
                      left: `${star.left}%`,
                      width: `${star.size}px`,
                      height: `${star.size}px`,
                    }}
                    animate={{
                      opacity: [0.4, 1, 0.4],
                      y: [-4, 4, -4],
                    }}
                    transition={{
                      duration: star.duration,
                      delay: star.delay,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>

              {/* Galaxy glow with animation */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-500/25 via-indigo-500/25 to-purple-500/25 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Rotating ring — thinner, more refined */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0%, rgba(99,102,241,0.4) 50%, transparent 100%)",
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Hover ring */}
              <div className="absolute inset-0 rounded-full border border-indigo-400/40 opacity-0 group-hover:opacity-100 transition-all duration-500" />

              {/* Profile image */}
              <motion.div
                className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-white/10 bg-slate-900 z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src="/profile/profile.jpg"
                  alt="Bintang Akbar Alim"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Status badge */}
              <motion.span
                onClick={() => setAvailable(!available)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`absolute bottom-2 right-2 z-20 px-3 py-1 text-xs rounded-full cursor-pointer shadow-lg transition-all duration-300 ${
                  available
                    ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-indigo-500/20"
                    : "bg-slate-800 text-slate-400 border border-slate-700"
                }`}
              >
                <span className="relative flex items-center gap-2">
                  {available && (
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </span>
                  )}
                  {available ? "Available" : "Not Available"}
                </span>
              </motion.span>
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-light leading-tight tracking-tight"
            style={{ letterSpacing: "-0.03em" }}
          >
            <span className="text-white/90">Designing{" "}</span>
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #818cf8, #a78bfa, #e879f9)" }}
            >
              intuitive
            </span>
            <br />
            <span className="text-white/60 font-extralight">digital experiences</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 text-slate-500 max-w-xl mx-auto text-lg font-light tracking-wide"
          >
            UI/UX, Web Junior Dev & Graphic Designer with 2+ year experience crafting clean,
            functional, and elegant digital products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-10 flex justify-center gap-4 flex-wrap"
          >
            <Button
              className="rounded-full px-7 py-5 text-sm font-medium tracking-wide border-0 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/30"
              style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
            >
              Contact Me
            </Button>
            <a href="/cv/Bintang-Akbar-Alim-CV.pdf" download>
              <Button
                variant="outline"
                className="rounded-full px-7 py-5 text-sm font-medium tracking-wide border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 text-slate-300"
              >
                Download CV
              </Button>
            </a>
            {/* GitHub Button */}
            <a href="https://github.com/masbin5" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="rounded-full px-7 py-5 text-sm font-medium tracking-wide border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-indigo-500/40 transition-all duration-300 hover:scale-105 text-slate-300 flex items-center gap-2"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </Button>
            </a>
          </motion.div>
        </motion.section>

        {/* ABOUT */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto mt-40"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex mb-6 px-4 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5"
          >
            <h2 className="text-xs font-medium tracking-[0.15em] text-indigo-400 uppercase">
              About Me
            </h2>
          </motion.div>

          <motion.h3
            variants={itemVariants}
            className="text-3xl md:text-5xl font-light mb-8 tracking-tight text-white/90"
            style={{ letterSpacing: "-0.02em" }}
          >
            Crafting digital solutions with passion
          </motion.h3>

          <motion.p variants={itemVariants} className="text-slate-400 leading-relaxed mb-4 text-lg font-light">
            Saya adalah <span className="text-indigo-400 font-normal">UI/UX Designer</span>, <span className="text-indigo-400 font-normal">Graphic Designer</span>, dan <span className="text-indigo-400 font-normal">Junior Web Developer</span> dengan pengalaman lebih dari satu tahun dalam merancang dan membangun solusi digital yang fungsional, estetis, serta berorientasi pada pengguna.
          </motion.p>

          <motion.p variants={itemVariants} className="text-slate-500 leading-relaxed mb-4 font-light">
            Dalam peran UI/UX, saya berfokus pada perancangan user flow, wireframing, dan
            prototyping menggunakan Figma untuk menciptakan pengalaman pengguna yang
            intuitif dan efisien. Sebagai Graphic Designer, saya terbiasa mengerjakan
            desain logo, visual branding, serta elemen grafis yang konsisten dengan
            identitas brand.
          </motion.p>

          <motion.p variants={itemVariants} className="text-slate-500 leading-relaxed mb-4 font-light">
            Sebagai Junior Web Developer, saya mampu mengimplementasikan desain ke dalam website yang responsif dan terstruktur menggunakan <span className="text-indigo-400 font-normal">HTML, CSS, JavaScript</span>, serta framework modern seperti <span className="text-indigo-400 font-normal">Next.js</span> dan <span className="text-indigo-400 font-normal">Laravel</span>, dengan fokus pada performa dan aksesibilitas.
          </motion.p>

          <motion.p variants={itemVariants} className="text-slate-500 leading-relaxed font-light">
            Pendekatan saya selalu berpusat pada keseimbangan antara estetika visual yang
            menarik dan fungsionalitas yang solid, dengan tujuan menciptakan produk digital
            yang tidak hanya indah dilihat, tetapi juga mudah digunakan dan memberi dampak
            nyata bagi pengguna maupun bisnis.
          </motion.p>
        </motion.section>

        {/* SKILLS */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-5xl mx-auto mt-40"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex mb-6 px-4 py-1.5 rounded-full border border-sky-500/20 bg-sky-500/5"
          >
            <h2 className="text-xs font-medium tracking-[0.15em] text-sky-400 uppercase">
              Skills & Expertise
            </h2>
          </motion.div>

          <motion.h3
            variants={itemVariants}
            className="text-3xl md:text-5xl font-light mb-12 tracking-tight text-white/90"
            style={{ letterSpacing: "-0.02em" }}
          >
            What I bring to the table
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-5">
            {/* Frontend */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="group relative bg-white/[0.03] backdrop-blur-xl border border-white/8 rounded-2xl p-8 overflow-hidden transition-all duration-500 hover:border-sky-500/30 hover:bg-white/[0.05]"
              style={{ borderColor: "rgba(255,255,255,0.07)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              <div className="relative">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-6 text-xl"
                  style={{ background: "linear-gradient(135deg, rgba(14,165,233,0.2), rgba(6,182,212,0.2))", border: "1px solid rgba(14,165,233,0.3)" }}>
                  💻
                </div>

                <h3 className="text-base font-medium mb-6 text-sky-400 tracking-wide">Frontend Development</h3>

                {[
                  { name: "HTML", value: "95%" },
                  { name: "CSS / Tailwind", value: "90%" },
                  { name: "JavaScript", value: "85%" },
                  { name: "React / Next.js", value: "75%" },
                ].map((skill, i) => (
                  <div key={i} className="mb-5 last:mb-0">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-400 font-light">{skill.name}</span>
                      <span className="text-slate-600 font-mono text-xs">{skill.value}</span>
                    </div>
                    <div className="h-[3px] rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.value }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
                        className="h-full rounded-full relative overflow-hidden"
                        style={{ background: "linear-gradient(90deg, #0ea5e9, #22d3ee)" }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent shimmer-animation" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* UI/UX */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="group relative backdrop-blur-xl border rounded-2xl p-8 overflow-hidden transition-all duration-500 hover:border-indigo-500/30"
              style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              <div className="relative">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-6 text-xl"
                  style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.2), rgba(168,85,247,0.2))", border: "1px solid rgba(99,102,241,0.3)" }}>
                  🎨
                </div>

                <h3 className="text-base font-medium mb-6 text-indigo-400 tracking-wide">UI/UX & Design</h3>

                {[
                  { name: "Figma", value: "90%" },
                  { name: "Wireframing", value: "85%" },
                  { name: "Prototyping", value: "88%" },
                  { name: "User Flow", value: "80%" },
                  { name: "Design System", value: "65%" },
                ].map((skill, i) => (
                  <div key={i} className="mb-5 last:mb-0">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-400 font-light">{skill.name}</span>
                      <span className="text-slate-600 font-mono text-xs">{skill.value}</span>
                    </div>
                    <div className="h-[3px] rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.value }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
                        className="h-full rounded-full relative overflow-hidden"
                        style={{ background: "linear-gradient(90deg, #6366f1, #a855f7)" }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent shimmer-animation" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Backend */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="group relative backdrop-blur-xl border rounded-2xl p-8 overflow-hidden transition-all duration-500 hover:border-emerald-500/30"
              style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              <div className="relative">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-6 text-xl"
                  style={{ background: "linear-gradient(135deg, rgba(16,185,129,0.2), rgba(34,197,94,0.2))", border: "1px solid rgba(16,185,129,0.3)" }}>
                  ⚙️
                </div>

                <h3 className="text-base font-medium mb-6 text-emerald-400 tracking-wide">Backend</h3>

                {[
                  { name: "MySQL", value: "75%" },
                  { name: "Laravel", value: "70%" },
                  { name: "Node.js", value: "65%" },
                ].map((skill, i) => (
                  <div key={i} className="mb-5 last:mb-0">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-400 font-light">{skill.name}</span>
                      <span className="text-slate-600 font-mono text-xs">{skill.value}</span>
                    </div>
                    <div className="h-[3px] rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.value }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
                        className="h-full rounded-full relative overflow-hidden"
                        style={{ background: "linear-gradient(90deg, #10b981, #4ade80)" }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent shimmer-animation" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* WEB PROJECTS */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-5xl mx-auto mt-40"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex mb-6 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5"
          >
            <h2 className="text-xs font-medium tracking-[0.15em] text-blue-400 uppercase">
              Web Development
            </h2>
          </motion.div>

          <motion.h3
            variants={itemVariants}
            className="text-3xl md:text-5xl font-light mb-12 tracking-tight text-white/90"
            style={{ letterSpacing: "-0.02em" }}
          >
            Web Projects
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-5">
            {webProjects.map((p, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group"
              >
                <Card
                  className="backdrop-blur-xl border rounded-2xl h-full overflow-hidden transition-all duration-500"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    borderColor: "rgba(255,255,255,0.07)",
                  }}
                >
                  <CardContent className="p-0 flex flex-col h-full relative">
                    {/* Image Cover */}
                    <div className="relative w-full h-52 overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-[#080c14]/60 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-7 flex flex-col justify-between flex-1">
                      <div className="space-y-4">
                        <h3 className="text-xl font-medium text-white/90 tracking-tight">
                          {p.title}
                        </h3>
                        <p className="text-slate-500 leading-relaxed text-sm font-light">
                          {p.desc}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {p.tags.map((t, idx) => (
                            <span
                              key={idx}
                              className="text-xs px-3 py-1 rounded-full text-slate-400 border"
                              style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.04)" }}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-6 border-t mt-6"
                        style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                        <span className="text-xs text-slate-600 flex items-center gap-2">
                          <span>⏱</span>
                          {p.duration}
                        </span>
                        <a href={p.link} target="_blank">
                          <Button size="sm"
                            className="rounded-full text-xs px-5 border transition-all duration-300 hover:scale-105 bg-transparent text-slate-300 hover:text-white hover:border-indigo-500/50"
                            style={{ borderColor: "rgba(255,255,255,0.12)" }}>
                            View Project →
                          </Button>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* UI/UX PROJECTS */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-5xl mx-auto mt-40"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex mb-6 px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5"
          >
            <h2 className="text-xs font-medium tracking-[0.15em] text-purple-400 uppercase">
              UI/UX Design
            </h2>
          </motion.div>

          <motion.h3
            variants={itemVariants}
            className="text-3xl md:text-5xl font-light mb-12 tracking-tight text-white/90"
            style={{ letterSpacing: "-0.02em" }}
          >
            UI/UX Projects
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-5">
            {uiuxProjects.map((p, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group"
              >
                <Card
                  className="backdrop-blur-xl border rounded-2xl h-full overflow-hidden transition-all duration-500"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    borderColor: "rgba(255,255,255,0.07)",
                  }}
                >
                  <CardContent className="p-7 flex flex-col justify-between h-full relative">
                    <div className="space-y-4">
                      <h3 className="text-xl font-medium text-white/90 tracking-tight">
                        {p.title}
                      </h3>
                      <p className="text-slate-500 leading-relaxed text-sm font-light">
                        {p.desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {p.tags.map((t, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-3 py-1 rounded-full text-slate-400 border"
                            style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.04)" }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-6 border-t mt-6"
                      style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                      <span className="text-xs text-slate-600 flex items-center gap-2">
                        <span>⏱</span>
                        {p.duration}
                      </span>
                      <a href={p.link} target="_blank">
                        <Button size="sm"
                          className="rounded-full text-xs px-5 border transition-all duration-300 hover:scale-105 bg-transparent text-slate-300 hover:text-white hover:border-purple-500/50"
                          style={{ borderColor: "rgba(255,255,255,0.12)" }}>
                          View Design →
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* LOGO & BRANDING */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-5xl mx-auto mt-40"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex mb-6 px-4 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/5"
          >
            <h2 className="text-xs font-medium tracking-[0.15em] text-amber-400 uppercase">
              Branding
            </h2>
          </motion.div>

          <motion.h3
            variants={itemVariants}
            className="text-3xl md:text-5xl font-light mb-8 tracking-tight text-white/90"
            style={{ letterSpacing: "-0.02em" }}
          >
            Branding & Logo Design
          </motion.h3>

          <motion.p variants={itemVariants} className="text-slate-500 max-w-2xl mb-12 text-lg font-light">
            Selain UI/UX, saya juga mengerjakan desain logo dan identitas visual
            untuk berbagai produk dan sistem digital dengan pendekatan modern
            dan bermakna.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "logo-intan.png",
              "logo-elecon.png",
              "logo-vicit.png",
              "logo-jojanjejen.png",
              "logo-novacreative.png",
              "logo-panggilaja.png",
              "logo-herardo.png",
              "logo-echorift.png",
            ].map((logo, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.03 }}
                className="group relative backdrop-blur-sm border rounded-xl p-6 flex items-center justify-center overflow-hidden transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.07)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                <img
                  src={`/logos/${logo}`}
                  alt={logo}
                  className="h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110 relative z-10 opacity-60 group-hover:opacity-100"
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CONTACT */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto mt-40 text-center"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex mb-6 px-4 py-1.5 rounded-full border border-rose-500/20 bg-rose-500/5"
          >
            <h2 className="text-xs font-medium tracking-[0.15em] text-rose-400 uppercase">
              Get In Touch
            </h2>
          </motion.div>

          <motion.h3
            variants={itemVariants}
            className="text-3xl md:text-5xl font-light mb-6 tracking-tight text-white/90"
            style={{ letterSpacing: "-0.02em" }}
          >
            Let&apos;s work together
          </motion.h3>

          <motion.p variants={itemVariants} className="text-slate-500 mb-14 text-lg font-light">
            Feel free to reach out for collaboration, freelance work, or full-time opportunities.
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="flex flex-col md:flex-row justify-center gap-4"
          >
            {/* Email */}
            <motion.a
              variants={itemVariants}
              href="mailto:masbin544@gmail.com"
              whileHover={{ y: -4 }}
              className="group relative flex items-center justify-center gap-3 px-8 py-5 rounded-2xl backdrop-blur-sm border overflow-hidden transition-all duration-300 hover:border-sky-500/30"
              style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.08)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <span className="text-xl group-hover:scale-110 transition-transform duration-300">📧</span>
              <span className="text-slate-400 group-hover:text-sky-400 transition-colors duration-300 relative z-10 text-sm">
                masbin544@gmail.com
              </span>
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              variants={itemVariants}
              href="https://wa.me/6281774178707"
              target="_blank"
              whileHover={{ y: -4 }}
              className="group relative flex items-center justify-center gap-3 px-8 py-5 rounded-2xl backdrop-blur-sm border overflow-hidden transition-all duration-300 hover:border-emerald-500/30"
              style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.08)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <span className="text-xl group-hover:scale-110 transition-transform duration-300">💬</span>
              <span className="text-slate-400 group-hover:text-emerald-400 transition-colors duration-300 relative z-10 text-sm">
                +62 817 7417 8707
              </span>
            </motion.a>

            {/* GitHub */}
            <motion.a
              variants={itemVariants}
              href="https://github.com/masbin5"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              className="group relative flex items-center justify-center gap-3 px-8 py-5 rounded-2xl backdrop-blur-sm border overflow-hidden transition-all duration-300 hover:border-indigo-500/30"
              style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.08)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-current text-slate-400 group-hover:text-indigo-400 transition-colors duration-300 group-hover:scale-110 transform"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              <span className="text-slate-400 group-hover:text-indigo-400 transition-colors duration-300 relative z-10 text-sm">
                github.com/masbin5
              </span>
            </motion.a>
          </motion.div>
        </motion.section>

        {/* FOOTER */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-5xl mx-auto mt-40 pt-10 text-center"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p className="text-slate-600 text-xs tracking-widest uppercase font-light">
            © {new Date().getFullYear()} Bintang Akbar Alim — UI/UX Designer, Web Junior Developer & Graphic Designer
          </p>
        </motion.footer>
      </div>
    </div>
  );
}