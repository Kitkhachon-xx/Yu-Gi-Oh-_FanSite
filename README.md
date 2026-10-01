# Yu-Gi-Oh! Fan Site

An unofficial fan site for Yu-Gi-Oh! Duel Monsters: story arcs, character profiles and signature decks.

Built with Next.js (App Router, static export), TypeScript and Tailwind CSS.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out
```

## Project layout

- `src/app` – pages (`/`, `/story`, `/characters`, `/characters/[slug]`, `/decks`, `/decks/[slug]`)
- `src/components` – navbar, footer, card lightbox, reveal animation, back-to-top
- `src/data` – all content (story arcs, character bios, decks and card lists)
- `public/img`, `public/cards` – images (all local, nothing is hot-linked)

To add a deck or character, edit the files in `src/data`; the pages are generated from them.

## Deploy on Vercel

1. Push this repository to GitHub.
2. On [vercel.com/new](https://vercel.com/new) import the repository.
3. Keep the detected **Next.js** preset and click **Deploy** (no environment variables needed).

Every push to `main` redeploys automatically.

---

Fan project, not affiliated with Konami. Yu-Gi-Oh! and all related names, characters and card images are property of their respective owners.
