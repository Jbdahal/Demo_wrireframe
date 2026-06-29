export const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Resources", href: "#faq" },
] as const;

export const hero = {
  headline: "The Backbone of Continuous NDIS Support.",
  subheadline:
    "Pravaro is the unified operating platform connecting NDIS providers, support workers, and staffing agencies — bringing rostering, compliance, workforce coordination, and care management together in one connected ecosystem.",
  subheadline2:
    "Whether you're delivering support or supplying the workforce that makes it possible, Pravaro gives your organisation the structure, visibility, and operational flow to do it with confidence.",
  ctaProvider: "I'm an NDIS Provider — Book a Demo",
  ctaAgency: "I'm a Staffing Agency — Join the Shift Marketplace",
  tagline: "CONNECT • EMPOWER • FLOW",
};

export const ourStory = {
  title: "Our Story",
  summary:
    "Care is built on people — Pravaro brings flow to the complex operations behind every support service.",
  pillars: [
    {
      title: "The problem",
      text: "Rostering, payroll, compliance, and coordination spread across disconnected tools — creating admin burden and support gaps.",
    },
    {
      title: "Inspired by flow",
      text: "From Pravaha — movement and continuous progression. A future where care operations move effortlessly.",
    },
    {
      title: "One platform today",
      text: "Participant management, workforce, rostering, payroll, compliance, and communication — connected in a single system.",
    },
    {
      title: "A connected ecosystem",
      text: "Providers, agencies, contractors, and participants collaborating — with continuity of support as the standard.",
    },
  ],
  closer: "Pravaro. Work in Motion. Care in Harmony.",
};

export const challenge = {
  title: "The Challenge Facing the NDIS Sector",
  summary:
    "Care doesn't stop when a shift goes unfilled — but fragmented systems leave providers and agencies disconnected.",
  closer: "Pravaro closes that gap.",
};

export const twoSides = {
  title: "One Platform. Two Sides of the Same Workforce.",
  description:
    "Pravaro serves both sides of the NDIS workforce equation — providers who need to fill shifts, and agencies who have the workers to fill them.",
  provider: {
    title: "For NDIS Providers",
    description:
      "Manage participants, coordinate your workforce, maintain compliance, and publish vacant shifts directly to the Pravaro Shift Marketplace — where qualified agencies can respond immediately.",
  },
  agency: {
    title: "For Staffing Agencies",
    description:
      "Access real vacant shifts from NDIS providers across Australia. Submit bids, confirm placements, and manage your workforce pipeline through a structured workflow built for the sector.",
  },
};

export const providers = {
  eyebrow: "For NDIS Providers",
  title: "One Platform. One Workflow. One Source of Truth.",
  intro:
    "Pravaro replaces fragmented workflows with a single operational platform designed specifically for the realities of NDIS service delivery.",
  capabilities: [
    "Participant Management",
    "Workforce Management",
    "Rostering & Scheduling",
    "Payroll & Timesheets",
    "CRM",
    "Compliance & Documentation",
    "Incident Management",
    "Communication & Collaboration",
    "Reporting & Analytics",
    "AI-Powered Administrative Assistance",
  ],
  capabilitiesNote:
    "One source of truth — less time managing systems, more time supporting participants.",
  highlights: [
    {
      title: "Continuity of support",
      text: "Publish vacant shifts to the Marketplace — agencies bid, placements are documented, gaps close faster.",
      icon: "continuity",
    },
    {
      title: "Practical AI",
      text: "SmartMatch, document screening, and compliance assistance — built into real NDIS workflows.",
      icon: "ai",
    },
    {
      title: "Built for NDIS",
      text: "Designed around how providers actually operate — no feature bloat, no disconnected modules.",
      icon: "ndis",
    },
  ],
  cta: "Book a Demo",
};

export const agencies = {
  eyebrow: "For Staffing Agencies",
  title: "Where Vacant NDIS Shifts Find the Right Agency.",
  intro:
    "NDIS providers across Australia are looking for qualified support workers right now. The Pravaro Shift Marketplace gives your agency direct, structured access to those vacancies — without waiting for referrals, cold outreach, or relationship-dependent pipelines.",
  howItWorks: {
    title: "How It Works",
    steps: [
      { label: "Vacancy posted", desc: "Provider publishes an open shift" },
      { label: "Agency bids", desc: "Qualified workers matched to requirements" },
      { label: "Placement confirmed", desc: "Documented, auditable, in-platform" },
    ],
  },
  benefits: {
    title: "What Agencies Get From the Marketplace",
    items: [
      {
        title: "Direct shift visibility",
        description: "Real-time vacant shifts filtered by location, service type, and requirements.",
      },
      {
        title: "Structured bid workflow",
        description: "Submit availability through a clear process — no email back-and-forth.",
      },
      {
        title: "Documented placements",
        description: "Every confirmed placement logged for you and the provider.",
      },
      {
        title: "Growing provider network",
        description: "More providers on Pravaro means more shifts — without more BD effort.",
      },
    ],
  },
  builtFor: {
    title: "Built for the NDIS Workforce Sector",
    description:
      "The Marketplace isn't a generic job board. Every shift published through Pravaro is from a verified NDIS provider, with participant context, service type, location, and worker qualification requirements specified upfront. Your team can evaluate opportunities clearly and respond with confidence — knowing exactly what the shift requires before you commit.",
  },
  whoFor: {
    title: "Who the Shift Marketplace Is For",
    items: [
      "NDIS-registered labour hire and staffing agencies",
      "Disability support staffing providers",
      "Allied health and support worker agencies servicing NDIS participants",
      "Workforce contractors supplying to NDIS providers",
    ],
    note: "If your agency places support workers with NDIS providers — and you want a faster, more structured way to access those opportunities — the Shift Marketplace was built for you.",
  },
  cta: "Join the Shift Marketplace",
};

