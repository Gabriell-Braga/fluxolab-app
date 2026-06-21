# FluxoLab · Projeto do minicurso Next.js

App de referência que evolui ao longo dos **4 módulos** das slides.

## Como rodar

```bash
cd exemplos/fluxolab-app
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Deploy gratuito no GitHub Pages

O projeto suporta **export estático** (`output: 'export'`) quando a variável `GITHUB_PAGES=true` está definida.

### Testar build estática localmente

**PowerShell (Windows):**

```powershell
$env:GITHUB_PAGES="true"
$env:GITHUB_REPOSITORY="seu-usuario/fluxolab-app"
npm run build
npx serve out
```

**Linux / macOS:**

```bash
GITHUB_PAGES=true GITHUB_REPOSITORY=seu-usuario/fluxolab-app npm run build
npx serve out
```

Abra a URL do `serve` + `/fluxolab-app/` (substitua pelo nome do seu repositório).

### Publicar no GitHub

1. Crie um repositório público no GitHub (ex.: `fluxolab-app`).
2. Envie o código (`git push` na branch `main`).
3. O arquivo `.github/workflows/deploy-pages.yml` já está incluído — ele builda e publica a pasta `out/`.
4. No repositório: **Settings → Pages → Source: GitHub Actions**.
5. Após a Action terminar, acesse `https://seu-usuario.github.io/fluxolab-app/`.

O `next.config.ts` detecta automaticamente o nome do repositório via `GITHUB_REPOSITORY` e aplica o `basePath` correto.

## Checkpoints por módulo

| Módulo | O que você deve ter implementado |
|--------|----------------------------------|
| **1** | Projeto criado · `layout.tsx` com fonte e metadata · `page.tsx` com hero textual simples |
| **2** | Header no layout · rotas `/precos` e `/contato` · navegação com `Link` |
| **3** | `Header` client com menu mobile · componentes `Hero`, `LogoStrip`, `FeatureCard` |
| **4** | Dados em `lib/features.ts` · `FeatureGrid`, `CtaSection`, `Footer` · deploy no GitHub Pages |

O repositório em `fluxolab-app/` contém o **estado final**. Siga os passos guiados no fim do Módulo 4 das apresentações.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
