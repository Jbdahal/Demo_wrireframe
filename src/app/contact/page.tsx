import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { footer } from "@/lib/content";

export const metadata = {
  title: "Book a Demo — Pravaro Suite",
  description: "See how Pravaro brings flow to your NDIS operations.",
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
        <div className="mx-auto grid max-w-5xl gap-12 px-6 lg:grid-cols-[1fr_1.2fr]">
          <div id="details" className="scroll-mt-24">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Get in touch
            </p>
            <h2 className="mt-2 text-xl font-bold text-darkest">Contact Pravaro</h2>
            <div className="mt-6 space-y-2 text-sm">
              <a
                href={footer.contact.phoneHref}
                className="block font-medium text-darkest transition-colors hover:text-primary"
              >
                {footer.contact.phone}
              </a>
              {footer.contact.emails.map((email) => (
                <a
                  key={email.href}
                  href={email.href}
                  className="block font-medium text-darkest transition-colors hover:text-primary"
                >
                  {email.label}
                </a>
              ))}
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
