# Mecha Rumble - Project Documentation

This document summarizes the landing page implementation details, custom assets, folder structure, and tech stack of the **Mecha Rumble** Next.js project.

## Tech Stack & Configurations
- **Framework:** Next.js (version `16.2.10`)
- **UI & Styling:** Tailwind CSS v4 (`@tailwindcss/postcss` & `tailwindcss`)
- **Icons:** `lucide-react`
- **Shadcn UI support:** Integrated `class-variance-authority`, `clsx`, `tailwind-merge`, and `@radix-ui/react-slot`.
- **Main Font:** `MyCustomFont` mapped to the local asset `marsek.ttf` (Marsek font).

## Project Structure & Files

- **`app/lib/utils.ts`**
  * Exports the `cn` utility helper for merging tailwind classes.

- **`app/hooks/useSlider.ts`**
  * Custom React hook abstracting slider/carousel container refs and scroll actions for premium sliding interfaces.

- **`app/components/ui/button.tsx`**
  * The shadcn standard `Button` component, featuring a custom `gaming` variant with dark borders and premium hover effects.

- **`app/types/index.ts`**
  * Centralizes all TypeScript interfaces: `NavLink`, `MatchTeam`, `Match`, `Team`, `NewsItem`, `Partner`, `FooterLink`, and `SocialLink`.

- **`app/data/mockData.ts`**
  * Centralizes all static dummy data for the navbar, upcoming matches, stables/teams, news list, partners list, and footer links.
  
- **`app/globals.css`**
  * Loaded the custom `@font-face` for `MyCustomFont`.
  * Configured Tailwind CSS v4 `@theme inline` mapping `--font-custom: 'MyCustomFont', sans-serif;` so `font-custom` classes can be used.
  * Added marquee animation `@keyframes` and `.animate-marquee` styles.
  * Configured light-gray body background (`#f8f9fa`) to match reference styling.

- **`app/page.tsx`**
  * Main entry page that composes the custom components: `Ticker`, `Navbar`, `Hero`, `UpcomingMatches`, `Teams`, `News`, `Partners`, and `Footer`.

- **`public/`**
  * Houses the 4 generated high-fidelity news card graphics (`news_opening.png`, `news_key.png`, `news_tickets.png`, `news_paris.png`) representing the Esports tournament.

## Component Overview

1. **`app/components/Ticker.tsx`**
   * Top announcement banner with a seamless horizontal marquee scrolling text: `"SITE EN CONSTRUCTION PLUS D'INFORMATIONS À VENIR BIENTÔT !"`.
   
2. **`app/components/Navbar.tsx`**
   * Fully responsive header. Renders the stacked logo, menu links (pulled from central mock data), and dark action buttons using shadcn `Button`. Includes a collapsible mobile hamburger drawer.

3. **`app/components/Hero.tsx`**
   * A premium rounded black card layout with subtle radial glow backdrops. Displays the status badge, large custom stacked logo, French description, live ticking countdown timer, and smooth down-scroll control using shadcn `Button`.

4. **`app/components/UpcomingMatches.tsx`**
   * Displays the "Match à venir" heading, a link to all matches, and a grid of match cards showing dates, locations, team SVGs, and "RÉSERVER UN BILLET" buttons built using shadcn `Button`.

5. **`app/components/Teams.tsx`**
   * Renders two rows of team badges (Fnatic, Fluxo, Cloud9, etc.) inside circular cards.

6. **`app/components/News.tsx`**
   * Recreated news card layout using the generated high-fidelity tournament graphics, rendering exact representations matching the reference image. Incorporates a smooth-scrolling slider with snap alignment and left/right navigation controls powered by the `useSlider` hook. Contains the newsletter banner with a shadcn `Button`.

7. **`app/components/Partners.tsx`**
   * Grid of partner logo cards displaying STC, Qiddiya, Aramco, Sony, Hilton, Albaik, and Secretlab.

8. **`app/components/Footer.tsx`**
   * Premium custom dark-navy footer displaying links column, copyright notice, giant stacked custom font logo, social media icons row, and an interactive language select dropdown utilizing shadcn `Button`.

## How to Run & Verify

1. Run the local development server:
   ```bash
   npm run dev
   ```
2. Open [http://localhost:3000](http://localhost:3000) in the browser to view the fully responsive layout.
