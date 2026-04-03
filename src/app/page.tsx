import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import TechStackSection from "@/components/sections/TechStackSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-950 dark:bg-black dark:text-zinc-50">
      <Header />
      <main className="relative pt-16">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-[-120px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.35),transparent_60%)] blur-3xl" />
          <div className="absolute bottom-[-140px] left-[10%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.22),transparent_55%)] blur-3xl" />
        </div>

        <HeroSection />

        <section id="about" className="scroll-mt-24">
          <AboutSection />
        </section>

        <section id="experience" className="scroll-mt-24">
          <ExperienceTimeline />
        </section>

        <section id="skills" className="scroll-mt-24">
          <SkillsSection />
        </section>

        <section id="projects" className="scroll-mt-24">
          <ProjectsSection />
        </section>

        <section id="stack" className="scroll-mt-24">
          <TechStackSection />
        </section>

        <section id="contact" className="scroll-mt-24">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}
