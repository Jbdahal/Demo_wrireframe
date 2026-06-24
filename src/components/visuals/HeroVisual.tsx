"use client";

import { motion } from "framer-motion";
import { Calendar, Shield, Sparkles, Users } from "lucide-react";

const blocks = [
  { icon: Calendar, label: "Rostering", color: "bg-teal/20 text-teal", delay: 0 },
  { icon: Users, label: "Workforce", color: "bg-blue/20 text-blue", delay: 0.15 },
  { icon: Shield, label: "Compliance", color: "bg-purple/20 text-purple", delay: 0.3 },
  { icon: Sparkles, label: "AI Assist", color: "bg-cyan/20 text-cyan", delay: 0.45 },
];

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-teal/20 via-transparent to-blue/20 blur-2xl" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
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
        <div className="grid grid-cols-2 gap-3">
          {blocks.map(({ icon: Icon, label, color, delay }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + delay, type: "spring", stiffness: 200 }}
              className="rounded-xl bg-white/95 p-4 shadow-lg"
            >
              <div className={`mb-3 inline-flex rounded-lg p-2 ${color}`}>
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-sm font-semibold text-navy">{label}</p>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-surface-alt">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-teal to-blue"
                  initial={{ width: "0%" }}
                  animate={{ width: "78%" }}
                  transition={{ delay: 0.8 + delay, duration: 0.8 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-3 flex items-center justify-between rounded-xl bg-navy/90 px-4 py-3 text-white"
        >
          <span className="text-xs text-white/70">Shifts matched today</span>
          <span className="text-lg font-bold text-teal">24</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
