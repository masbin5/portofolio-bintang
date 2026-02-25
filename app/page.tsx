"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

// ─── Palette ────────────────────────────────────────────────────────────────
const C = {
  bg:       "#03050f",         // deep space black-blue
  nebula1:  "rgba(30,58,138,0.35)",   // deep cobalt
  nebula2:  "rgba(59,130,246,0.18)",  // electric blue
  nebula3:  "rgba(99,102,241,0.22)",  // indigo
  aurora:   "rgba(96,165,250,0.7)",   // bright sky blue
  auroraD:  "rgba(37,99,235,0.8)",    // deep blue
  text1:    "rgba(219,234,254,0.9)",  // blue-100 near white
  text2:    "rgba(147,197,253,0.55)", // blue-300 mid
  text3:    "rgba(96,165,250,0.32)",  // blue-400 dim
  text4:    "rgba(59,130,246,0.2)",   // very dim
  cardBg:   "rgba(14,30,80,0.35)",    // blue-tinted glass
  cardBrd:  "rgba(59,130,246,0.12)",  // faint blue border
  tagBg:    "rgba(30,64,175,0.2)",    // tag fill
  tagBrd:   "rgba(59,130,246,0.18)",  // tag border
  tagTxt:   "rgba(147,197,253,0.55)",
  btnBg:    "rgba(37,99,235,0.18)",
  btnBrd:   "rgba(96,165,250,0.25)",
  btnTxt:   "rgba(147,197,253,0.8)",
  divider:  "rgba(59,130,246,0.1)",
  labelBg:  "rgba(23,37,84,0.5)",
  labelBrd: "rgba(59,130,246,0.2)",
  labelTxt: "rgba(96,165,250,0.55)",
};

// ─── Floating orb rings ──────────────────────────────────────────────────────
function OrbRings() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {[1, 2, 3].map((i) => (
        <motion.div key={i} className="absolute rounded-full border"
          style={{
            width: `${140 + i * 62}px`,
            height: `${140 + i * 62}px`,
            borderColor: `rgba(96,165,250,${0.14 - i * 0.03})`,
            boxShadow: `0 0 ${8 + i * 4}px rgba(59,130,246,${0.08 - i * 0.02})`,
          }}
          animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{ duration: 20 + i * 9, repeat: Infinity, ease: "linear" }}>
          {/* Glowing dot */}
          <div className="absolute rounded-full"
            style={{
              width: `${4 - i * 0.5}px`, height: `${4 - i * 0.5}px`,
              top: "-2px", left: "50%", transform: "translateX(-50%)",
              background: `rgba(147,197,253,${0.9 - i * 0.2})`,
              boxShadow: `0 0 8px rgba(96,165,250,1), 0 0 16px rgba(59,130,246,0.6)`,
            }} />
        </motion.div>
      ))}
    </div>
  );
}

