import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { App } from './App';

describe('App', () => {
  it('renderiza a home com o nome da marca', () => {
    render(<App />);

    expect(screen.getByRole('heading', { level: 1, name: /devcore/i })).toBeInTheDocument();
  });
});
