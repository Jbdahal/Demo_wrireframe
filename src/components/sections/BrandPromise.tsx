import { Compass, Heart, Layers, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AttributeCard } from "@/components/ui/AttributeCard";
import { FadeIn } from "@/components/ui/FadeIn";

export const brandAttributes = [
  {
    icon: Zap,
    title: "Flow Without Friction",
    description: "Operations that feel effortless because the tools work seamlessly beneath them.",
  },
  {
    icon: Layers,
    title: "A Growing Suite",
    description: "An evolving ecosystem of tools, unified and coherent, built to expand as new products join.",
  },
  {
    icon: Compass,
    title: "Clarity at Every Level",
    description: "Plain-English interfaces and transparent workflows, from admin to field staff.",
  },
  {
    icon: Heart,
    title: "Built for the Heroes",
    description:
      "Designed around the needs of frontline care workers, from the people managing shifts to the people showing up for them.",
  },
  {
    icon: ShieldCheck,
    title: "Always on Time",
    description: "Reliability is non-negotiable in care. Pravaro's tools reflect that standard.",
  },
  {
    icon: Sparkles,
    title: "Excellence as a Standard",
    description: "Pravah + Pravara: Swift Excellence. That's the benchmark.",
  },
];

export function BrandPromise() {
  return (
    <section id="brand-promise" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <SectionHeader
            eyebrow="What Pravaro stands for"
            title="Built for NDIS providers."
            align="center"
            className="mx-auto mb-16 md:mb-20"
          />
        </FadeIn>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {brandAttributes.map((attr, i) => (
            <FadeIn key={attr.title} delay={i * 0.06} className="h-full">
              <AttributeCard {...attr} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
