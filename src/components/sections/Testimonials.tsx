import { testimonials } from "@/lib/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { FadeIn } from "@/components/ui/FadeIn";

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <SectionHeader
            title={testimonials.title}
            description={testimonials.intro}
            align="center"
            className="mx-auto mb-12"
          />
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.quotes.map((q, i) => (
            <FadeIn key={q.quote.slice(0, 20)} delay={i * 0.1}>
              <TestimonialCard quote={q.quote} attribution={q.attribution} />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2} className="mx-auto mt-14 max-w-2xl text-center">
          <h3 className="text-xl font-bold text-navy">{testimonials.switchTitle}</h3>
          <p className="mt-4 leading-relaxed text-muted">{testimonials.switchBody}</p>
        </FadeIn>
      </div>
    </section>
  );
}
