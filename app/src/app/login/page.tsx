"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type AuthRole = "mahasiswa" | "dosen" | "proctor" | "admin";

const ROLE_CONFIG: Record<
  AuthRole,
  {
    label: string;
    icon: string;
    hint: string;
    identifierLabel: string;
    placeholder: string;
    route: string;
  }
> = {
  mahasiswa: {
    label: "Siswa / Mahasiswa",
    icon: "school",
    hint: "Gunakan NISN, NIM, atau Email Sekolah/Kampus (.sch.id / .ac.id)",
    identifierLabel: "NISN / NIM / Nomor Peserta Ujian",
    placeholder: "Contoh: 0084521099 (NISN) atau 2108561044 (NIM)",
    route: "/student",
  },
  dosen: {
    label: "Guru / Dosen",
    icon: "psychology_alt",
    hint: "Gunakan NUPTK / NIDN / NIP atau Akun SSO Guru & Dosen",
    identifierLabel: "NUPTK / NIDN / NIP Instruktur",
    placeholder: "Masukkan NUPTK / NIDN / NIP",
    route: "/instructor",
  },
  proctor: {
    label: "Pengawas (Proctor)",
    icon: "videocam",
    hint: "Otoritas Khusus: Gunakan Kode Kredensial Pengawas Ujian",
    identifierLabel: "ID Lisensi Pengawas (Proctor ID)",
    placeholder: "Masukkan Proctor ID",
    route: "/proctor",
  },
  admin: {
    label: "Admin Institusi",
    icon: "admin_panel_settings",
    hint: "Wajib menggunakan Hardware Key MFA atau Token Admin Sekolah/Kampus",
    identifierLabel: "Email Admin Sekolah / Kampus",
    placeholder: "admin@sekolah.sch.id",
    route: "/admin",
  },
};

