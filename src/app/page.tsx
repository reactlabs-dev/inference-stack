import { LeadCaptureForm } from '@/components/LeadCaptureForm';
import { AboutSection } from '@/components/sections/AboutSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { CaseStudiesSection } from '@/components/sections/ProjectsSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { SectionWithParticles } from '@/components/SectionWithParticles';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <SectionWithParticles>
        <AboutSection />
        <ServicesSection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <LeadCaptureForm />
        <ContactSection />
      </SectionWithParticles>
    </>
  );
}
