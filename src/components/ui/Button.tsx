import React from "react";

type ButtonVariant = "primary" | "outline";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold hover:from-amber-400 hover:to-amber-500 shadow-lg shadow-amber-500/20",
  outline:
    "border border-neutral-600 text-white hover:border-amber-500 hover:text-amber-400",
};

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  icon,
  className = "",
}: ButtonProps) {
  const baseClasses = `inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm transition-all duration-300 cursor-pointer ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={baseClasses} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
        {children}
        {icon && <span className="text-lg">{icon}</span>}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {children}
      {icon && <span className="text-lg">{icon}</span>}
    </button>
  );
}
