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
    label: "Products",
    items: [
      { label: "Roster & Scheduling", href: "/products/roster", badge: "live" },
      { label: "Marketplace", href: "/products/marketplace", badge: "soon" },
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

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export const footer = {
  contact: {
    phone: "0470 584 535",
    phoneHref: "tel:+61470584535",
    email: "admin@pravaro.com",
    emailHref: "mailto:admin@pravaro.com",
  },
  columns: [
    {
      title: "Products",
      links: [
        { label: "Roster & Scheduling", href: "/products/roster" },
        { label: "Marketplace", href: "/products/marketplace" },
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
