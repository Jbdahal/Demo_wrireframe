"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Calendar, ClipboardCheck, Handshake, Send, Shield, Sparkles, Users } from "lucide-react";
import { springGentle, springSoft } from "@/lib/motion";
import { cn } from "@/lib/utils";

const MotionLink = motion.create(Link);

const slides = [
  {
    key: "roster",
    label: "Roster & Scheduling",
    status: "live" as const,
    blocks: [
      {
        icon: Calendar,
        label: "Rostering",
        color: "bg-primary/20 text-primary",
        href: "/products/roster#roster-hub",
      },
      {
        icon: Users,
        label: "Workforce",
        color: "bg-strong/20 text-strong",
        href: "/products/roster#staff-management",
      },
      {
        icon: Shield,
        label: "Compliance",
        color: "bg-light/40 text-strong",
        href: "/products/roster#compliance-monitoring",
      },
      {
        icon: Sparkles,
        label: "AI Assist",
        color: "bg-light/40 text-strong",
        href: "/products/roster#ai-operations",
      },
    ],
    footer: { label: "Shifts matched today", value: "24" },
  },
  {
    key: "marketplace",
    label: "Marketplace",
    status: "soon" as const,
    blocks: [
      {
        icon: Send,
        label: "Vacant Shifts",
        color: "bg-primary/20 text-primary",
        href: "/products/marketplace#vacant-shift-publishing",
      },
      {
        icon: Users,
        label: "Agency Bids",
        color: "bg-strong/20 text-strong",
        href: "/products/marketplace#structured-bid-workflow",
      },
      {
        icon: ClipboardCheck,
        label: "Placements",
        color: "bg-light/40 text-strong",
        href: "/products/marketplace#documented-placements",
      },
      {
        icon: Handshake,
        label: "Agencies",
        color: "bg-light/40 text-strong",
        href: "/products/marketplace#agency-collaboration",
      },
    ],
    footer: { label: "Open shifts today", value: "12" },
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, scale: 0.94, y: 12 },
  show: { opacity: 1, scale: 1, y: 0, transition: springSoft },
};

function BrowserChrome() {
  return (
    <div className="mb-4 flex items-center justify-between">
      <div className="flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-teal-400/80" />
      </div>
      <span className="text-xs font-medium text-white/60">pravaro.com</span>
    </div>
  );
}

function SlideTabs({
  active,
  onSelect,
}: {
  active: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div className="mb-4 flex gap-2">
      {slides.map((slide, i) => (
        <button
          key={slide.key}
          type="button"
          onClick={() => onSelect(i)}
          className={cn(
            "flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors",
            active === i ? "bg-darkest text-white" : "bg-white/10 text-white/70 hover:bg-white/20"
          )}
        >
          {slide.label}
          <span
            className={cn(
              "rounded-full px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide",
              slide.status === "live" ? "bg-primary text-white" : "bg-white/20 text-white/80"
            )}
          >
            {slide.status === "live" ? "Live" : "Soon"}
          </span>
        </button>
      ))}
    </div>
  );
}

function SlideContent({ slide }: { slide: (typeof slides)[number] }) {
  return (
    <>
      <motion.div
        className="grid grid-cols-2 gap-3"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {slide.blocks.map(({ icon: Icon, label, color, href }) => (
          <MotionLink
            key={label}
            href={href}
            variants={card}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="block cursor-pointer rounded-xl bg-white/95 p-4 shadow-lg ring-1 ring-transparent transition-shadow hover:shadow-xl hover:ring-primary/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <div className={`mb-3 inline-flex rounded-lg p-2 ${color}`}>
              <Icon className="h-5 w-5" />
            </div>
            <p className="text-sm font-semibold text-darkest">{label}</p>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-soft-alt">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-primary to-strong"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                style={{ transformOrigin: "left" }}
                transition={{ ...springGentle, delay: 0.35 }}
              />
            </div>
          </MotionLink>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...springGentle, delay: 0.5 }}
        className="mt-3 flex items-center justify-between rounded-xl bg-darkest/90 px-4 py-3 text-white"
      >
        <span className="text-xs text-white/70">{slide.footer.label}</span>
        <span className="text-lg font-bold text-primary">{slide.footer.value}</span>
      </motion.div>
    </>
  );
}

export function HeroVisual() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);

  const slide = slides[active];

  if (reduced) {
    return (
      <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
        <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-md">
          <BrowserChrome />
          <SlideTabs active={active} onSelect={setActive} />
          <SlideContent slide={slide} />
        </div>
      </div>
    );
  }

  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-strong/20 blur-2xl" />
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={springGentle}
        className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-md"
      >
        <BrowserChrome />
        <SlideTabs active={active} onSelect={setActive} />
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.key}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={springGentle}
          >
            <SlideContent slide={slide} />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
