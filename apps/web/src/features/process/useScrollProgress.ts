import { useEffect, useRef, useState } from 'react';

export function useScrollProgress() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const { top } = section.getBoundingClientRect();
      const visible = 1 - Math.max(0, Math.min(1, top / window.innerHeight));
      setProgress(visible * 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { sectionRef, progress } as const;
}
