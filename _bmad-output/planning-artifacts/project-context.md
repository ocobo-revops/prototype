# Project Context - Ocobo Prototype

**Project:** Ocobo Revenue Operations Agency Website
**Type:** Brownfield React SPA
**Last Updated:** 2026-01-13
**Status:** Active Development (Design System Phase)

---

## 1. Vision & Business Context

### Project Purpose

Ocobo is a **revenue operations consulting firm** building a modern web presence to:
- Showcase their RevOps methodology and services
- Establish thought leadership through content (articles, podcasts, webinars)
- Generate leads through case studies and contact forms
- Attract talent via career opportunities portal

### Target Audience

1. **B2B Decision Makers** - CTOs, CROs, COOs seeking RevOps expertise
2. **Revenue Leaders** - Sales, Marketing, CS leaders looking for operational improvements
3. **Potential Employees** - RevOps professionals considering career at Ocobo
4. **Content Consumers** - Professionals seeking RevOps knowledge

### Business Goals

- **Primary:** Generate qualified leads for consulting services
- **Secondary:** Build brand awareness and thought leadership
- **Tertiary:** Attract top RevOps talent

---

## 2. Technical Context

### Technology Stack

| Layer | Technology | Version | Notes |
|-------|------------|---------|-------|
| Framework | React | 19.2.3 | Latest stable, hooks-based |
| Language | TypeScript | 5.8.2 | Strict mode enabled |
| Build | Vite | 6.4.1 | Fast HMR, ESM native |
| Routing | React Router | 7.x | HashRouter for static hosting |
| Styling | Tailwind CSS | 4.x | Local config (migrated from CDN) |
| Testing | Vitest | 4.x | Added in Epic 1 |
| AI | Google Gemini API | - | Client-side integration |

### Architecture Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Routing | HashRouter | Static hosting compatibility (no server-side routing) |
| State | React hooks only | Complexity doesn't warrant Redux/Zustand yet |
| Styling | Tailwind + Design Tokens | Brand consistency + rapid development |
| API Keys | Client-side exposed | Acceptable for this use case; consider proxy for sensitive ops |
| Testing | Vitest | Native Vite integration, fast execution |

### Key Constraints

1. **Static Hosting** - Must work on Vercel/Netlify/S3 without server
2. **No Backend** - All API calls are client-side (Gemini API)
3. **Brand Compliance** - Must follow Ocobo brand guidelines (colors, fonts)
4. **Performance** - Target < 3s initial load on 3G

---

## 3. Current State (Post-Epic 1)

### Completed Work

**Epic 1: Design Tokens Foundation** (DONE)
- [x] Migrated Tailwind from CDN to local configuration
- [x] Defined primitive color tokens (22 CSS variables)
- [x] Defined semantic color tokens (10 tokens)
- [x] Defined spacing, radius, shadow tokens
- [x] Defined typography tokens
- [x] Migrated ~638 color occurrences to semantic tokens
- [x] Added 35 automated tests for token validation

### Design System Status

**Implemented:**
- Primitive colors: `--color-ocobo-*` (dark, yellow, mint, sky, coral, grays)
- Semantic colors: `--color-semantic-*` (primary, accent, success, info, text, border, etc.)
- Only `semantic-primary-light` exists as light semantic variant

**Known Technical Debt:**
- Missing semantic light variants (success-light, info-light, accent-light)
- `semantic-text` used for both text AND dark backgrounds (confusing)
- No semantic border tokens defined
- See: `story-1-7-review-color-token-strategy.md` (optional, deferred)

### File Structure

```
prototype/
├── components/           # 5 reusable UI components
│   ├── Button.tsx       # Generic button (uses semantic tokens)
│   ├── Navbar.tsx       # Main navigation (~400 LOC)
│   ├── Footer.tsx       # Site footer
│   ├── ServiceCard.tsx  # Service display card
│   └── NewsletterWidget.tsx
│
├── pages/               # 15 route-based pages
│   ├── Home.tsx        # Landing page
│   ├── Services.tsx    # Services (largest page)
│   ├── Method.tsx      # Methodology
│   └── ... (12 more)
│
├── docs/                # Generated documentation
│   └── design-system/
│       └── tokens.md    # Design token reference
│
├── tests/               # Test files
│   └── design-tokens.test.ts  # 35 token tests
│
├── tailwind.config.js   # Tailwind configuration (tokens defined here)
├── index.css           # CSS variables (single source of truth for colors)
├── vite.config.ts      # Build config with Vitest
└── types.ts            # TypeScript definitions
```

---

## 4. Development Standards

### Code Conventions

