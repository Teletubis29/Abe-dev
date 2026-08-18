"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (pathname === "/") {
        const sections = ["home", "projects", "skills", "experience", "contact"];
        for (const sectionId of [...sections].reverse()) {
          const el = document.getElementById(sectionId);
          if (el && window.scrollY >= el.offsetTop - 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const isLinkActive = (href: string) => {
    if (href === "/about") {
      return pathname === "/about";
    }
    if (href === "/projects") {
      return pathname === "/projects";
    }
    if (href === "/skills") {
      return pathname === "/skills";
    }
    if (href === "/contact") {
      return pathname === "/contact";
    }
    if (href === "/" || href === "/#home" || href === "#home") {
      return pathname === "/" && activeSection === "home";
    }
    if (pathname === "/" && href.startsWith("/#")) {
      const section = href.replace("/#", "");
      return activeSection === section;
    }
    return false;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#08090a]/90 backdrop-blur-md border-b border-neutral-800/60 shadow-lg shadow-black/40"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-[#e5a93c] font-black text-2xl tracking-tighter">
              ▲
            </span>
            <span className="text-white font-extrabold text-xl tracking-wider group-hover:text-[#e5a93c] transition-colors">
              ABE
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-1 text-sm font-medium transition-colors ${
                    active
                      ? "text-[#e5a93c]"
                      : "text-neutral-300 hover:text-white"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#e5a93c] rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Download CV Button */}
          <div className="hidden lg:block">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold tracking-wide border border-neutral-700 hover:border-[#e5a93c] text-white hover:text-[#e5a93c] bg-neutral-900/40 backdrop-blur-sm transition-all duration-300"
            >
              <span>Download CV</span>
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-neutral-800 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-neutral-800 bg-[#08090a]/95 backdrop-blur-xl">
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isLinkActive(link.href)
                      ? "text-[#e5a93c] bg-neutral-900"
                      : "text-neutral-300 hover:text-[#e5a93c] hover:bg-neutral-900"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 px-4">
                <Link
                  href="/#contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold border border-neutral-700 text-white hover:border-[#e5a93c]"
                >
                  Download CV
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
