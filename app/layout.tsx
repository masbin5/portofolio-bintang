import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Bintang Akbar Alim – Web Junior Developer, UI/UX & Graphic Designer",
    template: "%s | Bintang Akbar Alim",
  },
  description:
    "Portfolio Bintang Akbar Alim, Web Junior Developer, UI/UX & Graphic Designer dengan pengalaman 2+ tahun dalam merancang aplikasi, website, dan visual branding yang fungsional dan elegan.",
  keywords: [
    "Web Junior Developer",
    "Graphic Designer",
    "UI/UX Designer",
    "Figma Designer",
    "Web Designer",
    "Portfolio UI UX",
  ],
  authors: [{ name: "Bintang Akbar Alim" }],
  creator: "Bintang Akbar Alim",
  openGraph: {
    title: "Bintang Akbar Alim – Web Junior Developer, UI/UX & Graphic Designer",
    description:
      "Web Junior Developer, UI/UX & Graphic Designer dengan fokus pada desain aplikasi, website, dan visual branding modern.",
    url: "https://YOUR-VERCEL-URL.vercel.app",
    siteName: "Bintang Akbar Alim Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bintang Akbar Alim Portfolio",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
