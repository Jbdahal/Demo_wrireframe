import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

interface CTASectionProps {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref?: string;
  id?: string;
}

export function CTASection({
  title,
  description,
  ctaLabel,
  ctaHref = "/contact",
  id = "cta",
}: CTASectionProps) {
  return (
    <section id={id} className="gradient-brand py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center text-white">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
          <p className="font-body mt-4 text-lg leading-relaxed text-white/85">{description}</p>
          <div className="mt-8">
            <Button href={ctaHref} variant="light">
              {ctaLabel}
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
