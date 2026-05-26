import { HeroSection } from '@/features/hero';
import { ServicesSection } from '@/features/services';
import { OurSolutions } from '@/features/solutions';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <OurSolutions />
    </>
  );
}
