# Craft Brainrot Game Website

🎮 **Website**: [craft-brainrot.com](https://craft-brainrot.com/)

📖 **中文版本**: [README.md](./README.md)

A Next.js-powered game aggregation site for Craft Brainrot, featuring 16 Italian Brainrot games with iframe embedding and external link support.

---

## Overview

This site aggregates all games from [craft-brainrot.com](https://craft-brainrot.com/):
- **Craft Brainrot** (main game) — embedded via iframe, playable directly on-page
- **Other 15 games** — displayed as cards, click to open on original site

---

## Game List (16 Total)

| Game | Type | Embed |
|------|------|-------|
| Craft Brainrot | Merge/Craft | ✅ iframe embedded |
| Merge Brainrot | Merge | 🔗 External link |
| Brainrot Merge Drop Puzzles | Puzzle Merge | 🔗 External link |
| Merge Brainrot 2 | Merge sequel | 🔗 External link |
| Brainrot Boing Boing Merge | Bouncy Merge | 🔗 External link |
| Labuba Merge | Casual Merge | 🔗 External link |
| Italian Brainrot Find the Stars | Hidden Object | 🔗 External link |
| Italian Brainrot Survival Arena | Survival | 🔗 External link |
| Brainrot Merge | Classic Merge | 🔗 External link |
| Italian Brainrot Challenge | Challenge | 🔗 External link |
| Guess The Italian Brainrot Animals | Guessing | 🔗 External link |
| Brainrot Hole | Casual | 🔗 External link |
| Italian Brainrot Puzzle | Puzzle | 🔗 External link |
| Sprunki Phase Brainrot | Music | 🔗 External link |
| Italian Brainrot Baby Clicker | Clicker | 🔗 External link |
| Brainrot Click to Hatch | Clicker | 🔗 External link |

---

## Tech Stack

- **Framework**: Next.js 13.5.1 (App Router)
- **Language**: TypeScript 5.2.2
- **Styling**: Tailwind CSS 3.3.3
- **UI**: Radix UI + shadcn/ui
- **Deployment**: Cloudflare Pages (static export)
- **SEO**: next-sitemap

---

## Project Structure

```
/
├── app/
│   ├── craft-brainrot/         # Craft Brainrot game page
│   ├── games/game-data.ts      # All 16 game definitions
│   ├── about/
│   ├── contact/
│   ├── privacy-policy/
│   ├── terms-of-service/
│   ├── layout.tsx
│   ├── page.tsx                # Home page
│   └── schema.ts
├── components/
│   ├── game-section/           # Main iframe embed
│   ├── game-grid/              # 16-game card grid
│   ├── home/HomeTemplate.tsx
│   ├── templates/GamePageTemplate.tsx
│   ├── layout/                 # Header / Footer
│   ├── features/
│   ├── what-is/
│   ├── how-to-play/
│   ├── faq/
│   ├── rating/
│   └── ui/                     # shadcn/ui base components
├── config/
│   ├── site.js                 # Site config (domain, email, etc.)
│   ├── site.ts                 # TypeScript type definitions
│   ├── content.ts              # Home page content
│   ├── layout.ts               # Layout visibility flags
│   └── theme.ts                # Theme / style tokens
├── public/
│   ├── assets/img/
│   ├── llms.txt                # AI crawler summary
│   └── llms-full.txt           # AI crawler full content
├── .gitignore
├── next.config.js
├── next-sitemap.config.js
├── tailwind.config.ts
├── tsconfig.json
└── wrangler.toml               # Cloudflare Pages config
```

---

## Getting Started

### Requirements

- Node.js 18.x or above
- npm 9.x or above

### Install & Run

```bash
git clone <repo-url>
cd craft-brainrot
npm install
npm run dev
# Open http://localhost:3000
```

### Build

```bash
# Full build with sitemap
npm run build

# Static export only (Cloudflare Pages)
npm run build:static
```

### Environment Variables (optional)

Create `.env.local`:

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
BING_VERIFICATION_KEY=your-bing-key
```

---

## Configuration

### Change main game iframe URL

Edit `config/content.ts`:

```ts
gameSection: {
  game: {
    url: 'https://g.igroutka.ru/games/...', // iframe src
    externalUrl: 'https://craft-brainrot.com/'
  }
}
```

### Add a new game

Edit `app/games/game-data.ts`:

```ts
"game-id": {
  id: "game-id",
  title: "Game Title",
  description: "...",
  image: "https://...",
  url: "https://...",        // required: original site URL
  iframeUrl: "https://...", // optional: embeddable iframe URL
}
```

---

## Deployment

### Cloudflare Pages

`wrangler.toml` is pre-configured. Push to `main` to auto-deploy.

```bash
npm run build:static
npx wrangler pages dev out
```

---

## License

© 2025 Craft Brainrot. All rights reserved. 