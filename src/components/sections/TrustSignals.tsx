import { testimonials, trustSignals } from "@/lib/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { FadeIn } from "@/components/ui/FadeIn";

export function TrustSignals() {
  return (
    <section id="trust" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <SectionHeader
            title={trustSignals.title}
            description={trustSignals.intro}
            align="center"
            className="mx-auto mb-12"
          />
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="mb-14 grid grid-cols-3 gap-6 rounded-2xl border border-soft-alt bg-soft/40 p-8 text-center">
            {trustSignals.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-darkest md:text-4xl">{stat.value}</p>
                <p className="font-body mt-1 text-xs leading-snug text-muted md:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((q, i) => (
            <FadeIn key={q.attribution} delay={i * 0.1}>
              <TestimonialCard quote={q.quote} attribution={q.attribution} />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2} className="mx-auto mt-14 max-w-2xl text-center">
          <h3 className="text-xl font-bold text-darkest">{trustSignals.switchTitle}</h3>
          <p className="font-body mt-4 leading-relaxed text-muted">{trustSignals.switchBody}</p>
        </FadeIn>
      </div>
    </section>
  );
}
