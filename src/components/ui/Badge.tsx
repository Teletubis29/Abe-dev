import React from "react";

type BadgeVariant = "accent" | "tag" | "status";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  accent:
    "bg-amber-500/10 text-amber-400 border border-amber-500/30 px-4 py-1.5 text-xs font-bold tracking-widest uppercase",
  tag:
    "bg-amber-500/10 text-amber-400 border border-amber-500/30 px-3 py-1 text-xs font-medium",
  status:
    "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-4 py-2 text-sm font-medium",
};

export default function Badge({
  children,
  variant = "accent",
  className = "",
}: BadgeProps) {
  return (
    <span className={`inline-flex items-center rounded-full ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
}
