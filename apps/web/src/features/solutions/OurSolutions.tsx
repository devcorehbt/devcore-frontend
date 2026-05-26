import { solutions } from './solutions.data';
import { SolutionCard } from './SolutionCard';

export function OurSolutions() {
  return (
    <section className="z-20 bg-bg-primary px-6 pb-0 pt-6 text-text-primary md:px-28 lg:pb-10">
      <header className="mb-16 text-start">
        <h2 className="text-3xl font-normal lg:text-4xl">
          Nossas <span className="text-purple_text">Soluções</span>
        </h2>
        <p className="mt-4 max-w-4xl text-base text-text-gray-300 lg:text-lg">
          Seja para criar, aprimorar ou escalar, desenvolvemos tecnologia alinhada às suas
          necessidades.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {solutions.map((solution) => (
          <SolutionCard key={solution.title.desktop.join('-')} solution={solution} />
        ))}
      </div>
    </section>
  );
}
