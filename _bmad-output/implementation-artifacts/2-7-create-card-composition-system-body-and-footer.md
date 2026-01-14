# Story 2.7: Create Card Composition System - Body and Footer

Status: done

## Story

As an **AI Agent**,
I want Card.Body and Card.Footer primitives,
So that I can compose card content and actions.

---

## Acceptance Criteria

**AC1:** Card.Body renders main content area
- Default: `<div>` with size-aware top margin/padding
- Flexible content container for any card content

**AC2:** Card.Footer renders action area
- Default: `<div>` with flex layout for buttons/actions
- Size-aware top margin and gap between items
- Typically contains Button components

**AC3:** Spacing adjusts based on size from context
- Body: margin-top scales with size (mt-2/mt-3/mt-4)
- Footer: margin-top and gap scale with size

**AC4:** All primitives inherit from CardContext via `useCardContext()`

**AC5:** Using Card.Body/Footer outside Card.Root throws explicit error

**AC6:** File structure follows architecture:
- `components/card/body.tsx` - CardBody component
- `components/card/footer.tsx` - CardFooter component
- `components/card/index.ts` - Updated namespace export

**AC7:** TypeScript interfaces exported: `CardBodyProps`, `CardFooterProps`

---

## Tasks / Subtasks

- [x] Create `components/card/body.tsx` with CardBody component
  - [x] Implement content container with size-aware margin
  - [x] Export CardBodyProps interface
- [x] Create `components/card/footer.tsx` with CardFooter component
  - [x] Implement flex container with size-aware margin and gap
  - [x] Export CardFooterProps interface
- [x] Update `components/card/index.ts` with new exports
  - [x] Add Body, Footer to Card namespace
  - [x] Export new type interfaces
- [x] Add unit tests in `tests/card.test.tsx`
  - [x] Test Card.Body renders with correct margin
  - [x] Test Card.Footer renders with flex layout
  - [x] Test size inheritance from context
  - [x] Test error thrown when primitives used outside Card.Root
- [x] Validate build passes
- [x] Update design-system showcase page with Body/Footer preview

---

## Dev Notes

### Architecture Requirements

**File Structure (kebab-case, lowercase):**
```
components/card/
├── context.tsx       # EXISTS
├── root.tsx          # EXISTS
├── header.tsx        # EXISTS
├── title.tsx         # EXISTS
├── description.tsx   # EXISTS
├── body.tsx          # TO CREATE
├── footer.tsx        # TO CREATE
└── index.ts          # UPDATE
```

**Namespace Export Pattern (index.ts update):**
```tsx
import { CardBody, type CardBodyProps } from './body'
import { CardFooter, type CardFooterProps } from './footer'

export const Card = {
  Root: CardRoot,
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Body: CardBody,
  Footer: CardFooter,
}

export type { ..., CardBodyProps, CardFooterProps }
```

### Static Tailwind Class Mappings (CRITICAL)

```tsx
// body.tsx - margin-top based on size
const bodyMarginClasses = {
  sm: 'mt-2',
  md: 'mt-3',
  lg: 'mt-4',
} as const

// footer.tsx - margin-top and gap based on size
const footerMarginClasses = {
  sm: 'mt-3',
  md: 'mt-4',
  lg: 'mt-6',
} as const

const footerGapClasses = {
  sm: 'gap-2',
  md: 'gap-3',
  lg: 'gap-4',
} as const
```

### Previous Story Learnings (from 2-6)

1. Static class mappings continue to work well
2. All primitives use `useCardContext()` for size inheritance
3. Tests verify both rendering and context inheritance
4. Polymorphic components need `as ElementType` cast
5. Added `accent` prop to Title shows pattern for optional context-based styling
6. `leading-tight` added for consistent line-height

### Component Patterns

**Card.Body:**
```tsx
export function CardBody({ children, className, ...props }: CardBodyProps) {
  const { size } = useCardContext()
  const classes = [bodyMarginClasses[size]]
  if (className) classes.push(className)
  return <div className={classes.join(' ')} {...props}>{children}</div>
}
```

**Card.Footer:**
```tsx
export function CardFooter({ children, className, ...props }: CardFooterProps) {
  const { size } = useCardContext()
  const classes = [
    'flex items-center',
    footerMarginClasses[size],
    footerGapClasses[size],
  ]
  if (className) classes.push(className)
  return <div className={classes.join(' ')} {...props}>{children}</div>
}
```

### Testing Approach

Extend `tests/card.test.tsx`:

```tsx
describe('Card.Body', () => {
  it('renders children', () => {...})
  it('applies size-aware margin (sm/md/lg)', () => {...})
  it('accepts custom className', () => {...})
  it('throws error when used outside Card.Root', () => {...})
})

describe('Card.Footer', () => {
  it('renders children in flex container', () => {...})
  it('applies size-aware margin and gap', () => {...})
  it('accepts custom className', () => {...})
  it('throws error when used outside Card.Root', () => {...})
})
```

### Project Structure Notes

- Test location: `tests/card.test.tsx` (extend existing, currently 53 tests)
- Design system showcase: `pages/design-system.tsx`
- Current Card exports: Root, Header, Title, Description

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Story 2.7]
- [Source: components/card/header.tsx] - Pattern reference
- [Source: components/card/title.tsx] - Size-aware styling pattern

---

## Dev Agent Record

### Agent Model Used

Claude Sonnet 4 (claude-sonnet-4-20250514)

### Debug Log References

- No errors encountered

### Completion Notes List

- Created body.tsx: CardBody with size-aware margin (mt-2/mt-3/mt-4)
- Created footer.tsx: CardFooter with flex layout, size-aware margin and gap
- Updated index.ts: Added Body, Footer to Card namespace
- Added 13 new tests (66 total Card tests, 158 total project tests)
- Updated design-system showcase with Body/Footer section and Complete Card examples
- All tests pass, build succeeds

### File List

- components/card/body.tsx (new)
- components/card/footer.tsx (new)
- components/card/index.ts (modified - added exports)
- tests/card.test.tsx (modified - added 13 tests)
- pages/design-system.tsx (modified - added Body/Footer showcase)
- _bmad-output/implementation-artifacts/sprint-status.yaml (modified - status update)

### Change Log

- 2026-01-14: Implemented Card Body and Footer primitives with size-aware styling
- 2026-01-14: Code review fix - added first:mt-0 to remove margin when Body/Footer is first child

