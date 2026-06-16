# DevCore Frontend

Site institucional da DevCore. Monorepo com Bun + Turborepo.

## Stack

- **Runtime / package manager:** Bun (>= 1.3.0)
- **Monorepo:** Turborepo + Bun workspaces
- **App:** Vite, React 19, TypeScript, Tailwind CSS
- **Qualidade:** ESLint, Prettier, Vitest, Lefthook, Conventional Commits
- **Performance:** Lighthouse CI

## Estrutura

```
apps/
  web/              # site principal (Vite + React)
packages/
  ui/               # componentes compartilhados
  eslint-config/    # config ESLint do workspace
  tailwind-config/  # config Tailwind do workspace
  tsconfig/         # bases de tsconfig compartilhadas
```

## Setup

```bash
bun install
```

## Comandos

Todos os comandos podem ser executados via `make <target>` ou `bun run <script>`.

| Comando           | Descricao                          |
| ----------------- | ---------------------------------- |
| `make dev`        | Sobe o app em modo desenvolvimento |
| `make build`      | Build de producao                  |
| `make lint`       | ESLint em todo o workspace         |
| `make typecheck`  | Checagem de tipos (TypeScript)     |
| `make test`       | Testes (Vitest)                    |
| `make format`     | Checa formatacao (Prettier)        |
| `make fix`        | Corrige formatacao e lint          |
| `make validate`   | Gate identico ao CI (roda tudo)    |
| `make lighthouse` | Build + Lighthouse CI local        |
| `make clean`      | Remove artefatos de build e caches |
