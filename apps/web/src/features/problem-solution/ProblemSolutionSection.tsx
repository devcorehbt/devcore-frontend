import { ProblemSolutionCard } from './ProblemSolutionCard';
import { problemSolutions } from './problem-solution.data';

export function ProblemSolutionSection() {
  return (
    <section className="bg-bg-primary px-6 py-10 text-text-primary md:px-28">
      <h2 className="mb-14 text-center text-2xl font-semibold sm:text-4xl">
        Seu problema tem <span className="text-purple_text">solução!</span>
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {problemSolutions.map((item) => (
          <ProblemSolutionCard
            key={item.id}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}