export default function LoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [role, setRole] = useState<AuthRole>("mahasiswa");
  const [showPass, setShowPass] = useState(false);
  const [signupPassword, setSignupPassword] = useState("");
  const [mfaHighlight, setMfaHighlight] = useState(false);
  const [countdown, setCountdown] = useState(48);
  const [signupNotice, setSignupNotice] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 1 ? prev - 1 : 60));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const currentRole = ROLE_CONFIG[role];

  let pwdScore = 0;
  if (signupPassword.length >= 8) pwdScore++;
  if (/[A-Z]/.test(signupPassword)) pwdScore++;
  if (/[0-9]/.test(signupPassword)) pwdScore++;
  if (/[^A-Za-z0-9]/.test(signupPassword)) pwdScore++;

  const strengthMeta =
    pwdScore <= 1
      ? { text: "Kekuatan: Lemah", color: "text-error", bar: "bg-error" }
      : pwdScore === 2
      ? { text: "Kekuatan: Cukup", color: "text-secondary", bar: "bg-secondary" }
      : pwdScore === 3
      ? {
          text: "Kekuatan: Bagus",
          color: "text-secondary-container",
          bar: "bg-secondary-container",
        }
      : {
          text: "Kekuatan: Sangat Kuat",
          color: "text-on-tertiary-container",
          bar: "bg-on-tertiary-container",
        };

  return (
    <div className="min-h-screen bg-surface text-on-surface flex flex-col">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(15,32,66,0.04)]">
        <div className="h-16 max-w-7xl mx-auto px-margin-sm lg:px-margin flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-primary-container flex items-center justify-center text-on-primary font-headline-sm font-bold">
                A
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-primary font-bold leading-tight">
                  ARCI EXAM
                </span>
                <span className="font-label-md text-label-md text-on-surface-variant">
                  Sistem Penilaian Terpadu
                </span>
              </div>
            </Link>
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-surface-container-low rounded-full">
              <span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse" />
              <span className="font-label-md text-label-md text-on-surface font-medium">
                TLS 1.3 Terenkripsi
              </span>
            </div>
          </div>

          <nav className="flex items-center gap-2">
            <Link
              href="/"
              className="px-3 py-2 rounded-lg font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors"
            >
              Beranda
            </Link>
            <Link
              href="/#keamanan"
              className="hidden sm:inline-block px-3 py-2 rounded-lg font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-colors"
            >
              Status Sistem
            </Link>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-margin-sm lg:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Authority Showcase */}
            <section className="lg:col-span-5 flex flex-col gap-5">
              <div className="relative overflow-hidden rounded-xl bg-primary-container text-on-primary p-7 lg:p-9 shadow-xl flex flex-col justify-between min-h-[520px]">
                <div
                  aria-hidden="true"
                  className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-secondary/20 blur-3xl pointer-events-none"
                />
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-label-md uppercase tracking-wider text-secondary-container">
                      Sistem Pengawasan Terpusat
                    </span>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 text-tertiary-fixed text-xs font-semibold">
                      <span className="w-2 h-2 rounded-full bg-tertiary-fixed animate-ping" />
                      <span>99.99% SLA Uptime</span>
                    </div>
                  </div>
                  <p className="font-label-lg text-primary-fixed uppercase tracking-wider font-semibold">
                    ARCI EXAM SUITE v4.8
                  </p>
                  <h2 className="font-headline-lg text-headline-lg font-bold text-on-primary leading-tight">
                    Standar Integritas &amp; Audit Akademik Digital
                  </h2>
                  <p className="font-body-md text-primary-fixed-dim">
                    Melindungi evaluasi SMP, SMU/SMK, dan Perguruan Tinggi melalui
                    multi-sensor biometrik, pemantauan audio-visual real-time,
                    dan enkripsi ledger asesmen.
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-4 rounded-lg bg-white/5">
                      <span className="font-display-lg text-secondary-fixed font-bold block leading-none">
                        250+
                      </span>
                      <span className="font-label-md text-primary-fixed-dim block mt-1.5">
                        SMP, SMU/SMK &amp; Perguruan Tinggi
                      </span>
                      <span className="text-[11px] text-surface-variant/70 block mt-1">
                        Tersinkronisasi Dapodik &amp; PDDikti
                      </span>
                    </div>
                    <div className="p-4 rounded-lg bg-white/5">
                      <span className="font-display-lg text-tertiary-fixed font-bold block leading-none">
                        4.2Jt+
                      </span>
                      <span className="font-label-md text-primary-fixed-dim block mt-1.5">
                        Sesi Ujian Tuntas
                      </span>
                      <span className="text-[11px] text-surface-variant/70 block mt-1">
                        Zero Breach Record
                      </span>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 mt-6 p-4 rounded-lg bg-white/10 backdrop-blur-md">
                  <p className="font-body-sm italic text-surface-bright">
                    “ARCI EXAM memotong tingkat kecurangan sistematis hingga
                    99,4% pada Ujian Terpadu tanpa menambah beban server.”
                  </p>
                  <div className="mt-2 text-xs font-semibold text-primary-fixed">
                    Dr. Ir. Bambang Sujarwo, M.T. — Satgas Asesmen Daring
                  </div>
                </div>
              </div>
            </section>

            {/* Right Auth Form */}
            <section className="lg:col-span-7 flex flex-col gap-5">
              <div className="rounded-xl bg-surface-container-lowest p-6 sm:p-8 shadow-md flex flex-col gap-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <span className="font-label-md uppercase tracking-wider text-secondary font-bold">
                      Gerbang Autentikasi Tunggal
                    </span>
                    <h1 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg font-bold text-primary mt-0.5">
                      Masuk ke Portal ARCI EXAM
                    </h1>
                  </div>
                  <div className="flex p-1 bg-surface-container rounded-lg self-start">
                    <button
                      type="button"
                      onClick={() => setMode("login")}
                      className={`px-4 py-1.5 rounded-lg font-label-lg text-label-lg transition-all ${
                        mode === "login"
                          ? "bg-surface-container-lowest text-primary shadow-sm"
                          : "text-on-surface-variant"
                      }`}
                    >
                      Masuk
                    </button>
                    <button
                      type="button"
                      onClick={() => setMode("signup")}
                      className={`px-4 py-1.5 rounded-lg font-label-lg text-label-lg transition-all ${
                        mode === "signup"
                          ? "bg-surface-container-lowest text-primary shadow-sm"
                          : "text-on-surface-variant"
                      }`}
                    >
                      Daftar Akun
                    </button>
                  </div>
                </div>

                {/* Role Matrix */}
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <label className="font-label-lg text-on-surface font-semibold">
                      Pilih Peran Institusi Anda
                    </label>
                    <span className="font-label-md text-secondary">
                      {currentRole.hint}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {(Object.keys(ROLE_CONFIG) as AuthRole[]).map((key) => {
                      const item = ROLE_CONFIG[key];
                      const active = role === key;
                      return (
                        <button
                          key={key}
                          type="button"
                          onClick={() => setRole(key)}
                          className={`p-3 rounded-lg text-left flex flex-col gap-1 transition-all ${
                            active
                              ? "bg-surface-container text-primary font-semibold shadow-sm ring-1 ring-secondary"
                              : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span
                              className={`material-symbols-outlined text-[20px] ${
                                active ? "text-secondary" : ""
                              }`}
                            >
                              {item.icon}
                            </span>
                            <span
                              className={`w-2 h-2 rounded-full ${
                                active ? "bg-secondary" : "bg-transparent"
                              }`}
                            />
                          </div>
                          <span className="font-label-md mt-1">{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {mode === "login" ? (
                  <form
                    className="flex flex-col gap-4"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setMfaHighlight(true);
                      setTimeout(() => setMfaHighlight(false), 1800);
                    }}
                  >
                    <div>
                      <label className="block font-label-lg text-on-surface mb-1">
                        {currentRole.identifierLabel}
                      </label>
                      <input
                        required
                        type="text"
                        placeholder={currentRole.placeholder}
                        className="w-full px-4 py-2.5 rounded-lg bg-surface-container-low text-on-surface focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <label className="font-label-lg text-on-surface">
                          Kata Sandi Akun
                        </label>
                        <button
                          type="button"
                          onClick={() =>
                            alert(
                              "Instruksi pemulihan kata sandi telah dikirim ke email institusi terdaftar."
                            )
                          }
                          className="font-label-md text-secondary hover:underline"
                        >
                          Lupa kata sandi?
                        </button>
                      </div>
                      <div className="relative">
                        <input
                          required
                          type={showPass ? "text" : "password"}
                          placeholder="Masukkan sandi akses evaluasi"
                          className="w-full px-4 pr-10 py-2.5 rounded-lg bg-surface-container-low text-on-surface focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPass((v) => !v)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant"
                        >
                          <span className="material-symbols-outlined text-[18px]">
                            {showPass ? "visibility_off" : "visibility"}
                          </span>
                        </button>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg font-bold flex items-center justify-center gap-2 shadow-md transition-all"
                    >
                      <span>Lanjutkan ke Verifikasi 2FA</span>
                      <span className="material-symbols-outlined text-[18px]">
                        arrow_forward
                      </span>
                    </button>
                  </form>
                ) : (
                  <form
                    className="flex flex-col gap-4"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSignupNotice(true);
                    }}
                  >
                    {signupNotice && (
                      <div className="p-3 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed text-sm font-medium">
                        Registrasi terkirim ke administrator institusi untuk
                        validasi akun.
                      </div>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        required
                        type="text"
                        placeholder="Nama Lengkap"
                        className="w-full px-4 py-2.5 rounded-lg bg-surface-container-low focus:outline-none focus:ring-2 focus:ring-secondary"
                      />
                      <input
                        required
                        type="email"
                        placeholder="user@sekolah.sch.id"
                        className="w-full px-4 py-2.5 rounded-lg bg-surface-container-low focus:outline-none focus:ring-2 focus:ring-secondary"
                      />
                    </div>
                    <select
                      required
                      defaultValue=""
                      className="w-full px-4 py-2.5 rounded-lg bg-surface-container-low focus:outline-none focus:ring-2 focus:ring-secondary"
                    >
                      <option value="" disabled>
                        Pilih Sekolah (SMP/SMA/SMK) atau Perguruan Tinggi
                      </option>
                      <option value="smp">
                        SMP Negeri / Swasta (Terdaftar Dapodik)
                      </option>
                      <option value="sma">
                        SMA / SMU Negeri &amp; Swasta (Terdaftar Dapodik)
                      </option>
                      <option value="smk">
                        SMK Negeri &amp; Swasta (Terdaftar Dapodik)
                      </option>
                      <option value="pt">
                        Perguruan Tinggi / Universitas (Terdaftar PDDikti)
                      </option>
                    </select>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-semibold">Buat Kata Sandi</span>
                        <span className={`font-semibold ${strengthMeta.color}`}>
                          {strengthMeta.text}
                        </span>
                      </div>
                      <input
                        required
                        type="password"
                        value={signupPassword}
                        onChange={(e) => setSignupPassword(e.target.value)}
                        placeholder="Minimal 8 karakter, huruf kapital, angka & simbol"
                        className="w-full px-4 py-2.5 rounded-lg bg-surface-container-low focus:outline-none focus:ring-2 focus:ring-secondary"
                      />
                      <div className="grid grid-cols-4 gap-1.5 mt-2">
                        {[1, 2, 3, 4].map((step) => (
                          <div
                            key={step}
                            className={`h-1.5 rounded-full ${
                              pwdScore >= step
                                ? strengthMeta.bar
                                : "bg-surface-container-high"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 rounded-lg bg-secondary hover:bg-secondary-container text-on-secondary font-label-lg font-bold transition-all"
                    >
                      Daftarkan Akun Institusi
                    </button>
                  </form>
                )}

                {/* OAuth Providers */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 border-t border-outline-variant/25">
                  <button
                    type="button"
                    onClick={() => router.push(currentRole.route)}
                    className="py-2.5 px-3 rounded-lg bg-surface-container-low hover:bg-surface-container font-label-md font-semibold text-on-surface transition-colors"
                  >
                    SSO Google Edu
                  </button>
                  <button
                    type="button"
                    onClick={() => router.push(currentRole.route)}
                    className="py-2.5 px-3 rounded-lg bg-surface-container-low hover:bg-surface-container font-label-md font-semibold text-on-surface transition-colors"
                  >
                    Microsoft 365
                  </button>
                  <button
                    type="button"
                    onClick={() => router.push(currentRole.route)}
                    className="py-2.5 px-3 rounded-lg bg-surface-container-low hover:bg-surface-container font-label-md font-semibold text-on-surface transition-colors"
                  >
                    SSO Dapodik / Dikti
                  </button>
                </div>
              </div>

              {/* 2FA / MFA Card */}
              <div
                className={`rounded-xl bg-surface-container-low p-6 shadow-sm transition-all ${
                  mfaHighlight ? "ring-2 ring-secondary" : ""
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="font-label-lg font-bold text-on-surface block">
                      Verifikasi 2FA / MFA (TOTP)
                    </span>
                    <span className="font-body-sm text-on-surface-variant">
                      Kirim ulang kode dalam{" "}
                      <strong className="text-error">{countdown}d</strong>
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-primary-container text-on-primary text-xs font-semibold">
                    RFC-6238
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => router.push(currentRole.route)}
                  className="w-full py-2.5 px-4 rounded-lg bg-secondary hover:bg-secondary-container text-on-secondary font-label-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    verified
                  </span>
                  <span>
                    Verifikasi &amp; Buka Dasbor {currentRole.label}
                  </span>
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
