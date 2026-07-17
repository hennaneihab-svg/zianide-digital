# Zianide Digital

Studio algérien de création de sites web, d'applications sur mesure et d'identité visuelle.

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Global styles & Tailwind
│   ├── layout.tsx        # Root layout (fonts, meta)
│   └── page.tsx          # Home page
├── components/
│   └── CornerFrame.tsx   # Brand motif component
└── content/
    └── fr.ts             # Centralized French content (i18n-ready)

public/
└── logos/
    ├── zianide-logo-light.svg
    └── zianide-logo-dark.svg
```

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **TailwindCSS**
- **Framer Motion**
- **Lucide React**

## Brand Colors

| Token     | Hex       | Usage                    |
|-----------|-----------|--------------------------|
| primary   | `#202020` | Text, logos, dark BGs    |
| secondary | `#8A8A8A` | Secondary text           |
| accent    | `#B4B4B4` | Accents, text on dark    |
| border    | `#EAE8E8` | Dividers, borders        |
| bg        | `#F4F3F3` | Main background          |
| white     | `#FFFFFF` | Cards, text on dark      |
