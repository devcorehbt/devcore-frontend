export interface NavItem {
  label: string;
  to: string;
}

export type SocialPlatform = 'linkedin' | 'facebook' | 'twitter' | 'instagram';

export interface SocialLink {
  label: string;
  href: string;
  platform: SocialPlatform;
}

export interface SiteConfig {
  name: string;
  email: string;
  cta: NavItem;
  primaryNav: NavItem[];
  services: string[];
  socials: SocialLink[];
}

/** Configuração central do site institucional — fonte única para navegação e contato. */
export const siteConfig: SiteConfig = {
  name: 'DevCore',
  email: 'contato@devcore.com.br',
  cta: { label: 'Comece um projeto', to: '/projeto' },
  primaryNav: [
    { label: 'Quem somos', to: '/quem-somos' },
    { label: 'Cases', to: '/cases' },
    { label: 'Serviços', to: '/servicos' },
    { label: 'FAQ', to: '/faq' },
  ],
  services: [
    'Sites & Apps',
    'UI Design',
    'Dashboards',
    'React & Next.js',
    'Experiência do usuário',
    'Estratégia digital',
    'SaaS & microSaaS',
  ],
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/devcore', platform: 'linkedin' },
    { label: 'Facebook', href: 'https://www.facebook.com/devcore', platform: 'facebook' },
    { label: 'Twitter', href: 'https://twitter.com/devcore', platform: 'twitter' },
    { label: 'Instagram', href: 'https://instagram.com/devcore', platform: 'instagram' },
  ],
};
