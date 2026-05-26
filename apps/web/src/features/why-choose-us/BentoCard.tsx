import { cn } from '@devcore/ui';
import type { BentoCard as BentoCardData } from './why-choose-us.data';

export function BentoCard({ category, title, description, image, span, overlay }: BentoCardData) {
  return (
    <article
      className={cn(
        'relative h-[400px] overflow-hidden rounded-2xl border border-border-primary bg-cover bg-center bg-no-repeat p-6 sm:p-8',
        span,
      )}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="relative z-10 h-full">
        <span className="inline-block w-fit rounded-md border border-text-muted px-3 py-1 text-xs font-semibold uppercase text-text-muted">
          {category}
        </span>

        <h3 className="mt-4 text-xl font-semibold text-text-primary">{title}</h3>

        <div className="mt-2 space-y-1 text-sm text-white/80 lg:hidden">
          {description.mobile.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        <div className="mt-2 hidden space-y-1 text-sm text-text-primary lg:block">
          {description.desktop.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        {overlay ? (
          <img
            src={overlay}
            alt=""
            className="pointer-events-none absolute object-contain lg:right-[-35px] lg:top-[-55px]"
          />
        ) : null}
      </div>
    </article>
  );
}
