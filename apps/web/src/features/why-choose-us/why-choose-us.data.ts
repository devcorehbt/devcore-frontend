import bentoEstra from '@/assets/why-choose-us/bgbentoEstra.png';
import bentoProg from '@/assets/why-choose-us/bgbentoProg.png';
import bentoUI from '@/assets/why-choose-us/bgbentoUI.png';
import bentoUX from '@/assets/why-choose-us/bgbentoUX.png';
import celular from '@/assets/why-choose-us/celular.png';

export interface BentoCard {
  category: string;
  title: string;
  description: { desktop: string[]; mobile: string[] };
  image: string;
  /** Classes de span no grid (responsivo). */
  span: string;
  /** Imagem decorativa sobreposta (opcional). */
  overlay?: string;
}

export const bentoCards: BentoCard[] = [
  {
    category: 'PROGRAMAÇÃO',
    title: 'Tecnologia de Ponta',
    description: {
      desktop: [
        'Next.js, React, TailwindCSS, Firebase e arquiteturas',
        'otimizadas para garantir um desenvolvimento ágil,',
        'seguro e inovador.',
      ],
      mobile: [
        'Tecnologias modernas para desenvolvimento ágil,',
        'seguro e inovador com Next.js, React e Firebase.',
      ],
    },
    image: bentoProg,
    span: 'md:col-span-2 lg:col-span-3',
  },
  {
    category: 'UX DESIGN',
    title: 'Inovação Aplicada',
    description: {
      desktop: [
        'Vamos além do básico.',
        'Aplicamos tecnologia de',
        'ponta e metodologias',
        'ágeis para transformar',
        'ideias em produtos',
        'digitais impactantes.',
        'Seu negócio não apenas',
        'acompanha o mercado,',
        'mas se destaca e lidera.',
      ],
      mobile: [
        'Tecnologia de ponta + metodologias ágeis.',
        'Transformamos ideias em produtos impactantes.',
        'Seu negócio se destaca e lidera.',
      ],
    },
    image: bentoUI,
    span: 'md:col-span-3 lg:col-span-5',
  },
  {
    category: 'UI DESIGN',
    title: 'Experiência do Usuário',
    description: {
      desktop: [
        'Não basta apenas funcionar, o usuário',
        'precisa amar a experiência. Criamos',
        'interfaces intuitivas e fluidas que',
        'aumentam a retenção e melhoram a',
        'conversão do seu produto digital.',
      ],
      mobile: [
        'O usuário precisa amar a experiência.',
        'Criamos interfaces intuitivas e fluidas.',
        'Mais retenção e conversão.',
      ],
    },
    image: bentoUX,
    span: 'md:col-span-3 lg:col-span-5',
    overlay: celular,
  },
  {
    category: 'ESTRATÉGIA',
    title: 'Desenvolvimento Estratégico',
    description: {
      desktop: [
        'Nossa abordagem personalizada garante que cada',
        'funcionalidade desenvolvida tenha um propósito',
        'estratégico, maximizando resultados e escalabilidade.',
      ],
      mobile: [
        'Cada funcionalidade tem um propósito estratégico.',
        'Mais resultados. Mais escalabilidade.',
      ],
    },
    image: bentoEstra,
    span: 'md:col-span-2 lg:col-span-3',
  },
];
