import { about } from "@/lib/content";
import { PageHero } from "@/components/sections/PageHero";
import { StoryTimeline } from "@/components/sections/StoryTimeline";
import { AIStatement } from "@/components/sections/AIStatement";
import { CTASection } from "@/components/sections/CTASection";
import { AttributeCard } from "@/components/ui/AttributeCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";
import { RotatingWord } from "@/components/ui/RotatingWord";
import { brandAttributes } from "@/components/sections/BrandPromise";

export const metadata = {
  title: "About — Pravaro Suite",
  description: about.subheadline,
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow={about.eyebrow}
        headline={
          <>
            {about.headlinePrefix}
            <br />
            <RotatingWord words={about.headlineWords} />
          </>
        }
        subheadline={about.subheadline}
        size="compact"
      />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <FadeIn>
            <SectionHeader title={about.nameStory.title} className="mb-8" />
          </FadeIn>
          <div className="space-y-5">
            {about.nameStory.paragraphs.map((paragraph, i) => (
              <FadeIn key={paragraph.slice(0, 24)} delay={i * 0.05}>
                <p className="font-body text-lg leading-relaxed text-muted">{paragraph}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <StoryTimeline />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <SectionHeader
              eyebrow="Brand Values"
              title="What Pravaro stands for"
              align="center"
              className="mx-auto mb-16"
            />
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {brandAttributes.map((attribute, i) => (
              <FadeIn key={attribute.title} delay={i * 0.06} className="h-full">
                <AttributeCard {...attribute} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="gradient-brand py-16">
        <div className="mx-auto max-w-2xl px-6 text-center text-white">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-light">
              Our mission
            </p>
            <p className="mt-4 text-2xl font-bold leading-snug md:text-3xl">{about.mission}</p>
          </FadeIn>
        </div>
      </section>

      <AIStatement />

      <CTASection
        title="Want to be part of the story?"
        description="See how Pravaro can bring flow to your operations."
        ctaLabel="Book a Demo"
      />
    </main>
  );
}
