# PRD: Design System Token Rationalization

## Problem statement

Le Design System a trop de tokens peu utilisés (font sizes, shadows, border-radius) et une nomenclature de couleurs peu lisible (`yellowLight` vs `yellow-light`). La base typographique de 14px est trop petite.

## Solution

Rationaliser les tokens : réduire leur nombre, améliorer la nomenclature des couleurs, passer la base typographique à 16px.

## User stories

1. As a developer, I want fewer font size tokens, so that I choose faster
2. As a developer, I want readable color names (`yellow-light`), so that code is clearer
3. As a designer, I want 16px base font, so that body text is more readable
4. As a developer, I want fewer shadow tokens, so that I use consistent shadows

## Features

### Functional

1. [ ] Font sizes reduced from 14 to 10 tokens — base=16px, max=6xl(64px)
2. [ ] Shadows reduced from 19 to 7 tokens — soft scale + card + dark + offset + ring
3. [ ] Colors use nested naming — `ocobo-yellow-light` instead of `ocobo-yellowLight`
4. [ ] Border-radius reduced — keep only xl, 2xl, 3xl + full

### Validation

1. [ ] Build passes — `pnpm build` no errors
2. [ ] Tests pass — `pnpm test`
3. [ ] No unused token definitions in tailwind.config.ts

### UI/UX

1. [ ] Visual appearance preserved — no unintended design changes (except larger body text)
2. [ ] Responsive breakpoints still work — font sizes scale correctly

## Implementation decisions

### Font sizes (10 tokens, base=16px)

| Token | Size | Line height |
|-------|------|-------------|
| xs | 12px | 1.2 |
| sm | 14px | 1.4 |
| base | 16px | 1.5 |
| lg | 18px | 1.4 |
| xl | 20px | 1.3 |
| 2xl | 24px | 1.25 |
| 3xl | 32px | 1.2 |
| 4xl | 40px | 1.1 |
| 5xl | 56px | 1 |
| 6xl | 64px | 1 |

**Migration:** `text-2xs` → `text-xs`, `text-7xl/8xl/9xl` → `text-6xl`

### Shadows (7 tokens)

| Token | Value |
|-------|-------|
| soft | `0 8px 20px -10px rgba(0,0,0,0.08)` |
| soft-md | `0 15px 40px -10px rgba(0,0,0,0.12)` |
| soft-lg | `0 25px 60px -15px rgba(0,0,0,0.15)` |
| card | `0 15px 50px -15px rgba(0,0,0,0.05)` |
| dark | `0 30px 100px -20px rgba(0,0,0,0.5)` |
| offset | `4px 4px 0 0 rgba(33,35,35,1)` |
| ring | `0 0 0 10px #fcfcfc` |

**Migration:**
- `shadow-soft-xl/2xl/3xl` → `shadow-soft-lg`
- `shadow-soft-dark` → `shadow-dark`
- `shadow-offset-sm/md/lg` → `shadow-offset`
- `shadow-button` → `shadow-soft-md`
- `shadow-form` → `shadow-card`
- Remove: `shadow-glow-yellow`, `shadow-offset-{color}`

### Colors (nested)

```
ocobo.dark: #212323
ocobo.gray: #F5F5F5
ocobo.yellow.DEFAULT: #F1CF25
ocobo.yellow.light: #FFFCEE
ocobo.mint.DEFAULT: #9ADBBA
ocobo.mint.light: #EBFDF5
ocobo.sky.DEFAULT: #99D1DF
ocobo.sky.light: #F0F9FB
ocobo.coral.DEFAULT: #FE9C87
ocobo.coral.light: #FFF5F2
```

**Migration:** `ocobo-{color}Light` → `ocobo-{color}-light`

### Border-radius (4 tokens + full)

Keep: `rounded-xl`, `rounded-2xl`, `rounded-3xl`, `rounded-full`
Remove: `rounded-4xl`, `rounded-5xl`, `rounded-6xl`, `rounded-7xl`

**Migration:**
- `rounded-4xl` → `rounded-3xl`
- `rounded-5xl` → `rounded-3xl`
- `rounded-6xl` → `rounded-3xl`
- `rounded-7xl` → `rounded-3xl`
- `rounded-[2rem]` → `rounded-3xl` (32px → 24px)
- `rounded-[2.5rem]` → `rounded-3xl`
- `rounded-[3rem]` → `rounded-3xl`

## Definition of done

1. [ ] All functional features implemented
2. [ ] Build passes
3. [ ] Tests pass
4. [ ] Visual review of Home, About, Services, Method pages
5. [ ] Responsive check on breakpoints

## Out of scope

- SVG illustrations (decorative, not part of design system)
- Fluid typography (clamp) — keep responsive classes
- Spacing tokens — unchanged
- Animation tokens — unchanged

## Further notes

Files to modify:
- `tailwind.config.ts` — token definitions
- ~26 component files — class name updates via find/replace
- `types.ts` — unchanged (ThemeColor enum compatible)
