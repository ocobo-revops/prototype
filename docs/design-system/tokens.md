# Design Tokens

This document provides a complete reference of all design tokens used in the Ocobo Design System.

## Overview

Design tokens are organized in two layers:

1. **Primitive Tokens** - Raw color values (the palette)
2. **Semantic Tokens** - Intent-based aliases that reference primitives

This layered approach enables:
- Consistent theming across the application
- Easy palette changes (update primitives, semantics follow)
- Clear intent in code (`bg-semantic-primary` vs `bg-ocobo-yellow`)

## Token Location

- **CSS Custom Properties**: `index.css` - **Single source of truth** for all color values
- **Tailwind Configuration**: `tailwind.config.js` - References CSS variables (no hardcoded hex values)

> **Architecture Note**: All hex values are defined once in `index.css`. Both primitive and semantic Tailwind colors reference CSS custom properties, enabling runtime theming and eliminating value duplication.

---

## Primitive Color Tokens

Raw color values that form the Ocobo brand palette.

### Naming Conventions

| Token Type | Pattern | Example | Rationale |
|------------|---------|---------|-----------|
| Brand colors | `{color}` / `{color}-light` | `yellow`, `yellow-light` | Simple 2-variant scale (vibrant + tint) |
| Gray scale | `gray-{number}` | `gray-50`, `gray-600` | Industry-standard 10-step scale (Tailwind convention) |

This intentional distinction makes it clear that brand colors are binary (use the main color or its light tint), while grays offer fine-grained control.

### Brand Colors

| Token | Hex Value | CSS Variable | Tailwind Class |
|-------|-----------|--------------|----------------|
| Dark | `#212323` | `--color-ocobo-dark` | `bg-ocobo-dark` |
| Yellow | `#F1CF25` | `--color-ocobo-yellow` | `bg-ocobo-yellow` |
| Yellow Light | `#FFFCEE` | `--color-ocobo-yellow-light` | `bg-ocobo-yellow-light` |
| Mint | `#9ADBBA` | `--color-ocobo-mint` | `bg-ocobo-mint` |
| Mint Light | `#EBFDF5` | `--color-ocobo-mint-light` | `bg-ocobo-mint-light` |
| Sky | `#99D1DF` | `--color-ocobo-sky` | `bg-ocobo-sky` |
| Sky Light | `#F0F9FB` | `--color-ocobo-sky-light` | `bg-ocobo-sky-light` |
| Coral | `#FE9C87` | `--color-ocobo-coral` | `bg-ocobo-coral` |
| Coral Light | `#FFF5F2` | `--color-ocobo-coral-light` | `bg-ocobo-coral-light` |
| White | `#FFFFFF` | `--color-ocobo-white` | `bg-ocobo-white` |
| Black | `#000000` | `--color-ocobo-black` | `bg-ocobo-black` |

### Gray Scale

| Token | Hex Value | CSS Variable | Tailwind Class |
|-------|-----------|--------------|----------------|
| Gray 50 | `#FAFAFA` | `--color-ocobo-gray-50` | `bg-ocobo-gray-50` |
| Gray 100 | `#F5F5F5` | `--color-ocobo-gray-100` | `bg-ocobo-gray-100` |
| Gray 200 | `#E5E5E5` | `--color-ocobo-gray-200` | `bg-ocobo-gray-200` |
| Gray 300 | `#D4D4D4` | `--color-ocobo-gray-300` | `bg-ocobo-gray-300` |
| Gray 400 | `#A3A3A3` | `--color-ocobo-gray-400` | `bg-ocobo-gray-400` |
| Gray 500 | `#737373` | `--color-ocobo-gray-500` | `bg-ocobo-gray-500` |
| Gray 600 | `#525252` | `--color-ocobo-gray-600` | `bg-ocobo-gray-600` |
| Gray 700 | `#404040` | `--color-ocobo-gray-700` | `bg-ocobo-gray-700` |
| Gray 800 | `#262626` | `--color-ocobo-gray-800` | `bg-ocobo-gray-800` |
| Gray 900 | `#171717` | `--color-ocobo-gray-900` | `bg-ocobo-gray-900` |

