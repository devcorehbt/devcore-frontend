import type { ProblemSolution } from './problem-solution.data';

type ProblemSolutionCardProps = Pick<ProblemSolution, 'icon' | 'title' | 'description'>;

export function ProblemSolutionCard({ icon, title, description }: ProblemSolutionCardProps) {
  return (
    <article className="h-full w-full rounded-xl border border-border-tertiary bg-bg-secondary px-6 py-5">
      <div className="mb-5 flex items-center justify-center">
        <img src={icon} alt="" className="max-h-full rounded-md object-contain" />
      </div>
      <h3 className="mb-4 text-base font-semibold leading-snug text-text-tertiary">{title}</h3>
      <p className="text-sm leading-relaxed text-text-secondary">{description}</p>
    </article>
  );
}
