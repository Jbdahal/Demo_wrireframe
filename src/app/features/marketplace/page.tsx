import { ClipboardCheck, Handshake, Send, Users } from "lucide-react";
import { marketplaceProduct } from "@/lib/content";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata = {
  title: "Marketplace — Pravaro Suite",
  description: marketplaceProduct.subheadline,
};

const icons = {
  "vacant-shift-publishing": Send,
  "structured-bid-workflow": Users,
  "documented-placements": ClipboardCheck,
  "agency-collaboration": Handshake,
} as const;

export default function MarketplaceProductPage() {
  return (
    <main>
      <PageHero
        eyebrow={<Badge variant="outline">Coming Soon</Badge>}
        headline={marketplaceProduct.headline}
        subheadline={marketplaceProduct.subheadline}
        ctas={[{ label: "Notify Me", href: "/contact", variant: "light" }]}
        size="compact"
      />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <SectionHeader
              eyebrow="What's Included"
              title="Everything in Marketplace"
              align="center"
              className="mx-auto mb-16"
            />
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-2">
            {marketplaceProduct.features.map((feature, i) => (
              <div key={feature.id} id={feature.id} className="scroll-mt-24 h-full">
                <FadeIn delay={i * 0.08} className="h-full">
                  <FeatureCard
                    icon={icons[feature.id as keyof typeof icons]}
                    title={feature.title}
                    description={feature.description}
                  />
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want to be first in line?"
        description="We'll let you know the moment Marketplace is ready to connect your open shifts with the right agencies."
        ctaLabel="Notify Me"
      />
    </main>
  );
}
