# Story 1.6: Migrate to Semantic Color Tokens

Status: done

## Story

As an **AI Agent**,
I want all pages and components to use semantic color tokens instead of primitive color names,
so that the codebase follows intention-based styling and enables easier theming and maintenance.

## Acceptance Criteria

1. All `text-ocobo-dark` occurrences migrated to `text-semantic-text` where appropriate
2. All `bg-ocobo-yellow` / `text-ocobo-yellow` migrated to `*-semantic-primary` for CTAs and primary actions
3. All `bg-ocobo-coral` / `text-ocobo-coral` migrated to `*-semantic-accent` for secondary actions
4. All `bg-ocobo-mint` / `text-ocobo-mint` migrated to `*-semantic-success` for success indicators
5. All `bg-ocobo-sky` / `text-ocobo-sky` migrated to `*-semantic-info` for informational elements
6. Decorative elements intentionally using brand colors remain with primitive tokens (documented)
7. Build passes with no errors (`npm run build`)
8. Visual regression: pages render identically before and after migration

## Tasks / Subtasks

- [x] Task 1: Migrate shared components (high impact) (AC: #1-6)
  - [x] 1.1 Migrate Button.tsx (5 occurrences)
  - [x] 1.2 Migrate Navbar.tsx (30 occurrences)
  - [x] 1.3 Migrate Footer.tsx (11 occurrences)
  - [x] 1.4 Migrate ServiceCard.tsx (11 occurrences)
  - [x] 1.5 Migrate NewsletterWidget.tsx (13 occurrences)
  - [x] 1.6 Run build and verify no regressions

- [x] Task 2: Migrate high-traffic pages (AC: #1-6)
  - [x] 2.1 Migrate Home.tsx (60 occurrences)
  - [x] 2.2 Migrate Services.tsx (138 occurrences)
  - [x] 2.3 Migrate Method.tsx (90 occurrences)
  - [x] 2.4 Run build and verify no regressions

- [x] Task 3: Migrate secondary pages (AC: #1-6)
  - [x] 3.1 Migrate Studio.tsx (59 occurrences)
  - [x] 3.2 Migrate Partners.tsx (58 occurrences)
  - [x] 3.3 Migrate Jobs.tsx (57 occurrences)
  - [x] 3.4 Migrate JobDetail.tsx (57 occurrences)
  - [x] 3.5 Migrate StoryDetail.tsx (56 occurrences)
  - [x] 3.6 Migrate About.tsx (42 occurrences)
  - [x] 3.7 Run build and verify no regressions

- [x] Task 4: Migrate remaining pages (AC: #1-6)
  - [x] 4.1 Migrate Stories.tsx (35 occurrences)
  - [x] 4.2 Migrate ArticleDetail.tsx (33 occurrences)
  - [x] 4.3 Migrate Podcast.tsx (28 occurrences)
  - [x] 4.4 Migrate WebinarDetail.tsx (28 occurrences)
  - [x] 4.5 Migrate Contact.tsx (23 occurrences)
  - [x] 4.6 Migrate Resources.tsx (23 occurrences)
  - [x] 4.7 Run build and verify no regressions

- [x] Task 5: Document exceptions and validate (AC: #6, #7, #8)
  - [x] 5.1 Document decorative elements that intentionally use primitive tokens
  - [x] 5.2 Run full test suite
  - [x] 5.3 Final build validation
  - [x] 5.4 Visual spot-check of key pages

## Dev Notes

### Migration Rules

**Direct Mappings (apply automatically):**

| Primitive | Semantic | Context |
|-----------|----------|---------|
| `text-ocobo-dark` | `text-semantic-text` | Primary text content |
| `bg-ocobo-dark` | Keep or use for dark sections | Dark backgrounds (no direct semantic) |
| `bg-ocobo-yellow` | `bg-semantic-primary` | Primary CTAs, key highlights |
| `text-ocobo-yellow` | `text-semantic-primary` | Primary text accents |
| `bg-ocobo-yellow-light` | `bg-semantic-primary-light` | Subtle primary backgrounds |
| `bg-ocobo-coral` | `bg-semantic-accent` | Secondary actions |
| `text-ocobo-coral` | `text-semantic-accent` | Accent text |
| `bg-ocobo-mint` | `bg-semantic-success` | Success states |
| `text-ocobo-mint` | `text-semantic-success` | Success text |
| `bg-ocobo-sky` | `bg-semantic-info` | Info elements |
| `text-ocobo-sky` | `text-semantic-info` | Info text |

**Keep as Primitive (decorative):**
- Blob backgrounds with opacity (e.g., `bg-ocobo-yellow/30`)
- Brand-specific decorative elements
- Gradient effects using specific brand colors
- Hover states that intentionally use brand colors for visual variety

### Rationalization Opportunities

While migrating, look for:
1. Redundant class combinations that can be simplified
2. Inconsistent patterns (same UI element styled differently across pages)
3. Unused or dead CSS classes
4. Opportunities to extract repeated patterns into components

### Testing Strategy

- Run `npm run build` after each task
- Spot-check pages visually in browser
- Compare before/after screenshots for key sections if needed

### References

- [Source: docs/design-system/tokens.md] - Semantic token definitions
- [Source: story-1-2b] - Semantic tokens implementation
- [Audit: 2026-01-13] - 858 total primitive color occurrences identified

## Dev Agent Record

### Agent Model Used

Claude (opencode) via dev-story workflow

### Debug Log References

- Pre-migration audit: 858 primitive color occurrences
- Post-migration audit: ~220 primitive occurrences remaining (intentionally kept)
- Build output: 62.31 kB CSS, 550.22 kB JS
- All 35 design token tests pass

### Completion Notes List

**Migration Summary:**
- Migrated ~638 occurrences from primitive to semantic colors
- Kept ~220 occurrences as primitive (decorative/intentional)

**Semantic migrations applied:**
- `text-ocobo-dark` → `text-semantic-text` (297 occurrences)
- `bg-ocobo-dark` → `bg-semantic-text` (for primary dark backgrounds)
- `text-ocobo-yellow` / `bg-ocobo-yellow` → `*-semantic-primary`
- `text-ocobo-coral` / `bg-ocobo-coral` → `*-semantic-accent`
- `text-ocobo-mint` / `bg-ocobo-mint` → `*-semantic-success`
- `text-ocobo-sky` / `bg-ocobo-sky` → `*-semantic-info`

**Intentionally kept as primitive:**
- All border colors (`border-ocobo-*`) - 116 occurrences for visual variety
- Light variants (`bg-ocobo-*-light`) - 39 occurrences for subtle backgrounds
- Colors with opacity (`bg-ocobo-*/30`) - decorative blobs/effects
- Dynamic theme colors in Navbar and ServiceCard components

**Documentation updated:**
- Added "Migration Status" section to docs/design-system/tokens.md
- Documented when to use semantic vs primitive tokens

### File List

**Components (modified):**
- [x] components/Button.tsx
- [x] components/Navbar.tsx
- [x] components/Footer.tsx
- [x] components/ServiceCard.tsx
- [x] components/NewsletterWidget.tsx

**Pages (modified):**
- [x] pages/Home.tsx
- [x] pages/Services.tsx
- [x] pages/Method.tsx
- [x] pages/Studio.tsx
- [x] pages/Partners.tsx
- [x] pages/Jobs.tsx
- [x] pages/JobDetail.tsx
- [x] pages/StoryDetail.tsx
- [x] pages/About.tsx
- [x] pages/Stories.tsx
- [x] pages/ArticleDetail.tsx
- [x] pages/Podcast.tsx
- [x] pages/WebinarDetail.tsx
- [x] pages/Contact.tsx
- [x] pages/Resources.tsx

**Documentation (modified):**
- [x] docs/design-system/tokens.md

## Change Log

| Date | Change | Author |
|------|--------|--------|
| 2026-01-13 | Story created from audit identifying 858 primitive color occurrences | Claude (opencode) |
| 2026-01-13 | Completed all 5 tasks - migrated ~638 occurrences to semantic tokens | Claude (opencode) |
| 2026-01-13 | Code review: Fixed visual regression (Navbar dropdown icons missing light backgrounds) | Claude (opencode) |
| 2026-01-13 | Code review: Fixed 10 occurrences of non-existent semantic-*-light tokens | Claude (opencode) |
| 2026-01-13 | Story marked done - created follow-up story 1-7 for token strategy review | Claude (opencode) |

## Senior Developer Review (AI)

**Review Date:** 2026-01-13
**Reviewer:** Claude (opencode)

### Review Outcome: Approved with fixes applied

### Findings Summary

| # | Severity | Description | Status |
|---|----------|-------------|--------|
| 1 | HIGH | Navbar dropdown icons missing light backgrounds (`bg-ocobo-*/10` → `bg-ocobo-*-light`) | [x] Fixed |
| 2 | HIGH | Non-existent tokens used (`semantic-success-light`, `semantic-info-light`, `semantic-accent-light`) | [x] Fixed |
| 3 | MEDIUM | Badge backgrounds using `/10` opacity instead of `-light` variants | [x] Fixed |
| 4 | LOW | Token strategy incomplete - only `semantic-primary-light` exists, not other `-light` variants | Deferred to story 1-7 |

### Architectural Observations

La stratégie actuelle de tokens de couleur présente des incohérences :
- Seul `semantic-primary-light` existe comme token sémantique light
- Les autres couleurs light (`success`, `info`, `accent`) n'ont pas d'équivalent sémantique
- Cela force l'utilisation de primitives (`bg-ocobo-mint-light`) pour les light variants non-primary
- Une phase d'analyse est nécessaire pour définir une stratégie cohérente

**Recommandation:** Créer story 1-7 (optionnelle) pour revoir la stratégie complète des tokens de couleur.
