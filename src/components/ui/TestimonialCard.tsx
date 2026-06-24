import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  attribution: string;
}

export function TestimonialCard({ quote, attribution }: TestimonialCardProps) {
  return (
    <blockquote className="flex h-full flex-col rounded-2xl border border-surface-alt bg-white p-8 shadow-sm">
      <Quote className="mb-4 h-8 w-8 text-teal/60" aria-hidden />
      <p className="flex-1 text-base leading-relaxed text-navy/90">
        &ldquo;{quote}&rdquo;
      </p>
      <footer className="mt-6 text-sm font-medium text-muted">
        — {attribution}
      </footer>
    </blockquote>
  );
}
