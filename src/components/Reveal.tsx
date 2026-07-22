"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { PropsWithChildren } from "react";

export function Reveal({
  children,
  className,
  delay = 0,
}: PropsWithChildren<{ className?: string; delay?: number }>) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={
        reduceMotion ? undefined : { opacity: [0.96, 1], y: [6, 0] }
      }
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.52, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
