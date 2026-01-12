---
stepsCompleted: [step-01-init, step-02-discovery, step-03-success, step-04-journeys, step-05-domain-skipped, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish]
classification:
  projectType: "Web App (SPA React) - Design System Rationalization"
  domain: "General (Agency Website)"
  complexity: "Medium"
  projectContext: "Brownfield - Cleanup AI-generated prototype"
  objective: "Blueprint pour refactoring repo prod"
inputDocuments:
  - _bmad-output/analysis/brainstorming-session-2026-01-12.md
  - _bmad-output/analysis/design-system-spec.md
  - _bmad-output/analysis/action-plan.md
  - docs/index.md
  - docs/project-overview.md
  - docs/architecture.md
  - docs/component-inventory.md
  - docs/data-models.md
  - docs/api-architecture.md
  - docs/source-tree-analysis.md
  - docs/development-guide.md
documentCounts:
  briefs: 0
  research: 0
  brainstorming: 1
  analysis: 2
  projectDocs: 8
workflowType: 'prd'
---

# Product Requirements Document - prototype

**Author:** jerome
**Date:** 2026-01-12

## Executive Summary

**Project:** Design System Rationalization for Ocobo Prototype
**Objective:** Clean up AI-generated prototype to create an AI-readable blueprint for production migration

**What:** Rationalize the Ocobo prototype by extracting tokens, consolidating components, and refactoring pages to use a consistent Design System.

**Why:** Enable agentic migration to production stack (Panda CSS / Park UI) by making the codebase clean, consistent, and AI-readable.

**Who:** Primary user is an AI agent that will read and convert the code. Secondary user is Jerome for review and validation.

**Key Deliverables:**
- Rationalized prototype with centralized tokens in `tailwind.config.js`
- Reusable component library (Card, Button, Badge, Section components, etc.)
- 15 pages refactored using DS components only
- CLAUDE.md + DS documentation for AI navigation

**Out of Scope:**
- Migration to Panda CSS / Park UI (separate project)
- Automated tests
- Production repo refactoring
- Wording extraction for localization
- Accessibility (deferred to migration project)
- Performance optimization

## Success Criteria

### User Success (Developer Experience)

**When opening the rationalized prototype, the developer sees:**
- A clear component catalog with well-defined, reusable components
- Documented and limited design tokens (colors, radius, shadows, typography)
- Pages that compose Design System components (no inline/page-specific declarations)
- Visual result very similar to current prototype (minor intentional adjustments acceptable: border radius harmonization, card consolidation)

**Success "aha!" moment:** "This is clean, I can work with this for the prod repo refactoring."

### Business Success (Project Goals)

| Metric | Target |
|--------|--------|
| Card components | 1 CardRoot with composition primitives (from ~7 variants) |
| Border-radius tokens | 4 (sm, md, lg, xl) - down from 12+ |
| Shadow tokens | 4 (sm, md, lg, hero) |
| Typography scale | 12 sizes (harmonized) |
| Pages refactored | 15/15 (100%) |
| Component documentation | Clean code + inventory with props (nice-to-have) |

### Technical Success

- **Visual validation:** Manual page-by-page comparison with current prototype
- **Build:** Passes without errors
- **No regressions:** All pages render correctly with new components

### Measurable Outcomes

**Zero tolerance (failure if present):**
- Inline hardcoded colors remaining
- Buttons implemented in different ways
- Multiple card component variants (should be 1 composable Card)
- Tokens not centralized in tailwind.config.js

## Product Scope

### MVP - Minimum Viable Product

1. **Phase 1 - Foundations:** Centralized tokens in `tailwind.config.js`
   - Colors (primitives + semantic)
   - Border-radius (4 tokens)
   - Shadows (4 tokens)
   - Typography (12 sizes)
   - Migrate from CDN to local Tailwind config

2. **Phase 2 - Core Components:** All reusable components extracted
   - Card (composition architecture)
   - Button (rationalized)
   - Badge, Input, Container
   - Section components (Hero, CTA, Feature, Grid, etc.)

3. **Phase 3 - Pages Refactoring:** All 15 pages using DS components
   - No inline declarations
   - Consistent component usage

4. **Deliverables:**
   - Rationalized prototype (code)
   - Component inventory with props (nice-to-have)

### Vision (Future)

- Use this rationalized prototype as blueprint for prod repo refactoring
- Future migration to Panda CSS / Park UI will be simplified

## User Journeys

**Primary User:** AI Agent (for automated migration to prod stack)
**Secondary User:** Jerome (for review and validation)

**Key Insight:** The prototype must be optimized for AI readability - clean structure, consistent patterns, no ambiguity.

### Journey 1: AI Agent - Component Extraction

**Context:** An AI agent analyzes the prototype to extract and convert components to the prod stack (Panda CSS / Park UI).

**Opening Scene:** The agent receives instructions to convert the `Card` component to Panda CSS.

