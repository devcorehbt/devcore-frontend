import type { ReactNode } from 'react';
import { cn } from '../lib/cn';

export interface SectionTitleProps {
  /** Rótulo curto em caixa alta exibido acima do título. */
  label: string;
  /** Título principal da seção. */
  title: ReactNode;
  /** Ícone opcional exibido à esquerda do rótulo. */
  icon?: ReactNode;
  /** Conteúdo descritivo opcional renderizado abaixo do título. */
  children?: ReactNode;
  className?: string;
}

/**
 * Cabeçalho de seção do design system: rótulo + título + descrição opcional.
 * Genérico e desacoplado de conteúdo — ícone e descrição entram via props.
 */
export function SectionTitle({ label, title, icon, children, className }: SectionTitleProps) {
  return (
    <div className={cn('text-start', className)}>
      <div className="flex items-center">
        {icon ? (
          <span className="mr-4 flex h-4 w-4 items-center justify-center">{icon}</span>
        ) : null}
        <span className="text-xs font-semibold uppercase tracking-widest text-text-primary">
          {label}
        </span>
      </div>

      <h2 className="mt-4 text-xl font-semibold leading-snug text-text-secondary md:text-5xl lg:mt-7 lg:text-2xl lg:leading-tight">
        {title}
      </h2>

      {children ? <div className="mt-6">{children}</div> : null}
    </div>
  );
}
