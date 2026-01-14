# Story 2.6: Create Card Composition System - Header Primitives

Status: done

## Story

As an **AI Agent**,
I want Card.Header, Card.Title, and Card.Description primitives,
So that I can compose card headers flexibly.

---

## Acceptance Criteria

**AC1:** Card.Header renders a header section container with flex layout
- Default: `flex flex-col gap-1.5`
- Inherits colorPalette from context for potential accent styling

**AC2:** Card.Title renders as appropriate heading element
- Default: `<h3>` with `text-lg font-semibold text-ocobo-dark`
- Supports `as` prop to change element (`h2`, `h3`, `h4`, `p`)
- Size adjusts based on Card.Root size context

**AC3:** Card.Description renders muted description text
- Default: `<p>` with `text-sm text-ocobo-gray-600`
- Inherits size from context for text scaling

**AC4:** All primitives inherit colorPalette from CardContext
- Card.Title can use colorPalette for accent (optional)
- Primitives access context via `useCardContext()`

**AC5:** Using Card.Header/Title/Description outside Card.Root throws explicit error

**AC6:** File structure follows architecture:
- `components/card/header.tsx` - CardHeader component
- `components/card/title.tsx` - CardTitle component  
- `components/card/description.tsx` - CardDescription component
- `components/card/index.ts` - Updated namespace export

**AC7:** TypeScript interfaces exported: `CardHeaderProps`, `CardTitleProps`, `CardDescriptionProps`

---

## Tasks / Subtasks

- [x] Create `components/card/header.tsx` with CardHeader component
  - [x] Implement flex container with gap based on size
  - [x] Export CardHeaderProps interface
- [x] Create `components/card/title.tsx` with CardTitle component
  - [x] Implement polymorphic `as` prop for heading level
  - [x] Size-aware text styling (sm/md/lg from context)
  - [x] Export CardTitleProps interface
- [x] Create `components/card/description.tsx` with CardDescription component
  - [x] Implement muted text styling
  - [x] Size-aware text scaling
  - [x] Export CardDescriptionProps interface
- [x] Update `components/card/index.ts` with new exports
  - [x] Add Header, Title, Description to Card namespace
  - [x] Export new type interfaces
- [x] Add unit tests in `tests/card.test.tsx`
  - [x] Test Card.Header renders with correct layout
  - [x] Test Card.Title renders as h3 by default
  - [x] Test Card.Title `as` prop changes element
  - [x] Test Card.Description renders muted text
  - [x] Test all primitives inherit context values
  - [x] Test error thrown when primitives used outside Card.Root
- [x] Validate build passes
- [x] Update design-system showcase page with Header primitives preview

---

## Dev Notes

### Architecture Requirements

**File Structure (kebab-case, lowercase):**
```
components/card/
├── context.tsx       # EXISTS - provides useCardContext
├── root.tsx          # EXISTS - Card.Root with CardProvider
├── header.tsx        # TO CREATE
├── title.tsx         # TO CREATE
├── description.tsx   # TO CREATE
└── index.ts          # UPDATE - add new exports
```

**Namespace Export Pattern (index.ts update):**
```tsx
import { CardRoot, type CardRootProps } from './root'
import { CardHeader, type CardHeaderProps } from './header'
import { CardTitle, type CardTitleProps } from './title'
import { CardDescription, type CardDescriptionProps } from './description'

export const Card = {
  Root: CardRoot,
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
}

export type { CardRootProps, CardHeaderProps, CardTitleProps, CardDescriptionProps }
export type { CardContextValue, CardVariant, CardSize, CardColorPalette } from './context'
export { useCardContext } from './context'
```

### Static Tailwind Class Mappings (CRITICAL)

DO NOT use template literals for Tailwind classes. Use static mappings:

```tsx
// header.tsx - gap based on size
const headerGapClasses = {
  sm: 'gap-1',
  md: 'gap-1.5',
  lg: 'gap-2',
} as const

// title.tsx - text size based on context size
const titleSizeClasses = {
  sm: 'text-base font-semibold',
  md: 'text-lg font-semibold',
  lg: 'text-xl font-semibold',
} as const

// description.tsx - text size based on context size
const descriptionSizeClasses = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
} as const
```

### Polymorphic Component Pattern (Card.Title)