// ─── Canvas star field with blue tint ───────────────────────────────────────
function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const stars = Array.from({ length: 120 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1.3 + 0.15,
      vx: (Math.random() - 0.5) * 0.08,
      vy: (Math.random() - 0.5) * 0.08,
      alpha: Math.random() * 0.4 + 0.05,
      hue: 200 + Math.random() * 40, // 200–240 = blue range
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (const p of stars) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 80%, 75%, ${p.alpha})`;
        ctx.fill();
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    const onResize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, []);
  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
}

export default function Portfolio() {
  const [available, setAvailable] = useState<boolean>(true);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0]);
  const heroScale  = useTransform(scrollYProgress, [0, 0.18], [1, 0.88]);

  useEffect(() => {
    const saved = localStorage.getItem("availability");
    if (saved !== null) setAvailable(JSON.parse(saved));
  }, []);
  useEffect(() => { localStorage.setItem("availability", JSON.stringify(available)); }, [available]);

  const webProjects = [
    { title: "Website Portfolio Interaktif", desc: "Website portfolio personal dengan animasi modern, smooth transitions, dan interactive elements menggunakan Next.js dan Framer Motion.", duration: "2 Minggu", tags: ["Next.js", "Framer Motion", "Tailwind"], link: "https://projek-landingpage-cbda.vercel.app/", image: "/projects/portofolio-web.png" },
    { title: "Web Project – Company Profile (Unfinished)", desc: "Company profile website designed with a clean and structured layout, featuring a modern hero section, organized content hierarchy, responsive design, and scalable components.", duration: "3 Minggu", tags: ["Next.js", "Tailwind", "Responsive"], link: "https://taxmin-platform.vercel.app/", image: "/projects/compro-web.png" },
  ];

  const uiuxProjects = [
    { title: "Uper-Food", desc: "Aplikasi pemesanan makanan iOS & Android dengan UX fokus ke kecepatan dan kemudahan order.", duration: "1 Minggu", tags: ["UI/UX", "Mobile App", "Figma"], link: "https://www.figma.com/design/xjtxgCb06ehlCZN1yaZjFq/Uper-Food?node-id=0-1" },
    { title: "Elecon-Apps", desc: "Aplikasi layanan elektrik & elektronik dengan tampilan modern dan efisien.", duration: "1+ Minggu", tags: ["UI/UX", "Mobile", "Dashboard"], link: "https://www.figma.com/design/lOAx5XRpjt8UJ2uKxAXDkT/Elecon-Apps?node-id=0-1" },
    { title: "ViCit Try-On Visual", desc: "Aplikasi & website virtual try-on untuk fashion dengan pendekatan visual interaktif.", duration: "3 Minggu", tags: ["UI/UX", "Web App", "Prototype"], link: "https://www.figma.com/design/trkZJNl5Jjrvyuf6V0mye3/ViCit-Try-on-Visual?node-id=0-1" },
    { title: "APP-Tau Kajian", desc: "Aplikasi pencarian kajian edukasi & keagamaan dengan UX sederhana dan informatif.", duration: "1+ Minggu", tags: ["UI/UX", "Mobile", "Research"], link: "https://www.figma.com/design/t3KMTo1RzkNJnTLGzw9XR2/APP-Tau-Kajian?node-id=2-34" },
    { title: "Panggil Aja", desc: "Aplikasi layanan on-demand berbasis desktop dengan alur pemesanan yang ringkas.", duration: "1+ Minggu", tags: ["UI/UX", "Desktop App"], link: "https://www.figma.com/design/2RvM70FmM6RY1WMC0V85UY/Panggil-Aja?node-id=0-1" },
    { title: "Website Survei Harian PTTUN", desc: "Redesign dan pembaruan tampilan website survei harian agar lebih modern dan mudah digunakan.", duration: "2 Minggu", tags: ["Website", "UI Redesign"], link: "https://survei-harian.pttun-banjarmasin.go.id/" },
    { title: "INTAN – Integrasi Administrasi & Kepegawaian", desc: "Website internal untuk integrasi administrasi dan kepegawaian.", duration: "1 Bulan", tags: ["Website", "Internal System"], link: "#" },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  const SectionLabel = ({ children }: { children: React.ReactNode }) => (
    <motion.div variants={itemVariants}
      className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full"
      style={{ background: C.labelBg, border: `1px solid ${C.labelBrd}` }}>
      <span className="w-1 h-1 rounded-full" style={{ background: C.aurora, boxShadow: `0 0 4px ${C.aurora}` }} />
      <span className="text-xs font-medium tracking-[0.2em] uppercase" style={{ color: C.labelTxt }}>{children}</span>
    </motion.div>
  );

  const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <motion.h3 variants={itemVariants}
      className="text-3xl md:text-5xl font-light mb-12"
      style={{ letterSpacing: "-0.03em", color: C.text1 }}>
      {children}
    </motion.h3>
  );

  return (
    <div className="min-h-screen relative overflow-x-hidden"
      style={{ background: `radial-gradient(ellipse 140% 70% at 50% -5%, #050d2e 0%, #030818 35%, ${C.bg} 70%)`, fontFamily: "'DM Sans', 'Inter', sans-serif" }}>

      {/* Star field */}
      <StarField />

      {/* Nebula orbs — layered blue clouds */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute" style={{ top: "-20%", left: "-15%", width: "700px", height: "700px", borderRadius: "50%", background: C.nebula1, filter: "blur(120px)", opacity: 0.7 }} />
        <div className="absolute" style={{ top: "20%", right: "-20%", width: "600px", height: "600px", borderRadius: "50%", background: C.nebula3, filter: "blur(130px)", opacity: 0.5 }} />
        <div className="absolute" style={{ bottom: "-15%", left: "20%", width: "800px", height: "500px", borderRadius: "50%", background: C.nebula2, filter: "blur(140px)", opacity: 0.6 }} />
        {/* Bright core glow */}
        <div className="absolute" style={{ top: "0", left: "50%", transform: "translateX(-50%)", width: "600px", height: "400px", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(37,99,235,0.18) 0%, transparent 70%)", filter: "blur(30px)" }} />
      </div>

      {/* Top chrome line */}
      <div className="fixed top-0 left-0 right-0 h-px z-50"
        style={{ background: `linear-gradient(90deg, transparent 0%, ${C.aurora} 40%, rgba(59,130,246,0.6) 60%, transparent 100%)`, opacity: 0.4 }} />

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-8 py-5">
        <span className="text-xs tracking-[0.2em] uppercase" style={{ color: C.text3 }}>
          Bintang Akbar Alim
        </span>
        <div className="flex items-center gap-5">
          <a href="https://github.com/masbin5" target="_blank" rel="noopener noreferrer"
            className="transition-opacity duration-200 hover:opacity-70">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" style={{ color: C.text2 }}>
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <motion.span onClick={() => setAvailable(!available)}
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full cursor-pointer text-xs tracking-wide transition-all duration-300"
            style={available
              ? { background: "rgba(37,99,235,0.2)", border: `1px solid rgba(96,165,250,0.4)`, color: C.text2 }
              : { background: "rgba(14,30,80,0.3)", border: `1px solid ${C.cardBrd}`, color: C.text4 }}>
            {available && (
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-70" style={{ background: C.aurora }} />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full" style={{ background: C.aurora }} />
              </span>
            )}
            {available ? "Available" : "Unavailable"}
          </motion.span>
        </div>
      </nav>

      <div className="relative z-10 px-6 pb-24">

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <motion.section style={{ opacity: heroOpacity, scale: heroScale }}
          className="min-h-screen flex flex-col items-center justify-center text-center max-w-4xl mx-auto">

          {/* Orb */}
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-14"
            style={{ width: 224, height: 224 }}>

            {/* Outer nebula glow */}
            <motion.div className="absolute rounded-full"
              style={{ inset: "-60%", background: "radial-gradient(circle, rgba(37,99,235,0.22) 0%, rgba(30,58,138,0.1) 45%, transparent 70%)" }}
              animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />

            <OrbRings />

            {/* Sphere */}
            <motion.div className="absolute inset-0 rounded-full overflow-hidden z-10"
              style={{ border: "1px solid rgba(96,165,250,0.25)", boxShadow: "0 0 40px rgba(37,99,235,0.3), 0 0 80px rgba(37,99,235,0.12), inset 0 1px 0 rgba(147,197,253,0.15)" }}
              whileHover={{ scale: 1.04 }} transition={{ type: "spring", stiffness: 260, damping: 20 }}>
              <img src="/profile/profile.jpg" alt="Bintang Akbar Alim"
                className="w-full h-full object-cover" />
              {/* Blue glass highlight */}
              <div className="absolute inset-0 rounded-full"
                style={{ background: "radial-gradient(circle at 35% 25%, rgba(147,197,253,0.14) 0%, transparent 55%)" }} />
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
            <p className="text-xs tracking-[0.3em] uppercase mb-5 font-medium"
              style={{ color: C.text3 }}>
              UI/UX · Web Dev · Graphic Design
            </p>

            <h1 className="text-5xl md:text-7xl font-light leading-[1.06] mb-6"
              style={{ letterSpacing: "-0.035em" }}>
              <span style={{ color: C.text1 }}>Designing</span><br />
              <span style={{
                background: `linear-gradient(135deg, ${C.aurora}, rgba(129,140,248,0.9))`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>intuitive digital</span><br />
              <span style={{ color: "rgba(147,197,253,0.35)", fontWeight: 200 }}>experiences</span>
            </h1>

            <p className="text-base font-light max-w-md mx-auto mb-10 leading-relaxed"
              style={{ color: C.text3 }}>
              2+ years crafting clean, functional, and elegant digital products.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.68, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-3">

            <button className="px-7 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300 hover:scale-105 hover:brightness-110"
              style={{ background: `linear-gradient(135deg, ${C.auroraD}, rgba(99,102,241,0.9))`, color: "rgba(219,234,254,0.95)", boxShadow: "0 0 24px rgba(37,99,235,0.4), 0 0 48px rgba(37,99,235,0.15)" }}>
              Contact Me
            </button>

            <a href="/cv/Bintang-Akbar-Alim-CV.pdf" download>
              <button className="px-7 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300 hover:scale-105 hover:bg-blue-900/30"
                style={{ background: C.btnBg, border: `1px solid ${C.btnBrd}`, color: C.btnTxt }}>
                Download CV
              </button>
            </a>

            <a href="https://github.com/masbin5" target="_blank" rel="noopener noreferrer">
              <button className="px-7 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300 hover:scale-105 hover:bg-blue-900/30 flex items-center gap-2"
                style={{ background: C.btnBg, border: `1px solid ${C.btnBrd}`, color: C.btnTxt }}>
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </button>
            </a>
          </motion.div>

          {/* Scroll hint */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
            className="absolute bottom-10 flex flex-col items-center gap-2">
            <div className="w-px h-12" style={{ background: `linear-gradient(to bottom, transparent, ${C.aurora})`, opacity: 0.4 }} />
            <span className="text-xs tracking-widest uppercase" style={{ color: C.text4 }}>scroll</span>
          </motion.div>
        </motion.section>

        {/* ── ABOUT ────────────────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants} className="max-w-3xl mx-auto mt-8">
          <SectionLabel>About Me</SectionLabel>
          <SectionTitle>Crafting digital solutions with passion</SectionTitle>

          {([
            <>Saya adalah <span style={{ color: C.text2 }}>UI/UX Designer</span>, <span style={{ color: C.text2 }}>Graphic Designer</span>, dan <span style={{ color: C.text2 }}>Junior Web Developer</span> dengan pengalaman lebih dari satu tahun dalam merancang dan membangun solusi digital yang fungsional, estetis, serta berorientasi pada pengguna.</>,
            "Dalam peran UI/UX, saya berfokus pada perancangan user flow, wireframing, dan prototyping menggunakan Figma untuk menciptakan pengalaman pengguna yang intuitif dan efisien. Sebagai Graphic Designer, saya terbiasa mengerjakan desain logo, visual branding, serta elemen grafis yang konsisten dengan identitas brand.",
            <>Sebagai Junior Web Developer, saya mampu mengimplementasikan desain ke dalam website yang responsif menggunakan <span style={{ color: C.text2 }}>HTML, CSS, JavaScript</span>, serta framework modern seperti <span style={{ color: C.text2 }}>Next.js</span> dan <span style={{ color: C.text2 }}>Laravel</span>, dengan fokus pada performa dan aksesibilitas.</>,
            "Pendekatan saya selalu berpusat pada keseimbangan antara estetika visual yang menarik dan fungsionalitas yang solid — menciptakan produk digital yang tidak hanya indah dilihat, tetapi juga mudah digunakan dan memberi dampak nyata.",
          ] as React.ReactNode[]).map((text, i) => (
            <motion.p key={i} variants={itemVariants}
              className="text-base leading-[1.85] mb-5 font-light"
              style={{ color: C.text3 }}>
              {text}
            </motion.p>
          ))}
        </motion.section>

        {/* ── SKILLS ───────────────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants} className="max-w-5xl mx-auto mt-36">
          <SectionLabel>Skills & Expertise</SectionLabel>
          <SectionTitle>What I bring to the table</SectionTitle>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: "⌨", label: "Frontend Development", bar: `linear-gradient(90deg, rgba(37,99,235,0.7), ${C.aurora})`, skills: [{ name: "HTML", value: 95 }, { name: "CSS / Tailwind", value: 90 }, { name: "JavaScript", value: 85 }, { name: "React / Next.js", value: 75 }] },
              { icon: "✦", label: "UI/UX & Design",        bar: `linear-gradient(90deg, rgba(99,102,241,0.7), rgba(147,197,253,0.9))`, skills: [{ name: "Figma", value: 90 }, { name: "Wireframing", value: 85 }, { name: "Prototyping", value: 88 }, { name: "User Flow", value: 80 }, { name: "Design System", value: 65 }] },
              { icon: "◎", label: "Backend",               bar: `linear-gradient(90deg, rgba(14,165,233,0.6), rgba(56,189,248,0.9))`, skills: [{ name: "MySQL", value: 75 }, { name: "Laravel", value: 70 }, { name: "Node.js", value: 65 }] },
            ].map((card, ci) => (
              <motion.div key={ci} variants={itemVariants} whileHover={{ y: -8, scale: 1.01 }}
                className="group relative rounded-2xl p-7 overflow-hidden transition-all duration-500"
                style={{ background: C.cardBg, border: `1px solid ${C.cardBrd}`, backdropFilter: "blur(16px)" }}>
                {/* Hover top glow */}
                <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${C.aurora}, transparent)` }} />
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "radial-gradient(circle at 50% 0%, rgba(37,99,235,0.08) 0%, transparent 60%)" }} />

                <div className="relative">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-6 text-base font-light"
                    style={{ background: "rgba(37,99,235,0.18)", border: `1px solid rgba(96,165,250,0.25)`, color: C.aurora }}>
                    {card.icon}
                  </div>
                  <h3 className="text-sm font-medium mb-6 tracking-wide" style={{ color: C.text2 }}>{card.label}</h3>

                  {card.skills.map((skill, i) => (
                    <div key={i} className="mb-4 last:mb-0">
                      <div className="flex justify-between text-xs mb-2">
                        <span style={{ color: C.text3 }}>{skill.name}</span>
                        <span style={{ color: C.text4 }} className="font-mono tabular-nums">{skill.value}%</span>
                      </div>
                      <div className="h-px overflow-hidden rounded-full" style={{ background: "rgba(37,99,235,0.15)" }}>
                        <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                          className="h-full rounded-full relative overflow-hidden"
                          style={{ background: card.bar }}>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent shimmer-animation" />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── WEB PROJECTS ─────────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants} className="max-w-5xl mx-auto mt-36">
          <SectionLabel>Web Development</SectionLabel>
          <SectionTitle>Web Projects</SectionTitle>

          <div className="grid md:grid-cols-2 gap-4">
            {webProjects.map((p, i) => (
              <motion.div key={i} variants={itemVariants} whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }} className="group">
                <Card className="rounded-2xl h-full overflow-hidden transition-all duration-500"
                  style={{ background: C.cardBg, border: `1px solid ${C.cardBrd}`, backdropFilter: "blur(16px)" }}>
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className="relative w-full h-52 overflow-hidden">
                      <img src={p.image} alt={p.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                        style={{ opacity: 0.75 }} />
                      <div className="absolute inset-0"
                        style={{ background: `linear-gradient(to top, ${C.bg} 5%, rgba(3,5,15,0.6) 55%, transparent)` }} />
                      {/* Blue hover sheen */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ background: "linear-gradient(135deg, rgba(37,99,235,0.1) 0%, transparent 60%)" }} />
                    </div>
                    <div className="p-7 flex flex-col flex-1">
                      {/* Top edge glow on hover */}
                      <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ background: `linear-gradient(90deg, transparent, ${C.aurora}, transparent)` }} />
                      <h3 className="text-base font-medium mb-2 tracking-tight" style={{ color: C.text1 }}>{p.title}</h3>
                      <p className="text-sm leading-relaxed mb-5 flex-1 font-light" style={{ color: C.text3 }}>{p.desc}</p>
                      <div className="flex flex-wrap gap-2 mb-5">
                        {p.tags.map((t, idx) => <span key={idx} className="text-xs px-3 py-1 rounded-full" style={{ background: C.tagBg, border: `1px solid ${C.tagBrd}`, color: C.tagTxt }}>{t}</span>)}
                      </div>
                      <div className="flex justify-between items-center pt-4" style={{ borderTop: `1px solid ${C.divider}` }}>
                        <span className="text-xs flex items-center gap-1.5" style={{ color: C.text4 }}>⏱ {p.duration}</span>
                        <a href={p.link} target="_blank">
                          <button className="px-5 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 hover:scale-105 hover:brightness-110"
                            style={{ background: C.btnBg, border: `1px solid ${C.btnBrd}`, color: C.btnTxt }}>
                            View Project →
                          </button>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── UI/UX PROJECTS ───────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants} className="max-w-5xl mx-auto mt-36">
          <SectionLabel>UI/UX Design</SectionLabel>
          <SectionTitle>UI/UX Projects</SectionTitle>

          <div className="grid md:grid-cols-2 gap-4">
            {uiuxProjects.map((p, i) => (
              <motion.div key={i} variants={itemVariants} whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }} className="group">
                <Card className="rounded-2xl h-full overflow-hidden transition-all duration-500"
                  style={{ background: C.cardBg, border: `1px solid ${C.cardBrd}`, backdropFilter: "blur(16px)" }}>
                  <CardContent className="p-7 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-5">
                      <span className="text-xs font-mono tabular-nums" style={{ color: C.text4 }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="w-6 h-6 rounded-full flex items-center justify-center"
                        style={{ background: "rgba(37,99,235,0.15)", border: `1px solid rgba(96,165,250,0.2)` }}>
                        <span style={{ fontSize: "9px", color: C.aurora }}>↗</span>
                      </div>
                    </div>
                    {/* Hover line */}
                    <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: `linear-gradient(90deg, transparent, ${C.aurora}, transparent)` }} />
                    <h3 className="text-base font-medium mb-2 tracking-tight" style={{ color: C.text1 }}>{p.title}</h3>
                    <p className="text-sm leading-relaxed mb-5 flex-1 font-light" style={{ color: C.text3 }}>{p.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {p.tags.map((t, idx) => <span key={idx} className="text-xs px-3 py-1 rounded-full" style={{ background: C.tagBg, border: `1px solid ${C.tagBrd}`, color: C.tagTxt }}>{t}</span>)}
                    </div>
                    <div className="flex justify-between items-center pt-4" style={{ borderTop: `1px solid ${C.divider}` }}>
                      <span className="text-xs" style={{ color: C.text4 }}>⏱ {p.duration}</span>
                      <a href={p.link} target="_blank">
                        <button className="px-5 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 hover:scale-105 hover:brightness-110"
                          style={{ background: C.btnBg, border: `1px solid ${C.btnBrd}`, color: C.btnTxt }}>
                          View Design →
                        </button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── BRANDING ─────────────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants} className="max-w-5xl mx-auto mt-36">
          <SectionLabel>Branding</SectionLabel>
          <motion.h3 variants={itemVariants} className="text-3xl md:text-5xl font-light mb-6"
            style={{ letterSpacing: "-0.03em", color: C.text1 }}>
            Branding & Logo Design
          </motion.h3>
          <motion.p variants={itemVariants} className="max-w-xl mb-12 text-base font-light leading-relaxed"
            style={{ color: C.text3 }}>
            Selain UI/UX, saya juga mengerjakan desain logo dan identitas visual untuk berbagai produk dan sistem digital.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {["logo-intan.png","logo-elecon.png","logo-vicit.png","logo-jojanjejen.png",
              "logo-novacreative.png","logo-panggilaja.png","logo-herardo.png","logo-echorift.png"].map((logo, i) => (
              <motion.div key={i} variants={itemVariants} whileHover={{ y: -6, scale: 1.04 }}
                className="group relative rounded-xl p-6 flex items-center justify-center overflow-hidden transition-all duration-300"
                style={{ background: C.cardBg, border: `1px solid ${C.cardBrd}` }}>
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)" }} />
                <img src={`/logos/${logo}`} alt={logo}
                  className="h-12 w-auto object-contain relative z-10 transition-all duration-500 group-hover:scale-110"
                  style={{ filter: "grayscale(100%) brightness(0.5)", opacity: 0.55 }}
                  onMouseOver={e => { const el = e.currentTarget as HTMLImageElement; el.style.filter = "grayscale(0%) brightness(1)"; el.style.opacity = "1"; }}
                  onMouseOut={e => { const el = e.currentTarget as HTMLImageElement; el.style.filter = "grayscale(100%) brightness(0.5)"; el.style.opacity = "0.55"; }} />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── CONTACT ──────────────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants} className="max-w-3xl mx-auto mt-36 text-center">
          <SectionLabel>Get In Touch</SectionLabel>
          <motion.h3 variants={itemVariants} className="text-3xl md:text-5xl font-light mb-5"
            style={{ letterSpacing: "-0.03em", color: C.text1 }}>
            Let&apos;s work together
          </motion.h3>
          <motion.p variants={itemVariants} className="mb-14 font-light" style={{ color: C.text3 }}>
            Feel free to reach out for collaboration, freelance work, or full-time opportunities.
          </motion.p>

          <motion.div variants={containerVariants} className="flex flex-col sm:flex-row justify-center gap-3">
            {[
              { href: "mailto:masbin544@gmail.com", label: "masbin544@gmail.com", icon: "✉" },
              { href: "https://wa.me/6281774178707", label: "+62 817 7417 8707", icon: "◯", target: "_blank" },
            ].map((item, i) => (
              <motion.a key={i} variants={itemVariants} href={item.href}
                target={(item as { target?: string }).target}
                whileHover={{ y: -4 }}
                className="group flex items-center justify-center gap-3 px-7 py-4 rounded-2xl transition-all duration-300"
                style={{ background: C.cardBg, border: `1px solid ${C.cardBrd}`, backdropFilter: "blur(12px)" }}>
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 70%)" }} />
                <span className="text-sm font-light relative z-10" style={{ color: C.text2 }}>{item.icon}</span>
                <span className="text-sm font-light relative z-10" style={{ color: C.text3 }}>{item.label}</span>
              </motion.a>
            ))}

            <motion.a variants={itemVariants} href="https://github.com/masbin5" target="_blank" rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              className="group flex items-center justify-center gap-3 px-7 py-4 rounded-2xl transition-all duration-300"
              style={{ background: C.cardBg, border: `1px solid ${C.cardBrd}`, backdropFilter: "blur(12px)" }}>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 70%)" }} />
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current relative z-10" style={{ color: C.text2 }}>
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              <span className="text-sm font-light relative z-10" style={{ color: C.text3 }}>github.com/masbin5</span>
            </motion.a>
          </motion.div>
        </motion.section>

        {/* ── FOOTER ───────────────────────────────────────────────────── */}
        <motion.footer initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.2 }} className="max-w-5xl mx-auto mt-40 pt-10 text-center"
          style={{ borderTop: `1px solid ${C.divider}` }}>
          <div className="flex items-center justify-center mb-4">
            {/* Mini blue orb */}
            <div className="w-5 h-5 rounded-full"
              style={{ background: `radial-gradient(circle, rgba(96,165,250,0.5) 0%, rgba(37,99,235,0.15) 60%, transparent 100%)`, border: `1px solid rgba(96,165,250,0.3)`, boxShadow: "0 0 12px rgba(37,99,235,0.3)" }} />
          </div>
          <p className="text-xs tracking-widest uppercase font-light" style={{ color: C.text4 }}>
            © {new Date().getFullYear()} Bintang Akbar Alim — UI/UX Designer · Web Junior Developer · Graphic Designer
          </p>
        </motion.footer>

      </div>
    </div>
  );
}