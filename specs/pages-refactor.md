# PRD: Pages Refactor

## Problem statement

Les pages du site (Home, Services, About, Method) sont trop longues (470-767 lignes) avec 80-90% de classes Tailwind inline. Les patterns CSS sont répétés des dizaines de fois sans être encapsulés dans des composants. Cela rend le code difficile à maintenir et crée des incohérences visuelles.

## Solution

Extraire les sections répétées en composants réutilisables et créer les composants manquants du design system. Chaque page ne devrait contenir que la composition de ses sections, pas l'implémentation détaillée.

## User stories

1. As a developer, I want pages under 100 lines, so that I can quickly understand the page structure
2. As a developer, I want reusable section components, so that I can modify styles in one place
3. As a developer, I want a consistent component library, so that I can build new pages faster
4. As a designer, I want visual consistency, so that the brand is coherent across all pages
5. As a user, I want the same visual experience, so that the site looks unchanged after refactoring

## Features

### Functional

1. [ ] Create NumberCircle atom — displays numbered circles (1, 2, 3) with variants (dark/light/color)
2. [ ] Create AccentCard molecule — card with colored left border (border-l-4)
3. [ ] Create ServiceCard molecule — hoverable service card with number
4. [ ] Create TeamMemberCard molecule — photo + bio layout
5. [ ] Create ValueCard molecule — colored title + description
6. [ ] Create PillarCard molecule — method card with deliverables list
7. [ ] Create ScopeCard molecule — scope card with bullet points
8. [ ] Create CtaSection shared — reusable CTA section with variants

### Pages refactoring

9. [ ] Home.tsx — extract 7 sections to components/sections/home/
10. [ ] Services.tsx — extract 8 sections to components/sections/services/
11. [ ] About.tsx — extract 4 sections to components/sections/about/
12. [ ] Method.tsx — extract 3 sections to components/sections/method/

### Validation

1. [ ] Build passes without TypeScript errors
2. [ ] All existing tests pass
3. [ ] Biome lint passes

### UI/UX

1. [ ] Visual rendering identical before/after for Home
2. [ ] Visual rendering identical before/after for Services
3. [ ] Visual rendering identical before/after for About
4. [ ] Visual rendering identical before/after for Method

## Implementation decisions

- Structure: `components/sections/{page}/` for page-specific sections
- Shared components: `components/sections/shared/` for reusable sections (CtaSection)
- Use existing SectionHeader component for headers (42 instances to convert)
- Keep DataIllustration/IconSeparator inline in ManifestoSection (unique to About)
- Use ThemeColor type for color variants

## Definition of done

1. [ ] All 8 new components created and typed
2. [ ] All 22 sections extracted
3. [ ] All 4 pages refactored to < 100 lines
4. [ ] Build passes (pnpm run build)
5. [ ] Tests pass (pnpm test)
6. [ ] Lint passes (pnpm run lint)
7. [ ] Visual verification on all pages

## Out of scope

- Performance optimizations (lazy loading, code splitting)
- New visual designs or UI changes
- Other pages (Stories, Studio, Resources, Contact, Partners, Jobs)
- Storybook documentation
- Unit tests for new components

## Further notes

Current state:
- Home.tsx: 469 lines → target ~80 lines (-83%)
- Services.tsx: 767 lines → target ~100 lines (-87%)
- About.tsx: 731 lines → target ~80 lines (-89%)
- Method.tsx: 527 lines → target ~80 lines (-85%)

Execution order:
1. Atoms (NumberCircle)
2. Molecules (AccentCard, ServiceCard, etc.)
3. Shared sections (CtaSection)
4. Page sections (Method → Home → About → Services)
5. Refactor pages to import sections
