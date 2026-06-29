"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowRight, Building2, Check, Phone, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { challenge } from "@/lib/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";
import { springGentle, springSoft } from "@/lib/motion";
import { cn } from "@/lib/utils";

const steps = [
  "Vacant shift posted",
  "Agencies notified",
  "Bid submitted",
  "Placement confirmed",
];

export function ChallengeFlow() {
  return (
    <section id="challenge" className="bg-surface-alt py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <SectionHeader
            title={challenge.title}
            description={challenge.summary}
            align="center"
            className="mx-auto mb-14"
          />
        </FadeIn>

        <ChallengeStage />
      </div>
    </section>
  );
}

function ChallengeStage() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25, margin: "0px 0px -48px 0px" });
  const reduced = useReducedMotion();
  const [step, setStep] = useState(-1);

  useEffect(() => {
    if (reduced) {
      setStep(steps.length + 1);
      return;
    }
    if (!inView) return;

    setStep(0);
    const timeouts = steps.map((_, i) =>
      setTimeout(() => setStep(i + 1), 700 * (i + 1))
    );
    timeouts.push(setTimeout(() => setStep(steps.length + 1), 700 * (steps.length + 1)));

    return () => timeouts.forEach(clearTimeout);
  }, [inView, reduced]);

  const connected = step >= steps.length;

  return (
    <FadeIn delay={0.1}>
      <div ref={ref} className="mx-auto max-w-5xl">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
          <PartyCard
            title="Providers"
            subtitle="Scrambling to fill shifts"
            icon={Users}
            tone="blue"
            active={step >= 1}
            alert={step === 0}
          />

          <div className="relative flex flex-col items-center gap-3 py-4 lg:py-0">
            <motion.div
              animate={{
                opacity: step < 0 ? 0 : step === 0 ? 1 : 0.35,
                scale: step === 0 ? 1 : 0.92,
              }}
              transition={springSoft}
              className="absolute inset-x-0 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-2 lg:flex"
            >
              <Phone className="h-5 w-5 text-amber-500" />
              <div className="h-px w-20 bg-amber-300" />
              <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                Manual coordination
              </span>
            </motion.div>

            <motion.div
              animate={{
                opacity: step >= 1 ? 1 : 0,
                scale: step >= 1 ? 1 : 0.9,
                y: step >= 1 ? 0 : 12,
              }}
              transition={springGentle}
              className="relative z-10 w-full max-w-[220px] rounded-2xl border border-teal/30 bg-white p-4 shadow-lg shadow-teal/10"
            >
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-teal to-blue">
                  <Building2 className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-navy">Pravaro</p>
                  <p className="text-[10px] text-muted">Shift Marketplace</p>
                </div>
              </div>
              <div className="space-y-2">
                {steps.map((label, i) => (
                  <motion.div
                    key={label}
                    animate={{
                      opacity: step > i ? 1 : 0.35,
                      x: step > i ? 0 : -6,
                    }}
                    transition={{ ...springSoft, delay: i * 0.04 }}
                    className={cn(
                      "flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-[11px] font-medium",
                      step > i ? "bg-teal/10 text-navy" : "bg-surface-alt text-muted"
                    )}
                  >
                    {step > i ? (
                      <Check className="h-3 w-3 shrink-0 text-teal" strokeWidth={3} />
                    ) : (
                      <span className="h-3 w-3 shrink-0 rounded-full border border-muted/40" />
                    )}
                    {label}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              animate={{ opacity: connected ? 1 : 0, y: connected ? 0 : 8 }}
              transition={springSoft}
              className="hidden items-center gap-1 text-teal lg:flex"
            >
              <ArrowRight className="h-4 w-4" />
              <span className="text-[10px] font-semibold uppercase tracking-wider">In-platform flow</span>
            </motion.div>
          </div>

          <PartyCard
            title="Agencies"
            subtitle="Workers idle, waiting for referrals"
            icon={Users}
            tone="teal"
            active={step >= 3}
            alert={step === 0}
          />
        </div>

        <motion.p
          animate={{ opacity: connected ? 1 : 0.5 }}
          transition={springGentle}
          className="mt-10 text-center text-lg font-semibold text-navy"
        >
          {challenge.closer}
        </motion.p>
      </div>
    </FadeIn>
  );
}

function PartyCard({
  title,
  subtitle,
  icon: Icon,
  tone,
  active,
  alert,
}: {
  title: string;
  subtitle: string;
  icon: typeof Users;
  tone: "blue" | "teal";
  active: boolean;
  alert: boolean;
}) {
  const colors = {
    blue: { bg: "bg-blue/15", text: "text-blue", ring: "ring-blue/20" },
    teal: { bg: "bg-teal/15", text: "text-teal", ring: "ring-teal/20" },
  };
  const c = colors[tone];

  return (
    <motion.div
      animate={{
        opacity: alert ? 1 : active ? 1 : 0.7,
        scale: active ? 1 : 0.97,
      }}
      transition={springSoft}
      className={cn(
        "rounded-2xl bg-white p-6 text-center shadow-sm ring-1",
        active ? c.ring : "ring-transparent"
      )}
    >
      <div className={cn("mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full", c.bg, c.text)}>
        <Icon className="h-6 w-6" />
      </div>
      <p className="font-semibold text-navy">{title}</p>
      <p className="mt-1 text-xs text-muted">{subtitle}</p>
      {active && (
        <motion.span
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={springSoft}
          className="mt-3 inline-block rounded-full bg-teal/10 px-3 py-1 text-[10px] font-semibold text-teal"
        >
          Connected via Pravaro
        </motion.span>
      )}
    </motion.div>
  );
}
