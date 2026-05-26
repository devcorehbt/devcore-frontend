import type { ReactNode } from 'react';
import logofaq from '@/assets/icons/logofaq.png';

export interface FaqItem {
  id: string;
  icon: string;
  title: ReactNode;
  content: ReactNode;
}

export const faqItems: FaqItem[] = [
  {
    id: 'entrega',
    icon: logofaq,
    title: 'O que a DEVCORE entrega exatamente? Site? Sistema? App?',
    content: (
      <>
        Desenvolvemos:
        <ul className="mt-2 list-disc pl-5">
          <li>Sites de alta conversão</li>
          <li>MVPs para startups</li>
          <li>Sistemas internos personalizados</li>
          <li>Aplicativos web responsivos</li>
          <li>SaaS sob demanda para monetização</li>
          <li>Integrações com APIs e automações</li>
        </ul>
      </>
    ),
  },
  {
    id: 'digitalizacao',
    icon: logofaq,
    title: 'Preciso digitalizar meu atendimento, vendas ou agendamentos. Vocês fazem isso?',
    content:
      'Sim. Automatizamos processos de atendimento, agendamento, vendas e gestão com sistemas personalizados que integram WhatsApp, redes sociais, site, e-mail, CRM e pagamentos, tudo em um só lugar.',
  },
  {
    id: 'prazo',
    icon: logofaq,
    title: 'Quanto tempo leva para criar um sistema ou aplicativo?',
    content:
      'Depende do escopo, mas você não precisa esperar meses para começar a ver resultado. Trabalhamos com MVPs rápidos, que podem ser entregues em semanas para validar a ideia. Depois disso, escalamos em ciclos, com entregas contínuas. Assim você testa, ajusta e cresce com segurança.',
  },
  {
    id: 'sem-tecnologia',
    icon: logofaq,
    title: 'Eu não entendo nada de tecnologia. Como vou saber o que pedir ou se está certo?',
    content:
      'Você não precisa entender de tecnologia. Nosso trabalho é entender do seu negócio e traduzir isso em soluções digitais claras, visuais e acessíveis. Apresentamos protótipos visuais, mapas de fluxo e explicações simples para cada etapa.',
  },
];
