import { Heart, Users } from "lucide-react";
import { challenges } from "@/lib/content";
import { FadeIn } from "@/components/ui/FadeIn";

const icons = [Users, Heart];

export function Challenges() {
  return (
    <section id="challenges" className="bg-surface-alt py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <h2 className="mb-12 text-center text-3xl font-bold text-navy md:text-4xl">
            Solving the Challenges That Matter Most
          </h2>
        </FadeIn>
        <div className="grid gap-8 lg:grid-cols-2">
          {challenges.items.map((item, i) => {
            const Icon = icons[i] ?? Users;
            return (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
                  <div className="bg-gradient-to-r from-teal/10 via-blue/10 to-purple/10 px-8 py-6">
                    <div className="inline-flex rounded-xl bg-white p-3 shadow-sm">
                      <Icon className="h-7 w-7 text-blue" />
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-navy">{item.title}</h3>
                  </div>
                  <div className="px-8 py-6">
                    <p className="leading-relaxed text-muted">{item.summary}</p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
