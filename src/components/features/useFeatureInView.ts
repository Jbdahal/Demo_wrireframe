"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

export const spring = { type: "spring" as const, stiffness: 260, damping: 24 };
export const springSoft = { type: "spring" as const, stiffness: 180, damping: 22 };

export function useFeatureInView(maxStep = 5, intervalMs = 1400) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.35, once: false });
  const reducedMotion = useReducedMotion();
  const [step, setStep] = useState(0);
  const displayStep = reducedMotion ? maxStep : isInView ? step : 0;

  useEffect(() => {
    if (reducedMotion || !isInView) return;

    const interval = setInterval(() => {
      setStep((prev) => (prev >= maxStep ? 0 : prev + 1));
    }, intervalMs);

    return () => clearInterval(interval);
  }, [isInView, reducedMotion, maxStep, intervalMs]);

  return { ref, step: displayStep, isInView, reducedMotion: !!reducedMotion };
}
