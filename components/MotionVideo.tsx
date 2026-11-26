"use client";

import { useEffect, useRef } from "react";

type MotionVideoProps = {
  src: string;
  title: string;
  tag: string;
  aspect: string; // "9/16", "16/9", "1/1"
};

/** Video autoplay + loop (tanpa suara). Hanya diputar saat terlihat di layar. */
export default function MotionVideo({ src, title, tag, aspect }: MotionVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.35 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <div
      className="card-hover-border relative rounded-2xl overflow-hidden border"
      style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.06)" }}
    >
      <div style={{ aspectRatio: aspect, background: "#000" }}>
        <video
          ref={ref}
          src={encodeURI(src)}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-contain block"
        />
      </div>
      <div className="p-4 flex flex-col items-start gap-1">
        <h3 className="font-syne font-bold text-sm text-stone-100 tracking-tight">{title}</h3>
        <span className="font-mono-dm text-[10px] tracking-wide text-emerald-400/80">{tag}</span>
      </div>
    </div>
  );
}
