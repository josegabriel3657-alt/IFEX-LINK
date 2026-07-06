# IFEX | Inteligência Financeira — Landing Page

Página de links institucional para o Instagram da IFEX, construída com
React + Vite + Tailwind CSS + Framer Motion.

## Rodando localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
npm run preview
```

## Deploy na Vercel

1. Suba este projeto para um repositório no GitHub.
2. Em vercel.com, clique em **Add New → Project** e importe o repositório.
3. Framework preset: **Vite**. Build command: `npm run build`. Output
   directory: `dist`. (A Vercel geralmente detecta isso automaticamente.)
4. Clique em **Deploy**.

## O que personalizar antes de publicar

- **Links**: todas as URLs ficam em um único lugar,
  `src/config.js`, no objeto `LINKS`. Não é necessário editar nenhum
  componente para trocar um link:

  ```js
  export const LINKS = {
    agendamento: 'https://...',
    whatsapp: 'https://wa.me/55...',
    servicos: '#servicos',
    quemSomos: '#sobre',
    instagram: 'https://instagram.com/...',
  }
  ```

- **Domínio real (SEO/Open Graph)**: em `src/config.js`, ajuste
  `SITE.siteUrl`. Em `index.html`, atualize as tags `og:url`,
  `og:image`, `twitter:image` e o `<link rel="canonical">` para o
  domínio definitivo (hoje apontam para `https://ifex.com.br`).
- **Textos institucionais**: `src/components/Hero.jsx` e
  `src/components/About.jsx`.
- **Cores**: a paleta (azul-marinho oficial `#030B3A`, branco, prata)
  está centralizada em `tailwind.config.js`, em `theme.extend.colors`.

## Identidade visual

Os arquivos de marca ficam em `public/brand/`, todos gerados a partir da
logo oficial da IFEX:

- `ifex-icon-512.png` — ícone/monograma isolado, usado no cabeçalho e
  como base do ícone do app.
- `favicon.png` — versão pequena (64×64) para a aba do navegador.
- `og-image.png` (1200×630) — imagem exibida ao compartilhar o link no
  WhatsApp, LinkedIn, etc.
- `ifex-logo-full.png` — logo completa (ícone + nome + assinatura), caso
  seja necessária em outro material.

## Estrutura

```
src/
  config.js        → todas as URLs e metadados do site (edite só aqui)
  components/
    Logo.jsx        → ícone oficial da IFEX com glow azul discreto atrás
    Hero.jsx         → topo: logo, nome, frase de posicionamento
    LinkButtons.jsx  → botões de ação principais (lêem de config.js)
    About.jsx        → seção institucional "Por que escolher a IFEX?" com 3 cards
    Footer.jsx        → rodapé minimalista
  App.jsx
  index.css
  main.jsx
public/
  brand/            → assets de marca (favicon, ícone, OG image, logo completa)
```
