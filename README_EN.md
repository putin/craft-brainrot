# Craft Brainrot Game Website

🎮 **Official Website**: [Craft Brainrot Official Website](https://craftbrainrot.net/)

📖 **中文版本**: [README.md](./README.md)

This is the official website project for Craft Brainrot game, built with Next.js. The website provides game embed, game information display, and optimization for search engines and AI crawlers.

## Project Overview

Craft Brainrot is a viral merge game that combines Italian meme culture with addictive crafting gameplay, running directly in browsers without downloads. This project is the official website for the game, providing complete game experience and information display.

## About the Game

**Craft Brainrot** is a viral merge game that has taken the internet by storm, combining authentic Italian meme culture with addictive crafting gameplay. Players experiment with different combinations of items from Italian meme culture to discover new and often hilarious results.

### Game Highlights

🎭 **Unique Meme Culture Integration**: Craft Brainrot stands out by incorporating authentic Italian meme culture into its gameplay. Every character and item has been carefully designed to reflect the absurd humor that makes brainrot content so entertaining.

🔀 **Endless Combination Possibilities**: With hundreds of items to discover, Craft Brainrot offers virtually unlimited replay value. Each merge attempt can lead to surprising new discoveries, keeping players engaged for hours.

📱 **Cross-Platform Compatibility**: Whether you're playing on mobile, tablet, or desktop, the game delivers a seamless experience across all devices. The intuitive touch controls make it perfect for gaming on the go.

🎨 **Vibrant Visual Design**: The game features colorful, cartoon-style graphics that perfectly complement its humorous theme. Every character is instantly recognizable and bursting with personality.

⚡ **Quick Play Sessions**: The game is designed for both short casual sessions and extended gaming marathons. You can make meaningful progress in just a few minutes or lose yourself for hours exploring new combinations.

### Why Play Craft Brainrot?

- **Free to Play**: Completely free with no hidden costs or mandatory purchases
- **Cross-Platform**: Compatible with smartphones, tablets, and computers with web browsers
- **Viral Gameplay**: Experience the game that's taking over the internet
- **Endless Fun**: Discover hundreds of unique combinations and characters

The game encourages creative experimentation as players combine different meme elements to unlock new characters and items. Each successful combination reveals something unexpected, keeping the gameplay fresh and entertaining.

### Supported Games List

1. **[Craft Brainrot](https://www.crazygames.com/game/craft-brainrot)** - Viral merge game with Italian meme culture theme

### Main Features

- **Game Embed & Display** - Supports Craft Brainrot viral merge game
- **Unified Game Page Template** - Complete introduction, features, gameplay and FAQ
- **Game Features, Gameplay & FAQ Introduction** - Detailed game guides and common questions
- **Search Engine Optimization (SEO)** - Complete meta tags and structured data
- **AI Crawler Special Content Optimization** - Dedicated llms.txt files
- **Responsive Design** - Supports various devices and screen sizes

## Tech Stack

- **Framework**: Next.js 13.5.1 (App Router)
- **Language**: TypeScript 5.2.2
- **Styling**: Tailwind CSS 3.3.3
- **UI Components**: Radix UI (Complete accessibility component library)
- **Deployment**: Vercel
- **SEO**: next-sitemap 4.2.3
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React

## Project Structure

```
/
├── app/                    # Next.js App Directory (App Router)
│   ├── craft-brainrot/     # Craft Brainrot game page
│   ├── games/              # Game list and data configuration
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── privacy-policy/     # Privacy policy page
│   ├── terms-of-service/   # Terms of service page
│   ├── layout.tsx          # Global layout
│   ├── page.tsx            # Homepage
│   ├── schema.ts           # Structured data configuration
│   └── globals.css         # Global styles
├── components/             # React component library
│   ├── game-section/       # Game display components
│   ├── layout/             # Layout components (Header, Footer)
│   ├── templates/          # Page templates (GamePageTemplate)
│   ├── home/               # Homepage components
│   ├── features/           # Game features components
│   ├── what-is/            # Game introduction components
│   ├── how-to-play/        # Gameplay instruction components
│   ├── faq/                # FAQ components

│   ├── rating/             # Rating components
│   └── ui/                 # Basic UI components (based on Radix UI)
├── config/                 # Configuration files
│   ├── site.ts/js          # Site basic configuration
│   ├── content.ts          # Game content configuration
│   ├── layout.ts           # Layout configuration
│   └── theme.ts            # Theme configuration
├── hooks/                  # Custom React Hooks
├── lib/                    # Utility function library
├── public/                 # Static assets
│   ├── assets/             # Images and other resources
│   │   ├── craft-brainrot/ # Craft Brainrot related images
│   │   └── img/            # Site common images
│   ├── game/               # Game files directory
│   │   └── craft-brainrot/ # Craft Brainrot game files
│   ├── llms.txt            # AI crawler dedicated content summary
│   ├── llms-full.txt       # AI crawler dedicated full content
│   ├── robots.txt          # Search engine crawler rules
│   └── sitemap.xml         # Site map
├── next.config.js          # Next.js configuration (includes game route rewrites)
├── next-sitemap.config.js  # Sitemap and robots.txt configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── components.json         # shadcn/ui component configuration
```

## Development Guide

### Environment Requirements

- Node.js 16.x or higher
- npm or yarn

### Environment Variables Setup

Create a `.env.local` file in the project root:

```bash
# Google Analytics Configuration
# Replace with your own Google Analytics ID
# How to get: https://analytics.google.com/ → Admin → Data Streams → Measurement ID
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Other optional configurations
# NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

**Note**: 
- The `.env.local` file is included in `.gitignore` and will not be committed to the repository
- Please replace `G-XXXXXXXXXX` with your own Google Analytics Measurement ID

### Install Dependencies

```bash
npm install
# or
yarn install
```

### Local Development

```bash
npm run dev
# or
yarn dev
```

Visit http://localhost:3000 to view the website.

### Build Project

```bash
npm run build
# or
yarn build
```

### Generate Sitemap

```bash
npm run sitemap
# or
yarn sitemap
```

### Clean Sitemap

```bash
npm run clean-sitemap
```

## Game Embed Guide

The website embeds games through iframe, each game has corresponding embed routes:

- `/craft-brainrot.embed` → `/game/craft-brainrot/index.html`

For detailed game localization deployment guide, refer to `IFRAME_DOWNLOAD_README.md`.

## Adding New Games Guide

To add new games, follow these steps:

1. **Add Game Files**: Place game files in `public/game/[game-name]/` directory
2. **Create Game Page**: Create page directory and files in `app/[game-name]/`
3. **Configure Game Data**: Add game information in `app/games/game-data.ts`
4. **Add Game Content**: Create game's `content.ts` configuration file
5. **Configure Route Rewrites**: Add embed routes in `next.config.js`
6. **Add Game Assets**: Add related images in `public/assets/[game-name]/`

## Current Game

### Craft Brainrot
- **Game Type**: Viral merge game
- **Theme**: Italian meme culture
- **Gameplay**: Click to merge, discover new combinations
- **Features**: Combines Italian meme culture with addictive crafting gameplay

## Related Links and Resources

### Official Pages
- 🏠 **Homepage**: [Craft Brainrot Official Website](https://craftbrainrot.net/)
- 🎮 **Game Page**: [Craft Brainrot Game](https://www.crazygames.com/game/craft-brainrot)
- 📞 **Contact Us**: [Contact Us](https://craftbrainrot.net/contact)
- ℹ️ **About Us**: [About Us](https://craftbrainrot.net/about)
- 🔒 **Privacy Policy**: [Privacy Policy](https://craftbrainrot.net/privacy-policy)
- 📋 **Terms of Service**: [Terms of Service](https://craftbrainrot.net/terms-of-service)

### External Links (Footer Quick Links)
- 🐍 **Snake Game**: [Online Snake Game](https://snake-game.online)
- 📝 **Evernote**: [Evernote Notes](https://lite.evernote.com/note/a7633e02-bcf7-d080-171a-a858eec4a9d2)
- 📅 **CAL**: [Vincent AI Calendar Booking](https://cal.com/vincent-ai)
- 💰 **Patreon**: [Patreon Support Page](https://www.patreon.com/posts/craft-brainrot-129397709)
- 📌 **Pinterest**: [Pinterest Image Sharing](https://www.pinterest.com/pin/581245895696208484/)
- 🔗 **Linktr**: [Linktr Link Tree](https://linktr.ee/vincent20250520)
- 📰 **Substack**: [Substack Blog](https://substack.com/@vincent879601/posts)
- 🎨 **Creem**: [Creem Creative Platform](https://www.creem.io/bip/vincent-ai)
- 💻 **CraftBrainrot Github**: [Project English Documentation](https://github.com/WeiWenxing/crazycattle3d/blob/main/README_EN.md)

## AI Crawler Optimization

This project has special optimization for AI crawlers:

1. **Dedicated Content Files**: Provides `llms.txt` and `llms-full.txt` files containing structured game information
2. **robots.txt Configuration**: Guides AI crawlers to access dedicated files while restricting access to other parts of the website
3. **Supported AI Crawlers**: GPTBot, ChatGPT-User, Claude-Web, PerplexityBot, DeepseekBot, etc.

For detailed configuration, see `next-sitemap.config.js`.

## OG Image Generation

For social media preview image generation guide, refer to `OG_IMAGE_README.md`.

## Deployment

The project is configured for automatic deployment through Vercel. Changes pushed to the main branch will automatically deploy to production.

### Vercel Environment Variables Setup

Configure the following environment variables in Vercel Console:

1. Login to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add the following variables:

```
Name: NEXT_PUBLIC_GA_ID
Value: G-XXXXXXXXXX
Environment: Production, Preview, Development
```

**Or using Vercel CLI:**

```bash
# Install Vercel CLI
npm i -g vercel

# Set environment variable
vercel env add NEXT_PUBLIC_GA_ID
# Enter value: G-XXXXXXXXXX
# Select environments: Production, Preview, Development
```

### Automatic Deployment

- **Production**: Push to `main` branch triggers automatic deployment
- **Preview**: Creating Pull Requests automatically generates preview links
- **Development**: Use `vercel dev` for local development

## License

© 2025 Craft Brainrot. All rights reserved. 