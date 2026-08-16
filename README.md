# Madalina Pastiu — Portfolio

A futuristic, glassmorphism/holographic portfolio built with **React + Vite + Tailwind CSS**.

## Why no backend?

This is a static, read-only showcase — project cards, an experience timeline, a resume link, and social links. There's no form that stores data, no user accounts, and no database-backed content, so a backend/API layer would be pure overhead. GitHub Pages (a free static host) serves the built site directly, and the "Contact" action links out to LinkedIn instead of a hosted contact form/API. If that ever changes (e.g. a real contact form that emails you, a CMS for project content, or an admin panel to edit projects without touching code), a small serverless function (e.g. a Vercel/Netlify function, or a tiny Express API) would be the right amount of backend — full server infrastructure still wouldn't be needed.

## Local development

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # outputs to dist/
npm run preview   # preview the production build locally
```

## Deploying to GitHub Pages

This repo assumes it **is** (or will be) `MaddiePst.github.io` — a GitHub *user* page, served from the domain root, so `vite.config.js` keeps `base: "/"`.

1. Push this project to the `MaddiePst.github.io` repository (replacing the current static site), on the `main` branch.
2. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions** (instead of "Deploy from a branch").
3. Push to `main` — the included workflow at `.github/workflows/deploy.yml` builds the Vite app and publishes `dist/` automatically. Every future push to `main` redeploys the site.
4. Your site stays live at `https://maddiepst.github.io/`.

If you'd rather deploy manually instead of via Actions, `npm run deploy` (using the included `gh-pages` package) will build and push `dist/` to a `gh-pages` branch — just make sure Pages is pointed at that branch instead.

## Updating content

- **Projects** — edit `src/data/projects.js`. Each entry has `title`, `description`, `tech`, `image`, `live`, `repo`, and `featured`.
- **Experience** — edit `src/data/experience.js`.
- **Resume** — replace `public/resume.pdf` with an updated file (keep the filename, or update the links in `src/components/Header.jsx` and `Hero.jsx`).

### ⚠️ One thing to finish

The **AI Supervisor Assistant** project (from your latest resume) is set as the featured project, but I didn't have a screenshot or live/repo URL for it, so it currently renders with a placeholder gradient panel and no links. In `src/data/projects.js`, fill in:

```js
image: "/img/your-screenshot.webp",  // drop the file in public/img/ first
live: "https://...",
repo: "https://github.com/...",
```

## Tech

React 18, Vite, Tailwind CSS. Icons via `ion-icon` (web components, loaded from a CDN — same approach as the previous site) plus one inline SVG for the dev.to mark. No UI framework/animation library beyond Tailwind's own utilities + a tiny IntersectionObserver-based `Reveal` component for scroll-in animations.
