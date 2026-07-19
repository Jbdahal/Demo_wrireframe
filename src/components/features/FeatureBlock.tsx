"use client";

import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState, type ReactNode } from "react";
import { FeatureInViewProvider } from "@/components/features/featureInView";
import { springGentle } from "@/lib/motion";
import { cn } from "@/lib/utils";

const listItemTransition = { duration: 0.1, ease: [0.4, 0, 1, 1] as const };

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
          <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-strong text-sm font-bold text-white shadow-md">
            {number}
          </span>
          <h3 className="text-2xl font-bold tracking-tight text-darkest md:text-3xl">{title}</h3>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">{description}</p>
          <ul className="mt-6 space-y-2.5">
            <AnimatePresence initial={false}>
              {visible.map((feature) =>
                reduced ? (
                  <li key={feature} className="flex items-center gap-3 text-sm text-darkest/85">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-primary to-strong" />
                    {feature}
                  </li>
                ) : (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={listItemTransition}
                    className="flex items-center gap-3 overflow-hidden text-sm text-darkest/85"
                  >
                    <span className="h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-primary to-strong" />
                    {feature}
                  </motion.li>
                )
              )}
            </AnimatePresence>
          </ul>
          {hasMore && (
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-strong hover:text-darkest"
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
