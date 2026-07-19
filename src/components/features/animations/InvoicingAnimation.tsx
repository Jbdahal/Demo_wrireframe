"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { AnimationFrame, GlassCard, StepLabel, fadeStep } from "../AnimationFrame";
import { springSoft, useFeatureInView } from "../useFeatureInView";

const lineItems = [
  { client: "Riverside House", amount: "$2,140.00" },
  { client: "Northside Clinic", amount: "$1,865.50" },
  { client: "Eastbank Respite", amount: "$980.00" },
];

export function InvoicingAnimation() {
  const { step } = useFeatureInView(4);

  return (
    <AnimationFrame label="Invoicing generated automatically from completed shifts">
      <div className="flex h-full flex-col gap-4">
        <GlassCard>
          <StepLabel color="primary">Ready to invoice</StepLabel>
          <div className="mt-4 space-y-2.5">
            {lineItems.map((item, i) => (
              <motion.div
                key={item.client}
                animate={fadeStep(step, 0)}
                transition={{ ...springSoft, delay: i * 0.08 }}
                className="flex items-center justify-between text-xs"
              >
                <span className="text-darkest/85">{item.client}</span>
                <span className="font-semibold text-darkest">{item.amount}</span>
              </motion.div>
            ))}
          </div>
        </GlassCard>

        <motion.div animate={fadeStep(step, 1)} transition={springSoft}>
          <GlassCard>
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-muted">Bulk invoice total</span>
              <span className="text-lg font-bold text-darkest">$4,985.50</span>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div
          animate={fadeStep(step, 3)}
          transition={springSoft}
          className="flex items-center justify-center gap-2 rounded-xl bg-primary/10 py-3"
        >
          <FileText className="h-5 w-5 text-primary" />
          <span className="text-sm font-semibold text-darkest">3 invoices generated</span>
        </motion.div>
      </div>
    </AnimationFrame>
  );
}
