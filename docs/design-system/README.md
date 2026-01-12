# Ocobo Design System

> Documentation pour la migration du prototype vers PandaCSS + ArkUI

---

## Overview

Ce design system documente les patterns UI extraits du prototype Ocobo (généré par Google AI Studio) pour faciliter la migration vers la stack de production **PandaCSS + ArkUI**.

---

## Structure de la documentation

| Fichier | Contenu |
|---------|---------|
| [01-tokens.md](./01-tokens.md) | Design tokens (couleurs, typo, spacing, shadows) |
| [02-animations.md](./02-animations.md) | Keyframes et recipes d'animation |
| [03-components-phase1.md](./03-components-phase1.md) | Quick wins : PageHero, SectionHeading, CTASection, ClientMarquee |
| [04-components-phase2.md](./04-components-phase2.md) | Cards : FeatureCard, StepCard, ValueCard |
| [05-components-phase3.md](./05-components-phase3.md) | Spécifiques : TeamMemberCard, StoryCard, ComparisonBlock, CheckList |
| [06-button.md](./06-button.md) | Migration du composant Button existant |

---

## Stack cible

| Layer | Technologie | Usage |
|-------|-------------|-------|
| **Styling** | PandaCSS | Tokens, recipes, patterns, CSS-in-JS type-safe |
| **Components** | ArkUI | Headless components accessibles (Dialog, Accordion, Tabs...) |
| **Icons** | Lucide React | Icônes (déjà utilisées dans le prototype) |
| **Routing** | React Router | Navigation (déjà en place) |

---

## Priorité d'implémentation

### Phase 1 — Quick wins (~60% du code dupliqué)
- `PageHero`
- `SectionHeading`
- `CTASection`
- `ClientMarquee`
- Centralisation des animations CSS

### Phase 2 — Cards system (~25% du code)
- `FeatureCard`
- `StepCard`
- `ValueCard`

### Phase 3 — Composants spécifiques (~15% du code)
- `TeamMemberCard`
- `StoryCard`
- `ComparisonBlock`
- `CheckList`

---

## Notes de migration

### De Tailwind CDN vers PandaCSS

| Tailwind | PandaCSS |
|----------|----------|
| `className="px-4 py-2"` | `className={css({ px: '4', py: '2' })}` |
| `hover:bg-gray-100` | `_hover: { bg: 'gray.100' }` |
| `md:text-xl` | `fontSize: { base: 'lg', md: 'xl' }` |
| `group-hover:` | `_groupHover:` |

### Patterns PandaCSS recommandés

- **Tokens** pour les valeurs de design (couleurs, spacing)
- **Recipes** (`cva`) pour les composants simples
- **Slot Recipes** pour les composants complexes multi-parts
- **Patterns** (`container`, `stack`, `grid`) pour les layouts

---

## Illustrations

Les illustrations SVG restent inline dans chaque page car elles sont spécifiques :
- `DashboardIllustration` (Home)
- `ArchitecturalGrid` (Services)
- `PyramidSection` (Services)
- `DataIllustration` (About)
- `StoriesIllustration` (Stories)

Elles peuvent être extraites dans `/components/illustrations/` si besoin de réutilisation.
