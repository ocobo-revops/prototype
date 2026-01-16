# Story 3.3: Create CtaSection Component

Status: done

## Story

As an **AI Agent**,
I want a CtaSection component for call-to-action blocks,
so that I can create consistent CTA sections with forms or simple CTAs across all pages.

---

## Acceptance Criteria

**AC1: CtaSection Variants**
**Given** I need a call-to-action section
**When** I use `<CtaSection variant="simple">`
**Then** CTA renders with appropriate background and contrast
**And** variants available: `simple`, `with-form`
**And** `simple` variant shows centered CTA with button
**And** `with-form` variant shows CTA with input/button combo

**AC2: ColorPalette Support**
**Given** I need different visual treatments
**When** I use `<CtaSection colorPalette="yellow">`
**Then** colorPalette `yellow`, `dark`, `mint`, `sky` are supported
**And** background color automatically applies from palette
**And** text color automatically adjusts for contrast

**AC3: Button and Input Integration**
**Given** I need CTA with form elements
**When** I use `with-form` variant
**Then** Input and Button components integrate seamlessly
**And** form elements use matching colorPalette
**And** inline form layout (input + button side-by-side on desktop)

**AC4: File Structure**
**When** I create the CtaSection component
**Then** it follows file structure: `components/cta-section.tsx` (single file at root)
**And** includes `CtaSectionProps` TypeScript interface
**And** exports component directly (no folder needed)

**AC5: Integration with Architecture**
**Given** the existing component architecture
**When** I use CtaSection
**Then** it composes with Section component for spacing
**And** uses token-based styling (no hardcoded colors)
**And** follows mobile-first responsive patterns
**And** integrates with Container for width control
**And** integrates with Button and Input components

---

## Business Context

This story **continues Epic 3** (Section Components) and creates the call-to-action pattern for conversion sections.

**Epic 3 Objective:** AI Agent can compose page sections using HeroSection, CtaSection, FeatureSection, GridSection, TestimonialSection, StatsSection, and DecorativeBlob components.

**Dependencies:**
- **Must complete after:** Story 3.2 (HeroSection component)
- **Blocks:** Epic 5 stories that need CTA sections (5-1 Home, 5-11 Contact, etc.)
- **Integrates with:** Section (3.1), Container (2.1), Button (2.2), Input (2.4)

**FRs covered:**
- None explicit, but required by Architecture for page composition

**NFRs covered:**
- NFR4 (TypeScript types for all components)
- NFR6 (patterns are predictable and consistent)
- NFR7 (naming conventions explicit and meaningful)
- NFR13 (component variant patterns consistent)
- NFR14 (mobile-first responsive patterns)

**Story Value:**
- Creates reusable CTA sections for all conversion points
- Establishes form integration pattern for section components
- Enables consistent CTA typography and layout
- Supports both simple CTAs and form-based CTAs

---

## Technical Context

### Architecture Requirements (from architecture.md)

**Component Organization:**
- Single-file component: `cta-section.tsx` (no folder needed)
- Test file: `cta-section.test.tsx` (same directory)
- Files go directly in `components/` root

**File Naming Convention:**
- All files lowercase with kebab-case: `cta-section.tsx`
- Interface naming: `CtaSectionProps`
- Component naming: PascalCase in code: `CtaSection`

**Export Pattern (Direct):**
```tsx
// components/cta-section.tsx
export function CtaSection({...}) { }
export interface CtaSectionProps { }
```

**Tailwind Class Ordering:**
```
1. Layout → 2. Spacing → 3. Appearance → 4. States → 5. Animation
```

### Target Implementation Details

**Component Structure (Single-File):**
```
components/
├── cta-section.tsx        (Component implementation)
└── cta-section.test.tsx   (Test file)
```

