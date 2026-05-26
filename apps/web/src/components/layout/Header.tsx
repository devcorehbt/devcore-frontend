import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoUrl from '@/assets/logo.svg';
import { siteConfig } from '@/config/site';
import { NavLinks } from './NavLinks';

const ctaClass =
  'rounded-md bg-purple_text px-5 py-2 font-semibold text-text-primary transition hover:bg-purple-600';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between bg-bg-primary px-6 shadow-md sm:px-12 md:px-28">
      <Link to="/" className="flex items-center" aria-label={`${siteConfig.name} — início`}>
        <img src={logoUrl} alt={`Logo ${siteConfig.name}`} className="h-10 w-10" />
      </Link>

      <div className="hidden items-center gap-8 lg:flex">
        <NavLinks />
        <Link to={siteConfig.cta.to} className={ctaClass}>
          {siteConfig.cta.label} →
        </Link>
      </div>

      <button
        type="button"
        onClick={() => setIsMenuOpen((open) => !open)}
        className="text-text-primary lg:hidden"
        aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-x-0 top-16 flex flex-col items-start gap-10 bg-bg-primary px-6 py-10 shadow-lg md:px-28 lg:hidden"
          >
            <NavLinks variant="mobile" onNavigate={closeMenu} />
            <Link to={siteConfig.cta.to} className={ctaClass} onClick={closeMenu}>
              {siteConfig.cta.label} →
            </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
