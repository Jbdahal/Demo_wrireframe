export interface ProductPlaceholder {
  slug: string;
  name: string;
  description: string;
}

// Empty until the next unannounced product is ready to tease.
// The /products/[slug] route + generateStaticParams keep working — add
// an entry here to bring back a "Coming Soon" card without any route changes.
export const productPlaceholders: ProductPlaceholder[] = [];
