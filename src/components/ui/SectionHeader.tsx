import React from "react";

interface SectionHeaderProps {
  title: string;
  linkText?: string;
  linkHref?: string;
}

export default function SectionHeader({
  title,
  linkText,
  linkHref,
}: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
        {title}
      </h2>
      {linkText && linkHref && (
        <a
          href={linkHref}
          className="text-[#e5a93c] text-xs sm:text-sm font-bold hover:text-[#f5b945] transition-colors inline-flex items-center gap-1.5 group"
        >
          <span>{linkText}</span>
          <span className="group-hover:translate-x-0.5 transition-transform">
            →
          </span>
        </a>
      )}
    </div>
  );
}
