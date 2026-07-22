"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Menu, MessageCircle, X } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { navigation } from "@/data/homepage";

const openContact = () => {
  window.dispatchEvent(new CustomEvent("atlas:open-contact"));
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled || mobileOpen
          ? "border-white/10 bg-[#020611]/90 shadow-[0_12px_40px_rgba(0,0,0,.35)] backdrop-blur-xl"
          : "border-white/[0.06] bg-[#020611]/58 backdrop-blur-md"
      }`}
    >
      <div className="atlas-container flex h-[72px] items-center justify-between gap-5">
        <a href="#inicio" aria-label="Atlas Global — Início" className="shrink-0">
          <BrandLogo />
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-7 lg:flex">
          {navigation.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-[12px] font-medium transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/80 ${
                index === 0 ? "text-violet-400" : "text-slate-200"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <button
            type="button"
            onClick={openContact}
            className="inline-flex h-10 items-center gap-2 rounded-[5px] border border-white/35 px-5 text-[12px] font-medium text-white transition hover:border-violet-400/70 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
          >
            Falar com a Atlas
            <MessageCircle className="h-4 w-4" />
          </button>
          <div className="relative">
            <button
              type="button"
              aria-expanded={languageOpen}
              onClick={() => setLanguageOpen((value) => !value)}
              className="inline-flex h-10 items-center gap-1.5 rounded px-2 text-[11px] font-medium text-slate-100 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
            >
              PT <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {languageOpen && (
              <div className="absolute right-0 top-11 w-36 rounded-lg border border-white/10 bg-[#0b1426] p-1.5 shadow-2xl">
                <button className="w-full rounded-md bg-white/[0.06] px-3 py-2 text-left text-xs text-white">
                  Português
                </button>
                <span className="block px-3 py-2 text-xs text-slate-500">English — breve</span>
                <span className="block px-3 py-2 text-xs text-slate-500">Español — breve</span>
              </div>
            )}
          </div>
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? "Fechar navegação" : "Abrir navegação"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 lg:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#020611]/98 px-5 pb-7 pt-5 lg:hidden">
          <nav aria-label="Navegação móvel" className="mx-auto flex max-w-2xl flex-col">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="border-b border-white/[0.06] py-4 text-sm font-medium text-slate-200 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                openContact();
              }}
              className="mt-5 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-blue-500 text-sm font-semibold text-white"
            >
              Falar com a Atlas
              <MessageCircle className="h-4 w-4" />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
