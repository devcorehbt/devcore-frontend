import type { ReactNode } from 'react';
import { FaCode, FaComments, FaPen } from 'react-icons/fa';
import { SiFigma } from 'react-icons/si';

export interface Step {
  label: string;
  icon: ReactNode;
}

export const steps: Step[] = [
  { label: 'Briefing', icon: <FaPen /> },
  { label: 'Alinhamento', icon: <FaComments /> },
  { label: 'UX UI Design', icon: <SiFigma /> },
  { label: 'Desenvolvimento', icon: <FaCode /> },
];
