import { solutions } from "@/lib/content";
import { SolutionsPageTemplate } from "@/components/sections/SolutionsPageTemplate";

export const metadata = {
  title: `${solutions.schedulers.headline} — Pravaro`,
  description: solutions.schedulers.subheadline,
};

export default function SchedulersPage() {
  return <SolutionsPageTemplate solution={solutions.schedulers} />;
}
