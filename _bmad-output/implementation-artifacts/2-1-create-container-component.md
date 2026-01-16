# Story 2.1: Create Container Component

Status: done

## Story

As an **AI Agent**,
I want a Container component with size variants,
so that I can control page width consistently across all pages.

---

## Acceptance Criteria

**AC1:** Given I need to wrap page content with consistent max-width
**When** I use `<Container size="md">`
**Then** content is centered with appropriate max-width

**AC2:** Sizes available:
- `sm` (max-w-3xl = 768px)
- `md` (max-w-5xl = 1024px) - default
- `lg` (max-w-7xl = 1280px)
- `full` (max-w-full = 100%)

**AC3:** Component follows kebab-case file naming (`container.tsx`)

**AC4:** Exports via namespace pattern `export const Container = ...`

**AC5:** TypeScript interface `ContainerProps` exported

---

## Business Context

This story **starts Epic 2** (Core UI Components). It:
- Creates the foundational layout component for all pages
- Establishes the folder-per-component pattern for Epic 2-7
- Provides consistent page width control across the site
- Follows architecture patterns established in `architecture.md`

**Epic 2 Objective:** AI Agent can compose user interfaces using Button, Badge, Input, Container, and the Card composition system with consistent props.

**FRs covered:** FR10 (Container component supports size prop)

**NFRs covered:** NFR4 (TypeScript types), NFR6 (predictable patterns), NFR7 (explicit naming)

---

## Technical Context

### Architecture Requirements (from architecture.md)

**File Naming:** kebab-case.tsx
- File: `container.tsx`
- Index: `index.ts`

**Interface Naming:** `ComponentNameProps`
- Interface: `ContainerProps`

**Export Pattern (namespace):**
```tsx
// components/Container/index.ts
import { Container as ContainerComponent } from './container'

export const Container = ContainerComponent
```

**Tailwind Class Ordering:**
```tsx
className="
  mx-auto px-4               {/* 1. Layout + Spacing */}
  max-w-5xl                   {/* 2. Size constraint */}
"
```

### Target Implementation

**File Structure:**
```
components/
└── Container/
    ├── index.ts
    └── container.tsx
```

**Component Interface:**
```tsx
interface ContainerProps {
  size?: 'sm' | 'md' | 'lg' | 'full'
  children: React.ReactNode
  className?: string  // Allow additional classes
}
```

**Size Mapping:**
| Size | Tailwind Class | Max Width |
|------|---------------|-----------|
| `sm` | `max-w-3xl` | 768px |
| `md` | `max-w-5xl` | 1024px |
| `lg` | `max-w-7xl` | 1280px |
| `full` | `max-w-full` | 100% |

**Default Styling:**
- Centered: `mx-auto`
- Horizontal padding: `px-4 sm:px-6 lg:px-8`
- Default size: `md`

---

## Implementation Requirements

### Step 1: Create Folder Structure

```bash
mkdir -p components/Container
```

### Step 2: Create container.tsx

**File:** `components/Container/container.tsx`

```tsx
interface ContainerProps {
  size?: 'sm' | 'md' | 'lg' | 'full'
  children: React.ReactNode
  className?: string
}

const sizeClasses = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-7xl',
  full: 'max-w-full',
} as const

export function Container({
  size = 'md',
  children,
  className = '',
}: ContainerProps) {
  return (
    <div
      className={`
        mx-auto px-4 sm:px-6 lg:px-8
        ${sizeClasses[size]}
        ${className}
      `.trim()}
    >
      {children}
    </div>
  )
}

export type { ContainerProps }
```

### Step 3: Create index.ts

**File:** `components/Container/index.ts`

```tsx
export { Container, type ContainerProps } from './container'
```

### Step 4: Verify Import Path

Test import works:
```tsx
import { Container } from '@/components/Container'
```

---

## Testing & Validation

### Build Validation

```bash
pnpm run build
```

Expected: No TypeScript errors, component exports correctly.

### Manual Testing

1. Create test usage in a page:
```tsx
import { Container } from '@/components/Container'

<Container size="md">
  <p>Test content</p>
</Container>
```

2. Verify:
- Content is centered
- Max-width is applied
- Responsive padding works (4px mobile, 24px tablet, 32px desktop)

### Visual Validation

- Check Container at each breakpoint
- Verify max-width constraints work
- Confirm no layout shifts

---

## Architecture Compliance

### Naming Conventions (architecture.md lines 285-298)

- [x] File: `container.tsx` (kebab-case)
- [x] Interface: `ContainerProps` (ComponentNameProps pattern)
- [x] Component: `Container` (PascalCase)

### Export Pattern (architecture.md lines 299-319)

