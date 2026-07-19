import { Sparkles } from "lucide-react";
import { aiStatement } from "@/lib/content";
import { FadeIn } from "@/components/ui/FadeIn";

export function AIStatement() {
  return (
    <section className="bg-soft/40 py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <FadeIn>
          <div className="rounded-3xl border border-soft-alt bg-white p-8 shadow-sm md:p-12">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-soft text-primary">
              <Sparkles className="h-6 w-6" aria-hidden />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {aiStatement.eyebrow}
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-darkest md:text-3xl">
              {aiStatement.title}
            </h2>
            <p className="font-body mt-4 max-w-3xl text-lg leading-relaxed text-muted">
              {aiStatement.body}
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {aiStatement.points.map((point) => (
                <div key={point.title}>
                  <h3 className="text-sm font-bold text-darkest">{point.title}</h3>
                  <p className="font-body mt-1.5 text-sm leading-relaxed text-muted">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
