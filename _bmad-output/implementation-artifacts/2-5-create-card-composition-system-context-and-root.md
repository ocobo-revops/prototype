# Story 2.5: Create Card Composition System - Context and Root

Status: done

## Story

As an **AI Agent**,
I want Card.Root with Context Provider for prop inheritance,
so that child components automatically inherit variant, size, colorPalette.

---

## Acceptance Criteria

**AC1:** CardContext provides variant, size, colorPalette to all children

**AC2:** Card.Root renders a card container with styling based on variant:
- `default`: white bg, subtle shadow, rounded-lg
- `outlined`: white bg, border, no shadow
- `ghost`: transparent bg, no border/shadow
- `filled`: colorPalette bg (light variant), no shadow
- `elevated`: white bg, larger shadow (shadow-lg)

**AC3:** Sizes control padding:
- `sm`: p-4
- `md`: p-6
- `lg`: p-8

**AC4:** colorPalette affects border/accent colors for outlined and filled variants

**AC5:** Using Card components outside Card.Root throws explicit error: "Card components must be used within a Card.Root"

**AC6:** File structure follows architecture:
- `components/card/context.tsx` - CardContext, CardProvider, useCardContext
- `components/card/root.tsx` - CardRoot component
- `components/card/index.ts` - Namespace export `export const Card = { Root }`

**AC7:** TypeScript interfaces exported: `CardRootProps`, `CardContextValue`, `CardVariant`, `CardSize`, `CardColorPalette`

---

## Tasks / Subtasks

- [x] Fix context.tsx type error (React.ReactNode -> ReactNode)
- [x] Create `components/card/root.tsx` with CardRoot component
  - [x] Implement 5 variants with static Tailwind class mappings
  - [x] Implement 3 sizes with padding mappings
  - [x] Implement 5 colorPalette options for outlined/filled variants
  - [x] Wrap children with CardProvider
- [x] Create `components/card/index.ts` with namespace export
- [x] Add unit tests in `tests/card.test.tsx`
  - [x] Test CardRoot renders with default props
  - [x] Test all 5 variants apply correct classes
  - [x] Test all 3 sizes apply correct padding
  - [x] Test colorPalette affects outlined variant border
  - [x] Test colorPalette affects filled variant background
  - [x] Test error thrown when using Card primitive outside Root
  - [x] Test context values are accessible to children
- [x] Validate build passes
- [x] Update design-system showcase page with Card.Root preview

---

## Dev Notes

### Architecture Requirements

**File Structure (kebab-case, lowercase):**
```
components/card/
├── context.tsx       # EXISTS - minor fix needed
├── root.tsx          # TO CREATE
└── index.ts          # TO CREATE
```

**Namespace Export Pattern:**
```tsx
// components/card/index.ts
import { CardRoot, type CardRootProps } from './root'

export const Card = {
  Root: CardRoot,
}

export type { CardRootProps }
export type { CardContextValue, CardVariant, CardSize, CardColorPalette } from './context'
```

### Static Tailwind Class Mappings (CRITICAL)

DO NOT use template literals for Tailwind classes. Use static mappings:

```tsx
// CORRECT - Static mappings
const variantClasses = {
  default: 'bg-white shadow-sm rounded-lg',
  outlined: 'bg-white border rounded-lg',
  ghost: 'bg-transparent',
  filled: 'rounded-lg',  // bg set by colorPalette
  elevated: 'bg-white shadow-lg rounded-lg',
} as const

const sizeClasses = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
} as const

// For colorPalette on outlined variant
const outlinedBorderClasses = {
  yellow: 'border-ocobo-yellow',
  mint: 'border-ocobo-mint',
  sky: 'border-ocobo-sky',
  coral: 'border-ocobo-coral',
  dark: 'border-ocobo-dark',
} as const

// For colorPalette on filled variant
const filledBgClasses = {
  yellow: 'bg-ocobo-yellow-light',
  mint: 'bg-ocobo-mint-light',
  sky: 'bg-ocobo-sky-light',
  coral: 'bg-ocobo-coral-light',
  dark: 'bg-ocobo-gray-100',
} as const
```

### className Pattern

Use array join pattern (from Button/Badge components):

```tsx
const classes = [
  ...baseClasses,
  variantClasses[variant],
  sizeClasses[size],
]
// Conditional additions
if (variant === 'outlined') classes.push(outlinedBorderClasses[colorPalette])
if (variant === 'filled') classes.push(filledBgClasses[colorPalette])
if (className) classes.push(className)

return <div className={classes.join(' ')} {...props}>{children}</div>
```

### Context Fix Required

In `context.tsx` line 19, change `React.ReactNode` to `ReactNode`:

```tsx
// Before
children: React.ReactNode

// After  
children: ReactNode  // already imported
```

### Previous Story Learnings (from 2-4)

1. Static class mappings work well - follow same pattern
2. Array join for className is cleaner than template literals
3. Props interface naming: `ComponentNameProps`
4. Export types alongside component
5. Tests should verify both rendering and prop application

### Testing Approach

Use existing test patterns from `tests/button.test.tsx` and `tests/badge.test.tsx`:

```tsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Card } from '@/components/card'

describe('Card.Root', () => {
  it('renders children', () => {
    render(<Card.Root>Content</Card.Root>)
    expect(screen.getByText('Content')).toBeInTheDocument()
  })
  
  it('applies default variant classes', () => {
    const { container } = render(<Card.Root>Content</Card.Root>)
    expect(container.firstChild).toHaveClass('bg-white', 'shadow-sm', 'rounded-lg')
  })
  // ... more tests
})
```

### Project Structure Notes

- Path alias: `@/components/card` maps to `components/card`
- Design system showcase: `pages/design-system.tsx`
- Test location: `tests/card.test.tsx`

### References

- [Source: _bmad-output/planning-artifacts/architecture.md#Composition Pattern]
- [Source: _bmad-output/analysis/design-system-spec.md#3.5 Card Primitives]
- [Source: components/button.tsx] - Static class mapping pattern
- [Source: components/badge.tsx] - colorPalette implementation pattern

---

## Dev Agent Record

### Agent Model Used

Claude Sonnet 4 (claude-sonnet-4-20250514)

### Debug Log References

- No errors encountered

### Completion Notes List

- Fixed context.tsx: `React.ReactNode` → `ReactNode` (line 19)
- Created root.tsx with CardRoot component implementing all 5 variants, 3 sizes, 5 colorPalette options
- Used static Tailwind class mappings (variantClasses, sizeClasses, outlinedBorderClasses, filledBgClasses)
- Created index.ts with namespace export pattern `Card.Root`
- Exported all TypeScript types (CardRootProps, CardContextValue, CardVariant, CardSize, CardColorPalette)
- Added 25 unit tests covering all ACs
- Updated design-system showcase page with Card section showing variants, sizes, and color palettes
- All 117 tests pass, build succeeds

### File List

- components/card/context.tsx (modified - type fix)
- components/card/root.tsx (new)
- components/card/index.ts (new)
- tests/card.test.tsx (new)
- pages/design-system.tsx (modified - added Card showcase)
- _bmad-output/implementation-artifacts/sprint-status.yaml (modified - status update)

### Change Log

- 2026-01-14: Implemented Card.Root composition system with context provider
- 2026-01-14: Code review fixes - added rounded-lg to ghost, shadow-none to outlined/filled, strengthened tests, fixed JSDoc

