# DevCore — atalhos de desenvolvimento.
# Uso: make <target>  (rode `make help` para a lista)

.DEFAULT_GOAL := help
.PHONY: help install dev build format lint typecheck test validate fix lighthouse clean

BUN ?= bun

help: ## Lista os targets disponíveis
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) \
		| awk 'BEGIN{FS=":.*?## "}{printf "  \033[36m%-12s\033[0m %s\n", $$1, $$2}'

install: ## Instala dependências (frozen lockfile)
	$(BUN) install --frozen-lockfile

dev: ## Sobe o app em modo desenvolvimento
	$(BUN) run dev

build: ## Build de produção de todos os pacotes
	$(BUN) run build

format: ## Checa formatação (Prettier)
	$(BUN) run format:check

lint: ## ESLint em todo o workspace
	$(BUN) run lint

typecheck: ## Checagem de tipos (TypeScript)
	$(BUN) run typecheck

test: ## Testes (Vitest)
	$(BUN) run test

validate: format lint typecheck test build ## Gate idêntico ao CI — rode antes de dar push
	@echo "✅ validate: tudo verde — seguro para push"

fix: ## Corrige formatação e problemas de lint automaticamente
	$(BUN) run format
	$(BUN) run lint -- --fix

lighthouse: ## Build + Lighthouse CI local (budgets de perf/a11y/seo)
	$(BUN) run lighthouse

clean: ## Remove artefatos de build e caches
	rm -rf .turbo coverage .lighthouseci apps/*/dist packages/*/dist
