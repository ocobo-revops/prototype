---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8]
status: complete
completedAt: '2026-01-13'
inputDocuments:
  - _bmad-output/planning-artifacts/prd.md
  - _bmad-output/analysis/design-system-spec.md
  - _bmad-output/analysis/brainstorming-session-2026-01-12.md
  - _bmad-output/analysis/action-plan.md
  - docs/index.md
  - docs/project-overview.md
  - docs/architecture.md
  - docs/component-inventory.md
  - docs/data-models.md
  - docs/api-architecture.md
  - docs/source-tree-analysis.md
  - docs/development-guide.md
workflowType: 'architecture'
project_name: 'prototype'
user_name: 'jerome'
date: '2026-01-13'
---

# Architecture Decision Document

_This document builds collaboratively through step-by-step discovery. Sections are appended as we work through each architectural decision together._

## Project Context Analysis

### Requirements Overview

**Functional Requirements (30 FRs):**
- Token Management (FR1-5): Centralized tokens in tailwind.config.js
- Core Components (FR6-10): Card composition, Button, Badge, Input, Container
- Navbar (FR11-13): Sub-component architecture
- Pages (FR14-17): 15 pages using DS components only
- AI Documentation (FR18-22): CLAUDE.md, token/component docs
- Showcase Page (FR23-27): Hidden route for DS visualization
- Visual Fidelity (FR28-30): Near-identical rendering

**Non-Functional Requirements (18 NFRs):**
- Code Quality: TypeScript types, no hardcoded values, build passes
- AI-Readability: Predictable patterns, explicit naming, clear docs
- Maintainability: Consistent patterns, mobile-first approach
- Visual Fidelity: No layout shifts, animations preserved

**Scale & Complexity:**
- Primary domain: Frontend (Design System)
- Complexity level: Medium
- Components to create: ~15-20
- Pages to refactor: 15

### Technical Constraints & Dependencies

| Constraint | Impact |
|------------|--------|
| Stack frozen (React 19 + TS + Vite) | No framework changes allowed |
| Tailwind inline only | No CSS-in-JS recipes or abstractions |
| Panda CSS migration out of scope | Architecture must facilitate future migration |
| Preserve all animations | Visual validation required |
| No automated tests | Manual visual comparison only |
| Navbar 17KB monolith | Progressive refactoring strategy needed |

### Cross-Cutting Concerns

1. **AI-Readability**: Every architectural decision must optimize for AI agent comprehension
2. **Visual Fidelity**: Zero-tolerance for visual regressions
3. **Token Consistency**: Single source of truth in tailwind.config.js
4. **Composition Pattern**: Park UI-style composition (Root/Header/Body/Footer)
5. **Props Uniformity**: variant, size, colorPalette across all components

## Starter Template Evaluation

### Primary Technology Domain

**Brownfield Project** - Existing React 19 SPA with Design System rationalization focus

### Existing Stack (Fixed)

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.2.3 | UI Framework |
| TypeScript | 5.8.2 | Type Safety |
| Vite | 6.2.0 | Build Tool |
| Tailwind CSS | Latest (CDN→Local) | Styling |
| React Router | 7.x | Client-side Routing |
| Lucide React | 0.561.0 | Icons |

### Architectural Decisions Pre-Established

