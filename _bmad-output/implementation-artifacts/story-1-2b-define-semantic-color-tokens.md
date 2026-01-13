# Story 1.2b: Define Semantic Color Tokens

Status: done

## Story

As an **AI Agent**,
I want semantic color tokens that reference primitive tokens,
so that I can use intention-based classes like `bg-semantic-primary`, `text-semantic-muted`, `border-semantic-border` instead of hardcoded color names.

## Acceptance Criteria

1. Semantic tokens are defined in `tailwind.config.js` under `theme.extend.colors.semantic`
2. All 10 semantic tokens from the spec are available:
   - `primary` → `ocobo.yellow.DEFAULT`
   - `primary-light` → `ocobo.yellow.light`
   - `accent` → `ocobo.coral.DEFAULT`
   - `success` → `ocobo.mint.DEFAULT`
   - `info` → `ocobo.sky.DEFAULT`
   - `surface` → `ocobo.gray.50`
   - `background` → `ocobo.white`
   - `text` → `ocobo.dark`
   - `text-muted` → `ocobo.gray.600`
   - `border` → `ocobo.gray.200`
3. Tailwind classes work correctly: `bg-semantic-primary`, `text-semantic-text`, `border-semantic-border`
4. CSS custom properties are generated for runtime flexibility
5. `docs/design-system/tokens.md` includes semantic token mapping table
6. Build passes with no errors (`npm run build`)

## Tasks / Subtasks

