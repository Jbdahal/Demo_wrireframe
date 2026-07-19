import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

type ButtonVariant = "primary" | "secondary" | "light" | "outline" | "ghost";

interface HeroCta {
  label: string;
  href: string;
  variant?: ButtonVariant;
  className?: string;
}

interface PageHeroProps {
  eyebrow?: ReactNode;
  headline: ReactNode;
  subheadline?: string;
  ctas?: HeroCta[];
  visual?: ReactNode;
  size?: "large" | "compact";
}

export function PageHero({
  eyebrow,
  headline,
  subheadline,
  ctas = [],
  visual,
  size = "large",
}: PageHeroProps) {
  const paddingY = size === "large" ? "py-16 md:py-24 lg:py-32" : "py-14 md:py-20";

  return (
    <section className="gradient-brand relative overflow-hidden text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(190,159,255,0.3),transparent_55%)]" />
      <div className="absolute -left-24 top-1/3 h-64 w-64 rounded-full bg-strong/20 blur-3xl" />
      <div className={`relative mx-auto max-w-7xl px-6 ${paddingY}`}>
        {eyebrow && (
          <FadeIn>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-light">
              {eyebrow}
            </p>
          </FadeIn>
        )}
        <div
          className={
            visual
              ? "grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
              : "mx-auto max-w-3xl text-center"
          }
        >
          <div>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
                {headline}
              </h1>
            </FadeIn>
            {subheadline && (
              <FadeIn delay={0.2}>
                <p
                  className={`font-body mt-6 text-lg leading-relaxed text-white/90 ${
                    visual ? "max-w-xl" : "mx-auto max-w-2xl"
                  }`}
                >
                  {subheadline}
                </p>
              </FadeIn>
            )}
            {ctas.length > 0 && (
              <FadeIn delay={0.3}>
                <div
                  className={`mt-10 flex flex-col gap-4 sm:flex-row ${
                    visual ? "" : "justify-center"
                  }`}
                >
                  {ctas.map((cta) => (
                    <Button
                      key={cta.label}
                      href={cta.href}
                      variant={cta.variant ?? "light"}
                      className={cta.className}
                    >
                      {cta.label}
                    </Button>
                  ))}
                </div>
              </FadeIn>
            )}
          </div>
          {visual && <FadeIn delay={0.15}>{visual}</FadeIn>}
        </div>
      </div>
      <div className="wave-divider" />
    </section>
  );
}
