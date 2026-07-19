import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { SolutionAudience } from "@/lib/content/solutions";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/ui/FadeIn";

export function SolutionsPageTemplate({ solution }: { solution: SolutionAudience }) {
  return (
    <main>
      <PageHero
        eyebrow={solution.eyebrow}
        headline={solution.headline}
        subheadline={solution.subheadline}
        ctas={[{ label: "Book a Demo", href: "/contact", variant: "light" }]}
        size="compact"
      />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <SectionHeader
              eyebrow="The Challenge"
              title={`What ${solution.audience.toLowerCase()} deal with today`}
              className="mb-12"
            />
          </FadeIn>
          <div className="grid gap-6 md:grid-cols-3">
            {solution.painPoints.map((point, i) => (
              <FadeIn key={point.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-soft-alt bg-soft/30 p-6">
                  <h3 className="text-base font-bold text-darkest">{point.title}</h3>
                  <p className="font-body mt-2 text-sm leading-relaxed text-muted">
                    {point.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-soft/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <SectionHeader
              eyebrow="How Pravaro Helps"
              title={`Built around how ${solution.audience.toLowerCase()} actually work`}
              className="mb-12"
            />
          </FadeIn>
          <div className="grid gap-6 md:grid-cols-3">
            {solution.howWeHelp.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-soft-alt bg-white p-6 shadow-sm">
                  <h3 className="text-base font-bold text-darkest">{item.title}</h3>
                  <p className="font-body mt-2 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2}>
            <div className="mt-12 flex flex-wrap items-center gap-3">
              <span className="text-sm font-semibold text-darkest">Relevant features:</span>
              {solution.relevantFeatures.map((feature) => (
                <Link
                  key={feature.href}
                  href={feature.href}
                  className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-white px-4 py-1.5 text-sm font-medium text-primary transition-colors hover:bg-soft"
                >
                  {feature.label}
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <FadeIn>
            <TestimonialCard
              quote={solution.testimonial.quote}
              attribution={solution.testimonial.attribution}
            />
          </FadeIn>
        </div>
      </section>

      <CTASection
        title={`Ready to see Pravaro in action for ${solution.audience.toLowerCase()}?`}
        description="Book a demo and see how Pravaro fits into your day-to-day."
        ctaLabel="Book a Demo"
      />
    </main>
  );
}
