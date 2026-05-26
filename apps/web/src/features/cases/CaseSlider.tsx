import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { cn } from '@devcore/ui';
import { CaseCard } from './CaseCard';
import type { CaseStudy } from './cases.data';

interface CaseSliderProps {
  cases: CaseStudy[];
  intervalMs?: number;
}

export function CaseSlider({ cases, intervalMs = 5000 }: CaseSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || cases.length <= 1) return;
    const id = setTimeout(() => {
      setActiveIndex((index) => (index + 1) % cases.length);
    }, intervalMs);
    return () => clearTimeout(id);
  }, [activeIndex, isPaused, cases.length, intervalMs]);

  const activeCase = cases[activeIndex];

  return (
    <div
      className="relative w-full lg:mt-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        {activeCase ? <CaseCard key={activeCase.title} {...activeCase} /> : null}
      </AnimatePresence>

      {cases.length > 1 ? (
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {cases.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Ir para o case ${index + 1}`}
              aria-current={index === activeIndex}
              className={cn(
                'h-3 w-3 rounded-full transition-all duration-300',
                index === activeIndex ? 'scale-110 bg-purple-500' : 'bg-white/30',
              )}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
