import { comingSoonTeaser, productPlaceholders } from "@/lib/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ComingSoonCard } from "@/components/ui/ComingSoonCard";
import { FadeIn } from "@/components/ui/FadeIn";

export function ComingSoonTeaser() {
  if (productPlaceholders.length === 0) return null;

  return (
    <section id="coming-soon" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <SectionHeader
            eyebrow={comingSoonTeaser.eyebrow}
            title={comingSoonTeaser.title}
            description={comingSoonTeaser.description}
            align="center"
            className="mx-auto mb-12"
          />
        </FadeIn>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productPlaceholders.map((product, i) => (
            <FadeIn key={product.slug} delay={i * 0.08} className="h-full">
              <ComingSoonCard title={product.name} description={product.description} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
