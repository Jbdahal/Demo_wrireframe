import { featuredTestimonial, trustSignals } from "@/lib/content";
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

        <FadeIn className="mx-auto max-w-2xl">
          <TestimonialCard quote={featuredTestimonial.quote} attribution={featuredTestimonial.attribution} />
        </FadeIn>

        <FadeIn delay={0.2} className="mx-auto mt-14 max-w-2xl text-center">
          <h3 className="text-xl font-bold text-darkest">{trustSignals.switchTitle}</h3>
          <p className="font-body mt-4 leading-relaxed text-muted">{trustSignals.switchBody}</p>
        </FadeIn>
      </div>
    </section>
  );
}
