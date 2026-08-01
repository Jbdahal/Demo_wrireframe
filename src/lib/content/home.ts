export interface HeroCta {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "light" | "outline" | "ghost";
  className?: string;
}

export const hero: {
  eyebrow: string;
  headline: string;
  subheadline: string;
  ctas: HeroCta[];
} = {
  eyebrow: "Suite for healthcare heroes.",
  headline: "Suite for healthcare heroes.",
  subheadline:
    "Pravaro brings together the tools care teams, schedulers, agencies, and administrators need to run NDIS operations. Roster & Scheduling is live today, with more features on the way.",
  ctas: [
    { label: "Explore the Suite", href: "/features", variant: "light" },
    {
      label: "Book a Demo",
      href: "/contact",
      variant: "outline",
      className: "border-white/80 text-white hover:bg-white/10",
    },
  ],
};

export const comingSoonTeaser = {
  eyebrow: "What's Next",
  title: "More features are on the way.",
  description:
    "Pravaro keeps growing. Every new feature plugs into the suite you already rely on, so nothing you use today gets disrupted.",
};