---

## Semantic Color Tokens

Intent-based tokens that reference primitive colors. Use these for consistent UI patterns.

### Semantic Token Mapping

| Semantic Token | References | CSS Variable | Tailwind Class | Usage |
|----------------|------------|--------------|----------------|-------|
| Primary | `ocobo.yellow` | `--color-semantic-primary` | `bg-semantic-primary` | Primary actions, CTAs, key highlights |
| Primary Light | `ocobo.yellow.light` | `--color-semantic-primary-light` | `bg-semantic-primary-light` | Primary backgrounds, subtle highlights |
| Accent | `ocobo.coral` | `--color-semantic-accent` | `bg-semantic-accent` | Secondary actions, attention grabbers |
| Success | `ocobo.mint` | `--color-semantic-success` | `bg-semantic-success` | Success states, positive feedback |
| Info | `ocobo.sky` | `--color-semantic-info` | `bg-semantic-info` | Informational elements, links |
| Surface | `ocobo.gray.50` | `--color-semantic-surface` | `bg-semantic-surface` | Card backgrounds, elevated surfaces |
| Background | `ocobo.white` | `--color-semantic-background` | `bg-semantic-background` | Page backgrounds |
| Text | `ocobo.dark` | `--color-semantic-text` | `text-semantic-text` | Primary text content |
| Text Muted | `ocobo.gray.600` | `--color-semantic-text-muted` | `text-semantic-text-muted` | Secondary text, captions |
| Border | `ocobo.gray.200` | `--color-semantic-border` | `border-semantic-border` | Dividers, card borders |

---

## Usage Guidelines

### When to Use Semantic vs Primitive Tokens

**Use Semantic Tokens when:**
- Building UI components (buttons, cards, inputs)
- Applying consistent patterns (primary actions, text hierarchy)
- Intent matters more than specific color

```tsx
// Good - intent is clear
<button className="bg-semantic-primary text-semantic-text">
  Submit
</button>

// Good - text hierarchy
<p className="text-semantic-text">Main content</p>
<span className="text-semantic-text-muted">Caption</span>
```

**Use Primitive Tokens when:**
- Decorative elements specific to brand identity
- Color combinations unique to a design
- Explicit color choice is intentional
- Borders that provide visual variety (not semantic borders)
- Light background variants for subtle tints
- Colors with opacity modifiers (e.g., `bg-ocobo-yellow/30`)
- Dynamic theme colors in components (Navbar, ServiceCard)

```tsx
// Good - decorative brand element
<div className="bg-ocobo-mint rounded-full" />

// Good - specific color palette for a feature
<div className="bg-ocobo-coral-light border-ocobo-coral" />

// Good - decorative border for visual variety
<div className="border-l-4 border-ocobo-yellow p-4" />

// Good - blob with opacity (decorative)
<div className="bg-ocobo-sky/30 blur-3xl rounded-full" />
```

### Migration Status (Story 1.6)

As of 2026-01-13, the codebase has been migrated to use semantic tokens where appropriate:

| Category | Status | Notes |
|----------|--------|-------|
| Text content (`text-ocobo-dark`) | Migrated | → `text-semantic-text` |
| Primary CTAs (`bg-ocobo-yellow`) | Migrated | → `bg-semantic-primary` |
| Primary accents (`text-ocobo-yellow`) | Migrated | → `text-semantic-primary` |
| Accent colors (`*-ocobo-coral`) | Migrated | → `*-semantic-accent` |
| Success colors (`*-ocobo-mint`) | Migrated | → `*-semantic-success` |
| Info colors (`*-ocobo-sky`) | Migrated | → `*-semantic-info` |
| Decorative borders | Kept primitive | Visual variety |
| Light variants | Kept primitive | Subtle backgrounds |
| Opacity variants | Kept primitive | Decorative effects |
| Dynamic themes | Kept primitive | Component flexibility |

