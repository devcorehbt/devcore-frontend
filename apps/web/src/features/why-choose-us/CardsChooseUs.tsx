import { BentoCard } from './BentoCard';
import { bentoCards } from './why-choose-us.data';

export function CardsChooseUs() {
  return (
    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-12 md:grid-cols-3 md:gap-6 lg:grid-cols-8">
      {bentoCards.map((card) => (
        <BentoCard key={card.title} {...card} />
      ))}
    </div>
  );
}
