"use client";

import { motion } from "framer-motion";
import { Bell, Check, MapPin, Receipt } from "lucide-react";
import { fadeStep } from "../AnimationFrame";
import { spring, springSoft, useFeatureInView } from "../useFeatureInView";

const checklist = ["Notes", "Checklist", "Forms"];

export function MobileAppAnimation() {
  const { step } = useFeatureInView(5);

  return (
    <div
      aria-label="Mobile app for support workers"
      className="flex h-full min-h-[280px] items-center justify-center p-4"
    >
      <motion.div
        animate={fadeStep(step, 0)}
        transition={springSoft}
        className="relative w-[148px] rounded-[2.25rem] border-[5px] border-navy bg-white px-3 pb-4 pt-2 shadow-2xl shadow-navy/25"
      >
        <div className="mx-auto mb-3 h-5 w-[72px] rounded-full bg-navy" />
        <div className="space-y-2.5">
          <motion.div
            animate={fadeStep(step, 0)}
            transition={springSoft}
            className="flex items-center gap-2 rounded-lg bg-blue/10 p-2.5"
          >
            <Bell className="h-3.5 w-3.5 shrink-0 text-blue" />
            <span className="text-[10px] font-semibold leading-tight text-navy">New shift available</span>
          </motion.div>

          <motion.button
            animate={fadeStep(step, 1)}
            transition={spring}
            className="w-full rounded-lg bg-teal py-2 text-[10px] font-bold text-white shadow-md"
          >
            Accept shift
          </motion.button>

          <motion.div animate={fadeStep(step, 2)} transition={springSoft} className="flex justify-center py-1">
            <div className="relative">
              <MapPin className="h-6 w-6 text-teal" />
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

          <div className="space-y-1.5">
            {checklist.map((item, i) => (
              <motion.div
                key={item}
                animate={fadeStep(step, 3 + i)}
                transition={{ ...springSoft, delay: i * 0.05 }}
                className="flex items-center gap-1.5 text-[10px] font-medium text-navy"
              >
                <Check className="h-3 w-3 text-teal" strokeWidth={3} />
                {item}
              </motion.div>
            ))}
          </div>

          <motion.div
            animate={fadeStep(step, 5)}
            transition={springSoft}
            className="flex items-center gap-1.5 rounded-lg bg-purple/10 p-2"
          >
            <Receipt className="h-3.5 w-3.5 text-purple" />
            <span className="text-[10px] font-medium text-navy">Expense submitted</span>
          </motion.div>
        </div>
        <div className="mx-auto mt-3 h-1 w-10 rounded-full bg-navy/15" />
      </motion.div>
    </div>
  );
}
