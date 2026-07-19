"use client";

import { motion } from "framer-motion";
import { Check, MapPin, Package } from "lucide-react";
import { AnimationFrame, GlassCard, StepLabel, fadeStep } from "../AnimationFrame";
import { springSoft, useFeatureInView } from "../useFeatureInView";

const sites = [
  { name: "Riverside House", assets: 12 },
  { name: "Northside Clinic", assets: 8 },
  { name: "Eastbank Respite", assets: 5 },
];

const assets = [
  { label: "Hoist — Room 3", status: "Serviced" },
  { label: "Wheelchair Van", status: "Serviced" },
  { label: "First Aid Kit A2", status: "Due for check" },
];

export function SiteAssetAnimation() {
  const { step } = useFeatureInView(4);

  return (
    <AnimationFrame label="Site and asset management across multiple locations">
      <div className="flex h-full flex-col gap-4">
        <GlassCard>
          <StepLabel color="primary">Sites</StepLabel>
          <div className="mt-4 space-y-2.5">
            {sites.map((site, i) => (
              <motion.div
                key={site.name}
                animate={fadeStep(step, 0)}
                transition={{ ...springSoft, delay: i * 0.08 }}
                className="flex items-center justify-between gap-3 rounded-lg bg-soft/60 px-3 py-2"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-xs font-medium text-darkest">{site.name}</span>
                </div>
                <span className="text-[10px] font-semibold text-muted">{site.assets} assets</span>
              </motion.div>
            ))}
          </div>
        </GlassCard>

        <GlassCard>
          <StepLabel color="strong">Asset tracking</StepLabel>
          <div className="mt-4 space-y-2.5">
            {assets.map((asset, i) => (
              <motion.div
                key={asset.label}
                animate={fadeStep(step, 2)}
                transition={{ ...springSoft, delay: i * 0.08 }}
                className="flex items-center justify-between gap-3 text-xs"
              >
                <div className="flex items-center gap-2">
                  <Package className="h-3.5 w-3.5 text-muted" />
                  <span className="text-darkest/85">{asset.label}</span>
                </div>
                <span
                  className={
                    asset.status === "Serviced"
                      ? "font-semibold text-primary"
                      : "font-semibold text-amber-600"
                  }
                >
                  {asset.status}
                </span>
              </motion.div>
            ))}
          </div>
        </GlassCard>

        <motion.div
          animate={fadeStep(step, 3)}
          transition={springSoft}
          className="flex items-center justify-center gap-2 rounded-xl bg-primary/10 py-3"
        >
          <Check className="h-5 w-5 text-primary" />
          <span className="text-sm font-semibold text-darkest">All sites compliant</span>
        </motion.div>
      </div>
    </AnimationFrame>
  );
}
