import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutMe from "@/components/sections/AboutMe";

export const metadata: Metadata = {
  title: "About Me | Abe - Fullstack Developer",
  description:
    "Learn more about Abe, a Fullstack Developer building scalable, production-ready web applications.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#08090a] text-neutral-100 flex flex-col selection:bg-[#e5a93c]/30 selection:text-[#e5a93c]">
      <Navbar />
      <main className="flex-1">
        <AboutMe />
      </main>
      <Footer />
    </div>
  );
}
