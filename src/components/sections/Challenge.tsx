import { ArrowRight, Phone, Users } from "lucide-react";
import { challenge } from "@/lib/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";

export function Challenge() {
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

        <FadeIn delay={0.1}>
          <div className="mx-auto max-w-4xl">
            <div className="grid items-center gap-6 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
              <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue/15 text-blue">
                  <Users className="h-6 w-6" />
                </div>
                <p className="font-semibold text-navy">Providers</p>
                <p className="mt-1 text-xs text-muted">Scrambling to fill shifts</p>
              </div>

              <div className="hidden flex-col items-center gap-1 md:flex">
                <Phone className="h-5 w-5 text-amber-500" />
                <div className="h-px w-16 bg-amber-300" />
                <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                  Gap
                </span>
              </div>

              <div className="rounded-2xl border-2 border-dashed border-amber-300 bg-amber-50 p-6 text-center">
                <p className="text-sm font-bold text-amber-800">Coordination breakdown</p>
                <p className="mt-2 text-xs text-amber-700/80">
                  Phone calls, emails, spreadsheets — participants feel the disruption
                </p>
              </div>

              <div className="hidden flex-col items-center md:flex">
                <ArrowRight className="h-5 w-5 text-teal" />
              </div>

              <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-teal/15 text-teal">
                  <Users className="h-6 w-6" />
                </div>
                <p className="font-semibold text-navy">Agencies</p>
                <p className="mt-1 text-xs text-muted">Workers idle, waiting for referrals</p>
              </div>
            </div>

            <p className="mt-10 text-center text-lg font-semibold text-navy">
              {challenge.closer}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
