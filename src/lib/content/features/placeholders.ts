export interface FeaturePlaceholder {
  slug: string;
  name: string;
  description: string;
}

// Empty until the next unannounced feature is ready to tease.
// The /features/[slug] route + generateStaticParams keep working — add
// an entry here to bring back a "Coming Soon" card without any route changes.
export const featurePlaceholders: FeaturePlaceholder[] = [];
