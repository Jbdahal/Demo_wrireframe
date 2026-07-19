"use client";

import { motion } from "framer-motion";
import { type ReactNode, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface AnimationFrameProps {
  label: string;
  children: ReactNode;
  className?: string;
}

export const AnimationFrame = forwardRef<HTMLDivElement, AnimationFrameProps>(
  function AnimationFrame({ label, children, className }, ref) {
    return (
      <div
        ref={ref}
        aria-label={label}
        className={cn(
          "relative flex h-full min-h-[260px] w-full items-stretch justify-center overflow-hidden rounded-2xl",
          "bg-gradient-to-br from-white via-slate-50/80 to-primary/[0.06]",
          "shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_20px_40px_-24px_rgba(66,45,111,0.25)]",
          "ring-1 ring-darkest/[0.06]",
          className
        )}
      >
        <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-10 -left-6 h-28 w-28 rounded-full bg-strong/10 blur-2xl" />
        <div className="relative z-10 flex w-full flex-col justify-center p-5 sm:p-6 md:p-8">
          {children}
        </div>
      </div>
    );
  }
);

export function GlassCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      layout
      className={cn(
        "rounded-xl border border-white/60 bg-white/75 p-4 shadow-sm backdrop-blur-sm",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

export function StepLabel({ children, color = "primary" }: { children: ReactNode; color?: "primary" | "strong" | "light" }) {
  const colors = {
    primary: "bg-primary/15 text-primary",
    strong: "bg-strong/15 text-strong",
    light: "bg-light/15 text-light",
  };
  return (
    <span className={cn("inline-block rounded-full px-3 py-1 text-xs font-semibold", colors[color])}>
      {children}
    </span>
  );
}

export function fadeStep(step: number, target: number) {
  if (step < 0) {
    return { opacity: 0, y: 16, scale: 0.96 };
  }

  return {
    opacity: step >= target ? 1 : 0,
    y: step >= target ? 0 : 16,
    scale: step >= target ? 1 : 0.96,
  };
}