export const features = [
  {
    id: "rostering",
    number: 1,
    title: "Smart Rostering & Shift Scheduling",
    description:
      "Auto-verify qualifications, flag conflicts, and match staff availability to participant needs — with SmartMatch filling gaps before they become disruptions.",
    subFeatures: [
      "Easy shift scheduling",
      "Shift availability and leave management",
      "Recurring roster templates",
      "Automated shift notifications (SMS/email)",
      "Vacant shift management and Shift Marketplace",
      "GPS clock-in / clock-out",
      "Automated timesheet generation",
      "Agency collaboration for hard-to-fill shifts",
      "Risk-based scheduling for high-needs participants",
      "Shift conflict detection and break compliance alerts",
    ],
  },
  {
    id: "compliance",
    number: 2,
    title: "Compliance & Incident Management",
    description:
      "Track certifications, alert before expiry, and manage incidents through structured escalation — with a complete audit trail.",
    subFeatures: [
      "Staff compliance tracking with automated alerts",
      "Incident management and escalation workflows",
      "Audit management and activity logs",
      "Compliance monitoring dashboard",
      "Training and certification expiry tracking",
      "Worker qualification matching before scheduling",
      "Compliance reporting",
    ],
  },
  {
    id: "care",
    number: 3,
    title: "Care Management & Client Profiles",
    description:
      "Complete profiles, care plans, and notes — linked to shifts, workers, and service records in one place.",
    subFeatures: [
      "Full client profiles and care plans",
      "Progress notes and daily documentation",
      "Custom forms and checklists",
      "Support plan integration with rostering",
      "Participant preference matching (gender, language, continuity)",
      "Emergency contact management",
      "Continuity of support — preferred worker assignment",
      "Backup worker allocation for absences",
    ],
  },
  {
    id: "payroll",
    number: 4,
    title: "Payroll, Timesheets & NDIS Billing",
    description:
      "GPS-verified timesheets flow to payroll and NDIS billing — with Xero sync built in.",
    subFeatures: [
      "Automated timesheet generation from completed shifts",
      "Timesheet approval workflows",
      "Export to payroll / Xero integration",
      "Automated invoice generation",
      "Bulk invoicing",
      "NDIS price guide integration",
      "Mileage and expense tracking",
    ],
  },
  {
    id: "workforce",
    number: 5,
    title: "Workforce Management & Staff Profiles",
    description:
      "Full visibility into qualifications, availability, leave, and WH&S — connected to scheduling and compliance.",
    subFeatures: [
      "Complete staff profiles",
      "Time and attendance tracking",
      "Work health and safety hour monitoring",
      "Leave management (sick leave, annual leave)",
      "Team coordination across multiple locations",
      "Location management for accurate worker deployment",
      "HR system integration",
      "Supervisor approval workflows",
    ],
  },
  {
    id: "ai",
    number: 6,
    title: "AI-Powered Operations",
    description:
      "SmartMatch, vacant shift automation, document screening, and reporting — AI built for real NDIS operations.",
    subFeatures: [
      "AI SmartMatch worker-to-shift matching",
      "AI Vacant Shift Automation",
      "AI Document Screening",
      "AI Reporting and operational insights",
      "AI Compliance & Award Interpretation",
      "Reporting and analytics dashboard",
    ],
  },
  {
    id: "mobile",
    number: 7,
    title: "Mobile App for Support Workers",
    description:
      "Shifts, clock-in, notes, forms, and expenses — everything support workers need, on their phone.",
    subFeatures: [
      "View roster and upcoming shifts",
      "Accept or decline shifts",
      "GPS clock-in / clock-out",
      "Upload notes and photos",
      "View client details",
      "Complete forms and checklists",
      "Submit expenses",
      "Shift change notifications",
    ],
  },
] as const;

