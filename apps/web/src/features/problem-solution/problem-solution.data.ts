import type { ReactNode } from 'react';
import growth from '@/assets/solutions/growth.png';
import mvp from '@/assets/solutions/mvp.png';
import seo from '@/assets/solutions/seo.png';

export interface ProblemSolution {
  id: string;
  icon: string;
  title: ReactNode;
  description: ReactNode;
}

export const problemSolutions: ProblemSolution[] = [
  {
    id: 'growth',
    icon: growth,
    title: 'Meu negócio está crescendo. Quando é a hora de investir em um sistema próprio?',
    description:
      'A hora é agora! Um sistema sob medida evita gargalos, automatiza o que te consome tempo e te dá previsibilidade para escalar com inteligência. A gente faz isso acontecer do seu jeito, sem complicar a operação.',
  },
  {
    id: 'mvp-cost',
    icon: mvp,
    title: 'Mas não é muito caro criar um sistema ou aplicativo exclusivo pra minha empresa?',
    description:
      'Caro é continuar perdendo tempo, venda e controle. Com a estrutura certa, você pode começar pequeno, testar e só escalar depois de validar. Criamos MVPs e SaaS inteligentes.',
  },
  {
    id: 'no-result',
    icon: seo,
    title: 'Já tenho um site, mas ele não traz resultado. Como vocês me ajudam a resolver isso?',
    description:
      'Site não é milagre, é ferramenta. Sites que não vendem são apenas panfletos bonitos. A gente integra o seu site com um funil de verdade: marketing, tráfego, copy, SEO e jornada do cliente. Aí sim o resultado aparece.',
  },
];
