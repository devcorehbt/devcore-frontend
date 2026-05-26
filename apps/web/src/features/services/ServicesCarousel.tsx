import { useRef, useState } from 'react';
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion';
import { servicesData } from './services.data';
import { ServiceCard } from './ServiceCard';

const SPEED_PX_PER_SECOND = 150;

export function ServicesCarousel() {
  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useAnimationFrame((_, delta) => {
    if (isPaused) return;
    x.set(x.get() - (SPEED_PX_PER_SECOND * delta) / 1000);

    const trackWidth = trackRef.current?.scrollWidth ?? 0;
    // A lista é duplicada; reinicia ao passar da metade para um loop contínuo.
    if (trackWidth > 0 && Math.abs(x.get()) >= trackWidth / 2) {
      x.set(0);
    }
  });

  return (
    <div className="my-10 overflow-hidden lg:my-24">
      <motion.div
        ref={trackRef}
        className="flex w-max gap-6"
        style={{ x }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {[...servicesData, ...servicesData].map((item, index) => (
          <ServiceCard
            key={`${item.title}-${index}`}
            tag={item.tag}
            description={item.description}
          />
        ))}
      </motion.div>
    </div>
  );
}
