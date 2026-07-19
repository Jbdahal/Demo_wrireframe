import { solutions } from "@/lib/content";
import { SolutionsPageTemplate } from "@/components/sections/SolutionsPageTemplate";

export const metadata = {
  title: `${solutions.agencies.headline} — Pravaro`,
  description: solutions.agencies.subheadline,
};

export default function AgenciesPage() {
  return <SolutionsPageTemplate solution={solutions.agencies} />;
}
