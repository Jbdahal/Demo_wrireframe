import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata = {
  title: "Book a Demo — Pravaro Suite",
  description: "See how Pravaro brings flow to your healthcare operations.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Book a Demo"
        headline="See Pravaro in action"
        subheadline="Tell us a bit about your team, and we'll set up a personalized walkthrough of the platform."
        size="compact"
      />
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-xl px-6">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