- [x] Task 1: Add semantic color tokens to tailwind.config.js (AC: #1, #2, #3)
  - [x] 1.1 Create `semantic` object under `theme.extend.colors`
  - [x] 1.2 Define all 10 semantic tokens referencing primitive values
  - [x] 1.3 Verify classes generate correctly with `npm run dev`

- [x] Task 2: Configure CSS custom properties (AC: #4)
  - [x] 2.1 Add CSS variables in `index.css` or via Tailwind plugin
  - [x] 2.2 Map `--color-semantic-*` to primitive values
  - [x] 2.3 Test that changing a primitive updates semantic references

- [x] Task 3: Update tokens documentation (AC: #5)
  - [x] 3.1 Add "Semantic Tokens" section to `docs/design-system/tokens.md`
  - [x] 3.2 Include mapping table (token → reference → class)
  - [x] 3.3 Document usage guidelines (when to use semantic vs primitive)

- [x] Task 4: Validate build (AC: #6)
  - [x] 4.1 Run `npm run build` and verify no errors
  - [x] 4.2 Test semantic classes in browser dev tools

### Review Follow-ups (AI)

- [x] [AI-Review][MEDIUM] Refactor to eliminate hex value duplication between tailwind.config.js and index.css - consider single source of truth [tailwind.config.js:17-47, index.css:12-32]
- [x] [AI-Review][MEDIUM] Add automated test to validate primitive→semantic reference chain works correctly [story task 2.3]
- [x] [AI-Review][MEDIUM] Review naming consistency for primitive tokens (yellow-light vs gray-50 pattern) [docs/design-system/tokens.md]
- [x] [AI-Review][LOW] Consider moving Border Radius, Shadows, Typography sections to their respective story docs (1.3, 1.4) [docs/design-system/tokens.md:137-184]
- [x] [AI-Review][LOW] Dark mode example in docs is untested - add note or implementation [docs/design-system/tokens.md:126-133]
- [x] [AI-Review][LOW] Improve comment on line 49 to reference "Option B from spec" [tailwind.config.js:49]

## Dev Notes

### Implementation Approach

Two options for referencing primitives in semantic tokens:

**Option A: Direct hex values (simple)**
```js
semantic: {
  primary: '#F1CF25',  // duplicates ocobo.yellow.DEFAULT
  text: '#212323',     // duplicates ocobo.dark
}
```
- Pros: Simple, works immediately
- Cons: No true reference, values duplicated

**Option B: CSS custom properties (recommended)**
```css
/* index.css */
:root {
  --color-ocobo-yellow: #F1CF25;
  --color-semantic-primary: var(--color-ocobo-yellow);
}
```
```js
// tailwind.config.js
semantic: {
  primary: 'var(--color-semantic-primary)',
}
```
- Pros: True reference, runtime theming possible
- Cons: Slightly more complex setup

**Recommendation:** Start with Option A for MVP, refactor to Option B if theming needed.

### Project Structure Notes

- File to modify: `tailwind.config.js` (line 15-48, colors section)
- File to modify: `docs/design-system/tokens.md` (create if not exists)
- No changes to existing components required (this is foundation work)

### Tailwind Class Ordering Convention

Per architecture: Layout → Spacing → Appearance → States → Animation

### References

- [Source: _bmad-output/analysis/design-system-spec.md#1.1 Couleurs - Sémantiques]
- [Source: _bmad-output/planning-artifacts/epics.md#Story 1.2b]
- [Source: _bmad-output/planning-artifacts/architecture.md] for naming conventions

## Dev Agent Record

### Agent Model Used

Claude Opus 4.5 (claude-opus-4-5-20251101)

### Debug Log References

- Build output verified: 65.62 kB CSS generated
- Semantic tokens confirmed in dist/assets/index-*.css via grep

### Completion Notes List

- Implemented Option B (CSS custom properties) for true reference chain
- Added 22 primitive CSS variables in index.css (:root)
- Added 10 semantic CSS variables referencing primitives
- Semantic tokens in tailwind.config.js use `var(--color-semantic-*)` for runtime flexibility
- Created comprehensive tokens documentation with mapping tables and usage guidelines
- All 10 semantic tokens verified in generated CSS: primary, primary-light, accent, success, info, surface, background, text, text-muted, border
- Build passes with no errors

**Code Review Follow-up Session (2026-01-13):**
- Resolved review finding [MEDIUM]: Refactored tailwind.config.js to reference CSS variables instead of hardcoded hex values - single source of truth now in index.css
- Resolved review finding [MEDIUM]: Added automated test suite (35 tests) in tests/design-tokens.test.ts validating primitive→semantic reference chain
- Resolved review finding [MEDIUM]: Documented naming conventions for primitive tokens (brand colors vs gray scale) in tokens.md
- Resolved review finding [LOW]: Added clarifying note for out-of-scope token sections in documentation
- Resolved review finding [LOW]: Added status note and implementation guide for dark mode example
- Resolved review finding [LOW]: Updated tailwind.config.js comment to reference "Option B from spec"
- All 35 tests pass, build succeeds (60.85 kB CSS)

### File List

- [x] tailwind.config.js (modified: refactored primitive colors to reference CSS variables, updated comments)
- [x] index.css (modified: added CSS custom properties for primitives and semantics)
- [x] docs/design-system/tokens.md (modified: added naming conventions, clarified dark mode status, added note for additional tokens)
- [x] tests/design-tokens.test.ts (created: 35 automated tests for token reference chain)
- [x] vite.config.ts (modified: added Vitest configuration)
- [x] package.json (modified: added test scripts and Vitest dependencies)

## Senior Developer Review (AI)

**Review Date:** 2026-01-13
**Reviewer:** Claude Opus 4.5 (Adversarial Code Review)
**Review Outcome:** Changes Requested

### Summary

All 6 Acceptance Criteria are fully implemented and verified. The implementation follows Option B (CSS custom properties) which enables runtime theming. However, 6 issues were identified for future improvement.

### Action Items

| # | Severity | Description | Status |
|---|----------|-------------|--------|
| 1 | MEDIUM | Hex value duplication between tailwind.config.js and index.css | [x] |
| 2 | MEDIUM | No automated test for primitive→semantic reference chain | [x] |
| 3 | MEDIUM | Naming inconsistency in primitive tokens (yellow-light vs gray-50) | [x] |
| 4 | LOW | Documentation includes out-of-scope tokens (radius, shadows, typography) | [x] |
| 5 | LOW | Dark mode example untested | [x] |
| 6 | LOW | Comment on line 49 could reference "Option B from spec" | [x] |

### Verdict

**Approve with reservations** - All ACs met, but MEDIUM issues should be addressed before marking as done. Story moved to in-progress for follow-up work.

## Change Log

| Date | Change | Author |
|------|--------|--------|
| 2026-01-13 | Initial implementation - all 4 tasks completed, all ACs satisfied | Claude Opus 4.5 |
| 2026-01-13 | Code review conducted - 6 issues identified (3 MEDIUM, 3 LOW) | Claude Opus 4.5 |
| 2026-01-13 | Addressed code review findings - 6 items resolved: refactored hex duplication, added 35 automated tests, documented naming conventions, clarified dark mode status | Claude (opencode) |
