"use client";

import { motion } from "framer-motion";
import { Check, FileText, MapPin } from "lucide-react";
import { AnimationFrame, GlassCard, fadeStep } from "../AnimationFrame";
import { spring, springSoft, useFeatureInView } from "../useFeatureInView";

export function PayrollAnimation() {
  const { ref, step } = useFeatureInView(5, 1500);

  return (
    <AnimationFrame ref={ref} label="Payroll, timesheets and NDIS billing flow">
      <div className="flex h-full flex-col gap-4">
        <GlassCard className="relative overflow-hidden">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted">GPS clock-in</p>
          <div className="relative flex h-28 items-center justify-center rounded-xl bg-gradient-to-br from-surface-alt to-white">
            <motion.div
              animate={fadeStep(step, 0)}
              transition={springSoft}
              className="relative"
            >
              <MapPin className="h-10 w-10 text-teal" />
              {step >= 1 && (
                <motion.div
                  initial={{ scale: 0.5, opacity: 0.8 }}
                  animate={{ scale: 2.2, opacity: 0 }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute inset-0 rounded-full border-2 border-teal/50"
                />
              )}
            </motion.div>
          </div>
        </GlassCard>

        <motion.div animate={fadeStep(step, 2)} transition={springSoft}>
          <GlassCard className="flex items-center justify-between">
            <span className="text-sm font-medium text-navy">Shift 09:00 – 17:00</span>
            <span className="rounded-full bg-teal/15 px-3 py-1 text-sm font-bold text-teal">8.0 hrs</span>
          </GlassCard>
        </motion.div>

        <motion.div animate={fadeStep(step, 3)} transition={springSoft}>
          <div className="flex items-center gap-3 rounded-xl bg-blue/10 px-4 py-3">
            <Check className="h-5 w-5 text-blue" />
            <span className="text-sm font-semibold text-navy">Manager approved</span>
          </div>
        </motion.div>

        <motion.div animate={fadeStep(step, 4)} transition={springSoft}>
          <GlassCard className="flex items-center gap-3">
            <FileText className="h-5 w-5 text-purple" />
            <span className="text-sm font-medium text-navy">NDIS invoice generated</span>
          </GlassCard>
        </motion.div>

        <motion.p
          animate={fadeStep(step, 5)}
          transition={spring}
          className="text-center text-sm font-bold text-teal"
        >
          Synced to Xero →
        </motion.p>
      </div>
    </AnimationFrame>
  );
}
