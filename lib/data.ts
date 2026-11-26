/* ──────────────────────────────────────────────
   Semua data portfolio ada di sini.
   Mau tambah project, video, atau skill? Edit file ini saja.
   ────────────────────────────────────────────── */

/* ───────── Web Projects ───────── */
export const webProjects = [
  {
    title: "Website Portfolio Interaktif",
    desc: "Website portfolio personal dengan animasi modern, smooth transitions, dan interactive elements menggunakan Next.js dan Framer Motion.",
    duration: "2 Minggu",
    tags: ["Next.js", "Framer Motion", "Tailwind"],
    link: "https://projek-landingpage-cbda.vercel.app/",
    image: "/projects/portofolio-web.png",
    accent: "#10b981",
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
    accent: "#10b981",
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

/* ───────── UI/UX Projects ───────── */
export const uiuxProjects = [
  {
    title: "Uper-Food",
    desc: "Aplikasi pemesanan makanan iOS & Android dengan UX fokus ke kecepatan dan kemudahan order.",
    duration: "1 Minggu",
    tags: ["UI/UX", "Mobile App", "Figma"],
    link: "https://www.figma.com/design/xjtxgCb06ehlCZN1yaZjFq/Uper-Food?node-id=0-1",
    accent: "#10b981",
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

/* ───────── Motion Graphic (file di public/motion/) ───────── */
export const motionVideos = [
  { src: "/motion/invly.id - mini task - Bintang.mp4", title: "invly.id – Mini Task", tag: "Motion Graphic", aspect: "9/16" },
  { src: "/motion/Digium Vid Tiktok.mp4", title: "Digium – Video TikTok", tag: "TikTok", aspect: "9/16" },
  { src: "/motion/Nusantara Sweet - Motion Graphc.mp4", title: "Nusantara Sweet", tag: "Motion Graphic", aspect: "9/16" },
  { src: "/motion/Lift Lantai 13.mp4", title: "Lift Lantai 13", tag: "Motion Graphic", aspect: "9/16" },
];

/* ───────── Graphic Design (gambar di public/graphic/pages/) ───────── */
export const GRAPHIC_PAGE_COUNT = 13;
export const graphicPages = Array.from(
  { length: GRAPHIC_PAGE_COUNT },
  (_, i) => `/graphic/pages/page-${String(i + 1).padStart(2, "0")}.jpg`
);

/* ───────── Skills (core: true = tools yang paling dikuasai) ───────── */
export const skillGroups = [
  {
    title: "Frontend",
    icon: "⌨",
    items: [
      { name: "HTML5", core: true },
      { name: "CSS3", core: true },
      { name: "JavaScript (ES6+)", core: true },
      { name: "TypeScript", core: false },
      { name: "React.js", core: true },
      { name: "Next.js", core: true },
      { name: "Tailwind CSS", core: true },
      { name: "Bootstrap", core: false },
      { name: "Framer Motion", core: false },
      { name: "shadcn/ui", core: false },
      { name: "Responsive Design", core: true },
    ],
  },
  {
    title: "Backend & Database",
    icon: "⬢",
    items: [
      { name: "Laravel", core: true },
      { name: "PHP", core: true },
      { name: "Node.js", core: false },
      { name: "Express.js", core: false },
      { name: "MySQL", core: true },
      { name: "REST API", core: true },
    ],
  },
  {
    title: "Tools & Workflow",
    icon: "◈",
    items: [
      { name: "Git", core: true },
      { name: "GitHub", core: true },
      { name: "VS Code", core: true },
      { name: "Figma", core: true },
      { name: "Vercel", core: false },
      { name: "Postman", core: false },
      { name: "npm", core: false },
      { name: "Chrome DevTools", core: false },
    ],
  },
];

/* ───────── Teks berjalan (marquee) ───────── */
export const marqueeItems = [
  "UI/UX Design",
  "Figma",
  "Next.js",
  "React.js",
  "Tailwind CSS",
  "Framer Motion",
  "Graphic Design",
  "Laravel",
  "Visual Branding",
];

/* ───────── Logo (file di public/logos/) ───────── */
export const logos = [
  "logo-intan.png",
  "logo-elecon.png",
  "logo-vicit.png",
  "logo-jojanjejen.png",
  "logo-novacreative.png",
  "logo-panggilaja.png",
  "logo-herardo.png",
  "logo-echorift.png",
  "logo-huttangerang.png",
  "logo-duniawaralaba.png",
];

/* ───────── Tekstur background (grain + goresan) ───────── */
const grainSvg = `<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%' height='100%' filter='url(#n)'/></svg>`;
export const grainUrl = `url("data:image/svg+xml;utf8,${encodeURIComponent(grainSvg)}")`;

export const scratches = [
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
