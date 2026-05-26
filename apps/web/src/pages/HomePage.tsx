import { BannerLoop } from '@/features/banner';
import { HeroSection } from '@/features/hero';
import { ServicesSection } from '@/features/services';
import { OurSolutions } from '@/features/solutions';
import { WhyChooseUs } from '@/features/why-choose-us';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <OurSolutions />
      <WhyChooseUs />
      <BannerLoop />
    </>
  );
}
