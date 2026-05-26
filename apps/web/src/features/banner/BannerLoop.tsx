import { cn } from '@devcore/ui';
import star from '@/assets/icons/star.svg';

interface BannerLoopProps {
  words?: string[];
  durationSeconds?: number;
  className?: string;
}

const DEFAULT_WORDS = ['INOVAÇÃO', 'ESTRATÉGIA', 'TECNOLOGIA'];

/** Marquee horizontal infinito de palavras-chave (usa as utilities .marquee-* do CSS global). */
export function BannerLoop({
  words = DEFAULT_WORDS,
  durationSeconds = 5,
  className,
}: BannerLoopProps) {
  // Triplica a lista para um loop visualmente contínuo.
  const items = [...words, ...words, ...words];

  return (
    <div className="marquee-container bg-bg-primary py-6 pb-0 lg:pb-24 lg:pt-28" aria-hidden>
      <div
        className={cn(
          'marquee-track text-3xl font-bold tracking-wide text-text-gray-400 md:text-5xl',
          className,
        )}
        style={{ animationDuration: `${durationSeconds}s` }}
      >
        {items.map((word, index) => (
          <span key={`${word}-${index}`} className="flex items-center gap-4">
            <span>{word}</span>
            <img src={star} alt="" className="h-5 w-5" />
          </span>
        ))}
      </div>
    </div>
  );
}
