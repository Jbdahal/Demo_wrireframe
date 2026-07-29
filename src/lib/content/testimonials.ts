export type Audience = "careTeams" | "schedulers" | "agencies" | "administrators";

export interface Testimonial {
  quote: string;
  attribution: string;
}

export const featuredTestimonial: Testimonial = {
  quote:
    "Our operations team was directly involved in reviewing, testing, and providing feedback throughout development, and the CRM reflects the real, practical needs of an NDIS provider, from complex rostering across multiple staffing ratios to participant documentation, compliance, and reporting, all within one central platform. The Pravaro team is proactive, responsive, and available 24/7 whenever support is needed.",
  attribution: "Usha Gurung, Founder & CEO, Nurse Aid Australia",
};

export const trustSignals = {
  title: "Built alongside NDIS providers, every step of the way",
  intro:
    "Shaped by direct input from NDIS providers, Pravaro reflects the real, day-to-day needs of care teams.",
  switchTitle: "Why teams are making the switch",
  switchBody:
    "Teams were paying for complex software they rarely used, while still relying on manual workarounds. Pravaro balances simplicity and capability: the tools they need today, with a connected suite growing around them.",
};
