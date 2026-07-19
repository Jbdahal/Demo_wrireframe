import { PageHero } from "@/components/sections/PageHero";
import { FAQ } from "@/components/sections/FAQ";

export const metadata = {
  title: "Resources — Pravaro Suite",
  description: "Guides, documentation, and answers to common questions about Pravaro.",
};

export default function ResourcesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Resources"
        headline="Guides, docs, and answers"
        subheadline="Documentation and in-depth guides are on the way. In the meantime, here are answers to the questions we hear most."
        size="compact"
      />
      <FAQ />
    </main>
  );
}
