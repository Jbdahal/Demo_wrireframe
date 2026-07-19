import { solutions } from "@/lib/content";
import { SolutionsPageTemplate } from "@/components/sections/SolutionsPageTemplate";

export const metadata = {
  title: `${solutions.administrators.headline} — Pravaro`,
  description: solutions.administrators.subheadline,
};

export default function AdministratorsPage() {
  return <SolutionsPageTemplate solution={solutions.administrators} />;
}
