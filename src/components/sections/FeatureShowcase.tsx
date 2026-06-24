import { features } from "@/lib/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FeatureBlock } from "@/components/features/FeatureBlock";
import { RosteringAnimation } from "@/components/features/animations/RosteringAnimation";
import { ComplianceAnimation } from "@/components/features/animations/ComplianceAnimation";
import { CareManagementAnimation } from "@/components/features/animations/CareManagementAnimation";
import { PayrollAnimation } from "@/components/features/animations/PayrollAnimation";
import { WorkforceAnimation } from "@/components/features/animations/WorkforceAnimation";
import { AIAnimation } from "@/components/features/animations/AIAnimation";
import { MobileAppAnimation } from "@/components/features/animations/MobileAppAnimation";
import { FadeIn } from "@/components/ui/FadeIn";

const animations = {
  rostering: <RosteringAnimation />,
  compliance: <ComplianceAnimation />,
  care: <CareManagementAnimation />,
  payroll: <PayrollAnimation />,
  workforce: <WorkforceAnimation />,
  ai: <AIAnimation />,
  mobile: <MobileAppAnimation />,
} as const;

export function FeatureShowcase() {
  return (
    <section id="features" className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <SectionHeader
            eyebrow="Platform Features"
            title="Everything you need to run NDIS operations"
            description="Seven connected capabilities — each designed around the real workflows NDIS providers use every day."
            align="center"
            className="mb-16 md:mb-24"
          />
        </FadeIn>
        <div className="space-y-20 md:space-y-28">
          {features.map((feature, index) => (
            <div key={feature.id} id={`feature-${feature.id}`}>
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
  );
}
