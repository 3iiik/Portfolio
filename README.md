# 3iik Studio — Portfolio

A single Next.js application that is the single source of truth for the portfolio
and all client showcase websites. The client demo sites live as native routes —
no iframes, no external deployments.

## Included projects

| Project | Route | Theme |
| --- | --- | --- |
| Portfolio (3iik Studio) | `/` | Black & white |
| Le Jardin — Restaurant | `/work/le-jardin/demo` | Gold / cream / espresso |
| Atlas Fitness — Gym | `/work/atlas-fitness/demo` | Near-black / orange |
| SmileCare — Dental clinic | `/work/smilecare/demo` | White / teal |

Each demo is isolated under a scoped CSS class (`.work-lejardin`, `.work-atlas`,
`.work-smilecare`) so its palette and tokens never leak into the rest of the app.
Their source lives under `src/work/<slug>/` with assets in `public/work/<slug>/`.

External projects linked from the portfolio (kept as separate repos):

- **Wilaya Quiz** — interactive Algerian wilaya quiz → <https://wilaya.vercel.app>
- **Forca** — desktop app → <https://github.com/3iiik/Forca>

## Tech stack

- Next.js 16 (App Router, Turbopack)
- React 19
- Tailwind CSS v4
- Motion (framer-motion successor)
- Localized in French, English, and Arabic (`/fr`, `/en`, `/ar`)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

```bash
npm run dev      # development server
npm run build    # production build
npm run start    # serve production build
npm run lint     # ESLint
```
