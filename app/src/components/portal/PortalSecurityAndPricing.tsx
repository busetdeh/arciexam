"use client";

import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Link from "next/link";
import { useState } from "react";

export function PortalSecurityAndPricing() {
  const [annual, setAnnual] = useState(false);
  const [enterpriseModalOpen, setEnterpriseModalOpen] = useState(false);
  const [submittedSpk, setSubmittedSpk] = useState(false);

  const starterPrice = annual ? "Rp 3.600" : "Rp 4.500";
  const proPrice = annual ? "Rp 10.000" : "Rp 12.500";

  return (
    <>
      {/* SECURITY ARCHITECTURE BANNER */}
      <section id="keamanan" className="py-16 scroll-mt-20 sm:scroll-mt-24">
        <div className="max-w-7xl mx-auto px-margin-sm lg:px-margin">
          <div className="bg-primary text-on-primary rounded-xl p-6 sm:p-10 relative overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-secondary/30 blur-3xl pointer-events-none"
            />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded bg-white/10 text-tertiary-fixed text-xs font-semibold">
                    Enkripsi Ujung-ke-Ujung
                  </span>
                  <span className="px-2.5 py-1 rounded bg-white/10 text-tertiary-fixed text-xs font-semibold">
                    Kepatuhan WCAG 2.1 AA
                  </span>
                  <span className="px-2.5 py-1 rounded bg-white/10 text-tertiary-fixed text-xs font-semibold">
                    WebSocket Sub-300ms
                  </span>
                </div>

                <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-on-primary font-bold mb-4">
                  Arsitektur Keamanan Kelas Institusi yang Dapat Diaudit Penuh
                </h2>
                <p className="font-body-lg text-body-lg text-surface-dim mb-6">
                  Dari transmisi jaringan zero-trust hingga verifikasi pemindaian
                  ruang biometrik, ARCI EXAM membangun jejak audit tak
                  terbantahkan untuk setiap jawaban yang dikirimkan.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 bg-white/5 rounded-lg">
                    <span className="font-headline-sm text-on-primary font-bold block">
                      AES-256
                    </span>
                    <span className="font-body-sm text-surface-dim">
                      Enkripsi Tersimpan
                    </span>
                  </div>
                  <div className="p-3 bg-white/5 rounded-lg">
                    <span className="font-headline-sm text-on-primary font-bold block">
                      TLS 1.3
                    </span>
                    <span className="font-body-sm text-surface-dim">
                      Aliran Waktu-Nyata
                    </span>
                  </div>
                  <div className="p-3 bg-white/5 rounded-lg">
                    <span className="font-headline-sm text-on-primary font-bold block">
                      Imutabel
                    </span>
                    <span className="font-body-sm text-surface-dim">
                      Jejak Audit Buku Besar
                    </span>
                  </div>
                </div>
              </div>

              {/* Pre-flight checklist card */}
              <div className="lg:col-span-5 bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/15">
                <div className="flex justify-between items-center pb-3 mb-4 border-b border-white/10">
                  <span className="font-label-lg text-on-primary font-bold">
                    PEMERIKSAAN SISTEM PESERTA
                  </span>
                  <span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed text-[11px] font-bold">
                    SIAP DIMULAI
                  </span>
                </div>
                <div className="flex flex-col gap-2.5 text-sm">
                  <div className="px-3 py-2 bg-white/5 rounded-lg flex justify-between items-center">
                    <span>Pemeriksaan Lingkungan Kamera</span>
                    <span className="text-xs text-tertiary-fixed font-semibold">
                      Lolos (1 Wajah)
                    </span>
                  </div>
                  <div className="px-3 py-2 bg-white/5 rounded-lg flex justify-between items-center">
                    <span>Status Mikrofon &amp; Audio</span>
                    <span className="text-xs text-tertiary-fixed font-semibold">
                      Aktif (-14dB)
                    </span>
                  </div>
                  <div className="px-3 py-2 bg-white/5 rounded-lg flex justify-between items-center">
                    <span>Ping Jaringan &amp; WebSocket</span>
                    <span className="text-xs text-tertiary-fixed font-semibold">
                      52 Mbps / 42ms
                    </span>
                  </div>
                  <div className="px-3 py-2 bg-white/5 rounded-lg flex justify-between items-center">
                    <span>Verifikasi Penguncian OS</span>
                    <span className="text-xs text-tertiary-fixed font-semibold">
                      Terverifikasi
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section
        id="harga"
        className="py-16 border-t border-outline-variant/30 scroll-mt-20 sm:scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-margin-sm lg:px-margin">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-surface-container-lowest border border-outline-variant/40 mb-3 shadow-sm">
              <span className="material-symbols-outlined text-[16px] text-secondary">
                payments
              </span>
              <span className="font-label-md text-primary font-bold uppercase">
                Skema Lisensi Fleksibel &amp; Transparan
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-primary font-bold mb-3">
              Paket Harga Penyelenggaraan Ujian &amp; Proctoring
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Biaya terukur yang disesuaikan dengan skala sekolah atau kampus,
              estimasi peserta serentak, dan intensitas pengawasan AI tanpa
              biaya tersembunyi.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-2 p-1.5 rounded-xl bg-surface-container-low border border-outline-variant/40 mt-6">
              <button
                type="button"
                onClick={() => setAnnual(false)}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  !annual
                    ? "bg-surface-container-lowest text-primary shadow-sm"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                Tagihan Bulanan
              </button>
              <button
                type="button"
                onClick={() => setAnnual(true)}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  annual
                    ? "bg-surface-container-lowest text-primary shadow-sm"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                <span>Tahunan</span>
                <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold">
                  HEMAT 20%
                </span>
              </button>
            </div>
          </div>

          {/* 3 PRICING CARDS */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mb-14">
            {/* Card 1: Starter */}
            <div className="bg-surface-container-lowest rounded-xl p-7 shadow-sm border border-outline-variant/25 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="px-2.5 py-1 bg-surface-container-low rounded text-xs font-semibold text-on-surface-variant">
                    SMP, SMU/SMK &amp; Bimbel
                  </span>
                  <span className="material-symbols-outlined text-on-surface-variant">
                    school
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary font-bold mb-1">
                  Paket Starter
                </h3>
                <p className="font-body-sm text-on-surface-variant mb-5">
                  Ideal untuk Penilaian Akhir Semester (PAS), Asesmen Sekolah,
                  tryout massal, dan kuis berkala.
                </p>
                <div className="bg-surface-container-low rounded-lg p-4 mb-5">
                  <div className="flex items-baseline gap-1">
                    <span className="font-headline-lg text-primary font-bold">
                      {starterPrice}
                    </span>
                    <span className="font-body-sm text-on-surface-variant">
                      / peserta / sesi
                    </span>
                  </div>
                  <span className="text-[11px] text-on-surface-variant block mt-1">
                    Atau langganan Rp 1.500.000 / bln (s.d. 300 siswa)
                  </span>
                </div>
                <ul className="space-y-2.5 text-xs text-on-surface mb-6">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[16px] text-secondary shrink-0">
                      check_circle
                    </span>
                    <span>
                      <strong>Safe Exam Lockdown:</strong> Isolasi peramban
                      &amp; blokir pintasan
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[16px] text-secondary shrink-0">
                      check_circle
                    </span>
                    <span>
                      <strong>Deteksi Kecurangan Dasar:</strong> Log perpindahan
                      tab &amp; devtools
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[16px] text-secondary shrink-0">
                      check_circle
                    </span>
                    <span>
                      <strong>Bank Soal Mandiri:</strong> PG, esai dasar &amp;
                      import QTI 2.1
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[16px] text-secondary shrink-0">
                      check_circle
                    </span>
                    <span>
                      <strong>Koreksi Otomatis:</strong> Nilai instan &amp;
                      peringkat kelas
                    </span>
                  </li>
                </ul>
              </div>
              <Link
                href="/login"
                className="w-full py-3 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-label-lg text-label-lg text-center transition-colors"
              >
                Mulai Uji Coba Gratis 14 Hari
              </Link>
            </div>

            {/* Card 2: Institusi Pro */}
            <div className="bg-surface-container-lowest rounded-xl p-7 border-2 border-secondary relative shadow-lg flex flex-col justify-between">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-secondary text-on-secondary text-[11px] font-bold rounded-full uppercase whitespace-nowrap">
                Paling Populer • Rekomendasi Sekolah &amp; Kampus
              </div>
              <div>
                <div className="flex justify-between items-center mb-3 mt-2">
                  <span className="px-2.5 py-1 bg-secondary-fixed text-on-secondary-fixed rounded text-xs font-bold">
                    SMP, SMU/SMK &amp; Perguruan Tinggi
                  </span>
                  <span className="material-symbols-outlined text-secondary">
                    verified_user
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary font-bold mb-1">
                  Institusi Pro
                </h3>
                <p className="font-body-sm text-on-surface-variant mb-5">
                  Dirancang untuk UTS/UAS, Ujian Sekolah/SNBT, Ujian Masuk
                  Mandiri, dan seleksi berisiko tinggi.
                </p>
                <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-4 mb-5">
                  <div className="flex items-baseline gap-1">
                    <span className="font-headline-lg text-primary font-bold">
                      {proPrice}
                    </span>
                    <span className="font-body-sm text-on-surface-variant">
                      / peserta / sesi
                    </span>
                  </div>
                  <span className="text-[11px] text-secondary font-semibold block mt-1">
                    Atau paket lisensi Rp 4.900.000 / bln (s.d. 1.500 peserta)
                  </span>
                </div>
                <ul className="space-y-2.5 text-xs text-on-surface mb-6">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[16px] text-secondary shrink-0">
                      check
                    </span>
                    <span>
                      <strong>AI Face &amp; Gaze Tracking:</strong> Deteksi
                      tatapan ke luar layar
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[16px] text-secondary shrink-0">
                      check
                    </span>
                    <span>
                      <strong>Akustik VAD:</strong> Deteksi bisikan abnormal &amp;
                      multi-speaker
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[16px] text-secondary shrink-0">
                      check
                    </span>
                    <span>
                      <strong>Deteksi Gawai Kamera:</strong> Notifikasi objek
                      ponsel cerdas
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[16px] text-secondary shrink-0">
                      check
                    </span>
                    <span>
                      <strong>Integrasi LMS LTI 1.3:</strong> Sinkronisasi
                      Moodle, Canvas, Google Classroom
                    </span>
                  </li>
                </ul>
              </div>
              <Link
                href="/login"
                className="w-full py-3 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg text-center transition-colors"
              >
                Pilih Paket Pro Institusi
              </Link>
            </div>

            {/* Card 3: Enterprise Nasional */}
            <div className="bg-surface-container-lowest rounded-xl p-7 shadow-sm border border-outline-variant/25 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="px-2.5 py-1 bg-surface-container-low rounded text-xs font-semibold text-on-surface-variant">
                    Kedinasan, Dinas Pendidikan &amp; BUMN
                  </span>
                  <span className="material-symbols-outlined text-primary">
                    workspace_premium
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary font-bold mb-1">
                  Enterprise Nasional
                </h3>
                <p className="font-body-sm text-on-surface-variant mb-5">
                  Untuk Olimpiade Nasional, Uji Kompetensi Profesi, Seleksi
                  ASN/BUMN, &amp; regulasi ketat.
                </p>
                <div className="bg-surface-container-low rounded-lg p-4 mb-5">
                  <span className="font-headline-lg text-primary font-bold block">
                    Skala Kustom
                  </span>
                  <span className="text-[11px] text-on-surface-variant block mt-1">
                    Volume besar, SLA 99.99%, &amp; penawaran SPK resmi
                  </span>
                </div>
                <ul className="space-y-2.5 text-xs text-on-surface mb-6">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[16px] text-secondary shrink-0">
                      star
                    </span>
                    <span>
                      <strong>Dedicated GPU Cluster:</strong> Inferensi AI tanpa
                      antrean
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[16px] text-secondary shrink-0">
                      star
                    </span>
                    <span>
                      <strong>Dual-Camera 360° Feed:</strong> Laptop + sudut
                      ruangan gawai kedua
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[16px] text-secondary shrink-0">
                      star
                    </span>
                    <span>
                      <strong>Audit Forensik SHA-256:</strong> Buku besar
                      kriptografis berkekuatan hukum
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[16px] text-secondary shrink-0">
                      star
                    </span>
                    <span>
                      Opsi On-Premise / Sovereign Gov-Cloud di Indonesia
                    </span>
                  </li>
                </ul>
              </div>
              <button
                type="button"
                onClick={() => {
                  setSubmittedSpk(false);
                  setEnterpriseModalOpen(true);
                }}
                className="w-full py-3 rounded-lg bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg text-center transition-colors"
              >
                Konsultasi Tim Ahli &amp; SPK
              </button>
            </div>
          </div>

          {/* CTA FINAL BANNER */}
          <div className="bg-surface-container-low rounded-2xl p-8 sm:p-12 text-center">
            <div className="w-14 h-14 rounded-full bg-secondary-fixed text-primary inline-flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-[28px]">
                description
              </span>
            </div>
            <h2 className="font-display-lg text-headline-lg-mobile sm:text-display-lg text-primary font-bold mb-3">
              Siap Mentransformasi Alur Asesmen Anda?
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-7">
              Bergabunglah dengan ratusan SMP, SMU/SMK, Perguruan Tinggi, dan
              badan sertifikasi yang menyelenggarakan ujian aman bersama ARCI
              EXAM.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/login"
                className="px-6 py-3.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg shadow-sm transition-colors"
              >
                Jadwalkan Demo Institusional
              </Link>
              <Link
                href="/login"
                className="px-6 py-3.5 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-primary border border-outline-variant/40 font-label-lg text-label-lg transition-colors"
              >
                Buat Akun Guru / Dosen Gratis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ENTERPRISE SPK MODAL */}
      <Dialog
        open={enterpriseModalOpen}
        onClose={() => setEnterpriseModalOpen(false)}
        className="relative z-50"
      >
        <div
          className="fixed inset-0 bg-primary/60 backdrop-blur-sm"
          aria-hidden="true"
        />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="w-full max-w-lg rounded-xl bg-surface-container-lowest shadow-2xl overflow-hidden">
            <div className="bg-primary text-on-primary p-5 flex justify-between items-start">
              <div>
                <div className="flex items-center gap-1.5 text-tertiary-fixed text-xs font-bold uppercase">
                  <span className="material-symbols-outlined text-[16px]">
                    verified_user
                  </span>
                  <span>Registrasi Pengadaan Resmi Enterprise</span>
                </div>
                <DialogTitle className="font-headline-md text-headline-md text-on-primary font-bold mt-1">
                  Pengajuan Proposal &amp; SPK Institusi
                </DialogTitle>
              </div>
              <button
                type="button"
                aria-label="Tutup modal"
                onClick={() => setEnterpriseModalOpen(false)}
                className="text-on-primary/80 hover:text-on-primary"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="p-6">
              {submittedSpk ? (
                <div className="text-center py-6 space-y-3">
                  <span className="material-symbols-outlined text-[48px] text-on-tertiary-container">
                    task_alt
                  </span>
                  <h3 className="font-headline-sm text-primary font-bold">
                    Permintaan Proposal Terkirim
                  </h3>
                  <p className="font-body-md text-on-surface-variant">
                    Tim implementasi ARCI EXAM akan menghubungi PIC institusi
                    Anda dalam 1×24 jam kerja.
                  </p>
                  <button
                    type="button"
                    onClick={() => setEnterpriseModalOpen(false)}
                    className="mt-2 px-5 py-2 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg"
                  >
                    Selesai
                  </button>
                </div>
              ) : (
                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmittedSpk(true);
                  }}
                >
                  <div>
                    <label className="block font-label-md text-on-surface font-semibold mb-1">
                      Nama Sekolah / Kampus / Instansi
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Contoh: SMA Negeri 1 Jakarta / Universitas Indonesia"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-label-md text-on-surface font-semibold mb-1">
                        Email Resmi PIC
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="pic@sekolah.sch.id"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary"
                      />
                    </div>
                    <div>
                      <label className="block font-label-md text-on-surface font-semibold mb-1">
                        Estimasi Peserta Serentak
                      </label>
                      <input
                        required
                        type="number"
                        min={100}
                        defaultValue={1500}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg font-bold transition-colors"
                  >
                    Kirim Permintaan Proposal &amp; Demo
                  </button>
                </form>
              )}
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
