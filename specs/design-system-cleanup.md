# PRD: Design System Cleanup

## Problem statement

Le prototype a été généré par Google Studio et contient du code brouillon: styles surchargés sur les composants, pages de 1000+ lignes avec markup inline, classes CSS répétées au lieu d'utiliser l'héritage.

Ce code est inutilisable pour la production. Chaque page doit être un assemblage simple de composants réutilisables.

## Solution

Extraire des composants de layout (Grid, FlexPair, HeroSplit), durcir le Button, créer des sections réutilisables, et appliquer l'héritage CSS pour réduire la répétition de classes.

## User stories

1. As a dev, I want pages to be component assemblies, so that I can understand the page structure at a glance
2. As a dev, I want layout components (Grid, FlexPair), so that I don't repeat flex/grid classes everywhere
3. As a dev, I want Button variants covering all use cases, so that I never use className overrides
4. As a dev, I want CSS inheritance on sections, so that text color/size aren't repeated on children
5. As a dev, I want shared section components, so that I can reuse Hero, CTA, Marquee across pages

## Features

### Functional

1. [ ] Grid compound component exists — renders responsive grid with `Grid.Cols` sub-component
2. [ ] FlexPair compound component exists — renders icon + title + description layouts
3. [ ] HeroSplit compound component exists — renders responsive two-column hero sections
4. [ ] StickyAside compound component exists — renders sticky sidebar + content layouts
5. [ ] Button has `xl` size — px-12 py-5 sizing
6. [ ] Button has `cta` variant — shadow-xl, hover:-translate-y-1, hover:shadow-2xl
7. [ ] Button has `nav` variant — compact padding, contextual background
8. [ ] Button has `fullWidth` prop — replaces className="w-full"
9. [ ] ClientMarquee extracted — single source of truth in components/layout/
10. [ ] ModularStackGrid deduplicated — removed from Home, Partners uses shared component
11. [ ] FeatureCard extracted — used across Home, Services, Method
12. [ ] HeroSection extracted — standardised hero layouts
13. [ ] All SVG illustrations moved to components/illustrations/

### Validation

1. [ ] Button rejects className with padding/shadow/color classes — TypeScript error or runtime warning
2. [ ] Pages have no inline style declarations — grep finds zero matches

### UI/UX

1. [ ] All pages render identically before and after refactor — visual regression test
2. [ ] Build produces no TypeScript errors

## Implementation decisions

- Compound components pattern (Grid.Cols, FlexPair.Icon) instead of props-heavy components
- Layout components go in components/layout/
- Illustrations go in components/illustrations/
- CSS inheritance: font-size, text-color, font-family declared on parent section, not children
- Tailwind @layer components for badge-label, card-base, card-interactive, section-default
- Single tracking value (0.3em) for all badge labels

## Definition of done

1. [ ] All pages under 200 lines
2. [ ] Zero className overrides on Button
3. [ ] All tests passing
4. [ ] pnpm run build succeeds
5. [ ] Visual parity with current state

## Out of scope

- New features or pages
- Backend/API changes
- Performance optimisation
- Accessibility audit

## Further notes

Plan file: ~/.claude/plans/noble-honking-cake.md

Ordre d'implémentation:
1. Layout components (Grid, FlexPair, HeroSplit, StickyAside)
2. Button hardening
3. Shared sections (ClientMarquee, FeatureCard, HeroSection)
4. Illustrations extraction
5. CSS cascade (@layer components)
6. Page refactoring (Services → Method → Home → others)
