"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { AnimationFrame, GlassCard, StepLabel, fadeStep } from "../AnimationFrame";
import { springSoft, useFeatureInView } from "../useFeatureInView";

const staff = [
  { initial: "A", pct: 72 },
  { initial: "B", pct: 48 },
  { initial: "C", pct: 88 },
  { initial: "D", pct: 65 },
];

export function WorkforceAnimation() {
  const { ref, step } = useFeatureInView(5, 1500);

  return (
    <AnimationFrame ref={ref} label="Workforce management and staff visibility">
      <div className="flex h-full flex-col gap-4">
        <div className="flex justify-center gap-3">
          {staff.map((s, i) => (
            <motion.div
              key={s.initial}
              animate={fadeStep(step, 0)}
              transition={{ ...springSoft, delay: i * 0.06 }}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue/20 to-teal/20 text-sm font-bold text-blue shadow-sm"
            >
              {s.initial}
            </motion.div>
          ))}
        </div>

        <GlassCard>
          <StepLabel color="teal">Availability</StepLabel>
          <div className="mt-4 space-y-3">
            {staff.map((s, i) => (
              <div key={s.initial} className="flex items-center gap-3">
                <span className="w-4 text-xs font-bold text-muted">{s.initial}</span>
                <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-surface-alt">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-teal to-blue"
                    initial={{ width: 0 }}
                    animate={{ width: step >= 1 ? `${s.pct}%` : 0 }}
                    transition={{ ...springSoft, delay: i * 0.08 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        <motion.div animate={fadeStep(step, 2)} transition={springSoft}>
          <div className="rounded-xl bg-amber-50 px-4 py-3 text-center text-sm font-medium text-amber-900 ring-1 ring-amber-200">
            Worker B — Annual leave (Wed)
          </div>
        </motion.div>

        <GlassCard>
          <p className="mb-2 text-xs font-semibold text-muted">WH&S hours</p>
          <div className="h-3 overflow-hidden rounded-full bg-surface-alt">
            <motion.div
              className="h-full rounded-full bg-blue"
              animate={{ width: step >= 3 ? "72%" : "0%" }}
              transition={springSoft}
            />
          </div>
        </GlassCard>

        <motion.div
          animate={fadeStep(step, 4)}
          transition={springSoft}
          className="flex items-center justify-center gap-2 rounded-xl bg-teal/10 py-3"
        >
          <Check className="h-5 w-5 text-teal" />
          <span className="text-sm font-semibold text-navy">Supervisor approved swap</span>
        </motion.div>
      </div>
    </AnimationFrame>
  );
}
