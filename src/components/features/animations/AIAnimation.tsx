"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { AnimationFrame, GlassCard, fadeStep } from "../AnimationFrame";
import { springSoft, useFeatureInView } from "../useFeatureInView";

const workers = [
  { x: 15, label: "W1", match: false },
  { x: 50, label: "W2", match: true },
  { x: 85, label: "W3", match: false },
];

export function AIAnimation() {
  const { ref, step } = useFeatureInView(5, 1500);

  return (
    <AnimationFrame ref={ref} label="AI-powered operations and SmartMatch">
      <div className="flex h-full flex-col gap-4">
        <motion.div
          animate={fadeStep(step, 0)}
          transition={springSoft}
          className="flex justify-center"
        >
          <motion.div
            animate={step >= 0 ? { scale: [1, 1.04, 1] } : {}}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex items-center gap-2 rounded-xl bg-purple/15 px-5 py-2.5 shadow-sm"
          >
            <Sparkles className="h-4 w-4 text-purple" />
            <span className="text-sm font-bold text-purple">Vacant shift</span>
          </motion.div>
        </motion.div>

        <div className="relative flex-1 min-h-[100px]">
          <svg className="h-full w-full" viewBox="0 0 200 100" preserveAspectRatio="xMidYMid meet">
            <motion.circle
              cx="100"
              cy="20"
              r="14"
              fill="#7c3aed"
              animate={{ opacity: step >= 1 ? 1 : 0.3 }}
            />
            {workers.map((w, i) => (
              <g key={w.label}>
                <motion.line
                  x1="100"
                  y1="34"
                  x2={w.x * 2}
                  y2="85"
                  stroke="#7c3aed"
                  strokeWidth="2"
                  strokeOpacity={w.match && step >= 1 ? 1 : 0.2}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: step >= 1 ? 1 : 0 }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                />
                <motion.circle
                  cx={w.x * 2}
                  cy="85"
                  r="16"
                  fill={w.match && step >= 1 ? "#7c3aed" : "#e2e8f0"}
                  animate={{ scale: step >= 1 ? 1 : 0.8 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                />
                <text
                  x={w.x * 2}
                  y="89"
                  textAnchor="middle"
                  className="fill-white text-[10px] font-bold"
                >
                  {w.label}
                </text>
              </g>
            ))}
          </svg>
        </div>

        <motion.div animate={fadeStep(step, 3)} transition={springSoft}>
          <GlassCard>
            <p className="mb-2 text-xs font-semibold text-muted">Document screening</p>
            {[100, 85, 95].map((w, i) => (
              <div key={i} className="mb-2 h-2 overflow-hidden rounded-full bg-surface-alt last:mb-0">
                <motion.div
                  className="h-full rounded-full bg-cyan"
                  animate={{ width: step >= 3 ? `${w}%` : "0%" }}
                  transition={{ delay: i * 0.15, duration: 0.4 }}
                />
              </div>
            ))}
          </GlassCard>
        </motion.div>

        <div className="flex h-16 items-end justify-center gap-2">
          {[35, 55, 42, 70, 48].map((h, i) => (
            <motion.div
              key={i}
              className="w-5 rounded-t-md bg-gradient-to-t from-blue to-blue/70"
              initial={{ height: 0 }}
              animate={{ height: step >= 4 ? h : 0 }}
              transition={{ ...springSoft, delay: i * 0.06 }}
            />
          ))}
        </div>
      </div>
    </AnimationFrame>
  );
}
