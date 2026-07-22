import type { SVGProps } from "react";

export function AtlasMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 48 48"
      role="img"
      aria-label="Símbolo Atlas Global"
      {...props}
    >
      <defs>
        <linearGradient id="atlas-a" x1="5" y1="43" x2="34" y2="4">
          <stop stopColor="#7C3AED" />
          <stop offset="0.55" stopColor="#5966FF" />
          <stop offset="1" stopColor="#38BDF8" />
        </linearGradient>
        <linearGradient id="atlas-b" x1="18" y1="39" x2="42" y2="13">
          <stop stopColor="#1D4ED8" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      <path
        d="M6.5 38.8 20.2 8.6c1.5-3.3 6.1-3.5 7.8-.3l13.4 25.2c1.5 2.8-.5 6.2-3.7 6.2h-7.3L23.6 25 18 38.8H6.5Z"
        fill="url(#atlas-a)"
      />
      <path
        d="M16.3 39.7 27.7 17l4.8 9.1-6.8 13.6h-9.4Z"
        fill="url(#atlas-b)"
        opacity="0.94"
      />
      <path
        d="M9 39.4c8.6-.4 16.2-3.3 22.6-8.9l4.6 8.9H9Z"
        fill="#6D5CF6"
        opacity="0.82"
      />
    </svg>
  );
}

export function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex min-w-0 items-center gap-3">
      <AtlasMark className="h-10 w-10 shrink-0" />
      {!compact && (
        <span className="min-w-0 leading-none">
          <span className="block truncate text-[15px] font-semibold tracking-[0.2em] text-white sm:text-base">
            ATLAS GLOBAL
          </span>
          <span className="mt-1 block truncate text-[9px] tracking-wide text-slate-400 sm:text-[10px]">
            Research • Architecture • Platforms
          </span>
        </span>
      )}
    </span>
  );
}
