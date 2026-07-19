import { Building2, CalendarClock, HeartHandshake, Users } from "lucide-react";
import { solutions } from "@/lib/content";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata = {
  title: "Solutions — Pravaro Suite",
  description: "Pravaro for care teams, schedulers, agencies, and administrators.",
};

const icons = {
  careTeams: HeartHandshake,
  schedulers: CalendarClock,
  agencies: Users,
  administrators: Building2,
} as const;

export default function SolutionsHubPage() {
  return (
    <main>
      <PageHero
        eyebrow="Solutions"
        headline="Built around how your team actually works"
        subheadline="Pravaro serves every role in the operation, from the people delivering care to the people keeping it running."
        size="compact"
      />
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {(Object.keys(solutions) as (keyof typeof solutions)[]).map((key, i) => {
              const solution = solutions[key];
              return (
                <FadeIn key={key} delay={i * 0.08}>
                  <FeatureCard
                    icon={icons[key]}
                    title={solution.audience}
                    description={solution.headline}
                    href={`/solutions/${solution.slug}`}
                  />
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
