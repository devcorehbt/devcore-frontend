import star from '@/assets/icons/star-service.svg';
import { siteConfig } from '@/config/site';
import { ServicesCarousel } from './ServicesCarousel';

export function ServicesSection() {
  return (
    <section className="bg-bg-primary text-text-primary">
      <ul className="mx-auto mb-12 flex max-w-4xl flex-wrap justify-center gap-x-6 gap-y-5 lg:px-36">
        {siteConfig.services.map((service) => (
          <li
            key={service}
            className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-3 text-xs font-medium"
          >
            <img src={star} alt="" className="h-3 w-3" />
            {service}
          </li>
        ))}
      </ul>

      <ServicesCarousel />
    </section>
  );
}