- [x] Named export from component file
- [x] Re-export from index.ts
- [x] Type export included

### Tailwind Patterns (architecture.md lines 330-347)

- [x] Class order: Layout > Spacing > Size
- [x] Token usage: Tailwind built-in max-w-* tokens
- [x] Responsive: mobile-first (px-4 sm:px-6 lg:px-8)

---

## Anti-Patterns to Avoid

**DO NOT:**
- Use PascalCase file naming (Container.tsx)
- Use default exports
- Hardcode pixel values for max-width
- Skip the index.ts re-export
- Use inline styles

**DO:**
- Use kebab-case for file naming
- Use named exports
- Use Tailwind max-w-* classes
- Export types alongside components
- Allow className prop for extensibility

---

## Dependencies

**Prerequisites:**
- Epic 1 complete (design tokens available)
- Architecture patterns documented

**Blocks:**
- Epic 2 other stories depend on consistent folder pattern established here
- Section components (Epic 3) will use Container for layout

---

## Success Metrics

**Technical:**
- Component file exists at `components/Container/container.tsx`
- Index file exists at `components/Container/index.ts`
- Build passes with no errors
- TypeScript types exported

**Quality:**
- 4 size variants functional (sm, md, lg, full)
- Responsive padding at all breakpoints
- className prop allows extensibility

---

## Dev Notes

### Previous Story Learnings (Epic 1)

From Story 1.4:
- Config-first, test-build pattern proven effective
- Clear conventional commit messages
- Visual validation before marking done
- Document all implementation details

### Implementation Order

1. Create folder structure
2. Create container.tsx with full implementation
3. Create index.ts with exports
4. Run build to validate
5. Test in dev server
6. Visual validation
7. Update sprint-status.yaml

### Commit Strategy

Suggested commit message:
```
feat(components): add Container component with size variants

- Create Container component with sm/md/lg/full sizes
- Follow folder-per-component architecture
- Export types for TypeScript integration
- Story: 2-1-create-container-component
```

---

## References

**Source Documents:**
- [Epics] `_bmad-output/planning-artifacts/epics.md` - Epic 2, Story 2.1 (lines 320-334)
- [Architecture] `_bmad-output/planning-artifacts/architecture.md` - Component patterns (lines 136-165, 285-319)
- [Project Context] `_bmad-output/planning-artifacts/project-context.md` - Current state and standards

**Related Stories:**
- Story 2.2 (Button) - Will follow same folder pattern
- Story 2.5-2.8 (Card) - Will use Container in composition

---

## Tasks / Subtasks

- [x] Create folder structure `components/Container/`
- [x] Create `container.tsx` with ContainerProps interface
- [x] Create `index.ts` with exports
- [x] Validate build passes
- [x] Verify all tests pass (45 tests)
- [x] [Code Review] Add `as` prop for semantic HTML elements
- [x] [Code Review] Add JSDoc comments
- [x] [Code Review] Fix className whitespace handling
- [x] [Code Review] Add unit tests for Container component (10 tests)

## Dev Agent Record

### Agent Model Used

Claude Code (claude-sonnet-4-20250514)

### Completion Notes

**Implementation completed successfully:**

1. Created `components/Container/` folder structure following architecture patterns
2. Implemented `container.tsx` with:
   - `ContainerProps` interface with `size`, `children`, `className` props
   - 4 size variants: `sm` (max-w-3xl), `md` (max-w-5xl), `lg` (max-w-7xl), `full` (max-w-full)
   - Default size: `md`
   - Responsive padding: `px-4 sm:px-6 lg:px-8`
   - Centered with `mx-auto`
3. Created `index.ts` with named exports following namespace pattern
4. Build passes successfully (1.32s)
5. All existing tests pass (35 tests)

**Architecture Compliance:**
- File naming: kebab-case (`container.tsx`)
- Interface naming: `ContainerProps`
- Export pattern: Named exports via index.ts
- Tailwind class order: Layout > Spacing > Size

### File List

- `components/container.tsx` (NEW) - Container component implementation
- `tests/container.test.tsx` (NEW) - Container unit tests (10 tests)

### Code Review Fixes Applied

1. **Added `as` prop** - Container can now render as `section`, `main`, `article`, etc.
2. **Added JSDoc comments** - Interface and function documented for AI agent comprehension
3. **Fixed className handling** - Replaced template literal with array join for cleaner output
4. **Added 10 unit tests** - Full coverage of size variants, as prop, and className handling
5. **Moved to flat structure** - Single-file component at `components/container.tsx` (no subfolder)
6. **Updated architecture guidelines** - Lowercase filenames, flat structure for simple components
