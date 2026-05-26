import type { FaqItem } from './faq.data';

type FaqCardProps = Pick<FaqItem, 'icon' | 'title' | 'content'>;

export function FaqCard({ icon, title, content }: FaqCardProps) {
  return (
    <article className="faq-card w-[320px] flex-shrink-0 rounded-xl border border-white/10 bg-bg-tertiary p-8 text-text-primary sm:h-[493px] sm:w-[360px]">
      <img src={icon} alt="" className="mb-16 h-5 w-5" />
      <h3 className="mb-9 text-base font-semibold leading-snug sm:text-2xl">{title}</h3>
      <div className="text-sm leading-relaxed text-text-gray-300">{content}</div>
    </article>
  );
}
