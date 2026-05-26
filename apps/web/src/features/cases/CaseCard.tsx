import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa6';
import figma from '@/assets/icons/figma.png';
import type { CaseStudy } from './cases.data';

export function CaseCard({ title, description, tags, badge, team, image }: CaseStudy) {
  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.6 }}
      className="flex h-full flex-col items-center justify-center gap-10 rounded-xl border-2 border-border-muted bg-bg-secondary lg:flex-row"
    >
      <div className="w-full flex-1 px-5 py-5 text-left lg:max-w-xl lg:px-10 lg:py-16">
        <img src={figma} alt="Figma" className="mb-0 h-auto w-auto pb-4 lg:mb-10" />

        <div className="mb-4 flex flex-wrap gap-2 lg:mb-10">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-white/30 bg-white/5 px-3 text-sm font-semibold uppercase text-text-primary backdrop-blur-sm lg:text-base"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="mb-4 text-2xl font-semibold lg:mb-10 lg:text-3xl">{title}</h3>

        <p className="mb-4 max-w-md text-sm leading-relaxed text-text-gray-300">{description}</p>

        {badge ? (
          <div className="mb-4">
            <span className="rounded-full border border-purple-500 px-3 py-1 text-xs font-semibold">
              {badge}
            </span>
          </div>
        ) : null}

        <div className="flex flex-wrap items-center gap-2">
          {team.map((member, index) => (
            <img
              key={member}
              src={member}
              alt={`Integrante ${index + 1} do time`}
              className="h-10 w-10 rounded-full"
            />
          ))}
        </div>

        <p className="mt-4 text-sm text-text-gray-400 lg:text-base">
          <strong>Desenvolvido por</strong>
          <br />
          Time DEVCORE.
        </p>

        <div className="flex items-center gap-2 pt-4 text-sm text-text-gray-400">
          <FaInstagram className="h-4 w-4" aria-hidden />
          <span>@devcorehub</span>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center">
        <img
          src={image}
          alt={`Mockup do projeto ${title}`}
          className="w-full max-w-md rounded-xl p-4 pb-10 shadow-lg lg:p-0"
        />
      </div>
    </motion.article>
  );
}
