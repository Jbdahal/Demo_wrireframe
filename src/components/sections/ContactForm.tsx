"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "submitted" | "error">("idle");

  if (status === "submitted") {
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
      onSubmit={async (e) => {
        e.preventDefault();
        setStatus("submitting");

        const form = e.currentTarget;
        const data = new FormData(form);

        try {
          const res = await fetch("/api/book-demo", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: data.get("name"),
              email: data.get("email"),
              organisation: data.get("organisation"),
              message: data.get("message"),
            }),
          });

          if (!res.ok) throw new Error("Request failed");
          setStatus("submitted");
        } catch {
          setStatus("error");
        }
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
      {status === "error" && (
        <p className="font-body text-sm text-red-600">
          Something went wrong sending your request. Please try again.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-strong disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Book a Demo"}
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
