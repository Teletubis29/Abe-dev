import React from "react";

interface IconCardProps {
  icon: string;
  title: string;
  subtitle: string;
}

export default function IconCard({ icon, title, subtitle }: IconCardProps) {
  return (
    <div className="flex items-center gap-3 bg-neutral-900/80 border border-neutral-800 rounded-xl px-5 py-4 hover:border-neutral-700 transition-all duration-300 flex-1 min-w-0">
      <span className="text-2xl shrink-0">{icon}</span>
      <div className="min-w-0">
        <p className="text-white text-sm font-medium truncate">{title}</p>
        <p className="text-neutral-500 text-xs truncate">{subtitle}</p>
      </div>
    </div>
  );
}
