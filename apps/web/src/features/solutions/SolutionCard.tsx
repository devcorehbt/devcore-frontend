import type { Solution } from './solutions.data';

interface SolutionCardProps {
  solution: Solution;
}

/** Renderiza linhas distintas para desktop e mobile a partir dos arrays de texto. */
function ResponsiveLines({ desktop, mobile }: { desktop: string[]; mobile: string[] }) {
  return (
    <>
      <span className="hidden lg:block">
        {desktop.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </span>
      <span className="lg:hidden">
        {mobile.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </span>
    </>
  );
}

export function SolutionCard({ solution }: SolutionCardProps) {
  const { subtitle, title, description, image } = solution;

  return (
    <article className="relative rounded-[15px] border border-border-secondary/20 bg-card-bg/20 px-8 pb-11 pt-5 lg:pt-9">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase text-text-gray-400 lg:text-base">
          <span className="block lg:hidden">{subtitle.join(' ')}</span>
          <span className="hidden lg:block">
            {subtitle.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </span>
        </p>
        <img src={image} alt="" className="h-10 w-16 object-contain" />
      </div>

      <h3 className="mb-6 mt-2 text-sm font-semibold md:text-2xl lg:text-xl">
        <ResponsiveLines desktop={title.desktop} mobile={title.mobile} />
      </h3>

      <div className="text-xs text-text-gray-300 md:text-base">
        <ResponsiveLines desktop={description.desktop} mobile={description.mobile} />
      </div>
    </article>
  );
}
