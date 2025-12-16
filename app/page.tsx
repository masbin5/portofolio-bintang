"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  const [available, setAvailable] = useState<boolean>(true);
  const [stars, setStars] = useState<
  { top: number; left: number; size: number; duration: number; delay: number }[]
>([]);


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
  const generatedStars = Array.from({ length: 14 }).map(() => ({
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 2 + 1,      // 1–3 px
    duration: Math.random() * 6 + 6,  // 6–12 detik
    delay: Math.random() * 4,
  }));

  setStars(generatedStars);
}, []);


  const projects = [
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
      title: "INTAN – Integrasi Administrasi & Kepegawaian (Uncreated)",
      desc: "Website internal untuk integrasi administrasi dan kepegawaian.",
      duration: "1 Bulan",
      tags: ["Website", "Internal System"],
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 px-6 py-16">

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto text-center"
      >
        <div className="flex flex-col items-center mb-10">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative w-44 h-44 rounded-full flex items-center justify-center group"
          >
            {/* Galaxy star particles */}
        <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
          {stars.map((star, i) => (
            <motion.span
        key={i}
        className="absolute rounded-full bg-white/70"
        style=
          {{
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

            {/* Galaxy glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-500/30 via-indigo-500/30 to-purple-500/30 blur-xl animate-pulse" />

            {/* Hover ring */}
            <div className="absolute inset-0 rounded-full border-2 border-sky-400/60 opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Profile image */}
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-slate-800 bg-slate-900 z-10">
              <img
                src="/profile/profile.jpg"
                alt="Bintang Akbar Alim"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Status badge */}
            <span
              onClick={() => setAvailable(!available)}
              className={`absolute bottom-2 right-2 z-20 px-3 py-1 text-xs rounded-full cursor-pointer shadow-md transition ${
                available
                  ? "bg-sky-500 text-white"
                  : "bg-slate-600 text-slate-200"
              }`}
            >
              {available ? "Available" : "Not Available"}
            </span>
          </motion.div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Designing <span className="text-indigo-400">intuitive</span>
          <br />
          digital experiences
        </h1>

        <p className="mt-6 text-slate-400 max-w-xl mx-auto">
          UI/UX & Graphic Designer with 1+ year experience crafting clean,
          functional, and elegant digital products.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Button className="rounded-xl">Contact Me</Button>
          <a href="/cv/Bintang-Akbar-Alim-CV.pdf" download>
            <Button variant="outline" className="rounded-xl">
              Download CV
            </Button>
          </a>
        </div>
      </motion.section>

      {/* ABOUT */}
      <section className="max-w-4xl mx-auto mt-32">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="text-slate-300 leading-relaxed mb-4">
          Saya adalah <span className="text-sky-400 font-medium">UI/UX Designer</span> dan
          <span className="text-sky-400 font-medium"> Graphic Designer</span> dengan pengalaman
          lebih dari satu tahun dalam merancang solusi digital yang fungsional,
          estetis, dan berorientasi pada pengguna.
        </p>
        <p className="text-slate-300 leading-relaxed mb-4">
          Dalam peran UI/UX, saya berfokus pada perancangan user flow, wireframing,
          dan prototyping menggunakan Figma untuk memastikan pengalaman pengguna
          yang intuitif dan efisien. Sementara sebagai Graphic Designer, saya
          terbiasa mengerjakan desain logo, visual branding, serta elemen grafis
          yang konsisten dengan identitas brand.
        </p>
        <p className="text-slate-400 leading-relaxed">
          Saya percaya bahwa desain yang baik tidak hanya terlihat menarik, tetapi
          juga mampu menyampaikan pesan, membangun kepercayaan, dan memberikan
          dampak nyata bagi pengguna maupun bisnis.
        </p>
      </section>

      {/* PROJECTS */}
      <section className="max-w-5xl mx-auto mt-32">
        <h2 className="text-3xl font-semibold mb-10">Selected Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="bg-slate-900 border-slate-800 rounded-2xl h-full group">
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-sky-400">{p.title}</h3>
                      <p className="text-slate-400 text-sm mt-1 transition-colors duration-300 group-hover:text-sky-300">{p.desc}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1 rounded-full bg-slate-800 text-slate-300 transition-colors duration-300 group-hover:text-sky-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-6">
                    <span className="text-xs text-slate-500 transition-colors duration-300 group-hover:text-sky-300">⏱ {p.duration}</span>
                    <a href={p.link} target="_blank">
                      <Button size="sm" className="rounded-xl">
                        View Design
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

            {/* LOGO & BRANDING */}
      <section className="max-w-5xl mx-auto mt-32">
        <h2 className="text-3xl font-semibold mb-10">Branding & Logo Design</h2>
        <p className="text-slate-400 max-w-2xl mb-12">
          Selain UI/UX, saya juga mengerjakan desain logo dan identitas visual
          untuk berbagai produk dan sistem digital dengan pendekatan modern
          dan bermakna.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {["logo-intan.png", "logo-elecon.png", "logo-vicit.png", "logo-jojanjejen.png"].map(
            (logo, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-center justify-center"
              >
                <img
                  src={`/logos/${logo}`}
                  alt={logo}
                  className="h-20 w-auto object-contain grayscale hover:grayscale-0 transition"
                />
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-5xl mx-auto mt-40 border-t border-slate-800 pt-10 text-center">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Bintang Akbar Alim — UI/UX Designer
        </p>
      </footer>
    </div>
  );
}
