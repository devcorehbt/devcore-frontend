import { BannerLoop } from '@/features/banner';
import { CasesSection } from '@/features/cases';
import { HeroSection } from '@/features/hero';
import { ProblemSolutionSection } from '@/features/problem-solution';
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
      <CasesSection />
      <ProblemSolutionSection />
    </>
  );
}
