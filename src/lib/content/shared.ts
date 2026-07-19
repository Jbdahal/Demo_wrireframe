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
}

export const footer = {
  tagline: "Suite for Healthcare Heroes.",
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
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
      ] as FooterLink[],
    },
  ],
};

export const siteMeta = {
  name: "Pravaro",
  tagline: "Suite for Healthcare Heroes.",
  description:
    "Pravaro is a software suite built for healthcare. It brings together the tools care teams, schedulers, agencies, and administrators need to run day-to-day operations without the usual admin headaches.",
};