**Rising Action:**
1. Agent opens `components/Card/index.ts` and finds a clear export
2. Reads `CardRoot.tsx` and identifies typed props: `variant`, `size`, `colorPalette`
3. Finds well-structured Tailwind classes mapped to config tokens
4. Understands the composition pattern (CardHeader, CardBody, etc.)

**Climax:** Agent generates the equivalent Panda CSS recipe without ambiguity.

**Resolution:** Component converted cleanly, ready for Jerome's review.

### Journey 2: AI Agent - Page Conversion

**Context:** An AI agent must convert a complete page.

**Opening Scene:** Agent opens `pages/Home.tsx`.

**Rising Action:**
1. Easily identifies sections (imported Section components)
2. Each section uses DS components (no complex inline JSX)
3. Props are explicit and typed
4. No business logic mixed with rendering

**Climax:** Agent understands the page structure in seconds.

**Resolution:** Page converted with the same visual rendering.

### Journey 3: Jerome - Review & Validation

**Context:** Jerome verifies the AI agent's work.

**Opening Scene:** The agent has converted 3 pages. Jerome opens the diff.

**Rising Action:**
1. Visual comparison between original prototype vs converted prod
2. Verifies token mapping is correct
3. Identifies minor adjustments needed

**Climax:** Rendering is nearly identical, a few minor tweaks.

**Resolution:** Jerome validates and moves to next pages.

### Journey Requirements Summary

| Requirement | For | Priority |
|-------------|-----|----------|
| Predictable file structure | AI Agent | Critical |
| Typed and explicit props | AI Agent | Critical |
| Tailwind tokens (no hardcoded values) | AI Agent | Critical |
| Clear composition pattern | AI Agent | High |
| Pages = DS component composition only | AI Agent | High |
| Human-readable code for review | Jerome | Medium |

## Innovation: AI-Optimized Codebase

### Concept

**Objective:** Create a prototype with Markdown documentation that enables an AI agent to:
1. Quickly understand the Design System and its usage
2. Navigate efficiently through the codebase
3. Generate equivalents in the prod stack (Panda CSS / Park UI)
4. Map tokens to the prod stack

### AI-Readability Strategy

| Element | Role |
|---------|------|
| **CLAUDE.md / agent.md** | Main entry point for AI - navigation guide |
| **DS Documentation (Markdown)** | Explains Design System usage |
| **Clean, readable code** | Clear structure, explicit naming |
| **Documented tokens** | Clear mapping in config + docs |

### Target Documentation Structure

```
docs/
├── CLAUDE.md (or agent.md)    # AI entry point
├── design-system/
│   ├── tokens.md              # Colors, radius, shadows, typography
│   ├── components.md          # Catalog + usage
│   └── patterns.md            # How to compose pages
```

**Focus:** AI must understand **how to use** the Design System, not just its technical structure.

### Validation

**Success if:**
- An AI agent reads CLAUDE.md and knows where to go
- Agent understands DS usage (not just code)
- Token mapping to Panda CSS / Park UI is obvious
- Little ambiguity about patterns to follow

### Innovation Deliverables

1. **Rationalized prototype** (clean code)
2. **Updated Markdown documentation** for AI consumption
3. **CLAUDE.md** as agent entry point

## Web App (Design System) Specific Requirements

### Project-Type Overview

**Type:** SPA React - Design System Rationalization
**Focus:** Code cleanliness and AI-readability, not performance optimization

### Technical Architecture Considerations

| Aspect | Decision |
|--------|----------|
| **Browser Support** | Modern only (Chrome, Firefox, Safari, Edge - latest versions) |
| **Responsive Design** | All breakpoints covered |
| **Mobile Strategy** | Mobile-first conserved |
| **Breakpoints** | Keep current prototype breakpoints (rationalization deferred to migration) |
| **Accessibility** | Deferred to AI migration project |
| **Performance** | Not a priority - focus on code cleanliness |

### Responsive Design Requirements

**Components must:**
- Work across all existing breakpoints
- Follow mobile-first CSS patterns
- Use Tailwind responsive utilities consistently (`sm:`, `md:`, `lg:`, `xl:`)

**Breakpoints (preserved from prototype):**
- Default (mobile)
- `sm` (640px)
- `md` (768px)
- `lg` (1024px)
- `xl` (1280px)

### Implementation Considerations

**In Scope:**
- Clean, well-structured components
- Consistent responsive patterns
- Mobile-first approach maintained
- AI-readable code structure

**Deferred to Migration Project:**
- Accessibility (WCAG compliance)
- Performance optimization
- Breakpoint rationalization
- Browser polyfills (not needed for modern browsers)

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Complete Design System Rationalization
**Objective:** Clean, AI-readable prototype ready for agentic migration

**Everything is MVP** - All 3 phases are interdependent:
- Without tokens → no coherent components
- Without components → no refactored pages
- Without AI docs → no agentic migration possible

