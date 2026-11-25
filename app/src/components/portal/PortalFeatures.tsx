import Link from "next/link";

export function PortalFeatures() {
  return (
    <section id="fitur" className="py-16 scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-margin-sm lg:px-margin">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-label-md text-label-md text-secondary font-bold uppercase tracking-wider block mb-2">
            Dirancang Untuk Integritas Asesmen
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-primary font-bold mb-3">
            Kemampuan Platform Inti yang Diformulasikan untuk Ujian Kritis
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Setiap lapisan ARCI EXAM dioptimalkan untuk meniadakan kecurangan
            ujian, menyederhanakan penyusunan kurikulum SMP, SMU/SMK &amp;
            Perguruan Tinggi, dan menghadirkan kepastian psikometrik.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Bento 1: Bank Soal Cerdas */}
          <div className="bg-surface-container-lowest rounded-xl p-7 shadow-sm border border-outline-variant/20 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-secondary mb-5">
                <span className="material-symbols-outlined text-[26px]">
                  library_books
                </span>
              </div>
              <span className="font-label-md text-label-md text-on-surface-variant font-semibold uppercase">
                Manajemen Kurikulum
              </span>
              <h3 className="font-headline-md text-headline-md text-primary font-bold mt-1 mb-3">
                Bank Soal Cerdas
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-5">
                Penandaan taksonomi hierarkis, pengindeksan tingkat kesulitan,
                analisis diskriminasi soal, render LaTeX matematika WYSIWYG, dan
                impor massal CSV/QTI 2.1 tanpa hambatan.
              </p>
              <div className="bg-surface-container-low rounded-lg p-4 flex flex-col gap-2">
                <div className="flex justify-between text-xs">
                  <span className="text-primary font-bold">
                    Pengindeksan Kesulitan (Nilai-P)
                  </span>
                  <span className="text-secondary font-bold">
                    0.68 (Seimbang)
                  </span>
                </div>
                <div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="w-[68%] h-full bg-secondary rounded-full" />
                </div>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  <span className="px-2 py-0.5 bg-surface-container-lowest rounded text-[11px]">
                    #Matematika-SMA
                  </span>
                  <span className="px-2 py-0.5 bg-surface-container-lowest rounded text-[11px]">
                    #KurikulumMerdeka
                  </span>
                  <span className="px-2 py-0.5 bg-surface-container-lowest rounded text-[11px]">
                    Bloom: Sintesis
                  </span>
                  <span className="px-2 py-0.5 bg-surface-container-lowest rounded text-[11px] text-on-tertiary-container font-semibold">
                    QTI 2.1 Terverifikasi
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-5 pt-4 border-t border-outline-variant/25">
              <Link
                href="/login"
                className="text-secondary hover:text-primary font-label-lg text-label-lg inline-flex items-center gap-1 transition-colors"
              >
                <span>Jelajahi Solusi Bank Soal →</span>
              </Link>
            </div>
          </div>

          {/* Bento 2: Live AI & Human Proctoring */}
          <div className="bg-surface-container-lowest rounded-xl p-7 shadow-sm border border-outline-variant/20 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-secondary mb-5">
                <span className="material-symbols-outlined text-[26px]">
                  visibility
                </span>
              </div>
              <span className="font-label-md text-label-md text-on-surface-variant font-semibold uppercase">
                Verifikasi Berkelanjutan
              </span>
              <h3 className="font-headline-md text-headline-md text-primary font-bold mt-1 mb-3">
                Pengawasan AI &amp; Manusia Secara Langsung
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-5">
                Pemberlakuan isolasi peramban, deteksi kamera ponsel kedua,
                identifikasi anomali akustik terpisah, dan konsol intervensi
                pengawas tersinkronisasi.
              </p>
              <div className="bg-surface-container-low rounded-lg p-4 flex flex-col gap-2.5">
                <div className="flex justify-between items-center">
                  <span className="font-label-md text-primary font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px] text-secondary">
                      security
                    </span>
                    Aliran Multi-Sudut
                  </span>
                  <span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed text-[11px] font-bold">
                    SEMUA SENSOR NORMAL
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2.5 bg-surface-container-lowest rounded">
                    <span className="text-[11px] text-on-surface-variant block">
                      Umpan Kamera Ganda
                    </span>
                    <span className="text-[13px] font-bold text-primary">
                      Tersinkronisasi (0 ms)
                    </span>
                  </div>
                  <div className="p-2.5 bg-surface-container-lowest rounded">
                    <span className="text-[11px] text-on-surface-variant block">
                      Monitor Sekunder
                    </span>
                    <span className="text-[13px] font-bold text-primary">
                      Diblokir (VM Ditolak)
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 pt-4 border-t border-outline-variant/25">
              <Link
                href="/login"
                className="text-secondary hover:text-primary font-label-lg text-label-lg inline-flex items-center gap-1 transition-colors"
              >
                <span>Pelajari Protokol Keamanan →</span>
              </Link>
            </div>
          </div>

          {/* Bento 3: Dynamic Exam Builder */}
          <div className="bg-surface-container-lowest rounded-xl p-7 shadow-sm border border-outline-variant/20 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-secondary mb-5">
                <span className="material-symbols-outlined text-[26px]">
                  tune
                </span>
              </div>
              <span className="font-label-md text-label-md text-on-surface-variant font-semibold uppercase">
                Perakitan Ujian
              </span>
              <h3 className="font-headline-md text-headline-md text-primary font-bold mt-1 mb-3">
                Pembangun Ujian Dinamis
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-5">
                Perakitan struktural seret-dan-lepas, bagian soal berbatas waktu
                acak, penilaian adaptif, dan pembagian URL peserta terprogram
                seketika.
              </p>
              <div className="bg-surface-container-low rounded-lg p-4 flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-1.5 text-xs font-semibold">
                  <span className="px-2.5 py-1.5 rounded bg-primary text-on-primary">
                    Bagian 1: Matematika
                  </span>
                  <span className="text-outline">→</span>
                  <span className="px-2.5 py-1.5 rounded bg-surface-container text-primary">
                    Bagian 2: IPA/Sains
                  </span>
                  <span className="text-outline">→</span>
                  <span className="px-2.5 py-1.5 rounded bg-surface-container text-primary">
                    Bagian 3: Esai
                  </span>
                </div>
                <span className="px-2 py-1 rounded bg-secondary-fixed text-on-secondary-fixed text-[11px] font-bold">
                  Acak Otomatis
                </span>
              </div>
            </div>
            <div className="mt-5 pt-4 border-t border-outline-variant/25">
              <Link
                href="/login"
                className="text-secondary hover:text-primary font-label-lg text-label-lg inline-flex items-center gap-1 transition-colors"
              >
                <span>Jelajahi Alur Pembuat Ujian →</span>
              </Link>
            </div>
          </div>

          {/* Bento 4: In-Depth Cognitive Analytics */}
          <div className="bg-surface-container-lowest rounded-xl p-7 shadow-sm border border-outline-variant/20 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-secondary mb-5">
                <span className="material-symbols-outlined text-[26px]">
                  analytics
                </span>
              </div>
              <span className="font-label-md text-label-md text-on-surface-variant font-semibold uppercase">
                Intelijen Psikometrik
              </span>
              <h3 className="font-headline-md text-headline-md text-primary font-bold mt-1 mb-3">
                Analisis Kognitif Mendalam
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-5">
                Peta panas durasi pengerjaan per soal, kurva daya pembeda butir
                soal, distribusi persentil kelompok, dan laporan audit regulasi
                PDF/CSV/Excel sekali klik.
              </p>
              <div className="bg-surface-container-low rounded-lg p-4 flex items-center justify-between gap-4">
                <div>
                  <span className="font-label-md text-xs text-on-surface-variant block">
                    Daya Pembeda Butir Soal (Poin-Biserial)
                  </span>
                  <span className="font-headline-sm text-headline-sm text-primary font-bold">
                    +0.44 (Validitas Tinggi)
                  </span>
                </div>
                <svg
                  fill="none"
                  height="32"
                  viewBox="0 0 100 32"
                  width="100"
                  className="shrink-0"
                >
                  <path
                    d="M0 28 C25 28, 35 20, 50 14 C70 8, 85 4, 100 2"
                    stroke="#006591"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M0 28 C25 28, 35 20, 50 14 C70 8, 85 4, 100 2 L100 32 L0 32 Z"
                    fill="rgba(0,101,145,0.12)"
                  />
                </svg>
              </div>
            </div>
            <div className="mt-5 pt-4 border-t border-outline-variant/25">
              <Link
                href="/login"
                className="text-secondary hover:text-primary font-label-lg text-label-lg inline-flex items-center gap-1 transition-colors"
              >
                <span>Lihat Laporan Psikometrik →</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
