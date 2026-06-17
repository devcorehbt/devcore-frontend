import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@devcore/ui';
import { FaqCard } from './FaqCard';
import { faqItems } from './faq.data';
import { useHorizontalScroll } from './useHorizontalScroll';

const CARD_GAP = 16;

export function FaqSection() {
  const { scrollRef, canScrollLeft, canScrollRight, scrollByCard } = useHorizontalScroll(
    '.faq-card',
    CARD_GAP,
  );

  const navButtonClass = (enabled: boolean) =>
    cn(
      'flex h-8 w-8 items-center justify-center rounded-full transition',
      enabled ? 'bg-purple-500 text-text-primary hover:bg-purple-600' : 'bg-white/10 text-white/30',
    );

  return (
    <section className="bg-bg-primary py-10 text-text-primary">
      <div className="mb-4 flex items-center justify-between px-10 md:px-28">
        <div>
          <p className="mb-5 text-sm uppercase text-white/50">FAQ</p>
          <h2 className="mb-10 text-3xl font-semibold sm:text-4xl">Perguntas frequentes</h2>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollByCard('left')}
            disabled={!canScrollLeft}
            aria-label="Ver pergunta anterior"
            className={navButtonClass(canScrollLeft)}
          >
            <ArrowLeft size={16} />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard('right')}
            disabled={!canScrollRight}
            aria-label="Ver próxima pergunta"
            className={navButtonClass(canScrollRight)}
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="scrollbar-hide flex gap-4 overflow-x-auto scroll-smooth px-6 pb-10 lg:px-28"
      >
        {faqItems.map((item) => (
          <FaqCard key={item.id} icon={item.icon} title={item.title} content={item.content} />
        ))}
      </div>
    </section>
  );
}
