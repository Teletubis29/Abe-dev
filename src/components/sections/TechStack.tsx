"use client";

import React, { useState } from "react";
import { SectionHeader, Card } from "@/components/ui";
import { techCategories, experiences } from "@/data/portfolio";

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState("Frontend");
  const [currentExpIndex, setCurrentExpIndex] = useState(0);

  const activeCat = techCategories.find((c) => c.name === activeCategory);

  return (
    <section id="skills" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Tech Stack Column */}
          <div>
            <SectionHeader
              title="Tech Stack"
              linkText="View All Skills"
              linkHref="#skills"
            />

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {techCategories.map((cat) => {
                const isActive = activeCategory === cat.name;
                return (
                  <button
                    key={cat.name}
                    onClick={() => setActiveCategory(cat.name)}
                    className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer flex items-center gap-2 border ${
                      isActive
                        ? "bg-[#e5a93c] text-black border-[#e5a93c] shadow-lg shadow-[#e5a93c]/20"
                        : "bg-[#12151b] text-neutral-400 border-neutral-800 hover:text-white hover:border-neutral-700"
                    }`}
                  >
                    <span>{cat.icon}</span>
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
              {activeCat?.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center p-4 rounded-xl bg-[#0f1115] border border-neutral-800/80 hover:border-[#e5a93c]/40 hover:bg-[#151921] transition-all duration-300 group aspect-square text-center"
                >
                  <span className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </span>
                  <span className="text-neutral-400 text-xs font-medium group-hover:text-neutral-200 transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Column */}
          <div id="experience">
            <SectionHeader
              title="Experience"
              linkText="View Full Resume"
              linkHref="#contact"
            />

            <div className="space-y-4">
              {experiences.map((exp, idx) => (
                <div
                  key={exp.id}
                  className="relative p-6 rounded-2xl bg-[#0f1115] border border-neutral-800/80 hover:border-neutral-700 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    {/* Glowing timeline indicator */}
                    <div className="mt-1 flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-[#e5a93c] ring-4 ring-[#e5a93c]/20" />
                      <div className="w-0.5 h-16 bg-neutral-800 mt-2" />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                        <h4 className="text-white font-bold text-base">
                          {exp.role}
                        </h4>
                        <span className="text-neutral-400 text-xs font-medium">
                          {exp.duration}
                        </span>
                      </div>
                      <p className="text-[#e5a93c] text-xs font-semibold mb-3">
                        {exp.company}
                      </p>
                      <p className="text-neutral-400 text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>

                  {/* Navigation controls */}
                  <div className="flex items-center justify-end gap-2 mt-4 pt-4 border-t border-neutral-800/50">
                    <button
                      onClick={() =>
                        setCurrentExpIndex((prev) =>
                          prev > 0 ? prev - 1 : experiences.length - 1
                        )
                      }
                      className="w-7 h-7 rounded-full bg-neutral-800/60 hover:bg-neutral-700 text-neutral-400 hover:text-white flex items-center justify-center text-xs transition-colors cursor-pointer"
                      aria-label="Previous experience"
                    >
                      ←
                    </button>
                    <div className="flex items-center gap-1 px-1">
                      {experiences.map((_, i) => (
                        <div
                          key={i}
                          className={`w-1.5 h-1.5 rounded-full ${
                            i === currentExpIndex
                              ? "bg-[#e5a93c]"
                              : "bg-neutral-700"
                          }`}
                        />
                      ))}
                    </div>
                    <button
                      onClick={() =>
                        setCurrentExpIndex((prev) =>
                          prev < experiences.length - 1 ? prev + 1 : 0
                        )
                      }
                      className="w-7 h-7 rounded-full bg-neutral-800/60 hover:bg-neutral-700 text-neutral-400 hover:text-white flex items-center justify-center text-xs transition-colors cursor-pointer"
                      aria-label="Next experience"
                    >
                      →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
