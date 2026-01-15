# Story 3.2: Create HeroSection Component

Status: done

## Story

As an **AI Agent**,
I want a HeroSection component with variant and background props,
so that I can create impactful hero sections for pages with consistent typography and layout patterns.

---

## Acceptance Criteria

**AC1: HeroSection Variants**
**Given** I need a hero section for a page
**When** I use `<HeroSection variant="centered">`
**Then** hero layout is applied with appropriate typography scale
**And** variants available: `centered`, `split`, `animated`
**And** each variant has distinct layout pattern

**AC2: Background Support**
**Given** I need different visual treatments
**When** I use `<HeroSection background="white">` or `<HeroSection background="dark">`
**Then** backgrounds `white` and `dark` are supported
**And** text color automatically adjusts for contrast (white bg → dark text, dark bg → light text)

**AC3: Shadow Token Usage**
**Given** I need decorative elements with shadows
**When** hero section includes decorative elements
**Then** `shadow-hero` token from tailwind.config.js is used
**And** no hardcoded shadow values

**AC4: File Structure**
**When** I create the HeroSection component
**Then** it follows file structure: `components/hero-section.tsx` (single file at root)
**And** includes `HeroSectionProps` TypeScript interface
**And** exports component directly (no folder needed)

**AC5: Integration with Architecture**
**Given** the existing component architecture
**When** I use HeroSection
**Then** it composes with Section component for spacing
**And** uses token-based styling (no hardcoded colors)
**And** follows mobile-first responsive patterns
**And** integrates with Container for width control

---

## Business Context

This story **continues Epic 3** (Section Components) and creates the hero section pattern for page headers.

**Epic 3 Objective:** AI Agent can compose page sections using HeroSection, CtaSection, FeatureSection, GridSection, TestimonialSection, StatsSection, and DecorativeBlob components.

**Dependencies:**
- **Must complete after:** Story 3.1 (Base Section component)
- **Blocks:** Epic 5 stories that need hero sections (5-1 Home, 5-2 Services, etc.)
- **Integrates with:** Section (3.1), Container (2.1), Button (2.2)

**FRs covered:**
- None explicit, but required by Architecture for page composition

**NFRs covered:**
- NFR4 (TypeScript types for all components)
- NFR6 (patterns are predictable and consistent)
- NFR7 (naming conventions explicit and meaningful)
- NFR13 (component variant patterns consistent)
- NFR14 (mobile-first responsive patterns)

**Story Value:**
- Creates reusable hero section for all major pages
- Establishes variant pattern for section components
- Enables consistent hero typography and layout
- Supports both light and dark hero treatments

---

## Technical Context

### Architecture Requirements (from architecture.md)

**Component Organization:**
- Single-file component: `hero-section.tsx` (no folder needed)
- Test file: `hero-section.test.tsx` (same directory)
- Files go directly in `components/` root

**File Naming Convention:**
- All files lowercase with kebab-case: `hero-section.tsx`
- Interface naming: `HeroSectionProps`
- Component naming: PascalCase in code: `HeroSection`

**Export Pattern (Direct):**
```tsx
// components/hero-section.tsx
export function HeroSection({...}) { }
export interface HeroSectionProps { }
```

**Tailwind Class Ordering:**
```
1. Layout → 2. Spacing → 3. Appearance → 4. States → 5. Animation
```

### Target Implementation Details

**Component Structure (Single-File):**
```
components/
├── hero-section.tsx        (Component implementation)
└── hero-section.test.tsx   (Test file)
```

**TypeScript Interface:**
```tsx
interface HeroSectionProps {
  variant?: 'centered' | 'split' | 'animated'
  background?: 'white' | 'dark'
  children: React.ReactNode
  className?: string
  'aria-label'?: string
}
```

**Variant Descriptions:**
| Variant | Layout | Typography | Use Case |
|---------|--------|------------|----------|
| `centered` | Center-aligned, single column | text-7xl (72px) heading | Simple hero, landing pages |
| `split` | Two-column grid (text + image) | text-6xl (60px) heading | Feature announcements, product pages |
| `animated` | Center with decorative blobs | text-7xl with animations | Premium pages, marketing |

