import type { LucideIcon } from "lucide-react";

interface AttributeCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function AttributeCard({ icon: Icon, title, description }: AttributeCardProps) {
  return (
    <div className="h-full rounded-2xl border border-soft-alt bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-soft text-primary">
        <Icon className="h-6 w-6" aria-hidden />
      </div>
      <h3 className="text-lg font-bold text-darkest">{title}</h3>
      <p className="font-body mt-2 text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );
}
