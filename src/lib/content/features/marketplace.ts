export interface MarketplaceFeature {
  id: string;
  title: string;
  description: string;
}

export const marketplaceProduct = {
  slug: "marketplace",
  name: "Marketplace",
  status: "soon" as const,
  eyebrow: "Coming Soon",
  headline: "Marketplace",
  subheadline:
    "Publish vacant shifts to partner agencies and fill gaps fast, a structured, documented alternative to phone calls and cold outreach. Coming soon to the Pravaro Suite.",
  features: [
    {
      id: "vacant-shift-publishing",
      title: "Vacant Shift Publishing",
      description:
        "Publish unassigned shifts directly to partner agencies the moment you can't fill them internally.",
    },
    {
      id: "structured-bid-workflow",
      title: "Structured Bid Workflow",
      description:
        "Agencies submit availability through a clear, structured process instead of an email back-and-forth.",
    },
    {
      id: "documented-placements",
      title: "Documented Placements",
      description: "Every confirmed placement is logged in-platform, auditable for both provider and agency.",
    },
    {
      id: "agency-collaboration",
      title: "Agency Collaboration",
      description: "A growing network of qualified agencies ready to respond to vacant shifts across your sites.",
    },
  ] satisfies MarketplaceFeature[],
};
