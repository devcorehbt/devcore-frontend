/** @type {import('@commitlint/types').UserConfig} */
export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      1,
      'always',
      ['web', 'ui', 'tsconfig', 'eslint-config', 'tailwind-config', 'ci', 'deps', 'release'],
    ],
  },
};
