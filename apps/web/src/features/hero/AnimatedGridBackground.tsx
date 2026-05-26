import { type CSSProperties, useMemo } from 'react';
import { motion, type Variants } from 'framer-motion';

type Direction = 'top' | 'bottom' | 'left' | 'right';

const DIRECTIONS: Direction[] = ['top', 'bottom', 'left', 'right'];
const GRID_SIZE = 100;
const TOTAL_LINES = 12;

const lineVariants: Record<Direction, Variants> = {
  top: { initial: { y: '100%' }, animate: { y: '-100%' } },
  bottom: { initial: { y: '-100%' }, animate: { y: '100%' } },
  left: { initial: { x: '100%' }, animate: { x: '-100%' } },
  right: { initial: { x: '-100%' }, animate: { x: '100%' } },
};

interface AnimatedLine {
  id: number;
  direction: Direction;
  style: CSSProperties;
  delay: number;
}

/** Fundo decorativo com "cometas" animados percorrendo uma grade. */
export function AnimatedGridBackground() {
  const lines = useMemo<AnimatedLine[]>(() => {
    return Array.from({ length: TOTAL_LINES * 2 }, (_, i) => {
      const direction = DIRECTIONS[i % DIRECTIONS.length] ?? 'top';
      const isHorizontal = direction === 'left' || direction === 'right';
      const offset = Math.floor(i / 2) * GRID_SIZE;
      const style: CSSProperties = isHorizontal
        ? { top: offset, height: 1, width: '100%' }
        : { left: offset, width: 1, height: '100%' };
      return { id: i, direction, style, delay: Math.random() * 6 };
    });
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-bg-primary" aria-hidden>
      {lines.map((line) => (
        <motion.div
          key={line.id}
          className="absolute z-10 bg-gradient-to-br from-transparent via-purple-800 to-purple-500 opacity-20"
          style={line.style}
          variants={lineVariants[line.direction]}
          initial="initial"
          animate="animate"
          transition={{ duration: 6, repeat: Infinity, ease: 'linear', delay: line.delay }}
        />
      ))}

      <div className="pointer-events-none absolute bottom-0 left-0 z-20 h-32 w-full bg-gradient-to-b from-transparent to-bg-primary" />
    </div>
  );
}
