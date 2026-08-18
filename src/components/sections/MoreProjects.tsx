import React from "react";
import Image from "next/image";
import { SectionHeader } from "@/components/ui";
import { moreProjects } from "@/data/portfolio";

export default function MoreProjects() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="More Projects"
          linkText="View All Projects"
          linkHref="#projects"
        />

        <div className="grid lg:grid-cols-2 gap-6">
          {moreProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-[#0f1115] border border-neutral-800/80 hover:border-neutral-700 overflow-hidden transition-all duration-300 group flex flex-col sm:flex-row shadow-lg"
            >
              {/* Left screenshot container */}
              <div className="sm:w-1/2 relative min-h-[220px] bg-neutral-950 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent sm:hidden" />
              </div>

              {/* Right content */}
              <div className="sm:w-1/2 p-6 sm:p-7 flex flex-col justify-between">
                <div>
                  <h3 className="text-white font-bold text-base sm:text-lg mb-2 group-hover:text-[#e5a93c] transition-colors">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#e5a93c]/10 text-[#e5a93c] border border-[#e5a93c]/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <a
                  href="#projects"
                  className="text-[#e5a93c] text-xs font-bold hover:text-[#f5b945] inline-flex items-center gap-1.5 transition-colors group/link mt-2"
                >
                  <span>View Project</span>
                  <span className="group-hover/link:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
