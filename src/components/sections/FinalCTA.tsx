import { finalCta } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function FinalCTA() {
  return (
    <section id="cta" className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div id="pricing" className="mb-12 text-center">
          <FadeIn>
            <h2 className="text-2xl font-bold text-navy">{finalCta.pricing.title}</h2>
            <p className="mt-3 text-muted">{finalCta.pricing.description}</p>
            <div className="mt-6">
              <Button variant="outline">{finalCta.pricing.cta}</Button>
            </div>
          </FadeIn>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <FadeIn>
            <div className="rounded-2xl gradient-brand p-8 text-white md:p-10">
              <h3 className="text-2xl font-bold">{finalCta.demo.title}</h3>
              <p className="mt-4 leading-relaxed text-white/85">{finalCta.demo.description}</p>
              <div className="mt-8">
                <Button variant="secondary" className="bg-white text-navy hover:bg-white/90">
                  {finalCta.demo.cta}
                </Button>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="rounded-2xl border-2 border-teal/30 bg-white p-8 md:p-10">
              <h3 className="text-2xl font-bold text-navy">{finalCta.trial.title}</h3>
              <p className="mt-4 leading-relaxed text-muted">{finalCta.trial.description}</p>
              <div className="mt-8">
                <Button variant="secondary">{finalCta.trial.cta}</Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