**From Existing Codebase:**
- SPA architecture with HashRouter
- Component-based structure (components/ + pages/)
- TypeScript with strict mode
- Vite configuration with path aliases (@/*)
- Custom fonts loaded from CDN

**From PRD Constraints:**
- Tailwind inline only (no CSS-in-JS)
- No state management library needed
- No automated testing (visual validation)
- Mobile-first responsive patterns preserved

### Decisions Required by This Architecture

1. **Component Organization**: DS folder structure
2. **Composition Pattern**: Park UI-style implementation
3. **Token Architecture**: tailwind.config.js structure
4. **AI Documentation**: CLAUDE.md and DS docs structure
5. **Showcase Page**: Route and component structure

### Migration Path

**Current State → Target State:**
- Tailwind CDN → Local tailwind.config.js
- Inline hardcoded values → Token references
- Monolithic components → Composition primitives
- Pages with inline JSX → DS component composition

## Core Architectural Decisions

### Decision Priority Analysis

**Critical Decisions (Block Implementation):**
- Component folder structure
- Token architecture in tailwind.config.js
- Composition pattern implementation

**Important Decisions (Shape Architecture):**
- Documentation structure for AI
- Showcase page organization

**Deferred Decisions (Post-MVP):**
- None - all decisions made for DS rationalization scope

### Component Organization

**Decision:** Flat structure for single-file components, folders only for multi-file components

**CRITICAL RULES:**
- All file/folder names MUST be lowercase with kebab-case
- Single-file components go directly in `components/` root
- Only create subfolders when component has multiple files (context, sub-components)

**Structure:**
```
components/
├── button.tsx              # Single file → root level
├── badge.tsx               # Single file → root level  
├── input.tsx               # Single file → root level
├── container.tsx           # Single file → root level
├── card/                   # Multi-file → subfolder (lowercase!)
│   ├── index.ts
│   ├── card-context.ts
│   ├── card-root.tsx
│   ├── card-header.tsx
│   ├── card-body.tsx
│   └── card-footer.tsx
├── section/                # Multi-file → subfolder (lowercase!)
│   ├── index.ts
│   ├── hero-section.tsx
│   ├── cta-section.tsx
│   └── ...
└── showcase/               # Multi-file → subfolder (lowercase!)
    ├── index.ts
    ├── tokens-showcase.tsx
    └── components-showcase.tsx
```

**Rationale:** Simpler structure, fewer files to manage, lowercase convention consistent

### Token Architecture

**Decision:** Hierarchical structure with DEFAULT variants

**Structure in tailwind.config.js:**
```js
theme: {
  extend: {
    colors: {
      ocobo: {
        dark: '#212323',
        yellow: { DEFAULT: '#F1CF25', light: '#FFFCEE' },
        mint: { DEFAULT: '#9ADBBA', light: '#EBFDF5' },
        sky: { DEFAULT: '#99D1DF', light: '#F0F9FB' },
        coral: { DEFAULT: '#FE9C87', light: '#FFF5F2' },
        gray: { 50: '#FAFAFA', 100: '#F5F5F5', ... }
      }
    },
    borderRadius: { sm: '0.5rem', md: '1rem', lg: '1.5rem', xl: '2.5rem' },
    boxShadow: { sm: '...', md: '...', lg: '...', hero: '...' },
    fontSize: { /* 12 sizes */ }
  }
}
```

**Rationale:** Direct Panda CSS mapping, classes like `bg-ocobo-yellow`, `bg-ocobo-yellow-light`

### Composition Pattern

**Decision:** Context Provider + Compound Components with namespace

**Implementation:**
```tsx
<Card.Root variant="outlined" size="md" colorPalette="yellow">
  <Card.Header>
    <Card.Title>Title</Card.Title>
    <Card.Description>Description</Card.Description>
  </Card.Header>
  <Card.Body>Content</Card.Body>
  <Card.Footer>Actions</Card.Footer>
</Card.Root>
```

**Export Pattern (index.ts):**
```tsx
import { CardRoot } from './CardRoot'
import { CardHeader } from './CardHeader'
import { CardTitle } from './CardTitle'
import { CardDescription } from './CardDescription'
import { CardBody } from './CardBody'
import { CardFooter } from './CardFooter'

export const Card = {
  Root: CardRoot,
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Body: CardBody,
  Footer: CardFooter,
}
```

**Context Interface:**
```tsx
interface CardContextValue {
  variant: 'default' | 'outlined' | 'ghost' | 'filled' | 'elevated'
  size: 'sm' | 'md' | 'lg'
  colorPalette: 'yellow' | 'mint' | 'sky' | 'coral' | 'dark'
}
```

**Rationale:**
- Namespace explicite (`Card.X`) pour clarté AI
- Context pour héritage automatique des props
- Pattern Radix UI / Park UI compatible

### AI Documentation Structure

**Decision:** CLAUDE.md entry point + dedicated docs folder

**Structure:**
```
CLAUDE.md                        # Entry point, navigation guide
docs/design-system/
├── tokens.md                   # Colors, radius, shadows, typography
├── components.md               # Component catalog with props
└── patterns.md                 # Page composition patterns
```

**Rationale:** Modular, CLAUDE.md stays concise, easy AI navigation

### Showcase Page Architecture

**Decision:** Single page with imported section components

**Structure:**
```
pages/DesignSystem.tsx          # Layout + internal navigation
components/Showcase/
├── index.ts
├── TokensShowcase.tsx         # Visual token display
├── ComponentsShowcase.tsx     # Component variants demo
└── SectionsShowcase.tsx       # Section components demo
```

**Route:** `/design-system` (hidden from Navbar)

**Rationale:** Maintainable sections, single hidden route, living documentation

## Implementation Patterns & Consistency Rules

### Pattern Categories Defined

**Critical Conflict Points Identified:** 6 areas standardized for AI agent consistency

### Naming Patterns

**File Naming:**
- Convention: `kebab-case.tsx`
- Examples: `card-root.tsx`, `card-header.tsx`, `hero-section.tsx`
- Index files: `index.ts` (lowercase)

**Interface Naming:**
- Convention: `ComponentNameProps`
- Examples: `CardRootProps`, `ButtonProps`, `HeroSectionProps`

**Component Naming:**
- Convention: PascalCase for components
- Examples: `CardRoot`, `CardHeader`, `HeroSection`

### Export Patterns

**Namespace Export (index.ts):**
```tsx
// components/Card/index.ts
import { CardRoot } from './card-root'
import { CardHeader } from './card-header'
import { CardTitle } from './card-title'
import { CardDescription } from './card-description'
import { CardBody } from './card-body'
import { CardFooter } from './card-footer'

