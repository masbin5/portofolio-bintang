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
    const generatedStars = Array.from({ length: 60 }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 1.5 + 0.5,
      duration: Math.random() * 10 + 8,
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
    },
    {
      title: "Web Project – Company Profile (Unfinished)",
      desc: "Company profile website designed with a clean and structured layout, featuring a modern hero section, organized content hierarchy, responsive design, and scalable components.",
      duration: "3 Minggu",
      tags: ["Next.js", "Tailwind", "Responsive"],
      link: "https://taxmin-platform.vercel.app/",
      image: "/projects/compro-web.png",
    },
  ];

  const uiuxProjects = [
    {
      title: "Uper-Food",
      desc: "Aplikasi pemesanan makanan iOS & Android dengan UX fokus ke kecepatan dan kemudahan order.",
      duration: "1 Minggu",
      tags: ["UI/UX", "Mobile App", "Figma"],
      link: "https://www.figma.com/design/xjtxgCb06ehlCZN1yaZjFq/Uper-Food?node-id=0-1",
    },
    {
      title: "Elecon-Apps",
      desc: "Aplikasi layanan elektrik & elektronik dengan tampilan modern dan efisien.",
      duration: "1+ Minggu",
      tags: ["UI/UX", "Mobile", "Dashboard"],
      link: "https://www.figma.com/design/lOAx5XRpjt8UJ2uKxAXDkT/Elecon-Apps?node-id=0-1",
    },
    {
      title: "ViCit Try-On Visual",
      desc: "Aplikasi & website virtual try-on untuk fashion dengan pendekatan visual interaktif.",
      duration: "3 Minggu",
      tags: ["UI/UX", "Web App", "Prototype"],
      link: "https://www.figma.com/design/trkZJNl5Jjrvyuf6V0mye3/ViCit-Try-on-Visual?node-id=0-1",
    },
    {
      title: "APP-Tau Kajian",
      desc: "Aplikasi pencarian kajian edukasi & keagamaan dengan UX sederhana dan informatif.",
      duration: "1+ Minggu",
      tags: ["UI/UX", "Mobile", "Research"],
      link: "https://www.figma.com/design/t3KMTo1RzkNJnTLGzw9XR2/APP-Tau-Kajian?node-id=2-34",
    },
    {
      title: "Panggil Aja",
      desc: "Aplikasi layanan on-demand berbasis desktop dengan alur pemesanan yang ringkas.",
      duration: "1+ Minggu",
      tags: ["UI/UX", "Desktop App"],
      link: "https://www.figma.com/design/2RvM70FmM6RY1WMC0V85UY/Panggil-Aja?node-id=0-1",
    },
    {
      title: "Website Survei Harian PTTUN",
      desc: "Redesign dan pembaruan tampilan website survei harian agar lebih modern dan mudah digunakan.",
      duration: "2 Minggu",
      tags: ["Website", "UI Redesign"],
      link: "https://survei-harian.pttun-banjarmasin.go.id/",
    },
    {
      title: "INTAN – Integrasi Administrasi & Kepegawaian",
      desc: "Website internal untuk integrasi administrasi dan kepegawaian.",
      duration: "1 Bulan",
      tags: ["Website", "Internal System"],
      link: "#",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const SectionLabel = ({ children }: { children: React.ReactNode }) => (
    <motion.div variants={itemVariants} className="inline-flex mb-6 px-4 py-1.5 rounded-full"
      style={{ border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)" }}>
      <h2 className="text-xs font-medium tracking-[0.18em] uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>{children}</h2>
    </motion.div>
  );

  const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <motion.h3 variants={itemVariants} className="text-3xl md:text-5xl font-light mb-12"
      style={{ letterSpacing: "-0.025em", color: "rgba(255,255,255,0.85)" }}>
      {children}
    </motion.h3>
  );

  const cardStyle = { background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" };
  const tagStyle = { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.35)" };
  const btnStyle = { background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.55)" };
  const metaStyle = { color: "rgba(255,255,255,0.2)" };
  const dividerStyle = { borderTop: "1px solid rgba(255,255,255,0.06)" };

  return (
    <div className="min-h-screen text-slate-100 px-6 py-16 relative overflow-hidden"
      style={{ background: "#080808", fontFamily: "'DM Sans', 'Inter', sans-serif" }}>

      {/* Noise texture */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }} />

      {/* Stars */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {stars.map((star, i) => (
          <motion.div key={i} className="absolute rounded-full bg-white"
            style={{ top: `${star.top}%`, left: `${star.left}%`, width: `${star.size}px`, height: `${star.size}px` }}
            animate={{ opacity: [0.04, 0.3, 0.04] }}
            transition={{ duration: star.duration, delay: star.delay, repeat: Infinity, ease: "easeInOut" }} />
        ))}
      </div>

      {/* Monochrome orbs */}
      <div className="fixed top-[-15%] left-[-10%] w-[700px] h-[700px] rounded-full blur-[220px] pointer-events-none"
        style={{ background: "rgba(255,255,255,0.035)" }} />
      <div className="fixed bottom-[-15%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[200px] pointer-events-none"
        style={{ background: "rgba(255,255,255,0.025)" }} />

      {/* Top border */}
      <div className="fixed top-0 left-0 right-0 h-[1px] pointer-events-none z-50"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)" }} />

      <div className="relative z-10">

        {/* ── HERO ── */}
        <motion.section style={{ opacity, scale }} className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }} className="flex flex-col items-center mb-10">

            <motion.div whileHover={{ scale: 1.04 }} className="relative w-44 h-44 rounded-full flex items-center justify-center group">
              {/* Glow */}
              <motion.div className="absolute inset-0 rounded-full blur-xl"
                style={{ background: "radial-gradient(circle, rgba(255,255,255,0.1), transparent 70%)" }}
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />

              {/* Rotating ring */}
              <motion.div className="absolute inset-0 rounded-full"
                style={{ background: "conic-gradient(from 0deg, transparent 0%, rgba(255,255,255,0.12) 50%, transparent 100%)" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }} />

              {/* Hover ring */}
              <div className="absolute inset-0 rounded-full border border-white/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Profile image */}
              <motion.div className="relative w-40 h-40 rounded-full overflow-hidden z-10"
                style={{ border: "1px solid rgba(255,255,255,0.1)" }}
                transition={{ type: "spring", stiffness: 300 }}>
                <img src="/profile/profile.jpg" alt="Bintang Akbar Alim"
                  className="w-full h-full object-cover" style={{ filter: "grayscale(15%)" }} />
              </motion.div>

              {/* Status badge */}
              <motion.span onClick={() => setAvailable(!available)}
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
                className="absolute bottom-2 right-2 z-20 px-3 py-1 text-xs rounded-full cursor-pointer transition-all duration-300"
                style={available
                  ? { background: "rgba(255,255,255,0.92)", color: "#080808", fontWeight: 500 }
                  : { background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.35)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <span className="relative flex items-center gap-2">
                  {available && (
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-60"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
                    </span>
                  )}
                  {available ? "Available" : "Not Available"}
                </span>
              </motion.span>
            </motion.div>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-light leading-tight" style={{ letterSpacing: "-0.03em" }}>
            <span style={{ color: "rgba(255,255,255,0.9)" }}>Designing </span>
            <span style={{ color: "rgba(255,255,255,0.9)", fontStyle: "italic" }}>intuitive</span>
            <br />
            <span style={{ color: "rgba(255,255,255,0.3)", fontWeight: 200 }}>digital experiences</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 max-w-xl mx-auto text-lg font-light" style={{ color: "rgba(255,255,255,0.32)" }}>
            UI/UX, Web Junior Dev & Graphic Designer with 2+ year experience crafting clean,
            functional, and elegant digital products.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-10 flex justify-center gap-3 flex-wrap">

            <Button className="rounded-full px-7 py-5 text-sm font-medium tracking-wide border-0 transition-all duration-300 hover:scale-105 hover:opacity-90"
              style={{ background: "rgba(255,255,255,0.92)", color: "#080808" }}>
              Contact Me
            </Button>

            <a href="/cv/Bintang-Akbar-Alim-CV.pdf" download>
              <Button variant="outline" className="rounded-full px-7 py-5 text-sm font-medium tracking-wide transition-all duration-300 hover:scale-105"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.55)" }}>
                Download CV
              </Button>
            </a>

            <a href="https://github.com/masbin5" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="rounded-full px-7 py-5 text-sm font-medium tracking-wide transition-all duration-300 hover:scale-105 flex items-center gap-2"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.55)" }}>
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </Button>
            </a>
          </motion.div>
        </motion.section>

        {/* ── ABOUT ── */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants} className="max-w-4xl mx-auto mt-40">
          <SectionLabel>About Me</SectionLabel>
          <SectionTitle>Crafting digital solutions with passion</SectionTitle>

          {([
            <>Saya adalah <span style={{ color: "rgba(255,255,255,0.65)" }}>UI/UX Designer</span>, <span style={{ color: "rgba(255,255,255,0.65)" }}>Graphic Designer</span>, dan <span style={{ color: "rgba(255,255,255,0.65)" }}>Junior Web Developer</span> dengan pengalaman lebih dari 2 tahun dalam merancang dan membangun solusi digital yang fungsional, estetis, serta berorientasi pada pengguna.</>,
            "Dalam peran UI/UX, saya berfokus pada perancangan user flow, wireframing, dan prototyping menggunakan Figma untuk menciptakan pengalaman pengguna yang intuitif dan efisien. Sebagai Graphic Designer, saya terbiasa mengerjakan desain logo, visual branding, serta elemen grafis yang konsisten dengan identitas brand.",
            <>Sebagai Junior Web Developer, saya mampu mengimplementasikan desain ke dalam website yang responsif menggunakan <span style={{ color: "rgba(255,255,255,0.65)" }}>HTML, CSS, JavaScript</span>, serta framework modern seperti <span style={{ color: "rgba(255,255,255,0.65)" }}>Next.js</span> dan <span style={{ color: "rgba(255,255,255,0.65)" }}>Laravel</span>.</>,
            "Pendekatan saya selalu berpusat pada keseimbangan antara estetika visual yang menarik dan fungsionalitas yang solid, dengan tujuan menciptakan produk digital yang tidak hanya indah dilihat, tetapi juga mudah digunakan.",
          ] as React.ReactNode[]).map((text, i) => (
            <motion.p key={i} variants={itemVariants} className="leading-relaxed mb-5 font-light text-lg"
              style={{ color: "rgba(255,255,255,0.38)" }}>
              {text}
            </motion.p>
          ))}
        </motion.section>

        {/* ── SKILLS ── */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants} className="max-w-5xl mx-auto mt-40">
          <SectionLabel>Skills & Expertise</SectionLabel>
          <SectionTitle>What I bring to the table</SectionTitle>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: "💻", label: "Frontend Development", skills: [{ name: "HTML", value: "95%" }, { name: "CSS / Tailwind", value: "90%" }, { name: "JavaScript", value: "85%" }, { name: "React / Next.js", value: "75%" }] },
              { icon: "🎨", label: "UI/UX & Design", skills: [{ name: "Figma", value: "90%" }, { name: "Wireframing", value: "85%" }, { name: "Prototyping", value: "88%" }, { name: "User Flow", value: "80%" }, { name: "Design System", value: "65%" }] },
              { icon: "⚙️", label: "Backend", skills: [{ name: "MySQL", value: "75%" }, { name: "Laravel", value: "70%" }, { name: "Node.js", value: "65%" }] },
            ].map((card, ci) => (
              <motion.div key={ci} variants={itemVariants} whileHover={{ y: -6 }}
                className="group relative rounded-2xl p-7 overflow-hidden transition-all duration-500" style={cardStyle}>
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "rgba(255,255,255,0.02)" }} />
                <div className="relative">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-6 text-lg"
                    style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.09)" }}>
                    {card.icon}
                  </div>
                  <h3 className="text-sm font-medium mb-6 tracking-wide" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {card.label}
                  </h3>
                  {card.skills.map((skill, i) => (
                    <div key={i} className="mb-5 last:mb-0">
                      <div className="flex justify-between text-xs mb-2">
                        <span style={{ color: "rgba(255,255,255,0.4)" }}>{skill.name}</span>
                        <span style={{ color: "rgba(255,255,255,0.18)" }} className="font-mono">{skill.value}</span>
                      </div>
                      <div className="h-[2px] rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                        <motion.div initial={{ width: 0 }} whileInView={{ width: skill.value }} viewport={{ once: true }}
                          transition={{ duration: 1.4, delay: i * 0.1, ease: "easeOut" }}
                          className="h-full rounded-full relative overflow-hidden"
                          style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.45), rgba(255,255,255,0.8))" }}>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent shimmer-animation" />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── WEB PROJECTS ── */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants} className="max-w-5xl mx-auto mt-40">
          <SectionLabel>Web Development</SectionLabel>
          <SectionTitle>Web Projects</SectionTitle>

          <div className="grid md:grid-cols-2 gap-4">
            {webProjects.map((p, i) => (
              <motion.div key={i} variants={itemVariants} whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }} className="group">
                <Card className="rounded-2xl h-full overflow-hidden transition-all duration-500" style={cardStyle}>
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className="relative w-full h-52 overflow-hidden">
                      <img src={p.image} alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        style={{ filter: "grayscale(70%)", opacity: 0.65 }} />
                      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #080808 10%, rgba(8,8,8,0.5) 60%, transparent)" }} />
                    </div>
                    <div className="p-7 flex flex-col flex-1">
                      <h3 className="text-lg font-medium mb-3 tracking-tight" style={{ color: "rgba(255,255,255,0.82)" }}>{p.title}</h3>
                      <p className="text-sm font-light leading-relaxed mb-4 flex-1" style={{ color: "rgba(255,255,255,0.32)" }}>{p.desc}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {p.tags.map((t, idx) => (
                          <span key={idx} className="text-xs px-3 py-1 rounded-full" style={tagStyle}>{t}</span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center pt-5" style={dividerStyle}>
                        <span className="text-xs flex items-center gap-2" style={metaStyle}><span>⏱</span>{p.duration}</span>
                        <a href={p.link} target="_blank">
                          <Button size="sm" className="rounded-full text-xs px-5 transition-all duration-300 hover:scale-105" style={btnStyle}>
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

        {/* ── UI/UX PROJECTS ── */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants} className="max-w-5xl mx-auto mt-40">
          <SectionLabel>UI/UX Design</SectionLabel>
          <SectionTitle>UI/UX Projects</SectionTitle>

          <div className="grid md:grid-cols-2 gap-4">
            {uiuxProjects.map((p, i) => (
              <motion.div key={i} variants={itemVariants} whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }} className="group">
                <Card className="rounded-2xl h-full overflow-hidden transition-all duration-500" style={cardStyle}>
                  <CardContent className="p-7 flex flex-col h-full">
                    <h3 className="text-lg font-medium mb-3 tracking-tight" style={{ color: "rgba(255,255,255,0.82)" }}>{p.title}</h3>
                    <p className="text-sm font-light leading-relaxed mb-4 flex-1" style={{ color: "rgba(255,255,255,0.32)" }}>{p.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {p.tags.map((t, idx) => (
                        <span key={idx} className="text-xs px-3 py-1 rounded-full" style={tagStyle}>{t}</span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center pt-5" style={dividerStyle}>
                      <span className="text-xs flex items-center gap-2" style={metaStyle}><span>⏱</span>{p.duration}</span>
                      <a href={p.link} target="_blank">
                        <Button size="sm" className="rounded-full text-xs px-5 transition-all duration-300 hover:scale-105" style={btnStyle}>
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

        {/* ── BRANDING ── */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants} className="max-w-5xl mx-auto mt-40">
          <SectionLabel>Branding</SectionLabel>

          <motion.h3 variants={itemVariants} className="text-3xl md:text-5xl font-light mb-6"
            style={{ letterSpacing: "-0.025em", color: "rgba(255,255,255,0.85)" }}>
            Branding & Logo Design
          </motion.h3>

          <motion.p variants={itemVariants} className="max-w-2xl mb-12 text-lg font-light" style={{ color: "rgba(255,255,255,0.32)" }}>
            Selain UI/UX, saya juga mengerjakan desain logo dan identitas visual untuk berbagai produk dan sistem digital dengan pendekatan modern dan bermakna.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {["logo-intan.png", "logo-elecon.png", "logo-vicit.png", "logo-jojanjejen.png",
              "logo-novacreative.png", "logo-panggilaja.png", "logo-herardo.png", "logo-echorift.png"].map((logo, i) => (
              <motion.div key={i} variants={itemVariants} whileHover={{ y: -5, scale: 1.04 }}
                className="group relative rounded-xl p-6 flex items-center justify-center overflow-hidden transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "rgba(255,255,255,0.03)" }} />
                <img src={`/logos/${logo}`} alt={logo}
                  className="h-14 w-auto object-contain relative z-10 transition-all duration-500 group-hover:scale-110"
                  style={{ filter: "grayscale(100%) brightness(0.45)", opacity: 0.7 }}
                  onMouseOver={e => { (e.currentTarget as HTMLImageElement).style.filter = "grayscale(100%) brightness(0.85)"; (e.currentTarget as HTMLImageElement).style.opacity = "1"; }}
                  onMouseOut={e => { (e.currentTarget as HTMLImageElement).style.filter = "grayscale(100%) brightness(0.45)"; (e.currentTarget as HTMLImageElement).style.opacity = "0.7"; }}
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── CONTACT ── */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants} className="max-w-4xl mx-auto mt-40 text-center">
          <SectionLabel>Get In Touch</SectionLabel>

          <motion.h3 variants={itemVariants} className="text-3xl md:text-5xl font-light mb-6"
            style={{ letterSpacing: "-0.025em", color: "rgba(255,255,255,0.85)" }}>
            Let&apos;s work together
          </motion.h3>

          <motion.p variants={itemVariants} className="mb-14 text-lg font-light" style={{ color: "rgba(255,255,255,0.32)" }}>
            Feel free to reach out for collaboration, freelance work, or full-time opportunities.
          </motion.p>

          <motion.div variants={containerVariants} className="flex flex-col md:flex-row justify-center gap-3">
            {[
              { href: "mailto:masbin544@gmail.com", icon: "📧", label: "masbin544@gmail.com", target: undefined },
              { href: "https://wa.me/6281774178707", icon: "💬", label: "+62 817 7417 8707", target: "_blank" },
            ].map((item, i) => (
              <motion.a key={i} variants={itemVariants} href={item.href} target={item.target} whileHover={{ y: -4 }}
                className="group relative flex items-center justify-center gap-3 px-8 py-5 rounded-2xl overflow-hidden transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "rgba(255,255,255,0.03)" }} />
                <span className="text-xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                <span className="text-sm relative z-10" style={{ color: "rgba(255,255,255,0.38)" }}>{item.label}</span>
              </motion.a>
            ))}

            <motion.a variants={itemVariants} href="https://github.com/masbin5" target="_blank" rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              className="group relative flex items-center justify-center gap-3 px-8 py-5 rounded-2xl overflow-hidden transition-all duration-300"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "rgba(255,255,255,0.03)" }} />
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current relative z-10 group-hover:scale-110 transition-transform duration-300"
                style={{ color: "rgba(255,255,255,0.38)" }} xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              <span className="text-sm relative z-10" style={{ color: "rgba(255,255,255,0.38)" }}>github.com/masbin5</span>
            </motion.a>
          </motion.div>
        </motion.section>

        {/* ── FOOTER ── */}
        <motion.footer initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.2 }} className="max-w-5xl mx-auto mt-40 pt-10 text-center"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <p className="text-xs tracking-widest uppercase font-light" style={{ color: "rgba(255,255,255,0.16)" }}>
            © {new Date().getFullYear()} Bintang Akbar Alim — UI/UX Designer, Web Junior Developer & Graphic Designer
          </p>
        </motion.footer>

      </div>
    </div>
  );
}