---
name: pre-push-review
description: Revisão obrigatória antes de dar push/abrir PR no DevCore. Roda `make validate` (gate do CI) e revisa o diff da branch contra os padrões senior do projeto (design tokens, acessibilidade, tipagem, estrutura). Use sempre antes de subir código para evitar reprovações no CI.
---

# Pre-push review — DevCore

Objetivo: nada chega à `main` quebrado ou fora do padrão. Execute **antes de cada push / PR**.

## Passo 1 — Gate mecânico (idêntico ao CI)

Rode:

```bash
make validate
```

Isso roda `format → lint → typecheck → test → build`, exatamente o que o CI verifica.
Se algo falhar:

- `make fix` corrige formatação e lint automaticamente.
- Corrija o restante manualmente e rode `make validate` de novo.

**Não prossiga para o push enquanto `make validate` não terminar com `✅`.**

## Passo 2 — Code review do diff

Inspecione o que vai subir:

```bash
git diff main...HEAD
```

Revise cada arquivo alterado contra os padrões senior do projeto:

- **Sem cores hex hardcoded** — use os design tokens do `@devcore/tailwind-config`
  (`bg-bg-primary`, `text-purple_text`, `border-border-primary`, ...).
- **Assets importados** (`import logo from '@/assets/logo.svg'`), nunca `src="/src/..."`.
- **Tipagem completa** — props com `interface`, sem `any` desnecessário, sem `@ts-ignore`.
- **Acessibilidade** — `alt` em imagens, `aria-label`/roles em botões e ícones, foco visível.
- **Sem hacks de posição** (`relative bottom-5 right-4`); layout com flex/grid + `gap`.
- **Estrutura feature-based** — componentes no lugar certo; dados/config em módulos
  dedicados (`src/config`, `*/data`), não embutidos no JSX.
- **Reuso** — primitivos genéricos e desacoplados vão para `@devcore/ui`.
- **Conventional Commits** — o título do PR vira a mensagem do squash; deve seguir
  `tipo(escopo): descrição`.

## Passo 3 — Veredito

Liste os problemas encontrados no formato `arquivo:linha — problema`.

- Se houver **bloqueadores**, corrija antes do push.
- Se estiver limpo, confirme: **"✅ pronto para push"** e só então abra o PR.
