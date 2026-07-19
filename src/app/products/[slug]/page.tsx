import { notFound } from "next/navigation";
import { productPlaceholders } from "@/lib/content";
import { PageHero } from "@/components/sections/PageHero";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/sections/CTASection";

export function generateStaticParams() {
  return productPlaceholders.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = productPlaceholders.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.name} — Coming Soon — Pravaro Suite`,
    description: product.description,
  };
}

export default async function ProductPlaceholderPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = productPlaceholders.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <main>
      <PageHero
        eyebrow={<Badge variant="outline">Coming Soon</Badge>}
        headline={product.name}
        subheadline={product.description}
        size="compact"
      />
      <CTASection
        title="Want to be the first to know?"
        description="We'll let you know the moment this product is ready."
        ctaLabel="Notify Me"
        ctaHref="/contact"
      />
    </main>
  );
}
