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

type ExamStatus = "Semua" | "Published" | "Draft" | "Completed";

const EXAMS = [
  {
    id: "EX-301",
    title: "Algoritma & Struktur Data / Informatika XII",
    level: "SMU/SMK & S1",
    status: "Published" as const,
    participants: 142,
    avgScore: "84.2",
    flags: 2,
  },
  {
    id: "EX-205",
    title: "Matematika Peminatan: Kalkulus & Vektor",
    level: "SMA Kelas XI",
    status: "Draft" as const,
    participants: 0,
    avgScore: "—",
    flags: 0,
  },
  {
    id: "EX-109",
    title: "Ujian Tengah Semester IPA Terpadu",
    level: "SMP Kelas IX",
    status: "Completed" as const,
    participants: 210,
    avgScore: "79.6",
    flags: 4,
  },
];

export default function InstructorDashboardPage() {
  const [filter, setFilter] = useState<ExamStatus>("Semua");

  const filtered =
    filter === "Semua" ? EXAMS : EXAMS.filter((e) => e.status === filter);

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
              Dasbor Manajemen Ujian
            </h1>
            <p className="font-body-md text-on-surface-variant">
              Kelola bank soal QTI 2.1, jadwalkan evaluasi, dan pantau hasil
              peserta SMP, SMU/SMK, maupun Perguruan Tinggi.
            </p>
          </div>
          <Link
            href="/instructor/builder"
            className="px-5 py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-sm font-bold inline-flex items-center gap-2 shadow-sm"
          >
            <span className="material-symbols-outlined text-[18px]">add</span>
            <span>Buat Ujian Baru</span>
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/20">
            <span className="text-xs text-on-surface-variant">
              Total Peserta Aktif
            </span>
            <div className="font-display-lg text-primary font-bold mt-1">
              352
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/20">
            <span className="text-xs text-on-surface-variant">
              Rata-Rata Nilai Kelas
            </span>
            <div className="font-display-lg text-secondary font-bold mt-1">
              81.9
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/20">
            <span className="text-xs text-on-surface-variant">
              Flag Anomali AI
            </span>
            <div className="font-display-lg text-error font-bold mt-1">6</div>
          </div>
        </div>

        {/* My Exams */}
        <section className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/20 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="font-headline-sm text-primary font-bold">
              Daftar Ujian Saya
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {(["Semua", "Published", "Draft", "Completed"] as ExamStatus[]).map(
                (st) => (
                  <button
                    key={st}
                    type="button"
                    onClick={() => setFilter(st)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                      filter === st
                        ? "bg-primary text-on-primary"
                        : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container"
                    }`}
                  >
                    {st}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="space-y-3">
            {filtered.map((exam) => (
              <div
                key={exam.id}
                className="p-4 rounded-xl bg-surface-container-low flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-secondary">
                      {exam.id}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container-lowest text-[11px] font-semibold text-primary">
                      {exam.level}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                        exam.status === "Published"
                          ? "bg-tertiary-fixed text-on-tertiary-fixed"
                          : exam.status === "Draft"
                          ? "bg-secondary-fixed text-on-secondary-fixed"
                          : "bg-surface-container-high text-on-surface-variant"
                      }`}
                    >
                      {exam.status}
                    </span>
                  </div>
                  <h3 className="font-label-lg text-primary font-bold mt-1">
                    {exam.title}
                  </h3>
                  <p className="text-xs text-on-surface-variant mt-0.5">
                    {exam.participants} Peserta • Rata-rata: {exam.avgScore} •
                    Flag AI: {exam.flags}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Link
                    href="/instructor/builder"
                    className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary text-xs font-semibold"
                  >
                    Edit Soal
                  </Link>
                  <Link
                    href="/instructor/analytics"
                    className="px-3 py-1.5 rounded-lg bg-primary text-on-primary text-xs font-semibold"
                  >
                    Analitik
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </DashboardShell>
  );
}
