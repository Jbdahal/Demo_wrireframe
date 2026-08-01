import type { ReactNode } from "react";
import { rosterProduct } from "@/lib/content";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { FeatureBlock } from "@/components/features/FeatureBlock";
import { Carousel } from "@/components/ui/Carousel";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/ui/FadeIn";
import { RosteringAnimation } from "@/components/features/animations/RosteringAnimation";
import { WorkforceAnimation } from "@/components/features/animations/WorkforceAnimation";
import { PayrollAnimation } from "@/components/features/animations/PayrollAnimation";
import { MobileAppAnimation } from "@/components/features/animations/MobileAppAnimation";
import { ComplianceAnimation } from "@/components/features/animations/ComplianceAnimation";
import { SiteAssetAnimation } from "@/components/features/animations/SiteAssetAnimation";
import { PayrunAnimation } from "@/components/features/animations/PayrunAnimation";
import { InvoicingAnimation } from "@/components/features/animations/InvoicingAnimation";
import { BulkNotificationsAnimation } from "@/components/features/animations/BulkNotificationsAnimation";
import { AuditLogAnimation } from "@/components/features/animations/AuditLogAnimation";
import { CareManagementAnimation } from "@/components/features/animations/CareManagementAnimation";
import { AIAnimation } from "@/components/features/animations/AIAnimation";

export const metadata = {
  title: "Roster & Scheduling — Pravaro Suite",
  description: rosterProduct.subheadline,
};

const animations: Record<string, ReactNode> = {
  "roster-hub": <RosteringAnimation />,
  "compliance-monitoring": <ComplianceAnimation />,
  "staff-management": <WorkforceAnimation />,
  "site-asset-management": <SiteAssetAnimation />,
  timesheets: <PayrollAnimation />,
  "payrun-management": <PayrunAnimation />,
  invoicing: <InvoicingAnimation />,
  "staff-app": <MobileAppAnimation />,
  "bulk-notifications": <BulkNotificationsAnimation />,
  "audit-log": <AuditLogAnimation />,
};

const bonusAnimations: Record<string, ReactNode> = {
  "care-management": <CareManagementAnimation />,
  "ai-operations": <AIAnimation />,
};

export default function RosterProductPage() {
  return (
    <main>
      <PageHero
        eyebrow={<Badge variant="live">Now Live</Badge>}
        headline={rosterProduct.headline}
        subheadline={rosterProduct.subheadline}
        ctas={[{ label: "Book a Demo", href: "/contact", variant: "light" }]}
        size="compact"
      />

      <section className="bg-soft/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <SectionHeader
              eyebrow="See it in action"
              title="Roster & Scheduling platform"
              align="center"
              className="mx-auto mb-12"
            />
          </FadeIn>
          <FadeIn>
            <Carousel slides={rosterProduct.screenshots} />
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <SectionHeader
              eyebrow="What's Included"
              title="Everything in Roster & Scheduling"
              align="center"
              className="mx-auto mb-16 md:mb-24"
            />
          </FadeIn>
          <div className="space-y-20 md:space-y-28">
            {rosterProduct.features.map((feature, index) => (
              <div key={feature.id} id={feature.id} className="scroll-mt-24">
                <FeatureBlock
                  number={feature.number}
                  title={feature.title}
                  description={feature.description}
                  subFeatures={feature.subFeatures}
                  animation={animations[feature.id]}
                  reversed={index % 2 === 1}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-soft/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <SectionHeader
              eyebrow="Also Included"
              title="Beyond the core toolkit"
              align="center"
              className="mx-auto mb-16"
            />
          </FadeIn>
          <div className="space-y-20">
            {rosterProduct.bonusFeatures.map((feature, index) => (
              <div key={feature.id} id={feature.id} className="scroll-mt-24">
                <FeatureBlock
                  number={rosterProduct.features.length + index + 1}
                  title={feature.title}
                  description={feature.description}
                  subFeatures={[]}
                  animation={bonusAnimations[feature.id]}
                  reversed={index % 2 === 1}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to bring flow to your operations?"
        description="See Roster & Scheduling in action with a personalized demo."
        ctaLabel="Book a Demo"
      />
    </main>
  );
}
