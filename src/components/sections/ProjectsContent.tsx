"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projectCategories, projectsData } from "@/data/portfolio";

export default function ProjectsContent() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  const getBadgeStyle = (category?: string) => {
    switch (category) {
      case "E-Commerce":
        return "bg-indigo-500/10 text-indigo-400 border-indigo-500/30";
      case "SaaS":
        return "bg-purple-500/10 text-purple-400 border-purple-500/30";
      case "Web Application":
        return "bg-blue-500/10 text-blue-400 border-blue-500/30";
      case "Dashboard":
        return "bg-amber-500/10 text-amber-400 border-amber-500/30";
      default:
        return "bg-[#e5a93c]/10 text-[#e5a93c] border-[#e5a93c]/30";
    }
  };

  return (
    <div className="pt-28 pb-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-[#e5a93c]/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-10 w-[400px] h-[400px] bg-neutral-800/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-3">
            Projects
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base">
            Here are some of my selected projects.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-10">
          {projectCategories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#e5a93c] text-black shadow-lg shadow-[#e5a93c]/20"
                    : "bg-[#12151b] text-neutral-300 border border-neutral-800 hover:border-neutral-700 hover:text-white"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid (2x2) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl bg-[#0c0e13] border border-neutral-800/90 hover:border-neutral-700/80 p-6 sm:p-7 flex flex-col md:flex-row gap-6 shadow-2xl transition-all duration-300 group"
            >
              {/* Left Column: Project Info */}
              <div className="md:w-1/2 flex flex-col justify-between space-y-4">
                <div>
                  {/* Category Badge */}
                  <div
                    className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${getBadgeStyle(
                      project.category
                    )} mb-3`}
                  >
                    {project.category || "Project"}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug group-hover:text-[#e5a93c] transition-colors mb-2">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Stack Icons Row */}
                  <div className="flex flex-wrap items-center gap-2 mb-6">
                    {project.techStackIcons?.map((tech) => (
                      <div
                        key={tech.name}
                        title={tech.name}
                        className="w-7 h-7 rounded-lg bg-[#141820] border border-neutral-800 flex items-center justify-center text-xs font-semibold text-neutral-300 hover:border-[#e5a93c]/50 transition-colors"
                      >
                        {tech.icon === "N" ? (
                          <span className="font-mono font-bold text-[11px] text-white">
                            N
                          </span>
                        ) : tech.icon === "Ex" ? (
                          <span className="font-mono font-bold text-[10px] text-neutral-300">
                            Ex
                          </span>
                        ) : tech.icon === "TS" ? (
                          <span className="font-mono font-bold text-[10px] text-sky-400">
                            TS
                          </span>
                        ) : (
                          <span className="text-xs">{tech.icon}</span>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3">
                    <a
                      href={project.caseStudyUrl || "#"}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#141820] border border-neutral-700/80 hover:border-[#e5a93c] text-white hover:text-[#e5a93c] text-xs font-semibold transition-all duration-200"
                    >
                      <span>Case Study</span>
                      <span>→</span>
                    </a>

                    <a
                      href={project.liveUrl || "#"}
                      target={project.liveUrl?.startsWith("http") ? "_blank" : undefined}
                      rel={project.liveUrl?.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#141820] border border-neutral-700/80 hover:border-neutral-500 text-white text-xs font-semibold transition-all duration-200"
                    >
                      <span>Live Site</span>
                      <svg
                        className="w-3 h-3 text-neutral-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Preview Mockup */}
              <div className="md:w-1/2 relative rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800/80 min-h-[220px] md:min-h-[240px] flex items-center justify-center p-2">
                {project.id === "ecommerce-platform" ? (
                  <div className="relative w-full h-full min-h-[200px] flex items-center justify-center">
                    {/* Desktop Browser */}
                    <div className="w-[85%] rounded-xl overflow-hidden border border-neutral-700/60 shadow-xl bg-neutral-900">
                      <div className="flex items-center gap-1 px-2.5 py-1.5 bg-neutral-950 border-b border-neutral-800">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/80" />
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
                      </div>
                      <div className="relative aspect-[16/10] w-full">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover object-top"
                        />
                      </div>
                    </div>

                    {/* Mobile Mockup Overlay */}
                    <div className="absolute -bottom-2 right-1 w-20 sm:w-24 aspect-[9/18] rounded-xl p-0.5 bg-neutral-800 border border-neutral-700 shadow-2xl z-10">
                      <div className="relative w-full h-full rounded-[10px] overflow-hidden bg-black">
                        <Image
                          src={project.mobileImage || project.image}
                          alt="Mobile Preview"
                          fill
                          className="object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full h-full min-h-[200px] rounded-xl overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="relative rounded-3xl bg-[#0c0e13] border border-neutral-800/90 p-7 sm:p-9 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#e5a93c]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Have a project in mind?
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm mt-1">
              I&apos;m currently available for new opportunities.
            </p>
          </div>

          <div className="relative z-10">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#e5a93c] hover:bg-[#f5b945] text-black font-bold text-xs sm:text-sm transition-all duration-200 shadow-lg shadow-[#e5a93c]/20 hover:translate-y-[-1px]"
            >
              <span>Let&apos;s Work Together</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
