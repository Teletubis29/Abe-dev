"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { aboutData } from "@/data/portfolio";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function AboutMe() {
  return (
    <div className="pt-28 pb-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-[#e5a93c]/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-10 w-[400px] h-[400px] bg-neutral-800/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium mb-3">
          <Link
            href="/"
            className="text-[#e5a93c] hover:text-[#f5b945] transition-colors"
          >
            Home
          </Link>
          <span className="text-neutral-600">/</span>
          <span className="text-neutral-400">About</span>
        </nav>

        {/* Page Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-8">
          About Me
        </h1>

        {/* Main Grid: Left Intro & Info, Right Photo & Stats */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Intro Headline */}
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-100 leading-snug">
              I&apos;m {aboutData.name}, a{" "}
              <span className="text-[#e5a93c] font-bold">
                {aboutData.role}
              </span>{" "}
              who builds production-ready web applications.
            </h2>

            {/* Bio Paragraph */}
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-normal">
              {aboutData.bio}
            </p>

            {/* Info Card Box (2x2 grid) */}
            <div className="rounded-2xl bg-[#0e1117] border border-neutral-800/80 p-5 sm:p-6 shadow-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                {/* Name */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#141820] border border-neutral-800 flex items-center justify-center text-[#e5a93c] shrink-0">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-neutral-400 text-xs font-semibold">Name</p>
                    <p className="text-white text-sm font-medium mt-0.5">
                      {aboutData.name}
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#141820] border border-neutral-800 flex items-center justify-center text-[#e5a93c] shrink-0">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-neutral-400 text-xs font-semibold">Location</p>
                    <p className="text-white text-sm font-medium mt-0.5">
                      {aboutData.location}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#141820] border border-neutral-800 flex items-center justify-center text-[#e5a93c] shrink-0">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-neutral-400 text-xs font-semibold">Email</p>
                    <a
                      href={`mailto:${aboutData.email}`}
                      className="text-white text-sm font-medium mt-0.5 hover:text-[#e5a93c] transition-colors break-all block"
                    >
                      {aboutData.email}
                    </a>
                  </div>
                </div>

                {/* Freelance Status */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#141820] border border-neutral-800 flex items-center justify-center text-[#e5a93c] shrink-0">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-neutral-400 text-xs font-semibold">Freelance</p>
                    <p className="text-white text-sm font-medium mt-0.5">
                      {aboutData.freelanceStatus}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions: Download CV + Social Icons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href={aboutData.cvUrl || "/#contact"}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#e5a93c] hover:bg-[#f5b945] text-black font-bold text-xs sm:text-sm transition-all duration-200 shadow-lg shadow-[#e5a93c]/20 hover:translate-y-[-1px]"
              >
                <span>Download CV</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </a>

              {/* Social icons */}
              <div className="flex items-center gap-2.5">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-[#0e1117] border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-[#e5a93c] hover:border-[#e5a93c]/50 transition-all duration-200 shadow-sm"
                    aria-label={link.platform}
                  >
                    {link.platform === "GitHub" && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    )}
                    {link.platform === "LinkedIn" && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    )}
                    {link.platform === "Threads" && (
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 192 192"
                      >
                        <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.0476C101.047 97.8687 102.991 97.737 104.902 97.6517C104.473 108.092 102.514 117.845 98.4405 129.507Z" />
                      </svg>
                    )}
                    {link.platform === "Instagram" && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Profile Image & Floating Stats (5 cols) */}
          <div className="lg:col-span-5 relative pt-4 lg:pt-0">
            {/* Profile Picture Box */}
            <div className="relative w-full max-w-[430px] mx-auto aspect-[4/5] rounded-3xl overflow-hidden bg-neutral-950 border border-neutral-800/80 shadow-2xl">
              <Image
                src={aboutData.image}
                alt={aboutData.name}
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Stats Card */}
            <div className="mt-4 sm:-mt-10 relative z-20 max-w-[460px] mx-auto bg-[#0b0e14]/95 backdrop-blur-xl border border-neutral-800/90 rounded-2xl p-4 sm:p-5 shadow-2xl shadow-black">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-2">
                {aboutData.stats.map((stat, idx) => (
                  <div
                    key={stat.label}
                    className={`flex flex-col items-center text-center px-2 ${
                      idx !== 0 ? "sm:border-l sm:border-neutral-800/80" : ""
                    }`}
                  >
                    {/* Icon */}
                    <div className="text-[#e5a93c] mb-1.5 flex items-center justify-center">
                      {stat.iconName === "experience" && (
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                          />
                        </svg>
                      )}
                      {stat.iconName === "projects" && (
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                          />
                        </svg>
                      )}
                      {stat.iconName === "technologies" && (
                        <svg
                          className="w-4 h-4"
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
                      {stat.iconName === "satisfaction" && (
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      )}
                    </div>

                    {/* Value */}
                    <span className="text-white font-extrabold text-base sm:text-lg tracking-tight">
                      {stat.value}
                    </span>

                    {/* Label */}
                    <span className="text-neutral-400 text-[10px] sm:text-[11px] leading-tight mt-0.5">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: My Journey */}
        <div className="mt-20 pt-10 border-t border-neutral-800/40">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-10">
            My Journey
          </h2>

          {/* Timeline Container */}
          <div className="relative">
            {/* Horizontal Line on Desktop */}
            <div className="hidden md:block absolute top-[7px] left-2 right-2 h-[2px] bg-neutral-800 -z-0" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative z-10">
              {aboutData.journey.map((item, index) => (
                <div key={item.year} className="relative flex flex-col items-start group">
                  {/* Glowing Node Dot */}
                  <div className="flex items-center gap-3 md:block">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#e5a93c] ring-4 ring-[#e5a93c]/20 shadow-[0_0_12px_rgba(229,169,60,0.6)] shrink-0 transition-transform duration-300 group-hover:scale-125" />
                    <h3 className="md:hidden text-white font-bold text-base">
                      {item.year}
                    </h3>
                  </div>

                  {/* Desktop Year */}
                  <h3 className="hidden md:block text-white font-bold text-base sm:text-lg mt-5 tracking-tight">
                    {item.year}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mt-2 pl-6 md:pl-0">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
