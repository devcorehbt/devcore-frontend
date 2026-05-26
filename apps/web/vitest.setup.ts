import { vi } from 'vitest';
import '@testing-library/jest-dom/vitest';

// jsdom não implementa IntersectionObserver, usado pelo `whileInView` do framer-motion.
class IntersectionObserverStub implements IntersectionObserver {
  readonly root = null;
  readonly rootMargin = '';
  readonly thresholds = [];
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

vi.stubGlobal('IntersectionObserver', IntersectionObserverStub);