**TypeScript:**
- Strict mode enabled
- All types in `types.ts` for shared models
- Interfaces preferred over types for objects
- Enums for fixed sets (e.g., `ThemeColor`)

**React:**
- Functional components only (no class components)
- Custom hooks for reusable logic
- Props interfaces defined inline or in types.ts

**File Organization:**
- Single-file components go directly in `components/` (e.g., `components/container.tsx`)
- Only create subfolders when component has multiple files (context, sub-components)
- All file/folder names lowercase with kebab-case (e.g., `button.tsx`, not `Button.tsx`)

**Styling:**
- Use semantic tokens for intentional styling: `text-semantic-text`, `bg-semantic-primary`
- Use primitive tokens for decorative elements: `border-ocobo-yellow`, `bg-ocobo-mint-light`
- Mobile-first responsive design (`sm:`, `md:`, `lg:` breakpoints)

### Git Conventions

- Conventional commits: `feat:`, `fix:`, `refactor:`, `docs:`, `test:`
- Branch naming: `feature/`, `fix/`, `refactor/`
- PRs require passing build and tests

### Testing Standards

- All design tokens must have validation tests
- New components should have basic render tests
- Run `npm test` before committing

---

## 5. Roadmap Context

### Planned Epics

| Epic | Name | Status | Description |
|------|------|--------|-------------|
| 1 | Design Tokens Foundation | **DONE** | Color, spacing, typography tokens |
| 2 | Core UI Components | Backlog | Button, Badge, Input, Card system |
| 3 | Section Components | Backlog | Hero, CTA, Feature, Grid sections |
| 4 | Navbar Refactoring | Backlog | Decompose Navbar into smaller components |
| 5 | Page Refactoring | Backlog | Migrate pages to use new components |
| 6 | AI Documentation | Backlog | CLAUDE.md updates, component catalog |
| 7 | Design System Showcase | Backlog | Interactive component showcase page |

### Next Priority

**Epic 2: Core UI Components** - Create foundational components:
- Container component (layout)
- Button component (redesign with variants)
- Badge component
- Input component
- Card composition system (Header, Body, Footer, Media)

---

## 6. Integration Points

### External Services

| Service | Purpose | Config Location |
|---------|---------|-----------------|
| Google Gemini API | AI features | `.env.local` → `GEMINI_API_KEY` |
| Google Fonts | Inter fallback font | `index.html` |
| Ocobo CDN | Custom fonts (Bermia, Bornia) | `index.html` |

### Internal Dependencies

- **BMAD Workflows** - Development automation in `_bmad/`
- **Sprint Status** - `_bmad-output/implementation-artifacts/sprint-status.yaml`
- **Story Files** - `_bmad-output/implementation-artifacts/story-*.md`

---

## 7. AI Agent Guidelines

### For All Agents

1. **Always read this file first** for project context
2. **Check sprint-status.yaml** for current work state
3. **Reference docs/design-system/tokens.md** for styling decisions
4. **Use semantic tokens** for new UI work
5. **Run tests** before completing any implementation

### For Development Agents

- Use `mgrep` for code search (optimized for this repo)
- Follow existing patterns in similar components
- Update story files with completion notes
- Run `npm run build && npm test` to validate

### For Planning Agents (PM, SM, Analyst)

- Reference `docs/architecture.md` for technical constraints
- Check `docs/component-inventory.md` for existing capabilities
- Consider Epic 1 debt in `story-1-7` for color token decisions

### For Review Agents

- Validate all ACs are actually implemented
- Check for visual regressions (especially color changes)
- Verify tests pass and cover new functionality

---

## 8. Quick Reference

### Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (port 3000)
npm run build        # Production build
npm run test         # Run Vitest tests
npm run test:watch   # Watch mode
```

### Key Files

| File | Purpose |
|------|---------|
| `CLAUDE.md` | Claude-specific instructions |
| `tailwind.config.js` | Design tokens configuration |
| `index.css` | CSS variables (color source of truth) |
| `types.ts` | Shared TypeScript definitions |
| `App.tsx` | Router configuration |

### Documentation

| Doc | Location | Purpose |
|-----|----------|---------|
| Architecture | `docs/architecture.md` | System design |
| Components | `docs/component-inventory.md` | UI catalog |
| Tokens | `docs/design-system/tokens.md` | Design tokens reference |
| Development | `docs/development-guide.md` | Setup guide |

---

## 9. Contact & Ownership

**Project Owner:** Jerome Boileux
**Repository:** `/Users/jeromeboileux/projects/ocobo/prototype`
**BMAD Module:** v6.0.0-alpha.23

---

*This context file is maintained alongside the codebase. Update it when significant architectural decisions are made or project direction changes.*
