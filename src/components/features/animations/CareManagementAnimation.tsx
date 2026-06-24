"use client";

import { motion } from "framer-motion";
import { FileText, Heart, User } from "lucide-react";
import { AnimationFrame, GlassCard, StepLabel, fadeStep } from "../AnimationFrame";
import { spring, springSoft, useFeatureInView } from "../useFeatureInView";

const planItems = ["Care plan", "Goals", "Preferences"];

export function CareManagementAnimation() {
  const { ref, step } = useFeatureInView(5, 1500);

  return (
    <AnimationFrame ref={ref} label="Care management and participant profiles">
      <div className="flex h-full flex-col gap-4">
        <motion.div animate={fadeStep(step, 0)} transition={springSoft}>
          <GlassCard className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue/20 to-teal/20">
              <User className="h-7 w-7 text-blue" />
            </div>
            <div>
              <p className="text-base font-bold text-navy">Sarah M.</p>
              <p className="text-xs text-muted">Participant profile</p>
            </div>
            <Heart className="ml-auto h-5 w-5 text-teal/60" />
          </GlassCard>
        </motion.div>

        <GlassCard>
          <StepLabel color="blue">Support plan</StepLabel>
          <div className="mt-3 space-y-2">
            {planItems.map((item, i) => (
              <motion.div
                key={item}
                animate={fadeStep(step, 1)}
                transition={{ ...springSoft, delay: i * 0.08 }}
                className="flex items-center gap-2 rounded-lg bg-surface px-3 py-2.5"
              >
                <div className="h-2 w-2 rounded-full bg-blue" />
                <span className="text-sm font-medium text-navy">{item}</span>
              </motion.div>
            ))}
          </div>
        </GlassCard>

        <motion.div animate={fadeStep(step, 2)} transition={springSoft}>
          <GlassCard className="flex items-center gap-3 border-teal/20 bg-teal/[0.04]">
            <FileText className="h-5 w-5 text-teal" />
            <div>
              <p className="text-sm font-medium text-navy">Progress note added</p>
              <p className="text-xs text-muted">14 Jun · linked to care plan</p>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div
          animate={fadeStep(step, 4)}
          transition={spring}
          className="rounded-xl bg-gradient-to-r from-blue to-blue/90 px-4 py-3 text-center"
        >
          <p className="text-sm font-semibold text-white">Mon 9am shift — linked</p>
        </motion.div>

        <motion.div
          animate={fadeStep(step, 5)}
          transition={springSoft}
          className="text-center"
        >
          <span className="inline-block rounded-full bg-purple/15 px-4 py-1.5 text-xs font-bold text-purple">
            Preferred worker assigned
          </span>
        </motion.div>
      </div>
    </AnimationFrame>
  );
}
