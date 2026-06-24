import {
  Brain,
  Calendar,
  ClipboardList,
  FileCheck,
  MessageSquare,
  Shield,
  Sparkles,
  Users,
  Wallet,
} from "lucide-react";
import { providers } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";

const capabilityIcons = [
  Users,
  Users,
  Calendar,
  Wallet,
  MessageSquare,
  Shield,
  FileCheck,
  MessageSquare,
  ClipboardList,
  Sparkles,
];

const highlightIcons = {
  continuity: Calendar,
  ai: Brain,
  ndis: Shield,
} as const;

export function ProvidersSection() {
  return (
    <section id="providers" className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <SectionHeader
            eyebrow={providers.eyebrow}
            title={providers.title}
            description={providers.intro}
            align="center"
            className="mx-auto"
          />
        </FadeIn>

        <FadeIn delay={0.1} className="mt-14">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {providers.capabilities.map((cap, i) => {
              const Icon = capabilityIcons[i] ?? Users;
              return (
                <div
                  key={cap}
                  className="flex flex-col items-center rounded-xl bg-white p-4 text-center shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mb-2 rounded-lg bg-gradient-to-br from-teal/10 to-blue/10 p-2.5 text-blue">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-medium leading-tight text-navy">{cap}</span>
                </div>
              );
            })}
          </div>
          <p className="mt-6 text-center text-sm text-muted">{providers.capabilitiesNote}</p>
        </FadeIn>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {providers.highlights.map((item, i) => {
            const Icon = highlightIcons[item.icon as keyof typeof highlightIcons] ?? Shield;
            return (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-white bg-white p-8 shadow-sm">
                  <div className="mb-4 inline-flex rounded-xl bg-teal/10 p-3 text-teal">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-navy">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn className="mt-12 text-center">
          <Button variant="primary">{providers.cta}</Button>
        </FadeIn>
      </div>
    </section>
  );
}
