import { describe, expect, it } from 'vitest';
import { cn } from './cn';

describe('cn', () => {
  it('junta classes válidas', () => {
    expect(cn('a', 'b')).toBe('a b');
  });

  it('ignora valores falsy e condicionais', () => {
    expect(cn('a', false, undefined, null, { b: true, c: false })).toBe('a b');
  });
});
