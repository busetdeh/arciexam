"use client";

import Link from "next/link";
import { useState } from "react";
import { DashboardShell, type NavItem } from "@/components/DashboardShell";

const INSTRUCTOR_NAV: NavItem[] = [
  { label: "Dasbor Guru / Dosen", href: "/instructor", icon: "dashboard" },
  { label: "Exam Builder", href: "/instructor/builder", icon: "build" },
  { label: "Analitik & Hasil", href: "/instructor/analytics", icon: "analytics" },
  { label: "Konsol Pengawas", href: "/proctor", icon: "videocam" },
];

const INITIAL_QUESTIONS = [
  {
    id: "Q-101",
    topic: "Kompleksitas Graf",
    type: "Pilihan Ganda",
    points: 15,
  },
  {
    id: "Q-102",
    topic: "Persamaan Kuadrat & Fungsi",
    type: "Numerik / LaTeX",
    points: 20,
  },
  {
    id: "Q-103",
    topic: "Analisis Teks & Literasi",
    type: "Esai Terstruktur",
    points: 25,
  },
];

export default function ExamBuilderPage() {
  const [questions, setQuestions] = useState(INITIAL_QUESTIONS);
  const [duration, setDuration] = useState(90);
  const [proctoring, setProctoring] = useState(true);
  const [randomize, setRandomize] = useState(true);
  const [accessCode, setAccessCode] = useState("ARCI-2026");
  const [publishedUrl, setPublishedUrl] = useState<string | null>(null);

  const moveUp = (idx: number) => {
    if (idx === 0) return;
    const copy = [...questions];
    [copy[idx - 1], copy[idx]] = [copy[idx], copy[idx - 1]];
    setQuestions(copy);
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
              Exam Builder Dinamis
            </h1>
            <p className="font-body-md text-on-surface-variant">
              Susun urutan butir soal, atur durasi, acak soal, dan terbitkan URL
              ujian secara instan.
            </p>
          </div>
          <div className="flex gap-2">
            <Link
              href="/student/exam"
              className="px-4 py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-label-lg text-xs font-bold"
            >
              Pratinjau Peserta
            </Link>
            <button
              type="button"
              onClick={() =>
                setPublishedUrl("https://exam.arci.id/s/ex-301-arci")
              }
              className="px-5 py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-xs font-bold"
            >
              Terbitkan Ujian
            </button>
          </div>
        </div>

        {publishedUrl && (
          <div className="p-4 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed flex flex-wrap items-center justify-between gap-3">
            <div>
              <strong className="block text-sm">
                Ujian Berhasil Diterbitkan!
              </strong>
              <span className="text-xs font-mono">
                URL: {publishedUrl} • Kode Akses: {accessCode}
              </span>
            </div>
            <Link
              href="/student/exam"
              className="px-3 py-1.5 rounded-lg bg-primary text-on-primary text-xs font-bold"
            >
              Buka Sesi
            </Link>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Question List */}
          <section className="lg:col-span-8 bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/20 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-headline-sm text-primary font-bold">
                Daftar Butir Soal ({questions.length})
              </h2>
              <button
                type="button"
                onClick={() =>
                  setQuestions((prev) => [
                    ...prev,
                    {
                      id: `Q-${104 + prev.length}`,
                      topic: "Soal Baru dari Bank Soal QTI",
                      type: "Pilihan Ganda",
                      points: 10,
                    },
                  ])
                }
                className="px-3 py-1.5 rounded-lg bg-secondary text-on-secondary text-xs font-bold"
              >
                + Tambah Soal
              </button>
            </div>

            <div className="space-y-3">
              {questions.map((q, idx) => (
                <div
                  key={q.id}
                  className="p-4 rounded-xl bg-surface-container-low flex items-center justify-between gap-3"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-secondary">
                        #{idx + 1} ({q.id})
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container-lowest text-[11px] font-semibold">
                        {q.type}
                      </span>
                    </div>
                    <div className="font-label-lg text-primary font-semibold mt-1">
                      {q.topic}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-secondary-fixed text-on-secondary-fixed text-xs font-bold">
                      {q.points} Poin
                    </span>
                    <button
                      type="button"
                      onClick={() => moveUp(idx)}
                      disabled={idx === 0}
                      className="p-1.5 rounded bg-surface-container hover:bg-surface-container-high disabled:opacity-40"
                      title="Naikkan urutan"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        arrow_upward
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Exam Settings */}
          <aside className="lg:col-span-4 bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/20 space-y-4">
            <h2 className="font-headline-sm text-primary font-bold">
              Pengaturan Sesi Ujian
            </h2>
            <div>
              <label className="block font-label-md text-on-surface-variant mb-1">
                Durasi Total (Menit)
              </label>
              <input
                type="number"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className="w-full px-3.5 py-2 rounded-lg bg-surface-container-low focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
            <div>
              <label className="block font-label-md text-on-surface-variant mb-1">
                Kode Akses Peserta
              </label>
              <input
                type="text"
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value)}
                className="w-full px-3.5 py-2 rounded-lg bg-surface-container-low font-mono focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
            <label className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low cursor-pointer">
              <span className="text-sm font-semibold">
                Aktifkan AI Proctoring
              </span>
              <input
                type="checkbox"
                checked={proctoring}
                onChange={(e) => setProctoring(e.target.checked)}
                className="w-4 h-4 accent-secondary"
              />
            </label>
            <label className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low cursor-pointer">
              <span className="text-sm font-semibold">
                Acak Urutan Soal &amp; Opsi
              </span>
              <input
                type="checkbox"
                checked={randomize}
                onChange={(e) => setRandomize(e.target.checked)}
                className="w-4 h-4 accent-secondary"
              />
            </label>
          </aside>
        </div>
      </div>
    </DashboardShell>
  );
}
