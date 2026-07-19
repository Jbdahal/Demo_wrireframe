"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { AnimationFrame, GlassCard, StepLabel, fadeStep } from "../AnimationFrame";
import { springSoft, useFeatureInView } from "../useFeatureInView";

const timesheets = [
  { name: "Alex", hours: "38.5h", pay: "$1,155.00" },
  { name: "Jordan", hours: "42.0h", pay: "$1,344.00" },
  { name: "Sam", hours: "35.25h", pay: "$1,057.50" },
];

export function PayrunAnimation() {
  const { step } = useFeatureInView(4);

  return (
    <AnimationFrame label="Payrun management from approved timesheets to finalized pay">
      <div className="flex h-full flex-col gap-4">
        <GlassCard>
          <StepLabel color="primary">Approved timesheets</StepLabel>
          <div className="mt-4 space-y-2.5">
            {timesheets.map((t, i) => (
              <motion.div
                key={t.name}
                animate={fadeStep(step, 0)}
                transition={{ ...springSoft, delay: i * 0.08 }}
                className="flex items-center justify-between text-xs"
              >
                <span className="text-darkest/85">
                  {t.name} — {t.hours}
                </span>
                <span className="font-semibold text-darkest">{t.pay}</span>
              </motion.div>
            ))}
          </div>
        </GlassCard>

        <motion.div animate={fadeStep(step, 1)} transition={springSoft}>
          <GlassCard>
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-muted">Payrun total</span>
              <span className="text-lg font-bold text-darkest">$3,556.50</span>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div
          animate={fadeStep(step, 3)}
          transition={springSoft}
          className="flex items-center justify-center gap-2 rounded-xl bg-primary/10 py-3"
        >
          <Check className="h-5 w-5 text-primary" />
          <span className="text-sm font-semibold text-darkest">Payrun finalized</span>
        </motion.div>
      </div>
    </AnimationFrame>
  );
}
