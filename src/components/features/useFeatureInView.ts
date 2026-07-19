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
    // Reduced-motion case needs no effect: the returned `step` below is
    // already pinned to `maxStep` via the ternary, independent of this state.
    if (reducedMotion) return;

    if (!isInView) return;

    // Every step, including the first, fires via setTimeout so state is
    // always set from a callback rather than synchronously in the effect body.
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    for (let i = 0; i <= maxStep; i++) {
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
