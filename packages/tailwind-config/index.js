/**
 * Preset Tailwind compartilhado do DevCore — design tokens (cores, tipografia,
 * espaçamentos, animações). Apps consomem via `presets: [devcorePreset]` e
 * definem o próprio `content`.
 *
 * @type {import('tailwindcss').Config}
 */
export default {
  theme: {
    extend: {
      colors: {
        // Brand
        purple_text: '#9961FF',
        'card-bg': '#3C216A',

        // Texto
        'text-primary': '#FFFFFF',
        'text-secondary': '#DFDFE0',
        'text-tertiary': '#F6F6F7',
        'text-muted': '#7C7C83',
        'text-gray-300': '#D1D5DB',
        'text-gray-400': '#9CA3AF',

        // Backgrounds
        'bg-primary': '#000000',
        'bg-secondary': '#0D0D0E',
        'bg-tertiary': '#111111',
        'bg-card': '#1F1F21',
        'bg-overlay': '#19191C',
        'bg-dark': '#101010',

        // Bordas
        'border-primary': '#313135',
        'border-secondary': '#BE9AFF33',
        'border-tertiary': '#1F1F21',
        'border-muted': '#19191C',

        // Gradientes
        'gradient-from': '#25123B33',
        'gradient-via': '#311552',
        'gradient-to': '#3D176800',
      },

      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },

      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },

      lineHeight: {
        tight: '1.25',
        snug: '1.375',
        relaxed: '1.625',
      },

      borderRadius: {
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        full: '9999px',
      },

      boxShadow: {
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      },

      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.2', transform: 'translateY(0) scale(1)' },
          '50%': { opacity: '1', transform: 'translateY(-10px) scale(1.2)' },
        },
        drift: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '100%': { transform: 'translate(40px, -40px) scale(1.1)' },
        },
        glowLine: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(-100%)', opacity: '0' },
        },
      },

      animation: {
        twinkle: 'twinkle 5s ease-in-out infinite',
        drift: 'drift 30s linear infinite',
        glowLine: 'glowLine 6s linear infinite',
      },
    },
  },
  plugins: [],
};
