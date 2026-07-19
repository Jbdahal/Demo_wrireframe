"use client";

import { motion } from "framer-motion";
import { History } from "lucide-react";
import { AnimationFrame, GlassCard, StepLabel, fadeStep } from "../AnimationFrame";
import { springSoft, useFeatureInView } from "../useFeatureInView";

const entries = [
  { time: "09:12", text: "Shift updated by Admin" },
  { time: "09:47", text: "Timesheet approved — Jordan" },
  { time: "10:03", text: "Payrun finalized" },
  { time: "10:15", text: "Compliance document uploaded" },
];

export function AuditLogAnimation() {
  const { step } = useFeatureInView(5);

  return (
    <AnimationFrame label="Audit log tracking activity across the platform">
      <div className="flex h-full flex-col gap-4">
        <GlassCard>
          <StepLabel color="primary">Activity feed</StepLabel>
          <div className="mt-4 space-y-3">
            {entries.map((entry, i) => (
              <motion.div
                key={entry.text}
                animate={fadeStep(step, i)}
                transition={{ ...springSoft, delay: i * 0.05 }}
                className="flex items-start gap-3 text-xs"
              >
                <span className="mt-0.5 shrink-0 font-mono text-[10px] text-muted">
                  {entry.time}
                </span>
                <span className="text-darkest/85">{entry.text}</span>
              </motion.div>
            ))}
          </div>
        </GlassCard>

        <motion.div
          animate={fadeStep(step, 4)}
          transition={springSoft}
          className="flex items-center justify-center gap-2 rounded-xl bg-primary/10 py-3"
        >
          <History className="h-5 w-5 text-primary" />
          <span className="text-sm font-semibold text-darkest">Full history, always accessible</span>
        </motion.div>
      </div>
    </AnimationFrame>
  );
}
