export interface NavLinkItem {
  label: string;
  href: string;
  badge?: "live" | "soon";
}

export interface NavLink {
  label: string;
  href?: string;
  items?: NavLinkItem[];
}

export const navLinks: NavLink[] = [
  {
    label: "Features",
    items: [
      { label: "Roster & Scheduling", href: "/features/roster", badge: "live" },
      { label: "Marketplace", href: "/features/marketplace", badge: "soon" },
    ],
  },
  {
    label: "Solutions",
    items: [
      { label: "For Care Teams", href: "/solutions/care-teams" },
      { label: "For Schedulers", href: "/solutions/schedulers" },
      { label: "For Agencies", href: "/solutions/agencies" },
      { label: "For Administrators", href: "/solutions/administrators" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
];

export const primaryCta = { label: "Book a Demo", href: "/contact" };
export const secondaryCta = { label: "Contact Us", href: "/contact#details" };

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export const footer = {
  contact: {
    phone: "0470 584 535",
    phoneHref: "tel:+61470584535",
    emails: [{ label: "info@pravaro.com", href: "mailto:info@pravaro.com" }],
  },
  columns: [
    {
      title: "Features",
      links: [
        { label: "Roster & Scheduling", href: "/features/roster" },
        { label: "Marketplace", href: "/features/marketplace" },
      ] as FooterLink[],
    },
    {
      title: "Solutions",
      links: [
        { label: "For Care Teams", href: "/solutions/care-teams" },
        { label: "For Schedulers", href: "/solutions/schedulers" },
        { label: "For Agencies", href: "/solutions/agencies" },
        { label: "For Administrators", href: "/solutions/administrators" },
      ] as FooterLink[],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Resources", href: "/resources" },
        { label: "Book a Demo", href: "/contact" },
      ] as FooterLink[],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/legal/pravaro-privacy-policy.pdf", external: true },
        { label: "Terms of Service", href: "/legal/pravaro-terms-of-service.pdf", external: true },
      ] as FooterLink[],
    },
  ],
};

export const siteMeta = {
  name: "Pravaro",
  tagline: "The connected suite for NDIS teams.",
  description:
    "Pravaro is a software suite built for NDIS teams. It brings together the tools care teams, schedulers, agencies, and administrators need to run day-to-day NDIS operations without the usual admin headaches.",
};