**TypeScript Interface:**
```tsx
interface CtaSectionProps {
  variant?: 'simple' | 'with-form'
  colorPalette?: 'yellow' | 'dark' | 'mint' | 'sky'
  title?: string
  description?: string
  buttonText?: string
  buttonHref?: string
  onButtonClick?: () => void
  inputPlaceholder?: string
  onFormSubmit?: (value: string) => void
  children?: React.ReactNode
  className?: string
  'aria-label'?: string
}
```

**Variant Descriptions:**
| Variant | Layout | Form Elements | Use Case |
|---------|--------|---------------|----------|
| `simple` | Center-aligned, title + button | Button only | Simple conversion CTA (e.g., "Contact us") |
| `with-form` | Center-aligned, title + input + button | Input + Button | Newsletter, email capture, quick contact |

**ColorPalette Mapping:**
| Value | Background | Text Color | Button Style | Use Case |
|-------|------------|------------|--------------|----------|
| `yellow` | `bg-ocobo-yellow` | `text-ocobo-dark` | `variant="solid"` (dark) | Brand-primary CTA |
| `dark` | `bg-ocobo-dark` | `text-white` | `variant="inverse"` (white) | High-contrast CTA |
| `mint` | `bg-ocobo-mint` | `text-ocobo-dark` | `variant="solid"` (dark) | Accent CTA |
| `sky` | `bg-ocobo-sky` | `text-ocobo-dark` | `variant="solid"` (dark) | Secondary CTA |

**Default Values:**
- `variant = 'simple'`
- `colorPalette = 'yellow'`

### Current State Analysis

**Previous Related Work:**
- Story 3.2 completed: HeroSection component with variants/background props
- Story 3.1 completed: Base Section component with spacing/background
- Story 2.4 completed: Input component with variants
- Story 2.2 completed: Button component with variants
- Story 2.1 completed: Container component for width control

**What Exists:**
- `components/section.tsx` - Base section with spacing/background ✓
- `components/hero-section.tsx` - Hero section pattern reference ✓
- `components/container.tsx` - Layout width control ✓
- `components/button.tsx` - CTA buttons ✓
- `components/input.tsx` - Form input ✓
- Token definitions in `tailwind.config.js` ✓

**What This Story Creates:**
- `components/cta-section.tsx` - CtaSection component with variants
- `components/cta-section.test.tsx` - Comprehensive tests
- Pattern for form-integrated section components

### Integration Points

**Depends On:**
- Section component (Story 3.1) for base section behavior
- Container component (Story 2.1) for width constraints
- Button component (Story 2.2) for CTA buttons
- Input component (Story 2.4) for form variant
- Tailwind config tokens for colors

**Feeds Into:**
- Epic 5 Page Refactoring stories (pages need CTA sections)
- Future section components establish form integration pattern

**Composition Pattern:**
```tsx
// Simple variant
<CtaSection 
  variant="simple" 
  colorPalette="yellow"
  title="Ready to get started?"
  description="Contact our team today"
  buttonText="Contact us"
  buttonHref="/contact"
/>

// With form variant
<CtaSection 
  variant="with-form" 
  colorPalette="dark"
  title="Subscribe to our newsletter"
  description="Get weekly insights delivered to your inbox"
  inputPlaceholder="Enter your email"
  buttonText="Subscribe"
  onFormSubmit={(email) => console.log(email)}
/>
```

**Architecture Compliance Checklist:**
- [x] Uses kebab-case files (cta-section.tsx)
- [x] Exports via direct export (not namespace for single file)
- [x] Follows Tailwind class ordering convention
- [x] Implements TypeScript `CtaSectionProps` interface
- [x] No hardcoded color values (uses tokens)
- [x] Mobile-first responsive approach
- [x] Consistent with Section and HeroSection pattern

---

## Dev Notes & Guardrails

### Critical Implementation Rules

**Rule 1: Compose with Section, Don't Reinvent**
- ✅ Use Section component as wrapper for spacing/background
- ❌ Don't reimplement padding/background logic
```tsx
// Correct pattern
<Section spacing="lg" background={backgroundFromPalette}>
  <Container>{/* CTA content */}</Container>
</Section>
```

