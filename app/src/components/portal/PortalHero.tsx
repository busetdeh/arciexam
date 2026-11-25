"use client";

import Link from "next/link";
import { useState } from "react";

const SAMPLE_OPTIONS = [
  { id: "A", label: "A. DNA Polimerase III" },
  { id: "B", label: "B. Helikase DNAb" },
  { id: "C", label: "C. Topoisomerase II (Girase)" },
];

const GAZE_BARS = [
  { h: 20, opacity: 0.3 },
  { h: 22, opacity: 0.4 },
  { h: 24, opacity: 0.6 },
  { h: 20, opacity: 0.5 },
  { h: 26, opacity: 0.8 },
  { h: 28, opacity: 1 },
  { h: 24, opacity: 0.7 },
  { h: 26, opacity: 0.9 },
  { h: 28, opacity: 1 },
  { h: 26, opacity: 0.8 },
  { h: 24, opacity: 0.7 },
  { h: 22, opacity: 0.6 },
  { h: 26, opacity: 1 },
  { h: 28, opacity: 1 },
  { h: 24, opacity: 0.8 },
  { h: 26, opacity: 1 },
  { h: 28, opacity: 1 },
];

export function PortalHero() {
  const [selectedOption, setSelectedOption] = useState("B");

  return (
    <section className="pt-24 sm:pt-28 pb-12 sm:pb-16">
      <div className="max-w-7xl mx-auto px-margin-sm lg:px-margin">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-low border border-outline-variant/40 mb-5">
            <span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse" />
            <span className="font-label-md text-label-md text-primary font-semibold">
              Platform Ujian Resmi SMP, SMU/SMK &amp; Perguruan Tinggi
            </span>
          </div>

          <h1 className="font-display-lg text-display-lg-mobile sm:text-display-lg text-primary font-bold tracking-tight mb-4">
            Platform Asesmen Digital &amp; Pengawasan Ujian Berbasis AI
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
            Bangun bank soal, selenggarakan ujian berisiko tinggi secara aman,
            dan analisis metrik kognitif waktu-nyata dalam satu portal terpadu
            berstandar WCAG 2.1 AA.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
            <Link
              href="/login"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg shadow-md transition-all"
            >
              <span>Mulai Sekarang (Daftar / Masuk)</span>
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </Link>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-surface-container-lowest hover:bg-surface-container-low text-primary border border-outline-variant/40 font-label-lg text-label-lg shadow-sm transition-all"
            >
              <span className="material-symbols-outlined text-[20px] text-secondary">
                play_circle
              </span>
              <span>Jelajahi Demo Peran</span>
            </a>
          </div>
        </div>

        {/* TELEMETRY HERO CARD MOCKUP */}
        <div className="relative max-w-5xl mx-auto">
          <div
            aria-hidden="true"
            className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-secondary/20 via-secondary-container/25 to-primary/15 blur-xl opacity-75"
          />
          <div className="relative bg-surface-container-lowest rounded-xl p-4 sm:p-5 shadow-lg border border-outline-variant/20">
            {/* Mock Header Strip */}
            <div className="bg-surface-container-low px-4 py-3 rounded-lg mb-4 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-error inline-block" />
                  <span className="w-3 h-3 rounded-full bg-secondary-fixed inline-block" />
                  <span className="w-3 h-3 rounded-full bg-tertiary-fixed inline-block" />
                </div>
                <span className="font-label-lg text-label-lg text-primary font-bold">
                  BIO-402: Ujian Kompetensi Biologi &amp; Genetika Terpadu
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <div className="px-2.5 py-1 bg-surface-container rounded-md text-xs text-on-surface-variant">
                  Latensi sinkronisasi:{" "}
                  <strong className="text-primary">42 ms</strong>
                </div>
                <div className="px-2.5 py-1 bg-surface-container-high rounded-md text-xs text-primary font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-on-tertiary-container inline-block" />
                  Pengawasan Aktif (0 pelanggaran)
                </div>
              </div>
            </div>

            {/* Hero Interior 3-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Column 1: Video & Gaze */}
              <div className="bg-surface-container-low rounded-lg p-3 flex flex-col gap-3">
                <div className="relative aspect-video rounded-md overflow-hidden bg-primary-container flex items-center justify-center text-on-primary">
                  <div className="text-center opacity-85">
                    <span className="material-symbols-outlined text-[40px]">
                      person
                    </span>
                    <div className="text-xs mt-1 font-medium">
                      Kamera Peserta Terhubung
                    </div>
                  </div>
                  <div className="absolute top-2 left-2 px-2 py-1 bg-primary/80 rounded text-on-primary text-[11px] flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px] text-tertiary-fixed">
                      verified_user
                    </span>
                    <span>Wajah Terverifikasi: 99.4%</span>
                  </div>
                  <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-white/90 rounded text-[11px] text-primary font-semibold">
                    Audio: 14dB (Normal)
                  </div>
                </div>

                <div className="bg-surface-container-lowest p-3 rounded-md border border-outline-variant/30">
                  <div className="flex justify-between items-center text-xs mb-2">
                    <span className="text-on-surface-variant">
                      Fokus Tatapan Kognitif
                    </span>
                    <span className="text-primary font-bold">
                      100% Terpusat
                    </span>
                  </div>
                  <div className="flex items-end gap-1 h-7">
                    {GAZE_BARS.map((bar, idx) => (
                      <div
                        key={idx}
                        className="flex-1 rounded-sm bg-secondary"
                        style={{
                          height: `${(bar.h / 28) * 100}%`,
                          opacity: bar.opacity,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Column 2: Interactive Question Sandbox Preview */}
              <div className="bg-surface-container-lowest rounded-lg p-4 border border-outline-variant/30 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="px-2 py-1 bg-surface-container rounded text-xs font-bold text-primary">
                      Soal 24 dari 60
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">
                        timer
                      </span>
                      01:42:18
                    </span>
                  </div>
                  <h2 className="font-headline-sm text-base text-primary font-semibold leading-snug mb-3">
                    Kompleks enzimatik mana yang mengkatalisis pelepasan ikatan
                    ganda DNA selama fase inisiasi replikasi?
                  </h2>
                  <div className="flex flex-col gap-2">
                    {SAMPLE_OPTIONS.map((opt) => {
                      const active = selectedOption === opt.id;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setSelectedOption(opt.id)}
                          className={`w-full text-left px-3 py-2 rounded-md text-[13px] flex items-center justify-between transition-all ${
                            active
                              ? "bg-secondary/10 border border-secondary font-semibold text-primary"
                              : "bg-surface-container-low border border-transparent text-on-surface hover:bg-surface-container"
                          }`}
                        >
                          <span>
                            {opt.label}
                            {active ? " (Terpilih)" : ""}
                          </span>
                          {active ? (
                            <span className="material-symbols-outlined text-[16px] text-secondary">
                              check_circle
                            </span>
                          ) : (
                            <span className="w-3.5 h-3.5 rounded-full bg-surface-container-highest" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-outline-variant/30 flex items-center justify-between text-xs">
                  <span className="text-on-surface-variant flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px] text-on-tertiary-container">
                      check
                    </span>
                    Tersimpan otomatis 14:28:02
                  </span>
                  <div className="flex gap-1.5">
                    <span className="px-2 py-1 bg-surface-container rounded text-on-surface">
                      Tandai
                    </span>
                    <span className="px-2.5 py-1 bg-primary text-on-primary rounded font-semibold">
                      Berikutnya →
                    </span>
                  </div>
                </div>
              </div>

              {/* Column 3: Real-Time Status Telemetry */}
              <div className="flex flex-col gap-3">
                <div className="bg-surface-container-low rounded-lg p-3.5">
                  <span className="font-label-md text-label-md text-on-surface-variant uppercase">
                    Monitor SLA Global
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-headline-lg text-headline-lg text-primary font-bold">
                      99.98%
                    </span>
                    <span className="font-label-md text-label-md text-on-tertiary-container font-semibold">
                      Waktu Aktif
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Kluster failover aktif Jakarta, Singapura, Frankfurt.
                  </p>
                </div>

                <div className="bg-surface-container-low rounded-lg p-3.5">
                  <span className="font-label-md text-label-md text-on-surface-variant uppercase">
                    Status Matriks Soal
                  </span>
                  <div className="grid grid-cols-6 gap-1 my-2">
                    <span className="py-1 text-center rounded-sm bg-primary text-on-primary text-[10px] font-bold">
                      01
                    </span>
                    <span className="py-1 text-center rounded-sm bg-primary text-on-primary text-[10px] font-bold">
                      02
                    </span>
                    <span className="py-1 text-center rounded-sm bg-primary text-on-primary text-[10px] font-bold">
                      03
                    </span>
                    <span className="py-1 text-center rounded-sm bg-secondary-container text-on-secondary-fixed text-[10px] font-bold">
                      24
                    </span>
                    <span className="py-1 text-center rounded-sm bg-surface-container-highest text-[10px]">
                      25
                    </span>
                    <span className="py-1 text-center rounded-sm bg-surface-container-highest text-[10px]">
                      26
                    </span>
                  </div>
                  <div className="flex justify-between text-[11px] text-on-surface-variant">
                    <span>23 Terjawab</span>
                    <span>1 Dikerjakan</span>
                    <span>36 Tersisa</span>
                  </div>
                </div>

                <div className="bg-primary text-on-primary p-3 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[20px] text-secondary-container">
                      lock
                    </span>
                    <div>
                      <div className="font-label-md text-label-md font-bold">
                        Peramban Terkunci
                      </div>
                      <div className="text-[11px] opacity-80">
                        Anti-Clipboard &amp; VM Aktif
                      </div>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-[18px] text-tertiary-fixed">
                    check
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Social Proof */}
        <div className="text-center mt-12">
          <p className="font-label-lg text-label-lg text-on-surface-variant uppercase tracking-wider mb-4">
            Dipercaya oleh 250+ SMP, SMU/SMK, Perguruan Tinggi, dan Lembaga
            Sertifikasi
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 opacity-85">
            <div className="flex items-center gap-2 font-headline-sm text-primary">
              <span className="material-symbols-outlined text-secondary">
                school
              </span>
              <span>Jaringan Sekolah Unggul</span>
            </div>
            <div className="flex items-center gap-2 font-headline-sm text-primary">
              <span className="material-symbols-outlined text-secondary">
                verified_user
              </span>
              <span>Global Tech Certs</span>
            </div>
            <div className="flex items-center gap-2 font-headline-sm text-primary">
              <span className="material-symbols-outlined text-secondary">
                account_balance
              </span>
              <span>Konsorsium PTN/PTS</span>
            </div>
            <div className="flex items-center gap-2 font-headline-sm text-primary">
              <span className="material-symbols-outlined text-secondary">
                workspace_premium
              </span>
              <span>LSP Nasional</span>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Bar */}
      <div className="mt-12 bg-primary-container text-on-primary py-8">
        <div className="max-w-7xl mx-auto px-margin-sm lg:px-margin grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center">
            <span className="font-display-lg text-display-lg-mobile sm:text-display-lg text-secondary-container font-bold">
              4.2Jt+
            </span>
            <span className="font-label-lg text-label-lg font-semibold">
              Ujian Selesai
            </span>
            <span className="font-body-sm text-body-sm text-on-primary-container">
              Sesi berstandar integritas tinggi
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-display-lg text-display-lg-mobile sm:text-display-lg text-secondary-container font-bold">
              99.99%
            </span>
            <span className="font-label-lg text-label-lg font-semibold">
              Keandalan Sistem
            </span>
            <span className="font-body-sm text-body-sm text-on-primary-container">
              Nol waktu henti asesmen
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-display-lg text-display-lg-mobile sm:text-display-lg text-secondary-container font-bold">
              250+
            </span>
            <span className="font-label-lg text-label-lg font-semibold">
              Sekolah &amp; Kampus
            </span>
            <span className="font-body-sm text-body-sm text-on-primary-container">
              SMP, SMU/SMK &amp; Perguruan Tinggi
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-display-lg text-display-lg-mobile sm:text-display-lg text-secondary-container font-bold">
              0.01%
            </span>
            <span className="font-label-lg text-label-lg font-semibold">
              Tingkat Sengketa
            </span>
            <span className="font-body-sm text-body-sm text-on-primary-container">
              Pencatatan audit deterministik
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
