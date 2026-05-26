import { type FormEvent, useState } from 'react';
import { type IconType } from 'react-icons';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { siteConfig, type SocialPlatform } from '@/config/site';
import { BrandLogo } from './BrandLogo';

const socialIcons: Record<SocialPlatform, IconType> = {
  linkedin: FaLinkedinIn,
  facebook: FaFacebookF,
  twitter: FaXTwitter,
  instagram: FaInstagram,
};

function NewsletterForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: integrar com o serviço de newsletter.
    setEmail('');
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="flex gap-2" aria-label="Inscrição na newsletter">
        <label htmlFor="newsletter-email" className="sr-only">
          E-mail
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Digite o seu e-mail"
          className="flex-1 rounded-lg bg-white/5 px-4 py-3 text-sm text-text-primary placeholder:text-white/40 transition focus:outline-none focus:ring-2 focus:ring-purple_text"
        />
        <button
          type="submit"
          className="whitespace-nowrap rounded-lg bg-white/90 px-4 py-2 text-sm text-bg-primary transition hover:bg-purple-600 hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-purple_text"
        >
          Inscrever-se
        </button>
      </form>
      <div className="mt-5 space-y-1 text-xs text-white/40">
        <p>
          Cadastre-se para receber novidades, conteúdos relevantes e vouchers da {siteConfig.name}{' '}
          diretamente na sua caixa de entrada.
        </p>
        <p>
          Suas informações estão seguras. Consulte nossa{' '}
          <a href="/privacy" className="underline hover:text-text-primary">
            política de privacidade
          </a>
          .
        </p>
      </div>
    </div>
  );
}

interface FooterColumnProps {
  title: string;
  items: { label: string; href: string }[];
}

function FooterColumn({ title, items }: FooterColumnProps) {
  return (
    <nav aria-label={title}>
      <h2 className="mb-4 text-base font-semibold text-text-primary md:text-lg">{title}</h2>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="rounded text-xs text-text-gray-400 transition-colors hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-purple_text md:text-sm"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  const navItems = siteConfig.primaryNav.map((item) => ({ label: item.label, href: item.to }));
  const serviceItems = siteConfig.services.map((label) => ({ label, href: '#' }));

  return (
    <footer className="mt-16 border-t border-border-primary bg-bg-secondary pb-8 pt-16 text-text-primary">
      <div className="container mx-auto px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-start gap-3">
            <BrandLogo className="h-10 w-auto" />
            <span className="text-lg font-extrabold uppercase">{siteConfig.name}</span>
          </div>

          <FooterColumn title="Links" items={navItems} />
          <FooterColumn title="Serviços" items={serviceItems} />

          <NewsletterForm />
        </div>

        <div className="mt-12">
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-sm text-text-secondary underline hover:text-text-primary"
          >
            {siteConfig.email}
          </a>
          <hr className="mt-4 border-border-primary" />
        </div>

        <div className="mt-6 flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <ul className="flex gap-4">
            {siteConfig.socials.map((social) => {
              const Icon = socialIcons[social.platform];
              return (
                <li key={social.platform}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-bg-tertiary text-text-gray-400 transition-colors hover:bg-purple_text hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-purple_text"
                  >
                    <Icon className="h-5 w-5" aria-hidden />
                  </a>
                </li>
              );
            })}
          </ul>
          <span className="text-center text-xs text-text-primary md:text-right md:text-sm">
            © {year} {siteConfig.name}. Todos os direitos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
}
