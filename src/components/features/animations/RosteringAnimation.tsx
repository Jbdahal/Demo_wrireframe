"use client";

import { motion } from "framer-motion";
import { Check, User } from "lucide-react";
import { AnimationFrame, GlassCard, StepLabel, fadeStep } from "../AnimationFrame";
import { spring, springSoft, useFeatureInView } from "../useFeatureInView";

const workers = [
  { name: "Alex", avail: 0.8, color: "#9178c6" },
  { name: "Jordan", avail: 0.55, color: "#5a37a4" },
  { name: "Sam", avail: 0.95, color: "#9178c6" },
];

const days = ["M", "T", "W", "T", "F"];

export function RosteringAnimation() {
  const { step } = useFeatureInView(5);

  return (
    <AnimationFrame label="Smart rostering: matching staff availability to participant requirements">
      <div className="flex h-full flex-col gap-4">
        <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2">
          <GlassCard>
            <StepLabel color="primary">Staff availability</StepLabel>
            <div className="mt-4 space-y-3">
              {workers.map((w, i) => (
                <motion.div
                  key={w.name}
                  animate={fadeStep(step, 0)}
                  transition={{ ...springSoft, delay: i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15">
                    <User className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-medium text-darkest">{w.name}</p>
                    <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-soft-alt">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: w.color }}
                        initial={{ width: 0 }}
                        animate={{ width: step >= 0 ? `${w.avail * 100}%` : 0 }}
                        transition={{ ...spring, delay: 0.2 + i * 0.1 }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassCard>

          <GlassCard>
            <StepLabel color="strong">Client requirements</StepLabel>
            <div className="mt-4 space-y-3">
              {[
                { name: "Participant 1", detail: "Mon 9am · SIL" },
                { name: "Participant 2", detail: "Wed 2pm · Community" },
              ].map((p, i) => (
                <motion.div
                  key={p.name}
                  animate={fadeStep(step, 1)}
                  transition={{ ...springSoft, delay: i * 0.1 }}
                  className="rounded-lg border border-strong/15 bg-strong/[0.04] p-3"
                >
                  <p className="text-sm font-semibold text-darkest">{p.name}</p>
                  <p className="mt-0.5 text-xs text-muted">{p.detail}</p>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </div>

        <motion.div animate={fadeStep(step, 2)} transition={springSoft} className="flex justify-center">
          <motion.div
            animate={step >= 2 ? { scale: [1, 1.06, 1] } : {}}
            transition={{ duration: 1.2, repeat: step >= 2 ? Infinity : 0 }}
            className="rounded-full bg-gradient-to-r from-light/20 to-light/10 px-5 py-2 text-sm font-bold text-light shadow-sm"
          >
            SmartMatch
          </motion.div>
        </motion.div>

        <GlassCard>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-darkest/70">Week roster</p>
          <div className="grid grid-cols-5 gap-2">
            {days.map((day, i) => {
              const filled = step >= 4 && (i === 0 || i === 2);
              return (
                <div key={`${day}-${i}`} className="text-center">
                  <p className="text-[10px] font-medium text-muted">{day}</p>
                  <motion.div
                    animate={{
                      backgroundColor: filled ? "#9178c6" : "#ede6fa",
                      scale: step >= 4 && filled ? 1 : step >= 3 ? 0.95 : 1,
                    }}
                    transition={springSoft}
                    className="mt-1.5 flex aspect-square items-center justify-center rounded-lg"
                  >
                    {step >= 5 && filled && (
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={spring}>
                        <Check className="h-4 w-4 text-white" strokeWidth={3} />
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </GlassCard>
      </div>
    </AnimationFrame>
  );
}
