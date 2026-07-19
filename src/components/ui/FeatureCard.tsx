import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  status?: "live" | "soon";
}

export function FeatureCard({ icon: Icon, title, description, href, status }: FeatureCardProps) {
  const card = (
    <div className="h-full rounded-2xl border border-soft-alt bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-soft text-primary">
          <Icon className="h-5 w-5" aria-hidden />
        </div>
        {status === "live" && <Badge variant="live">Live now</Badge>}
        {status === "soon" && <Badge variant="outline">Coming Soon</Badge>}
      </div>
      <h3 className="text-base font-bold text-darkest">{title}</h3>
      <p className="font-body mt-2 text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-strong">
        {card}
      </Link>
    );
  }

  return card;
}
