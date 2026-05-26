# Guia de Contribuição

Obrigado por contribuir com o **DevCore Frontend**. Este documento descreve o fluxo de
trabalho do monorepo.

## Pré-requisitos

- [Bun](https://bun.sh) `>= 1.3.0` (a versão fixada está em [`.bun-version`](./.bun-version))
- Git

```bash
bun install        # instala todas as dependências do workspace
bun run dev        # sobe os apps em modo desenvolvimento
```

## Estrutura do monorepo

```
apps/         aplicações executáveis (ex.: web)
packages/     código compartilhado (ui, configs)
```

As tarefas são orquestradas pelo [Turborepo](https://turbo.build):

| Comando             | Ação                                  |
| ------------------- | ------------------------------------- |
| `bun run build`     | build de todos os pacotes             |
| `bun run lint`      | ESLint em todo o workspace            |
| `bun run typecheck` | checagem de tipos TypeScript          |
| `bun run test`      | testes (Vitest)                       |
| `bun run dev`       | modo desenvolvimento                  |

## Fluxo de branches

`main` é protegida — **todo trabalho entra via Pull Request**.

1. Crie uma branch a partir de `main` seguindo a convenção:
   - `feat/<descrição>` — nova funcionalidade
   - `fix/<descrição>` — correção de bug
   - `chore/<descrição>` — manutenção/tooling
   - `ci/<descrição>` — pipeline/CI
   - `docs/<descrição>` — documentação
2. Faça commits seguindo **[Conventional Commits](https://www.conventionalcommits.org)**.
3. Abra o PR. O CI precisa passar (lint, typecheck, build, test).
4. O merge é feito por **squash** — o **título do PR** vira a mensagem final, então ele
   também deve seguir Conventional Commits (ex.: `feat(web): add hero section`).

## Conventional Commits

```
<tipo>(<escopo opcional>): <descrição>
```

Tipos: `feat`, `fix`, `chore`, `ci`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `revert`.

Exemplos:

```
feat(ui): add Button component with variants
fix(web): corrige overflow do header no mobile
chore: bump turborepo to 2.5
```
