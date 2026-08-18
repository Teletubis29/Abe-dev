import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SkillsContent from "@/components/sections/SkillsContent";

export const metadata: Metadata = {
  title: "Skills & Technologies | Abe - Fullstack Developer",
  description:
    "Explore the technologies and skills Abe uses to build modern, production-ready fullstack web applications.",
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-[#08090a] text-neutral-100 flex flex-col selection:bg-[#e5a93c]/30 selection:text-[#e5a93c]">
      <Navbar />
      <main className="flex-1">
        <SkillsContent />
      </main>
      <Footer />
    </div>
  );
}
