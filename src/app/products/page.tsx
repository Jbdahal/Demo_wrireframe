import { CalendarRange, Store } from "lucide-react";
import { rosterProduct, marketplaceProduct, productPlaceholders } from "@/lib/content";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { ComingSoonCard } from "@/components/ui/ComingSoonCard";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata = {
  title: "Products — Pravaro Suite",
  description:
    "Explore the Pravaro Suite: Roster & Scheduling, live today, with Marketplace and more connected healthcare products on the way.",
};

export default function ProductsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Products"
        headline="The Pravaro Suite"
        subheadline="A growing platform of healthcare software. Roster & Scheduling is live today, with Marketplace and more products on the way."
        size="compact"
      />
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FadeIn>
              <FeatureCard
                icon={CalendarRange}
                title={rosterProduct.name}
                description={rosterProduct.subheadline}
                href="/products/roster"
                status="live"
              />
            </FadeIn>
            <FadeIn delay={0.08}>
              <FeatureCard
                icon={Store}
                title={marketplaceProduct.name}
                description={marketplaceProduct.subheadline}
                href="/products/marketplace"
                status="soon"
              />
            </FadeIn>
            {productPlaceholders.map((product, i) => (
              <FadeIn key={product.slug} delay={(i + 2) * 0.08} className="h-full">
                <ComingSoonCard title={product.name} description={product.description} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
