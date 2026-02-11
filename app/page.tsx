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
      link: "#",
      image: "/projects/portfolio-web.png",
      gradient: "from-violet-500/10 to-fuchsia-500/10",
      borderGradient: "hover:border-violet-500/50",
      shadowColor: "hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]",
    },
    {
      title: "Web Project – Company Profile (Unfinished)",
      desc: "Company profile website designed with a clean and structured layout, featuring a modern hero section, organized content hierarchy, responsive design, and scalable components.",
      duration: "3 Minggu",
      tags: ["React", "Chart.js", "REST API"],
      link: "#",
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
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 px-6 py-16 relative overflow-hidden">
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
              opacity: [0.2, 0.8, 0.2],
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

      {/* Gradient orbs */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 animate-pulse" />
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 animate-pulse" />
      
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
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-500/30 via-indigo-500/30 to-purple-500/30 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Rotating ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0%, rgba(56, 189, 248, 0.3) 50%, transparent 100%)",
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Hover ring */}
              <div className="absolute inset-0 rounded-full border-2 border-sky-400/60 opacity-0 group-hover:opacity-100 transition-all duration-500" />

              {/* Profile image */}
              <motion.div
                className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-slate-800 bg-slate-900 z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src="/profile/profile.jpg"
                  alt="Bintang Akbar Alim"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Status badge with pulse animation */}
              <motion.span
                onClick={() => setAvailable(!available)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`absolute bottom-2 right-2 z-20 px-3 py-1 text-xs rounded-full cursor-pointer shadow-lg transition-all duration-300 ${
                  available
                    ? "bg-gradient-to-r from-sky-500 to-cyan-500 text-white"
                    : "bg-slate-700 text-slate-300"
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
            className="text-5xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400"
          >
            Designing{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              intuitive
            </span>
            <br />
            digital experiences
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 text-slate-400 max-w-xl mx-auto text-lg"
          >
            UI/UX, Web Junior Dev & Graphic Designer with 2+ year experience crafting clean,
            functional, and elegant digital products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 flex justify-center gap-4"
          >
            <Button className="rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 border-0 shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:shadow-indigo-500/40 hover:scale-105">
              Contact Me
            </Button>
            <a href="/cv/Bintang-Akbar-Alim-CV.pdf" download>
              <Button variant="outline" className="rounded-xl border-slate-700 hover:border-indigo-500/50 bg-slate-900/50 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 hover:scale-105">
                Download CV
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
          className="max-w-4xl mx-auto mt-32"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20"
          >
            <h2 className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              ABOUT ME
            </h2>
          </motion.div>

          <motion.h3
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400"
          >
            Crafting digital solutions with passion
          </motion.h3>

          <motion.p variants={itemVariants} className="text-slate-300 leading-relaxed mb-4 text-lg">
            Saya adalah <span className="text-sky-400 font-medium">UI/UX Designer</span>, <span className="text-sky-400 font-medium">Graphic Designer</span>, dan <span className="text-sky-400 font-medium">Junior Web Developer</span> dengan pengalaman lebih dari satu tahun dalam merancang dan membangun solusi digital yang fungsional, estetis, serta berorientasi pada pengguna.
          </motion.p>

          <motion.p variants={itemVariants} className="text-slate-300 leading-relaxed mb-4">
            Dalam peran UI/UX, saya berfokus pada perancangan user flow, wireframing, dan
            prototyping menggunakan Figma untuk menciptakan pengalaman pengguna yang
            intuitif dan efisien. Sebagai Graphic Designer, saya terbiasa mengerjakan
            desain logo, visual branding, serta elemen grafis yang konsisten dengan
            identitas brand.
          </motion.p>

          <motion.p variants={itemVariants} className="text-slate-300 leading-relaxed mb-4">
            Sebagai Junior Web Developer, saya mampu mengimplementasikan desain ke dalam website yang responsif dan terstruktur menggunakan <span className="text-sky-400 font-medium">HTML, CSS, JavaScript</span>, serta framework modern seperti <span className="text-sky-400 font-medium">Next.js</span> dan <span className="text-sky-400 font-medium">Laravel</span>, dengan fokus pada performa dan aksesibilitas.
          </motion.p>

          <motion.p variants={itemVariants} className="text-slate-300 leading-relaxed">
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
          className="max-w-5xl mx-auto mt-32"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-sky-500/10 to-cyan-500/10 border border-sky-500/20"
          >
            <h2 className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-cyan-400">
              SKILLS & EXPERTISE
            </h2>
          </motion.div>

          <motion.h3
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400"
          >
            What I bring to the table
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Frontend */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700 rounded-3xl p-8 overflow-hidden transition-all duration-500 hover:border-sky-500/50 hover:shadow-[0_0_50px_rgba(14,165,233,0.2)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center mb-6 shadow-lg shadow-sky-500/25 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">💻</span>
                </div>

                <h3 className="text-xl font-semibold mb-6 text-sky-400">Frontend Development</h3>

                {[
                  { name: "HTML", value: "95%" },
                  { name: "CSS / Tailwind", value: "90%" },
                  { name: "JavaScript", value: "85%" },
                  { name: "React / Next.js", value: "75%" },
                ].map((skill, i) => (
                  <div key={i} className="mb-5 last:mb-0">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-slate-500 font-mono text-xs">{skill.value}</span>
                    </div>

                    <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.value }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent shimmer-animation" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* UI/UX */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700 rounded-3xl p-8 overflow-hidden transition-all duration-500 hover:border-indigo-500/50 hover:shadow-[0_0_50px_rgba(99,102,241,0.2)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/25 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🎨</span>
                </div>

                <h3 className="text-xl font-semibold mb-6 text-indigo-400">UI/UX & Design</h3>

                {[
                  { name: "Figma", value: "90%" },
                  { name: "Wireframing", value: "85%" },
                  { name: "Prototyping", value: "88%" },
                  { name: "User Flow", value: "80%" },
                  { name: "Design System", value: "65%" },
                ].map((skill, i) => (
                  <div key={i} className="mb-5 last:mb-0">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-slate-500 font-mono text-xs">{skill.value}</span>
                    </div>

                    <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.value }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent shimmer-animation" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Backend */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700 rounded-3xl p-8 overflow-hidden transition-all duration-500 hover:border-emerald-500/50 hover:shadow-[0_0_50px_rgba(16,185,129,0.2)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/25 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">⚙️</span>
                </div>

                <h3 className="text-xl font-semibold mb-6 text-emerald-400">Backend</h3>

                {[
                  { name: "MySQL", value: "75%" },
                  { name: "Laravel", value: "70%" },
                  { name: "Node.js", value: "65%" },
                ].map((skill, i) => (
                  <div key={i} className="mb-5 last:mb-0">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-slate-500 font-mono text-xs">{skill.value}</span>
                    </div>

                    <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.value }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-green-400 relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent shimmer-animation" />
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
          className="max-w-5xl mx-auto mt-32"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20"
          >
            <h2 className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              WEB DEVELOPMENT
            </h2>
          </motion.div>

          <motion.h3
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400"
          >
            Web Projects
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-6">
            {webProjects.map((p, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group"
              >
                <Card className={`bg-gradient-to-br ${p.gradient} backdrop-blur-xl border border-slate-700 rounded-3xl h-full overflow-hidden transition-all duration-500 ${p.borderGradient} ${p.shadowColor}`}>
                  <CardContent className="p-0 flex flex-col h-full relative">
                    {/* Image Cover */}
                    <div className="relative w-full h-56 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col justify-between flex-1">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-3 transition-all duration-300 group-hover:text-white">
                            {p.title}
                          </h3>
                          <p className="text-slate-400 leading-relaxed transition-colors duration-300 group-hover:text-slate-300">
                            {p.desc}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {p.tags.map((t, idx) => (
                            <span
                              key={idx}
                              className="text-xs px-3 py-1.5 rounded-full bg-slate-800/50 backdrop-blur-sm text-slate-300 border border-slate-700/50 transition-all duration-300 group-hover:border-slate-600 group-hover:text-white"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-6">
                        <span className="text-sm text-slate-500 transition-colors duration-300 group-hover:text-slate-400 flex items-center gap-2">
                          <span className="text-base">⏱</span>
                          {p.duration}
                        </span>
                        <a href={p.link} target="_blank">
                          <Button size="sm" className="rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 transition-all duration-300 group-hover:scale-105">
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
          className="max-w-5xl mx-auto mt-32"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20"
          >
            <h2 className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              UI/UX DESIGN
            </h2>
          </motion.div>

          <motion.h3
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400"
          >
            UI/UX Projects
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-6">
            {uiuxProjects.map((p, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group"
              >
                <Card className={`bg-gradient-to-br ${p.gradient} backdrop-blur-xl border border-slate-700 rounded-3xl h-full overflow-hidden transition-all duration-500 ${p.borderGradient} ${p.shadowColor}`}>
                  <CardContent className="p-8 flex flex-col justify-between h-full relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="space-y-5 relative z-10">
                      <div>
                        <h3 className="text-2xl font-bold mb-3 transition-all duration-300 group-hover:text-white">
                          {p.title}
                        </h3>
                        <p className="text-slate-400 leading-relaxed transition-colors duration-300 group-hover:text-slate-300">
                          {p.desc}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {p.tags.map((t, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-3 py-1.5 rounded-full bg-slate-800/50 backdrop-blur-sm text-slate-300 border border-slate-700/50 transition-all duration-300 group-hover:border-slate-600 group-hover:text-white"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-6 relative z-10">
                      <span className="text-sm text-slate-500 transition-colors duration-300 group-hover:text-slate-400 flex items-center gap-2">
                        <span className="text-base">⏱</span>
                        {p.duration}
                      </span>
                      <a href={p.link} target="_blank">
                        <Button size="sm" className="rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 transition-all duration-300 group-hover:scale-105">
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
          className="max-w-5xl mx-auto mt-32"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20"
          >
            <h2 className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400">
              BRANDING
            </h2>
          </motion.div>

          <motion.h3
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400"
          >
            Branding & Logo Design
          </motion.h3>

          <motion.p variants={itemVariants} className="text-slate-400 max-w-2xl mb-12 text-lg">
            Selain UI/UX, saya juga mengerjakan desain logo dan identitas visual
            untuk berbagai produk dan sistem digital dengan pendekatan modern
            dan bermakna.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
                whileHover={{ y: -8, scale: 1.05 }}
                className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 flex items-center justify-center overflow-hidden transition-all duration-300 hover:border-slate-700 hover:bg-slate-800/50"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src={`/logos/${logo}`}
                  alt={logo}
                  className="h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-110 relative z-10"
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
          className="max-w-4xl mx-auto mt-32 text-center"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-rose-500/10 to-pink-500/10 border border-rose-500/20"
          >
            <h2 className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-pink-400">
              GET IN TOUCH
            </h2>
          </motion.div>

          <motion.h3
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400"
          >
            Let's work together
          </motion.h3>

          <motion.p variants={itemVariants} className="text-slate-400 mb-12 text-lg">
            Feel free to reach out for collaboration, freelance work, or full-time opportunities.
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="flex flex-col md:flex-row justify-center gap-6"
          >
            {/* Email */}
            <motion.a
              variants={itemVariants}
              href="mailto:masbin544@gmail.com"
              whileHover={{ y: -4, scale: 1.05 }}
              className="group relative flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-slate-700 overflow-hidden transition-all duration-300 hover:border-sky-500/50 hover:shadow-[0_0_30px_rgba(14,165,233,0.2)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                📧
              </span>
              <span className="text-slate-300 group-hover:text-sky-400 transition-colors duration-300 relative z-10">
                masbin544@gmail.com
              </span>
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              variants={itemVariants}
              href="https://wa.me/6281774178707"
              target="_blank"
              whileHover={{ y: -4, scale: 1.05 }}
              className="group relative flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-slate-700 overflow-hidden transition-all duration-300 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                💬
              </span>
              <span className="text-slate-300 group-hover:text-emerald-400 transition-colors duration-300 relative z-10">
                +62 817 7417 8707
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
          className="max-w-5xl mx-auto mt-40 border-t border-slate-800/50 pt-10 text-center"
        >
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Bintang Akbar Alim — UI/UX Designer, Web Junior Developer & Graphic Designer
          </p>
        </motion.footer>
      </div>
    </div>
  );
}