import { testimonials, type Audience, type Testimonial } from "@/lib/content/testimonials";

export interface SolutionAudience {
  slug: string;
  audience: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  painPoints: { title: string; description: string }[];
  howWeHelp: { title: string; description: string }[];
  relevantFeatures: { label: string; href: string }[];
  testimonial: Testimonial;
}

function testimonialFor(audience: Audience): Testimonial {
  return testimonials.find((t) => t.audience === audience)!;
}

export const solutions: Record<Audience, SolutionAudience> = {
  careTeams: {
    slug: "care-teams",
    audience: "Care Teams",
    eyebrow: "For Care Teams",
    headline: "Everything you need for your next shift, in one app.",
    subheadline:
      "See your roster, clock in, log notes, and get client details, all from your phone, without chasing coordinators for information.",
    painPoints: [
      {
        title: "Shift details scattered across calls and texts",
        description: "Confirming a shift shouldn't mean three phone calls and a paper roster on the wall.",
      },
      {
        title: "No visibility into client needs before arriving",
        description: "Frontline staff often show up without the care plan, preferences, or history they need.",
      },
      {
        title: "Manual paperwork after every shift",
        description: "Notes, forms, and expenses handled on paper mean duplicate work and lost information.",
      },
    ],
    howWeHelp: [
      {
        title: "One app for the whole shift",
        description:
          "View upcoming shifts, accept or decline, and clock in with GPS verification, all in the Staff App.",
      },
      {
        title: "Client context at your fingertips",
        description: "Care plans, preferences, and notes are attached to every shift before you arrive.",
      },
      {
        title: "Paperless by default",
        description:
          "Forms, checklists, and expense submissions happen right in the app, so nothing gets entered twice.",
      },
    ],
    relevantFeatures: [
      { label: "Staff App", href: "/products/roster#staff-app" },
      { label: "Roster Hub", href: "/products/roster#roster-hub" },
    ],
    testimonial: testimonialFor("careTeams"),
  },
  schedulers: {
    slug: "schedulers",
    audience: "Schedulers",
    eyebrow: "For Schedulers",
    headline: "Fill every shift without the back-and-forth.",
    subheadline:
      "Build the roster, catch conflicts before they happen, and push unfilled shifts to agencies automatically when you can't cover them internally.",
    painPoints: [
      {
        title: "Manual rostering doesn't scale",
        description: "Spreadsheets and whiteboards break down the moment your team grows past a handful of staff.",
      },
      {
        title: "Qualification and availability conflicts slip through",
        description: "Double-bookings and expired certifications get caught too late, or not at all.",
      },
      {
        title: "Vacant shifts mean hours on the phone",
        description: "Finding last-minute cover often means calling down a list one worker at a time.",
      },
    ],
    howWeHelp: [
      {
        title: "Calendar-based roster building",
        description: "Build recurring rosters, assign shifts, and see availability and qualifications at a glance.",
      },
      {
        title: "Automatic conflict detection",
        description:
          "The Roster Hub flags double-bookings, break compliance issues, and expired certifications before they become problems.",
      },
      {
        title: "One-click escalation to the Marketplace",
        description: "Publish a vacant shift to partner agencies the moment you can't fill it internally.",
      },
    ],
    relevantFeatures: [
      { label: "Roster Hub", href: "/products/roster#roster-hub" },
      { label: "Marketplace", href: "/products/marketplace" },
    ],
    testimonial: testimonialFor("schedulers"),
  },
  agencies: {
    slug: "agencies",
    audience: "Agencies",
    eyebrow: "For Staffing Agencies",
    headline: "Where vacant shifts find the right agency.",
    subheadline:
      "Direct, structured access to vacant shifts from Pravaro providers, no referrals or cold outreach required.",
    painPoints: [
      {
        title: "Relationship-dependent pipelines",
        description: "Winning shift work often depends on who you know, not who's available and qualified.",
      },
      {
        title: "No visibility into shift requirements upfront",
        description: "Agencies commit to placements without knowing the full scope until it's too late to say no cleanly.",
      },
      {
        title: "Undocumented placements",
        description: "Confirming a placement over email or phone leaves no clear record for either side.",
      },
    ],
    howWeHelp: [
      {
        title: "Real-time shift visibility",
        description: "See vacant shifts filtered by location, service type, and requirements as they're published.",
      },
      {
        title: "Structured bid workflow",
        description: "Submit availability through a clear process instead of an email back-and-forth.",
      },
      {
        title: "Documented placements",
        description: "Every confirmed placement is logged in-platform for both your agency and the provider.",
      },
    ],
    relevantFeatures: [
      { label: "Marketplace", href: "/products/marketplace" },
      { label: "Audit Log", href: "/products/roster#audit-log" },
    ],
    testimonial: testimonialFor("agencies"),
  },
  administrators: {
    slug: "administrators",
    audience: "Administrators",
    eyebrow: "For Administrators",
    headline: "One platform. One source of truth.",
    subheadline:
      "Replace fragmented workflows with a single operational platform, where staff management, rostering, compliance, and payroll are all connected.",
    painPoints: [
      {
        title: "Operations spread across disconnected tools",
        description: "Rostering, payroll, compliance, and coordination live in separate systems that don't talk to each other.",
      },
      {
        title: "Compliance visibility only surfaces after something goes wrong",
        description: "Expired certifications and incident follow-ups get missed without a single dashboard.",
      },
      {
        title: "Reporting means manual exports and spreadsheets",
        description: "Getting a clear view of operations takes hours of pulling data from multiple systems.",
      },
    ],
    howWeHelp: [
      {
        title: "One connected platform",
        description:
          "Staff management, rostering, timesheets, payrun, and compliance all live in one place inside Pravaro.",
      },
      {
        title: "SCHADS-aware payroll",
        description:
          "Payruns are calculated against SCHADS Award rates automatically, with overtime and penalty rates handled before they become a payroll problem.",
      },
      {
        title: "A full audit trail",
        description: "Every action is logged and reportable, so compliance reviews don't mean scrambling for records.",
      },
    ],
    relevantFeatures: [
      { label: "Payrun Management", href: "/products/roster#payrun-management" },
      { label: "Compliance & Monitoring", href: "/products/roster#compliance-monitoring" },
      { label: "Audit Log", href: "/products/roster#audit-log" },
    ],
    testimonial: testimonialFor("administrators"),
  },
};
