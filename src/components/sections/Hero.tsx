import React from "react";
import Image from "next/image";
import { heroTechStack } from "@/data/portfolio";
import { renderSkillIcon } from "@/lib/skill-icons";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-[#e5a93c]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -top-20 left-1/4 w-[400px] h-[400px] bg-neutral-800/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Pill Badge */}
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase border border-[#e5a93c]/40 bg-[#e5a93c]/5 text-[#e5a93c]">
              FULLSTACK DEVELOPER
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
              I build production-ready
              <br />
              web{" "}
              <span className="text-[#e5a93c]">
                applications.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-neutral-400 text-base sm:text-lg max-w-xl leading-relaxed font-normal">
              Fullstack Developer with experience building and deploying
              scalable web applications. I love turning ideas into real products
              that solve problems.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#e5a93c] hover:bg-[#f5b945] text-black font-bold text-sm transition-all duration-200 shadow-lg shadow-[#e5a93c]/20 hover:translate-y-[-1px]"
              >
                <span>View My Work</span>
                <span>→</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#12151b] border border-neutral-700 hover:border-neutral-500 text-white font-medium text-sm transition-all duration-200"
              >
                <span>Contact Me</span>
                <svg
                  className="w-4 h-4 text-neutral-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>

            {/* Tech Stack Row */}
            <div className="pt-6 space-y-3">
              <p className="text-neutral-500 text-[11px] font-bold tracking-widest uppercase">
                TECH STACK
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {heroTechStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="w-10 h-10 rounded-xl bg-[#12151b] border border-neutral-800 flex items-center justify-center hover:border-[#e5a93c]/50 hover:bg-[#181d25] transition-all duration-200 cursor-default"
                    title={tech.name}
                  >
                    {tech.iconKey ? renderSkillIcon(tech.iconKey) : <span>{tech.icon}</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Hero Image (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Glow framing */}
            <div className="relative w-full max-w-[440px] aspect-[4/5] rounded-3xl p-1 bg-gradient-to-b from-[#e5a93c]/30 via-neutral-800/40 to-neutral-900/60 shadow-2xl">
              <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-neutral-950">
                <Image
                  src="/images/hero1.png"
                  alt="ABE — Fullstack Developer"
                  fill
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
              </div>

              {/* Floating "Available for work" Badge */}
              <div className="absolute bottom-4 right-4 bg-[#0f1115]/90 backdrop-blur-md border border-neutral-700/80 rounded-2xl px-4 py-2.5 flex items-center gap-3 shadow-xl">
                <div className="relative flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full" />
                  <div className="absolute w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping opacity-75" />
                </div>
                <div>
                  <p className="text-white text-xs font-semibold leading-tight">
                    Available for work
                  </p>
                  <p className="text-neutral-400 text-[10px] leading-tight mt-0.5">
                    Open to remote opportunities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
