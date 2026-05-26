import { clsx, type ClassValue } from 'clsx';

/**
 * Concatena class names condicionalmente.
 * Wrapper fino sobre `clsx` para manter um único ponto de entrada no design system.
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}
