"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Bell, Shield } from "lucide-react";
import { AnimationFrame, GlassCard, StepLabel, fadeStep } from "../AnimationFrame";
import { springSoft, useFeatureInView } from "../useFeatureInView";

const certs = [
  { name: "WWCC", ok: true },
  { name: "First Aid", ok: false },
  { name: "NDIS Screen", ok: true },
];

const workflow = ["Log", "Review", "Escalate", "Close"];

export function ComplianceAnimation() {
  const { step } = useFeatureInView(5);

  return (
    <AnimationFrame label="Compliance tracking and incident management">
      <div className="flex h-full flex-col gap-4">
        <GlassCard>
          <StepLabel color="teal">Staff compliance</StepLabel>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {certs.map((cert, i) => (
              <motion.div
                key={cert.name}
                animate={fadeStep(step, 0)}
                transition={{ ...springSoft, delay: i * 0.08 }}
                className={`flex flex-col items-center rounded-xl p-3 text-center ${
                  step >= 1 && !cert.ok ? "bg-amber-50 ring-2 ring-amber-300" : "bg-teal/5"
                }`}
              >
                <Shield className={`h-6 w-6 ${cert.ok ? "text-teal" : "text-amber-600"}`} />
                <p className="mt-2 text-xs font-semibold text-navy">{cert.name}</p>
                {step >= 1 && !cert.ok && <AlertTriangle className="mt-1 h-4 w-4 text-amber-500" />}
              </motion.div>
            ))}
          </div>
        </GlassCard>

        <motion.div animate={fadeStep(step, 2)} transition={springSoft} className="flex justify-center">
          <div className="flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2">
            <Bell className="h-4 w-4 text-amber-600" />
            <span className="text-xs font-semibold text-amber-800">Expiry alert sent</span>
          </div>
        </motion.div>

        <motion.div animate={fadeStep(step, 3)} transition={springSoft}>
          <GlassCard className="border-red-100 bg-red-50/80">
            <p className="text-sm font-semibold text-red-800">Incident logged</p>
            <p className="mt-1 text-xs text-red-600">Participant fall — review required</p>
          </GlassCard>
        </motion.div>

        <div className="grid grid-cols-4 gap-2">
          {workflow.map((s, i) => (
            <motion.div
              key={s}
              animate={{
                opacity: step >= 4 ? 1 : 0.35,
                scale: step >= 4 && i <= step - 4 ? 1.02 : 1,
              }}
              transition={{ ...springSoft, delay: i * 0.06 }}
              className={`rounded-lg py-2.5 text-center text-xs font-semibold ${
                step >= 4 && i <= Math.min(step - 4, 3)
                  ? "bg-blue text-white shadow-md"
                  : "bg-white/80 text-muted"
              }`}
            >
              {s}
            </motion.div>
          ))}
        </div>
      </div>
    </AnimationFrame>
  );
}
