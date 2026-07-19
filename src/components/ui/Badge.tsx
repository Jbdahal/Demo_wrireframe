import { cn } from "@/lib/utils";

type BadgeVariant = "live" | "soft" | "outline";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variants: Record<BadgeVariant, string> = {
  live: "bg-primary text-white",
  soft: "bg-soft-alt text-strong",
  outline: "border border-primary/30 bg-white text-primary",
};

export function Badge({ children, variant = "soft", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
        variants[variant],
        className
      )}
    >
      {variant === "live" && (
        <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden />
      )}
      {children}
    </span>
  );
}
