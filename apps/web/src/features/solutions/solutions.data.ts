import growth from '@/assets/solutions/growth.png';
import mvp from '@/assets/solutions/mvp.png';
import seo from '@/assets/solutions/seo.png';

interface ResponsiveLines {
  desktop: string[];
  mobile: string[];
}

export interface Solution {
  subtitle: string[];
  title: ResponsiveLines;
  description: ResponsiveLines;
  image: string;
}

export const solutions: Solution[] = [
  {
    subtitle: ['PARA', 'STARTUPS'],
    title: {
      desktop: ['Validação e', 'Prototipagem'],
      mobile: ['Validação e Prototipagem'],
    },
    description: {
      desktop: [
        'Dê vida à sua ideia com protótipos funcionais.',
        'Teste conceitos, colete feedback valioso e refine seu produto.',
        'Antes do lançamento, reduza custos e acelere o desenvolvimento.',
      ],
      mobile: [
        'Dê vida à sua ideia com protótipos. Colete feedback e refine antes do lançamento.',
        'Reduza custos e acelere o desenvolvimento.',
      ],
    },
    image: mvp,
  },
  {
    subtitle: ['PARA', 'EMPRESAS EM CRESCIMENTO'],
    title: {
      desktop: ['Escalabilidade e', 'Experiência do Usuário'],
      mobile: ['Escalabilidade e UX'],
    },
    description: {
      desktop: [
        'Projetamos interfaces envolventes.',
        'Otimizamos seu software para escalar com seu negócio.',
        'Melhor usabilidade significa mais retenção e conversão.',
      ],
      mobile: [
        'Interfaces envolventes e software pronto para escalar. Mais usabilidade = mais vendas.',
      ],
    },
    image: growth,
  },
  {
    subtitle: ['PARA', 'NEGÓCIOS CONSOLIDADOS'],
    title: {
      desktop: ['Otimização e Inovação', 'Tecnológica'],
      mobile: ['Otimização e Inovação'],
    },
    description: {
      desktop: [
        'Modernize e potencialize seu software.',
        'Aumente eficiência, segurança e escalabilidade.',
        'Fortaleça sua infraestrutura e lidere seu setor.',
      ],
      mobile: ['Modernize seu software e ganhe eficiência. Escalabilidade, segurança e inovação.'],
    },
    image: seo,
  },
];