export const testimonials = {
  title: "Trusted by NDIS Providers Focused on Better Outcomes",
  intro:
    "Providers transitioning from other platforms consistently report smoother operations, improved efficiency, and greater confidence in their day-to-day processes.",
  body: "What makes the difference is not just automation—it's alignment. Our platform has been designed around the real workflows, compliance requirements, and operational challenges that NDIS providers face every day.",
  quotes: [
    {
      quote:
        "The platform fits naturally into the way we already operate. We spent less time managing systems and more time supporting participants.",
      attribution: "NDIS Provider, Victoria",
    },
    {
      quote:
        "Moving from our previous software was straightforward, and the operational visibility has been a significant improvement.",
      attribution: "NDIS Provider, New South Wales",
    },
    {
      quote:
        "The automation feels practical and reliable because it reflects how NDIS providers actually work.",
      attribution: "NDIS Provider, Queensland",
    },
  ],
  switchTitle: "Why Providers Are Making the Switch",
  switchBody:
    "Providers were paying for complex software they rarely used — while still relying on manual workarounds. Pravaro balances simplicity and capability: the tools they need today, with AI built into workflows that reflect how NDIS providers actually work.",
};

export const challenges = {
  items: [
    {
      title: "Continuity of Support Without Workforce Limitations",
      summary:
        "Integrated agency collaboration lets providers source qualified workers, fill gaps, and maintain uninterrupted support — with less manual administration.",
    },
    {
      title: "CRM Built for NDIS Providers",
      summary:
        "Participant onboarding, communication, and service history in one platform — stronger relationships and full visibility across the participant journey.",
    },
  ],
};

export const faq = [
  {
    question:
      "Is Pravaro built specifically for NDIS providers, or is it a general healthcare platform?",
    answer:
      "Pravaro is built exclusively for Australian NDIS providers. Every feature, workflow, and compliance tool has been designed around the specific requirements of the NDIS — not adapted from a generic healthcare or HR system. This means your team doesn't need to translate how your organisation works into software logic built for a different sector.",
  },
  {
    question: "How long does it take to get set up on Pravaro?",
    answer:
      "Most providers are operationally live within days, not weeks. Our onboarding team works with you to configure your organisation structure, import your participant and workforce data, and walk your team through the platform. Because Pravaro is designed to reflect real NDIS operations, the learning curve is significantly shorter than transitioning to a generic platform.",
  },
  {
    question:
      "Can Pravaro help us manage workforce shortages and maintain continuity of support?",
    answer:
      "Yes. Pravaro includes integrated agency collaboration tools that allow providers to coordinate directly with external staffing agencies within the platform when workforce gaps arise. Instead of managing shift vacancies through phone calls, emails, and disconnected communication, your team can source qualified support workers through a structured workflow — reducing disruption and protecting continuity of support for participants.",
  },
  {
    question: "Does Pravaro help with NDIS compliance and audit readiness?",
    answer:
      "Pravaro keeps your compliance documentation, incident records, service agreements, and audit trails organised and accessible within a single system. Every record is connected to the relevant participant, worker, and service — so when audits or Commission reviews arise, your documentation is structured, retrievable, and complete.",
  },
  {
    question: "What happens to our existing data when we switch to Pravaro?",
    answer:
      "Your existing participant records, workforce data, and operational information can be migrated into Pravaro as part of the onboarding process. Our team supports data migration to ensure continuity from day one. For Enterprise customers, dedicated migration support is included as standard.",
  },
  {
    question:
      "Is Pravaro suitable for smaller providers, or is it designed for large organisations?",
    answer:
      "Pravaro is built to serve NDIS providers at every stage of growth. Smaller providers benefit from the operational clarity and reduced administration the platform provides from the start. As organisations grow, Pravaro scales alongside them — adding more workforce capacity, more participants, and more advanced capabilities without requiring a platform change.",
  },
  {
    question:
      "How does the AI assistance work, and is it safe to use with participant information?",
    answer:
      "Pravaro's AI capabilities are integrated directly into everyday workflows — supporting documentation, administrative tasks, compliance processes, and information retrieval. The AI is designed to reduce repetitive work, not replace clinical or care judgement. All data is handled in accordance with Australian privacy requirements and relevant NDIS data governance obligations.",
  },
];

export const finalCta = {
  demo: {
    title: "Book a Demo",
    description:
      "See how Pravaro reduces administration and strengthens workforce coordination.",
    cta: "Book a Demo",
  },
  trial: {
    title: "Start Your Free Trial",
    description: "Try Pravaro free and experience a simpler way to manage NDIS operations.",
    cta: "Start Free Trial",
  },
  pricing: {
    title: "Flexible Pricing for Every Provider",
    description:
      "Contact us to discuss pricing tailored to your organisation's size and needs.",
    cta: "Contact Us",
  },
};

export const footer = {
  tagline: "Pravaro. Work in Motion. Care in Harmony.",
  columns: [
    {
      title: "Platform",
      links: [
        "Features",
        "Integrations",
        "Pricing",
        "Security & Compliance",
        "Roadmap",
      ],
    },
    {
      title: "Solutions",
      links: [
        "For NDIS Providers",
        "For Support Coordinators",
        "For Staffing Agencies",
        "For Independent Contractors",
      ],
    },
    {
      title: "Company",
      links: [
        "Our Story",
        "Careers",
        "Contact Us",
        "Privacy Policy",
        "Terms of Service",
      ],
    },
    {
      title: "Get Started",
      links: [
        "Start Free Trial",
        "Book a Demo",
        "Help Centre",
        "Contact Support",
      ],
    },
  ],
};
