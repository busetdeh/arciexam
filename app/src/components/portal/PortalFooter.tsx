import Link from "next/link";

export function PortalFooter() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/40 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-margin-sm lg:px-margin">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-md bg-primary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary-fixed text-[16px]">
                  verified_user
                </span>
              </div>
              <span className="font-headline-sm text-headline-sm text-primary font-bold">
                ARCI EXAM
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm mb-4">
              Platform evaluasi digital berstandar tinggi untuk SMP, SMU/SMK,
              Perguruan Tinggi, dan sertifikasi profesi.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-surface-container-low rounded text-[11px] font-semibold">
                SOC2 Tipe II
              </span>
              <span className="px-2 py-1 bg-surface-container-low rounded text-[11px] font-semibold">
                FERPA Compliant
              </span>
              <span className="px-2 py-1 bg-surface-container-low rounded text-[11px] font-semibold">
                GDPR Ready
              </span>
              <span className="px-2 py-1 bg-surface-container-low rounded text-[11px] font-semibold">
                WCAG 2.1 AA
              </span>
            </div>
          </div>

          <div>
            <span className="font-label-lg text-primary font-bold uppercase block mb-3">
              Produk
            </span>
            <div className="flex flex-col gap-2 font-body-md text-on-surface-variant">
              <a href="#fitur" className="hover:text-primary transition-colors">
                Mesin Ujian
              </a>
              <a href="#fitur" className="hover:text-primary transition-colors">
                Pengawasan Langsung
              </a>
              <a href="#fitur" className="hover:text-primary transition-colors">
                Manajemen Bank Soal
              </a>
              <a
                href="#keamanan"
                className="hover:text-primary transition-colors"
              >
                Peramban Keamanan
              </a>
            </div>
          </div>

          <div>
            <span className="font-label-lg text-primary font-bold uppercase block mb-3">
              Sumber Daya
            </span>
            <div className="flex flex-col gap-2 font-body-md text-on-surface-variant">
              <Link
                href="/login"
                className="hover:text-primary transition-colors"
              >
                Portal Masuk
              </Link>
              <a href="#demo" className="hover:text-primary transition-colors">
                Demo Peran
              </a>
              <a href="#harga" className="hover:text-primary transition-colors">
                Paket Institusi
              </a>
            </div>
          </div>

          <div>
            <span className="font-label-lg text-primary font-bold uppercase block mb-3">
              Dukungan
            </span>
            <div className="flex flex-col gap-2 font-body-md text-on-surface-variant">
              <a
                href="#keamanan"
                className="hover:text-primary transition-colors"
              >
                Status Sistem
              </a>
              <Link
                href="/login"
                className="hover:text-primary transition-colors"
              >
                Verifikasi Peserta
              </Link>
              <a
                href="#keamanan"
                className="hover:text-primary transition-colors"
              >
                Kebijakan Privasi
              </a>
            </div>
          </div>
        </div>

        <div className="pt-5 border-t border-outline-variant/25 flex flex-wrap justify-between items-center gap-2 text-xs text-on-surface-variant">
          <p>
            © 2026 ARCI EXAM Technologies Inc. Seluruh hak cipta dilindungi
            undang-undang.
          </p>
          <span>Pengujian Otoritatif &amp; Berkeandalan Tinggi</span>
        </div>
      </div>
    </footer>
  );
}
