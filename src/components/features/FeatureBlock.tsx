"use client";

import { ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useState, type ReactNode } from "react";
import { FeatureInViewProvider } from "@/components/features/featureInView";
import { springGentle } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface FeatureBlockProps {
  number: number;
  title: string;
  description: string;
  subFeatures: readonly string[];
  animation: ReactNode;
  reversed?: boolean;
}

const VISIBLE_COUNT = 4;
const viewport = { once: true, amount: 0.15 };

export function FeatureBlock({
  number,
  title,
  description,
  subFeatures,
  animation,
  reversed = false,
}: FeatureBlockProps) {
  const [expanded, setExpanded] = useState(false);
  const reduced = useReducedMotion();
  const visible = expanded ? subFeatures : subFeatures.slice(0, VISIBLE_COUNT);
  const hasMore = subFeatures.length > VISIBLE_COUNT;

  const motionProps = reduced
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport,
      };

  return (
    <FeatureInViewProvider>
      <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
        <motion.div
          {...motionProps}
          transition={{ ...springGentle, delay: reversed ? 0.12 : 0 }}
          className={cn("min-h-[280px] lg:min-h-[360px]", reversed ? "lg:order-2" : "lg:order-1")}
        >
          {animation}
        </motion.div>
        <motion.div
          {...motionProps}
          transition={{ ...springGentle, delay: reversed ? 0 : 0.12 }}
          className={cn("flex flex-col justify-center", reversed ? "lg:order-1" : "lg:order-2")}
        >
          <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-teal to-blue text-sm font-bold text-white shadow-md">
            {number}
          </span>
          <h3 className="text-2xl font-bold tracking-tight text-navy md:text-3xl">{title}</h3>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">{description}</p>
          <ul className="mt-6 space-y-2.5">
            {visible.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm text-navy/85">
                <span className="h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-teal to-blue" />
                {feature}
              </li>
            ))}
          </ul>
          {hasMore && (
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue hover:text-navy"
            >
              {expanded ? "Show less" : `+${subFeatures.length - VISIBLE_COUNT} more capabilities`}
              <ChevronDown className={cn("h-4 w-4 transition-transform", expanded && "rotate-180")} />
            </button>
          )}
        </motion.div>
      </div>
    </FeatureInViewProvider>
  );
}
