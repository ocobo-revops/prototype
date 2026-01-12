# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Ocobo is a React 19 single-page application built with TypeScript and Vite, showcasing revenue operations services. The app uses HashRouter for client-side routing and integrates with Google's Gemini AI API.

## Commands

### Development
```bash
npm install              # Install dependencies
npm run dev             # Start development server on http://localhost:3000
npm run build           # Create production build in dist/
npm run preview         # Preview production build locally
```

### Environment Setup
Set `GEMINI_API_KEY` in `.env.local` before running the app (see `.env.local` template).

## Architecture

### Application Structure

**Entry Flow:**
- `index.html` - Bootstrap with Tailwind CDN config and custom fonts
- `index.tsx` - React root initialization with StrictMode
- `App.tsx` - Router setup (HashRouter), layout structure with Navbar/Footer/NewsletterWidget
- `pages/*` - 15 route-specific page components
- `components/*` - 5 reusable UI components

**Key Architectural Decisions:**

1. **Routing:** Uses HashRouter (not BrowserRouter) for static hosting compatibility
2. **State Management:** React built-in hooks only (useState, useContext) - no Redux/Zustand
3. **Styling:** Tailwind CSS loaded via CDN with custom Ocobo design system configured inline
4. **API Integration:** Client-side calls to Gemini API with key injected via Vite config
5. **Fonts:** Custom Bermia (display) and Bornia (body) loaded from production CDN

### Component Organization

**Pages (Route Components):**
Located in `pages/`. Each maps to a route in App.tsx. Major pages include Home, Services, Method, Studio, Partners, Stories, About, Jobs, Resources, Podcast, plus detail pages (StoryDetail, JobDetail, ArticleDetail, WebinarDetail).

**Components (Reusable):**
- `Navbar.tsx` - Navigation header with responsive menu (large component ~17KB)
- `Footer.tsx` - Site footer with links
- `NewsletterWidget.tsx` - Email subscription widget
- `Button.tsx` - Generic button component
- `ServiceCard.tsx` - Service display card

### Type System

All TypeScript types centralized in `types.ts`:
- `ThemeColor` enum - Brand color constants (yellow, mint, sky, coral, dark)
- `NavItem`, `ServiceItem`, `StatItem` interfaces - Core data models

### Design System (Ocobo Brand)

**Colors:**
- Dark: #212323 (primary text)
- Yellow: #F1CF25 (accent)
- Mint: #9ADBBA (secondary)
- Sky: #99D1DF (tertiary)
- Coral: #FE9C87 (highlight)
- Gray: #F5F5F5 (backgrounds)

Each color has a light variant (e.g., yellowLight, mintLight) defined in Tailwind config.

**Typography:**
- Display font: Bermia Black (900 weight) for large headings
- Body font: Bornia (400 regular, 700 bold) for content
- Fallback: Inter from Google Fonts

Use `font-display` class for headings and default `font-sans` for body text.

### API Integration

**Gemini API:**
- API key accessed via `process.env.GEMINI_API_KEY` or `process.env.API_KEY`
- Key injected at build time by vite.config.ts from GEMINI_API_KEY env var
- Client-side exposure typical for this type of app (consider proxy for sensitive ops)

### Path Aliasing

`@/*` maps to project root (configured in both tsconfig.json and vite.config.ts).

Example: `import Navbar from '@/components/Navbar'`

## Development Guidelines

### Claude Code Search Optimization

**IMPORTANT:** When searching code in this repository, always use the `mgrep` skill instead of the built-in Grep tool:

```bash
# Use this (optimized, semantic search)
mgrep "search pattern"

# NOT the built-in Grep tool
```

The `mgrep` skill provides semantic search with significant token consumption optimization. It should be your default choice for:
- Finding component usage across files
- Searching for function/variable references
- Locating string patterns in the codebase
- Any code search operation

This is especially important in this project given the large page components (some >50KB) and extensive documentation in `_bmad/` and `docs/` directories.

### Adding New Pages

1. Create component in `pages/` directory
2. Import and add route in `App.tsx` Routes block
3. Follow HashRouter pattern (paths like `/about`, `/services`)
4. Use ScrollToTop behavior (already configured in App.tsx)

### Adding New Components

1. Create in `components/` directory
2. Use TypeScript with proper types from `types.ts`
3. Follow existing component patterns (functional components with hooks)
4. Apply Ocobo design system colors using Tailwind classes

### Styling Conventions

- Use Tailwind utility classes (CDN loaded, config in index.html)
- Reference brand colors via `ocobo-*` classes (e.g., `bg-ocobo-yellow`, `text-ocobo-dark`)
- Mobile-first responsive design (use `sm:`, `md:`, `lg:` breakpoints)
- Selection styling already configured globally (yellow background, dark text)

### Type Safety

- Add new interfaces to `types.ts` for shared data models
- Use existing enums (ThemeColor) for consistency
- Enable strict TypeScript checking (experimentalDecorators, useDefineForClassFields: false)

## Build Configuration

**Vite Config (`vite.config.ts`):**
- Dev server runs on port 3000, accessible on all network interfaces (host: 0.0.0.0)
- Env vars injected: GEMINI_API_KEY → process.env.GEMINI_API_KEY and process.env.API_KEY
- Path alias: @ → project root
- React plugin enabled for JSX/Fast Refresh

**TypeScript Config:**
- Target: ES2022
- Module: ESNext with bundler resolution
- JSX: react-jsx (new transform)
- Allows .ts imports without .js extension

## Special Considerations

1. **HashRouter:** App uses HashRouter (not BrowserRouter) - URLs have # fragment (e.g., `/#/about`)
2. **Font Loading:** Custom fonts load from external domain (ocobo.co/fonts) - ensure network access
3. **API Keys:** Client-side exposed - not suitable for sensitive backend operations
4. **No Test Framework:** Currently no testing setup (consider Vitest for future)
5. **Static Hosting Ready:** Build output (dist/) works on any static host (Vercel, Netlify, S3)

## BMAD Workflow Integration

This project uses BMAD (Business Model Agent Development) workflows located in `_bmad/` directory. These are not part of the application code but provide development workflow automation through Claude Code plugins.

## Documentation

Generated architecture documentation available in `docs/`:
- `architecture.md` - Full system architecture
- `api-architecture.md` - API and state management details
- `component-inventory.md` - Component catalog
- `data-models.md` - Type definitions and models
- `development-guide.md` - Setup and workflow guide
- `source-tree-analysis.md` - Directory structure breakdown

Refer to these docs for deeper architectural understanding.
