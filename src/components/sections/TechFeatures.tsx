import React from "react";
import { techFeatures } from "@/data/portfolio";

export default function TechFeatures() {
  return (
    <section className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
          {techFeatures.map((feature) => (
            <div
              key={feature.title}
              className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0f1115] border border-neutral-800/80 hover:border-neutral-700 hover:bg-[#13161c] transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#161a22] border border-neutral-700/50 flex items-center justify-center text-lg shrink-0 group-hover:scale-105 group-hover:border-[#e5a93c]/50 transition-all duration-200">
                {feature.icon}
              </div>
              <div className="min-w-0">
                <p className="text-white text-xs font-bold truncate">
                  {feature.title}
                </p>
                <p className="text-neutral-400 text-[11px] truncate mt-0.5">
                  {feature.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
