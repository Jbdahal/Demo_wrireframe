"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";
import { springGentle } from "@/lib/motion";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function FadeIn({ children, className, delay = 0 }: FadeInProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ ...springGentle, delay }}
    >
      {children}
    </motion.div>
  );
}
