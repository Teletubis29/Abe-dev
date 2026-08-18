import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactContent from "@/components/sections/ContactContent";

export const metadata: Metadata = {
  title: "Contact | Abe - Fullstack Developer",
  description:
    "Get in touch with Abe for freelance, full-time, or collaboration opportunities.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#08090a] text-neutral-100 flex flex-col selection:bg-[#e5a93c]/30 selection:text-[#e5a93c]">
      <Navbar />
      <main className="flex-1">
        <ContactContent />
      </main>
      <Footer />
    </div>
  );
}