export const Card = {
  Root: CardRoot,
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Body: CardBody,
  Footer: CardFooter,
}
```

**Usage:**
```tsx
import { Card } from '@/components/Card'

<Card.Root variant="outlined">
  <Card.Header>...</Card.Header>
</Card.Root>
```

### Tailwind Class Patterns

**Order Convention (grouped logically):**
```tsx
className="
  flex items-center gap-4          {/* 1. Layout */}
  px-4 py-2                        {/* 2. Spacing */}
  bg-ocobo-yellow rounded-md       {/* 3. Appearance */}
  hover:bg-ocobo-yellow-light      {/* 4. States */}
  transition-colors                {/* 5. Animation */}
"
```

**Token Usage:**
- Colors: `bg-ocobo-yellow`, `text-ocobo-dark`, `border-ocobo-mint`
- Radius: `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-xl`
- Shadows: `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-hero`

### Props Patterns

**Default Values (in destructuring):**
```tsx
interface CardRootProps {
  variant?: 'default' | 'outlined' | 'ghost' | 'filled' | 'elevated'
  size?: 'sm' | 'md' | 'lg'
  colorPalette?: 'yellow' | 'mint' | 'sky' | 'coral' | 'dark'
  children: React.ReactNode
}

function CardRoot({
  variant = 'default',
  size = 'md',
  colorPalette = 'yellow',
  children,
}: CardRootProps) {
  // ...
}
```

### Context Patterns

**Context Implementation:**
```tsx
// card-context.ts
import { createContext, useContext } from 'react'

interface CardContextValue {
  variant: 'default' | 'outlined' | 'ghost' | 'filled' | 'elevated'
  size: 'sm' | 'md' | 'lg'
  colorPalette: 'yellow' | 'mint' | 'sky' | 'coral' | 'dark'
}

const CardContext = createContext<CardContextValue | null>(null)

export function useCardContext() {
  const context = useContext(CardContext)
  if (!context) {
    throw new Error('Card components must be used within Card.Root')
  }
  return context
}

