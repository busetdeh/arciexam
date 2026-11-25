"use client";

import Link from "next/link";
import { useState } from "react";
import { DashboardShell, type NavItem } from "@/components/DashboardShell";

const STUDENT_NAV: NavItem[] = [
  { label: "Dasbor Peserta", href: "/student", icon: "dashboard" },
  { label: "Sesi Ujian Aktif", href: "/student/exam", icon: "edit_document" },
  { label: "Hasil & Sertifikat", href: "/student/results", icon: "workspace_premium" },
];

export default function StudentResultsPage() {
  const [regradeSent, setRegradeSent] = useState(false);

  return (
    <DashboardShell
      roleLabel="Portal Siswa / Mahasiswa"
      userName="M. Rayhan Al-Farisi"
      userMeta="NISN: 0084521099 • XII IPA / S1"
      navItems={STUDENT_NAV}
    >
      <div className="space-y-6">
        <div className="rounded-xl bg-surface-container-lowest p-6 sm:p-8 shadow-sm border border-outline-variant/20 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="px-2.5 py-1 rounded bg-tertiary-fixed text-on-tertiary-fixed text-xs font-bold">
              UJIAN SELESAI • TERVERIFIKASI
            </span>
            <h1 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-primary font-bold">
              Hasil Evaluasi: Algoritma &amp; Struktur Data
            </h1>
            <p className="font-body-md text-on-surface-variant">
              Hash Integritas:{" "}
              <code className="font-mono text-xs bg-surface-container-low px-2 py-0.5 rounded">
                SHA256: 9f84b2...e71a0c
              </code>
            </p>
          </div>
          <div className="p-5 rounded-xl bg-surface-container-low text-center shrink-0">
            <span className="font-label-md text-on-surface-variant uppercase block">
              Nilai Akhir
            </span>
            <span className="font-display-lg text-primary font-bold">
              92<span className="text-lg text-on-surface-variant">/100</span>
            </span>
            <span className="block text-xs font-bold text-on-tertiary-container mt-1">
              Lulus (Predikat A)
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/20">
            <span className="text-xs text-on-surface-variant">
              Bagian A: Konsep Dasar
            </span>
            <div className="font-headline-md font-bold text-primary mt-1">
              95% (19/20 Benar)
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/20">
            <span className="text-xs text-on-surface-variant">
              Bagian B: Struktur Graf
            </span>
            <div className="font-headline-md font-bold text-primary mt-1">
              90% (18/20 Benar)
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/20">
            <span className="text-xs text-on-surface-variant">
              Skor Integritas AI Proctoring
            </span>
            <div className="font-headline-md font-bold text-on-tertiary-container mt-1">
              99 / 100 (Bersih)
            </div>
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/20 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="font-headline-sm text-primary font-bold">
              Tindakan Pasca-Ujian
            </h2>
            <p className="font-body-sm text-on-surface-variant">
              Unduh sertifikat integritas resmi atau ajukan peninjauan ulang
              (re-grade) jika ada ketidaksesuaian soal.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setRegradeSent(true)}
              className="px-4 py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-label-lg text-xs font-bold transition-colors"
            >
              {regradeSent ? "Pengajuan Re-grade Terkirim ✓" : "Ajukan Re-grade"}
            </button>
            <Link
              href="/student"
              className="px-4 py-2.5 rounded-lg bg-primary text-on-primary font-label-lg text-xs font-bold"
            >
              Kembali ke Dasbor
            </Link>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
