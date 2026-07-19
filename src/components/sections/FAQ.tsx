import { faq } from "@/lib/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { FadeIn } from "@/components/ui/FadeIn";

export function FAQ() {
  return (
    <section id="faq" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <FadeIn>
          <SectionHeader
            eyebrow="FAQ"
            title="Common questions"
            align="center"
            className="mb-12"
          />
        </FadeIn>
        <FadeIn delay={0.1}>
          <FAQAccordion items={faq} />
        </FadeIn>
      </div>
    </section>
  );
}
