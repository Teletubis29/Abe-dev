import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectsContent from "@/components/sections/ProjectsContent";

export const metadata: Metadata = {
  title: "Projects | Abe - Fullstack Developer",
  description:
    "Explore selected projects built by Abe, featuring production-ready web applications, SaaS platforms, and dashboards.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#08090a] text-neutral-100 flex flex-col selection:bg-[#e5a93c]/30 selection:text-[#e5a93c]">
      <Navbar />
      <main className="flex-1">
        <ProjectsContent />
      </main>
      <Footer />
    </div>
  );
}
