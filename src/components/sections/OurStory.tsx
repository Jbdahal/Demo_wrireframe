import {
  Building2,
  Heart,
  Layers,
  Workflow,
} from "lucide-react";
import { ourStory } from "@/lib/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";

const icons = [Heart, Layers, Workflow, Building2];

export function OurStory() {
  return (
    <section id="our-story" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <SectionHeader
            title={ourStory.title}
            description={ourStory.summary}
            align="center"
            className="mx-auto mb-14"
          />
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ourStory.pillars.map((pillar, i) => {
            const Icon = icons[i] ?? Heart;
            return (
              <FadeIn key={pillar.title} delay={i * 0.08}>
                <div className="group h-full rounded-2xl border border-surface-alt bg-gradient-to-b from-white to-surface/50 p-6 transition-shadow hover:shadow-lg">
                  <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-teal/15 to-blue/15 p-3 text-blue transition-transform group-hover:scale-105">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-navy">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{pillar.text}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.3}>
          <p className="mt-14 text-center text-xl font-semibold text-navy md:text-2xl">
            {ourStory.closer}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
