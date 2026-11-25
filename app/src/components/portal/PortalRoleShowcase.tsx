"use client";

import Link from "next/link";
import { useState } from "react";

type RoleKey = "instructor" | "student" | "proctor" | "admin";

interface RoleData {
  key: RoleKey;
  tabLabel: string;
  badge: string;
  icon: string;
  title: string;
  description: string;
  bullets: string[];
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

const ROLES: RoleData[] = [
  {
    key: "instructor",
    tabLabel: "Guru / Dosen",
    badge: "Pusat Instruktur (Guru & Dosen)",
    icon: "edit_note",
    title:
      "Susun evaluasi ketat dalam hitungan menit dengan LaTeX, uji kode langsung, dan rubrik otomatis",
    description:
      "Dilengkapi render persamaan WYSIWYG, pengujian kode langsung untuk tes teknik/SMK, serta rubrik penilaian bertingkat yang memangkas waktu koreksi hingga 75%.",
    bullets: [
      "Penilaian otomatis untuk pilihan ganda, toleransi numerik, dan isian singkat",
      "Pemetaan tingkat kesulitan rinci sesuai kurikulum SMP, SMU/SMK, dan Perguruan Tinggi",
      "Pengacakan bank soal instan dengan variabel berparameter",
    ],
    primaryCta: { label: "Buka Dashboard Instruktur", href: "/login" },
    secondaryCta: { label: "Coba Exam Builder", href: "/login" },
  },
  {
    key: "student",
    tabLabel: "Siswa / Mahasiswa",
    badge: "Pengalaman Ujian Siswa / Mahasiswa",
    icon: "school",
    title:
      "Pengerjaan ujian bebas distraksi dengan simpan otomatis waktu-nyata dan dukungan aksesibilitas",
    description:
      "Dirancang dengan ergonomi human-centered: mode kontras tinggi, navigasi pembaca layar WCAG 2.1 AA, dan pemulihan status berkelanjutan saat koneksi terputus.",
    bullets: [
      "Persistensi jawaban sub-detik langsung ke simpul jaringan edge",
      "Telemetri pengawasan latar belakang yang tenang tanpa gangguan pop-up",
      "Kalkulator ilmiah bawaan, lembar rumus, dan catatan corat-coret digital",
    ],
    primaryCta: { label: "Masuk Dasbor Peserta", href: "/login" },
  },
  {
    key: "proctor",
    tabLabel: "Pengawas",
    badge: "Konsol Perintah Pengawas",
    icon: "videocam",
    title:
      "Pemantauan multi-aliran peserta dengan umpan deteksi anomali seketika",
    description:
      "Konsol perintah komprehensif yang menampilkan hingga 64 aliran video bersamaan dengan penandaan prioritas AI untuk wajah sekunder, pandangan ke luar layar, atau audio mencurigakan.",
    bullets: [
      "Bisikan audio dua arah hening dan obrolan pengawas langsung",
      "Jeda sesi jarak jauh, pengiriman peringatan, dan penghentian seketika",
      "Garis waktu video terindeks dengan stempel waktu insiden tersinkronisasi",
    ],
    primaryCta: { label: "Jelajahi Konsol Pengawas", href: "/login" },
  },
  {
    key: "admin",
    tabLabel: "Administrator",
    badge: "Administrator Sekolah / Kampus & Keamanan",
    icon: "admin_panel_settings",
    title:
      "SSO Institusi, audit kepatuhan, dan kendali keandalan terpusat",
    description:
      "Dirancang untuk Kepala Sekolah, Dekan, dan Tim IT. Integrasi mulus Dapodik, PDDikti, Moodle, Canvas, dan buku besar audit kriptografis anti-rusak.",
    bullets: [
      "Single Sign-On Institusi (Google Workspace, Microsoft 365, Dapodik/Shibboleth)",
      "Pembersihan data biometrik otomatis sesuai jadwal retensi privasi",
      "Kontrol akses berbasis peran (RBAC) dengan pemisahan unit/fakultas",
    ],
    primaryCta: { label: "Buka Dashboard Administrator", href: "/login" },
  },
];

export function PortalRoleShowcase() {
  const [activeRole, setActiveRole] = useState<RoleKey>("instructor");
  const current = ROLES.find((r) => r.key === activeRole) ?? ROLES[0];

  return (
    <section id="demo" className="py-16 bg-surface-container-low scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-margin-sm lg:px-margin">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="font-label-md text-label-md text-secondary font-bold uppercase tracking-wider block mb-2">
            Pengalaman Yang Disesuaikan
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-primary font-bold mb-3">
            Satu Mesin. Empat Pusat Kendali Khusus.
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Pilih peran untuk meninjau bagaimana ARCI EXAM menyelaraskan alur
            kerja pengujian dengan wewenang masing-masing pengguna.
          </p>
        </div>

        {/* Role Tabs */}
        <div
          role="tablist"
          aria-label="Pilih Peran Portal"
          className="max-w-2xl mx-auto mb-8 bg-surface-container-lowest p-1.5 rounded-xl shadow-sm border border-outline-variant/30 grid grid-cols-2 sm:grid-cols-4 gap-1"
        >
          {ROLES.map((role) => {
            const isActive = role.key === activeRole;
            return (
              <button
                key={role.key}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveRole(role.key)}
                className={`py-2.5 px-3 rounded-lg font-label-lg text-label-lg transition-all ${
                  isActive
                    ? "bg-primary text-on-primary shadow-sm"
                    : "text-on-surface-variant hover:text-primary hover:bg-surface-container-low"
                }`}
              >
                {role.tabLabel}
              </button>
            );
          })}
        </div>

        {/* Role Content Card */}
        <div className="max-w-5xl mx-auto bg-surface-container-lowest rounded-xl p-6 sm:p-8 shadow-sm border border-outline-variant/20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-secondary-fixed text-on-secondary-fixed text-xs font-bold mb-4">
            <span className="material-symbols-outlined text-[16px]">
              {current.icon}
            </span>
            <span>{current.badge}</span>
          </div>

          <h3 className="font-headline-md text-headline-md text-primary font-bold mb-3">
            {current.title}
          </h3>

          <p className="font-body-md text-body-md text-on-surface-variant mb-5 leading-relaxed">
            {current.description}
          </p>

          <ul className="space-y-2.5 mb-6">
            {current.bullets.map((bullet, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 font-body-md text-body-md text-primary"
              >
                <span className="material-symbols-outlined text-[20px] text-secondary shrink-0 mt-0.5">
                  check_circle
                </span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3">
            <Link
              href={current.primaryCta.href}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg transition-colors"
            >
              <span>{current.primaryCta.label}</span>
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </Link>
            {current.secondaryCta && (
              <Link
                href={current.secondaryCta.href}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-label-lg text-label-lg transition-colors"
              >
                <span>{current.secondaryCta.label}</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
