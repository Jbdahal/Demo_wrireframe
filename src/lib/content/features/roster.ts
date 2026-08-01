export interface RosterFeature {
  id: string;
  number: number;
  title: string;
  description: string;
  subFeatures: readonly string[];
}

export const rosterProduct = {
  slug: "roster",
  name: "Roster & Scheduling",
  status: "live" as const,
  eyebrow: "Now Live",
  headline: "Roster & Scheduling",
  subheadline:
    "The first product in the Pravaro Suite. Everything your team needs to schedule shifts, manage staff, and keep payroll moving, without the admin overhead.",
  screenshots: [
    {
      src: "/screenshots/dashboard.png",
      alt: "Pravaro dashboard showing active staff, active clients, upcoming shifts, and client hours overview",
      label: "pravaro.com",
    },
    {
      src: "/screenshots/roster-calendar.png",
      alt: "Roster Calendar showing client schedules across a fortnight view",
      label: "pravaro.com",
    },
    {
      src: "/screenshots/site-management.png",
      alt: "Site Management showing all sites, their status, and client counts",
      label: "pravaro.com",
    },
    {
      src: "/screenshots/clients-overview.png",
      alt: "Client care hours and coverage report with assigned vs required hours",
      label: "pravaro.com",
    },
    {
      src: "/screenshots/rbac-management.png",
      alt: "Role-based access control management showing user types and permissions",
      label: "pravaro.com",
    },
  ],
  features: [
    {
      id: "roster-hub",
      number: 1,
      title: "Roster Hub",
      description:
        "Calendar-based shift creation and assignment, with recurring templates and conflict detection built in.",
      subFeatures: [
        "Easy shift scheduling",
        "Shift availability",
        "Recurring roster templates",
        "Automated shift notifications (SMS/email)",
        "Shift conflict detection and break compliance alerts",
        "Risk-based scheduling for high-needs clients",
      ],
    },
    {
      id: "compliance-monitoring",
      number: 2,
      title: "Compliance & Monitoring",
      description:
        "Track certifications, get alerted before they expire, and manage incidents through structured escalation, all backed by a complete audit trail.",
      subFeatures: [
        "Staff compliance tracking with automated expiry alerts",
        "Worker qualification and certification monitoring",
        "Incident logging and escalation workflows",
        "Compliance monitoring dashboard",
      ],
    },
    {
      id: "staff-management",
      number: 3,
      title: "Staff Management",
      description:
        "Complete staff records with compliance tracking, so every worker's qualifications are visible before they're scheduled.",
      subFeatures: [
        "Complete staff profiles",
        "Time and attendance tracking",
        "Worker qualification matching before scheduling",
        "Team coordination across multiple locations",
        "Supervisor approval workflows",
      ],
    },
    {
      id: "site-asset-management",
      number: 4,
      title: "Site & Asset Management",
      description:
        "Manage the locations and equipment your team relies on, connected directly to scheduling.",
      subFeatures: [
        "Location management for accurate worker deployment",
        "Equipment and asset tracking per site",
        "Site-level compliance and access requirements",
      ],
    },
    {
      id: "timesheets",
      number: 5,
      title: "Timesheets",
      description:
        "Clock in and out, review, and approve. Timesheets generate automatically from completed shifts.",
      subFeatures: [
        "GPS clock-in / clock-out",
        "Automated timesheet generation from completed shifts",
        "Timesheet approval workflows",
        "Mileage and expense tracking",
      ],
    },
    {
      id: "payrun-management",
      number: 6,
      title: "Payrun Management",
      description:
        "Create, review, adjust, and finalize payruns, with SCHADS Award interpretation and export to payroll built in.",
      subFeatures: [
        "Automated payrun creation from approved timesheets",
        "SCHADS Award interpretation and pay rate calculation",
        "Overtime and penalty rate handling",
        "Review and adjustment before finalization",
        "Export to payroll / accounting integration",
      ],
    },
    {
      id: "invoicing",
      number: 7,
      title: "Invoicing",
      description:
        "Turn approved shifts into invoices automatically, with bulk invoicing for high-volume billing periods.",
      subFeatures: [
        "Automated invoice generation from completed shifts",
        "Bulk invoicing across clients and sites",
        "Price guide / rate card integration",
        "Exportable, auditable billing records",
      ],
    },
    {
      id: "staff-app",
      number: 8,
      title: "Staff App",
      description: "Shifts, clock-in, notes, and forms: everything frontline staff need, right on their phone.",
      subFeatures: [
        "View roster and upcoming shifts",
        "Accept or decline shifts",
        "GPS clock-in / clock-out",
        "Upload notes and photos",
        "Complete forms and checklists",
        "Submit expenses",
      ],
    },
    {
      id: "bulk-notifications",
      number: 9,
      title: "Bulk Notifications",
      description: "Reach your whole team at once, or just the people a shift change actually affects.",
      subFeatures: [
        "SMS, email, in-app, and push notifications",
        "Automated shift-change alerts",
        "Targeted notifications by team, site, or role",
      ],
    },
    {
      id: "audit-log",
      number: 10,
      title: "Audit Log",
      description:
        "A complete, timestamped record of activity across the platform, so compliance reviews never start from a blank page.",
      subFeatures: [
        "Full system activity tracking",
        "Audit management and activity logs",
        "Exportable records for compliance reporting",
      ],
    },
  ] satisfies RosterFeature[],
  bonusFeatures: [
    {
      id: "care-management",
      title: "Care Management & Client Profiles",
      description:
        "Complete profiles, care plans, and notes, linked to shifts, workers, and service records in one place.",
    },
    {
      id: "ai-operations",
      title: "AI-Powered Operations",
      description:
        "SmartMatch, vacant shift automation, document screening, and reporting built into everyday workflows.",
    },
  ],
};
