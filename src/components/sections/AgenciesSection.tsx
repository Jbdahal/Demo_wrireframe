import { ArrowRight, CheckCircle2 } from "lucide-react";
import { agencies } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";

export function AgenciesSection() {
  return (
    <section id="agencies" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <SectionHeader
            eyebrow={agencies.eyebrow}
            title={agencies.title}
            description={agencies.intro}
            align="center"
            className="mx-auto"
          />
        </FadeIn>

        <FadeIn delay={0.1} className="mt-14">
          <h3 className="mb-8 text-center text-lg font-bold text-navy">{agencies.howItWorks.title}</h3>
          <div className="grid gap-4 md:grid-cols-3">
            {agencies.howItWorks.steps.map((step, i) => (
              <div key={step.label} className="relative rounded-2xl bg-gradient-to-br from-teal/5 to-blue/5 p-6 text-center">
                <span className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                  {i + 1}
                </span>
                <p className="font-semibold text-navy">{step.label}</p>
                <p className="mt-2 text-sm text-muted">{step.desc}</p>
                {i < 2 && (
                  <ArrowRight className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-teal md:block" />
                )}
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.15} className="mt-16">
          <div className="grid gap-4 sm:grid-cols-2">
            {agencies.benefits.items.map((item) => (
              <div key={item.title} className="flex gap-4 rounded-xl border border-surface-alt bg-surface/50 p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                <div>
                  <h4 className="font-semibold text-navy">{item.title}</h4>
                  <p className="mt-1 text-sm text-muted">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-12 rounded-2xl bg-navy p-8 text-white md:p-10">
          <h3 className="text-xl font-bold">{agencies.whoFor.title}</h3>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {agencies.whoFor.items.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-lg bg-white/10 px-4 py-3 text-sm text-white/90">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                {item}
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn className="mt-12 text-center">
          <Button variant="secondary">{agencies.cta}</Button>
        </FadeIn>
      </div>
    </section>
  );
}
