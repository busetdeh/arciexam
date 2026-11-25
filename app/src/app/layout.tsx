import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "ARCI EXAM - Platform Asesmen Digital & Pengawasan Ujian Berbasis AI",
  description:
    "Platform asesmen digital terpadu berstandar WCAG 2.1 AA untuk SMP, SMU/SMK, dan Perguruan Tinggi dengan AI Proctoring, Bank Soal QTI 2.1, dan Analitik Psikometrik.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${plusJakartaSans.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="bg-surface font-body-md text-on-surface antialiased selection:bg-secondary selection:text-on-secondary">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
