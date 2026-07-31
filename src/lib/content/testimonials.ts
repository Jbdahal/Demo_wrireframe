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

export const secondaryTestimonial: Testimonial = {
  quote:
    "They sat with us and went through how we actually manage staff, screening clearances, expiries, induction records, all of it. Every one of those sessions fed straight back into the build, and it shows in how much easier our admin and HR work has become.",
  attribution: "HR Manager, Nurse Aid Australia",
};

export const thirdTestimonial: Testimonial = {
  quote:
    "Getting payrun and invoicing right in this sector is not simple. Award conditions on one side, price guide rules on the other, and both have to reconcile. I have worked through it with the Pravaro team step by step, and they have been refining things with us.",
  attribution: "Rashmi Dahal, Chartered Accountant & Senior Account Manager",
};

export const trustSignals = {
  title: "Built alongside NDIS providers, every step of the way",
  intro:
    "Shaped by direct input from NDIS providers, Pravaro reflects the real, day-to-day needs of care teams.",
  switchTitle: "Why teams are making the switch",
  switchBody:
    "Teams were paying for complex software they rarely used, while still relying on manual workarounds. Pravaro balances simplicity and capability: the tools they need today, with a connected suite growing around them.",
};
