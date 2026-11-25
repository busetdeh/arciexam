"use client";

import { useState } from "react";
import { DashboardShell, type NavItem } from "@/components/DashboardShell";

const PROCTOR_NAV: NavItem[] = [
  { label: "Konsol Pengawas", href: "/proctor", icon: "videocam" },
  { label: "Analitik Ujian", href: "/instructor/analytics", icon: "analytics" },
  { label: "Admin Institusi", href: "/admin", icon: "admin_panel_settings" },
];

const STREAMS = [
  {
    id: "P-01",
    name: "M. Rayhan Al-Farisi",
    meta: "NISN 0084521099 • SMA",
    integrity: 99,
    alert: null,
  },
  {
    id: "P-02",
    name: "Siti Aisyah Putri",
    meta: "NIM 2209106011 • S1",
    integrity: 74,
    alert: "Tatapan ke luar layar (>4 dtk)",
  },
  {
    id: "P-03",
    name: "Bagus Pratama",
    meta: "NISN 0091124501 • SMP",
    integrity: 98,
    alert: null,
  },
  {
    id: "P-04",
    name: "Dewi Lestari",
    meta: "NISN 0078821104 • SMK",
    integrity: 62,
    alert: "Terdeteksi suara sekunder (VAD)",
  },
];

export default function ProctorConsolePage() {
  const [actionLog, setActionLog] = useState<string[]>([
    "09:12:04 — AI mendeteksi suara sekunder pada Dewi Lestari (P-04).",
    "09:10:41 — Peringatan fokus dikirim ke Siti Aisyah Putri (P-02).",
  ]);

  const triggerAction = (name: string, action: string) => {
    const time = new Date().toLocaleTimeString("id-ID", { hour12: false });
    setActionLog((prev) => [`${time} — ${action} untuk ${name}.`, ...prev]);
  };

  return (
    <DashboardShell
      roleLabel="Konsol Pengawas (Proctor)"
      userName="Hendra Wijaya, S.Kom."
      userMeta="Lisensi Pengawas: PRC-8842"
      navItems={PROCTOR_NAV}
    >
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-primary font-bold">
              Pemantauan Ujian Langsung (Live Proctoring)
            </h1>
            <p className="font-body-md text-on-surface-variant">
              Grid kamera peserta real-time dengan penandaan anomali AI dan
              ekspor log pengawasan.
            </p>
          </div>
          <button
            type="button"
            onClick={() =>
              triggerAction("Semua Sesi", "Ekspor log pengawasan (CSV) selesai")
            }
            className="px-4 py-2.5 rounded-lg bg-primary text-on-primary text-xs font-bold"
          >
            Ekspor Log Pengawasan
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Webcam Grid */}
          <section className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {STREAMS.map((s) => (
              <div
                key={s.id}
                className={`bg-surface-container-lowest rounded-xl p-4 shadow-sm border ${
                  s.alert ? "border-error" : "border-outline-variant/25"
                } space-y-3`}
              >
                <div className="aspect-video rounded-lg bg-primary-container text-on-primary flex flex-col items-center justify-center relative">
                  <span className="material-symbols-outlined text-[36px] opacity-80">
                    person
                  </span>
                  <span className="text-xs opacity-75 mt-1">
                    Live WebRTC Feed
                  </span>
                  <span
                    className={`absolute top-2 right-2 px-2 py-0.5 rounded text-[11px] font-bold ${
                      s.alert
                        ? "bg-error text-on-error"
                        : "bg-tertiary-fixed text-on-tertiary-fixed"
                    }`}
                  >
                    Integritas {s.integrity}%
                  </span>
                </div>

                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="font-label-lg text-primary font-bold">
                      {s.name}
                    </div>
                    <div className="text-xs text-on-surface-variant">
                      {s.meta}
                    </div>
                  </div>
                </div>

                {s.alert && (
                  <div className="p-2 rounded-lg bg-error-container text-on-error-container text-xs font-semibold">
                    Anomali: {s.alert}
                  </div>
                )}

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => triggerAction(s.name, "Peringatan dikirim")}
                    className="flex-1 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary text-xs font-semibold"
                  >
                    Beri Peringatan
                  </button>
                  <button
                    type="button"
                    onClick={() => triggerAction(s.name, "Sesi dijeda")}
                    className="flex-1 py-1.5 rounded-lg bg-error-container text-on-error-container text-xs font-semibold"
                  >
                    Jeda Sesi
                  </button>
                </div>
              </div>
            ))}
          </section>

          {/* Anomaly Log Panel */}
          <aside className="lg:col-span-4 bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/20 space-y-4">
            <h2 className="font-headline-sm text-primary font-bold">
              Log Insiden &amp; Intervensi AI
            </h2>
            <div className="space-y-2.5 max-h-96 overflow-y-auto">
              {actionLog.map((entry, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-surface-container-low text-xs text-on-surface"
                >
                  {entry}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </DashboardShell>
  );
}
