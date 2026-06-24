import { hero } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { HeroVisual } from "@/components/visuals/HeroVisual";

export function Hero() {
  return (
    <section id="hero" className="gradient-brand relative overflow-hidden text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(20,184,166,0.25),transparent_55%)]" />
      <div className="absolute -left-24 top-1/3 h-64 w-64 rounded-full bg-blue/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24 lg:py-32">
        <FadeIn>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em]">
            <span className="text-teal">Connect</span>
            <span className="text-white/50"> • </span>
            <span className="text-cyan">Empower</span>
            <span className="text-white/50"> • </span>
            <span className="text-purple-300">Flow</span>
          </p>
        </FadeIn>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
                {hero.headline}
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90">
                {hero.subheadline}
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button variant="secondary" className="bg-white text-navy hover:bg-white/90">
                  {hero.ctaProvider}
                </Button>
                <Button variant="outline" className="border-white/80 text-white hover:bg-white/10">
                  {hero.ctaAgency}
                </Button>
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={0.15}>
            <HeroVisual />
          </FadeIn>
        </div>
      </div>
      <div className="wave-divider" />
    </section>
  );
}