**Rule 2: ColorPalette Drives Background**
- ColorPalette determines Section background color
- Automatic text contrast based on background
- Button variant matches the colorPalette context

**Rule 3: Button and Input Integration**
- For `with-form`: Input and Button rendered inline (flex layout)
- Input should have matching visual treatment
- Responsive: stack vertically on mobile, inline on desktop

**Rule 4: Form Handling**
- `simple` variant: button click via `onButtonClick` or `buttonHref`
- `with-form` variant: form submit via `onFormSubmit(value: string)`
- Always handle form submission gracefully (preventDefault)

**Rule 5: Typography Scale**
- Title: `text-3xl md:text-4xl` (30-36px responsive)
- Description: `text-lg` (18px)
- Use `font-display` for title
- Use `font-sans` for description

**Rule 6: Responsive Layout**
- Mobile: full-width, stacked elements
- Desktop (md+): inline form (input + button side-by-side)
```tsx
// Mobile-first approach
className="flex flex-col gap-4 md:flex-row md:items-center"
```

### Component Props Analysis

**Why these props?**
- `variant`: Controls layout and form presence (simple, with-form)
- `colorPalette`: Visual theme (yellow, dark, mint, sky)
- `title/description`: CTA messaging
- `buttonText/buttonHref`: Simple CTA configuration
- `inputPlaceholder/onFormSubmit`: Form CTA configuration
- `children`: Advanced composition escape hatch
- `className`: Additional styling if needed
- `aria-label`: Accessibility for screen readers

**Why these variants?**
- `simple`: Most common CTA pattern (80% use case) - just button
- `with-form`: Email capture, newsletter, quick contact (20% use case)

**Why these colorPalettes?**
- `yellow`: Brand-primary CTA (most common)
- `dark`: High-contrast CTA (urgent actions)
- `mint`/`sky`: Accent CTAs (variety)

### Code Quality Expectations

**TypeScript:**
- All props typed with `CtaSectionProps` interface
- No `any` types
- Variant type: `'simple' | 'with-form'`
- ColorPalette type: `'yellow' | 'dark' | 'mint' | 'sky'`
- Optional callbacks properly typed

**React:**
- Functional component
- Proper children typing: `React.ReactNode`
- Compose with Section, Container, Button, Input
- No inline styles
- Handle form submission with useState if needed

**Tailwind:**
- All classes use tokens from config
- No arbitrary values `[...]`
- Responsive classes follow mobile-first
- Class ordering consistent

**Accessibility:**
- Support `aria-label` prop
- Semantic HTML (`<section>` via Section component)
- Form elements properly labeled
- Button has explicit type

### Testing Expectations

**Manual Visual Testing Required:**
- Render CtaSection with each variant → verify layout
- Render with each colorPalette → verify contrast
- Test `simple` variant with button click
- Test `with-form` variant with form submission
- Test on mobile/tablet/desktop → responsive behavior
- Test with Container → proper width constraints
- Verify integration with Button and Input components

**Test Coverage:**
- Variant rendering (simple, with-form)
- ColorPalette rendering (yellow, dark, mint, sky)
- Text contrast (correct text colors for each background)
- Button integration (click handler, href)
- Input integration (form submission)
- Composition with children
- Accessibility (aria-label)

**No Automated Tests:** (per project constraints)
- Visual validation only
- Manual comparison against design spec

---

## Project Context & Key Files

### Key Source Files to Review

