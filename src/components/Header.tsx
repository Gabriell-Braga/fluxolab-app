"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-white"
          onClick={() => setOpen(false)}
        >
          Fluxo<span className="text-brand-500">Lab</span>
        </Link>

        <nav
          className="hidden items-center gap-6 md:flex"
          aria-label="Principal"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-1 text-sm font-medium text-slate-400 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="relative md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg border border-slate-700 p-2 text-brand-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <i
              className={`fa-solid ${open ? "fa-xmark" : "fa-bars"} shrink-0 text-xl leading-none`}
              aria-hidden="true"
            />
            <span className="sr-only">
              {open ? "Fechar menu" : "Abrir menu"}
            </span>
          </button>

          {open ? (
            <nav
              id="mobile-nav"
              className="absolute right-0 top-[calc(100%+0.5rem)] z-50 min-w-[12rem] rounded-xl border border-slate-800 bg-slate-950 py-2 shadow-xl shadow-black/50 ring-1 ring-white/5"
              aria-label="Principal (mobile)"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-slate-900 hover:text-white focus-visible:bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-500"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          ) : null}
        </div>
      </div>
    </header>
  );
}
