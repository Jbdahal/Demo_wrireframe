import { notFound } from "next/navigation";
import { featurePlaceholders } from "@/lib/content";
import { PageHero } from "@/components/sections/PageHero";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/sections/CTASection";

export function generateStaticParams() {
  return featurePlaceholders.map((feature) => ({ slug: feature.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const feature = featurePlaceholders.find((p) => p.slug === slug);
  if (!feature) return {};
  return {
    title: `${feature.name} — Coming Soon — Pravaro Suite`,
    description: feature.description,
  };
}

export default async function FeaturePlaceholderPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const feature = featurePlaceholders.find((p) => p.slug === slug);
  if (!feature) notFound();

  return (
    <main>
      <PageHero
        eyebrow={<Badge variant="outline">Coming Soon</Badge>}
        headline={feature.name}
        subheadline={feature.description}
        size="compact"
      />
      <CTASection
        title="Want to be the first to know?"
        description="We'll let you know the moment this feature is ready."
        ctaLabel="Notify Me"
        ctaHref="/contact"
      />
    </main>
  );
}
