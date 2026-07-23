"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface RotatingWordProps {
  words: readonly string[];
  interval?: number;
  className?: string;
}

export function RotatingWord({ words, interval = 2200, className }: RotatingWordProps) {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval, reduced]);

  if (reduced) {
    return <span className={className}>{words[0]}</span>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={words[index]}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={cn("inline-block", className)}
      >
        {words[index]}
      </motion.span>
    </AnimatePresence>
  );
}
