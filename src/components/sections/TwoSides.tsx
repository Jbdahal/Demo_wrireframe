import { Building2, Users } from "lucide-react";
import { twoSides } from "@/lib/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/ui/FadeIn";

export function TwoSides() {
  return (
    <section id="two-sides" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <SectionHeader
            title={twoSides.title}
            description={twoSides.description}
            align="center"
            className="mx-auto mb-16"
          />
        </FadeIn>
        <div className="grid gap-8 md:grid-cols-2">
          <FadeIn>
            <div className="h-full rounded-2xl border border-blue/20 bg-gradient-to-br from-blue/5 to-white p-8 shadow-sm">
              <Building2 className="mb-4 h-10 w-10 text-blue" />
              <h3 className="text-xl font-bold text-navy">{twoSides.provider.title}</h3>
              <p className="mt-4 leading-relaxed text-muted">
                {twoSides.provider.description}
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="h-full rounded-2xl border border-teal/20 bg-gradient-to-br from-teal/5 to-white p-8 shadow-sm">
              <Users className="mb-4 h-10 w-10 text-teal" />
              <h3 className="text-xl font-bold text-navy">{twoSides.agency.title}</h3>
              <p className="mt-4 leading-relaxed text-muted">
                {twoSides.agency.description}
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
