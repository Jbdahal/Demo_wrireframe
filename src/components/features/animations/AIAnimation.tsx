"use client";

import { motion } from "framer-motion";
import { BarChart3, Sparkles, TrendingUp } from "lucide-react";
import { AnimationFrame, GlassCard, StepLabel, fadeStep } from "../AnimationFrame";
import { springSoft, useFeatureInView } from "../useFeatureInView";

const workers = [
  { x: 15, label: "W1", match: false },
  { x: 50, label: "W2", match: true },
  { x: 85, label: "W3", match: false },
];

const reportMetrics = [
  { label: "Shifts filled", value: "94%", width: "94%", color: "bg-teal" },
  { label: "Compliance rate", value: "98%", width: "98%", color: "bg-blue" },
  { label: "Open vacancies", value: "3", width: "35%", color: "bg-amber-400" },
];

export function AIAnimation() {
  const { step } = useFeatureInView(5);

  return (
    <AnimationFrame label="AI-powered operations and SmartMatch">
      <div className="flex h-full flex-col gap-4">
        <motion.div animate={fadeStep(step, 0)} transition={springSoft} className="flex justify-center">
          <motion.div
            animate={step >= 0 ? { scale: [1, 1.04, 1] } : {}}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex items-center gap-2 rounded-xl bg-purple/15 px-5 py-2.5 shadow-sm"
          >
            <Sparkles className="h-4 w-4 text-purple" />
            <span className="text-sm font-bold text-purple">Vacant shift detected</span>
          </motion.div>
        </motion.div>

        <div className="relative min-h-[100px] flex-1">
          <p className="mb-2 text-center text-[10px] font-semibold uppercase tracking-wide text-muted">
            SmartMatch
          </p>
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
                  strokeOpacity={w.match && step >= 2 ? 1 : 0.2}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: step >= 1 ? 1 : 0 }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                />
                <motion.circle
                  cx={w.x * 2}
                  cy="85"
                  r="16"
                  fill={w.match && step >= 2 ? "#7c3aed" : "#e2e8f0"}
                  animate={{ scale: step >= 1 ? 1 : 0.8 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                />
                <text x={w.x * 2} y="89" textAnchor="middle" className="fill-white text-[10px] font-bold">
                  {w.label}
                </text>
              </g>
            ))}
          </svg>
          {step >= 2 && (
            <motion.p
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={springSoft}
              className="text-center text-[10px] font-semibold text-purple"
            >
              Best match: Worker W2
            </motion.p>
          )}
        </div>

        <motion.div animate={fadeStep(step, 3)} transition={springSoft}>
          <GlassCard>
            <StepLabel color="blue">Document screening</StepLabel>
            <div className="mt-3 space-y-2">
              {["WWCC verified", "First Aid current", "NDIS screening clear"].map((doc, i) => (
                <div key={doc} className="flex items-center justify-between text-xs">
                  <span className="text-navy/80">{doc}</span>
                  <motion.span
                    animate={{ opacity: step >= 3 ? 1 : 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="font-semibold text-teal"
                  >
                    ✓
                  </motion.span>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        <motion.div animate={fadeStep(step, 4)} transition={springSoft}>
          <GlassCard>
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-blue" />
                <p className="text-xs font-semibold text-navy">Weekly operations report</p>
              </div>
              <TrendingUp className="h-4 w-4 text-teal" />
            </div>
            <div className="space-y-2.5">
              {reportMetrics.map((metric, i) => (
                <div key={metric.label}>
                  <div className="mb-1 flex items-center justify-between text-[10px]">
                    <span className="font-medium text-muted">{metric.label}</span>
                    <motion.span
                      animate={{ opacity: step >= 4 ? 1 : 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="font-bold text-navy"
                    >
                      {metric.value}
                    </motion.span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-surface-alt">
                    <motion.div
                      className={`h-full rounded-full ${metric.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: step >= 4 ? metric.width : 0 }}
                      transition={{ ...springSoft, delay: 0.1 + i * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
            {step >= 5 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={springSoft}
                className="mt-3 flex items-center gap-1.5 text-[10px] font-medium text-purple"
              >
                <Sparkles className="h-3 w-3" />
                AI insight: 2 shifts at risk this week
              </motion.p>
            )}
          </GlassCard>
        </motion.div>
      </div>
    </AnimationFrame>
  );
}