```tsx
import type { ElementType, ComponentPropsWithoutRef, ReactNode } from 'react'

type CardTitleProps<T extends ElementType = 'h3'> = {
  as?: T
  children: ReactNode
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children'>

export function CardTitle<T extends ElementType = 'h3'>({
  as,
  children,
  className,
  ...props
}: CardTitleProps<T>) {
  const { size } = useCardContext()
  const Component = as || 'h3'
  
  const classes = [
    titleSizeClasses[size],
    'text-ocobo-dark',
  ]
  if (className) classes.push(className)
  
  return <Component className={classes.join(' ')} {...props}>{children}</Component>
}
```

### Previous Story Learnings (from 2-5)

1. Static class mappings work perfectly - continue pattern
2. Array join for className is established pattern
3. Props interface naming: `ComponentNameProps`
4. Export types alongside component in index.ts
5. Tests verify both rendering and context inheritance
6. Add `rounded-lg` and `shadow-none` explicitly where needed (code review fix)
7. Default colorPalette is 'yellow' - document in JSDoc

### Testing Approach

Extend existing `tests/card.test.tsx`:

```tsx
describe('Card.Header', () => {
  it('renders children in flex container', () => {
    const { container } = render(
      <Card.Root>
        <Card.Header>Header content</Card.Header>
      </Card.Root>
    )
    const header = container.querySelector('div > div')
    expect(header?.className).toContain('flex')
    expect(header?.className).toContain('flex-col')
  })

  it('throws error when used outside Card.Root', () => {
    expect(() => render(<Card.Header>Header</Card.Header>)).toThrow(
      'Card components must be used within a Card.Root'
    )
  })
})

describe('Card.Title', () => {
  it('renders as h3 by default', () => {
    const { container } = render(
      <Card.Root><Card.Title>Title</Card.Title></Card.Root>
    )
    expect(container.querySelector('h3')).toBeDefined()
  })

  it('renders as custom element with as prop', () => {
    const { container } = render(
      <Card.Root><Card.Title as="h2">Title</Card.Title></Card.Root>
    )
    expect(container.querySelector('h2')).toBeDefined()
  })
})

describe('Card.Description', () => {
  it('renders muted text', () => {
    const { container } = render(
      <Card.Root><Card.Description>Desc</Card.Description></Card.Root>
    )
    const desc = container.querySelector('p')
    expect(desc?.className).toContain('text-ocobo-gray-600')
  })
})
```

### Project Structure Notes

- Path alias: `@/components/card` maps to `components/card`
- Design system showcase: `pages/design-system.tsx`
- Test location: `tests/card.test.tsx` (extend existing)
- Context already exports `useCardContext` for primitives to use

### References

- [Source: _bmad-output/planning-artifacts/architecture.md#Composition Pattern]
- [Source: _bmad-output/planning-artifacts/epics.md#Story 2.6]
- [Source: components/card/root.tsx] - Existing pattern reference
- [Source: components/card/context.tsx] - useCardContext hook

---

## Dev Agent Record

### Agent Model Used

Claude Sonnet 4 (claude-sonnet-4-20250514)

### Debug Log References

- No errors encountered

### Completion Notes List

- Created header.tsx: CardHeader with flex layout, size-aware gap (gap-1/1.5/2)
- Created title.tsx: CardTitle polymorphic component with `as` prop, size-aware text (text-base/lg/xl)
- Created description.tsx: CardDescription with muted text, size-aware scaling (text-xs/sm/base)
- Updated index.ts: Added Header, Title, Description to Card namespace, exported all types
- Added 24 new tests covering all ACs (49 total Card tests, 141 total project tests)
- Updated design-system showcase with Header Composition section and Polymorphic Title examples
- All tests pass, build succeeds

### File List

- components/card/header.tsx (new)
- components/card/title.tsx (new)
- components/card/description.tsx (new)
- components/card/index.ts (modified - added exports)
- tests/card.test.tsx (modified - added 24 tests)
- pages/design-system.tsx (modified - added Header showcase)
- _bmad-output/implementation-artifacts/sprint-status.yaml (modified - status update)

### Change Log

- 2026-01-14: Implemented Card Header primitives (Header, Title, Description) with size-aware styling
- 2026-01-14: Code review fixes - added accent prop to Card.Title, line-height to title classes, tests for span/accent

