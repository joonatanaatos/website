# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn dev       # Start dev server at localhost:3000
yarn build     # Production build
yarn lint      # Run ESLint
```

No test suite exists in this project.

## Architecture

This is a personal portfolio website built with **Next.js 14 (App Router)**, **Mantine UI**, and **i18next** for three locales: Finnish (`fi`, default), English (`en`), and Swedish (`sv`).

### Routing & i18n

- Routes follow the pattern `[locale]/[page]` — e.g. `/en/about`, `/sv/projects`.
- The default locale (`fi`) is served without a locale prefix in the URL; middleware in `src/middleware.ts` rewrites bare paths to `fi/...` and redirects `fi/...` back to `/...`.
- Valid pages are defined in `src/util/pages.ts` as a plain string array: `['about', 'projects', 'experience']`. Adding a new page requires adding it here.
- UI string translations live in `src/i18n/locales/{fi,en,sv}/common.json`.

### Page Content (HTML files)

Page content is **not** written in React — it lives as static HTML files in `public/pages/{page}/{locale}.html`. These files are webpack-imported at build time via `html-loader` and rendered with `dangerouslySetInnerHTML` (or split into sections for animated rendering on the `projects`/`experience` pages). Images for page content go in `public/pages/{page}/images/`.

When editing page content (about, projects, experience), edit the HTML files in `public/pages/`, not React components.

### Styling & Theme

- **Mantine** is the primary UI component library. The custom theme (crimson primary color, black palette) is defined in `src/util/theme.ts`.
- Per-component styles use CSS Modules (`.module.css` files colocated with components).
- PostCSS is configured with `postcss-preset-mantine` and `postcss-simple-vars`.

### Components

All shared components live in `src/app/[locale]/lib/components/`:
- `header` — site navigation with locale switcher; loaded client-side only (`dynamic` with `ssr: false`)
- `footer` — locale-aware footer
- `animate` — Framer Motion fade-in wrapper with optional `delay`
- `gradient` — animated background gradient, client-side only
- `main-image` — profile image on the home page

### Deployment

CI (`.github/workflows/build-project.yml`) runs lint then builds and pushes a Docker image (`joonatanaatos/website`) on every push. The `main` branch also gets the `latest` tag. Production runs via `docker-compose.yml` on port 80.