### MVP Feature Set

**Phase 1 - Foundations (MVP)**
- Tokens centralized in `tailwind.config.js`
- CDN → local config migration
- Colors, radius, shadows, typography rationalized

**Phase 2 - Core Components (MVP)**
- All components extracted and rationalized
- Card (composition architecture)
- Button, Badge, Input, Container
- Section components (Hero, CTA, Feature, Grid...)
- **Navbar refactored** (split into sub-components)

**Phase 3 - Pages Refactoring (MVP)**
- 15 pages refactored with component approach
- No complex inline JSX
- DS component composition only

**Phase 4 - AI Documentation (MVP)**
- CLAUDE.md as agent entry point
- DS documentation in Markdown (tokens, components, patterns)
- Clear structure for AI navigation

### Risk Mitigation Strategy

| Risk | Impact | Mitigation |
|------|--------|------------|
| **Scope creep** | Refactor more than necessary | Clearly define "rationalized" vs "improved" |
| **Visual deviation** | Prototype validated by stakeholders | Systematic visual validation, minor changes only |
| **Complex Navbar** | 17KB, hard to split | Progressive split into sub-components, visual tests |
| **Over-engineering** | Create unnecessary abstractions | Keep it simple, Tailwind inline, no recipes |

### Guardrails

**What we DO:**
- Rationalize (reduce variants)
- Extract (create reusable components)
- Document (for AI)

**What we DON'T do:**
- Improve design (except minor radius/shadow adjustments)
- Add features
- Change behavior

## Functional Requirements

### Token Management

- **FR1:** Developer can access all color tokens from a centralized `tailwind.config.js`
- **FR2:** Developer can use 4 border-radius tokens (sm, md, lg, xl) consistently across components
- **FR3:** Developer can use 4 shadow tokens (sm, md, lg, hero) consistently across components
- **FR4:** Developer can use 12 typography size tokens consistently across components
- **FR5:** Developer can access semantic color tokens (not just primitive colors)

### Core Component Extraction

- **FR6:** Developer can import a single Card component with composition primitives (CardRoot, CardHeader, CardBody, CardFooter)
- **FR7:** Developer can import a rationalized Button component with consistent variants
- **FR8:** Developer can import Badge, Input, and Container components from the DS
- **FR9:** Developer can import Section components (Hero, CTA, Feature, Grid, etc.)
- **FR10:** All components use tokens from tailwind.config.js (no hardcoded values)

### Navbar Rationalization

- **FR11:** Developer can import Navbar as a composition of sub-components
- **FR12:** Navbar sub-components are reusable independently
- **FR13:** Navbar maintains current responsive behavior across breakpoints

### Page Composition

- **FR14:** Developer can compose pages using only DS components (no inline JSX)
- **FR15:** All 15 pages are refactored to use DS components
- **FR16:** Pages follow consistent import and composition patterns
- **FR17:** Pages maintain current responsive behavior (mobile-first)

### AI Documentation

- **FR18:** AI Agent can read CLAUDE.md and understand navigation entry points
- **FR19:** AI Agent can access tokens documentation in Markdown format
- **FR20:** AI Agent can access components catalog with props documentation
- **FR21:** AI Agent can understand DS usage patterns from documentation
- **FR22:** Documentation structure enables efficient AI navigation

### Visual Fidelity

- **FR23:** Rationalized prototype renders visually similar to current prototype
- **FR24:** Minor adjustments (radius, shadow harmonization) are acceptable
- **FR25:** No functional or behavioral changes from current prototype

## Non-Functional Requirements

### Code Quality

- **NFR1:** All components use tokens from tailwind.config.js (0 hardcoded values)
- **NFR2:** Consistent naming conventions across all components
- **NFR3:** TypeScript types defined for all component props
- **NFR4:** No duplicate component implementations (1 source of truth per component)
- **NFR5:** Build passes without errors or warnings

### AI-Readability

- **NFR6:** File structure follows predictable patterns (easy AI navigation)
- **NFR7:** Component names are explicit and descriptive
- **NFR8:** CLAUDE.md provides clear navigation entry points
- **NFR9:** Documentation uses consistent Markdown structure
- **NFR10:** Token-to-class mapping is unambiguous

### Maintainability

- **NFR11:** Component composition patterns are consistent across the codebase
- **NFR12:** Import patterns follow a single convention
- **NFR13:** Responsive utilities usage is consistent (sm:, md:, lg:, xl:)
- **NFR14:** Mobile-first approach consistently applied

### Visual Fidelity

- **NFR15:** Rationalized prototype is visually indistinguishable from current prototype at first glance
- **NFR16:** Only intentional minor adjustments (radius, shadow harmonization) are visible
- **NFR17:** No layout shifts or broken responsive behavior
- **NFR18:** All animations and transitions preserved
