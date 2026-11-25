"use client";

import { Dialog, DialogPanel } from "@headlessui/react";
import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Fitur Utama", href: "#fitur" },
  { label: "Demo Peran", href: "#demo" },
  { label: "Paket Harga", href: "#harga" },
  { label: "Keamanan", href: "#keamanan" },
];

export function PortalHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 sm:h-20 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(15,32,66,0.05)]">
      <div className="max-w-7xl mx-auto h-full px-margin-sm lg:px-margin flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 lg:gap-8">
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-lg"
          >
            <div className="w-9 h-9 rounded-lg bg-primary-container flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-secondary-fixed text-[20px]">
                verified_user
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-primary font-bold tracking-tight leading-none">
                ARCI<span className="text-secondary">EXAM</span>
              </span>
              <span className="font-label-md text-[11px] text-on-surface-variant hidden sm:block">
                SMP, SMU/SMK &amp; Perguruan Tinggi
              </span>
            </div>
          </Link>

          <nav
            aria-label="Navigasi Portal"
            className="hidden md:flex items-center gap-1"
          >
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-lg font-label-lg text-label-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden xl:flex items-center gap-1.5 px-3 py-1 bg-surface-container-low rounded-full">
            <span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse" />
            <span className="font-label-md text-label-md text-on-surface">
              TLS 1.3 Terenkripsi
            </span>
          </div>

          <Link
            href="/login"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-surface-container text-primary hover:bg-surface-container-high font-label-lg text-label-lg transition-colors"
          >
            <span>Masuk</span>
          </Link>

          <Link
            href="/login"
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg shadow-sm transition-colors"
          >
            <span>Mulai Sekarang</span>
            <span className="material-symbols-outlined text-[18px]">
              arrow_forward
            </span>
          </Link>

          <button
            type="button"
            aria-label="Buka menu navigasi"
            onClick={() => setMobileOpen(true)}
            className="md:hidden w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary hover:bg-surface-container"
          >
            <span className="material-symbols-outlined text-[22px]">menu</span>
          </button>
        </div>
      </div>

      <Dialog
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        className="relative z-50 md:hidden"
      >
        <div className="fixed inset-0 bg-primary/50 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-surface-container-lowest p-6 shadow-xl flex flex-col justify-between">
          <DialogPanel className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <span className="font-headline-sm text-headline-sm font-bold text-primary">
                ARCI<span className="text-secondary">EXAM</span>
              </span>
              <button
                type="button"
                aria-label="Tutup menu"
                onClick={() => setMobileOpen(false)}
                className="w-9 h-9 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2.5 rounded-lg font-label-lg text-label-lg text-on-surface hover:bg-surface-container-low"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex flex-col gap-2 pt-4 border-t border-outline-variant/30">
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="w-full py-2.5 px-4 rounded-lg bg-primary text-on-primary text-center font-label-lg text-label-lg"
              >
                Masuk / Daftar Akun
              </Link>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </header>
  );
}
