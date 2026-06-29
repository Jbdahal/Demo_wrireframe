"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { useFeatureInViewContext } from "./featureInView";

export { springSoft } from "@/lib/motion";
export const spring = { type: "spring" as const, stiffness: 260, damping: 24 };

export function useFeatureInView(maxStep = 5, stepDelayMs = 650) {
  const isInView = useFeatureInViewContext();
  const reducedMotion = useReducedMotion();
  const [step, setStep] = useState(-1);

  useEffect(() => {
    if (reducedMotion) {
      setStep(maxStep);
      return;
    }

    if (!isInView) return;

    setStep(0);
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    for (let i = 1; i <= maxStep; i++) {
      timeouts.push(setTimeout(() => setStep(i), stepDelayMs * i));
    }

    return () => timeouts.forEach(clearTimeout);
  }, [isInView, reducedMotion, maxStep, stepDelayMs]);

  return {
    step: reducedMotion ? maxStep : step,
    isInView,
    reducedMotion: !!reducedMotion,
  };
}
