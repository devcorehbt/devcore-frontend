import devcorePreset from '@devcore/tailwind-config';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [devcorePreset],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
};
