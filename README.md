# iSCOUT Dashplan

Protótipo navegável para organizar o ciclo de treinos de uma escolinha de futebol: planejamento de aulas, aprovação, súmulas, registro de execução e acompanhamento por perfil.

> Este repositório contém uma demonstração de interface. Não é um sistema de produção e não deve receber dados pessoais ou operacionais reais.

## O que dá para explorar

- Criar e revisar planos de aula em etapas.
- Aprovar planos e acompanhar seu status.
- Registrar escalações, partidas e execução de treinos.
- Visualizar indicadores de fundamentos e sugestões de reforço baseadas em regras locais.
- Alternar entre perfis de demonstração para visualizar diferentes telas.

Os dados são exemplos locais e ficam no navegador (`localStorage`). Não há API, banco de dados ou autenticação real. As regras de perfil e rotas existem apenas para demonstrar a experiência; qualquer pessoa pode inspecionar ou alterar os dados no cliente.

## Tecnologias

- Vue 3 e Vue Router
- Vite 8
- Tailwind CSS 4
- Mermaid para diagramas
- Playwright para testes de interface

## Executar localmente

Requer Node.js compatível com Vite 8 e npm.

```bash
npm ci
npm run dev
```

Scripts disponíveis:

```bash
npm run lint
npm run build
npm run preview
npm run test:e2e
```

O acesso demonstrativo usa usuários de exemplo e a senha `iscout` para todos eles. Esse valor está no código-fonte e não oferece segurança; não reutilize nem trate como credencial real.

## Testes E2E

Os testes usam Playwright e Chromium. Instale o navegador conforme a documentação do Playwright se ele não estiver disponível no ambiente:

```bash
npx playwright install chromium
npm run test:e2e
```

## Estrutura

```text
src/
  components/  componentes compartilhados e elementos de interface
  data/        dados de demonstração
  pages/       telas do protótipo
  router/      rotas e demonstração de acesso por perfil
  stores/      estado local persistido no navegador
tests/e2e/     testes de interface com Playwright
public/       ícones, manifesto PWA e service worker
```

## Limites conhecidos

- Login e permissões são simulados no navegador e não protegem dados.
- Alterações persistidas em `localStorage` existem apenas naquele navegador.
- As recomendações de reforço são regras simples de demonstração, sem modelo de IA.
- O build atual gera um chunk JavaScript acima de 500 kB; vale avaliar divisão por rota, especialmente para a dependência de diagramas.
- O teste E2E precisa do Chromium instalado.

## Privacidade e uso

A massa de dados foi anonimizada para esta publicação. Use apenas dados fictícios em forks e demonstrações. Antes de adaptar o protótipo para operação real, implemente autenticação e autorização no servidor, armazenamento adequado, validação de entradas e controles de privacidade.

## Deploy

O projeto pode ser publicado como SPA estática em provedores que suportem Vite. O arquivo `public/_redirects` configura fallback de rotas para Cloudflare Pages.
