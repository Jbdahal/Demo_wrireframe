export type Audience = "careTeams" | "schedulers" | "agencies" | "administrators";

export interface Testimonial {
  quote: string;
  attribution: string;
  audience?: Audience;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "The platform fits naturally into the way we already operate. We spent less time managing systems and more time supporting the people we care for.",
    attribution: "Operations Administrator",
    audience: "administrators",
  },
  {
    quote:
      "Building the week's roster used to take a full afternoon. Now conflicts are flagged automatically and vacant shifts go straight to our agency partners.",
    attribution: "Rostering Coordinator",
    audience: "schedulers",
  },
  {
    quote:
      "I know exactly where I need to be and what the client needs before I even arrive. It's changed how I start every shift.",
    attribution: "Support Worker, Care Team",
    audience: "careTeams",
  },
  {
    quote:
      "We get direct, structured access to shifts instead of waiting on referrals. It's a faster, more reliable pipeline than anything we had before.",
    attribution: "Staffing Agency Partner",
    audience: "agencies",
  },
];

export const trustSignals = {
  title: "Trusted by NDIS teams focused on better outcomes",
  intro:
    "Teams moving from fragmented tools to Pravaro consistently report smoother operations, less admin, and more time for care.",
  switchTitle: "Why teams are making the switch",
  switchBody:
    "Teams were paying for complex software they rarely used, while still relying on manual workarounds. Pravaro balances simplicity and capability: the tools they need today, with a connected suite growing around them.",
};
