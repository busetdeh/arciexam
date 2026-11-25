"use client";

import { Dialog, DialogPanel } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";

export interface NavItem {
  label: string;
  href: string;
  icon: string;
}

interface DashboardShellProps {
  roleLabel: string;
  userName: string;
  userMeta: string;
  navItems: NavItem[];
  children: ReactNode;
}

export function DashboardShell({
  roleLabel,
  userName,
  userMeta,
  navItems,
  children,
}: DashboardShellProps) {
  const pathname = usePathname();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const sidebarContent = (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="h-16 px-5 flex items-center justify-between border-b border-outline-variant/25">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-primary-container flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary-fixed text-[18px]">
                verified_user
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-base text-primary font-bold leading-none">
                ARCI<span className="text-secondary">EXAM</span>
              </span>
              <span className="font-label-md text-[10px] text-secondary font-semibold uppercase tracking-wider mt-0.5">
                {roleLabel}
              </span>
            </div>
          </Link>
        </div>

        <nav className="flex flex-col gap-1 p-3">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileNavOpen(false)}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg font-label-lg text-label-lg transition-all ${
                  active
                    ? "bg-primary-container text-on-primary shadow-sm"
                    : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="p-3 border-t border-outline-variant/25 space-y-2">
        <div className="p-3 rounded-lg bg-surface-container-lowest border border-outline-variant/20">
          <div className="font-label-lg text-xs text-primary font-bold truncate">
            {userName}
          </div>
          <div className="font-body-sm text-[11px] text-on-surface-variant truncate">
            {userMeta}
          </div>
        </div>
        <div className="flex gap-1.5">
          <Link
            href="/"
            className="flex-1 py-2 px-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary text-xs font-semibold text-center transition-colors"
          >
            Portal
          </Link>
          <Link
            href="/login"
            className="flex-1 py-2 px-2.5 rounded-lg bg-error-container/70 hover:bg-error-container text-on-error-container text-xs font-semibold text-center transition-colors"
          >
            Keluar
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-on-surface flex">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block fixed left-0 top-0 bottom-0 w-64 bg-surface-container-low border-r border-outline-variant/25 z-40">
        {sidebarContent}
      </aside>

      {/* Mobile Drawer */}
      <Dialog
        open={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        className="relative z-50 lg:hidden"
      >
        <div className="fixed inset-0 bg-primary/50 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-y-0 left-0 w-72 bg-surface-container-low shadow-2xl">
          <DialogPanel className="h-full">{sidebarContent}</DialogPanel>
        </div>
      </Dialog>

      {/* Main Content */}
      <div className="flex-1 lg:pl-64 flex flex-col min-w-0">
        <header className="sticky top-0 z-30 h-16 bg-surface-container-lowest/90 backdrop-blur-md border-b border-outline-variant/25 px-4 sm:px-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Buka menu"
              onClick={() => setMobileNavOpen(true)}
              className="lg:hidden w-9 h-9 rounded-lg bg-surface-container-low flex items-center justify-center text-primary"
            >
              <span className="material-symbols-outlined text-[20px]">menu</span>
            </button>
            <span className="font-label-lg text-label-lg text-primary font-bold">
              {roleLabel}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-low text-xs text-on-surface">
              <span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse" />
              <span>Sistem Normal • TLS 1.3</span>
            </div>
            <Link
              href="/login"
              className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary text-xs font-semibold transition-colors"
            >
              Ganti Peran
            </Link>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
