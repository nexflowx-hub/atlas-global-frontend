"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export function GlobeVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative isolate mx-auto aspect-[1.45/1] w-full max-w-[650px] overflow-hidden lg:mx-0 lg:max-w-none">
      <div className="absolute inset-[8%_8%_4%_8%] rounded-full bg-blue-600/10 blur-3xl" />
      <motion.div
        className="absolute inset-0"
        animate={reduceMotion ? undefined : { y: [0, -5, 0], scale: [1, 1.008, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/globe.svg"
          alt="Globo digital conectado representando a presença internacional da Atlas Global"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 58vw"
          className="object-cover object-center"
        />
      </motion.div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#020611] via-transparent to-transparent opacity-45 lg:opacity-15" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#020611] to-transparent" />
    </div>
  );
}
