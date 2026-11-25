"use client";

import Link from "next/link";
import { useState } from "react";
import { DashboardShell, type NavItem } from "@/components/DashboardShell";

const STUDENT_NAV: NavItem[] = [
  { label: "Dasbor Peserta", href: "/student", icon: "dashboard" },
  { label: "Sesi Ujian Aktif", href: "/student/exam", icon: "edit_document" },
  { label: "Hasil & Sertifikat", href: "/student/results", icon: "workspace_premium" },
];

export default function StudentDashboardPage() {
  const [profileSaved, setProfileSaved] = useState(false);

  return (
    <DashboardShell
      roleLabel="Portal Siswa / Mahasiswa"
      userName="M. Rayhan Al-Farisi"
      userMeta="NISN: 0084521099 • XII IPA / S1"
      navItems={STUDENT_NAV}
    >
      <div className="space-y-6">
        {/* Welcome & Check-in Hero */}
        <div className="rounded-xl bg-primary-container text-on-primary p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 max-w-xl">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 text-tertiary-fixed text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-tertiary-fixed animate-pulse" />
              Sesi Ujian Siap Dimulai
            </span>
            <h1 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg font-bold">
              CS301 / MAT-12: Algoritma &amp; Pemodelan Graf
            </h1>
            <p className="font-body-md text-primary-fixed-dim">
              Durasi 90 menit • 50 Butir Soal • Pengawasan AI Proctoring Tingkat
              IV aktif. Pastikan kamera dan mikrofon terhubung sebelum check-in.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/student/exam"
              className="px-5 py-3 rounded-lg bg-secondary hover:bg-secondary-container text-on-secondary font-label-lg font-bold text-center shadow-sm transition-colors"
            >
              Check-in &amp; Mulai Ujian →
            </Link>
          </div>
        </div>

        {/* Upcoming & Past Exams */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <section className="lg:col-span-7 bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/20 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-headline-sm text-headline-sm text-primary font-bold">
                Jadwal Ujian Mendatang
              </h2>
              <span className="text-xs font-semibold text-secondary">
                2 Terjadwal
              </span>
            </div>

            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-surface-container-low flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed text-[11px] font-bold">
                    HARI INI • 09:00 WIB
                  </span>
                  <h3 className="font-label-lg text-primary font-bold mt-1">
                    Algoritma &amp; Struktur Data / Informatika XII
                  </h3>
                  <p className="font-body-sm text-on-surface-variant">
                    50 Soal • 90 Menit • Safe Exam + AI Proctoring
                  </p>
                </div>
                <Link
                  href="/student/exam"
                  className="px-4 py-2 rounded-lg bg-primary text-on-primary text-xs font-bold text-center shrink-0"
                >
                  Masuk Ruang
                </Link>
              </div>

              <div className="p-4 rounded-xl bg-surface-container-low flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant text-[11px] font-bold">
                    BESOK • 13:30 WIB
                  </span>
                  <h3 className="font-label-lg text-primary font-bold mt-1">
                    Matematika Peminatan / Kalkulus Terapan
                  </h3>
                  <p className="font-body-sm text-on-surface-variant">
                    40 Soal • 120 Menit • Kalkulator Ilmiah Bawaan
                  </p>
                </div>
                <span className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface-variant text-xs font-semibold text-center shrink-0">
                  Belum Dibuka
                </span>
              </div>
            </div>
          </section>

          {/* Past Exams & Certificates */}
          <section className="lg:col-span-5 bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/20 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-headline-sm text-headline-sm text-primary font-bold">
                Riwayat Nilai &amp; Sertifikat
              </h2>
              <Link
                href="/student/results"
                className="text-xs font-semibold text-secondary hover:underline"
              >
                Lihat Semua
              </Link>
            </div>

            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-surface-container-low flex items-center justify-between gap-3">
                <div>
                  <h3 className="font-label-lg text-primary font-bold">
                    Fisika Kuantum / Dasar
                  </h3>
                  <p className="font-body-sm text-on-surface-variant">
                    Skor: <strong className="text-on-tertiary-container">91 / 100</strong> • Integritas 99%
                  </p>
                </div>
                <Link
                  href="/student/results"
                  className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary text-xs font-semibold"
                >
                  Sertifikat
                </Link>
              </div>
              <div className="p-4 rounded-xl bg-surface-container-low flex items-center justify-between gap-3">
                <div>
                  <h3 className="font-label-lg text-primary font-bold">
                    Bahasa Inggris Akademik
                  </h3>
                  <p className="font-body-sm text-on-surface-variant">
                    Skor: <strong className="text-on-tertiary-container">88 / 100</strong> • Integritas 100%
                  </p>
                </div>
                <Link
                  href="/student/results"
                  className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary text-xs font-semibold"
                >
                  Sertifikat
                </Link>
              </div>
            </div>
          </section>
        </div>

        {/* Profile & Password Section (PRD 3.3) */}
        <section className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/20">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <div>
              <h2 className="font-headline-sm text-headline-sm text-primary font-bold">
                Profil Peserta &amp; Keamanan Akun
              </h2>
              <p className="font-body-sm text-on-surface-variant">
                Perbarui informasi identitas dan kata sandi akun ujian Anda.
              </p>
            </div>
            {profileSaved && (
              <span className="px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed text-xs font-bold">
                Perubahan tersimpan
              </span>
            )}
          </div>

          <form
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              setProfileSaved(true);
              setTimeout(() => setProfileSaved(false), 2500);
            }}
          >
            <div>
              <label className="block font-label-md text-on-surface-variant mb-1">
                Nama Lengkap
              </label>
              <input
                type="text"
                defaultValue="M. Rayhan Al-Farisi"
                className="w-full px-3.5 py-2 rounded-lg bg-surface-container-low focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
            <div>
              <label className="block font-label-md text-on-surface-variant mb-1">
                Email Institusi
              </label>
              <input
                type="email"
                defaultValue="rayhan@siswa.sch.id"
                className="w-full px-3.5 py-2 rounded-lg bg-surface-container-low focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
            <div>
              <label className="block font-label-md text-on-surface-variant mb-1">
                Kata Sandi Baru (Opsional)
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-3.5 py-2 rounded-lg bg-surface-container-low focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
            <div className="sm:col-span-3 flex justify-end">
              <button
                type="submit"
                className="px-5 py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-xs font-bold transition-colors"
              >
                Simpan Profil
              </button>
            </div>
          </form>
        </section>
      </div>
    </DashboardShell>
  );
}
