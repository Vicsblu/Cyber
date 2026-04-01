# VogSec — Cybersecurity Portfolio

Victor Oguntoyinbo's cybersecurity analyst portfolio built with **Vite + React + Tailwind CSS**.

## Project Structure

```
cyber-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Icons.jsx          # All inline SVG icons
│   │   ├── SectionHeader.jsx  # Reusable section heading
│   │   ├── ScrollBar.jsx      # Top scroll-progress bar
│   │   ├── Nav.jsx            # Sticky navigation
│   │   ├── Hero.jsx           # Landing / hero section
│   │   ├── About.jsx          # About / terminal profile
│   │   ├── Dashboard.jsx      # SOC capability cards
│   │   ├── CaseStudies.jsx    # Investigation case cards
│   │   ├── Skills.jsx         # Skill bars + certifications
│   │   ├── Knowledge.jsx      # Tabbed knowledge hub
│   │   ├── Timeline.jsx       # Career timeline
│   │   ├── Contact.jsx        # Contact form + info
│   │   └── Footer.jsx         # Footer
│   ├── data/
│   │   └── portfolioData.js   # All static content (easy to edit)
│   ├── hooks/
│   │   └── index.js           # useTypingEffect, useScrollProgress, useInView
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── vercel.json
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deploying to Vercel

1. Push to GitHub
2. Import the repo at [vercel.com](https://vercel.com)
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`

The `vercel.json` file handles SPA routing and security headers automatically.

## Customising Content

All text, data, colours, and links live in **`src/data/portfolioData.js`** — no need to touch component files for content updates.
