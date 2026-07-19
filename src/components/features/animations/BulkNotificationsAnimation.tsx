"use client";

import { motion } from "framer-motion";
import { Bell, Mail, MessageSquare, Smartphone } from "lucide-react";
import { AnimationFrame, GlassCard, StepLabel, fadeStep } from "../AnimationFrame";
import { springSoft, useFeatureInView } from "../useFeatureInView";

const channels = [
  { icon: MessageSquare, label: "SMS", recipients: 24 },
  { icon: Mail, label: "Email", recipients: 24 },
  { icon: Smartphone, label: "Push", recipients: 18 },
];

export function BulkNotificationsAnimation() {
  const { step } = useFeatureInView(4);

  return (
    <AnimationFrame label="Bulk notifications sent across SMS, email, and push">
      <div className="flex h-full flex-col gap-4">
        <motion.div animate={fadeStep(step, 0)} transition={springSoft} className="flex justify-center">
          <div className="flex items-center gap-2 rounded-xl bg-primary/15 px-5 py-2.5">
            <Bell className="h-4 w-4 text-primary" />
            <span className="text-sm font-bold text-primary">Shift change alert</span>
          </div>
        </motion.div>

        <GlassCard>
          <StepLabel color="strong">Sent via</StepLabel>
          <div className="mt-4 space-y-3">
            {channels.map((c, i) => (
              <motion.div
                key={c.label}
                animate={fadeStep(step, 1)}
                transition={{ ...springSoft, delay: i * 0.1 }}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <c.icon className="h-4 w-4 text-muted" />
                  <span className="text-xs font-medium text-darkest">{c.label}</span>
                </div>
                <motion.span
                  animate={{ opacity: step >= 2 ? 1 : 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-xs font-semibold text-primary"
                >
                  {c.recipients} delivered
                </motion.span>
              </motion.div>
            ))}
          </div>
        </GlassCard>

        <motion.div
          animate={fadeStep(step, 3)}
          transition={springSoft}
          className="flex items-center justify-center gap-2 rounded-xl bg-primary/10 py-3"
        >
          <Bell className="h-5 w-5 text-primary" />
          <span className="text-sm font-semibold text-darkest">All recipients notified</span>
        </motion.div>
      </div>
    </AnimationFrame>
  );
}
