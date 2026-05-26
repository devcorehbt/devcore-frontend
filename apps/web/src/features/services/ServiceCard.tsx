import { type CSSProperties, useMemo } from 'react';
import star from '@/assets/icons/star-service.svg';

interface ServiceCardProps {
  tag: string;
  description: string;
}

const PARTICLE_COUNT = 25;

export function ServiceCard({ tag, description }: ServiceCardProps) {
  const particles = useMemo<CSSProperties[]>(
    () =>
      Array.from({ length: PARTICLE_COUNT }, () => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDuration: `${20 + Math.random() * 30}s`,
        animationDelay: `${Math.random() * 15}s`,
        opacity: Math.random() * 0.6 + 0.2,
      })),
    [],
  );

  return (
    <article className="relative flex h-[290px] w-[300px] flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-gradient-to-t from-gradient-from/20 via-gradient-via/50 to-gradient-to/10 p-5 transition-all hover:shadow-lg">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
        {particles.map((style, index) => (
          <span
            key={index}
            className="absolute h-0.5 w-0.5 animate-drift rounded-full bg-white/30"
            style={style}
          />
        ))}
      </div>

      <div className="relative z-10 flex h-full flex-col justify-between px-4">
        <span className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-border-tertiary bg-bg-dark py-3 text-xs text-text-primary">
          <img src={star} alt="" className="h-3 w-3" />
          {tag}
        </span>

        <p className="mb-auto mt-8 text-xs leading-relaxed text-white/70">{description}</p>

        <button
          type="button"
          className="w-fit self-start rounded-md border border-white/30 px-4 py-1 text-xs text-text-primary transition hover:bg-white/10"
        >
          Saber mais
        </button>
      </div>
    </article>
  );
}
