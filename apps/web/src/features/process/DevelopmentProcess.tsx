import { motion } from 'framer-motion';
import { cn } from '@devcore/ui';
import { steps } from './process.data';
import { useScrollProgress } from './useScrollProgress';

const progressGradient = 'bg-gradient-to-r from-bg-primary via-white to-purple-500';

function StepLabels({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="absolute bottom-0 left-0 z-20 grid w-full grid-cols-4 text-center">
      {steps.map((step, index) => (
        <p
          key={step.label}
          className={cn(
            'text-sm transition-colors duration-700',
            index <= activeIndex ? 'text-text-primary' : 'text-white/50',
          )}
        >
          {step.label}
        </p>
      ))}
    </div>
  );
}

export function DevelopmentProcess() {
  const { sectionRef, progress } = useScrollProgress();
  const activeIndex = Math.floor((progress / 100) * (steps.length - 1));

  return (
    <section ref={sectionRef} className="bg-bg-primary px-6 py-40 text-text-primary">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex flex-wrap items-center gap-4">
          <span className="text-2xl text-purple-400" aria-hidden>
            ✦
          </span>
          <h2 className="text-3xl font-bold">Como é feito?</h2>
          <span className="rounded-full bg-zinc-800 px-4 py-1 text-xs tracking-widest">
            PROCESSO DE DESENVOLVIMENTO
          </span>
        </div>

        <div className="relative grid grid-cols-4 pb-14 text-center">
          {steps.map((step, index) => (
            <motion.div
              key={step.label}
              className="relative z-10 flex flex-col items-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div
                className={cn(
                  'mb-6 text-2xl transition-colors duration-700',
                  index <= activeIndex ? 'text-text-primary' : 'text-white/30',
                )}
              >
                {step.icon}
              </div>
            </motion.div>
          ))}

          <div
            className={cn(
              'absolute bottom-[40px] left-0 z-0 h-1 w-full rounded-full',
              progressGradient,
            )}
          />
          <motion.div
            className={cn('absolute bottom-[40px] left-0 z-10 h-1 rounded-full', progressGradient)}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4 }}
          />

          <StepLabels activeIndex={activeIndex} />
        </div>
      </div>
    </section>
  );
}
