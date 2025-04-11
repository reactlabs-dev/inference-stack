import { AboutSection } from '@/components/sections/AboutSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ResourcesSection } from '@/components/sections/ResourcesSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { SectionWithParticles } from '@/components/SectionWithParticles';

export default function Home() {
  return (
    <>
        <HeroSection />
        <SectionWithParticles>
          <AboutSection />
          <ServicesSection />
          <ProjectsSection />
          <ResourcesSection />
          <ContactSection />
        </SectionWithParticles>
    </>
  );
}
