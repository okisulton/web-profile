import { HeroSection } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/About";
import { ProjectsSection } from "@/components/sections/Projects";
import { SkillsSection } from "@/components/sections/Skills";
import { TestimonialsSection } from "@/components/sections/Testimonials";
import { ContactSection } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}