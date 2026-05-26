import { NavLink } from 'react-router-dom';
import { cn } from '@devcore/ui';
import { siteConfig } from '@/config/site';

interface NavLinksProps {
  variant?: 'desktop' | 'mobile';
  onNavigate?: () => void;
}

export function NavLinks({ variant = 'desktop', onNavigate }: NavLinksProps) {
  return (
    <nav
      aria-label="Navegação principal"
      className={cn('flex', variant === 'mobile' ? 'flex-col items-start gap-4' : 'gap-8')}
    >
      {siteConfig.primaryNav.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          onClick={onNavigate}
          className={({ isActive }) =>
            cn(
              'text-text-primary transition hover:text-purple_text',
              isActive && 'font-bold text-purple_text',
            )
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
