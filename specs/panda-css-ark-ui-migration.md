# PRD: Migration Panda CSS + Ark UI

## Problem statement

La stack CSS du prototype (Tailwind CSS v4) diffère de la stack cible production (Panda CSS). Les composants interactifs (dropdowns, selects, menus mobiles) sont implémentés manuellement sans gestion d'accessibilité (ARIA, navigation clavier).

## Solution

Migrer le styling vers Panda CSS (CSS-in-JS typesafe) et intégrer Ark UI pour les composants interactifs headless avec accessibilité native.

## User stories

1. As a developer, I want design tokens in TypeScript, so that I get autocomplete and type safety
2. As a developer, I want component recipes, so that I can maintain consistent variants
3. As a developer, I want accessible dropdown menus, so that I don't implement ARIA manually
4. As a developer, I want accessible select inputs, so that keyboard navigation works by default
5. As a developer, I want to remove Tailwind, so that the codebase matches production stack
6. As a user, I want to navigate menus with keyboard, so that I can use the site without mouse
7. As a user, I want proper focus management, so that I know where I am on the page
8. As a user, I want screen reader support, so that the site is accessible

## Features

### Functional

1. [ ] Panda CSS generates `styled-system/` with tokens, recipes, patterns
2. [ ] Design tokens migrated — colors (ocobo brand), fonts, shadows, radii
3. [ ] Button component uses Panda recipe — all variants (primary, outline, white, cta, nav)
4. [ ] Badge component uses Panda recipe — all color variants
5. [ ] Input component uses Panda recipe — error states
6. [ ] Grid component uses Panda pattern
7. [ ] Section component uses Panda recipe — bg/padding variants
8. [ ] Navbar dropdowns use Ark UI Menu — keyboard navigation, ARIA
9. [ ] Mobile menu uses Ark UI Collapsible — focus trap, escape to close
10. [ ] NewsletterWidget uses Ark UI Popover — proper dialog semantics
11. [ ] Contact form select uses Ark UI Select — keyboard navigation, ARIA
12. [ ] All pages render correctly with Panda CSS
13. [ ] Tailwind CSS removed from dependencies

### Validation

1. [ ] Build succeeds without Tailwind — `pnpm run build` passes
2. [ ] TypeScript compiles — `pnpm run typecheck` passes
3. [ ] Linter passes — `pnpm run lint` passes
4. [ ] Tests pass — `pnpm test` passes

### UI/UX

1. [ ] Visual parity with current design — no regressions
2. [ ] Navbar dropdown opens on hover/click, closes on escape
3. [ ] Mobile menu traps focus, closes on escape
4. [ ] Select shows options on click/enter, navigable with arrows
5. [ ] All interactive elements have visible focus states
6. [ ] Animations preserved — float, fade, marquee (audited selection)

## Implementation decisions

- **Styling approach:** Recipes Panda CSS directement sur composants Ark UI (pas de wrapper components)
- **Animations:** Auditer les 15+ animations existantes, garder uniquement celles utilisées
- **Migration strategy:** Coexistence Tailwind/Panda pendant migration, suppression Tailwind en fin
- **Storybook:** Compatible via PostCSS standard, pas de config spéciale

## Definition of done

1. [ ] All functional features passing
2. [ ] All validation features passing
3. [ ] Visual regression check via Storybook
4. [ ] Accessibility audit via Storybook a11y addon
5. [ ] Tailwind fully removed
6. [ ] No console errors in dev/build

## Out of scope

- Nouvelles features UI non listées
- Refacto architecture des composants
- Ajout composants Ark UI supplémentaires (Accordion, Toast, Tooltip)
- Server-side rendering
- Migration vers autre bundler

## Further notes

### Fichiers critiques

| Fichier | Rôle |
|---------|------|
| `tailwind.config.ts` | Source tokens à migrer |
| `src/styles/globals.css` | Styles globaux, @font-face |
| `components/Navbar.tsx` | Plus complexe (475 lignes), Ark UI Menu |
| `components/atoms/Button.tsx` | Pattern recipe référence |
| `pages/Contact.tsx` | Select natif → Ark UI Select |

### Ark UI components mapping

| Actuel | Ark UI |
|--------|--------|
| Custom dropdown nav | `Menu` |
| Mobile hamburger | `Collapsible` |
| Newsletter expand | `Popover` |
| Native `<select>` | `Select` |

### Rollback strategy

Git tag à chaque phase: `migration/phase-N-xxx`