**Background Mapping:**
| Value | Base Classes | Text Color | Use Case |
|-------|--------------|------------|----------|
| `white` | `bg-white` | `text-ocobo-dark` | Light theme heroes (default) |
| `dark` | `bg-ocobo-dark` | `text-white` | Dark theme heroes, contrast |

**Shadow Token (shadow-hero):**
```js
// From tailwind.config.js
boxShadow: {
  hero: '0 25px 50px -12px rgb(0 0 0 / 0.25)' // Large dramatic shadow
}
```

**Default Values:**
- `variant = 'centered'`
- `background = 'white'`

### Current State Analysis

**Previous Related Work:**
- Story 3.1 completed: Base Section component with spacing/background props
- Story 2.1 completed: Container component for width control
- Story 2.2 completed: Button component for CTAs

**What Exists:**
- `components/section.tsx` - Base section with spacing/background ✓
- `components/container.tsx` - Layout width control ✓
- `components/button.tsx` - CTA buttons ✓
- Token definitions in `tailwind.config.js` (shadow-hero) ✓

**What This Story Creates:**
- `components/hero-section.tsx` - HeroSection component with variants
- `components/hero-section.test.tsx` - Comprehensive tests
- Pattern for future section-specific components (Cta, Feature, etc.)

### Integration Points

**Depends On:**
- Section component (Story 3.1) for base section behavior
- Container component (Story 2.1) for width constraints
- Button component (Story 2.2) for CTAs in hero
- Tailwind config shadow-hero token

**Feeds Into:**
- Epic 5 Page Refactoring stories (all pages need heroes)
- Future section components establish pattern

**Composition Pattern:**
```tsx
<HeroSection variant="centered" background="white">
  <Container size="lg">
    <h1 className="text-7xl font-display">Heading</h1>
    <p className="text-xl text-ocobo-gray-600">Subheading</p>
    <Button variant="primary" colorPalette="yellow">CTA</Button>
  </Container>
</HeroSection>
```

**Architecture Compliance Checklist:**
- [x] Uses kebab-case files (hero-section.tsx)
- [x] Exports via direct export (not namespace for single file)
- [x] Follows Tailwind class ordering convention
- [x] Implements TypeScript `HeroSectionProps` interface
- [x] No hardcoded color values (uses tokens)
- [x] Mobile-first responsive approach
- [x] Consistent with Section component pattern

---

## Dev Notes & Guardrails

### Critical Implementation Rules

**Rule 1: Compose with Section, Don't Reinvent**
- ✅ Use Section component as wrapper for spacing/background
- ❌ Don't reimplement padding/background logic
```tsx
// Correct pattern
<Section spacing="lg" background={background}>
  <Container>{/* hero content */}</Container>
</Section>
```

**Rule 2: Use shadow-hero Token**
- ❌ `shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]` - Never inline
- ✅ `shadow-hero` - Use token from tailwind.config.js

**Rule 3: Automatic Text Contrast**
- Background `white` → text classes `text-ocobo-dark`
- Background `dark` → text classes `text-white`
- Don't require manual text color props

**Rule 4: Typography Scale**
- Centered/Animated: `text-7xl` (72px) for h1
- Split: `text-6xl` (60px) for h1
- Use `font-display` for headings
- Use `font-sans` for body text

**Rule 5: Responsive Typography**
```tsx
// Mobile-first approach
className="text-4xl md:text-6xl lg:text-7xl"
```

### Component Props Analysis

**Why these props?**
- `variant`: Controls layout pattern (centered, split, animated)
- `background`: Visual theme (white, dark)
- `children`: React standard (composability)
- `className`: Additional styling if needed
- `aria-label`: Accessibility for screen readers

**Why these variants?**
- `centered`: Most common hero pattern (80% use case)
- `split`: Product/feature pages (15% use case)
- `animated`: Premium landing pages (5% use case)

**Why only 2 backgrounds?**
- Heroes typically need high contrast (white or dark)
- Colored backgrounds (yellow, mint) rarely used for heroes
- Keeps API simple and focused

