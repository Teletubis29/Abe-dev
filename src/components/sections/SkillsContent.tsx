"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  skillFilterCategories,
  detailedSkillCategories,
  softSkills,
} from "@/data/portfolio";

export default function SkillsContent() {
  const [activeFilter, setActiveFilter] = useState<string>("All Skills");

  const visibleCategories =
    activeFilter === "All Skills"
      ? detailedSkillCategories
      : detailedSkillCategories.filter((cat) => cat.name === activeFilter);

  // Helper to render authentic skill icons matching the screenshot
  const renderSkillIcon = (iconKey: string) => {
    switch (iconKey) {
      case "nextjs":
        return (
          <div className="w-8 h-8 rounded-full bg-black border border-neutral-700 flex items-center justify-center font-bold text-xs text-white">
            N
          </div>
        );
      case "react":
        return (
          <svg className="w-7 h-7 text-[#61dafb]" viewBox="0 0 115.3 100" fill="currentColor">
            <path d="M57.65 65.25a15.25 15.25 0 1 0 0-30.5 15.25 15.25 0 0 0 0 30.5z" />
            <path
              d="M57.65 0C25.8 0 0 22.38 0 50s25.8 50 57.65 50c31.86 0 57.65-22.38 57.65-50S89.5 0 57.65 0zm0 91.5C31.5 91.5 10.3 72.9 10.3 50S31.5 8.5 57.65 8.5 105 27.1 105 50s-21.2 41.5-47.35 41.5z"
              opacity=".2"
            />
            <path d="M57.65 10C27.9 10 3.8 27.9 3.8 50s24.1 40 53.85 40 53.85-17.9 53.85-40-24.1-40-53.85-40zm0 72c-24.8 0-45-14.3-45-32s20.2-32 45-32 45 14.3 45 32-20.2 32-45 32z" fill="none" stroke="currentColor" strokeWidth="4" />
          </svg>
        );
      case "typescript":
        return (
          <div className="w-7 h-7 rounded-lg bg-[#3178c6] flex items-center justify-center font-bold text-xs text-white">
            TS
          </div>
        );
      case "tailwind":
        return (
          <svg className="w-7 h-7 text-[#38bdf8]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.975 12 6.001 12z" />
          </svg>
        );
      case "bootstrap":
        return (
          <svg viewBox="0 0 64 64" className="w-7 h-7" aria-label="Bootstrap logo">
            <rect x="2" y="2" width="60" height="60" rx="14" fill="#7b11f8" />
            <path
              d="M24 18h8.5c7.2 0 12.8 4.2 12.8 10.6 0 4-2.1 7.1-5.5 8.5 4.1 1.2 6.8 4.6 6.8 9.3C46.6 50.2 40.8 54 32.5 54H24V18Zm8.4 15.4h3c3.4 0 5.4-1.8 5.4-4.5 0-2.5-1.8-4.2-5.1-4.2h-3.3v8.7Zm.5 15.2h3.2c3.6 0 5.8-1.8 5.8-4.9 0-3.3-2.3-4.8-6-4.8H32.9v9.7Z"
              fill="#fff"
            />
            <path d="M20 24.5h7.5v18.5H20z" fill="#cdb4ff" opacity="0.9"/>
          </svg>
        );
      case "html5":
        return (
          <div className="w-7 h-7 rounded-md bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center font-black text-xs text-white">
            5
          </div>
        );
      case "css3":
        return (
          <div className="w-7 h-7 rounded-md bg-gradient-to-br from-blue-500 to-sky-600 flex items-center justify-center font-black text-xs text-white">
            3
          </div>
        );
      case "nodejs":
        return (
          <div className="w-7 h-7 rounded-md bg-emerald-600 flex items-center justify-center font-bold text-xs text-white">
            JS
          </div>
        );
      case "express":
        return <span className="font-mono font-bold text-xs text-neutral-300">Express</span>;
      case "restapi":
        return (
          <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      case "jwt":
        return (
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center text-[9px] font-black text-white">
            JWT
          </div>
        );
      case "socketio":
        return (
          <div className="w-7 h-7 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-amber-400 text-xs">
            ⚡
          </div>
        );
      case "postgresql":
        return <span className="text-xl">🐘</span>;
      case "prisma":
        return <span className="text-lg font-mono font-bold text-white">△</span>;
      case "redis":
        return (
          <div className="w-6 h-6 bg-red-600 rounded-sm flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
            R
          </div>
        );
      case "database-design":
        return (
          <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2 1.5 3 3.5 3s3.5-1 3.5-3V7c0-2-1.5-3-3.5-3S4 5 4 7zm9 0v10c0 2 1.5 3 3.5 3s3.5-1 3.5-3V7c0-2-1.5-3-3.5-3S13 5 13 7z" />
          </svg>
        );
      case "migrations":
        return (
          <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        );
      case "docker":
        return <span className="text-xl">🐳</span>;
      case "nginx":
        return (
          <div className="w-6 h-6 rounded bg-emerald-700 flex items-center justify-center font-bold text-xs text-white">
            N
          </div>
        );
      case "git":
        return (
          <div className="w-6 h-6 bg-orange-600 rounded flex items-center justify-center text-xs text-white font-bold">
            git
          </div>
        );
      case "github":
        return <span className="text-xl">🐙</span>;
      case "linux":
        return <span className="text-xl">🐧</span>;
      case "pm2":
        return (
          <div className="w-7 h-7 rounded bg-emerald-900 border border-emerald-500/40 flex items-center justify-center font-bold text-[10px] text-emerald-400">
            PM2
          </div>
        );
      case "jira":
        return (
          <svg viewBox="0 0 64 64" className="w-7 h-7" aria-label="Jira logo">
            <rect x="2" y="2" width="60" height="60" rx="14" fill="#2684ff" />
            <path
              d="M20 18.5h18.4c7.8 0 14 6.2 14 14v1.6c0 7.8-6.2 14-14 14H28.5v-7.2h9.9c3.7 0 6.7-3 6.7-6.7v-.2c0-3.7-3-6.7-6.7-6.7H20v-5.7Z"
              fill="#fff"
            />
            <path
              d="M26.5 44.8h11.7c5.7 0 10.3-4.6 10.3-10.3v-.8H34c-3.7 0-6.7 3-6.7 6.7v4.4Z"
              fill="#dfe6ff"
              opacity="0.9"
            />
            <circle cx="22" cy="47" r="4.1" fill="#ffab00" />
          </svg>
        );
      case "slack":
        return (
          <svg viewBox="0 0 64 64" className="w-7 h-7" aria-label="Slack logo">
            <rect x="2" y="2" width="60" height="60" rx="14" fill="#4a154b" />
            <g fill="#fff">
              <path d="M26.5 18.5c-2.3 0-4.2 1.9-4.2 4.2 0 2.3 1.9 4.2 4.2 4.2h4.2v-4.2c0-2.3-1.9-4.2-4.2-4.2Zm0 10.8h-8.4c-2.3 0-4.2 1.9-4.2 4.2 0 2.3 1.9 4.2 4.2 4.2h8.4c2.3 0 4.2-1.9 4.2-4.2 0-2.3-1.9-4.2-4.2-4.2Z"/>
              <path d="M45.5 18.5c0-2.3-1.9-4.2-4.2-4.2-2.3 0-4.2 1.9-4.2 4.2v4.2h4.2c2.3 0 4.2-1.9 4.2-4.2Zm-10.8 0v8.4c0 2.3 1.9 4.2 4.2 4.2 2.3 0 4.2-1.9 4.2-4.2v-8.4c0-2.3-1.9-4.2-4.2-4.2-2.3 0-4.2 1.9-4.2 4.2Z"/>
              <path d="M18.5 37.5c-2.3 0-4.2 1.9-4.2 4.2 0 2.3 1.9 4.2 4.2 4.2h4.2v-4.2c0-2.3-1.9-4.2-4.2-4.2Zm0 10.8h-8.4c-2.3 0-4.2 1.9-4.2 4.2 0 2.3 1.9 4.2 4.2 4.2h8.4c2.3 0 4.2-1.9 4.2-4.2 0-2.3-1.9-4.2-4.2-4.2Z"/>
              <path d="M45.5 37.5c0-2.3-1.9-4.2-4.2-4.2-2.3 0-4.2 1.9-4.2 4.2v4.2h4.2c2.3 0 4.2-1.9 4.2-4.2Zm-10.8 0v8.4c0 2.3 1.9 4.2 4.2 4.2 2.3 0 4.2-1.9 4.2-4.2v-8.4c0-2.3-1.9-4.2-4.2-4.2-2.3 0-4.2 1.9-4.2 4.2Z"/>
            </g>
          </svg>
        );
      case "figma":
        return (
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className="text-xs">🎨</span>
          </div>
        );
      case "postman":
        return (
          <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-xs text-white font-bold">
            P
          </div>
        );
      case "vscode":
        return (
          <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
          </svg>
        );
      case "eslint":
        return (
          <div className="w-6 h-6 rounded bg-purple-700 flex items-center justify-center text-[10px] font-bold text-white">
            ES
          </div>
        );
      case "prettier":
        return (
          <div className="w-6 h-6 rounded bg-gradient-to-tr from-pink-500 to-amber-500 flex items-center justify-center text-[10px] font-bold text-white">
            P
          </div>
        );
      case "jest":
        return <span className="text-xl">🃏</span>;
      case "cicd":
        return (
          <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      case "agile":
        return (
          <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return <span className="text-xs">⚡</span>;
    }
  };

  return (
    <div className="pt-28 pb-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-[#e5a93c]/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-10 w-[400px] h-[400px] bg-neutral-800/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium mb-3">
          <Link
            href="/"
            className="text-[#e5a93c] hover:text-[#f5b945] transition-colors"
          >
            Home
          </Link>
          <span className="text-neutral-600">/</span>
          <span className="text-neutral-400">Skills</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-3">
            Skills &amp; Technologies
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base">
            Technologies I use to build modern and scalable applications.
          </p>
        </div>

        {/* Layout: Left Sidebar Filter + Right Categorized Skill Cards */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Categories Menu (3 cols) */}
          <div className="lg:col-span-3 space-y-2">
            <div className="rounded-2xl bg-[#0c0e13] border border-neutral-800/80 p-3 space-y-1.5 shadow-xl">
              {skillFilterCategories.map((cat) => {
                const isActive = activeFilter === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-between cursor-pointer ${isActive
                        ? "bg-[#e5a93c]/10 text-[#e5a93c] border border-[#e5a93c]/40 shadow-sm"
                        : "text-neutral-400 hover:text-white hover:bg-neutral-900/60 border border-transparent"
                      }`}
                  >
                    <div className="flex items-center gap-2">
                      {isActive && <span className="text-[#e5a93c] text-xs">▸</span>}
                      <span>{cat}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Skill Cards Grid (9 cols) */}
          <div className="lg:col-span-9 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {visibleCategories.map((category) => (
                <div
                  key={category.id}
                  className={`rounded-3xl bg-[#0c0e13] border border-neutral-800/80 p-6 shadow-xl hover:border-neutral-700/80 transition-all duration-300 flex flex-col items-start gap-6 ${category.id === "others" && activeFilter === "All Skills"
                      ? "md:col-span-2"
                      : ""
                    }`}
                >
                  {/* Category Title */}
                  <h3 className="text-sm font-bold text-[#e5a93c] tracking-wider uppercase mb-6">
                    {category.name}
                  </h3>

                  {/* Skills Grid */}
                  <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex flex-col items-center justify-center group cursor-default"
                      >
                        <div className="w-12 h-12 rounded-2xl bg-[#12151c] border border-neutral-800/80 group-hover:border-[#e5a93c]/40 group-hover:scale-105 transition-all duration-200 flex items-center justify-center shadow-inner">
                          {renderSkillIcon(skill.iconKey)}
                        </div>
                        <span className="text-[11px] sm:text-xs font-medium text-neutral-300 mt-2 text-center group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section: Soft Skills / Attributes (4 Cards) */}
        <div className="mt-16 pt-10 border-t border-neutral-800/40">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {softSkills.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-[#0c0e13] border border-neutral-800/80 p-5 shadow-lg flex items-start gap-4 hover:border-neutral-700/80 transition-all duration-200"
              >
                {/* Icon Container */}
                <div className="w-10 h-10 rounded-xl bg-[#141820] border border-neutral-800 flex items-center justify-center text-[#e5a93c] shrink-0 mt-0.5">
                  {item.iconName === "problem-solving" && (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  )}
                  {item.iconName === "clean-code" && (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  )}
                  {item.iconName === "communication" && (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  )}
                  {item.iconName === "fast-learner" && (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  )}
                </div>

                {/* Details */}
                <div>
                  <h4 className="text-white font-bold text-sm sm:text-base leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-neutral-400 text-xs mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
