import { solutions } from "@/lib/content";
import { SolutionsPageTemplate } from "@/components/sections/SolutionsPageTemplate";

export const metadata = {
  title: `${solutions.careTeams.headline} — Pravaro`,
  description: solutions.careTeams.subheadline,
};

export default function CareTeamsPage() {
  return <SolutionsPageTemplate solution={solutions.careTeams} />;
}
