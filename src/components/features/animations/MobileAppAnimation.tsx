"use client";

import { motion } from "framer-motion";
import { Bell, Check, MapPin, Receipt } from "lucide-react";
import { fadeStep } from "../AnimationFrame";
import { spring, springSoft, useFeatureInView } from "../useFeatureInView";

const checklist = ["Notes", "Checklist", "Forms"];

export function MobileAppAnimation() {
  const { ref, step } = useFeatureInView(5, 1500);

  return (
    <div
      ref={ref}
      aria-label="Mobile app for support workers"
      className="flex h-full min-h-[260px] items-center justify-center p-4 md:min-h-[320px]"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={springSoft}
        className="relative w-full max-w-[200px] rounded-[2rem] border-[6px] border-navy bg-white p-4 shadow-2xl shadow-navy/20 sm:max-w-[220px]"
      >
        <div className="mx-auto mb-4 h-1.5 w-14 rounded-full bg-navy/15" />
        <div className="space-y-3">
          <motion.div
            animate={fadeStep(step, 0)}
            transition={springSoft}
            className="flex items-center gap-2 rounded-xl bg-blue/10 p-3"
          >
            <Bell className="h-4 w-4 shrink-0 text-blue" />
            <span className="text-xs font-semibold text-navy">New shift available</span>
          </motion.div>

          <motion.button
            animate={fadeStep(step, 1)}
            transition={spring}
            className="w-full rounded-xl bg-teal py-2.5 text-xs font-bold text-white shadow-md"
          >
            Accept shift
          </motion.button>

          <motion.div
            animate={fadeStep(step, 2)}
            transition={springSoft}
            className="flex justify-center py-2"
          >
            <div className="relative">
              <MapPin className="h-8 w-8 text-teal" />
              {step >= 2 && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0.6 }}
                  animate={{ scale: 1.8, opacity: 0 }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                  className="absolute inset-0 rounded-full border-2 border-teal/40"
                />
              )}
            </div>
          </motion.div>

          <div className="space-y-2">
            {checklist.map((item, i) => (
              <motion.div
                key={item}
                animate={fadeStep(step, 3 + i)}
                transition={{ ...springSoft, delay: i * 0.05 }}
                className="flex items-center gap-2 text-xs font-medium text-navy"
              >
                <Check className="h-3.5 w-3.5 text-teal" strokeWidth={3} />
                {item}
              </motion.div>
            ))}
          </div>

          <motion.div
            animate={fadeStep(step, 5)}
            transition={springSoft}
            className="flex items-center gap-2 rounded-lg bg-purple/10 p-2.5"
          >
            <Receipt className="h-4 w-4 text-purple" />
            <span className="text-xs font-medium text-navy">Expense submitted</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
