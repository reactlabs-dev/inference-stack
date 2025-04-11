import { AboutSection } from '@/components/sections/AboutSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ResourcesSection } from '@/components/sections/ResourcesSection';
import { ServicesSection } from '@/components/sections/ServicesSection';

export default function Home() {
  return (
    <>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ResourcesSection />
        <ContactSection />
    </>
  );
}
