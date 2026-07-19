"use client";

import { useState } from "react";

/**
 * No backend exists yet — this stubs a client-side confirmation state.
 * See design doc §8: needs a real submission target (form service or API route).
 */
export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-2xl border border-soft-alt bg-soft/30 p-8 text-center">
        <h3 className="text-xl font-bold text-darkest">Thanks! We&rsquo;ll be in touch.</h3>
        <p className="font-body mt-2 text-muted">
          Our team will reach out to schedule your demo shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      className="space-y-5 rounded-2xl border border-soft-alt bg-white p-8 shadow-sm"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" id="name" type="text" required />
        <Field label="Work email" id="email" type="email" required />
      </div>
      <Field label="Organisation" id="organisation" type="text" />
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-darkest">
          What are you hoping to solve?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="font-body w-full rounded-xl border border-soft-alt bg-white px-4 py-2.5 text-sm text-darkest placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/40"
          placeholder="Tell us a bit about your team and what you're looking for."
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-strong sm:w-auto"
      >
        Book a Demo
      </button>
    </form>
  );
}

function Field({
  label,
  id,
  type,
  required,
}: {
  label: string;
  id: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-darkest">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="font-body w-full rounded-xl border border-soft-alt bg-white px-4 py-2.5 text-sm text-darkest placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/40"
      />
    </div>
  );
}