### Code Quality Expectations

**TypeScript:**
- All props typed with `HeroSectionProps` interface
- No `any` types
- Variant type: `'centered' | 'split' | 'animated'`
- Background type: `'white' | 'dark'`

**React:**
- Functional component
- Proper children typing: `React.ReactNode`
- Compose with Section and Container
- No inline styles

**Tailwind:**
- All classes use tokens from config
- No arbitrary values `[...]`
- Responsive classes follow mobile-first
- Class ordering consistent

**Accessibility:**
- Support `aria-label` prop
- Semantic HTML (`<section>` via Section component)
- Heading hierarchy (h1 for main heading)

### Testing Expectations

**Manual Visual Testing Required:**
- Render HeroSection with each variant → verify layout
- Render with each background → verify contrast
- Test on mobile/tablet/desktop → responsive behavior
- Test with Container → proper width constraints
- Test with Button children → CTA integration
- Verify shadow-hero token applied to decorative elements

**Test Coverage:**
- Variant rendering (centered, split, animated)
- Background rendering (white, dark)
- Text contrast (white bg → dark text, dark bg → light text)
- Token usage (shadow-hero, no hardcoded values)
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
- [Source: `_bmad-output/planning-artifacts/epics.md`#story-3.2](../planning-artifacts/epics.md#story-32-create-herosection-component)
  - Story 3.2 requirements
  - Variant descriptions
  - Background requirements

**Token Configuration:**
- [Source: `tailwind.config.js`](../../tailwind.config.js)
  - shadow-hero token definition
  - Typography scale (text-7xl, text-6xl)
  - Color tokens for backgrounds

**Existing Patterns (Reference):**
- [Source: `_bmad-output/implementation-artifacts/3-1-create-base-section-component.md`](./3-1-create-base-section-component.md)
  - Section component (base for composition)
  - Spacing/background pattern established
  - Single-file component structure

- [Source: `_bmad-output/implementation-artifacts/2-1-create-container-component.md`](./2-1-create-container-component.md)
  - Container component for width control
  - Size prop pattern

### Recent Work History

**Previous Story (3-1: Base Section):** ✅ Completed
- Created Section component with spacing/background props
- Established single-file component pattern
- 28 tests passing
- Ready for composition

**Recent Completed Stories:**
- Story 3-1: Base Section Component (Epic 3 started)
- Story 2-9: Component Documentation (Epic 2 complete)
- Story 2-8: Card Media and Avatar
- Story 2-7: Card Body and Footer
- Story 2-2: Button Component (needed for hero CTAs)
- Story 2-1: Container Component (needed for hero layout)

**Key Learnings from Previous Stories:**
1. Single-file components work well (no folder overhead)
2. Composition pattern is powerful (Section wraps content)
3. Token-based styling prevents hardcoded values
4. Mobile-first responsive patterns are essential
5. Accessibility props (aria-label) should be standard
6. Array.join() for className composition is cleaner than template literals

---

## Implementation Step-by-Step

### Step 1: Create hero-section.tsx File

**File Location:** `components/hero-section.tsx`

**Implementation Pattern:**
```tsx
import React from 'react'
import { Section } from './section'
import { Container } from './container'

export interface HeroSectionProps {
  variant?: 'centered' | 'split' | 'animated'
  background?: 'white' | 'dark'
  children: React.ReactNode
  className?: string
  'aria-label'?: string
}

export function HeroSection({
  variant = 'centered',
  background = 'white',
  children,
  className = '',
  'aria-label': ariaLabel,
}: HeroSectionProps) {
  // Variant-specific classes
  const variantClasses = {
    centered: 'text-center',
    split: 'grid md:grid-cols-2 gap-12 items-center',
    animated: 'text-center relative',
  }

  // Background-specific text colors
  const textColorClasses = {
    white: 'text-ocobo-dark',
    dark: 'text-white',
  }

  const classes = [
    variantClasses[variant],
    textColorClasses[background],
    className
  ].filter(Boolean).join(' ')

  return (
    <Section spacing="lg" background={background} aria-label={ariaLabel}>
      <Container size="lg">
        <div className={classes}>
          {children}
        </div>
      </Container>
    </Section>
  )
}
```

**Key Details:**
- Composes Section (spacing="lg" for hero prominence)
- Composes Container (size="lg" for hero width)
- Variant controls layout (centered, split grid, animated)
- Background controls Section background + text color
- Uses token-based classes only

### Step 2: Create hero-section.test.tsx File

**File Location:** `components/hero-section.test.tsx`

**Test Coverage:**
- AC1: Variant rendering (3 tests)
- AC2: Background support (2 tests + contrast tests)
- AC3: Shadow token usage (verify no hardcoded shadows)
- AC4: File structure (TypeScript types)
- AC5: Architecture integration (composition, tokens)
- Edge cases

**Target:** 20-25 comprehensive tests

### Step 3: Run Tests

```bash
pnpm test
```

**Expected:** All HeroSection tests pass + no regressions (208+ tests passing)

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

This story establishes the HeroSection pattern that will be used across all major pages in Epic 5.

**What was done:**
- ✓ Analyzed Epic 3 requirements for Story 3.2
- ✓ Reviewed Section component (3.1) for composition pattern
- ✓ Extracted HeroSection spec from epics.md
- ✓ Created comprehensive technical implementation guide
- ✓ Documented all props, variants, and integration points
- ✓ Provided step-by-step implementation instructions

**Key architectural decisions:**
- HeroSection composes Section + Container (don't reinvent)
- Variant prop controls layout pattern
- Background prop controls theme + auto text contrast
- Single-file component (no folder overhead)
- Token-based shadows (shadow-hero)

**Dependencies satisfied:**
- ✓ Section component (3.1) available for composition
- ✓ Container component (2.1) available for layout
- ✓ Button component (2.2) available for CTAs
- ✓ shadow-hero token defined in tailwind.config.js

**Ready for Developer:**
- ✓ Clear implementation spec with code examples
- ✓ All props and variants defined
- ✓ File structure specified (single-file)
- ✓ Integration points documented
- ✓ Testing approach (visual validation)
- ✓ Build verification steps included

### File List

**New Files to Create:**
- `components/hero-section.tsx` (Component implementation)
- `components/hero-section.test.tsx` (Comprehensive tests)

**Files Modified:**
- None

**Build Artifacts:**
- `dist/` (Updated on `pnpm run build`)

### Validation Status

✅ Ready-for-dev - All context, patterns, and requirements documented. Developer has everything needed for flawless implementation.

---

---

## Senior Developer Review (AI)

**Review Date:** 2026-01-15  
**Reviewer:** Code Review Workflow  
**Outcome:** ✅ APPROVED (after fixes)

### Issues Found & Fixed

| ID | Severity | Issue | Resolution |
|----|----------|-------|------------|
| H1 | 🔴 HIGH | AC3 shadow-hero token not implemented | Added decorative blob with shadow-hero to animated variant |
| M1 | 🟡 MEDIUM | Architecture checklist unchecked | Updated all checkboxes to [x] |
| M2 | 🟡 MEDIUM | AC3 tests superficial | Added 2 new tests for shadow-hero usage |
| M3 | 🟡 MEDIUM | Redundant text-white class | Removed duplicate (Section already applies it) |
| L1 | 🟢 LOW | File List says "to create" | Not fixed (cosmetic) |
| L2 | 🟢 LOW | Responsive typography | Not fixed (delegated to children) |

### Changes Applied

**hero-section.tsx:**
- Added decorative blob div for `animated` variant with `shadow-hero` class
- Added `z-10` to animated variant for proper stacking
- Removed redundant `text-white` for dark background

**hero-section.test.tsx:**
- Added test: "should use shadow-hero token for animated variant decorative element"
- Added test: "should not render decorative blob for non-animated variants"
- Updated 3 existing tests for text color location change
- Fixed button type attribute lint error

### Verification

- ✅ 234 tests passing (26 HeroSection tests)
- ✅ Build passes
- ✅ All ACs now properly implemented

---

**Next Story:** [3.3: Create CtaSection Component](./3-3-create-ctasection-component.md)