### Tailwind Class Prefixes

| Token Type | Background | Text | Border |
|------------|------------|------|--------|
| Semantic | `bg-semantic-*` | `text-semantic-*` | `border-semantic-*` |
| Primitive | `bg-ocobo-*` | `text-ocobo-*` | `border-ocobo-*` |

### Runtime Theming

Semantic tokens use CSS custom properties, enabling runtime theming without rebuilding.

> **Status:** Dark mode is not currently implemented in this project. The example below demonstrates the architecture's capability for future theming support.

```css
/* Example: Override semantic tokens for dark mode (not active) */
.dark {
  --color-semantic-background: var(--color-ocobo-dark);
  --color-semantic-text: var(--color-ocobo-white);
  --color-semantic-surface: var(--color-ocobo-gray-800);
}
```

To implement dark mode in the future:
1. Add the `.dark` class overrides to `index.css`
2. Toggle the `.dark` class on the `<html>` element via JavaScript
3. Persist user preference in localStorage

---

## Additional Tokens Reference

> **Note:** The following sections (Border Radius, Shadows, Typography) are included here for convenience as a complete design system reference. These tokens were implemented in Stories 1.3 and 1.4.

## Border Radius Tokens

| Token | Value | Tailwind Class | Usage |
|-------|-------|----------------|-------|
| sm | `0.5rem` (8px) | `rounded-sm` | Badges, small inputs |
| md | `1rem` (16px) | `rounded-md` | Standard cards, buttons |
| lg | `1.5rem` (24px) | `rounded-lg` | Hero cards, sections |
| xl | `2.5rem` (40px) | `rounded-xl` | Premium cards, modals |
| full | `9999px` | `rounded-full` | Pills, avatars |

---

## Shadow Tokens

| Token | Value | Tailwind Class | Usage |
|-------|-------|----------------|-------|
| sm | `0 1px 2px 0 rgb(0 0 0 / 0.05)` | `shadow-sm` | Cards at rest |
| md | `0 4px 6px -1px rgb(0 0 0 / 0.1)` | `shadow-md` | Cards on hover |
| lg | `0 10px 15px -3px rgb(0 0 0 / 0.1)` | `shadow-lg` | Modals, dropdowns |
| hero | `0 40px 100px -20px rgb(0 0 0 / 0.08)` | `shadow-hero` | Hero sections, major CTAs |

---

## Typography Tokens

### Font Sizes

| Token | Size | Line Height | Tailwind Class | Usage |
|-------|------|-------------|----------------|-------|
| micro | 10px | 1.4 | `text-micro` | Badges, uppercase labels |
| xs | 12px | 1.4 | `text-xs` | Captions, metadata |
| sm | 14px | 1.5 | `text-sm` | Body small, UI elements |
| base | 16px | 1.5 | `text-base` | Body default |
| lg | 18px | 1.6 | `text-lg` | Body large, lead text |
| xl | 20px | 1.5 | `text-xl` | Subheadings |
| 2xl | 24px | 1.4 | `text-2xl` | H4 |
| 3xl | 30px | 1.3 | `text-3xl` | H3 |
| 4xl | 36px | 1.2 | `text-4xl` | H2 |
| 5xl | 48px | 1.1 | `text-5xl` | H1 |
| 6xl | 60px | 1.1 | `text-6xl` | Hero mobile |
| 7xl | 72px | 1.0 | `text-7xl` | Hero desktop |

### Font Families

| Token | Stack | Tailwind Class | Usage |
|-------|-------|----------------|-------|
| sans | Bornia, Inter, sans-serif | `font-sans` | Body text (default) |
| display | Bermia, Inter, sans-serif | `font-display` | Headings, display text |
