"use client";

import React from "react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-neutral-800/80 bg-[#08090a] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          {/* Copyright */}
          <p>© 2026 ABE. All rights reserved.</p>

          {/* Built With */}
          <p className="flex items-center gap-1.5">
            <span>Built with Next.js & Tailwind CSS</span>
            <span className="text-[#e5a93c]">💛</span>
          </p>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="hover:text-[#e5a93c] transition-colors inline-flex items-center gap-1 cursor-pointer"
          >
            <span>Back to top</span>
            <span>↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
