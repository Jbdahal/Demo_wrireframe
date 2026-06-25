import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "light" | "outline" | "ghost";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-navy text-white hover:bg-navy-dark shadow-md hover:shadow-lg",
  secondary:
    "bg-teal text-white hover:bg-teal/90 shadow-md hover:shadow-lg",
  light:
    "bg-white text-navy hover:bg-white/90 shadow-md hover:shadow-lg",
  outline:
    "border-2 border-teal text-teal bg-transparent hover:bg-teal/10",
  ghost: "text-navy hover:bg-surface-alt",
};

export function Button({
  href = "#",
  onClick,
  variant = "primary",
  children,
  className,
  type = "button",
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue",
    variants[variant],
    className
  );

  if (href && href !== "#" && !onClick) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
