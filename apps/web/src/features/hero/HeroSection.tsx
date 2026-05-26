import { Link } from 'react-router-dom';
import elas from '@/assets/hero/elas.png';
import eles from '@/assets/hero/eles.png';
import { siteConfig } from '@/config/site';
import { AnimatedGridBackground } from './AnimatedGridBackground';

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden bg-bg-primary px-4 pb-20 pt-24 text-text-primary md:px-28">
      <AnimatedGridBackground />

      <div className="relative z-10 w-full max-w-4xl text-center">
        <h1 className="flex flex-col items-center justify-center text-4xl font-normal leading-tight md:text-3xl lg:gap-4">
          <span className="flex flex-wrap items-center justify-center lg:gap-2">
            <span className="text-purple_text">Transformando</span>
            <img src={elas} alt="elas" className="h-auto w-28 pr-2 md:pr-0 lg:w-40" />
            <span>Ideias</span>
          </span>

          <span className="flex flex-wrap items-center justify-center lg:gap-2">
            <span>em</span>
            <img src={eles} alt="eles" className="h-auto w-28 pl-2 lg:w-40" />
            <span>
              Soluções <span className="text-purple_text">Inovadoras</span>
            </span>
          </span>
        </h1>

        <Link
          to={siteConfig.cta.to}
          className="mt-12 inline-block rounded-xl bg-purple_text px-6 py-3 font-semibold text-text-primary transition-colors hover:bg-purple-600 sm:px-9 sm:py-4"
        >
          Comece agora →
        </Link>
      </div>
    </section>
  );
}
