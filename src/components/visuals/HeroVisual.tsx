"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Calendar, Shield, Sparkles, Users } from "lucide-react";
import { springGentle, springSoft } from "@/lib/motion";

const blocks = [
  { icon: Calendar, label: "Rostering", color: "bg-teal/20 text-teal" },
  { icon: Users, label: "Workforce", color: "bg-blue/20 text-blue" },
  { icon: Shield, label: "Compliance", color: "bg-purple/20 text-purple" },
  { icon: Sparkles, label: "AI Assist", color: "bg-cyan/20 text-cyan" },
];

const viewport = { once: true, amount: 0.2 };

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const card = {
  hidden: { opacity: 0, scale: 0.94, y: 12 },
  show: { opacity: 1, scale: 1, y: 0, transition: springSoft },
};

export function HeroVisual() {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
        <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-2 gap-3">
            {blocks.map(({ icon: Icon, label, color }) => (
              <div key={label} className="rounded-xl bg-white/95 p-4 shadow-lg">
                <div className={`mb-3 inline-flex rounded-lg p-2 ${color}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-sm font-semibold text-navy">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-teal/20 via-transparent to-blue/20 blur-2xl" />
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={springGentle}
        className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-md"
      >
        <div className="mb-4 flex items-center justify-between">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-teal-400/80" />
          </div>
          <span className="text-xs font-medium text-white/60">pravaro.app</span>
        </div>
        <motion.div
          className="grid grid-cols-2 gap-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {blocks.map(({ icon: Icon, label, color }) => (
            <motion.div
              key={label}
              variants={card}
              className="rounded-xl bg-white/95 p-4 shadow-lg"
            >
              <div className={`mb-3 inline-flex rounded-lg p-2 ${color}`}>
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-sm font-semibold text-navy">{label}</p>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-surface-alt">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-teal to-blue"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={viewport}
                  style={{ transformOrigin: "left" }}
                  transition={{ ...springGentle, delay: 0.35 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ ...springGentle, delay: 0.5 }}
          className="mt-3 flex items-center justify-between rounded-xl bg-navy/90 px-4 py-3 text-white"
        >
          <span className="text-xs text-white/70">Shifts matched today</span>
          <span className="text-lg font-bold text-teal">24</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
