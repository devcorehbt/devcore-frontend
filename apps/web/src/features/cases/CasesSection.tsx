import { motion } from 'framer-motion';
import starcases from '@/assets/icons/starcases.png';
import { CaseSlider } from './CaseSlider';
import { caseStudies } from './cases.data';

export function CasesSection() {
  return (
    <section className="bg-bg-primary px-4 py-10 pt-24 text-text-primary sm:px-6 md:px-24">
      <div className="mx-auto">
        <div className="flex flex-wrap items-center justify-start gap-2">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 text-xl font-bold sm:text-3xl"
          >
            <img src={starcases} alt="" className="h-6 w-6" />
            Conheça nossos <span className="text-purple_text">cases</span>
          </motion.h2>

          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            className="rounded-full border border-white/20 px-3 py-1 text-xs"
          >
            FIGMA TO CODE
          </motion.button>
        </div>

        <div className="mt-10 flex items-center justify-center overflow-hidden">
          <CaseSlider cases={caseStudies} />
        </div>
      </div>
    </section>
  );
}
