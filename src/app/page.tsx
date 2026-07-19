import { PageHero } from "@/components/sections/PageHero";
import { BrandPromise } from "@/components/sections/BrandPromise";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { ComingSoonTeaser } from "@/components/sections/ComingSoonTeaser";
import { TrustSignals } from "@/components/sections/TrustSignals";
import { CTASection } from "@/components/sections/CTASection";
import { HeroVisual } from "@/components/visuals/HeroVisual";
import { hero } from "@/lib/content";

export default function Home() {
  return (
    <main>
      <PageHero
        eyebrow={hero.eyebrow}
        headline={hero.headline}
        subheadline={hero.subheadline}
        ctas={hero.ctas}
        visual={<HeroVisual />}
      />
      <BrandPromise />
      <ProductShowcase />
      <ComingSoonTeaser />
      <TrustSignals />
      <CTASection
        title="Ready to see Pravaro in action?"
        description="Book a demo and see how the Roster & Scheduling platform brings flow to your operations."
        ctaLabel="Book a Demo"
        ctaHref="/contact"
      />
    </main>
  );
}
