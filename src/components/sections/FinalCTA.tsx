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

        <div className="grid gap-6 md:grid-cols-2 md:items-stretch">
          <FadeIn className="flex">
            <div className="flex flex-1 flex-col rounded-2xl gradient-brand p-8 md:p-9">
              <h3 className="text-xl font-bold text-white md:text-2xl">{finalCta.demo.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-white/85 md:text-base">
                {finalCta.demo.description}
              </p>
              <div className="mt-6">
                <Button variant="light">{finalCta.demo.cta}</Button>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.1} className="flex">
            <div className="flex flex-1 flex-col rounded-2xl border-2 border-teal/30 bg-white p-8 md:p-9">
              <h3 className="text-xl font-bold text-navy md:text-2xl">{finalCta.trial.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted md:text-base">
                {finalCta.trial.description}
              </p>
              <div className="mt-6">
                <Button variant="secondary">{finalCta.trial.cta}</Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