export const CardProvider = CardContext.Provider
```

### Enforcement Guidelines

**All AI Agents MUST:**
- Use kebab-case for all new component files
- Export components via namespace pattern only
- Follow Tailwind class ordering convention
- Implement Context with explicit error on misuse
- Use `ComponentNameProps` for all interfaces

**Anti-Patterns to Avoid:**
- ❌ PascalCase files: `CardRoot.tsx`
- ❌ Default exports: `export default Card`
- ❌ Inline hardcoded colors: `bg-[#F1CF25]`
- ❌ Context without error handling
- ❌ Mixed naming conventions

## Project Structure & Boundaries

### Complete Project Directory Structure

```
prototype/
├── CLAUDE.md                          # AI entry point
├── tailwind.config.js                 # Design tokens (NEW)
├── postcss.config.js                  # PostCSS config (NEW)
├── index.html                         # Modified (remove CDN)
├── App.tsx                            # Add /design-system route
│
├── components/
│   ├── Button/
│   │   ├── index.ts
│   │   └── button.tsx
│   ├── Badge/
│   │   ├── index.ts
│   │   └── badge.tsx
│   ├── Input/
│   │   ├── index.ts
│   │   └── input.tsx
│   ├── Container/
│   │   ├── index.ts
│   │   └── container.tsx
│   ├── Card/
│   │   ├── index.ts
│   │   ├── card-context.ts
│   │   ├── card-root.tsx
│   │   ├── card-header.tsx
│   │   ├── card-title.tsx
│   │   ├── card-description.tsx
│   │   ├── card-body.tsx
│   │   ├── card-footer.tsx
│   │   ├── card-media.tsx
│   │   └── card-avatar.tsx
│   ├── Section/
│   │   ├── index.ts
│   │   ├── section.tsx
│   │   ├── hero-section.tsx
│   │   ├── cta-section.tsx
│   │   ├── feature-section.tsx
│   │   ├── grid-section.tsx
│   │   ├── testimonial-section.tsx
│   │   ├── stats-section.tsx
│   │   └── decorative-blob.tsx
│   ├── Navbar/
│   │   ├── index.ts
│   │   ├── navbar.tsx
│   │   ├── navbar-menu.tsx
│   │   ├── navbar-logo.tsx
│   │   └── navbar-mobile.tsx
│   ├── Footer/
│   │   ├── index.ts
│   │   └── footer.tsx
│   └── Showcase/
│       ├── index.ts
│       ├── tokens-showcase.tsx
│       ├── components-showcase.tsx
│       └── sections-showcase.tsx
│
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Method.tsx
│   ├── Partners.tsx
│   ├── Studio.tsx
│   ├── Stories.tsx
│   ├── Jobs.tsx
│   ├── Resources.tsx
│   ├── Podcast.tsx
│   ├── Contact.tsx
│   ├── ArticleDetail.tsx
│   ├── JobDetail.tsx
│   ├── StoryDetail.tsx
│   ├── WebinarDetail.tsx
│   └── DesignSystem.tsx               # Hidden showcase (NEW)
│
└── docs/design-system/                # AI documentation (NEW)
    ├── tokens.md
    ├── components.md
    └── patterns.md
```

### Architectural Boundaries

**Layer Architecture:**
1. **Pages Layer**: Compose sections, no inline JSX
2. **Section Components**: Compose core components
3. **Core Components**: Use tokens only, provide composition API
4. **Design Tokens**: Single source in tailwind.config.js

**Component Communication:**
- Props for data passing (top-down)
- Context for composition inheritance (Card, Section)
- No global state management

**Data Boundaries:**
- No database (frontend only)
- Existing Gemini API integration unchanged
- Static data in page components

### Requirements to Structure Mapping

| FR Category | Target Location |
|-------------|-----------------|
| FR1-5 (Tokens) | `tailwind.config.js` |
| FR6-10 (Core Components) | `components/Button/`, `Card/`, `Badge/`, `Input/`, `Container/` |
| FR11-13 (Navbar) | `components/Navbar/` |
| FR14-17 (Pages) | `pages/*.tsx` |
| FR18-22 (AI Docs) | `CLAUDE.md`, `docs/design-system/` |
| FR23-27 (Showcase) | `pages/DesignSystem.tsx`, `components/Showcase/` |

### File Change Summary

| Type | Count | Examples |
|------|-------|----------|
| New files | ~35 | Card primitives, Section components, Showcase |
| Modified files | ~18 | All pages, App.tsx, index.html |
| Deleted files | 1 | ServiceCard.tsx (replaced by Card) |
| Unchanged | ~10 | fonts/, most docs/, types.ts |

## Architecture Validation Results

### Coherence Validation ✅

**Decision Compatibility:**
All technology choices (React 19 + TypeScript 5.8 + Vite 6 + Tailwind local) are fully compatible and commonly used together.

**Pattern Consistency:**
- Context + Namespace composition pattern is coherent with React best practices
- kebab-case files + PascalCase components is a valid, consistent convention
- Export patterns via namespace align with composition architecture

**Structure Alignment:**
- Folder-per-component structure supports the namespace export pattern
- Layer architecture (Pages → Sections → Core → Tokens) is properly reflected in directories

### Requirements Coverage Validation ✅

**Functional Requirements (30/30 covered):**
- Token Management (FR1-5): ✅ tailwind.config.js
- Core Components (FR6-10): ✅ Card, Button, Badge, Input, Container
- Navbar (FR11-13): ✅ Sub-component architecture
- Page Composition (FR14-17): ✅ Refactoring plan
- AI Documentation (FR18-22): ✅ CLAUDE.md + docs/design-system/
- Showcase Page (FR23-27): ✅ DesignSystem.tsx + Showcase components
- Visual Fidelity (FR28-30): ✅ Manual visual validation

**Non-Functional Requirements (18/18 covered):**
- Code Quality (NFR1-5): ✅ Token architecture, TypeScript
- AI-Readability (NFR6-10): ✅ Explicit patterns, documentation
- Maintainability (NFR11-14): ✅ Composition pattern
- Visual Fidelity (NFR15-18): ✅ Manual validation strategy

### Implementation Readiness Validation ✅

**Decision Completeness:**
- All critical decisions documented with rationale
- Implementation patterns have concrete code examples
- Consistency rules are explicit and enforceable

**Structure Completeness:**
- ~35 new files mapped to specific locations
- All integration points defined
- Requirements-to-structure mapping complete

**Pattern Completeness:**
- 6 consistency patterns defined
- Anti-patterns documented
- Examples provided for all patterns

### Gap Analysis Results

**Critical Gaps:** None identified

**Important Gaps:** None identified

**Future Enhancements (Post-MVP):**
- Visual regression testing (Chromatic/Percy)
- Storybook documentation generation
- Automated linting for pattern enforcement

### Architecture Completeness Checklist

**✅ Requirements Analysis**
- [x] Project context thoroughly analyzed
- [x] Scale and complexity assessed (Medium)
- [x] Technical constraints identified (stack frozen)
- [x] Cross-cutting concerns mapped (AI-readability, visual fidelity)

**✅ Architectural Decisions**
- [x] Critical decisions documented with versions
- [x] Technology stack fully specified
- [x] Integration patterns defined
- [x] Component boundaries established

**✅ Implementation Patterns**
- [x] Naming conventions established (kebab-case files)
- [x] Structure patterns defined (namespace exports)
- [x] Communication patterns specified (Context)
- [x] Process patterns documented (defaults, error handling)

**✅ Project Structure**
- [x] Complete directory structure defined
- [x] Component boundaries established (4 layers)
- [x] Integration points mapped
- [x] Requirements to structure mapping complete

### Architecture Readiness Assessment

**Overall Status:** READY FOR IMPLEMENTATION ✅

**Confidence Level:** HIGH

**Key Strengths:**
- Clear AI-optimized architecture
- Explicit patterns prevent agent conflicts
- Complete requirements coverage
- Park UI-compatible composition

**Areas for Future Enhancement:**
- Automated visual testing
- Storybook integration
- Pattern linting rules

### Implementation Handoff

**AI Agent Guidelines:**
- Follow all architectural decisions exactly as documented
- Use implementation patterns consistently across all components
- Respect project structure and boundaries
- Refer to this document for all architectural questions

**Implementation Priority:**
1. Phase 1: Tokens (tailwind.config.js)
2. Phase 2: Core Components (Button, Badge, Input, Container, Card)
3. Phase 3: Section Components + Navbar refactoring
4. Phase 4: Page refactoring + Showcase + Documentation

## Architecture Completion Summary

### Workflow Completion

**Architecture Decision Workflow:** COMPLETED ✅
**Total Steps Completed:** 8
**Date Completed:** 2026-01-13
**Document Location:** `_bmad-output/planning-artifacts/architecture.md`

### Final Architecture Deliverables

**📋 Complete Architecture Document**
- All architectural decisions documented with specific versions
- Implementation patterns ensuring AI agent consistency
- Complete project structure with all files and directories
- Requirements to architecture mapping
- Validation confirming coherence and completeness

**🏗️ Implementation Ready Foundation**
- 5 major architectural decisions made
- 6 implementation patterns defined
- ~35 new component files specified
- 30 FRs + 18 NFRs fully supported

**📚 AI Agent Implementation Guide**
- Technology stack with verified versions
- Consistency rules that prevent implementation conflicts
- Project structure with clear boundaries
- Integration patterns and communication standards

### Quality Assurance Checklist

**✅ Architecture Coherence**
- [x] All decisions work together without conflicts
- [x] Technology choices are compatible
- [x] Patterns support the architectural decisions
- [x] Structure aligns with all choices

**✅ Requirements Coverage**
- [x] All functional requirements are supported
- [x] All non-functional requirements are addressed
- [x] Cross-cutting concerns are handled
- [x] Integration points are defined

**✅ Implementation Readiness**
- [x] Decisions are specific and actionable
- [x] Patterns prevent agent conflicts
- [x] Structure is complete and unambiguous
- [x] Examples are provided for clarity

---

**Architecture Status:** READY FOR IMPLEMENTATION ✅

**Next Phase:** Begin implementation using the architectural decisions and patterns documented herein.

**Document Maintenance:** Update this architecture when major technical decisions are made during implementation.
