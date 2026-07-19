import { about } from "@/lib/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";

export function StoryTimeline() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <SectionHeader
            eyebrow="Our Journey"
            title="From problem to platform"
            align="center"
            className="mx-auto mb-16"
          />
        </FadeIn>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {about.pillars.map((pillar, i) => (
            <FadeIn key={pillar.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-soft-alt bg-soft/30 p-6">
                <span className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="text-base font-bold text-darkest">{pillar.title}</h3>
                <p className="font-body mt-2 text-sm leading-relaxed text-muted">{pillar.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
