"use client";

import { useState } from "react";
import { DashboardShell, type NavItem } from "@/components/DashboardShell";

const INSTRUCTOR_NAV: NavItem[] = [
  { label: "Dasbor Guru / Dosen", href: "/instructor", icon: "dashboard" },
  { label: "Exam Builder", href: "/instructor/builder", icon: "build" },
  { label: "Analitik & Hasil", href: "/instructor/analytics", icon: "analytics" },
  { label: "Konsol Pengawas", href: "/proctor", icon: "videocam" },
];

const ITEM_ANALYSIS = [
  {
    code: "Q-01",
    topic: "Kompleksitas Dijkstra",
    difficulty: "0.72 (Sedang)",
    discrimination: "+0.46 (Tinggi)",
    correctRate: "72%",
  },
  {
    code: "Q-02",
    topic: "Fungsi & Persamaan Kuadrat",
    difficulty: "0.41 (Sulit)",
    discrimination: "+0.51 (Sangat Baik)",
    correctRate: "41%",
  },
  {
    code: "Q-03",
    topic: "Pemahaman Bacaan Kritis",
    difficulty: "0.85 (Mudah)",
    discrimination: "+0.29 (Cukup)",
    correctRate: "85%",
  },
];

export default function InstructorAnalyticsPage() {
  const [exportMsg, setExportMsg] = useState<string | null>(null);

  const handleExport = (fmt: string) => {
    setExportMsg(`Laporan berhasil diekspor ke format ${fmt}.`);
    setTimeout(() => setExportMsg(null), 2500);
  };

  return (
    <DashboardShell
      roleLabel="Pusat Guru / Dosen"
      userName="Dr. Ratna Dewi, M.Kom."
      userMeta="NUPTK / NIDN: 0014088702"
      navItems={INSTRUCTOR_NAV}
    >
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-primary font-bold">
              Analitik Psikometrik &amp; Laporan Hasil
            </h1>
            <p className="font-body-md text-on-surface-variant">
              Evaluasi tingkat kesukaran, daya pembeda butir soal, dan ekspor
              laporan CSV, PDF, atau Excel.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {["CSV", "PDF", "Excel"].map((fmt) => (
              <button
                key={fmt}
                type="button"
                onClick={() => handleExport(fmt)}
                className="px-3.5 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary text-xs font-bold transition-colors"
              >
                Ekspor {fmt}
              </button>
            ))}
          </div>
        </div>

        {exportMsg && (
          <div className="p-3 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed text-sm font-semibold">
            {exportMsg}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/20">
            <span className="text-xs text-on-surface-variant">
              Tingkat Penyelesaian
            </span>
            <div className="font-display-lg text-primary font-bold mt-1">
              98.6%
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/20">
            <span className="text-xs text-on-surface-variant">
              Rata-Rata Skor
            </span>
            <div className="font-display-lg text-secondary font-bold mt-1">
              84.2
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/20">
            <span className="text-xs text-on-surface-variant">
              Reliabilitas Cronbach&apos;s Alpha
            </span>
            <div className="font-display-lg text-on-tertiary-container font-bold mt-1">
              0.89
            </div>
          </div>
        </div>

        <section className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/20 overflow-x-auto">
          <h2 className="font-headline-sm text-primary font-bold mb-4">
            Item Analysis (Analisis Butir Soal)
          </h2>
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-outline-variant/40 text-on-surface-variant text-xs uppercase">
                <th className="py-3 pr-4">Kode</th>
                <th className="py-3 pr-4">Topik</th>
                <th className="py-3 pr-4">Indeks Kesukaran (P)</th>
                <th className="py-3 pr-4">Daya Pembeda (r)</th>
                <th className="py-3">Persentase Benar</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20">
              {ITEM_ANALYSIS.map((row) => (
                <tr key={row.code}>
                  <td className="py-3 pr-4 font-mono font-bold text-secondary">
                    {row.code}
                  </td>
                  <td className="py-3 pr-4 font-semibold text-primary">
                    {row.topic}
                  </td>
                  <td className="py-3 pr-4">{row.difficulty}</td>
                  <td className="py-3 pr-4 text-on-tertiary-container font-semibold">
                    {row.discrimination}
                  </td>
                  <td className="py-3 font-bold">{row.correctRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </DashboardShell>
  );
}
