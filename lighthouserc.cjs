/**
 * Configuração do Lighthouse CI (@lhci/cli).
 * Serve o build estático de apps/web e assere budgets de qualidade.
 * Docs: https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/configuration.md
 */
module.exports = {
  ci: {
    collect: {
      staticDistDir: './apps/web/dist',
      numberOfRuns: 3,
      settings: {
        // SPA: ignora o aviso de PWA/offline, foco em perf/a11y/SEO.
        onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
      },
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['warn', { minScore: 0.9 }],
        'categories:seo': ['warn', { minScore: 0.9 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
