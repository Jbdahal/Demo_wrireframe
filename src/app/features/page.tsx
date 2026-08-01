import { CalendarRange, Store } from "lucide-react";
import { rosterFeature, marketplaceFeature, featurePlaceholders } from "@/lib/content";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { ComingSoonCard } from "@/components/ui/ComingSoonCard";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata = {
  title: "Features — Pravaro Suite",
  description:
    "Explore the Pravaro Suite: Roster & Scheduling, live today, with Marketplace and more connected NDIS features on the way.",
};

export default function FeaturesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Features"
        headline="The Pravaro Suite"
        subheadline="A growing platform of NDIS software. Roster & Scheduling is live today, with Marketplace and more features on the way."
        size="compact"
      />
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FadeIn>
              <FeatureCard
                icon={CalendarRange}
                title={rosterFeature.name}
                description={rosterFeature.subheadline}
                href="/features/roster"
                status="live"
              />
            </FadeIn>
            <FadeIn delay={0.08}>
              <FeatureCard
                icon={Store}
                title={marketplaceFeature.name}
                description={marketplaceFeature.subheadline}
                href="/features/marketplace"
                status="soon"
              />
            </FadeIn>
            {featurePlaceholders.map((feature, i) => (
              <FadeIn key={feature.slug} delay={(i + 2) * 0.08} className="h-full">
                <ComingSoonCard title={feature.name} description={feature.description} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
