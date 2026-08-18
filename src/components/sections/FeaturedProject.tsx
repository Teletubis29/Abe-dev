import React from "react";
import Image from "next/image";
import { featuredProject } from "@/data/portfolio";

export default function FeaturedProject() {
  return (
    <section id="projects" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[#0c0e12] border border-neutral-800/90 overflow-hidden shadow-2xl">
          {/* Golden 01 Badge Bookmark */}
          <div className="absolute top-0 right-10 z-20">
            <div className="bg-gradient-to-b from-[#e5a93c] to-[#d49428] text-black font-black text-sm px-3.5 pt-3 pb-4 rounded-b-lg shadow-lg flex flex-col items-center">
              <span className="text-[9px] font-bold tracking-widest uppercase opacity-80">
                PROJ
              </span>
              <span className="text-base font-extrabold leading-none">01</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-0">
            {/* Left info column (5 cols) */}
            <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
              {/* Badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border border-[#e5a93c]/40 bg-[#e5a93c]/5 text-[#e5a93c] mb-5 w-fit">
                FEATURED PROJECT
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                {featuredProject.title}
              </h2>

              {/* Description */}
              <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                {featuredProject.description}
              </p>

              {/* Details List */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {featuredProject.details?.map((detail) => (
                  <div key={detail.label} className="flex items-start gap-3">
                    <span className="text-base mt-0.5 text-[#e5a93c]">
                      {detail.icon}
                    </span>
                    <div>
                      <p className="text-neutral-400 text-[11px] font-medium uppercase tracking-wider">
                        {detail.label}
                      </p>
                      <p className="text-neutral-200 text-xs font-semibold">
                        {detail.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={featuredProject.caseStudyUrl || "#"}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#e5a93c] hover:bg-[#f5b945] text-black font-bold text-xs transition-all duration-200 shadow-md shadow-[#e5a93c]/15"
                >
                  <span>View Case Study</span>
                  <span>→</span>
                </a>

                <a
                  href={featuredProject.liveUrl || "#"}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#141820] border border-neutral-700 hover:border-neutral-500 text-white font-medium text-xs transition-all duration-200"
                >
                  <span>Live Website</span>
                  <svg
                    className="w-3.5 h-3.5 text-neutral-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right mockup column (7 cols) */}
            <div className="lg:col-span-7 relative p-6 sm:p-10 flex items-center justify-center bg-gradient-to-br from-neutral-950 via-[#0a0c10] to-[#121620]">
              {/* Browser Mockup Window */}
              <div className="relative w-full rounded-xl overflow-hidden border border-neutral-700/60 shadow-2xl bg-neutral-900">
                {/* Browser Top Bar */}
                <div className="flex items-center gap-1.5 px-3 py-2 bg-neutral-950 border-b border-neutral-800">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <div className="mx-auto w-1/2 h-3.5 bg-neutral-800/80 rounded-md text-[9px] text-neutral-400 flex items-center justify-center font-mono">
                    maisonderaux.com
                  </div>
                </div>

                {/* Screenshot */}
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={featuredProject.image}
                    alt="Production E-Commerce Platform"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Mobile Phone Mockup Overlay */}
              <div className="hidden sm:block absolute -bottom-2 right-4 sm:right-8 w-36 sm:w-44 aspect-[9/18] rounded-2xl p-1 bg-neutral-800 border-2 border-neutral-700 shadow-2xl z-10">
                <div className="relative w-full h-full rounded-[14px] overflow-hidden bg-black">
                  <Image
                    src={featuredProject.mobileImage || featuredProject.image}
                    alt="Mobile view"
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-10 h-2 bg-neutral-900 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
