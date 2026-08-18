import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import FeaturedProject from "@/components/sections/FeaturedProject";
import TechFeatures from "@/components/sections/TechFeatures";
import MoreProjects from "@/components/sections/MoreProjects";
import TechStack from "@/components/sections/TechStack";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#08090a] text-neutral-100 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeaturedProject />
        <TechFeatures />
        <MoreProjects />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
