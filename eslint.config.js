// Config raiz — usada por editores e pelo hook de pre-commit (lefthook roda da raiz).
// Cada app/pacote tem seu próprio eslint.config.js que reexporta a mesma base.
import config from '@devcore/eslint-config';

export default config;
