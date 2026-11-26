"use client";

import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

type SectionProps = {
  id?: string;        // dipakai menu navigasi (scroll + penanda aktif)
  num: string;        // nomor di sisi kiri: "03"
  label: string;      // teks kecil di atas judul
  title: string;      // judul baris pertama
  subtitle: string;   // judul baris kedua (abu-abu)
  desc?: string;      // paragraf pembuka (opsional)
  top?: string;       // jarak atas section
  titleMb?: string;   // jarak bawah judul (opsional)
  children: ReactNode;
};

/** Kerangka standar setiap section: nomor + label + judul + isi. */
export default function Section({
  id,
  num,
  label,
  title,
  subtitle,
  desc,
  top = "mt-40",
  titleMb,
  children,
}: SectionProps) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={containerVariants}
      className={`max-w-5xl mx-auto ${top}`}
    >
      <div className="flex flex-col md:flex-row gap-16">
        {/* Nomor section */}
        <div className="flex-shrink-0 md:w-16">
          <motion.div variants={itemVariants} className="sticky top-24">
            <span className="font-mono-dm text-xs text-stone-700 block mb-2">{num}</span>
            <div
              className="w-[1px] h-24 mx-auto"
              style={{ background: "linear-gradient(to bottom, rgba(16,185,129,0.3), transparent)" }}
            />
          </motion.div>
        </div>

        <div className="flex-1">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
            <div className="w-4 h-[1px]" style={{ background: "rgba(16,185,129,0.6)" }} />
            <span className="font-mono-dm text-xs tracking-[0.2em] text-emerald-400/70 uppercase">{label}</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className={`font-syne font-bold text-4xl md:text-5xl leading-tight ${titleMb ?? (desc ? "mb-4" : "mb-12")}`}
            style={{ letterSpacing: "-0.02em", color: "#fafaf9" }}
          >
            {title}
            <br />
            <span className="text-stone-500 font-normal">{subtitle}</span>
          </motion.h2>

          {desc && (
            <motion.p
              variants={itemVariants}
              className="text-stone-500 mb-12 font-sans text-sm leading-relaxed max-w-lg"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {desc}
            </motion.p>
          )}

          {children}
        </div>
      </div>
    </motion.section>
  );
}
