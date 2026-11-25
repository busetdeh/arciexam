"use client";

import { useState } from "react";
import { DashboardShell, type NavItem } from "@/components/DashboardShell";

const ADMIN_NAV: NavItem[] = [
  { label: "Dasbor Admin", href: "/admin", icon: "dashboard" },
  { label: "Pengaturan & Integrasi", href: "/admin/settings", icon: "settings" },
  { label: "Konsol Pengawas", href: "/proctor", icon: "videocam" },
];

export default function AdminSettingsPage() {
  const [saved, setSaved] = useState(false);
  const [apiKey, setApiKey] = useState("arci_live_98a7f62c11d4e890");

  return (
    <DashboardShell
      roleLabel="Administrator Institusi"
      userName="Budi Santoso, M.T."
      userMeta="Superadmin • SMP/SMU/SMK & PT"
      navItems={ADMIN_NAV}
    >
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-primary font-bold">
              Pengaturan Sistem, AI Proctoring &amp; Integrasi
            </h1>
            <p className="font-body-md text-on-surface-variant">
              Konfigurasi AI proctoring, SMTP email, branding institusi, API
              Keys, serta webhook LMS / Slack sesuai PRD Bagian 3.7.
            </p>
          </div>
          {saved && (
            <span className="px-3 py-1.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed text-xs font-bold">
              Konfigurasi Tersimpan ✓
            </span>
          )}
        </div>

        <form
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          onSubmit={(e) => {
            e.preventDefault();
            setSaved(true);
            setTimeout(() => setSaved(false), 2500);
          }}
        >
          {/* Proctoring AI */}
          <section className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/20 space-y-4">
            <h2 className="font-headline-sm text-primary font-bold">
              Proctoring AI &amp; Ambang Toleransi
            </h2>
            <div>
              <label className="block font-label-md text-on-surface-variant mb-1">
                Sensitivitas Gaze Tracking
              </label>
              <select className="w-full px-3.5 py-2 rounded-lg bg-surface-container-low">
                <option>Ketat (3 detik di luar layar)</option>
                <option>Standar (5 detik di luar layar)</option>
                <option>Toleran (8 detik di luar layar)</option>
              </select>
            </div>
            <label className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low cursor-pointer">
              <span className="text-sm font-semibold">
                Deteksi Suara Sekunder (Silero VAD)
              </span>
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4 accent-secondary"
              />
            </label>
          </section>

          {/* Email SMTP & Notifications */}
          <section className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/20 space-y-4">
            <h2 className="font-headline-sm text-primary font-bold">
              Email SMTP &amp; Notifikasi
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                defaultValue="smtp.institusi.ac.id"
                placeholder="SMTP Host"
                className="px-3.5 py-2 rounded-lg bg-surface-container-low"
              />
              <input
                type="number"
                defaultValue={587}
                placeholder="Port"
                className="px-3.5 py-2 rounded-lg bg-surface-container-low"
              />
            </div>
            <input
              type="url"
              placeholder="Slack / Webhook Notifikasi URL"
              defaultValue="https://hooks.slack.com/services/T000/B000/XXXX"
              className="w-full px-3.5 py-2 rounded-lg bg-surface-container-low"
            />
          </section>

          {/* Branding */}
          <section className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/20 space-y-4">
            <h2 className="font-headline-sm text-primary font-bold">
              Branding Sekolah / Kampus
            </h2>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-on-surface-variant mb-1">
                  Warna Utama (Primary)
                </label>
                <input
                  type="color"
                  defaultValue="#000922"
                  className="w-full h-10 rounded-lg cursor-pointer"
                />
              </div>
              <div>
                <label className="block text-xs text-on-surface-variant mb-1">
                  Warna Aksen (Secondary)
                </label>
                <input
                  type="color"
                  defaultValue="#006591"
                  className="w-full h-10 rounded-lg cursor-pointer"
                />
              </div>
            </div>
          </section>

          {/* API Keys & LMS */}
          <section className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/20 space-y-4">
            <h2 className="font-headline-sm text-primary font-bold">
              API Keys &amp; LMS Integration (LTI 1.3 / Webhook)
            </h2>
            <div className="flex gap-2">
              <input
                readOnly
                type="text"
                value={apiKey}
                className="flex-1 px-3.5 py-2 rounded-lg bg-surface-container-low font-mono text-xs"
              />
              <button
                type="button"
                onClick={() =>
                  setApiKey(
                    `arci_live_${Math.random().toString(36).slice(2, 14)}`
                  )
                }
                className="px-3 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-xs font-bold"
              >
                Regenerate
              </button>
            </div>
            <input
              type="url"
              defaultValue="https://lms.sekolah.sch.id/api/arci-webhook"
              placeholder="LMS Exam Results Webhook URL"
              className="w-full px-3.5 py-2 rounded-lg bg-surface-container-low text-sm"
            />
          </section>

          <div className="lg:col-span-2 flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg font-bold shadow-sm"
            >
              Simpan Semua Pengaturan
            </button>
          </div>
        </form>
      </div>
    </DashboardShell>
  );
}