**Architecture Document:**
- [Source: `_bmad-output/planning-artifacts/architecture.md`](#component-organization)
  - Component organization rules
  - Single-file component patterns
  - Token usage requirements

**Epics Definition:**
- [Source: `_bmad-output/planning-artifacts/epics.md`#story-3.3](../planning-artifacts/epics.md#story-33-create-ctasection-component)
  - Story 3.3 requirements
  - Variant descriptions
  - ColorPalette requirements

**Token Configuration:**
- [Source: `tailwind.config.js`](../../tailwind.config.js)
  - Color tokens for colorPalette
  - Typography scale (text-3xl, text-4xl, text-lg)
  - Border radius tokens

**Existing Patterns (Reference):**
- [Source: `_bmad-output/implementation-artifacts/3-2-create-herosection-component.md`](./3-2-create-herosection-component.md)
  - HeroSection component (similar composition pattern)
  - Variant and background pattern established
  - Single-file component structure

- [Source: `_bmad-output/implementation-artifacts/3-1-create-base-section-component.md`](./3-1-create-base-section-component.md)
  - Section component (base for composition)
  - Spacing/background pattern established

- [Source: `_bmad-output/implementation-artifacts/2-2-create-button-component.md`](./2-2-create-button-component.md)
  - Button component with variant prop
  - Integration pattern for CTAs

- [Source: `_bmad-output/implementation-artifacts/2-4-create-input-component.md`](./2-4-create-input-component.md)
  - Input component for forms
  - Variant pattern reference

### Recent Work History

**Previous Story (3-2: HeroSection):** ✅ Completed
- Created HeroSection component with variant/background props
- Established composition with Section + Container pattern
- 26 tests passing
- Ready for CTA pattern

**Recent Completed Stories:**
- Story 3-2: HeroSection Component (Epic 3 progression)
- Story 3-1: Base Section Component (Epic 3 started)
- Story 2-4: Input Component (needed for with-form variant)
- Story 2-2: Button Component (needed for CTAs)
- Story 2-1: Container Component (needed for layout)

**Key Learnings from Previous Stories:**
1. Single-file components work well (no folder overhead)
2. Composition pattern is powerful (Section wraps content)
3. Token-based styling prevents hardcoded values
4. Mobile-first responsive patterns are essential
5. Accessibility props (aria-label) should be standard
6. Array.join() for className composition is cleaner than template literals
7. Background prop drives text color automatically (from HeroSection)
8. Variant prop establishes clear layout patterns

---

## Implementation Step-by-Step

### Step 1: Create cta-section.tsx File

**File Location:** `components/cta-section.tsx`

**Implementation Pattern:**
```tsx
import React, { useState, FormEvent } from 'react'
import { Section } from './section'
import { Container } from './container'
import { Button } from './button'
import { Input } from './input'

export interface CtaSectionProps {
  variant?: 'simple' | 'with-form'
  colorPalette?: 'yellow' | 'dark' | 'mint' | 'sky'
  title?: string
  description?: string
  buttonText?: string
  buttonHref?: string
  onButtonClick?: () => void
  inputPlaceholder?: string
  onFormSubmit?: (value: string) => void
  children?: React.ReactNode
  className?: string
  'aria-label'?: string
}

// Map colorPalette to Section background
const backgroundMap = {
  yellow: 'yellow',
  dark: 'dark',
  mint: 'mint',
  sky: 'sky',
} as const

// Map colorPalette to text color
const textColorMap = {
  yellow: 'text-ocobo-dark',
  dark: 'text-white',
  mint: 'text-ocobo-dark',
  sky: 'text-ocobo-dark',
} as const

// Map colorPalette to button variant
const buttonVariantMap = {
  yellow: 'solid',
  dark: 'inverse',
  mint: 'solid',
  sky: 'solid',
} as const

export function CtaSection({
  variant = 'simple',
  colorPalette = 'yellow',
  title,
  description,
  buttonText = 'Get Started',
  buttonHref,
  onButtonClick,
  inputPlaceholder = 'Enter your email',
  onFormSubmit,
  children,
  className = '',
  'aria-label': ariaLabel,
}: CtaSectionProps) {
  const [inputValue, setInputValue] = useState('')

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (onFormSubmit && inputValue.trim()) {
      onFormSubmit(inputValue)
      setInputValue('') // Reset after submit
    }
  }

  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick()
    }
  }

  const textColor = textColorMap[colorPalette]
  const buttonVariant = buttonVariantMap[colorPalette]
  const background = backgroundMap[colorPalette]

  const classes = [
    'flex flex-col items-center text-center gap-6',
    textColor,
    className
  ].filter(Boolean).join(' ')

  return (
    <Section spacing="lg" background={background} aria-label={ariaLabel}>
      <Container size="md">
        <div className={classes}>
          {/* Title */}
          {title && (
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              {title}
            </h2>
          )}

          {/* Description */}
          {description && (
            <p className="text-lg max-w-2xl">
              {description}
            </p>
          )}

          {/* Variant-specific content */}
          {variant === 'simple' && (
            <Button
              variant={buttonVariant}
              size="lg"
              onClick={handleButtonClick}
              {...(buttonHref && { as: 'a', href: buttonHref })}
            >
              {buttonText}
            </Button>
          )}

          {variant === 'with-form' && (
            <form 
              onSubmit={handleFormSubmit}
              className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
            >
              <Input
                type="email"
                placeholder={inputPlaceholder}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                required
                className="flex-1"
              />
              <Button
                type="submit"
                variant={buttonVariant}
                size="md"
              >
                {buttonText}
              </Button>
            </form>
          )}

          {/* Children for custom content */}
          {children}
        </div>
      </Container>
    </Section>
  )
}
```

**Key Details:**
- Composes Section (spacing="lg" for prominence)
- Composes Container (size="md" for CTA focus)
- ColorPalette drives background, text color, and button variant
- `simple` variant: just button
- `with-form` variant: input + button inline (responsive)
- Uses token-based classes only
- Form submission handled with useState

### Step 2: Create cta-section.test.tsx File

**File Location:** `components/cta-section.test.tsx`

**Test Coverage:**
- AC1: Variant rendering (2 tests)
- AC2: ColorPalette support (4 tests + contrast tests)
- AC3: Button and Input integration (4 tests)
- AC4: File structure (TypeScript types)
- AC5: Architecture integration (composition, tokens)
- Edge cases

**Target:** 20-25 comprehensive tests

### Step 3: Run Tests

```bash
pnpm test
```

**Expected:** All CtaSection tests pass + no regressions (234+ tests passing)

### Step 4: Verify Build

```bash
pnpm run build
```

**Expected:** Build passes with no TypeScript errors

---

## Dev Agent Record

### Agent Model Used

Claude 3.7 Sonnet (via BMad Create-Story Workflow)

### Completion Notes

**Implementation Complete (2026-01-15)**

**Story Implemented:**
- ✅ Created CtaSection component with 2 variants (simple, with-form)
- ✅ Implemented 4 colorPalettes (yellow, dark, mint, sky)
- ✅ Integrated with Section, Container, Button, Input components
- ✅ Form handling with onFormSubmit callback
- ✅ Mobile-first responsive layout
- ✅ Token-based styling throughout

**Test Coverage:**
- ✅ 39 comprehensive tests covering all ACs
- ✅ All tests passing (273 total in project, no regressions)
- ✅ AC1: Variant rendering (3 tests)
- ✅ AC2: ColorPalette support (6 tests)
- ✅ AC3: Button/Input integration (4 tests)
- ✅ AC4: TypeScript interface (1 test)
- ✅ AC5: Architecture integration (4 tests)
- ✅ Content rendering (4 tests)
- ✅ Button interactions (3 tests)
- ✅ Form interactions (6 tests)
- ✅ Accessibility (3 tests)
- ✅ Styling/Layout (5 tests)

**Acceptance Criteria Validation:**
- ✅ AC1: Both variants (simple, with-form) working correctly
- ✅ AC2: All 4 colorPalettes with proper contrast
- ✅ AC3: Button and Input integrate seamlessly with inline form layout
- ✅ AC4: File structure correct (single file, TypeScript interface)
- ✅ AC5: Composes with Section, uses tokens, mobile-first, Container integration

**Key Implementation Details:**
- ColorPalette mapping: yellow/mint/sky → solid button, dark → inverse button
- Form submission: preventDefault, trim validation, input reset after submit
- Responsive: flex-col (mobile) → sm:flex-row (desktop)
- Button href: wrapped in <a> tag when buttonHref provided
- Typography: text-3xl md:text-4xl for title, text-lg for description

**Architecture Compliance:**
- ✅ Single-file component: components/cta-section.tsx
- ✅ Test file: components/cta-section.test.tsx
- ✅ Direct export pattern (no folder)
- ✅ Token-based styling (no arbitrary values)
- ✅ Mobile-first responsive
- ✅ Composes with Section + Container

**Build Verification:**
- ✅ TypeScript compilation successful
- ✅ Build passes: 1746 modules transformed
- ✅ No new linting errors

### File List

**New Files Created:**
- ✅ `components/Section/cta-section.tsx` (Component implementation - 158 lines)
- ✅ `components/Section/cta-section.test.tsx` (39 comprehensive tests - 429 lines)
- ✅ `components/Section/index.ts` (Namespace export for Section components - 16 lines)

**Files Modified:**
- ✅ `_bmad-output/implementation-artifacts/sprint-status.yaml` (Updated story status to 'done')
- ✅ `pages/design-system.tsx` (Added comprehensive CtaSection showcase)

**Files Moved (Architecture Compliance):**
- ✅ `components/section.tsx` → `components/Section/section.tsx`
- ✅ `components/section.test.tsx` → `components/Section/section.test.tsx`
- ✅ `components/hero-section.tsx` → `components/Section/hero-section.tsx`
- ✅ `components/hero-section.test.tsx` → `components/Section/hero-section.test.tsx`
- ✅ `components/cta-section.tsx` → `components/Section/cta-section.tsx`
- ✅ `components/cta-section.test.tsx` → `components/Section/cta-section.test.tsx`

**Build Artifacts:**
- ✅ `dist/index.html` (3.07 kB)
- ✅ `dist/assets/index-DFkIRxON.css` (65.48 kB)
- ✅ `dist/assets/index-DLGI0v3M.js` (586.73 kB)

### Change Log

- **2026-01-15**: Story implemented and ready for review
  - Created CtaSection component with 2 variants and 4 colorPalettes
  - Implemented form handling with validation and reset
  - Added 39 comprehensive tests (all passing)
  - No regressions (273 total tests passing)
  - Build verified successfully

- **2026-01-15**: Code Review Fixes Applied (Post-Implementation)
  - **ISSUE #1 [HIGH]**: Fixed architecture violation - moved all Section components to `components/Section/` directory
  - **ISSUE #2 [HIGH]**: Implemented namespace export pattern via `components/Section/index.ts`
  - **ISSUE #3 [HIGH]**: Fixed dangerous type casting - properly typed `buttonVariantMap` as `Record<ColorPalette, ButtonVariant>`
  - **ISSUE #4 [HIGH]**: Documented text color inheritance pattern with explicit comments
  - **ISSUE #5 [CRITICAL]**: Updated file list to include all modified files
  - All 5 CRITICAL/HIGH issues resolved, tests passing (273/273), build successful

- **2026-01-15**: Design System Showcase Added
  - Added comprehensive CtaSection showcase to `/design-system` page
  - Showcases: variants (simple, with-form), all 4 colorPalettes, custom children
  - Interactive examples with onClick and onFormSubmit callbacks
  - Full matrix table for variant × colorPalette combinations
  - Story marked as **done**
  - **ISSUE #5 [CRITICAL]**: Updated File List to include `sprint-status.yaml` modification
  - All tests still passing (39/39)
  - Build verified successfully after refactoring

### Validation Status

✅ **Implementation Complete - Ready for Review**
- All acceptance criteria satisfied
- All tests passing (39 new tests, no regressions)
- Build verified successfully
- Architecture compliance confirmed

---
