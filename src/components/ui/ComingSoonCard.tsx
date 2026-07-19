"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

interface ComingSoonCardProps {
  title: string;
  description: string;
}

export function ComingSoonCard({ title, description }: ComingSoonCardProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="relative h-full rounded-2xl border border-dashed border-primary/30 bg-soft/50 p-6">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/70 text-primary/50">
          <Sparkles className="h-5 w-5" aria-hidden />
        </div>
        <Badge variant="outline">Coming Soon</Badge>
      </div>
      <h3 className="text-base font-bold text-darkest/70">{title}</h3>
      <p className="font-body mt-2 text-sm leading-relaxed text-muted">{description}</p>

      {submitted ? (
        <p className="mt-4 text-sm font-medium text-primary">
          Thanks! We&rsquo;ll let you know when it launches.
        </p>
      ) : (
        <form
          className="mt-4 flex flex-col gap-2 sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <label htmlFor={`notify-${title}`} className="sr-only">
            Email address
          </label>
          <input
            id={`notify-${title}`}
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="font-body w-full rounded-full border border-soft-alt bg-white px-4 py-2 text-sm text-darkest placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
          <button
            type="submit"
            className="shrink-0 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-strong"
          >
            Notify me
          </button>
        </form>
      )}
    </div>
  );
}
