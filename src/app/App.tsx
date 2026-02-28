import { useEffect } from "react";
import { SiteFooter } from "../components/layout/SiteFooter";
import { SiteHeader } from "../components/layout/SiteHeader";
import { AboutSection } from "../components/sections/AboutSection";
import { ContactSection } from "../components/sections/ContactSection";
import { EducationSection } from "../components/sections/EducationSection";
import { ExperienceSection } from "../components/sections/ExperienceSection";
import { HeroSection } from "../components/sections/HeroSection";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import { SkillsSection } from "../components/sections/SkillsSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { pageContent } from "./content";

export default function App() {
  useEffect(() => {
    // Add a reveal animation class when elements enter the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className='site'>
      <SiteHeader brand={pageContent.brand} />

      <main className='shell'>
        <HeroSection hero={pageContent.hero} />
        <div className='reveal'>
          <AboutSection about={pageContent.about} />
        </div>
        <div className='reveal reveal-delay-1'>
          <SkillsSection groups={pageContent.skillGroups} />
        </div>
        <div className='reveal reveal-delay-2'>
          <ExperienceSection items={pageContent.experience} />
        </div>
        <div className='reveal reveal-delay-2'>
          <EducationSection items={pageContent.education} />
        </div>
        <div className='reveal reveal-delay-2'>
          <ProjectsSection
            projects={pageContent.projects}
            githubUrl={pageContent.contact.githubUrl}
          />
        </div>
        <div className='reveal reveal-delay-3'>
          <TestimonialsSection items={pageContent.testimonials} />
        </div>
        <div className='reveal reveal-delay-3'>
          <ContactSection contact={pageContent.contact} />
        </div>
      </main>

      <a href='#home' className='scroll-top' aria-label='Back to top'>
        ^
      </a>

      <SiteFooter brand={pageContent.brand} />
    </div>
  );
}
