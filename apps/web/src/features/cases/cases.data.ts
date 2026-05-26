import maiselogio from '@/assets/mockups/maiselogio.png';
import cauane from '@/assets/team/cauane.png';
import jean from '@/assets/team/jean.png';
import luana from '@/assets/team/luana.png';
import matheus from '@/assets/team/matheus.png';

const team = [luana, jean, matheus, cauane];

export interface CaseStudy {
  title: string;
  description: string;
  tags: string[];
  badge?: string;
  team: string[];
  image: string;
}

export const caseStudies: CaseStudy[] = [
  {
    title: 'Mais Elogio',
    description:
      'O Mais Elogio vai além da valorização de elogios, oferecendo insights estratégicos para empresas melhorarem seus serviços.',
    tags: ['UX/UI DESIGN', 'CODE'],
    badge: 'PLATAFORMA',
    team,
    image: maiselogio,
  },
  {
    title: 'iBeauty',
    description: 'Clínica estética na Suíça.',
    tags: ['UX/UI DESIGN', 'CODE'],
    badge: 'PLATAFORMA',
    team,
    image: maiselogio,
  },
];
