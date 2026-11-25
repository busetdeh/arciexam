"use client";

import Link from "next/link";
import { useState } from "react";
import { DashboardShell, type NavItem } from "@/components/DashboardShell";

const ADMIN_NAV: NavItem[] = [
  { label: "Dasbor Admin", href: "/admin", icon: "dashboard" },
  { label: "Pengaturan & Integrasi", href: "/admin/settings", icon: "settings" },
  { label: "Konsol Pengawas", href: "/proctor", icon: "videocam" },
];

const USERS = [
  {
    name: "M. Rayhan Al-Farisi",
    email: "rayhan@siswa.sch.id",
    role: "Siswa / Mahasiswa",
    unit: "SMAN 1 / S1",
    status: "Aktif",
  },
  {
    name: "Dr. Ratna Dewi, M.Kom.",
    email: "ratna.dewi@institusi.ac.id",
    role: "Guru / Dosen",
    unit: "Informatika",
    status: "Aktif",
  },
  {
    name: "Hendra Wijaya, S.Kom.",
    email: "hendra.proctor@arci.id",
    role: "Pengawas",
    unit: "Tim Integritas",
    status: "Aktif",
  },
];

export default function AdminDashboardPage() {
  const [query, setQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("Semua");

  const filteredUsers = USERS.filter((u) => {
    const matchQ =
      u.name.toLowerCase().includes(query.toLowerCase()) ||
      u.email.toLowerCase().includes(query.toLowerCase());
    const matchR = roleFilter === "Semua" || u.role === roleFilter;
    return matchQ && matchR;
  });

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
              Pusat Kendali Administrator
            </h1>
            <p className="font-body-md text-on-surface-variant">
              Pantau kesehatan sistem, kelola pengguna lintas jenjang, dan tinjau
              log audit keamanan.
            </p>
          </div>
          <Link
            href="/admin/settings"
            className="px-4 py-2.5 rounded-lg bg-primary text-on-primary font-label-lg text-xs font-bold"
          >
            Pengaturan &amp; Integrasi →
          </Link>
        </div>

        {/* System Health */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/20">
            <span className="text-xs text-on-surface-variant">
              Service Uptime
            </span>
            <div className="font-headline-lg text-on-tertiary-container font-bold mt-1">
              99.99%
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/20">
            <span className="text-xs text-on-surface-variant">
              Penggunaan Database
            </span>
            <div className="font-headline-lg text-primary font-bold mt-1">
              42.8 GB
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/20">
            <span className="text-xs text-on-surface-variant">
              Pengguna Aktif
            </span>
            <div className="font-headline-lg text-secondary font-bold mt-1">
              3,480
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/20">
            <span className="text-xs text-on-surface-variant">
              Ujian Bulan Ini
            </span>
            <div className="font-headline-lg text-primary font-bold mt-1">
              128
            </div>
          </div>
        </div>

        {/* User Management */}
        <section className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/20 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="font-headline-sm text-primary font-bold">
              Manajemen Pengguna Institusi
            </h2>
            <div className="flex flex-wrap gap-2">
              <input
                type="text"
                placeholder="Cari nama atau email..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="px-3 py-1.5 rounded-lg bg-surface-container-low text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <select
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
                className="px-3 py-1.5 rounded-lg bg-surface-container-low text-sm focus:outline-none"
              >
                <option value="Semua">Semua Peran</option>
                <option value="Siswa / Mahasiswa">Siswa / Mahasiswa</option>
                <option value="Guru / Dosen">Guru / Dosen</option>
                <option value="Pengawas">Pengawas</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-outline-variant/40 text-xs uppercase text-on-surface-variant">
                  <th className="py-3 pr-4">Nama</th>
                  <th className="py-3 pr-4">Email</th>
                  <th className="py-3 pr-4">Peran</th>
                  <th className="py-3 pr-4">Unit / Jenjang</th>
                  <th className="py-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/20">
                {filteredUsers.map((u) => (
                  <tr key={u.email}>
                    <td className="py-3 pr-4 font-semibold text-primary">
                      {u.name}
                    </td>
                    <td className="py-3 pr-4 text-on-surface-variant">
                      {u.email}
                    </td>
                    <td className="py-3 pr-4">{u.role}</td>
                    <td className="py-3 pr-4">{u.unit}</td>
                    <td className="py-3">
                      <span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed text-xs font-bold">
                        {u.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </DashboardShell>
  );
}
