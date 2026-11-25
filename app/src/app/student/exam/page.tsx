"use client";

import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface OptionItem {
  id: string;
  title: string;
  desc: string;
}

const OPTIONS: OptionItem[] = [
  {
    id: "A",
    title: "Kompleksitas Binary Min-Heap Standar",
    desc: "O((|V| + |E|) log |V|) dengan lintasan S → B → C → T (bobot = 14).",
  },
  {
    id: "B",
    title: "Kompleksitas Fibonacci Heap Teroptimasi (Amortized)",
    desc: "O(|E| + |V| log |V|) dengan lintasan optimal S → A → D → T (bobot = 12).",
  },
  {
    id: "C",
    title: "Kompleksitas Matriks Kuadratik Murni",
    desc: "O(|V|²) dengan lintasan S → A → C → T (bobot = 15).",
  },
  {
    id: "D",
    title: "Kompleksitas Reduksi Edges Logaritmik",
    desc: "O(|E| log |V|) dengan lintasan langsung S → D → T (bobot = 16).",
  },
];

export default function StudentExamPage() {
  const router = useRouter();
  const [currentQ, setCurrentQ] = useState(18);
  const [answers, setAnswers] = useState<Record<number, string>>({
    1: "A",
    2: "C",
    3: "B",
    18: "B",
  });
  const [flagged, setFlagged] = useState<Record<number, boolean>>({ 5: true });
  const [secondsLeft, setSecondsLeft] = useState(5075);
  const [submitModalOpen, setSubmitModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hh = String(Math.floor(secondsLeft / 3600)).padStart(2, "0");
  const mm = String(Math.floor((secondsLeft % 3600) / 60)).padStart(2, "0");
  const ss = String(secondsLeft % 60).padStart(2, "0");

  const selected = answers[currentQ] ?? "";
  const isFlagged = Boolean(flagged[currentQ]);
  const answeredCount = Object.keys(answers).length;

  return (
    <div className="min-h-screen bg-surface text-on-surface select-none flex flex-col">
      {/* Sticky Exam Header */}
      <header className="fixed top-0 w-full z-50 h-16 sm:h-20 bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_1px_8px_rgba(15,32,66,0.06)] px-3 sm:px-6 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 sm:gap-3">
          <Link href="/student" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary-container flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary-fixed text-[18px]">
                verified_user
              </span>
            </div>
            <span className="font-headline-sm text-base sm:text-headline-sm text-primary font-bold">
              ARCI<span className="text-secondary">EXAM</span>
            </span>
          </Link>
          <div className="hidden sm:flex items-center gap-1 px-2.5 py-1 bg-surface-container-high rounded-full text-xs font-semibold">
            <span className="material-symbols-outlined text-secondary text-[14px]">
              lock
            </span>
            <span>Mode Terkunci</span>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden md:flex items-center gap-1.5 text-xs text-on-tertiary-container font-semibold">
            <span className="material-symbols-outlined text-[16px]">
              cloud_done
            </span>
            <span>Tersimpan Otomatis</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-surface-container-low rounded-xl">
            <span className="font-label-timer text-sm sm:text-label-timer text-primary tabular-nums">
              {hh}:{mm}:{ss}
            </span>
            <span className="material-symbols-outlined text-secondary text-[20px]">
              timer
            </span>
          </div>
          <Link
            href="/student"
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"
            title="Dasbor Peserta"
          >
            <span className="material-symbols-outlined text-on-primary text-[18px]">
              person
            </span>
          </Link>
        </div>
      </header>

      {/* Main Workspace (1-file responsive grid) */}
      <main className="flex-1 pt-20 sm:pt-24 pb-10 px-3 sm:px-6 max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          {/* Question Canvas */}
          <section className="lg:col-span-8 space-y-5">
            <div className="bg-surface-container-lowest rounded-xl p-4 sm:p-6 shadow-sm space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2.5 py-1 rounded bg-surface-container-high text-primary text-xs font-bold">
                    BAGIAN B: STRUKTUR GRAF
                  </span>
                  <span className="font-headline-sm text-primary font-bold">
                    Soal No. {currentQ} / 25
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setFlagged((prev) => ({
                      ...prev,
                      [currentQ]: !prev[currentQ],
                    }))
                  }
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    isFlagged
                      ? "bg-secondary-container/30 text-on-secondary-container"
                      : "bg-surface-container text-on-surface"
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">
                    {isFlagged ? "bookmark" : "bookmark_border"}
                  </span>
                  <span>{isFlagged ? "Ditandai Ragu" : "Tandai Ragu-Ragu"}</span>
                </button>
              </div>

              <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                Diberikan graf berbobot positif terarah{" "}
                <strong className="font-serif italic text-primary">
                  G = (V, E)
                </strong>
                . Jika algoritma <strong>Dijkstra</strong> dijalankan dari
                simpul asal <strong>S</strong> menuju simpul <strong>T</strong>,
                tentukan kompleksitas waktu asimtotik dengan{" "}
                <strong>Fibonacci Heap</strong> dan lintasan terpendeknya!
              </p>

              {/* Options */}
              <div className="space-y-2.5 pt-2">
                {OPTIONS.map((opt) => {
                  const isSelected = selected === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() =>
                        setAnswers((prev) => ({ ...prev, [currentQ]: opt.id }))
                      }
                      className={`w-full text-left p-4 rounded-xl flex items-start gap-3 transition-all ${
                        isSelected
                          ? "bg-surface-container-low border-2 border-secondary shadow-sm"
                          : "bg-surface-container-lowest border border-outline-variant/40 hover:bg-surface-container-low"
                      }`}
                    >
                      <span
                        className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                          isSelected
                            ? "bg-primary text-on-primary"
                            : "bg-surface-container text-primary"
                        }`}
                      >
                        {opt.id}
                      </span>
                      <div className="min-w-0">
                        <div className="font-label-lg text-primary font-semibold">
                          {opt.title}
                        </div>
                        <div className="font-body-md text-on-surface-variant">
                          {opt.desc}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Nav */}
            <div className="sticky bottom-3 z-30 bg-surface-container-lowest/95 backdrop-blur-md rounded-xl p-3 sm:p-4 shadow-lg flex flex-wrap items-center justify-between gap-2">
              <button
                type="button"
                disabled={currentQ <= 1}
                onClick={() => setCurrentQ((q) => Math.max(1, q - 1))}
                className="px-4 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high disabled:opacity-40 text-primary font-label-lg text-xs sm:text-sm"
              >
                ← Sebelumnya
              </button>
              <button
                type="button"
                onClick={() => setSubmitModalOpen(true)}
                className="px-4 py-2 rounded-lg bg-on-tertiary-container text-on-tertiary font-label-lg text-xs sm:text-sm font-bold"
              >
                Kumpulkan Ujian
              </button>
              <button
                type="button"
                disabled={currentQ >= 25}
                onClick={() => setCurrentQ((q) => Math.min(25, q + 1))}
                className="px-4 py-2 rounded-lg bg-primary hover:bg-primary-container disabled:opacity-40 text-on-primary font-label-lg text-xs sm:text-sm"
              >
                Berikutnya →
              </button>
            </div>
          </section>

          {/* Right Panel: Proctoring + Question Matrix */}
          <aside className="lg:col-span-4 space-y-5">
            <div className="bg-surface-container-lowest rounded-xl p-4 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-label-lg text-primary font-bold">
                  AI Proctoring Aktif
                </span>
                <span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed text-[11px] font-bold">
                  Integritas 99%
                </span>
              </div>
              <div className="aspect-video rounded-lg bg-primary-container flex flex-col items-center justify-center text-on-primary/80">
                <span className="material-symbols-outlined text-[36px]">
                  videocam
                </span>
                <span className="text-xs mt-1">
                  Kamera &amp; Audio Terpantau
                </span>
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-xl p-4 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-label-lg text-primary font-bold">
                  Matriks Soal (1–25)
                </span>
                <span className="text-xs text-on-surface-variant">
                  {answeredCount}/25 Terjawab
                </span>
              </div>
              <div className="grid grid-cols-5 gap-1.5">
                {Array.from({ length: 25 }, (_, i) => i + 1).map((num) => {
                  const active = num === currentQ;
                  const ans = Boolean(answers[num]);
                  const flg = Boolean(flagged[num]);
                  return (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setCurrentQ(num)}
                      className={`py-2 rounded-lg text-xs font-bold transition-all ${
                        active
                          ? "ring-2 ring-secondary bg-secondary text-on-secondary"
                          : flg
                          ? "bg-secondary-container/40 text-on-secondary-fixed"
                          : ans
                          ? "bg-primary text-on-primary"
                          : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container"
                      }`}
                    >
                      {num}
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Final Submit Confirmation Modal */}
      <Dialog
        open={submitModalOpen}
        onClose={() => setSubmitModalOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-primary/60 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="w-full max-w-md rounded-xl bg-surface-container-lowest p-6 shadow-2xl space-y-4">
            <DialogTitle className="font-headline-sm text-primary font-bold">
              Konfirmasi Pengumpulan Ujian
            </DialogTitle>
            <p className="font-body-md text-on-surface-variant">
              Anda telah menjawab <strong>{answeredCount} dari 25 soal</strong>.
              Setelah dikumpulkan, jawaban tidak dapat diubah lagi.
            </p>
            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setSubmitModalOpen(false)}
                className="px-4 py-2 rounded-lg bg-surface-container text-primary text-sm font-semibold"
              >
                Kembali Mengerjakan
              </button>
              <button
                type="button"
                onClick={() => router.push("/student/results")}
                className="px-4 py-2 rounded-lg bg-primary text-on-primary text-sm font-bold"
              >
                Ya, Kumpulkan Sekarang
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
}
