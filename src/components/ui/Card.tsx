import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = true,
  padding = true,
}: CardProps) {
  return (
    <div
      className={`
        bg-neutral-900/80 border border-neutral-800 rounded-2xl backdrop-blur-sm
        ${hover ? "hover:border-neutral-700 hover:bg-neutral-900 transition-all duration-300" : ""}
        ${padding ? "p-6" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
